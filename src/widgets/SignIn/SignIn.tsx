import React, { useState } from "react";
import style from "./SignIn.module.scss";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./../../store/hooks";
import { toast, ToastContainer } from "react-toastify";
import { onError, onRegisterAuth } from "../../store/slice/authSlice";
import InputAuth from "../../entities/InputAuth/InputAuth";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  //const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        /*      const newUser = {
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }; */
        dispatch(
          onRegisterAuth({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );

        registerToast(user.email);
      })
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((e) => {
        dispatch(onError(e.message));
      });
  };
  const registerToast = (email: string | null) => {
    toast.success(<p className={style.signIn__tost}>Привет!, {email} !</p>, {
      position: "top-left",
    });
  };

  const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    setFormIsValid(e.target.value.includes("@") && password.trim().length > 3);
  };

  const onPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    setFormIsValid(e.target.value.trim().length > 3 && email.includes("@"));
  };

  return (
    <form className={style.signIn}>
      <ToastContainer />

      <div className={style.signIn__box}>
        <InputAuth
          id="email"
          name="emailInput"
          text={"Введите почту"}
          title={"Email:"}
          type="name"
          placeholder="user@mail.com"
          eye={false}
          errorText={"Введите правильный email адрес"}
          value={email}
          onChange={onEmailChanged}
          error={false}
          password={"password"}
          setPassword={"null"}
          disabled={false}
          required
        />
        <InputAuth
          id="password"
          text={"Введите пароль"}
          title={"Пароль:"}
          eye={true}
          type="password"
          placeholder="***"
          required
          errorText={"Введите правильный пароль"}
          name="passwordInput"
          value={password}
          onChange={onPasswordChanged}
          error={false}
          password={"null"}
          setPassword={"null"}
          disabled={false}
        />
      </div>
      <div className={style.signIn__buttonBox}>
        <ButtonClassic
          name={"войти"}
          type="submit"
          disabled={!formIsValid}
          onClick={(e: any) => {
            e.preventDefault();
            handleLogin(email, password);
          }}
        />
        <a className={style.signIn__link}> Забыли пароль?</a>
      </div>
    </form>
  );
};

export default SignIn;
