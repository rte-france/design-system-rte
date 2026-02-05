import{j as e,M as a}from"./index-D5l6Cgxg.js";import{useMDXComponents as c}from"./index-DL7Mpk60.js";import{H as o,P as r,B as x,A as l,a as i}from"./Body-bnXuUZLC.js";import{D as t}from"./GeneralDocs-Czo8hWoe.js";import{L as h}from"./List-BZF_vG8I.js";import"./iframe-DbsY8Zu9.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-EiZlDzFh.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function d(s){const n={code:"code",pre:"pre",strong:"strong",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Design system/Get Started - Kit de migration/React"}),`
`,e.jsxs("div",{className:"docs",children:[e.jsxs("div",{children:[e.jsx(o,{title:"Migration depuis Material UI"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:e.jsxs(r,{children:["Ce guide compare l'architecture et les conventions de nommage de ",e.jsx(n.strong,{children:"Material UI (MUI)"})," avec celles du ",e.jsx(n.strong,{children:"Design System RTE"}),". Si vous migrez depuis Material UI, cette documentation vous aidera à comprendre les différences fondamentales entre les deux systèmes."]})})]}),e.jsxs(x,{children:[e.jsx(l,{title:"Différences architecturales",id:"architectural-differences",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"4px 8px"},children:e.jsxs(t,{title:"Modèle de composants",headingLevel:3,children:[e.jsxs(r,{children:[e.jsx(n.strong,{children:"Material UI"})," utilise des composants React avec des props pour la configuration. Le ",e.jsx(n.strong,{children:"Design System RTE"})," utilise également des composants React avec des props, mais avec une API unifiée et des conventions de nommage cohérentes."]}),e.jsx(i,{level:4,id:"material-ui-approach",children:"Approche Material UI"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, TextField, Checkbox } from '@mui/material';

<Button variant="contained" color="primary">Click me</Button>
<TextField label="Nom" variant="outlined" />
<Checkbox defaultChecked />
`})}),e.jsx(i,{level:4,id:"rte-design-system-approach",children:"Approche Design System RTE"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, TextInput, Checkbox } from '@design-system-rte/react';

<Button variant="primary" label="Click me" />
<TextInput id="name" label="Nom" />
<Checkbox id="accept" label="Accepter" />
`})})]})})}),e.jsx(l,{title:"Tableau comparatif",id:"comparison-table",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"4px 8px"},children:[e.jsx(r,{children:"Le tableau suivant compare les composants principaux de Material UI avec leurs équivalents dans le Design System RTE :"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Composant"}),e.jsx("th",{children:"Material UI"}),e.jsx("th",{children:"Design System RTE"}),e.jsx("th",{children:"Différences principales"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Button"})}),e.jsxs("td",{children:[e.jsx("code",{children:'<Button variant="contained">'}),e.jsx("br",{}),e.jsx("code",{children:"<IconButton>"})]}),e.jsxs("td",{children:[e.jsx("code",{children:'<Button variant="primary">'}),e.jsx("br",{}),e.jsx("code",{children:"<IconButton>"})]}),e.jsxs("td",{children:["Material UI et Design System RTE utilisent des composants avec props. Le Design System RTE utilise ",e.jsx("code",{children:"label"})," au lieu de children pour le texte du bouton."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Text Input"})}),e.jsx("td",{children:e.jsx("code",{children:'<TextField label="Nom" />'})}),e.jsx("td",{children:e.jsx("code",{children:'<TextInput id="name" label="Nom" />'})}),e.jsxs("td",{children:["Material UI et Design System RTE encapsulent label et input. Le Design System RTE utilise ",e.jsx("code",{children:"id"})," obligatoire et ",e.jsx("code",{children:"onChange"})," retourne la valeur directement."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Checkbox"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<Checkbox />"}),e.jsx("br",{}),e.jsx("code",{children:"<FormControlLabel />"})]}),e.jsx("td",{children:e.jsx("code",{children:'<Checkbox id="accept" label="Accepter" />'})}),e.jsxs("td",{children:["Material UI sépare le checkbox et le label. Le Design System RTE les combine dans un seul composant avec ",e.jsx("code",{children:"id"})," obligatoire."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Radio Button"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<Radio />"}),e.jsx("br",{}),e.jsx("code",{children:"<RadioGroup>"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"<RadioButton />"}),e.jsx("br",{}),e.jsx("code",{children:"<RadioButtonGroup>"})]}),e.jsx("td",{children:"Structure similaire entre Material UI et Design System RTE."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Dialog/Modal"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<Dialog>"}),e.jsx("br",{}),e.jsx("code",{children:"<DialogTitle>"}),e.jsx("br",{}),e.jsx("code",{children:"<DialogContent>"}),e.jsx("br",{}),e.jsx("code",{children:"<DialogActions>"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"<Modal>"})," avec props"]}),e.jsx("td",{children:"Material UI utilise plusieurs composants pour la structure. Le Design System RTE utilise un seul composant avec des props pour title, description, et des boutons passés en props."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Badge"})}),e.jsx("td",{children:e.jsxs("code",{children:["<Badge badgeContent=",4,">"]})}),e.jsx("td",{children:e.jsxs("code",{children:["<Badge count=",4,">"]})}),e.jsxs("td",{children:["Material UI utilise ",e.jsx("code",{children:"badgeContent"}),", le Design System RTE utilise ",e.jsx("code",{children:"count"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Icon"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<Icon>home</Icon>"}),e.jsx("br",{}),"ou Material Icons"]}),e.jsx("td",{children:e.jsx("code",{children:'<Icon name="home" />'})}),e.jsxs("td",{children:["Material UI utilise des noms d'icônes en texte ou des composants séparés. Le Design System RTE utilise une prop ",e.jsx("code",{children:"name"})," typée avec un système de mapping d'icônes."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Chip/Tag"})}),e.jsx("td",{children:e.jsx("code",{children:'<Chip label="Tag" />'})}),e.jsxs("td",{children:[e.jsx("code",{children:'<Chip label="Tag" />'}),e.jsx("br",{}),e.jsx("code",{children:'<Tag label="Tag" />'})]}),e.jsx("td",{children:"Material UI utilise un seul composant Chip. Le Design System RTE distingue Chip (interactif) et Tag (informatif)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tabs"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<Tabs>"}),e.jsx("br",{}),e.jsx("code",{children:"<Tab>"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"<Tab>"}),e.jsx("br",{}),e.jsx("code",{children:"<TabItem>"})]}),e.jsx("td",{children:"Structure similaire avec des composants parents/enfants."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tooltip"})}),e.jsx("td",{children:e.jsx("code",{children:'<Tooltip title="Info">'})}),e.jsx("td",{children:e.jsx("code",{children:'<Tooltip content="Info">'})}),e.jsxs("td",{children:["Material UI utilise ",e.jsx("code",{children:"title"}),", le Design System RTE utilise ",e.jsx("code",{children:"content"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Loader/Spinner"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<CircularProgress />"}),e.jsx("br",{}),e.jsx("code",{children:"<LinearProgress />"})]}),e.jsx("td",{children:e.jsx("code",{children:"<Loader />"})}),e.jsx("td",{children:"Material UI sépare les différents types de loaders. Le Design System RTE unifie dans un composant loader avec des variantes."})]})]})]})]})}),e.jsx(l,{title:"Exemples de migration",id:"migration-examples",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"4px 8px"},children:[e.jsxs(t,{title:"Migration d'un bouton",headingLevel:3,children:[e.jsx(i,{level:4,id:"material-ui-button",children:"Material UI"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from '@mui/material';

<Button variant="contained" color="primary" disabled={isDisabled} onClick={handleClick}>
  Click me
</Button>
`})}),e.jsx(i,{level:4,id:"rte-design-system-button",children:"Design System RTE"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from '@design-system-rte/react';

<Button 
  variant="primary" 
  label="Click me"
  disabled={isDisabled} 
  onClick={handleClick}
/>
`})})]}),e.jsxs(t,{title:"Migration d'un champ de texte",headingLevel:3,children:[e.jsx(i,{level:4,id:"material-ui-input",children:"Material UI"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextField } from '@mui/material';

<TextField 
  label="Nom" 
  variant="outlined"
  value={name}
  onChange={(e) => setName(e.target.value)}
  error={hasError}
  required
/>
`})}),e.jsx(i,{level:4,id:"rte-design-system-input",children:"Design System RTE"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextInput } from '@design-system-rte/react';

<TextInput
  id="name"
  label="Nom"
  value={name}
  onChange={setName}
  error={hasError}
  required
/>
`})})]}),e.jsxs(t,{title:"Migration d'une case à cocher",headingLevel:3,children:[e.jsx(i,{level:4,id:"material-ui-checkbox",children:"Material UI"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox, FormControlLabel } from '@mui/material';

<FormControlLabel
  control={<Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />}
  label="Accepter les conditions"
  disabled={isDisabled}
/>
`})}),e.jsx(i,{level:4,id:"rte-design-system-checkbox",children:"Design System RTE"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox } from '@design-system-rte/react';

<Checkbox
  id="accept"
  label="Accepter les conditions"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  disabled={isDisabled}
/>
`})})]}),e.jsxs(t,{title:"Migration d'un dialogue/modal",headingLevel:3,children:[e.jsx(i,{level:4,id:"material-ui-modal",children:"Material UI"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
  <DialogTitle>Titre</DialogTitle>
  <DialogContent>
    Contenu du dialogue
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setIsOpen(false)}>Annuler</Button>
    <Button onClick={handleValidate} variant="contained">Valider</Button>
  </DialogActions>
</Dialog>
`})}),e.jsx(i,{level:4,id:"rte-design-system-modal",children:"Design System RTE"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Modal, Button } from '@design-system-rte/react';

<Modal
  id="my-modal"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Titre"
  description="Contenu du dialogue"
  primaryButton={<Button variant="primary" label="Valider" onClick={handleValidate} />}
  secondaryButton={<Button variant="neutral" label="Annuler" onClick={() => setIsOpen(false)} />}
/>
`})})]})]})}),e.jsx(l,{title:"Checklist de migration",id:"migration-checklist",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"4px 8px"},children:e.jsxs(h,{children:[e.jsx("li",{children:"Remplacer les imports Material UI par les imports du Design System RTE"}),e.jsxs("li",{children:["Adapter les props : ",e.jsx("code",{children:"variant"}),", ",e.jsx("code",{children:"size"}),", ",e.jsx("code",{children:"label"})]}),e.jsxs("li",{children:["Mettre à jour la configuration de thème (attributs ",e.jsx("code",{children:"data-theme"})," et ",e.jsx("code",{children:"data-mode"}),")"]}),e.jsx("li",{children:"Tester l'accessibilité et les comportements interactifs"})]})})})]})]})]})}function T(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{T as default};
