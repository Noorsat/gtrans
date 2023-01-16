import { Button, DatePicker, Form, Input, Select, Table, notification} from 'antd';
import {useState, useEffect} from 'react';
import {createOrder, getOrders} from './../../http/orders';
import styles from './../../styles/Request.module.css';
import moment from 'moment';
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router';


const Request = () => {
    const { Option } = Select;
    const router = useRouter();

    const [order, setOrder] = useState({
      len:"",
      width:"",
      height:""
    });
    const [user, setUser] = useState();
    const [orders, setOrders] = useState();
    const [price, setPrice] = useState();

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
      };

      const createOrderHandler = () => {
        const body = {...order, accountId : user?._id, type: order?.name}
        createOrder(body).then((res) => {
          if (res?.status === 201){
            notification["success"]({
              message:'Ваш заказ создан',
            })
            setOrder({})
            router.push("/")
          }
        })
     }

     useEffect(() => {
          const density = Number(order?.weight) / (Number(order?.len) * Number(order?.width) * Number(order?.height))
          console.log(density)
          if (density && order.weight > 100){
          if (order?.type === "first"){
                if (density > 100 && density <= 110){
                  setPrice(4.3 * Number(order?.weight))
                }else if (density > 110 && density <= 120){
                  setPrice(4.2 * Number(order?.weight)) 
                }else if (density > 120 && density <= 130){
                  setPrice(4.1 * Number(order?.weight))
                }else if (density > 130 && density <= 140){
                  setPrice(4 * Number(order?.weight))
                }else if (density > 140 && density <= 150){
                  setPrice(3.9 * Number(order?.weight));
                }else if (density > 150 && density <= 160){
                  setPrice(3.8 * Number(order?.weight))
                }else if(density > 160 && density <= 170){
                  setPrice(3.7 * Number(order?.weight))
                }else if(density > 170 && density <= 180){
                  setPrice(3.6 * Number(order?.weight))
                }else if(density > 180 && density <= 190){
                  setPrice(3.5 * Number(order?.weight))
                }else if(density > 190 && density <= 200){
                  setPrice(3.4 * Number(order?.weight))
                }else if (density > 200 && density <= 250){
                  setPrice(3.3 * Number(order?.weight))
                }else if (density > 250 && density <= 300){
                  setPrice(3.2 * Number(order?.weight))
                }else if (density > 300 && density <= 350){
                  setPrice(3.1 * Number(order?.weight))
                }else if (density > 350 && density <= 400){
                  setPrice(3 * Number(order?.weight))
                }else if (density > 400 && density <= 600){
                  setPrice(2.9 * Number(order?.weight))
                }else if (density > 600 && density <= 800){
                  setPrice(2.8 * Number(order?.weight))
                }else if (density > 800 && density <= 1000){
                  setPrice(2.7 * Number(order?.weight))
                }else if (density > 1000){
                  setPrice(2.6 * Number(order?.weight))
                }
          }else if(order?.type === "second"){
           if (density > 100 && density <= 110){
              setPrice(5.5 * Number(order?.weight))
            }else if (density > 110 && density <= 120){
              setPrice(5.4 * Number(order?.weight)) 
            }else if (density > 120 && density <= 130){
              setPrice(5.3 * Number(order?.weight))
            }else if (density > 130 && density <= 140){
              setPrice(5.2 * Number(order?.weight))
            }else if (density > 140 && density <= 150){
              setPrice(5.1 * Number(order?.weight));
            }else if (density > 150 && density <= 160){
              setPrice(5 * Number(order?.weight))
            }else if(density > 160 && density <= 170){
              setPrice(4.9 * Number(order?.weight))
            }else if(density > 170 && density <= 180){
              setPrice(4.8 * Number(order?.weight))
            }else if(density > 180 && density <= 190){
              setPrice(4.7 * Number(order?.weight))
            }else if(density > 190 && density <= 200){
              setPrice(4.6 * Number(order?.weight))
            }else if (density > 200 && density <= 250){
              setPrice(4.5 * Number(order?.weight))
            }else if (density > 250 && density <= 300){
              setPrice(4.4 * Number(order?.weight))
            }else if (density > 300 && density <= 350){
              setPrice(4.3 * Number(order?.weight))
            }else if (density > 350 && density <= 400){
              setPrice(4.2 * Number(order?.weight))
            }else if (density > 400 && density <= 600){
              setPrice(4.1 * Number(order?.weight))
            }else if (density > 600 && density <= 800){
              setPrice(4.1 * Number(order?.weight))
            }else if (density > 800 && density <= 1000){
              setPrice(4.1 * Number(order?.weight))
            }else if (density > 1000){
              setPrice(4.1 * Number(order?.weight))
            }
          }
        }else if (order?.weight > 20 && order?.weight <= 100){
          const cup = (Number(order?.len) * Number(order?.width) * Number(order?.height))
          if (order?.type === "first"){
            setPrice(cup* 490)
          }else if (order?.type === "second"){
            setPrice(cup*580)
          }
        }
      }
     , [order?.height, order?.len, order?.width, order?.weight, order?.type])

     const weightHandler = (value) => {
      setOrder({...order, weight:value});
      if (value <= 20){
        setPrice(Number(value)*7)
      }else{
        if (order.len == "" || order.width  == "" || order.height == ""){
          notification["info"]({
            message:'Вам надо написать длину, ширину, высоту',
          })
        }
      }
    };

     const typeHandler = (e, label) => {
      setOrder({...order, type: e, name: label.label});
     }

     const getPrice = (price) => {
      if (order?.weight > 20 && order?.type.length > 0 && (order.len == "" || order.width  == "" || order.height == "")){
        return "Заполните все поля"
      }else{
        return price + " $"
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
          title:'Комментарии',
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
                <h4>Ввести заказ</h4>
            </div>
            <Form className='w-md-50  w-75 ms-auto me-auto'>
                <div className='d-flex gap-3 mb-3'>
                  {/* <Input
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
                  /> */}
                </div>
                  <div className='mb-3'>
                    {/* <Input
                        className='w-100'
                        placeholder="Наименование груза"
                        onChange={(e) => setOrder({...order, type: e.target.value})}
                        value={order?.type}
                    /> */}
                    <Select placeholder="Наименование груза" className='w-100' style={{width:"100%"}}
                      onChange={(e, label) => typeHandler(e, label)}
                      options={
                        [
                          {
                            label:"Хоз товары",
                            value:"first"
                          },
                          {
                            label:"Одежда и обувь",
                            value:"second"
                          }
                        ]
                      }
                    >
                    </Select>
                </div>
                <div className='d-block gap-3 mb-3 d-md-flex'>
                    <Input placeholder='Вес (кг)' className='w-100 mb-3 mb-md-0' onChange={(e) => weightHandler(e.target.value)} />
                    {
                      order?.weight > 20 &&
                      <>
                        <Input placeholder='Длина (м)' className='w-100  mb-3 mb-md-0' onChange={(e) => setOrder({...order, len: e.target.value.replace(",",".")})} value={order?.len}/>
                        <Input placeholder='Ширина (м)' className='w-100  mb-3 mb-md-0' onChange={(e) => setOrder({...order, width: e.target.value.replace(",",".")})} value={order?.width}/>
                        <Input placeholder='Высота (м)' className='w-100  mb-3 mb-md-0' onChange={(e) => setOrder({...order, height: e.target.value.replace(",",".")})} value={order?.height}/>
                      </>
                    }
                </div>
                <Input placeholder='Комментарии' className='w-100 mb-3' onChange={(e) => setOrder({...order, count: e.target.value})} />
                {
                  price > 0 &&
                  <div className={styles.price}>
                    Цена: <span>{getPrice(price)}</span>
                  </div>
                }
                <Button type='primary' className='w-100' onClick={createOrderHandler} disabled={order?.weight <= 20 ? !order?.type || !order?.weight : !order?.type || !order?.weight || !order?.len || !order?.width || !order?.height}>Ввести заказ</Button>
            </Form>
{/*        
            <h4 className={`text-center mt-3 styles.orders__done}`} style={{color:"gold"}}>Выполненные заказы</h4>
            {
              (order?.pointA && order?.pointB && !order?.type) && <Table dataSource={orders?.filter(item => item.pointA === order?.pointA && item.pointB === order?.pointB)?.filter(item => item?.acceptedRequest?.some(i => i.status === 3))} columns={columns} className="w-75 ms-auto me-auto mt-4" pagination={false}/>
            }
            {
              (order?.pointA && order?.pointB && order?.type) && <Table dataSource={orders?.filter(item => item.pointA === order?.pointA && item.pointB === order?.pointB && item?.type == order?.type)?.filter(item => item?.acceptedRequest?.some(i => i.status === 3))} columns={columns} className="w-75 ms-auto me-auto mt-4" pagination={false}/>
            } */}
        </div>
    )
}

export default Request;
