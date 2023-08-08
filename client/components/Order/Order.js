import { useState } from 'react';
import { Input, Modal } from 'antd';
import styles from './Order.module.css'

const Order = ({type, deliveryType, totalWeight, len, width, height, volume, count, price}) => {
    const [modal, setModal] = useState(false);
    const [priceValue, setPriceValue] = useState('');
    
    const modalOpenHandler = () => {
        setModal(true)
    }

    const changePriceHandler = (value) => {
        const digitsRegex = /^\d*$/;
    
        if (digitsRegex.test(value)) {
            setPriceValue(value);
        }
    }


    return (
        <>  
            <Modal open={modal} footer={[]} className='price__modal' onCancel={() => setModal(false)}>
                <div className={styles.modal__title}>
                    Предложить цену
                </div>
                <div className={styles.modal__text}>
                    Вы можете предложить свою цену клиенту
                </div>
                <div className={styles.modal__input}>
                    <Input 
                        type='text'
                        placeholder='Цена' 
                        value={priceValue} 
                        onChange={(e) => changePriceHandler(e.target.value)}
                    />
                </div>
                <div className={styles.button}>
                    Предложить 
                </div>
            </Modal>
            <div className={styles.order}>   
                <div className={styles.order__items}>
                    <div className={styles.order__item}>
                        <div className={styles.order__item_title}>
                            Название груза
                        </div>
                        <div className={styles.order__item_value}>
                            { type }
                        </div>
                    </div>
                    <div className={styles.order__item}>
                        <div className={styles.order__item_title}>
                            Тип доставки
                        </div>
                        <div className={styles.order__item_value}>
                            { deliveryType }
                        </div>
                    </div>
                    <div className={styles.order__item}>
                        <div className={styles.order__item_title}>
                            Вес (кг)
                        </div>
                        <div className={styles.order__item_value}>
                            { totalWeight } кг
                        </div>
                    </div>
                </div>
                <div className={styles.order__items}>
                    <div className={styles.order__item}>
                        <div className={styles.order__item_title}>
                            Длина (см)
                        </div>
                        <div className={styles.order__item_value}>
                            { len } см
                        </div>
                    </div>
                    <div className={styles.order__item}>
                        <div className={styles.order__item_title}>
                            Ширина  (см)
                        </div>
                        <div className={styles.order__item_value}>
                            { width } см
                        </div>
                    </div>
                    <div className={styles.order__item}>
                        <div className={styles.order__item_title}>
                            Высота  (см)
                        </div>
                        <div className={styles.order__item_value}>
                            { height } см
                        </div>
                    </div>
                </div>
                <div className={styles.order__items}>
                    <div className={styles.order__item}>
                        <div className={styles.order__item_title}>
                            Объем (м3)
                        </div>
                        <div className={styles.order__item_value}>
                            { volume } м3 
                        </div>
                    </div>
                    <div className={styles.order__item}>
                        <div className={styles.order__item_title}>
                            Количество
                        </div>
                        <div className={styles.order__item_value}>
                            { count }
                        </div>
                    </div>
                </div>
                <div className={styles.button} onClick={modalOpenHandler}>
                    Предложить цену
                </div>
            </div>
        </>
    )
}

export default Order;