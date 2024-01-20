import { useEffect, useState } from "react"
import axios from "axios"
import { Spin } from "antd"
import styles from "./Marketplace.module.css"
import { getMarketplaceOrders } from "./../../http/marketplace"
import { getDetails } from "./../../http/orders"
import MarketplaceOrder from "../../components/MarketplaceOrder/MarketplaceOrder"
import MarketplaceFilters from "../../components/MarketplaceFilters/MarketplaceFilters"
import AddNewMarketOrderModal from "../../components/Modals/AddNewMarketOrderModal/AddNewMarketOrderModal"
import OfferServiceModal from "../../components/Modals/OfferServiceModal/OfferServiceModal"
import Order from "../../components/Order/Order"
import jwt_decode from "jwt-decode"
import { createMarketplaceRequest } from '../../http/marketplace'

const Marketplace = () => {
  const [user, setUser] = useState()
  const [orders, setOrders] = useState()
  const [details, setDetails] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isAddOrderModalVisible, setIsAddOrderModalVisible] = useState(false)
  const [isOfferModalVisible, setIsOfferModalVisible] = useState(false)
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
  // useEffect(() => {
  //   console.log(currentMarketplaceOrderId)
  // }, [currentMarketplaceOrderId])

  useEffect(() => {
    setIsLoading(true)
    axios
      .all([
        // getOrders().then((res) => {
        //   setOrders(res.data)
        // }),
        getDetails().then((res) => {
          setDetails(() => {
            const data = res.data.filter(
              (e) => e.title !== "Название груза" && e.title !== "Тип доставки"
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
        }),
      ])
      .then(
        axios.spread((data1, data2) => {
          setIsLoading(false)
        })
      )
  }, [])

  const user =
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("user"))) ||
    null

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

    // getOrders(route).then((res) => {
    //   setOrders(res.data)
    //   setIsLoading(false)
    // })
  }

  const getCurrentId = () => {
    return currentMarketplaceOrderId
  }

  const updateMarketplaceOrders = (token) => {
    getMarketplaceOrders(token)
      .then((res) => {
        setOrders(res.data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Ошибка при получении данных о заказах:", error)
        setIsLoading(false)
      })
  }

  const handleCreateRequest = (newData) =>{
    const user = JSON.parse(localStorage.getItem('user') || null)
    if(user){
      var decoded = user && jwt_decode(user?.token)
      decoded && setUser(decoded)
      createMarketplaceRequest(newData,user?.token).then((res)=>{
          if(res?.status === 201){
            setIsModalVisible(false)
          }
      }).catch((res)=>{
        if (res.response.status === 404){
          notification["error"]({
              message:res.response.data.message
          })
      }
      })
    }
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
        />
      )}
      {isOfferModalVisible && (
        <OfferServiceModal
          getCurrentId={() => getCurrentId()}
          onCancel={() => setIsOfferModalVisible(false)}
        />
      )}
      <div className={styles.marketplace__filters}>
        <MarketplaceFilters
          details={details}
          params={params}
          paramsSelectHandler={paramsSelectHandler}
          paramsSliderHandler={paramsSliderHandler}
          filtersSaveHandler={filtersSaveHandler}
          setIsModalVisible={setIsAddOrderModalVisible}
        />
      </div>
      <div className={styles.marketplace__wrapper}>
        {orders?.map((order) => (
          <MarketplaceOrder
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
          />
        ))}
      </div>
    </div>
  )
}

export default Marketplace
