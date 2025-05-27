import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChartAreaOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...props}
    >
      <path
        d="M11.375 3.60417L14.1667 5.83334H15.8333C16.2917 5.83334 16.684 5.99653 17.0104 6.32292C17.3368 6.64931 17.5 7.04167 17.5 7.5V16.6667H2.5V7.5C2.5 7.15278 2.65278 6.90278 2.95833 6.75C3.26389 6.59722 3.55556 6.625 3.83333 6.83334L5.83333 8.33334L8.97917 3.9375C9.25694 3.54861 9.63194 3.31945 10.1042 3.25C10.5764 3.18056 11 3.29861 11.375 3.60417ZM4.16667 9.16667V12.1667L6.66667 14.1667L10 9.58334L15.8333 14.125V7.5H13.5833L10.3333 4.89584L6.20833 10.6875L4.16667 9.16667Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgChartAreaOutlined;
