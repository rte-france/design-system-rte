import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBoltAltOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.16689 12.0834L4.22939 11.4584C3.88216 11.4167 3.65647 11.2292 3.5523 10.8959C3.44814 10.5625 3.52105 10.2778 3.77105 10.0417L12.2919 1.87502C12.3613 1.80558 12.4447 1.75349 12.5419 1.71877C12.6391 1.68405 12.7711 1.66669 12.9377 1.66669C13.2155 1.66669 13.4273 1.78474 13.5731 2.02085C13.719 2.25696 13.7224 2.50002 13.5836 2.75002L10.8336 7.91669L15.7711 8.54169C16.1183 8.58335 16.344 8.77085 16.4481 9.10419C16.5523 9.43752 16.4794 9.72224 16.2294 9.95835L7.70855 18.125C7.63911 18.1945 7.55578 18.2465 7.45855 18.2813C7.36133 18.316 7.22939 18.3334 7.06272 18.3334C6.78494 18.3334 6.57314 18.2153 6.4273 17.9792C6.28147 17.7431 6.278 17.5 6.41689 17.25L9.16689 12.0834ZM10.4586 13.1875L13.8127 9.97919L8.20855 9.27085L9.52105 6.83335L6.18772 10.0417L11.7711 10.7292L10.4586 13.1875Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgBoltAltOutlined;
