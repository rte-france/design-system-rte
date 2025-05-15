import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAngleUpLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m6.52 8.333 2.418 2.417a.76.76 0 0 1 .24.583.88.88 0 0 1-.24.584.84.84 0 0 1-.584.26.76.76 0 0 1-.583-.24L3.917 8.084a.7.7 0 0 1-.177-.27.9.9 0 0 1-.053-.313q0-.167.053-.312a.7.7 0 0 1 .177-.271l3.812-3.813a.81.81 0 0 1 .594-.25q.344 0 .594.25a.8.8 0 0 1 .25.584.8.8 0 0 1-.25.583L6.52 6.667h7.646q.687 0 1.177.49.49.489.49 1.176v7.5q0 .355-.24.594a.8.8 0 0 1-.594.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-7.5z"
      />
    </svg>
  );
};
export default SvgArrowAngleUpLeft;
