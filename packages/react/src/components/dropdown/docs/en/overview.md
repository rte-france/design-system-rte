```tsx
const [isOpen, setIsOpen] = useState(false);

<Dropdown
  dropdownId="my-dropdown"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  trigger={<button onClick={() => setIsOpen(true)}>Menu</button>}
>
  <DropdownItem label="Messages" leftIcon="mail" onClick={() => console.log("click")} />
  <DropdownItem label="Help" leftIcon="help" />
</Dropdown>
```
