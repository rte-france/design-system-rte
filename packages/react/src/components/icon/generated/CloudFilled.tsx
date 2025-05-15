import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCloudFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      role="img"
      {...props}
    >
      <path
        fill={fill}
        d="M5.417 16.667q-1.896 0-3.24-1.313T.833 12.146q0-1.626.98-2.896a4.33 4.33 0 0 1 2.562-1.625A5.66 5.66 0 0 1 6.46 4.521 5.7 5.7 0 0 1 10 3.333q2.438 0 4.136 1.698t1.698 4.136a3.64 3.64 0 0 1 2.385 1.24q.948 1.072.948 2.51 0 1.562-1.094 2.656t-2.656 1.094z"
      />
    </svg>
  );
};
export default SvgCloudFilled;
