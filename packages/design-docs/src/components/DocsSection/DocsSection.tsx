import { ReactNode } from "react";

import "./DocsSection.scss";
import Heading from "../Heading/Heading";

interface DocsSectionProps {
  title: string;
  image?: string;
  alt?: string;
  children: ReactNode;
  headingLevel?: number;
}

const DocsSection = ({ title, image, alt, children, headingLevel = 4 }: DocsSectionProps) => {
  return (
    <section className="rte-docs-section">
      {title && (
        <Heading level={headingLevel} id={title}>
          {title}
        </Heading>
      )}
      <div className="rte-docs-section-content">{children}</div>
      {image && <img src={image} alt={alt || title} className="rte-docs-section-image" />}
    </section>
  );
};

export default DocsSection;
