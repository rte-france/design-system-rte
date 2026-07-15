import React, { useState, useEffect } from "react";

import {
  RegularIconIdKey,
  TogglableIconIdKey,
} from "../../../projects/ds-rte-lib/src/lib/components/icon/icon-registry.service";
import "./IconTitle.css";

interface IconTitleProps {
  title: string;
  icon: RegularIconIdKey | TogglableIconIdKey;
}

const IconTitle = ({ title, icon }: IconTitleProps) => {
  const [iconSrc, setIconSrc] = useState<string>("");

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconFileName = icon.replace(/-/g, "_");
        const module = await import(`../../../../../core/assets/icons/${iconFileName}.svg`);
        setIconSrc(module.default);
      } catch (error) {
        console.error(`Failed to load icon: ${icon}`, error);
      }
    };

    loadIcon();
  }, [icon]);

  return (
    <div className="storybook_icon">
      <div className="storybook_icon_icon">
        <img src={iconSrc} alt={icon} className="rte-icon" style={{ width: "20px", height: "20px" }} />
      </div>
      <h3 className="storybook_icon_title">{title}</h3>
    </div>
  );
};

export default IconTitle;
