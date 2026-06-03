import type { NavItem } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { Decorator } from "@storybook/react";
import { useMemo, useState } from "react";

import { mapNavItemsWithActiveState } from "./navItemsActiveState";

function createActiveItemStateDecorator(navigationItems: NavItem[]): Decorator {
  return function ActiveItemStateDecorator(Story, context) {
    const [activeItem, setActiveItem] = useState("home");

    const itemsWithActiveState = useMemo(() => mapNavItemsWithActiveState(navigationItems, activeItem), [activeItem]);

    return (
      <Story
        args={{
          ...context.args,
          items: itemsWithActiveState,
          activeItem,
          onItemClicked: setActiveItem,
        }}
      />
    );
  };
}

function createNestedActiveItemStateDecorator(navigationItems: NavItem[], initialActiveId: string): Decorator {
  return function NestedActiveItemStateDecorator(Story, context) {
    const [activeItem, setActiveItem] = useState(initialActiveId);

    const itemsWithActiveState = useMemo(() => mapNavItemsWithActiveState(navigationItems, activeItem), [activeItem]);

    return (
      <Story
        args={{
          ...context.args,
          items: itemsWithActiveState,
          activeItem,
          onItemClicked: setActiveItem,
        }}
      />
    );
  };
}

function createCollapsedStateDecorator(): Decorator {
  return function CollapsedStateDecorator(Story, context) {
    const [isCollapsed, setIsCollapsed] = useState(context.args.isCollapsed ?? false);

    return (
      <Story
        args={{
          ...context.args,
          isCollapsed,
          onCollapsedChange: setIsCollapsed,
        }}
      />
    );
  };
}

function createOnNavigateDecorator(): Decorator {
  return function OnNavigateDecorator(Story, context) {
    const [, setPath] = useState("/");

    return (
      <Story
        args={{
          ...context.args,
          onNavigate: (route: string) => {
            setPath(route);
          },
        }}
      />
    );
  };
}

export {
  createActiveItemStateDecorator,
  createCollapsedStateDecorator,
  createNestedActiveItemStateDecorator,
  createOnNavigateDecorator,
};
