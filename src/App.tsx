import React, { useEffect } from "react";
import {
  Provider as ReduxStoreProvider,
  useDispatch,
} from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";
import { history, store } from "./store/store.ts";
import MainLayout from "./MainLayout/MainLayout.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import Catalog from "./pages/Catalog/Catalog.tsx";
import { NotFound } from "./pages/NotFound/NotFound.tsx";
import CatalogByCategory from "./widgets/CatalogByCategory/CatalogByCategory.tsx";
import cloth from "./assets/cloth.png";
import toys from "./assets/toys.png";
import bags from "./assets/bags.png";
import hat from "./assets/hat.png";
import gloves from "./assets/gloves.png";
import other from "./assets/other.png";
import { ItemPage } from "./pages/ItemPage/ItemPage.tsx";
import { UserPage } from "./pages/UserPage/UserPage.tsx";
import { Auth } from "./pages/Auth/Auth.tsx";
import { onGetAuth, setIsLoggedIn } from "./store/slice/authSlice.tsx";
import { useAppSelector } from "./store/hooks.ts";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase-config/firebase.tsx";
import { goodInt, onfetchGoods } from "./store/slice/goodsSlice.tsx";
import {
  categoryArrayTS,
  onfetchCategory,
} from "./store/slice/categorySlice.tsx";
import { NewsPage } from "./pages/NewsPage/NewsPage.tsx";
import { FullNewsPage } from "./pages/FullNewsPage/FullNewsPage.tsx";
import { NewsInt, onfetchNews } from "./store/slice/newsSlice.tsx";
import { onfetchCart } from "./store/slice/cartSlice.tsx";
import { PageUsersOrders } from "./pages/PageUsersOrders/PageUsersOrders.tsx";
import { Cart } from "./pages/Cart/Cart.tsx";
import { AboutUs } from "./pages/AboutUs/AboutUs.tsx";
import { DeliveryPage } from "./pages/DeliveryPage/DeliveryPage.tsx";

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

export const loadCartFromLocalStorage = () => {
  try {
    const cartItems: any = localStorage.getItem("addToCartBox");
    // if (cartItems === null) return undefined;
    return JSON.parse(cartItems);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export interface orderInt {
  id: string;
  nameItem: string;
  note: string;
  status: string;
  sum: number;
  telephone: number;
  userName: string;
  goods: any;
  email: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch();

  const user = useAppSelector((state) => state.auth);

  async function fetchGoods() {
    const querySnapshot = await getDocs(collection(db, "Goods"));
    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, value: doc.data() });
    });
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
      onfetchGoods({
        goods: goodsArray,
      })
    );
  }

  async function fetchNews() {
    const querySnapshot = await getDocs(collection(db, "Articles"));

    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, value: doc.data() });
    });

    let newsArray: NewsInt[] = [];
    data.map(
      (i: {
        id: any;
        value: { article: string; name: string; date: string; image: string };
      }) => {
        //newsArray[i] = data[i]
        let el: NewsInt = { id: "", article: "", name: "", image: "" };
        el.id = i?.id;
        el.article = i?.value?.article;
        /*     const fd:any =i.value.date;
      fd.toDate();
       el.date =  new Date(
        fd.seconds * 1000 + fd.nanoseconds / 1000000,
      );  */
        el.name = i.value.name;
        el.image = i.value.image;
        newsArray.push(el);
      }
    );
    dispatch(
      onfetchNews({
        news: newsArray,
      })
    );
  }
  async function fetchCategory() {
    const querySnapshot = await getDocs(collection(db, "Category"));
    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, value: doc.data() });
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
        };
      }) => {
        let el: categoryArrayTS = {
          id: "",
          CategoryName: "",
          category: "",
          image: "",
          linkCategory: "",
          type: [],
          size: 0,
          price: 0,
          name: "",
        };
        el.id = i?.id;
        el.CategoryName = i?.value?.CategoryName;
        el.category = i.value.category;
        el.image = i.value.image;
        el.linkCategory = i?.value?.linkCategory;
        el.type = i.value.type;
        el.size = i.value.size;
        el.price = i.value.price;

        categoryArray.push(el);
      }
    );
    dispatch(
      onfetchCategory({
        category: data,
      })
    );
  }

  async function fetchOrders() {
    const querySnapshot = await getDocs(collection(db, "Orders"));
    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, value: doc.data() });
    });

    let orderArray: orderInt[] = [];
    data.map(
      (i: {
        id: any;
        value: {
          nameItem: string;
          note: string;
          status: string;
          sum: number;
          telephone: number;
          userName: string;
          goods: any;
          email: string;
        };
      }) => {
        let el: orderInt = {
          id: "",
          nameItem: "",
          note: "",
          status: "",
          sum: 0,
          telephone: 0,
          userName: "",
          goods: [],
          email: "",
        };
        el.id = i?.id;
        el.nameItem = i.value.nameItem;
        el.note = i.value.note;
        el.status = i?.value?.status;
        el.sum = i.value.sum;
        el.telephone = i.value.telephone;
        el.userName = i.value.userName;
        el.goods = i.value.goods;
        el.goods = i.value.email;

        orderArray.push(el);
      }
    );
  }

  function fetchUser() {
    const localDatat = JSON.parse(localStorage.getItem("saveAuth") || "{}");
    dispatch(
      onGetAuth({
        ...localDatat,
      })
    );
  }
  useEffect(() => {
    fetchGoods();
    fetchCategory();
    fetchNews();
    fetchOrders();
    fetchUser();
  }, []);

  useEffect(() => {
    const localFirebaseData = loadFromLocalStorage();
    if (localFirebaseData && !user.isLoggedIn) {
      dispatch(setIsLoggedIn(localFirebaseData));
    }
  }, [user.isLoggedIn]);

  useEffect(() => {
    const localFirebaseDataCart = loadCartFromLocalStorage();
    if (localFirebaseDataCart) {
      dispatch(
        onfetchCart({
          cart: localFirebaseDataCart,
        })
      );
    }
  }, []);

  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/news/:id" element={<FullNewsPage />} />
            <Route
              path="/userPage"
              element={user.isLoggedIn ? <UserPage /> : <Auth />}
            />
            <Route path="/catalog/:id" element={<ItemPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order/:id" element={<PageUsersOrders />} />
            <Route path="/order" element={<PageUsersOrders />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route
              path="/еntrance"
              element={user.isLoggedIn ? <Navigate replace to="/" /> : <Auth />}
            />
            <Route
              path="/catalog-cloth"
              element={
                <CatalogByCategory
                  nameCategory="Одежда"
                  image={cloth}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  category="cloth"
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
                  nameCategory="Игрушки"
                  image={toys}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  category="toys"
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
                  nameCategory="Сумки"
                  image={bags}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  category="bags"
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
                  nameCategory="Шапки и шарфы"
                  category="hats"
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
                  nameCategory="Варежки и перчатки"
                  image={gloves}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  category="gloves"
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
                  nameCategory="Прочие вязаные изделия"
                  image={other}
                  name={"KNOT STORE"}
                  date={"—  since 2024  —"}
                  text={"С заботой о Вас!"}
                  category="other"
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
