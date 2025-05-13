import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgReply = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m5.687 10 2.417 2.417a.76.76 0 0 1 .24.583.84.84 0 0 1-.26.583.88.88 0 0 1-.584.24.76.76 0 0 1-.583-.24L3.083 9.75a.8.8 0 0 1-.25-.583.8.8 0 0 1 .25-.584L6.917 4.75a.78.78 0 0 1 .572-.23q.345 0 .594.23.25.25.25.594a.8.8 0 0 1-.25.593L5.687 8.333h7.646q1.73 0 2.948 1.22 1.22 1.218 1.219 2.947V15q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-2.5q0-1.042-.729-1.77a2.4 2.4 0 0 0-1.77-.73H5.686Z"
      />
    </svg>
  );
};
export default SvgReply;
