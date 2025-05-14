import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowUpLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m7 6.667 7.417 7.416a.8.8 0 0 1 .229.584.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23L5.833 7.833v6.334q0 .354-.24.593A.8.8 0 0 1 5 15a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V5.833q0-.354.24-.593Q4.646 5 5 5h8.333q.354 0 .594.24t.24.593c0 .353-.08.434-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgArrowUpLeft;
