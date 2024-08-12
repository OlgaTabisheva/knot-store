import React, { useEffect, useState } from "react";
import style from "./AdminBoxGoods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { deleteDoc, deleteField, doc, updateDoc } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { toast, ToastContainer } from "react-toastify";
import { removeItem } from "../../store/slice/goodsSlice";

export const AdminBoxGoods: React.FC = ({}) => {
  const dispatch = useDispatch();

  const dataItems = useSelector((state: any) => state.goods.goodsArray);

  const [dataItemsAct, setDataItemsAct] = useState<any>();


  async function delGood(item: any) {
    console.log("удаляем", dataItems);

    await deleteDoc(doc(db, "Goods", item))
      .then(() => {
        dispatch(
          removeItem({
            id: item,
          })
        );
      }).then(() => toast("Товар удален!"))
      .catch((er) => console.log(er));
  }

  useEffect(() => {
    setDataItemsAct(dataItems);
  }, [dataItems]);

  return (
    <div className={style.adminBoxGoods}>
      {dataItemsAct?.map((itemData: any) => (
        <ProductCard
          item={itemData}
          key={itemData?.id}
          delGood={delGood}
          delVisible={true}
        />
      ))}
      <ToastContainer />
    </div>
  );
};
