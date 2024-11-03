import React, { useEffect, useState } from "react";
import style from "./AddNews.module.scss";
import InputCustom from "../../entities/InputCustom/InputCustom";
import { FileUploader } from "react-drag-drop-files";
import uploadImg from "../../assets/photo_6ld3n9jwn952.svg";
import TextAreaCustom from "../../entities/TextAreaCustom/TextAreaCustom";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { toast, ToastContainer } from "react-toastify";
import { UploaderCustom } from "../UploaderCustom/UploaderCustom";

const AddNews: React.FC = () => {
  const storage = getStorage();

  const [newsName, setNewsName] = useState<string>('')
  const [newsDescription, setNewsDescription] = useState<string>('')

  const [fileNews, setFileNews] = useState<string>('')

  const [newsNameValid, setNewsNameValid] = useState<boolean>(false)
  const [newsDescriptionValue, setNewsDescriptionValue] = useState<boolean>(false)

  const onNameGoodChanged = (setData: any, e: any, setFormIsValid: any) => {
    setData(e.target.value);
  
    setFormIsValid(e.target.value.trim().length > 3);
  };

  async function addNewsOnSubmit( ) {

    await addDoc(collection(db, "Articles"), {
      article: newsDescription,
      date:serverTimestamp(),
      name: newsName,
      image: fileNews,
  
    }).then(()=>toast("Товар создан!"))
    .catch(()=>toast('Что-то пошло не так'))
    
  }

  function appOb(file: string) {
    if (file?.length > 1) {
      const starsRef = ref(storage, file);

      getDownloadURL(starsRef)
        .then((url) => {
          setFileNews(url);
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


   const handleChange = (file: any) => {
    const storageRef = ref(storage, file?.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      setFileNews(snapshot?.metadata?.name);
    });
  };


  useEffect(() => {
    appOb(fileNews);
  }, [fileNews]);

  
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
<div>

        </div>

        <UploaderCustom imageReady={fileNews} handleChange={handleChange} />

        
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
            addNewsOnSubmit();
          }}
        />
              <ToastContainer />

    </form>
  );
};

export default AddNews;
