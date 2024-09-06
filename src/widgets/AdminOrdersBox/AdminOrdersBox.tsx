import React, { useEffect, useState } from "react";
import style from "./AdminOrdersBox.module.scss";
import { BannerBox } from "../BannerBox/BannerBox";
import cat from "../../assets/catEmpty.png";
import { OrderCard } from "../OrderCard/OrderCard";
import { collection, getDocs, query } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { useSelector } from "react-redux";

const AdminOrdersBox: React.FC = () => {
    const ordersByServer = useSelector((state: any) => state?.order?.orderArray);

  const [allOrders, setAllOrders] = useState([]);

  async function getUserOrders() {
    const data: any = [];
    const q = query(collection(db, "Orders"));

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
          email: string;
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
          email: "",
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
    setAllOrders(ordersArray);
  }

  useEffect(() => {
    getUserOrders();
  }, []);

  useEffect(() => {
    //setAllOrders(ordersByServer);
    console.log(ordersByServer, allOrders)
  }, [ordersByServer,allOrders]);

  return (
    <div className={style.adminOrdersBox}>
      {Array.isArray(allOrders) && allOrders.length !== 0 ? (
        allOrders?.map((item: { id: string }, index: number) => (
          <OrderCard
            setAllOrders={setAllOrders}
            item={item}
            key={item.id}
            index={index}
            header={""}
          />
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
  );
};

export default AdminOrdersBox;
