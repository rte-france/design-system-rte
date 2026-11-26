```typescript
headerConfig = {
  title: "My Header",
  icon: "home",
  identifier: "MA",
};

items = [
  { id: "home", label: "Home", icon: "home", hasLeadingIcon: true },
];
```

```html
<rte-side-nav
  [headerConfig]="headerConfig"
  [items]="items"
>
  <div content>Page content</div>
</rte-side-nav>
```
