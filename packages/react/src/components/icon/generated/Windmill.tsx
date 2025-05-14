import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgWindmill = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 18.333V17.5q0-.666.5-1.115a2.23 2.23 0 0 1 1.166-.552V9.875a2.4 2.4 0 0 1-.802-.48 2.8 2.8 0 0 1-.573-.728l-1.583.416q-.75.167-1.427-.125a1.44 1.44 0 0 1-.864-1l3.625-.916q.166-.855.791-1.417A2.44 2.44 0 0 1 9.833 5l.5-1.875q.209-.73.802-1.156a1.57 1.57 0 0 1 1.323-.26l-1.042 3.75q.521.333.803.874a2.5 2.5 0 0 1 .218 1.698q-.062.261-.146.51l1.125 1.167q.522.542.615 1.271.094.729-.406 1.23l-2.5-2.5a.4.4 0 0 1-.136.093q-.072.03-.156.073v5.958q.667.105 1.167.552t.5 1.115v.833zM10 8.75q.52 0 .885-.365c.365-.365.365-.538.365-.885s-.122-.642-.365-.885A1.2 1.2 0 0 0 10 6.25q-.521 0-.886.365a1.2 1.2 0 0 0-.364.885q0 .52.364.885c.364.365.539.365.886.365"
      />
    </svg>
  );
};
export default SvgWindmill;
