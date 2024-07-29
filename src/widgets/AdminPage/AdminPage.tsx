import React, { useState } from "react";
import style from "./AdminPage.module.scss";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import InputCustom from "../../entities/InputCustom/InputCustom";

export const AdminPage: React.FC = ({}) => {
  const [adminButtons, setAdminButtons] = useState<number>(0);

  return (
    <div className={style.adminPage}>
      <div className={style.adminPage__box}>
        <ButtonClassic
          name={"Добавить товар"}
          type="button"
          disabled={false}
          onClick={() => setAdminButtons(1)}
        />
        <ButtonClassic
          name={"Все товары"}
          type="button"
          disabled={false}
          onClick={() => setAdminButtons(1)}
        />
      </div>
      <form className={style.adminPage__form}>
        <h3 className={style.adminPage__title}>Добавление позиции товара</h3>
        <p className={style.adminPage__text}>Введите имя товара</p>
        <InputCustom name="Введите имя товара" value="шапка" />
        <p className={style.adminPage__text}>Введите id товара</p>

        <InputCustom name="id" value="ts-001" />
        <p className={style.adminPage__text}>Введите цену товара</p>

        <InputCustom name="price" value="100" />
        <p className={style.adminPage__text}>Введите краткий состав товара</p>

        <InputCustom name="состав" value="шерсть" />
        <p className={style.adminPage__text}>
          На какую сезонность расчитан товар?
        </p>

        <InputCustom name="season" value="зима" />
        <p className={style.adminPage__text}>Какой размер товара?</p>

        <InputCustom name="size" value="56" />
        <p className={style.adminPage__text}>Загрузить картинку товара</p>

        <InputCustom
          name="картинка"
          value="https://img.freepik.com/premium-photo/photo-wool-knitted-hat-isolated-isolated-background_1025753-83281.jpg?w=826"
        />
        <select className={style.adminPage__formCategory}>
          <option value="шарфы и шапки">шарфы и шапки</option>
          <option value="шарфы и шапки">шарфы и шапки</option>
          <option selected value="шарфы и шапки">
            шарфы и шапки
          </option>
          <option value="шарфы и шапки">шарфы и шапки</option>
        </select>
        <select className={style.adminPage__formType}>
          <option value="шапка">шапки</option>
          <option value="шарф">шарфы</option>
        </select>
        <textarea
          value={"description"}
          placeholder="Комфортная и очень легкая"
        />

        <textarea value={"mainDescription"} placeholder="будет тут скоро" />
        <textarea
          value={"other"}
          placeholder="хранить в темном,недоступном для детей месте"
        />
        <ButtonClassic
          name="создать"
          type="submit"
          disabled={false}
          onClick={() => null}
        />
      </form>
    </div>
  );
};
