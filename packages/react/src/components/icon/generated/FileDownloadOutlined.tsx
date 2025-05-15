import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFileDownloadOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m14.167 14.333-.75-.75a.8.8 0 0 0-.583-.229.8.8 0 0 0-.584.23.8.8 0 0 0-.229.583q0 .354.23.583l2.166 2.167a.8.8 0 0 0 .583.25.8.8 0 0 0 .584-.25l2.166-2.167a.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.584.8.8 0 0 0-.583-.229.8.8 0 0 0-.584.23l-.75.75v-2.646a.8.8 0 0 0-.24-.594.8.8 0 0 0-.593-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594zm-1.667 4h5q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24h-5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.355.24-.594.24-.24.594-.24M5 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 3.333 15V3.333q0-.687.49-1.177T5 1.666h5.146a1.65 1.65 0 0 1 1.167.48l4.041 4.041q.23.23.355.532t.125.635v1q0 .354-.24.594a.8.8 0 0 1-.594.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V7.5H11.25q-.52 0-.885-.365A1.2 1.2 0 0 1 10 6.25V3.333H5V15h4.167q.354 0 .594.24t.24.593-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgFileDownloadOutlined;
