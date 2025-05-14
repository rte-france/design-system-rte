import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAltDownRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13 14.167 3.917 5.083a.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23L14.167 13V8.333q0-.354.24-.593.239-.24.593-.24c.354 0 .434.08.594.24q.24.24.24.593V15q0 .354-.24.594a.8.8 0 0 1-.594.24H8.333a.8.8 0 0 1-.593-.24A.8.8 0 0 1 7.5 15q0-.354.24-.594t.593-.24z"
      />
    </svg>
  );
};
export default SvgArrowAltDownRight;
