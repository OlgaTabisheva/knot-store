import React from "react";

import style from "./NewsPage.module.scss";
import NewsBox from "../../widgets/NewsBox/NewsBox";

export const NewsPage: React.FC = () => {
  return (
    <div className={style.newsPage}>
      <NewsBox />
    </div>
  );
};
