import React, { useEffect, useState } from "react";
import style from "./PopupTrueFalse.module.scss";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import close from "../../assets/sumpleIcons/delete_e24xrki8c3pc.svg";

export const PopupTrueFalse: React.FC<{
  text: string;
  nameButton: string;
  openPopupButton: boolean;
}> = ({ text, nameButton, openPopupButton }) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  function handleClosePopup() {
    setOpenPopup(!openPopup);
  }

  useEffect(() => {
    setOpenPopup(openPopupButton);
  }, [openPopupButton]);
  return (
    <div
      className={
        openPopup ? style.popupTrueFalse : style.popupTrueFalse__hidden
      }
    >
      <div className={style.popupTrueFalse__cover}>
        <button
          className={style.popupTrueFalse__button}
          onClick={handleClosePopup}
        >
          <img
            className={style.popupTrueFalse__img}
            alt={"close"}
            src={close}
          ></img>
        </button>
        <p className={style.popupTrueFalse__text}>{text}</p>
        <div className={style.popupTrueFalse__boxButton}>
          <ButtonClassic
            type="button"
            name={nameButton}
            onClick={handleClosePopup}
          />
          <ButtonClassic
            type="button"
            name={nameButton}
            onClick={handleClosePopup}
          />
        </div>
      </div>
    </div>
  );
};
