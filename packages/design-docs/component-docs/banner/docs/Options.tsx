import React from "react";

import Accordion from "../../../../design-docs/src/components/Accordion/Accordion";
import Heading from "../../../../design-docs/src/components/Heading/Heading";
import Table from "../../../../design-docs/src/components/Table/Table";

const Options = () => {
  return (
    <div className="banner option-wrapper">
      <Accordion title="Options">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ padding: "16px" }}>
            <div className="option-header">
              <p>
                Les <b>options comprennent</b> les <b>états</b> et{" "}
                <b>différentes formes que peut prendre le composant</b>.
              </p>
              <p>
                Elles incluent : Les états, les variants, les tailles, les éléments modifiables qui composent le
                composant, etc.
              </p>
              <p>
                Elles <b>n’incluent pas</b> les “Behaviors” qui correspondent à <b>comment le composant réagit</b>.
              </p>
            </div>
          </div>

          <div className="option-table types">
            <Heading id="banner-type" level={3}>
              Banner Type
              <p className="option-description">Définit la couleur, l’icône et le rôle ARIA utilisé</p>
            </Heading>
            <Table options={typesOptions} />
          </div>

          <div className="option-table boolean-options">
            <Heading id="boolean-options" level={3}>
              Boolean options
            </Heading>
            <Table options={booleanOptions} />
          </div>

          <div className="option-table dev-specific">
            <Heading id="dev-specific-properties" level={3}>
              <span className="dev-heading">Dev specific properties</span>
            </Heading>
            <Table options={devSpecificOptions} />
          </div>
        </div>
      </Accordion>
    </div>
  );
};

const typesOptions = {
  headers: ["Type", "Purpose"],
  lines: [
    [
      "info",
      "Utilisé pour informer l’utilisateur d’un message contextuel ou général, sans indiquer une erreur ni nécessiter d’action corrective immédiate.",
    ],
    [
      "error",
      "Utilisé pour alerter l’utilisateur d’une erreur survenue ou d’un échec empêchant la poursuite normale du parcours, et peut nécessiter une action corrective.",
    ],
    [
      "success",
      "Sert à confirmer qu’une action ou un processus s’est déroulé avec succès, en fournissant un retour positif et explicite à l’utilisateur.",
    ],
    [
      "warning",
      "Signale une situation potentiellement problématique ou une information importante à prendre en compte, sans bloquer l’utilisateur ni indiquer une erreur avérée.",
    ],
  ],
};

export default Options;

const booleanOptions = {
  headers: ["Option", "Purpose"],
  lines: [
    [
      "isClosable",
      "Permet d'indiquer que la banner est manuellement refermable ou non, en faisant apparaître une croix",
    ],
    ["showTitle", "Permet d'ajouter un titre avant le texte du message"],
    [
      "showButton",
      "Permet d'ajouter un (text) button pour une action ou une redirection (ex : \"Réessayer\"). Par défaut cette variable est vraie, afin de rendre la bannière actionnable, et permettre d'adresser rapidement le problème associé à l'apparition de la bannière (si pertinent et adressable). Attention : une seule action par bannière.",
    ],
    ["title", "Titre de la banner (optionnel)"],
    ["message", "Texte contenu dans la banner (obligatoire) maximum de deux lignes possibles"],
  ],
};

const devSpecificOptions = {
  headers: ["Propriété", "Values", "Default Value", "Dependances", "Purpose"],
  lines: [
    [
      "position",
      "overlay / push",
      "push",
      "overlay : only if closeable = True",
      `overlay : la bannière se superpose sur le contenu et suit l'utilisateur au scroll. À utiliser lorsque la bannière peut apparaître sans affecter le contenu sous-jacent et sans cacher aucune action ou information importante. Une banner en overlay doit être manuellement refermable. \n\n push : la bannière est fixe, en haut de page, et s'intercale au-dessus du contenu (c'est pour cela qu'elle "push" le contenu plus bas). À utiliser lorsque la bannière doit rester en place, n'est pas refermable ou lorsqu'aucune information ne doit être cachée/recouverte par la bannière.`,
    ],
  ],
};
