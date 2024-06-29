import React from "react";
import style from './Catalog.module.scss'
import { BannerBox } from "../BannerBox/BannerBox";
import items from './../../assets/f4c9aa9d-dc59-41e2-8c2a-c0e0cbe37098.png'


const Catalog: React.FC = () => {
    return (
<div className={style.catalog}>
    <h2 className={style.catalog}>Каталог вязаной крючком одежды</h2>
    <BannerBox image={items} name={'Отличный выбор качественной продукции'} 
    date={null} text={null} about="Наши веши приятно носить. Наши товары не стыдно дарить." 
    buttonOTwoName={'Готовые изделия'} buttonOne={true} buttonOneName={'Изделия на заказ'} buttonTwo={true}/>

</div>
    )
}

export default Catalog