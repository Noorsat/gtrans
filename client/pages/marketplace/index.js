import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { Spin, notification } from "antd"
import styles from "./Marketplace.module.css"
import { getMarketplaceOrders, getCurrency } from "./../../http/marketplace"
import { getDetails } from "./../../http/orders"
import MarketplaceOrder from "../../components/MarketplaceOrder/MarketplaceOrder"
import MarketplaceFilters from "../../components/MarketplaceFilters/MarketplaceFilters"
import AddNewMarketOrderModal from "../../components/Modals/AddNewMarketOrderModal/AddNewMarketOrderModal"
import OfferServiceModal from "../../components/Modals/OfferServiceModal/OfferServiceModal"
import jwt_decode from "jwt-decode"
import { createMarketplaceRequest } from "../../http/marketplace"
import {
  IoEllipsisHorizontalSharp,
  IoClose,
  IoFilter,
} from "react-icons/io5"

const Marketplace = () => {
  const [user, setUser] = useState(null)
  const [orders, setOrders] = useState()
  const [details, setDetails] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isAddOrderModalVisible, setIsAddOrderModalVisible] = useState(false)
  const [isOfferModalVisible, setIsOfferModalVisible] = useState(false)
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false)
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)
  const [currentMarketplaceOrderId, setCurrentMarketplaceOrderId] =
    useState(null)
  const [params, setParams] = useState([
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
  const [preferredDeliveryTypesArray, setPreferredDeliveryTypesArray] =
    useState(["Авиа", "Ж/Д", "Авто", "Карго"])
  const [currency, setCurrency] = useState([])

  const burgerMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(event.target)
      ) {
        setIsBurgerMenuVisible(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)
    axios
      .all([
        getDetails()
          .then((res) => {
            setDetails(() => {
              const data = res.data.filter(
                (e) =>
                  e.title !== "Название груза" && e.title !== "Тип доставки"
              )
              return data
            })
            setParams(
              params.map((param) => {
                if (param?.title === "Вес" || param?.title === "Объем") {
                  param.min = res.data?.filter(
                    (item) => item.title === param?.title
                  )[0]?.items?.min
                  param.max = res.data?.filter(
                    (item) => item.title === param?.title
                  )[0]?.items?.max
                }
                return param
              })
            )
          })
          .catch((error) => {
            openNotification(
              "error",
              `Ошибка при загрузке деталей: ${error.message}`
            )
          }),
        getCurrency()
          .then((res) => {
            setCurrency(res.data.data)
          })
          .catch((error) => {
            openNotification(
              "error",
              `Ошибка при загрузке валют: ${error.message}`
            )
          }),
      ])
      .then(
        axios.spread((data1, data2) => {
          setIsLoading(false)
        })
      )
      .catch((error) => {
        setIsLoading(false)
        openNotification(
          "error",
          `Ошибка при выполнении запросов: ${error.message}`
        )
      })
  }, [])

  useEffect(() => {
    if (user) {
      setIsLoading(true)
      getMarketplaceOrders(user.token)
        .then((res) => {
          setOrders(res.data.data)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error("Ошибка при получении данных о заказах:", error)
          setIsLoading(false)
        })
    }
  }, [user?.token])

  const paramsSelectHandler = (title, item) => {
    setParams(
      params.map((param) => {
        if (title === param.title) {
          if (param?.items?.includes(item)) {
            param.items = param.items.filter((i) => i !== item)
          } else {
            param.items = [...param.items, item]
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
    setIsLoading(true)
    let route = "?"
    params &&
      params.map((param) => {
        if (param.name === "type" || param.name === "deliveryType") {
          let link = param.name + "="
          if (param.items.length > 0) {
            param.items.map((item, index) => {
              link += item + (index !== param.items.length - 1 ? "," : "")
            })
          }
          route += link + "&"
        } else if (param.name === "weight") {
          const weight = params.filter((param) => param.name === "weight")[0]
          route += `minWeight=${weight?.min}&maxWeight=${weight?.max}&`
        } else if (param.name === "volume") {
          const volume = params.filter((param) => param.name === "volume")[0]
          route += `minVolume=${volume?.min}&maxVolume=${volume?.max}`
        }
      })
  }

  const getCurrentId = () => {
    return currentMarketplaceOrderId
  }

  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible)
  }
  const toggleBurgerMenu = () => {
    setIsBurgerMenuVisible(!isBurgerMenuVisible)
  }

  const updateMarketplaceOrders = (token) => {
    setIsLoading(true)
    getMarketplaceOrders(token)
      .then((res) => {
        setOrders(res.data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        openNotification("error", "Ошибка при получении данных о заказах")
        console.error("Ошибка при получении данных о заказах:", error)
        setIsLoading(false)
      })
  }

  const handleCreateRequest = (newData) => {
    if (user) {
      var decoded = user && jwt_decode(user?.token)
      decoded && setUser(decoded)
      createMarketplaceRequest(newData, user?.token)
        .then((res) => {
          if (res?.status === 201) {
            setIsModalVisible(false)
          }
        })
        .catch((res) => {
          if (res.response.status === 404) {
            notification["error"]({
              message: res.response.data.message,
            })
          }
        })
    }
  }

  const openNotification = (type = "error", info = "") => {
    notification.config({
      duration: 1,
      closeIcon: true,
    })

    notification[type]({
      message: info,
    })
  }

  return (
    <div className={styles.marketplace}>
      {isLoading && (
        <div className={styles.loading}>
          <Spin size="large" />
        </div>
      )}
      {isAddOrderModalVisible && (
        <AddNewMarketOrderModal
          updateMarketplaceOrders={(token) => {
            setIsLoading(true)
            updateMarketplaceOrders(token)
          }}
          onCancel={() => setIsAddOrderModalVisible(false)}
          openNotification={openNotification}
          storeHouseToArray={storeHouseToArray}
          storeHousesFromArray={storeHousesFromArray}
          productTypes={productTypes}
          preferredDeliveryTypesArray={preferredDeliveryTypesArray}
          user={user}
        />
      )}
      {isOfferModalVisible && (
        <OfferServiceModal
          getCurrentId={() => getCurrentId()}
          onCancel={() => setIsOfferModalVisible(false)}
          openNotification={openNotification}
          user={user}
          currency={currency}
        />
      )}
      <div className={styles.moreOption} ref={burgerMenuRef}>
        <div className={styles.moreOption__main} onClick={toggleBurgerMenu}>
          {isBurgerMenuVisible ? (
            <IoClose className={styles.moreOption__icon}/>
          ) : (
            <IoEllipsisHorizontalSharp className={styles.moreOption__icon} />
          )}
        </div>
        <div
          className={`${styles.moreOption__buttons} ${
            isBurgerMenuVisible ? styles.show : ""
          }`}
        >
          <button
            className={styles.moreOption__addOrder}
            onClick={() => {
              toggleBurgerMenu()
              setIsAddOrderModalVisible(true)
            }}
          >
            +
          </button>
          <div
            className={styles.moreOption__filter}
            onClick={() => {
              toggleBurgerMenu()
              toggleFilterMenu()
            }}
          >
            <IoFilter className={styles.moreOption__filterIcon} />
          </div>
        </div>
        <div></div>
      </div>
      <div
        className={`${styles.marketplace__filters} ${
          isFilterMenuVisible ? styles.visible : ""
        }`}
      >
        <MarketplaceFilters
          details={details}
          params={params}
          paramsSelectHandler={paramsSelectHandler}
          paramsSliderHandler={paramsSliderHandler}
          filtersSaveHandler={filtersSaveHandler}
          setIsModalVisible={setIsAddOrderModalVisible}
          closeFilter={toggleFilterMenu}
        />
      </div>
      <div className={styles.marketplace__wrapper}>
        {orders?.map((order) => (
          <MarketplaceOrder
            key={order?._id}
            offerModalVisible={() => setIsOfferModalVisible(true)}
            giveMarketlaceOrderId={(id) => setCurrentMarketplaceOrderId(id)}
            id={order?._id}
            length={order?.length}
            width={order?.width}
            height={order?.height}
            weight={order?.weight}
            totalWeight={order?.totalWeight}
            volume={order?.volume}
            totalVolume={order?.totalVolume}
            count={order?.count}
            from={order?.from}
            to={order?.to}
            price={order?.price}
            onCreateRequest={handleCreateRequest}
            user={user}
          />
        ))}
      </div>
    </div>
  )
}

export default Marketplace
