import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgMapOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M11.958 17.313 7.5 15.75l-3.875 1.5a.76.76 0 0 1-.406.052 1 1 0 0 1-.365-.135.7.7 0 0 1-.26-.282.86.86 0 0 1-.094-.406V4.792q0-.27.156-.48A.94.94 0 0 1 3.083 4l3.875-1.312q.126-.043.26-.063a1.85 1.85 0 0 1 .824.063L12.5 4.25l3.875-1.5a.76.76 0 0 1 .406-.052q.198.03.365.135t.26.282a.85.85 0 0 1 .094.406v11.687q0 .27-.156.48a.94.94 0 0 1-.427.312l-3.875 1.313q-.126.04-.26.062a1.85 1.85 0 0 1-.824-.062m-.291-1.855v-9.75L8.333 4.542v9.75zm1.666 0 2.5-.833V4.75l-2.5.958zm-9.166-.208 2.5-.958v-9.75l-2.5.833z"
      />
    </svg>
  );
};
export default SvgMapOutlined;
