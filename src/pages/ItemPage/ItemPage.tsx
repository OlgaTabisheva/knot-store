import React, { useEffect, useState } from "react";

import style from "./ItemPage.module.scss";
import image1 from "./../../assets/sveatercdf.png";
import { ButtonContrast } from "../../entities/ButtonContrast/ButtonContrast";
import bag from "./../../assets/shop_cart_white.svg";
import { Link, useParams } from "react-router-dom";
import right from "./../../assets/right_l6oqeswjksh1.svg";
import { ButtonTab } from "../../entities/ButtonTab/ButtonTab";
import BoxPopularItems from "../../widgets/BoxPopularItems/BoxPopularItems";
import { useSelector } from "react-redux";

export const ItemPage: React.FC = () => {
  const [buttonClick, setButtonClick]: any = useState(0);

  const {id} = useParams();
  const dataItems = useSelector((state: any) => state.goods.goodsArray);
   const fullRecipe = dataItems?.find(elem => elem?.value?.id === id);

  useEffect(()=>{
console.log(fullRecipe,'dataItems')
  },[fullRecipe])
  return (
    <div className={style.itemPage}>
      <div className={style.itemPage__coverBox}>
        <div className={style.itemPage__images}>
          <img className={style.itemPage__image} src={image1} alt="image" />
        </div>
        <div className={style.itemPage__rightBox}>
          <h3 className={style.itemPage__title}>{fullRecipe?.value?.name}</h3>
          <p>Самый мягкий Свитер</p>
          <div className={style.itemPage__boxs}>
            <p>Выбери свой размер:</p>
            <select className={style.itemPage__select}>
              <option className={style.itemPage__option}>42</option>
              <option>48</option>
              <option>58</option>
            </select>
            <div className={style.itemPage__cover}>
              <p className={style.itemPage__about}>О товаре</p>
              <a className={style.itemPage__linkBox}>
                <Link className={style.itemPage__link} to="/">
                  Перейти к описанию{" "}
                </Link>
                <img
                  className={style.itemPage__linkImg}
                  src={right}
                  alt="righr"
                />
              </a>
            </div>
            <div className={style.itemPage__coverLine}>
              <p className={style.itemPage__name}>Сезон</p>
              <p className={style.itemPage__text}>На любой сезон</p>
            </div>
            <div className={style.itemPage__coverLine}>
              <p className={style.itemPage__name}>Состав материала</p>
              <p className={style.itemPage__text}>Хлопок</p>
            </div>
            <div className={style.itemPage__coverLine}>
              <p className={style.itemPage__name}>Тип</p>
              <p className={style.itemPage__text}>Свитер</p>
            </div>
            <div className={style.itemPage__cover}>
              <p className={style.itemPage__price}>Цена 100 уе </p>
              <ButtonContrast
                imageButton={bag}
                nameButton={"Положить в корзину"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.itemPage__bottomBox}>
  
          <div className={style.itemPage__buttons}>
            <ButtonTab
              styleButton={buttonClick === 0 ? true : false}
              name={"Описание"}
              click={() => setButtonClick(0)}
            ></ButtonTab>
            <ButtonTab
              styleButton={buttonClick === 1 ? true : false}
              name={"Состав"}
              click={() => setButtonClick(1)}
            ></ButtonTab>
            <ButtonTab
              styleButton={buttonClick === 2 ? true : false}
              name={"Условия хранения "}
              click={() => setButtonClick(2)}
            ></ButtonTab>
          </div>
          {buttonClick === 0 && <p className={style.itemPage__buttonText}>Текст тут</p>}
          {buttonClick === 1 && <p className={style.itemPage__buttonText}>много текста тут</p>}
          {buttonClick === 2 && <p className={style.itemPage__buttonText}>Прочее и прочее</p>}
      </div>
      <BoxPopularItems/>
    </div>
  );
};
