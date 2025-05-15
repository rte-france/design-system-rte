import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgForward = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m15.98 9.167-3.23-3.23a.8.8 0 0 1-.25-.593q0-.344.25-.594a.85.85 0 0 1 .594-.23q.343 0 .573.23l3.833 3.833a.7.7 0 0 1 .177.271.9.9 0 0 1 .052.313.9.9 0 0 1-.052.312.7.7 0 0 1-.177.271l-3.833 3.833a.76.76 0 0 1-.584.24.88.88 0 0 1-.583-.24.84.84 0 0 1-.26-.583.76.76 0 0 1 .24-.583zm-5 .833H5.832a2.4 2.4 0 0 0-1.77.73 2.4 2.4 0 0 0-.73 1.77V15q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-2.5q0-1.729 1.22-2.948t2.947-1.219h5.146L8.583 5.937a.8.8 0 0 1-.25-.593q0-.344.25-.594a.85.85 0 0 1 .594-.23q.344 0 .573.23l3.833 3.833a.7.7 0 0 1 .178.271.9.9 0 0 1 .052.313.9.9 0 0 1-.053.312.7.7 0 0 1-.177.271L9.75 13.583a.76.76 0 0 1-.583.24.88.88 0 0 1-.584-.24.84.84 0 0 1-.26-.583.76.76 0 0 1 .24-.583z"
      />
    </svg>
  );
};
export default SvgForward;
