import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBatteryFull = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.66683 18.3334C6.43072 18.3334 6.2328 18.2535 6.07308 18.0938C5.91336 17.934 5.8335 17.7361 5.8335 17.5V4.16669C5.8335 3.93058 5.91336 3.73266 6.07308 3.57294C6.2328 3.41321 6.43072 3.33335 6.66683 3.33335H8.3335V2.50002C8.3335 2.26391 8.41336 2.06599 8.57308 1.90627C8.7328 1.74655 8.93072 1.66669 9.16683 1.66669H10.8335C11.0696 1.66669 11.2675 1.74655 11.4272 1.90627C11.587 2.06599 11.6668 2.26391 11.6668 2.50002V3.33335H13.3335C13.5696 3.33335 13.7675 3.41321 13.9272 3.57294C14.087 3.73266 14.1668 3.93058 14.1668 4.16669V17.5C14.1668 17.7361 14.087 17.934 13.9272 18.0938C13.7675 18.2535 13.5696 18.3334 13.3335 18.3334H6.66683Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgBatteryFull;
