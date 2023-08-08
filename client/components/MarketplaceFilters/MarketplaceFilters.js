import styles from './MarketplaceFilters.module.css';
import { Checkbox, Slider } from 'antd';

const MarketplaceFilters = ({details, params, paramsSelectHandler, paramsSliderHandler, filtersSaveHandler}) => {

    const checkboxHandler = (title, item) => {
        return params.filter(param => param?.title === title)[0]?.items?.includes(item)
    }

    const findSliderDuration = (title) => {
        const duration = params?.filter(param => param?.title === title)[0];  
        return [duration?.min, duration?.max];
    }

    return (
        <div className={styles.filters}>
            {
                details?.map((detail) => (
                    <div className={styles.filter}>
                        <div className={styles.title}>
                            { detail?.title }
                        </div>
                        <div>
                            {
                                Array.isArray(detail?.items) ?
                                detail?.items?.map((item, index) => (
                                    <div className={styles.item}>
                                        <div className={styles.item__checkbox}>
                                            <Checkbox id={item} checked={checkboxHandler(detail?.title, item)} onChange={() => paramsSelectHandler(detail?.title, item)} />
                                        </div>
                                        <div className={styles.item__text}>
                                            <label htmlFor={item}>{item}</label>
                                        </div>
                                    </div>
                                ))
                                : 
                                <Slider
                                    range 
                                    value={findSliderDuration(detail?.title)}
                                    marks={{[detail?.items?.min]: detail?.items?.min, [detail?.items?.max]: detail?.items?.max}} 
                                    min={detail?.items?.min} 
                                    max={detail?.items?.max} 
                                    className={styles.slider} 
                                    onChange={(e) => paramsSliderHandler(detail?.title, e)}
                                />
                            }
                        </div>
                    </div>
                ))
            }
            <div className={styles.button} onClick={filtersSaveHandler}>
                Применить
            </div>
        </div>
    )
}

export default MarketplaceFilters;
