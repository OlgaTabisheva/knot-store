import React from "react";
import style from './ButtonClassic.module.scss'


export const ButtonClassic: React.FC<{name:string}> = ({name}) => {
    return (
        <button className={style.buttonClassic}>{name} </button>
    )
}