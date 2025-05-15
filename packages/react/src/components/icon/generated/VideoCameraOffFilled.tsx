import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVideoCameraOffFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m15 8.75 2.625-2.625q.209-.209.458-.104.25.104.25.396v7.166q0 .292-.25.396t-.458-.104l-2.77-2.77a.87.87 0 0 1-.595.353.74.74 0 0 1-.677-.229L7.104 4.75a.77.77 0 0 1-.24-.437.8.8 0 0 1 .073-.459 1 1 0 0 1 .292-.375.76.76 0 0 1 .48-.146h5.624q.687 0 1.177.49T15 5zm1.542 10.125L1.125 3.458a.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .584.23l15.416 15.416a.8.8 0 0 1 .23.584.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23M3.333 3.333 15 15q0 .687-.49 1.177-.489.49-1.177.49h-10q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177t1.177-.49"
      />
    </svg>
  );
};
export default SvgVideoCameraOffFilled;
