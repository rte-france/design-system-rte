import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgReload = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 16.667q-2.791 0-4.73-1.938Q3.335 12.792 3.334 10q0-2.791 1.938-4.73Q7.209 3.335 10 3.334q1.437 0 2.75.594A6.35 6.35 0 0 1 15 5.625V4.167q0-.354.24-.594t.593-.24.594.24.24.594v4.166q0 .354-.24.594a.8.8 0 0 1-.594.24h-4.166a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.594-.24h2.666a4.86 4.86 0 0 0-1.822-1.833A4.94 4.94 0 0 0 10 5Q7.916 5 6.458 6.458 5 7.917 5 10q0 2.084 1.458 3.542Q7.917 15 10 15q1.417 0 2.594-.719a4.96 4.96 0 0 0 1.823-1.927.9.9 0 0 1 .469-.406.9.9 0 0 1 .614-.01q.333.104.48.437.145.333-.022.625a6.73 6.73 0 0 1-2.437 2.667q-1.584 1-3.521 1"
      />
    </svg>
  );
};
export default SvgReload;
