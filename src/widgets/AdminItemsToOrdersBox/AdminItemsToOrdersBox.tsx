import React from "react";
import style from "./AdminItemsToOrdersBox.module.scss";
import { useSelector } from "react-redux";
import { itemsToOrderInt } from "../../store/slice/itemsToOrderSlice";

export const AdminItemsToOrdersBox: React.FC = () => {
  const itemsToOrder = useSelector((state: any) => state)?.itemsToOreder?.itemsToOrderArray?.messagesArray
  ;

  return <div className={style.adminItemsToOrdersBox}>
    {itemsToOrder.map((item:itemsToOrderInt)=>(
<div className={style.adminItemsToOrdersBox__box}>
<p className={style.adminItemsToOrdersBox__text}>{item?.contacts}</p>
<p className={style.adminItemsToOrdersBox__text}>{item?.needsText}</p>
<img className={style.adminItemsToOrdersBox__img} src={item?.image} />

</div>
    ))}

  </div>;
};
