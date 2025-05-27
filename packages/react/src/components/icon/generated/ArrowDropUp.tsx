import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowDropUp = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10.4375 7.93746L13.4584 10.9583C13.5 11 13.5313 11.0451 13.5521 11.0937C13.573 11.1423 13.5834 11.1944 13.5834 11.25C13.5834 11.3611 13.5452 11.4583 13.4688 11.5416C13.3924 11.625 13.2917 11.6666 13.1667 11.6666L6.83337 11.6666C6.70837 11.6666 6.60768 11.625 6.53129 11.5416C6.4549 11.4583 6.41671 11.3611 6.41671 11.25C6.41671 11.2222 6.45837 11.125 6.54171 10.9583L9.56254 7.93746C9.63199 7.86801 9.70143 7.8194 9.77087 7.79163C9.84032 7.76385 9.91671 7.74996 10 7.74996C10.0834 7.74996 10.1598 7.76385 10.2292 7.79163C10.2987 7.8194 10.3681 7.86801 10.4375 7.93746Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgArrowDropUp;
