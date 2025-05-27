import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowDownRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13 13.3333L5.58331 5.91665C5.43054 5.76387 5.35415 5.56942 5.35415 5.33331C5.35415 5.0972 5.43054 4.90276 5.58331 4.74998C5.73609 4.5972 5.93054 4.52081 6.16665 4.52081C6.40276 4.52081 6.5972 4.5972 6.74998 4.74998L14.1666 12.1666L14.1666 5.83331C14.1666 5.5972 14.2465 5.39929 14.4062 5.23956C14.566 5.07984 14.7639 4.99998 15 4.99998C15.2361 4.99998 15.434 5.07984 15.5937 5.23956C15.7535 5.39929 15.8333 5.5972 15.8333 5.83331L15.8333 14.1666C15.8333 14.4028 15.7535 14.6007 15.5937 14.7604C15.434 14.9201 15.2361 15 15 15L6.66665 15C6.43053 15 6.23262 14.9201 6.0729 14.7604C5.91317 14.6007 5.83331 14.4028 5.83331 14.1666C5.83331 13.9305 5.91317 13.7326 6.0729 13.5729C6.23262 13.4132 6.43053 13.3333 6.66665 13.3333L13 13.3333Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgArrowDownRight;
