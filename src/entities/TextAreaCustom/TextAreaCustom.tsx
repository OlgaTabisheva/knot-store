import React from "react";

import style from "./TextAreaCustom.module.scss";

interface TextAreaCustomInt {
    name:string;
    value: string;
    onChange:void | string | undefined | any;
    textSpan:string;
    error:boolean;
    id:string;
    title:string;
   
}

const TextAreaCustom: React.FC<TextAreaCustomInt> = ({
    value,
    onChange,
    textSpan,
    error,
    id,
    name,
    title
}) => {
  return (
  <div className={style.TextAreaCustom}>
            <p className={style.TextAreaCustom__text}>{title}</p>

      <textarea className={style.TextAreaCustom__area} id={id} name={name} placeholder={name} value={value} onChange={onChange} />
      <span className={!error ? style.TextAreaCustom__span : style.TextAreaCustom__spanHidden} >{textSpan}</span>

      </div>

  );
};

export default TextAreaCustom;