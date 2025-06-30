interface UtilisationExempleProps {
  toDo: boolean;
  img: string;
}

const UtilisationExemple = ({ toDo, img }: UtilisationExempleProps) => {
  return (
    <div>
      <div className="storybook_utilisation_exemple">
        {toDo ? (
          <div className="storybook_utilisation_exemple_content_todo_true">
            <img
              src="/assets/icons/check.svg"
              alt="icone_check"
              className="rte-icon"
              style={{
                width: "18px",
                height: "18px",
                marginLeft: "1rem",
                filter: "invert(47%) sepia(73%) saturate(513%) hue-rotate(85deg) brightness(93%) contrast(82%)",
              }}
              //Filter to match design system (#25A249) colors because the svg is an img
            />
            <p tabIndex={0} className="storybook_utilisation_exemple"> À faire</p>
          </div>
        ) : (
          <div className="storybook_utilisation_exemple_content_todo_false">
            <img
              src="/assets/icons/warning_outlined.svg"
              alt="icone_warning"
              className="rte-icon"
              style={{
                width: "18px",
                height: "18px",
                marginLeft: "1rem",
                filter: "invert(17%) sepia(87%) saturate(3767%) hue-rotate(347deg) brightness(88%) contrast(94%)",
              }}
              //Filter to match design system (#DA1E28) colors because the svg is an img
            />
            <p tabIndex={0} className="storybook_utilisation_exemple">À ne pas faire</p>
          </div>
        )}
        <img
          tabIndex={0}
          src={img}
          alt={toDo ? "Exemple d'usage à faire" : "Exemple d'usage à ne pas faire"}
          className="storybook_utilisation_exemple_image"
        />
      </div>
    </div>
  );
};

export default UtilisationExemple;
