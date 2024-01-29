import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import styles from "./AddNewMarketOrderModal.module.css"
import { FaSearch, FaQuestionCircle } from "react-icons/fa"
import { createMarketplaceOrder } from "../../../http/marketplace"
import jwt_decode from "jwt-decode"
import { Spin, notification } from "antd"

const AddNewMarketOrderModal = ({ onCancel, updateMarketplaceOrders }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState();
  const [storeHousesFromArray, setStoreHousesFromArray] = useState([
    "Beijing",
    "Shanghai",
  ])
  const [storeHouseToArray, setStoreHouseToArray] = useState([
    "Almaty",
    "Astana",
  ])
  const [productTypes, setProductTypes] = useState([
    "Хоз товары",
    "Furniture",
    "Devices",
    "Plant",
  ])

  const [properties, setProperties] = useState({
    length: 0,
    width: 0,
    height: 0,
    weight: 0,
  })
  const [volume, setVolume] = useState(0)
  const [totalVolume, setTotalVolume] = useState(0)
  const [totalWeight, setTotalWeight] = useState(0)
  const [count, setCount] = useState(1)
  const [type, setType] = useState()
  const [storeHouse, setStoreHouse] = useState({
    from: "",
    to: "",
  })
  const [isWarning, setIsWarning] = useState(false)

  const refMyForm = useRef(null)

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

  useEffect(() => {
    setVolume(
      formatNumber(
        ((((properties.height / 100) * properties.width) / 100) *
          properties.length) /
          100
      )
    )
  }, [properties.height, properties.width, properties.length])

  useEffect(() => {
    setTotalVolume(formatNumber(volume * count))
  }, [volume, count])

  useEffect(() => {
    setTotalWeight(formatNumber(properties.weight * count))
  }, [properties.weight, count])

  const formatNumber = (number, precision = 2) => {
    if (number < 0.01 && number > 0) {
      return 0.01
    }
    const roundedNumber = Number(number.toFixed(precision))
    const numberString = roundedNumber.toString()
    if (numberString.includes(".")) {
      const [integerPart, decimalPart] = numberString.split(".")
      const truncatedDecimalPart = decimalPart.slice(0, 2)
      return parseFloat(`${integerPart}.${truncatedDecimalPart}`)
    }
    return roundedNumber
  }

  const handleInputChange = (field, value) => {
    setProperties((prev) => ({ ...properties, [field]: value }))
  }

  const onAdd = () => {
    if (
      !type ||
      !properties.length ||
      !properties.width ||
      !properties.height ||
      !properties.weight ||
      !count ||
      !volume ||
      !totalVolume ||
      !totalWeight > 50 ||
      !storeHouse.from ||
      !storeHouse.to
    ) {
      openNotificationWithIcon("error", "Заполните все поля")
      return
    }
    if (totalWeight < 50) {
      openNotificationWithIcon("warning", "Общий вес меньше 50кг")
      return
    }
    const data = {
      type,
      length: properties.length,
      width: properties.width,
      height: properties.height,
      weight: properties.weight,
      count,
      volume,
      totalVolume,
      totalWeight,
      from: storeHouse.from,
      to: storeHouse.to,
    }

    const user = JSON.parse(localStorage.getItem("user")) || null

    if (user) {
      setLoading(true);
      var decoded = user && jwt_decode(user?.token)
      decoded && setUser(decoded)

      createMarketplaceOrder(data, user?.token)
        .then((res) => {
          onCancel()
          updateMarketplaceOrders(user?.token)
          openNotificationWithIcon("success", "Новый заказ успечно создан")
        })
        .catch((res) => {
          console.error(res)
        })
    }
  }

  const openNotificationWithIcon = (type = "error", info = "") => {
    notification.config({
      duration: 1,
      closeIcon: false
    })

    notification[type]({
      message: info,
    })
  }

  return (
    <div className={styles.modal}>
        {
          loading && (
            <div className="loading">
                <Spin size='large' />
            </div>
          )
        }
      <form ref={refMyForm} className={styles.form}>
        <div className={styles.header}>
          <h1 className={styles.header__title}>Добавить заказ</h1>
          <span className={styles.header__closeModal} onClick={onCancel}>
            X
          </span>
        </div>
        <main className={styles.main}>
          <div className={styles.searchContainer}>
            <Select
              placeholder="Выберите тип продукта"
              options={productTypes.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(el) => setType(el.value)}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  background: "#f0f0f0",
                  borderWidth: "2px",
                  borderColor:
                    isWarning && !type
                      ? "rgb(255, 110, 110)"
                      : state.isFocused
                      ? "#ffad32"
                      : "#f0f0f0",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "",
                  },
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
          <div className={styles.miniTitle}>
            <h1 className={styles.miniTitle__text}>Параметры одного места</h1>
            <div className={styles.miniTitle__hintContainer}>
              <div className={styles.miniTitle__iconContainer}></div>
              <p className={styles.miniTitle__hint}>
                Укажите габариты и вес одного места (груза). Если груз
                однотипный, укажите его количество ниже.
              </p>
              <FaQuestionCircle className={styles.miniTitle__icon} />
            </div>
          </div>
          <div className={styles.properties}>
            <div className={styles.properties__container}>
              <div
                className={`${styles.properties__length} ${styles.property}`}
              >
                <p>Длина</p>
                <input
                  value={properties.length !== 0 ? properties.length : ""}
                  className={
                    isWarning && !properties.length ? styles.error : ""
                  }
                  placeholder="см"
                  onChange={(el) => {
                    const inputValue = el.target.value
                    if (/^\d*$/.test(inputValue)) {
                      const numericNumber = parseInt(inputValue, 10)
                      if (!isNaN(numericNumber))
                        handleInputChange("length", numericNumber)
                      else handleInputChange("length", 0)
                    }
                  }}
                />
              </div>
              <div className={`${styles.properties__width} ${styles.property}`}>
                <p>Ширина</p>
                <input
                  value={properties.width !== 0 ? properties.width : ""}
                  className={
                    isWarning && !properties.length ? styles.error : ""
                  }
                  placeholder="см"
                  onChange={(el) => {
                    const inputValue = el.target.value
                    if (/^\d*$/.test(inputValue)) {
                      const numericNumber = parseInt(inputValue, 10)
                      if (!isNaN(numericNumber))
                        handleInputChange("width", numericNumber)
                      else handleInputChange("width", 0)
                    }
                  }}
                />
              </div>
              <div
                className={`${styles.properties__height} ${styles.property}`}
              >
                <p>Высота</p>
                <input
                  value={properties.height !== 0 ? properties.height : ""}
                  className={
                    isWarning && !properties.height ? styles.error : ""
                  }
                  placeholder="см"
                  onChange={(el) => {
                    const inputValue = el.target.value
                    if (/^\d*$/.test(inputValue)) {
                      const numericNumber = parseInt(inputValue, 10)
                      if (!isNaN(numericNumber))
                        handleInputChange("height", numericNumber)
                      else handleInputChange("height", 0)
                    }
                  }}
                />
              </div>
              <div
                className={`${styles.properties__weight} ${styles.property}`}
              >
                <p>Вес</p>
                <input
                  value={properties.weight !== 0 ? properties.weight : ""}
                  className={
                    isWarning && !properties.weight ? styles.error : ""
                  }
                  placeholder="кг"
                  onChange={(el) => {
                    const inputValue = el.target.value
                    if (/^\d*$/.test(inputValue)) {
                      const numericNumber = parseInt(inputValue, 10)
                      if (!isNaN(numericNumber))
                        handleInputChange("weight", numericNumber)
                      else handleInputChange("weight", 0)
                    }
                  }}
                />
              </div>
            </div>
            <div className={styles.properties__volume}>
              <p>
                Объём: <b>{volume} м³</b>
              </p>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.product__quantityContainer}>
              <p>Количество</p>
              <div className={styles.product__quantity}>
                <button
                  className={styles.product__button_decrease}
                  type="button"
                  onClick={() => count > 0 && setCount(count - 1)}
                >
                  -
                </button>
                <input
                  value={count !== 0 ? count : ""}
                  className={isWarning && !count ? styles.error : ""}
                  placeholder="0"
                  onChange={(el) => {
                    const inputValue = parseInt(el.target.value, 10)
                    if (!isNaN(inputValue)) setCount(inputValue)
                    else {
                      setCount(0)
                    }
                  }}
                />
                <button
                  className={styles.product__button_increase}
                  type="button"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.product__totalVolumeContainer}>
              Общий объем: <b>{totalVolume} м³</b>
            </div>
            <div className={styles.product__totalWeightContainer}>
              Общий вес:{" "}
              <b
                className={isWarning && totalWeight < 50 ? styles.warning : ""}
              >
                {totalWeight} кг
              </b>
            </div>
          </div>
          <div className={styles.storeHouse}>
            <div className={styles.storeHouse__from}>
              <p>Выберите склад</p>
              <Select
                placeholder="откуда"
                options={storeHousesFromArray.map((option) => ({
                  value: option,
                  label: option,
                }))}
                onChange={(el) =>
                  setStoreHouse((prev) => ({ ...prev, from: el.value }))
                }
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    background: "#f0f0f0",
                    borderWidth: "2px",
                    borderColor:
                      isWarning && !storeHouse.from
                        ? "rgb(255, 110, 110)"
                        : state.isFocused
                        ? "#ffad32"
                        : "#f0f0f0",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "",
                    },
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
            <div className={styles.storeHouse__to}>
              <p>Выберите склад</p>
              <Select
                placeholder="куда"
                options={storeHouseToArray.map((option) => ({
                  value: option,
                  label: option,
                }))}
                onChange={(el) =>
                  setStoreHouse((prev) => ({ ...prev, to: el.value }))
                }
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    background: "#f0f0f0",
                    borderWidth: "2px",
                    borderColor:
                      isWarning && !storeHouse.to
                        ? "rgb(255, 110, 110)"
                        : state.isFocused
                        ? "#ffad32"
                        : "#f0f0f0",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "",
                    },
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
          <button
            type="button"
            className={styles.addButton}
            onClick={() => {
              setIsWarning(true)
              onAdd()
            }}
          >
            Добавить новый заказ
          </button>
        </main>
      </form>
    </div>
  )
}

export default AddNewMarketOrderModal
