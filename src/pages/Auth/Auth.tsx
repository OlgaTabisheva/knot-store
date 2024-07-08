import React, { useState } from "react";

import style from './Auth.module.scss'
//import SignIn from "../../widgets/SignIn/SignIn";


export const Auth: React.FC = () => {
  const [disabledButton, setDisabledButton] = useState(false)
  const [password, setPassword] = useState(true)

  return (
 <div className={style.auth}>
  <div className={style.auth__images}>
        <div className={style.auth__content}>

          <div className={style.auth__contentText}>
            <h2 className={style.auth__title}>{!disabledButton ? "Войдите на сайт" : "Зарегистрируйтесь на сайте"}</h2>
            <p className={style.auth__description}>ставьте лайки, комментируйте и пишите рецепты </p>
          {/*   <ButtonRadioAuth disabledButton={disabledButton} setDisabledButton={setDisabledButton}/> */}
          </div>
{/* 
          {disabledButton ?
          //  <SignUp password={password} setPassword={setPassword}/> :
            <SignIn password={password} setPassword={setPassword}/>} */}

        </div>
      </div>


 </div>
  );
};
