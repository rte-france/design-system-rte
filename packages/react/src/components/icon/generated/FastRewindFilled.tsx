import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFastRewindFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m16.625 14.146-5.167-3.459a.83.83 0 0 1-.28-.302.8.8 0 0 1-.095-.385q0-.208.094-.385a.83.83 0 0 1 .281-.302l5.167-3.459a.5.5 0 0 1 .23-.104q.124-.02.228-.02.334 0 .584.228a.78.78 0 0 1 .25.605v6.875q0 .374-.25.604a.84.84 0 0 1-.584.229q-.104 0-.229-.021a.5.5 0 0 1-.229-.104m-8.333 0-5.167-3.459a.83.83 0 0 1-.281-.302A.8.8 0 0 1 2.75 10q0-.208.094-.385a.83.83 0 0 1 .281-.302l5.167-3.459a.5.5 0 0 1 .229-.104q.125-.02.229-.02.333 0 .583.228a.78.78 0 0 1 .25.605v6.875a.78.78 0 0 1-.25.604.84.84 0 0 1-.583.229q-.105 0-.23-.021a.5.5 0 0 1-.228-.104"
      />
    </svg>
  );
};
export default SvgFastRewindFilled;
