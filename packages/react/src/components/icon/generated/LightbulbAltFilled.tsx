import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLightbulbAltFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 18.333q-.541 0-.979-.26a1.9 1.9 0 0 1-.687-.698q-.688 0-1.178-.49a1.6 1.6 0 0 1-.49-1.177V12.75a6.04 6.04 0 0 1-1.968-2.146 5.9 5.9 0 0 1-.74-2.896q0-2.52 1.76-4.28Q7.48 1.665 10 1.666q2.52 0 4.281 1.76t1.76 4.281q0 1.605-.739 2.917a6.1 6.1 0 0 1-1.968 2.125v2.958q0 .688-.49 1.177t-1.177.49a1.89 1.89 0 0 1-1.667.958m-1.666-2.625h3.333v-.75H8.334zm0-1.583h3.333v-.792H8.334zm2.291-2.458v-2.25l1.396-1.396a.6.6 0 0 0 .188-.438.6.6 0 0 0-.188-.437.6.6 0 0 0-.437-.188.6.6 0 0 0-.438.188L10 8.292 8.854 7.146a.6.6 0 0 0-.437-.188.6.6 0 0 0-.438.188.6.6 0 0 0-.187.437.6.6 0 0 0 .187.438l1.396 1.396v2.25z"
      />
    </svg>
  );
};
export default SvgLightbulbAltFilled;
