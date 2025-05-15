import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgQuestionMark = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M12.167 6.73q0-.897-.594-1.438Q10.979 4.75 10 4.75q-.604 0-1.094.26a2.4 2.4 0 0 0-.843.76q-.334.48-.907.553a1.19 1.19 0 0 1-.99-.302.99.99 0 0 1-.322-.667q-.032-.396.198-.75A4.66 4.66 0 0 1 10 2.5q2.02 0 3.281 1.146 1.26 1.146 1.26 3a3.56 3.56 0 0 1-.395 1.687q-.396.75-1.459 1.771-.77.73-1.041 1.136t-.354.927a1.46 1.46 0 0 1-.427.833 1.14 1.14 0 0 1-.823.333 1.16 1.16 0 0 1-.823-.323 1.06 1.06 0 0 1-.344-.802q0-.812.354-1.49.354-.675 1.188-1.426 1.062-.938 1.406-1.448.345-.51.344-1.115M10 18.332q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176q0-.688.49-1.177T10 15t1.177.49q.49.489.49 1.177 0 .687-.49 1.177t-1.177.49"
      />
    </svg>
  );
};
export default SvgQuestionMark;
