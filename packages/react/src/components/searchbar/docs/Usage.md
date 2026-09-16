### Utilisation de base

```tsx
import { useState } from "react";
import Searchbar from "../Searchbar";

const [value, setValue] = useState("");

<Searchbar
  id="searchbar-default"
  appearance="primary"
  label="Rechercher"
  value={value}
  assistiveText="Texte assistif"
  showResetButton
  onChange={setValue}
/>;
```

### Apparences

Utiliser `appearance="primary"` pour afficher un bouton de recherche à droite du champ. Utiliser `appearance="secondary"` pour afficher une icône de recherche dans le champ sans bouton séparé.

### Espacement compact

Activer `compactSpacing` lorsque l’espace vertical est limité :

```tsx
<Searchbar appearance="primary" compactSpacing />
<Searchbar appearance="secondary" compactSpacing />
```

### Effacement et recherche

`showResetButton` affiche l’action d’effacement. `onClear` est appelé lorsque cette action est utilisée. `onSearch` reçoit la valeur courante lors d’un clic sur le bouton de recherche ou lorsque l’utilisateur appuie sur Entrée.

```tsx
<Searchbar value={value} onChange={setValue} onClear={() => setValue("")} />
```

### Suggestions et options filtrées

La Searchbar peut être utilisée comme trigger d’un `Dropdown` contrôlé par le parent. Dans cet exemple, les options sont filtrées à partir de trois caractères et la sélection remplace la valeur :

```tsx
import { useMemo, useState } from "react";

import Dropdown from "../../dropdown/Dropdown";
import DropdownItem from "../../dropdown/dropdownItem/DropdownItem";
import Searchbar from "../Searchbar";

const allOptions = [
  "Apple",
  "Apple2",
  "Banana",
  "Banana2",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
];

const SearchbarWithFilteredOptions = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = useMemo(() => {
    if (!searchValue || searchValue.length < 3) {
      return [];
    }

    return allOptions.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));
  }, [searchValue]);

  const handleChange = (value: string | undefined) => {
    setSearchValue(value ?? "");
    setIsOpen(true);
  };

  return (
    <Dropdown
      dropdownId="searchbar-filtered-dropdown"
      trigger={
        <Searchbar
          id="searchbar-filtered"
          appearance="primary"
          value={searchValue}
          assistiveText="Type at least 3 characters to filter options"
          showResetButton
          onChange={handleChange}
        />
      }
      isOpen={isOpen && filteredOptions.length > 0}
      onClose={() => setIsOpen(false)}
      position="bottom"
      alignment="start"
      offset={10}
      autofocus={false}
    >
      {filteredOptions.map((option) => (
        <DropdownItem
          key={option}
          label={option}
          onClick={() => {
            setSearchValue(option);
            setIsOpen(false);
          }}
        />
      ))}
    </Dropdown>
  );
};
```
