import { RegularIconIdKey, TogglableIconIdKey } from "../../../src/components/icon/Icon";
import Icon from "../../../src/components/icon/Icon";

import "./IconTitle.css";

interface IconTitleProps {
  title: string;
  icon: RegularIconIdKey | TogglableIconIdKey;
}

const IconTitle = ({ title, icon }: IconTitleProps) => {
  return (
    <div className="storybook_icon">
      <div className="storybook_icon_icon">
        <Icon name={icon} accentHeight={24} />
      </div>
      <p className="storybook_icon_title">{title}</p>
    </div>
  );
};

export default IconTitle;
