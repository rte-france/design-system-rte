import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgMoreUp = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M14.167 5.833H7.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H15q.354 0 .594.24t.24.594v7.5q0 .354-.24.594a.8.8 0 0 1-.594.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594zM10 10H3.333a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.593-.24h7.5q.354 0 .594.24t.24.594v7.5q0 .354-.24.593a.8.8 0 0 1-.594.24.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593z"
      />
    </svg>
  );
};
export default SvgMoreUp;
