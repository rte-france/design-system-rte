import UsageTemplate from "../../../../.storybook/template/Usage/Usage";
import UsageCard from "../../../../.storybook/template/Usage/UsageCard/UsageCard";
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
  const positiveContent = (
    <>
      <UsageCard>
        <div className="breadcrumb-example">
          <Breadcrumbs items={positiveFirst} ariaLabel="Breadcrumbs example" />
        </div>
        <p>Utiliser au maximum 3 éléments visibles</p>
      </UsageCard>
      <UsageCard>
        <p className="subtitle">Structure recommandée :</p>
        <div className="breadcrumb-example">
          <Breadcrumbs items={positiveSecond} ariaLabel="Breadcrumbs example" />
        </div>
      </UsageCard>
    </>
  );

  const negativeContent = (
    <>
      <UsageCard>
        <div className="breadcrumb-example">
          {negativeFirst.map((item, index) => (
            <div key={item.label + index} style={{ display: "inline" }}>
              <BreadcrumbItem item={item} isLast={index === negativeFirst.length - 1} />
              {index < negativeFirst.length - 1 && <span className="separator">/</span>}
            </div>
          ))}
        </div>
        <p>Si le breadcrumb dépasse 3 niveaux, ne pas afficher les niveaux intermédiaires</p>
      </UsageCard>
      <UsageCard>
        <div className="breadcrumb-example">
          {negativeSecond.map((item, index) => (
            <div key={item.label + index} style={{ display: "inline" }}>
              <BreadcrumbItem item={item} isLast={index === negativeFirst.length - 1} />
              {index < negativeFirst.length - 1 && <span className="separator">/</span>}
            </div>
          ))}
        </div>
        <p>Si le breadcrumb dépasse 3 niveaux, ne pas afficher les niveaux intermédiaires</p>
      </UsageCard>
    </>
  );

  const contentStandards = (
    <>
      <p className="title">
        Content Standards <span>(UX Writing)</span>
      </p>
      <div style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
        <p className="subtitle">Description textuelle</p>
        <p className="description">
          <b>Texte des liens</b> simples, compréhensibles, sans ponctuation finale.
        </p>
      </div>
    </>
  );

  return (
    <div className="breadcrumb">
      <UsageTemplate
        positiveContent={positiveContent}
        negativeContent={negativeContent}
        contentStandards={contentStandards}
      />
    </div>
  );
};

export default Usage;
