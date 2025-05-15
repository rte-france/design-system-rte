import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFolderSharedFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177t1.177-.49h4.313a1.65 1.65 0 0 1 1.166.48L10 5h6.666q.688 0 1.178.49.49.489.49 1.177V15q0 .687-.49 1.177t-1.178.49zm5.833-2.5h6.667v-.459q0-.937-.917-1.49-.916-.55-2.416-.551-1.5 0-2.417.552t-.917 1.49zm3.334-3.334q.687 0 1.177-.49.49-.489.49-1.176 0-.688-.49-1.177A1.6 1.6 0 0 0 12.5 7.5q-.687 0-1.177.49-.49.489-.49 1.177 0 .687.49 1.177.489.49 1.177.49"
      />
    </svg>
  );
};
export default SvgFolderSharedFilled;
