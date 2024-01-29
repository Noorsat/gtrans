import { Spin } from 'antd';
import styles from './RequestDetails.module.css'

const RequestDetails = ({details}) => {
  return (
    <>
    {!details ? 
        <Spin size='small'/> 
      :
      <div className={styles.request}>
        <div className={styles.request__items}>
          <div className={styles.request__item}>
            <div className={styles.request__item_title}>
              Откуда
            </div>
            <div className={styles.request__item_value}>
              {details.from}
              </div>
          </div>
          <div className={styles.request__item}>
            <div className={styles.request__item_title}>
              Куда
            </div>
            <div className={styles.request__item_value}>
              {details.to}
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
              {details.length}
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
              {details.totalVolume}
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
      </div>
    }
    </>
  );
};

export default RequestDetails