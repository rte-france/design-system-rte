import { forwardRef } from "react";

export const FakeRouterLink = forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ href, children, onClick, ...props }, ref) => (
    <a
      ref={ref}
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
        console.log(`Navigating to ${href}`);
      }}
      {...props}
    >
      {children}
    </a>
  ),
);
