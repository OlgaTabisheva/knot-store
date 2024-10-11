import { Loader } from "../Loader/Loader";
import style from "./ButtonClassic.module.scss";
import React, { useState } from "react";

interface stylesButton {
  name?: string | any;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick: ((s: any) => void) | any;
  isLoading?: boolean;
}

export const ButtonClassic: React.FC<stylesButton> = ({
  name,
  type,
  disabled,
  onClick,
  isLoading,
}) => {



  const [isInternalLoading, setIsInternalLoading] = useState(false);
  
  if (isLoading || isInternalLoading) {
    return <button className={style.buttonClassic} disabled><Loader/>{name}</button>;
  }

  const handleClick = async () => {
    setIsInternalLoading(true);
    try {
      await onClick();
    } finally {
      setIsInternalLoading(false);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick && handleClick}
      className={style.buttonClassic}
       
    >
    {name}
    </button>
  );
};
