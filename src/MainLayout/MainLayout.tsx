import {Outlet} from "react-router-dom";
import style from "./MainLayout.module.scss";
import Header from "../widgets/Header/Header.tsx";
import Footer from "../widgets/Footer/Footer.tsx";

function MainLayout() {

  return (
    <div className={style.layout}>

      <Header/>

      <div className={style.content}>
        <Outlet/>
      </div>
<Footer/>

    </div>
  );
}

export default MainLayout;