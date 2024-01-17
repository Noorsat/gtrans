import { useEffect, useState } from "react"
import { Input, Select } from "antd"
import styles from "./ModalAdd.module.css"
import img from "../../public/close.svg"

const AddNewOrderModal = ({ onAddData }) => {
  const [measureUnite, setMeasureUnite] = useState({
    sizeUnit: "см",
    weightUnit: "кг",
  })
  const [size, setSize] = useState({
    length: 0,
    width: 0,
    height: 0,
  })
  const [volume, setVolume] = useState(0)
  const [totalVolume, setTotalVolume] = useState(0)
  const [weight, setWeight] = useState(0)
  const [totalWeight, setTotalWeight] = useState(0)
  const [count, serCount] = useState(1)

  useEffect(() => {
    setVolume(
      measureUnite.sizeUnit === "м"
        ? parseFloat(size.length) *
            parseFloat(size.width) *
            parseFloat(size.height)
        : reducePrecision(
            parseFloat(size.length / 100) *
              parseFloat(size.width / 100) *
              parseFloat(size.height / 100)
          )
    )
  }, [size.length, size.width, size.height, measureUnite.sizeUnit])

  useEffect(() => {
    reducePrecision(setTotalVolume(volume * count))
  }, [volume, count])

  useEffect(() => {
    setTotalWeight(weight * count)
  }, [weight, count])

  const handleAddData = () => {
    const newData = {
      len: size.length,
      height: size.height,
      width: size.width,
      volume,
      totalVolume,
      weight,
      totalWeight,
      count,
      measureUnite,
    }

    onAddData(newData)
  }

  const reducePrecision = (number) => {
    const precision = 1
    const result = (number * Math.pow(10, precision)).toPrecision(precision)

    return parseFloat(result)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>Добавьте первый груз</header>
      <div className={styles.description}>Параметры одного места</div>
      <div className={styles.sizeSelect}>
        <div
          className={`${styles.sizeSelect__item} ${styles.sizeSelect__measure}`}
        >
          <p>Ед. измерения</p>
          <Select
            defaultValue={`${measureUnite.sizeUnit} / ${measureUnite.weightUnit}`}
            style={{ width: 120 }}
            onChange={(value) => {
              const [sizeUnit, weightUnit] = value.split(" / ")
              setMeasureUnite({
                sizeUnit: sizeUnit,
                weightUnit: weightUnit,
              })
            }}
            options={[
              { value: "см / кг", label: "см / кг" },
              { value: "м / т", label: "м / т" },
            ]}
          />
        </div>
        <div
          className={`${styles.sizeSelect__item} ${styles.sizeSelect__length}`}
        >
          <p>Длина</p>
          <Input
            placeholder={measureUnite.sizeUnit}
            onChange={(el) => {
              setSize((prevSize) => ({ ...prevSize, length: el.target.value }))
            }}
          />
        </div>
        <div
          className={`${styles.sizeSelect__item} ${styles.sizeSelect__width}`}
        >
          <p>Ширина</p>
          <Input
            placeholder={measureUnite.sizeUnit}
            onChange={(el) => {
              setSize((prevSize) => ({ ...prevSize, width: el.target.value }))
            }}
          />
        </div>
        <div
          className={`${styles.sizeSelect__item} ${styles.sizeSelect__height}`}
        >
          <p>Высота</p>
          <Input
            placeholder={measureUnite.sizeUnit}
            onChange={(el) => {
              setSize((prevSize) => ({ ...prevSize, height: el.target.value }))
            }}
          />
        </div>
        <div
          className={`${styles.sizeSelect__item} ${styles.sizeSelect__volume}`}
        >
          <p>Объём</p>
          <b>
            <span>{volume}</span> м³
          </b>
        </div>
        <div
          className={`${styles.sizeSelect__item} ${styles.sizeSelect__weight}`}
        >
          <p>Вес</p>
          <Input
            placeholder={measureUnite.weightUnit}
            onChange={(el) => {
              setWeight(parseFloat(el.target.value))
            }}
          />
        </div>
        <img src={img} alt="" />
      </div>
      <div className={styles.calc}>
        <div className={styles.calc__amount}>
          <p>Количество</p>
          <div>
            <button
              onClick={() => {
                serCount((prevAmount) => prevAmount - 1)
              }}
            >
              -
            </button>
            <Input
              value={count}
              onChange={(el) => {
                serCount(parseInt(el.target.value) || 0)
              }}
            />
            <button
              onClick={() => {
                serCount((prevAmount) => prevAmount + 1)
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.calc__totalVolume}>
          <p>Общий объем</p>
          <b>
            <span>{totalVolume}</span> м³
          </b>
        </div>
        <div className={styles.calc__totalWeight}>
          <p>Общий вес</p>
          <b>
            <span>{totalWeight}</span> {measureUnite.weightUnit}
          </b>
        </div>
      </div>
      <button className={styles.add} onClick={handleAddData}>
        Добавить
      </button>
    </div>
  )
}

export default AddNewOrderModal
