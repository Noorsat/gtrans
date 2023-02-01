import { Button, DatePicker, Form, Input, Select, Table, notification, Modal} from 'antd';
import {useState, useEffect} from 'react';
import {createOrder, getOrders, getOrdersByAccountId} from './../../http/orders';
import styles from './../../styles/Request.module.css';
import moment from 'moment';
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router';
import { getId } from '../../components/validation';
import {AiOutlinePlus} from 'react-icons/ai';
import { height } from '@mui/system';


const Request = () => {
    const { Option } = Select;
    const router = useRouter();

    const [order, setOrder] = useState({
      len:"",
      width:"",
      height:""
    });
    const [totalVolume, setTotalVolume] = useState();
    const [user, setUser] = useState();
    const [orders, setOrders] = useState(
      [
       {
        type:"",
        len:"",
        width:"",
        height:"",
        weight:"",
        count:"",
        comment:""
       } 
      ]
    );
    const [price, setPrice] = useState();
    const [modal, setModal] = useState(false);
    const [indCode, setIndCode] = useState();
    const [volumeModal, setVolumeModal] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            var decoded = jwt_decode(user?.token);
            setUser(decoded);
        }else{
          router.push("/login")
        }
    }, [])

      const createOrderHandler = () => {
        getOrdersByAccountId(user?._id).then((res) => {
          let code = getIndividualCode(user?.id).charAt(0);
          let count = 0;
          res.data.map(item => {
            if (item.individualCode.charAt(0) === code){
              count++;
            }
          })
          const body = orders.map(order => {
            return {...order, accountId : user?._id, type: order?.name, individualCode: getIndividualCode(user?.id)+"-"+(count+1)}
          })
    
          createOrder(body).then((res) => {
            if (res?.status === 201){
              setModal(true)
              setIndCode(getIndividualCode(user?.id)+"-"+(count+1))
              // notification["success"]({
              //   message:'Ваш заказ создан',
              // })
              // setOrder({})
              // router.push("/my-orders")
            }
          })
        }).catch((res) => {
          const body = orders.map(order => {
            return {...order, accountId : user?._id, type: order?.name, individualCode: getIndividualCode(user?.id)+"-1"}
          })
    
          createOrder(body).then((res) => {
            if (res?.status === 201){
              setModal(true)
              setIndCode(getIndividualCode(user?.id)+"-1")
              // notification["success"]({
              //   message:'Ваш заказ создан',
              // })
              // setOrder({})
              // router.push("/my-orders")
            }
          })
        })
     }
     
     const onCancel = () => {
      notification["success"]({
        message:'Ваш заказ создан',
      })
      setOrder({})
      router.push("/my-orders")
     }

     const getIndividualCode = (id) => {
      let totalWeight = orders.reduce((total, order) => {
        return total += order.count * order.weight;
      }, 0);
      if (totalWeight >= 100){
        return "H792-" + getId(id);
      }else if (totalWeight < 100){
        return "SM215-" + getId(id);
      }
     }

     useEffect(() => {
          // let totalWeight = orders?.reduce((total, order) => {
          //   return total += Number(order?.weight) * Number(order?.count)
          // }, 0)
          // let totalVolume = orders?.reduce((total, order) => {
          //   return total += Number(order?.len)*Number(order?.width)*Number(order?.height)
          // }, 0)
          let totalPrice = 0;
          orders?.map(order => {
          if (order?.weight.length > 0 && order?.len.length > 0 && order?.width.length > 0 && order?.height.length > 0){
          const density = Number(order?.weight) / (Number(order?.len) * Number(order?.width) * Number(order?.height))
          if (density && order.weight > 100){
          if (order?.type === "first"){
                if (density < 100){
                  const cup = (Number(order?.len) * Number(order?.width) * Number(order?.height))
                  totalPrice += (cup* 490)* order?.count
                }else if (density > 100 && density <= 110){
                  totalPrice += 4.3 * Number(order?.weight) * order?.count
                }else if (density > 110 && density <= 120){
                  totalPrice += 4.2 * Number(order?.weight) * order?.count
                }else if (density > 120 && density <= 130){
                  totalPrice += 4.1 * Number(order?.weight) * order?.count
                }else if (density > 130 && density <= 140){
                  totalPrice += 4 * Number(order?.weight) * order?.count
                }else if (density > 140 && density <= 150){
                  totalPrice += 3.9 * Number(order?.weight) * order?.count
                }else if (density > 150 && density <= 160){
                  totalPrice += 3.8 * Number(order?.weight) * order?.count
                }else if(density > 160 && density <= 170){
                  totalPrice += 3.7 * Number(order?.weight) * order?.count
                }else if(density > 170 && density <= 180){
                  totalPrice += 3.6 * Number(order?.weight)* order?.count
                }else if(density > 180 && density <= 190){
                  totalPrice += (3.5 * Number(order?.weight))* order?.count
                }else if(density > 190 && density <= 200){
                  totalPrice += (3.4 * Number(order?.weight))* order?.count
                }else if (density > 200 && density <= 250){
                  totalPrice += (3.3 * Number(order?.weight))* order?.count
                }else if (density > 250 && density <= 300){
                  totalPrice += (3.2 * Number(order?.weight))* order?.count
                }else if (density > 300 && density <= 350){
                  totalPrice += (3.1 * Number(order?.weight))* order?.count
                }else if (density > 350 && density <= 400){
                  totalPrice += (3 * Number(order?.weight))* order?.count
                }else if (density > 400 && density <= 600){
                  totalPrice += (2.9 * Number(order?.weight))* order?.count
                }else if (density > 600 && density <= 800){
                  totalPrice += (2.8 * Number(order?.weight))* order?.count
                }else if (density > 800 && density <= 1000){
                  totalPrice += (2.7 * Number(order?.weight))* order?.count
                }else if (density > 1000){
                  totalPrice += (2.6 * Number(order?.weight))* order?.count
                }
          }else if(order?.type === "second"){
            if (density < 100){
              const cup = (Number(order?.len) * Number(order?.width) * Number(order?.height))
              totalPrice += (cup * 580)* order?.count
            }else if (density > 100 && density <= 110){
              totalPrice += (5.5 * Number(order?.weight))* order?.count
            }else if (density > 110 && density <= 120){
              totalPrice += (5.4 * Number(order?.weight)) * order?.count
            }else if (density > 120 && density <= 130){
              totalPrice += (5.3 * Number(order?.weight))* order?.count
            }else if (density > 130 && density <= 140){
              totalPrice += (5.2 * Number(order?.weight))* order?.count
            }else if (density > 140 && density <= 150){
              totalPrice += (5.1 * Number(order?.weight))* order?.count
            }else if (density > 150 && density <= 160){
              totalPrice += (5 * Number(order?.weight))* order?.count
            }else if(density > 160 && density <= 170){
              totalPrice += (4.9 * Number(order?.weight))* order?.count
            }else if(density > 170 && density <= 180){
              totalPrice += (4.8 * Number(order?.weight))* order?.count
            }else if(density > 180 && density <= 190){
              totalPrice += (4.7 * Number(order?.weight))* order?.count
            }else if(density > 190 && density <= 200){
              totalPrice += (4.6 * Number(order?.weight))* order?.count
            }else if (density > 200 && density <= 250){
              totalPrice += (4.5 * Number(order?.weight))* order?.count
            }else if (density > 250 && density <= 300){
              totalPrice += (4.4 * Number(order?.weight))* order?.count
            }else if (density > 300 && density <= 350){
              totalPrice += (4.3 * Number(order?.weight))* order?.count
            }else if (density > 350 && density <= 400){
              totalPrice += (4.2 * Number(order?.weight))* order?.count
            }else if (density > 400 && density <= 600){
              totalPrice += (4.1 * Number(order?.weight))* order?.count
            }else if (density > 600 && density <= 800){
              totalPrice += (4.1 * Number(order?.weight))* order?.count
            }else if (density > 800 && density <= 1000){
              totalPrice += (4.1 * Number(order?.weight))* order?.count
            }else if (density > 1000){
              totalPrice += (4.1 * Number(order?.weight))* order?.count
            }
          }
        }else if (order?.weight > 20 && order?.weight <= 100){
          const cup = (Number(order?.len) * Number(order?.width) * Number(order?.height))
          if (order?.type === "first"){
            totalPrice += (cup* 490)* order?.count
          }else if (order?.type === "second"){
            totalPrice += (cup*580)* order?.count
          }
        }
      }else{
        totalPrice += 7 * order?.weight* order?.count;
      }
        })
        if (totalPrice !== 0){
          setPrice(totalPrice)
        }
        setTotalVolume(orders.reduce((total, order) => {
          let density = Number(order?.len) * Number(order?.height) * Number(order?.width)*order?.count;
          return total += density;
        }, 0));
     }
     , [orders])

     const weightHandler = (value) => {
      setOrder({...order, weight:value});
      if (value <= 20){
        totalPrice += (Number(value)*7)
      }else{
        if (order.len == "" || order.width  == "" || order.height == ""){
          notification["info"]({
            message:'Вам надо написать длину, ширину, высоту',
          })
        }
      }
    };

     const typeHandler = (e, label, index) => {
      setOrders(orders?.map((order, i) => {
        if (i === index){
          order.type = e;
          order.name = label.label;
        }
        return order;
      }))
     }

     const getPrice = (price) => {
      if (order?.weight > 20 && order?.type?.length > 0 && (order.len == "" || order.width  == "" || order.height == "")){
        return "Заполните все поля"
      }else{
        return price + " $"
      }
     }

    const changeOrderInfo = (i, param, value) => {
      const re = /^[0-9\b,.]+$/;
      
      setOrders(orders.map((order, index) => {
        if (index === i){
          if ((param === "weight" || param === "len" || param === "width" || param === "height" || param === "count")){
            if (value === '' || re.test(value)){
              order[param] = value.replace(",",'.');
            }
          }else if (param === "comment"){
            order[param] = value;
          }
        }
        return order;
      }))
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
      
      const orderAddHandler = () => {
        setOrders([...orders, {
          type:"",
          len:"",
          width:"",
          height:"",
          weight:"",
          count:"",
          comment:""
        }])
      }
      
      const deleteProductHandler = (index) => {
        setOrders(orders?.filter((order, i) => index !== i))
      }

      const buttonDisabled = () => {
        let checkButton = false;
        orders?.map(order => {
          if (Number(order?.weight) > 20){
            if (order.type === "" || order?.weight === "" || order?.len === "" || order?.height === "" || order?.width === "" || order?.count == ""){
              checkButton = true;
            }
          }else{
            if (order.type === "" || order.weight === "" || order.count === ""){
              checkButton = true;
            }
          }
        })
        return checkButton
      } 

    return (
        <div>
            <Modal open={modal} footer={[
              <Button onClick={onCancel}>
                ОК
              </Button>
            ]}
              onCancel={onCancel}
            >
              <div className={styles.ind}>Ваш индидуальный код: <span>{indCode}</span></div>
            </Modal>
            {/* <Modal open={volumeModal} className="volumeModal">
              <div className='d-flex justify-content-between'>
                <Input placeholder='Длина (м)' className='mb-3 me-3 mb-md-0' onChange={(e) => setOrder({...order, len: e.target.value.replace(",",".")})} value={order?.len}/>
                <Input placeholder='Ширина (м)' className='mb-3 me-3 mb-md-0' onChange={(e) => setOrder({...order, width: e.target.value.replace(",",".")})} value={order?.width}/>
                <Input placeholder='Высота (м)' className='mb-3 me-3 mb-md-0' onChange={(e) => setOrder({...order, height: e.target.value.replace(",",".")})} value={order?.height}/>
                <Input placeholder='Количество' className='mb-3 me-3 mb-md-0' onChange={(e) => setOrder({...order, height: e.target.value.replace(",",".")})} value={order?.height}/>
                <Input placeholder='Вес одной коробки' className='mb-3 me-3 mb-md-0' onChange={(e) => setOrder({...order, height: e.target.value.replace(",",".")})} value={order?.height}/>
              </div>
            </Modal> */}
            <div className="mt-5 text-center">
                <h4>Калькулятор</h4>
            </div>
            <Form className='w-md-50  w-75 ms-auto me-auto'>
              {
                orders.map((order, index) => (
                  <>
                     <div className='mb-3'>
                    <Select placeholder="Наименование груза" className='w-100' style={{width:"100%"}}
                      onChange={(e, label) => typeHandler(e, label, index)}
                      options={
                        [
                          {
                            label:"Одежда и обувь",
                            value:"second"
                          },
                          {
                            label:"Остальное (хоз товары)",
                            value:"first"
                          }
                        ]
                      }
                    >
                    </Select>
                </div>
                <div className='d-block gap-3 mb-0 mb-md-3 d-md-flex'>
                  <Input placeholder='Вес одной коробки (кг)' className='mb-3 mb-md-0' onChange={(e) => changeOrderInfo(index, "weight",  e.target.value)} value={order?.weight}/>
                  {
                    order?.weight > 20 && 
                    <>
                      <Input placeholder='Длина (м)' className='mb-3 me-3 mb-md-0' onChange={(e) => changeOrderInfo(index, "len", e.target.value)} value={order?.len}/>
                      <Input placeholder='Ширина (м)' className='mb-3 me-3 mb-md-0' onChange={(e) => changeOrderInfo(index, "width", e.target.value)} value={order?.width}/>
                      <Input placeholder='Высота (м)' className='mb-3 me-3 mb-md-0' onChange={(e) => changeOrderInfo(index, "height", e.target.value)} value={order?.height}/>
                    </>
                  }
                  <Input placeholder='Количество' className='mb-3 mb-md-0' onChange={(e) => changeOrderInfo(index, "count", e.target.value)} value={order?.count}/>
                </div>
                <Input placeholder='Комментарии' className='w-100 mb-3' onChange={(e) => changeOrderInfo(index, "comment", e.target.value)} value={order?.comment}/>
                {
                  orders?.length > 1 &&
                  <Button type="danger" className='w-100 mb-3' onClick={() => deleteProductHandler(index)}>Удалить товар</Button>
                }
                </>  
                ))
              }
                <div className={styles.plus}>
                  <AiOutlinePlus className={styles.plus__icon} size={30} onClick={orderAddHandler}/>
                </div>
                {  
                  price > 0 &&
                    <div className={styles.price}>
                      Цена: <span>{getPrice(price)}</span>
                    </div>
                }
                {  
                  totalVolume > 0 &&
                    <div className={styles.price}>
                      Общий объем: <span>{totalVolume} м3</span>
                    </div>
                }
                <Button type='primary' className='w-100' onClick={createOrderHandler} disabled={buttonDisabled()}>Оформить заказ</Button>
            </Form>
        </div>
    )
}

export default Request;
