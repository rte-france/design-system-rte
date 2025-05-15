import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgImageGalleryOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m11.042 10.417-.959-1.25A.4.4 0 0 0 9.75 9a.4.4 0 0 0-.333.167L8.02 11q-.167.209-.052.438.114.228.385.229h6.625q.271 0 .386-.23.114-.228-.053-.437l-2.02-2.646a.4.4 0 0 0-.334-.166.4.4 0 0 0-.333.166zM6.667 15q-.688 0-1.177-.49A1.6 1.6 0 0 1 5 13.333v-10q0-.687.49-1.177.489-.49 1.177-.49h10q.687 0 1.177.49t.49 1.177v10q0 .688-.49 1.177t-1.177.49zm0-1.667h10v-10h-10zm-3.334 5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V5.833q0-.354.24-.593Q2.146 5 2.5 5t.594.24.24.593v10.834h10.833q.354 0 .593.24.24.239.24.593t-.24.594a.8.8 0 0 1-.593.24z"
      />
    </svg>
  );
};
export default SvgImageGalleryOutlined;
