import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgModeDarkOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 17.5q-3.146 0-5.323-2.177T2.5 10q0-2.875 1.875-4.99Q6.25 2.896 9.167 2.542a.74.74 0 0 1 .479.073q.209.114.333.302.126.187.136.437a.75.75 0 0 1-.157.48 4.3 4.3 0 0 0-.53 1.145A4.5 4.5 0 0 0 9.25 6.25q0 1.875 1.313 3.187 1.312 1.313 3.187 1.313.646 0 1.281-.187a4.2 4.2 0 0 0 1.136-.521.8.8 0 0 1 .468-.136q.24.01.427.115.21.104.323.312.115.21.073.5-.291 2.875-2.448 4.771Q12.855 17.5 10 17.5m0-1.667q1.833 0 3.292-1.01a5.85 5.85 0 0 0 2.125-2.636q-.417.105-.834.167a5.6 5.6 0 0 1-.833.063q-2.562 0-4.365-1.803Q7.583 8.814 7.583 6.25q0-.417.063-.833.063-.417.167-.834a5.84 5.84 0 0 0-2.636 2.125Q4.167 8.168 4.167 10q0 2.417 1.708 4.125Q7.584 15.833 10 15.833"
      />
    </svg>
  );
};
export default SvgModeDarkOutlined;
