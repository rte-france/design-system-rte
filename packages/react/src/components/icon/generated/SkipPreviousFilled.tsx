import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgSkipPreviousFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.583 14.167V5.833q0-.354.24-.593.24-.24.594-.24t.593.24.24.593v8.334q0 .354-.24.593a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593m9.542-.021-5.167-3.459a.83.83 0 0 1-.281-.302.8.8 0 0 1-.094-.385q0-.208.094-.385a.83.83 0 0 1 .281-.303l5.167-3.458a.5.5 0 0 1 .23-.104q.124-.02.228-.02.334 0 .584.228a.78.78 0 0 1 .25.604v6.876a.78.78 0 0 1-.25.604.84.84 0 0 1-.584.229 1.4 1.4 0 0 1-.229-.021.5.5 0 0 1-.23-.104"
      />
    </svg>
  );
};
export default SvgSkipPreviousFilled;
