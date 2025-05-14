import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowCircleChevronRightOutlined = ({
  width = 20,
  height = 20,
  fill = 'currentColor',
  ...props
}: IconProps) => {
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
        d="m10.563 10-1.98 1.98a.78.78 0 0 0-.229.572q0 .344.23.594.25.25.593.25.344 0 .594-.25l2.562-2.563a.8.8 0 0 0 .25-.583.8.8 0 0 0-.25-.583L9.75 6.833a.76.76 0 0 0-.583-.24.84.84 0 0 0-.584.261.88.88 0 0 0-.24.584.76.76 0 0 0 .24.583zm7.77 0a8.1 8.1 0 0 1-.656 3.25 8.4 8.4 0 0 1-1.781 2.646 8.4 8.4 0 0 1-2.646 1.781 8.1 8.1 0 0 1-3.25.656 8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .656 3.25m-1.666 0q0-2.791-1.938-4.73Q12.792 3.334 10 3.334T5.27 5.272Q3.334 7.208 3.334 10t1.938 4.73q1.938 1.936 4.729 1.937 2.792 0 4.73-1.938 1.936-1.937 1.937-4.729Z"
      />
    </svg>
  );
};
export default SvgArrowCircleChevronRightOutlined;
