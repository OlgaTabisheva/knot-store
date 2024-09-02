import React from "react";
import {Link} from "react-router-dom";
import style from './LinkAsButton.module.scss'


export const LinkAsButton: React.FC<{text:string, linkTo: string} > = ({ text, linkTo}) => {
    return (
        <Link to={linkTo}   state={{ from: location }}
              className={style.linkAsButton}>
            {text}

        </Link>
    )
}