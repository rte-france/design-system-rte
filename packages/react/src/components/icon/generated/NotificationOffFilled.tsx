import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgNotificationOffFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.458 15.833H4.167a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H5V8.334q0-.687.177-1.354t.531-1.27l2.625 2.624H6l-4.25-4.25a.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .584.23l14.166 14.166a.81.81 0 0 1 .24.573.78.78 0 0 1-.24.594.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23zM15 10.604q0 .25-.146.459a.9.9 0 0 1-.375.312.76.76 0 0 1-.479.052.8.8 0 0 1-.417-.219L7.646 5.271a.9.9 0 0 1-.209-.313 1 1 0 0 1-.062-.354q0-.23.115-.448a.73.73 0 0 1 .322-.323q.23-.105.459-.187A5 5 0 0 1 8.75 3.5v-.583q0-.522.365-.886.364-.364.885-.364.52 0 .885.364.366.364.365.886V3.5a4.8 4.8 0 0 1 2.708 1.77A4.9 4.9 0 0 1 15 8.334zm-5 7.73q-.625 0-1.115-.344a1.08 1.08 0 0 1-.49-.927q0-.167.136-.282a.46.46 0 0 1 .302-.114h2.334q.166 0 .302.114.135.115.135.282 0 .582-.49.927-.489.343-1.114.343"
      />
    </svg>
  );
};
export default SvgNotificationOffFilled;
