import React from "react";

import style from "./InputAuth.module.scss";

interface intInputAuth {
  title: string;
  required: boolean;
  eye: boolean;
  password: string;
  setPassword: any;
  name: string;
  id: string;
  errorText: string;
  placeholder: string;
  error: boolean;
  disabled: boolean;
  onChange: boolean | any;
  value: string;
  type: string;
  text:string;
}

const InputAuth: React.FC<intInputAuth> = ({
  title,
  required,
  eye,
  password,
  setPassword,
  name,
  id,
  errorText,
  placeholder,
  error,
  disabled,
  onChange,
  value,
  ...props
}) => {
  return (
    <div className={style.inputAuth} {...props}>
      <p
        className={
          error && value !== ""
            ? style.inputAuth__text_error
            : style.inputAuth__text
        }
      >
        {title ? title : "введите наименование поля"}
      </p>
      <input
        required={required}
        className={
          !error
            ? value !== ""
              ? style.inputAuth__input
              : style.inputAuth__input_padding
            : value !== ""
            ? style.inputAuth__input_error
            : style.inputAuth__input_padding
        }
       // type={password && "password"}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? onChange : null}
        disabled={disabled}
      
      />
      {eye && (
        <button
          type={"button"}
          className={style.inputAuth__buttonImg}
          onClick={() => setPassword(!password)}
        >
          {
            <div
              className={
                !password ? style.inputAuth__img_active : style.inputAuth__img
              }
            />
          }
        </button>
      )}
      <span
        className={
          error
            ? style.inputAuth__inputError
            : style.inputAuth__inputError_hidden
        }
        id="input-error"
      >
        {value !== "ghjyj" && errorText}{"ytjtyj"}
      </span>
    </div>
  );
};

export default InputAuth;
