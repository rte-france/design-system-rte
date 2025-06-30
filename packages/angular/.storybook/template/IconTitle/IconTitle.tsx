import React from "react";

import {
  RegularIconIdKey,
  TogglableIconIdKey,
} from "../../../projects/ds-rte-lib/src/lib/components/icon/icon.service";

interface IconTitleProps {
  title: string;
  icon: RegularIconIdKey | TogglableIconIdKey;
}

const IconTitle: React.FC<IconTitleProps> = ({ title, icon }) => {
  // Create the icon using the same approach as the Angular component
  const iconSrc = `/assets/icons/${icon}.svg`;

  return (
    <div className="storybook_icon">
      <div className="storybook_icon_icon">
        <img src={iconSrc} alt={icon} className="rte-icon" style={{ width: "20px", height: "20px" }} />
      </div>
      <p tabIndex={0} className="storybook_icon_title">
        {title}
      </p>
    </div>
  );
};

export default IconTitle;
