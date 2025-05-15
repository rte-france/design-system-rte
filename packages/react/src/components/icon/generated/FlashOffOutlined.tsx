import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFlashOffOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.687 3.333 12.5 7.5h.937q.75 0 1.115.667t-.073 1.291l-.52.75a.84.84 0 0 1-.605.354q-.375.042-.667-.25a.8.8 0 0 1-.24-.5.8.8 0 0 1 .136-.541l.083-.104h-1.27a.8.8 0 0 1-.667-.323.82.82 0 0 1-.146-.74l1.375-4.77H6.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.594t.593-.24h5.709q.666 0 1.073.522.405.52.24 1.145m2.209 14.917-4.438-4.417-1.979 2.855a.61.61 0 0 1-.708.25.66.66 0 0 1-.313-.22.6.6 0 0 1-.125-.385v-4.666H7.5q-.687 0-1.177-.49A1.6 1.6 0 0 1 5.833 10V8.208L1.73 4.104a.81.81 0 0 1-.25-.594q0-.344.25-.593a.81.81 0 0 1 .594-.25q.343 0 .594.25l14.166 14.166a.8.8 0 0 1 .25.584.8.8 0 0 1-.25.583.81.81 0 0 1-.594.25.8.8 0 0 1-.593-.25"
      />
    </svg>
  );
};
export default SvgFlashOffOutlined;
