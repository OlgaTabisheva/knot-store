import React from "react";

import style from './CardsBox.module.scss'
import image1 from './../../assets/sweater_5d5mz1wrpjwd.svg'
import image2 from './../../assets/beanie_tnxmbnyjqwd2.svg'
import image3 from './../../assets/gloves_7oc6pbttrrnq.svg'

import image4 from './../../assets/teddy_bear_zzugydszwdad.svg'
import image5 from './../../assets/bag_f0nz64zyn2j9.svg'
import image6 from './../../assets/knit_7yx5ai9uqqoq.svg'
import { Link } from "react-router-dom";

const card: cardInterface[] = [
    {'id': 1, 'url': image1, 'name': 'Одежда','description': 'Свитера, футболки и пр.', link: '/catalog-cloth'},
    {'id': 3, 'url': image2, 'name': 'Шарфы и шапки','description': 'Шапки, шарфы, шали и пр.', link: '/catalog-hats'},
    {'id': 2, 'url': image3, 'name': 'Варежки и перчатки','description': 'Варежки, перчатки, митенки и пр.', link: '/catalog-gloves'},
    {'id': 4, 'url': image4, 'name': 'Игрушки','description': 'Игрушки для детей, взрослых и животных', link: '/catalog-toys'},
    {'id': 5, 'url': image5, 'name': 'Сумки','description': 'Различные сумочки', link: '/catalog-bags'}, 
    {'id': 6, 'url': image6, 'name': 'Прочие вязанные изделия','description': 'Брошки, бантики, салфетки и все что не входит в др. категории', link: '/catalog-other'}, 
]

interface cardInterface {
  id: number;
  url: string;
  name: string;
  description: string;
  link: string;
}
export const CardsBox: React.FC = () => {
    return (
        <div className={style.cards}>
            {card?.map((num:cardInterface)=>(
                <Link to={num?.link} key={num.id}className={style.cards__box}>
                    <div className={style.cards__boxImage}>
                    <img className={style.cards__image} alt='image' src={num?.url}/>
                    </div>
                <div className={style.cards__title}>{num?.name}</div>
                <div className={style.cards__text}>{num?.description}</div>
                </Link>
))}
       
        </div>
    )
}