import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCategoryOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m6.188 7.896 3.104-5.063a.77.77 0 0 1 .312-.302.87.87 0 0 1 .792 0q.187.094.312.302l3.105 5.063a.84.84 0 0 1 .124.437.84.84 0 0 1-.104.417.81.81 0 0 1-.729.417H6.896a.81.81 0 0 1-.73-.417.84.84 0 0 1-.104-.417q0-.228.125-.437m8.395 10.437q-1.562 0-2.656-1.093-1.094-1.094-1.094-2.657t1.094-2.656q1.095-1.094 2.656-1.094 1.563 0 2.657 1.094 1.093 1.095 1.093 2.656 0 1.563-1.093 2.657-1.094 1.093-2.657 1.093M2.5 17.083v-5q0-.354.24-.593.24-.24.593-.24h5q.354 0 .594.24t.24.593v5q0 .354-.24.594a.8.8 0 0 1-.594.24h-5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.594m12.083-.416q.876 0 1.48-.605.604-.603.604-1.479 0-.874-.605-1.479a2.01 2.01 0 0 0-1.479-.604q-.874 0-1.479.604a2 2 0 0 0-.604 1.48q0 .874.604 1.479.604.604 1.48.604M4.167 16.25H7.5v-3.333H4.167zM8.375 7.5h3.25L10 4.875z"
      />
    </svg>
  );
};
export default SvgCategoryOutlined;
