import { Button, Checkbox, Form, Input, notification } from 'antd';
import Link from 'next/link'
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import { login } from '../../http/auth';

const Login = () => {
    const [user, setUser] = useState();
    const router = useRouter();

    const onFinish = (values) => {
        login(user).then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data))
            router.push("/");
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
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          className="mt-5 pt-5"
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
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
                message: 'Пожалуйста, введите свой адрес электронной почты!', 
              },
            ]}
          >
            <Input onChange={(e) => setUser({...user, email: e.target.value})} value={user?.email}/>
          </Form.Item>
    
          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите ваш пароль!',
              },
            ]}
          >
            <Input.Password onChange={(e) => setUser({...user, password: e.target.value})} value={user?.password}/>
          </Form.Item>
          
        
        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            style={{marginBottom:"12px!important"}}
        >
            <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            style={{marginBottom:12}}
        >
            <Link href={"/register"}>Регистрация</Link>
        </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
                Войти
            </Button>
          </Form.Item>
        </Form>
      );
}

export default Login;