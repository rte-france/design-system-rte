import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChatOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
      <path
        d="M5.00008 15L3.08341 16.9167C2.81953 17.1806 2.51744 17.2396 2.17716 17.0938C1.83689 16.9479 1.66675 16.6875 1.66675 16.3125V3.33335C1.66675 2.87502 1.82994 2.48266 2.15633 2.15627C2.48272 1.82988 2.87508 1.66669 3.33341 1.66669H16.6667C17.1251 1.66669 17.5174 1.82988 17.8438 2.15627C18.1702 2.48266 18.3334 2.87502 18.3334 3.33335V13.3334C18.3334 13.7917 18.1702 14.184 17.8438 14.5104C17.5174 14.8368 17.1251 15 16.6667 15H5.00008ZM4.29175 13.3334H16.6667V3.33335H3.33341V14.2709L4.29175 13.3334Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgChatOutlined;
