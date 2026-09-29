import { TimeSegmentEnum } from '../../../../../../core/components/timepicker/timepicker.constants';
export declare const useNavigateBetweenTimeSegment: () => {
    moveToNextSegment: () => void;
    moveToPreviousSegment: () => void;
    setActiveTimeSegment: (segment: TimeSegmentEnum) => void;
    activeTimeSegment: TimeSegmentEnum;
    prevSegment: TimeSegmentEnum;
    nextSegment: TimeSegmentEnum;
};
