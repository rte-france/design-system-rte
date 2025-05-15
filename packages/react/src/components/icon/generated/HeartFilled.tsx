import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgHeartFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 16.938q-.291 0-.594-.105a1.4 1.4 0 0 1-.531-.333l-1.437-1.312a57 57 0 0 1-3.99-4.01Q1.667 9.186 1.667 6.791q0-1.959 1.312-3.271Q4.291 2.208 6.25 2.208q1.104 0 2.083.47.98.468 1.667 1.28a5 5 0 0 1 1.667-1.28 4.8 4.8 0 0 1 2.083-.47q1.959 0 3.27 1.313 1.314 1.312 1.313 3.27 0 2.397-1.77 4.397a50 50 0 0 1-4.021 4.02L11.125 16.5q-.23.23-.531.333-.303.105-.594.105"
      />
    </svg>
  );
};
export default SvgHeartFilled;
