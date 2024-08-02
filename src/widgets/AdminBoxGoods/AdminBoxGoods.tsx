import React, { useEffect, useState } from "react";
import style from "./AdminBoxGoods.module.scss";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { deleteDoc, deleteField, doc, updateDoc } from "firebase/firestore";
import db from "../../firebase-config/firebase";

export const AdminBoxGoods: React.FC = ({}) => {

  const dataItems = useSelector((state: any) => state.goods.goodsArray);

const [dataItemsAct, setDataItemsAct] = useState<any>()
  async function delGood(item) {
    console.log('удаляем',dataItems)
   

    await deleteDoc(doc(db, "Goods", item));
  }

  useEffect(()=>{
    setDataItemsAct(dataItems)
  },[dataItems,delGood])

  return (
    <div className={style.adminBoxGoods}>
      {dataItemsAct?.map((itemData: any) => (
        <ProductCard item={itemData} key={itemData?.id} delGood={delGood} />
      ))}
    </div>
  );
};
