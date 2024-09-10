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
  const auth = getAuth();
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
      .then((e) =>
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
  /*   const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      displayName: userData?.displayName,
      photoURL: userData?.photoURL,
      phoneNumber: userData?.phoneNumber,
      email: e.target.value,
    });
    const emailTest = /\S+@\S+\.\S+/;
    const isEmail = emailTest.test(e.target.value);

    setEmailIsValid(isEmail && e.target.value.trim().length > 3);
  }; */
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
  /*  const onPhoneNumberChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      displayName: userData?.displayName,
      photoURL: userData?.photoURL,
      phoneNumber: e.target.value,
      email: userData?.email,
    });
    const PhoneNumberTest = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
    const isPhoneNumber = PhoneNumberTest.test(e.target.value);

    setPhoneNumberIsValid(isPhoneNumber && e.target.value.trim().length > 3);
  }; */

  useEffect(() => {
    setUserData({
      displayName: userUid?.displayName,
      photoURL: userUid?.photoURL,
      phoneNumber: userUid?.phoneNumber,
      email: userUid?.email,
    });
  }, []);

  useEffect(() => {
    console.log(formIsValid, "formIsValid");

    setFormIsValid(displayNameIsValid && photoURLIsValid);
  }, [displayNameIsValid, photoURLIsValid]);

  return (
    <div className={style.userSettings}>
      <form className={style.userSettings__form} o>
        <h3 className={style.userSettings__title}>
          Данные, доступные для редактирования:
        </h3>
        <InputAuth
          value={userData?.displayName}
          onChange={onDisplayNameChanged}
          error={false}
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
        {/*     <InputAuth
        value={userData?.email}
        onChange={onEmailChanged}
        error={false}
        id={"emailInput"}
        name={
          "Если хотите сменить почтовый адрес, введите новый почтовый адрес:"
        }
        title={
          "Если хотите сменить почтовый адрес, введите новый почтовый адрес:"
        }
        type={"text"}
        errorText={"Введите правильный email адрес"}
        eye={false}
        disabled={false}
        required
        password={"password"}
        setPassword={"null"}
        placeholder="user@mail.com"
        text={"Введите почту"}
      /> */}
        {/*       <InputAuth
        value={userData?.phoneNumber}
        onChange={onPhoneNumberChanged}
        error={false}
        id={"phoneNumberInput"}
        name={"Введите свой номер телефона:"}
        title={"Введите свой номер телефона:"}
        type={"text"}
        errorText={"Введите минимум 3 буквы"}
        eye={false}
        disabled={false}
        required
        password={"password"}
        setPassword={"null"}
        placeholder="Введите свой номер телефона:"
        text={"Введите свой номер телефона:"}
      /> */}
        <InputAuth
          value={userData?.photoURL}
          onChange={onPhotoURLChanged}
          error={false}
          id={"photoURLInput"}
          name={"Введите ссылку на аватар, если хотите заменить аватар:"}
          title={"Введите ссылку на аватар, если хотите заменить аватар:"}
          type={"text"}
          errorText={"Введите минимум 3 буквы"}
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
          onClick={(e: any) => {
            e.preventDefault();
            updateUserData();
          }}
        />
      </form>
      <ToastContainer />
    </div>
  );
};
