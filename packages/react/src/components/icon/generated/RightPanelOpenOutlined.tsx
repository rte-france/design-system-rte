import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgRightPanelOpenOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.583 12.333V7.667q0-.293-.25-.396-.25-.105-.458.104L6.833 9.417a.8.8 0 0 0-.25.583.8.8 0 0 0 .25.583l2.042 2.042q.209.209.458.104.25-.104.25-.396M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h11.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zm9.166-1.667h2.5V4.167h-2.5zm-1.666 0V4.167h-7.5v11.666z"
      />
    </svg>
  );
};
export default SvgRightPanelOpenOutlined;
