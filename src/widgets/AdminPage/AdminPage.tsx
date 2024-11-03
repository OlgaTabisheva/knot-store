import React, { useState } from "react";
import style from "./AdminPage.module.scss";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import AddGoods from "../AddGoods/AddGoods";
import { AdminBoxGoods } from "../AdminBoxGoods/AdminBoxGoods";
import AddNews from "../AddNews/AddNews";
import { AdminNewsBox } from "../AdminNewsBox/AdminNewsBox";
import AdminOrdersBox from "../AdminOrdersBox/AdminOrdersBox";
import { AdminCommentsUsers } from "../AdminCommentsUsers/AdminCommentsUsers";
import { AdminItemsToOrdersBox } from "../AdminItemsToOrdersBox/AdminItemsToOrdersBox";

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
          onClick={async () => {
            await new Promise(() => setTimeout(setAdminButtons, 1000));
          }}
          name={"Все товары"}
          type="button"
          disabled={false}
          // onClick={() => setAdminButtons(0)}
        />
        <ButtonClassic
          name={"Добавить новость"}
          type="button"
          disabled={false}
          onClick={() => setAdminButtons(3)}
        />

        <ButtonClassic
          name={"Все новости"}
          type="button"
          disabled={false}
          onClick={() => setAdminButtons(2)}
        />
        <ButtonClassic
          name={"Заказы"}
          type="button"
          disabled={false}
          onClick={() => setAdminButtons(4)}
        />
        <ButtonClassic
          name={"Отзывы"}
          type="button"
          disabled={false}
          onClick={() => setAdminButtons(5)}
        />
        <ButtonClassic
          name={"Заказы Пользователей"}
          type="button"
          disabled={false}
          onClick={() => setAdminButtons(6)}
        />
      </div>

      {adminButtons === 1 && <AddGoods />}
      {adminButtons === 0 && <AdminBoxGoods />}
      {adminButtons === 2 && <AdminNewsBox />}
      {adminButtons === 3 && <AddNews />}
      {adminButtons === 4 && <AdminOrdersBox />}
      {adminButtons === 5 && <AdminCommentsUsers />}
      {adminButtons === 6 && <AdminItemsToOrdersBox />}
    </div>
  );
};
