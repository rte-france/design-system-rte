import { DrawerProps as coreDrawerProps } from '../../../../core/components/drawer/drawer.interface';
interface DrawerProps extends coreDrawerProps, Omit<React.HTMLAttributes<HTMLDivElement>, "id" | "content"> {
    header?: React.ReactNode | React.ReactNode[];
    footer?: React.ReactNode | React.ReactNode[];
    content?: React.ReactNode | React.ReactNode[];
    children?: React.ReactNode | React.ReactNode[];
    width?: string;
}
declare const Drawer: ({ id, title, icon, iconAppearance, isOpen, onClose, onClickToggle, closeOnOverlayClick, primaryButtonLabel, secondaryButtonLabel, isCollapsible, content, header, footer, position, width, children, fixedHeader, closeOnEscape, isClosable, onClickPrimaryButton, onClickSecondaryButton, ...props }: DrawerProps) => import("react").JSX.Element | null;
export default Drawer;
