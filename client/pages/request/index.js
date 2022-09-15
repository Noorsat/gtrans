import { Button, DatePicker, Form, Input, Select, Table, notification} from 'antd';
import {useState, useEffect} from 'react';
import {createOrder, getOrders} from './../../http/orders';
import {styles} from './../../styles/Request.module.css';
import moment from 'moment';


const Request = () => {
    const { Option } = Select;

    const [order, setOrder] = useState();
    const [orders, setOrders] = useState();

    useEffect(() => {
        getOrders().then((res) => {
            setOrders(res.data)
        })
    }, [])

    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };

      const createOrderHandler = () => {
        createOrder(order).then((res) => {
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
        },
        {
          title:"Перевозчик",
          dataIndex: 'company',
          key: 'company',
        },
      ]

    return (
        <div>
            <div className="mt-5 text-center">
                <h4>Заказать доставку</h4>
            </div>
            <Form className='w-50 ms-auto me-auto'>
                <div className='d-flex gap-3 mb-3'>
                <Select
                    showSearch
                    className='w-100'
                    placeholder="Откуда"
                    onChange={(e) => setOrder({...order, pointA: e})}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="Nur-Sultan">Nur-Sultan</Option>
                    <Option value="Almaty">Almaty</Option>
                </Select>
                <Select
                    showSearch
                    className='w-100'
                    placeholder="Куда"
                    onChange={(e) => setOrder({...order, pointB: e})}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="Nur-Sultan">Nur-Sultan</Option>
                    <Option value="Almaty">Almaty</Option>
                </Select>
                </div>
                <div className='mb-3'>
                    <Select
                        showSearch
                        className='w-100'
                        placeholder="Наименование груза"
                        onChange={(e) => setOrder({...order, type: e})}
                        onSearch={onSearch}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                        <Option value="Nur-Sultan">Nur-Sultan</Option>
                        <Option value="Almaty">Almaty</Option>
                    </Select>
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
                (order?.pointA && order?.pointB && !order?.type) && <Table dataSource={orders?.filter(item => item.pointA === order?.pointA && item.pointB === order?.pointB)} columns={columns} className="w-75 ms-auto me-auto mt-4" pagination={false}/>
            }
                {
                (order?.pointA && order?.pointB && order?.type) && <Table dataSource={orders?.filter(item => item.pointA === order?.pointA && item.pointB === order?.pointB && item?.type == order?.type)} columns={columns} className="w-75 ms-auto me-auto mt-4" pagination={false}/>
            }
        </div>
    )
}

export default Request;
