import React from "react";
import style from "./ReviewBox.module.scss";
import chat from "./../../assets/chat_mzo94jo4buy2.svg";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import db from "../../firebase-config/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const ReviewBox: React.FC<{
  id: string;
  text: string;
  createdAt: string;
  publish: boolean;
  userUid:{id:string};
  userImg:string;
  userName: string


}> = ({ text, createdAt, id, publish,userUid, userImg, userName }) => {
  async function updateAdminMessagesPublish(id: string, item: boolean) {
    const washingtonRef = doc(db, "MessagesReview", id);
    await updateDoc(washingtonRef, {
      publish: item,
    });
  }

  return (
    <div className={style.reviewBox}>
      <div className={style.reviewBox__box}>
        <div className={style.reviewBox__boxHeader}>
        <img className={style.reviewBox__img} src={userImg?.length>1 ? userImg : chat} />
        <div className={style.reviewBox__date}>{createdAt} </div>
        <div className={style.reviewBox__name}>{userName?.length>1 ? userName : 'Пользователь'} </div>
        <p className={style.reviewBox__content}>{text}</p>
        </div>
       { userUid?.id == "ppnifnT4HdStLXALeMJaEEGmBRP2" &&  <p className={style.reviewBox__content}>
          Опубликовано: {publish === false ? "нет" : "да"}
        </p>}

       {userUid?.id == "ppnifnT4HdStLXALeMJaEEGmBRP2" && <div className={style.reviewBox__cover}>
          {publish === false && (
            <ButtonClassic
              name={"Добавить"}
              onClick={() => updateAdminMessagesPublish(id, true )}
            />
          )}
          {publish === true && (
            <ButtonClassic
              name={"Убрать"}
              onClick={() => updateAdminMessagesPublish(id, false)}
            />
          )}
        </div>}
      </div>
    </div>
  );
};
