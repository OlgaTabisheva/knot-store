import React, { useEffect, useState } from "react";
import {
  Provider,
  Provider as ReduxStoreProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";
import { history, store } from "./store/store.ts";
import MainLayout from "./MainLayout/MainLayout.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import Catalog from "./pages/Catalog/Catalog.tsx";
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
import { setIsLoggedIn } from "./store/slice/authSlice.tsx";
import { useAppSelector } from "./store/hooks.ts";
import {  collection, getDocs } from "firebase/firestore";
import db from "./firebase-config/firebase.tsx";
import { onfetchGoods } from "./store/slice/goodsSlice.tsx";
import { onfetchCategory } from "./store/slice/categorySlice.tsx";

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("saveAuth");
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth);

  async function fetchGoods() {
    const querySnapshot = await getDocs(collection(db, "Goods"));
    const data: any = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      data.push({ value: doc.data() });
    });
    dispatch(
      onfetchGoods({
        goods: data,
      })
    );
  }
  async function fetchCategory() {
    const querySnapshot = await getDocs(collection(db, "Category"));
    const data: any = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      data.push({ value: doc.data() });
    });
    dispatch(
      onfetchCategory({
        category: data,
      })
    );
  }
  useEffect(() => {
    fetchGoods();
    fetchCategory()
  }, []);



  useEffect(() => {
    const localFirebaseData = loadFromLocalStorage();
    if (localFirebaseData && !user.isLoggedIn) {
      dispatch(setIsLoggedIn(localFirebaseData));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isLoggedIn]);

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

  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/catalog"
              element={<Catalog mapTest={mapTest}  />}
            />
            <Route
              path="/userPage"
              element={user.isLoggedIn ? <UserPage /> : <Auth />}
            />
            <Route path="/catalog/item" element={<ItemPage />} />
            <Route
              path="/еntrance"
              element={user.isLoggedIn ? <Navigate replace to="/" /> : <Auth />}
            />
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
