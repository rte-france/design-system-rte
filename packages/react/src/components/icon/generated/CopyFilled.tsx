import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCopyFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 15q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177v-10q0-.687.49-1.177t1.177-.49H15q.687 0 1.177.49t.49 1.177v10q0 .688-.49 1.177T15 15zm-3.333 3.333q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V5.833q0-.354.24-.593.24-.24.593-.24.354 0 .594.24t.24.593v10.834H12.5q.354 0 .594.24.24.239.24.593t-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgCopyFilled;
