import React from "react";

import style from "./InputCustom.module.scss";

interface InputCustom {
    name:string;
    value: string;
    onChange:void | string | undefined | any
}

const InputCustom: React.FC<InputCustom> = ({
    name,
    value,
    onChange
}) => {
  return (
  
      <input className={style.inputCustom} placeholder={name} value={value} onChange={onChange}/>



  );
};

export default InputCustom;
