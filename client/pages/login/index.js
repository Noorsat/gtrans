import { Button, Checkbox, Form, Input, notification } from 'antd';
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from './../../styles/Login.module.css';
import {useState, useEffect} from 'react';
import { login } from '../../http/auth';


const Login = () => {
    const [user, setUser] = useState();
    const router = useRouter();

    const onFinish = (values) => {
        login(user).then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data))
            if (res.data.role === "admin" || res?.data?.role === "superadmin"){
              router.push("/admins")
            }else{
              router.push("/request");
            }
        }).catch((res) => {
            notification["error"]({
                message:res.response.data.error
              })
        })
    };
    
      const onFinishFailed = (errorInfo) => {
        notification["error"]({
            message:"Заполните все поля правильно!"
        })
      };
    
      return (
        <div className={styles.login}> 
          <div className={styles.login__title}>
            Войти в личный кабинет
          </div>
          <Form
          name="basic"
          className={`ms-auto me-auto input ${styles.form}`}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            labelCol={{span:3}}
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите свой адрес электронной почты!', 
              },
            ]}
            className='email-input'
          >
            <Input onChange={(e) => setUser({...user, email: e.target.value})} value={user?.email} placeholder="E-mail"/>
          </Form.Item>
    
          <Form.Item
            name="password"
            labelCol={{span:3}}
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите ваш пароль!',
              },
            ]}
            className="input"
          >
            <Input type='password' onChange={(e) => setUser({...user, password: e.target.value})} value={user?.password} placeholder="Пароль"/>
          </Form.Item>
        <Form.Item
            name="remember"
            valuePropName="checked"
            style={{textAlign:"center"}}
        >
            <Checkbox className='remember__label'>Запомнить меня</Checkbox>
        </Form.Item>
        <Form.Item
          style={{textAlign:"center"}}
        > 
          <div className={styles.register__link}>
            <Link href={"/forgot"}>Забыли пароль?</Link>
          </div>
      </Form.Item>
        <div className='d-flex justify-content-center align-items-center'>
          <div className={styles.login__button}>
            <button type="primary" htmlType="submit">
              Войти
            </button>
          </div>
          <div className={styles.register__link}>
            <Link href={"/register"}>Регистрация</Link>
          </div>
        </div>
        {/* <Form.Item
            style={{marginBottom:0}}
        >
            <Link href={"/register"}>Регистрация</Link>
        </Form.Item> */}
        
          {/* <Form.Item
          >
            <Button type="primary" htmlType="submit">
                Войти
            </Button>
          </Form.Item> */}
        </Form>
        </div>
      );
}

export default Login;