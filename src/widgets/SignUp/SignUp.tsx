import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import InputAuth from "../../entities/InputAuth/InputAuth";
import style from "./SignUp.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { useState } from "react";
import { onError, onRegisterAuth } from "../../store/slice/authSlice";
import { toast } from "react-toastify";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [formIsValidPassword, setFormIsValidPassword] = useState<boolean>(false);
  const [formIsValidPasswordRep, setFormIsValidPasswordRep] = useState<boolean>(false);
  const [formIsValidEmail, setFormIsValidEmail] = useState<boolean>(false);


  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          onRegisterAuth({
            email: user.email,
            id: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
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
const formIsValid = formIsValidEmail && formIsValidPasswordRep && formIsValidPassword
  const registerToast = (email: string | null) => {
    toast.success(<p className={style.signIn__tost}>Привет!, {email} !</p>, {
      position: "top-left",
    });
  };

  const onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    setFormIsValidEmail(e.target.value.includes("@") && password.trim().length > 3);
  };

  const onPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    setFormIsValidPassword(e.target.value.trim().length > 3 && email.includes("@"));
  };
  const onPasswordChangedRepeat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(e.target.value);

    setFormIsValidPasswordRep(e.target.value === password);
  };
  return (
    <div className={style.signUp}>
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
          error={(email.length > 6 || email.length < 1) ? false : true}
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
          errorText={"Введите пароль не менее 6 символов"}
          value={password}
          onChange={onPasswordChanged}
          error={(password.length > 5 || password.length < 1) ? false : true}
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
          errorText={"Повторите пароль"}
          type="password"
          placeholder="***"
          required
          name="passwordInput"
          value={passwordRepeat}
          onChange={onPasswordChangedRepeat}
          error={(passwordRepeat.length > 6 || passwordRepeat.length < 1) ? false : true}
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
          onClick={(e: any) => {
            //  e.preventDefault();
            handleLogin(email, password);
          }}
        />
      </div>
    </div>
  );
};

export default SignUp;
