import React, { useState } from "react";
import style from './ ItemsToOrder.module.scss'
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import orders from './../../assets/Gemini_Generated_Image_u64ceyu64ceyu64c.jpeg'
import InputAuth from "../../entities/InputAuth/InputAuth";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { useAppSelector } from "../../store/hooks";
import { ToastContainer } from "react-toastify";


export const ItemsToOrder: React.FC = () => {
  const userIsLoggedIn = useAppSelector((state) => state.auth)?.isLoggedIn;

const [needsText, setNeedsText] = useState('')

  return (
 <div className={style.itemsToOrder}>
      <BannerBox
        image={orders}
        name={"Предлагаем изготовить вязаную продукцию на заказ"}
        date={null}
        text={null}
        about="Заполните форму заказа"
        buttonOTwoName={"Готовые изделия"}
        buttonOne={false}
        buttonOneName={"Изделия на заказ"}
        buttonTwo={false}
      />
<div className={style.itemsToOrder__box}>
<h3>Форма для заказа</h3>
<InputAuth
          value={'userData?.photoURL'}
          onChange={'onPhotoURLChanged'}
          error={ false}
          id={"photoURLInput"}
          name={"Отправьте ссылку на подходящую картинку"}
          title={"Введите ссылку на аватар, если хотите заменить аватар:"}
          type={"text"}
          errorText={"Мининум 7 символов (ссылка на картинку)"}
          eye={false}
          disabled={false}
          required
          password={"password"}
          setPassword={"null"}
          placeholder="ссылка на картинку"
          text={"Введите минимум 3 буквы"}
        />

{userIsLoggedIn && (
        <div className={style.reviews__box}>
          <TextAreaCustom
            error={
             false
            }
            value={needsText}
            onChange={(e: any) => setNeedsText(e.target.value)}
            id={"textAreaReview"}
            name="Напиши свой отзыв"
            textSpan="Ваш отзыв слишком короткий!"
            title="Введите текст отзыва о магазине(Сообщение отобразится после модерации):"
          />

          <ButtonClassic
            name="создать"
            type="submit"
            disabled={false}
            onClick={() => {
              null
            }}
          />
        </div>
      )}
      {!userIsLoggedIn &&  <div className={style.reviews__box}><p className={style.reviews__text}>Отзыв можно написать только зарегистрированным пользователям</p>  </div>}
      <ToastContainer />
</div>
  </div>
  );
};
