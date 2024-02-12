import { useEffect, useRef, useState } from "react"
import styles from "./OfferServiceModal.module.css"
import { createMarketplaceRequest } from "../../../http/marketplace"
import Select from "react-select"

const offerService = ({
  onCancel,
  getCurrentId,
  user,
  currency,
  openNotification,
  deliveryTypes,
}) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(null)
  const [orderId, setOrderId] = useState(null)
  const [isWarning, setIsWarning] = useState(false)

  const [typeOfDelivery, setTypeOfDelivery] = useState()
  const [daysOfDelivery, setDaysOfDelivery] = useState()
  const [priceOfDelivery, setPriceOfDelivery] = useState()
  const [selectedCurrency, setSelectedCurrency] = useState("₸")

  const refMyForm = useRef(null)

  useEffect(() => {
    setOrderId(() => getCurrentId())
  }, [getCurrentId])

  useEffect(() => {
    setTypeOfDelivery(deliveryTypes[selectedTypeIndex]?._id)
  }, [selectedTypeIndex])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refMyForm.current && !refMyForm.current.contains(event.target)) {
        refMyForm.current.reset()
        onCancel()
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
    const currencyId = currency.filter(
      (el) => el.symbol === selectedCurrency
    )[0]._id
    if (
      !orderId ||
      !typeOfDelivery ||
      !daysOfDelivery ||
      !priceOfDelivery ||
      !currencyId
    ) {
      openNotification("error", "Заполните все поля")
      return
    }
    const data = {
      orderId,
      typeOfDelivery,
      daysOfDelivery,
      priceOfDelivery,
      currencyId,
    }

    if (user) {
      b
      createMarketplaceRequest(data, user?.token)
        .then((res) => {
          onCancel()
          openNotification("success", "Предложение успечно отправлено")
        })
        .catch((error) => {
          openNotification("error", error)
        })
    }
  }

  return (
    <div className={styles.modal}>
      <form ref={refMyForm} className={styles.form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__title}>Предложить</h2>
          <span onClick={() => onCancel()}>X</span>
        </div>
        <div className={styles.form__deliveryContainer}>
          <p>Выберите тип доставки</p>
          <div className={styles.form__deliveries}>
            {deliveryTypes?.map((item, index) => {
              return (
                <label
                  className={`${styles.form__delivery} ${
                    selectedTypeIndex === index ? styles.checked : ""
                  } ${isWarning && !typeOfDelivery ? styles.error : ""}`}
                  key={item._id}
                  htmlFor={item._id}
                >
                  <input
                    id={item._id}
                    type="radio"
                    name="deliveryType"
                    checked={selectedTypeIndex === index}
                    onChange={() => handleTypeChange(index)}
                  />
                  <span>{item.type}</span>
                  <span>{` (${item.minDays}-${item.maxDays} дней)`}</span>
                </label>
              )
            })}
          </div>
        </div>
        <div className={styles.form__properties}>
          <div className={styles.form__property}>
            <p>За сколько дней готовы выполнить заказ? </p>
            <input
              className={isWarning && !daysOfDelivery ? styles.error : ""}
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
                className={isWarning && !priceOfDelivery ? styles.error : ""}
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
              <Select
                placeholder=""
                options={currency.map(({ type, symbol }) => ({
                  value: type,
                  label: symbol,
                }))}
                onChange={(el) => {
                  setSelectedCurrency(el.label)
                }}
                defaultValue={{
                  label: selectedCurrency,
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    background: "#f0f0f0",
                    borderWidth: "2px",
                    borderColor: state.isFocused ? "#ffad32" : "#f0f0f0",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "",
                    },
                    width: "100%",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    cursor: "pointer",
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: "8px",
                  borderColor: "#f0f0f0",
                  colors: {
                    ...theme.colors,
                    primary25: "#f0f0f0",
                    primary: "#ffad32",
                  },
                })}
              />
            </div>
          </div>
        </div>
        <button
          className={styles.form__button}
          type="button"
          onClick={() => {
            setIsWarning(true)
            sendOffer()
          }}
        >
          Откликнуться
        </button>
      </form>
    </div>
  )
}

export default offerService
