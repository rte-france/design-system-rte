import { TagProps as TagPropsCore } from '../../../../core/components/tag/tag.interface';
import { RegularIconIdKey, TogglableIconIdKey } from '../icon/Icon';
interface TagProps extends Omit<TagPropsCore, "iconName">, Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
    iconName?: RegularIconIdKey | TogglableIconIdKey;
}
declare const Tag: import('../../../../../node_modules/react').ForwardRefExoticComponent<TagProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Tag;
