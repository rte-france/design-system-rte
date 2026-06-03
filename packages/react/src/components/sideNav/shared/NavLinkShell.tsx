import { MouseEvent, ReactElement, ReactNode } from "react";

export interface NavLinkRenderProps {
  route: string;
  label: string;
  active?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

export type NavLinkRenderer = (props: NavLinkRenderProps) => ReactElement;

export interface NavLinkShellProps {
  route: string;
  label: string;
  active?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
  onNavigate?: (route: string) => void;
  renderLink?: NavLinkRenderer;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

function isModifiedClick(event: MouseEvent<HTMLElement>): boolean {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

function NavLinkShell({
  route,
  label,
  active,
  external,
  className,
  children,
  onNavigate,
  renderLink,
  onClick,
}: NavLinkShellProps): ReactElement {
  if (renderLink && !external) {
    return renderLink({ route, label, active, external, className, children });
  }

  if (external) {
    return (
      <a
        href={route}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={route}
      className={className}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      data-active={active}
      onClick={(event) => {
        if (!isModifiedClick(event) && onNavigate) {
          event.preventDefault();
          onNavigate(route);
        }
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

export default NavLinkShell;
