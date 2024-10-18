import React from "react";
import style from "./ReviewBox.module.scss"
import chat from './../../assets/chat_mzo94jo4buy2.svg'
import TextareaAutosize from "react-textarea-autosize";

export const ReviewBox: React.FC = () => {
  return (
<div className={style.reviewBox}>
    <div className={style.reviewBox__box}>
<img  className={style.reviewBox__img} src={chat}/>
<div className={style.reviewBox__name}>Тамара </div>
<TextareaAutosize className={style.reviewBox__content} id={'id'} name={'name'} placeholder={'name'} value={'valuevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevalue'} onChange={()=>null} />

      </div>
</div>
  );
};
