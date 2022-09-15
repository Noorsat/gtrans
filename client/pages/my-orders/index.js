import { Table, Button, Modal, Input } from 'antd';
import {useState, useEffect} from 'react';
import { acceptRequest, getOrders } from '../../http/orders';
import moment from 'moment'
import { getRequests } from '../../http/request';

const MyOrders = ( ) => {
    const [orders, setOrders] = useState()
    const [orderId, setOrderId] = useState();
    const [selectedOrder, setSelectedOrder] = useState();

    const [requests, setRequests] = useState();

    useEffect(() => {
        getOrders().then((res) => {
            setOrders(res.data)
        })
        getRequests().then((res) => {
            setRequests(res.data);
        })
    }, [])
    
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

    const requestAcceptHandler = (item) => {
      const body = {
        acceptedRequest: {
          company: item?.company,
          price: item?.price,
          comment: item?.comment,
          requestId: item?._id         
        }
      }
      acceptRequest(body, orderId).then((res) => {
        getOrders().then((res) => {
          setOrders(res.data)
        })
        getRequests().then((res) => {
            setRequests(res.data);
        })
        setIsModalOpen(false)
      })
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
          title:"Дата перевозки",
          dataIndex: 'transportDate',
          key: 'transportDate',
          render: (e, item) => moment(e).format("DD.MM.YYYY")
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
          render: (e, item) => <Button type='primary' onClick={() => showModal(item)}>Посмотреть заявки</Button>
        },
      ]

      const requestColumns = [
        {
            title:"Компания",
            dataIndex: 'company',
            key: 'company',
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
            title:"Принять заявку",
            dataIndex: 'acceptRequest',
            key: 'acceptRequest',
            render: (e, item) => selectedOrder?.acceptedRequest?.requestId === item?._id ? <Button type='primary'>Связаться</Button> : <Button type='primary' onClick={() => requestAcceptHandler(item)}>Принять заявку</Button>
        },

      ]
    return (
        <div>
            <Table dataSource={orders} columns={columns}  title={() => `Мой заказы`} />
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