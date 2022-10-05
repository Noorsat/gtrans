import Head from 'next/head'

import {Button, Input, Modal, notification, Table} from 'antd'
import { useState,useEffect } from 'react';
import { getOrders } from '../http/orders';
import moment from 'moment'
import {createRequest} from '../http/request';
import InputMask from 'react-input-mask';
import styles from './../styles/Home.module.css';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode'

export default function Home() {
  const [orders, setOrders] = useState();
  const [requestModal, setRequestModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState();
  const [request, setRequest] = useState();
  const [user, setUser] = useState();
  const router = useRouter();
 
  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.data)
    })
    const user = JSON.parse(localStorage.getItem("user"))
    if (user){
        var decoded = jwt_decode(user?.token);
        setUser(decoded);
    }
  }, [])

  const openRequestHandler = (item) => {
    if (user){
      setSelectedOrderId(item?._id)
      setRequestModal(true)
    }else{
      router.push("/login")
    }
  }

  const requestCreateHandler = () => {
    const body = {...request, orderID: selectedOrderId, company: user?.companyName, phoneNumber: user?.phoneNumber}
    createRequest(body).then((res) => {
      if (res?.status === 201){
        setRequestModal(false)
        setSelectedOrderId(0);
        notification["success"]({
          message:'Ваша заявка создана',
        })
      }
    }) 
  }

  const columns = [
    {
      title:"ID",
      dataIndex: '_id',
      key: '_id',
      width:10
    },
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
      title:"Комментарии",
      dataIndex: 'count',
      key: 'count',
    },
    {
      title:"Предложить цену",
      dataIndex: 'request',
      key: 'request',
      render: (e, item) => <Button type='primary' onClick={() => openRequestHandler(item)}>Предложить цену</Button>
    },
  ]

  return ( 
        <div>
          <Table dataSource={orders} columns={columns} scroll={{x:800}} title={() => "Все заказы"} className="border-top border-md-none" />
          <Modal title="Предложить цену" open={requestModal} onCancel={() => setRequestModal(false)}
            footer={[
              <Button onClick={() => setRequestModal(false)}>
                Назад
              </Button>,
              <Button type='primary' onClick={requestCreateHandler}>
                Оставить заявку
              </Button>
            ]}
          >
            <Input placeholder='Компания' className='mb-3' value={user?.companyName} disabled/>
            <Input className={`mb-3 w-100 ${styles.phone__input}`} value={user?.phoneNumber} disabled/>
            <div className='d-flex align-items-center mb-3 gap-2'>
              <Input placeholder='Цена'  onChange={(e) => setRequest({...request, price: e.target.value})}/>
              <div>
                ₸
              </div>
            </div>
            <Input placeholder='Комментарии' onChange={(e) => setRequest({...request, comment: e.target.value})}/>
          </Modal>
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
  )
}
