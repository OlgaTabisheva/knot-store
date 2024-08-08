import React, { useEffect, useState } from "react";
import style from "./AdminNewsBox.module.scss";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import NewsCard from "../Newscard/NewsCard";

export const AdminNewsBox: React.FC = ({}) => {

  const newsItems = useSelector((state: any) => state.news.newsArray);



  return (
    <div className={style.adminNewsBox}>
      {newsItems?.map((item: any) => (
        <NewsCard 
        title={item?.value?.name}
        news={item?.value?.article}
        image={item?.value?.image}
        date={item?.value?.date}
        key={item?.id}
        item={item}
        />
      ))}
            <ToastContainer />

    </div>
  );
};
