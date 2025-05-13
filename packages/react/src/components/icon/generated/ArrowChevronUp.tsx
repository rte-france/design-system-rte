import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowChevronUp = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m10 9-3.25 3.25a.8.8 0 0 1-.583.23.8.8 0 0 1-.584-.23.8.8 0 0 1-.229-.583.8.8 0 0 1 .23-.584L9.416 7.25A.8.8 0 0 1 10 7a.8.8 0 0 1 .583.25l3.834 3.833a.8.8 0 0 1 .229.584.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23z"
      />
    </svg>
  );
};
export default SvgArrowChevronUp;
