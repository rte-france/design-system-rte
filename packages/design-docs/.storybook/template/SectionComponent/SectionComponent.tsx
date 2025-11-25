import { ReactNode } from "react";

import style from "./SectionComponent.module.scss";

interface SectionComponentProps {
  title: string;
  image: string;
  alt?: string;
  children: ReactNode;
}

function SectionComponent({ title, image, alt, children }: SectionComponentProps) {
  return (
    <section className={style.section}>
      <h4 className="sub-title">{title}</h4>
      <p className={style.content}>{children}</p>
      <img src={image} alt={alt || title} className={style.image} />
    </section>
  );
}

export default SectionComponent;
