import React, { useEffect, useState } from "react";
import style from "./Catalog.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import items from "./../../assets/f4c9aa9d-dc59-41e2-8c2a-c0e0cbe37098.png";
import CatalogCategoryBox from "../../widgets/CatalogCategoryBox/CatalogCategoryBox";
import ProductCard from "../../widgets/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import cat from "../../assets/catEmpty.png";
import { onfetchCart } from "../../store/slice/cartSlice";
import { loadCartFromLocalStorage } from "../../App";





const Catalog: React.FC = () => {
  const dataItems = useSelector((state: any) => state.goods.goodsArray);
  const dataCategory = useSelector(
    (state: any) => state.category.categoryArray
  );
  const [buyItems, setBuyItems] = useState<any>([]);
 

   function addToCart(a: any) {

  


 /*    const dispatch = useDispatch();
    let localFirebaseDataCart = loadCartFromLocalStorage();
    setBuyItems(localFirebaseDataCart);
    let foundItem: any = buyItems?.find((item: any) => item?.id === a?.id);
    if (foundItem === undefined) {
      let newItem: any = {
        id: a?.id,
        count: 1,
        price: a?.price,
        name: a?.name,
        size: a?.size,
        image: a?.image,
          CategoryName: a?.CategoryName,
      };
      setBuyItems(() => [...buyItems, newItem]);
    } else {
      let tmp: any = buyItems?.filter((item: any) => item?.id !== a?.id);
      let couterItem = {
        id: a?.id,
        count: foundItem.count + 1,
        price: a?.price,
        name: a?.name,
        size: a?.size,
        image: a?.image,
        CategoryName: a?.CategoryName,
      };
      tmp = [couterItem, ...tmp];
      tmp.sort(function (a: { id: string }, b: { id: string }) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      setBuyItems(tmp);
    }
  
    console.log(buyItems, "buyItems");
    localStorage.setItem("addToCartBox", JSON.stringify(buyItems));
    dispatch(
      onfetchCart({
        cart: buyItems,
      })
    ); */
  }

  /* 
     useEffect(() => {
    const localFirebaseDataCart = loadCartFromLocalStorage();
    setBuyItems(localFirebaseDataCart)
     if (localFirebaseDataCart ) {
    dispatch(onfetchCart(localFirebaseDataCart));
     }
  }, []);   */
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
        {Array.isArray(dataItems) && dataItems.length !== 0 ? (
          dataItems?.map((itemData: any) => (
            <ProductCard
            key={itemData.id} {...itemData}
              delVisible={false}
              delGood={null}
              buyItems={buyItems}
              setBuyItems={setBuyItems}
          
            />
          ))
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Catalog;
