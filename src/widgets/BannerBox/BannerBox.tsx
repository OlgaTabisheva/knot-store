import React from "react";

import style from "./BannerBox.module.scss";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { useNavigate } from "react-router-dom";

export interface intBannerBox {
  image: string;
  name: string;
  date: string | null;
  text: string | null;
  about: string | null;
  buttonOne: boolean;
  buttonTwo: boolean;
  buttonOTwoName: string | null;
  buttonOneName: string | null;
}
export const BannerBox: React.FC<intBannerBox> = ({
  image,
  name,
  date,
  text,
  about,
  buttonOne,
  buttonTwo,
  buttonOneName,
  buttonOTwoName,
}) => {
  const navigate = useNavigate();
  function onClickNav(a: string) {
    a === "first" && navigate("/toOrders");
    a === "second" && navigate("/catalog");
  }
  return (
    <div className={style.banner}>
      <img className={style.banner__img} src={image} alt="logo" />
      <img className={style.banner__img2} src={image} alt="logo" />

      <div className={style.banner__box}>
        <h3 className={style.banner__name}>{name}</h3>
        <h4 className={style.banner__subName}>{date}</h4>
        <h2 className={style.banner__about}>{text}</h2>
        <p className={style.banner__text}>{about}</p>
        <div className={style.banner__buttons}>
          {buttonOne && (
            <ButtonClassic
              name={buttonOneName}
              onClick={() => onClickNav("first")}
            />
          )}
          {buttonTwo && (
            <a className={style.banner__a} href="#cat">
              {" "}
              <ButtonClassic
                name={buttonOTwoName}
                onClick={() => onClickNav("second")}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
