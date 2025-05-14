import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBluetooth = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 17.146V12l-3.25 3.25a.8.8 0 0 1-.583.23.8.8 0 0 1-.584-.23.8.8 0 0 1-.229-.583.8.8 0 0 1 .23-.584L8.833 10 4.75 5.917a.8.8 0 0 1-.229-.584.8.8 0 0 1 .23-.583.8.8 0 0 1 .582-.23.8.8 0 0 1 .584.23L9.167 8V2.854a.8.8 0 0 1 .25-.614.817.817 0 0 1 1.167.01l3.583 3.583a.7.7 0 0 1 .177.271.9.9 0 0 1 .052.313.9.9 0 0 1-.052.312.7.7 0 0 1-.177.271l-3 3 3 3a.7.7 0 0 1 .177.27.9.9 0 0 1 .052.313.9.9 0 0 1-.052.313.7.7 0 0 1-.177.27l-3.583 3.584a.9.9 0 0 1-.271.188.82.82 0 0 1-.896-.177.81.81 0 0 1-.25-.615M10.834 8l1.583-1.583-1.583-1.542zm0 7.125 1.583-1.542L10.834 12z"
      />
    </svg>
  );
};
export default SvgBluetooth;
