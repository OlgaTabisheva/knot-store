import React, { useEffect, useState } from "react";
import {
  Provider as ReduxStoreProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import { Routes, Route, Navigate, Link } from "react-router-dom";
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
import { orderBy, where } from "firebase/firestore";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
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
import { Reviews } from "./pages/Reviews/Reviews.tsx";
import { onfetchFavoritiesGoods } from "./store/slice/favoritiesSlice.tsx";
import { toast } from "react-toastify";
import {
  messagesInt,
  onfetchMessages,
  onfetchMessagesAdmin,
} from "./store/slice/masagesSlice.tsx";
import { ItemsToOrder } from "./pages/ ItemsToOrder/ ItemsToOrder.tsx";
import {
  itemsToOrderInt,
  onfetchItemsToOrderSlice,
} from "./store/slice/itemsToOrderSlice.tsx";

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
  const userUid = useSelector((state: any) => state?.auth).user;

  /*   const dataFav = useSelector(
    (state: any) => state?.favorities?.favoritiesArray
  ); */
  const messages = useSelector(
    (state: any) => state?.messages?.messagesArray?.messagesArray
  );
  const [favoritesItems, setFavoritesItems] = useState<any>([]);
  const [mapFavor, setMapFavor] = useState<any>([]);
  const favorItems = useSelector(
    (state: any) => state?.favorities?.favoritiesGoodsArray?.goodsArray
  );
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
  async function fetchMessages() {
    const querySnapshot = await getDocs(
      query(
        collection(db, "MessagesReview"),
        orderBy("createdAt") && where("publish", "==", true)
      )
    );

    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, value: doc.data() });
    });
    let messagesArray: messagesInt[] = [];
    data.map(
      (i: {
        id: string;
        value: {
          userUld: string;
          text: string;
          publish: boolean;
          createdAt: string;
          userEmail: string;
          userImg: string;
          userName: string;
        };
      }) => {
        let el: messagesInt = {
          id: "",
          userUld: "",
          text: "",
          publish: false,
          createdAt: "",
          userEmail: "",
          userImg: "",
          userName: "",
        };
        el.id = i?.id;
        el.userUld = i?.value?.userUld;
        el.text = i.value.text;
        el.publish = i.value.publish;
        el.createdAt = i.value.createdAt;
        el.userEmail = i.value.userEmail;
        el.userImg = i.value.userImg;
        el.userName = i.value.userName;
        messagesArray.push(el);
      }
    );
    dispatch(
      onfetchMessages({
        messagesArray,
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

  async function addLikeToServer() {
    const querySnapshot = await getDocs(collection(db, "Favorites"));
    const data: any = [];

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push({ id: doc.id, value: doc.data() });
    });
    let cityId: any = data.find(
      (city: any) => city?.value?.UserUId === userUid?.id
    );

    if (cityId?.value?.UserUId === userUid?.id) {
      const washingtonRef = doc(db, "Favorites", `${cityId?.id}`);
      await updateDoc(washingtonRef, {
        itemId: { id: favoritesItems },
      })
        .then(() => addData())

        .then(() => toast("Ваши избранные позиции обновленны"))
        .catch((e) => console.log(e));
    } else {
      await addDoc(collection(db, "Favorites"), {
        itemId: { id: favoritesItems },
        UserUId: userUid.id,
      })
        .then(() => addData())
        .then(() => toast("Ваш первый лайк! Поздравляем!"))
        .catch((e) => console.log(e, "привет"));
    }
  }
  async function addData() {
    const data: any = [];
    const q = query(collection(db, "Goods"));
    const productsDocsSnap = await getDocs(q);
    productsDocsSnap.forEach((doc) => {
      if (favoritesItems?.includes(doc.id)) {
        data.push({ id: doc.id, value: doc.data() });
      }
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
    setMapFavor(goodsArray);

    dispatch(
      onfetchFavoritiesGoods({
        goodsArray,
      })
    );
  }
  async function fetchMessagesAdmin() {
    const querySnapshot = await getDocs(
      query(collection(db, "MessagesReview"), orderBy("createdAt"))
      // orderBy("timestamp", "desc") for ordering in descending order
    );

    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, value: doc.data() });
    });
    let messagesArray: messagesInt[] = [];
    data.map(
      (i: {
        id: string;
        value: {
          userUld: string;
          text: string;
          publish: boolean;
          createdAt: string;
          userEmail: string;
          userName: string;
          userImg: string;
        };
      }) => {
        let el: messagesInt = {
          id: "",
          userUld: "",
          text: "",
          publish: false,
          createdAt: "",
          userEmail: "",
          userName: "",
          userImg: "",
        };
        el.id = i?.id;
        el.userUld = i?.value?.userUld;
        el.text = i.value.text;
        el.publish = i.value.publish;
        el.createdAt = i.value.createdAt;
        el.userEmail = i.value.userEmail;
        el.userImg = i.value.userImg;
        el.userName = i.value.userName;
        messagesArray.push(el);
      }
    );
    dispatch(
      onfetchMessagesAdmin({
        messagesArray,
      })
    );
  }
  async function fetchItemsToOrder() {
    const querySnapshot = await getDocs(query(collection(db, "ItemsToOrder")));
    const data: any = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, value: doc.data() });
    });
    let messagesArray: itemsToOrderInt[] = [];
    data.map(
      (i: {
        id: string;
        value: {
          needsText: string;
          date: string;
          contacts: string;
          image: string;
        };
      }) => {
        let el: itemsToOrderInt = {
          id: "",
          needsText: "",
          date: "",
          contacts: "",
          image: "",
        };
        el.id = i?.id;
        el.needsText = i?.value?.needsText;
        el.date = i.value.date;
        el.contacts = i.value.contacts;
        el.image = i.value.image;

        messagesArray.push(el);
      }
    );
    dispatch(
      onfetchItemsToOrderSlice({
        messagesArray,
      })
    );
  }

  useEffect(() => {
    fetchGoods();
    fetchItemsToOrder();
    fetchCategory();
    fetchNews();
    fetchOrders();
    fetchUser();
    fetchMessages();
    fetchMessagesAdmin();
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

  useEffect(() => {
    if (localStorage.getItem("favoritiesGoods")) {
      let tmp = JSON.parse(localStorage.getItem("favoritiesGoods") || "{}");
      setMapFavor(tmp?.goodsArray);
    } else {
      setMapFavor(favorItems);
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("favorities")) {
      let tmp: any = JSON.parse(localStorage.getItem("favorities") || "{}");
      setFavoritesItems(tmp);
    }
  }, []);

  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/"
              element={
                <HomePage
                  addLikeToServer={addLikeToServer}
                  setFavoritesItems={setFavoritesItems}
                  favoritesItems={favoritesItems}
                />
              }
              handle={{
                crumb: () => <Link to="/">/Домашняя страница</Link>,
              }}
            />
            <Route
              path="/catalog"
              element={
                <Catalog
                  addLikeToServer={addLikeToServer}
                  setFavoritesItems={setFavoritesItems}
                  favoritesItems={favoritesItems}
                  mapFavor={mapFavor}
                />
              }
              handle={{
                crumb: () => <Link to="/catalog">/catalog</Link>,
              }}
            />
            <Route
              path="/news/:id"
              element={<FullNewsPage />}
              handle={{
                crumb: () => <Link to="/news">news</Link>,
              }}
            />
            <Route
              path="/toOrders"
              element={<ItemsToOrder />}
              handle={{
                crumb: () => <Link to="/toOrders">ItemsToOrder</Link>,
              }}
            />
            <Route
              path="/userPage"
              element={
                user.isLoggedIn ? (
                  <UserPage
                    mapFavor={mapFavor}
                    addLikeToServer={addLikeToServer}
                    setFavoritesItems={setFavoritesItems}
                    favoritesItems={favoritesItems}
                  />
                ) : (
                  <Auth />
                )
              }
              handle={{
                crumb: () => <Link to="/userPage">userPage</Link>,
              }}
            />
            <Route
              path="/catalog/:id"
              element={
                <ItemPage
                  setFavoritesItems={setFavoritesItems}
                  favoritesItems={favoritesItems}
                  addLikeToServer={addLikeToServer}
                />
              }
              handle={{
                crumb: () => <Link to="/catalog">/uuucatalog</Link>,
              }}
            />
            <Route
              path="/news"
              element={
                <NewsPage
                  addLikeToServer={addLikeToServer}
                  setFavoritesItems={setFavoritesItems}
                  favoritesItems={favoritesItems}
                />
              }
              handle={{
                crumb: () => <Link to="/news">news</Link>,
              }}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  addLikeToServer={addLikeToServer}
                  setFavoritesItems={setFavoritesItems}
                  favoritesItems={favoritesItems}
                />
              }
              handle={{
                crumb: () => <Link to="/cart">cart</Link>,
              }}
            />
            <Route
              path="/order/:id"
              element={<PageUsersOrders />}
              handle={{
                crumb: () => <Link to="/order">order</Link>,
              }}
            />
            <Route
              path="/order"
              element={<PageUsersOrders />}
              handle={{
                crumb: () => <Link to="/order">order</Link>,
              }}
            />
            <Route
              path="/about"
              element={<AboutUs />}
              handle={{
                crumb: () => <Link to="/about">about</Link>,
              }}
            />
            <Route
              path="/delivery"
              element={<DeliveryPage />}
              handle={{
                crumb: () => <Link to="/delivery">delivery</Link>,
              }}
            />
            <Route
              path="/reviews"
              element={<Reviews messages={messages} />}
              handle={{
                crumb: () => <Link to="/reviews">reviews</Link>,
              }}
            />

            <Route
              path="/еntrance"
              element={user.isLoggedIn ? <Navigate replace to="/" /> : <Auth />}
              handle={{
                crumb: () => <Link to="/еntrance">еntrance</Link>,
              }}
            />
            <Route
              path="/catalog-cloth"
              element={
                <CatalogByCategory
                  setFavoritesItems={setFavoritesItems}
                  favoritesItems={favoritesItems}
                  addLikeToServer={addLikeToServer}
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
              handle={{
                crumb: () => <Link to="/catalog-cloth">catalog-cloth</Link>,
              }}
            />
            <Route
              path="/catalog-toys"
              element={
                <CatalogByCategory
                  setFavoritesItems={setFavoritesItems}
                  addLikeToServer={addLikeToServer}
                  favoritesItems={favoritesItems}
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
              handle={{
                crumb: () => <Link to="/catalog-toys">catalog-toys</Link>,
              }}
            />
            <Route
              path="/catalog-bags"
              element={
                <CatalogByCategory
                  setFavoritesItems={setFavoritesItems}
                  addLikeToServer={addLikeToServer}
                  favoritesItems={favoritesItems}
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
              handle={{
                crumb: () => <Link to="/catalog-bags">catalog-bags</Link>,
              }}
            />
            <Route
              path="/catalog-hats"
              element={
                <CatalogByCategory
                  setFavoritesItems={setFavoritesItems}
                  addLikeToServer={addLikeToServer}
                  favoritesItems={favoritesItems}
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
              handle={{
                crumb: () => <Link to="/catalog-hats">catalog-hats</Link>,
              }}
            />
            <Route
              path="/catalog-gloves"
              element={
                <CatalogByCategory
                  setFavoritesItems={setFavoritesItems}
                  addLikeToServer={addLikeToServer}
                  favoritesItems={favoritesItems}
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
              handle={{
                crumb: () => <Link to="/catalog-gloves">catalog-gloves</Link>,
              }}
            />
            <Route
              path="/catalog-other"
              element={
                <CatalogByCategory
                  setFavoritesItems={setFavoritesItems}
                  addLikeToServer={addLikeToServer}
                  favoritesItems={favoritesItems}
                  nameCategory="Прочee"
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
              handle={{
                crumb: () => <Link to="/catalog-other">catalog-other</Link>,
              }}
            />
            <Route
              path="*"
              element={
                <NotFound
                  addLikeToServer={addLikeToServer}
                  setFavoritesItems={setFavoritesItems}
                  favoritesItems={favoritesItems}
                />
              }
              handle={{
                crumb: () => <Link to="*">Ошибка</Link>,
              }}
            />
          </Route>
        </Routes>
      </HistoryRouter>
    </ReduxStoreProvider>
  );
};

export default App;
