import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAltUpRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m14.167 7-9.084 9.083a.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583L13 5.833H8.333a.8.8 0 0 1-.593-.24A.8.8 0 0 1 7.5 5q0-.354.24-.594t.593-.24H15q.354 0 .594.24t.24.594v6.667q0 .354-.24.593a.8.8 0 0 1-.594.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593z"
      />
    </svg>
  );
};
export default SvgArrowAltUpRight;
