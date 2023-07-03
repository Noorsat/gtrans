import {
    UserOutlined,
    DropboxOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MoneyCollectOutlined,
  } from '@ant-design/icons';
import { Button, Checkbox, Input, Menu, Modal, notification, Table, Form, DatePicker, Tooltip } from 'antd';
import { useState, useEffect } from 'react';
import { changeRoleToAdmin, getAllUsers, getUserById, signupUserByAdmin } from '../../http/auth';
import { acceptProduct, addTrackerCode, changePriceByAdmin, getOrders, getOrdersByAccountId, removeTrackCode } from '../../http/orders';
import styles from './Admin.module.css';
import { getId } from '../../components/validation';
import { useRouter } from 'next/router';
import { changePrice, getPrices } from '../../http/price';
import moment from 'moment';
import jwtDecode from 'jwt-decode';

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
    const [createUserModal, setCreateUserModal] = useState();
    const [trackerModal, setTrackerModal] = useState();
    const [trackerSecondModal, setTrackerSecondModal] = useState();
    const [selectedIndCode, setSelectedIndCode] = useState();
    const [userModal, setUserModal] = useState(false);
    const [userModalData, setUserModalData] = useState();
    const [userModalColumns, setUserModalColumns] = useState();
    const [selectedPriceId, setSelectedPriceId] = useState();
    const [selectedPriceValue, setSelectedPriceValue] = useState();
    const [priceModal, setPriceModal] = useState(false);
    const [prices, setPrices] = useState();
    const [hoz, setHoz] = useState();
    const [tnp, setTnp] = useState();
    const [priceId, setPriceId] = useState();

    const [allOrders, setAllOrders] = useState();
    const [individualCodeInput, setIndividualCodeInput] = useState("");
    const [trackCodeInput, setTrackCodeInput] = useState('');
    const [registerUser, setRegisterUser] = useState({});

    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user?.role != "admin" && user?.role != "superadmin"){
          router.push("/request")
        }

        var decoded = jwtDecode(user?.token)
        const id = decoded?._id

        setUser({...user, _id: id})

        getPrices().then((res) => {
          setPrices(res.data);
          setHoz(res.data[0]?.hoz);
          setTnp(res.data[0]?.tnp);
          setPriceId(res.data[0]?._id);
        })
    }, [])

    useEffect(() => {
      if (individualCodeInput.length === 0){
        setDashboardData(allOrders);
      }
      if (individualCodeInput?.length > 0){
        setTrackCodeInput("");
        setDashboardData(allOrders?.filter(item => item?.individualCode?.includes(individualCodeInput)))
      }
    }, [individualCodeInput])

    useEffect(() => {
      if (trackCodeInput.length === 0){
        setDashboardData(allOrders);
      }
      if (trackCodeInput?.length > 0){
        setDashboardData(allOrders?.filter(item => item?.trackCode?.includes(trackCodeInput)))
      }

    }, [trackCodeInput])

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
            getOrders().then((res) => {
              let repeatedOrders = [];
              let newOrders = res.data.map((order, index) => {
                if (!repeatedOrders.includes(order?.individualCode)){
                  order.rowSpan = res.data.filter((item, i) => item?.individualCode === order?.individualCode).length;
                }
                repeatedOrders.push(order?.individualCode);
                return order;
              })
              setAllOrders(newOrders)
              setDashboardData(newOrders)
            })
          }
        })
      }else{
        setTrackerModal(true);
        setSelectedIndCode(item.individualCode)
      }
    }
  
    const trackerAcceptHandler = async (e, item) => {
      const body = {
        individualCode: item.individualCode,
        email: await getUserById(item?.accountId).then((res) => res?.data?.email)
      }
      if (e.target.checked){
        acceptProduct(body).then((res) => {
          if (res?.status < 400){
            notification["success"]({
              message:"Товар доставлен в Алмату"
            })
            getOrders().then((res) => {
              let repeatedOrders = [];
              let newOrders = res.data.map((order, index) => {
                if (!repeatedOrders.includes(order?.individualCode)){
                  order.rowSpan = res.data.filter((item, i) => item?.individualCode === order?.individualCode).length;
                }
                repeatedOrders.push(order?.individualCode);
                return order;
              })
              setAllOrders(newOrders)
              setDashboardData(newOrders)
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
          getOrders().then((res) => {
            let repeatedOrders = [];
            let newOrders = res.data.map((order, index) => {
              if (!repeatedOrders.includes(order?.individualCode)){
                order.rowSpan = res.data.filter((item, i) => item?.individualCode === order?.individualCode).length;
              }
              repeatedOrders.push(order?.individualCode);
              return order;
            })
            setAllOrders(newOrders)
            setDashboardData(newOrders)
          })
          setTrackerModal(false)
          setTrackerSecondModal(false)
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

    const hozInputHandler = (value, from, to, id) => {
      setPrices(prices.map(price => {
        if (price._id == id){
          price.items = price.items?.map(item => {
            if (item?.from == from && item?.to == to){
              item.hoz = value;
            }
            return item;
          })
        }
        return price;
      }))
    }

    const tnpInputHandler = (value, from, to, id) => {
      setPrices(prices.map(price => {
        if (price._id == id){
          price.items = price.items?.map(item => {
            if (item?.from == from && item?.to == to){
              item.tnp = value;
            }
            return item;
          })
        }
        return price;
      }))
    }

    const savePriceHandler = () => {
      changePrice({prices:prices}).then((res) => {
        if (res.status === 200){
          notification['success']({
            message:"Вы изменили цену"
          })
          setPrices(res.data);
        }else{
          notification['error']({
            message:'Не удалось поменять цены'
          })
        }
      })
    } 

    const createUserModalCancel = () => {
      setCreateUserModal(false);
    }

    const openCreateUserModal = () => {
      setCreateUserModal(true);
    }

    const onFinish = () => {
      if (registerUser.password !== registerUser.confirmPassword){
        return notification["error"]({
          message: "Пароли не одинаковые"
        }) 
      }

      signupUserByAdmin(registerUser).then((res) => {
        if (res.status === 200){
          notification["success"]({
            message:"Вы успешно создали пользователя"
          })
          setRegisterUser({})
          setCreateUserModal(false)
          getAllUsers().then((res) => {
            setDashboardData(res.data)
            setAllData(res.data)
        })
        }else{
          notification["error"]({
            message:"Ошибка"
          })
        }
      }).catch((res) => {
        notification["error"]({
          message:"Ошибка"
        })
      })
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    console.log(user);

    const userDoAdminHandler = (id, role) => {
      const body = {
        id,
        userId: user?._id
      }

      changeRoleToAdmin(body, role === "admin" ? 'user' : 'admin').then((res) => {
        if (res.status === 200){
          notification["success"]({
            message:"Вы успешно поменяли роль"
          })
          setDashboardData(res.data)
          setAllData(res.data)
        }else if (res.status === 500){
          notification["error"]({
            message: res?.response?.data?.message
          })
        }
      }).catch((res) => {
        notification["error"]({
          message: res?.response?.data?.message
        })
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
                        key:"email",
                        render: (e, item) => {
                          return (
                            <Tooltip title={<Button type='primary' onClick={() => userDoAdminHandler(item?._id, item?.role)}>{item?.role === "admin" ? "Сделать юзером" : "Сделать админом"}</Button>} trigger="click">
                              <span style={{cursor:'pointer'}}>{e}</span>
                            </Tooltip>
                          )
                        }
                    },
                    {
                        title:"Номер телефона",
                        dataIndex:"phoneNumber",
                        key:"phoneNumber"
                    },
                    {
                      title:"Роль",
                      dataIndex:"role",
                      key:"role",
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
              setAllOrders(newOrders)
              setDashboardData(newOrders)
            })
            setDashboardColumns(
                [
                  {
                    title: 'Дата создание заказа',
                    onCell: (_, index) => ({
                      rowSpan: _.rowSpan ? _.rowSpan : 0
                    }),
                    render: (e, item) => (
                      <>
                        {moment(item?.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                      </>
                    ),
                    sorter: (a, b) => moment(a?.createdAt).date() - moment(b?.createdAt).date()
                  },
                  {
                    title:"Прибыло на склад",
                    onCell: (_, index) => ({
                      rowSpan: _.rowSpan ? _.rowSpan : 0
                    }),
                    render:(e, item) => (
                      <div className='d-flex justify-content-center'>
                        <Checkbox onChange={(e) => trackerHandler(e, item)} checked={item?.status >= 1} />
                      </div>
                    ),
                  }, 
                  {
                    title:"Прибыло в Алмату",
                    onCell: (_, index) => ({
                      rowSpan: _.rowSpan ? _.rowSpan : 0
                    }),
                    render:(e, item) => (
                      <div className='d-flex justify-content-center'>
                        <Checkbox onChange={(e) => trackerAcceptHandler(e, item)} checked={item?.status === 2} />
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
                    ),
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
                    }),
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
                    ),
                    sorter: (a,b) => a.price - b.price
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
            <Modal open={createUserModal} footer={[]} onCancel={createUserModalCancel}>
            <Form
              name="basic"
              style={{
                maxWidth: 450,
              }}
              initialValues={{
                remember: true,
              }}
              labelCol={{
                span: 9,
              }}
              wrapperCol={{
                span: 20,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите адрес электронной почты!',
                  },
                ]}
              >
                <Input value={registerUser?.email} onChange={(e) => setRegisterUser({...registerUser, email: e.target.value})} />
              </Form.Item>
              <Form.Item
                label="Имя"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите имя!',
                  },
                ]}
              >
                <Input value={registerUser?.name} onChange={(e) => setRegisterUser({...registerUser, name: e.target.value})}/>
              </Form.Item>
              <Form.Item
                label="Фамилия"
                name="surname"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите фамилию!',
                  },
                ]}
              >
                <Input value={registerUser?.surname} onChange={(e) => setRegisterUser({...registerUser, surname: e.target.value})} />
              </Form.Item>
              <Form.Item
                label="Дата рождения"
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите дату рождения!',
                  },
                ]}
              >
                <DatePicker placeholder='' style={{width: '100%'}} value={registerUser?.dateOfBirth} onChange={(e, time) => setRegisterUser({...registerUser, dateOfBirth: time })}/>
              </Form.Item>

              <Form.Item
                label="Телефон"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите номер телефона!',
                  },
                ]}
              >
                <Input value={registerUser?.phoneNumber} onChange={(e) => setRegisterUser({...registerUser, phoneNumber: e.target.value})} />
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите пароль!',
                  },
                ]}
              >
                <Input.Password value={registerUser?.password} onChange={(e) => setRegisterUser({...registerUser, password: e.target.value})} />
              </Form.Item>
              <Form.Item
                label="Подтвердите пароль"
                name="confimPassword"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, подтвердите пароль!',
                  },
                ]}
              >
                <Input.Password value={registerUser?.confirmPassword} onChange={(e) => setRegisterUser({...registerUser, confirmPassword: e.target.value})} />
              </Form.Item>
              <Form.Item
              >
                <Button type="primary" htmlType="submit" style={{marginTop:20}}>
                  Создать пользователя
                </Button>
              </Form.Item>
            </Form>
            </Modal>
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
              <Button onClick={() =>  setTrackerSecondModal(false)}>
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
            <div className='d-flex align-items-center gap-3'>
              <div>
                <Input placeholder="Поиск по номеру телефона" className={styles.input} phoneInput={phoneInput} onChange={(e) => phoneInputHandler(e)}/>
              </div>
              <div>
                <Button type='primary' onClick={openCreateUserModal}>Добавить пользователя</Button>
              </div>
            </div>
          }
          {
            dashboardMode === 'Заказы' &&
            <>
              <Input placeholder='Поиск по инд коду' className={styles.input} value={individualCodeInput} onChange={(e) => setIndividualCodeInput(e.target.value)} />
              <Input placeholder='Поиск по трекингу' className={styles.input} value={trackCodeInput} onChange={(e) => setTrackCodeInput(e.target.value)} />
            </>

          }
          {
            (dashboardMode === "Пользователи" || dashboardMode === 'Заказы') && 
            <Table columns={dashboardColumns} dataSource={dashboardData} style={{width:"100%"}} pagination={false}/>
          }
          {
            dashboardMode === 'Цены' && (
              <div className={styles.table__items}>
                {
                  prices && prices.map(price => (
                    <div style={{width: 'fit-content', margin:'10px 0'}}>
                      <div className={styles.admin__title}>
                        {price?.title}
                      </div>
                      <table className={styles.tablesss}>
                        <thead>
                          <th>
                            Вес в 1 кубе (плотность)
                          </th>
                          <th>  
                            Цена ($) за 1 кг <br></br>Хозка  
                          </th>
                          {
                            price?.title?.includes("Экспрес") &&
                            <th>
                              Цена ($) за 1 кг <br></br>ТНП  
                            </th>
                          }
                        </thead>
                        {
                          price?.items?.map(item => (
                            <tr>
                              <td>
                                {item?.from} - {item?.to == 999999999 ? '<' : item?.to}
                              </td>
                              <td>  
                                <input type='number' value={item?.hoz} onChange={(e) => hozInputHandler(e.target.value, item?.from, item?.to, price?._id)}/>
                              </td>
                              {
                                price?.title?.includes("Экспрес") &&
                                <td>
                                  <input type='number' value={item?.tnp} onChange={(e) => tnpInputHandler(e.target.value, item?.from, item?.to, price?._id)}/>
                                </td>
                              }
                            </tr>
                          ))
                        }
                      </table>
                    </div>
       
                  ))
                }
              <Button type='primary' className={styles.button} onClick={savePriceHandler} style={{width:200}}>
              Сохранить
            </Button>
              </div>
            )
          }
        </div>
      </div>
    );
  };
  export default Admin;