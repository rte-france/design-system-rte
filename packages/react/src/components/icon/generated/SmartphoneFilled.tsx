import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgSmartphoneFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 19.167q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177v-15q0-.687.49-1.177t1.177-.49h8.334q.687 0 1.177.49t.49 1.177v15q0 .687-.49 1.177t-1.178.49zm0-4.167h8.334V5H5.833z"
      />
    </svg>
  );
};
export default SvgSmartphoneFilled;
