import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChartPieFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10.833 9.167V1.75q2.979.312 5.032 2.375t2.385 5.042zm-1.646 9.062q-3.165-.312-5.302-2.666Q1.75 13.208 1.75 10q0-3.23 2.135-5.583Q6.02 2.062 9.188 1.75zm1.646 0v-7.416h7.417q-.291 2.979-2.365 5.052-2.072 2.073-5.052 2.364"
      />
    </svg>
  );
};
export default SvgChartPieFilled;
