import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgGroupFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M.833 14.333q0-.708.365-1.302a2.43 2.43 0 0 1 .969-.906 12.4 12.4 0 0 1 2.625-.969 11.5 11.5 0 0 1 2.708-.323q1.376 0 2.708.323 1.334.322 2.625.969.604.312.969.906t.365 1.302V15q0 .687-.49 1.177t-1.177.49h-10q-.687 0-1.177-.49A1.6 1.6 0 0 1 .833 15zm14.542 2.334q.229-.376.344-.802t.114-.865v-.833q0-.917-.51-1.76-.51-.844-1.448-1.449a10.423 10.423 0 0 1 3.75 1.167q.75.417 1.146.927t.396 1.115V15q0 .687-.49 1.177t-1.177.49zM7.5 10a3.2 3.2 0 0 1-2.354-.98 3.2 3.2 0 0 1-.98-2.353q0-1.375.98-2.355A3.2 3.2 0 0 1 7.5 3.333a3.2 3.2 0 0 1 2.354.98 3.2 3.2 0 0 1 .98 2.354 3.2 3.2 0 0 1-.98 2.354A3.2 3.2 0 0 1 7.5 10m8.333-3.333a3.2 3.2 0 0 1-.979 2.354A3.2 3.2 0 0 1 12.5 10a4 4 0 0 1-.583-.052 5 5 0 0 1-.584-.115q.562-.666.865-1.479a4.8 4.8 0 0 0 .302-1.687q0-.875-.302-1.688a5 5 0 0 0-.865-1.479q.293-.105.584-.135.291-.032.583-.032a3.2 3.2 0 0 1 2.354.98 3.2 3.2 0 0 1 .98 2.354"
      />
    </svg>
  );
};
export default SvgGroupFilled;
