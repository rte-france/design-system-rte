import{j as e,c as r}from"./index-CKGg9vBK.js";import{useMDXComponents as i}from"./index-DL7Mpk60.js";/* empty css               */import"./iframe-bXEBGqeq.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const o=""+new URL("Exemple-Db7hVQPu.svg",import.meta.url).href,l=""+new URL("Brands-DnujRhH_.svg",import.meta.url).href,u=""+new URL("Modes-9zhANuw8.svg",import.meta.url).href,d=""+new URL("ColorChoice-C6toh6aQ.svg",import.meta.url).href,a=""+new URL("Denomination-B2f9uK2j.svg",import.meta.url).href;function t(s){const n={li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Design system/Couleurs"}),`
`,e.jsx("h1",{style:{fontFamily:"Nunito"},children:" Les couleurs sémantiques "}),`
`,e.jsx("h2",{id:"definition",style:{border:"none",fontFamily:"Nunito"},children:" Définition "}),`
`,e.jsx("p",{children:` Une première valeur HEX est attribuée à ce que l'on appelle une "couleur primitive". Ensuite, une signification est associée à cette couleur, ce qui en fait une "couleur sémantique". Par exemple, cela peut être la couleur par défaut d'un arrière-plan. C'est cette couleur sémantique qui peut être utilisée pour des éléments comme l'arrière-plan d'un bouton. `}),`
`,e.jsx(n.p,{children:"L'exemple ci-dessous illustre bien ce concept :"}),`
`,e.jsx("img",{src:o,width:"100%",alt:"Schema du fonctionnement d'un design token"}),`
`,e.jsx("h2",{id:"brands-et-modes",style:{border:"none",fontFamily:"Nunito"},children:" Brands et modes "}),`
`,e.jsx("p",{children:` Une première valeur HEX est attribuée à ce que l'on appelle une "couleur primitive". Ensuite, une signification est associée à cette couleur, ce qui en fait une "couleur sémantique". Par exemple, cela peut être la couleur par défaut d'un arrière-plan. C'est cette couleur sémantique qui peut être utilisée pour des éléments comme l'arrière-plan d'un bouton.`}),`
`,e.jsx(n.p,{children:"L'exemple ci-dessous illustre bien ce concept :"}),`
`,e.jsx("p",{children:"Le Design RTE propose trois gammes de couleurs, appelées Brands, et permettant aux designers d'adapter le thème du design system en fonction du produit :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("b",{children:"Blue Iceberg"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("b",{children:"Violet"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("b",{children:"Vert Forêt"}),`
`]}),`
`]}),`
`,e.jsx("img",{src:l,width:"100%",alt:"Exemple visuel des themes disponible"}),`
`,e.jsx("p",{children:` Certains composants du Design System et leurs éléments sont adaptés aux différentes "brands", tandis que d'autres restent communs à tous.`}),`
`,e.jsxs("p",{children:['Chaque "brand" est ensuite disponible en deux modes : ',e.jsx(n.strong,{children:"Light"})," et ",e.jsx(n.strong,{children:"Dark"}),". Ces termes font référence à la polarité du contraste entre un objet et le fond sur lequel il repose."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs("p",{children:['Le "',e.jsx(n.strong,{children:"Light Mode"}),'", souvent le mode par défaut, utilise des fonds clairs sur les interfaces utilisateur.']}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs("p",{children:['Le "',e.jsx(n.strong,{children:"Dark Mode"}),'" utilise des fonds sombres.']}),`
`]}),`
`]}),`
`,e.jsx("p",{children:"Ainsi, la couleur d'un composant, d'un texte ou d'un élément d'interface varie selon le mode (Light ou Dark), afin de garantir une visibilité optimale en fonction du contraste avec les différents fonds."}),`
`,e.jsx("img",{src:u,width:"100%",alt:"Image montrant la differenc entre light et dark theme"}),`
`,e.jsx("h2",{id:"choix-des-couleurs",style:{border:"none",fontFamily:"Nunito"},children:" Choix des couleurs "}),`
`,e.jsx("p",{children:` Les conversions de couleurs entre les "brands" et les thèmes sont gérées à l'aide des Design Tokens.`}),`
`,e.jsx("p",{children:'Par exemple, tous les arrière-plans de boutons par défaut sont définis par la couleur sémantique "background/brand_default". Cependant, les couleurs primitives associées à ce token varient en fonction des "brands" et des modes.'}),`
`,e.jsx("p",{children:`Si l'arrière-plan d'un bouton est "bleu_iceberg/300" en Light Mode, il sera également "bleu_iceberg/300" en Dark Mode.`}),`
`,e.jsx("p",{children:"Ainsi, si une couleur primitive est modifiée, cette modification se répercute dans l'ensemble du Design System et dans tous les produits qui l'utilisent."}),`
`,e.jsx("img",{src:d,width:"100%",alt:"Exemple de fonctionnement des designs tokens entre light et dark theme"}),`
`,e.jsx("h2",{id:"denomination",style:{border:"none",fontFamily:"Nunito"},children:" Dénomination "}),`
`,e.jsx("p",{children:"Les noms des couleurs sémantiques sont construits selon le schéma suivant :"}),`
`,e.jsx("img",{src:a,width:"100%",alt:"Schema de nomination par Groupe, Role, Apparence et Etat"}),`
`,e.jsx("p",{children:"Exemples :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("p",{children:"content/primary_inverse"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("p",{children:"background/brand_danger_pressed"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("p",{children:"border_disabled"}),`
`]}),`
`]})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{v as default};
