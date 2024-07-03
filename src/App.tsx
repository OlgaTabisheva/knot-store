import React from "react";
import { Provider as ReduxStoreProvider } from "react-redux";
import { Routes, Route, useNavigation } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";

//import './features/Counter/index.module.css'
//import {HomePage} from './pages/HomePage/HomePage'
import { history, store } from "./store/store.tsx";
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
const App: React.FC = () => {
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
            <Route path="/catalog" element={<Catalog mapTest={mapTest} />} />
            <Route path="/catalog/item" element={<ItemPage />} />
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
