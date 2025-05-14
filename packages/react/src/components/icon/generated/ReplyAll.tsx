import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgReplyAll = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m4.02 9.167 3.25 3.25a.76.76 0 0 1 .24.583.84.84 0 0 1-.26.583.88.88 0 0 1-.583.24.76.76 0 0 1-.584-.24L2.25 9.75a.7.7 0 0 1-.177-.27.9.9 0 0 1-.052-.313q0-.167.052-.313a.7.7 0 0 1 .177-.27L6.083 4.75a.78.78 0 0 1 .573-.23q.344 0 .594.23.25.25.25.594a.8.8 0 0 1-.25.593zm5 .833 2.417 2.417a.76.76 0 0 1 .24.583.84.84 0 0 1-.26.583.88.88 0 0 1-.584.24.76.76 0 0 1-.583-.24L6.417 9.75a.7.7 0 0 1-.178-.27.9.9 0 0 1-.052-.313q0-.167.052-.313a.7.7 0 0 1 .178-.27L10.25 4.75a.78.78 0 0 1 .573-.23.85.85 0 0 1 .594.23q.25.25.25.594a.8.8 0 0 1-.25.593L9.02 8.333h5.146q1.729 0 2.947 1.22 1.22 1.218 1.22 2.947V15q0 .354-.24.594a.8.8 0 0 1-.594.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-2.5q0-1.042-.729-1.77a2.4 2.4 0 0 0-1.77-.73z"
      />
    </svg>
  );
};
export default SvgReplyAll;
