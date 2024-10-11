import React, { useState } from "react";
import style from "./ButtonContrast.module.scss";
import { Loader } from "../Loader/Loader";

interface intButtonContrast {
  nameButton: string | null;
  imageButton: string;
  onClick: any;
  isLoading: boolean;
}

export const ButtonContrast: React.FC<intButtonContrast> = ({
  nameButton,
  imageButton,
  onClick,
  isLoading,
}) => {
  const [isInternalLoading, setIsInternalLoading] = useState(false);

  if (isLoading || isInternalLoading) {
    return (
      <button className={style.buttonContrast} disabled>
        
        <div className={style.buttonContrast__box}>
        <Loader />
          <p className={style.buttonContrast__name}>{nameButton} </p>
        </div>
      </button>
    );
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
    <button className={style.buttonContrast} onClick={onClick && handleClick}>
      <div className={style.buttonContrast__box}>
        <img className={style.buttonContrast__img} src={imageButton} />
        <p className={style.buttonContrast__name}>{nameButton} </p>
      </div>
    </button>
  );
};
