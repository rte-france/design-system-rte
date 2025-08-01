import {
  ARROW_LEFT,
  ARROW_RIGHT,
  ENTER_KEY,
  SPACE_KEY,
  TAB_KEY,
} from "@design-system-rte/core/constants/keyboard/keyboard.constants";
import { forwardRef, MutableRefObject, useEffect, useRef, useState } from "react";

import { useActiveKeyboard } from "../../hooks/useActiveKeyboard";
import Icon from "../icon/Icon";

import style from "./SegmentedControl.module.scss";

export interface SegmentProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  label?: string;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
  position: "left" | "middle" | "right";
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
  parentRef?: MutableRefObject<HTMLDivElement | null>;
}

interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: Omit<SegmentProps, "position" | "selected">[];
  onChange: (id: string) => void;
  selectedSegment?: string;
}

const FOCUSABLE_ELEMENTS = [
  "button",
  "a[href]",
  "input",
  "select",
  "textarea",
  "details",
  '[tabindex]:not([tabindex="-1"])',
];

const FOCUSABLE_ELEMENTS_QUERY = FOCUSABLE_ELEMENTS.map((elmt) => elmt + ":not([disabled]):not([aria-hidden])").join(
  ",",
);

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ options, onChange, selectedSegment, ...props }, ref) => {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const [sliderStyle, setSliderStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

    const getSegmentPosition = (index: number, length: number): SegmentProps["position"] => {
      if (length === 2) return index === 0 ? "left" : "right";
      if (index === 0) return "left";
      if (index === length - 1) return "right";
      return "middle";
    };

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      event.stopPropagation();
      const target = event.currentTarget as HTMLDivElement;
      const id = target.getAttribute("id") || "";
      onChange(id);
    };

    useEffect(() => {
      function updateSlider() {
        if (!containerRef.current) return;
        const idx = options.findIndex((opt) => opt.id === selectedSegment);
        if (idx === -1) return;
        const segmentNodes = containerRef.current.querySelectorAll(`.${style.segment}`);
        const node = segmentNodes[idx] as HTMLElement;
        if (node) {
          setSliderStyle({
            left: node.offsetLeft,
            width: node.offsetWidth,
          });
        }
      }
      updateSlider();
      window.addEventListener("resize", updateSlider);
      return () => {
        window.removeEventListener("resize", updateSlider);
      };
    }, [selectedSegment, options]);

    if (options.length <= 1 || options.length > 3) {
      console.warn("SegmentedControl: 'options' should have 2 or 3 items.");
      return null;
    }
    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        role="radiogroup"
        className={style["segmented-control"]}
        {...props}
      >
        <div className={style["segment-slider"]} style={{ left: sliderStyle.left, width: sliderStyle.width }} />
        {options.map((option, index) => (
          <Segment
            key={`${option.id}-${index}`}
            position={getSegmentPosition(index, options.length)}
            onClick={handleOnClick}
            selected={selectedSegment === option.id}
            parentRef={containerRef || ref}
            {...option}
          />
        ))}
      </div>
    );
  },
);

const Segment = ({ id, icon, iconAppearance, label, position, selected, onClick, parentRef }: SegmentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const segmentRef = ref && "current" in ref ? ref.current : null;
    const handleFocus = (event: FocusEvent) => {
      if (event.target === segmentRef?.childNodes[0]) {
        if (segmentRef?.childNodes[0]) {
          const focusedElement = segmentRef.childNodes[0] as HTMLElement;
          if (focusedElement.getAttribute("data-selected") !== "true") {
            const elementToFocus = Array.from(document.querySelectorAll(`.${style.segment}`)).find(
              (el) => el.getAttribute("data-selected") === "true",
            );
            if (elementToFocus) {
              (elementToFocus as HTMLElement).focus();
            }
          }
        }
      }
    };

    if (segmentRef) {
      segmentRef.addEventListener("focus", handleFocus);
    }

    return () => {
      if (segmentRef) {
        segmentRef.removeEventListener("focus", handleFocus);
      }
    };
  }, [ref, id]);

  const keyboardHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === SPACE_KEY || event.key === ENTER_KEY) {
      event.stopPropagation();
      handleClick?.(event);
    } else if (event.key === ARROW_LEFT || event.key === ARROW_RIGHT) {
      event.stopPropagation();
      const segmentContainers = parentRef?.current?.querySelectorAll(`.${style["segment-container"]}`);
      if (segmentContainers) {
        const currentActiveElementParent = document.activeElement?.parentElement;
        const currentActiveElementParentIndex =
          currentActiveElementParent != null ? Array.from(segmentContainers).indexOf(currentActiveElementParent) : -1;
        const nextIndex =
          event.key === ARROW_LEFT ? currentActiveElementParentIndex - 1 : currentActiveElementParentIndex + 1;

        if (segmentContainers[nextIndex]) {
          const firstChild = segmentContainers[nextIndex].firstChild as HTMLElement | null;
          firstChild?.focus();
        }
      }
    }
  };

  const keyboardDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === TAB_KEY) {
      const allFocusableElement = (document.querySelectorAll(FOCUSABLE_ELEMENTS_QUERY) ||
        []) as NodeListOf<HTMLDivElement>;

      const currentActiveElement = document.activeElement;

      const currentIndex = Array.from(allFocusableElement).indexOf(currentActiveElement as HTMLDivElement);
      if (event.shiftKey) {
        let previousIndex = currentIndex - 1;
        while (previousIndex > 0 && allFocusableElement[previousIndex].classList.contains(style.segment)) {
          previousIndex--;
        }
        if (previousIndex > 0) {
          allFocusableElement[previousIndex].focus();
        }
      } else {
        let nextIndex = currentIndex + 1;
        while (
          nextIndex < allFocusableElement.length &&
          allFocusableElement[nextIndex].classList.contains(style.segment)
        ) {
          nextIndex++;
        }
        if (nextIndex < allFocusableElement.length) {
          (allFocusableElement[nextIndex] as HTMLElement).focus();
        }
      }
      // }
      event.stopPropagation();
    }
  };

  const { onBlur, onKeyDown, onKeyUp } = useActiveKeyboard<HTMLDivElement>(
    { onKeyUp: keyboardHandler, onKeyDown: keyboardDownHandler },
    {
      id,
      interactiveKeyCodes: [SPACE_KEY, ENTER_KEY, TAB_KEY, ARROW_LEFT, ARROW_RIGHT],
    },
  );

  if ((!label && !icon) || (label && icon)) {
    console.warn("SegmentedControl: Must use one of 'label' or 'icon', not both.");
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick?.(e);
  };

  return (
    <div ref={ref} role="radio" className={style["segment-container"]} data-position={position}>
      <div
        id={id}
        aria-label={label || icon}
        aria-selected={selected}
        className={style.segment}
        data-selected={selected}
        onClick={handleClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        tabIndex={0}
        ref={ref}
      >
        {selected && <Icon name="check-small" appearance="filled" size={24} className={style["selected-icon"]} />}
        <div className={style["segment-content"]}>
          {icon && <Icon name={icon} appearance={(iconAppearance ?? selected) ? "filled" : "outlined"} size={24} />}
          {!icon && label && <span className={style["segment-label"]}>{label}</span>}
        </div>
      </div>
    </div>
  );
};

export default SegmentedControl;
