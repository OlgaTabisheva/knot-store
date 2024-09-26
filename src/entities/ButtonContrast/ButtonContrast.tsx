import React from "react";
import style from './ButtonContrast.module.scss'

interface intButtonContrast{
    nameButton:string | null,
    imageButton: string,
    onClick: any
}

export const ButtonContrast: React.FC<intButtonContrast> = ({nameButton, imageButton,onClick}) => {
    return (
        <button className={style.buttonContrast} onClick={onClick}>
            <div className={style.buttonContrast__box}>
        <img className={style.buttonContrast__img} src={imageButton}/>
        <p className={style.buttonContrast__name} >{nameButton} </p>
        </div>
        </button>
    )
}