import { ComponentRef, EventEmitter } from "@angular/core";
import { DropdownItemProps } from "@design-system-rte/core/components/dropdown/dropdown.interface";

export interface SubmenuCreatedResult {
  componentRef: ComponentRef<unknown>;
  hostElement: HTMLElement;
}

export interface SubmenuRequestEvent {
  children: DropdownItemConfig[];
  childId: string;
  triggerElement: HTMLElement;
  onCreated: (result: SubmenuCreatedResult) => void;
}

export interface DropdownItemConfig extends Omit<DropdownItemProps, "onClick"> {
  id?: string;
  selected?: boolean;
  label: string;
  leftIcon?: string;
  trailingText?: string;
  disabled?: boolean;
  hasSeparator?: boolean;
  hasIndent?: boolean;
  link?: string;
  click?: EventEmitter<Event>;
  children?: DropdownItemConfig[];
}

export type DropdownItemEvent = {
  event: Event;
  id: string;
  item?: DropdownItemConfig;
};
