import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCloudDownloadOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 10.125V5.083q-1.584.292-2.458 1.532-.876 1.24-.875 2.552h-.417a2.8 2.8 0 0 0-2.063.854 2.8 2.8 0 0 0-.854 2.062q0 1.208.854 2.063A2.8 2.8 0 0 0 5.417 15h10q.875 0 1.479-.604t.604-1.48-.604-1.479a2.01 2.01 0 0 0-1.48-.604h-1.25V9.167a3.9 3.9 0 0 0-.457-1.865A4.7 4.7 0 0 0 12.5 5.833V3.896a5.7 5.7 0 0 1 2.438 2.156q.896 1.427.896 3.115a3.64 3.64 0 0 1 2.385 1.24q.948 1.071.948 2.51 0 1.562-1.094 2.656t-2.656 1.094h-10q-1.896 0-3.24-1.313T.833 12.146q0-1.626.98-2.896a4.33 4.33 0 0 1 2.562-1.625q.355-1.5 1.771-2.854t3.02-1.354q.689 0 1.178.49.49.489.49 1.176v5.042l.75-.73a.78.78 0 0 1 .572-.228q.345 0 .594.25a.8.8 0 0 1 .23.583.8.8 0 0 1-.23.583l-2.166 2.167A.8.8 0 0 1 10 13a.8.8 0 0 1-.583-.25L7.25 10.583a.81.81 0 0 1-.24-.573.78.78 0 0 1 .24-.593.81.81 0 0 1 .573-.24.8.8 0 0 1 .594.219z"
      />
    </svg>
  );
};
export default SvgCloudDownloadOutlined;
