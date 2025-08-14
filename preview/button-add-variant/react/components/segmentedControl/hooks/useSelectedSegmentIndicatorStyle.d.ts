import { SegmentedControlProps as CoreSegmentedControlProps } from '../../../../../core/components/segmented-control/segmented-control.interface';
import { MutableRefObject } from '../../../../../../node_modules/react';
declare const useSelectedSegmentIndicatorStyle: (containerRef: MutableRefObject<HTMLDivElement | null>, options: CoreSegmentedControlProps["options"], selectedSegment?: string) => {
    left: number;
    width: number;
};
export default useSelectedSegmentIndicatorStyle;
