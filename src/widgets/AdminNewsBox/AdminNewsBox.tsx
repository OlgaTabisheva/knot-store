import React, { useEffect, useState } from "react";
import style from "./AdminNewsBox.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import NewsCard from "../Newscard/NewsCard";
import { removeNews } from "../../store/slice/newsSlice";
import db from "../../firebase-config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { Emptybox } from "../Emptybox/Emptybox";

export const AdminNewsBox: React.FC = ({}) => {
  const dispatch = useDispatch();

  const newsItems = useSelector((state: any) => state.news.newsArray);

  const [dataNewsAct, setDataNewsAct] = useState<string []>([]);

  async function delNews(item: any) {

    await deleteDoc(doc(db, "Articles", item))
      .then(() => {
        dispatch(
          removeNews({
            id: item,
          })
        );
      })
      .then(() => toast("Новость удалена!"))
      .catch((er) => console.log(er));
  }

  useEffect(() => {
    setDataNewsAct(dataNewsAct);
  });
  return (
    <div className={style.adminNewsBox}>
      { (Array.isArray(newsItems) && newsItems.length !== 0)  ? newsItems?.map((item: any) => (
        <NewsCard
          title={item?.name}
          news={item?.article}
          image={item?.image}
          date={item?.date}
          key={item?.id}
          item={item}
          delNews={delNews}
          delVisible={true}
        />
      )) : <Emptybox/>}
      <ToastContainer />
    </div>
  );
};
