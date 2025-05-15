import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVolumeDownOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 12.5H5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V8.333q0-.354.24-.593.24-.24.594-.24h2.5l2.75-2.75q.396-.396.906-.177t.51.781v9.292q0 .562-.51.781t-.906-.177zm7.917-2.5q0 .875-.396 1.656-.396.782-1.042 1.281a.41.41 0 0 1-.427.01.38.38 0 0 1-.219-.364V7.375q0-.25.219-.365a.41.41 0 0 1 .427.01 3.9 3.9 0 0 1 1.042 1.313q.396.792.396 1.667M10 7.375 8.208 9.167H5.833v1.666h2.375L10 12.625z"
      />
    </svg>
  );
};
export default SvgVolumeDownOutlined;
