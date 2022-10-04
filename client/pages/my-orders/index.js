import { Table, Button, Modal, Input } from 'antd';
import {useState, useEffect} from 'react';
import { acceptRequest, changeStatusRequest, getOrders } from '../../http/orders';
import moment from 'moment'
import { getRequests } from '../../http/request';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import {AiFillLike, AiFillDislike} from 'react-icons/ai';
import styles from './../../styles/MyOrders.module.css'
import { companyPutLike, companyPutUnlike } from '../../http/auth';

const MyOrders = ( ) => {
    const [orders, setOrders] = useState()
    const [orderId, setOrderId] = useState();
    const [selectedOrder, setSelectedOrder] = useState();
    const [user, setUser] = useState()

    const router = useRouter()

    const [requests, setRequests] = useState();

    useEffect(() => {
        getOrders().then((res) => {
            setOrders(res.data)
        })
        getRequests().then((res) => {
            setRequests(res.data);
        })
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            var decoded = jwt_decode(user?.token);
            setUser(decoded);
        }else{
            router.push("/login")
        }
    }, [])

    const likeHandler = (order) => {
      companyPutLike(user?._id).then((res) => {
        requestAcceptHandler(order?.acceptedRequest.filter(item => item.status === 3)[0], 4, order._id)
      })
    }

    const unlikeHandler = (order) => {
      companyPutUnlike(user?._id).then((res) => {
        requestAcceptHandler(order?.acceptedRequest.filter(item => item.status === 3)[0], 4, order._id)
      })
    }

    console.log(orderId)
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (item) => {
      setIsModalOpen(true);
      setSelectedOrder(item);
      setOrderId(item?._id)
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const requestAcceptHandler = (item, status, id) => {
      console.log(item)
      const body = {
          company: item?.company,
          price: item?.price,
          comment: item?.comment,
          requestId: item?.requestId || item?._id,
          status:status,
      }
      if (status === 1){
        acceptRequest(body, orderId).then((res) => {
          getOrders().then((res) => {
            setOrders(res.data)
          })
          getRequests().then((res) => {
              setRequests(res.data);
          })
          setIsModalOpen(false)
        })
      }else if (status === 2 || status === 3 || status === 4){
        changeStatusRequest(body, orderId || id).then((res) => {
          getOrders().then((res) => {
            setOrders(res.data)
          })
          getRequests().then((res) => {
              setRequests(res.data);
          })
          setIsModalOpen(false)
        })
      }
    }

    const columns = [
        {
          title:"Откуда",
          dataIndex: 'pointA',
          key: 'pointA',
        },
        {
          title:"Куда",
          dataIndex: 'pointB',
          key: 'pointB',
        },
        {
          title:"Наименование груза",
          dataIndex: 'type',
          key: 'type',
        },
        {
          title:"Вес (кг)",
          dataIndex: 'weight',
          key: 'weight',
        },
        {
          title:"Объемы (м3)",
          dataIndex: 'volume',
          key: 'volume',
        },
        {
          title:"Кол-во",
          dataIndex: 'count',
          key: 'count',
        },
        {
          title:"Посмотреть заявки",
          dataIndex: 'request',
          key: 'request',
          render: (e, item) => item?.acceptedRequest?.filter(i => i.status === 4).length > 0 ? <div>Спасибо!</div> : item?.acceptedRequest?.filter(i => i.status === 3).length > 0 ? 
          <div className='text-center'>
            Оцените перевозчика
            <div className='d-flex justify-content-center gap-3'>
              <div>
                <AiFillLike size={30} className={styles.like} onClick={() => likeHandler(item)} />
              </div>
              <div>
                <AiFillDislike size={30} className={styles.unlike} onClick={() => unlikeHandler(item)} />
              </div>
            </div>  
          </div> 
          :
          <Button type='primary' onClick={() => showModal(item)}>Посмотреть заявки</Button>
        },
      ]

      const requestColumns = [
        {
            title:"Компания",
            dataIndex: 'company',
            key: 'company',
        },
        {
          title:"Контакты (номер телефона)",
          dataIndex:"phoneNumber",
          key:"phoneNumber"
        },
        {
            title:"Цена",
            dataIndex: 'price',
            key: 'price',
        },
        {
            title:"Комментарии",
            dataIndex: 'comment',
            key: 'comment',
        },
        {
            title:"Статус заказа",
            dataIndex: 'acceptRequest',
            key: 'acceptRequest',
            render: (e, item) => {
              const requestItem = selectedOrder?.acceptedRequest.filter(request => request.requestId === item?._id);
              if (requestItem.length === 0){
                return <Button type="primary" className='w-100' onClick={() => requestAcceptHandler(item, 1)}>
                Принять запрос
              </Button>; 
              }else if (selectedOrder?.acceptedRequest?.filter(request => request?.status === 3).length > 0){
                if (requestItem[0]?.status === 3){
                  return <div className='text-center'>Оцените перевозчика</div>
                }else{ 
                  switch (requestItem[0]?.status){
                    case 1: 
                      return <Button type="primary" className='w-100' onClick={() => requestAcceptHandler(item, 2)} disabled>Отправил заказ</Button>
                      break;
                    case 2: 
                      return <Button type="primary" className='w-100' onClick={() => requestAcceptHandler(item, 3)} disabled>Принял заказ</Button>
                      break;
                    default:
                      break;
                  }
                }
              }
              else{
              switch (requestItem[0]?.status){
                case 1: 
                  return <Button type="primary" className='w-100' onClick={() => requestAcceptHandler(item, 2)}>Отправил заказ</Button>
                  break;
                case 2: 
                  return <Button type="primary" className='w-100' onClick={() => requestAcceptHandler(item, 3)}>Принял заказ</Button>
                  break;
                case 3: 
                  return <div className='text-center'>Оцените перевозчика</div>
                default:
                  break;
              }
            }
            }
        },

      ]
    return (
        <div>
            <Table dataSource={orders?.filter(order => order?.accountId === user?._id)} columns={columns}  title={() => `Мой заказы`} scroll={{x:800}} />
            <Modal title="Посмотреть заявки" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
              width={850}
              footer={
                [
                  <Button onClick={() => setIsModalOpen(false)}>Назад</Button>
                ]
              }
            >
                <Table columns={requestColumns} dataSource={requests?.filter(item => item.orderID == orderId)} pagination={false} />
            </Modal>

        </div>
    )   
}

export default MyOrders;