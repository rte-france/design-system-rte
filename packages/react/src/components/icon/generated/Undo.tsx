import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgUndo = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.667 15.833a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h5.083q1.312 0 2.281-.833T15 11.25t-.969-2.083-2.281-.834H6.5l1.583 1.584a.8.8 0 0 1 .23.583.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23l-3-3a.7.7 0 0 1-.177-.27.9.9 0 0 1-.053-.313q0-.166.053-.313a.7.7 0 0 1 .177-.27l3-3a.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23.8.8 0 0 1 .23.583.8.8 0 0 1-.23.583L6.5 6.667h5.25q2.021 0 3.469 1.312t1.448 3.271-1.448 3.27q-1.448 1.314-3.469 1.313z"
      />
    </svg>
  );
};
export default SvgUndo;
