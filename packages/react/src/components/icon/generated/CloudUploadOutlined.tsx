import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCloudUploadOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m9.167 10.708-.75.73a.78.78 0 0 1-.573.229.81.81 0 0 1-.594-.25.8.8 0 0 1-.229-.584.8.8 0 0 1 .23-.583l2.166-2.167a.8.8 0 0 1 .583-.25.8.8 0 0 1 .584.25l2.166 2.167a.82.82 0 0 1 .24.573.78.78 0 0 1-.24.594.82.82 0 0 1-.573.24.8.8 0 0 1-.593-.22l-.75-.729V15h4.583q.874 0 1.479-.604.604-.604.604-1.48 0-.874-.604-1.479a2.01 2.01 0 0 0-1.48-.604h-1.25V9.167q0-1.73-1.218-2.948Q11.73 4.999 10 5T7.052 6.219 5.834 9.167h-.417a2.8 2.8 0 0 0-2.063.854 2.8 2.8 0 0 0-.854 2.062q0 1.209.854 2.063A2.8 2.8 0 0 0 5.417 15h1.25q.354 0 .594.24t.24.593-.24.594a.8.8 0 0 1-.594.24h-1.25q-1.896 0-3.24-1.313T.833 12.146q0-1.626.98-2.896a4.33 4.33 0 0 1 2.562-1.625A5.66 5.66 0 0 1 6.46 4.521 5.7 5.7 0 0 1 10 3.333q2.438 0 4.136 1.698t1.698 4.136a3.64 3.64 0 0 1 2.385 1.24q.948 1.072.948 2.51 0 1.562-1.094 2.656t-2.656 1.094h-4.583q-.688 0-1.178-.49A1.6 1.6 0 0 1 9.166 15z"
      />
    </svg>
  );
};
export default SvgCloudUploadOutlined;
