import React, { useEffect, useState } from "react";
import style from "./Catalog.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import items from "./../../assets/f4c9aa9d-dc59-41e2-8c2a-c0e0cbe37098.png";
import CatalogCategoryBox from "../../widgets/CatalogCategoryBox/CatalogCategoryBox";
import ProductCard from "../../widgets/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PopupBasic from "../../widgets/PopupBasic/PopupBasic";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useAppSelector } from "../../store/hooks";

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
  const navigate = useNavigate();

  const userIsLoggedIn = useAppSelector((state) => state.auth)?.isLoggedIn;


const [ londItems, setLongItems] = useState([])
const [unauthorizedPopup, setUnauthorizedPopup] = useState(false);

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
      <a href="#cat" id="cat"/>
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
        } 
       
      </div>
     { dataItems?.length !== londItems?.length && <ButtonClassic name={'Еще'} onClick={()=>handleAddItems()}/>}
      <ToastContainer />


      {/* {unauthorizedPopup === true && <div className={style.catalog__popup}>
        <PopupBasic text={'К сожалению функция доступна только авторизованным пользователям'}
                    title={'Если у вас еще нет аккаунта, пожалуйста, зарегистрируйтесь'}
                    textButtonGo={'Зарегистрироваться'} popupCloseAddRecipe={unauthorizedPopup}
                    setPopupCloseAddRecipe={setUnauthorizedPopup}
                    exitClick={() => navigate(`/auth`)}
                    closeAddRecipe={null}

                    />
        <div className={style.catalog__overlay}></div>

      </div>} */}
    </div>
  );
};

export default Catalog;
