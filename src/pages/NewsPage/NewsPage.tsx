import React from "react";
import style from "./NewsPage.module.scss";
import { useSelector } from "react-redux";
import NewsCard from "../../widgets/Newscard/NewsCard";
import cat from "../../assets/catEmpty.png";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import NewProductsBox from "../../widgets/NewProductsBox/NewProductsBox";

export const NewsPage: React.FC = () => {
  const dataNews = useSelector((state: any) => state.news.newsArray);
  console.log(dataNews, "");

  return (
    <div className={style.newsPage}>
      <h3 className={style.newsPage__title}>Статьи и новости:</h3>
      <div className={style.newsPage__box}>
        {Array.isArray(dataNews) && dataNews.length !== 0 ? (
          dataNews.map(
            (item: {
              name: string;
              article: string;
              image: string;
              date: string;
              id: string;
            }) => (
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
            )
          )
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
      <NewProductsBox />
    </div>
  );
};
