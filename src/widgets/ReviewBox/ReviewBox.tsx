import React from "react";
import style from "./ReviewBox.module.scss"
import chat from './../../assets/chat_mzo94jo4buy2.svg'
import TextareaAutosize from "react-textarea-autosize";

export const ReviewBox: React.FC <{name:string,text:string}>= ({name, text}) => {
  return (
<div className={style.reviewBox}>
    <div className={style.reviewBox__box}>
<img  className={style.reviewBox__img} src={chat}/>
<div className={style.reviewBox__name}>{name} </div>
<p className={style.reviewBox__content}>{text}</p>

      </div>
</div>
  );
};
