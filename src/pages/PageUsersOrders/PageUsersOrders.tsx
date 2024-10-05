import React, { useEffect, useState } from "react";
import style from "./PageUsersOrders.module.scss";
import {  useSelector } from "react-redux";
import InputCustom from "../../entities/InputCustom/InputCustom";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { toast, ToastContainer } from "react-toastify";
import { OrdersTableFull } from "../../shared/OrdersTableFull/OrdersTableFull";
import {  useNavigate } from "react-router-dom";

export const PageUsersOrders: React.FC<{}> = ({}) => {
  // const auth = getAuth();

  //const user = auth?.currentUser?.uid;
  const userUid = useSelector((state: any) => state?.auth.user);
  const navigate = useNavigate();

  const cartItems = useSelector((state: any) => state.cart.cartArray);
  const [orderUserName, setOrderUserName] = useState<string>("");
  const [orderUserPhone, setOrderUserPhone] = useState<number>(0);
  const [orderItems, setOrderItems] = useState<any>([]);
  const [orderTotalSum, setOrderTotalSum] = useState<number>(0);
  const [orderText, setOrderText] = useState<string>("");

  async function handleAddOrder() {
    await addDoc(collection(db, "Orders"), {
      userName: orderUserName,
      status: "создано",
      telephone: orderUserPhone,
      note: orderText,
      sum: orderTotalSum,
      goods: orderItems,
      userUid: userUid.id,
      email: userUid.email,
    })
      .then(() => localStorage.removeItem("addToCartBox"))
      .then(() => toast("Товар создан!"))

      .then(() =>
        setTimeout(() => {
          navigate("/");
        }, 1000)
      )
      .then(() =>
        setTimeout(() => {
          navigate(0);
        }, 1100)
      )
      .catch(() => toast("Что-то пошло не так"));
  }

  useEffect(() => {
    setOrderItems(cartItems);
  }, [cartItems]);

  useEffect(() => {
    setOrderTotalSum(
      orderItems?.reduce(
        (s: number, i: { price: number; count: number }) =>
          (s = s + i.price * i.count),
        0
      )
    );
  }, [orderItems]);

  return (
    <div className={style.PageUsersOrders}>
      <div className={style.PageUsersOrders__box}>
        <h3 className={style.PageUsersOrders__title}>Оформление заказа:</h3>
        <h4>Ваш заказ: </h4>
        <OrdersTableFull
          orderTotalSum={orderTotalSum}
          orderItems={orderItems}
        />
        <form className={style.PageUsersOrders__userStory}>
          <InputCustom
            name="cgdfh"
            value={orderUserName}
            onChange={(e: any) => setOrderUserName(e.target.value)}
            textSpan="vbfgh"
            error={false}
            id="hgfh"
            type="text"
            title="Ваше имя:"
          />
          <InputCustom
            name="cgdfh"
            value={orderUserPhone}
            onChange={(e: any) => setOrderUserPhone(e.target.value)}
            textSpan="vbfgh"
            error={false}
            id="hgfh"
            type="text"
            title="Ваш телефон:"
          />
          <TextAreaCustom
            name="description"
            id="description"
            title={"Введите дополнительную информацию и адрес для доставки:"}
            textSpan="Слишком короткий текст "
            error={false}
            value={orderText}
            onChange={(e: any) => setOrderText(e.target.value)}
          />{" "}
          <ButtonClassic
            name={"Создать заказ"}
            type="button"
            onClick={() => handleAddOrder()}
          />
        </form>
        <ToastContainer />
      </div>
      <div></div>
    </div>
  );
};
