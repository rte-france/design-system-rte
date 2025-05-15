import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgKeepOffFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M11.917 9.563 6.042 3.686a.7.7 0 0 1-.157-.229.65.65 0 0 1-.052-.25q0-.27.188-.49a.63.63 0 0 1 .5-.218h6.812q.354 0 .594.24t.24.593q0 .334-.302.47-.303.134-.532.364v4.791q0 .563-.51.782-.51.218-.906-.178m-2.75 8.77v-5h-3q-.521 0-.834-.364a1.23 1.23 0 0 1-.312-.823q0-.23.094-.459.093-.228.302-.437L6.667 10v-.958L1.75 4.083a.81.81 0 0 1-.24-.573.78.78 0 0 1 .24-.593.8.8 0 0 1 .583-.23.8.8 0 0 1 .584.23l14.146 14.146a.78.78 0 0 1 .24.593.85.85 0 0 1-.845.834.76.76 0 0 1-.583-.24l-4.917-4.917h-.125v5q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594"
      />
    </svg>
  );
};
export default SvgKeepOffFilled;
