import { useState } from "react"
import styles from "./MarketplaceOrder.module.css"
import { FaAngleDoubleRight } from "react-icons/fa"
import { createMarketplaceOffer } from "../../http/marketplace"

const MarketplaceOrder = ({
  id,
  length,
  width,
  height,
  weight,
  totalWeight,
  volume,
  totalVolume,
  count,
  from,
  to,
  product,
  delivery,
  offerModalVisible,
  giveMarketlaceOrderId,
}) => {
  return (
    <div className={styles.order}>
      <div className={styles.order__storehouse}>
        <h2 className={styles.order__from}>{from}</h2>
        <FaAngleDoubleRight />
        <h2 className={styles.order__to}>{to}</h2>
      </div>
      <h3>Тип груза</h3>
      <div className={styles.order__type}>
        <div>{product?.type}</div>
      </div>
      <h3>Характеристики груза</h3>
      <div className={styles.order__properties}>
        <div className={styles.order__propertyContainer}>
          <p>Длина</p>
          <div className={styles.order__property}>{length} см</div>
        </div>
        <div className={styles.order__propertyContainer}>
          <p>Ширина</p>
          <div className={styles.order__property}>{width} см</div>
        </div>
        <div className={styles.order__propertyContainer}>
          <p>Высота</p>
          <div className={styles.order__property}>{height} см</div>
        </div>
        <div className={styles.order__propertyContainer}>
          <p>Количество</p>
          <div className={styles.order__property}>{count}</div>
        </div>
        <div className={styles.order__propertyContainer}>
          <p>Объем (м³)</p>
          <div className={styles.order__property}>{totalVolume}</div>
        </div>
        <div className={styles.order__propertyContainer}>
          <p>Вес (кг)</p>
          <div className={styles.order__property}>{totalWeight}</div>
        </div>
      </div>
      <div className={`${styles.order__deliveryContainer}`}>
        <h3>Предпочитаемы типы доставок</h3>
        <div className={styles.order__deliveries}>
          {delivery?.map((item) => (
            <div
              key={item._id}
              className={`${styles.order__delivery} ${styles.order__property}`}
            >{`${item.type} (${item.minDays}-${item.maxDays} дней)`}</div>
          ))}
        </div>
      </div>
      <button
        className={styles.order__button_offer}
        onClick={() => {
          giveMarketlaceOrderId(id)
          offerModalVisible()
        }}
      >
        Откликнуться
      </button>
    </div>
  )
}

export default MarketplaceOrder
