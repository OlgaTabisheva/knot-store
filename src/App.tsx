import React, { useEffect } from "react";
import { Provider, Provider as ReduxStoreProvider, useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";
import { history, store } from "./store/store.ts";
import MainLayout from "./MainLayout/MainLayout.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import Catalog from "./widgets/Catalog/Catalog.tsx";
import { NotFound } from "./pages/NotFound/NotFound.tsx";
import CatalogByCategory from "./widgets/CatalogByCategory/CatalogByCategory.tsx";
//import {intBannerBox} from "./widgets/BannerBox/BannerBox.tsx"
import cloth from "./assets/cloth.png";
import toys from "./assets/toys.png";
import bags from "./assets/bags.png";
import hat from "./assets/hat.png";
import gloves from "./assets/gloves.png";
import other from "./assets/other.png";
import { ItemPage } from "./pages/ItemPage/ItemPage.tsx";
import { UserPage } from "./pages/UserPage/UserPage.tsx";
import { Auth } from "./pages/Auth/Auth.tsx";
import { fetchGoods } from './store/slice/goodsSlice.tsx';

const App: React.FC = () => {
  /*    const coodssRef = collection(db, "Goods");

    await setDoc(doc(coodssRef), {
      name: "Шарф",
      image:
        "https://cdn.stability.ai/assets/org-kNWb913moeaJnxZIQOJu8XJs/00000000-0000-0000-0000-000000000000/e148557a-3255-4d54-a97e-c84d9dd105af",
      category: "шарфы и шапки",
      compound: "шерсть",
      type: "шапка",
      description: "Комфортная и очень легкая",
      mainDescription: "будет тут скоро",
      other: "хранить в темном,недоступном для детей месте",
      season: "зима",
      size: "56",
    });
    await setDoc(doc(coodssRef), {
      name: "Свитер",
      image:
        "https://cdn.stability.ai/assets/org-kNWb913moeaJnxZIQOJu8XJs/00000000-0000-0000-0000-000000000000/e148557a-3255-4d54-a97e-c84d9dd105af",
      category: "Свитер",
      compound: "шерсть",
      type: "шапка",
      description: "Комфортная и очень легкая",
      mainDescription: "будет тут скоро",
      other: "хранить в темном,недоступном для детей месте",
      season: "зима",
      size: "56",
    });
    await setDoc(doc(coodssRef), {
      name: "Палантин",
      image:
        "https://cdn.stability.ai/assets/org-kNWb913moeaJnxZIQOJu8XJs/00000000-0000-0000-0000-000000000000/e148557a-3255-4d54-a97e-c84d9dd105af",
      category: "шарфы и шапки",
      compound: "шерсть",
      type: "шапка",
      description: "Комфортная и очень легкая",
      mainDescription: "будет тут скоро",
      other: "хранить в темном,недоступном для детей месте",
      season: "зима",
      size: "56",
    });
    await setDoc(doc(coodssRef), {
      name: "Игрушка кошка",
      image:
        "https://cdn.stability.ai/assets/org-kNWb913moeaJnxZIQOJu8XJs/00000000-0000-0000-0000-000000000000/e148557a-3255-4d54-a97e-c84d9dd105af",
      category: "шарфы и шапки",
      compound: "шерсть",
      type: "шапка",
      description: "Комфортная и очень легкая",
      mainDescription: "будет тут скоро",
      other: "хранить в темном,недоступном для детей месте",
      season: "зима",
      size: "56",
    });
    await setDoc(doc(coodssRef), {
      name: "Игрушка лего",
      image:
        "https://cdn.stability.ai/assets/org-kNWb913moeaJnxZIQOJu8XJs/00000000-0000-0000-0000-000000000000/e148557a-3255-4d54-a97e-c84d9dd105af",
      category: "шарфы и шапки",
      compound: "шерсть",
      type: "шапка",
      description: "Комфортная и очень легкая",
      mainDescription: "будет тут скоро",
      other: "хранить в темном,недоступном для детей месте",
      season: "зима",
      size: "56",
    }); */

  const mapTest: object[] = [
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
    { name: 1 },
  ];

  const data = useSelector((state:any)=>state.goods.goodsArray);

  const dispatch = useDispatch();
  console.log(data, 'data')
  useEffect(()=>{
   dispatch<any>(fetchGoods());
    
  },[dispatch,])
/* React.useEffect(() => {
 
  querySnapshot.forEach((doc)=> {
      dispatch(goodsFetched(doc));
    })
     
  }, [querySnapshot]); */


  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog mapTest={mapTest} />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route path="/catalog/item" element={<ItemPage />} />
            <Route path="/еntrance" element={<Auth />} />
            <Route
              path="/catalog-cloth"
              element={
                <CatalogByCategory
                  mapTest={mapTest}
                  nameCategory="Одежда"
                  image={cloth}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  about={
                    "Наша продукция связана с любовью из пряжи высокого качества. Мы стараемся учесть все пожелания наших покупателей, даже самых требовательных."
                  }
                  buttonOTwoName={null}
                  buttonOne={false}
                  buttonOneName={null}
                  buttonTwo={false}
                />
              }
            />
            <Route
              path="/catalog-toys"
              element={
                <CatalogByCategory
                  mapTest={mapTest}
                  nameCategory="Игрушки"
                  image={toys}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  about={
                    "Наша продукция связана с любовью из пряжи высокого качества. Мы стараемся учесть все пожелания наших покупателей, даже самых требовательных."
                  }
                  buttonOTwoName={null}
                  buttonOne={false}
                  buttonOneName={null}
                  buttonTwo={false}
                />
              }
            />
            <Route
              path="/catalog-bags"
              element={
                <CatalogByCategory
                  mapTest={mapTest}
                  nameCategory="Сумки"
                  image={bags}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  about={
                    "Наша продукция связана с любовью из пряжи высокого качества. Мы стараемся учесть все пожелания наших покупателей, даже самых требовательных."
                  }
                  buttonOTwoName={null}
                  buttonOne={false}
                  buttonOneName={null}
                  buttonTwo={false}
                />
              }
            />
            <Route
              path="/catalog-hats"
              element={
                <CatalogByCategory
                  mapTest={mapTest}
                  nameCategory="Шапки и шарфы"
                  image={hat}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  about={
                    "Наша продукция связана с любовью из пряжи высокого качества. Мы стараемся учесть все пожелания наших покупателей, даже самых требовательных."
                  }
                  buttonOTwoName={null}
                  buttonOne={false}
                  buttonOneName={null}
                  buttonTwo={false}
                />
              }
            />
            <Route
              path="/catalog-gloves"
              element={
                <CatalogByCategory
                  mapTest={mapTest}
                  nameCategory="Варежки и перчатки"
                  image={gloves}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  about={
                    "Наша продукция связана с любовью из пряжи высокого качества. Мы стараемся учесть все пожелания наших покупателей, даже самых требовательных."
                  }
                  buttonOTwoName={null}
                  buttonOne={false}
                  buttonOneName={null}
                  buttonTwo={false}
                />
              }
            />
            <Route
              path="/catalog-other"
              element={
                <CatalogByCategory
                  mapTest={mapTest}
                  nameCategory="Прочие вязаные изделия"
                  image={other}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  about={
                    "Наша продукция связана с любовью из пряжи высокого качества. Мы стараемся учесть все пожелания наших покупателей, даже самых требовательных."
                  }
                  buttonOTwoName={null}
                  buttonOne={false}
                  buttonOneName={null}
                  buttonTwo={false}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </ReduxStoreProvider>
  );
};

export default App;

