import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBoltFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
      <path
        d="M7.49981 12.5H4.91648C4.58315 12.5 4.33662 12.3507 4.1769 12.0521C4.01717 11.7535 4.03453 11.4653 4.22898 11.1875L10.4581 2.22918C10.597 2.03473 10.7776 1.89932 10.9998 1.82293C11.222 1.74654 11.4512 1.75001 11.6873 1.83334C11.9234 1.91668 12.097 2.06251 12.2081 2.27084C12.3193 2.47918 12.3609 2.7014 12.3331 2.93751L11.6665 8.33334H14.8956C15.2568 8.33334 15.5102 8.49307 15.6561 8.81251C15.8019 9.13196 15.7568 9.43057 15.5206 9.70834L8.66648 17.9167C8.5137 18.0972 8.3262 18.2153 8.10398 18.2708C7.88176 18.3264 7.66648 18.3056 7.45815 18.2083C7.24981 18.1111 7.08662 17.9618 6.96856 17.7604C6.85051 17.559 6.80537 17.3403 6.83315 17.1042L7.49981 12.5Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgBoltFilled;
