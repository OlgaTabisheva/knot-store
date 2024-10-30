import React from "react";
import { Link } from "react-router-dom";
import style from "./LinkCustom.module.scss";

export const LinkCustom: React.FC<{ text: string; linkTo: string }> = ({
  text,
  linkTo,
}) => {
  return (
    <Link to={linkTo} className={style.LinkCustom} state={{ from: location }}>
      {text}
    </Link>
  );
};
