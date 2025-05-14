import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFirstPage = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 15a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593V5.833q0-.354.24-.593.24-.24.593-.24c.353 0 .434.08.594.24q.24.24.24.593v8.334q0 .354-.24.593a.8.8 0 0 1-.594.24m5.667-5 3.25 3.25a.8.8 0 0 1 .23.583.8.8 0 0 1-.23.584.8.8 0 0 1-.583.229.8.8 0 0 1-.584-.23L9.75 10.584a.7.7 0 0 1-.177-.27A.9.9 0 0 1 9.52 10q0-.166.052-.313a.7.7 0 0 1 .177-.27l3.833-3.834a.8.8 0 0 1 .584-.229.8.8 0 0 1 .583.23.8.8 0 0 1 .23.583.8.8 0 0 1-.23.583z"
      />
    </svg>
  );
};
export default SvgFirstPage;
