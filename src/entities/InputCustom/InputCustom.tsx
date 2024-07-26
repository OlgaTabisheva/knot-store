import React from "react";

import style from "./InputCustom.module.scss";

interface InputCustom {
    name:string;
    value: string
}

const InputCustom: React.FC<InputCustom> = ({
    name,
    value
}) => {
  return (
  
      <input className={style.inputCustom} placeholder={name} value={value}/>



  );
};

export default InputCustom;
