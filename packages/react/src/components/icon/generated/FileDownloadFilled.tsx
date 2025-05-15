import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFileDownloadFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M14.417 16.917 12.25 14.75a.8.8 0 0 1-.229-.583.8.8 0 0 1 .23-.584.8.8 0 0 1 .583-.229.8.8 0 0 1 .583.23l.75.75v-2.646q0-.355.24-.594.24-.24.593-.24.354 0 .594.24t.24.594v2.645l.75-.75a.8.8 0 0 1 .583-.229.8.8 0 0 1 .583.23.8.8 0 0 1 .23.583.8.8 0 0 1-.23.583l-2.166 2.167a.8.8 0 0 1-.584.25.8.8 0 0 1-.583-.25M12.5 20a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.355.24-.594.24-.24.594-.24h5q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24zM5 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 3.333 15V3.333q0-.687.49-1.177T5 1.666h5.146a1.65 1.65 0 0 1 1.167.48l4.041 4.041q.23.23.355.532t.125.635v1q0 .354-.24.594a.8.8 0 0 1-.594.24h-3.333q-.687 0-1.177.489-.49.49-.49 1.177v4.98q0 .353-.24.593a.8.8 0 0 1-.593.24zM11.25 7.5h2.917L10 3.333V6.25q0 .52.365.885t.885.365"
      />
    </svg>
  );
};
export default SvgFileDownloadFilled;
