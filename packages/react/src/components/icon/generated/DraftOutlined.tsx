import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgDraftOutlined = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M4.99992 18.3334C4.54159 18.3334 4.14922 18.1702 3.82284 17.8438C3.49645 17.5174 3.33325 17.125 3.33325 16.6667V3.33335C3.33325 2.87502 3.49645 2.48266 3.82284 2.15627C4.14922 1.82988 4.54159 1.66669 4.99992 1.66669H10.9791C11.2013 1.66669 11.4131 1.70835 11.6145 1.79169C11.8159 1.87502 11.993 1.99308 12.1458 2.14585L16.1874 6.18752C16.3402 6.3403 16.4583 6.51738 16.5416 6.71877C16.6249 6.92016 16.6666 7.13196 16.6666 7.35419V16.6667C16.6666 17.125 16.5034 17.5174 16.177 17.8438C15.8506 18.1702 15.4583 18.3334 14.9999 18.3334H4.99992ZM10.8333 6.66669V3.33335H4.99992V16.6667H14.9999V7.50002H11.6666C11.4305 7.50002 11.2326 7.42016 11.0728 7.26044C10.9131 7.10071 10.8333 6.9028 10.8333 6.66669Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgDraftOutlined;
