import React, { useEffect, useState } from "react";
import style from "./AdminCommentsUsers.module.scss";
import { Reviews } from "../../pages/Reviews/Reviews";
import { useSelector } from "react-redux";


export const AdminCommentsUsers: React.FC = () => {

  const messages = useSelector(
    (state: any) => state?.messages?.messagesArrayAdmin?.messagesArray
     );

  return (
    <div className={style.adminCommentsUsers}>
        <Reviews messages={messages}/>
    </div>
  );
};

