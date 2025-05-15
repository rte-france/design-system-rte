import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPowerPlugConnectOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M2.5 13.333v-2.5h-.833a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H2.5v-2.5q0-1.041.73-1.77A2.4 2.4 0 0 1 5 4.166h.833q0-.353.24-.593t.594-.24q.354 0 .594.24t.24.594v11.666q0 .354-.24.594a.8.8 0 0 1-.594.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594H5a2.4 2.4 0 0 1-1.77-.729 2.4 2.4 0 0 1-.73-1.77m2.5.834h.833V5.833H5a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594v6.666q0 .354.24.594t.594.24m12.5-.834a2.4 2.4 0 0 1-.729 1.771 2.4 2.4 0 0 1-1.77.73h-.834q0 .353-.24.593a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-2.5H10a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h2.5V8.334H10a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h2.5v-2.5q0-.353.24-.593t.594-.24q.354 0 .593.24.24.24.24.594H15a2.4 2.4 0 0 1 1.771.729q.73.729.73 1.77v2.5h.832q.355 0 .594.24.24.24.24.594t-.24.594a.8.8 0 0 1-.593.24H17.5zm-3.333.834H15q.354 0 .594-.24t.24-.594V6.667a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24h-.833z"
      />
    </svg>
  );
};
export default SvgPowerPlugConnectOutlined;
