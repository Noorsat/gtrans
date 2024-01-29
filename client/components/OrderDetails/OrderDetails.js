import { Button } from 'antd';
import styles from './OrderDetails.module.css';

const OrderDetails = ({ details }) => {
  return (
    <div className={styles.request}>
        <div className={styles.request__items}>
            <div className={styles.request__item}>
                <div className={styles.request__item_title}>
                    Тип доставки
                </div>
                <div className={styles.request__item_value}>
                    {details.deliveryType}
                </div>
            </div>
            <div className={styles.request__item}>
                <div className={styles.request__item_title}>
                    Инд. код
                </div>
                <div className={styles.request__item_value}>
                    {details.individualCode}
                </div>
            </div>
            <div className={styles.request__item}>
                <div className={styles.request__item_title}>
                    Тип груза
                </div>
                <div className={styles.request__item_value}>
                    {details.type}
                </div>
            </div>
            </div>
            <div className={styles.request__items}>
                <div className={styles.request__item}>
                    <div className={styles.request__item_title}>
                        Длина (см)
                    </div>
                    <div className={styles.request__item_value}>
                        {details.len}
                    </div>
                </div>
                <div className={styles.request__item}>
                    <div className={styles.request__item_title}>
                        Ширина (см)
                    </div>
                    <div className={styles.request__item_value}>
                        {details.width}
                    </div>
                </div>
                <div className={styles.request__item}>
                    <div className={styles.request__item_title}>
                        Высота (см)
                    </div>
                    <div className={styles.request__item_value}>
                        {details.height}
                    </div>
                </div>
            </div>
            <div className={styles.request__items}>
                <div className={styles.request__item}>
                    <div className={styles.request__item_title}>
                        Общий Объем (м3)
                    </div>
                    <div className={styles.request__item_value}>
                        {details.volume}
                    </div>
                </div>
                <div className={styles.request__item}>
                    <div className={styles.request__item_title}>
                        Общий Вес (кг)
                    </div>
                    <div className={styles.request__item_value}>
                        {details.totalWeight}
                    </div>
                </div>
                <div className={styles.request__item}>
                    <div className={styles.request__item_title}>
                        Количество
                    </div>
                    <div className={styles.request__item_value}>
                        {details.count}
                    </div>
                </div>
            </div>
            <div className={styles.request__items}>
                <div className={styles.request__item}>
                    <div className={styles.request__item_title}>
                        Трек код
                    </div>
                    <div className={styles.request__item_value}>
                        {details.trackCode ? details.trackCode :
                         <Button type='primary' className='mt-3'>
                            Добавить треккод   
                         </Button>
                        }
                    </div>
                </div>
            </div>
    </div>
  )
}

export default OrderDetails;