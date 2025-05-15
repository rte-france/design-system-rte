import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFireFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.334 11.667q0-2.355 1.395-4.521t3.834-3.792q.457-.312.948-.031t.49.844V5.25q0 .708.489 1.188.489.479 1.198.479.354 0 .677-.157.322-.156.573-.447a.7.7 0 0 1 .427-.26.6.6 0 0 1 .49.114 6.6 6.6 0 0 1 2.062 2.396q.75 1.457.75 3.104 0 1.833-.896 3.343a6.74 6.74 0 0 1-2.354 2.386q.354-.5.552-1.094t.198-1.26q0-.834-.313-1.573a4.1 4.1 0 0 0-.895-1.323L10 9.25l-2.937 2.896a4.25 4.25 0 0 0-.917 1.333 3.9 3.9 0 0 0-.312 1.563q0 .666.197 1.26.198.594.553 1.094a6.74 6.74 0 0 1-2.355-2.386q-.896-1.51-.896-3.343M10 11.583l1.771 1.73q.354.354.542.791.187.438.187.938 0 1.02-.729 1.74a2.43 2.43 0 0 1-1.77.718q-1.043 0-1.772-.719a2.35 2.35 0 0 1-.729-1.74q0-.479.188-.926.187-.448.541-.803z"
      />
    </svg>
  );
};
export default SvgFireFilled;
