import React, { useEffect, useState } from "react";
import style from "./OrderTable.module.scss";
import { useSelector } from "react-redux";
import { OrderCard } from "../OrderCard/OrderCard";

export const OrderTable: React.FC = () => {
  const ordersItems = useSelector((state: any) => state.order.orderArray);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders(ordersItems);
    console.log(ordersItems, "ordersItems");
  }, [ordersItems]);

  return (
    <div className={style.orderTable}>
      <div className={style.orderTable__box}>
        <h3 className={style.orderTable__title}>Таблица ваших заказов:</h3>
        <div className={style.orderTable__orderBox}>
          {orders?.map((item:{id:string}, index:number) => (
            <OrderCard item={item} key={item.id} index={index} header={''}/>
          ))}
        </div>
      </div>
    </div>
  );
};
