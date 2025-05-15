import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowCircleChevronRightFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m10.563 10-1.98-1.98a.78.78 0 0 1-.229-.572.85.85 0 0 1 .23-.594.8.8 0 0 1 .593-.25q.344 0 .594.25l2.562 2.563a.8.8 0 0 1 .25.583.8.8 0 0 1-.25.583L9.75 13.167a.76.76 0 0 1-.583.24.84.84 0 0 1-.584-.261.88.88 0 0 1-.24-.584.76.76 0 0 1 .24-.583zm7.77 0a8.1 8.1 0 0 0-.656-3.25 8.4 8.4 0 0 0-1.781-2.646 8.4 8.4 0 0 0-2.646-1.781A8.1 8.1 0 0 0 10 1.667a8.1 8.1 0 0 0-3.25.656 8.4 8.4 0 0 0-2.646 1.781A8.4 8.4 0 0 0 2.323 6.75 8.1 8.1 0 0 0 1.667 10q0 1.73.656 3.25a8.4 8.4 0 0 0 1.781 2.646 8.4 8.4 0 0 0 2.646 1.781 8.1 8.1 0 0 0 3.25.656 8.1 8.1 0 0 0 3.25-.656 8.4 8.4 0 0 0 2.646-1.781 8.4 8.4 0 0 0 1.781-2.646 8.1 8.1 0 0 0 .656-3.25"
      />
    </svg>
  );
};
export default SvgArrowCircleChevronRightFilled;
