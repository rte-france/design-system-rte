import { DateSegmentEnum } from '../../../../../../core';
export declare const useNavigateBetweenDateSegment: () => {
    moveToNextSegment: () => void;
    moveToPreviousSegment: () => void;
    setActiveDateSegment: (segment: DateSegmentEnum) => void;
    activeDateSegment: DateSegmentEnum;
    prevSegment: DateSegmentEnum;
    nextSegment: DateSegmentEnum;
};
