import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgTextSnippetFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h7.646a1.65 1.65 0 0 1 1.166.48l4.042 4.04q.229.23.354.532.125.301.125.636v7.645q0 .688-.49 1.177-.489.49-1.177.49zm2.5-3.333h6.666q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24H6.667a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.593q0 .354.24.594t.594.24m0-3.334h6.666q.354 0 .594-.24.24-.239.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24H6.667a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.594t.594.24m0-3.333h4.166q.354 0 .594-.24t.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24H6.667a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.593.24.24.594.24"
      />
    </svg>
  );
};
export default SvgTextSnippetFilled;
