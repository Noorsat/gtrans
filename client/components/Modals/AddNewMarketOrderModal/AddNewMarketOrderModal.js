import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import styles from "./AddNewMarketOrderModal.module.css"
import { FaQuestionCircle } from "react-icons/fa"
import { createMarketplaceOrder } from "../../../http/marketplace"
import { Spin } from "antd"

const AddNewMarketOrderModal = ({
  onCancel,
  updateMarketplaceOrders,
  storeHousesFromArray,
  storeHouseToArray,
  productTypes,
  preferredDeliveryTypesArray,
  user,
  openNotification,
}) => {
  const [color, accentColor, errorColor, warningColor] = [
    "#f0f0f0",
    "#ffad32",
    "rgb(255, 110, 110)",
    "#ffad32",
  ]
  const [loading, setLoading] = useState()

  const [productType, setProductType] = useState()
  const [selectedDeliveryTypes, setSelectedDeliveryTypes] = useState([])
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
  const [storeHouse, setStoreHouse] = useState({
    from: "",
    to: "",
  })

  const [check, setCheck] = useState(false)
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
      !productType ||
      !properties.length ||
      !properties.width ||
      !properties.height ||
      !properties.weight ||
      !count ||
      !volume ||
      !totalVolume ||
      !totalWeight > 50 ||
      !storeHouse.from ||
      !storeHouse.to ||
      selectedDeliveryTypes.length <= 0
    ) {
      openNotification("error", "Заполните все поля")
      return
    }
    if (totalWeight < 50) {
      openNotification("warning", "Общий вес меньше 50кг")
      return
    }
    const data = {
      type: productType,
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
      selectedDeliveryTypes,
    }

    // return

    if (user) {
      setLoading(true)

      createMarketplaceOrder(data, user?.token)
        .then((res) => {
          onCancel()
          updateMarketplaceOrders(user?.token)
          openNotification("success", "Новый заказ успечно создан")
        })
        .catch((res) => {
          console.error(res)
        })
    }
  }

  const toggleDeliveryType = (type) => {
    setSelectedDeliveryTypes((prevSelected) => {
      if (prevSelected.includes(type)) {
        return prevSelected.filter((selectedType) => selectedType !== type)
      } else {
        return [...prevSelected, type]
      }
    })
  }

  return (
    <div className={styles.modal}>
      {loading && (
        <div className="loading">
          <Spin size="large" />
        </div>
      )}
      <form ref={refMyForm} className={styles.form}>
        <div className={styles.header}>
          <h1 className={`${styles.header__title} ${styles.h1}`}>
            Добавить заказ
          </h1>
          <span className={styles.header__closeModal} onClick={onCancel}>
            X
          </span>
        </div>

        <Select
          placeholder="Выберите тип продукта"
          className={styles.search}
          options={productTypes.map((option) => ({
            value: option,
            label: option,
          }))}
          onChange={(el) => setProductType(el.value)}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: color,
              borderWidth: "2px",
              borderColor:
                check && !productType
                  ? errorColor
                  : state.isFocused
                  ? accentColor
                  : color,
              cursor: "pointer",
              height: "100%",
              "&:hover": {
                borderColor: accentColor,
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
            borderColor: color,
            colors: {
              ...theme.colors,
              primary25: color,
              primary: accentColor,
            },
          })}
        />

        <div className={styles.prefer}>
          <h2 className={styles.h2}>Выберите желаемые типы доставок</h2>
          <ul className={styles.prefer__container}>
            {preferredDeliveryTypesArray.map((deliveryType) => {
              const isSelected = selectedDeliveryTypes.includes(deliveryType)

              return (
                <li
                  key={deliveryType}
                  className={`${styles.prefer__item} ${
                    isSelected ? styles.selected : ""
                  } ${
                    check && selectedDeliveryTypes.length === 0
                      ? styles.error
                      : ""
                  }`}
                  onClick={() => {
                    toggleDeliveryType(deliveryType)
                  }}
                >
                  {deliveryType}
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.miniTitle}>
          <h2 className={styles.h2}>Параметры одного места</h2>
          <div className={styles.miniTitle__hintContainer}>
            <div className={styles.miniTitle__iconContainer}></div>
            <p className={styles.miniTitle__hint}>
              Укажите габариты и вес одного места (груза). Если груз однотипный,
              укажите его количество ниже.
            </p>
            <FaQuestionCircle className={styles.miniTitle__icon} />
          </div>
        </div>

        <div className={styles.properties}>
          <div className={`${styles.properties__length} ${styles.property}`}>
            <p className={styles.p}>Длина</p>
            <input
              value={properties.length !== 0 ? properties.length : ""}
              className={check && !properties.length ? styles.error : ""}
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
            <p className={styles.p}>Ширина</p>
            <input
              value={properties.width !== 0 ? properties.width : ""}
              className={check && !properties.length ? styles.error : ""}
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
          <div className={`${styles.properties__height} ${styles.property}`}>
            <p className={styles.p}>Высота</p>
            <input
              value={properties.height !== 0 ? properties.height : ""}
              className={check && !properties.height ? styles.error : ""}
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
          <div className={`${styles.properties__weight} ${styles.property}`}>
            <p className={styles.p}>Вес</p>
            <input
              value={properties.weight !== 0 ? properties.weight : ""}
              className={check && !properties.weight ? styles.error : ""}
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

        <div className={styles.volume}>
          <h4 className={styles.h4}>
            Объём: <b>{volume} м³</b>
          </h4>
        </div>

        <div className={styles.product}>
          <p className={styles.p}>Количество</p>
          <div className={styles.product__countContainer}>
            <div className={styles.product__count}>
              <button
                className={styles.product__button_decrease}
                type="button"
                onClick={() => count > 0 && setCount(count - 1)}
              >
                -
              </button>
              <input
                value={count !== 0 ? count : ""}
                className={check && !count ? styles.error : ""}
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

            <h4 className={styles.h4}>
              Общий объем: <b>{totalVolume} м³</b>
            </h4>
            <h4 className={styles.h4}>
              Общий вес:{" "}
              <b className={check && totalWeight < 50 ? styles.textError : ""}>
                {totalWeight} кг
              </b>
            </h4>
          </div>
        </div>

        <div className={styles.storeHouses}>
          <div className={styles.storeHouse__fromContainer}>
            <p className={styles.p}>Выберите склад</p>
            <Select
              className={styles.storeHouse}
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
                    check && !storeHouse.from
                      ? errorColor
                      : state.isFocused
                      ? accentColor
                      : color,
                  cursor: "pointer",
                  height: "100%",
                  "&:hover": {
                    borderColor: accentColor,
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
                borderColor: color,
                colors: {
                  ...theme.colors,
                  primary25: color,
                  primary: accentColor,
                },
              })}
            />
          </div>
          <div className={styles.storeHouse__toContainer}>
            <p className={styles.p}>Выберите склад</p>
            <Select
              className={styles.storeHouse}
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
                    check && !storeHouse.to
                      ? errorColor
                      : state.isFocused
                      ? accentColor
                      : color,
                  cursor: "pointer",
                  height: "100%",
                  "&:hover": {
                    borderColor: accentColor,
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
                borderColor: color,
                colors: {
                  ...theme.colors,
                  primary25: color,
                  primary: accentColor,
                },
              })}
            />
          </div>
        </div>

        <button
          type="button"
          className={`${styles.closeButton} ${styles.button}`}
          onClick={() => {
            onCancel()
          }}
        >
          Отменить
        </button>

        <button
          type="button"
          className={`${styles.addButton} ${styles.button}`}
          onClick={() => {
            setCheck(true)
            onAdd()
          }}
        >
          Добавить новый заказ
        </button>
      </form>
    </div>
  )
}

export default AddNewMarketOrderModal
