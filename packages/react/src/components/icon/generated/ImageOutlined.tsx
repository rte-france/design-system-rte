import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgImageOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h11.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zm0-1.667h11.666V4.167H4.167zm1.666-1.666h8.334a.4.4 0 0 0 .375-.23.37.37 0 0 0-.042-.437l-2.292-3.062a.4.4 0 0 0-.333-.167.4.4 0 0 0-.333.166l-2.167 2.896-1.542-2.062a.4.4 0 0 0-.333-.167.4.4 0 0 0-.333.167L5.5 13.5a.37.37 0 0 0-.042.438q.126.228.375.229"
      />
    </svg>
  );
};
export default SvgImageOutlined;
