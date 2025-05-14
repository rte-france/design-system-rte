import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowUp = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m9.167 6.52-4.084 4.084a.76.76 0 0 1-.583.24.84.84 0 0 1-.583-.26.88.88 0 0 1-.24-.584.76.76 0 0 1 .24-.583l5.5-5.5a.7.7 0 0 1 .27-.177.9.9 0 0 1 .313-.053q.166 0 .313.053a.7.7 0 0 1 .27.177l5.5 5.5q.23.228.23.573a.85.85 0 0 1-.23.593.8.8 0 0 1-.593.25.81.81 0 0 1-.594-.25l-4.063-4.062v9.312q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V6.521Z"
      />
    </svg>
  );
};
export default SvgArrowUp;
