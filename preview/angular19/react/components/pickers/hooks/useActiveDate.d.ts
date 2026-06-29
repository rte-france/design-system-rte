import { DatepickerCalendarType, DatepickerCompactNavStep, DatepickerDayNavAction } from '../../../../../core';
declare const useActiveDate: (currentValue: Date | null) => {
    viewDate: Date;
    setViewDate: import('../../../../node_modules/react').Dispatch<import('../../../../node_modules/react').SetStateAction<Date>>;
    navigateToPreviousMonth: () => Date;
    navigateToNextMonth: () => Date;
    navigateToPreviousYear: () => Date;
    navigateToNextYear: () => Date;
    navigateToPreviousDecade: () => void;
    navigateToNextDecade: () => void;
    getNextDateForCompactNavigation: (step: DatepickerCompactNavStep, calendarType: DatepickerCalendarType) => Date;
    getNextDateForDayNavigation: (action: DatepickerDayNavAction) => Date;
};
export default useActiveDate;
