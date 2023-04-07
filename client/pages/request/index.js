import { Button, DatePicker, Form, Input, Select, Table, notification, Modal, Alert} from 'antd';
import {useState, useEffect} from 'react';
import {createOrder, getOrders, getOrdersByAccountId} from './../../http/orders';
import styles from './../../styles/Request.module.css';
import moment from 'moment';
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router';
import { getId } from '../../components/validation';
import { height } from '@mui/system';
import Link from 'next/link';
import { getPrices } from '../../http/price';


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
    const [mobile, setMobile] = useState(false);
    const [hoz, setHoz] = useState();
    const [tnp, setTnp] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            var decoded = jwt_decode(user?.token);
            setUser(decoded);
        }else{
          router.push("/login")
          notification['warning']({
            message:'Чтобы использовать калькулятор вам надо авторизоваться' 
          })
        }
        if (window.innerWidth < 500){
          setMobile(true);
        }
        getPrices().then((res) => {
          setHoz(res.data[0]?.hoz);
          setTnp(res.data[0]?.tnp);
        })
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
            return {...order, accountId : user?._id, type: order?.name, individualCode: getIndividualCode(user?.id)+"-"+(count+1), price: price, volume: Math.round((Number(order?.len) * Number(order?.width) * Number(order?.height)) * Number(order.count))}
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
            return {...order, accountId : user?._id, type: order?.name, individualCode: getIndividualCode(user?.id)+"-1", price: price, volume: Math.round((Number(order?.len) * Number(order?.width) * Number(order?.height)) * Number(order.count))}
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
          let totalPrice = 0;
          orders?.map(order => {
          if (order?.weight.length > 0 && order?.len.length > 0 && order?.width.length > 0 && order?.height.length > 0 && order?.count.length >0){
            const totalWeight = Number(order?.weight)*Number(order?.count); 
            const totalVolume = (Number(order?.len) * Number(order?.width) * Number(order?.height)) * Number(order.count);
            const density = totalWeight / totalVolume;
          if (totalWeight <= 30 && totalVolume <= 0.2){
            totalPrice += 7 * order?.weight* order?.count;
          }else{ 
            if (order?.type === "first"){
                if (density < 100){
                  const cup = (Number(order?.len) * Number(order?.width) * Number(order?.height))
                  totalPrice += (cup * hoz?.less100)* order?.count
                }else if (density > 100 && density <= 110){
                  totalPrice += hoz?.more100Less110 * Number(order?.weight) * order?.count
                }else if (density > 110 && density <= 120){
                  totalPrice += hoz?.more110Less120 * Number(order?.weight) * order?.count
                }else if (density > 120 && density <= 130){
                  totalPrice += hoz?.more120Less130 * Number(order?.weight) * order?.count
                }else if (density > 130 && density <= 140){
                  totalPrice += hoz?.more130Less140 * Number(order?.weight) * order?.count
                }else if (density > 140 && density <= 150){
                  totalPrice += hoz?.more140Less150 * Number(order?.weight) * order?.count
                }else if (density > 150 && density <= 160){
                  totalPrice += hoz?.more150Less160 * Number(order?.weight) * order?.count
                }else if(density > 160 && density <= 170){
                  totalPrice += hoz?.more150Less160 * Number(order?.weight) * order?.count
                }else if(density > 170 && density <= 180){
                  totalPrice += hoz?.more170Less180 * Number(order?.weight)* order?.count
                }else if(density > 180 && density <= 190){
                  totalPrice += (hoz?.more180Less190 * Number(order?.weight))* order?.count
                }else if(density > 190 && density <= 200){
                  totalPrice += (hoz?.more190Less200 * Number(order?.weight))* order?.count
                }else if (density > 200 && density <= 250){
                  totalPrice += (hoz?.more200Less250 * Number(order?.weight))* order?.count
                }else if (density > 250 && density <= 300){
                  totalPrice += (hoz?.more250Less300 * Number(order?.weight))* order?.count
                }else if (density > 300 && density <= 350){
                  totalPrice += (hoz?.more300Less350 * Number(order?.weight))* order?.count
                }else if (density > 350 && density <= 400){
                  totalPrice += (hoz?.more350Less400 * Number(order?.weight))* order?.count
                }else if (density > 400 && density <= 600){
                  totalPrice += (hoz?.more400Less600 * Number(order?.weight))* order?.count
                }else if (density > 600 && density <= 800){
                  totalPrice += (hoz?.more600Less800 * Number(order?.weight))* order?.count
                }else if (density > 800 && density <= 1000){
                  totalPrice += (hoz?.more800Less1000 * Number(order?.weight))* order?.count
                }else if (density > 1000){
                  totalPrice += (hoz?.more1000 * Number(order?.weight))* order?.count
                }
          }else if(order?.type === "second"){
            if (density < 100){
              const cup = (Number(order?.len) * Number(order?.width) * Number(order?.height))
              totalPrice += (cup * tnp?.less100)* order?.count
            }else if (density >= 100 && density <= 110){
              totalPrice += (tnp?.more100Less110 * Number(order?.weight))* order?.count
            }else if (density > 110 && density <= 120){
              totalPrice += (tnp?.more110Less120 * Number(order?.weight)) * order?.count
            }else if (density > 120 && density <= 130){
              totalPrice += (tnp?.more120Less130 * Number(order?.weight))* order?.count
            }else if (density > 130 && density <= 140){
              totalPrice += (tnp?.more130Less140 * Number(order?.weight))* order?.count
            }else if (density > 140 && density <= 150){
              totalPrice += (tnp?.more140Less150 * Number(order?.weight))* order?.count
            }else if (density > 150 && density <= 160){
              totalPrice += (tnp?.more150Less160 * Number(order?.weight))* order?.count
            }else if(density > 160 && density <= 170){
              totalPrice += (tnp?.more160Less170 * Number(order?.weight))* order?.count
            }else if(density > 170 && density <= 180){
              totalPrice += (tnp?.more170Less180 * Number(order?.weight))* order?.count
            }else if(density > 180 && density <= 190){
              totalPrice += (tnp?.more180Less190 * Number(order?.weight))* order?.count
            }else if(density > 190 && density <= 200){
              totalPrice += (tnp?.more190Less200 * Number(order?.weight))* order?.count
            }else if (density > 200 && density <= 250){
              totalPrice += (tnp?.more200Less250 * Number(order?.weight))* order?.count
            }else if (density > 250 && density <= 300){
              totalPrice += (tnp?.more250Less300 * Number(order?.weight))* order?.count
            }else if (density > 300 && density <= 350){
              totalPrice += (tnp?.more300Less350 * Number(order?.weight))* order?.count
            }else if (density > 350 && density <= 400){
              totalPrice += (tnp?.more350Less400 * Number(order?.weight))* order?.count
            }else if (density > 400 && density <= 600){
              totalPrice += (tnp?.more400Less600 * Number(order?.weight))* order?.count
            }else if (density > 600 && density <= 800){
              totalPrice += (tnp?.more600Less800 * Number(order?.weight))* order?.count
            }else if (density > 800 && density <= 1000){
              totalPrice += (tnp?.more800Less1000 * Number(order?.weight))* order?.count
            }else if (density > 1000){
              totalPrice += (tnp?.more1000 * Number(order?.weight))* order?.count
            }
          }
          }
          }else{
            setPrice(0);
          }
          })
          if (totalPrice !== 0){
            if (totalPrice < 30){
              setPrice(30);
            }else{
              setPrice(Math.round(totalPrice))
            }
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
            if (order.type === "" || order?.weight === "" || order?.len === "" || order?.height === "" || order?.width === "" || order?.count == ""){
              checkButton = true;
            }
        })
        return checkButton
      } 

    return (
        <div className='container'>
            <Modal open={modal} footer={null}
              onCancel={onCancel}
              width={!mobile ?  "80%" : '95%'}
            > 
              <div className={styles.modal__title}>
                Ваша заявка
              </div>
              <div className={styles.inds}>
                <div className={styles.ind}>Код вашего отправления: <span>{indCode}</span></div>
                <div className={styles.ind}>Адрес склада: <span>广东省广州市白云区石门街道，窖心大道2号007库房创胜新天地后侧停车场手机号码: 13930311979所在地区</span></div>
              </div>
              <div className={styles.modal__tips}>
                <div>
                  Обязательно укажите эти данные на коробке с товаром.
                </div>
                <div>
                  Без этих данных ваша посылка потеряется.
                </div>
              </div>
              {/* <Alert message="Укажите эти данные на коробке с товаром" type="info" className='mb-3' showIcon /> */}
              {/* <Link href="/tracking" className='mt-3'>Трекинг</Link> */}
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
            <div className={`${styles.title}`}>
                <h4>Калькулятор</h4>
            </div>
            <div className={styles.tips}>
              <div className={styles.tip}>
                1. Заполните параметры товара.
              </div>
              <div className={styles.tip}>
                2. Стоимость доставки появится автоматически, когда вы введете информацию груза (вес, длина, ширина, высота, количество)
              </div>
            </div>
            {/* <Alert message="Укажите параметры товара" type="info" className='w-75 ms-auto me-auto mb-3' showIcon />
            <Alert message="Цена появится автоматически когда введете информацию про груз (вес, длина, ширина, высота, количество)" className='w-75 ms-auto me-auto mb-3' type="warning" showIcon /> */}
            <Form className={`w-100 ms-auto me-auto ${styles.form}`}>
              {
                orders.map((order, index) => (
                  <div className={styles.item}>
                  <div className={`mb-3`}>
                    <Select placeholder="Наименование груза" className={`w-100 select`} style={{width:"100%"}}
                      
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
                <div className={`d-block mb-0 mb-md-3 d-md-flex justify-between ${styles.inputs}`}>
                  <div className={`input ${styles.input}`}>
                    <div className={`d-flex ${styles.inputs__wrapper}`}>
                      <Input placeholder='Вес одной коробки (кг)' onChange={(e) => changeOrderInfo(index, "weight",  e.target.value)} value={order?.weight}/>
                      <Input placeholder='Длина одной коробки (м)'  onChange={(e) => changeOrderInfo(index, "len", e.target.value)} value={order?.len}/>
                    </div>
                    <div className={`d-flex ${styles.inputs__wrapper}`}>
                    <Input placeholder='Ширина одной коробки (м)' onChange={(e) => changeOrderInfo(index, "width", e.target.value)} value={order?.width}/>
                    <Input placeholder='Высота одной коробки (м)' onChange={(e) => changeOrderInfo(index, "height", e.target.value)} value={order?.height}/>
                    </div>
                    <Input className='mb-3 mb-md-0' placeholder='Количество коробок' onChange={(e) => changeOrderInfo(index, "count", e.target.value)} value={order?.count}/>
                  </div>
                  <div className={`comment ${styles.input}`}>
                   <Input placeholder='Комментарии' onChange={(e) => changeOrderInfo(index, "comment", e.target.value)} value={order?.comment}/>
                  </div>
                </div>
                <div className='d-flex justify-content-md-end justify-content-center mb-md-0 align-items-center w-100'> 
                  <div className={styles.remove__button} onClick={() => deleteProductHandler(index)}>
                    Удалить расчет
                  </div> 
                </div>
                {/* {
                  orders?.length > 1 &&
                  <Button type="danger" className='w-100 mb-3' onClick={() => deleteProductHandler(index)}>Удалить товар</Button>
                } */}
                </div>  
                ))
              }
                {/* <div className={styles.plus}>
                  <AiOutlinePlus className={styles.plus__icon} size={30} onClick={orderAddHandler}/>
                </div> */}
                <div className={styles.plus} onClick={orderAddHandler}>
                  <div className={styles.plus__icon}>
                    <img src='./plus.svg' alt="plus"/>
                  </div>
                  <div className={styles.plus__text}>
                    Добавить еще груз
                  </div>
                </div>
                <div className={styles.overall}>
                  {  
                    totalVolume > 0 &&
                      <div className={styles.price}>
                        Общий объем доставки: <span>{totalVolume} м3</span>
                      </div> 
                  }
                {  
                  price > 0 &&
                    <div className={styles.price}>
                      Цена: <span>{getPrice(price)}</span>
                    </div>
                }
                </div>
                {/* <Alert message="Если вы готовы заказать доставку, нажмите на кнопку снизу" className='mb-3' type="error"/> */}
                <div className={styles.confirm__tip}>
                  Чтобы отправить заказ, нажмите на кнопку “Оформить заказ”
                </div>
                <div className='confirm__button'>
                  <button type='primary' onClick={createOrderHandler} disabled={buttonDisabled()}>Оформить заказ</button>
                </div>
            </Form>
        </div>
    )
}

export default Request;
