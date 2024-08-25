import React from "react";
import style from "./UserSettings.module.scss";
import InputCustom from "../../entities/InputCustom/InputCustom";

export const UserSettings: React.FC = ({}) => {
  return (
    <div className={style.userSettings}>
      <h3 className={style.userSettings__title}>
        Данные, доступные для редактирования:
      </h3>
      <InputCustom
        value={"null"}
        onChange={null}
        textSpan="Привет мир"
        error={false}
        id={"555"}
        name={"6666"}
        title={"Введите ваше имя: "}
        type={"text"}
      />
      <InputCustom
        value={"null"}
        onChange={null}
        textSpan="Привет мир"
        error={false}
        id={"555"}
        name={"6666"}
        title={
          "Если хотите сменить почтовый адрес, введите новый почтовый адрес:"
        }
        type={"text"}
      />
      <InputCustom
        value={"null"}
        onChange={null}
        textSpan="Привет мир"
        error={false}
        id={"555"}
        name={"6666"}
        title={"Введите свой номер телефона:"}
        type={"text"}
      />
      <InputCustom
        value={"null"}
        onChange={null}
        textSpan="Привет мир"
        error={false}
        id={"555"}
        name={"6666"}
        title={"ВВедите ссылку на аватар, если хотите заменить аватар:"}
        type={"text"}
      />
    </div>
  );
};
