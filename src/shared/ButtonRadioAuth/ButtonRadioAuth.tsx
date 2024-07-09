
import React from "react";
import style from './ButtonRadioAuth.module.scss'


export const ButtonRadioAuth: React.FC = ({disabledButton, setDisabledButton}) => {
  return (
    <section className={style.buttonRadioAuth}>

      <button className={style.buttonRadioAuth__button} onClick={() => setDisabledButton(!disabledButton)}
              disabled={!disabledButton}>Войти
      </button>
      <button className={style.buttonRadioAuth__button} onClick={() => setDisabledButton(!disabledButton)}
              disabled={disabledButton}>Зарегистрироваться
      </button>
    </section>
  )
}


