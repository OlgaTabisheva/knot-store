import React from "react";

import style from "./InputCustom.module.scss";

interface InputCustom {
    name:string;
    value: string | number;
    onChange:void | string | undefined | any;
    textSpan:string;
    error:boolean;
    id:string;
    title:string;
    type:string
}

const InputCustom: React.FC<InputCustom> = ({
    value,
    onChange,
    textSpan,
    error,
    id,
    name,
    title,
    type
}) => {
  return (
  <div className={style.inputCustom}>
            <p className={style.inputCustom__text}>{title}</p>

      <input  className={style.inputCustom__input} id={id} name={name} type={type} placeholder={name} defaultValue={value} onChange={onChange} />
      <span className={!error ? style.inputCustom__span : style.inputCustom__spanHidden} >{textSpan}</span>

      </div>

  );
};

export default InputCustom;
