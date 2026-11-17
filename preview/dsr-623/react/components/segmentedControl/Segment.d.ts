import { SegmentProps as CoreSegmentProps } from '../../../../core/components/segmented-control/segmented-control.interface';
interface SegmentProps extends CoreSegmentProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
    segmentTabIndex: 0 | -1;
    onSegmentFocus?: () => void;
}
declare const Segment: ({ id, icon, labelText, ariaLabel, position, isSelected, onClick, badgeCount, badgeContent, badgeIcon, badgeType, badgeSize, showBadge, appearance, isCompact, segmentTabIndex, onSegmentFocus, ...props }: SegmentProps) => import("react").JSX.Element;
export default Segment;
