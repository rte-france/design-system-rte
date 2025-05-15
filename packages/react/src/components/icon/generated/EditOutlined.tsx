import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgEditOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 15.833h1.187L13.5 7.688 12.313 6.5l-8.146 8.146zM3.333 17.5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593v-2.021a1.65 1.65 0 0 1 .48-1.167L13.5 2.98q.25-.229.552-.354t.636-.125.645.125q.314.125.542.375l1.146 1.167q.25.229.364.541a1.8 1.8 0 0 1 0 1.26 1.6 1.6 0 0 1-.364.553l-10.5 10.5q-.23.229-.531.354a1.65 1.65 0 0 1-.636.125zm9.563-10.396-.584-.604L13.5 7.688z"
      />
    </svg>
  );
};
export default SvgEditOutlined;
