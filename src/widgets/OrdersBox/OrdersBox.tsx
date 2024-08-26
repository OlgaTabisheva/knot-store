import React from "react";
import style from "./OrdersBox.module.scss";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";

export const OrdersBox: React.FC<{
  index: number;
  elem: {
    id: string;
    name: string;
    count: string;
    price: string;
    size: string;
  };
}> = ({ elem, index }) => {
  return (
    <div className={style.ordersBox}>
      <table className={style.ordersBox__table}>
    
        <tr>
          <td className={style.ordersBox__tableTd}>{index + 1}</td>
{/*           <td className={style.ordersBox__tableTd}>{elem?.id}</td>
 */}          <td className={style.ordersBox__tableTd}>{elem?.name}</td>
          <td className={style.ordersBox__tableTd}>{elem?.size}</td>
          <td className={style.ordersBox__tableTd}>{elem?.count}</td>
          <td className={style.ordersBox__tableTd}>{elem?.price}</td>
        </tr>
      </table>
    </div>
  );
};
