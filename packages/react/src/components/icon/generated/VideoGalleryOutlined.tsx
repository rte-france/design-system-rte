import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVideoGalleryOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M14.604 8.854a.59.59 0 0 0 .292-.52.59.59 0 0 0-.292-.521l-4.062-2.605a.57.57 0 0 0-.636-.03.59.59 0 0 0-.323.551v5.209q0 .374.323.552a.57.57 0 0 0 .636-.032zM6.667 15q-.688 0-1.177-.49A1.6 1.6 0 0 1 5 13.333v-10q0-.687.49-1.177.489-.49 1.177-.49h10q.687 0 1.177.49t.49 1.177v10q0 .688-.49 1.177t-1.177.49zm0-1.667h10v-10h-10zm-3.334 5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V5.833q0-.354.24-.593Q2.146 5 2.5 5t.594.24.24.593v10.834h10.833q.354 0 .593.24.24.239.24.593t-.24.594a.8.8 0 0 1-.593.24z"
      />
    </svg>
  );
};
export default SvgVideoGalleryOutlined;
