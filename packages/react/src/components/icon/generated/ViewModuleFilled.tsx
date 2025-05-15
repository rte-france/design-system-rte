import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgViewModuleFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M14.73 9.583q-.688 0-1.178-.49a1.6 1.6 0 0 1-.49-1.176V5.833q0-.687.49-1.177t1.177-.49h1.105q.687 0 1.177.49t.49 1.177v2.084q0 .687-.49 1.177-.491.49-1.177.49zm-5.271 0q-.688 0-1.178-.49a1.6 1.6 0 0 1-.49-1.176V5.833q0-.687.49-1.177t1.178-.49h1.104q.687 0 1.177.49t.49 1.177v2.084q0 .687-.49 1.177t-1.177.49zm-5.271 0q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V5.833q0-.687.49-1.177.489-.49 1.177-.49h1.104q.687 0 1.177.49t.49 1.177v2.084q0 .687-.49 1.177t-1.177.49zm0 6.25q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176v-2.084q0-.687.49-1.177.489-.49 1.177-.49h1.104q.687 0 1.177.49t.49 1.177v2.084q0 .687-.49 1.177t-1.177.49zm5.27 0q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176v-2.084q0-.687.49-1.177t1.178-.49h1.104q.687 0 1.177.49t.49 1.177v2.084q0 .687-.49 1.177t-1.177.49zm5.271 0q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176v-2.084q0-.687.49-1.177t1.177-.49h1.105q.687 0 1.177.49t.49 1.177v2.084q0 .687-.49 1.177-.491.49-1.177.49z"
      />
    </svg>
  );
};
export default SvgViewModuleFilled;
