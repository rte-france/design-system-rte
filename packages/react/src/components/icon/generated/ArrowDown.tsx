import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowDown = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 13.48V4.166q0-.354.24-.594.239-.24.593-.24c.354 0 .434.08.594.24q.24.24.24.594v9.312l4.083-4.083a.76.76 0 0 1 .583-.24.84.84 0 0 1 .583.26.88.88 0 0 1 .24.584.76.76 0 0 1-.24.583l-5.5 5.5a.7.7 0 0 1-.27.177.9.9 0 0 1-.313.052.9.9 0 0 1-.313-.052.7.7 0 0 1-.27-.177l-5.5-5.5a.78.78 0 0 1-.23-.573q0-.344.23-.593a.8.8 0 0 1 .593-.25q.345 0 .594.25l4.063 4.062Z"
      />
    </svg>
  );
};
export default SvgArrowDown;
