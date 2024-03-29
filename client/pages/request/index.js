import { Form, Input, Select, notification, Modal, Switch, Radio, Spin} from 'antd';
import {useState, useEffect} from 'react';
import {createOrder, getOrders, getOrdersByAccountId} from './../../http/orders';
import styles from './../../styles/Request.module.css';
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router';
import { getPrices } from '../../http/price';


const Request = ({order, setOrder}) => {
    const router = useRouter();

    const [totalVolume, setTotalVolume] = useState(order && order[0]?.totalVolume || 0);
    const [totalWeight, setTotalWeight] = useState(order && order[0]?.totalWeight || 0);;
    const [totalDensity, setTotalDensity] = useState(order && order[0]?.totalDensity || 0);
    const [user, setUser] = useState();
    const [orders, setOrders] = useState(order ||
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
    const [price1, setPrice1] = useState(order && order[0]?.price1 || 0);
    const [price2, setPrice2] = useState(order && order[0]?.price2 || 0);
    const [selectedPrice, setSelectedPrice] = useState();
    const [modal, setModal] = useState(false);
    const [indCode, setIndCode] = useState();
    const [mobile, setMobile] = useState(false);
    const [prices, setPrices] = useState();
    const [isLoading, setIsLoading] = useState(false);

    console.log(orders);

    useEffect(() => {
        setIsLoading(true);
        const user = JSON.parse(localStorage.getItem("user")) || null;
        if (user){
          var decoded = user && jwt_decode(user?.token);
          decoded && setUser(decoded);

          getPrices(user?.token).then((res) => {
            setPrices(res?.data);
            setIsLoading(false); 
          })
        }else{
          router.push("/login")
        }
        if (window.innerWidth < 500){
          setMobile(true);
        }
        
    }, [])

      const createOrderHandler = () => {
        if (!(orders[0]?.type)){
          notification["error"]({
            message:"Выберите наименование груза"
          })
        }else if (!(totalVolume && totalWeight)){
          notification["error"]({
            message: "Заполните все поля"
          })
        }else if (!orders[0]?.deliveryType){
          notification["error"]({
            message: "Выберите тип доставки"
          })
        }else if (totalWeight < 50){
          notification["warning"]({
            message: "Мы принимаем доставки только от 50 кг"
          })
        }else{
          if (!user){
            router.push("/register")
            notification['warning']({
              message:'Чтобы использовать калькулятор вам надо авторизоваться' 
            })
            setOrder(orders.map(order => {
              order.price1 = price1;
              order.price2 = price2;
              order.totalVolume = totalVolume;
              order.totalDensity = totalDensity;
              order.totalWeight = totalWeight;
              return order;
            }))
          }else{
        getOrders().then((res) => {
          let count = res.data.length;
          const body = orders.map(order => {
            return {...order, accountId : user?._id, type: order?.name, individualCode: "60368-adilet-"+(count+1), price: selectedPrice, volume: totalVolume, totalWeight: totalWeight}
          })
          
          createOrder(body).then((res) => {
            if (res?.status === 201){
              setModal(true)
              setIndCode("60368-adilet-"+(count+1))
              // notification["success"]({
              //   message:'Ваш заказ создан',
              // })
              // setOrder({})
              // router.push("/my-orders")
            }
          })
        }).catch((res) => {
          const body = orders.map(order => {
            return {...order, accountId : user?._id, type: order?.name, individualCode: "60368-adilet-"+(count+1), price: selectedPrice, volume: totalVolume, totalWeight: totalWeight}
          })
    
          createOrder(body).then((res) => {
            if (res?.status === 201){
              setModal(true)
              setIndCode("60368-adilet-"+(count+1))
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
     }
     
     const onCancel = () => {
      notification["success"]({
        message:'Ваш заказ создан',
      })
      setOrder([
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
       ])
      router.push("/my-orders?mode=calculator")
     }

    
      useEffect(() => {
          let totalPrice1 = 0;
          let totalPrice2 = 0;

          prices && orders?.map((order) => {
          if ((Number(order?.weight) > 0 && Number(order?.len) > 0 && Number(order?.width) > 0 && Number(order?.height) > 0 && Number(order?.count) >0) || (Number(order?.totalVolume) > 0 && Number(order?.totalWeight) > 0)){
            const totalWeight = order?.switch ? Number(order?.totalWeight) :  Number(order?.weight)*Number(order?.count); 
            const totalVolume = order?.switch ? (Number(order?.totalVolume)) : ((Number(order?.len)/100) * (Number(order?.width)/100) * (Number(order?.height)/100)) * Number(order.count);
            const density = totalWeight / totalVolume;
            setTotalVolume(parseFloat(totalVolume.toFixed(2)));
            setTotalWeight(parseFloat(totalWeight.toFixed(2)));
            setTotalDensity(parseFloat(density.toFixed(2)));
            const priceByDensity = prices?.map(price => {
              return price?.items.filter((item) => item?.from <= density && item?.to > density);
            }).flatMap(arr => arr)
          if (totalWeight <= 30 && totalVolume <= 0.2){
            totalPrice1 += 7 * totalWeight;
            totalPrice2 += 7 * totalWeight;
          }else{ 
            if (order?.type === "first"){
              console.log(priceByDensity);
              totalPrice1 += (density < 100 ? Number(totalVolume) * Number(priceByDensity[0]?.hoz) : Number(totalWeight) * Number(priceByDensity[0]?.hoz))
              totalPrice2 += (density < 100 ? Number(totalVolume) * Number(priceByDensity[1]?.hoz) : Number(totalWeight) * Number(priceByDensity[1]?.hoz))
          }else if(order?.type === "second"){
            totalPrice1 += (density < 100 ? Number(totalVolume) * Number(priceByDensity[0]?.tnp) : Number(totalWeight) * Number(priceByDensity[0]?.tnp))
            totalPrice2 += (density < 100 ? Number(totalVolume) * Number(priceByDensity[1]?.tnp) : Number(totalWeight) * Number(priceByDensity[1]?.tnp))
          }
          }
          }else{
            setPrice1(0);
            setPrice2(0);
            setTotalDensity(0);
            setTotalVolume(0);
            setTotalWeight(0);
          }
          })
          console.log(totalPrice1);
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
     }, [orders])

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
            {
                isLoading && (
                    <div className="loading">
                        <Spin size='large' />
                    </div>
                )
            }
            <Modal open={modal} footer={null}
              onCancel={onCancel}
              width={!mobile ?  "80%" : '95%'}
            > 
              <div className={styles.modal__title}>
                Ваш код
              </div>
              <div className={styles.inds}>
                <div className={styles.ind}>Код вашего отправления: <span>{indCode}</span></div>
                <div className={styles.ind}>
                  Адрес склада:
                  <div className={styles.account__item_text}>
                      <div>
                          <span>Гуанчжоу: </span> &nbsp;&nbsp;603公司广州地址：广州市白云区汇富国际商贸中心A26栋103号-603库房
                          <br></br>纪阿乐转你的名字 13811368603
                      </div>
                      <div>
                          <span>Иу:</span> &nbsp;&nbsp;义乌新库房地址：<br></br> 浙江省金华市义乌市福田街道荷叶塘工业区物华路66号 603库房 收货人 业务员转客户 18966053603/18500791603
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
                <h4>Калькулятор карго (пиндуо/1688 и др)</h4>
            </div>
            {/* <div className={styles.tips}>
              <div className={styles.tip}>
                1. Заполните параметры товара.
              </div>
              <div className={styles.tip}>
                2. Стоимость доставки появится автоматически, когда вы введете информацию груза (вес, длина, ширина, высота, количество)
              </div>
            </div> */}
            {/* <Alert message="Укажите параметры товара" type="info" className='w-75 ms-auto me-auto mb-3' showIcon />
            <Alert message="Цена появится автоматически когда введете информацию про груз (вес, длина, ширина, высота, количество)" className='w-75 ms-auto me-auto mb-3' type="warning" showIcon /> */}
            <Form className={`w-100 ms-auto me-auto ${styles.form}`}>
              {
                orders && orders?.map((order, index) => (
                  <div className='mb-3'>
                  <div className='d-md-flex gap-3 d-block'>
                    <div className={styles.selects__wrapper}>
                      <div className={styles.item}>
                        <div className={`mb-md-3 mb-2`}>
                          <Select placeholder="Наименование груза" className={`w-100 select`} style={{width:"100%"}}
                            onChange={(e, label) => typeHandler(e, label, index)}
                            value={order?.type || "Наименование груза"}
                            options={
                              [
                                {
                                  label: "Хоз товары",
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
                        Общий объем доставки: <span>{order?.totalVolume || totalVolume} м3</span>
                      </div> 
                      <div className={styles.overall__item}>
                        Вес: <span>{order?.totalWeight || totalWeight} кг</span>
                      </div> 
                      <div className={`${styles.overall__item} mb-md-3 mb-0`}>
                        Плотность: <span>{order?.totalDensity || totalDensity} кг/куб</span>    
                      </div>
                      <div className={styles.overall__item}>
                        Выберите вариант:
                      </div>
                      <Radio.Group value={orders[0]?.deliveryType}> 
                        <div className={styles.price}>
                          <Radio value="Авто (6-8 дней)" onChange={(e) => priceSelectHandler(e, price1)}>
                            Авто (6-8 дней): <span className={styles.price__bold}>{getPrice(price1)}</span>
                          </Radio>
                        </div>
                        <div className={styles.price}>
                          <Radio value="Ж/Д (25-35 дней)" onChange={(e) => priceSelectHandler(e, price2)}>
                            Ж/Д (25-35 дней): <span className={styles.price__bold}>{getPrice(price2)}</span>
                          </Radio>
                        </div>
                      </Radio.Group>
                      <div className={styles.confirm__tip}>
                        Чтобы отправить заказ, нажмите на кнопку “Получить код”
                      </div>
                      <div className='confirm__button'>
                        <button type='primary' onClick={createOrderHandler}>Получить код</button>
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
