import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgImageBrokenOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h11.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zM5 10.48l2.75-2.75a.8.8 0 0 1 .583-.25.8.8 0 0 1 .584.25l2.75 2.75 2.75-2.75A.8.8 0 0 1 15 7.48a.8.8 0 0 1 .583.25l.25.25V4.166H4.167v5.479zm-.833 5.353h11.666v-5.5L15 9.5l-2.75 2.75a.8.8 0 0 1-.583.25.8.8 0 0 1-.584-.25L8.333 9.5l-2.75 2.75A.8.8 0 0 1 5 12.5a.8.8 0 0 1-.583-.25l-.25-.25zm0 0v-5.5V12 4.167z"
      />
    </svg>
  );
};
export default SvgImageBrokenOutlined;
