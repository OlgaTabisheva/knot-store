import React, { useState } from "react";
import style from "./Reviews.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import review from "../../assets/Reviews.png";
import { ReviewBox } from "../../widgets/ReviewBox/ReviewBox";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { useSelector } from "react-redux";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { toast, ToastContainer } from "react-toastify";
import { messagesInt } from "../../store/slice/masagesSlice";
import moment from "moment";

export const Reviews: React.FC<{ messages: [] }> = ({ messages }) => {
  const [messageReview, setmessageReview] = useState("");
  const userUid = useSelector((state: any) => state?.auth)?.user;
  async function addGoodOnSubmit() {
    await addDoc(collection(db, "MessagesReview"), {
      userUld: userUid?.id,
      userEmail: userUid?.email,
      userName: userUid?.displayName ? userUid?.displayName : "",
      userImg: userUid?.photoURL ? userUid?.photoURL : "",
      text: messageReview,
      publish: false,
      createdAt: moment().format("YYYY-MM-DD k:m:s"),
    })
      .then(() => toast("Сообщение успешно отправлено!"))
      .catch(() => toast("Что-то пошло не так"));
  }

  return (
    <div className={style.reviews}>
      <h3 className={style.reviews__title}>Отзывы</h3>

      <BannerBox
        image={review}
        name={"KNOT STORE"}
        date={""}
        text={"Комментарии и отзывы:"}
        about={""}
        buttonOTwoName={null}
        buttonOne={false}
        buttonOneName={null}
        buttonTwo={false}
      />
      <div className={style.reviews__box}>
        {
          <div className={style.reviews__boxMap}>
            {messages?.map((res: messagesInt) => (
              <ReviewBox
                key={res.id}
                text={res?.text}
                createdAt={res?.createdAt}
                email={res?.userEmail}
                id={res?.id}
                publish={res?.publish}
                userUid={userUid}
                userName={res?.userName}
                userImg={res?.userImg}
              />
            ))}
          </div>
        }
      </div>
      <div className={style.reviews__box}>
        <TextAreaCustom
          error={false}
          value={messageReview}
          onChange={(e: any) => setmessageReview(e.target.value)}
          id={"textAreaReview"}
          name="Напиши свой отзыв"
          textSpan=""
          title="Введите текст отзыва о магазине(Сообщение отобразится после модерации):"
        />

        <ButtonClassic
          name="создать"
          type="submit"
          disabled={false}
          onClick={(e: any) => {
            addGoodOnSubmit();
          }}
        />
      </div>
      <ToastContainer />
    </div>
  );
};
