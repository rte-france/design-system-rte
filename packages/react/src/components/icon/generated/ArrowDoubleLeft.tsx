import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowDoubleLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m6.52 10 3.23 3.25a.81.81 0 0 1 .24.573.78.78 0 0 1-.24.594.8.8 0 0 1-.583.229.8.8 0 0 1-.584-.23L4.75 10.584a.7.7 0 0 1-.177-.27.9.9 0 0 1-.052-.313q0-.167.052-.312a.7.7 0 0 1 .177-.271l3.833-3.834a.81.81 0 0 1 .573-.24.78.78 0 0 1 .594.24.8.8 0 0 1 .23.584.8.8 0 0 1-.23.583zm5.5 0 3.23 3.25a.81.81 0 0 1 .24.573.78.78 0 0 1-.24.594.8.8 0 0 1-.583.229.8.8 0 0 1-.584-.23l-3.833-3.833a.7.7 0 0 1-.177-.27.9.9 0 0 1-.052-.313.9.9 0 0 1 .052-.312.7.7 0 0 1 .177-.271l3.833-3.834a.81.81 0 0 1 .573-.24.78.78 0 0 1 .594.24.8.8 0 0 1 .23.584.8.8 0 0 1-.23.583z"
      />
    </svg>
  );
};
export default SvgArrowDoubleLeft;
