import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import InputAuth from "../../entities/InputAuth/InputAuth";
import style from "./SignUp.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { onError, onRegisterAuth } from "../../store/slice/authSlice";
import { toast } from "react-toastify";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
  const onPasswordChangedRepeat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(e.target.value);

    setFormIsValid(e.target.value === password);
  };
  return (
    <form className={style.signUp}>
      <div className={style.signUp__box}>
        <InputAuth
          id="email"
          name="emailInput"
          text={"Введите почту"}
          title={"Email:"}
          type="email"
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
          name="emailInput"
          eye={true}
          type="password"
          placeholder="***"
          errorText={"Введите правильный email адрес"}
          value={password}
          onChange={onPasswordChanged}
          error={false}
          password={"null"}
          setPassword={"null"}
          disabled={false}
          required
        />
        <InputAuth
          id="password"
          text={"Введите пароль"}
          title={"Повторите пароль:"}
          eye={true}
          errorText={"Пароль слишком короткий"}
          type="password"
          placeholder="***"
          required
          name="passwordInput"
          value={passwordRepeat}
          onChange={onPasswordChangedRepeat}
          error={false}
          password={"null"}
          setPassword={"null"}
          disabled={false}
        />
      </div>
      <div className={style.signUp__buttonBox}>
        <ButtonClassic
          name={"Зарегистрироваться"}
          type="submit"
          disabled={!formIsValid}
          onClick={(e:any) => {
            e.preventDefault();
            handleLogin(email, password);
          }}
        />
      </div>
    </form>
  );
};

export default SignUp;
