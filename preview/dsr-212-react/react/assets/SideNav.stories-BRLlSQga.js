import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Mt,a as qt}from"./keyboard-test.constants-By8W48aj.js";import{w as j,e as r,a as Pt,u as c}from"./index-4rjIhT2C.js";import{f as Rt}from"./testing.utils-mIZIUNbM.js";import{d as Ee,B as Kt}from"./BaseSideNav-CIVoiMbi.js";import{S as ye,E as fe,c as Be,b as Vt,d as Ot}from"./keyboard.constants-BverKK8B.js";import{r as w}from"./index-G8LIXM5I.js";import{u as Ct}from"./useActiveKeyboard-DaOmFJe_.js";import{D as Y}from"./Divider-BMotkXeQ.js";import{I as we,B as At}from"./Badge-CyCYn5x0.js";import{I as Ht}from"./Icon-DOkBvtOM.js";import{T as Wt}from"./Tooltip-BDlBB6rF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Lt="_navItemContainer_2p0ot_1",Gt="_navItemLeft_2p0ot_61",zt="_navItem_2p0ot_1",Yt="_navItemRight_2p0ot_76",G={navItemContainer:Lt,navItemLeft:Gt,navItem:zt,navItemRight:Yt},Ut="_navMenuContainer_wmg5k_1",$t="_navMenu_wmg5k_1",Jt="_menuContentLeft_wmg5k_45",Qt="_menuContentRight_wmg5k_50",Xt="_menuIcon_wmg5k_91",Zt="_nestedMenu_wmg5k_99",en="_icon_wmg5k_114",R={navMenuContainer:Ut,navMenu:$t,menuContentLeft:Jt,menuContentRight:Qt,menuIcon:Xt,nestedMenu:Zt,icon:en};function Te({link:n,label:a,tabIndex:e,onKeyDown:t,onFocus:o,onBlur:i,onClick:l,children:d,styleType:C="item"}){const f=C==="menu"?R:G,y={className:C==="menu"?f.navMenu:f.navItem,tabIndex:e,"aria-label":a,...o&&{onFocus:o},...i&&{onBlur:i},...l&&{onClick:l},...t&&{onKeyDown:t}};return n?s.jsx("a",{href:n,...y,children:d}):s.jsx("span",{...y,children:d})}Te.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function tn(n=!1,a=!1){return n?we.s:a?we.l:we.m}function Ie({icon:n,showIcon:a=!0,label:e,collapsed:t,isNested:o,styleType:i="item"}){const l=tn(o,t),d=i==="menu"?R:G;return s.jsxs(s.Fragment,{children:[a&&n&&s.jsx(Ht,{name:n,className:d.icon,size:l}),t?null:s.jsx("span",{children:e})]})}Ie.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function ke({label:n,collapsed:a,children:e}){return a&&n?s.jsx(Wt,{label:n,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}ke.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function St(n){return n===!1?-1:0}function Bt({onEnterOrSpace:n,onEscape:a,includeArrowKeys:e=!1,includeEscape:t=!1}={}){const o=w.useCallback(d=>{[ye,fe].includes(d.key)&&(d.preventDefault(),n==null||n()),d.key===Be&&t&&(d.preventDefault(),a==null||a())},[n,a,t]),i=[ye,fe,...t?[Be]:[],...e?[Vt,Ot]:[]],{onKeyDown:l}=Ct({onKeyDown:o},{interactiveKeyCodes:i});return{onKeyDown:l}}const be=w.forwardRef(({id:n,icon:a,showIcon:e=!0,onClick:t,label:o,collapsed:i,link:l,isNested:d,parentMenuOpen:C,appearance:f="brand",active:q,badge:y,...v},H)=>{const B=w.useRef(null),{onKeyDown:K}=Bt({onEnterOrSpace:t});function V(){var b;(b=B.current)==null||b.setAttribute("data-focused","true")}function O(){var b;(b=B.current)==null||b.removeAttribute("data-focused")}const A=St(C),P=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:G.navItemLeft,children:s.jsx(Ie,{icon:a,showIcon:e,label:o,collapsed:i,isNested:d,styleType:"item"})}),s.jsx("div",{className:G.navItemRight,children:!i&&y&&s.jsx(At,{badgeType:y.badgeType,size:y.size,content:y.content,count:y.count})})]}),W=l?s.jsx("a",{id:n,"aria-label":o,className:G.navItemContainer,"data-collapsed":i,"data-appearance":f,"data-nested":d,href:l,children:P}):s.jsx("div",{id:n,className:G.navItemContainer,"data-collapsed":i,"data-appearance":f,"data-nested":d,"data-active":q,onClick:t,ref:b=>{B.current=b,typeof H=="function"?H(b):H&&"current"in H&&(H.current=b)},...v,children:s.jsx(Te,{label:o,tabIndex:A,onKeyDown:K,onFocus:V,onBlur:O,styleType:"item",children:P})});return s.jsx(ke,{label:o,collapsed:i,children:W})});be.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Ce=w.forwardRef(({icon:n,showIcon:a=!0,onClick:e,label:t,collapsed:o,link:i,items:l=[],open:d,showMenuIcon:C=!0,isNested:f,parentMenuOpen:q,appearance:y="brand",badge:v,showDivider:H,...B},K)=>{const[V,O]=w.useState(!1),A=d!==void 0?d:V,P=d!==void 0;function W(){P||O(!V),e&&e()}function b(){A&&!P&&O(!1)}const{onKeyDown:$}=Bt({onEnterOrSpace:W,onEscape:b,includeArrowKeys:!0,includeEscape:!0}),he=l.length,J=!o&&he,Q=A,X=St(q),N=J&&C?s.jsx(Ht,{name:"arrow-chevron-right",className:R.menuIcon,"data-open":A}):null,p=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:R.menuContentLeft,children:s.jsx(Ie,{icon:n,showIcon:a,label:t,collapsed:o,isNested:f,styleType:"menu"})}),s.jsxs("div",{className:R.menuContentRight,children:[!o&&v&&s.jsx(At,{badgeType:v.badgeType,size:v.size,content:v.content,count:v.count}),N]})]}),He=s.jsxs("li",{className:R.navMenuContainer,"data-collapsed":o,"data-appearance":y,"data-nested":f,"data-open":A,ref:K,...B,children:[s.jsx(Te,{link:i,label:t,tabIndex:X,onClick:W,onKeyDown:$,styleType:"menu",children:p}),J&&s.jsx("ul",{className:R.nestedMenu,"data-open":A,children:l.map(m=>{var Se;return(Se=m.items)!=null&&Se.length?s.jsx(Ce,{label:m.label,icon:m.icon,showIcon:m.showIcon,collapsed:o,link:m.link,onClick:m.onClick,items:m.items||[],showMenuIcon:C,showDivider:m.showDivider,isNested:!0,parentMenuOpen:Q,appearance:y,badge:m.badge},m.id||m.label):s.jsxs(w.Fragment,{children:[s.jsx("li",{children:s.jsx(be,{label:m.label,icon:m.icon,showIcon:m.showIcon,collapsed:o,link:m.link,onClick:m.onClick,isNested:!0,parentMenuOpen:Q,appearance:y,badge:m.badge})}),m.showDivider&&s.jsx(Y,{appearance:Ee[y]})]},m.id||m.label)})})]}),Z=s.jsx(ke,{label:t,collapsed:o,children:He});return s.jsxs(s.Fragment,{children:[Z,H&&s.jsx(Y,{appearance:Ee[y]})]})});Ce.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},showMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const nn="_sideNavHeaderContainer_9bdkw_27",an="_sideNavHeader_9bdkw_27",sn="_sideNavHeaderTitleContainer_9bdkw_64",on="_sideNavHeaderTitle_9bdkw_64",rn="_sideNavHeaderIdentifier_9bdkw_102",cn="_sideNavHeaderVersion_9bdkw_143",ln="_sideNavBody_9bdkw_172",dn="_sideNavFooterContainer_9bdkw_195",un="_sideNavFooter_9bdkw_195",pn="_sideNavFooterItems_9bdkw_208",mn="_collapsibleSection_9bdkw_225",T={sideNavHeaderContainer:nn,sideNavHeader:an,sideNavHeaderTitleContainer:sn,sideNavHeaderTitle:on,sideNavHeaderIdentifier:rn,sideNavHeaderVersion:cn,sideNavBody:ln,sideNavFooterContainer:dn,sideNavFooter:un,sideNavFooterItems:pn,collapsibleSection:mn},vn=300,xe=w.forwardRef(({size:n="m",collapsible:a,children:e,headerConfig:t,items:o,footerItems:i,collapsed:l,defaultCollapsed:d=!1,onCollapsedChange:C,appearance:f="brand",activeItem:q},y)=>{const[v,H]=w.useState(l??d),[B,K]=w.useState(!0);w.useEffect(()=>{l!==void 0&&H(l)},[l]),w.useEffect(()=>{if(v)K(!1);else{const N=setTimeout(()=>{K(!0)},vn);return()=>clearTimeout(N)}},[v]);const V=()=>{const N=!v;l===void 0&&H(N),C==null||C(N)},O=v?"arrow-double-right":"arrow-double-left",A=Ee[f],P=N=>{[ye,fe].includes(N.key)&&(N.preventDefault(),t!=null&&t.onClick&&t.onClick())},{onKeyDown:W}=Ct({onKeyDown:P},{interactiveKeyCodes:[ye,fe]}),b=s.jsxs("div",{className:T.sideNavHeaderTitle,children:[s.jsx("div",{className:T.sideNavHeaderIdentifier,children:t==null?void 0:t.identifier}),v?"":s.jsx("h1",{"data-hidden":!B,children:t==null?void 0:t.title})]}),$=t==null?void 0:t.ariaLabel,he=s.jsx("a",{href:(t==null?void 0:t.link)??"",className:T.sideNavHeaderTitleContainer,onClick:t==null?void 0:t.onClick,"aria-label":$,children:b}),J=s.jsx("div",{className:T.sideNavHeaderTitleContainer,tabIndex:0,onClick:t==null?void 0:t.onClick,onKeyDown:W,role:"button","aria-label":$,children:b}),Q=t!=null&&t.link?he:t!=null&&t.onClick?J:s.jsx("div",{className:T.sideNavHeaderTitleContainer,children:b});function X(N){return N!=null&&N.length?s.jsx("ul",{children:N.map(p=>{var Z;return((Z=p.items)==null?void 0:Z.length)?s.jsx(Ce,{badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,items:p.items||[],appearance:f,showDivider:p.showDivider},p.id):s.jsxs(w.Fragment,{children:[s.jsx("li",{children:s.jsx(be,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,appearance:f,active:p.id===q&&!!q})}),p.showDivider&&s.jsx(Y,{appearance:A})]},p.id)})}):null}return s.jsx(Kt,{ref:y,size:n,collapsed:v,appearance:f,style:{minHeight:"100vh"},header:s.jsxs("div",{className:T.sideNavHeaderContainer,children:[s.jsxs("div",{className:T.sideNavHeader,"data-collapsed":v,"data-appearance":f,children:[Q,s.jsx("div",{className:T.sideNavHeaderVersion,"data-hidden":!B,children:s.jsx("span",{children:t==null?void 0:t.version})})]}),s.jsx(Y,{appearance:A})]}),body:s.jsx("div",{className:T.sideNavBody,children:X(o)}),footer:((i==null?void 0:i.length)||a)&&s.jsxs("div",{className:T.sideNavFooterContainer,children:[(i==null?void 0:i.length)&&s.jsx("div",{className:T.sideNavFooterItems,children:X(i)}),s.jsx(Y,{appearance:A}),s.jsx("div",{className:T.sideNavFooter,children:a&&s.jsx("div",{className:T.collapsibleSection,children:s.jsx(be,{id:"collapse-button",icon:O,showIcon:!0,collapsed:v,onClick:V,label:v?"Ouvrir le menu":"Réduire le menu",appearance:f,role:"button"})})})]}),children:e})});xe.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};function _t(){return function(a,e){const[t,o]=w.useState(e.args.collapsed??!0);return s.jsx("div",{children:s.jsx(a,{args:{...e.args,collapsed:t,onCollapsedChange:o}})})}}function gn(n){return function(e,t){const[o,i]=w.useState(t.args.activeItem),l=n.map(d=>({...d,onClick:()=>i(d.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...t.args,items:l,activeItem:o}})})}}function Dt(n){if(!n)return null;const a=Array.from(n.children);for(const i of a)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const e=n.querySelector("a");return e||Array.from(n.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function u(n,a,e){const t=e?n.querySelector(e):n;if(!t)return null;const o=e?j(t):j(n),i=o.queryByRole("link",{name:a});if(i)return i;const l=o.queryByText(a);if(l){const d=l.closest("li");return Dt(d)}return null}function Ft(n,a){const e=n.querySelector('[class*="sideNavBody"]');if(!e)return null;const o=Array.from(e.querySelectorAll("li"))[a];return Dt(o)}function L(n,a){return u(n,a,'[class*="sideNavFooterItems"]')}function U(n,a="MA"){var i;return(i=j(n).getByText(a).parentElement)==null?void 0:i.parentElement}function yn(n,a){return n.querySelector(`#${a}`)}function fn(n){return n.dataset.active==="true"}function h(n){r(n).not.toBeNull(),r(n).toHaveFocus()}function I(n,a){const e=u(n,a);e&&r(e).not.toHaveFocus()}function k(n,a){const e=u(n,a);e&&r(e).toHaveAttribute("tabindex","-1")}function _(n,a){const e=u(n,a);e&&r(e).toHaveAttribute("tabindex","0")}async function jt(n,a,e){await Pt(()=>{const t=n.getByRole("navigation"),o=yn(t,a);r(o).not.toBeNull(),r(fn(o)).toBe(e)})}function _e(n,a){return jt(n,a,!0)}function D(n,a){return jt(n,a,!1)}function M(n){const a=j(n),e=a.getByRole("navigation");return{canvas:a,sideNav:e}}function ge(n=200){return new Promise(a=>setTimeout(a,n))}const Ln={title:"Composants/SideNav",id:"SideNav",component:xe,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:n=>s.jsx(xe,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,onCollapsedChange:n.onCollapsedChange,children:bn})},bn=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),S={showIcon:!0},F={size:"m",content:"number"},E=[{...S,id:"home",label:"Home",icon:"home"},{...S,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...S,id:"analytics",label:"Analytics",icon:"analytics"},{...S,id:"settings",label:"Settings",icon:"settings"},{...S,id:"profile",label:"Profile",icon:"user",link:"/profile"}],z=E,Ne=[E[0],{...E[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...E[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},E[4]],Nn=[{...E[0],badge:{...F,badgeType:"indicator",count:5}},{...E[1],badge:{...F,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...F,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...F,badgeType:"indicator",count:12}}]},{...E[3],items:[{label:"General"},{label:"Privacy",badge:{...F,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...F,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...F,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...E[4],badge:{...F,badgeType:"brand",count:8}}],Ae=[{...S,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...S,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...S,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],x={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},hn={...x},wn={...x,onClick:()=>{console.log("Header clicked")}},g={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:z}},ee={tags:["skip-ci"],args:{...g.args,collapsible:!0}},te={tags:["skip-ci"],args:{...g.args,headerConfig:x}},ne={tags:["skip-ci"],args:{...g.args,headerConfig:x,items:Ne,collapsible:!0}},ae={tags:["skip-ci"],args:{...g.args,headerConfig:x,items:Ne,collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=M(n);await a("Navigate through navigation when all menus are closed",async()=>{k(e,"Overview"),k(e,"Reports"),k(e,"Analytics"),k(e,"General"),k(e,"Privacy"),k(e,"Advanced");const t=u(e,"Home");t==null||t.focus(),h(t),await c.tab();const o=u(e,"Dashboard");h(o),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics"),await c.tab();const i=u(e,"Settings");h(i),I(e,"General"),I(e,"Privacy"),I(e,"Advanced"),await c.tab();const l=u(e,"Profile");h(l)}),await a("Open Dashboard menu and verify nested items are accessible",async()=>{const t=u(e,"Dashboard");await c.click(t),_(e,"Overview"),_(e,"Reports"),_(e,"Analytics"),await c.tab();const o=u(e,"Overview");h(o),await c.tab();const i=u(e,"Reports");h(i),await c.tab();const l=u(e,"Analytics");h(l)}),await a("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=u(e,"Dashboard");await c.click(t),k(e,"Overview"),k(e,"Reports"),k(e,"Analytics"),await c.tab();const o=u(e,"Settings");h(o),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics")}),await a("Open Settings menu and verify nested items are accessible",async()=>{const t=u(e,"Settings");await c.click(t),_(e,"General"),_(e,"Privacy"),_(e,"Advanced"),k(e,"Security"),k(e,"API Keys"),await c.tab();const o=u(e,"General");h(o),await c.tab();const i=u(e,"Privacy");h(i),await c.tab();const l=u(e,"Advanced");h(l),I(e,"Security"),I(e,"API Keys")}),await a("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=u(e,"Advanced");await c.click(t),_(e,"Security"),_(e,"API Keys"),await c.tab();const o=u(e,"Security");h(o),await c.tab();const i=u(e,"API Keys");h(i)}),await a("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=u(e,"Advanced");await c.click(t),k(e,"Security"),k(e,"API Keys"),await c.tab();const o=u(e,"Profile");h(o),I(e,"Security"),I(e,"API Keys")})}},se={args:{...g.args,headerConfig:{...x,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=M(n);await a("Verify header is not clickable when no link or onClick is provided",async()=>{const t=U(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},oe={args:{...g.args,headerConfig:hn,collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=M(n);await a("Verify header is a link when link prop is provided",async()=>{const t=U(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable",async()=>{const t=U(e);t==null||t.focus(),r(t).toHaveFocus()})}},ie={args:{...g.args,headerConfig:{...wn,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=M(n);await a("Verify header is clickable button when onClick is provided",async()=>{const t=U(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=U(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(Mt),await c.keyboard(qt)})}},re={args:{...g.args,headerConfig:x,items:z,collapsible:!0,collapsed:!0},decorators:[_t()],play:async({canvasElement:n,step:a})=>{const{sideNav:e}=M(n);await a("Verify tooltips appear when tabbing to navigation items",async()=>{const t=Ft(e,0);r(t).not.toBeNull(),t==null||t.focus(),await ge();const o=j(document.body).queryByRole("tooltip",{name:"Home"});r(o).not.toBeNull(),r(o).toHaveTextContent("Home")}),await a("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await ge();const t=j(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await a("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await ge();const t=j(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},ce={args:{...g.args,headerConfig:x,items:Ne,collapsible:!0,collapsed:!0},decorators:[_t()],play:async({canvasElement:n,step:a})=>{const{sideNav:e}=M(n);await a("Verify tooltips appear when tabbing to menu items",async()=>{Rt(n);const t=Ft(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await ge();const o=j(document.body).queryByRole("tooltip",{name:"Dashboard"});r(o).not.toBeNull(),r(o).toHaveTextContent("Dashboard")})}},le={args:{...g.args,headerConfig:x,items:z,activeItem:"home",collapsible:!0},decorators:[gn(z)],play:async({canvasElement:n,step:a})=>{const{canvas:e}=M(n);await a("Verify Home has active class initially",async()=>{_e(e,"home"),D(e,"dashboard"),D(e,"analytics"),D(e,"settings"),D(e,"profile")}),await a("Change active item to Dashboard and verify active class",async()=>{const t=e.getByRole("navigation"),o=u(t,"Dashboard");r(o).not.toBeNull(),await c.click(o),D(e,"home"),_e(e,"dashboard"),D(e,"analytics"),D(e,"settings"),D(e,"profile")})}},de={args:{...g.args,headerConfig:x,items:z,footerItems:Ae,collapsible:!0}},ue={args:{...g.args,headerConfig:x,items:z,footerItems:Ae,collapsible:!1}},pe={args:{...g.args,headerConfig:x,items:Ne,footerItems:Ae,collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=M(n);await a("Verify footer items are rendered",async()=>{const t=L(e,"Settings");r(t).not.toBeNull();const o=L(e,"Help & Support");r(o).not.toBeNull();const i=L(e,"Account");r(i).not.toBeNull()}),await a("Open Account menu in footer and verify nested items",async()=>{const t=L(e,"Account");await c.click(t);const o=L(e,"Preferences");r(o).not.toBeNull();const i=L(e,"Logout");r(i).not.toBeNull()})}},me={tags:["skip-ci"],args:{...g.args,headerConfig:x,items:Nn,collapsible:!0}},En=[E[0],{...E[1],items:[{label:"Overview"},{label:"Reports",showDivider:!0},{label:"Analytics",icon:"analytics"}]},{...E[2],showDivider:!0},{...S,id:"reports",label:"Reports",icon:"info"},{...E[3],showDivider:!0,items:[{label:"General"},{label:"Privacy",showDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",showDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",showDivider:!0},{label:"Integrations",icon:"integrations"}]}]},E[4]],ve={args:{...g.args,headerConfig:x,items:En,collapsible:!0}};var De,Fe,je;g.parameters={...g.parameters,docs:{...(De=g.parameters)==null?void 0:De.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(je=(Fe=g.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Me,qe,Pe;ee.parameters={...ee.parameters,docs:{...(Me=ee.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Pe=(qe=ee.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var Re,Ke,Ve;te.parameters={...te.parameters,docs:{...(Re=te.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ve=(Ke=te.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}};var Oe,We,Le;ne.parameters={...ne.parameters,docs:{...(Oe=ne.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Le=(We=ne.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var Ge,ze,Ye;ae.parameters={...ae.parameters,docs:{...(Ge=ae.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Navigate through navigation when all menus are closed", async () => {
      expectElementToBeSkipped(sideNav, "Overview");
      expectElementToBeSkipped(sideNav, "Reports");
      expectElementToBeSkipped(sideNav, "Analytics");
      expectElementToBeSkipped(sideNav, "General");
      expectElementToBeSkipped(sideNav, "Privacy");
      expectElementToBeSkipped(sideNav, "Advanced");
      const homeElement = getNavElement(sideNav, "Home");
      homeElement?.focus();
      expectElementToHaveFocus(homeElement);
      await userEvent.tab();
      const dashboardMenu = getNavElement(sideNav, "Dashboard");
      expectElementToHaveFocus(dashboardMenu);
      expectElementNotToHaveFocus(sideNav, "Overview");
      expectElementNotToHaveFocus(sideNav, "Reports");
      expectElementNotToHaveFocus(sideNav, "Analytics");
      await userEvent.tab();
      const settingsMenu = getNavElement(sideNav, "Settings");
      expectElementToHaveFocus(settingsMenu);
      expectElementNotToHaveFocus(sideNav, "General");
      expectElementNotToHaveFocus(sideNav, "Privacy");
      expectElementNotToHaveFocus(sideNav, "Advanced");
      await userEvent.tab();
      const profileElement = getNavElement(sideNav, "Profile");
      expectElementToHaveFocus(profileElement);
    });
    await step("Open Dashboard menu and verify nested items are accessible", async () => {
      const dashboardMenu = getNavElement(sideNav, "Dashboard");
      await userEvent.click(dashboardMenu!);
      expectElementToBeAccessible(sideNav, "Overview");
      expectElementToBeAccessible(sideNav, "Reports");
      expectElementToBeAccessible(sideNav, "Analytics");
      await userEvent.tab();
      const overviewElement = getNavElement(sideNav, "Overview");
      expectElementToHaveFocus(overviewElement);
      await userEvent.tab();
      const reportsElement = getNavElement(sideNav, "Reports");
      expectElementToHaveFocus(reportsElement);
      await userEvent.tab();
      const analyticsElement = getNavElement(sideNav, "Analytics");
      expectElementToHaveFocus(analyticsElement);
    });
    await step("Close Dashboard menu and verify nested items are skipped again", async () => {
      const dashboardMenu = getNavElement(sideNav, "Dashboard");
      await userEvent.click(dashboardMenu!);
      expectElementToBeSkipped(sideNav, "Overview");
      expectElementToBeSkipped(sideNav, "Reports");
      expectElementToBeSkipped(sideNav, "Analytics");
      await userEvent.tab();
      const settingsMenu = getNavElement(sideNav, "Settings");
      expectElementToHaveFocus(settingsMenu);
      expectElementNotToHaveFocus(sideNav, "Overview");
      expectElementNotToHaveFocus(sideNav, "Reports");
      expectElementNotToHaveFocus(sideNav, "Analytics");
    });
    await step("Open Settings menu and verify nested items are accessible", async () => {
      const settingsMenu = getNavElement(sideNav, "Settings");
      await userEvent.click(settingsMenu!);
      expectElementToBeAccessible(sideNav, "General");
      expectElementToBeAccessible(sideNav, "Privacy");
      expectElementToBeAccessible(sideNav, "Advanced");
      expectElementToBeSkipped(sideNav, "Security");
      expectElementToBeSkipped(sideNav, "API Keys");
      await userEvent.tab();
      const generalElement = getNavElement(sideNav, "General");
      expectElementToHaveFocus(generalElement);
      await userEvent.tab();
      const privacyElement = getNavElement(sideNav, "Privacy");
      expectElementToHaveFocus(privacyElement);
      await userEvent.tab();
      const advancedMenu = getNavElement(sideNav, "Advanced");
      expectElementToHaveFocus(advancedMenu);
      expectElementNotToHaveFocus(sideNav, "Security");
      expectElementNotToHaveFocus(sideNav, "API Keys");
    });
    await step("Open Advanced menu and verify deeply nested items are accessible", async () => {
      const advancedMenu = getNavElement(sideNav, "Advanced");
      await userEvent.click(advancedMenu!);
      expectElementToBeAccessible(sideNav, "Security");
      expectElementToBeAccessible(sideNav, "API Keys");
      await userEvent.tab();
      const securityElement = getNavElement(sideNav, "Security");
      expectElementToHaveFocus(securityElement);
      await userEvent.tab();
      const apiKeysElement = getNavElement(sideNav, "API Keys");
      expectElementToHaveFocus(apiKeysElement);
    });
    await step("Close Advanced menu and verify deeply nested items are skipped", async () => {
      const advancedMenu = getNavElement(sideNav, "Advanced");
      await userEvent.click(advancedMenu!);
      expectElementToBeSkipped(sideNav, "Security");
      expectElementToBeSkipped(sideNav, "API Keys");
      await userEvent.tab();
      const profileElement = getNavElement(sideNav, "Profile");
      expectElementToHaveFocus(profileElement);
      expectElementNotToHaveFocus(sideNav, "Security");
      expectElementNotToHaveFocus(sideNav, "API Keys");
    });
  }
}`,...(Ye=(ze=ae.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};var Ue,$e,Je;se.parameters={...se.parameters,docs:{...(Ue=se.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      link: null
    },
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify header is not clickable when no link or onClick is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("DIV");
      expect(headerTitleContainer).not.toHaveAttribute("href");
      expect(headerTitleContainer).not.toHaveAttribute("role", "button");
      expect(headerTitleContainer).not.toHaveAttribute("tabindex");
    });
  }
}`,...(Je=($e=se.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;oe.parameters={...oe.parameters,docs:{...(Qe=oe.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: headerConfigWithLink,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify header is a link when link prop is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("A");
      expect(headerTitleContainer).toHaveAttribute("href", "/");
      expect(headerTitleContainer).toHaveStyle({
        cursor: "pointer"
      });
    });
    await step("Verify header is keyboard navigable", async () => {
      const headerLink = getHeaderTitleContainer(sideNav);
      headerLink?.focus();
      expect(headerLink).toHaveFocus();
    });
  }
}`,...(Ze=(Xe=oe.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ie.parameters={...ie.parameters,docs:{...(et=ie.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: {
      ...headerConfigWithOnClick,
      link: null
    },
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify header is clickable button when onClick is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("DIV");
      await userEvent.click(headerTitleContainer!);
      expect(headerTitleContainer).toHaveStyle({
        cursor: "pointer"
      });
    });
    await step("Verify header is keyboard navigable and responds to Enter/Space", async () => {
      const headerButton = getHeaderTitleContainer(sideNav);
      headerButton?.focus();
      expect(headerButton).toHaveFocus();
      await userEvent.keyboard(TESTING_ENTER_KEY);
      await userEvent.keyboard(TESTING_SPACE_KEY);
    });
  }
}`,...(nt=(tt=ie.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,st,ot;re.parameters={...re.parameters,docs:{...(at=re.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    collapsible: true,
    collapsed: true
  },
  decorators: [createCollapsedStateDecorator()],
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify tooltips appear when tabbing to navigation items", async () => {
      const homeElement = getNavElementInCollapsedState(sideNav, 0);
      expect(homeElement).not.toBeNull();
      homeElement?.focus();
      await waitForTooltip();
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Home"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Home");
    });
    await step("Verify tooltips appear when tabbing to next navigation item", async () => {
      await userEvent.tab();
      await waitForTooltip();
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Dashboard"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });
    await step("Verify tooltips appear for items with links when tabbing", async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await waitForTooltip();
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Profile"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Profile");
    });
  }
}`,...(ot=(st=re.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var it,rt,ct;ce.parameters={...ce.parameters,docs:{...(it=ce.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
    collapsed: true
  },
  decorators: [createCollapsedStateDecorator()],
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify tooltips appear when tabbing to menu items", async () => {
      focusElementBeforeComponent(canvasElement);
      const dashboardMenu = getNavElementInCollapsedState(sideNav, 1);
      expect(dashboardMenu).not.toBeNull();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await waitForTooltip();
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Dashboard"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });
  }
}`,...(ct=(rt=ce.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var lt,dt,ut;le.parameters={...le.parameters,docs:{...(lt=le.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    activeItem: "home",
    collapsible: true
  },
  decorators: [createActiveItemStateDecorator(navigationItems)],
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      canvas
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify Home has active class initially", async () => {
      expectNavItemToBeActive(canvas, "home");
      expectNavItemNotToBeActive(canvas, "dashboard");
      expectNavItemNotToBeActive(canvas, "analytics");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "profile");
    });
    await step("Change active item to Dashboard and verify active class", async () => {
      const sideNav = canvas.getByRole("navigation");
      const dashboardElement = getNavElement(sideNav, "Dashboard");
      expect(dashboardElement).not.toBeNull();
      await userEvent.click(dashboardElement!);
      expectNavItemNotToBeActive(canvas, "home");
      expectNavItemToBeActive(canvas, "dashboard");
      expectNavItemNotToBeActive(canvas, "analytics");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "profile");
    });
  }
}`,...(ut=(dt=le.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var pt,mt,vt;de.parameters={...de.parameters,docs:{...(pt=de.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(vt=(mt=de.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var gt,yt,ft;ue.parameters={...ue.parameters,docs:{...(gt=ue.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(ft=(yt=ue.parameters)==null?void 0:yt.docs)==null?void 0:ft.source}}};var bt,Nt,ht;pe.parameters={...pe.parameters,docs:{...(bt=pe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    footerItems: footerItems,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify footer items are rendered", async () => {
      const footerSettings = getFooterNavElement(sideNav, "Settings");
      expect(footerSettings).not.toBeNull();
      const footerHelp = getFooterNavElement(sideNav, "Help & Support");
      expect(footerHelp).not.toBeNull();
      const footerAccount = getFooterNavElement(sideNav, "Account");
      expect(footerAccount).not.toBeNull();
    });
    await step("Open Account menu in footer and verify nested items", async () => {
      const footerAccount = getFooterNavElement(sideNav, "Account");
      await userEvent.click(footerAccount!);
      const footerPreferences = getFooterNavElement(sideNav, "Preferences");
      expect(footerPreferences).not.toBeNull();
      const footerLogout = getFooterNavElement(sideNav, "Logout");
      expect(footerLogout).not.toBeNull();
    });
  }
}`,...(ht=(Nt=pe.parameters)==null?void 0:Nt.docs)==null?void 0:ht.source}}};var wt,Et,xt;me.parameters={...me.parameters,docs:{...(wt=me.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(xt=(Et=me.parameters)==null?void 0:Et.docs)==null?void 0:xt.source}}};var Tt,It,kt;ve.parameters={...ve.parameters,docs:{...(Tt=ve.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(kt=(It=ve.parameters)==null?void 0:It.docs)==null?void 0:kt.source}}};const Gn=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{le as ActiveItemState,re as CollapsedTooltip,ce as CollapsedTooltipWithNested,ee as Collapsible,g as Default,ue as FooterItemsOnly,pe as FooterItemsWithNested,se as HeaderClickability,oe as HeaderWithLink,ie as HeaderWithOnClick,te as HeaderWithVersion,ae as KeyboardNavigation,me as WithBadges,ve as WithDividers,de as WithFooterItems,ne as WithNestedMenus,Gn as __namedExportsOrder,Ln as default};
