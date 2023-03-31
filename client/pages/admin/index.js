import {
    UserOutlined,
    DropboxOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MoneyCollectOutlined,
  } from '@ant-design/icons';
import { Button, Checkbox, Input, Menu, Modal, notification, Table } from 'antd';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { getAllUsers, getUserById } from '../../http/auth';
import { acceptProduct, addTrackerCode, changePriceByAdmin, getOrders, getOrdersByAccountId, removeTrackCode } from '../../http/orders';
import styles from './Admin.module.css';
import { getId } from '../../components/validation';
import { useRouter } from 'next/router';
import { changePrice, getPrices } from '../../http/price';

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Пользователи', 'Пользователи', <UserOutlined />),
    getItem('Заказы', 'Заказы', <DropboxOutlined />),
    getItem('Цены', 'Цены', <MoneyCollectOutlined />)
  ];


  const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [user, setUser] = useState();
    const [dashboardMode, setDashboardMode] = useState("");
    const [allData, setAllData] = useState();
    const [dashboardData, setDashboardData] = useState();
    const [dashboardColumns, setDashboardColumns] = useState();
    const [phoneInput, setPhoneInput] = useState();
    const [trackerModal, setTrackerModal] = useState();
    const [trackerSecondModal, setTrackerSecondModal] = useState();
    const [selectedIndCode, setSelectedIndCode] = useState();
    const [userModal, setUserModal] = useState(false);
    const [userModalData, setUserModalData] = useState();
    const [userModalColumns, setUserModalColumns] = useState();
    const [selectedPriceId, setSelectedPriceId] = useState();
    const [selectedPriceValue, setSelectedPriceValue] = useState();
    const [priceModal, setPriceModal] = useState(false);
    const [hoz, setHoz] = useState();
    const [tnp, setTnp] = useState();
    const [priceId, setPriceId] = useState();

    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            var decoded = jwt_decode(user?.token);
            setUser(decoded);
        }else{
            router.push("/login")
        }
        getPrices().then((res) => {
          setHoz(res.data[0]?.hoz);
          setTnp(res.data[0]?.tnp);
          setPriceId(res.data[0]?._id);
        })
    }, [])

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    const showUserOrders = (item) => {
        getOrdersByAccountId(item._id).then((res) => {
            setUserModalData(res.data);
            setUserModalColumns(
                [
                    {
                      title:"ID",
                      dataIndex: '_id',
                      key: '_id',
                      width:10
                    },
                    {
                      title:"Наименование груза",
                      dataIndex: 'type',
                      key: 'type',
                    },
                    {
                      title:"Вес одной коробки (кг)",
                      dataIndex: 'weight',
                      key: 'weight',
                    },
                    {
                      title:"Длина (м3)",
                      dataIndex: 'len',
                      key: 'len',
                    },
                    {
                      title:"Ширина (м3)",
                      dataIndex: 'width',
                      key: 'width',
                    },
                    {
                      title:"Высота (м3)",
                      dataIndex: 'height',
                      key: 'height',
                    },
                    {
                      title:"Количество",
                      dataIndex: 'count',
                      key: 'count',
                    },
                    {
                      title:"Комментарии",
                      dataIndex: 'comment',
                      key: 'comment',
                    },
                    {
                      title:"Трек код",
                      dataIndex: 'trackCode',
                      key: 'trackCode',
                    },
                    {
                      title:"Инд код",
                      dataIndex: 'individualCode',
                      key: 'individualCode',
                    }
                ]
            )
            setUserModal(true)
        }).catch((res) => {
            if (res.response.status === 404){
                notification["error"]({
                    message:res.response.data.message
                })
            }
        })
    }

    const findUserHandler = (accountId) => {
        getUserById(accountId).then((res) => {
          setUserModalData([res.data]);
        })
        setUserModalColumns(
          [
            {
                title:"Email",
                dataIndex:"email",
                key:"email"
            },
            {
                title:"Номер телефона",
                dataIndex:"phoneNumber",
                key:"phoneNumber"
            },
            {
                title:"Инд код",
                dataIndex:"id",
                key:"id",
                render: (id) => <div>SM215-{getId(id)}</div>
            }
          ]
        )
        setUserModal(true)
    }

    const phoneInputHandler = (e) => {
      setPhoneInput(e.target.value)
      setDashboardData(allData.filter(item => item?.phoneNumber?.includes(e.target.value)))
    }

    const trackerHandler = (e, item) => {
      const body = {
        individualCode: item.individualCode,
      }
      if (e.target.checked){
        addTrackerCode(body).then((res) => {
          if (res?.status < 400){
            notification["success"]({
              message:"Товар доставлен на склад"
            })
          }
        })
      }else{
        setTrackerModal(true);
        setSelectedIndCode(item.individualCode)
      }
    }
  
    const trackerAcceptHandler = (e, item) => {
      const body = {
        individualCode: item.individualCode,
      }
      if (e.target.checked){
        acceptProduct(body).then((res) => {
          if (res?.status < 400){
            notification["success"]({
              message:"Товар доставлен в Алмату"
            })
          }
        })
      }else{
        setTrackerSecondModal(true);
        setSelectedIndCode(item.individualCode)
      }
    }

    const trackerSwitchHandler = (status) => {
      const body = {
        individualCode: selectedIndCode,
        status: status
      }
      removeTrackCode(body).then((res) => {
        if (res.status < 400){
          notification["success"]({
            message:"Вы убрали галочку"
          })
          setTrackerModal(false)
        } 
      })
    }

    const changeToInputHandler = (id) => {
      setSelectedPriceId(id);
    }


    const submitChangePriceHandler = () => {
      let body = {
        price: selectedPriceValue
      }

      changePriceByAdmin(selectedPriceId, body).then((res) => {
        if (res.status === 200){
          setSelectedPriceId(0);
          setSelectedPriceValue("");
          setPriceModal(false)
          window.location.reload();
        }
      })
    }

    const closePriceModal = () => {
      setSelectedPriceId(0);
      setSelectedPriceValue("");
      setPriceModal(false);
    }

    const hozInputHandler = (value, name) => {
      setHoz({...hoz, [name]: value === '' ? '' : parseFloat(value)})
    }

    const tnpInputHandler = (value, name) => {
      setTnp({...tnp, [name]: value === '' ? '' : parseFloat(value)})
    }

    const savePriceHandler = () => {
      const body = {
        hoz: hoz,
        tnp:tnp
      }
      changePrice(priceId, body).then((res) => {
        if (res.status === 200){
          notification['success']({
            message:"Вы изменили цену"
          })
        }else{
          notification['error']({
            message:'Не удалось поменять цены'
          })
        }
      })
    } 


    const menuChangeHandler = (e) => {
        if (e.key === "Пользователи"){
            setDashboardMode("Пользователи")
            getAllUsers().then((res) => {
                setDashboardData(res.data)
                setAllData(res.data)
            })
            setDashboardColumns(
                [
                    {
                        title:"Email",
                        dataIndex:"email",
                        key:"email"
                    },
                    {
                        title:"Номер телефона",
                        dataIndex:"phoneNumber",
                        key:"phoneNumber"
                    },
                    {
                        title:"Инд код",
                        dataIndex:"id",
                        key:"id",
                        render: (id) => <div>SM215-{getId(id)}</div>
                    },
                    {
                        title:"Посмотреть заказы",
                        render: (e, item) => <Button type='primary' onClick={() => showUserOrders(item)}>Посмотреть заказы</Button>
                    }
                ]
            )
        }else if (e.key === "Заказы"){
            setDashboardMode("Заказы");
            getOrders().then((res) => {
              let repeatedOrders = [];
              let newOrders = res.data.map((order, index) => {
                if (!repeatedOrders.includes(order?.individualCode)){
                  order.rowSpan = res.data.filter((item, i) => item?.individualCode === order?.individualCode).length;
                }
                repeatedOrders.push(order?.individualCode);
                return order;
              })
              setDashboardData(newOrders)
            })
            setDashboardColumns(
                [
                  {
                    title:"Прибыло на склад",
                    onCell: (_, index) => ({
                      rowSpan: _.rowSpan ? _.rowSpan : 0
                    }),
                    render:(e, item) => (
                      <div className='d-flex justify-content-center'>
                        <Checkbox onChange={(e) => trackerHandler(e, item)} defaultChecked={item?.status >= 1} />
                      </div>
                    )
                  }, 
                  {
                    title:"Прибыло в Алмату",
                    onCell: (_, index) => ({
                      rowSpan: _.rowSpan ? _.rowSpan : 0
                    }),
                    render:(e, item) => (
                      <div className='d-flex justify-content-center'>
                        <Checkbox onChange={(e) => trackerAcceptHandler(e, item)} defaultChecked={item?.status === 2} />
                      </div>
                    )
                  }, 
                  {
                    title:'Трекинг',
                    dataIndex:'request',
                    key:'request',
                    onCell: (_, index) => ({
                      rowSpan: _.rowSpan ? _.rowSpan : 0
                    }),
                    render: (e, item) => (
                        <div>
                          {item?.trackCode}
                        </div>
                    )
                  },
                  {
                    title:"Наименование груза",
                    dataIndex: 'type',
                    key: 'type',
                  },
                  {
                    title:"Вес одной коробки (кг)",
                    dataIndex: 'weight',
                    key: 'weight',
                  },
                  {
                    title:"Длина (м3)",
                    dataIndex: 'len',
                    key: 'len',
                  },
                  {
                    title:"Ширина (м3)",
                    dataIndex: 'width',
                    key: 'width',
                  },
                  {
                    title:"Высота (м3)",
                    dataIndex: 'height',
                    key: 'height',
                  },
                  {
                    title:"Количество",
                    dataIndex:"count",
                    key:"count"
                  },
                  {
                    title:"Комментарии",
                    dataIndex: 'comment',
                    key: 'comment',
                  },
                  {
                    title:"Инд код",
                    dataIndex: 'individualCode',
                    key: 'individualCode',
                    onCell: (_, index) => ({
                      rowSpan: _.rowSpan ? _.rowSpan : 0
                    })
                  },
                  {
                    title:'Цена',
                    dataIndex:'price',
                    key:'price',
                    onCell: (_, index) => ({
                      rowSpan: _.rowSpan ? _.rowSpan : 0
                    }),
                    render: (e, item) => (
                      <>
                        <div style={{textAlign:'center'}}>
                          {item.price} $
                        </div>
                        <Button type='primary' onClick={() => {
                          setSelectedPriceId(item.individualCode);
                          setPriceModal(true)                          
                        }}>Изменить цену</Button>
                      </>
                    )
                  },
                    {
                        title:"Заказщик",
                        onCell: (_, index) => ({
                          rowSpan: _.rowSpan ? _.rowSpan : 0
                        }),
                        render: (e,item) => <Button type='primary' onClick={() => findUserHandler(item.accountId)}>Узнать заказщика</Button>
                    },
                ]
            )
        }else if (e.key === 'Цены'){
          setDashboardMode('Цены')
        }
    }
    return (
        <div className={styles.wrapper}>
            <div>
                <Modal open={userModal} footer={[]} onCancel={() => setUserModal(false)} className="userModal">
                    <Table columns={userModalColumns} dataSource={userModalData} pagination={false} />
                </Modal>
            </div>
            <Modal open={trackerModal} footer={[
              <Button onClick={() =>  setTrackerModal(false)}>
                Назад
              </Button>,
              <Button onClick={() => trackerSwitchHandler(0)}>
                Убрать
              </Button>
            ]}>
              Вы точно хотите убрать галочку?
            </Modal>
            <Modal open={trackerSecondModal} footer={[
              <Button onClick={() =>  setTrackerModal(false)}>
                Назад
              </Button>,
              <Button onClick={() => trackerSwitchHandler(1)}>
                Убрать
              </Button>
            ]}>
              Вы точно хотите убрать галочку?
            </Modal>
            <Modal open={priceModal} footer={[
              <Button onClick={closePriceModal}>
                Назад
              </Button>,
              <Button onClick={submitChangePriceHandler}>
                Сохранить
              </Button>
            ]}>
                <Input value={selectedPriceValue} onChange={(e) => setSelectedPriceValue(e.target.value)} style={{marginTop:50}}/>
            </Modal>
        <div
            style={{
            width: 256,
            }}
        >
            <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
                marginBottom: 16,
            }}
            >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                onSelect={menuChangeHandler}
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
        <div className={styles.table}>
          {
            dashboardMode === "Пользователи" && 
            <Input placeholder="Поиск по номеру телефона" className={styles.input} phoneInput={phoneInput} onChange={(e) => phoneInputHandler(e)}/>
          }
          {
            (dashboardMode === "Пользователи" || dashboardMode === 'Заказы') && 
            <Table columns={dashboardColumns} dataSource={dashboardData} style={{width:"100%"}} pagination={false}/>
          }
          {
            dashboardMode === 'Цены' && (
              <>
                <table className={styles.tablesss}>
                  <thead>
                    <th>
                      Вес в 1 кубе (плотность)
                    </th>
                    <th>  
                      Цена ($) за 1 кг <br></br>Хозка  
                    </th>
                    <th>
                      Цена ($) за 1 кг <br></br>ТНП  
                    </th>
                  </thead>
                  <tr>
                    <td>
                      1000 и выше
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more1000} onChange={(e) => hozInputHandler(e.target.value, 'more1000')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more1000} onChange={(e) => tnpInputHandler(e.target.value, 'more1000')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      800-1000
                    </td>
                    <td>  
                      <input type='number'  value={hoz?.more800Less1000} onChange={(e) => hozInputHandler(e.target.value, 'more800Less1000')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more800Less1000} onChange={(e) => tnpInputHandler(e.target.value, 'more800Less1000')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      600-800
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more600Less800} onChange={(e) => hozInputHandler(e.target.value, 'more600Less800')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more600Less800} onChange={(e) => tnpInputHandler(e.target.value, 'more600Less800')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      400-600
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more400Less600} onChange={(e) => hozInputHandler(e.target.value, 'more400Less600')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more400Less600} onChange={(e) => tnpInputHandler(e.target.value, 'more400Less600')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      350-400
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more350Less400} onChange={(e) => hozInputHandler(e.target.value, 'more350Less400')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more350Less400} onChange={(e) => tnpInputHandler(e.target.value, 'more350Less400')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      300-350
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more300Less350} onChange={(e) => hozInputHandler(e.target.value, 'more300Less350')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more300Less350} onChange={(e) => tnpInputHandler(e.target.value, 'more300Less350')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      250-300
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more250Less300} onChange={(e) => hozInputHandler(e.target.value, 'more250Less300')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more250Less300} onChange={(e) => tnpInputHandler(e.target.value, 'more250Less300')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      200-250
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more200Less250} onChange={(e) => hozInputHandler(e.target.value, 'more200Less250')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more200Less250} onChange={(e) => tnpInputHandler(e.target.value, 'more200Less250')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      190-200
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more190Less200} onChange={(e) => hozInputHandler(e.target.value, 'more190Less200')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more190Less200} onChange={(e) => tnpInputHandler(e.target.value, 'more190Less200')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      180-190
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more180Less190} onChange={(e) => hozInputHandler(e.target.value, 'more180Less190')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more180Less190} onChange={(e) => tnpInputHandler(e.target.value, 'more180Less190')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      170-180
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more170Less180} onChange={(e) => hozInputHandler(e.target.value, 'more170Less180')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more170Less180} onChange={(e) => tnpInputHandler(e.target.value, 'more170Less180')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      160-170
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more160Less170} onChange={(e) => hozInputHandler(e.target.value, 'more160Less170')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more160Less170} onChange={(e) => tnpInputHandler(e.target.value, 'more160Less170')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      150-160
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more150Less160} onChange={(e) => hozInputHandler(e.target.value, 'more150Less160')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more150Less160} onChange={(e) => tnpInputHandler(e.target.value, 'more150Less160')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      140-150
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more140Less150} onChange={(e) => hozInputHandler(e.target.value, 'more140Less150')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more140Less150} onChange={(e) => tnpInputHandler(e.target.value, 'more140Less150')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      130-140
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more130Less140} onChange={(e) => hozInputHandler(e.target.value, 'more130Less140')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more130Less140} onChange={(e) => tnpInputHandler(e.target.value, 'more130Less140')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      120-130
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more120Less130} onChange={(e) => hozInputHandler(e.target.value, 'more120Less130')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more120Less130} onChange={(e) => tnpInputHandler(e.target.value, 'more120Less130')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      110-120
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more110Less120} onChange={(e) => hozInputHandler(e.target.value, 'more110Less120')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more110Less120} onChange={(e) => tnpInputHandler(e.target.value, 'more110Less120')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      100-110
                    </td>
                    <td>  
                      <input type='number' value={hoz?.more100Less110} onChange={(e) => hozInputHandler(e.target.value, 'more100Less110')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.more100Less110} onChange={(e) => tnpInputHandler(e.target.value, 'more100Less110')}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      100 и ниже
                    </td>
                    <td>  
                      <input type='number' value={hoz?.less100} onChange={(e) => hozInputHandler(e.target.value, 'less100')}/>
                    </td>
                    <td>
                      <input type='number' value={tnp?.less100} onChange={(e) => tnpInputHandler(e.target.value, 'less100')}/>
                    </td>
                  </tr>
                </table>
                <Button type='primary' className={styles.button} onClick={savePriceHandler}>
                  Сохранить
                </Button>
              </>
            )
          }
        </div>
      </div>
    );
  };
  export default Admin;