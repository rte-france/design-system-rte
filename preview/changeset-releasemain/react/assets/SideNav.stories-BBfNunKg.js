import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{T as qt,a as Mt}from"./keyboard-test.constants-C9whQEGR.js";import{w as F,e as r,a as Pt,u as c}from"./index-DCXJbAaW.js";import{f as Rt}from"./testing.utils-qrsqQ6ZN.js";import{d as Ee,B as Kt}from"./BaseSideNav-DsYHbOcP.js";import{S as fe,E as ge,b as Be,c as Vt,d as Ot}from"./keyboard.constants-ep-ZHn_7.js";import{r as w}from"./index-G8LIXM5I.js";import{u as At}from"./useActiveKeyboard-BPEscCvd.js";import{D as z}from"./Divider-GNmPbxh0.js";import{B as Ht}from"./Badge-Cd3dEy6T.js";import{I as we}from"./icon.constants-uVuOfrjk.js";import{I as St}from"./Icon-DjEid3Hw.js";import{T as Wt}from"./Tooltip-BvOI1vaV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const Lt="_navItemContainer_1tkc9_29",Gt="_navItem_1tkc9_29",zt="_navItemLeft_1tkc9_99",Yt="_navItemRight_1tkc9_104",Y={navItemContainer:Lt,navItem:Gt,navItemLeft:zt,navItemRight:Yt},Ut="_navMenuContainer_1fyh8_29",$t="_navMenu_1fyh8_29",Jt="_menuContentLeft_1fyh8_73",Qt="_menuContentRight_1fyh8_78",Xt="_menuIcon_1fyh8_119",Zt="_nestedMenu_1fyh8_127",en="_icon_1fyh8_142",P={navMenuContainer:Ut,navMenu:$t,menuContentLeft:Jt,menuContentRight:Qt,menuIcon:Xt,nestedMenu:Zt,icon:en};function Te({link:n,label:a,tabIndex:e,onKeyDown:t,onFocus:s,onBlur:i,onClick:l,children:u,styleType:A="item"}){const N=A==="menu"?P:Y,f={className:A==="menu"?N.navMenu:N.navItem,tabIndex:e,"aria-label":a,...s&&{onFocus:s},...i&&{onBlur:i},...l&&{onClick:l},...t&&{onKeyDown:t}};return n?o.jsx("a",{href:n,...f,children:u}):o.jsx("span",{...f,children:u})}Te.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function tn(n=!1,a=!1){return n?we.s:a?we.l:we.m}function Ie({icon:n,showIcon:a=!0,label:e,collapsed:t,isNested:s,styleType:i="item"}){const l=tn(s,t),u=i==="menu"?P:Y;return o.jsxs(o.Fragment,{children:[a&&n&&o.jsx(St,{name:n,className:u.icon,size:l}),t?null:o.jsx("span",{children:e})]})}Ie.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ce({label:n,collapsed:a,children:e}){return a&&n?o.jsx(Wt,{label:n,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}Ce.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function kt(n){return n===!1?-1:0}function Bt({onEnterOrSpace:n,onEscape:a,includeArrowKeys:e=!1,includeEscape:t=!1}={}){const s=w.useCallback(u=>{[fe,ge].includes(u.key)&&(u.preventDefault(),n==null||n()),u.key===Be&&t&&(u.preventDefault(),a==null||a())},[n,a,t]),i=[fe,ge,...t?[Be]:[],...e?[Vt,Ot]:[]],{onKeyDown:l}=At({onKeyDown:s},{interactiveKeyCodes:i});return{onKeyDown:l}}const Ne=w.forwardRef(({id:n,icon:a,showIcon:e=!0,onClick:t,label:s,collapsed:i,link:l,isNested:u,parentMenuOpen:A,appearance:N="brand",active:M,badge:f,...v},S)=>{const B=w.useRef(null),{onKeyDown:R}=Bt({onEnterOrSpace:t});function K(){var g;(g=B.current)==null||g.setAttribute("data-focused","true")}function V(){var g;(g=B.current)==null||g.removeAttribute("data-focused")}const H=kt(A),O=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:Y.navItemLeft,children:o.jsx(Ie,{icon:a,showIcon:e,label:s,collapsed:i,isNested:u,styleType:"item"})}),o.jsx("div",{className:Y.navItemRight,children:!i&&f&&o.jsx(Ht,{badgeType:f.badgeType,size:f.size,content:f.content,count:f.count})})]}),W=o.jsx("div",{id:n,className:Y.navItemContainer,"data-collapsed":i,"data-appearance":N,"data-nested":u,"data-active":M,onClick:t,ref:g=>{B.current=g,typeof S=="function"?S(g):S&&"current"in S&&(S.current=g)},...v,children:o.jsx(Te,{link:l,label:s,tabIndex:H,onKeyDown:l?void 0:R,onFocus:K,onBlur:V,styleType:"item",children:O})});return o.jsx(Ce,{label:s,collapsed:i,children:W})});Ne.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Ae=w.forwardRef(({icon:n,showIcon:a=!0,onClick:e,label:t,collapsed:s,link:i,items:l=[],open:u,showMenuIcon:A=!0,isNested:N,parentMenuOpen:M,appearance:f="brand",badge:v,showDivider:S,...B},R)=>{const[K,V]=w.useState(!1),H=u!==void 0?u:K,O=u!==void 0;function W(){O||V(!K),e&&e()}function g(){H&&!O&&V(!1)}const{onKeyDown:$}=Bt({onEnterOrSpace:W,onEscape:g,includeArrowKeys:!0,includeEscape:!0}),he=l.length,J=!s&&he,Q=H,X=kt(M),b=J&&A?o.jsx(St,{name:"arrow-chevron-right",className:P.menuIcon,"data-open":H}):null,p=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:P.menuContentLeft,children:o.jsx(Ie,{icon:n,showIcon:a,label:t,collapsed:s,isNested:N,styleType:"menu"})}),o.jsxs("div",{className:P.menuContentRight,children:[!s&&v&&o.jsx(Ht,{badgeType:v.badgeType,size:v.size,content:v.content,count:v.count}),b]})]}),Se=o.jsxs("li",{className:P.navMenuContainer,"data-collapsed":s,"data-appearance":f,"data-nested":N,"data-open":H,ref:R,...B,children:[o.jsx(Te,{link:i,label:t,tabIndex:X,onClick:W,onKeyDown:$,styleType:"menu",children:p}),J&&o.jsx("ul",{className:P.nestedMenu,"data-open":H,children:l.map(m=>{var ke;return(ke=m.items)!=null&&ke.length?o.jsx(Ae,{label:m.label,icon:m.icon,showIcon:m.showIcon,collapsed:s,link:m.link,onClick:m.onClick,items:m.items||[],showMenuIcon:A,showDivider:m.showDivider,isNested:!0,parentMenuOpen:Q,appearance:f,badge:m.badge},m.id||m.label):o.jsxs(w.Fragment,{children:[o.jsx("li",{children:o.jsx(Ne,{label:m.label,icon:m.icon,showIcon:m.showIcon,collapsed:s,link:m.link,onClick:m.onClick,isNested:!0,parentMenuOpen:Q,appearance:f,badge:m.badge})}),m.showDivider&&o.jsx(z,{appearance:Ee[f]})]},m.id||m.label)})})]}),Z=o.jsx(Ce,{label:t,collapsed:s,children:Se});return o.jsxs(o.Fragment,{children:[Z,S&&o.jsx(z,{appearance:Ee[f]})]})});Ae.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},showMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const nn="_sideNavHeaderContainer_sjqm4_55",an="_sideNavHeader_sjqm4_55",on="_sideNavHeaderTitleContainer_sjqm4_92",sn="_sideNavHeaderTitle_sjqm4_92",rn="_sideNavHeaderIdentifier_sjqm4_130",cn="_sideNavHeaderVersion_sjqm4_171",ln="_sideNavBody_sjqm4_200",dn="_sideNavFooterContainer_sjqm4_223",un="_sideNavFooter_sjqm4_223",pn="_sideNavFooterItems_sjqm4_236",mn="_collapsibleSection_sjqm4_253",T={sideNavHeaderContainer:nn,sideNavHeader:an,sideNavHeaderTitleContainer:on,sideNavHeaderTitle:sn,sideNavHeaderIdentifier:rn,sideNavHeaderVersion:cn,sideNavBody:ln,sideNavFooterContainer:dn,sideNavFooter:un,sideNavFooterItems:pn,collapsibleSection:mn},vn=300,xe=w.forwardRef(({size:n="m",collapsible:a,children:e,headerConfig:t,items:s,footerItems:i,collapsed:l,defaultCollapsed:u=!1,onCollapsedChange:A,appearance:N="brand",activeItem:M},f)=>{const[v,S]=w.useState(l??u),[B,R]=w.useState(!0);w.useEffect(()=>{l!==void 0&&S(l)},[l]),w.useEffect(()=>{if(v)R(!1);else{const b=setTimeout(()=>{R(!0)},vn);return()=>clearTimeout(b)}},[v]);const K=()=>{const b=!v;l===void 0&&S(b),A==null||A(b)},V=v?"arrow-double-right":"arrow-double-left",H=Ee[N],O=b=>{[fe,ge].includes(b.key)&&(b.preventDefault(),t!=null&&t.onClick&&t.onClick())},{onKeyDown:W}=At({onKeyDown:O},{interactiveKeyCodes:[fe,ge]}),g=o.jsxs("div",{className:T.sideNavHeaderTitle,children:[o.jsx("div",{className:T.sideNavHeaderIdentifier,children:t==null?void 0:t.identifier}),v?"":o.jsx("h1",{"data-hidden":!B,children:t==null?void 0:t.title})]}),$=t==null?void 0:t.ariaLabel,he=o.jsx("a",{href:(t==null?void 0:t.link)??"",className:T.sideNavHeaderTitleContainer,onClick:t==null?void 0:t.onClick,"aria-label":$,children:g}),J=o.jsx("div",{className:T.sideNavHeaderTitleContainer,tabIndex:0,onClick:t==null?void 0:t.onClick,onKeyDown:W,role:"button","aria-label":$,children:g}),Q=t!=null&&t.link?he:t!=null&&t.onClick?J:o.jsx("div",{className:T.sideNavHeaderTitleContainer,children:g});function X(b){return b!=null&&b.length?o.jsx("ul",{children:b.map(p=>{var Z;return((Z=p.items)==null?void 0:Z.length)?o.jsx(Ae,{badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,items:p.items||[],appearance:N,showDivider:p.showDivider},p.id):o.jsxs(w.Fragment,{children:[o.jsx("li",{children:o.jsx(Ne,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,appearance:N,active:p.id===M&&!!M})}),p.showDivider&&o.jsx(z,{appearance:H})]},p.id)})}):null}return o.jsx(Kt,{ref:f,size:n,collapsed:v,appearance:N,style:{minHeight:"100vh"},header:o.jsxs("div",{className:T.sideNavHeaderContainer,children:[o.jsxs("div",{className:T.sideNavHeader,"data-collapsed":v,"data-appearance":N,children:[Q,o.jsx("div",{className:T.sideNavHeaderVersion,"data-hidden":!B,children:o.jsx("span",{children:t==null?void 0:t.version})})]}),o.jsx(z,{appearance:H})]}),body:o.jsx("div",{className:T.sideNavBody,children:X(s)}),footer:((i==null?void 0:i.length)||a)&&o.jsxs("div",{className:T.sideNavFooterContainer,children:[(i==null?void 0:i.length)&&o.jsx("div",{className:T.sideNavFooterItems,children:X(i)}),o.jsx(z,{appearance:H}),o.jsx("div",{className:T.sideNavFooter,children:a&&o.jsx("div",{className:T.collapsibleSection,children:o.jsx(Ne,{id:"collapse-button",icon:V,showIcon:!0,collapsed:v,onClick:K,label:v?"Ouvrir le menu":"Réduire le menu",appearance:N,role:"button"})})})]}),children:e})});xe.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};function _t(){return function(a,e){const[t,s]=w.useState(e.args.collapsed??!0);return o.jsx("div",{children:o.jsx(a,{args:{...e.args,collapsed:t,onCollapsedChange:s}})})}}function yn(n){return function(e,t){const[s,i]=w.useState(t.args.activeItem),l=n.map(u=>({...u,onClick:()=>i(u.id),link:void 0}));return o.jsx("div",{children:o.jsx(e,{args:{...t.args,items:l,activeItem:s}})})}}function Dt(n){if(!n)return null;const a=Array.from(n.children);for(const i of a)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const e=n.querySelector("a");return e||Array.from(n.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function d(n,a,e){const t=e?n.querySelector(e):n;if(!t)return null;const s=e?F(t):F(n),i=s.queryByRole("link",{name:a});if(i)return i;const l=s.queryByText(a);if(l){const u=l.closest("li");return Dt(u)}return null}function jt(n,a){const e=n.querySelector('[class*="sideNavBody"]');if(!e)return null;const s=Array.from(e.querySelectorAll("li"))[a];return Dt(s)}function L(n,a){return d(n,a,'[class*="sideNavFooterItems"]')}function U(n,a="MA"){var i;return(i=F(n).getByText(a).parentElement)==null?void 0:i.parentElement}function fn(n,a){return n.querySelector(`#${a}`)}function gn(n){return n.dataset.active==="true"}function h(n){r(n).not.toBeNull(),r(n).toHaveFocus()}function I(n,a){const e=d(n,a);e&&r(e).not.toHaveFocus()}function C(n,a){const e=d(n,a);e&&r(e).toHaveAttribute("tabindex","-1")}function _(n,a){const e=d(n,a);e&&r(e).toHaveAttribute("tabindex","0")}async function Ft(n,a,e){await Pt(()=>{const t=n.getByRole("navigation"),s=fn(t,a);r(s).not.toBeNull(),r(gn(s)).toBe(e)})}function _e(n,a){return Ft(n,a,!0)}function D(n,a){return Ft(n,a,!1)}function q(n){const a=F(n),e=a.getByRole("navigation");return{canvas:a,sideNav:e}}function ye(n=200){return new Promise(a=>setTimeout(a,n))}const Gn={title:"Composants/SideNav",id:"SideNav",component:xe,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:n=>o.jsx(xe,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,onCollapsedChange:n.onCollapsedChange,children:Nn})},Nn=o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),k={showIcon:!0},j={size:"m",content:"number"},E=[{...k,id:"home",label:"Home",icon:"home"},{...k,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...k,id:"analytics",label:"Analytics",icon:"analytics"},{...k,id:"settings",label:"Settings",icon:"settings"},{...k,id:"profile",label:"Profile",icon:"user",link:"/profile"}],G=E,be=[E[0],{...E[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...E[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},E[4]],bn=[{...E[0],badge:{...j,badgeType:"indicator",count:5}},{...E[1],badge:{...j,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...j,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...j,badgeType:"indicator",count:12}}]},{...E[3],items:[{label:"General"},{label:"Privacy",badge:{...j,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...j,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...j,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...E[4],badge:{...j,badgeType:"brand",count:8}}],He=[{...k,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...k,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...k,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],x={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},hn={...x},wn={...x,onClick:()=>{console.log("Header clicked")}},y={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:G}},ee={args:{...y.args,collapsible:!0}},te={args:{...y.args,headerConfig:x}},ne={args:{...y.args,headerConfig:x,items:be,collapsible:!0}},ae={args:{...y.args,headerConfig:x,items:be,collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=q(n);await a("Navigate through navigation when all menus are closed",async()=>{C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),C(e,"General"),C(e,"Privacy"),C(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),h(t),await c.tab();const s=d(e,"Dashboard");h(s),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics"),await c.tab();const i=d(e,"Settings");h(i),I(e,"General"),I(e,"Privacy"),I(e,"Advanced"),await c.tab();const l=d(e,"Profile");h(l)}),await a("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await c.click(t),_(e,"Overview"),_(e,"Reports"),_(e,"Analytics"),await c.tab();const s=d(e,"Overview");h(s),await c.tab();const i=d(e,"Reports");h(i),await c.tab();const l=d(e,"Analytics");h(l)}),await a("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await c.click(t),C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),await c.tab();const s=d(e,"Settings");h(s),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics")}),await a("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await c.click(t),_(e,"General"),_(e,"Privacy"),_(e,"Advanced"),C(e,"Security"),C(e,"API Keys"),await c.tab();const s=d(e,"General");h(s),await c.tab();const i=d(e,"Privacy");h(i),await c.tab();const l=d(e,"Advanced");h(l),I(e,"Security"),I(e,"API Keys")}),await a("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await c.click(t),_(e,"Security"),_(e,"API Keys"),await c.tab();const s=d(e,"Security");h(s),await c.tab();const i=d(e,"API Keys");h(i)}),await a("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await c.click(t),C(e,"Security"),C(e,"API Keys"),await c.tab();const s=d(e,"Profile");h(s),I(e,"Security"),I(e,"API Keys")})}},oe={args:{...y.args,headerConfig:{...x,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=q(n);await a("Verify header is not clickable when no link or onClick is provided",async()=>{const t=U(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},se={args:{...y.args,headerConfig:hn,collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=q(n);await a("Verify header is a link when link prop is provided",async()=>{const t=U(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable",async()=>{const t=U(e);t==null||t.focus(),r(t).toHaveFocus()})}},ie={args:{...y.args,headerConfig:{...wn,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=q(n);await a("Verify header is clickable button when onClick is provided",async()=>{const t=U(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=U(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(qt),await c.keyboard(Mt)})}},re={args:{...y.args,headerConfig:x,items:G,collapsible:!0,collapsed:!0},decorators:[_t()],play:async({canvasElement:n,step:a})=>{const{sideNav:e}=q(n);await a("Verify tooltips appear when tabbing to navigation items",async()=>{const t=jt(e,0);r(t).not.toBeNull(),t==null||t.focus(),await ye();const s=F(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await a("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await ye();const t=F(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await a("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await ye();const t=F(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},ce={args:{...y.args,headerConfig:x,items:be,collapsible:!0,collapsed:!0},decorators:[_t()],play:async({canvasElement:n,step:a})=>{const{sideNav:e}=q(n);await a("Verify tooltips appear when tabbing to menu items",async()=>{Rt(n);const t=jt(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await ye();const s=F(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},le={args:{...y.args,headerConfig:x,items:G,activeItem:"home",collapsible:!0},decorators:[yn(G)],play:async({canvasElement:n,step:a})=>{const{canvas:e}=q(n);await a("Verify Home has active class initially",async()=>{_e(e,"home"),D(e,"dashboard"),D(e,"analytics"),D(e,"settings"),D(e,"profile")}),await a("Change active item to Dashboard and verify active class",async()=>{const t=e.getByRole("navigation"),s=d(t,"Dashboard");r(s).not.toBeNull(),await c.click(s),D(e,"home"),_e(e,"dashboard"),D(e,"analytics"),D(e,"settings"),D(e,"profile")})}},de={args:{...y.args,headerConfig:x,items:G,footerItems:He,collapsible:!0}},ue={args:{...y.args,headerConfig:x,items:G,footerItems:He,collapsible:!1}},pe={args:{...y.args,headerConfig:x,items:be,footerItems:He,collapsible:!0},play:async({canvasElement:n,step:a})=>{const{sideNav:e}=q(n);await a("Verify footer items are rendered",async()=>{const t=L(e,"Settings");r(t).not.toBeNull();const s=L(e,"Help & Support");r(s).not.toBeNull();const i=L(e,"Account");r(i).not.toBeNull()}),await a("Open Account menu in footer and verify nested items",async()=>{const t=L(e,"Account");await c.click(t);const s=L(e,"Preferences");r(s).not.toBeNull();const i=L(e,"Logout");r(i).not.toBeNull()})}},me={args:{...y.args,headerConfig:x,items:bn,collapsible:!0}},En=[E[0],{...E[1],items:[{label:"Overview"},{label:"Reports",showDivider:!0},{label:"Analytics",icon:"analytics"}]},{...E[2],showDivider:!0},{...k,id:"reports",label:"Reports",icon:"info"},{...E[3],showDivider:!0,items:[{label:"General"},{label:"Privacy",showDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",showDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",showDivider:!0},{label:"Integrations",icon:"integrations"}]}]},E[4]],ve={args:{...y.args,headerConfig:x,items:En,collapsible:!0}};var De,je,Fe;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(Fe=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var qe,Me,Pe;ee.parameters={...ee.parameters,docs:{...(qe=ee.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Pe=(Me=ee.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Re,Ke,Ve;te.parameters={...te.parameters,docs:{...(Re=te.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ve=(Ke=te.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}};var Oe,We,Le;ne.parameters={...ne.parameters,docs:{...(Oe=ne.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Le=(We=ne.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var Ge,ze,Ye;ae.parameters={...ae.parameters,docs:{...(Ge=ae.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ye=(ze=ae.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};var Ue,$e,Je;oe.parameters={...oe.parameters,docs:{...(Ue=oe.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Je=($e=oe.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;se.parameters={...se.parameters,docs:{...(Qe=se.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=se.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ie.parameters={...ie.parameters,docs:{...(et=ie.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=ie.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,ot,st;re.parameters={...re.parameters,docs:{...(at=re.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(st=(ot=re.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var it,rt,ct;ce.parameters={...ce.parameters,docs:{...(it=ce.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(vt=(mt=de.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var yt,ft,gt;ue.parameters={...ue.parameters,docs:{...(yt=ue.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(gt=(ft=ue.parameters)==null?void 0:ft.docs)==null?void 0:gt.source}}};var Nt,bt,ht;pe.parameters={...pe.parameters,docs:{...(Nt=pe.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(ht=(bt=pe.parameters)==null?void 0:bt.docs)==null?void 0:ht.source}}};var wt,Et,xt;me.parameters={...me.parameters,docs:{...(wt=me.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(xt=(Et=me.parameters)==null?void 0:Et.docs)==null?void 0:xt.source}}};var Tt,It,Ct;ve.parameters={...ve.parameters,docs:{...(Tt=ve.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Ct=(It=ve.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};const zn=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{le as ActiveItemState,re as CollapsedTooltip,ce as CollapsedTooltipWithNested,ee as Collapsible,y as Default,ue as FooterItemsOnly,pe as FooterItemsWithNested,oe as HeaderClickability,se as HeaderWithLink,ie as HeaderWithOnClick,te as HeaderWithVersion,ae as KeyboardNavigation,me as WithBadges,ve as WithDividers,de as WithFooterItems,ne as WithNestedMenus,zn as __namedExportsOrder,Gn as default};
