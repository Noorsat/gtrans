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
      <div className={styles.order__properties}>
        <div className={styles.order__property}>
          <p>Длина</p>
          <div>{length} см</div>
        </div>
        <div className={styles.order__property}>
          <p>Ширина</p>
          <div>{width} см</div>
        </div>
        <div className={styles.order__property}>
          <p>Высота</p>
          <div>{height} см</div>
        </div>
      </div>
      <div className={styles.order__properties}>
        <div className={styles.order__property}>
          <p>Количество</p>
          <div>{count}</div>
        </div>
        <div className={styles.order__property}>
          <p>Объем</p>
          <div>{totalVolume} м³</div>
        </div>
        <div className={styles.order__property}>
          <p>Вес</p>
          <div>{totalWeight} кг</div>
        </div>
      </div>
      <button
        className={styles.order__offerPrice}
        onClick={() => {
					giveMarketlaceOrderId(id)
          offerModalVisible()
        }}
      >
        Предложить
      </button>
    </div>
  )
}

export default MarketplaceOrder
