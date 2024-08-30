import React from "react";
import style from './OrdersTableFull.module.scss'
import { OrdersBox } from "../../widgets/OrdersBox/OrdersBox";


export const OrdersTableFull: React.FC <{orderTotalSum:any, orderItems:any}>= ({orderTotalSum, orderItems}) => {
    return (
       <div className={style.ordersTableFull}>
   <div className={style.ordersTableFull__orders}>
          <table className={style.ordersTableFull__table}>
            <tr>
              <th className={style.ordersTableFull__tableTd}>N</th>
              {/*               <th className={style.ordersTableFull__tableTd}>Идентификатор</th>
               */}{" "}
              <th className={style.ordersTableFull__tableTd}>Наименование</th>
              <th className={style.ordersTableFull__tableTd}>Размер</th>
              <th className={style.ordersTableFull__tableTd}>Кол.</th>
              <th className={style.ordersTableFull__tableTd}>Цена</th>
            </tr>
          </table>

          {orderItems?.map(
            (
              elem: {
                
                id: string;
                name: string;
                count: string;
                price: string;
                size: string;
              },
              index: number
            ) => (
              <OrdersBox key={elem.id} index={index} elem={elem} />
            )
          )}
          <p>
            Общая сумма заказа {orderTotalSum}
            USD
          </p>
        </div>
       </div>
    )
}