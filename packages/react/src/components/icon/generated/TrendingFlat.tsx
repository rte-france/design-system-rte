import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgTrendingFlat = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
      <path
        d="M15.1458 10.8333H3.33333C3.09722 10.8333 2.89931 10.7535 2.73958 10.5937C2.57986 10.434 2.5 10.2361 2.5 9.99999C2.5 9.76388 2.57986 9.56596 2.73958 9.40624C2.89931 9.24652 3.09722 9.16666 3.33333 9.16666H15.1458L14 7.99999C13.8333 7.83332 13.7535 7.63888 13.7604 7.41666C13.7674 7.19443 13.8542 6.99999 14.0208 6.83332C14.1875 6.68054 14.3854 6.60068 14.6146 6.59374C14.8438 6.58679 15.0347 6.66666 15.1875 6.83332L17.75 9.41666C17.9167 9.58332 18 9.77777 18 9.99999C18 10.2222 17.9167 10.4167 17.75 10.5833L15.1667 13.1667C15.0139 13.3194 14.8229 13.3958 14.5938 13.3958C14.3646 13.3958 14.1667 13.3194 14 13.1667C13.8333 13 13.75 12.8021 13.75 12.5729C13.75 12.3437 13.8333 12.1458 14 11.9792L15.1458 10.8333Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgTrendingFlat;
