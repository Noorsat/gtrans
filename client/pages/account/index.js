import { Button, Card } from 'antd';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import styles from '../../styles/Account.module.css';
import { useRouter } from 'next/router';


const Account = () => {
    const [user, setUser] = useState();
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            var decoded = jwt_decode(user?.token);
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
            <Card title="Мой аккаунт" style={{ width:400, margin:"0 auto", marginTop:50}}>
                <div className={styles.item}>
                    Email: <span className={styles.text}>{user?.email}</span>
                </div>
                <div className={styles.item}>
                    Компания: <span className={styles.text}>{user?.companyName}</span>
                </div>
                <div className={styles.item}>
                    Контакты: <span className={styles.text}>{user?.phoneNumber}</span>
                </div>
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