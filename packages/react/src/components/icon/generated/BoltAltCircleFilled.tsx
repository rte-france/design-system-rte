import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBoltAltCircleFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m9.812 15.896 3.459-6.75a.39.39 0 0 0-.021-.406.4.4 0 0 0-.354-.198h-2.23V4.188q0-.168-.156-.198-.156-.031-.24.114l-3.458 6.75a.39.39 0 0 0 .021.406.4.4 0 0 0 .354.198h2.23v4.355q0 .166.156.197t.24-.114M10 18.333a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.78 2.646 8.1 8.1 0 0 1 .657 3.25 8.1 8.1 0 0 1-.656 3.25 8.4 8.4 0 0 1-1.781 2.646 8.4 8.4 0 0 1-2.646 1.781 8.1 8.1 0 0 1-3.25.656"
      />
    </svg>
  );
};
export default SvgBoltAltCircleFilled;
