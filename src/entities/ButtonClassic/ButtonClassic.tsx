

import style from './ButtonClassic.module.scss'
import React from 'react';

interface stylesButton {
    name?: string | any,
    
  };

  

export const ButtonClassic: React.FC<stylesButton> = ({name}) => {


    return (
        <button type="button" className={style.buttonClassic}>{name} </button>
    )
}

