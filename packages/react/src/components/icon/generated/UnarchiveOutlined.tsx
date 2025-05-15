import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgUnarchiveOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 14.73q.354 0 .594-.24t.24-.594v-2.667l.75.75a.8.8 0 0 0 .583.23.8.8 0 0 0 .583-.23.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.584l-2.167-2.145a.8.8 0 0 0-.583-.25.8.8 0 0 0-.583.25L7.25 10.813a.8.8 0 0 0-.23.583q0 .354.23.583a.8.8 0 0 0 .583.23.8.8 0 0 0 .584-.23l.75-.75v2.667q0 .354.24.594.239.24.593.24M4.167 6.666v9.166h11.666V6.667zm0 10.833q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V5.438q0-.292.094-.563.093-.27.281-.5l1.042-1.27q.228-.293.573-.449.343-.156.718-.156h9.584q.376 0 .718.156.344.157.573.448l1.042 1.271q.188.23.281.5t.094.563v10.395q0 .688-.49 1.177-.489.49-1.177.49zM4.5 5h11l-.708-.833H5.208z"
      />
    </svg>
  );
};
export default SvgUnarchiveOutlined;
