import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVideoCameraOffOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m15 8.75 2.625-2.625q.209-.209.458-.104.25.104.25.396v7.166q0 .292-.25.396t-.458-.104L15 11.25q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V5H7.5q-.417 0-.625-.26a.9.9 0 0 1-.208-.573q0-.313.208-.573t.625-.26h5.833q.688 0 1.178.489Q15 4.313 15 5zm1.542 10.125L1.125 3.458a.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .584.23l15.416 15.416a.8.8 0 0 1 .23.584.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23M3.333 3.333 5 5H3.333v10h10v-1.667L15 15q0 .687-.49 1.177-.489.49-1.177.49h-10q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177t1.177-.49"
      />
    </svg>
  );
};
export default SvgVideoCameraOffOutlined;
