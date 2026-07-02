import { NavItemProps } from '../../../../../../core/components/side-nav/nav-item/nav-item.interface';
import { Decorator } from '@storybook/react';
declare function createCollapsedStateDecorator(): Decorator;
declare function createActiveItemStateDecorator(navigationItems: NavItemProps[]): Decorator;
declare function createNestedActiveItemStateDecorator(navigationItems: NavItemProps[], initialActiveId: string): Decorator;
export { createCollapsedStateDecorator, createActiveItemStateDecorator, createNestedActiveItemStateDecorator };
