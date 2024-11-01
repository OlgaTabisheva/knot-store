import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { ButtonImage } from "../../entities/ButtonImage/ButtonImage";
import style from "./PopupBasic.module.scss";
import close from './../../assets/sumpleIcons/delete_e24xrki8c3pc.svg'
import { Navigate } from "react-router-dom";

export const PopupBasic: React.FC<{
  title: string;
  text: string;
  textButtonGo: string;
  setPopupCloseAddRecipe: any;
  popupCloseAddRecipe: any;
  exitClick: any;
  closeAddRecipe: any;
 // setCloseAddRecipe: any;
}> = ({
  title,
  text,
  textButtonGo,
  setPopupCloseAddRecipe,
  popupCloseAddRecipe,
  exitClick,
  closeAddRecipe,
 // setCloseAddRecipe,
}) => {
  return (
    <div className={style.popupBasic}>
      <div className={style.popupBasic__header}>
        <h3 className={style.popupBasic__title}>{title}</h3>
        <ButtonImage img={close}
          onClick={() => setPopupCloseAddRecipe(!popupCloseAddRecipe)}
        />
      </div>
      <p className={style.popupBasic__text}>{text}</p>
      <div className={style.popupBasic__buttons}>
        <div className={style.popupBasic__button}>
          <ButtonClassic
            name={"Отменить"}
            onClick={() => setPopupCloseAddRecipe(!popupCloseAddRecipe)}
          />
        </div>
        <div className={style.popupBasic__button}>
          <ButtonClassic name={textButtonGo} onClick={exitClick} />
        </div>
        {closeAddRecipe === true && <Navigate to="/" replace={true} />}
      </div>
    </div>
  );
};

export default PopupBasic;
