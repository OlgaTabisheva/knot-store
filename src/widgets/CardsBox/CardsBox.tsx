import React from "react";

import style from './CardsBox.module.scss'
import image1 from './../../assets/yarn_fs5di8lx59ua.svg'
import image2 from './../../assets/sweater_5d5mz1wrpjwd.svg'
import image3 from './../../assets/bag_mo8legy1tz6c.svg'
import image4 from './../../assets/toy_98ieiffcsqm5.svg'
import image5 from './../../assets/doll_b2r1v7h38084.svg'
import image6 from './../../assets/mittens_hhb2axi88485.svg'

const card: cardInterface[] = [
    {'id': 1, 'url': image1, 'name': 'Готовые изделия','description': 'Тут будет описание категории'},
    {'id': 2, 'url': image2, 'name': 'Вязаная крючком одежда','description': 'Тут будет описание категории'},
    {'id': 3, 'url': image3, 'name': 'Вязаные крючком сумки','description': 'Тут будет описание категории'},
    {'id': 4, 'url': image4, 'name': 'Игрушки для животных','description': 'Тут будет описание категории'},
    {'id': 5, 'url': image5, 'name': 'Игрушки и куклы крючком','description': 'Тут будет описание категории'}, 
    {'id': 6, 'url': image6, 'name': 'Варежки и перчатки','description': 'Тут будет описание категории'}, 
]

interface cardInterface {
  id: number;
  url: string;
  name: string;
  description: string;
}
export const CardsBox: React.FC = () => {
    return (
        <div className={style.cards}>
            {card?.map((num:cardInterface)=>(
                <div className={style.cards__box}>
                    <div className={style.cards__boxImage}>
                    <img className={style.cards__image} alt='image' src={num?.url}/>
                    </div>
                <div className={style.cards__title}>{num?.name}</div>
                <div className={style.cards__text}>{num?.description}</div>
                </div>
))}
       
        </div>
    )
}