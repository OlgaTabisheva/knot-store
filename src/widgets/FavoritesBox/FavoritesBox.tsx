import React, { useEffect, useState } from "react";
import style from "./FavoritesBox.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { goodInt } from "../../store/slice/goodsSlice";
import { onfetchFavoritiesGoods } from "../../store/slice/favoritiesSlice";
import ProductCard from "../ProductCard/ProductCard";
import { BannerBox } from "../BannerBox/BannerBox";
import cat from "../../assets/catEmpty.png";

export const FavoritesBox: React.FC = () => {
  const dispatch = useDispatch();

  const [mapFavor, setMapFavor] = useState<any>([]);
  const favorItems = useSelector(
    (state: any) => state?.favorities?.favoritiesGoodsArray?.goodsArray
  );

  const dataFav = useSelector(
    (state: any) => state?.favorities?.favoritiesArray
  );
  const buyItems = useSelector((state: any) => state.cart.cartArray);

  // console.log(mapFavor, "mapFavor");

  async function addData() {
    const data: any = [];

    const q = query(collection(db, "Goods"));
    const productsDocsSnap = await getDocs(q);
    //console.log(q,'q')
    productsDocsSnap.forEach((doc) => {
      if (dataFav?.includes(doc.id)) {
        data.push({ id: doc.id, value: doc.data() });
      }
    });
    console.log(data, "data");
    let goodsArray: goodInt[] = [];
    data.map(
      (i: {
        id: any;
        value: {
          good: string;
          mainDescription: string;
          name: string;
          image: string;
          other: string;
          price: string;
          season: string;
          size: string;
          type: string;
          category: string;
          compound: string;
          description: string;
        };
      }) => {
        let el: goodInt = {
          id: "",
          image: "",
          mainDescription: "",
          name: "",
          other: "",
          price: "",
          season: "",
          size: "",
          type: "",
          category: "",
          compound: "",
          description: "",
          goodSum: "",
        };
        el.id = i?.id;
        el.mainDescription = i.value.mainDescription;
        el.image = i.value.image;
        el.name = i?.value?.name;
        el.other = i.value.other;
        el.price = i.value.price;
        el.season = i.value.season;
        el.size = i.value.size;
        el.type = i.value.type;
        el.category = i.value.category;
        el.compound = i.value.compound;
        el.description = i.value.description;
        goodsArray.push(el);
      }
    );
    dispatch(
      onfetchFavoritiesGoods({
        goodsArray,
      })
    );
  }

  useEffect(() => {
    console.log(mapFavor, "mapFavor");

    addData();
  }, [dataFav]);

  useEffect(() => {
    console.log(favorItems, "favorItems");
  }, [favorItems]);

  return (
    <div className={style.favoritesBox}>
      <h3 className={style.favoritesBox__title}>Ваши избранные товары:</h3>
      <div className={style.favoritesBox__box}>
        {Array.isArray(favorItems) && favorItems.length !== 0 ? (
          favorItems?.map((itemData: any) => (
            <ProductCard
              key={itemData.id}
              {...itemData}
              delVisible={false}
              delGood={null}
              buyItems={buyItems}
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
