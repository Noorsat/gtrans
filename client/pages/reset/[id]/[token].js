import {useState, useEffect} from 'react';
import { getResetPassword, postResetPassword } from '../../../http/auth';
import { useRouter } from 'next/router'
import { notification, Button, Checkbox, Form, Input } from 'antd';
import styles from './../../../styles/Reset.module.css';

const Reset = () => {
    const router = useRouter();

    const {id, token } = router.query;
    const [isShow, setIsShow] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if (router.isReady){
            getResetPassword(id, token).then((res) => {
                if (res.status !== 200){
                    notification['error']({
                        message:'Ошибка',
                        description:"Время для восстановление пароля прошло!"
                    })
                }else{
                    setIsShow(true)
                }
            })
        }
    }, [router.isReady])

    const onFinish = () => {
        let body  ={
            password:password
        }
        postResetPassword(id, token, body).then((res) => {
            console.log(res.data)
        })
    }

    return (
        <div>
            {
                isShow &&
                <div>
                    <h3 className={styles.title}>
                        Восстанавление пароля
                    </h3>
                    <Form
                        name="register"
                        className={styles.form}
                        onFinish={onFinish}
                        >

                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите ваш пароль',
                            },
                            ]}
                        >
                            <Input.Password placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, подтвердите свой пароль!',
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
                            <Input.Password placeholder='Подтвердить пароль' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </Form.Item>
                        <Form.Item className={styles.button}>
                            <Button type="primary" htmlType="submit">
                                Восстанавить пароль
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            }
        </div>
    )
}

export default Reset;