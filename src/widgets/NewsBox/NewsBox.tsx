import React, { useEffect, useState } from "react";
import style from "./NewsBox.module.scss";
import NewsCard from "../Newscard/NewsCard";
import { useSelector } from "react-redux";
import { LinkAsButton } from "../../shared/LinkAsButton/LinkAsButton";

const NewsBox: React.FC = () => {
  const [cuttedNews, setCuttedNews] = useState<any>([]);
  const dataNews = useSelector((state: any) => state.news.newsArray);

  useEffect(() => {
    let dataNewsCut = dataNews.slice(0, 3);
    setCuttedNews(dataNewsCut);
  }, [dataNews]);

  return (
    <div className={style.news}>
      <h2 className={style.news__title}>Hoвости</h2>
      <div className={style.news__box}>
      {(Array.isArray(cuttedNews) && cuttedNews.length !== 0) && cuttedNews.map((item:{name:string,article: string, image:string, date:string, id:string }) => (
          <NewsCard
            title={item?.name}
            news={item?.article}
            image={item?.image}
            date={item?.date}
            key={item?.id}
            item={item}
            delNews={null}
            delVisible={false}
          />
        ))}
      </div>
      <LinkAsButton linkTo='/news' text={'Все новости'}/>    </div>
  );
};

export default NewsBox;
