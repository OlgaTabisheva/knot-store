import React from "react";
import style from './ ItemsToOrder.module.scss'
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import orders from './../../assets/Gemini_Generated_Image_u64ceyu64ceyu64c.jpeg'


export const ItemsToOrder: React.FC = () => {
  return (
 <div className={style.itemsToOrder}>
      <BannerBox
        image={orders}
        name={"Предлагаем изготовить вязаную продукцию на заказ"}
        date={null}
        text={null}
        about="Заполните форму заказа"
        buttonOTwoName={"Готовые изделия"}
        buttonOne={false}
        buttonOneName={"Изделия на заказ"}
        buttonTwo={false}
      />
<div className={style.itemsToOrder__box}>
<h3>Форма для заказа</h3>
  
</div>
  </div>
  );
};
