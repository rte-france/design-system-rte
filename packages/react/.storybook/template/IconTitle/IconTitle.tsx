import { RegularIconIdKey, TogglableIconIdKey } from "../../../src/components/icon/Icon";
import Icon from "../../../src/components/icon/Icon";

import style from "./IconTitle.module.scss";

interface IconTitleProps {
  title: string;
  icon: RegularIconIdKey | TogglableIconIdKey;
}

const IconTitle = ({ title, icon }: IconTitleProps) => {
  return (
    <div className={style.storybook_icon}>
      <div className={style.storybook_icon_icon}>
        <Icon name={icon} accentHeight={24} />
      </div>
      <p tabIndex={0} className={style.storybook_icon_title}>{title}</p>
    </div>
  );
};

export default IconTitle;
