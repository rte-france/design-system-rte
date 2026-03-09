import { TabProps as CoreTabProps } from '../../../../core/components/tab/tab.interface';
import { HTMLAttributes } from '../../../../../node_modules/react';
interface TabProps extends CoreTabProps, Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    onChange: (id: string) => void;
}
declare const Tab: import('../../../../../node_modules/react').ForwardRefExoticComponent<TabProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Tab;
