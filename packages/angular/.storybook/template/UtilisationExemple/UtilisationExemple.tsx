interface UtilisationExempleProps {
  toDo: boolean;
  imgPath: string;
}

const UtilisationExemple = ({ toDo, imgPath }: UtilisationExempleProps) => {
  return (
    <div>
      <div className="storybook_utilisation_exemple">
        {toDo ? (
          <div className="storybook_utilisation_exemple_content_todo_true">
            <img src="/assets/icons/check.svg" alt="icone_check" className="rte-icon" style={{ width: "24px", height: "24px" }} />
            <p className="storybook_utilisation_exemple"> À faire</p>
          </div>
        ) : (
          <div className="storybook_utilisation_exemple_content_todo_false">
            <img src="/assets/icons/warning_filled.svg" alt="icone_warning" className="rte-icon" style={{ width: "24px", height: "24px" }} />
            <p className="storybook_utilisation_exemple">À ne pas faire</p>
          </div>
        )}
        <img
          src={imgPath}
          alt={toDo ? "Exemple à faire" : "Exemple à ne pas faire"}
          className="storybook_utilisation_exemple_image"
        />
      </div>
    </div>
  );
};

export default UtilisationExemple;
