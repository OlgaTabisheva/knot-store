import React from "react";
import style from "./FullNewsPage.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const FullNewsPage: React.FC = () => {
  const { id } = useParams();
  const dataNews: any = useSelector((state: any) => state.news.newsArray);

  const fullNews: any = dataNews?.find((elem:{id:any}) => elem?.id === id);



  return (
    <div className={style.fullNewsPage}>
      <h3 className={style.fullNewsPage__name}>{fullNews?.name}</h3>
      <div className={style.fullNewsPage__box}>
        <div className={style.fullNewsPage__date}>{fullNews?.date}</div>
        <img
          className={style.fullNewsPage__img}
          src={fullNews?.image}
          alt="Картинка"
        />
        <img
          className={style.fullNewsPage__img2}
          src={fullNews?.image}
          alt="Картинка"
        />
        <div className={style.fullNewsPage__text}>{fullNews?.article}</div>
      </div>
    </div>
  );
};
