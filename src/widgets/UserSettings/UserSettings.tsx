import React, { useEffect, useState } from "react";
import style from "./UserSettings.module.scss";
import { useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import InputAuth from "../../entities/InputAuth/InputAuth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { onRegisterAuth } from "../../store/slice/authSlice";
import { useAppDispatch } from "../../store/hooks";

export const UserSettings: React.FC = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userUid = useSelector((state: any) => state?.auth?.user);
  const auth: any = getAuth();
  const [userData, setUserData] = useState<any>({
    displayName: "",
    photoURL: "",
  });
  const [displayNameIsValid, setDisplayNameIsValid] = useState<boolean>(false);
  const [photoURLIsValid, setPhotoURLIsValid] = useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const updateUserData = () => {
    updateProfile(auth.currentUser, {
      displayName: userData?.displayName,
      photoURL: userData?.photoURL,
    })
      .then(() =>
        dispatch(
          onRegisterAuth({
            email: userUid?.email,
            id: userUid?.uid,
            displayName: userData?.displayName,
            photoURL: userData?.photoURL,
            phoneNumber: userUid?.phoneNumber,
            token: userUid?.refreshToken,
          })
        )
      )
      .then(() => toast("Обновлено"))

      .then(() => {
        setTimeout(() => {
          navigate(0);
        }, 1000);
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };
  const onDisplayNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      displayName: e.target.value,
      photoURL: userData?.photoURL,
    });

    setDisplayNameIsValid(e.target.value.trim().length > 2);
  };
  const onPhotoURLChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      displayName: userData?.displayName,
      photoURL: e.target.value,
    });

    const LinkTest =
      /(((?:")(https?:\/\/)(?!example123\.com)[^"]+(?:"))|((https?:\/\/)(?!example123\.com)[^\s"]+))/;
    const isLink = LinkTest.test(e.target.value);
    setPhotoURLIsValid(isLink && e.target.value.trim().length > 3);
  };

  useEffect(() => {
    setUserData({
      displayName: userUid?.displayName,
      photoURL: userUid?.photoURL,
    });
  }, []);

  useEffect(() => {
    setFormIsValid(displayNameIsValid && photoURLIsValid);
  }, [displayNameIsValid, photoURLIsValid]);

  return (
    <div className={style.userSettings}>
      <h3 className={style.userSettings__title}>
        Данные, доступные для редактирования:
      </h3>
      <p className={style.userSettings__text}>
        Для редактирования перепешите или замените оба поля
      </p>
      <div className={style.userSettings__form}>
        <InputAuth
          value={userData?.displayName}
          onChange={onDisplayNameChanged}
          error={userData?.displayName && (userData?.displayName?.length > 3 || userData?.displayName?.lengh <1) ? false : true}
          id={"nameInput"}
          name={"Введите ваше имя:"}
          title={"Введите ваше имя: "}
          type={"text"}
          errorText={"Введите минимум 3 буквы"}
          eye={false}
          disabled={false}
          required
          password={"password"}
          setPassword={"null"}
          placeholder="Введите имя"
          text={"Введите имя"}
        />
        <InputAuth
          value={userData?.photoURL}
          onChange={onPhotoURLChanged}
          error={ userData?.photoURL && (userData?.photoURL.length > 7 || userData?.photoURL.lengh <1 ) ? false : true}
          id={"photoURLInput"}
          name={"Введите ссылку на аватар, если хотите заменить аватар:"}
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
        <ButtonClassic
          type={"submit"}
          disabled={!formIsValid}
          name={"Обновить"}
          onClick={() => {
            //e.preventDefault();
            updateUserData();
          }}
        />
      </div>
      <ToastContainer />
    </div>
  );
};
