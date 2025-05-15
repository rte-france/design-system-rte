import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCloudOffFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.417 16.667q-1.917 0-3.25-1.334Q.832 14 .833 12.083q0-1.604.99-2.854a4.4 4.4 0 0 1 2.552-1.604q.063-.167.125-.323.063-.156.125-.344L1.75 4.083a.8.8 0 0 1-.229-.583.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23l14.167 14.166a.82.82 0 0 1 .24.573.78.78 0 0 1-.24.594.82.82 0 0 1-.573.24.8.8 0 0 1-.594-.22l-1.625-1.603zM18 15.625 6.71 4.355a5.9 5.9 0 0 1 1.552-.761 5.7 5.7 0 0 1 1.74-.26q2.437 0 4.135 1.697t1.698 4.136a3.64 3.64 0 0 1 2.385 1.24q.948 1.071.948 2.51A3.65 3.65 0 0 1 18 15.625"
      />
    </svg>
  );
};
export default SvgCloudOffFilled;
