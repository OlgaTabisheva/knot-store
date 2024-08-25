import React, { useEffect, useState } from "react";
import style from "./PopupUsersOrders.module.scss";
import { useSelector } from "react-redux";

export const PopupUsersOrders: React.FC<{ openPopup: boolean }> = ({
  openPopup,
}) => {
  const cartItems = useSelector((state: any) => state.cart.cartArray);

  const [orderItems, setOrderItems] = useState<any>([]);
  useEffect(() => {
    setOrderItems(cartItems);

    console.log(orderItems, "orderItems");
  }, [cartItems]);

  return (
    <div
      className={
        openPopup ? style.popupUsersOrders : style.popupUsersOrders__hidden
      }
    >
      <div className={style.popupUsersOrders__box}>
        <h3 className={style.popupUsersOrders__title}>Оформление заказа:</h3>
        <div className={style.popupUsersOrders__orders}>
          {orderItems.map(
            (
              elem: { id: string; name: string; count: string; price: string },
              index: number
            ) => (
              <table>
                <tr>
                  <td>{index + 1}</td>
                  <td>{elem?.id}</td>
                  <td>{elem?.name}</td>
                  <td>{elem?.count}</td>
                  <td>{elem?.price}</td>
                </tr>
              </table>
            )
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
};
