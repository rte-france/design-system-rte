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
        d="M8.542 16.042v-3.5L5.5 14.292a1.46 1.46 0 0 1-1.104.146 1.32 1.32 0 0 1-.875-.688 1.46 1.46 0 0 1-.146-1.104q.146-.584.667-.875L7.083 10 4.042 8.25a1.34 1.34 0 0 1-.667-.885 1.48 1.48 0 0 1 .146-1.115q.291-.521.875-.667A1.46 1.46 0 0 1 5.5 5.73l3.042 1.75V3.96q0-.604.427-1.032A1.4 1.4 0 0 1 10 2.5q.605 0 1.031.427.427.428.427 1.031V7.48L14.5 5.73a1.46 1.46 0 0 1 1.104-.146q.584.147.875.667t.136 1.115q-.157.592-.677.885L12.917 10l3.041 1.77q.522.292.667.876a1.52 1.52 0 0 1-.146 1.125q-.291.521-.875.666a1.46 1.46 0 0 1-1.104-.145l-3.042-1.75v3.5q0 .603-.427 1.03A1.4 1.4 0 0 1 10 17.5q-.604 0-1.031-.427a1.4 1.4 0 0 1-.427-1.031"
      />
    </svg>
  );
};
export default SvgAsterisk;
