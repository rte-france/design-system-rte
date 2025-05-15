import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgTrashRestoreFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 17.5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H7.5q0-.354.24-.593.24-.24.593-.24h3.334q.354 0 .593.24.24.24.24.593h3.333q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24v10.833q0 .688-.49 1.177-.489.49-1.176.49zm3.334-7.625V12.5q0 .354.24.594.239.24.593.24t.594-.24q.24-.24.24-.594V9.875l.75.73q.228.228.572.228t.594-.25a.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.583L10.583 7.25A.8.8 0 0 0 10 7a.8.8 0 0 0-.583.25L7.25 9.417a.81.81 0 0 0-.24.573.78.78 0 0 0 .24.593.81.81 0 0 0 .573.24.8.8 0 0 0 .594-.219z"
      />
    </svg>
  );
};
export default SvgTrashRestoreFilled;
