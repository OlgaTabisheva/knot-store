import React, { useState } from "react";
import style from "./AddNews.module.scss";
import style2 from "../AddGoods/AddGoods.module.scss";
import InputCustom from "../../entities/InputCustom/InputCustom";
import { FileUploader } from "react-drag-drop-files";
import  fileTypes  from "../AddGoods/AddGoods";
import uploadImg from "../../assets/photo_6ld3n9jwn952.svg";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";

const AddNews: React.FC = () => {
  const storage = getStorage();

  const [newsName, setNewsName] = useState<string>('')
  const [newsDate, setNewsDate] = useState<string>('')
  const [newsDescription, setNewsDescription] = useState<string>('')

  const [fileNews, setFileNews] = useState<any>()

  const [newsNameValid, setNewsNameValid] = useState<boolean>(false)
  const [newsDateValid, setNewsDateValid] = useState<boolean>(false)
  const [newsDescriptionValue, setNewsDescriptionValue] = useState<boolean>(false)

  const onNameGoodChanged = (setData: any, e: any, setFormIsValid: any) => {
    setData(e.target.value);
  
    setFormIsValid(e.target.value.trim().length > 3);
  };
   const handleChange = (file: any) => {
    const storageRef = ref(storage, file?.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      setFileNews(snapshot?.metadata?.name);
    });
  };
  
  return (
    <form className={style.addNews}>
      <div className={style.addNews__form}>
        <h3 className={style.addNews__title}>Добавление позиции товара</h3>
        <InputCustom
          name="Введите имя товара"
          value={newsName}
          onChange={(e: any) =>
            onNameGoodChanged(setNewsName, e, setNewsNameValid)
          }
          id="goodName"
          title={"Введите имя товара"}
          type="name"
          error={newsNameValid}
          textSpan="Слишком короткое название"
        />
{/*              <FileUploader
            maxSize={5}
            name="file"
            handleChange={handleChange}
            types={fileTypes}
          >
            <section className={style2.addGoods__fileImage}>
              <img
                className={style2.addGoods__image}
                alt="picture"
                src={uploadImg}
                width={"100px"}
              />
              <p className={style2.addGoods__text}>
                Перетащите фотографию сюда или нажмите на иконку
              </p>
            </section>
          </FileUploader> */}
           <InputCustom
          name="Введите дфту"
          value={newsDate}
          onChange={(e: any) =>
            onNameGoodChanged(setNewsDate, e, setNewsDateValid)
          }
          id="goodName"
          title={"Введите дату"}
          type="name"
          error={newsDateValid}
          textSpan="Слишком короткое название"
        />
 
             <TextAreaCustom
          name="description"
          id="description"
          title={"Введите  описание статьи:"}
          textSpan="Слишком короткий текст "
          error={newsDescriptionValue}
          value={newsDescription}
          onChange={(e: any) =>
            onNameGoodChanged(
              setNewsDescription,
              e,
              setNewsDescriptionValue
            )
          }
        />
      </div>
      <ButtonClassic
          name="создать"
          type="submit"
          disabled={false}
          onClick={(e:any) => {
            e.preventDefault();
           // addGoodOnSubmit();
          }}
        />
    </form>
  );
};

export default AddNews;
