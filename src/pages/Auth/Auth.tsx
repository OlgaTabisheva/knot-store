import React, { useState } from "react";

import style from './Auth.module.scss'
import { ButtonRadioAuth } from "../../shared/ButtonRadioAuth/ButtonRadioAuth";
import SignIn from "../../widgets/SignIn/SignIn";
import SignUp from "../../widgets/SignUp/SignUp";


export const Auth: React.FC = () => {
  const [disabledButton, setDisabledButton] = useState<boolean>(false)
  const [password, setPassword] = useState<boolean>(true)

  return (
 <div className={style.auth}>
  <div className={style.auth__images}>
        <div className={style.auth__content}>

          <div className={style.auth__contentText}>
            <h2 className={style.auth__title}>{!disabledButton ? "Войдите на сайт" : "Зарегистрируйтесь на сайте"}</h2>
            <ButtonRadioAuth disabledButton={disabledButton} setDisabledButton={setDisabledButton}/>
          </div>

          {!disabledButton ?
          <SignIn password={password} setPassword={setPassword}/> :
            <SignUp password={password} setPassword={setPassword}/>}

        </div>
      </div>


 </div>
  );
};
