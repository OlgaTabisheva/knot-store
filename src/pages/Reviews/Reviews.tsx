import React from "react";
import style from "./Reviews.module.scss"
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import review from "../../assets/Reviews.png";
import { ReviewBox } from "../../widgets/ReviewBox/ReviewBox";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";

export const Reviews: React.FC = () => {
  return (
    <div className={style.reviews}>
            <h3 className={style.reviews__title}>Отзывы</h3>

      <BannerBox
        image={review}
        name={"KNOT STORE"}
        date={""}
        text={"Страница в разработке"}
        about={""}
        buttonOTwoName={null}
        buttonOne={false}
        buttonOneName={null}
        buttonTwo={false}
      />
      <div className={style.reviews__box}>

      
    <h3 className={style.reviews__title}>Комментарии и отзывы:</h3>
 <ReviewBox/>
 <TextAreaCustom name='Напиши свой отзыв' value="шш" textSpan='fff'/>
    </div>
    </div>
  );
};
