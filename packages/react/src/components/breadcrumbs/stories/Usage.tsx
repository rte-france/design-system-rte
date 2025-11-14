import Accordion from "../../../../.storybook/template/Accordion/Accordion";
import Heading from "../../../../.storybook/template/heading/Heading";
import Icon from "../../icon/Icon";
import BreadcrumbItem from "../breadcrumbItem/BreadcrumbItem";
import Breadcrumbs from "../Breadcrumbs";
import "./Usage.scss";

const positiveFirst = [
  { label: "This is a link", link: "/" },
  { label: "This is a link", link: "/" },
  { label: "Active page", link: "/" },
];
const positiveSecond = [
  { label: "page source", link: "/" },
  { label: "première page enfant", link: "/" },
  { label: "avant-dernier", link: "/" },
  { label: "courant", link: "/" },
];
const negativeFirst = [
  { label: "Link 1", link: "/" },
  { label: "Link 2", link: "/" },
  { label: "Link 3", link: "/" },
  { label: "Active Page", link: "/" },
];
const negativeSecond = [
  { label: "Link très très très long", link: "/" },
  { label: "Link très très très long", link: "/" },
  { label: "Link 3", link: "/" },
  { label: "Active Page", link: "/" },
];

const Usage = () => {
  return (
    <div className="breadcrumb usage-wrapper">
      <Accordion title="Usage">
        <div className="breadcrumb usage-container">
          <div className="usage">
            <div className="section positive">
              <div className="title">
                <Icon name="check-circle" size={16} />
                <Heading id="" level={3}>
                  A faire
                </Heading>
              </div>
              <div className="body">
                <div className="content first">
                  <div className="breadcrumb-example">
                    <Breadcrumbs items={positiveFirst} ariaLabel="Breadcrumbs example" />
                  </div>
                  <p>Utiliser au maximum 3 éléments visibles</p>
                </div>
                <div className="content second">
                  <p>Structure recommandée :</p>
                  <div className="breadcrumb-example">
                    <Breadcrumbs items={positiveSecond} ariaLabel="Breadcrumbs example" />
                  </div>
                </div>
              </div>
            </div>
            <div className="section negative">
              <div className="title">
                <Icon name="cancel" size={16} />
                <Heading id="" level={3}>
                  A ne pas faire
                </Heading>
              </div>
              <div className="body">
                <div className="content first">
                  <div className="breadcrumb-example">
                    {negativeFirst.map((item, index) => (
                      <div key={item.label + index} style={{ display: "inline" }}>
                        <BreadcrumbItem item={item} isLast={index === negativeFirst.length - 1} />
                        {index < negativeFirst.length - 1 && <span className="separator">/</span>}
                      </div>
                    ))}
                  </div>
                  <p>Si le breadcrumb dépasse 3 niveaux, ne pas afficher les niveaux intermédiaires</p>
                </div>
                <div className="content second">
                  <div className="breadcrumb-example">
                    {negativeSecond.map((item, index) => (
                      <div key={item.label + index} style={{ display: "inline" }}>
                        <BreadcrumbItem item={item} isLast={index === negativeFirst.length - 1} />
                        {index < negativeFirst.length - 1 && <span className="separator">/</span>}
                      </div>
                    ))}
                  </div>
                  <p>Si le breadcrumb dépasse 3 niveaux, ne pas afficher les niveaux intermédiaires</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-standard">
            <p className="title">
              Content Standards <span>(UX Writing)</span>
            </p>
            <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
              <p className="subtitle">Description textuelle</p>
              <p className="description">
                <b>Texte des liens</b> simples, compréhensibles, sans ponctuation finale.
              </p>
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Usage;
