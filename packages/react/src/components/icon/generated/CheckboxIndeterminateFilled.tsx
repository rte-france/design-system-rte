import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCheckboxIndeterminateFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
      <path
        d="M6.66667 10.8333H13.3333C13.5694 10.8333 13.7674 10.7535 13.9271 10.5938C14.0868 10.434 14.1667 10.2361 14.1667 10C14.1667 9.76389 14.0868 9.56597 13.9271 9.40625C13.7674 9.24653 13.5694 9.16667 13.3333 9.16667H6.66667C6.43056 9.16667 6.23264 9.24653 6.07292 9.40625C5.91319 9.56597 5.83333 9.76389 5.83333 10C5.83333 10.2361 5.91319 10.434 6.07292 10.5938C6.23264 10.7535 6.43056 10.8333 6.66667 10.8333ZM4.16667 17.5C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2917 2.5 15.8333V4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5H15.8333C16.2917 2.5 16.684 2.66319 17.0104 2.98958C17.3368 3.31597 17.5 3.70833 17.5 4.16667V15.8333C17.5 16.2917 17.3368 16.684 17.0104 17.0104C16.684 17.3368 16.2917 17.5 15.8333 17.5H4.16667Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgCheckboxIndeterminateFilled;
