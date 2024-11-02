import React, { useEffect, useState } from "react";
import uploadImg from "../../assets/photo_6ld3n9jwn952.svg";
import style from "./AddGoods.module.scss";
import InputCustom from "../../entities/InputCustom/InputCustom";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { FileUploader } from "react-drag-drop-files";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UploaderCustom } from "../UploaderCustom/UploaderCustom";

const fileTypes = ["JPG", "PNG", "GIF"];

/* interface AddGoodInt {
  goodCategoryName: string;
  goodCategory: string;
  goodCompound: string;
  goodDescription: string;
  goodId: string;
  goodImage: string;
  goodMainDescription: string;
  goodName: string;
  goodOther: string;
  goodPrice: string;
  goodSize: string;
  goodSum: string;
} */

const AddGoods: React.FC = () => {
  const dataCategory = useSelector(
    (state: any) => state.category.categoryArray
  );

  const [file, setFile] = useState<string>("");

  const [formIsValidName, setFormIsValidName] = useState<boolean>(false);
  const [formIsValidPrice, setFormIsValidPrice] = useState<boolean>(false);
  const [formIsValidCompound, setFormIsValidCompound] =
    useState<boolean>(false);
  const [formIsValidSeason, setFormIsValidSeason] = useState<boolean>(false);
  const [formIsValidSize, setFormIsValidSize] = useState<boolean>(false);
  const [formIsValidGoodDescription, setFormIsValidGoodDescription] =
    useState<boolean>(false);
  const [formIsValidMainDescription, setFormIsValidMainDescription] =
    useState<boolean>(false);
  const [formIsValidGoodOther, setFormIsValidGoodOther] =
    useState<boolean>(false);

  const [goodName, setGoodName] = useState<string>("");
  const [goodPrice, setGoodPrice] = useState<string>("");
  const [goodCompound, setGoodCompound] = useState<string>("");
  const [goodSeason, setGoodSeason] = useState<string>("");
  const [goodSize, setGoodSize] = useState<string>("");
  const [goodImage, setGoodImage] = useState<string>("");
  const [goodCategoryName, setGoodCategoryName] = useState<string>("");
  const [goodCategory, setGoodCategory] = useState<string>("");
  const [goodDescription, setGoodDescription] = useState<string>("");
  const [goodMainDescription, setGoodMainDescription] = useState<string>("");
  const [goodOther, setGoodOther] = useState<string>("");
  const [categoryType, setGoodCategoryType] = useState<string>("");

  const [categoryChoice, setCategoryChoice] = useState<string[]>([
    "выберите категорию выше чтобы обновить этот список",
  ]);

  const onNameGoodChanged = (setData: any, e: any, setFormIsValid: any) => {
    setData(e.target.value);

    setFormIsValid(e.target.value.trim().length > 3);
  };
  const storage = getStorage();
  const handleChange = (file: any) => {
    const storageRef = ref(storage, file?.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      setFile(snapshot?.metadata?.name);
    });
  };
  const selectHandler = (e: any) => {
    setGoodCategoryName(e.target.value);
  };

  const selectHandlerChoice = (e: any) => {
    setGoodCategory(e.target.value);
  };

  function appOb(file: string) {
    if (file?.length > 1) {
      const starsRef = ref(storage, file);

      getDownloadURL(starsRef)
        .then((url) => {
          setGoodImage(url);
        })
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              break;
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        });
    }
  }

  async function addGoodOnSubmit() {
    /// const newCityRef = doc(collection(db, "Goods"));

    // later...
    await addDoc(collection(db, "Goods"), {
      CategoryName: goodCategoryName,
      category: categoryType,
      compound: goodCompound,
      description: goodDescription,
      image: goodImage,
      mainDescription: goodMainDescription,
      name: goodName,
      other: goodOther,
      price: goodPrice,
      season: "любой",
      goodSum: 1,
      size: goodSize,
      type: goodCategory,
    })
      .then(() => toast("Товар создан!"))
      .catch(() => toast("Что-то пошло не так"));
  }

  useEffect(() => {
    if (goodCategoryName.length > 1) {
      // const categ = dataCategory.find((data:any) => (data.value.CategoryName == goodCategoryName))?.value?.types
      setCategoryChoice(
        dataCategory.find(
          (data: any) => data?.value?.CategoryName == goodCategoryName
        )?.value?.type
      );
      setGoodCategoryType(
        dataCategory.find(
          (data: any) => data?.value?.CategoryName == goodCategoryName
        )?.value?.category
      );
    }
  }, [goodCategoryName, selectHandler]);

  useEffect(() => {
    appOb(file);
  }, [file]);

  return (
    <form className={style.addGoods}>
      <div className={style.addGoods__form}>
        <h3 className={style.addGoods__title}>Добавление позиции товара</h3>
        <InputCustom
          name="Введите имя товара"
          value={goodName}
          onChange={(e: any) =>
            onNameGoodChanged(setGoodName, e, setFormIsValidName)
          }
          id="goodName"
          title={"Введите имя товара"}
          type="name"
          error={formIsValidName}
          textSpan="Слишком короткое название"
        />

        <InputCustom
          name="price"
          type="name"
          id="price"
          title={"Введите цену товара:"}
          textSpan="Слишком короткая цена"
          error={formIsValidPrice}
          value={goodPrice}
          onChange={(e: any) =>
            onNameGoodChanged(setGoodPrice, e, setFormIsValidPrice)
          }
        />

        <InputCustom
          name="состав"
          type="name"
          id="Compound"
          title={"Введите краткий состав товара:"}
          textSpan="Слишком короткий текст "
          error={formIsValidCompound}
          value={goodCompound}
          onChange={(e: any) =>
            onNameGoodChanged(setGoodCompound, e, setFormIsValidCompound)
          }
        />

        <InputCustom
          name="season"
          type="name"
          id="season"
          title={" На какую сезонность расчитан товар:"}
          textSpan="Слишком короткий текст "
          error={formIsValidSeason}
          value={goodSeason}
          onChange={(e: any) =>
            onNameGoodChanged(setGoodSeason, e, setFormIsValidSeason)
          }
        />

        <InputCustom
          name="size"
          type="name"
          id="Size"
          title={"Введите размер товара:"}
          textSpan="Слишком короткий текст "
          error={formIsValidSize}
          value={goodSize}
          onChange={(e: any) =>
            onNameGoodChanged(setGoodSize, e, setFormIsValidSize)
          }
        />

        <p className={style.addGoods__text}>Загрузить картинку товара</p>


<UploaderCustom imageReady={goodImage} handleChange={handleChange} fileTypes={fileTypes}/>
        <select
          className={style.addGoods__select}
          onChange={selectHandler}
          value={goodCategoryName}
        >
          {dataCategory?.map((data: any) => (
            <option
              key={data?.value?.linkCategory}
              value={data?.value?.CategoryName}
            >
              {data?.value?.CategoryName}
            </option>
          ))}
        </select>
        <select
          className={style.addGoods__select}
          value={goodCategory}
          onChange={selectHandlerChoice}
        >
          {categoryChoice.map((data: any) => (
            <option key={data?.length} value={data}>
              {data}
            </option>
          ))}
        </select>
        <TextAreaCustom
          name="description"
          id="description"
          title={"Введите короткое описание товара:"}
          textSpan="Слишком короткий текст "
          error={formIsValidGoodDescription}
          value={goodDescription}
          onChange={(e: any) =>
            onNameGoodChanged(
              setGoodDescription,
              e,
              setFormIsValidGoodDescription
            )
          }
        />
        <TextAreaCustom
          name="mainDescription"
          id="mainDescription"
          title={"Введите подробное описание товара:"}
          textSpan="Слишком короткий текст "
          error={formIsValidMainDescription}
          value={goodMainDescription}
          onChange={(e: any) =>
            onNameGoodChanged(
              setGoodMainDescription,
              e,
              setFormIsValidMainDescription
            )
          }
        />
        <TextAreaCustom
          name="other"
          id="other"
          title={
            "Введите дополнительные сведения, например хранение или доступность для детей:"
          }
          textSpan="Слишком короткий текст "
          error={formIsValidGoodOther}
          value={goodOther}
          onChange={(e: any) =>
            onNameGoodChanged(setGoodOther, e, setFormIsValidGoodOther)
          }
        />
        <ButtonClassic
          name="создать"
          type="submit"
          disabled={false}
          onClick={(e: any) => {
            e.preventDefault();
            addGoodOnSubmit();
          }}
        />
      </div>
      <ToastContainer />
    </form>
  );
};
export default AddGoods;
