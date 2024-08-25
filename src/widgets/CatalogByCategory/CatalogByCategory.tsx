import React, { useEffect,  } from "react";
import style from "./CatalogByCategory.module.scss";
import { BannerBox } from "../BannerBox/BannerBox";
import ProductCard from "../ProductCard/ProductCard";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { useDispatch } from "react-redux";
import { onfetchGoodsWithCategories } from "../../store/slice/goodsSlice";
import { useAppSelector } from "../../store/hooks";
import cat from '../../assets/catEmpty.png'
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
  category
}) => {

  const dispatch = useDispatch();
  const useCatalogByCategory = useAppSelector((state) => state?.goods?.categoryGood);

async function categoryF () {

  const q = query(collection(db, "Goods"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const data: any = [];
  querySnapshot.forEach((doc) => {
    data.push({ value: doc.data() });

    // doc.data() is never undefined for query doc snapshots
  });
  dispatch(
    onfetchGoodsWithCategories({
      category: data,
    })
  ); 
}

useEffect(()=>{
  console.log(useCatalogByCategory,'useCatalogByCategory')
  categoryF()
},[category])

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
      <h2 className={style.catalogByCategory__title}>Наш каталог для этой категории:</h2>
      <div className={style.catalogByCategory__items}>
      {(Array.isArray(useCatalogByCategory) && useCatalogByCategory.length !== 0)  ? useCatalogByCategory?.map((res:any) => (
          <ProductCard item={res.value} delVisible={false} key={res?.id} delGood={null} addToCart={null}/>
        )) : <BannerBox image={cat} name="К сожалению тут ничего нет  " date={null} text='Пусто' about={null} buttonOne={true} buttonTwo ={false} buttonOTwoName={null} buttonOneName='Перейти на главную'/>}
      </div>
    </div>
  );
};

export default CatalogByCategory;
