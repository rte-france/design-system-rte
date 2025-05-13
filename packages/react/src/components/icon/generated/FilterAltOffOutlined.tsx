import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgFilterAltOffOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m12.333 9.98-1.187-1.188L14.125 5h-6.77L5.686 3.333h10.146q.52 0 .75.459.23.458-.083.875l-4.167 5.312Zm-.666 4.04v1.813q0 .354-.24.594a.8.8 0 0 1-.594.24H9.167a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-5.146L1.75 4.104a.78.78 0 0 1-.23-.573.85.85 0 0 1 .23-.594.81.81 0 0 1 .594-.25q.344 0 .593.25l14.146 14.146a.76.76 0 0 1 .24.584.84.84 0 0 1-.26.583.88.88 0 0 1-.584.24.76.76 0 0 1-.583-.24l-4.23-4.23Z"
      />
    </svg>
  );
};
export default SvgFilterAltOffOutlined;
