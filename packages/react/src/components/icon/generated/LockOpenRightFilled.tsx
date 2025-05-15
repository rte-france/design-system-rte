import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLockOpenRightFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 14.167q.687 0 1.177-.49t.49-1.177-.49-1.177a1.6 1.6 0 0 0-1.177-.49q-.687 0-1.177.49t-.49 1.177.49 1.177 1.177.49m-5 4.166q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V8.333q0-.687.49-1.177T5 6.666h5.833V5q0-1.729 1.22-2.948Q13.27.834 15 .833q1.563 0 2.719 1.01t1.385 2.49q.041.27-.187.47a.86.86 0 0 1-.584.197q-.354 0-.583-.146-.23-.146-.333-.479a2.65 2.65 0 0 0-.886-1.333A2.33 2.33 0 0 0 15 2.5q-1.042 0-1.77.73A2.4 2.4 0 0 0 12.5 5v1.667H15q.687 0 1.177.49.49.489.49 1.176v8.334q0 .687-.49 1.177t-1.177.49z"
      />
    </svg>
  );
};
export default SvgLockOpenRightFilled;
