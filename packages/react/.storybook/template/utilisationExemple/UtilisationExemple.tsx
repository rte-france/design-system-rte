import style from "./UtilisationExemple.module.scss";
import Icon from "../../../src/components/icon/Icon";

interface UtilisationExempleProps {
  toDo: boolean;
  imgPath: string;
}

const UtilisationExemple = ({ toDo, imgPath }: UtilisationExempleProps) => {
  return (
    <div>
      <div className={style.storybook_utilisation_exemple}>
        {toDo ? (
          <div className={style.storybook_utilisation_exemple_content_todo_true}>
            <Icon className={style.storybook_utilisation_exemple_icon} name="check" />
            <p className={style.storybook_utilisation_exemple}> À faire</p>
          </div>
        ) : (
          <div className={style.storybook_utilisation_exemple_content_todo_false}>
            <Icon className={style.storybook_utilisation_exemple_icon} name="warning" />
            <p className={style.storybook_utilisation_exemple}>À ne pas faire</p>
          </div>
        )}
        <img
          src={imgPath}
          alt={toDo ? "Exemple à faire" : "Exemple à ne pas faire"}
          className={style.storybook_utilisation_exemple_image}
        />
      </div>
    </div>
  );
};

export default UtilisationExemple;
