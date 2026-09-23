# Procédure de maintenance des alertes de dépendances

Cette procédure décrit comment exporter des alertes de dépendances, générer un
rapport récapitulatif, identifier les packages réellement contrôlables et
appliquer les corrections disponibles sans dégrader les workspaces.

Elle est indépendante de l'outil utilisé pour produire le rapport, du
fournisseur Git, du dépôt et du framework. Les commandes ci-dessous sont des
exemples à adapter à l'environnement concerné.

## 1. Pré-requis

Configurer un accès à la source d'alertes utilisée par le projet. Par exemple,
avec un client d'API :

```bash
<client-api> auth status
```

Le compte ou token doit permettre de consulter les alertes de sécurité.

Vérifier également les dépendances locales :

```bash
npm --version
node --version
jq --version
```

Avant toute modification, contrôler l'état du dépôt :

```bash
git status --short
```

Les modifications locales existantes doivent être conservées et distinguées
des changements de maintenance de dépendances.

## 2. Exporter les alertes

### Toutes les alertes ouvertes

Exporter les alertes ouvertes depuis l'interface ou l'API du fournisseur :

```bash
<commande-ou-exporteur> \
  --state open \
  --output alerts-open.json
```

### Alertes ouvertes de sévérité élevée ou critique

Si le fournisseur ne permet pas de filtrer la sévérité à l'export, filtrer le
JSON obtenu :

```bash
jq '[.[] | select(
    .security_advisory.severity == "high" or
    .security_advisory.severity == "critical"
  )]' < alerts-open.json \
  > alerts-open-high.json
```

Vérifier l'export :

```bash
jq 'length, (.[0] | keys)' alerts-open-high.json
```

Les exports peuvent contenir des informations de sécurité internes. Ne pas les
publier dans un dépôt public ou les transmettre à un service externe.

## 3. Générer le rapport récapitulatif

À partir de l'export JSON, générer un document récapitulatif regroupant les
alertes, leur origine, le package contrôlable, la version corrigée et la
solution proposée.

Une solution doit être formulée ainsi :

```text
Mettre à jour <package déclaré> vers <version minimale>.
```

## 4. Identifier l'origine d'une alerte

Pour chaque package vulnérable, utiliser l'outil d'inspection des dépendances
du gestionnaire utilisé. Avec npm :

```bash
npm explain <package> --package-lock-only
npm --prefix <workspace> explain <package> --package-lock-only
```

Rechercher aussi le package dans tous les manifests :

```bash
rg '"<package>"' --glob 'package.json'
```

Un package déclaré dans les dépendances de développement est contrôlable, même
si l'alerte porte sur un sous-package transitif.

## 5. Appliquer les corrections

Avant installation :

1. définir le périmètre et les exclusions ;
2. ne pas modifier un framework ou un workspace explicitement exclu ;
3. vérifier les versions directes et les peer dependencies ;
4. inspecter les `overrides` existants ;
5. appliquer les mises à jour manifest par manifest.

Exemples de commandes ciblées avec npm :

```bash
npm install --save-dev prettier-eslint@17.1.2
npm --prefix <workspace> install --save-dev <package>@<version>
```

Ne pas utiliser `npm audit fix --force` sans validation explicite : cette
commande peut introduire des changements majeurs et toucher des frameworks
exclus.

### Utiliser un override

Un override est adapté lorsqu'une dépendance transitive reste vulnérable et
qu'aucun package parent contrôlable ne propose encore une version corrigée.

Exemple :

```json
{
  "overrides": {
    "flatted": "3.4.2",
    "js-yaml": "4.3.2",
    "minimatch": "9.0.7"
  }
}
```

Limiter l'override au manifest concerné. Ne pas ajouter un override global
dans un workspace global s'il force des versions incompatibles avec d'autres
packages ou frameworks.

Après modification :

```bash
npm --prefix <workspace> install --package-lock-only
```

## 7. Vérifier les overrides

Parcourir les overrides et resolutions :

```bash
rg -n '"overrides"|"resolutions"' \
  --glob 'package.json' \
  --glob 'package.json5'
```

Pour chaque override, vérifier :

```bash
npm ls <package> --all
npm explain <package> --package-lock-only
npm audit --json
```

Un override est potentiellement superflu si le package parent installe la
version corrigée sans la contrainte forcée. Tester cette hypothèse dans une
branche ou une copie de travail, puis signaler le résultat dans le rapport.

Ne pas supprimer automatiquement l'override. Le rapport doit indiquer :

```text
Override <package>@<version> : potentiellement superflu.
Action proposée : vérifier sans override dans une PR, puis supprimer si les
tests passent.
```

## 8. Valider les résultats

Relancer les audits par manifest :

```bash
npm audit --audit-level=high
npm --prefix <workspace> audit --audit-level=high
```

Vérifier les versions réellement installées :

```bash
npm ls <package> --all
npm --prefix <workspace> ls <package> --all
```

Lancer les validations ciblées :

```bash
npm --prefix <workspace> run build
```

## 9. Maintenance continue

L'outil de surveillance des dépendances surveille les vulnérabilités et les
mises à jour des packages, mais ne signale pas nécessairement qu'un override
est devenu inutile.

Après chaque mise à jour de package parent ou chaque revue mensuelle :

```bash
npm audit --audit-level=high
npm --prefix <workspace> audit --audit-level=high
npm ls <package> --all
```

Supprimer un override uniquement lorsque :

1. la version corrigée est résolue sans override ;
2. l'audit ne signale plus la vulnérabilité ;
3. les peer dependencies restent compatibles ;
4. les builds et tests ciblés passent.
