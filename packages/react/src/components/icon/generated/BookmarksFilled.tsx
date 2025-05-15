import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBookmarksFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.333 15.833 4.542 17.73a.79.79 0 0 1-.813-.031q-.396-.24-.396-.719V6.667q0-.688.49-1.177T5 5h6.667q.687 0 1.177.49.49.489.49 1.177v10.312q0 .48-.396.719a.79.79 0 0 1-.813.031zm7.5-.833a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593V3.333H6.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H15q.687 0 1.177.49t.49 1.177v10.834q0 .354-.24.593a.8.8 0 0 1-.594.24"
      />
    </svg>
  );
};
export default SvgBookmarksFilled;
