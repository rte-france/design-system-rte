import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBoltFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 12.5H4.916a.79.79 0 0 1-.74-.448.77.77 0 0 1 .053-.864l6.23-8.959q.208-.292.54-.406.334-.114.688.01.354.126.521.438t.125.667l-.667 5.395h3.23q.54 0 .76.48.218.479-.135.895l-6.855 8.209q-.228.27-.562.354a.94.94 0 0 1-.646-.063 1.1 1.1 0 0 1-.49-.448 1.03 1.03 0 0 1-.135-.656z"
      />
    </svg>
  );
};
export default SvgBoltFilled;
