import React from "react";
import style from "./Catalog.module.scss";
import { BannerBox } from "../BannerBox/BannerBox";
import items from "./../../assets/f4c9aa9d-dc59-41e2-8c2a-c0e0cbe37098.png";
import CatalogCategoryBox from "../CatalogCategoryBox/CatalogCategoryBox";
import {intcatalogCategoryBox} from './../CatalogCategoryBox/CatalogCategoryBox'

import cloth from './../../assets/icons/sweater_69xtqsz5gxra.svg'
import toy from './../../assets/icons/teddy_bear_oa11lhymmbh3.svg'
import bag from './../../assets/icons/bag_o3pm1b766ccn.svg'
import hat from './../../assets/icons/beanie_q2suxu1q99dz.svg'
import gloves from './../../assets/icons/gloves_s2lkql71s23w.svg'
import other from './../../assets/icons/knit_v1hjfw6xest4.svg'
import ProductCard from "../ProductCard/ProductCard";

const CatalogCategory : intcatalogCategoryBox[] = [
  {'categoryName': 'Одежда',
    'image': cloth,
  },
  {'categoryName': 'Игрушки',
    'image': toy,
  },
  {'categoryName': 'Сумки',
    'image': bag,
  },
  {'categoryName': 'Шапки и шарфы',
    'image': hat,
  },
  {'categoryName': 'Варежки и перчатки',
    'image': gloves,
  },
  {'categoryName': 'Прочие вязаные изделия',
    'image': other,
  },
]

const mapTest : any[]= [
  {'name': 1},
  {'name': 1},
  {'name': 1},
  {'name': 1},
  {'name': 1},
  {'name': 1},
  {'name': 1},
  {'name': 1},
  {'name': 1},
  {'name': 1},
  {'name': 1},

]
const Catalog: React.FC = () => {
  return (
    <div className={style.catalog}>
      <h2 className={style.catalog__title}>Каталог</h2>
      <BannerBox
        image={items}
        name={"Отличный выбор качественной продукции"}
        date={null}
        text={null}
        about="Наши веши приятно носить. Наши товары не стыдно дарить."
        buttonOTwoName={"Готовые изделия"}
        buttonOne={true}
        buttonOneName={"Изделия на заказ"}
        buttonTwo={true}
      />
        <h2 className={style.catalog__title}>Категории</h2>

      <div  className={style.catalog__box}>
      {CatalogCategory.map((res)=>(
        <CatalogCategoryBox categoryName={res?.categoryName} image={res?.image}/>
        ))}
      </div>
      <h2 className={style.catalog__title}>Продукция</h2>

      <div className={style.catalog__items}>
{mapTest.map(()=>(
  <ProductCard/>
))}
      </div>
    </div>
  );
};

export default Catalog;
