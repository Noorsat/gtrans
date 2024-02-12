import { useEffect, useState } from "react"
import styles from "./MarketplaceFilters.module.css"
import { Slider } from "antd"

const MarketplaceFilters = ({ details, setIsModalVisible, closeFilter, getFilteredOrders }) => {
  const [params, setParams] = useState([
    {
      title: "Тип груза",
      name: "productType",
      items: [],
    },
    {
      title: "Тип доставки",
      name: "deliveryType",
      items: [],
    },
    {
      title: "Вес",
      name: "weight",
      min: 0,
      max: 0,
    },
    {
      title: "Объем",
      name: "volume",
      min: 0,
      max: 0,
    },
  ])

  useEffect(() => {
    setParams(
      params?.map((detail) => {
        if (detail?.title === "Вес" || detail?.title === "Объем") {
          detail.min = details?.filter(
            (item) => item.title === detail?.title
          )[0]?.items?.min
          detail.max = details?.filter(
            (item) => item.title === detail?.title
          )[0]?.items?.max
        }
        return detail
      })
    )
  }, [details])

  const checkboxHandler = (title, id) => {
    return params
      .filter((param) => param?.title === title)[0]
      ?.items?.includes(id)
  }

  const findSliderDuration = (title) => {
    const duration = params?.filter((param) => param?.title === title)[0]
    return [duration?.min, duration?.max]
  }

  const paramsSelectHandler = (title, item) => {
    setParams(
      params.map((param) => {
        if (title === param.title) {
          if (param?.items?.includes(item?._id)) {
            param.items = param.items.filter((id) => id !== item?._id)
          } else {
            param.items = [...param.items, item?._id]
          }
        }
        return param
      })
    )
  }

  const paramsSliderHandler = (title, value) => {
    setParams(
      params.map((param) => {
        if (param.title === title) {
          param.min = value[0]
          param.max = value[1]
        }
        return param
      })
    )
  }

  const filtersSaveHandler = () => {
    let route = "?"
    params.forEach((param) => {
      if (param.name === "productType" || param.name === "deliveryType") {
        let link = param.name + "="
        if (param.items.length > 0) {
          param.items.forEach((id, index) => {
            link += id + (index !== param.items.length - 1 ? "," : "")
          })
        }
        route += link + "&"
      } else if (param.name === "weight") {
        // const weight = params.filter((param) => param.name === "weight")[0]
        route += `minWeight=${param?.min}&maxWeight=${param?.max}&`
      } else if (param.name === "volume") {
        // const volume = params.filter((param) => param.name === "volume")[0]
        route += `minVolume=${param?.min}&maxVolume=${param?.max}`
      }
    })
		getFilteredOrders(route)
  }

  return (
    <div className={styles.filters}>
      <h1 className={styles.title}>Фильтры</h1>
      <button
        className={`${styles.button} ${styles.addButton}`}
        onClick={() => setIsModalVisible(true)}
      >
        Добавить заказ
      </button>
      {details?.map((detail) => (
        <div className={styles.filter}>
          <div className={styles.miniTitle}>{detail?.title}</div>
          <div className={styles.filter__item}>
            {Array.isArray(detail?.items) ? (
              detail?.items?.map((item, index) => (
                <label htmlFor={item?._id} className={styles.filter__label}>
                  <input
                    id={item?._id}
                    type="checkbox"
                    checked={
                      checkboxHandler(detail.title, item?._id) ? "checked" : ""
                    }
                    onChange={(e) => {
                      paramsSelectHandler(detail?.title, item)
                    }}
                  />
                  <span>
                    {`
											${item?.type} 
											${item.minDays ? `(${item.minDays}-${item.maxDays} дней)` : ""}
									`}
                  </span>
                </label>
              ))
            ) : (
              <Slider
                range
                value={findSliderDuration(detail?.title)}
                min={detail?.items?.min}
                max={detail?.items?.max}
                marks={{
                  [detail?.items?.min]: detail?.items?.min,
                  [detail?.items?.max]: detail?.items?.max,
                }}
                className={styles.filter__slider}
                onChange={(e) => {
                  paramsSliderHandler(detail?.title, e)
                }}
              />
            )}
          </div>
        </div>
      ))}
      <button className={styles.button} onClick={filtersSaveHandler}>
        Применить
      </button>
      <button
        className={`${styles.button} ${styles.closeButton}`}
        onClick={closeFilter}
      >
        Закрыть
      </button>
    </div>
  )
}

export default MarketplaceFilters
