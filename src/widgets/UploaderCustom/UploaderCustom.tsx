import React from "react";
import uploadImg from "../../assets/photo_6ld3n9jwn952.svg";
import style from "./UploaderCustom.module.scss";
import { FileUploader } from "react-drag-drop-files";

export const UploaderCustom: React.FC<{imageReady:string, handleChange: any,}> = ({imageReady,handleChange}) => {
  const fileTypes = ["JPG", "PNG", "GIF"];

  return (
    <div className={style.uploaderCustom__boxImage}>
    <FileUploader
      maxSize={5}
      name="file"
      handleChange={handleChange}
      types={fileTypes}
    >
      <section className={style.uploaderCustom__fileImage}>
        <img
          className={style.uploaderCustom__image}
          alt="picture"
          src={uploadImg}
          width={"100px"}
        />
        <p className={style.uploaderCustom__text}>
          Перетащите фотографию сюда или нажмите на иконку
        </p>
      </section>
    </FileUploader>
    {imageReady.length > 1 && (
      <div className={style.uploaderCustom__boxImage}>
        <p className={style.uploaderCustom__boxImageText}>
          Изображение успешно загружено:
        </p>
        <img src={imageReady} alt={"Image"} width={"200px"} />
      </div>
    )}
  </div>
  )
};
