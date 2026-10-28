### Nom accessible

Le composant vérifie qu'un `label`, `aria-label` ou `aria-labelledby` est fourni. Sans l'un de ces attributs, il retourne une erreur dans la console et ne rend pas le switch.

### Identifiant généré

Lorsque `id` n'est pas fourni, le composant génère l'identifiant `${label}-switch` ou utilise un identifiant généré lorsque le label est absent. Fournissez un `id` unique si vous devez maîtriser la valeur de l'identifiant.

### État contrôlé et non contrôlé

`checked` et `defaultChecked` correspondent à deux modes différents. Lorsque `checked` est fourni, l'état est contrôlé et `defaultChecked` n'est pas utilisé.

### Lecture seule

Le mode `readOnly` bloque les changements et le callback `onChange`, mais l'attribut natif `readOnly` est appliqué à un input de type checkbox. Vérifiez le comportement attendu avec les outils et technologies d'assistance ciblés.
