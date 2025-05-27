import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBatteryAltFull = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
      <path
        d="M4.1665 14.1666C3.93039 14.1666 3.73248 14.0868 3.57275 13.9271C3.41303 13.7673 3.33317 13.5694 3.33317 13.3333V11.6666H2.49984C2.26373 11.6666 2.06581 11.5868 1.90609 11.4271C1.74637 11.2673 1.6665 11.0694 1.6665 10.8333V9.16665C1.6665 8.93054 1.74637 8.73262 1.90609 8.5729C2.06581 8.41317 2.26373 8.33331 2.49984 8.33331H3.33317V6.66665C3.33317 6.43054 3.41303 6.23262 3.57275 6.0729C3.73248 5.91317 3.93039 5.83331 4.1665 5.83331H17.4998C17.7359 5.83331 17.9339 5.91317 18.0936 6.0729C18.2533 6.23262 18.3332 6.43054 18.3332 6.66665V13.3333C18.3332 13.5694 18.2533 13.7673 18.0936 13.9271C17.9339 14.0868 17.7359 14.1666 17.4998 14.1666H4.1665Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgBatteryAltFull;
