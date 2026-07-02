import { BannerProps as CoreBannerProps } from '../../../../core/components/banner/banner.interface';
interface BannerProps extends CoreBannerProps, React.HTMLAttributes<HTMLDivElement> {
}
declare const Banner: import('../../../../../node_modules/react').ForwardRefExoticComponent<BannerProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Banner;
