import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFolderOpenFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177t1.177-.49h4.313a1.65 1.65 0 0 1 1.166.48L10 5h7.5q.354 0 .594.24t.24.593-.24.594a.8.8 0 0 1-.594.24H6.542q-1.293 0-2.25.812-.96.813-.959 2.063V15L4.98 9.52q.167-.54.615-.864t.99-.323h10.75q.854 0 1.343.677.49.677.26 1.47l-1.5 5q-.166.54-.614.864a1.65 1.65 0 0 1-.99.323z"
      />
    </svg>
  );
};
export default SvgFolderOpenFilled;
