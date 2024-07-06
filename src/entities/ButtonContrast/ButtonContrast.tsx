import React from "react";
import style from './ButtonContrast.module.scss'

interface intButtonContrast{
    nameButton:string | null,
    imageButton: string
}

export const ButtonContrast: React.FC<intButtonContrast> = ({nameButton, imageButton}) => {
    return (
        <button className={style.buttonContrast}>
        <img className={style.buttonContrast__img} src={imageButton}/>
        <p className={style.buttonContrast__name} >{nameButton} </p>
        </button>
    )
}