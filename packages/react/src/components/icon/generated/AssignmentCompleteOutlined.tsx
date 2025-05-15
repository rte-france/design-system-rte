import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgAssignmentCompleteOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.833 11.042 7.042 9.25a.8.8 0 0 0-.584-.23.8.8 0 0 0-.583.23.8.8 0 0 0-.23.583q0 .354.23.584l2.375 2.375a.8.8 0 0 0 .583.25.8.8 0 0 0 .584-.25l4.708-4.709a.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.583.8.8 0 0 0-.583-.23.8.8 0 0 0-.584.23zM4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h3.5q.27-.75.906-1.208A2.38 2.38 0 0 1 10 .833a2.38 2.38 0 0 1 1.427.459q.636.458.906 1.208h3.5q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.178-.489.489-1.177.489zm0-1.667h11.666V4.167H4.167zM10 3.542a.607.607 0 0 0 .625-.625.607.607 0 0 0-.625-.625.607.607 0 0 0-.625.625.607.607 0 0 0 .625.625"
      />
    </svg>
  );
};
export default SvgAssignmentCompleteOutlined;
