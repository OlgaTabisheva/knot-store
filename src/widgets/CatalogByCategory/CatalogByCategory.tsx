import React, { useEffect } from "react";
import style from "./CatalogByCategory.module.scss";
import { BannerBox } from "../BannerBox/BannerBox";
import ProductCard from "../ProductCard/ProductCard";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { onfetchGoodsWithCategories } from "../../store/slice/goodsSlice";
import { useAppSelector } from "../../store/hooks";
import cat from "../../assets/catEmpty.png";
import { categoryArrayTS } from "../../store/slice/categorySlice";
interface intCatalogByCategory {
  image: string;
  name: string;
  date: string | null;
  text: string | null;
  about: string | null;
  buttonOne: boolean;
  buttonTwo: boolean;
  buttonOTwoName: string | null;
  buttonOneName: string | null;
  nameCategory: string;
  category: string;
}

const CatalogByCategory: React.FC<intCatalogByCategory> = ({
  image,
  name,
  text,
  about,
  nameCategory,
  category,
}) => {
  const dispatch = useDispatch();
  const useCatalogByCategory = useAppSelector(
    (state) => state?.goods?.categoryGood
  );
  const buyItems = useSelector((state: any) => state.cart.cartArray);

  async function categoryF() {
    const q = query(collection(db, "Goods"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({  id: doc.id,value: doc.data() });
    });
    let categoryArray: categoryArrayTS[] = [];
    data.map(
      (i: {
        id: string;
        value: {
          CategoryName: string;
          category: string;
          date: string;
          image: string;
          linkCategory: string;
          type: string[];
          price: number;
          size: number;
          name: string;
        };
      }) => {
        let el: categoryArrayTS = {
          id: "",
          CategoryName: "",
          name:'',
          category: "",
          image: "",
          linkCategory: "",
          type: [],
          size: 0,
          price: 0
        };
        el.id = i?.id;
        el.CategoryName = i?.value?.CategoryName;
        el.category = i.value.category;
        el.name = i.value.name;
        el.image = i.value.image;
        el.linkCategory = i?.value?.linkCategory;
        el.type = i.value.type;
        el.size = i.value.size;
        el.price = i.value.price;

        categoryArray.push(el);
      }
    );
    dispatch(
      onfetchGoodsWithCategories({
        category: categoryArray,
      })
    );
  }

  useEffect(() => {
    categoryF();
  }, [category]);

  return (
    <div className={style.catalogByCategory}>
      <h2 className={style.catalogByCategory__title}>{nameCategory}</h2>
      <BannerBox
        image={image}
        name={name}
        date={null}
        text={text}
        about={about}
        buttonOne={false}
        buttonTwo={false}
        buttonOTwoName={null}
        buttonOneName={null}
      />
      <h2 className={style.catalogByCategory__title}>
        Наш каталог для этой категории:
      </h2>
      <div className={style.catalogByCategory__items}>
        {Array.isArray(useCatalogByCategory) &&
        useCatalogByCategory.length !== 0 ? (
          useCatalogByCategory?.map((res: any) => (
            <ProductCard key={res.id} {...res}  delVisible={false}
            delGood={null}
            buyItems={buyItems}/>
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

export default CatalogByCategory;
