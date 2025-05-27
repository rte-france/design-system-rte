import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgViewModuleOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...props}
    >
      <path
        d="M13.0625 9.16669H15.8333V5.83335H13.0625V9.16669ZM8.60417 9.16669H11.375V5.83335H8.60417V9.16669ZM4.16667 9.16669H6.9375V5.83335H4.16667V9.16669ZM4.16667 14.1667H6.9375V10.8334H4.16667V14.1667ZM8.60417 14.1667H11.375V10.8334H8.60417V14.1667ZM13.0625 14.1667H15.8333V10.8334H13.0625V14.1667ZM2.5 14.1667V5.83335C2.5 5.37502 2.66319 4.98266 2.98958 4.65627C3.31597 4.32988 3.70833 4.16669 4.16667 4.16669H15.8333C16.2917 4.16669 16.684 4.32988 17.0104 4.65627C17.3368 4.98266 17.5 5.37502 17.5 5.83335V14.1667C17.5 14.625 17.3368 15.0174 17.0104 15.3438C16.684 15.6702 16.2917 15.8334 15.8333 15.8334H4.16667C3.70833 15.8334 3.31597 15.6702 2.98958 15.3438C2.66319 15.0174 2.5 14.625 2.5 14.1667Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgViewModuleOutlined;
