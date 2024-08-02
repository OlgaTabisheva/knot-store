import React, { useState } from "react";
import style from "./AdminPage.module.scss";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import InputCustom from "../../entities/InputCustom/InputCustom";
import { AddGoods } from "../AddGoods/AddGoods";
import { AdminBoxGoods } from "../AdminBoxGoods/AdminBoxGoods";
import { useSelector } from "react-redux";

export const AdminPage: React.FC = ({}) => {
  const [adminButtons, setAdminButtons] = useState<number>(0);

  return (
    <div className={style.adminPage}>
      <div className={style.adminPage__box}>
        <ButtonClassic
          name={"Добавить товар"}
          type="button"
          disabled={false}
          onClick={() => setAdminButtons(1)}
        />
        <ButtonClassic
          name={"Все товары"}
          type="button"
          disabled={false}
          onClick={() => setAdminButtons(0)}
        />
      </div>
    {adminButtons === 1 && <AddGoods/>}
    {adminButtons === 0 && <AdminBoxGoods />}
    </div>
  );
};
