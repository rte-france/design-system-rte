import Icon from "../../../src/components/icon/Icon";

import style from "./UtilisationExemple.module.scss";

interface UtilisationExempleProps {
  toDo: boolean;
  img: string;
}

const UtilisationExemple = ({ toDo, img }: UtilisationExempleProps) => {
  return (
    <div>
      <div className={style.storybook_utilisation_exemple}>
        {toDo ? (
          <div className={style.storybook_utilisation_exemple_content_todo_true}>
            <Icon className={style.storybook_utilisation_exemple_icon} name="check" />
            <p tabIndex={0} className={style.storybook_utilisation_exemple}>
              {" "}
              À faire
            </p>
          </div>
        ) : (
          <div className={style.storybook_utilisation_exemple_content_todo_false}>
            <Icon className={style.storybook_utilisation_exemple_icon} name="warning" />
            <p tabIndex={0} className={style.storybook_utilisation_exemple}>
              À ne pas faire
            </p>
          </div>
        )}
        <img
          tabIndex={0}
          src={img}
          alt={toDo ? "Exemple d'usage à faire" : "Exemple d'usage à ne pas faire"}
          className={style.storybook_utilisation_exemple_image}
        />
      </div>
    </div>
  );
};

export default UtilisationExemple;
