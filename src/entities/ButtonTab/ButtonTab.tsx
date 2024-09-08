import React from "react";
import style from './ButtonTab.module.scss'


export const ButtonTab: React.FC<{name:string | null, click:any, styleButton:boolean } > = ({name,click, styleButton}) => {

    return (
        <button onClick={click} className={(styleButton !== true) ? style.buttonTab : style.buttonTab_active }>{name} </button>
    )
}