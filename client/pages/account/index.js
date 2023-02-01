import { Button, Card } from 'antd';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import styles from '../../styles/Account.module.css';
import { useRouter } from 'next/router';
import { getId } from '../../components/validation';


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

    const exitHandler = () => {
        localStorage.removeItem("user")
        router.push("/login")
    }

    return (
        <>
            <Card title="Мой аккаунт" style={{ width:600, margin:"0 auto", marginTop:50}}>
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
                <div className="text-center">
                    <Button type='primary' onClick={exitHandler}>
                        Выйти
                    </Button>
                </div>
            </Card>
        </>
    )
}

export default Account;