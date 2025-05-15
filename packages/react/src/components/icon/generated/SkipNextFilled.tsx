import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgSkipNextFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.75 14.167V5.833q0-.354.24-.593.24-.24.593-.24.354 0 .594.24t.24.593v8.334q0 .354-.24.593a.8.8 0 0 1-.594.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593m-9.167-.73V6.564a.78.78 0 0 1 .25-.605.84.84 0 0 1 .584-.229q.103 0 .229.021.125.021.229.104l5.167 3.459a.83.83 0 0 1 .28.302.8.8 0 0 1 .095.385.8.8 0 0 1-.094.385.83.83 0 0 1-.281.303l-5.167 3.458a.5.5 0 0 1-.23.104q-.125.02-.228.02a.84.84 0 0 1-.584-.228.78.78 0 0 1-.25-.604"
      />
    </svg>
  );
};
export default SvgSkipNextFilled;
