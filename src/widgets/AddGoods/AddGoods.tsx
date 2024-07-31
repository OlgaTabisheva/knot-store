import React, { useEffect, useState } from "react";

import style from "./AddGoods.module.scss";
import InputCustom from "../../entities/InputCustom/InputCustom";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import db from "../../firebase-config/firebase";


interface AddGoodInterface{
    goodName:string,
    goodId: string,
    goodPrice:string,
    goodCompound:string,
    goodSeason: string,
    goodDescription:string,
    goodImage:string,
    goodMainDescription:string,
    goodOther:string,
    goodSize:string,
    goodType:string,
    goodCategoryName:string,
    goodcategory:string,
}

export const AddGoods: React.FC = () => {

const [dataAddGood, setDataAddGood] = useState<AddGoodInterface>({
    goodName: 'Введите имя товара',
    goodId:'ts-009',
    goodPrice:'100',
    goodCompound:'шерсть',
    goodSeason: 'зима',
    goodDescription:'',
    goodImage:'',
    goodMainDescription:'',
    goodOther:'',
    goodSize:'',
    goodType:'',
    goodCategoryName:'',
    goodcategory:'',


})
async function addGoods(){
    const docRef = await addDoc(collection(db, "Category"), {
        name: "Tokyo",
        country: "Japan"
      });
}

  return (
    <div className={style.newsPage}>
         <form className={style.addGoods__form}>
        <h3 className={style.addGoods__title}>Добавление позиции товара</h3>
        <p className={style.addGoods__text}>Введите имя товара</p>
        <InputCustom name="Введите имя товара" value="шапка" />
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
        <select className={style.addGoods__formCategory}>
          <option value="шарфы и шапки">шарфы и шапки</option>
          <option value="шарфы и шапки">шарфы и шапки</option>
          <option selected value="шарфы и шапки">
            шарфы и шапки
          </option>
          <option value="шарфы и шапки">шарфы и шапки</option>
        </select>
        <select className={style.addGoods__formType}>
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
          onClick={() => addGoods()}
        />
      </form>
    </div>
  );
};
