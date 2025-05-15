import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgRightPanelCloseFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.25 12.333q0 .292.25.396t.458-.104L9 10.583A.8.8 0 0 0 9.25 10 .8.8 0 0 0 9 9.417L6.958 7.375q-.208-.209-.458-.104-.25.104-.25.396zM4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h11.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zm7.5-1.667V4.167h-7.5v11.666z"
      />
    </svg>
  );
};
export default SvgRightPanelCloseFilled;
