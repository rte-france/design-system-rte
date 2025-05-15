import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgImageBrokenFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177v-5.5l1.917 1.917A.8.8 0 0 0 5 12.5a.8.8 0 0 0 .583-.25l2.75-2.75 2.75 2.75a.8.8 0 0 0 .584.25.8.8 0 0 0 .583-.25L15 9.5l2.5 2.5v3.833q0 .688-.49 1.177-.489.49-1.177.49zm0-15h11.666q.688 0 1.177.49.49.489.49 1.177v5.479l-1.917-1.917A.8.8 0 0 0 15 7.48a.8.8 0 0 0-.583.25l-2.75 2.75-2.75-2.75a.8.8 0 0 0-.584-.25.8.8 0 0 0-.583.25L5 10.48l-2.5-2.5V4.167q0-.688.49-1.177.489-.49 1.177-.49"
      />
    </svg>
  );
};
export default SvgImageBrokenFilled;
