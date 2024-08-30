import React, { useEffect, useRef, useState } from "react";

import style from "./Accordion.module.scss";

export const Accordion: React.FC<{ title: string; contentProps: any }> = ({
  title,
  contentProps,
}) => {
  const [active, setActive] = useState(false);
  const content = useRef<any>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", title, contentProps, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className={style.accordion__section}>
      <div
        className={ ` ${active ? style.active && style.accordion   : style.accordion }`}
        onClick={toggleAccordion}
      >
        <p className={style.accordion__title}>{title}</p>
        <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={style.accordion__content}
      >
        <div
          className={style.accordion__text}
          dangerouslySetInnerHTML={{ __html: contentProps }}
        />
      </div>
    </div>
  );
};

export default Accordion;
