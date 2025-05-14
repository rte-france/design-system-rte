import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAltLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.854 10.833H17.5q.354 0 .594-.24a.8.8 0 0 0 .24-.593.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24H4.854l3.23-3.25a.81.81 0 0 0 .239-.572.78.78 0 0 0-.24-.594.8.8 0 0 0-.583-.23.8.8 0 0 0-.583.23L2.25 9.417a.7.7 0 0 0-.177.27.9.9 0 0 0-.052.313q0 .166.052.313a.7.7 0 0 0 .177.27l4.667 4.667q.228.23.573.23a.85.85 0 0 0 .593-.23.81.81 0 0 0 .25-.594.81.81 0 0 0-.25-.594z"
      />
    </svg>
  );
};
export default SvgArrowAltLeft;
