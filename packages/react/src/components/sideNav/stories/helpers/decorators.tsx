import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { Decorator } from "@storybook/react";
import { useState } from "react";

function createCollapsedStateDecorator(): Decorator {
  return function CollapsedStateDecorator(Story, context) {
    const [collapsed, setCollapsed] = useState(context.args.collapsed ?? true);
    return (
      <div>
        <Story args={{ ...context.args, collapsed, onCollapsedChange: setCollapsed }} />
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

export { createCollapsedStateDecorator, createActiveItemStateDecorator };
