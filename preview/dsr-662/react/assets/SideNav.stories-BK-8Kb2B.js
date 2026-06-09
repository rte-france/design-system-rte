import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{g as sa,B as ha,s as wa}from"./BaseSideNav-C1M5WGj4.js";import{T as xa,a as Ta}from"./keyboard-test.constants-By8W48aj.js";import{w as D,e as r,a as Ea,u as c}from"./index-4rjIhT2C.js";import{f as Aa}from"./testing.utils-mIZIUNbM.js";import{S as Ae,E as Ie,c as We,b as Ia,d as ka}from"./keyboard.constants-BverKK8B.js";import{r as h}from"./index-G8LIXM5I.js";import{u as ia}from"./useActiveKeyboard-DaOmFJe_.js";import{D as Z}from"./Divider-BMotkXeQ.js";import{I as _e,B as oa}from"./Badge-C3W4NyCk.js";import{I as ra}from"./Icon-Bc7wfgCv.js";import{T as Ca}from"./Tooltip-BNzaOk9j.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BpCpHr8J.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Ba="_navItemContainer_wwc28_1",Sa="_navItemLeft_wwc28_41",Ha="_navItem_wwc28_1",Da="_navItemRight_wwc28_56",z={navItemContainer:Ba,navItemLeft:Sa,navItem:Ha,navItemRight:Da},Ma="_navMenuContainer_22ik2_1",_a="_navMenu_22ik2_1",Fa="_menuContentLeft_22ik2_31",Pa="_menuContentRight_22ik2_36",ja="_menuIcon_22ik2_92",Ra="_nestedMenu_22ik2_100",qa="_icon_22ik2_115",K={navMenuContainer:Ma,navMenu:_a,menuContentLeft:Fa,menuContentRight:Pa,menuIcon:ja,nestedMenu:Ra,icon:qa};function Pe({link:a,label:n,tabIndex:t,onKeyDown:e,onFocus:s,onBlur:o,onClick:l,children:p,styleType:A="item"}){const f=A==="menu"?K:z,x={className:A==="menu"?f.navMenu:f.navItem,tabIndex:t,"aria-label":n,...s&&{onFocus:s},...o&&{onBlur:o},...l&&{onClick:l},...e&&{onKeyDown:e}};return a?i.jsx("a",{href:a,...x,children:p}):i.jsx("span",{...x,children:p})}Pe.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ka(a=!1,n=!1){return a?_e.s:n?_e.l:_e.m}function je({icon:a,hasLeadingIcon:n=!0,label:t,isCollapsed:e,isNested:s,styleType:o="item"}){const l=Ka(s,e),p=o==="menu"?K:z;return i.jsxs(i.Fragment,{children:[n&&a&&i.jsx(ra,{name:a,className:p.icon,size:l}),e?null:i.jsx("span",{children:t})]})}je.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ce({label:a,isCollapsed:n,children:t}){return n&&a?i.jsx(Ca,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:t}):t}Ce.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function ca(a){return a===!1?-1:0}function la({onEnterOrSpace:a,onEscape:n,includeArrowKeys:t=!1,includeEscape:e=!1}={}){const s=h.useCallback(p=>{[Ae,Ie].includes(p.key)&&(p.preventDefault(),a==null||a()),p.key===We&&e&&(p.preventDefault(),n==null||n())},[a,n,e]),o=[Ae,Ie,...e?[We]:[],...t?[Ia,ka]:[]],{onKeyDown:l}=ia({onKeyDown:s},{interactiveKeyCodes:o});return{onKeyDown:l}}const ke=h.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:s,isCollapsed:o,link:l,isNested:p,parentMenuOpen:A,appearance:f="brand",active:S,badge:x,...$},g)=>{const M=h.useRef(null),{onKeyDown:H}=la({onEnterOrSpace:e});function W(){var I;(I=M.current)==null||I.setAttribute("data-focused","true")}function J(){var I;(I=M.current)==null||I.removeAttribute("data-focused")}const Q=ca(A),j=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:z.navItemLeft,children:i.jsx(je,{icon:n,hasLeadingIcon:t,label:s,isCollapsed:o,isNested:p,styleType:"item"})}),i.jsx("div",{className:z.navItemRight,children:!o&&x&&i.jsx(oa,{badgeType:x.badgeType,size:x.size,content:x.content,count:x.count})})]}),L=l?i.jsx("a",{id:a,"aria-label":s,className:z.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":p,href:l,children:j}):i.jsx("div",{id:a,className:z.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":p,"data-active":S,onClick:e,ref:I=>{M.current=I,typeof g=="function"?g(I):g&&"current"in g&&(g.current=I)},...$,children:i.jsx(Pe,{label:s,tabIndex:Q,onKeyDown:H,onFocus:W,onBlur:J,styleType:"item",children:j})});return i.jsx(Ce,{label:s,isCollapsed:o,children:L})});ke.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Re=h.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:s,isCollapsed:o,link:l,items:p=[],open:A,onOpenChange:f,hasMenuIcon:S=!0,isNested:x,parentMenuOpen:$,appearance:g="brand",contrast:M="high",badge:H,hasDivider:W,active:J,...Q},j)=>{const L=sa(g,M),[I,O]=h.useState(!1),_=A??I,ee=A!==void 0;function te(){const d=!_;e&&e(),ee?f==null||f(d):O(d)}function Se(){_&&(ee?f==null||f(!1):O(!1))}const{onKeyDown:He}=la({onEnterOrSpace:te,onEscape:Se,includeArrowKeys:!0,includeEscape:!0}),De=p.length,X=!o&&De,w=_,y=ca($),Me=X&&S?i.jsx(ra,{name:"arrow-chevron-right",className:K.menuIcon,"data-open":_}):null,ae=!o&&(!!H||!!Me),ga=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:K.menuContentLeft,children:i.jsx(je,{icon:n,hasLeadingIcon:t,label:s,isCollapsed:o,isNested:x,styleType:"menu"})}),ae&&i.jsxs("div",{className:K.menuContentRight,children:[H&&i.jsx(oa,{badgeType:H.badgeType,size:H.size,content:H.content,count:H.count}),Me]})]}),fa=i.jsxs("li",{id:a,className:K.navMenuContainer,"data-collapsed":o,"data-appearance":g,"data-nested":x,"data-open":_,"data-active":J,ref:j,...Q,children:[i.jsx(Pe,{link:l,label:s,tabIndex:y,onClick:te,onKeyDown:He,styleType:"menu",children:ga}),X&&i.jsx("ul",{className:K.nestedMenu,"data-open":_,children:p.map(d=>{var Ve;return(Ve=d.items)!=null&&Ve.length?i.jsx(Re,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:o,link:d.link,onClick:d.onClick,items:d.items||[],open:d.open,onOpenChange:d.onOpenChange,active:d.active,hasMenuIcon:S,hasDivider:d.hasDivider,isNested:!0,parentMenuOpen:w,appearance:g,contrast:M,badge:d.badge},d.id||d.label):i.jsxs(h.Fragment,{children:[i.jsx("li",{children:i.jsx(ke,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:o,link:d.link,onClick:d.onClick,isNested:!0,parentMenuOpen:w,appearance:g,active:d.active,badge:d.badge})}),d.hasDivider&&i.jsx(Z,{appearance:L})]},d.id||d.label)})})]}),ba=i.jsx(Ce,{label:s,isCollapsed:o,children:fa});return i.jsxs(i.Fragment,{children:[ba,W&&i.jsx(Z,{appearance:L})]})});Re.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Va="_sideNavHeaderContainer_6ueo8_1",Wa="_sideNavHeader_6ueo8_1",La="_sideNavHeaderTitleContainer_6ueo8_41",Oa="_sideNavHeaderTitle_6ueo8_41",Ga="_sideNavHeaderIdentifier_6ueo8_52",za="_sideNavHeaderVersion_6ueo8_125",Ya="_sideNavBody_6ueo8_154",Ua="_sideNavFooterContainer_6ueo8_177",$a="_sideNavFooter_6ueo8_177",Ja="_sideNavFooterItems_6ueo8_190",Qa="_collapsibleSection_6ueo8_207",k={sideNavHeaderContainer:Va,sideNavHeader:Wa,sideNavHeaderTitleContainer:La,sideNavHeaderTitle:Oa,sideNavHeaderIdentifier:Ga,sideNavHeaderVersion:za,sideNavBody:Ya,sideNavFooterContainer:Ua,sideNavFooter:$a,sideNavFooterItems:Ja,collapsibleSection:Qa},Xa=300,Fe=h.forwardRef(({size:a="m",collapsible:n,children:t,headerConfig:e,items:s,footerItems:o,isCollapsed:l,defaultCollapsed:p=!1,onCollapsedChange:A,appearance:f="brand",contrast:S="high",activeItem:x},$)=>{const[g,M]=h.useState(l??p),[H,W]=h.useState(!0);h.useEffect(()=>{l!==void 0&&M(l)},[l]),h.useEffect(()=>{if(g)W(!1);else{const w=setTimeout(()=>{W(!0)},Xa);return()=>clearTimeout(w)}},[g]);const J=()=>{const w=!g;l===void 0&&M(w),A==null||A(w)},Q=g?"arrow-double-right":"arrow-double-left",j=sa(f,S),L=w=>{[Ae,Ie].includes(w.key)&&(w.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:I}=ia({onKeyDown:L},{interactiveKeyCodes:[Ae,Ie]}),O=i.jsxs("div",{className:k.sideNavHeaderTitle,children:[i.jsx("div",{className:k.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),!g&&i.jsx("h1",{"data-hidden":!H,children:e==null?void 0:e.title})]}),_=e==null?void 0:e.ariaLabel,ee=i.jsx("a",{href:(e==null?void 0:e.link)??"",className:k.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":_,children:O}),te=i.jsx("div",{className:k.sideNavHeaderTitleContainer,tabIndex:0,onClick:e==null?void 0:e.onClick,onKeyDown:I,role:"button","aria-label":_,children:O}),Se=e!=null&&e.link?ee:e!=null&&e.onClick?te:i.jsx("div",{className:k.sideNavHeaderTitleContainer,children:O}),He=h.useMemo(()=>(e==null?void 0:e.tooltip)??(e==null?void 0:e.title)??"",[e==null?void 0:e.tooltip,e==null?void 0:e.title]),De=i.jsx(Ce,{label:He,isCollapsed:g,children:Se});function X(w){return w!=null&&w.length?i.jsx("ul",{children:w.map(y=>{var ae;return((ae=y.items)==null?void 0:ae.length)?i.jsx(Re,{id:y.id,badge:y.badge,label:y.label,icon:y.icon,hasLeadingIcon:y.hasLeadingIcon,isCollapsed:g,link:y.link,onClick:y.onClick,items:y.items||[],open:y.open,active:y.active,appearance:f,contrast:S,hasDivider:y.hasDivider},y.id):i.jsxs(h.Fragment,{children:[i.jsx("li",{children:i.jsx(ke,{id:y.id,badge:y.badge,label:y.label,icon:y.icon,hasLeadingIcon:y.hasLeadingIcon,isCollapsed:g,link:y.link,onClick:y.onClick,appearance:f,active:y.id===x&&!!x})}),y.hasDivider&&i.jsx(Z,{appearance:j})]},y.id)})}):null}return i.jsx(ha,{ref:$,size:a,isCollapsed:g,appearance:f,contrast:S,header:i.jsxs("div",{className:k.sideNavHeaderContainer,"data-compact":(e==null?void 0:e.isCompact)??!1,"data-collapsed":g,children:[i.jsxs("div",{className:k.sideNavHeader,"data-collapsed":g,"data-appearance":f,"data-compact":(e==null?void 0:e.isCompact)??!1,children:[De,!(e!=null&&e.isCompact)&&i.jsx("div",{className:k.sideNavHeaderVersion,"data-hidden":!H,children:i.jsx("span",{children:e==null?void 0:e.version})})]}),i.jsx(Z,{appearance:j})]}),body:i.jsx("div",{className:k.sideNavBody,children:X(s)}),footer:((o==null?void 0:o.length)||n)&&i.jsxs("div",{className:k.sideNavFooterContainer,children:[(o==null?void 0:o.length)&&i.jsx("div",{className:k.sideNavFooterItems,children:X(o)}),i.jsx(Z,{appearance:j}),i.jsx("div",{className:k.sideNavFooter,children:n&&i.jsx("div",{className:k.collapsibleSection,children:i.jsx(ke,{id:"collapse-button",icon:Q,hasLeadingIcon:!0,isCollapsed:g,onClick:J,label:g?"Ouvrir le menu":"Réduire le menu",appearance:f,role:"button"})})})]}),children:t})});Fe.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function da(a,n){return a.some(t=>{var e;return t.id===n?!0:(e=t.items)!=null&&e.length?da(t.items,n):!1})}function Za(a,n){if(!a.id||!n)return a.onClick;const t=()=>{n(a.id)};return a.onClick?()=>{t(),a.onClick()}:t}function ua(a,n,t){return a.map(e=>{var S;const s=(S=e.items)!=null&&S.length?ua(e.items,n,t):void 0,o=!!(s!=null&&s.length),l=!o&&e.id===n,p=o&&e.id===n,A=e,f=o&&(e.id===n||da(e.items,n));return{...e,active:l||p,open:f?!0:A.open,items:s,onClick:Za(e,t)}})}function qe(){return function(n,t){const[e,s]=h.useState(t.args.isCollapsed??!0);return i.jsx("div",{children:i.jsx(n,{args:{...t.args,isCollapsed:e,onCollapsedChange:s}})})}}function en(a){return function(t,e){const[s,o]=h.useState(e.args.activeItem),l=a.map(p=>({...p,onClick:()=>o(p.id),link:void 0}));return i.jsx("div",{children:i.jsx(t,{args:{...e.args,items:l,activeItem:s}})})}}function pa(a,n){return function(e,s){const[o,l]=h.useState(n),p=h.useMemo(()=>ua(a,o,l),[o,a]);return i.jsx(e,{args:{...s.args,items:p}})}}function va(a){if(!a)return null;const n=Array.from(a.children);for(const o of n)if(o.tagName==="A"||o.tagName==="SPAN"&&o.hasAttribute("tabindex"))return o;const t=a.querySelector("a");return t||Array.from(a.querySelectorAll("span")).find(o=>o.hasAttribute("tabindex"))}function u(a,n,t){const e=t?a.querySelector(t):a;if(!e)return null;const s=t?D(e):D(a),o=s.queryByRole("link",{name:n});if(o)return o;const l=s.queryByText(n);if(l){const p=l.closest("li");return va(p)}return null}function ma(a,n){const t=a.querySelector('[class*="sideNavBody"]');if(!t)return null;const s=Array.from(t.querySelectorAll("li"))[n];return va(s)}function G(a,n){return u(a,n,'[class*="sideNavFooterItems"]')}function V(a,n="MA"){var o;return(o=D(a).getByText(n).parentElement)==null?void 0:o.parentElement}function tn(a,n){return a.querySelector(`#${n}`)}function an(a){return a.dataset.active==="true"}function T(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function C(a,n){const t=u(a,n);t&&r(t).not.toHaveFocus()}function B(a,n){const t=u(a,n);t&&r(t).toHaveAttribute("tabindex","-1")}function R(a,n){const t=u(a,n);t&&r(t).toHaveAttribute("tabindex","0")}async function ya(a,n,t){await Ea(()=>{const e=a.getByRole("navigation"),s=tn(e,n);if(!s){r(t).toBe(!1);return}r(an(s)).toBe(t)})}function P(a,n){return ya(a,n,!0)}function v(a,n){return ya(a,n,!1)}function E(a){const n=D(a),t=n.getByRole("navigation");return{canvas:n,sideNav:t}}function Y(a=200){return new Promise(n=>setTimeout(n,a))}const Mn={title:"Composants/SideNav",id:"SideNav",component:Fe,tags:["autodocs"],decorators:[a=>i.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:i.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>i.jsx(Fe,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,isCollapsed:a.isCollapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:nn})},nn=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),F={hasLeadingIcon:!0},q={size:"m",content:"number"},N=[{...F,id:"home",label:"Home",icon:"home"},{...F,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...F,id:"analytics",label:"Analytics",icon:"analytics"},{...F,id:"settings",label:"Settings",icon:"settings"},{...F,id:"profile",label:"Profile",icon:"user",link:"/profile"}],U=N,Na=[N[0],{...N[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...N[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},N[4]],sn=[N[0],{...N[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},N[4]],on=[N[0],{...N[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...N[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},N[4]],Be=[N[0],{...N[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...N[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},N[4]],rn=[{...N[0],badge:{...q,badgeType:"indicator",count:5}},{...N[1],badge:{...q,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...q,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...q,badgeType:"indicator",count:12}}]},{...N[3],items:[{label:"General"},{label:"Privacy",badge:{...q,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...q,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...q,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...N[4],badge:{...q,badgeType:"brand",count:8}}],Ke=[{...F,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...F,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...F,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},cn="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",ln={...b},dn={...b,onClick:()=>{console.log("Header clicked")}},m={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:U}},ne={tags:["skip-ci"],args:{...m.args,collapsible:!0}},se={tags:["skip-ci"],args:{...m.args,headerConfig:b}},ie={tags:["skip-ci"],args:{...m.args,headerConfig:{...b,isCompact:!0}}},oe={args:{...m.args,headerConfig:{...b,title:cn},size:"m"},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(t.offsetWidth).toBe(wa.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const e=t.querySelector("h1");r(e).not.toBeNull(),r(getComputedStyle(e).textOverflow).toBe("ellipsis"),r(e.scrollWidth).toBeGreaterThan(e.clientWidth)})}},re={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:Be,collapsible:!0}},ce={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:Be,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Navigate through navigation when all menus are closed",async()=>{B(t,"Overview"),B(t,"Reports"),B(t,"Analytics"),B(t,"General"),B(t,"Privacy"),B(t,"Advanced");const e=u(t,"Home");e==null||e.focus(),T(e),await c.tab();const s=u(t,"Dashboard");T(s),C(t,"Overview"),C(t,"Reports"),C(t,"Analytics"),await c.tab();const o=u(t,"Settings");T(o),C(t,"General"),C(t,"Privacy"),C(t,"Advanced"),await c.tab();const l=u(t,"Profile");T(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const e=u(t,"Dashboard");await c.click(e),R(t,"Overview"),R(t,"Reports"),R(t,"Analytics"),await c.tab();const s=u(t,"Overview");T(s),await c.tab();const o=u(t,"Reports");T(o),await c.tab();const l=u(t,"Analytics");T(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const e=u(t,"Dashboard");await c.click(e),B(t,"Overview"),B(t,"Reports"),B(t,"Analytics"),await c.tab();const s=u(t,"Settings");T(s),C(t,"Overview"),C(t,"Reports"),C(t,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const e=u(t,"Settings");await c.click(e),R(t,"General"),R(t,"Privacy"),R(t,"Advanced"),B(t,"Security"),B(t,"API Keys"),await c.tab();const s=u(t,"General");T(s),await c.tab();const o=u(t,"Privacy");T(o),await c.tab();const l=u(t,"Advanced");T(l),C(t,"Security"),C(t,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const e=u(t,"Advanced");await c.click(e),R(t,"Security"),R(t,"API Keys"),await c.tab();const s=u(t,"Security");T(s),await c.tab();const o=u(t,"API Keys");T(o)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const e=u(t,"Advanced");await c.click(e),B(t,"Security"),B(t,"API Keys"),await c.tab();const s=u(t,"Profile");T(s),C(t,"Security"),C(t,"API Keys")})}},le={args:{...m.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const e=V(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),r(e).not.toHaveAttribute("href"),r(e).not.toHaveAttribute("role","button"),r(e).not.toHaveAttribute("tabindex")})}},de={args:{...m.args,headerConfig:ln,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header is a link when link prop is provided",async()=>{const e=V(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("A"),r(e).toHaveAttribute("href","/"),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const e=V(t);e==null||e.focus(),r(e).toHaveFocus()})}},ue={args:{...m.args,headerConfig:{...dn,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header is clickable button when onClick is provided",async()=>{const e=V(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),await c.click(e),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const e=V(t);e==null||e.focus(),r(e).toHaveFocus(),await c.keyboard(xa),await c.keyboard(Ta)})}},pe={args:{...m.args,headerConfig:b,items:U,collapsible:!0,isCollapsed:!0},decorators:[qe()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header tooltip falls back to title when collapsed",async()=>{const e=V(t);r(e).not.toBeNull(),e==null||e.focus(),await Y();const s=D(document.body).queryByRole("tooltip",{name:"My Application"});r(s).not.toBeNull(),r(s).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const e=ma(t,0);r(e).not.toBeNull(),e==null||e.focus(),await Y();const s=D(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await Y();const e=D(document.body).queryByRole("tooltip",{name:"Dashboard"});r(e).not.toBeNull(),r(e).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await Y();const e=D(document.body).queryByRole("tooltip",{name:"Profile"});r(e).not.toBeNull(),r(e).toHaveTextContent("Profile")})}},ve={args:{...m.args,headerConfig:{...b,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[qe()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const e=V(t);r(e).not.toBeNull(),e==null||e.focus(),await Y();const s=D(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(s).not.toBeNull(),r(s).toHaveTextContent("Custom header tooltip")})}},me={args:{...m.args,headerConfig:b,items:Be,collapsible:!0,isCollapsed:!0},decorators:[qe()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{Aa(a);const e=ma(t,1);r(e).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await Y();const s=D(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},ye={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:on,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify Overview nested item is active",async()=>{P(t,"overview"),v(t,"reports")})}},Ne={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:sn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{P(t,"security"),v(t,"advanced"),v(t,"settings"),v(t,"api-keys")})}},ge={tags:["skip-ci"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[pa(Na,"security")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify only Security is active, not parent NavMenus",async()=>{P(t,"security"),v(t,"advanced"),v(t,"settings"),v(t,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const e=t.getByRole("navigation"),s=u(e,"API Keys");r(s).not.toBeNull(),await c.click(s),v(t,"security"),P(t,"api-keys"),v(t,"advanced"),v(t,"settings")})}},fe={tags:["skip-ci"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[pa(Na,"overview")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify Overview leaf is active initially",async()=>{P(t,"overview"),v(t,"reports"),v(t,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const e=t.getByRole("navigation"),s=u(e,"Reports");r(s).not.toBeNull(),await c.click(s),v(t,"overview"),P(t,"reports"),v(t,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const e=t.getByRole("navigation"),s=u(e,"Settings");r(s).not.toBeNull(),await c.click(s);const o=u(e,"Advanced");r(o).not.toBeNull(),await c.click(o),v(t,"overview"),v(t,"reports"),v(t,"security"),v(t,"api-keys"),P(t,"advanced")})}},be={args:{...m.args,headerConfig:b,items:U,activeItem:"home",collapsible:!0},decorators:[en(U)],play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify Home has active class initially",async()=>{P(t,"home"),v(t,"dashboard"),v(t,"analytics"),v(t,"settings"),v(t,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=t.getByRole("navigation"),s=u(e,"Dashboard");r(s).not.toBeNull(),await c.click(s),v(t,"home"),P(t,"dashboard"),v(t,"analytics"),v(t,"settings"),v(t,"profile")})}},he={args:{...m.args,headerConfig:b,items:U,footerItems:Ke,collapsible:!0}},we={args:{...m.args,headerConfig:b,items:U,footerItems:Ke,collapsible:!1}},xe={args:{...m.args,headerConfig:b,items:Be,footerItems:Ke,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify footer items are rendered",async()=>{const e=G(t,"Settings");r(e).not.toBeNull();const s=G(t,"Help & Support");r(s).not.toBeNull();const o=G(t,"Account");r(o).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const e=G(t,"Account");await c.click(e);const s=G(t,"Preferences");r(s).not.toBeNull();const o=G(t,"Logout");r(o).not.toBeNull()})}},Te={tags:["skip-ci"],args:{...m.args,headerConfig:b,items:rn,collapsible:!0}},un=[N[0],{...N[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...N[2],hasDivider:!0},{...F,id:"reports",label:"Reports",icon:"info"},{...N[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},N[4]],Ee={args:{...m.args,headerConfig:b,items:un,collapsible:!0}};var Le,Oe,Ge;m.parameters={...m.parameters,docs:{...(Le=m.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ge=(Oe=m.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.source}}};var ze,Ye,Ue;ne.parameters={...ne.parameters,docs:{...(ze=ne.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Ue=(Ye=ne.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var $e,Je,Qe;se.parameters={...se.parameters,docs:{...($e=se.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Qe=(Je=se.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;ie.parameters={...ie.parameters,docs:{...(Xe=ie.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(et=(Ze=ie.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;oe.parameters={...oe.parameters,docs:{...(tt=oe.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=oe.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,it,ot;re.parameters={...re.parameters,docs:{...(st=re.parameters)==null?void 0:st.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(ot=(it=re.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var rt,ct,lt;ce.parameters={...ce.parameters,docs:{...(rt=ce.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(ct=ce.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var dt,ut,pt;le.parameters={...le.parameters,docs:{...(dt=le.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(pt=(ut=le.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var vt,mt,yt;de.parameters={...de.parameters,docs:{...(vt=de.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=de.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var Nt,gt,ft;ue.parameters={...ue.parameters,docs:{...(Nt=ue.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(ft=(gt=ue.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};var bt,ht,wt;pe.parameters={...pe.parameters,docs:{...(bt=pe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(wt=(ht=pe.parameters)==null?void 0:ht.docs)==null?void 0:wt.source}}};var xt,Tt,Et;ve.parameters={...ve.parameters,docs:{...(xt=ve.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Et=(Tt=ve.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var At,It,kt;me.parameters={...me.parameters,docs:{...(At=me.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(kt=(It=me.parameters)==null?void 0:It.docs)==null?void 0:kt.source}}};var Ct,Bt,St;ye.parameters={...ye.parameters,docs:{...(Ct=ye.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(St=(Bt=ye.parameters)==null?void 0:Bt.docs)==null?void 0:St.source}}};var Ht,Dt,Mt;Ne.parameters={...Ne.parameters,docs:{...(Ht=Ne.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Mt=(Dt=Ne.parameters)==null?void 0:Dt.docs)==null?void 0:Mt.source}}};var _t,Ft,Pt;ge.parameters={...ge.parameters,docs:{...(_t=ge.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Pt=(Ft=ge.parameters)==null?void 0:Ft.docs)==null?void 0:Pt.source}}};var jt,Rt,qt;fe.parameters={...fe.parameters,docs:{...(jt=fe.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(qt=(Rt=fe.parameters)==null?void 0:Rt.docs)==null?void 0:qt.source}}};var Kt,Vt,Wt;be.parameters={...be.parameters,docs:{...(Kt=be.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Wt=(Vt=be.parameters)==null?void 0:Vt.docs)==null?void 0:Wt.source}}};var Lt,Ot,Gt;he.parameters={...he.parameters,docs:{...(Lt=he.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Gt=(Ot=he.parameters)==null?void 0:Ot.docs)==null?void 0:Gt.source}}};var zt,Yt,Ut;we.parameters={...we.parameters,docs:{...(zt=we.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Ut=(Yt=we.parameters)==null?void 0:Yt.docs)==null?void 0:Ut.source}}};var $t,Jt,Qt;xe.parameters={...xe.parameters,docs:{...($t=xe.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=xe.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,ea;Te.parameters={...Te.parameters,docs:{...(Xt=Te.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(ea=(Zt=Te.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,na;Ee.parameters={...Ee.parameters,docs:{...(ta=Ee.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(na=(aa=Ee.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};const _n=["Default","Collapsible","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{be as ActiveItemState,ve as CollapsedHeaderTooltipCustom,pe as CollapsedTooltip,me as CollapsedTooltipWithNested,ne as Collapsible,m as Default,we as FooterItemsOnly,xe as FooterItemsWithNested,le as HeaderClickability,ie as HeaderCompact,de as HeaderWithLink,oe as HeaderWithLongTitle,ue as HeaderWithOnClick,se as HeaderWithVersion,ce as KeyboardNavigation,fe as NestedItemActiveOnClick,ye as NestedItemActivePreselected,ge as NestedNavMenuActiveOnClick,Ne as NestedNavMenuActivePreselected,Te as WithBadges,Ee as WithDividers,he as WithFooterItems,re as WithNestedMenus,_n as __namedExportsOrder,Mn as default};
