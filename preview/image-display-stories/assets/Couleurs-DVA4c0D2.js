import{j as e,c as i}from"./index-LWSJnpRp.js";import{useMDXComponents as r}from"./index-DL7Mpk60.js";import"./iframe-DC9D2GRv.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const o=""+new URL("Exemple-D5OVb5gd.png",import.meta.url).href,l=""+new URL("Brands-JyUtiYk4.png",import.meta.url).href,u=""+new URL("Modes-BC5ZKmV_.png",import.meta.url).href,d=""+new URL("ColorChoice-2KDMMUft.png",import.meta.url).href,a=""+new URL("Denomination-Q_8TJAnB.png",import.meta.url).href;function t(s){const n={li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Design systems/Couleurs"}),`
`,e.jsx("h1",{style:{fontFamily:"Nunito"},children:" Les couleurs sémantiques "}),`
`,e.jsx("h2",{style:{border:"none",fontFamily:"Nunito"},children:" Définition "}),`
`,e.jsx(n.p,{children:`Une première valeur HEX est attribuée à ce que l’on appelle une "couleur primitive". Ensuite, une signification est associée à cette couleur, ce qui en fait une "couleur sémantique". Par exemple, cela peut être la couleur par défaut d'un arrière-plan. C'est cette couleur sémantique qui peut être utilisée pour des éléments comme l’arrière-plan d’un bouton.`}),`
`,e.jsx(n.p,{children:"L'exemple ci-dessous illustre bien ce concept :"}),`
`,e.jsx("img",{src:o,width:"100%"}),`
`,e.jsx("h2",{style:{border:"none",fontFamily:"Nunito"},children:" Brands et modes "}),`
`,e.jsx(n.p,{children:`Une première valeur HEX est attribuée à ce que l’on appelle une "couleur primitive". Ensuite, une signification est associée à cette couleur, ce qui en fait une "couleur sémantique". Par exemple, cela peut être la couleur par défaut d'un arrière-plan. C'est cette couleur sémantique qui peut être utilisée pour des éléments comme l’arrière-plan d’un bouton.`}),`
`,e.jsx(n.p,{children:"L'exemple ci-dessous illustre bien ce concept :"}),`
`,e.jsx(n.p,{children:"Le Design RTE propose trois gammes de couleurs, appelées Brands, et permettant aux designers d'adapter le thème du design system en fonction du produit :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Blue Iceberg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Violet"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Vert Forêt"})}),`
`]}),`
`,e.jsx("img",{src:l,width:"100%"}),`
`,e.jsx(n.p,{children:'Certains composants du Design System et leurs éléments sont adaptés aux différentes "brands", tandis que d’autres restent communs à tous.'}),`
`,e.jsxs(n.p,{children:['Chaque "brand" est ensuite disponible en deux modes : ',e.jsx(n.strong,{children:"Light"})," et ",e.jsx(n.strong,{children:"Dark"}),". Ces termes font référence à la polarité du contraste entre un objet et le fond sur lequel il repose."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Le “",e.jsx(n.strong,{children:"Light Mode"}),"”, souvent le mode par défaut, utilise des fonds clairs sur les interfaces utilisateur."]}),`
`,e.jsxs(n.li,{children:["Le ”",e.jsx(n.strong,{children:"Dark Mode"}),"” utilise des fonds sombres."]}),`
`]}),`
`,e.jsx(n.p,{children:"Ainsi, la couleur d’un composant, d’un texte ou d’un élément d’interface varie selon le mode (Light ou Dark), afin de garantir une visibilité optimale en fonction du contraste avec les différents fonds."}),`
`,e.jsx("img",{src:u,width:"100%"}),`
`,e.jsx("h2",{style:{border:"none",fontFamily:"Nunito"},children:" Choix des couleurs "}),`
`,e.jsx(n.p,{children:'Les conversions de couleurs entre les "brands" et les thèmes sont gérées à l’aide des Design Tokens.'}),`
`,e.jsx(n.p,{children:'Par exemple, tous les arrière-plans de boutons par défaut sont définis par la couleur sémantique "background/brand_default". Cependant, les couleurs primitives associées à ce token varient en fonction des "brands" et des modes.'}),`
`,e.jsx(n.p,{children:'Si l’arrière-plan d’un bouton est "bleu_iceberg/300" en Light Mode, il sera également "bleu_iceberg/300" en Dark Mode.'}),`
`,e.jsx(n.p,{children:"Ainsi, si une couleur primitive est modifiée, cette modification se répercute dans l'ensemble du Design System et dans tous les produits qui l’utilisent."}),`
`,e.jsx("img",{src:d,width:"100%"}),`
`,e.jsx("h2",{style:{border:"none"},children:" Dénomination "}),`
`,e.jsx(n.p,{children:"Les noms des couleurs sémantiques sont construits selon le schéma suivant :"}),`
`,e.jsx("img",{src:a,width:"100%"}),`
`,e.jsx(n.p,{children:"Exemples :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"content/primary_inverse"}),`
`,e.jsx(n.li,{children:"background/brand_danger_pressed"}),`
`,e.jsx(n.li,{children:"border_disabled"}),`
`]})]})}function b(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{b as default};
