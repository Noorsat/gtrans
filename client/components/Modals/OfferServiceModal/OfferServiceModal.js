import { useEffect, useRef, useState } from "react"
import styles from "./OfferServiceModal.module.css"
import {
  createMarketplaceOffer,
  createMarketplaceRequest,
} from "../../../http/marketplace"
import { notification } from "antd"
import { FaAngleDown } from "react-icons/fa"

const offerService = ({ onCancel, getCurrentId }) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(null)
  const [typeOfDeliveries, setTypeOfDeliveries] = useState([
    "Ж/Д (10-15 дней)",
    "Авто (10-15 дней)",
  ])
  const [moneyBadges, setMoneyBadges] = useState(["₸", "$", "€", "£", "₽"])
  const [orderId, setOrderId] = useState(null)
  const [typeOfDelivery, setTypeOfDelivery] = useState()
  const [daysOfDelivery, setDaysOfDelivery] = useState()
  const [priceOfDelivery, setPriceOfDelivery] = useState()
  const [selectedBadge, setSelectedBadge] = useState("₸")
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false)

  const refMyForm = useRef(null)

  useEffect(() => {
    setOrderId(() => getCurrentId())
  }, [getCurrentId])

  useEffect(() => {
    setTypeOfDelivery(typeOfDeliveries[selectedTypeIndex])
  }, [selectedTypeIndex])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refMyForm.current && !refMyForm.current.contains(event.target)) {
        refMyForm.current.reset()
        onCancel()
      } else if (!event.target.classList.contains(styles.money__suggestion)) {
        setIsSuggestionsVisible(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onCancel])

  const handleTypeChange = (index) => {
    setSelectedTypeIndex(index)
  }

  const sendOffer = () => {
    if (orderId && typeOfDelivery && daysOfDelivery && priceOfDelivery) {
      const data = {
        orderId,
        typeOfDelivery,
        daysOfDelivery,
        priceOfDelivery,
      }

      const user =
        (typeof window !== "undefined" &&
          JSON.parse(localStorage.getItem("user"))) ||
        null
      if (user) {
        createMarketplaceRequest(data, user?.token)
          .then((res) => {
            onCancel()
            openNotificationWithIcon("succes", "Предложение успечно отправлено")
          })
          .catch((error) => {
            openNotificationWithIcon("error", error)
          })
      }
    } else openNotificationWithIcon("error", "Заполните все поля")
  }

  const openNotificationWithIcon = (type = "error", info = "") => {
    notification.config({
      duration: 2,
    })

    notification[type]({
      message: info,
    })
  }

  const toogleIsSuggestionsVisible = () => {
    setIsSuggestionsVisible(!isSuggestionsVisible)
  }

  return (
    <div className={styles.modal}>
      <form ref={refMyForm} className={styles.form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__title}>Предложить</h2>
          <span onClick={() => onCancel()}>X</span>
        </div>
        <div className={styles.form__typeContainer}>
          {typeOfDeliveries &&
            typeOfDeliveries.map((el, index) => {
              return (
                <label
                  className={`${styles.form__label} ${
                    selectedTypeIndex === index ? styles.checked : ""
                  }`}
                  key={index}
                  htmlFor={`offerModalFormType${index}`}
                >
                  <input
                    id={`offerModalFormType${index}`}
                    type="radio"
                    name="deliveryType"
                    checked={selectedTypeIndex === index}
                    onChange={() => handleTypeChange(index)}
                  />
                  <span>{el}</span>
                </label>
              )
            })}
        </div>
        <div className={styles.form__properties}>
          <div className={styles.form__property}>
            <p>За сколько дней готовы выполнить заказ? </p>
            <input
              value={daysOfDelivery !== 0 ? daysOfDelivery : ""}
              placeholder="Количество дней"
              onChange={(el) => {
                const inputValue = el.target.value
                if (/^\d*$/.test(inputValue)) {
                  const numericValue = parseInt(inputValue, 10)
                  if (!isNaN(numericValue)) setDaysOfDelivery(numericValue)
                  else setDaysOfDelivery((prev) => 0)
                }
								
              }}
            />
          </div>
          <div className={`${styles.form__property}`}>
            <p>Предложите вашу цену</p>
            <div className={styles.form__cost}>
              <input
                value={priceOfDelivery !== 0 ? priceOfDelivery : ""}
                placeholder="Цена"
                onChange={(el) => {
                  const inputValue = el.target.value
                  if (/^\d*$/.test(inputValue)) {
                    const numericValue = parseInt(inputValue, 10)
                    if (!isNaN(numericValue)) setPriceOfDelivery(numericValue)
                    else setPriceOfDelivery((prev) => 0)
                  }
                }}
              />
              <div className={styles.form__money}>
                <input
                  readOnly
                  value={selectedBadge}
                  className={styles.money__input}
                  onClick={() => toogleIsSuggestionsVisible()}
                />
                <FaAngleDown className={styles.money__icon} />
                <ul
                  className={`${styles.money__suggestions} ${
                    isSuggestionsVisible ? styles.visible : ""
                  }`}
                >
                  {moneyBadges.map((moneyBadge) => (
                    <li
                      key={moneyBadge}
                      className={styles.money__suggestion}
                      onClick={() => {
                        setSelectedBadge(moneyBadge)
                      }}
                    >
                      {moneyBadge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          className={styles.form__button}
          type="button"
          onClick={() => sendOffer()}
        >
          Предложить
        </button>
      </form>
    </div>
  )
}

export default offerService
