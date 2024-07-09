import { ButtonClassic } from '../../entities/ButtonClassic/ButtonClassic'
import InputAuth from '../../entities/InputAuth/InputAuth'
import style from './SignUp.module.scss'



const SignUp: React.FC = () => {

  return (
    <section className={style.signUp}>
      <form className={style.signUp__box} >
        <InputAuth
          id="email"
          name="emailInput"
          text={"Введите почту"}
          title={"Email:"}
          type="email"
          placeholder="user@mail.com"
          eye={false}
          errorText={"Введите правильный email адрес"}
       
          //textError={"Пароль слишком короткий"}
        />
        <InputAuth
          id="password"
          text={"Введите пароль"}
          title={"Пароль:"}
          eye={true}
          type="password"
          placeholder="***"
          required
      
          errorText={"Пароль слишком короткий"}
        />

        <InputAuth
          type="password"
          id="password"
          text={"Введите пароль"}
          title={"Повторите пароль:"}
          eye={true}
          errorText={"Пароль слишком короткий"}

       />
      </form>
      <div className={style.signUp__buttonBox}>
        <ButtonClassic name={'Зарегистрироваться'} />
      </div>
    </section>
  )
}

export default SignUp