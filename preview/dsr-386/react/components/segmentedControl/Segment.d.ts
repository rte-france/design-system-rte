import { SegmentProps as CoreSegmentProps } from '../../../../core/components/segmented-control/segmented-control.interface';
interface SegmentProps extends CoreSegmentProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}
declare const Segment: ({ id, icon, label, position, isSelected, onClick, badgeCount, badgeContent, badgeIcon, badgeType, badgeSize, showBadge, ...props }: SegmentProps) => import("react/jsx-runtime").JSX.Element;
export default Segment;
