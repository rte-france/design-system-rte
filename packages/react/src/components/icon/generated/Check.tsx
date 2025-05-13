import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgCheck = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m7.958 12.625 7.063-7.063a.8.8 0 0 1 .583-.25.8.8 0 0 1 .584.25q.25.25.25.594t-.25.594l-7.646 7.667a.8.8 0 0 1-.584.25.8.8 0 0 1-.583-.25l-3.583-3.584a.78.78 0 0 1-.24-.593.85.85 0 0 1 .26-.594.81.81 0 0 1 .594-.25.8.8 0 0 1 .594.25z"
      />
    </svg>
  );
};
export default SvgCheck;
