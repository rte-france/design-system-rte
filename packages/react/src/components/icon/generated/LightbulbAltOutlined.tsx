import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLightbulbAltOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 18.333q-.541 0-.979-.26a1.9 1.9 0 0 1-.687-.698q-.688 0-1.178-.49a1.6 1.6 0 0 1-.49-1.177V12.75a6.04 6.04 0 0 1-1.968-2.146 5.9 5.9 0 0 1-.74-2.896q0-2.52 1.76-4.28Q7.48 1.665 10 1.666q2.52 0 4.281 1.76t1.76 4.281q0 1.605-.739 2.917a6.1 6.1 0 0 1-1.968 2.125v2.958q0 .688-.49 1.177t-1.177.49a1.89 1.89 0 0 1-1.667.958m-1.666-2.625h3.333v-.75H8.334zm0-1.583h3.333v-.792H8.334zm-.167-2.458h1.208v-2.25L7.98 8.02a.6.6 0 0 1-.187-.438.6.6 0 0 1 .187-.437.6.6 0 0 1 .438-.188.6.6 0 0 1 .437.188L10 8.292l1.146-1.146a.6.6 0 0 1 .438-.188.6.6 0 0 1 .437.188.6.6 0 0 1 .188.437.6.6 0 0 1-.188.438l-1.396 1.396v2.25h1.209a4.56 4.56 0 0 0 1.833-1.594q.708-1.052.708-2.365 0-1.833-1.27-3.104-1.272-1.27-3.105-1.27t-3.104 1.27q-1.27 1.27-1.27 3.104 0 1.313.707 2.365a4.56 4.56 0 0 0 1.834 1.594"
      />
    </svg>
  );
};
export default SvgLightbulbAltOutlined;
