
import React from "react";
import style from './ButtonDell.module.scss'
import del from "./../../assets/delete_rpwkbdkkifyc.svg";


export const ButtonDell: React.FC<{delVisible:boolean,onClick:(p: boolean) => void}> = ({delVisible, onClick}) => {
  return (
    <button
    className={delVisible ? style.buttonDell__buttonDel : style.buttonDell__buttonDelHidden}
    onClick={onClick}
  >
    <img className={style.buttonDell__img} src={del} alt="button" />
  </button>
  )
}
