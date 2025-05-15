import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowDownRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13 13.333 5.583 5.917a.8.8 0 0 1-.229-.584.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23l7.417 7.417V5.833q0-.354.24-.593Q14.645 5 15 5t.594.24q.24.24.24.593v8.334q0 .354-.24.593A.8.8 0 0 1 15 15H6.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24z"
      />
    </svg>
  );
};
export default SvgArrowDownRight;
