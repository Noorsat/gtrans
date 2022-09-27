import { Button, Select, Form, Input, notification } from 'antd';
import Link from 'next/link'
import {useState, useEffect} from 'react';
import {register} from './../../http/auth';
import { useRouter } from 'next/router'

const Register = () => {
    const [user, setUser] = useState();

    const router = useRouter()

    const {Option} = Select;

    const onFinish = (values) => { 
      const body = {
        email : user.email,
        password: user.password,
        companyName: user.companyName,
        phoneNumber: "+7"+user.phoneNumber
      }
      register(body).then((res) => {
        router.push("/login")
        notification["success"]({
          message:"Вы успешно зарегистрировалась"
        })
      }).catch((res) => (
        notification["error"]({
          message:res.response.data.error
        })
      ))
    };

      const onFinishFailed = (errorInfo) => {
        console.log(notification["error"]({
          message:"Заполните все поля правильно"
        }));
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
            <Input onChange={(e) => setUser({...user, email: e.target.value})} value={user?.email} />
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
            <Input.Password onChange={(e) => setUser({...user, password: e.target.value})} value={user?.password} />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Подтвердите пароль"
            dependencies={['password']}
            hasFeedback
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
            <Input.Password onChange={(e) => setUser({...user, confirmPassword: e.target.value})} value={user?.confirmPassword} />
          </Form.Item>

        <Form.Item
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
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Номер телефона"
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
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{marginBottom:12}}
          >

            <Button type="primary" htmlType="submit">
                Регистрация
            </Button>
          </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
            style={{marginBottom:12}}
        >
            <Link href={"/login"}>Логин</Link>
        </Form.Item>
        </Form>
      );
}

export default Register;