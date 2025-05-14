import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgAsterisk = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.542 17.5v-4.958L4.25 15.02 2.792 12.5 7.083 10 2.792 7.52 4.25 5l4.292 2.48V2.5h2.916v4.98L15.75 5l1.458 2.52L12.917 10l4.291 2.5-1.458 2.52-4.292-2.478V17.5z"
      />
    </svg>
  );
};
export default SvgAsterisk;
