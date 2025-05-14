import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowCircleLeftFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.833 10.833H12.5q.354 0 .594-.24a.8.8 0 0 0 .24-.593.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24H9.833l.75-.75a.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.583.8.8 0 0 0-.583-.23.8.8 0 0 0-.583.23L7.25 9.417A.8.8 0 0 0 7 10a.8.8 0 0 0 .25.583l2.167 2.167a.8.8 0 0 0 .583.23.8.8 0 0 0 .583-.23.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.584zm.167 7.5a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .656 3.25 8.1 8.1 0 0 1-.656 3.25 8.4 8.4 0 0 1-1.781 2.646 8.4 8.4 0 0 1-2.646 1.781 8.1 8.1 0 0 1-3.25.656"
      />
    </svg>
  );
};
export default SvgArrowCircleLeftFilled;
