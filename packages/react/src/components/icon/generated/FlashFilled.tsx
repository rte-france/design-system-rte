import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFlashFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.771 16.9375C8.646 16.8959 8.54183 16.8229 8.4585 16.7188C8.37516 16.6146 8.3335 16.4861 8.3335 16.3334V11.6667H7.50016C7.04183 11.6667 6.64947 11.5035 6.32308 11.1771C5.99669 10.8507 5.8335 10.4584 5.8335 10V3.33335C5.8335 2.87502 5.99669 2.48266 6.32308 2.15627C6.64947 1.82988 7.04183 1.66669 7.50016 1.66669H12.3752C12.8196 1.66669 13.1772 1.8403 13.4481 2.18752C13.7189 2.53474 13.7988 2.91669 13.6877 3.33335L12.5002 7.50002H13.4377C13.9377 7.50002 14.3092 7.72224 14.5522 8.16669C14.7953 8.61113 14.771 9.04169 14.4793 9.45835L9.47933 16.6875C9.396 16.8125 9.28836 16.8959 9.15641 16.9375C9.02447 16.9792 8.896 16.9792 8.771 16.9375Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgFlashFilled;
