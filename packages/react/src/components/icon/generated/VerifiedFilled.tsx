import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVerifiedFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.125 10.583 7.917 9.396a.78.78 0 0 0-.573-.23.81.81 0 0 0-.594.25.8.8 0 0 0-.23.584q0 .354.23.583l1.792 1.792a.8.8 0 0 0 .583.25.8.8 0 0 0 .583-.25l3.542-3.542a.76.76 0 0 0 .24-.583.85.85 0 0 0-.833-.844.78.78 0 0 0-.594.24zm-2.333 7.542-1.209-2.042-2.291-.5a.79.79 0 0 1-.5-.323.77.77 0 0 1-.146-.572l.229-2.355-1.562-1.791A.78.78 0 0 1 1.104 10q0-.312.209-.542l1.562-1.791-.23-2.355a.77.77 0 0 1 .147-.572.79.79 0 0 1 .5-.323l2.291-.5 1.209-2.042a.82.82 0 0 1 1.041-.333L10 2.458l2.167-.916a.82.82 0 0 1 1.042.333l1.208 2.042 2.291.5q.313.062.5.323a.77.77 0 0 1 .146.572l-.229 2.355 1.563 1.791a.78.78 0 0 1 .208.542q0 .312-.209.542l-1.562 1.791.23 2.355q.04.312-.147.572a.79.79 0 0 1-.5.323l-2.291.5-1.209 2.042a.82.82 0 0 1-1.041.333L10 17.542l-2.167.916a.82.82 0 0 1-1.042-.333"
      />
    </svg>
  );
};
export default SvgVerifiedFilled;
