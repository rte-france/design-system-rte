import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCheckCircleOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.833 11.5 7.042 9.708a.8.8 0 0 0-.584-.229.8.8 0 0 0-.583.23.8.8 0 0 0-.23.583q0 .354.23.583L8.25 13.25a.8.8 0 0 0 .583.25.8.8 0 0 0 .584-.25l4.708-4.708a.8.8 0 0 0 .23-.584.8.8 0 0 0-.23-.583.8.8 0 0 0-.583-.23.8.8 0 0 0-.584.23zM10 18.333a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .656 3.25 8.1 8.1 0 0 1-.656 3.25 8.4 8.4 0 0 1-1.781 2.646 8.4 8.4 0 0 1-2.646 1.781 8.1 8.1 0 0 1-3.25.656m0-1.666q2.792 0 4.73-1.938 1.936-1.937 1.937-4.729 0-2.791-1.938-4.73Q12.792 3.335 10 3.334q-2.792 0-4.73 1.938Q3.335 7.209 3.334 10q0 2.792 1.938 4.73Q7.208 16.665 10 16.666"
      />
    </svg>
  );
};
export default SvgCheckCircleOutlined;
