import React, { useEffect, useState } from "react";
import style from "./UnivPopup.module.scss";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";

export const UnivPopup: React.FC<{
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
    <div className={openPopup ? style.univPopup : style.univPopup__hidden}>
      <div className={style.univPopup__cover}>
        <p className={style.univPopup__text}>{text}</p>
        <ButtonClassic
          type="button"
          name={nameButton}
          onClick={ handleClosePopup}
        />
      </div>
    </div>
  );
};
