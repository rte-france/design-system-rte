### Long labels truncate

Link labels use `text-overflow: ellipsis` and `white-space: nowrap`. Text that exceeds the available width (or `maxWidth` when set) is truncated. Provide a shorter label or increase `maxWidth` when the full text must remain visible.

### External link behavior applies only to href links

When `routerLink` is set, the component renders an Angular Router link. The `externalLink` input, external-link icon, and `_blank` target are ignored in that mode. Use `href` with `externalLink` for external destinations.

### routerLink takes precedence over href

If `routerLink` (or the deprecated `link` input) is provided, `href` is not used for navigation. Set only the input that matches the intended navigation mode.
