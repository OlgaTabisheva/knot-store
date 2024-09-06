import React, { useEffect, useState } from "react";
import style from "./OrderTable.module.scss";
import { useSelector } from "react-redux";
import { OrderCard } from "../OrderCard/OrderCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { BannerBox } from "../BannerBox/BannerBox";
import cat from "../../assets/catEmpty.png";

export const OrderTable: React.FC = () => {
  const userUid = useSelector((state: any) => state?.auth.user);
  const [orders, setOrders] = useState([]);

  async function getUserOrders() {
    const data: any = [];
    const q = query(
      collection(db, "Orders"),
      where("userUid", "==", `${userUid?.id}`)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, value: doc.data() });
    });
    let ordersArray: any = [];
    data.map(
      (i: {
        id: any;
        value: {
          note: string;
          status: string;
          sum: string;
          telephone: string;
          userName: string;
          goods: any;
          email:string
        };
      }) => {
        let el = {
          id: "",
          note: "",
          status: "",
          sum: "",
          telephone: "",
          userName: "",
          goods: [],
          email: ''
        };
        el.id = i?.id;
        el.note = i.value.note;
        el.status = i.value.status;
        el.sum = i?.value?.sum;
        el.telephone = i.value.telephone;
        el.userName = i.value.userName;
        el.goods = i.value.goods;
        el.email = i.value.email;
        ordersArray.push(el);
      }
    );
    setOrders(ordersArray);
  }

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <div className={style.orderTable}>
      <div className={style.orderTable__box}>
        <h3 className={style.orderTable__title}>Таблица ваших заказов:</h3>
        <div className={style.orderTable__orderBox}>
          {Array.isArray(orders) && orders.length !== 0 ? (
            orders?.map((item: { id: string }, index: number) => (
              <OrderCard item={item} key={item.id} index={index} header={""} />
            ))
          ) : (
            <BannerBox
              image={cat}
              name="К сожалению тут ничего нет  "
              date={null}
              text="Пусто"
              about={null}
              buttonOne={true}
              buttonTwo={false}
              buttonOTwoName={null}
              buttonOneName="Перейти на главную"
            />
          )}
        </div>
      </div>
    </div>
  );
};
