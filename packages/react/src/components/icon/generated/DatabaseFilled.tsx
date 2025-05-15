import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgDatabaseFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 9.167q3.125 0 5.313-.98Q17.5 7.21 17.5 5.834q0-1.374-2.187-2.354Q13.125 2.5 10 2.5q-3.125 0-5.312.98Q2.5 4.458 2.5 5.832t2.188 2.355q2.187.978 5.312.979m0 2.083q.855 0 2.135-.177a13.7 13.7 0 0 0 2.47-.573q1.186-.396 2.04-1.031.855-.636.855-1.552V10q0 .917-.854 1.552t-2.042 1.031-2.469.573-2.135.177-2.135-.177a13.7 13.7 0 0 1-2.47-.573q-1.186-.396-2.04-1.03Q2.5 10.915 2.5 10V7.917q0 .915.854 1.552.854.635 2.042 1.031a13.7 13.7 0 0 0 2.469.573q1.281.177 2.135.177m0 4.167q.855 0 2.135-.177a13.7 13.7 0 0 0 2.47-.573q1.186-.396 2.04-1.032.855-.634.855-1.552v2.084q0 .916-.854 1.552-.854.635-2.042 1.031t-2.469.573T10 17.5t-2.135-.177a13.7 13.7 0 0 1-2.47-.573q-1.186-.396-2.04-1.031-.855-.636-.855-1.552v-2.084q0 .917.854 1.552.854.636 2.042 1.032a13.7 13.7 0 0 0 2.469.573q1.281.177 2.135.177"
      />
    </svg>
  );
};
export default SvgDatabaseFilled;
