import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgMailFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177.491-.49 1.177-.49h13.334q.687 0 1.177.49T18.334 5v10q0 .687-.49 1.177t-1.177.49zM10 10.687q.104 0 .219-.03a.9.9 0 0 0 .219-.095l5.895-3.687a.69.69 0 0 0 .334-.604.68.68 0 0 0-.354-.625q-.355-.209-.73.02L10 9.167l-5.583-3.5q-.375-.228-.73-.01a.69.69 0 0 0-.354.615q0 .208.084.364a.56.56 0 0 0 .25.24l5.896 3.688a.87.87 0 0 0 .437.124"
      />
    </svg>
  );
};
export default SvgMailFilled;
