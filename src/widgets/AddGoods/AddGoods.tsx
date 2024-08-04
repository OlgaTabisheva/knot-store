import React, { useEffect, useState } from "react";
import uploadImg from "../../assets/photo_6ld3n9jwn952.svg";
import style from "./AddGoods.module.scss";
import InputCustom from "../../entities/InputCustom/InputCustom";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { FileUploader } from "react-drag-drop-files";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";

interface AddGoodInterface {
  goodName: string;
  goodId: string;
  goodPrice: string;
  goodCompound: string;
  goodSeason: string;
  goodDescription: string;
  goodImage: string;
  goodMainDescription: string;
  goodOther: string;
  goodSize: string;
  goodType: string;
  goodCategoryName: string;
  goodcategory: string;
}
const fileTypes = ["JPG", "PNG", "GIF"];

export const AddGoods: React.FC = () => {
  const dataCategory = useSelector((state:any)=>state.category.categoryArray);

  const storage = getStorage();

  const [file, setFile] = useState<string>("");

  const [formIsValidName, setFormIsValidName] = useState<boolean>(false);
  const [formIsValidId, setFormIsValidId] = useState<boolean>(false);
  const [formIsValidPrice, setFormIsValidPrice] = useState<boolean>(false);
  const [formIsValidCompound, setFormIsValidCompound] =
    useState<boolean>(false);
  const [formIsValidSeason, setFormIsValidSeason] = useState<boolean>(false);
  const [formIsValidSize, setFormIsValidSize] = useState<boolean>(false);

  const [goodName, setGoodName] = useState<string>("");
  const [goodId, setGoodId] = useState<string>("");
  const [goodPrice, setGoodPrice] = useState<string>("");
  const [goodCompound, setGoodCompound] = useState<string>("");
  const [goodSeason, setGoodSeason] = useState<string>("");
  const [goodSize, setGoodSize] = useState<string>("");
  const [goodImage, setGoodImage] = useState<string>("");
  const [goodCategoryName, setGoodCategoryName] = useState<string>("");
  

  const handleChange = (file: any) => {
    const storageRef = ref(storage, file?.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      setFile(snapshot?.metadata?.name);
    });
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
  const categ = dataCategory.filter((data:any) => {data.value.CategoryName == goodCategoryName})?.value?.types
useEffect(()=>{
  
console.log(categ,'categ')
},[ goodCategoryName])


  useEffect(() => {
    appOb(file);
  }, [file]);

  async function addGoodOnSubmit() {
    console.log("добавляем");
    //  const newCityRef = doc(collection(db, "Goods"));

    // later...
    //  await setDoc(newCityRef, dataAddGood);
  }

  const onNameGoodChanged = (setData: any, e: any, setFormIsValid: any) => {
    setData(e.target.value);

    setFormIsValid(e.target.value.trim().length > 3);
  };
  const selectHandler = (e) => {
    setGoodCategoryName(e.target.value)
  }

  return (
    <div className={style.addGoods}>
      <form className={style.addGoods__form} onSubmit={addGoodOnSubmit}>
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
          defaultValue="Введите имя товара"
        />
        <InputCustom
          name="id"
          type="name"
          id="id"
          error={formIsValidId}
          value={goodId}
          onChange={(e: any) =>
            onNameGoodChanged(setGoodId, e, setFormIsValidId)
          }
          title={"Введите id товара:"}
          textSpan="Слишком короткое id"
          defaultValue="ts-001"
        />

        <InputCustom
          name="price"
          defaultValue="100"
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
          defaultValue="шерсть"
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
          defaultValue="зима"
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
          defaultValue="56"
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

        <div className={style.addGoods__boxImage}>
          <FileUploader
            maxSize={5}
            name="file"
            handleChange={handleChange}
            types={fileTypes}
          >
            <section className={style.addGoods__fileImage}>
              <img
                className={style.addGoods__image}
                alt="picture"
                src={uploadImg}
                width={"100px"}
              />
              <p className={style.addGoods__text}>
                Перетащите фотографию сюда или нажмите на иконку
              </p>
            </section>
          </FileUploader>
          {goodImage.length > 1 && (
            <div className={style.addGoods__boxImage}>
              <p className={style.addGoods__boxImageText}>
                Изображение успешно загружено:
              </p>
              <img src={goodImage} alt={"Image"} width={"200px"} />
            </div>
          )}
        </div>

        <select className={style.addGoods__select} onChange={selectHandler} value={goodCategoryName}>
        {dataCategory.map((data:any)=>(
          <option key={data?.value?.id} value={data?.value?.CategoryName}>{data?.value?.CategoryName}</option>
        ))}
    
        </select>

        <select className={style.addGoods__select}>
        {dataCategory.map((data:any)=>(
          <option key={data?.value?.id} value={data?.value?.CategoryName}>{data?.value?.CategoryName}</option>
        ))}
        
        </select>

        <textarea
          className={style.addGoods__textarea}
          defaultValue={"description"}
          placeholder="Комфортная и очень легкая"
        />

        <textarea
          className={style.addGoods__textarea}
          defaultValue={"mainDescription"}
          placeholder="будет тут скоро"
        />
        <textarea
          className={style.addGoods__textarea}
          defaultValue={"other"}
          placeholder="хранить в темном,недоступном для детей месте"
        />
        <ButtonClassic
          name="создать"
          type="submit"
          disabled={false}
          onClick={addGoodOnSubmit}
        />
      </form>
    </div>
  );
};
