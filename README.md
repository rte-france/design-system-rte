# RTE Design System

Ce repository contient le Design System de RTE.

## Sommaire
- [Présentation](#présentation)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Scripts utiles](#scripts-utiles)
- [Contribution](#contribution)
- [Licence](#licence)

## Présentation
Ce Design System vise à garantir la cohérence visuelle et fonctionnelle des applications RTE. Il propose :
- Des composants UI réutilisables (Angular, React)
- Des tokens de design (couleurs, typographies, espacements, etc.)
- Des utilitaires SCSS et TypeScript
- Une documentation interactive via Storybook

## Structure du projet
```
/packages
  /core         # Tokens, utilitaires, primitives SCSS/TS
  /angular      # Librairie Angular ([voir README dédié](./packages/angular/README.md))
  /react        # Librairie React ([voir README dédié](./packages/react/README.md))
  /design-docs  # Documentation, Storybook
```

## Installation et utilisation

### Pour Angular

Voir [Angular](./packages/angular/README.md)

### Pour React

Voir [React](./packages/react/README.md)


## Développement

Pour utiliser le design system en local

1. **Cloner le repository** :
  ```bash
  git clone https://github.com/rte-france/design-system-rte.git
  cd design-system-rte
  ```

2. **Installer les dépendances** :
  ```bash
  npm install
  ```

3. **Générer les icones**
  ```bash
  npm run generate:icons
  ```

4. **Lancer le storybook** :
  ```bash
  npm run base-storybook
  ```

  Puis

  ```bash
  npm run design-docs
  ```

---

Pour toute question, contactez l’équipe Design System RTE.
