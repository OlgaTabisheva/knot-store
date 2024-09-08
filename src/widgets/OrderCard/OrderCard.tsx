import React, { useEffect } from "react";
import style from "./OrderCard.module.scss";
import { OrdersTableFull } from "../../shared/OrdersTableFull/OrdersTableFull";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "../../assets/sumpleIcons/arrow_down_emyodyx6dr76.svg";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { useSelector } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { useNavigate } from "react-router-dom";

export const OrderCard: React.FC<{
  item: any;
  header: string;
  index: number;
  setAllOrders: any;
}> = ({ item, header, setAllOrders, ...rest }) => {
  const navigate = useNavigate();
  const userUid = useSelector((state: any) => state?.auth.user);

  const AccordionItem: any = ({ header, ...rest }: any) => (
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

  async function handleApproveAndSend(item: { id: string }) {
    const washingtonRef = doc(db, "Orders", `${item?.id}`);
    await updateDoc(washingtonRef, {
      status: "Отправлено",
    }).then(() => {
      navigate(0);
    });
  }

  async function handleCanselOrder(item: { id: string }) {
    const washingtonRef = doc(db, "Orders", `${item?.id}`);
    await updateDoc(washingtonRef, {
      status: "Отменен",
    }).then(() => {
      navigate(0);
    });
  }

  return (
    <div className={style.orderCard}>
      {userUid?.id == "ppnifnT4HdStLXALeMJaEEGmBRP2" && (
        <h3 className={style.orderCard__text}>
          Почта заказавшего: {item?.email}
        </h3>
      )}

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
      <div className={style.orderCard__buttons}>
        {item?.status === "создано"    && (
          <ButtonClassic
            name={"Отменить заказ"}
            onClick={() => handleCanselOrder(item)}
          />
        )}
        {item?.status === "создано"  && userUid?.id == "ppnifnT4HdStLXALeMJaEEGmBRP2" && (
          <ButtonClassic
            onClick={() => handleApproveAndSend(item)}
            name={"Подтвердить и отправить"}
          />
        )}
      </div>
    </div>
  );
};
