import { DateSegmentEnum } from '../../../../core';
export declare const getNextSegment: (seg: DateSegmentEnum) => DateSegmentEnum;
export declare const getPrevSegment: (seg: DateSegmentEnum) => DateSegmentEnum;
export declare const getIncreasedValueWithBounds: (current: number, max: number, increment: number) => number;
export declare const getDecreasedValueWithBounds: (current: number, max: number, decrement: number) => number;
export declare const formatNumberToParseSegmentValue: (value: number, segment?: DateSegmentEnum) => string;
export declare const computeDateSegmentRanges: () => Record<DateSegmentEnum, [number, number]>;
