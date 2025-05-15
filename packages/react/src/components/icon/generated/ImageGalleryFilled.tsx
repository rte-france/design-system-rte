import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgImageGalleryFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 11.667h8.333l-2.875-3.75-1.916 2.5L9.75 8.75zM6.667 15q-.688 0-1.177-.49A1.6 1.6 0 0 1 5 13.333v-10q0-.687.49-1.177.489-.49 1.177-.49h10q.687 0 1.177.49t.49 1.177v10q0 .688-.49 1.177t-1.177.49zm0-1.667h10v-10h-10zm-3.334 5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V5h1.667v11.667H15v1.666zm3.334-15h10v10h-10z"
      />
    </svg>
  );
};
export default SvgImageGalleryFilled;
