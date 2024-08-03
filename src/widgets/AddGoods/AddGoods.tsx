import React, { useEffect, useState } from "react";
import uploadImg from "../../assets/photo_6ld3n9jwn952.svg";
import style from "./AddGoods.module.scss";
import InputCustom from "../../entities/InputCustom/InputCustom";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { FileUploader } from "react-drag-drop-files";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const [dataAddGood, setDataAddGood] = useState<AddGoodInterface>({
    goodName: "Введите имя товара",
    goodId: "ts-009",
    goodPrice: "100",
    goodCompound: "шерсть",
    goodSeason: "зима",
    goodDescription: "",
    goodImage: "",
    goodMainDescription: "",
    goodOther: "",
    goodSize: "",
    goodType: "",
    goodCategoryName: "",
    goodcategory: "",
  });
  const [file, setFile] = useState(null);
  const handleChange = (file:any) => {
    setFile(file);
    const storage = getStorage();
    const storageRef = ref(storage, 'some-child');
    
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    });

    //const pathReference = ref(storage, 'images/stars.jpg');

  };

  useEffect(() => {
    //console.log(file, "file");
  }, [file]);
  async function addGoodOnSubmit() {
    console.log("добавляем");
    //  const newCityRef = doc(collection(db, "Goods"));

    // later...
    //  await setDoc(newCityRef, dataAddGood);
  }

  const onNameGoodChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataAddGood({
      goodName: e.target.value,
      goodId: dataAddGood.goodId,
      goodPrice: dataAddGood.goodPrice,
      goodCompound: dataAddGood.goodCompound,
      goodSeason: dataAddGood.goodSeason,
      goodDescription: dataAddGood.goodDescription,
      goodImage: dataAddGood.goodImage,
      goodMainDescription: dataAddGood.goodMainDescription,
      goodOther: dataAddGood.goodOther,
      goodSize: dataAddGood.goodSize,
      goodType: dataAddGood.goodType,
      goodCategoryName: dataAddGood.goodCategoryName,
      goodcategory: dataAddGood.goodcategory,
    });

    setFormIsValid(e.target.value.trim().length > 3);
    console.log(formIsValid);
  };
  //onSubmit={addGoodOnSubmit}
  return (
    <div className={style.addGoods}>
      <form className={style.addGoods__form} onSubmit={addGoodOnSubmit}>
        <h3 className={style.addGoods__title}>Добавление позиции товара</h3>
        <p className={style.addGoods__text}>Введите имя товара</p>
        <InputCustom
          name="Введите имя товара"
          value={dataAddGood?.goodName}
          onChange={onNameGoodChanged}
          id="goodName"
          name="goodName"
          text={"Введите почту"}
          title={"Email:"}
          type="goodName"
        />
        <p className={style.addGoods__text}>Введите id товара</p>

        <InputCustom name="id" defaultValue="ts-001" />
        <p className={style.addGoods__text}>Введите цену товара</p>

        <InputCustom name="price" defaultValue="100" />
        <p className={style.addGoods__text}>Введите краткий состав товара</p>

        <InputCustom name="состав" defaultValue="шерсть" />
        <p className={style.addGoods__text}>
          На какую сезонность расчитан товар?
        </p>

        <InputCustom name="season" defaultValue="зима" />
        <p className={style.addGoods__text}>Какой размер товара?</p>

        <InputCustom name="size" defaultValue="56" />
        <p className={style.addGoods__text}>Загрузить картинку товара</p>

      {/*   <InputCustom
          name="картинка"
          defaultValue="https://img.freepik.com/premium-photo/photo-wool-knitted-hat-isolated-isolated-background_1025753-83281.jpg?w=826"
        /> */}
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

        <select className={style.addGoods__select}>
          <option defaultValue="шарфы и шапки">шарфы и шапки</option>
          <option defaultValue="шарфы и шапки">шарфы и шапки</option>
          <option defaultValue="шарфы и шапки">шарфы и шапки</option>
          <option defaultValue="шарфы и шапки">шарфы и шапки</option>
        </select>
        <select className={style.addGoods__select}>
          <option defaultValue="шапка">шапки</option>
          <option defaultValue="шарф">шарфы</option>
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
