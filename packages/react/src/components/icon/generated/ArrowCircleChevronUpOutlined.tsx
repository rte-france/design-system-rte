import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowCircleChevronUpOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m10 9.438 1.98 1.979a.78.78 0 0 0 .572.229q.344 0 .594-.23a.8.8 0 0 0 .25-.593.81.81 0 0 0-.25-.594l-2.563-2.562a.8.8 0 0 0-.583-.25.8.8 0 0 0-.583.25L6.833 10.25a.76.76 0 0 0-.24.583.84.84 0 0 0 .261.584.88.88 0 0 0 .583.24.76.76 0 0 0 .584-.24L10 9.437Zm0-7.771q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .656 3.25 8.1 8.1 0 0 1-.656 3.25 8.4 8.4 0 0 1-1.781 2.646 8.4 8.4 0 0 1-2.646 1.781 8.1 8.1 0 0 1-3.25.656 8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667m0 1.666q-2.792 0-4.73 1.938Q3.334 7.209 3.334 10t1.938 4.73q1.937 1.936 4.729 1.937 2.792 0 4.73-1.938 1.936-1.937 1.937-4.729 0-2.791-1.938-4.73Q12.792 3.334 10 3.334Z"
      />
    </svg>
  );
};
export default SvgArrowCircleChevronUpOutlined;
