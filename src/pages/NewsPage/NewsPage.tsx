import React, { useEffect } from "react";

import style from "./NewsPage.module.scss";
import NewsBox from "../../widgets/NewsBox/NewsBox";
import { useSelector } from "react-redux";
import NewsCard, { NewsCardInt } from "../../widgets/Newscard/NewsCard";
import { useParams } from "react-router-dom";

export const NewsPage: React.FC = () => {
  const dataNews = useSelector((state: any) => state.news.newsArray);
  console.log(dataNews,'')

  return (
    <div className={style.newsPage}>
      <div>
        {dataNews.map((item: NewsCardInt) => (
          <NewsCard
            title={item?.name}
            news={item?.article}
            image={item?.image}
            date={item?.date}
            key={item?.id}
            item={item}
          />
        ))}
      </div>
      <NewsBox />
    </div>
  );
};
