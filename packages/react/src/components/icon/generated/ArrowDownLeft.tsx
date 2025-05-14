import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowDownLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m6.667 13 7.416-7.417a.8.8 0 0 1 .584-.229.8.8 0 0 1 .583.23.8.8 0 0 1 .23.583.8.8 0 0 1-.23.583l-7.417 7.417h6.334q.354 0 .593.24.24.239.24.593c0 .354-.08.434-.24.594a.8.8 0 0 1-.593.24H5.833a.8.8 0 0 1-.593-.24A.8.8 0 0 1 5 15V6.667q0-.354.24-.594t.593-.24c.353 0 .434.08.594.24q.24.24.24.594z"
      />
    </svg>
  );
};
export default SvgArrowDownLeft;
