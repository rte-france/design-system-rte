import { TimeSegmentEnum } from '../../../../../../core/components/timepicker/timepicker.interface';
export declare const useNavigateBetweenTimeSegment: () => {
    moveToNextSegment: () => void;
    moveToPreviousSegment: () => void;
    setActiveTimeSegment: (segment: TimeSegmentEnum) => void;
    activeTimeSegment: TimeSegmentEnum;
    prevSegment: TimeSegmentEnum;
    nextSegment: TimeSegmentEnum;
};
