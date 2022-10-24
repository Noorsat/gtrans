import styles from './../../styles/Forgot.module.css';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import {useState} from 'react';
import { forgotPassword } from '../../http/auth';
import { AiFillTrophy } from 'react-icons/ai';

const ForgotPassword = () => {
    const [email, setEmail] = useState();

    const validateMessages = {
        required: 'Электронная почта требуется!',
        types: {
          email: `${email} недействительный адрес электронной почты!`,
        },
      };

    const onFinish = () => {
        let body = {
            email
        }
        forgotPassword(body).then((res) => {
            if (res.status === 200){
                notification["success"]({
                    message:"Мы отправили сообщениие для восстанавление пароля вам в почту!"
                })
            }
        }).catch((res) => {
            notification["error"]({
                message: res.response.data.message
            })
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Для восстановления доступа к аккаунту заполните форму ниже
            </div>
            <Form
                name="basic"
                validateMessages={validateMessages}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                //onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={styles.form}
                >
                 <Form.Item
                    name={['Email']}
                    required
                    rules={[
                    {
                        required:true,
                        type: 'email',
                    },
                    ]}
                >
                    <Input placeholder='Email' onChange={e => setEmail(e.target.value)} value={email}/>
                    </Form.Item>
                <Form.Item className={styles.button}>
                    <Button type="primary" htmlType="submit">
                        Восстановить доступ
                    </Button>
                </Form.Item>
                </Form>
        </div>
    )
}

export default ForgotPassword;