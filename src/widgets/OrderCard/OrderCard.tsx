import React from "react";
import style from "./OrderCard.module.scss";
import { OrdersTableFull } from "../../shared/OrdersTableFull/OrdersTableFull";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "../../assets/sumpleIcons/arrow_down_emyodyx6dr76.svg";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { getAuth } from "firebase/auth";

export const OrderCard: React.FC<{
  item: any;
  header: string;
  index: number;
}> = ({ item, header, ...rest }) => {
  const AccordionItem: any = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <img className={style.chevron} src={chevronDown} alt="Chevron Down" />
        </>
      }
      className={style.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${style.itemBtn} ${isEnter && style.itemBtnExpanded}`,
      }}
      contentProps={{ className: style.itemContent }}
      panelProps={{ className: style.itemPanel }}
    />
  );

  return (
    <div className={style.orderCard}>
      <h3 className={style.orderCard__text}>Номер заказа: {item?.id}</h3>
      <h3 className={style.orderCard__text}>Контакт: {item?.userName}</h3>
      <h3 className={style.orderCard__text}>
        Номер телефона: {item?.telephone}
      </h3>
      <h3 className={style.orderCard__text}>Статус заказа: {item?.status}</h3>
      <h3>Примечание: {item?.note}</h3>
      <div className={style.orderCard__panel}></div>
      <div className={style.accordion}>
        <Accordion>
          <AccordionItem header="Состав вашего заказа">
            <OrdersTableFull
              orderTotalSum={item?.sum}
              orderItems={item?.goods}
            />
          </AccordionItem>
        </Accordion>
      </div>
      <ButtonClassic onClick={null} name={"Отменить заказ"} />
    </div>
  );
};
