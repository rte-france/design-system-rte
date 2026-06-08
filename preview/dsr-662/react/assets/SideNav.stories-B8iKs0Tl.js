import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{g as Xt,B as ga,s as Na}from"./BaseSideNav-C1M5WGj4.js";import{T as fa,a as ba}from"./keyboard-test.constants-By8W48aj.js";import{w as q,e as r,a as ha,u as c}from"./index-4rjIhT2C.js";import{f as wa}from"./testing.utils-mIZIUNbM.js";import{S as Te,E as Ae,c as qe,b as xa,d as Ea}from"./keyboard.constants-BverKK8B.js";import{r as h}from"./index-G8LIXM5I.js";import{u as Zt}from"./useActiveKeyboard-DaOmFJe_.js";import{D as J}from"./Divider-BMotkXeQ.js";import{I as Be,B as ea}from"./Badge-C3W4NyCk.js";import{I as ta}from"./Icon-Bc7wfgCv.js";import{T as Ta}from"./Tooltip-BNzaOk9j.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BpCpHr8J.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Aa="_navItemContainer_wwc28_1",Ia="_navItemLeft_wwc28_41",ka="_navItem_wwc28_1",Ca="_navItemRight_wwc28_56",G={navItemContainer:Aa,navItemLeft:Ia,navItem:ka,navItemRight:Ca},Sa="_navMenuContainer_22ik2_1",Ba="_navMenu_22ik2_1",Ha="_menuContentLeft_22ik2_31",Da="_menuContentRight_22ik2_36",_a="_menuIcon_22ik2_92",Ma="_nestedMenu_22ik2_100",Fa="_icon_22ik2_115",K={navMenuContainer:Sa,navMenu:Ba,menuContentLeft:Ha,menuContentRight:Da,menuIcon:_a,nestedMenu:Ma,icon:Fa};function De({link:a,label:n,tabIndex:e,onKeyDown:t,onFocus:i,onBlur:o,onClick:l,children:u,styleType:T="item"}){const f=T==="menu"?K:G,w={className:T==="menu"?f.navMenu:f.navItem,tabIndex:e,"aria-label":n,...i&&{onFocus:i},...o&&{onBlur:o},...l&&{onClick:l},...t&&{onKeyDown:t}};return a?s.jsx("a",{href:a,...w,children:u}):s.jsx("span",{...w,children:u})}De.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Pa(a=!1,n=!1){return a?Be.s:n?Be.l:Be.m}function _e({icon:a,hasLeadingIcon:n=!0,label:e,isCollapsed:t,isNested:i,styleType:o="item"}){const l=Pa(i,t),u=o==="menu"?K:G;return s.jsxs(s.Fragment,{children:[n&&a&&s.jsx(ta,{name:a,className:u.icon,size:l}),t?null:s.jsx("span",{children:e})]})}_e.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Me({label:a,isCollapsed:n,children:e}){return n&&a?s.jsx(Ta,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}Me.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function aa(a){return a===!1?-1:0}function na({onEnterOrSpace:a,onEscape:n,includeArrowKeys:e=!1,includeEscape:t=!1}={}){const i=h.useCallback(u=>{[Te,Ae].includes(u.key)&&(u.preventDefault(),a==null||a()),u.key===qe&&t&&(u.preventDefault(),n==null||n())},[a,n,t]),o=[Te,Ae,...t?[qe]:[],...e?[xa,Ea]:[]],{onKeyDown:l}=Zt({onKeyDown:i},{interactiveKeyCodes:o});return{onKeyDown:l}}const Ie=h.forwardRef(({id:a,icon:n,hasLeadingIcon:e=!0,onClick:t,label:i,isCollapsed:o,link:l,isNested:u,parentMenuOpen:T,appearance:f="brand",active:B,badge:w,...Y},N)=>{const D=h.useRef(null),{onKeyDown:H}=na({onEnterOrSpace:t});function W(){var A;(A=D.current)==null||A.setAttribute("data-focused","true")}function U(){var A;(A=D.current)==null||A.removeAttribute("data-focused")}const $=aa(T),P=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:G.navItemLeft,children:s.jsx(_e,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:u,styleType:"item"})}),s.jsx("div",{className:G.navItemRight,children:!o&&w&&s.jsx(ea,{badgeType:w.badgeType,size:w.size,content:w.content,count:w.count})})]}),V=l?s.jsx("a",{id:a,"aria-label":i,className:G.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":u,href:l,children:P}):s.jsx("div",{id:a,className:G.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":u,"data-active":B,onClick:t,ref:A=>{D.current=A,typeof N=="function"?N(A):N&&"current"in N&&(N.current=A)},...Y,children:s.jsx(De,{label:i,tabIndex:$,onKeyDown:H,onFocus:W,onBlur:U,styleType:"item",children:P})});return s.jsx(Me,{label:i,isCollapsed:o,children:V})});Ie.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Fe=h.forwardRef(({id:a,icon:n,hasLeadingIcon:e=!0,onClick:t,label:i,isCollapsed:o,link:l,items:u=[],open:T,onOpenChange:f,hasMenuIcon:B=!0,isNested:w,parentMenuOpen:Y,appearance:N="brand",contrast:D="high",badge:H,hasDivider:W,active:U,...$},P)=>{const V=Xt(N,D),[A,L]=h.useState(!1),_=T??A,X=T!==void 0;function Z(){const d=!_;t&&t(),X?f==null||f(d):L(d)}function Ce(){_&&(X?f==null||f(!1):L(!1))}const{onKeyDown:ee}=na({onEnterOrSpace:Z,onEscape:Ce,includeArrowKeys:!0,includeEscape:!0}),x=u.length,p=!o&&x,Se=_,te=aa(Y),je=p&&B?s.jsx(ta,{name:"arrow-chevron-right",className:K.menuIcon,"data-open":_}):null,ua=!o&&(!!H||!!je),pa=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:K.menuContentLeft,children:s.jsx(_e,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:w,styleType:"menu"})}),ua&&s.jsxs("div",{className:K.menuContentRight,children:[H&&s.jsx(ea,{badgeType:H.badgeType,size:H.size,content:H.content,count:H.count}),je]})]}),ma=s.jsxs("li",{id:a,className:K.navMenuContainer,"data-collapsed":o,"data-appearance":N,"data-nested":w,"data-open":_,"data-active":U,ref:P,...$,children:[s.jsx(De,{link:l,label:i,tabIndex:te,onClick:Z,onKeyDown:ee,styleType:"menu",children:pa}),p&&s.jsx("ul",{className:K.nestedMenu,"data-open":_,children:u.map(d=>{var Re;return(Re=d.items)!=null&&Re.length?s.jsx(Fe,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:o,link:d.link,onClick:d.onClick,items:d.items||[],open:d.open,onOpenChange:d.onOpenChange,active:d.active,hasMenuIcon:B,hasDivider:d.hasDivider,isNested:!0,parentMenuOpen:Se,appearance:N,contrast:D,badge:d.badge},d.id||d.label):s.jsxs(h.Fragment,{children:[s.jsx("li",{children:s.jsx(Ie,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:o,link:d.link,onClick:d.onClick,isNested:!0,parentMenuOpen:Se,appearance:N,active:d.active,badge:d.badge})}),d.hasDivider&&s.jsx(J,{appearance:V})]},d.id||d.label)})})]}),ya=s.jsx(Me,{label:i,isCollapsed:o,children:ma});return s.jsxs(s.Fragment,{children:[ya,W&&s.jsx(J,{appearance:V})]})});Fe.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const ja="_sideNavHeaderContainer_w4skk_1",Ra="_sideNavHeader_w4skk_1",qa="_sideNavHeaderTitleContainer_w4skk_46",Ka="_sideNavHeaderTitle_w4skk_46",Wa="_sideNavHeaderIdentifier_w4skk_82",Va="_sideNavHeaderVersion_w4skk_125",La="_sideNavBody_w4skk_154",Oa="_sideNavFooterContainer_w4skk_177",Ga="_sideNavFooter_w4skk_177",za="_sideNavFooterItems_w4skk_190",Ya="_collapsibleSection_w4skk_207",I={sideNavHeaderContainer:ja,sideNavHeader:Ra,sideNavHeaderTitleContainer:qa,sideNavHeaderTitle:Ka,sideNavHeaderIdentifier:Wa,sideNavHeaderVersion:Va,sideNavBody:La,sideNavFooterContainer:Oa,sideNavFooter:Ga,sideNavFooterItems:za,collapsibleSection:Ya},Ua=300,He=h.forwardRef(({size:a="m",collapsible:n,children:e,headerConfig:t,items:i,footerItems:o,isCollapsed:l,defaultCollapsed:u=!1,onCollapsedChange:T,appearance:f="brand",contrast:B="high",activeItem:w},Y)=>{const[N,D]=h.useState(l??u),[H,W]=h.useState(!0);h.useEffect(()=>{l!==void 0&&D(l)},[l]),h.useEffect(()=>{if(N)W(!1);else{const x=setTimeout(()=>{W(!0)},Ua);return()=>clearTimeout(x)}},[N]);const U=()=>{const x=!N;l===void 0&&D(x),T==null||T(x)},$=N?"arrow-double-right":"arrow-double-left",P=Xt(f,B),V=x=>{[Te,Ae].includes(x.key)&&(x.preventDefault(),t!=null&&t.onClick&&t.onClick())},{onKeyDown:A}=Zt({onKeyDown:V},{interactiveKeyCodes:[Te,Ae]}),L=s.jsxs("div",{className:I.sideNavHeaderTitle,children:[s.jsx("div",{className:I.sideNavHeaderIdentifier,children:t==null?void 0:t.identifier}),N?"":s.jsx("h1",{"data-hidden":!H,children:t==null?void 0:t.title})]}),_=t==null?void 0:t.ariaLabel,X=s.jsx("a",{href:(t==null?void 0:t.link)??"",className:I.sideNavHeaderTitleContainer,onClick:t==null?void 0:t.onClick,"aria-label":_,children:L}),Z=s.jsx("div",{className:I.sideNavHeaderTitleContainer,tabIndex:0,onClick:t==null?void 0:t.onClick,onKeyDown:A,role:"button","aria-label":_,children:L}),Ce=t!=null&&t.link?X:t!=null&&t.onClick?Z:s.jsx("div",{className:I.sideNavHeaderTitleContainer,children:L});function ee(x){return x!=null&&x.length?s.jsx("ul",{children:x.map(p=>{var te;return((te=p.items)==null?void 0:te.length)?s.jsx(Fe,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:N,link:p.link,onClick:p.onClick,items:p.items||[],open:p.open,active:p.active,appearance:f,contrast:B,hasDivider:p.hasDivider},p.id):s.jsxs(h.Fragment,{children:[s.jsx("li",{children:s.jsx(Ie,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:N,link:p.link,onClick:p.onClick,appearance:f,active:p.id===w&&!!w})}),p.hasDivider&&s.jsx(J,{appearance:P})]},p.id)})}):null}return s.jsx(ga,{ref:Y,size:a,isCollapsed:N,appearance:f,contrast:B,header:s.jsxs("div",{className:I.sideNavHeaderContainer,"data-compact":(t==null?void 0:t.isCompact)??!1,children:[s.jsxs("div",{className:I.sideNavHeader,"data-collapsed":N,"data-appearance":f,"data-compact":(t==null?void 0:t.isCompact)??!1,children:[Ce,!(t!=null&&t.isCompact)&&s.jsx("div",{className:I.sideNavHeaderVersion,"data-hidden":!H,children:s.jsx("span",{children:t==null?void 0:t.version})})]}),s.jsx(J,{appearance:P})]}),body:s.jsx("div",{className:I.sideNavBody,children:ee(i)}),footer:((o==null?void 0:o.length)||n)&&s.jsxs("div",{className:I.sideNavFooterContainer,children:[(o==null?void 0:o.length)&&s.jsx("div",{className:I.sideNavFooterItems,children:ee(o)}),s.jsx(J,{appearance:P}),s.jsx("div",{className:I.sideNavFooter,children:n&&s.jsx("div",{className:I.collapsibleSection,children:s.jsx(Ie,{id:"collapse-button",icon:$,hasLeadingIcon:!0,isCollapsed:N,onClick:U,label:N?"Ouvrir le menu":"Réduire le menu",appearance:f,role:"button"})})})]}),children:e})});He.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function sa(a,n){return a.some(e=>{var t;return e.id===n?!0:(t=e.items)!=null&&t.length?sa(e.items,n):!1})}function $a(a,n){if(!a.id||!n)return a.onClick;const e=()=>{n(a.id)};return a.onClick?()=>{e(),a.onClick()}:e}function ia(a,n,e){return a.map(t=>{var B;const i=(B=t.items)!=null&&B.length?ia(t.items,n,e):void 0,o=!!(i!=null&&i.length),l=!o&&t.id===n,u=o&&t.id===n,T=t,f=o&&(t.id===n||sa(t.items,n));return{...t,active:l||u,open:f?!0:T.open,items:i,onClick:$a(t,e)}})}function oa(){return function(n,e){const[t,i]=h.useState(e.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...e.args,isCollapsed:t,onCollapsedChange:i}})})}}function Ja(a){return function(e,t){const[i,o]=h.useState(t.args.activeItem),l=a.map(u=>({...u,onClick:()=>o(u.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...t.args,items:l,activeItem:i}})})}}function ra(a,n){return function(t,i){const[o,l]=h.useState(n),u=h.useMemo(()=>ia(a,o,l),[o,a]);return s.jsx(t,{args:{...i.args,items:u}})}}function ca(a){if(!a)return null;const n=Array.from(a.children);for(const o of n)if(o.tagName==="A"||o.tagName==="SPAN"&&o.hasAttribute("tabindex"))return o;const e=a.querySelector("a");return e||Array.from(a.querySelectorAll("span")).find(o=>o.hasAttribute("tabindex"))}function v(a,n,e){const t=e?a.querySelector(e):a;if(!t)return null;const i=e?q(t):q(a),o=i.queryByRole("link",{name:n});if(o)return o;const l=i.queryByText(n);if(l){const u=l.closest("li");return ca(u)}return null}function la(a,n){const e=a.querySelector('[class*="sideNavBody"]');if(!e)return null;const i=Array.from(e.querySelectorAll("li"))[n];return ca(i)}function O(a,n){return v(a,n,'[class*="sideNavFooterItems"]')}function Q(a,n="MA"){var o;return(o=q(a).getByText(n).parentElement)==null?void 0:o.parentElement}function Qa(a,n){return a.querySelector(`#${n}`)}function Xa(a){return a.dataset.active==="true"}function E(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function k(a,n){const e=v(a,n);e&&r(e).not.toHaveFocus()}function C(a,n){const e=v(a,n);e&&r(e).toHaveAttribute("tabindex","-1")}function j(a,n){const e=v(a,n);e&&r(e).toHaveAttribute("tabindex","0")}async function da(a,n,e){await ha(()=>{const t=a.getByRole("navigation"),i=Qa(t,n);if(!i){r(e).toBe(!1);return}r(Xa(i)).toBe(e)})}function F(a,n){return da(a,n,!0)}function m(a,n){return da(a,n,!1)}function S(a){const n=q(a),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function Ee(a=200){return new Promise(n=>setTimeout(n,a))}const Sn={title:"Composants/SideNav",id:"SideNav",component:He,tags:["autodocs"],decorators:[a=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>s.jsx(He,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,isCollapsed:a.isCollapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:Za})},Za=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),M={hasLeadingIcon:!0},R={size:"m",content:"number"},y=[{...M,id:"home",label:"Home",icon:"home"},{...M,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...M,id:"analytics",label:"Analytics",icon:"analytics"},{...M,id:"settings",label:"Settings",icon:"settings"},{...M,id:"profile",label:"Profile",icon:"user",link:"/profile"}],z=y,va=[y[0],{...y[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...y[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},y[4]],en=[y[0],{...y[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},y[4]],tn=[y[0],{...y[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...y[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},y[4]],ke=[y[0],{...y[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...y[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},y[4]],an=[{...y[0],badge:{...R,badgeType:"indicator",count:5}},{...y[1],badge:{...R,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...R,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...R,badgeType:"indicator",count:12}}]},{...y[3],items:[{label:"General"},{label:"Privacy",badge:{...R,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...R,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...R,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...y[4],badge:{...R,badgeType:"brand",count:8}}],Pe=[{...M,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...M,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...M,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},nn="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",sn={...b},on={...b,onClick:()=>{console.log("Header clicked")}},g={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:z}},ae={tags:["skip-ci"],args:{...g.args,collapsible:!0}},ne={tags:["skip-ci"],args:{...g.args,headerConfig:b}},se={tags:["skip-ci"],args:{...g.args,headerConfig:{...b,isCompact:!0}}},ie={args:{...g.args,headerConfig:{...b,title:nn},size:"m"},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=S(a);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(e.offsetWidth).toBe(Na.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const t=e.querySelector("h1");r(t).not.toBeNull(),r(getComputedStyle(t).textOverflow).toBe("ellipsis"),r(t.scrollWidth).toBeGreaterThan(t.clientWidth)})}},oe={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:ke,collapsible:!0}},re={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:ke,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=S(a);await n("Navigate through navigation when all menus are closed",async()=>{C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),C(e,"General"),C(e,"Privacy"),C(e,"Advanced");const t=v(e,"Home");t==null||t.focus(),E(t),await c.tab();const i=v(e,"Dashboard");E(i),k(e,"Overview"),k(e,"Reports"),k(e,"Analytics"),await c.tab();const o=v(e,"Settings");E(o),k(e,"General"),k(e,"Privacy"),k(e,"Advanced"),await c.tab();const l=v(e,"Profile");E(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=v(e,"Dashboard");await c.click(t),j(e,"Overview"),j(e,"Reports"),j(e,"Analytics"),await c.tab();const i=v(e,"Overview");E(i),await c.tab();const o=v(e,"Reports");E(o),await c.tab();const l=v(e,"Analytics");E(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=v(e,"Dashboard");await c.click(t),C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),await c.tab();const i=v(e,"Settings");E(i),k(e,"Overview"),k(e,"Reports"),k(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=v(e,"Settings");await c.click(t),j(e,"General"),j(e,"Privacy"),j(e,"Advanced"),C(e,"Security"),C(e,"API Keys"),await c.tab();const i=v(e,"General");E(i),await c.tab();const o=v(e,"Privacy");E(o),await c.tab();const l=v(e,"Advanced");E(l),k(e,"Security"),k(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=v(e,"Advanced");await c.click(t),j(e,"Security"),j(e,"API Keys"),await c.tab();const i=v(e,"Security");E(i),await c.tab();const o=v(e,"API Keys");E(o)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=v(e,"Advanced");await c.click(t),C(e,"Security"),C(e,"API Keys"),await c.tab();const i=v(e,"Profile");E(i),k(e,"Security"),k(e,"API Keys")})}},ce={args:{...g.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=S(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=Q(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},le={args:{...g.args,headerConfig:sn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=S(a);await n("Verify header is a link when link prop is provided",async()=>{const t=Q(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=Q(e);t==null||t.focus(),r(t).toHaveFocus()})}},de={args:{...g.args,headerConfig:{...on,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=S(a);await n("Verify header is clickable button when onClick is provided",async()=>{const t=Q(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=Q(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(fa),await c.keyboard(ba)})}},ve={args:{...g.args,headerConfig:b,items:z,collapsible:!0,isCollapsed:!0},decorators:[oa()],play:async({canvasElement:a,step:n})=>{const{sideNav:e}=S(a);await n("Verify tooltips appear when tabbing to navigation items",async()=>{const t=la(e,0);r(t).not.toBeNull(),t==null||t.focus(),await Ee();const i=q(document.body).queryByRole("tooltip",{name:"Home"});r(i).not.toBeNull(),r(i).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await Ee();const t=q(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await Ee();const t=q(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},ue={args:{...g.args,headerConfig:b,items:ke,collapsible:!0,isCollapsed:!0},decorators:[oa()],play:async({canvasElement:a,step:n})=>{const{sideNav:e}=S(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{wa(a);const t=la(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await Ee();const i=q(document.body).queryByRole("tooltip",{name:"Dashboard"});r(i).not.toBeNull(),r(i).toHaveTextContent("Dashboard")})}},pe={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:tn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:e}=S(a);await n("Verify Overview nested item is active",async()=>{F(e,"overview"),m(e,"reports")})}},me={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:en,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:e}=S(a);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{F(e,"security"),m(e,"advanced"),m(e,"settings"),m(e,"api-keys")})}},ye={tags:["skip-ci"],args:{...g.args,headerConfig:b,collapsible:!0},decorators:[ra(va,"security")],play:async({canvasElement:a,step:n})=>{const{canvas:e}=S(a);await n("Verify only Security is active, not parent NavMenus",async()=>{F(e,"security"),m(e,"advanced"),m(e,"settings"),m(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const t=e.getByRole("navigation"),i=v(t,"API Keys");r(i).not.toBeNull(),await c.click(i),m(e,"security"),F(e,"api-keys"),m(e,"advanced"),m(e,"settings")})}},ge={tags:["skip-ci"],args:{...g.args,headerConfig:b,collapsible:!0},decorators:[ra(va,"overview")],play:async({canvasElement:a,step:n})=>{const{canvas:e}=S(a);await n("Verify Overview leaf is active initially",async()=>{F(e,"overview"),m(e,"reports"),m(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const t=e.getByRole("navigation"),i=v(t,"Reports");r(i).not.toBeNull(),await c.click(i),m(e,"overview"),F(e,"reports"),m(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const t=e.getByRole("navigation"),i=v(t,"Settings");r(i).not.toBeNull(),await c.click(i);const o=v(t,"Advanced");r(o).not.toBeNull(),await c.click(o),m(e,"overview"),m(e,"reports"),m(e,"security"),m(e,"api-keys"),F(e,"advanced")})}},Ne={args:{...g.args,headerConfig:b,items:z,activeItem:"home",collapsible:!0},decorators:[Ja(z)],play:async({canvasElement:a,step:n})=>{const{canvas:e}=S(a);await n("Verify Home has active class initially",async()=>{F(e,"home"),m(e,"dashboard"),m(e,"analytics"),m(e,"settings"),m(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const t=e.getByRole("navigation"),i=v(t,"Dashboard");r(i).not.toBeNull(),await c.click(i),m(e,"home"),F(e,"dashboard"),m(e,"analytics"),m(e,"settings"),m(e,"profile")})}},fe={args:{...g.args,headerConfig:b,items:z,footerItems:Pe,collapsible:!0}},be={args:{...g.args,headerConfig:b,items:z,footerItems:Pe,collapsible:!1}},he={args:{...g.args,headerConfig:b,items:ke,footerItems:Pe,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=S(a);await n("Verify footer items are rendered",async()=>{const t=O(e,"Settings");r(t).not.toBeNull();const i=O(e,"Help & Support");r(i).not.toBeNull();const o=O(e,"Account");r(o).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const t=O(e,"Account");await c.click(t);const i=O(e,"Preferences");r(i).not.toBeNull();const o=O(e,"Logout");r(o).not.toBeNull()})}},we={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:an,collapsible:!0}},rn=[y[0],{...y[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...y[2],hasDivider:!0},{...M,id:"reports",label:"Reports",icon:"info"},{...y[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},y[4]],xe={args:{...g.args,headerConfig:b,items:rn,collapsible:!0}};var Ke,We,Ve;g.parameters={...g.parameters,docs:{...(Ke=g.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ve=(We=g.parameters)==null?void 0:We.docs)==null?void 0:Ve.source}}};var Le,Oe,Ge;ae.parameters={...ae.parameters,docs:{...(Le=ae.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Ge=(Oe=ae.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.source}}};var ze,Ye,Ue;ne.parameters={...ne.parameters,docs:{...(ze=ne.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ue=(Ye=ne.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var $e,Je,Qe;se.parameters={...se.parameters,docs:{...($e=se.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(Qe=(Je=se.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;ie.parameters={...ie.parameters,docs:{...(Xe=ie.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=ie.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;oe.parameters={...oe.parameters,docs:{...(tt=oe.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(nt=(at=oe.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,it,ot;re.parameters={...re.parameters,docs:{...(st=re.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ot=(it=re.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var rt,ct,lt;ce.parameters={...ce.parameters,docs:{...(rt=ce.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(ct=ce.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var dt,vt,ut;le.parameters={...le.parameters,docs:{...(dt=le.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ut=(vt=le.parameters)==null?void 0:vt.docs)==null?void 0:ut.source}}};var pt,mt,yt;de.parameters={...de.parameters,docs:{...(pt=de.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=de.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var gt,Nt,ft;ve.parameters={...ve.parameters,docs:{...(gt=ve.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ft=(Nt=ve.parameters)==null?void 0:Nt.docs)==null?void 0:ft.source}}};var bt,ht,wt;ue.parameters={...ue.parameters,docs:{...(bt=ue.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(wt=(ht=ue.parameters)==null?void 0:ht.docs)==null?void 0:wt.source}}};var xt,Et,Tt;pe.parameters={...pe.parameters,docs:{...(xt=pe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Tt=(Et=pe.parameters)==null?void 0:Et.docs)==null?void 0:Tt.source}}};var At,It,kt;me.parameters={...me.parameters,docs:{...(At=me.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(kt=(It=me.parameters)==null?void 0:It.docs)==null?void 0:kt.source}}};var Ct,St,Bt;ye.parameters={...ye.parameters,docs:{...(Ct=ye.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Bt=(St=ye.parameters)==null?void 0:St.docs)==null?void 0:Bt.source}}};var Ht,Dt,_t;ge.parameters={...ge.parameters,docs:{...(Ht=ge.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(_t=(Dt=ge.parameters)==null?void 0:Dt.docs)==null?void 0:_t.source}}};var Mt,Ft,Pt;Ne.parameters={...Ne.parameters,docs:{...(Mt=Ne.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Pt=(Ft=Ne.parameters)==null?void 0:Ft.docs)==null?void 0:Pt.source}}};var jt,Rt,qt;fe.parameters={...fe.parameters,docs:{...(jt=fe.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(qt=(Rt=fe.parameters)==null?void 0:Rt.docs)==null?void 0:qt.source}}};var Kt,Wt,Vt;be.parameters={...be.parameters,docs:{...(Kt=be.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Vt=(Wt=be.parameters)==null?void 0:Wt.docs)==null?void 0:Vt.source}}};var Lt,Ot,Gt;he.parameters={...he.parameters,docs:{...(Lt=he.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Gt=(Ot=he.parameters)==null?void 0:Ot.docs)==null?void 0:Gt.source}}};var zt,Yt,Ut;we.parameters={...we.parameters,docs:{...(zt=we.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Ut=(Yt=we.parameters)==null?void 0:Yt.docs)==null?void 0:Ut.source}}};var $t,Jt,Qt;xe.parameters={...xe.parameters,docs:{...($t=xe.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Qt=(Jt=xe.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};const Bn=["Default","Collapsible","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{Ne as ActiveItemState,ve as CollapsedTooltip,ue as CollapsedTooltipWithNested,ae as Collapsible,g as Default,be as FooterItemsOnly,he as FooterItemsWithNested,ce as HeaderClickability,se as HeaderCompact,le as HeaderWithLink,ie as HeaderWithLongTitle,de as HeaderWithOnClick,ne as HeaderWithVersion,re as KeyboardNavigation,ge as NestedItemActiveOnClick,pe as NestedItemActivePreselected,ye as NestedNavMenuActiveOnClick,me as NestedNavMenuActivePreselected,we as WithBadges,xe as WithDividers,fe as WithFooterItems,oe as WithNestedMenus,Bn as __namedExportsOrder,Sn as default};
