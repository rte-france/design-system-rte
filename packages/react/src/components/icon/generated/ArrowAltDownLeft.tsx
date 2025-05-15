import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAltDownLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m5.833 13 9.084-9.083a.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23.8.8 0 0 1 .23.583.8.8 0 0 1-.23.583L7 14.167h4.667q.354 0 .593.24.24.239.24.593t-.24.594a.8.8 0 0 1-.593.24H5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V8.333q0-.354.24-.593.24-.24.594-.24t.594.24.24.593z"
      />
    </svg>
  );
};
export default SvgArrowAltDownLeft;
