import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFlashOffFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m12.688 10.313-6.48-6.48a1.2 1.2 0 0 1-.27-.385 1.1 1.1 0 0 1-.084-.427q0-.52.417-.938a1.39 1.39 0 0 1 1.02-.416h5.084q.666 0 1.073.52.405.522.24 1.146L12.5 7.5h.938q.77 0 1.114.667t-.073 1.291l-.52.75a.84.84 0 0 1-.605.354q-.375.042-.666-.25m3.208 7.937-4.438-4.417-1.979 2.855a.626.626 0 0 1-.708.25.58.58 0 0 1-.323-.23.65.65 0 0 1-.115-.375v-4.666H7.5q-.687 0-1.177-.49A1.6 1.6 0 0 1 5.833 10V8.208L1.73 4.104a.78.78 0 0 1-.24-.594.85.85 0 0 1 .261-.593.81.81 0 0 1 .594-.25q.344 0 .594.25l14.145 14.166a.8.8 0 0 1 .25.584.8.8 0 0 1-.25.583.8.8 0 0 1-.593.25.81.81 0 0 1-.594-.25"
      />
    </svg>
  );
};
export default SvgFlashOffFilled;
