import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { GiFactory } from 'react-icons/gi';
import { BiPackage } from 'react-icons/bi';
import { GrWaypoint } from 'react-icons/gr';
import {RiFlightTakeoffFill, RiFlightLandFill, RiCreativeCommonsLine} from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';
import styles from './../../styles/Tracking.module.css'
import { Button, Input, notification } from 'antd';
import { getOrderByTrackCode } from '../../http/orders';
import moment from 'moment';

const Tracking = () => {
    const [trackerCode, setTrackerCode] = useState();
    const [status, setStatus] = useState();

    const router = useRouter()
    const { trackCode } = router.query

    useEffect(() => {
        if (trackCode){
            setTrackerCode(trackCode)
            getOrderByTrackCode(trackCode).then((res) => {
                if (res.status === 200){
                    let nowDate = moment();
                    let statusDate = moment(res.data[0].updatedAt)
                    let diff = nowDate.diff(statusDate, 'days');
                    setStatus(Number(res.data[0].status))
                    setDiff(diff)
                    setOrder(res.data[0])
                }
            }).catch((res) => {
                if (res.response.status === 404){
                    notification["error"]({
                        message: res.response.data.message
                    })
                    setOrder(null)
                }
            })
        }
    }, []);

    const [order, setOrder] = useState();
    const [diff, setDiff] = useState(0);

    const searchOrder = () => {
        getOrderByTrackCode(trackerCode).then((res) => {
            if (res.status === 200){
                let nowDate = moment();
                let statusDate = moment(res.data[0].updatedAt)
                let diff = nowDate.diff(statusDate, 'days');
                setStatus(Number(res.data[0].status))
                setDiff(diff)
                setOrder(res.data[0])
            }
        }).catch((res) => {
            if (res.response.status === 404){
                notification["error"]({
                    message: res.response.data.message
                })
                setOrder(null)
            }
        })
    }

    console.log(status)

    return (
        <div>
            <div className={styles.wrapper}>
                <Input placeholder='Ваш трек код' value={trackerCode} onChange={(e) => setTrackerCode(e.target.value)}/>
                <Button type='primary' onClick={searchOrder}>
                    Проверить
                </Button>
            </div>
            {
                order && 
                <div className={styles.statuses}>
                    <div className={styles.status} style={{opacity: (status === 0) && 1.0}}>
                        <div className={styles.status__logo}>
                            <GrWaypoint size={50} color={"#000"}/>
                        </div>
                        <div className={styles.status__text}>
                            Не поступил на склад
                        </div>
                    </div>
                    <div className={styles.status} style={{opacity: (diff < 5 && status === 1) && 1.0}}>
                        <div className={styles.status__logo}>
                            <GiFactory size={50} color={"#000"}/>
                        </div>
                        <div className={styles.status__text}>
                            Склад в Гуанжоу
                        </div>
                    </div>
                    <div className={styles.status} style={{opacity: (diff >= 5 && diff < 7 && status === 1) && 1.0}}>
                        <div className={styles.status__logo}>
                            <BiPackage  size={50}  />
                        </div>
                        <div className={styles.status__text}>
                            Упаковано для отправки
                        </div>
                    </div>
                    <div className={styles.status} style={{opacity: (diff >= 7 && diff < 15 && status === 1) && 1.0}}>
                        <div className={styles.status__logo}>
                            <RiFlightTakeoffFill  size={50} />
                        </div>
                        <div className={styles.status__text}>
                            На пути к границе 
                        </div>
                    </div>
                    <div className={styles.status} style={{opacity: (diff >= 15 && diff < 18 && status === 1) && 1.0}}>
                        <div className={styles.status__logo}>
                            <RiFlightLandFill  size={50} />

                        </div>
                        <div className={styles.status__text}>
                            На пути к складу
                        </div>
                    </div>
                    <div className={styles.status} style={{opacity: (diff >= 18 && status === 1) && 1.0}}>
                        <div className={styles.status__logo}>
                            <AiFillCheckCircle  size={50} />
                        </div>
                        <div className={styles.status__text}>
                            Склад в Алматы
                        </div>
                    </div>
                </div>
            }
            
        </div>

    )
}

export default Tracking; 