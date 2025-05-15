import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLightOffFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 18.333q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176h3.333q0 .687-.49 1.177-.488.49-1.176.49m4.541-6.166L5.708 3.375a6.6 6.6 0 0 1 1.948-1.25A6 6 0 0 1 10 1.667q2.604 0 4.427 1.823t1.823 4.427q0 1.48-.521 2.53-.52 1.053-1.188 1.72m-3.583 1.166H6.875a6.4 6.4 0 0 1-2.281-2.291Q3.75 9.604 3.75 7.917q0-.417.052-.813a6 6 0 0 1 .156-.77L1.75 4.083a.81.81 0 0 1-.24-.574.78.78 0 0 1 .24-.593.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23l14.167 14.166a.8.8 0 0 1 .25.584.8.8 0 0 1-.25.583.81.81 0 0 1-.594.25.8.8 0 0 1-.593-.25zm-3.458 2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h5.125q.354 0 .594.24t.24.594-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgLightOffFilled;
