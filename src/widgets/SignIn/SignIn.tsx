import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic"
import React from "react";

import style from "./SignIn.module.scss";
import InputAuth from "../../entities/InputAuth/InputAuth";

const SignIn: React.FC = () => {

return (
    <section className={style.signIn}>
      <form className={style.signIn__box} >
        <InputAuth
          id="email"
          name="emailInput"
          text={"Введите почту"}
          title={"Email:"}
          type="email"
          placeholder="user@mail.com"
          eye={false}
          errorText={"Введите правильный email адрес"}
        
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
        
        />
      </form>
      <div className={style.signIn__buttonBox}>
        <ButtonClassic name={'войти'} />
        <a className={style.signIn__link}> Забыли пароль?</a>
      </div>
    </section>
  )
}

export default SignIn