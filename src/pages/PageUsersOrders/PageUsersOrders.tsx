import React, { useEffect, useState } from "react";
import style from "./PageUsersOrders.module.scss";
import { useSelector } from "react-redux";
import { OrdersBox } from "../../widgets/OrdersBox/OrdersBox";
import InputCustom from "../../entities/InputCustom/InputCustom";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { toast } from "react-toastify";

export const PageUsersOrders: React.FC<{ }> = ({
}) => {
  const cartItems = useSelector((state: any) => state.cart.cartArray);

  const [orderItems, setOrderItems] = useState<any>([]);
  useEffect(() => {
    setOrderItems(cartItems);

  }, [cartItems]);


  async function handleAddOrder(){
    console.log("добавляем");

  
    await addDoc(collection(db, "Orders"), {
      userName: 'userName',
      status:'status',
      nameItem: 'name',
      telephone: '888888',
      note: 'доставьте утром' ,
      sum: '4546456',
      goods:[{name:'fgf', count: 1 , id: 'fgdfghdfh', price: '57547'},{name:'fgf', count: 1 , id: 'fgdfghdfh', price: '57547'}]
  
    }).then(()=>toast("Товар создан!"))
    .catch(()=>toast('Что-то пошло не так'))
  }
  return (
    <div className={style.PageUsersOrders}>
      <div className={style.PageUsersOrders__box}>
        <h3 className={style.PageUsersOrders__title}>Оформление заказа:</h3>
        <h4>Ваш заказ: </h4>
        <div className={style.PageUsersOrders__orders}>
          <table className={style.PageUsersOrders__table}>
            <tr>
              <th className={style.PageUsersOrders__tableTd}>N</th>
              {/*               <th className={style.PageUsersOrders__tableTd}>Идентификатор</th>
               */}{" "}
              <th className={style.PageUsersOrders__tableTd}>Наименование</th>
              <th className={style.PageUsersOrders__tableTd}>Размер</th>
              <th className={style.PageUsersOrders__tableTd}>Кол.</th>
              <th className={style.PageUsersOrders__tableTd}>Цена</th>
            </tr>
          </table>

          {orderItems.map(
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
            Общая сумма заказа{" "}
            {orderItems?.reduce(
              (s: number, i: { price: number; count: number }) =>
                (s = s + i.price * i.count),
              0
            )}{" "}
            USD
          </p>
        </div>
        <form className={style.PageUsersOrders__userStory}>
          <InputCustom
            name="cgdfh"
            value="fgdfg"
            onChange={null}
            textSpan="vbfgh"
            error={false}
            id="hgfh"
            type="text"
            title="Ваше имя:"
          />
          <InputCustom
            name="cgdfh"
            value="fgdfg"
            onChange={null}
            textSpan="vbfgh"
            error={false}
            id="hgfh"
            type="text"
            title="Ваш телефон:"
          />
          <h4>Введите дополнительную информацию и адрес для доставки:</h4>
          <TextAreaCustom
            name="description"
            id="description"
            title={"Введите  описание статьи:"}
            textSpan="Слишком короткий текст "
            error={false}
            value={"tyut"}
            onChange={(e: any) => null}
          />{" "}
          <ButtonClassic name={"Создать заказ"} type="button" onClick={()=>handleAddOrder()} />
        </form>
      </div>
      <div></div>
    </div>
  );
};
