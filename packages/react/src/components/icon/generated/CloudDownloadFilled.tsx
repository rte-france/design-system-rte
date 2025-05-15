import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCloudDownloadFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.417 16.667q-1.896 0-3.24-1.313T.833 12.146q0-1.626.98-2.896a4.33 4.33 0 0 1 2.562-1.625 5.8 5.8 0 0 1 1.781-2.833 5.7 5.7 0 0 1 3.01-1.396v6.729l-.75-.73a.78.78 0 0 0-.572-.228.81.81 0 0 0-.594.25.8.8 0 0 0-.229.583q0 .354.23.583l2.166 2.167A.8.8 0 0 0 10 13a.8.8 0 0 0 .584-.25l2.166-2.167a.81.81 0 0 0 .24-.572.78.78 0 0 0-.24-.594.81.81 0 0 0-.573-.24.8.8 0 0 0-.593.219l-.75.729v-6.73q2.145.293 3.572 1.928t1.428 3.844a3.64 3.64 0 0 1 2.385 1.24q.948 1.072.948 2.51 0 1.562-1.094 2.656t-2.656 1.094z"
      />
    </svg>
  );
};
export default SvgCloudDownloadFilled;
