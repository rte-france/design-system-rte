import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFileUploadFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 12.354V15q0 .354.24.594t.593.24.594-.24.24-.594v-2.646l.75.75a.8.8 0 0 0 .28.188q.158.062.313.052a.866.866 0 0 0 .573-.26.88.88 0 0 0 .24-.584.76.76 0 0 0-.24-.583L10.584 9.75a.7.7 0 0 0-.271-.177A.9.9 0 0 0 10 9.52a.9.9 0 0 0-.312.052.7.7 0 0 0-.271.177L7.25 11.917a.76.76 0 0 0-.24.583.84.84 0 0 0 .261.583.88.88 0 0 0 .583.24.76.76 0 0 0 .584-.24zM5 18.334q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V3.333q0-.687.49-1.177T5 1.666h5.98a1.65 1.65 0 0 1 1.166.48l4.042 4.041q.228.23.354.532t.125.635v9.313q0 .687-.49 1.177-.489.49-1.177.49zm5.834-11.667q0 .354.24.593.239.24.593.24H15l-4.166-4.167z"
      />
    </svg>
  );
};
export default SvgFileUploadFilled;
