import { style } from '@mui/system';
import React, { useEffect, useState } from 'react';
import styles from './../../styles/Order.module.css';
import Router, {useRouter} from 'next/router';
import { changeTrackCode, getOrderById } from '../../http/orders';
import { getUserById } from '../../http/auth';
import { getMarketplaceByOrderId, getMarketplaceRequestsByOrderId } from '../../http/marketplace'
import moment from 'moment';
import {Modal, Input, notification, message, Spin, Table} from 'antd';
import Link from 'next/link';
import axios from 'axios';
import { AiFillPhone } from "react-icons/ai";
import RequestDetails from '../../components/RequestDetails/RequestDetails';
import { ExclamationCircleFilled } from '@ant-design/icons';

const Order = () => {
    const [order, setOrder] = useState();
    const [requests, setRequests] = useState([])
    const [owner, setOwner] = useState();
    const [modal, setModal] = useState(false);
    const [trackcodeValue, setTrackcodeValue] = useState();
    const [isLoading, setIsLoading] = useState();
    const { confirm } = Modal;

    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                setIsLoading(true);
    
                try {
                    const [orderResponse, requestsResponse] = await Promise.all([
                        getMarketplaceByOrderId(id),
                        getMarketplaceRequestsByOrderId(id)
                    ]);
    
                    if (orderResponse.status === 200) {
                        setOrder(orderResponse.data.data);
                        // const ownerResponse = await getUserById(orderResponse.data.accountId);
                        // setOwner(ownerResponse.data);
                    }
    
                    if (requestsResponse.status === 200) {
                        const requestsData = requestsResponse.data.data;
    
                        const requestsPromises = requestsData.map(async (el) => {
                            const userResponse = await getUserById(el.userId);
                            return {
                                ...el,
                                phoneNumber: userResponse.data.phoneNumber,
                                name: userResponse.data.name,
                                email: userResponse.data.email
                            };
                        });
    
                        const updatedRequests = await Promise.all(requestsPromises);
                        setRequests([...requests, ...updatedRequests]);
                    }
    
                } catch (error) {
                    console.error(error);
                } finally {
                    setIsLoading(false);
                }
            }
        };
    
        fetchData();
    }, [id]);

    console.log(order);
    const goBackHandler = () => {
        router.push("/my-orders")
    }

    const modalOpenHandler = () => {
        setModal(true)
    }
    
    const trackcodeAcceptHandler = () => {
        let body = {
            individualCode: order?.individualCode,
            trackCode: trackcodeValue
        }
        changeTrackCode(body).then((res) => {
            if (res.status === 200){
                setModal(false);
                setTrackcodeValue("");
                notification["success"](
                    {
                        message: 'Вы прикрепили трек-код к заказу'
                    }
                )
                getOrderById(id).then((res) => {
                    if (res.status === 200)
                        setOrder(res.data)
                        getUserById(res.data.accountId).then((res) => {
                            setOwner(res.data);
                        })
                    })
                }
            }
        )} 

    const showErrorTrackCode = () => {
        notification["error"]({
            message: 'Вы должны сначала указать трек код'
        })
    }

    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Почта',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Телефон',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },{
            title: 'Цена',
            dataIndex: 'priceOfDelivery',
            key: 'priceOfDelivery'
        },{
            title: 'Звонок',
            dataIndex: 'call',
            key: 'call',
            render: (text,record)=> (<a href={`tel:${record.phoneNumber}`} style={{color: '#ffad32'}}><AiFillPhone/></a>)
        }
    ]

    const showDeleteConfirm = (id) => {
        confirm({
          title: 'Вы уверены, что хотите удалить это заказ?',
          icon: <ExclamationCircleFilled />,
          content: 'После удаления вы не сможете восстановить заказ. Вы уверены?',
          okText: 'Да',
          okType: 'danger',
          cancelText: 'Нет',
          onOk() {
            // add to here http request
            console.log('removed', id);
          },
          onCancel() {},
        });
      };
  

    return (
        <div className={styles.order}>
            {
                isLoading && (
                    <div className="loading">
                        <Spin size='large' />
                    </div>
                )
            }
            <Modal open={modal} footer={[
              <button onClick={() =>  setModal(false)} className='track__button'>
                Назад
              </button>,
              <button className='track__button' onClick={trackcodeAcceptHandler}>
                Сохранить
              </button>
            ]}
            onCancel={() => setModal(false)}
            >
                <div className={styles.order__detail_item_title} style={{fontSize:16, marginBottom: 20, marginTop:20}}>
                    Укажите трек код полученный от поставщика/завода
                </div>
                <Input value={trackcodeValue} onChange={(e) => setTrackcodeValue(e.target.value)} placeholder='Укажите трек код' />
            </Modal>
            <div className='container'>
                <div className={styles.goBack} onClick={goBackHandler}>
                    ← Вернуться к заказам
                </div>
                <div className='d-md-flex d-block gap-2'>
                    <RequestDetails  details={order}/>
                    <div className={styles.order__requests}>
                        <div className={styles.order__title}>
                            Предложение
                        </div>
                        <Table  
                            columns={columns}
                            dataSource={requests}
                            bordered={true}
                            pagination={{
                                pageSize: 5,
                                
                            }} 
                        style={{width: '100%'}}/>
                    </div>
                </div>

                <div className={styles.tracking__link} onClick={ () => showDeleteConfirm(order?._id)}>
                    Удалить заказ
                    {/* {
                        !order?.trackCode ? 
                        <div onClick={showErrorTrackCode} >
                            Отследить заказ
                        </div>
                        :
                        <Link href={{
                            pathname: '/tracking',
                            query: {trackCode: order?.trackCode}
                           }}>
                            Отследить заказ
                        </Link>                    
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Order;