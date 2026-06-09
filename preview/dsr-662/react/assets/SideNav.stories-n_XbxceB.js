import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{g as Ea,B as Pa,s as Ra}from"./BaseSideNav-nr7r6elQ.js";import{T as qa,a as Wa}from"./keyboard-test.constants-By8W48aj.js";import{w as M,e as r,a as Va,u as d}from"./index-4rjIhT2C.js";import{f as Ka}from"./testing.utils-mIZIUNbM.js";import{S as _e,E as je,c as et,b as La,d as Oa}from"./keyboard.constants-BverKK8B.js";import{r as x}from"./index-G8LIXM5I.js";import{u as Ia}from"./useActiveKeyboard-DaOmFJe_.js";import{D as ne}from"./Divider-BMotkXeQ.js";import{s as za,I as Ye,B as Ue}from"./Badge-C3W4NyCk.js";import{I as Aa}from"./Icon-Bc7wfgCv.js";import{T as Ga}from"./Tooltip-BNzaOk9j.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BpCpHr8J.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function $a(a=!1,n=!1){return a?Ye.s:n?Ye.l:Ye.m}function Pe(a){return a?za({showBadge:!0,badgeContent:a.content??"number",badgeCount:a.count,badgeIcon:a.icon}):!1}function Ya(a){return a.badgeType??"indicator"}const Ua="_navItemContainer_1k518_1",Ja="_navItemLeft_1k518_42",Qa="_navItem_1k518_1",Xa="_navItemRight_1k518_57",Y={navItemContainer:Ua,navItemLeft:Ja,navItem:Qa,navItemRight:Xa},Za="_navMenuContainer_f68ss_1",en="_navMenu_f68ss_1",tn="_menuContentLeft_f68ss_31",an="_menuContentRight_f68ss_36",nn="_menuIcon_f68ss_96",sn="_nestedMenu_f68ss_104",on="_icon_f68ss_120",O={navMenuContainer:Za,navMenu:en,menuContentLeft:tn,menuContentRight:an,menuIcon:nn,nestedMenu:sn,icon:on};function Je({link:a,label:n,tabIndex:t,onKeyDown:e,onFocus:s,onBlur:i,onClick:c,children:u,styleType:w="item"}){const y=w==="menu"?O:Y,T={className:w==="menu"?y.navMenu:y.navItem,tabIndex:t,"aria-label":n,...s&&{onFocus:s},...i&&{onBlur:i},...c&&{onClick:c},...e&&{onKeyDown:e}};return a?o.jsx("a",{href:a,...T,children:u}):o.jsx("span",{...T,children:u})}Je.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Qe({icon:a,hasLeadingIcon:n=!0,label:t,isCollapsed:e,isNested:s,styleType:i="item",badge:c}){const u=$a(s,e),w=i==="menu"?O:Y;function y(){if(!n||!a)return null;const E=o.jsx(Aa,{name:a,className:w.icon,size:u});return e&&c&&Pe(c)?o.jsx(Ue,{badgeType:Ya(c),size:"xs",content:"empty",children:E}):E}return o.jsxs(o.Fragment,{children:[y(),e?null:o.jsx("span",{children:t})]})}Qe.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function We({label:a,isCollapsed:n,children:t}){return n&&a?o.jsx(Ga,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:t}):t}We.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Ca(a){return a===!1?-1:0}function Ba({onEnterOrSpace:a,onEscape:n,includeArrowKeys:t=!1,includeEscape:e=!1}={}){const s=x.useCallback(u=>{[_e,je].includes(u.key)&&(u.preventDefault(),a==null||a()),u.key===et&&e&&(u.preventDefault(),n==null||n())},[a,n,e]),i=[_e,je,...e?[et]:[],...t?[La,Oa]:[]],{onKeyDown:c}=Ia({onKeyDown:s},{interactiveKeyCodes:i});return{onKeyDown:c}}const Re=x.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:s,isCollapsed:i,link:c,isNested:u,parentMenuOpen:w,appearance:y="brand",active:E,badge:T,...Q},f)=>{const F=x.useRef(null),{onKeyDown:C}=Ba({onEnterOrSpace:e});function z(){var B;(B=F.current)==null||B.setAttribute("data-focused","true")}function K(){var B;(B=F.current)==null||B.removeAttribute("data-focused")}const D=Ca(w),P=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:Y.navItemLeft,children:o.jsx(Qe,{icon:n,hasLeadingIcon:t,label:s,isCollapsed:i,isNested:u,styleType:"item",badge:T})}),o.jsx("div",{className:Y.navItemRight,children:!i&&T&&Pe(T)&&o.jsx(Ue,{badgeType:T.badgeType,size:T.size,content:T.content,count:T.count})})]}),G=c?o.jsx("a",{id:a,"aria-label":s,className:Y.navItemContainer,"data-collapsed":i,"data-appearance":y,"data-nested":u,href:c,children:P}):o.jsx("div",{id:a,className:Y.navItemContainer,"data-collapsed":i,"data-appearance":y,"data-nested":u,"data-active":E,onClick:e,ref:B=>{F.current=B,typeof f=="function"?f(B):f&&"current"in f&&(f.current=B)},...Q,children:o.jsx(Je,{label:s,tabIndex:D,onKeyDown:C,onFocus:z,onBlur:K,styleType:"item",children:P})});return o.jsx(We,{label:s,isCollapsed:i,children:G})});Re.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Xe=x.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:s,isCollapsed:i,link:c,items:u=[],open:w,onOpenChange:y,hasMenuIcon:E=!0,isNested:T,parentMenuOpen:Q,appearance:f="brand",contrast:F="high",badge:C,hasDivider:z,active:K,onMenuOpenChange:D,getMenuOpen:P,...G},B)=>{const oe=Ea(f,F),[X,ie]=x.useState(!1),R=w??X,$=w!==void 0;function Z(){const l=!R,$e=a||s;if(e&&e(),$e&&D){D($e,l);return}$?y==null||y(l):ie(l)}function Oe(){if(!R)return;const l=a||s;if(l&&D){D(l,!1);return}$?y==null||y(!1):ie(!1)}const{onKeyDown:ze}=Ba({onEnterOrSpace:Z,onEscape:Oe,includeArrowKeys:!0,includeEscape:!0}),Ge=u.length,re=!i&&Ge,ce=R,le=Ca(Q),h=re&&E?o.jsx(Aa,{name:"arrow-chevron-right",className:O.menuIcon,"data-open":R}):null,v=!i&&(Pe(C)||!!h),de=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:O.menuContentLeft,children:o.jsx(Qe,{icon:n,hasLeadingIcon:t,label:s,isCollapsed:i,isNested:T,styleType:"menu",badge:C})}),v&&o.jsxs("div",{className:O.menuContentRight,children:[C&&Pe(C)&&o.jsx(Ue,{badgeType:C.badgeType,size:C.size,content:C.content,count:C.count}),h]})]}),ue=o.jsxs("li",{id:a,className:O.navMenuContainer,"data-collapsed":i,"data-appearance":f,"data-nested":T,"data-open":R,"data-active":K,ref:B,...G,children:[o.jsx(Je,{link:c,label:s,tabIndex:le,onClick:Z,onKeyDown:ze,styleType:"menu",children:de}),re&&o.jsx("ul",{className:O.nestedMenu,"data-open":R,children:u.map(l=>{var Ze;return(Ze=l.items)!=null&&Ze.length?o.jsx(Xe,{id:l.id,label:l.label,icon:l.icon,hasLeadingIcon:l.hasLeadingIcon,isCollapsed:i,link:l.link,onClick:l.onClick,items:l.items||[],open:P?P(l):l.open,onOpenChange:l.onOpenChange,onMenuOpenChange:D,getMenuOpen:P,active:l.active,hasMenuIcon:E,hasDivider:l.hasDivider,isNested:!0,parentMenuOpen:ce,appearance:f,contrast:F,badge:l.badge},l.id||l.label):o.jsxs(x.Fragment,{children:[o.jsx("li",{children:o.jsx(Re,{id:l.id,label:l.label,icon:l.icon,hasLeadingIcon:l.hasLeadingIcon,isCollapsed:i,link:l.link,onClick:l.onClick,isNested:!0,parentMenuOpen:ce,appearance:f,active:l.active,badge:l.badge})}),l.hasDivider&&o.jsx(ne,{appearance:oe})]},l.id||l.label)})})]}),ja=o.jsx(We,{label:s,isCollapsed:i,children:ue});return o.jsxs(o.Fragment,{children:[ja,z&&o.jsx(ne,{appearance:oe})]})});Xe.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const rn="_sideNavHeaderContainer_awfjy_1",cn="_sideNavHeader_awfjy_1",ln="_sideNavHeaderTitleContainer_awfjy_41",dn="_sideNavHeaderTitle_awfjy_41",un="_sideNavHeaderIdentifier_awfjy_52",pn="_sideNavHeaderVersion_awfjy_131",vn="_sideNavBody_awfjy_160",mn="_sideNavFooterContainer_awfjy_182",yn="_sideNavFooter_awfjy_182",gn="_sideNavFooterItems_awfjy_195",Nn="_collapsibleSection_awfjy_212",S={sideNavHeaderContainer:rn,sideNavHeader:cn,sideNavHeaderTitleContainer:ln,sideNavHeaderTitle:dn,sideNavHeaderIdentifier:un,sideNavHeaderVersion:pn,sideNavBody:vn,sideNavFooterContainer:mn,sideNavFooter:yn,sideNavFooterItems:gn,collapsibleSection:Nn},fn=300,qe=x.forwardRef(({size:a="m",collapsible:n,children:t,headerConfig:e,items:s,footerItems:i,isCollapsed:c,defaultCollapsed:u=!1,onCollapsedChange:w,appearance:y="brand",contrast:E="high",activeItem:T},Q)=>{const[f,F]=x.useState(c??u),[C,z]=x.useState(!0),[K,D]=x.useState({}),P=x.useCallback((h,v)=>{D(de=>({...de,[h]:v}))},[]),G=x.useCallback(h=>h.id&&h.id in K?K[h.id]:h.open,[K]);x.useEffect(()=>{D({})},[s]),x.useEffect(()=>{c!==void 0&&F(c)},[c]),x.useEffect(()=>{if(f)z(!1);else{const h=setTimeout(()=>{z(!0)},fn);return()=>clearTimeout(h)}},[f]);const B=()=>{const h=!f;c===void 0&&F(h),w==null||w(h)},oe=f?"arrow-double-right":"arrow-double-left",X=Ea(y,E),ie=h=>{[_e,je].includes(h.key)&&(h.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:R}=Ia({onKeyDown:ie},{interactiveKeyCodes:[_e,je]}),$=o.jsxs("div",{className:S.sideNavHeaderTitle,children:[o.jsx("div",{className:S.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),!f&&o.jsx("h1",{"data-hidden":!C,children:e==null?void 0:e.title})]}),Z=e==null?void 0:e.ariaLabel,Oe=o.jsx("a",{href:(e==null?void 0:e.link)??"",className:S.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":Z,children:$}),ze=o.jsx("div",{className:S.sideNavHeaderTitleContainer,tabIndex:0,onClick:e==null?void 0:e.onClick,onKeyDown:R,role:"button","aria-label":Z,children:$}),Ge=e!=null&&e.link?Oe:e!=null&&e.onClick?ze:o.jsx("div",{className:S.sideNavHeaderTitleContainer,children:$}),re=x.useMemo(()=>(e==null?void 0:e.tooltip)??(e==null?void 0:e.title)??"",[e==null?void 0:e.tooltip,e==null?void 0:e.title]),ce=o.jsx(We,{label:re,isCollapsed:f,children:Ge});function le(h){return h!=null&&h.length?o.jsx("ul",{children:h.map(v=>{var ue;return((ue=v.items)==null?void 0:ue.length)?o.jsx(Xe,{id:v.id,badge:v.badge,label:v.label,icon:v.icon,hasLeadingIcon:v.hasLeadingIcon,isCollapsed:f,link:v.link,onClick:v.onClick,items:v.items||[],open:G(v),onMenuOpenChange:P,getMenuOpen:G,active:v.active,appearance:y,contrast:E,hasDivider:v.hasDivider},v.id):o.jsxs(x.Fragment,{children:[o.jsx("li",{children:o.jsx(Re,{id:v.id,badge:v.badge,label:v.label,icon:v.icon,hasLeadingIcon:v.hasLeadingIcon,isCollapsed:f,link:v.link,onClick:v.onClick,appearance:y,active:v.active??(v.id===T&&!!T)})}),v.hasDivider&&o.jsx(ne,{appearance:X})]},v.id)})}):null}return o.jsx(Pa,{ref:Q,size:a,isCollapsed:f,appearance:y,contrast:E,header:o.jsxs("div",{className:S.sideNavHeaderContainer,"data-compact":(e==null?void 0:e.isCompact)??!1,"data-collapsed":f,children:[o.jsxs("div",{className:S.sideNavHeader,"data-collapsed":f,"data-appearance":y,"data-compact":(e==null?void 0:e.isCompact)??!1,children:[ce,!(e!=null&&e.isCompact)&&o.jsx("div",{className:S.sideNavHeaderVersion,"data-hidden":!C,children:o.jsx("span",{children:e==null?void 0:e.version})})]}),o.jsx(ne,{appearance:X})]}),body:o.jsx("div",{className:S.sideNavBody,children:le(s)}),footer:((i==null?void 0:i.length)||n)&&o.jsxs("div",{className:S.sideNavFooterContainer,children:[(i==null?void 0:i.length)&&o.jsx("div",{className:S.sideNavFooterItems,children:le(i)}),o.jsx(ne,{appearance:X}),o.jsx("div",{className:S.sideNavFooter,children:n&&o.jsx("div",{className:S.collapsibleSection,children:o.jsx(Re,{id:"collapse-button",icon:oe,hasLeadingIcon:!0,isCollapsed:f,onClick:B,label:f?"Ouvrir le menu":"Réduire le menu",appearance:y,role:"button"})})})]}),children:t})});qe.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function Sa(a,n){return a.some(t=>{var e;return t.id===n?!0:(e=t.items)!=null&&e.length?Sa(t.items,n):!1})}function hn(a,n){if(!a.id||!n)return a.onClick;const t=()=>{n(a.id)};return a.onClick?()=>{t(),a.onClick()}:t}function ka(a,n,t){return a.map(e=>{var E;const s=(E=e.items)!=null&&E.length?ka(e.items,n,t):void 0,i=!!(s!=null&&s.length),c=!i&&e.id===n,u=i&&e.id===n,w=e,y=i&&(e.id===n||Sa(e.items,n));return{...e,active:c||u,open:y?!0:w.open,items:s,onClick:hn(e,t)}})}function Ve(){return function(n,t){const[e,s]=x.useState(t.args.isCollapsed??!0);return o.jsx("div",{children:o.jsx(n,{args:{...t.args,isCollapsed:e,onCollapsedChange:s}})})}}function bn(a){return function(t,e){const[s,i]=x.useState(e.args.activeItem),c=a.map(u=>({...u,onClick:()=>i(u.id),link:void 0}));return o.jsx("div",{children:o.jsx(t,{args:{...e.args,items:c,activeItem:s}})})}}function Ha(a,n){return function(e,s){const[i,c]=x.useState(n),u=x.useMemo(()=>ka(a,i,c),[i,a]);return o.jsx(e,{args:{...s.args,items:u}})}}function Ma(a){if(!a)return null;const n=Array.from(a.children);for(const i of n)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const t=a.querySelector("a");return t||Array.from(a.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function p(a,n,t){const e=t?a.querySelector(t):a;if(!e)return null;const s=t?M(e):M(a),i=s.queryByRole("link",{name:n});if(i)return i;const c=s.queryByText(n);if(c){const u=c.closest("li");return Ma(u)}return null}function se(a,n){const t=a.querySelector('[class*="sideNavBody"]');if(!t)return null;const s=Array.from(t.querySelectorAll("li"))[n];return Ma(s)}function L(a,n){return p(a,n,'[class*="sideNavFooterItems"]')}function V(a,n="MA"){var i;return(i=M(a).getByText(n).parentElement)==null?void 0:i.parentElement}function xn(a,n){return a.querySelector(`#${n}`)}function wn(a){return a.dataset.active==="true"}function A(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function k(a,n){const t=p(a,n);t&&r(t).not.toHaveFocus()}function H(a,n){const t=p(a,n);t&&r(t).toHaveAttribute("tabindex","-1")}function q(a,n){const t=p(a,n);t&&r(t).toHaveAttribute("tabindex","0")}async function Da(a,n,t){await Va(()=>{const e=a.getByRole("navigation"),s=xn(e,n);if(!s){r(t).toBe(!1);return}r(wn(s)).toBe(t)})}function j(a,n){return Da(a,n,!0)}function g(a,n){return Da(a,n,!1)}function Tn(a){if(a.tagName==="NAV")return a;const n=a.querySelector("nav");if(!n)throw new Error("Side nav shell not found");return n}function En(a){const n=a.closest('[class*="navItemContainer"]');return n||a}function tt(a,n,t){const e=document.createElement("div");e.style.setProperty(t,`var(${n})`),e.style.display="none",a.appendChild(e);const s=getComputedStyle(e)[t];return a.removeChild(e),s}function In(a){const n=document.createElement("div");n.style.boxShadow=["inset 0 1px 0 0 var(--rte-side-nav-item-border-focus)","inset 0 -1px 0 0 var(--rte-side-nav-item-border-focus)","inset -1px 0 0 0 var(--rte-side-nav-item-border-focus)"].join(", "),n.style.display="none",a.appendChild(n);const t=getComputedStyle(n).boxShadow;return a.removeChild(n),t}function An(a){const n=document.createElement("div");n.style.boxShadow="inset 0 0 0 1px var(--rte-side-nav-item-border-focus)",n.style.display="none",a.appendChild(n);const t=getComputedStyle(n).boxShadow;return a.removeChild(n),t}function Cn(a){return a.className.includes("sideNavHeaderTitleContainer")}function Bn(a){if(a.getAttribute("data-active")==="true")return!0;const n=a.closest('[class*="navMenuContainer"]');return(n==null?void 0:n.getAttribute("data-active"))==="true"}function ee(a){a.focus({focusVisible:!0})}function te(a,n){const t=Tn(n),e=En(a),s=getComputedStyle(e);r(s.borderRadius).toBe("0px"),r(s.outlineStyle).toBe("none");const i=tt(t,"--rte-side-nav-item-bg-hover","backgroundColor");if(r(s.backgroundColor).toBe(i),Cn(e)){r(s.boxShadow).toBe(An(t));return}if(r(s.boxShadow).toBe(In(t)),!Bn(e)){const c=tt(t,"--rte-side-nav-item-border-focus","borderColor");r(s.borderLeftColor).toBe(c)}}function I(a){const n=M(a),t=n.getByRole("navigation");return{canvas:n,sideNav:t}}function U(a=200){return new Promise(n=>setTimeout(n,a))}const ns={title:"Composants/SideNav",id:"SideNav",component:qe,tags:["autodocs"],decorators:[a=>o.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:o.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>o.jsx(qe,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,isCollapsed:a.isCollapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:Fa})},Fa=o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),_={hasLeadingIcon:!0},W={size:"m",content:"number"},m=[{..._,id:"home",label:"Home",icon:"home"},{..._,id:"dashboard",label:"Dashboard",icon:"dashboard"},{..._,id:"analytics",label:"Analytics",icon:"analytics"},{..._,id:"settings",label:"Settings",icon:"settings"},{..._,id:"profile",label:"Profile",icon:"user",link:"/profile"}],J=m,_a=[m[0],{...m[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...m[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},m[4]],Sn=[m[0],{...m[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},m[4]],kn=[m[0],{...m[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...m[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},m[4]],Ke=[m[0],{...m[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...m[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},m[4]],Hn=[{...m[0],badge:{...W,badgeType:"indicator",count:5}},{...m[1],badge:{...W,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...W,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...W,badgeType:"indicator",count:12}}]},{...m[3],items:[{label:"General"},{label:"Privacy",badge:{...W,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...W,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...W,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...m[4],badge:{...W,badgeType:"brand",count:8}}],Le=[{..._,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{..._,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{..._,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},Mn="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",Dn={...b},Fn={...b,onClick:()=>{console.log("Header clicked")}},N={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:J}},pe={tags:["skip-ci"],args:{...N.args,collapsible:!0}},ve={tags:["skip-ci"],args:{...N.args,headerConfig:b}},me={tags:["skip-ci"],args:{...N.args,headerConfig:{...b,isCompact:!0}}},ye={args:{...N.args,headerConfig:{...b,title:Mn},size:"m"},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(t.offsetWidth).toBe(Ra.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const e=t.querySelector("h1");r(e).not.toBeNull(),r(getComputedStyle(e).textOverflow).toBe("ellipsis"),r(e.scrollWidth).toBeGreaterThan(e.clientWidth)})}},ge={tags:["skip-ci"],args:{...N.args,headerConfig:b,items:Ke,collapsible:!0}},Ne={tags:["skip-ci"],args:{...N.args,headerConfig:b,items:Ke,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Navigate through navigation when all menus are closed",async()=>{H(t,"Overview"),H(t,"Reports"),H(t,"Analytics"),H(t,"General"),H(t,"Privacy"),H(t,"Advanced");const e=p(t,"Home");e==null||e.focus(),A(e),await d.tab();const s=p(t,"Dashboard");A(s),k(t,"Overview"),k(t,"Reports"),k(t,"Analytics"),await d.tab();const i=p(t,"Settings");A(i),k(t,"General"),k(t,"Privacy"),k(t,"Advanced"),await d.tab();const c=p(t,"Profile");A(c)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const e=p(t,"Dashboard");await d.click(e),q(t,"Overview"),q(t,"Reports"),q(t,"Analytics"),await d.tab();const s=p(t,"Overview");A(s),await d.tab();const i=p(t,"Reports");A(i),await d.tab();const c=p(t,"Analytics");A(c)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const e=p(t,"Dashboard");await d.click(e),H(t,"Overview"),H(t,"Reports"),H(t,"Analytics"),await d.tab();const s=p(t,"Settings");A(s),k(t,"Overview"),k(t,"Reports"),k(t,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const e=p(t,"Settings");await d.click(e),q(t,"General"),q(t,"Privacy"),q(t,"Advanced"),H(t,"Security"),H(t,"API Keys"),await d.tab();const s=p(t,"General");A(s),await d.tab();const i=p(t,"Privacy");A(i),await d.tab();const c=p(t,"Advanced");A(c),k(t,"Security"),k(t,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const e=p(t,"Advanced");await d.click(e),q(t,"Security"),q(t,"API Keys"),await d.tab();const s=p(t,"Security");A(s),await d.tab();const i=p(t,"API Keys");A(i)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const e=p(t,"Advanced");await d.click(e),H(t,"Security"),H(t,"API Keys"),await d.tab();const s=p(t,"Profile");A(s),k(t,"Security"),k(t,"API Keys")})}},fe={args:{...N.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const e=V(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),r(e).not.toHaveAttribute("href"),r(e).not.toHaveAttribute("role","button"),r(e).not.toHaveAttribute("tabindex")})}},he={args:{...N.args,headerConfig:Dn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Verify header is a link when link prop is provided",async()=>{const e=V(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("A"),r(e).toHaveAttribute("href","/"),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const e=V(t);e==null||e.focus(),r(e).toHaveFocus()})}},be={args:{...N.args,headerConfig:{...Fn,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Verify header is clickable button when onClick is provided",async()=>{const e=V(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),await d.click(e),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const e=V(t);e==null||e.focus(),r(e).toHaveFocus(),await d.keyboard(qa),await d.keyboard(Wa)})}},xe={args:{...N.args,headerConfig:b,items:J,collapsible:!0,isCollapsed:!0},decorators:[Ve()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Verify header tooltip falls back to title when collapsed",async()=>{const e=V(t);r(e).not.toBeNull(),e==null||e.focus(),await U();const s=M(document.body).queryByRole("tooltip",{name:"My Application"});r(s).not.toBeNull(),r(s).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const e=se(t,0);r(e).not.toBeNull(),e==null||e.focus(),await U();const s=M(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await d.tab(),await U();const e=M(document.body).queryByRole("tooltip",{name:"Dashboard"});r(e).not.toBeNull(),r(e).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await d.tab(),await d.tab(),await d.tab(),await U();const e=M(document.body).queryByRole("tooltip",{name:"Profile"});r(e).not.toBeNull(),r(e).toHaveTextContent("Profile")})}},we={args:{...N.args,headerConfig:{...b,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Ve()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const e=V(t);r(e).not.toBeNull(),e==null||e.focus(),await U();const s=M(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(s).not.toBeNull(),r(s).toHaveTextContent("Custom header tooltip")})}},Te={args:{...N.args,headerConfig:b,items:Ke,collapsible:!0,isCollapsed:!0},decorators:[Ve()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{Ka(a);const e=se(t,1);r(e).not.toBeNull(),await d.tab(),await d.tab(),await d.tab(),await U();const s=M(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},Ee={tags:["skip-ci"],args:{...N.args,headerConfig:b,items:kn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=I(a);await n("Verify Overview nested item is active",async()=>{j(t,"overview"),g(t,"reports")})}},Ie={tags:["skip-ci"],args:{...N.args,headerConfig:b,items:Sn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=I(a);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{j(t,"security"),g(t,"advanced"),g(t,"settings"),g(t,"api-keys")})}},Ae={tags:["skip-ci"],args:{...N.args,headerConfig:b,collapsible:!0},decorators:[Ha(_a,"security")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=I(a);await n("Verify only Security is active, not parent NavMenus",async()=>{j(t,"security"),g(t,"advanced"),g(t,"settings"),g(t,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const e=t.getByRole("navigation"),s=p(e,"API Keys");r(s).not.toBeNull(),await d.click(s),g(t,"security"),j(t,"api-keys"),g(t,"advanced"),g(t,"settings")})}},Ce={tags:["skip-ci"],args:{...N.args,headerConfig:b,collapsible:!0},decorators:[Ha(_a,"overview")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=I(a);await n("Verify Overview leaf is active initially",async()=>{j(t,"overview"),g(t,"reports"),g(t,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const e=t.getByRole("navigation"),s=p(e,"Reports");r(s).not.toBeNull(),await d.click(s),g(t,"overview"),j(t,"reports"),g(t,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const e=t.getByRole("navigation"),s=p(e,"Settings");r(s).not.toBeNull(),await d.click(s);const i=p(e,"Advanced");r(i).not.toBeNull(),await d.click(i),g(t,"overview"),g(t,"reports"),g(t,"security"),g(t,"api-keys"),j(t,"advanced")})}},Be={args:{...N.args,headerConfig:b,items:J,activeItem:"home",collapsible:!0},decorators:[bn(J)],play:async({canvasElement:a,step:n})=>{const{canvas:t}=I(a);await n("Verify Home has active class initially",async()=>{j(t,"home"),g(t,"dashboard"),g(t,"analytics"),g(t,"settings"),g(t,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=t.getByRole("navigation"),s=p(e,"Dashboard");r(s).not.toBeNull(),await d.click(s),g(t,"home"),j(t,"dashboard"),g(t,"analytics"),g(t,"settings"),g(t,"profile")})}},Se={args:{...N.args,headerConfig:b,items:J,footerItems:Le,collapsible:!0}},ke={args:{...N.args,headerConfig:b,items:J,footerItems:Le,collapsible:!1}},He={args:{...N.args,headerConfig:b,items:Ke,footerItems:Le,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Verify footer items are rendered",async()=>{const e=L(t,"Settings");r(e).not.toBeNull();const s=L(t,"Help & Support");r(s).not.toBeNull();const i=L(t,"Account");r(i).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const e=L(t,"Account");await d.click(e);const s=L(t,"Preferences");r(s).not.toBeNull();const i=L(t,"Logout");r(i).not.toBeNull()})}},ae={tags:["skip-ci"],args:{...N.args,headerConfig:b,items:Hn,collapsible:!0}},Me={args:{...ae.args,isCollapsed:!0},decorators:[Ve()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=I(a);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var i;const e=se(t,0);r(e).not.toBeNull();const s=e==null?void 0:e.querySelector('[data-size="xs"]');r(s).not.toBeNull(),r(s).toHaveAttribute("data-badge-type","indicator"),r((i=s==null?void 0:s.textContent)==null?void 0:i.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const e=se(t,0);r(e==null?void 0:e.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var i;const e=se(t,1);r(e).not.toBeNull();const s=e==null?void 0:e.querySelector('[data-size="xs"]');r(s).not.toBeNull(),r(s).toHaveAttribute("data-badge-type","indicator"),r((i=s==null?void 0:s.textContent)==null?void 0:i.trim()).toBe("")})}},_n=[m[0],{...m[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...m[2],hasDivider:!0},{..._,id:"reports",label:"Reports",icon:"info"},{...m[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},m[4]],De={args:{...N.args,headerConfig:b,items:_n,collapsible:!0}},jn=[m[0],{...m[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys",active:!0}]}]},m[4]],at=[{appearance:"brand",contrast:"high",testId:"focus-brand-high"},{appearance:"brand",contrast:"low",testId:"focus-brand-low"},{appearance:"neutral",contrast:"high",testId:"focus-neutral-high"},{appearance:"neutral",contrast:"low",testId:"focus-neutral-low"}],Fe={render:()=>o.jsx("div",{style:{display:"flex",gap:"8px",height:"600px",width:"100%"},children:at.map(a=>o.jsx("div",{"data-testid":a.testId,style:{flex:1,minWidth:0,display:"flex"},children:o.jsx(qe,{appearance:a.appearance,contrast:a.contrast,items:jn,headerConfig:b,footerItems:Le,collapsible:!0,size:"s",children:Fa})},a.testId))}),play:async({canvasElement:a,step:n})=>{for(const t of at)await n(`Focus styles for ${t.appearance}-${t.contrast}`,async()=>{const e=a.querySelector(`[data-testid="${t.testId}"]`);r(e).not.toBeNull();const s=M(e).getByRole("navigation"),i=V(s);r(i).not.toBeNull(),ee(i),te(i,s);const c=p(s,"Home");r(c).not.toBeNull(),ee(c),te(c,s);const u=p(s,"Advanced");r(u).not.toBeNull(),ee(u),te(u,s);const w=p(s,"API Keys");r(w).not.toBeNull(),ee(w),te(w,s);const y=L(s,"Réduire le menu");r(y).not.toBeNull(),ee(y),te(y,s)})}};var nt,st,ot;N.parameters={...N.parameters,docs:{...(nt=N.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(st=N.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var it,rt,ct;pe.parameters={...pe.parameters,docs:{...(it=pe.parameters)==null?void 0:it.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(ct=(rt=pe.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var lt,dt,ut;ve.parameters={...ve.parameters,docs:{...(lt=ve.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(ut=(dt=ve.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var pt,vt,mt;me.parameters={...me.parameters,docs:{...(pt=me.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(mt=(vt=me.parameters)==null?void 0:vt.docs)==null?void 0:mt.source}}};var yt,gt,Nt;ye.parameters={...ye.parameters,docs:{...(yt=ye.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(Nt=(gt=ye.parameters)==null?void 0:gt.docs)==null?void 0:Nt.source}}};var ft,ht,bt;ge.parameters={...ge.parameters,docs:{...(ft=ge.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(bt=(ht=ge.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};var xt,wt,Tt;Ne.parameters={...Ne.parameters,docs:{...(xt=Ne.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Tt=(wt=Ne.parameters)==null?void 0:wt.docs)==null?void 0:Tt.source}}};var Et,It,At;fe.parameters={...fe.parameters,docs:{...(Et=fe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(At=(It=fe.parameters)==null?void 0:It.docs)==null?void 0:At.source}}};var Ct,Bt,St;he.parameters={...he.parameters,docs:{...(Ct=he.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(St=(Bt=he.parameters)==null?void 0:Bt.docs)==null?void 0:St.source}}};var kt,Ht,Mt;be.parameters={...be.parameters,docs:{...(kt=be.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Mt=(Ht=be.parameters)==null?void 0:Ht.docs)==null?void 0:Mt.source}}};var Dt,Ft,_t;xe.parameters={...xe.parameters,docs:{...(Dt=xe.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(_t=(Ft=xe.parameters)==null?void 0:Ft.docs)==null?void 0:_t.source}}};var jt,Pt,Rt;we.parameters={...we.parameters,docs:{...(jt=we.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Rt=(Pt=we.parameters)==null?void 0:Pt.docs)==null?void 0:Rt.source}}};var qt,Wt,Vt;Te.parameters={...Te.parameters,docs:{...(qt=Te.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Vt=(Wt=Te.parameters)==null?void 0:Wt.docs)==null?void 0:Vt.source}}};var Kt,Lt,Ot;Ee.parameters={...Ee.parameters,docs:{...(Kt=Ee.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Ot=(Lt=Ee.parameters)==null?void 0:Lt.docs)==null?void 0:Ot.source}}};var zt,Gt,$t;Ie.parameters={...Ie.parameters,docs:{...(zt=Ie.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...($t=(Gt=Ie.parameters)==null?void 0:Gt.docs)==null?void 0:$t.source}}};var Yt,Ut,Jt;Ae.parameters={...Ae.parameters,docs:{...(Yt=Ae.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Jt=(Ut=Ae.parameters)==null?void 0:Ut.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;Ce.parameters={...Ce.parameters,docs:{...(Qt=Ce.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=Ce.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var ea,ta,aa;Be.parameters={...Be.parameters,docs:{...(ea=Be.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(aa=(ta=Be.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var na,sa,oa;Se.parameters={...Se.parameters,docs:{...(na=Se.parameters)==null?void 0:na.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(oa=(sa=Se.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,ra,ca;ke.parameters={...ke.parameters,docs:{...(ia=ke.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(ca=(ra=ke.parameters)==null?void 0:ra.docs)==null?void 0:ca.source}}};var la,da,ua;He.parameters={...He.parameters,docs:{...(la=He.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ua=(da=He.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,va,ma;ae.parameters={...ae.parameters,docs:{...(pa=ae.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(ma=(va=ae.parameters)==null?void 0:va.docs)==null?void 0:ma.source}}};var ya,ga,Na;Me.parameters={...Me.parameters,docs:{...(ya=Me.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(Na=(ga=Me.parameters)==null?void 0:ga.docs)==null?void 0:Na.source}}};var fa,ha,ba;De.parameters={...De.parameters,docs:{...(fa=De.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(ba=(ha=De.parameters)==null?void 0:ha.docs)==null?void 0:ba.source}}};var xa,wa,Ta;Fe.parameters={...Fe.parameters,docs:{...(xa=Fe.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    height: "600px",
    width: "100%"
  }}>
      {focusThemeCombinations.map(theme => <div key={theme.testId} data-testid={theme.testId} style={{
      flex: 1,
      minWidth: 0,
      display: "flex"
    }}>
          <SideNav appearance={theme.appearance} contrast={theme.contrast} items={focusStatesItems} headerConfig={defaultHeaderConfig} footerItems={footerItems} collapsible={true} size="s">
            {PageContent}
          </SideNav>
        </div>)}
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    for (const theme of focusThemeCombinations) {
      await step(\`Focus styles for \${theme.appearance}-\${theme.contrast}\`, async () => {
        const sideNavWrapper = canvasElement.querySelector(\`[data-testid="\${theme.testId}"]\`) as HTMLElement | null;
        expect(sideNavWrapper).not.toBeNull();
        const sideNav = within(sideNavWrapper!).getByRole("navigation");
        const headerTitleContainer = getHeaderTitleContainer(sideNav);
        expect(headerTitleContainer).not.toBeNull();
        focusWithVisibleRing(headerTitleContainer!);
        expectElementToHaveSideNavFocusStyles(headerTitleContainer!, sideNav);
        const homeElement = getNavElement(sideNav, "Home");
        expect(homeElement).not.toBeNull();
        focusWithVisibleRing(homeElement!);
        expectElementToHaveSideNavFocusStyles(homeElement!, sideNav);
        const advancedMenu = getNavElement(sideNav, "Advanced");
        expect(advancedMenu).not.toBeNull();
        focusWithVisibleRing(advancedMenu!);
        expectElementToHaveSideNavFocusStyles(advancedMenu!, sideNav);
        const apiKeysItem = getNavElement(sideNav, "API Keys");
        expect(apiKeysItem).not.toBeNull();
        focusWithVisibleRing(apiKeysItem!);
        expectElementToHaveSideNavFocusStyles(apiKeysItem!, sideNav);
        const collapseButton = getFooterNavElement(sideNav, "Réduire le menu");
        expect(collapseButton).not.toBeNull();
        focusWithVisibleRing(collapseButton!);
        expectElementToHaveSideNavFocusStyles(collapseButton!, sideNav);
      });
    }
  }
}`,...(Ta=(wa=Fe.parameters)==null?void 0:wa.docs)==null?void 0:Ta.source}}};const ss=["Default","Collapsible","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers","FocusStates"];export{Be as ActiveItemState,we as CollapsedHeaderTooltipCustom,xe as CollapsedTooltip,Te as CollapsedTooltipWithNested,Me as CollapsedWithBadges,pe as Collapsible,N as Default,Fe as FocusStates,ke as FooterItemsOnly,He as FooterItemsWithNested,fe as HeaderClickability,me as HeaderCompact,he as HeaderWithLink,ye as HeaderWithLongTitle,be as HeaderWithOnClick,ve as HeaderWithVersion,Ne as KeyboardNavigation,Ce as NestedItemActiveOnClick,Ee as NestedItemActivePreselected,Ae as NestedNavMenuActiveOnClick,Ie as NestedNavMenuActivePreselected,ae as WithBadges,De as WithDividers,Se as WithFooterItems,ge as WithNestedMenus,ss as __namedExportsOrder,ns as default};
