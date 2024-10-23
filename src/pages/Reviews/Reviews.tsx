import React, { useState } from "react";
import style from "./Reviews.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import review from "../../assets/Reviews.png";
import { ReviewBox } from "../../widgets/ReviewBox/ReviewBox";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
} from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { useAppSelector } from "../../store/hooks";
import { useSelector } from "react-redux";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { toast, ToastContainer } from "react-toastify";
import { messagesInt } from "../../store/slice/masagesSlice";
import moment from "moment";

export const Reviews: React.FC = () => {
  const [messageReview, setmessageReview] = useState("");
  const userUid = useSelector((state: any) => state?.auth)?.user;
  const messages = useSelector(
    (state: any) => state?.messages?.messagesArray?.messagesArray
  );
console.log(userUid,'userUid00')
  async function addGoodOnSubmit() {
    /// const newCityRef = doc(collection(db, "Goods"));

    // later...
    await addDoc(collection(db, "MessagesReview"), {
      userUld: userUid?.id,
      userEmail: userUid?.email,
      text: messageReview,
      piblish: false,
      timestamp: serverTimestamp(),
      createdAt: moment().format("YYYY-MM-DD k:m:s"),
    })
      .then(() => toast("Сообщение успешно отправлено!"))
      .catch(() => toast("Что-то пошло не так"));
  }

  console.log(messages);

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
              <ReviewBox key={res.id} name={res.userUld} text={res?.text} createdAt={res?.createdAt} email={res?.userEmail}/>
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
