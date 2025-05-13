import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.48 10.833H4.166a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h9.312L9.396 5.084a.76.76 0 0 1-.24-.583.84.84 0 0 1 .26-.583.88.88 0 0 1 .584-.24.76.76 0 0 1 .583.24l5.5 5.5a.7.7 0 0 1 .178.27.9.9 0 0 1 .052.313.9.9 0 0 1-.052.313.7.7 0 0 1-.178.27l-5.5 5.5a.78.78 0 0 1-.572.23.85.85 0 0 1-.594-.23.8.8 0 0 1-.25-.593q0-.345.25-.594l4.062-4.063Z"
      />
    </svg>
  );
};
export default SvgArrowRight;
