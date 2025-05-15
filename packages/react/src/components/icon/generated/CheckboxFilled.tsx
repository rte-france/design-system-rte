import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCheckboxFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.833 11.167 7.042 9.375a.8.8 0 0 0-.584-.23.8.8 0 0 0-.583.23.8.8 0 0 0-.23.583q0 .354.23.584l2.375 2.375a.8.8 0 0 0 .583.25.8.8 0 0 0 .584-.25l4.708-4.709a.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.583.8.8 0 0 0-.583-.23.8.8 0 0 0-.584.23zM4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h11.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49z"
      />
    </svg>
  );
};
export default SvgCheckboxFilled;
