import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLocationOffFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 17.77q-.291 0-.583-.103a1.5 1.5 0 0 1-.521-.313A33 33 0 0 1 6.5 14.917a18 18 0 0 1-1.74-2.302 11 11 0 0 1-1.062-2.146Q3.333 9.437 3.333 8.5q0-.667.105-1.27.104-.606.291-1.147L1.146 3.5a.81.81 0 0 1-.25-.594q0-.344.25-.593a.81.81 0 0 1 .594-.25q.344 0 .593.25l15.334 15.333a.8.8 0 0 1 .25.594q0 .344-.25.593a.81.81 0 0 1-.594.25.81.81 0 0 1-.594-.25l-3.416-3.416q-.522.54-1.042 1.073-.52.531-.917.864a1.5 1.5 0 0 1-.52.313q-.293.105-.584.104m0-16.103q2.646 0 4.656 1.854t2.01 4.979q0 .73-.207 1.51a8.6 8.6 0 0 1-.625 1.615.88.88 0 0 1-.74.51 1.02 1.02 0 0 1-.865-.302l-2.75-2.75q.104-.166.146-.354a1.83 1.83 0 0 0-.083-1.052 1.62 1.62 0 0 0-.886-.885A1.7 1.7 0 0 0 10 6.667q-.208 0-.396.041a1.1 1.1 0 0 0-.354.146L6.563 4.167a1.05 1.05 0 0 1-.323-.886q.051-.51.49-.781a6.1 6.1 0 0 1 1.562-.625A7 7 0 0 1 10 1.667"
      />
    </svg>
  );
};
export default SvgLocationOffFilled;
