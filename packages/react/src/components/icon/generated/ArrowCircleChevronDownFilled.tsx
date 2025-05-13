import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowCircleChevronDownFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m10 10.563-1.98-1.98a.78.78 0 0 0-.572-.229.85.85 0 0 0-.594.23.8.8 0 0 0-.25.593q0 .344.25.594l2.563 2.562a.8.8 0 0 0 .583.25.8.8 0 0 0 .583-.25l2.584-2.583a.76.76 0 0 0 .24-.583.84.84 0 0 0-.261-.584.88.88 0 0 0-.584-.24.76.76 0 0 0-.583.24zm0 7.77a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .656 3.25 8.1 8.1 0 0 1-.656 3.25 8.4 8.4 0 0 1-1.781 2.646 8.4 8.4 0 0 1-2.646 1.781 8.1 8.1 0 0 1-3.25.656"
      />
    </svg>
  );
};
export default SvgArrowCircleChevronDownFilled;
