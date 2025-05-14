import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPlayPause = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.48 12.583a.77.77 0 0 1-.865.052.79.79 0 0 1-.448-.74v-3.79q0-.5.448-.74a.77.77 0 0 1 .864.052l2.708 1.896a.8.8 0 0 1 .355.687q0 .437-.355.688zm6.187.75a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593v-5q0-.354.24-.594t.594-.24.593.24.24.594v5q0 .354-.24.594a.8.8 0 0 1-.593.24Zm3.333 0a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593v-5q0-.354.24-.594t.594-.24c.354 0 .434.08.594.24q.24.24.24.594v5q0 .354-.24.594a.8.8 0 0 1-.594.24Z"
      />
    </svg>
  );
};
export default SvgPlayPause;
