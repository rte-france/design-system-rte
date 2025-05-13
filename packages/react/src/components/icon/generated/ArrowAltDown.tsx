import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowAltDown = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 17.98a.9.9 0 0 1-.312-.053.7.7 0 0 1-.271-.177L4.75 13.083a.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583.78.78 0 0 1 .594-.24q.343.01.573.24l3.25 3.229V2.5q0-.354.24-.594.239-.24.593-.24c.354 0 .434.08.594.24q.24.24.24.594v12.646l3.229-3.23a.8.8 0 0 1 .593-.25.8.8 0 0 1 .594.25.85.85 0 0 1 .23.594q0 .344-.23.573l-4.667 4.667a.7.7 0 0 1-.27.177.9.9 0 0 1-.313.052Z"
      />
    </svg>
  );
};
export default SvgArrowAltDown;
