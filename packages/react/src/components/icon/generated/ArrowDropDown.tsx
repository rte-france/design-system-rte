import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowDropDown = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.56246 12.0625L6.54163 9.04171C6.49996 9.00004 6.46871 8.9549 6.44788 8.90629C6.42704 8.85768 6.41663 8.8056 6.41663 8.75004C6.41663 8.63893 6.45482 8.54171 6.53121 8.45837C6.6076 8.37504 6.70829 8.33337 6.83329 8.33337H13.1666C13.2916 8.33337 13.3923 8.37504 13.4687 8.45837C13.5451 8.54171 13.5833 8.63893 13.5833 8.75004C13.5833 8.77782 13.5416 8.87504 13.4583 9.04171L10.4375 12.0625C10.368 12.132 10.2986 12.1806 10.2291 12.2084C10.1597 12.2362 10.0833 12.25 9.99996 12.25C9.91663 12.25 9.84024 12.2362 9.77079 12.2084C9.70135 12.1806 9.6319 12.132 9.56246 12.0625Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgArrowDropDown;
