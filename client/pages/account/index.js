import { Button, Card } from 'antd';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import styles from '../../styles/Account.module.css';
import { useRouter } from 'next/router';
import { getId } from '../../components/validation';
import moment from 'moment';


const Account = () => {
    const [user, setUser] = useState();
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            var decoded = jwt_decode(user?.token);
            console.log(decoded)
            setUser(decoded);
        }else{
            router.push("/login")
        }
    }, [])

    console.log(user);

    const exitHandler = () => {
        localStorage.removeItem("user")
        router.push("/login")
    }

    return (
        <>
            <div className='container'>
                <div className={styles.title}>
                    Мои данные
                </div>
                <div className={styles.account__items}>
                    <div className={styles.account__item}>
                        <div className={styles.account__item_title}>
                            Имя 
                        </div>
                        <div className={styles.account__item_text}>
                            {user?.name}
                        </div>
                    </div>
                    <div className={styles.account__item}>
                        <div className={styles.account__item_title}>
                            Фамилия 
                        </div>
                        <div className={styles.account__item_text}>
                            {user?.surname}
                        </div>
                    </div>
                    <div className={styles.account__item}>
                        <div className={styles.account__item_title}>
                            Дата рождения 
                        </div>
                        <div className={styles.account__item_text}>
                            {moment(user?.dateOfBirth).format('YYYY-MM-DD') }
                        </div>
                    </div>
                </div>
                <div className={styles.account__items}>
                    <div className={styles.account__item}>
                        <div className={styles.account__item_title}>
                            E-mail 
                        </div>
                        <div className={styles.account__item_text}>
                            {user?.email}
                        </div>
                    </div>
                    <div className={styles.account__item}>
                        <div className={styles.account__item_title}>
                            Телефон 
                        </div>
                        <div className={styles.account__item_text}>
                            {user?.phoneNumber}
                        </div>
                    </div>
                </div>
                <div className={styles.account__items}>
                    <div className={styles.account__item}>
                        <div className={styles.account__item_title}>
                            Адрес склада
                        </div>
                        <div className={styles.account__item_text}>
                            广东省广州市白云区石门街道，窖心大道2号007库房创胜新天地后侧停车场
                            手机号码: 13930311979
                            所在地区
                        </div>
                    </div>
                </div>
                <div onClick={exitHandler} className={styles.account__button}>
                    Выйти
                </div>
            </div>
            {/* <Card title="Мой аккаунт" style={{ maxWidth:600, margin:"0 auto", marginTop:50}}>
                <div className={styles.item}>
                    Email: <span className={styles.text}>{user?.email}</span>
                </div>
                <div className={styles.item}>
                    Контакты: <span className={styles.text}>{user?.phoneNumber}</span>
                </div>
                <div className={styles.item}>
                    Адрес склада: <span className={styles.text}>广州市一库越秀区荔德路318号汇富商贸中心A13栋104号 王明磊 13930311979</span>
                </div>
                {/* <div className={styles.item}>
                    Инд код: <span className={styles.text}>SM215-{getId(user?.id)}</span>
                </div> */}
                {/* <div className="text-center">
                    <Button type='primary' onClick={exitHandler}>
                        Выйти
                    </Button>
                </div>
            </Card> */}
        </> 
    )
}

export default Account;