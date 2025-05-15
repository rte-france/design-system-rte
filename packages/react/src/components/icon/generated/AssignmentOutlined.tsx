import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgAssignmentOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h3.5q.27-.75.906-1.208A2.38 2.38 0 0 1 10 .833a2.38 2.38 0 0 1 1.427.459q.636.458.906 1.208h3.5q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.178-.489.489-1.177.489zm0-1.667h11.666V4.167H4.167zm2.5-1.666h4.166q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24H6.667a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.593q0 .354.24.594t.594.24m0-3.334h6.666q.354 0 .594-.24.24-.239.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24H6.667a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.594t.594.24m0-3.333h6.666q.354 0 .594-.24t.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24H6.667a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.593.24.24.594.24M10 3.542a.607.607 0 0 0 .625-.625.607.607 0 0 0-.625-.625.607.607 0 0 0-.625.625.607.607 0 0 0 .625.625"
      />
    </svg>
  );
};
export default SvgAssignmentOutlined;
