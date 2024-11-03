import React, { useEffect, useState } from "react";
import style from "./ ItemsToOrder.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import orders from "./../../assets/Gemini_Generated_Image_u64ceyu64ceyu64c.jpeg";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { useAppSelector } from "../../store/hooks";
import { toast, ToastContainer } from "react-toastify";
import { UploaderCustom } from "../../widgets/UploaderCustom/UploaderCustom";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { useNavigate } from "react-router-dom";

export const ItemsToOrder: React.FC = () => {
  const navigate = useNavigate();

  const storage = getStorage();
  const userIsLoggedIn = useAppSelector((state) => state.auth)?.isLoggedIn;
  const [needsText, setNeedsText] = useState("");
  const [fileExample, setFileExample] = useState<string>("");
  const [contacts, setContacts] = useState<string>("");

  async function addExampleOnSubmit() {
    await addDoc(collection(db, "ItemsToOrder"), {
      needsText: needsText,
      date: serverTimestamp(),
      contacts: contacts,
      image: fileExample,
    })
      .then(() =>
        toast("Спасибо за запрос, мы с вами свяжемся в ближайщее время!")
      )
      .then(() => {
        setTimeout(() => {
          navigate("/catalog");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }, 2000);
      })
  


      .catch(() => toast("Что-то пошло не так"));
  }

  function appOb(file: string) {
    if (file?.length > 1) {
      const starsRef = ref(storage, file);

      getDownloadURL(starsRef)
        .then((url) => {
          setFileExample(url);
        })
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              break;
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        });
    }
  }

  const handleChange = (file: any) => {
    const storageRef = ref(storage, file?.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      setFileExample(snapshot?.metadata?.name);
    });
  };

  useEffect(() => {
    appOb(fileExample);
  }, [fileExample]);

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
        <h3 className={style.itemsToOrder__title}>Форма для заказа</h3>
        <div className={style.itemsToOrder__cover}>
          <UploaderCustom
            imageReady={fileExample}
            handleChange={handleChange}
          />

          {userIsLoggedIn && (
            <div className={style.itemsToOrder__cover}>
              <TextAreaCustom
                error={
                  needsText.length < 1 || needsText.length > 5 ? true : false
                }
                value={needsText}
                onChange={(e: any) => setNeedsText(e.target.value)}
                id={"textAreaReview"}
                name="Что Вам связать?"
                textSpan="Минимум 10 симфолов"
                title="Напишите вашу идею, чтобы мы смогли расчитать сроки изготовления и стоимость:"
              />
              <TextAreaCustom
                error={
                  contacts.length < 1 || contacts.length > 5 ? true : false
                }
                value={contacts}
                onChange={(e: any) => setContacts(e.target.value)}
                id={"textAreaReview"}
                name="Например телефон, email, telegram или instagram"
                textSpan="Минимум 5 симфолов"
                title="Введите ваши контактные данные:"
              />
              <div className={style.itemsToOrder__cover2}>
                <ButtonClassic
                  name="Отправить"
                  type="submit"
                  disabled={
                    needsText.length > 5 &&
                    contacts.length > 5 &&
                    fileExample.length > 5
                      ? false
                      : true
                  }
                  onClick={() => {
                    addExampleOnSubmit();
                  }}
                />
              </div>
              {fileExample.length < 1 &&
                needsText.length > 5 &&
                contacts.length > 5 && (
                  <p className={style.itemsToOrder__text}>
                    Пожалуйста, добавьте фото похожего изделия.
                  </p>
                )}{" "}
            </div>
          )}
          {!userIsLoggedIn && (
            <div className={style.itemsToOrder__box}>
              <p className={style.itemsToOrder__text}>
                К сожалению форма доступна только авторизованным пользователям.
                Зарегистрируйтесь или авторизуйтесть чтобы начать заполнять
                форму.
              </p>{" "}
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
