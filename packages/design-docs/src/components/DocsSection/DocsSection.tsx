import { ReactNode } from "react";

import "./DocsSection.scss";
import Paragraph from "../Paragraph/Paragraph";

interface DocsSectionProps {
  title: string;
  image: string;
  alt?: string;
  children: ReactNode;
}

const DocsSection = ({ title, image, alt, children }: DocsSectionProps) => {
  return (
    <section className="rte-docs-section">
      <h4 className="rte-docs-section-title">{title}</h4>
      <Paragraph>{children}</Paragraph>
      <img src={image} alt={alt || title} className="rte-docs-section-image" />
    </section>
  );
};

export default DocsSection;
