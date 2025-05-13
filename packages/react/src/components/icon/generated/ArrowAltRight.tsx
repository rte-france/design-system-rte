import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowAltRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M15.146 10.833H2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h12.646l-3.23-3.25a.81.81 0 0 1-.239-.572.78.78 0 0 1 .24-.594.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23l4.667 4.667a.7.7 0 0 1 .177.27.9.9 0 0 1 .052.313.9.9 0 0 1-.052.313.7.7 0 0 1-.177.27l-4.667 4.667a.78.78 0 0 1-.573.23.85.85 0 0 1-.593-.23.81.81 0 0 1-.25-.594q0-.343.25-.594z"
      />
    </svg>
  );
};
export default SvgArrowAltRight;
