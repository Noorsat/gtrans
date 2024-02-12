import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { Spin, notification } from "antd"
import styles from "./Marketplace.module.css"
import {
  getMarketplaceOrders,
  getCurrency,
  getMarketplaceDetails,
} from "./../../http/marketplace"
import MarketplaceOrder from "../../components/MarketplaceOrder/MarketplaceOrder"
import MarketplaceFilters from "../../components/MarketplaceFilters/MarketplaceFilters"
import AddNewMarketOrderModal from "../../components/Modals/AddNewMarketOrderModal/AddNewMarketOrderModal"
import OfferServiceModal from "../../components/Modals/OfferServiceModal/OfferServiceModal"
import jwt_decode from "jwt-decode"
import { createMarketplaceRequest } from "../../http/marketplace"
import { IoEllipsisHorizontalSharp, IoClose, IoFilter } from "react-icons/io5"

const Marketplace = () => {
  const [user, setUser] = useState(null)
  const [marketplaceOrders, setMarketplaceOrders] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isAddOrderModalVisible, setIsAddOrderModalVisible] = useState(false)
  const [isOfferModalVisible, setIsOfferModalVisible] = useState(false)
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false)
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)
  const [currentMarketplaceOrderId, setCurrentMarketplaceOrderId] =
    useState(null)
  const [details, setDetails] = useState()
  const [storeHousesFromArray, setStoreHousesFromArray] = useState([
    "Beijing",
    "Shanghai",
  ])
  const [storeHouseToArray, setStoreHouseToArray] = useState([
    "Almaty",
    "Astana",
  ])
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
        getMarketplaceDetails()
          .then((res) => {
            const data = res.data
            setDetails(data)
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
      getMarketplaceOrders()
        .then((res) => {
          setMarketplaceOrders(res.data.data)
          setIsLoading(false)
        })
        .catch((error) => {
          openNotification(
            "error",
            `Ошибка при получении данных о заказах: ${error}`
          )
          setIsLoading(false)
        })
    }
  }, [user?.token])

  const getFilteredOrders = (route) => {
		setIsLoading(true)
    getMarketplaceOrders(route)
      .then((res) => {
        setMarketplaceOrders(res.data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        openNotification(
          "error",
          `Ошибка при получении данных о заказах: ${error}`
        )
        setIsLoading(false)
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
    getMarketplaceOrders()
      .then((res) => {
        setMarketplaceOrders(res.data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        openNotification(
          "error",
          `Ошибка при получении данных о заказах ${error}`
        )
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
            openNotification("error", res.response.data.message)
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
          productTypes={
            details?.filter((item) => item.title === "Тип груза")[0]?.items
          }
          deliveryTypes={
            details?.filter((item) => item.title === "Тип доставки")[0]?.items
          }
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
          deliveryTypes={
            details?.filter((item) => item.title === "Тип доставки")[0]?.items
          }
        />
      )}
      <div className={styles.moreOption} ref={burgerMenuRef}>
        <div className={styles.moreOption__main} onClick={toggleBurgerMenu}>
          {isBurgerMenuVisible ? (
            <IoClose className={styles.moreOption__icon} />
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
          setIsModalVisible={setIsAddOrderModalVisible}
          closeFilter={toggleFilterMenu}
					getFilteredOrders={getFilteredOrders}
        />
      </div>
      <div className={styles.marketplace__wrapper}>
        {marketplaceOrders?.map((order) => (
          <MarketplaceOrder
            key={order?._id}
            offerModalVisible={() => setIsOfferModalVisible(true)}
            giveMarketlaceOrderId={(id) => setCurrentMarketplaceOrderId(id)}
            id={order?._id}
            product={order?.product}
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
            delivery={order?.delivery}
            onCreateRequest={handleCreateRequest}
            user={user}
          />
        ))}
      </div>
    </div>
  )
}

export default Marketplace
