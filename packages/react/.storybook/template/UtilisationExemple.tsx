import style from "./UtilisationExemple.module.scss";

interface UtilisationExempleProps {
  toDo: boolean;
  exemple: string;
}

const UtilisationExemple = ({ toDo, exemple }: UtilisationExempleProps) => {
  return (
    <div>
      <div className={style.storybook_utilisation_exemple}>
        {toDo ? (
          <div className={style.storybook_utilisation_exemple_content_todo_true}>
            <p className={style.storybook_utilisation_exemple}>À faire</p>
          </div>
        ) : (
          <div className={style.storybook_utilisation_exemple_content_todo_false}>
            <p className={style.storybook_utilisation_exemple}>À ne pas faire</p>
          </div>
        )}
        <img
          src={exemple}
          alt={toDo ? "Exemple à faire" : "Exemple à ne pas faire"}
          className={style.storybook_utilisation_exemple_image}
        />
      </div>
    </div>
  );
};

export default UtilisationExemple;
