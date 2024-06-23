import React from "react";
import {Link} from "react-router-dom";
import headerLogo from '../../assets/knotAvatar.png'
import style from './Logo.module.scss'


export const Logo: React.FC = () => {
    return (
        <Link to={'/'} >
            <img width="200px" className={style.logo}
                 src={headerLogo} alt="logo"/>
        </Link>
    )
}