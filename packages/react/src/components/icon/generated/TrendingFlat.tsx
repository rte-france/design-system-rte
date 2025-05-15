import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgTrendingFlat = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M15.146 10.833H3.333a.8.8 0 0 1-.593-.24A.8.8 0 0 1 2.5 10q0-.354.24-.594t.593-.24h11.813L14 8a.76.76 0 0 1-.24-.583.84.84 0 0 1 .26-.584.9.9 0 0 1 .595-.24q.344-.009.572.24l2.563 2.584A.8.8 0 0 1 18 10a.8.8 0 0 1-.25.583l-2.583 2.584a.78.78 0 0 1-.573.229.85.85 0 0 1-.594-.23.8.8 0 0 1-.25-.593.8.8 0 0 1 .25-.594z"
      />
    </svg>
  );
};
export default SvgTrendingFlat;
