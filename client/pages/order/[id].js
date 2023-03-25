import { style } from '@mui/system';
import React, { useEffect, useState } from 'react';
import styles from './../../styles/Order.module.css';
import Router, {useRouter} from 'next/router';
import { changeTrackCode, getOrderById } from '../../http/orders';
import { getUserById } from '../../http/auth';
import moment from 'moment';
import {Modal, Button, Input, notification, message} from 'antd';
import Link from 'next/link';

const Order = () => {
    const [order, setOrder] = useState();
    const [owner, setOwner] = useState();
    const [modal, setModal] = useState(false);
    const [trackcodeValue, setTrackcodeValue] = useState();

     const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        if (id){
        getOrderById(id).then((res) => {
            if (res.status === 200)
                setOrder(res.data)
                getUserById(res.data.accountId).then((res) => {
                    setOwner(res.data);
                })
            })
        }
    }, [id])

    const goBackHandler = () => {
        router.push("/my-orders")
    }

    const modalOpenHandler = () => {
        setModal(true)
    }
    
    const trackcodeAcceptHandler = () => {
        let body = {
            individualCode: order?.individualCode,
            trackCode: trackcodeValue
        }
        changeTrackCode(body).then((res) => {
            if (res.status === 200){
                setModal(false);
                setTrackcodeValue("");
                notification["success"](
                    {
                        message: 'Вы прикрепили трек-код к заказу'
                    }
                )
                getOrderById(id).then((res) => {
                    if (res.status === 200)
                        setOrder(res.data)
                        getUserById(res.data.accountId).then((res) => {
                            setOwner(res.data);
                        })
                    })
                }
            }
        )} 

    const showErrorTrackCode = () => {
        notification["error"]({
            message: 'Вы должны сначала указать трек код'
        })
    }

    return (
        <div className={styles.order}>
            <Modal open={modal} footer={[
              <button onClick={() =>  setModal(false)} className='track__button'>
                Назад
              </button>,
              <button className='track__button' onClick={trackcodeAcceptHandler}>
                Сохранить
              </button>
            ]}>
                <div className={styles.order__detail_item_title} style={{fontSize:16, marginBottom: 20, marginTop:20}}>
                    Укажите трек код полученный от поставщика/завода
                </div>
                <Input value={trackcodeValue} onChange={(e) => setTrackcodeValue(e.target.value)} placeholder='Укажите трек код' />
            </Modal>
            <div className='container'>
                <div className={styles.goBack} onClick={goBackHandler}>
                    ← Вернуться к заказам
                </div>
                <div className={styles.order__title}>
                    {order?.type}
                </div>
                <div className={styles.order__detail}>
                    <div className={styles.order__detail_items}>
                        <div className={styles.order__detail_item}>
                            <div className={styles.order__detail_item_title}>
                                Название груза
                            </div>
                            <div className={styles.order__detail_item_value}>
                                {order?.type}
                            </div>
                        </div>
                        <div className={styles.order__detail_item}>
                            <div className={styles.order__detail_item_title}>
                                Цена заказа
                            </div>
                            <div className={styles.order__detail_item_value}>
                                {
                                    order?.price 
                                } $                           
                            </div>
                        </div>
                        <div className={styles.order__detail_item}>
                            <div className={styles.order__detail_item_title}>
                                Объем доставки
                            </div>
                            <div className={styles.order__detail_item_value}>
                                {
                                    order?.volume ? order?.volume : Math.round((Number(order?.len) * Number(order?.width) * Number(order?.height)) * Number(order?.count)) 
                                } м3
                            </div>
                        </div>
                        {
                            order?.trackCode ? 
                            <div className={styles.order__detail_item}>
                                <div className={styles.order__detail_item_title}>
                                    Трек код
                                </div>
                                <div className={styles.order__detail_item_value}>
                                    {order?.trackCode}
                                </div>
                            </div>
                            :
                            <div className={styles.trackCode__button} onClick={modalOpenHandler}>
                                Добавить трек код
                            </div>
                        }
                    </div>
                    <div className={styles.order__detail_items}>
                        <div className={styles.order__detail_item}>
                            <div className={styles.order__detail_item_title}>
                                Получатель
                            </div>
                            <div className={styles.order__detail_item_value}>
                                {owner?.email}
                            </div>
                        </div>
                        <div className={styles.order__detail_item}>
                            <div className={styles.order__detail_item_title}>
                                Дата введения
                            </div>
                            <div className={styles.order__detail_item_value}>
                                {moment(order?.createdAt).format("DD.MM.YY")}
                            </div>
                        </div>
                        <div className={styles.order__detail_item}>
                            <div className={styles.order__detail_item_title}>
                                На складе
                            </div>
                            <div className={styles.order__detail_item_value}>
                                {
                                    order?.status === 0 ? <>Еще не поступил</> : moment(order?.updatedAt).format("DD.MM.YY")
                                }        
                            </div>
                        </div>
                        <div className={styles.order__detail_item}>
                            <div className={styles.order__detail_item_title}>
                                Ожидаемая дата доставки
                            </div>
                            <div className={styles.order__detail_item_value}>
                                {
                                    order?.status === 0 ? <>Еще не поступил</> : moment(order?.updatedAt).add(18, "days").format("DD.MM.YY")
                                }  
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.tracking__link}>
                    {
                        !order?.trackCode ? 
                        <div onClick={showErrorTrackCode} >
                            Отследить заказ
                        </div>
                        :
                        <Link href={{
                            pathname: '/tracking',
                            query: {trackCode: order?.trackCode}
                           }}>
                            Отследить заказ
                        </Link>                    
                    }
                </div>
            </div>
        </div>
    )
}

export default Order;