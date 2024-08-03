

import style from './ButtonClassic.module.scss'
import React from 'react';

interface stylesButton {
    name?: string | any,
    type?: "submit" | "reset" | "button" | undefined,
    disabled?: boolean,
    onClick:((s: any)=> void) | any,
    
  };

  

export const ButtonClassic: React.FC<stylesButton> = ({name,type,disabled,onClick}) => {


    return (
        <button type={type} disabled={disabled} onClick={ onClick} className={style.buttonClassic}>{name} </button>
    )
}

