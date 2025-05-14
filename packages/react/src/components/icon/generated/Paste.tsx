import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPaste = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h3.479q.229-.729.896-1.198Q9.208.833 10 .833a2.5 2.5 0 0 1 1.49.47q.655.467.885 1.197h3.458q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zm0-1.667h11.666V4.167h-1.666v1.666q0 .354-.24.594a.8.8 0 0 1-.594.24H6.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V4.167H4.167zM10 4.167q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593A.8.8 0 0 0 10 2.5a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.593q0 .354.24.594t.594.24"
      />
    </svg>
  );
};
export default SvgPaste;
