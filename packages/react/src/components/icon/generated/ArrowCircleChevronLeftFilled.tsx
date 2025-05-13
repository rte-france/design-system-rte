import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowCircleChevronLeftFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m9.438 10 1.979-1.98a.78.78 0 0 0 .229-.572.85.85 0 0 0-.23-.594.8.8 0 0 0-.593-.25.81.81 0 0 0-.594.25L7.667 9.417a.8.8 0 0 0-.25.583.8.8 0 0 0 .25.583l2.583 2.584a.76.76 0 0 0 .583.24.84.84 0 0 0 .584-.261.88.88 0 0 0 .24-.584.76.76 0 0 0-.24-.583L9.437 10Zm-7.771 0q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .656 3.25 8.1 8.1 0 0 1-.656 3.25 8.4 8.4 0 0 1-1.781 2.646 8.4 8.4 0 0 1-2.646 1.781 8.1 8.1 0 0 1-3.25.656 8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10"
      />
    </svg>
  );
};
export default SvgArrowCircleChevronLeftFilled;
