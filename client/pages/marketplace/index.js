import { useEffect, useState } from "react"
import { getDetails, getOrders } from "./../../http/orders"
import { Spin, Input, Modal, Select, Space } from "antd"
import Order from "../../components/Order/Order"
import AddNewOrderModal from "../../components/ModalAdd/AddNewOrderModal"
import styles from "./Marketplace.module.css"
import MarketplaceFilters from "../../components/MarketplaceFilters/MarketplaceFilters"
import axios from "axios"

const Marketplace = () => {
  const [orders, setOrders] = useState()
  const [details, setDetails] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [params, setParams] = useState([
    // {
    //   title: "Название груза",
    //   name: "type",
    //   items: [],
    // },
    // {
    //   title: "Тип доставки",
    //   name: "deliveryType",
    //   items: [],
    // },
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
    setIsLoading(true)
    axios
      .all([
        getOrders().then((res) => {
          setOrders(res.data)
        }),
        getDetails().then((res) => {
          setDetails(res.data)
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

    getOrders(route).then((res) => {
      setOrders(res.data)
      setIsLoading(false)
    })
  }
  const handleAddData = (newData) => {
    setOrders((prevOrders) => [...prevOrders, newData])
    setIsModalVisible(false)
  }

  return (
    <div className={styles.marketplace}>
      {isLoading && (
        <div className={styles.loading}>
          <Spin size="large" />
        </div>
      )}
      <Modal
        open={isModalVisible}
        footer={[]}
        className="price__modal"
        onCancel={() => setIsModalVisible(false)}
      >
        <AddNewOrderModal onAddData={handleAddData} />
      </Modal>
      <div className={styles.marketplace__filters}>
        <MarketplaceFilters
          details={details}
          params={params}
          paramsSelectHandler={paramsSelectHandler}
          paramsSliderHandler={paramsSliderHandler}
          filtersSaveHandler={filtersSaveHandler}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
      <div className={styles.marketplace__wrapper}>
        {orders?.map((order) => (
          <Order
            type={order?.type}
            deliveryType={order?.deliveryType}
            totalWeight={order?.totalWeight}
            len={order?.len}
            width={order?.width}
            height={order?.height}
            volume={order?.volume}
            count={order?.count}
            price={order?.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Marketplace
