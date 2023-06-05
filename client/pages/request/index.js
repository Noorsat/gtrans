import { Button, DatePicker, Form, Input, Select, Table, notification, Modal, Alert, Switch, Radio} from 'antd';
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
    const [totalVolume, setTotalVolume] = useState(0);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalDensity, setTotalDensity] = useState(0)
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
        comment:"",
        volume: "",
        deliveryType:"",
        switch: false
       } 
      ]
    );
    const [price1, setPrice1] = useState();
    const [price2, setPrice2] = useState();
    const [price3, setPrice3] = useState();
    const [price4, setPrice4] = useState();
    const [selectedPrice, setSelectedPrice] = useState();
    const [modal, setModal] = useState(false);
    const [indCode, setIndCode] = useState();
    const [volumeModal, setVolumeModal] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [prices, setPrices] = useState();
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
          setPrices(res?.data);
          setHoz(res.data[0]?.hoz);
          setTnp(res.data[0]?.tnp);
        })
    }, [])

      const createOrderHandler = () => { 
        if (!(totalVolume && totalWeight && selectedPrice)){
          notification["error"]({
            message: "Заполните все поля"
          })
        }else{
        getOrders().then((res) => {
          let count = res.data.length;
          const body = orders.map(order => {
            return {...order, accountId : user?._id, type: order?.name, individualCode: "GT-2023-"+(count+1), price: selectedPrice, volume: totalVolume, totalWeight: totalWeight}
          })
    
          createOrder(body).then((res) => {
            if (res?.status === 201){
              setModal(true)
              setIndCode("GT-2023-"+(count+1))
              // notification["success"]({
              //   message:'Ваш заказ создан',
              // })
              // setOrder({})
              // router.push("/my-orders")
            }
          })
        }).catch((res) => {
          const body = orders.map(order => {
            return {...order, accountId : user?._id, type: order?.name, individualCode: "GT-2023-"+(count+1), price: selectedPrice, volume: totalVolume, totalWeight: totalWeight}
          })
    
          createOrder(body).then((res) => {
            if (res?.status === 201){
              setModal(true)
              setIndCode("GT-2023-"+(count+1))
              // notification["success"]({
              //   message:'Ваш заказ создан',
              // })
              // setOrder({})
              // router.push("/my-orders")
            }
          })
        })
      }
     }
     
     const onCancel = () => {
      notification["success"]({
        message:'Ваш заказ создан',
      })
      setOrder({})
      router.push("/my-orders")
     }

     const getIndividualCode = (id) => {
      return "GT-2023-" + getId(id);
     }
    
      useEffect(() => {
          let totalPrice1 = 0;
          let totalPrice2 = 0;
          let totalPrice3 = 0;
          let totalPrice4 = 0;

          orders?.map((order, index) => {
          if ((Number(order?.weight) > 0 && Number(order?.len) > 0 && Number(order?.width) > 0 && Number(order?.height) > 0 && Number(order?.count) >0) || (Number(order?.totalVolume) > 0 && Number(order?.totalWeight) > 0)){
            const totalWeight = order?.switch ? Number(order?.totalWeight) :  Number(order?.weight)*Number(order?.count); 
            const totalVolume = order?.switch ? Number(order?.totalVolume) : ((Number(order?.len)/100) * (Number(order?.width)/100) * (Number(order?.height)/100)) * Number(order.count);
            const density = totalWeight / totalVolume;
            const active = order?.switch;
            setTotalVolume(totalVolume);
            setTotalWeight(totalWeight);
            setTotalDensity(totalWeight / totalVolume);

          if (totalWeight <= 30 && totalVolume <= 0.2){
            totalPrice1 += 7 * totalWeight;
            totalPrice2 += 7 * totalWeight;
            totalPrice3 += 7 * totalWeight;
            totalPrice4 += 7 * totalWeight;
          }else{ 
            if (order?.type === "first"){
                if (density < 100){
                  totalPrice1 += (Number(totalVolume) * prices[0].hoz?.less100);
                  totalPrice2 += (Number(totalVolume) * prices[1].hoz?.less100);
                  totalPrice3 += (Number(totalVolume) * prices[2].hoz?.less100);
                  totalPrice4 += (Number(totalVolume) * prices[3].hoz?.less100);
                }else if (density > 100 && density <= 110){
                  totalPrice1 += prices[0]?.hoz?.more100Less110 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more100Less110 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more100Less110 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more100Less110 * totalWeight;
                }else if (density > 110 && density <= 120){
                  totalPrice1 += prices[0]?.hoz?.more110Less120 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more110Less120 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more110Less120 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more110Less120 * totalWeight;
                }else if (density > 120 && density <= 130){
                  totalPrice1 += prices[0]?.hoz?.more120Less130 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more120Less130 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more120Less130 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more120Less130 * totalWeight;
                }else if (density > 130 && density <= 140){
                  totalPrice1 += prices[0]?.hoz?.more130Less140 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more130Less140 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more130Less140 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more130Less140 * totalWeight;
                }else if (density > 140 && density <= 150){
                  totalPrice1 += prices[0]?.hoz?.more140Less150 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more140Less150 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more140Less150 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more140Less150 * totalWeight;
                }else if (density > 150 && density <= 160){
                  totalPrice1 += prices[0]?.hoz?.more150Less160 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more150Less160 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more150Less160 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more150Less160 * totalWeight;
                }else if(density > 160 && density <= 170){
                  totalPrice1 += prices[0]?.hoz?.more150Less160 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more150Less160 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more150Less160 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more150Less160 * totalWeight;
                }else if(density > 170 && density <= 180){
                  totalPrice1 += prices[0]?.hoz?.more170Less180 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more170Less180 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more170Less180 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more170Less180 * totalWeight;
                }else if(density > 180 && density <= 190){
                  totalPrice1 += prices[0]?.hoz?.more180Less190 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more180Less190 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more180Less190 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more180Less190 * totalWeight;
                }else if(density > 190 && density <= 200){
                  totalPrice1 += prices[0]?.hoz?.more190Less200 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more190Less200 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more190Less200 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more190Less200 * totalWeight;
                }else if (density > 200 && density <= 250){
                  totalPrice1 += prices[0]?.hoz?.more200Less250 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more200Less250 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more200Less250 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more200Less250 * totalWeight;
                }else if (density > 250 && density <= 300){
                  totalPrice1 += prices[0]?.hoz?.more250Less300 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more250Less300 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more250Less300 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more250Less300 * totalWeight;
                }else if (density > 300 && density <= 350){
                  totalPrice1 += prices[0]?.hoz?.more300Les  * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more300Less350 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more300Less350 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more300Less350 * totalWeight;
                }else if (density > 350 && density <= 400){
                  totalPrice1 += prices[0]?.hoz?.more350Less400 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more350Less400 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more350Less400 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more350Less400 * totalWeight;
                }else if (density > 400 && density <= 600){
                  totalPrice1 += prices[0]?.hoz?.more400Less600 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more400Less600 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more400Less600 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more400Less600 * totalWeight;
                }else if (density > 600 && density <= 800){
                  totalPrice1 += prices[0]?.hoz?.more600Less800 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more600Less800 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more600Less800 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more600Less800 * totalWeight;
                }else if (density > 800 && density <= 1000){
                  totalPrice1 += prices[0]?.hoz?.more800Less1000 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more800Less1000 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more800Less1000 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more800Less1000 * totalWeight;
                }else if (density > 1000){
                  totalPrice1 += prices[0]?.hoz?.more1000 * totalWeight;
                  totalPrice2 += prices[1]?.hoz?.more1000 * totalWeight;
                  totalPrice3 += prices[2]?.hoz?.more1000 * totalWeight;
                  totalPrice4 += prices[3]?.hoz?.more1000 * totalWeight;
                }
          }else if(order?.type === "second"){
            if (density < 100){
              totalPrice1 += totalVolume * prices[0]?.tnp?.less100;
              totalPrice2 += totalVolume * prices[1]?.tnp?.less100;
              totalPrice3 += totalVolume * prices[2]?.hoz?.less100;
              totalPrice4 += totalVolume * prices[3]?.hoz?.less100;
            }else if (density >= 100 && density <= 110){
              totalPrice1 += prices[0]?.tnp?.more100Less110 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more100Less110 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more100Less110 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more100Less110 * totalWeight;
            }else if (density > 110 && density <= 120){
              totalPrice1 += prices[0]?.tnp?.more110Less120 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more110Less120 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more110Less120 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more110Less120 * totalWeight;
            }else if (density > 120 && density <= 130){
              totalPrice1 += prices[0]?.tnp?.more120Less130 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more120Less130 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more120Less130 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more120Less130 * totalWeight;
            }else if (density > 130 && density <= 140){
              totalPrice1 += prices[0]?.tnp?.more130Less140 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more130Less140 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more130Less140 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more130Less140 * totalWeight;
            }else if (density > 140 && density <= 150){
              totalPrice1 += prices[0]?.tnp?.more140Less150 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more140Less150 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more140Less150 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more140Less150 * totalWeight;
            }else if (density > 150 && density <= 160){
              totalPrice1 += prices[0]?.tnp?.more150Less160 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more150Less160 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more150Less160 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more150Less160 * totalWeight;
            }else if(density > 160 && density <= 170){
              totalPrice1 += prices[0]?.tnp?.more150Less160 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more150Less160 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more150Less160 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more150Less160 * totalWeight;
            }else if(density > 170 && density <= 180){
              totalPrice1 += prices[0]?.tnp?.more170Less180 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more170Less180 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more170Less180 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more170Less180 * totalWeight;
            }else if(density > 180 && density <= 190){
              totalPrice1 += prices[0]?.tnp?.more180Less190 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more180Less190 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more180Less190 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more180Less190 * totalWeight;
            }else if(density > 190 && density <= 200){
              totalPrice1 += prices[0]?.tnp?.more190Less200 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more190Less200 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more190Less200 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more190Less200 * totalWeight;
            }else if (density > 200 && density <= 250){
              totalPrice1 += prices[0]?.tnp?.more200Less250 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more200Less250 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more200Less250 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more200Less250 * totalWeight;
            }else if (density > 250 && density <= 300){
              totalPrice1 += prices[0]?.tnp?.more250Less300 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more250Less300 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more250Less300 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more250Less300 * totalWeight;
            }else if (density > 300 && density <= 350){
              totalPrice1 += prices[0]?.tnp?.more300Less350 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more300Less350 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more300Less350 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more300Less350 * totalWeight;
            }else if (density > 350 && density <= 400){
              totalPrice1 += prices[0]?.tnp?.more350Less400 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more350Less400 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more350Less400 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more350Less400 * totalWeight;
            }else if (density > 400 && density <= 600){
              totalPrice1 += prices[0]?.tnp?.more400Less600 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more400Less600 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more400Less600 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more400Less600 * totalWeight;
            }else if (density > 600 && density <= 800){
              totalPrice1 += prices[0]?.tnp?.more600Less800 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more600Less800 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more600Less800 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more600Less800 * totalWeight;
            }else if (density > 800 && density <= 1000){
              totalPrice1 += prices[0]?.tnp?.more800Less1000 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more800Less1000 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more800Less1000 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more800Less1000 * totalWeight;
            }else if (density > 1000){
              totalPrice1 += prices[0]?.tnp?.more1000 * totalWeight;
              totalPrice2 += prices[1]?.tnp?.more1000 * totalWeight;
              totalPrice3 += prices[2]?.hoz?.more1000 * totalWeight;
              totalPrice4 += prices[3]?.hoz?.more1000 * totalWeight;
            }
          }
          }
          }else{
            setPrice1(0);
            setPrice2(0);
            setPrice3(0);
            setPrice4(0);
          }
          })
          if (totalPrice1 !== 0){
            if (totalPrice1 < 30){
              setPrice1(30);
            }else{
              setPrice1(Math.round(totalPrice1))
            }
          }
          if (totalPrice2 !== 0){
            if (totalPrice2 < 30){
              setPrice2(30);
            }else{
              setPrice2(Math.round(totalPrice2))
            }
          }
          if (totalPrice3 !== 0){
            if (totalPrice3 < 30){
              setPrice3(30);
            }else{
              setPrice3(Math.round(totalPrice3))
            }
          }
          if (totalPrice4 !== 0){
            if (totalPrice4 < 30){
              setPrice4(30);
            }else{
              setPrice4(Math.round(totalPrice4))
            }
          }
     }, [orders])

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
            if (value === '' || re.test(value)){
              order[param] = value.replace(",",'.');
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

      const switchHandler = (index) => {
        setTotalWeight(0);
        setTotalVolume(0);
        setTotalDensity(0);
        setOrders(orders?.map((order, i) => {
          if (i === index){
            if (order?.switch){
              order.totalVolume = "";
              order.totalWeight = "";
            }else{
              order.height = "";
              order.len = "";
              order.width = "";
              order.weight = "";
              order.count = "";
            }
            order.switch = !order?.switch          
          }
          return order;
        }))
      }
      
      const deleteProductHandler = (index) => {
        if (orders?.find((order, i) => index === i)){
          setOrders(orders?.filter((order, i) => index !== i))
        }else{
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

    const priceSelectHandler = (e, price) => {
      setOrders(orders.map(order => {
        order.deliveryType = e.target.value;
        return order;
      })
      )
      setSelectedPrice(price);
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
                <div className={styles.ind}>
                  Адрес склада:
                  <div className={styles.account__item_text}>
                      <div>
                          <span>Гуанчжоу: </span> &nbsp;&nbsp;北京603公司广州分公司地址：广州市白云区荔德路汇富国际商贸中心A26栋103号603公司18594056603
                      </div>
                      <div>
                          <span>Иу:</span> &nbsp;&nbsp;地址：浙江省 义乌市 北苑街道 莲塘二区3栋3单元一层  电话 13305898683
                      </div>
                  </div>
                </div>
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
                  <div className='mb-3'>
                  <div className='d-md-flex gap-3 d-block'>
                    <div className={styles.selects__wrapper}>
                      <div className={styles.item}>
                        <div className={`mb-md-3 mb-2`}>
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
                          <div className={`${styles.inputs__wrapper}`}>
                            <div className='mb-md-3 mb-2'>
                              {
                                !order?.switch ?
                                <>
                                <div className='d-flex align-items-center mb-md-3 mb-2'>
                                  <div className={styles.label}>
                                    Вес одной коробки (кг)
                                  </div>
                                  <div className={styles.label__input}>
                                    <Input onChange={(e) => changeOrderInfo(index, "weight",  e.target.value)} value={order?.weight}/>
                                  </div>
                                </div>
                                <div className='d-flex align-items-center mb-md-3 mb-2 gap-1'>
                                  <div className={styles.label}>
                                    Длина одной коробки (cм)
                                  </div>
                                  <div className={styles.label__input}>
                                    <Input onChange={(e) => changeOrderInfo(index, "len", e.target.value)} value={order?.len}/>
                                  </div>
                                </div>
                                <div className='d-flex align-items-center mb-md-3 mb-2 gap-1'>
                                  <div className={styles.label}>
                                    Ширина одной коробки (cм)
                                  </div>
                                  <div className={styles.label__input}>
                                    <Input onChange={(e) => changeOrderInfo(index, "width", e.target.value)} value={order?.width}/>
                                  </div>
                                </div>
                                <div className='d-flex align-items-center mb-md-3 mb-2 gap-1'>
                                  <div className={styles.label}>
                                    Высота одной коробки (cм)
                                  </div>
                                  <div className={styles.label__input}>
                                    <Input onChange={(e) => changeOrderInfo(index, "height", e.target.value)} value={order?.height}/>
                                  </div>
                                </div>
                                <div className='d-flex align-items-center mb-md-3 mb-2 gap-1'>
                                  <div className={styles.label}>
                                    Количество коробок
                                  </div>
                                  <div className={styles.label__input}>
                                    <Input onChange={(e) => changeOrderInfo(index, "count", e.target.value)} value={order?.count}/>
                                  </div>
                                </div>
                                </>
                                :
                                <>
                                  <div className='d-flex align-items-center mb-md-3 mb-2 gap-1'>
                                    <div className={styles.label}>
                                      Общий вес
                                    </div>
                                    <div className={styles.label__input}>
                                      <Input onChange={(e) => changeOrderInfo(index, "totalWeight", e.target.value)} value={order?.totalWeight}/>
                                    </div>
                                  </div>
                                  <div className='d-flex align-items-center mb-md-3 mb-2 gap-1'>
                                    <div className={styles.label}>
                                      Объем
                                    </div>
                                    <div className={styles.label__input}>
                                      <Input onChange={(e) => changeOrderInfo(index, "totalVolume", e.target.value)} value={order?.totalVolume}/>
                                    </div>
                                  </div>
                                </>
                              }
                            </div>
                            <div>
                              <Switch value={order?.switch} onChange={() => switchHandler(index)} />
                              <span className={styles.switch}>У меня есть общий вес и объем</span>
                            </div>
                          </div>
                          {/* <div className={`comment ${styles.input}`}>
                           <Input placeholder='Комментарии' onChange={(e) => changeOrderInfo(index, "comment", e.target.value)} value={order?.comment}/>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.overall__wrapper}>
                    <div className={styles.overall}>
                      <div className={styles.overall__item}>
                        Общий объем доставки: <span>{totalVolume} м3</span>
                      </div> 
                      <div className={styles.overall__item}>
                        Вес: <span>{totalWeight} кг</span>
                      </div> 
                      <div className={`${styles.overall__item} mb-md-3 mb-0`}>
                        Плотность: <span>{totalDensity} кг/куб</span>    
                      </div>
                      <div className={styles.overall__item}>
                        Выберите вариант:
                      </div>
                      <Radio.Group value={orders[0]?.deliveryType}> 
                        <div className={styles.price}>
                          <Radio value="Экспресс (8-10 дней)" onChange={(e) => priceSelectHandler(e, price1)}>
                            Экспресс (8-10 дней): <span className={styles.price__bold}>{getPrice(price1)}</span>
                          </Radio>
                        </div>
                        <div className={styles.price}>
                          <Radio value="Экспресс (15-20 дней)" onChange={(e) => priceSelectHandler(e, price2)}>
                            Экспресс (15-20 дней): <span className={styles.price__bold}>{getPrice(price2)}</span>
                          </Radio>
                        </div>
                        <div className={styles.price}>
                          <Radio value="Авто (18-25 дней)" onChange={(e) => priceSelectHandler(e, price2)}>
                            Авто (18-25 дней) : <span className={styles.price__bold}>{getPrice(price3)}</span>
                          </Radio>
                        </div>
                        <div className={styles.price} >
                          <Radio value="ЖД (30-35 дней)" onChange={(e) => priceSelectHandler(e, price2)}>
                            ЖД (30-35 дней) : <span className={styles.price__bold}>{getPrice(price4)}</span>
                          </Radio>
                        </div>
                      </Radio.Group>
                      <div className={styles.confirm__tip}>
                        Чтобы отправить заказ, нажмите на кнопку “Оформить заказ”
                      </div>
                      <div className='confirm__button'>
                        <button type='primary' onClick={createOrderHandler}>Оформить заказ</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='d-flex justify-content-md-end justify-content-center mb-md-0 align-items-center w-100'> 
                  <div className={styles.remove__button} onClick={() => deleteProductHandler(index)}>
                    Удалить расчет
                  </div> 
                </div> */}
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
                {/* <div className={styles.plus} onClick={orderAddHandler}>
                  <div className={styles.plus__icon}>
                    <img src='./plus.svg' alt="plus"/>
                  </div>
                  <div className={styles.plus__text}>
                    Еще
                  </div>
                </div> */}
                {/* <Alert message="Если вы готовы заказать доставку, нажмите на кнопку снизу" className='mb-3' type="error"/> */}
            </Form>
        </div>
    )
}

export default Request;
