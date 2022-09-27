import { Button, DatePicker, Form, Input, Select, Table, notification} from 'antd';
import {useState, useEffect} from 'react';
import {createOrder, getOrders} from './../../http/orders';
import {styles} from './../../styles/Request.module.css';
import moment from 'moment';
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router';


const Request = () => {
    const { Option } = Select;

    const router = useRouter();
    const [order, setOrder] = useState();
    const [user, setUser] = useState();
    const [orders, setOrders] = useState();

    useEffect(() => {
        getOrders().then((res) => {
            setOrders(res.data)
        })
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            var decoded = jwt_decode(user?.token);
            setUser(decoded);
        }else{
          router.push("/login")
        }
    }, [])
      
      const onSearch = (value) => {
        console.log('search:', value);
      };

      const createOrderHandler = () => {
        const body = {...order, accountId : user?._id}
        createOrder(body).then((res) => {
          if (res?.status === 201){
            notification["success"]({
              message:'Ваш заказ создан',
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
          title:"Цена",
          dataIndex: 'request',
          key: 'request',
          render: (e, item) => item?.acceptedRequest?.filter(request => request.status === 3)[0]?.price
        },
        {
          title:"Перевозчик",
          dataIndex: 'company',
          key: 'company',
          render: (e, item) => item?.acceptedRequest?.filter(request => request.status === 3)[0]?.company
        },
      ]
      
    return (
        <div>
            <div className="mt-5 text-center">
                <h4>Заказать доставку</h4>
            </div>
            <Form className='w-50 ms-auto me-auto'>
                <div className='d-flex gap-3 mb-3'>
                <Input
                    className='w-100'
                    placeholder="Откуда"
                    onChange={(e) => setOrder({...order, pointA: e.target.value})}
                    value={order?.pointA}
                />
                <Input
                    className='w-100'
                    placeholder="Куда"
                    onChange={(e) => setOrder({...order, pointB: e.target.value})}
                    value={order?.pointB}
                />
                </div>
                <div className='mb-3'>
                    <Input
                        className='w-100'
                        placeholder="Наименование груза"
                        onChange={(e) => setOrder({...order, type: e.target.value})}
                        value={order?.type}
                    />
                </div>
                <div className='d-flex gap-3 mb-3'>
                    <DatePicker className='w-100' onChange={(e) => setOrder({...order, transportDate: e})}/>
                    <Input placeholder='Вес (кг)' className='w-100' onChange={(e) => setOrder({...order, weight:e.target.value})}/>
                    <Input placeholder='Объемы (м3)' className='w-100' onChange={(e) => setOrder({...order, volume: e.target.value})}/>
                    <Input placeholder='Кол-во' className='w-100' onChange={(e) => setOrder({...order, count: e.target.value})}/>
                </div>
                <Button type='primary' className='w-100' onClick={createOrderHandler}>Создать заявку</Button>
            </Form>
            <h4 className={`text-center mt-3 styles.orders__done}`} style={{color:"gold"}}>Выполненные заказы</h4>
            {
              (order?.pointA && order?.pointB && !order?.type) && <Table dataSource={orders?.filter(item => item.pointA === order?.pointA && item.pointB === order?.pointB)?.filter(item => item?.acceptedRequest?.some(i => i.status === 3))} columns={columns} className="w-75 ms-auto me-auto mt-4" pagination={false}/>
            }
            {
              (order?.pointA && order?.pointB && order?.type) && <Table dataSource={orders?.filter(item => item.pointA === order?.pointA && item.pointB === order?.pointB && item?.type == order?.type)?.filter(item => item?.acceptedRequest?.some(i => i.status === 3))} columns={columns} className="w-75 ms-auto me-auto mt-4" pagination={false}/>
            }
        </div>
    )
}

export default Request;
