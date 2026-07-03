import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{g as ga,B as Ca,s as ka}from"./BaseSideNav-nr7r6elQ.js";import{T as Sa,c as Ha}from"./keyboard-test.constants-DRUxacrk.js";import{w as M,e as r,a as Da,u as d}from"./index-4rjIhT2C.js";import{f as Ma}from"./testing.utils-mIZIUNbM.js";import{S as De,E as Me,c as Qe,b as _a,d as Pa}from"./keyboard.constants-BverKK8B.js";import{r as h}from"./index-G8LIXM5I.js";import{u as Na}from"./useActiveKeyboard-DaOmFJe_.js";import{D as te}from"./Divider-BMotkXeQ.js";import{s as Fa,I as Oe,B as ze}from"./Badge-krITzoP9.js";import{I as fa}from"./Icon-DgLH6pPJ.js";import{T as ja}from"./Tooltip-Bwcm8rl-.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function qa(a=!1,n=!1){return a?Oe.s:n?Oe.l:Oe.m}function _e(a){return a?Fa({showBadge:!0,badgeContent:a.content??"number",badgeCount:a.count,badgeIcon:a.icon}):!1}function Ra(a){return a.badgeType??"indicator"}const Wa="_navItemContainer_1k518_1",Ka="_navItemLeft_1k518_42",Va="_navItem_1k518_1",Oa="_navItemRight_1k518_57",U={navItemContainer:Wa,navItemLeft:Ka,navItem:Va,navItemRight:Oa},La="_navMenuContainer_f68ss_1",za="_navMenu_f68ss_1",Ga="_menuContentLeft_f68ss_31",Ya="_menuContentRight_f68ss_36",Ua="_menuIcon_f68ss_96",$a="_nestedMenu_f68ss_104",Ja="_icon_f68ss_120",V={navMenuContainer:La,navMenu:za,menuContentLeft:Ga,menuContentRight:Ya,menuIcon:Ua,nestedMenu:$a,icon:Ja};function Ge({link:a,label:n,tabIndex:t,onKeyDown:e,onFocus:s,onBlur:i,onClick:c,children:v,styleType:T="item"}){const f=T==="menu"?V:U,w={className:T==="menu"?f.navMenu:f.navItem,tabIndex:t,"aria-label":n,...s&&{onFocus:s},...i&&{onBlur:i},...c&&{onClick:c},...e&&{onKeyDown:e}};return a?o.jsx("a",{href:a,...w,children:v}):o.jsx("span",{...w,children:v})}Ge.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ye({icon:a,hasLeadingIcon:n=!0,label:t,isCollapsed:e,isNested:s,styleType:i="item",badge:c}){const v=qa(s,e),T=i==="menu"?V:U;function f(){if(!n||!a)return null;const E=o.jsx(fa,{name:a,className:T.icon,size:v});return e&&c&&_e(c)?o.jsx(ze,{badgeType:Ra(c),size:"xs",content:"empty",children:E}):E}return o.jsxs(o.Fragment,{children:[f(),e?null:o.jsx("span",{children:t})]})}Ye.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function Fe({label:a,isCollapsed:n,children:t}){return n&&a?o.jsx(ja,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:t}):t}Fe.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function ba(a){return a===!1?-1:0}function ha({onEnterOrSpace:a,onEscape:n,includeArrowKeys:t=!1,includeEscape:e=!1}={}){const s=h.useCallback(v=>{[De,Me].includes(v.key)&&(v.preventDefault(),a==null||a()),v.key===Qe&&e&&(v.preventDefault(),n==null||n())},[a,n,e]),i=[De,Me,...e?[Qe]:[],...t?[_a,Pa]:[]],{onKeyDown:c}=Na({onKeyDown:s},{interactiveKeyCodes:i});return{onKeyDown:c}}const Pe=h.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:s,isCollapsed:i,link:c,isNested:v,parentMenuOpen:T,appearance:f="brand",active:E,badge:w,...Q},N)=>{const _=h.useRef(null),{onKeyDown:B}=ha({onEnterOrSpace:e});function L(){var C;(C=_.current)==null||C.setAttribute("data-focused","true")}function K(){var C;(C=_.current)==null||C.removeAttribute("data-focused")}const D=ba(T),j=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:U.navItemLeft,children:o.jsx(Ye,{icon:n,hasLeadingIcon:t,label:s,isCollapsed:i,isNested:v,styleType:"item",badge:w})}),o.jsx("div",{className:U.navItemRight,children:!i&&w&&_e(w)&&o.jsx(ze,{badgeType:w.badgeType,size:w.size,content:w.content,count:w.count})})]}),z=c?o.jsx("a",{id:a,"aria-label":s,className:U.navItemContainer,"data-collapsed":i,"data-appearance":f,"data-nested":v,href:c,children:j}):o.jsx("div",{id:a,className:U.navItemContainer,"data-collapsed":i,"data-appearance":f,"data-nested":v,"data-active":E,onClick:e,ref:C=>{_.current=C,typeof N=="function"?N(C):N&&"current"in N&&(N.current=C)},...Q,children:o.jsx(Ge,{label:s,tabIndex:D,onKeyDown:B,onFocus:L,onBlur:K,styleType:"item",children:j})});return o.jsx(Fe,{label:s,isCollapsed:i,children:z})});Pe.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Ue=h.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:s,isCollapsed:i,link:c,items:v=[],open:T,onOpenChange:f,hasMenuIcon:E=!0,isNested:w,parentMenuOpen:Q,appearance:N="brand",contrast:_="high",badge:B,hasDivider:L,active:K,onMenuOpenChange:D,getMenuOpen:j,...z},C)=>{const ne=ga(N,_),[X,se]=h.useState(!1),q=T??X,G=T!==void 0;function Z(){const l=!q,Ve=a||s;if(e&&e(),Ve&&D){D(Ve,l);return}G?f==null||f(l):se(l)}function Re(){if(!q)return;const l=a||s;if(l&&D){D(l,!1);return}G?f==null||f(!1):se(!1)}const{onKeyDown:We}=ha({onEnterOrSpace:Z,onEscape:Re,includeArrowKeys:!0,includeEscape:!0}),Ke=v.length,oe=!i&&Ke,ie=q,re=ba(Q),b=oe&&E?o.jsx(fa,{name:"arrow-chevron-right",className:V.menuIcon,"data-open":q}):null,u=!i&&(_e(B)||!!b),ce=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:V.menuContentLeft,children:o.jsx(Ye,{icon:n,hasLeadingIcon:t,label:s,isCollapsed:i,isNested:w,styleType:"menu",badge:B})}),u&&o.jsxs("div",{className:V.menuContentRight,children:[B&&_e(B)&&o.jsx(ze,{badgeType:B.badgeType,size:B.size,content:B.content,count:B.count}),b]})]}),le=o.jsxs("li",{id:a,className:V.navMenuContainer,"data-collapsed":i,"data-appearance":N,"data-nested":w,"data-open":q,"data-active":K,ref:C,...z,children:[o.jsx(Ge,{link:c,label:s,tabIndex:re,onClick:Z,onKeyDown:We,styleType:"menu",children:ce}),oe&&o.jsx("ul",{className:V.nestedMenu,"data-open":q,children:v.map(l=>{var Je;return(Je=l.items)!=null&&Je.length?o.jsx(Ue,{id:l.id,label:l.label,icon:l.icon,hasLeadingIcon:l.hasLeadingIcon,isCollapsed:i,link:l.link,onClick:l.onClick,items:l.items||[],open:j?j(l):l.open,onOpenChange:l.onOpenChange,onMenuOpenChange:D,getMenuOpen:j,active:l.active,hasMenuIcon:E,hasDivider:l.hasDivider,isNested:!0,parentMenuOpen:ie,appearance:N,contrast:_,badge:l.badge},l.id||l.label):o.jsxs(h.Fragment,{children:[o.jsx("li",{children:o.jsx(Pe,{id:l.id,label:l.label,icon:l.icon,hasLeadingIcon:l.hasLeadingIcon,isCollapsed:i,link:l.link,onClick:l.onClick,isNested:!0,parentMenuOpen:ie,appearance:N,active:l.active,badge:l.badge})}),l.hasDivider&&o.jsx(te,{appearance:ne})]},l.id||l.label)})})]}),Ba=o.jsx(Fe,{label:s,isCollapsed:i,children:le});return o.jsxs(o.Fragment,{children:[Ba,L&&o.jsx(te,{appearance:ne})]})});Ue.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Qa="_sideNavHeaderContainer_187xx_1",Xa="_sideNavHeader_187xx_1",Za="_sideNavHeaderTitleContainer_187xx_41",en="_sideNavHeaderTitle_187xx_41",tn="_sideNavHeaderIdentifier_187xx_52",an="_sideNavHeaderVersion_187xx_131",nn="_sideNavBody_187xx_160",sn="_sideNavFooterContainer_187xx_183",on="_sideNavFooter_187xx_183",rn="_sideNavFooterItems_187xx_196",cn="_collapsibleSection_187xx_213",k={sideNavHeaderContainer:Qa,sideNavHeader:Xa,sideNavHeaderTitleContainer:Za,sideNavHeaderTitle:en,sideNavHeaderIdentifier:tn,sideNavHeaderVersion:an,sideNavBody:nn,sideNavFooterContainer:sn,sideNavFooter:on,sideNavFooterItems:rn,collapsibleSection:cn},ln=300,Le=h.forwardRef(({size:a="m",collapsible:n,children:t,headerConfig:e,items:s,footerItems:i,isCollapsed:c,defaultCollapsed:v=!1,onCollapsedChange:T,appearance:f="brand",contrast:E="high",activeItem:w},Q)=>{const[N,_]=h.useState(c??v),[B,L]=h.useState(!0),[K,D]=h.useState({}),j=h.useCallback((b,u)=>{D(ce=>({...ce,[b]:u}))},[]),z=h.useCallback(b=>b.id&&b.id in K?K[b.id]:b.open,[K]);h.useEffect(()=>{D({})},[s]),h.useEffect(()=>{c!==void 0&&_(c)},[c]),h.useEffect(()=>{if(N)L(!1);else{const b=setTimeout(()=>{L(!0)},ln);return()=>clearTimeout(b)}},[N]);const C=()=>{const b=!N;c===void 0&&_(b),T==null||T(b)},ne=N?"arrow-double-right":"arrow-double-left",X=ga(f,E),se=b=>{[De,Me].includes(b.key)&&(b.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:q}=Na({onKeyDown:se},{interactiveKeyCodes:[De,Me]}),G=o.jsxs("div",{className:k.sideNavHeaderTitle,children:[o.jsx("div",{className:k.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),!N&&o.jsx("h1",{"data-hidden":!B,children:e==null?void 0:e.title})]}),Z=e==null?void 0:e.ariaLabel,Re=o.jsx("a",{href:(e==null?void 0:e.link)??"",className:k.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":Z,children:G}),We=o.jsx("div",{className:k.sideNavHeaderTitleContainer,tabIndex:0,onClick:e==null?void 0:e.onClick,onKeyDown:q,role:"button","aria-label":Z,children:G}),Ke=e!=null&&e.link?Re:e!=null&&e.onClick?We:o.jsx("div",{className:k.sideNavHeaderTitleContainer,children:G}),oe=h.useMemo(()=>(e==null?void 0:e.tooltip)??(e==null?void 0:e.title)??"",[e==null?void 0:e.tooltip,e==null?void 0:e.title]),ie=o.jsx(Fe,{label:oe,isCollapsed:N,children:Ke});function re(b){return b!=null&&b.length?o.jsx("ul",{children:b.map(u=>{var le;return((le=u.items)==null?void 0:le.length)?o.jsx(Ue,{id:u.id,badge:u.badge,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:N,link:u.link,onClick:u.onClick,items:u.items||[],open:z(u),onMenuOpenChange:j,getMenuOpen:z,active:u.active,appearance:f,contrast:E,hasDivider:u.hasDivider},u.id):o.jsxs(h.Fragment,{children:[o.jsx("li",{children:o.jsx(Pe,{id:u.id,badge:u.badge,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:N,link:u.link,onClick:u.onClick,appearance:f,active:u.active??(u.id===w&&!!w)})}),u.hasDivider&&o.jsx(te,{appearance:X})]},u.id)})}):null}return o.jsx(Ca,{ref:Q,size:a,isCollapsed:N,appearance:f,contrast:E,header:o.jsxs("div",{className:k.sideNavHeaderContainer,"data-compact":(e==null?void 0:e.isCompact)??!1,"data-collapsed":N,children:[o.jsxs("div",{className:k.sideNavHeader,"data-collapsed":N,"data-appearance":f,"data-compact":(e==null?void 0:e.isCompact)??!1,children:[ie,!(e!=null&&e.isCompact)&&o.jsx("div",{className:k.sideNavHeaderVersion,"data-hidden":!B,children:o.jsx("span",{children:e==null?void 0:e.version})})]}),o.jsx(te,{appearance:X})]}),body:o.jsx("div",{className:k.sideNavBody,children:re(s)}),footer:((i==null?void 0:i.length)||n)&&o.jsxs("div",{className:k.sideNavFooterContainer,children:[(i==null?void 0:i.length)&&o.jsx("div",{className:k.sideNavFooterItems,children:re(i)}),o.jsx(te,{appearance:X}),o.jsx("div",{className:k.sideNavFooter,children:n&&o.jsx("div",{className:k.collapsibleSection,children:o.jsx(Pe,{id:"collapse-button",icon:ne,hasLeadingIcon:!0,isCollapsed:N,onClick:C,label:N?"Ouvrir le menu":"Réduire le menu",appearance:f,role:"button"})})})]}),children:t})});Le.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function xa(a,n){return a.some(t=>{var e;return t.id===n?!0:(e=t.items)!=null&&e.length?xa(t.items,n):!1})}function dn(a,n){if(!a.id||!n)return a.onClick;const t=()=>{n(a.id)};return a.onClick?()=>{t(),a.onClick()}:t}function wa(a,n,t){return a.map(e=>{var E;const s=(E=e.items)!=null&&E.length?wa(e.items,n,t):void 0,i=!!(s!=null&&s.length),c=!i&&e.id===n,v=i&&e.id===n,T=e,f=i&&(e.id===n||xa(e.items,n));return{...e,active:c||v,open:f?!0:T.open,items:s,onClick:dn(e,t)}})}function je(){return function(n,t){const[e,s]=h.useState(t.args.isCollapsed??!0);return o.jsx("div",{children:o.jsx(n,{args:{...t.args,isCollapsed:e,onCollapsedChange:s}})})}}function un(a){return function(t,e){const[s,i]=h.useState(e.args.activeItem),c=a.map(v=>({...v,onClick:()=>i(v.id),link:void 0}));return o.jsx("div",{children:o.jsx(t,{args:{...e.args,items:c,activeItem:s}})})}}function Ta(a,n){return function(e,s){const[i,c]=h.useState(n),v=h.useMemo(()=>wa(a,i,c),[i,a]);return o.jsx(e,{args:{...s.args,items:v}})}}function Ea(a){if(!a)return null;const n=Array.from(a.children);for(const i of n)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const t=a.querySelector("a");return t||Array.from(a.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function p(a,n,t){const e=t?a.querySelector(t):a;if(!e)return null;const s=t?M(e):M(a),i=s.queryByRole("link",{name:n});if(i)return i;const c=s.queryByText(n);if(c){const v=c.closest("li");return Ea(v)}return null}function ae(a,n){const t=a.querySelector('[class*="sideNavBody"]');if(!t)return null;const s=Array.from(t.querySelectorAll("li"))[n];return Ea(s)}function Y(a,n){return p(a,n,'[class*="sideNavFooterItems"]')}function O(a,n="MA"){var i;return(i=M(a).getByText(n).parentElement)==null?void 0:i.parentElement}function pn(a,n){return a.querySelector(`#${n}`)}function vn(a){return a.dataset.active==="true"}function I(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function S(a,n){const t=p(a,n);t&&r(t).not.toHaveFocus()}function H(a,n){const t=p(a,n);t&&r(t).toHaveAttribute("tabindex","-1")}function R(a,n){const t=p(a,n);t&&r(t).toHaveAttribute("tabindex","0")}async function Aa(a,n,t){await Da(()=>{const e=a.getByRole("navigation"),s=pn(e,n);if(!s){r(t).toBe(!1);return}r(vn(s)).toBe(t)})}function F(a,n){return Aa(a,n,!0)}function m(a,n){return Aa(a,n,!1)}function A(a){const n=M(a),t=n.getByRole("navigation");return{canvas:n,sideNav:t}}function $(a=200){return new Promise(n=>setTimeout(n,a))}const Vn={title:"Composants/SideNav",id:"SideNav",component:Le,tags:["autodocs"],decorators:[a=>o.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:o.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>o.jsx(Le,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,isCollapsed:a.isCollapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:mn})},mn=o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),P={hasLeadingIcon:!0},W={size:"m",content:"number"},g=[{...P,id:"home",label:"Home",icon:"home"},{...P,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...P,id:"analytics",label:"Analytics",icon:"analytics"},{...P,id:"settings",label:"Settings",icon:"settings"},{...P,id:"profile",label:"Profile",icon:"user",link:"/profile"}],J=g,Ia=[g[0],{...g[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...g[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},g[4]],yn=[g[0],{...g[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},g[4]],gn=[g[0],{...g[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...g[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},g[4]],qe=[g[0],{...g[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...g[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},g[4]],Nn=[{...g[0],badge:{...W,badgeType:"indicator",count:5}},{...g[1],badge:{...W,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...W,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...W,badgeType:"indicator",count:12}}]},{...g[3],items:[{label:"General"},{label:"Privacy",badge:{...W,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...W,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...W,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...g[4],badge:{...W,badgeType:"brand",count:8}}],$e=[{...P,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...P,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...P,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],x={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},fn="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",bn={...x},hn={...x,onClick:()=>{console.log("Header clicked")}},y={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:J}},de={tags:["skip-ci"],args:{...y.args,collapsible:!0}},ue={tags:["skip-ci"],args:{...y.args,headerConfig:x}},pe={tags:["skip-ci"],args:{...y.args,headerConfig:{...x,isCompact:!0}}},ve={args:{...y.args,headerConfig:{...x,title:fn},size:"m"},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(t.offsetWidth).toBe(ka.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const e=t.querySelector("h1");r(e).not.toBeNull(),r(getComputedStyle(e).textOverflow).toBe("ellipsis"),r(e.scrollWidth).toBeGreaterThan(e.clientWidth)})}},me={tags:["skip-ci"],args:{...y.args,headerConfig:x,items:qe,collapsible:!0}},ye={tags:["skip-ci"],args:{...y.args,headerConfig:x,items:qe,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Navigate through navigation when all menus are closed",async()=>{H(t,"Overview"),H(t,"Reports"),H(t,"Analytics"),H(t,"General"),H(t,"Privacy"),H(t,"Advanced");const e=p(t,"Home");e==null||e.focus(),I(e),await d.tab();const s=p(t,"Dashboard");I(s),S(t,"Overview"),S(t,"Reports"),S(t,"Analytics"),await d.tab();const i=p(t,"Settings");I(i),S(t,"General"),S(t,"Privacy"),S(t,"Advanced"),await d.tab();const c=p(t,"Profile");I(c)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const e=p(t,"Dashboard");await d.click(e),R(t,"Overview"),R(t,"Reports"),R(t,"Analytics"),await d.tab();const s=p(t,"Overview");I(s),await d.tab();const i=p(t,"Reports");I(i),await d.tab();const c=p(t,"Analytics");I(c)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const e=p(t,"Dashboard");await d.click(e),H(t,"Overview"),H(t,"Reports"),H(t,"Analytics"),await d.tab();const s=p(t,"Settings");I(s),S(t,"Overview"),S(t,"Reports"),S(t,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const e=p(t,"Settings");await d.click(e),R(t,"General"),R(t,"Privacy"),R(t,"Advanced"),H(t,"Security"),H(t,"API Keys"),await d.tab();const s=p(t,"General");I(s),await d.tab();const i=p(t,"Privacy");I(i),await d.tab();const c=p(t,"Advanced");I(c),S(t,"Security"),S(t,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const e=p(t,"Advanced");await d.click(e),R(t,"Security"),R(t,"API Keys"),await d.tab();const s=p(t,"Security");I(s),await d.tab();const i=p(t,"API Keys");I(i)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const e=p(t,"Advanced");await d.click(e),H(t,"Security"),H(t,"API Keys"),await d.tab();const s=p(t,"Profile");I(s),S(t,"Security"),S(t,"API Keys")})}},ge={args:{...y.args,headerConfig:{...x,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const e=O(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),r(e).not.toHaveAttribute("href"),r(e).not.toHaveAttribute("role","button"),r(e).not.toHaveAttribute("tabindex")})}},Ne={args:{...y.args,headerConfig:bn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header is a link when link prop is provided",async()=>{const e=O(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("A"),r(e).toHaveAttribute("href","/"),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const e=O(t);e==null||e.focus(),r(e).toHaveFocus()})}},fe={args:{...y.args,headerConfig:{...hn,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header is clickable button when onClick is provided",async()=>{const e=O(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),await d.click(e),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const e=O(t);e==null||e.focus(),r(e).toHaveFocus(),await d.keyboard(Sa),await d.keyboard(Ha)})}},be={args:{...y.args,headerConfig:x,items:J,collapsible:!0,isCollapsed:!0},decorators:[je()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header tooltip falls back to title when collapsed",async()=>{const e=O(t);r(e).not.toBeNull(),e==null||e.focus(),await $();const s=M(document.body).queryByRole("tooltip",{name:"My Application"});r(s).not.toBeNull(),r(s).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const e=ae(t,0);r(e).not.toBeNull(),e==null||e.focus(),await $();const s=M(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await d.tab(),await $();const e=M(document.body).queryByRole("tooltip",{name:"Dashboard"});r(e).not.toBeNull(),r(e).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await d.tab(),await d.tab(),await d.tab(),await $();const e=M(document.body).queryByRole("tooltip",{name:"Profile"});r(e).not.toBeNull(),r(e).toHaveTextContent("Profile")})}},he={args:{...y.args,headerConfig:{...x,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[je()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const e=O(t);r(e).not.toBeNull(),e==null||e.focus(),await $();const s=M(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(s).not.toBeNull(),r(s).toHaveTextContent("Custom header tooltip")})}},xe={args:{...y.args,headerConfig:x,items:qe,collapsible:!0,isCollapsed:!0},decorators:[je()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{Ma(a);const e=ae(t,1);r(e).not.toBeNull(),await d.tab(),await d.tab(),await d.tab(),await $();const s=M(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},we={tags:["skip-ci"],args:{...y.args,headerConfig:x,items:gn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify Overview nested item is active",async()=>{F(t,"overview"),m(t,"reports")})}},Te={tags:["skip-ci"],args:{...y.args,headerConfig:x,items:yn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{F(t,"security"),m(t,"advanced"),m(t,"settings"),m(t,"api-keys")})}},Ee={tags:["skip-ci"],args:{...y.args,headerConfig:x,collapsible:!0},decorators:[Ta(Ia,"security")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify only Security is active, not parent NavMenus",async()=>{F(t,"security"),m(t,"advanced"),m(t,"settings"),m(t,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const e=t.getByRole("navigation"),s=p(e,"API Keys");r(s).not.toBeNull(),await d.click(s),m(t,"security"),F(t,"api-keys"),m(t,"advanced"),m(t,"settings")})}},Ae={tags:["skip-ci"],args:{...y.args,headerConfig:x,collapsible:!0},decorators:[Ta(Ia,"overview")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify Overview leaf is active initially",async()=>{F(t,"overview"),m(t,"reports"),m(t,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const e=t.getByRole("navigation"),s=p(e,"Reports");r(s).not.toBeNull(),await d.click(s),m(t,"overview"),F(t,"reports"),m(t,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const e=t.getByRole("navigation"),s=p(e,"Settings");r(s).not.toBeNull(),await d.click(s);const i=p(e,"Advanced");r(i).not.toBeNull(),await d.click(i),m(t,"overview"),m(t,"reports"),m(t,"security"),m(t,"api-keys"),F(t,"advanced")})}},Ie={args:{...y.args,headerConfig:x,items:J,activeItem:"home",collapsible:!0},decorators:[un(J)],play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify Home has active class initially",async()=>{F(t,"home"),m(t,"dashboard"),m(t,"analytics"),m(t,"settings"),m(t,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=t.getByRole("navigation"),s=p(e,"Dashboard");r(s).not.toBeNull(),await d.click(s),m(t,"home"),F(t,"dashboard"),m(t,"analytics"),m(t,"settings"),m(t,"profile")})}},Be={args:{...y.args,headerConfig:x,items:J,footerItems:$e,collapsible:!0}},Ce={args:{...y.args,headerConfig:x,items:J,footerItems:$e,collapsible:!1}},ke={args:{...y.args,headerConfig:x,items:qe,footerItems:$e,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify footer items are rendered",async()=>{const e=Y(t,"Settings");r(e).not.toBeNull();const s=Y(t,"Help & Support");r(s).not.toBeNull();const i=Y(t,"Account");r(i).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const e=Y(t,"Account");await d.click(e);const s=Y(t,"Preferences");r(s).not.toBeNull();const i=Y(t,"Logout");r(i).not.toBeNull()})}},ee={tags:["skip-ci"],args:{...y.args,headerConfig:x,items:Nn,collapsible:!0}},Se={args:{...ee.args,isCollapsed:!0},decorators:[je()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var i;const e=ae(t,0);r(e).not.toBeNull();const s=e==null?void 0:e.querySelector('[data-size="xs"]');r(s).not.toBeNull(),r(s).toHaveAttribute("data-badge-type","indicator"),r((i=s==null?void 0:s.textContent)==null?void 0:i.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const e=ae(t,0);r(e==null?void 0:e.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var i;const e=ae(t,1);r(e).not.toBeNull();const s=e==null?void 0:e.querySelector('[data-size="xs"]');r(s).not.toBeNull(),r(s).toHaveAttribute("data-badge-type","indicator"),r((i=s==null?void 0:s.textContent)==null?void 0:i.trim()).toBe("")})}},xn=[g[0],{...g[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...g[2],hasDivider:!0},{...P,id:"reports",label:"Reports",icon:"info"},{...g[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},g[4]],He={args:{...y.args,headerConfig:x,items:xn,collapsible:!0}};var Xe,Ze,et;y.parameters={...y.parameters,docs:{...(Xe=y.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=y.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;de.parameters={...de.parameters,docs:{...(tt=de.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(nt=(at=de.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,ot,it;ue.parameters={...ue.parameters,docs:{...(st=ue.parameters)==null?void 0:st.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(it=(ot=ue.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var rt,ct,lt;pe.parameters={...pe.parameters,docs:{...(rt=pe.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(lt=(ct=pe.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var dt,ut,pt;ve.parameters={...ve.parameters,docs:{...(dt=ve.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      title: longApplicationTitle
    },
    size: "m"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Side nav keeps the fixed M panel width with a long application title", async () => {
      expect(sideNav.offsetWidth).toBe(sideNavPanelSize.m);
    });
    await step("Title is truncated with an ellipsis within the header area", async () => {
      const title = sideNav.querySelector("h1") as HTMLElement;
      expect(title).not.toBeNull();
      expect(getComputedStyle(title).textOverflow).toBe("ellipsis");
      expect(title.scrollWidth).toBeGreaterThan(title.clientWidth);
    });
  }
}`,...(pt=(ut=ve.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var vt,mt,yt;me.parameters={...me.parameters,docs:{...(vt=me.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(yt=(mt=me.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var gt,Nt,ft;ye.parameters={...ye.parameters,docs:{...(gt=ye.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ft=(Nt=ye.parameters)==null?void 0:Nt.docs)==null?void 0:ft.source}}};var bt,ht,xt;ge.parameters={...ge.parameters,docs:{...(bt=ge.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(xt=(ht=ge.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var wt,Tt,Et;Ne.parameters={...Ne.parameters,docs:{...(wt=Ne.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Et=(Tt=Ne.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var At,It,Bt;fe.parameters={...fe.parameters,docs:{...(At=fe.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Bt=(It=fe.parameters)==null?void 0:It.docs)==null?void 0:Bt.source}}};var Ct,kt,St;be.parameters={...be.parameters,docs:{...(Ct=be.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    collapsible: true,
    isCollapsed: true
  },
  decorators: [createCollapsedStateDecorator()],
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify header tooltip falls back to title when collapsed", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      headerTitleContainer?.focus();
      await waitForTooltip();
      const headerTooltip = within(document.body).queryByRole("tooltip", {
        name: "My Application"
      });
      expect(headerTooltip).not.toBeNull();
      expect(headerTooltip).toHaveTextContent("My Application");
    });
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
}`,...(St=(kt=be.parameters)==null?void 0:kt.docs)==null?void 0:St.source}}};var Ht,Dt,Mt;he.parameters={...he.parameters,docs:{...(Ht=he.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      tooltip: "Custom header tooltip"
    },
    collapsible: true,
    isCollapsed: true
  },
  decorators: [createCollapsedStateDecorator()],
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify header tooltip uses custom tooltip value when collapsed", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      headerTitleContainer?.focus();
      await waitForTooltip();
      const headerTooltip = within(document.body).queryByRole("tooltip", {
        name: "Custom header tooltip"
      });
      expect(headerTooltip).not.toBeNull();
      expect(headerTooltip).toHaveTextContent("Custom header tooltip");
    });
  }
}`,...(Mt=(Dt=he.parameters)==null?void 0:Dt.docs)==null?void 0:Mt.source}}};var _t,Pt,Ft;xe.parameters={...xe.parameters,docs:{...(_t=xe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
    isCollapsed: true
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
}`,...(Ft=(Pt=xe.parameters)==null?void 0:Pt.docs)==null?void 0:Ft.source}}};var jt,qt,Rt;we.parameters={...we.parameters,docs:{...(jt=we.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedActivePreselected,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      canvas
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify Overview nested item is active", async () => {
      expectNavItemToBeActive(canvas, "overview");
      expectNavItemNotToBeActive(canvas, "reports");
    });
  }
}`,...(Rt=(qt=we.parameters)==null?void 0:qt.docs)==null?void 0:Rt.source}}};var Wt,Kt,Vt;Te.parameters={...Te.parameters,docs:{...(Wt=Te.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedNavMenuActivePreselected,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      canvas
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify only the nested leaf is active, not parent NavMenus", async () => {
      expectNavItemToBeActive(canvas, "security");
      expectNavItemNotToBeActive(canvas, "advanced");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "api-keys");
    });
  }
}`,...(Vt=(Kt=Te.parameters)==null?void 0:Kt.docs)==null?void 0:Vt.source}}};var Ot,Lt,zt;Ee.parameters={...Ee.parameters,docs:{...(Ot=Ee.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    collapsible: true
  },
  decorators: [createNestedActiveItemStateDecorator(navigationItemsWithNestedAndIds, "security")],
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      canvas
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify only Security is active, not parent NavMenus", async () => {
      expectNavItemToBeActive(canvas, "security");
      expectNavItemNotToBeActive(canvas, "advanced");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "api-keys");
    });
    await step("Click API Keys and verify only API Keys is active", async () => {
      const sideNav = canvas.getByRole("navigation");
      const apiKeysElement = getNavElement(sideNav, "API Keys");
      expect(apiKeysElement).not.toBeNull();
      await userEvent.click(apiKeysElement!);
      expectNavItemNotToBeActive(canvas, "security");
      expectNavItemToBeActive(canvas, "api-keys");
      expectNavItemNotToBeActive(canvas, "advanced");
      expectNavItemNotToBeActive(canvas, "settings");
    });
  }
}`,...(zt=(Lt=Ee.parameters)==null?void 0:Lt.docs)==null?void 0:zt.source}}};var Gt,Yt,Ut;Ae.parameters={...Ae.parameters,docs:{...(Gt=Ae.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    collapsible: true
  },
  decorators: [createNestedActiveItemStateDecorator(navigationItemsWithNestedAndIds, "overview")],
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      canvas
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify Overview leaf is active initially", async () => {
      expectNavItemToBeActive(canvas, "overview");
      expectNavItemNotToBeActive(canvas, "reports");
      expectNavItemNotToBeActive(canvas, "advanced");
    });
    await step("Click Reports and verify only Reports is active", async () => {
      const sideNav = canvas.getByRole("navigation");
      const reportsElement = getNavElement(sideNav, "Reports");
      expect(reportsElement).not.toBeNull();
      await userEvent.click(reportsElement!);
      expectNavItemNotToBeActive(canvas, "overview");
      expectNavItemToBeActive(canvas, "reports");
      expectNavItemNotToBeActive(canvas, "advanced");
    });
    await step("Click Advanced NavMenu and verify only Advanced is active", async () => {
      const sideNav = canvas.getByRole("navigation");
      const settingsMenu = getNavElement(sideNav, "Settings");
      expect(settingsMenu).not.toBeNull();
      await userEvent.click(settingsMenu!);
      const advancedMenu = getNavElement(sideNav, "Advanced");
      expect(advancedMenu).not.toBeNull();
      await userEvent.click(advancedMenu!);
      expectNavItemNotToBeActive(canvas, "overview");
      expectNavItemNotToBeActive(canvas, "reports");
      expectNavItemNotToBeActive(canvas, "security");
      expectNavItemNotToBeActive(canvas, "api-keys");
      expectNavItemToBeActive(canvas, "advanced");
    });
  }
}`,...(Ut=(Yt=Ae.parameters)==null?void 0:Yt.docs)==null?void 0:Ut.source}}};var $t,Jt,Qt;Ie.parameters={...Ie.parameters,docs:{...($t=Ie.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=Ie.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,ea;Be.parameters={...Be.parameters,docs:{...(Xt=Be.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(ea=(Zt=Be.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,na;Ce.parameters={...Ce.parameters,docs:{...(ta=Ce.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(na=(aa=Ce.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var sa,oa,ia;ke.parameters={...ke.parameters,docs:{...(sa=ke.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ia=(oa=ke.parameters)==null?void 0:oa.docs)==null?void 0:ia.source}}};var ra,ca,la;ee.parameters={...ee.parameters,docs:{...(ra=ee.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(la=(ca=ee.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var da,ua,pa;Se.parameters={...Se.parameters,docs:{...(da=Se.parameters)==null?void 0:da.docs,source:{originalSource:`{
  args: {
    ...WithBadges.args,
    isCollapsed: true
  },
  decorators: [createCollapsedStateDecorator()],
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Collapsed nav items show xs indicator dot on icon", async () => {
      const homeElement = getNavElementInCollapsedState(sideNav, 0);
      expect(homeElement).not.toBeNull();
      const collapsedBadge = homeElement?.querySelector('[data-size="xs"]');
      expect(collapsedBadge).not.toBeNull();
      expect(collapsedBadge).toHaveAttribute("data-badge-type", "indicator");
      expect(collapsedBadge?.textContent?.trim()).toBe("");
    });
    await step("Collapsed nav items do not show numeric badge in right column", async () => {
      const homeElement = getNavElementInCollapsedState(sideNav, 0);
      expect(homeElement?.querySelector('[data-simple-badge="true"]')).toBeNull();
    });
    await step("Collapsed menu items show xs indicator dot on icon", async () => {
      const dashboardMenu = getNavElementInCollapsedState(sideNav, 1);
      expect(dashboardMenu).not.toBeNull();
      const collapsedBadge = dashboardMenu?.querySelector('[data-size="xs"]');
      expect(collapsedBadge).not.toBeNull();
      expect(collapsedBadge).toHaveAttribute("data-badge-type", "indicator");
      expect(collapsedBadge?.textContent?.trim()).toBe("");
    });
  }
}`,...(pa=(ua=Se.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var va,ma,ya;He.parameters={...He.parameters,docs:{...(va=He.parameters)==null?void 0:va.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(ya=(ma=He.parameters)==null?void 0:ma.docs)==null?void 0:ya.source}}};const On=["Default","Collapsible","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers"];export{Ie as ActiveItemState,he as CollapsedHeaderTooltipCustom,be as CollapsedTooltip,xe as CollapsedTooltipWithNested,Se as CollapsedWithBadges,de as Collapsible,y as Default,Ce as FooterItemsOnly,ke as FooterItemsWithNested,ge as HeaderClickability,pe as HeaderCompact,Ne as HeaderWithLink,ve as HeaderWithLongTitle,fe as HeaderWithOnClick,ue as HeaderWithVersion,ye as KeyboardNavigation,Ae as NestedItemActiveOnClick,we as NestedItemActivePreselected,Ee as NestedNavMenuActiveOnClick,Te as NestedNavMenuActivePreselected,ee as WithBadges,He as WithDividers,Be as WithFooterItems,me as WithNestedMenus,On as __namedExportsOrder,Vn as default};
