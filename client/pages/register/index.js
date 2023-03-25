import { Button, Select, Form, Input, notification, DatePicker } from 'antd';
import Link from 'next/link'
import {useState, useEffect} from 'react';
import {register} from './../../http/auth';
import { useRouter } from 'next/router';
import styles from './../../styles/Register.module.css';
import ru_RU from "antd/lib/locale/ru_RU";

const Register = () => {
    const [user, setUser] = useState();

    const router = useRouter()

    const {Option} = Select;

    console.log(user);

    const onFinish = (values) => { 
      const body = {
        email : user.email,
        name: user?.name,
        surname: user?.surname,
        dateOfBirth: user?.dateOfBirth,
        password: user.password,
        companyName: user.companyName,
        phoneNumber: "+7"+user.phoneNumber
      }
      register(body).then((res) => {
        notification["success"]({
          message:"Вы успешно зарегистрировалась"
        })
        console.log(res.data)
        localStorage.setItem("user", JSON.stringify(res.data))
        router.push("/request");
      }).catch((res) => (
        notification["error"]({
          message:res.response.data.error
        })
      ))
    };

      const onFinishFailed = (errorInfo) => {
        notification["error"]({
          message:"Заполните все поля правильно"
        });
      };
    
      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
            defaultValue="7"
          >
            <Option value="7">+7</Option>
          </Select>
        </Form.Item>
      );

      return (
        <div className={`${styles.register} register`}>
          <div className='container'>
            <div className={styles.wrapper}>
              <div className={styles.instruction__mobile}>
                <div className={`${styles.instruction__title} ${styles.instruction__title_mobile}`}>
                  Инструкция  
                </div>
                <div className={styles.instruction__items}>
                  <div className={styles.instruction__item}>
                    <div className={styles.instruction__item_number}>
                      1
                    </div>
                    <div className={styles.instruction__item_text}>
                      Зарегистрируйтесь и получите адрес своего склада в Китае
                    </div>
                  </div>
                  <div className={styles.instruction__item}>
                    <div className={styles.instruction__item_number}>
                      2
                    </div>
                    <div className={styles.instruction__item_text}>
                      Покупайте онлайн в Китае
                    </div>
                  </div>
                  <div className={styles.instruction__item}>
                    <div className={styles.instruction__item_number}>
                      3
                    </div>
                    <div className={styles.instruction__item_text}>
                      Забирайте посылки через 15-20 дней в Казахстане
                    </div>
                  </div>
                </div>

              </div>
              <div className={styles.form}>
                <div className={styles.form__title}>
                  Зарегистрироваться  
                </div>
                <Form
          name="basic"
          className="ms-auto me-auto input"
          
          labelCol={{
            span:6
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите свой адрес электронной почты!',
              },
            ]}
          >
            <Input onChange={(e) => setUser({...user, email: e.target.value})} value={user?.email} placeholder="Ваш e-mail *" />
          </Form.Item>

          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите свое имя!',
              },
            ]}
          >
            <Input onChange={(e) => setUser({...user, name: e.target.value})} value={user?.name} placeholder="Вашe имя *" />
          </Form.Item>

          <Form.Item
            name="surname"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите свою фамилию!',
              },
            ]}
          >
            <Input onChange={(e) => setUser({...user, surname: e.target.value})} value={user?.surname} placeholder="Вашe фамилия *" />
          </Form.Item>

          <Form.Item
            name="dateOfBirth"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите свое дата рождения!',
              },
            ]}
          >
            <DatePicker locale={ru_RU} onChange={(e) => setUser({...user, dateOfBirth: e})} value={user?.dateOfBirth} className='w-100 datepicker' placeholder='Ваша дата рождения *'/>
          </Form.Item>
    
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите пароль!',
              },
            ]}
          >
            <Input type='password' placeholder='Придумайте пароль *' onChange={(e) => setUser({...user, password: e.target.value})} value={user?.password} />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите пароль!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('Два введенных вами пароля не совпадают!'));
                },
              }),
            ]}
          >
            <Input type='password' placeholder='Подтвердите пароль *'  onChange={(e) => setUser({...user, confirmPassword: e.target.value})} value={user?.confirmPassword} />
          </Form.Item>

        {/* <Form.Item
            label="Название компании"
            name="companyName"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, заполните поле!',
              },
            ]}
          >
            <Input onChange={(e) => setUser({...user, companyName: e.target.value})} value={user?.companyName} />
          </Form.Item> */}

          <Form.Item
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, заполните поле!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
              onChange={(e) => setUser({...user, phoneNumber: e.target.value})} value={user?.phoneNumber} 
              placeholder="Номер телефона"
              className='number__input'
            />
          </Form.Item>
          <div className='d-flex align-items-center justify-content-center flex-column justify-content-md-start flex-md-row' style={{marginTop:33}}>
              <div className={styles.register__button}>
                <button htmlType="submit">
                  Зарегистрироваться
                </button>
              </div>
              <div className={styles.login__link}>
                <Link href={"/login"}>Войти в личный кабинет</Link>
              </div>
          </div>
          {/* <Form.Item
            style={{marginBottom:12}}
          >

            <Button type="primary" htmlType="submit">
                Регистрация
            </Button>
          </Form.Item> */}
{/* 
        <Form.Item
            style={{marginBottom:12}}
        >
            <Link href={"/login"}>Логин</Link>
        </Form.Item> */}
        </Form>
              </div>
              <div className={styles.instruction}>
                <div className={styles.instruction__title}>
                  Инструкция  
                </div>
                <div className={styles.instruction__items}>
                  <div className={styles.instruction__item}>
                    <div className={styles.instruction__item_number}>
                      1
                    </div>
                    <div className={styles.instruction__item_text}>
                      Зарегистрируйтесь и получите адрес своего склада в Китае
                    </div>
                  </div>
                  <div className={styles.instruction__item}>
                    <div className={styles.instruction__item_number}>
                      2
                    </div>
                    <div className={styles.instruction__item_text}>
                      Покупайте онлайн в Китае
                    </div>
                  </div>
                  <div className={styles.instruction__item}>
                    <div className={styles.instruction__item_number}>
                      3
                    </div>
                    <div className={styles.instruction__item_text}>
                      Забирайте посылки через 15-20 дней в Казахстане
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Register;