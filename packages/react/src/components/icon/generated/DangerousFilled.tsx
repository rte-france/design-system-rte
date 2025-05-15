import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgDangerousFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.563 17.5a1.65 1.65 0 0 1-1.167-.48l-3.417-3.416a1.646 1.646 0 0 1-.48-1.167V7.563a1.65 1.65 0 0 1 .48-1.166l3.417-3.417q.23-.229.531-.354t.636-.125h4.875a1.65 1.65 0 0 1 1.166.48l3.417 3.416q.229.23.354.531t.125.636v4.875a1.65 1.65 0 0 1-.48 1.166l-3.416 3.417q-.23.229-.531.354a1.65 1.65 0 0 1-.636.125zM10 11.167l1.792 1.791a.8.8 0 0 0 .583.23.8.8 0 0 0 .583-.23.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.583L11.167 10l1.791-1.792a.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.583.8.8 0 0 0-.583-.23.8.8 0 0 0-.583.23L10 8.833 8.208 7.042a.8.8 0 0 0-.583-.23.8.8 0 0 0-.583.23.8.8 0 0 0-.23.583q0 .354.23.583L8.833 10l-1.791 1.792a.8.8 0 0 0-.23.583q0 .354.23.583a.8.8 0 0 0 .583.23.8.8 0 0 0 .583-.23z"
      />
    </svg>
  );
};
export default SvgDangerousFilled;
