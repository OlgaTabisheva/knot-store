import React, { useEffect, useState } from "react";

import style from "./AddGoods.module.scss";
import InputCustom from "../../entities/InputCustom/InputCustom";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import db from "../../firebase-config/firebase";

interface AddGoodInterface {
  goodName: string;
  goodId: string;
  goodPrice: string;
  goodCompound: string;
  goodSeason: string;
  goodDescription: string;
  goodImage: string;
  goodMainDescription: string;
  goodOther: string;
  goodSize: string;
  goodType: string;
  goodCategoryName: string;
  goodcategory: string;
}

export const AddGoods: React.FC = () => {
    
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const [dataAddGood, setDataAddGood] = useState<AddGoodInterface>({
    goodName: "Введите имя товара",
    goodId: "ts-009",
    goodPrice: "100",
    goodCompound: "шерсть",
    goodSeason: "зима",
    goodDescription: "",
    goodImage: "",
    goodMainDescription: "",
    goodOther: "",
    goodSize: "",
    goodType: "",
    goodCategoryName: "",
    goodcategory: "",
  });
  async function addGoods() {
    console.log('добавляем')
  //  const newCityRef = doc(collection(db, "Goods"));

    // later...
  //  await setDoc(newCityRef, dataAddGood);
  }

  const addGoodOnSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
 
    setDataAddGood(
        {
            goodName:  e.target.value,
            goodId: dataAddGood.goodId,
            goodPrice: dataAddGood.goodPrice,
            goodCompound: dataAddGood.goodCompound,
            goodSeason: dataAddGood.goodSeason,
            goodDescription: dataAddGood.goodDescription,
            goodImage: dataAddGood.goodImage,
            goodMainDescription: dataAddGood.goodMainDescription,
            goodOther: dataAddGood.goodOther,
            goodSize: dataAddGood.goodSize,
            goodType: dataAddGood.goodType,
            goodCategoryName: dataAddGood.goodCategoryName,
            goodcategory: dataAddGood.goodcategory,
        }
        );

    setFormIsValid(e.target.value.trim().length > 3);
    console.log(formIsValid);

  };

  return (
    <div className={style.addGoods}>
      <form className={style.addGoods__form} onSubmit={addGoodOnSubmit}>
        <h3 className={style.addGoods__title}>Добавление позиции товара</h3>
        <p className={style.addGoods__text}>Введите имя товара</p>
        <InputCustom
          name="Введите имя товара"
          value={dataAddGood?.goodName}
          onChange={onNameGoodChanged}
          id="goodName"
          name="goodName"
          text={"Введите почту"}
          title={"Email:"}
          type="goodName"
        />
        <p className={style.addGoods__text}>Введите id товара</p>

        <InputCustom name="id" value="ts-001" />
        <p className={style.addGoods__text}>Введите цену товара</p>

        <InputCustom name="price" value="100" />
        <p className={style.addGoods__text}>Введите краткий состав товара</p>

        <InputCustom name="состав" value="шерсть" />
        <p className={style.addGoods__text}>
          На какую сезонность расчитан товар?
        </p>

        <InputCustom name="season" value="зима" />
        <p className={style.addGoods__text}>Какой размер товара?</p>

        <InputCustom name="size" value="56" />
        <p className={style.addGoods__text}>Загрузить картинку товара</p>

        <InputCustom
          name="картинка"
          value="https://img.freepik.com/premium-photo/photo-wool-knitted-hat-isolated-isolated-background_1025753-83281.jpg?w=826"
        />
        <select className={style.addGoods__select}>
          <option value="шарфы и шапки">шарфы и шапки</option>
          <option value="шарфы и шапки">шарфы и шапки</option>
          <option selected value="шарфы и шапки">
            шарфы и шапки
          </option>
          <option value="шарфы и шапки">шарфы и шапки</option>
        </select>
        <select className={style.addGoods__select}>
          <option value="шапка">шапки</option>
          <option value="шарф">шарфы</option>
        </select>
        <textarea
          className={style.addGoods__textarea}
          value={"description"}
          placeholder="Комфортная и очень легкая"
        />

        <textarea
          className={style.addGoods__textarea}
          value={"mainDescription"}
          placeholder="будет тут скоро"
        />
        <textarea
          className={style.addGoods__textarea}
          value={"other"}
          placeholder="хранить в темном,недоступном для детей месте"
        />
        <ButtonClassic
          name="создать"
          type="submit"
          disabled={false}
          onClick={addGoodOnSubmit}
        />
      </form>
    </div>
  );
};
