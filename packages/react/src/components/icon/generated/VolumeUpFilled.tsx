import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVolumeUpFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M15.833 9.98a5.7 5.7 0 0 0-.916-3.157 5.7 5.7 0 0 0-2.459-2.135A.93.93 0 0 1 12 4.24a.8.8 0 0 1-.042-.615.82.82 0 0 1 .448-.48.78.78 0 0 1 .656 0 7.34 7.34 0 0 1 3.23 2.74Q17.5 7.73 17.5 9.98t-1.208 4.094a7.34 7.34 0 0 1-3.23 2.74.78.78 0 0 1-.656 0 .82.82 0 0 1-.448-.48.8.8 0 0 1 .042-.614.93.93 0 0 1 .458-.448 5.7 5.7 0 0 0 2.459-2.136 5.7 5.7 0 0 0 .916-3.156m-10 2.52h-2.5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593V8.333q0-.354.24-.593.24-.24.593-.24h2.5l2.75-2.75q.396-.396.907-.177.51.219.51.781v9.292q0 .562-.51.781t-.907-.177zM13.75 10q0 .875-.396 1.656-.395.781-1.041 1.281a.41.41 0 0 1-.428.01.38.38 0 0 1-.218-.364V7.375q0-.25.218-.365a.41.41 0 0 1 .428.01 3.9 3.9 0 0 1 1.041 1.313q.396.792.396 1.667"
      />
    </svg>
  );
};
export default SvgVolumeUpFilled;
