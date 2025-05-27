import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgImageGalleryFilled = ({ width = 20, height = 20, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...props}
    >
      <path
        d="M7.49996 11.6667H15.8333L12.9583 7.91669L11.0416 10.4167L9.74996 8.75002L7.49996 11.6667ZM6.66663 15C6.20829 15 5.81593 14.8368 5.48954 14.5104C5.16315 14.184 4.99996 13.7917 4.99996 13.3334V3.33335C4.99996 2.87502 5.16315 2.48266 5.48954 2.15627C5.81593 1.82988 6.20829 1.66669 6.66663 1.66669H16.6666C17.125 1.66669 17.5173 1.82988 17.8437 2.15627C18.1701 2.48266 18.3333 2.87502 18.3333 3.33335V13.3334C18.3333 13.7917 18.1701 14.184 17.8437 14.5104C17.5173 14.8368 17.125 15 16.6666 15H6.66663ZM6.66663 13.3334H16.6666V3.33335H6.66663V13.3334ZM3.33329 18.3334C2.87496 18.3334 2.4826 18.1702 2.15621 17.8438C1.82982 17.5174 1.66663 17.125 1.66663 16.6667V5.00002H3.33329V16.6667H15V18.3334H3.33329ZM6.66663 3.33335H16.6666V13.3334H6.66663V3.33335Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgImageGalleryFilled;
