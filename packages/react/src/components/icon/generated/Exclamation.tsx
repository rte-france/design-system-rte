import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgExclamation = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 11.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V5q0-.354.24-.594t.594-.24c.354 0 .434.08.594.24q.24.24.24.594v5.833q0 .354-.24.594a.8.8 0 0 1-.594.24m0 4.166a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24c.354 0 .434.08.594.24q.24.24.24.594c0 .354-.08.434-.24.594a.8.8 0 0 1-.594.24Z"
      />
    </svg>
  );
};
export default SvgExclamation;
