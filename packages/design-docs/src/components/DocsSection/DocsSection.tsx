import { ReactNode } from "react";

import "./DocsSection.scss";

interface DocsSectionProps {
  title: string;
  image: string;
  alt?: string;
  children: ReactNode;
}

const DocsSection = ({ title, image, alt, children }: DocsSectionProps) => {
  return (
    <section className="rte-docs-section">
      <h3 className="rte-docs-section-title">{title}</h3>
      <div className="rte-docs-section-content">{children}</div>
      <img src={image} alt={alt || title} className="rte-docs-section-image" />
    </section>
  );
};

export default DocsSection;
