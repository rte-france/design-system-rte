import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCallFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M16.625 17.5q-2.604 0-5.146-1.135t-4.625-3.22-3.219-4.624T2.5 3.375q0-.375.25-.625a.85.85 0 0 1 .625-.25H6.75q.292 0 .52.198a.76.76 0 0 1 .272.469l.541 2.916q.042.334-.02.563a.9.9 0 0 1-.23.396l-2.02 2.041q.415.77.99 1.49.572.719 1.26 1.385.645.645 1.354 1.198.708.552 1.5 1.01l1.958-1.958q.187-.187.49-.28.302-.094.593-.053l2.875.583a.97.97 0 0 1 .48.302.73.73 0 0 1 .187.49v3.375q0 .375-.25.625a.85.85 0 0 1-.625.25"
      />
    </svg>
  );
};
export default SvgCallFilled;
