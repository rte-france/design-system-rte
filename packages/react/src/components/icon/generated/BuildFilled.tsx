import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBuildFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 12.5q-2.084 0-3.542-1.458Q2.5 9.583 2.5 7.5q0-.417.063-.833.062-.417.229-.792a.8.8 0 0 1 .26-.312q.156-.105.344-.146a.804.804 0 0 1 .75.23l2.187 2.186 1.5-1.5-2.187-2.187a.8.8 0 0 1-.23-.75q.042-.188.146-.344a.8.8 0 0 1 .313-.26q.375-.167.792-.23A5.6 5.6 0 0 1 7.5 2.5q2.084 0 3.542 1.458Q12.5 5.417 12.5 7.5q0 .48-.083.906a4.7 4.7 0 0 1-.25.844l4.208 4.167q.604.604.604 1.479 0 .874-.604 1.479a2.01 2.01 0 0 1-1.48.604 1.98 1.98 0 0 1-1.478-.625L9.25 12.167a4.7 4.7 0 0 1-.844.25 4.7 4.7 0 0 1-.906.083"
      />
    </svg>
  );
};
export default SvgBuildFilled;
