import React, { useEffect, useState } from "react";
import style from "./Catalog.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import items from "./../../assets/f4c9aa9d-dc59-41e2-8c2a-c0e0cbe37098.png";
import CatalogCategoryBox from "../../widgets/CatalogCategoryBox/CatalogCategoryBox";
import ProductCard from "../../widgets/ProductCard/ProductCard";
import { useSelector, useStore } from "react-redux";
import cat from "../../assets/catEmpty.png";
import { ToastContainer } from "react-toastify";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { query } from "firebase/firestore";  
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Catalog: React.FC<{
  addLikeToServer: any;
  favoritesItems: any;
  setFavoritesItems: any;mapFavor:any
}> = ({ addLikeToServer, favoritesItems, setFavoritesItems,mapFavor }) => {
  const dataItems = useSelector((state: any) => state.goods.goodsArray);
  const buyItems = useSelector((state: any) => state.cart.cartArray);
  const dataCategory = useSelector(
    (state: any) => state.category.categoryArray
  );

const [ londItems, setLongItems] = useState([])
function handleAddItems(){
  const n = londItems.length
  const tmpL = n + 6
 const tmp =  dataItems.slice(0, tmpL);
 setLongItems(tmp)
}

useEffect(()=>{
  setLongItems(dataItems.slice(0, 6))
},[dataItems])

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

      <div className={style.catalog__box}>
        {dataCategory?.map((res: any) => (
          <CatalogCategoryBox
            categoryName={res?.value?.CategoryName}
            image={res?.value?.image}
            linkCategory={res?.value?.linkCategory}
            key={res?.id}
          />
        ))}
      </div>
      <h2 className={style.catalog__title}>Продукция</h2>
      <div className={style.catalog__items}>
        {/* Array.isArray(dataItems) && dataItems.length !== 0 ? ( */
          (londItems?.map((itemData: any) => (
            <ProductCard
              setFavoritesItems={setFavoritesItems}
              favoritesItems={favoritesItems}
              addLikeToServer={addLikeToServer}
              key={itemData.id}
              {...itemData}
              delVisible={false}
              delGood={null}
              mapFavor={mapFavor}
              buyItems={buyItems}
            />
          )) || <Skeleton/>)
        } {/* /* : (
          <BannerBox
            image={cat}
            name="К сожалению тут ничего нет  "
            date={null}
            text="Пусто"
            about={null}
            buttonOne={true}
            buttonTwo={false}
            buttonOTwoName={null}
            buttonOneName="Перейти на главную"
          />
        )} */ }
       
      </div>
     { dataItems?.length !== londItems?.length && <ButtonClassic name={'Еще'} onClick={()=>handleAddItems()}/>}
      <ToastContainer />
    </div>
  );
};

export default Catalog;
