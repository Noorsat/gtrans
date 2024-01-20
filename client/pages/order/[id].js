import { style } from '@mui/system';
import React, { useEffect, useState } from 'react';
import styles from './../../styles/Order.module.css';
import Router, {useRouter} from 'next/router';
// import { changeTrackCode, getOrderById } from '../../http/orders';
import { getUserById } from '../../http/auth';
import { getMarketplaceRequestsByOrderId, getMarketplaceByOrderId } from '../../http/marketplace'
import moment from 'moment';
import {Modal, Input, notification, message, Spin, Table} from 'antd';
import Link from 'next/link';
import axios from 'axios';
import { AiFillPhone } from "react-icons/ai";

const Order = () => {
    const [order, setOrder] = useState();
    const [requests, setRequests] = useState([])
    const [owner, setOwner] = useState();
    const [modal, setModal] = useState(false);
    const [trackcodeValue, setTrackcodeValue] = useState();
    const [isLoading, setIsLoading] = useState();

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
                        const ownerResponse = await getUserById(orderResponse.data.data.userId);
                        setOwner(ownerResponse.data);
                    }
    
                    if (requestsResponse.status === 200) {
                        const requestsData = requestsResponse.data.data;
    
                        const requestsPromises = requestsData.map(async (el) => {
                            const userResponse = await getUserById(el.userId);
                            return {
                                ...el,
                                phoneNumber: userResponse.data.phoneNumber,
                                name: userResponse.data.name
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
                    <div className={styles.order__requests}>
                    <div className={styles.order__title}>
                        Заказ
                    </div>
                    <div className={styles.request}>
                        <div className={styles.request__items}>
                            <div className={styles.request__item}>
                                <div className={styles.request__item_title}>
                                    Откуда
                                </div>
                                <div className={styles.request__item_value}>
                                     {order?.from}
                                </div>
                            </div>
                            <div className={styles.request__item}>
                                <div className={styles.request__item_title}>
                                     Куда
                                </div>
                                <div className={styles.request__item_value}>
                                    {order?.to}
                                </div>
                            </div>
                            <div className={styles.request__item}>
                                <div className={styles.request__item_title}>
                                    Количество
                                </div>
                                <div className={styles.request__item_value}>
                                    {order?.count}
                                </div>
                            </div>
                        </div>
                        <div className={styles.request__items}>
                        <div className={styles.request__item}>
                            <div className={styles.request__item_title}>
                            Длина (см)
                            </div>
                            <div className={styles.request__item_value}>
                            {order?.length}
                            </div>
                        </div>
                        <div className={styles.request__item}>
                            <div className={styles.request__item_title}>
                            Ширина (см)
                            </div>
                            <div className={styles.request__item_value}>
                            {order?.width}
                            </div>
                        </div>
                        <div className={styles.request__item}>
                            <div className={styles.request__item_title}>
                            Высота (см)
                            </div>
                            <div className={styles.request__item_value}>
                            {order?.height}
                            </div>
                        </div>
                        </div>
                        <div className={styles.request__items}>
                        <div className={styles.request__item}>
                            <div className={styles.request__item_title}>
                            Общий Объем
                            </div>
                            <div className={styles.request__item_value}>
                            {order?.totalVolume} (м3)
                            </div>
                        </div>
                        <div className={styles.request__item}>
                            <div className={styles.request__item_title}>
                            Общий Вес (кг)
                            </div>
                            <div className={styles.request__item_value}>
                            {order?.totalWeight}
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>
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

                <div className={styles.tracking__link}>
                    {
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
                    }
                </div>
            </div>
        </div>
    )
}

export default Order;