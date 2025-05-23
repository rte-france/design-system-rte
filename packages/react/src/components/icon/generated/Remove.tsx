import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgRemove = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...props}
    >
      <path
        d="M4.99999 10.8334C4.76388 10.8334 4.56596 10.7535 4.40624 10.5938C4.24652 10.434 4.16666 10.2361 4.16666 10C4.16666 9.76391 4.24652 9.56599 4.40624 9.40627C4.56596 9.24655 4.76388 9.16669 4.99999 9.16669H15C15.2361 9.16669 15.434 9.24655 15.5937 9.40627C15.7535 9.56599 15.8333 9.76391 15.8333 10C15.8333 10.2361 15.7535 10.434 15.5937 10.5938C15.434 10.7535 15.2361 10.8334 15 10.8334H4.99999Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgRemove;
