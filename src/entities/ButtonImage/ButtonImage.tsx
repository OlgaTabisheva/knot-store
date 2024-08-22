import style from "./ButtonImage.module.scss";
import React from "react";

interface stylesButton {
  name?: string | any;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick: ((s: any) => void) | any;
  img:string
}

export const ButtonImage: React.FC<stylesButton> = ({
  type,
  disabled,
  onClick,
  img
}) => {
  return (
    <button
    className={style.buttonImage}
      type={type}
      disabled={disabled}
      onClick={onClick && onClick}
      
    >
      <img   className={style.buttonImage__image} src={img} alt='картинка'/>
    </button>
  );
};
