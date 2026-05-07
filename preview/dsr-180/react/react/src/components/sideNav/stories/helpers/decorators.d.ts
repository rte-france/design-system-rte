import { NavItemProps } from '../../../../../../core/components/side-nav/nav-item/nav-item.interface';
import { Decorator } from '@storybook/react';
declare function createCollapsedStateDecorator(): Decorator;
declare function createActiveItemStateDecorator(navigationItems: NavItemProps[]): Decorator;
export { createCollapsedStateDecorator, createActiveItemStateDecorator };
