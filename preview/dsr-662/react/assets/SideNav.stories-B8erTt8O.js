import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{g as ua,B as Aa,s as Ia}from"./BaseSideNav-C1M5WGj4.js";import{T as Ba,a as Ca}from"./keyboard-test.constants-By8W48aj.js";import{w as D,e as r,a as ka,u as l}from"./index-4rjIhT2C.js";import{f as Sa}from"./testing.utils-mIZIUNbM.js";import{S as Be,E as Ce,c as Ge,b as Ha,d as Da}from"./keyboard.constants-BverKK8B.js";import{r as h}from"./index-G8LIXM5I.js";import{u as pa}from"./useActiveKeyboard-DaOmFJe_.js";import{D as ee}from"./Divider-BMotkXeQ.js";import{s as Ma,I as qe,B as We}from"./Badge-C3W4NyCk.js";import{I as va}from"./Icon-Bc7wfgCv.js";import{T as _a}from"./Tooltip-BNzaOk9j.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BpCpHr8J.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function Fa(a=!1,n=!1){return a?qe.s:n?qe.l:qe.m}function ke(a){return a?Ma({showBadge:!0,badgeContent:a.content??"number",badgeCount:a.count,badgeIcon:a.icon}):!1}function Pa(a){return a.badgeType??"indicator"}const ja="_navItemContainer_wwc28_1",qa="_navItemLeft_wwc28_41",Ra="_navItem_wwc28_1",Wa="_navItemRight_wwc28_56",G={navItemContainer:ja,navItemLeft:qa,navItem:Ra,navItemRight:Wa},Ka="_navMenuContainer_22ik2_1",Va="_navMenu_22ik2_1",La="_menuContentLeft_22ik2_31",Oa="_menuContentRight_22ik2_36",za="_menuIcon_22ik2_92",Ga="_nestedMenu_22ik2_100",Ya="_icon_22ik2_115",W={navMenuContainer:Ka,navMenu:Va,menuContentLeft:La,menuContentRight:Oa,menuIcon:za,nestedMenu:Ga,icon:Ya};function Ke({link:a,label:n,tabIndex:t,onKeyDown:e,onFocus:s,onBlur:i,onClick:c,children:p,styleType:x="item"}){const f=x==="menu"?W:G,w={className:x==="menu"?f.navMenu:f.navItem,tabIndex:t,"aria-label":n,...s&&{onFocus:s},...i&&{onBlur:i},...c&&{onClick:c},...e&&{onKeyDown:e}};return a?o.jsx("a",{href:a,...w,children:p}):o.jsx("span",{...w,children:p})}Ke.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ve({icon:a,hasLeadingIcon:n=!0,label:t,isCollapsed:e,isNested:s,styleType:i="item",badge:c}){const p=Fa(s,e),x=i==="menu"?W:G;function f(){if(!n||!a)return null;const T=o.jsx(va,{name:a,className:x.icon,size:p});return e&&c&&ke(c)?o.jsx(We,{badgeType:Pa(c),size:"xs",content:"empty",children:T}):T}return o.jsxs(o.Fragment,{children:[f(),e?null:o.jsx("span",{children:t})]})}Ve.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function He({label:a,isCollapsed:n,children:t}){return n&&a?o.jsx(_a,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:t}):t}He.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function ma(a){return a===!1?-1:0}function ya({onEnterOrSpace:a,onEscape:n,includeArrowKeys:t=!1,includeEscape:e=!1}={}){const s=h.useCallback(p=>{[Be,Ce].includes(p.key)&&(p.preventDefault(),a==null||a()),p.key===Ge&&e&&(p.preventDefault(),n==null||n())},[a,n,e]),i=[Be,Ce,...e?[Ge]:[],...t?[Ha,Da]:[]],{onKeyDown:c}=pa({onKeyDown:s},{interactiveKeyCodes:i});return{onKeyDown:c}}const Se=h.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:s,isCollapsed:i,link:c,isNested:p,parentMenuOpen:x,appearance:f="brand",active:T,badge:w,...$},N)=>{const M=h.useRef(null),{onKeyDown:B}=ya({onEnterOrSpace:e});function V(){var C;(C=M.current)==null||C.setAttribute("data-focused","true")}function J(){var C;(C=M.current)==null||C.removeAttribute("data-focused")}const Q=ma(x),j=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:G.navItemLeft,children:o.jsx(Ve,{icon:n,hasLeadingIcon:t,label:s,isCollapsed:i,isNested:p,styleType:"item",badge:w})}),o.jsx("div",{className:G.navItemRight,children:!i&&w&&ke(w)&&o.jsx(We,{badgeType:w.badgeType,size:w.size,content:w.content,count:w.count})})]}),L=c?o.jsx("a",{id:a,"aria-label":s,className:G.navItemContainer,"data-collapsed":i,"data-appearance":f,"data-nested":p,href:c,children:j}):o.jsx("div",{id:a,className:G.navItemContainer,"data-collapsed":i,"data-appearance":f,"data-nested":p,"data-active":T,onClick:e,ref:C=>{M.current=C,typeof N=="function"?N(C):N&&"current"in N&&(N.current=C)},...$,children:o.jsx(Ke,{label:s,tabIndex:Q,onKeyDown:B,onFocus:V,onBlur:J,styleType:"item",children:j})});return o.jsx(He,{label:s,isCollapsed:i,children:L})});Se.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Le=h.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:s,isCollapsed:i,link:c,items:p=[],open:x,onOpenChange:f,hasMenuIcon:T=!0,isNested:w,parentMenuOpen:$,appearance:N="brand",contrast:M="high",badge:B,hasDivider:V,active:J,...Q},j)=>{const L=ua(N,M),[C,O]=h.useState(!1),_=x??C,ae=x!==void 0;function ne(){const d=!_;e&&e(),ae?f==null||f(d):O(d)}function _e(){_&&(ae?f==null||f(!1):O(!1))}const{onKeyDown:Fe}=ya({onEnterOrSpace:ne,onEscape:_e,includeArrowKeys:!0,includeEscape:!0}),Pe=p.length,X=!i&&Pe,E=_,y=ma($),je=X&&T?o.jsx(va,{name:"arrow-chevron-right",className:W.menuIcon,"data-open":_}):null,se=!i&&(ke(B)||!!je),xa=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:W.menuContentLeft,children:o.jsx(Ve,{icon:n,hasLeadingIcon:t,label:s,isCollapsed:i,isNested:w,styleType:"menu",badge:B})}),se&&o.jsxs("div",{className:W.menuContentRight,children:[B&&ke(B)&&o.jsx(We,{badgeType:B.badgeType,size:B.size,content:B.content,count:B.count}),je]})]}),Ta=o.jsxs("li",{id:a,className:W.navMenuContainer,"data-collapsed":i,"data-appearance":N,"data-nested":w,"data-open":_,"data-active":J,ref:j,...Q,children:[o.jsx(Ke,{link:c,label:s,tabIndex:y,onClick:ne,onKeyDown:Fe,styleType:"menu",children:xa}),X&&o.jsx("ul",{className:W.nestedMenu,"data-open":_,children:p.map(d=>{var ze;return(ze=d.items)!=null&&ze.length?o.jsx(Le,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:i,link:d.link,onClick:d.onClick,items:d.items||[],open:d.open,onOpenChange:d.onOpenChange,active:d.active,hasMenuIcon:T,hasDivider:d.hasDivider,isNested:!0,parentMenuOpen:E,appearance:N,contrast:M,badge:d.badge},d.id||d.label):o.jsxs(h.Fragment,{children:[o.jsx("li",{children:o.jsx(Se,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:i,link:d.link,onClick:d.onClick,isNested:!0,parentMenuOpen:E,appearance:N,active:d.active,badge:d.badge})}),d.hasDivider&&o.jsx(ee,{appearance:L})]},d.id||d.label)})})]}),Ea=o.jsx(He,{label:s,isCollapsed:i,children:Ta});return o.jsxs(o.Fragment,{children:[Ea,V&&o.jsx(ee,{appearance:L})]})});Le.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Ua="_sideNavHeaderContainer_6ueo8_1",$a="_sideNavHeader_6ueo8_1",Ja="_sideNavHeaderTitleContainer_6ueo8_41",Qa="_sideNavHeaderTitle_6ueo8_41",Xa="_sideNavHeaderIdentifier_6ueo8_52",Za="_sideNavHeaderVersion_6ueo8_125",en="_sideNavBody_6ueo8_154",tn="_sideNavFooterContainer_6ueo8_177",an="_sideNavFooter_6ueo8_177",nn="_sideNavFooterItems_6ueo8_190",sn="_collapsibleSection_6ueo8_207",k={sideNavHeaderContainer:Ua,sideNavHeader:$a,sideNavHeaderTitleContainer:Ja,sideNavHeaderTitle:Qa,sideNavHeaderIdentifier:Xa,sideNavHeaderVersion:Za,sideNavBody:en,sideNavFooterContainer:tn,sideNavFooter:an,sideNavFooterItems:nn,collapsibleSection:sn},on=300,Re=h.forwardRef(({size:a="m",collapsible:n,children:t,headerConfig:e,items:s,footerItems:i,isCollapsed:c,defaultCollapsed:p=!1,onCollapsedChange:x,appearance:f="brand",contrast:T="high",activeItem:w},$)=>{const[N,M]=h.useState(c??p),[B,V]=h.useState(!0);h.useEffect(()=>{c!==void 0&&M(c)},[c]),h.useEffect(()=>{if(N)V(!1);else{const E=setTimeout(()=>{V(!0)},on);return()=>clearTimeout(E)}},[N]);const J=()=>{const E=!N;c===void 0&&M(E),x==null||x(E)},Q=N?"arrow-double-right":"arrow-double-left",j=ua(f,T),L=E=>{[Be,Ce].includes(E.key)&&(E.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:C}=pa({onKeyDown:L},{interactiveKeyCodes:[Be,Ce]}),O=o.jsxs("div",{className:k.sideNavHeaderTitle,children:[o.jsx("div",{className:k.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),!N&&o.jsx("h1",{"data-hidden":!B,children:e==null?void 0:e.title})]}),_=e==null?void 0:e.ariaLabel,ae=o.jsx("a",{href:(e==null?void 0:e.link)??"",className:k.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":_,children:O}),ne=o.jsx("div",{className:k.sideNavHeaderTitleContainer,tabIndex:0,onClick:e==null?void 0:e.onClick,onKeyDown:C,role:"button","aria-label":_,children:O}),_e=e!=null&&e.link?ae:e!=null&&e.onClick?ne:o.jsx("div",{className:k.sideNavHeaderTitleContainer,children:O}),Fe=h.useMemo(()=>(e==null?void 0:e.tooltip)??(e==null?void 0:e.title)??"",[e==null?void 0:e.tooltip,e==null?void 0:e.title]),Pe=o.jsx(He,{label:Fe,isCollapsed:N,children:_e});function X(E){return E!=null&&E.length?o.jsx("ul",{children:E.map(y=>{var se;return((se=y.items)==null?void 0:se.length)?o.jsx(Le,{id:y.id,badge:y.badge,label:y.label,icon:y.icon,hasLeadingIcon:y.hasLeadingIcon,isCollapsed:N,link:y.link,onClick:y.onClick,items:y.items||[],open:y.open,active:y.active,appearance:f,contrast:T,hasDivider:y.hasDivider},y.id):o.jsxs(h.Fragment,{children:[o.jsx("li",{children:o.jsx(Se,{id:y.id,badge:y.badge,label:y.label,icon:y.icon,hasLeadingIcon:y.hasLeadingIcon,isCollapsed:N,link:y.link,onClick:y.onClick,appearance:f,active:y.id===w&&!!w})}),y.hasDivider&&o.jsx(ee,{appearance:j})]},y.id)})}):null}return o.jsx(Aa,{ref:$,size:a,isCollapsed:N,appearance:f,contrast:T,header:o.jsxs("div",{className:k.sideNavHeaderContainer,"data-compact":(e==null?void 0:e.isCompact)??!1,"data-collapsed":N,children:[o.jsxs("div",{className:k.sideNavHeader,"data-collapsed":N,"data-appearance":f,"data-compact":(e==null?void 0:e.isCompact)??!1,children:[Pe,!(e!=null&&e.isCompact)&&o.jsx("div",{className:k.sideNavHeaderVersion,"data-hidden":!B,children:o.jsx("span",{children:e==null?void 0:e.version})})]}),o.jsx(ee,{appearance:j})]}),body:o.jsx("div",{className:k.sideNavBody,children:X(s)}),footer:((i==null?void 0:i.length)||n)&&o.jsxs("div",{className:k.sideNavFooterContainer,children:[(i==null?void 0:i.length)&&o.jsx("div",{className:k.sideNavFooterItems,children:X(i)}),o.jsx(ee,{appearance:j}),o.jsx("div",{className:k.sideNavFooter,children:n&&o.jsx("div",{className:k.collapsibleSection,children:o.jsx(Se,{id:"collapse-button",icon:Q,hasLeadingIcon:!0,isCollapsed:N,onClick:J,label:N?"Ouvrir le menu":"Réduire le menu",appearance:f,role:"button"})})})]}),children:t})});Re.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function ga(a,n){return a.some(t=>{var e;return t.id===n?!0:(e=t.items)!=null&&e.length?ga(t.items,n):!1})}function rn(a,n){if(!a.id||!n)return a.onClick;const t=()=>{n(a.id)};return a.onClick?()=>{t(),a.onClick()}:t}function Na(a,n,t){return a.map(e=>{var T;const s=(T=e.items)!=null&&T.length?Na(e.items,n,t):void 0,i=!!(s!=null&&s.length),c=!i&&e.id===n,p=i&&e.id===n,x=e,f=i&&(e.id===n||ga(e.items,n));return{...e,active:c||p,open:f?!0:x.open,items:s,onClick:rn(e,t)}})}function De(){return function(n,t){const[e,s]=h.useState(t.args.isCollapsed??!0);return o.jsx("div",{children:o.jsx(n,{args:{...t.args,isCollapsed:e,onCollapsedChange:s}})})}}function cn(a){return function(t,e){const[s,i]=h.useState(e.args.activeItem),c=a.map(p=>({...p,onClick:()=>i(p.id),link:void 0}));return o.jsx("div",{children:o.jsx(t,{args:{...e.args,items:c,activeItem:s}})})}}function fa(a,n){return function(e,s){const[i,c]=h.useState(n),p=h.useMemo(()=>Na(a,i,c),[i,a]);return o.jsx(e,{args:{...s.args,items:p}})}}function ba(a){if(!a)return null;const n=Array.from(a.children);for(const i of n)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const t=a.querySelector("a");return t||Array.from(a.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function u(a,n,t){const e=t?a.querySelector(t):a;if(!e)return null;const s=t?D(e):D(a),i=s.queryByRole("link",{name:n});if(i)return i;const c=s.queryByText(n);if(c){const p=c.closest("li");return ba(p)}return null}function te(a,n){const t=a.querySelector('[class*="sideNavBody"]');if(!t)return null;const s=Array.from(t.querySelectorAll("li"))[n];return ba(s)}function z(a,n){return u(a,n,'[class*="sideNavFooterItems"]')}function K(a,n="MA"){var i;return(i=D(a).getByText(n).parentElement)==null?void 0:i.parentElement}function ln(a,n){return a.querySelector(`#${n}`)}function dn(a){return a.dataset.active==="true"}function I(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function S(a,n){const t=u(a,n);t&&r(t).not.toHaveFocus()}function H(a,n){const t=u(a,n);t&&r(t).toHaveAttribute("tabindex","-1")}function q(a,n){const t=u(a,n);t&&r(t).toHaveAttribute("tabindex","0")}async function ha(a,n,t){await ka(()=>{const e=a.getByRole("navigation"),s=ln(e,n);if(!s){r(t).toBe(!1);return}r(dn(s)).toBe(t)})}function P(a,n){return ha(a,n,!0)}function v(a,n){return ha(a,n,!1)}function A(a){const n=D(a),t=n.getByRole("navigation");return{canvas:n,sideNav:t}}function Y(a=200){return new Promise(n=>setTimeout(n,a))}const Wn={title:"Composants/SideNav",id:"SideNav",component:Re,tags:["autodocs"],decorators:[a=>o.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:o.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>o.jsx(Re,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,isCollapsed:a.isCollapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:un})},un=o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),F={hasLeadingIcon:!0},R={size:"m",content:"number"},g=[{...F,id:"home",label:"Home",icon:"home"},{...F,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...F,id:"analytics",label:"Analytics",icon:"analytics"},{...F,id:"settings",label:"Settings",icon:"settings"},{...F,id:"profile",label:"Profile",icon:"user",link:"/profile"}],U=g,wa=[g[0],{...g[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...g[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},g[4]],pn=[g[0],{...g[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},g[4]],vn=[g[0],{...g[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...g[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},g[4]],Me=[g[0],{...g[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...g[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},g[4]],mn=[{...g[0],badge:{...R,badgeType:"indicator",count:5}},{...g[1],badge:{...R,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...R,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...R,badgeType:"indicator",count:12}}]},{...g[3],items:[{label:"General"},{label:"Privacy",badge:{...R,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...R,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...R,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...g[4],badge:{...R,badgeType:"brand",count:8}}],Oe=[{...F,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...F,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...F,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},yn="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",gn={...b},Nn={...b,onClick:()=>{console.log("Header clicked")}},m={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:U}},oe={tags:["skip-ci"],args:{...m.args,collapsible:!0}},ie={tags:["skip-ci"],args:{...m.args,headerConfig:b}},re={tags:["skip-ci"],args:{...m.args,headerConfig:{...b,isCompact:!0}}},ce={args:{...m.args,headerConfig:{...b,title:yn},size:"m"},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(t.offsetWidth).toBe(Ia.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const e=t.querySelector("h1");r(e).not.toBeNull(),r(getComputedStyle(e).textOverflow).toBe("ellipsis"),r(e.scrollWidth).toBeGreaterThan(e.clientWidth)})}},le={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:Me,collapsible:!0}},de={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:Me,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Navigate through navigation when all menus are closed",async()=>{H(t,"Overview"),H(t,"Reports"),H(t,"Analytics"),H(t,"General"),H(t,"Privacy"),H(t,"Advanced");const e=u(t,"Home");e==null||e.focus(),I(e),await l.tab();const s=u(t,"Dashboard");I(s),S(t,"Overview"),S(t,"Reports"),S(t,"Analytics"),await l.tab();const i=u(t,"Settings");I(i),S(t,"General"),S(t,"Privacy"),S(t,"Advanced"),await l.tab();const c=u(t,"Profile");I(c)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const e=u(t,"Dashboard");await l.click(e),q(t,"Overview"),q(t,"Reports"),q(t,"Analytics"),await l.tab();const s=u(t,"Overview");I(s),await l.tab();const i=u(t,"Reports");I(i),await l.tab();const c=u(t,"Analytics");I(c)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const e=u(t,"Dashboard");await l.click(e),H(t,"Overview"),H(t,"Reports"),H(t,"Analytics"),await l.tab();const s=u(t,"Settings");I(s),S(t,"Overview"),S(t,"Reports"),S(t,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const e=u(t,"Settings");await l.click(e),q(t,"General"),q(t,"Privacy"),q(t,"Advanced"),H(t,"Security"),H(t,"API Keys"),await l.tab();const s=u(t,"General");I(s),await l.tab();const i=u(t,"Privacy");I(i),await l.tab();const c=u(t,"Advanced");I(c),S(t,"Security"),S(t,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const e=u(t,"Advanced");await l.click(e),q(t,"Security"),q(t,"API Keys"),await l.tab();const s=u(t,"Security");I(s),await l.tab();const i=u(t,"API Keys");I(i)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const e=u(t,"Advanced");await l.click(e),H(t,"Security"),H(t,"API Keys"),await l.tab();const s=u(t,"Profile");I(s),S(t,"Security"),S(t,"API Keys")})}},ue={args:{...m.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const e=K(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),r(e).not.toHaveAttribute("href"),r(e).not.toHaveAttribute("role","button"),r(e).not.toHaveAttribute("tabindex")})}},pe={args:{...m.args,headerConfig:gn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header is a link when link prop is provided",async()=>{const e=K(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("A"),r(e).toHaveAttribute("href","/"),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const e=K(t);e==null||e.focus(),r(e).toHaveFocus()})}},ve={args:{...m.args,headerConfig:{...Nn,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header is clickable button when onClick is provided",async()=>{const e=K(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),await l.click(e),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const e=K(t);e==null||e.focus(),r(e).toHaveFocus(),await l.keyboard(Ba),await l.keyboard(Ca)})}},me={args:{...m.args,headerConfig:b,items:U,collapsible:!0,isCollapsed:!0},decorators:[De()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header tooltip falls back to title when collapsed",async()=>{const e=K(t);r(e).not.toBeNull(),e==null||e.focus(),await Y();const s=D(document.body).queryByRole("tooltip",{name:"My Application"});r(s).not.toBeNull(),r(s).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const e=te(t,0);r(e).not.toBeNull(),e==null||e.focus(),await Y();const s=D(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await l.tab(),await Y();const e=D(document.body).queryByRole("tooltip",{name:"Dashboard"});r(e).not.toBeNull(),r(e).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await l.tab(),await l.tab(),await l.tab(),await Y();const e=D(document.body).queryByRole("tooltip",{name:"Profile"});r(e).not.toBeNull(),r(e).toHaveTextContent("Profile")})}},ye={args:{...m.args,headerConfig:{...b,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[De()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const e=K(t);r(e).not.toBeNull(),e==null||e.focus(),await Y();const s=D(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(s).not.toBeNull(),r(s).toHaveTextContent("Custom header tooltip")})}},ge={args:{...m.args,headerConfig:b,items:Me,collapsible:!0,isCollapsed:!0},decorators:[De()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{Sa(a);const e=te(t,1);r(e).not.toBeNull(),await l.tab(),await l.tab(),await l.tab(),await Y();const s=D(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},Ne={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:vn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify Overview nested item is active",async()=>{P(t,"overview"),v(t,"reports")})}},fe={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:pn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{P(t,"security"),v(t,"advanced"),v(t,"settings"),v(t,"api-keys")})}},be={tags:["skip-ci"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[fa(wa,"security")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify only Security is active, not parent NavMenus",async()=>{P(t,"security"),v(t,"advanced"),v(t,"settings"),v(t,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const e=t.getByRole("navigation"),s=u(e,"API Keys");r(s).not.toBeNull(),await l.click(s),v(t,"security"),P(t,"api-keys"),v(t,"advanced"),v(t,"settings")})}},he={tags:["skip-ci"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[fa(wa,"overview")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify Overview leaf is active initially",async()=>{P(t,"overview"),v(t,"reports"),v(t,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const e=t.getByRole("navigation"),s=u(e,"Reports");r(s).not.toBeNull(),await l.click(s),v(t,"overview"),P(t,"reports"),v(t,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const e=t.getByRole("navigation"),s=u(e,"Settings");r(s).not.toBeNull(),await l.click(s);const i=u(e,"Advanced");r(i).not.toBeNull(),await l.click(i),v(t,"overview"),v(t,"reports"),v(t,"security"),v(t,"api-keys"),P(t,"advanced")})}},we={args:{...m.args,headerConfig:b,items:U,activeItem:"home",collapsible:!0},decorators:[cn(U)],play:async({canvasElement:a,step:n})=>{const{canvas:t}=A(a);await n("Verify Home has active class initially",async()=>{P(t,"home"),v(t,"dashboard"),v(t,"analytics"),v(t,"settings"),v(t,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=t.getByRole("navigation"),s=u(e,"Dashboard");r(s).not.toBeNull(),await l.click(s),v(t,"home"),P(t,"dashboard"),v(t,"analytics"),v(t,"settings"),v(t,"profile")})}},xe={args:{...m.args,headerConfig:b,items:U,footerItems:Oe,collapsible:!0}},Te={args:{...m.args,headerConfig:b,items:U,footerItems:Oe,collapsible:!1}},Ee={args:{...m.args,headerConfig:b,items:Me,footerItems:Oe,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Verify footer items are rendered",async()=>{const e=z(t,"Settings");r(e).not.toBeNull();const s=z(t,"Help & Support");r(s).not.toBeNull();const i=z(t,"Account");r(i).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const e=z(t,"Account");await l.click(e);const s=z(t,"Preferences");r(s).not.toBeNull();const i=z(t,"Logout");r(i).not.toBeNull()})}},Z={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:mn,collapsible:!0}},Ae={args:{...Z.args,isCollapsed:!0},decorators:[De()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=A(a);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var i;const e=te(t,0);r(e).not.toBeNull();const s=e==null?void 0:e.querySelector('[data-size="xs"]');r(s).not.toBeNull(),r(s).toHaveAttribute("data-badge-type","indicator"),r((i=s==null?void 0:s.textContent)==null?void 0:i.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const e=te(t,0);r(e==null?void 0:e.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var i;const e=te(t,1);r(e).not.toBeNull();const s=e==null?void 0:e.querySelector('[data-size="xs"]');r(s).not.toBeNull(),r(s).toHaveAttribute("data-badge-type","indicator"),r((i=s==null?void 0:s.textContent)==null?void 0:i.trim()).toBe("")})}},fn=[g[0],{...g[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...g[2],hasDivider:!0},{...F,id:"reports",label:"Reports",icon:"info"},{...g[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},g[4]],Ie={args:{...m.args,headerConfig:b,items:fn,collapsible:!0}};var Ye,Ue,$e;m.parameters={...m.parameters,docs:{...(Ye=m.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...($e=(Ue=m.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;oe.parameters={...oe.parameters,docs:{...(Je=oe.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Xe=(Qe=oe.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;ie.parameters={...ie.parameters,docs:{...(Ze=ie.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(tt=(et=ie.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,st;re.parameters={...re.parameters,docs:{...(at=re.parameters)==null?void 0:at.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(st=(nt=re.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var ot,it,rt;ce.parameters={...ce.parameters,docs:{...(ot=ce.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(it=ce.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var ct,lt,dt;le.parameters={...le.parameters,docs:{...(ct=le.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(dt=(lt=le.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,pt,vt;de.parameters={...de.parameters,docs:{...(ut=de.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(vt=(pt=de.parameters)==null?void 0:pt.docs)==null?void 0:vt.source}}};var mt,yt,gt;ue.parameters={...ue.parameters,docs:{...(mt=ue.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(gt=(yt=ue.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};var Nt,ft,bt;pe.parameters={...pe.parameters,docs:{...(Nt=pe.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(bt=(ft=pe.parameters)==null?void 0:ft.docs)==null?void 0:bt.source}}};var ht,wt,xt;ve.parameters={...ve.parameters,docs:{...(ht=ve.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(xt=(wt=ve.parameters)==null?void 0:wt.docs)==null?void 0:xt.source}}};var Tt,Et,At;me.parameters={...me.parameters,docs:{...(Tt=me.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(At=(Et=me.parameters)==null?void 0:Et.docs)==null?void 0:At.source}}};var It,Bt,Ct;ye.parameters={...ye.parameters,docs:{...(It=ye.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Ct=(Bt=ye.parameters)==null?void 0:Bt.docs)==null?void 0:Ct.source}}};var kt,St,Ht;ge.parameters={...ge.parameters,docs:{...(kt=ge.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Ht=(St=ge.parameters)==null?void 0:St.docs)==null?void 0:Ht.source}}};var Dt,Mt,_t;Ne.parameters={...Ne.parameters,docs:{...(Dt=Ne.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(_t=(Mt=Ne.parameters)==null?void 0:Mt.docs)==null?void 0:_t.source}}};var Ft,Pt,jt;fe.parameters={...fe.parameters,docs:{...(Ft=fe.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(jt=(Pt=fe.parameters)==null?void 0:Pt.docs)==null?void 0:jt.source}}};var qt,Rt,Wt;be.parameters={...be.parameters,docs:{...(qt=be.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Wt=(Rt=be.parameters)==null?void 0:Rt.docs)==null?void 0:Wt.source}}};var Kt,Vt,Lt;he.parameters={...he.parameters,docs:{...(Kt=he.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Lt=(Vt=he.parameters)==null?void 0:Vt.docs)==null?void 0:Lt.source}}};var Ot,zt,Gt;we.parameters={...we.parameters,docs:{...(Ot=we.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Gt=(zt=we.parameters)==null?void 0:zt.docs)==null?void 0:Gt.source}}};var Yt,Ut,$t;xe.parameters={...xe.parameters,docs:{...(Yt=xe.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...($t=(Ut=xe.parameters)==null?void 0:Ut.docs)==null?void 0:$t.source}}};var Jt,Qt,Xt;Te.parameters={...Te.parameters,docs:{...(Jt=Te.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Xt=(Qt=Te.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,ea,ta;Ee.parameters={...Ee.parameters,docs:{...(Zt=Ee.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ta=(ea=Ee.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,sa;Z.parameters={...Z.parameters,docs:{...(aa=Z.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(sa=(na=Z.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var oa,ia,ra;Ae.parameters={...Ae.parameters,docs:{...(oa=Ae.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ra=(ia=Ae.parameters)==null?void 0:ia.docs)==null?void 0:ra.source}}};var ca,la,da;Ie.parameters={...Ie.parameters,docs:{...(ca=Ie.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(da=(la=Ie.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};const Kn=["Default","Collapsible","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers"];export{we as ActiveItemState,ye as CollapsedHeaderTooltipCustom,me as CollapsedTooltip,ge as CollapsedTooltipWithNested,Ae as CollapsedWithBadges,oe as Collapsible,m as Default,Te as FooterItemsOnly,Ee as FooterItemsWithNested,ue as HeaderClickability,re as HeaderCompact,pe as HeaderWithLink,ce as HeaderWithLongTitle,ve as HeaderWithOnClick,ie as HeaderWithVersion,de as KeyboardNavigation,he as NestedItemActiveOnClick,Ne as NestedItemActivePreselected,be as NestedNavMenuActiveOnClick,fe as NestedNavMenuActivePreselected,Z as WithBadges,Ie as WithDividers,xe as WithFooterItems,le as WithNestedMenus,Kn as __namedExportsOrder,Wn as default};
