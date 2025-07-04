import check from "../../../projects/ds-rte-lib/src/lib/assets/icons/check.svg";
import warningOutlined from "../../../projects/ds-rte-lib/src/lib/assets/icons/warning_outlined.svg";

interface UtilisationExempleProps {
  toDo: boolean;
  img: string;
}

const UtilisationExemple = ({ toDo, img }: UtilisationExempleProps) => {
  const designSystemGreenColorFIlter =
    "invert(47%) sepia(73%) saturate(513%) hue-rotate(85deg) brightness(93%) contrast(82%)";
  const designSystemRedColorFilter =
    "invert(17%) sepia(87%) saturate(3767%) hue-rotate(347deg) brightness(88%) contrast(94%)";

  return (
    <div>
      <div className="storybook_utilisation_exemple">
        {toDo ? (
          <div className="storybook_utilisation_exemple_content_todo_true">
            <img
              src={check}
              alt="icone_check"
              className="rte-icon"
              style={{
                width: "18px",
                height: "18px",
                marginLeft: "1rem",
                filter: designSystemGreenColorFIlter,
              }}
            />
            <p className="storybook_utilisation_exemple"> À faire</p>
          </div>
        ) : (
          <div className="storybook_utilisation_exemple_content_todo_false">
            <img
              src={warningOutlined}
              alt="icone_warning"
              className="rte-icon"
              style={{
                width: "18px",
                height: "18px",
                marginLeft: "1rem",
                filter: designSystemRedColorFilter,
              }}
            />
            <p className="storybook_utilisation_exemple">À ne pas faire</p>
          </div>
        )}
        <img
          src={img}
          alt={toDo ? "Exemple d'usage à faire" : "Exemple d'usage à ne pas faire"}
          className="storybook_utilisation_exemple_image"
        />
      </div>
    </div>
  );
};

export default UtilisationExemple;
