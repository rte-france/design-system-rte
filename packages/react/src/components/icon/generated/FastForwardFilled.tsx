import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFastForwardFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M2.083 13.438V6.563a.78.78 0 0 1 .25-.605.84.84 0 0 1 .584-.229q.103 0 .229.021.125.021.229.104l5.167 3.459a.83.83 0 0 1 .28.302.8.8 0 0 1 .095.385.8.8 0 0 1-.094.385.83.83 0 0 1-.281.303l-5.167 3.458a.5.5 0 0 1-.23.104q-.124.02-.228.02a.84.84 0 0 1-.584-.228.78.78 0 0 1-.25-.604m8.334 0V6.563a.78.78 0 0 1 .25-.605.84.84 0 0 1 .583-.229q.105 0 .23.021.124.021.228.104l5.167 3.459a.83.83 0 0 1 .281.302.8.8 0 0 1 .094.385.8.8 0 0 1-.094.385.83.83 0 0 1-.281.303l-5.167 3.458a.5.5 0 0 1-.229.104q-.125.02-.23.02a.84.84 0 0 1-.582-.228.78.78 0 0 1-.25-.604"
      />
    </svg>
  );
};
export default SvgFastForwardFilled;
