import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgViewColumnOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
      <path
        d="M2.521 14.1667V5.83335C2.521 5.37502 2.68419 4.98266 3.01058 4.65627C3.33697 4.32988 3.72933 4.16669 4.18766 4.16669H15.8335C16.2918 4.16669 16.6842 4.32988 17.0106 4.65627C17.337 4.98266 17.5002 5.37502 17.5002 5.83335V14.1667C17.5002 14.625 17.337 15.0174 17.0106 15.3438C16.6842 15.6702 16.2918 15.8334 15.8335 15.8334H4.18766C3.72933 15.8334 3.33697 15.6702 3.01058 15.3438C2.68419 15.0174 2.521 14.625 2.521 14.1667ZM4.16683 14.1667H6.93766V5.83335H4.16683V14.1667ZM8.60433 14.1667H11.3752V5.83335H8.60433V14.1667ZM13.0418 14.1667H15.8127V5.83335H13.0418V14.1667Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgViewColumnOutlined;
