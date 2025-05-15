import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m6.52 10.833 4.084 4.084a.76.76 0 0 1 .24.583.84.84 0 0 1-.26.583.88.88 0 0 1-.584.24.76.76 0 0 1-.583-.24l-5.5-5.5a.7.7 0 0 1-.177-.27.9.9 0 0 1-.053-.313q0-.166.053-.312a.7.7 0 0 1 .177-.271l5.5-5.5a.78.78 0 0 1 .573-.23q.344 0 .593.23.25.25.25.593 0 .345-.25.594L6.521 9.167h9.312q.354 0 .594.24.24.239.24.593t-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgArrowLeft;
