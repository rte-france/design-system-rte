import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBluetoothOff = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m9.167 12-3.25 3.25a.8.8 0 0 1-.583.23.8.8 0 0 1-.584-.23.8.8 0 0 1-.229-.583.8.8 0 0 1 .23-.584l3.5-3.5-6.5-6.5a.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23l14.167 14.166a.8.8 0 0 1 .229.584.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23L13 15.333l-2.416 2.417a.9.9 0 0 1-.271.188.817.817 0 0 1-.896-.177.81.81 0 0 1-.25-.615zm1.667 3.125.958-.958-.958-.959zm.916-5.708L10.584 8.25l1.833-1.833-1.583-1.542V8.5L9.167 6.833V2.854q0-.375.25-.614a.817.817 0 0 1 1.167.01l3.583 3.583a.7.7 0 0 1 .177.271.9.9 0 0 1 .052.313.9.9 0 0 1-.052.312.7.7 0 0 1-.177.271z"
      />
    </svg>
  );
};
export default SvgBluetoothOff;
