import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { Decorator } from "@storybook/react";
import { useMemo, useState } from "react";

import { mapNavItemsWithActiveState } from "./navItemsActiveState";

function createCollapsedStateDecorator(): Decorator {
  return function CollapsedStateDecorator(Story, context) {
    const [isCollapsed, setIsCollapsed] = useState(context.args.isCollapsed ?? true);
    return (
      <div>
        <Story args={{ ...context.args, isCollapsed, onCollapsedChange: setIsCollapsed }} />
      </div>
    );
  };
}

function createActiveItemStateDecorator(navigationItems: NavItemProps[]): Decorator {
  return function ActiveItemStateDecorator(Story, context) {
    const [activeItem, setActiveItem] = useState(context.args.activeItem);
    const itemsWithOnClick = navigationItems.map((item) => {
      return {
        ...item,
        onClick: () => setActiveItem(item.id),
        link: undefined,
      };
    });
    return (
      <div>
        <Story args={{ ...context.args, items: itemsWithOnClick as NavItemProps[], activeItem }} />
      </div>
    );
  };
}

function createNestedActiveItemStateDecorator(navigationItems: NavItemProps[], initialActiveId: string): Decorator {
  return function NestedActiveItemStateDecorator(Story, context) {
    const [activeItemId, setActiveItemId] = useState(initialActiveId);
    const itemsWithActiveState = useMemo(
      () => mapNavItemsWithActiveState(navigationItems, activeItemId, setActiveItemId),
      [activeItemId, navigationItems],
    );

    return <Story args={{ ...context.args, items: itemsWithActiveState }} />;
  };
}

export { createCollapsedStateDecorator, createActiveItemStateDecorator, createNestedActiveItemStateDecorator };
