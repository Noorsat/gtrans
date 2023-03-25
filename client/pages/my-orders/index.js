import { Table, Button, Modal, Input, notification } from 'antd';
import {useState, useEffect} from 'react';
import { acceptRequest, addTrackerCode, changeStatusRequest, getOrders, getOrdersByAccountId } from '../../http/orders';
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
    const [orderIndividualCode, setOrderIndividualCode] = useState();
    const [selectedOrder, setSelectedOrder] = useState();
    const [user, setUser] = useState()
    const [trackerCodeModal, setTrackerCodeModal] = useState();
    const  [trackerInput, setTrackerInput] = useState();

    const router = useRouter()

    const [requests, setRequests] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            var decoded = jwt_decode(user?.token);
            const id = decoded?._id
            getOrdersByAccountId(id).then((res) => {
              // let repeatedOrders = [];
              // let newOrders = res.data.map((order, index) => {
              //   if (!repeatedOrders.includes(order?.individualCode)){
              //     order.rowSpan = res.data.filter((item, i) => item?.individualCode === order?.individualCode).length;
              //   }
              //   repeatedOrders.push(order?.individualCode);
              //   return order;
              // })
              setOrders(res.data)
            })
            // getRequests().then((res) => {
            //     setRequests(res.data);
            // })
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (item) => {
      setIsModalOpen(true);
      setSelectedOrder(item);
      setOrderId(item?._id)
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
      const body = {
        trackCode: trackerInput,
        individualCode: orderIndividualCode,
      }
      addTrackerCode(body).then((res) => {
        if (res?.status < 400){
          setTrackerInput("");
          setOrderId(0);
          notification["success"]({
            message:"Вы успешно добавили трекер код"
          })
          router.push({
            pathname: "/tracking", 
            query: {
              trackCode:trackerInput
            }
          })
          setTrackerInput("");
        }
      })
    };
  
    const handleCancel = () => {
      //setIsModalOpen(false);
      setTrackerCodeModal(false)
    };

    const requestAcceptHandler = (item, status, id) => {
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
9
    const trackerModalOpenHandler = (item) => {
      setOrderId(item._id);
      setOrderIndividualCode(item?.individualCode);
      setTrackerCodeModal(true);
    }

    const openOrderDetail = (id) => {
      router.push("/order/"+id)      
    }

    const columns = [
        {
          title:"Наименование груза",
          dataIndex: 'type',
          key: 'type',
        },
        {
          title:"Вес одной коробки (кг)",
          dataIndex: 'weight',
          key: 'weight',
        },
        {
          title:"Длина (м3)",
          dataIndex: 'len',
          key: 'len',
        },
        {
          title:"Ширина (м3)",
          dataIndex: 'width',
          key: 'width',
        },
        {
          title:"Высота (м3)",
          dataIndex: 'height',
          key: 'height',
        },
        {
          title:"Количество",
          dataIndex:"count",
          key:"count"
        },
        {
          title:"Комментарии",
          dataIndex: 'comment',
          key: 'comment',
        },
        {
          title:"Инд код",
          dataIndex: 'individualCode',
          key: 'individualCode',
          onCell: (_, index) => ({
            rowSpan: _.rowSpan ? _.rowSpan : 0
          })
        },
        {
          title:'Цена',
          dataIndex:'price',
          key:'price',
          onCell: (_, index) => ({
            rowSpan: _.rowSpan ? _.rowSpan : 0
          }),
          render: (e, item) => (
            <>{item.price}$</>
          )  
        },
        {
          title:'Трекинг',
          dataIndex:'request',
          key:'request',
          onCell: (_, index) => ({
            rowSpan: _.rowSpan ? _.rowSpan : 0
          }),
          render: (e, item) => (
                <Button
                  className={styles.trackCode} 
                  onClick={() => router.push({
                  pathname: "/tracking", 
                  query: {
                    trackCode:item.individualCode
                  }
                  })}
                  type="primary"
                  >Отследовать заказ</Button>
          )
        }
        // {
        //   title:"Трек код",
        //   dataIndex: 'request',
        //   key: 'request',
        //   onCell: (_, index) => ({
        //     rowSpan: _.rowSpan ? _.rowSpan : 0
        //   }),
        //   // render: (e, item) => item?.acceptedRequest?.filter(i => i.status === 4).length > 0 ? <div>Спасибо!</div> : item?.acceptedRequest?.filter(i => i.status === 3).length > 0 ? 
        //   // <div className='text-center'>
        //   //   Оцените перевозчика
        //   //   <div className='d-flex justify-content-center gap-3'>
        //   //     <div>
        //   //       <AiFillLike size={30} className={styles.like} onClick={() => likeHandler(item)} />
        //   //     </div>
        //   //     <div>
        //   //       <AiFillDislike size={30} className={styles.unlike} onClick={() => unlikeHandler(item)} />
        //   //     </div>
        //   //   </div>  
        //   // </div> 
        //   // :
        //   // <Button type='primary' onClick={() => showModal(item)}>Посмотреть заявки</Button>
        //   render: (e, item) => {
        //     return (
        //         item?.trackCode ? 
        //           <div
        //             className={styles.trackCode} 
        //             onClick={() => router.push({
        //             pathname: "/tracking", 
        //             query: {
        //               trackCode:item.trackCode
        //             }
        //           })}>{item.trackCode}</div>
        //         :
        //       <div>
        //         <Button type='primary' onClick={() => trackerModalOpenHandler(item)}>Указать трек код</Button>
        //       </div>
        //     )            
        //   }
        // },
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
        <div className={styles.my__orders}>
          <div className='container'>
            <div className={styles.my__orders_title}>
              Мои заказы
            </div>
            <div className={styles.my__orders_items}>
              {
                orders?.filter(order => order?.accountId === user?._id).map(item => (
                  <div className={styles.my__orders_item} onClick={() => openOrderDetail(item?._id)}>
                  <div className={styles.my__orders_item_title}>
                    {item.type}
                  </div>
                  <div className={styles.my__orders_item_trackCode}>
                    Трек-код: {item.individualCode}
                  </div>
                </div> 
                ))
              }
            </div>
          </div>
            {/* <Table dataSource={orders?.filter(order => order?.accountId === user?._id)} columns={columns}  title={() => `Мои заказы`} scroll={{x:800}} pagination={false}/> */}
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
            <Modal open={trackerCodeModal} title="Указать трек код" onCancel={handleCancel}
              footer={
                [
                  <Button type='primary' onClick={handleOk}>Сохранить трек код</Button>
                ]
              }
            > 
              <Input placeholder='Трек код' value={trackerInput} onChange={(e) => setTrackerInput(e.target.value) }/>
            </Modal>
        </div>
    )   
}

export default MyOrders;