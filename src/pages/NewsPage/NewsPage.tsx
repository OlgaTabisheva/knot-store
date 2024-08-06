import React, { useEffect } from "react";

import style from "./NewsPage.module.scss";
import NewsBox from "../../widgets/NewsBox/NewsBox";
import { useSelector } from "react-redux";
import NewsCard, { NewsCardInt } from "../../widgets/Newscard/NewsCard";
import { useParams } from "react-router-dom";

export const NewsPage: React.FC = () => {
  const dataNews = useSelector((state: any) => state.news.newsArray);
  

  return (
    <div className={style.newsPage}>
      <div>
        {dataNews.map((item: NewsCardInt) => (
          <NewsCard
            title={item?.value?.name}
            news={item?.value?.article}
            image={item?.value?.image}
            date={item?.value?.date}
            key={item?.id}
            item={item}
          />
        ))}
      </div>
      <NewsBox />
    </div>
  );
};
