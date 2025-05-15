import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVolumeMuteFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 12.5h-2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V8.333q0-.354.24-.593.24-.24.594-.24h2.5l2.75-2.75q.396-.396.906-.177t.51.781v9.292q0 .562-.51.781t-.906-.177z"
      />
    </svg>
  );
};
export default SvgVolumeMuteFilled;
