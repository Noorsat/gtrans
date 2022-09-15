import Head from 'next/head'

import {Button, Input, Modal, notification, Table} from 'antd'
import { useState,useEffect } from 'react';
import { getOrders } from '../http/orders';
import moment from 'moment'
import {createRequest} from '../http/request';
import InputMask from 'react-input-mask';
import styles from './../styles/Home.module.css';

export default function Home() {
  const [orders, setOrders] = useState();
  const [requestModal, setRequestModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState();
  const [request, setRequest] = useState();
 
  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.data)
    })
  }, [])

  const openRequestHandler = (item) => {
    setSelectedOrderId(item?._id)
    setRequestModal(true)
  }

  const requestCreateHandler = () => {
    const body = {...request, orderID: selectedOrderId}
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
      title:"Преодложить цену",
      dataIndex: 'request',
      key: 'request',
      render: (e, item) => <Button type='primary' onClick={() => openRequestHandler(item)}>Преодложить цену</Button>
    },
  ]
  
  return ( 
        <div>
          <Table dataSource={orders} columns={columns} />
          <Modal title="Преодложить цену" open={requestModal}
            footer={[
              <Button onClick={() => setRequestModal(false)}>
                Назад
              </Button>,
              <Button type='primary' onClick={requestCreateHandler}>
                Оставить заявку
              </Button>
            ]}
          >
            <Input placeholder='Компания' className='mb-3' onChange={(e) => setRequest({...request, company: e.target.value})}/>
            <InputMask mask="+7 (999) 999-99-99" className={`mb-3 w-100 ${styles.phone__input}`} onChange={(e) => setRequest({...request, phoneNumber: e.target.value})} placeholder="Контакты (номер телефона)"/>
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
