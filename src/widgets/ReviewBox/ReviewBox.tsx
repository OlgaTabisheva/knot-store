import React from "react";
import style from "./ReviewBox.module.scss"
import chat from './../../assets/chat_mzo94jo4buy2.svg'


export const ReviewBox: React.FC <{text:string, createdAt:string, email:string}>= ({ text, createdAt,email}) => {


  return (
<div className={style.reviewBox}>
    <div className={style.reviewBox__box}>
<img  className={style.reviewBox__img} src={chat}/>
<div className={style.reviewBox__date}>{createdAt} </div>
<div className={style.reviewBox__name}>{email} </div>
<p className={style.reviewBox__content}>{text}</p>

      </div>
</div>
  );
};
