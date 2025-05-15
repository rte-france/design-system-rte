import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChatUnreadFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M15.833 5a2.4 2.4 0 0 1-1.77-.73 2.4 2.4 0 0 1-.73-1.77q0-1.042.73-1.77a2.4 2.4 0 0 1 1.77-.73 2.4 2.4 0 0 1 1.771.73 2.4 2.4 0 0 1 .73 1.77 2.4 2.4 0 0 1-.73 1.77 2.4 2.4 0 0 1-1.77.73M5 15l-1.917 1.917q-.395.396-.906.177-.51-.22-.51-.782V3.334q0-.687.49-1.177.489-.49 1.176-.49h7.584q.333 0 .552.25a.78.78 0 0 1 .198.584q0 .938.406 1.77.406.834 1.135 1.438a4.5 4.5 0 0 0 1.22.698q.676.26 1.405.26.375 0 .75-.062a3.4 3.4 0 0 0 .73-.208.75.75 0 0 1 .687.042q.333.187.333.541v6.354q0 .688-.49 1.177-.489.49-1.176.49z"
      />
    </svg>
  );
};
export default SvgChatUnreadFilled;
