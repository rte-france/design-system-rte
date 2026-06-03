import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as ua,a as pa}from"./keyboard-test.constants-By8W48aj.js";import{w as q,e as r,a as ma,u as c}from"./index-4rjIhT2C.js";import{f as ya}from"./testing.utils-mIZIUNbM.js";import{g as Ut,B as ga}from"./BaseSideNav-Cwwm62n6.js";import{S as Ee,E as Ae,c as Re,b as Na,d as fa}from"./keyboard.constants-BverKK8B.js";import{r as h}from"./index-G8LIXM5I.js";import{u as $t}from"./useActiveKeyboard-DaOmFJe_.js";import{D as J}from"./Divider-BMotkXeQ.js";import{I as Se,B as Jt}from"./Badge-C3W4NyCk.js";import{I as Qt}from"./Icon-Bc7wfgCv.js";import{T as ba}from"./Tooltip-BNzaOk9j.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BpCpHr8J.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const ha="_navItemContainer_zj1dq_1",xa="_navItemLeft_zj1dq_42",wa="_navItem_zj1dq_1",Ea="_navItemRight_zj1dq_57",G={navItemContainer:ha,navItemLeft:xa,navItem:wa,navItemRight:Ea},Aa="_navMenuContainer_22ik2_1",Ta="_navMenu_22ik2_1",Ia="_menuContentLeft_22ik2_31",ka="_menuContentRight_22ik2_36",Ca="_menuIcon_22ik2_92",Sa="_nestedMenu_22ik2_100",Ba="_icon_22ik2_115",K={navMenuContainer:Aa,navMenu:Ta,menuContentLeft:Ia,menuContentRight:ka,menuIcon:Ca,nestedMenu:Sa,icon:Ba};function He({link:a,label:n,tabIndex:e,onKeyDown:t,onFocus:i,onBlur:o,onClick:l,children:u,styleType:x="item"}){const f=x==="menu"?K:G,w={className:x==="menu"?f.navMenu:f.navItem,tabIndex:e,"aria-label":n,...i&&{onFocus:i},...o&&{onBlur:o},...l&&{onClick:l},...t&&{onKeyDown:t}};return a?s.jsx("a",{href:a,...w,children:u}):s.jsx("span",{...w,children:u})}He.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ha(a=!1,n=!1){return a?Se.s:n?Se.l:Se.m}function De({icon:a,hasLeadingIcon:n=!0,label:e,isCollapsed:t,isNested:i,styleType:o="item"}){const l=Ha(i,t),u=o==="menu"?K:G;return s.jsxs(s.Fragment,{children:[n&&a&&s.jsx(Qt,{name:a,className:u.icon,size:l}),t?null:s.jsx("span",{children:e})]})}De.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function _e({label:a,isCollapsed:n,children:e}){return n&&a?s.jsx(ba,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}_e.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Xt(a){return a===!1?-1:0}function Zt({onEnterOrSpace:a,onEscape:n,includeArrowKeys:e=!1,includeEscape:t=!1}={}){const i=h.useCallback(u=>{[Ee,Ae].includes(u.key)&&(u.preventDefault(),a==null||a()),u.key===Re&&t&&(u.preventDefault(),n==null||n())},[a,n,t]),o=[Ee,Ae,...t?[Re]:[],...e?[Na,fa]:[]],{onKeyDown:l}=$t({onKeyDown:i},{interactiveKeyCodes:o});return{onKeyDown:l}}const Te=h.forwardRef(({id:a,icon:n,hasLeadingIcon:e=!0,onClick:t,label:i,isCollapsed:o,link:l,isNested:u,parentMenuOpen:x,appearance:f="brand",active:S,badge:w,...Y},N)=>{const D=h.useRef(null),{onKeyDown:H}=Zt({onEnterOrSpace:t});function V(){var T;(T=D.current)==null||T.setAttribute("data-focused","true")}function U(){var T;(T=D.current)==null||T.removeAttribute("data-focused")}const $=Xt(x),F=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:G.navItemLeft,children:s.jsx(De,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:u,styleType:"item"})}),s.jsx("div",{className:G.navItemRight,children:!o&&w&&s.jsx(Jt,{badgeType:w.badgeType,size:w.size,content:w.content,count:w.count})})]}),L=l?s.jsx("a",{id:a,"aria-label":i,className:G.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":u,href:l,children:F}):s.jsx("div",{id:a,className:G.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":u,"data-active":S,onClick:t,ref:T=>{D.current=T,typeof N=="function"?N(T):N&&"current"in N&&(N.current=T)},...Y,children:s.jsx(He,{label:i,tabIndex:$,onKeyDown:H,onFocus:V,onBlur:U,styleType:"item",children:F})});return s.jsx(_e,{label:i,isCollapsed:o,children:L})});Te.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const je=h.forwardRef(({id:a,icon:n,hasLeadingIcon:e=!0,onClick:t,label:i,isCollapsed:o,link:l,items:u=[],open:x,onOpenChange:f,hasMenuIcon:S=!0,isNested:w,parentMenuOpen:Y,appearance:N="brand",contrast:D="high",badge:H,hasDivider:V,active:U,...$},F)=>{const L=Ut(N,D),[T,W]=h.useState(!1),_=x!==void 0?x:T,X=x!==void 0;function Z(){const d=!_;t&&t(),X?f==null||f(d):W(d)}function ke(){_&&(X?f==null||f(!1):W(!1))}const{onKeyDown:ee}=Zt({onEnterOrSpace:Z,onEscape:ke,includeArrowKeys:!0,includeEscape:!0}),E=u.length,p=!o&&E,Ce=_,te=Xt(Y),Fe=p&&S?s.jsx(Qt,{name:"arrow-chevron-right",className:K.menuIcon,"data-open":_}):null,ca=!o&&(!!H||!!Fe),la=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:K.menuContentLeft,children:s.jsx(De,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:w,styleType:"menu"})}),ca&&s.jsxs("div",{className:K.menuContentRight,children:[H&&s.jsx(Jt,{badgeType:H.badgeType,size:H.size,content:H.content,count:H.count}),Fe]})]}),da=s.jsxs("li",{id:a,className:K.navMenuContainer,"data-collapsed":o,"data-appearance":N,"data-nested":w,"data-open":_,"data-active":U,ref:F,...$,children:[s.jsx(He,{link:l,label:i,tabIndex:te,onClick:Z,onKeyDown:ee,styleType:"menu",children:la}),p&&s.jsx("ul",{className:K.nestedMenu,"data-open":_,children:u.map(d=>{var Pe;return(Pe=d.items)!=null&&Pe.length?s.jsx(je,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:o,link:d.link,onClick:d.onClick,items:d.items||[],open:d.open,onOpenChange:d.onOpenChange,active:d.active,hasMenuIcon:S,hasDivider:d.hasDivider,isNested:!0,parentMenuOpen:Ce,appearance:N,contrast:D,badge:d.badge},d.id||d.label):s.jsxs(h.Fragment,{children:[s.jsx("li",{children:s.jsx(Te,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:o,link:d.link,onClick:d.onClick,isNested:!0,parentMenuOpen:Ce,appearance:N,active:d.active,badge:d.badge})}),d.hasDivider&&s.jsx(J,{appearance:L})]},d.id||d.label)})})]}),va=s.jsx(_e,{label:i,isCollapsed:o,children:da});return s.jsxs(s.Fragment,{children:[va,V&&s.jsx(J,{appearance:L})]})});je.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Da="_sideNavHeaderContainer_1nrjv_1",_a="_sideNavHeader_1nrjv_1",ja="_sideNavHeaderTitleContainer_1nrjv_46",Ma="_sideNavHeaderTitle_1nrjv_46",Fa="_sideNavHeaderIdentifier_1nrjv_80",Pa="_sideNavHeaderVersion_1nrjv_120",Ra="_sideNavBody_1nrjv_149",qa="_sideNavFooterContainer_1nrjv_172",Ka="_sideNavFooter_1nrjv_172",Va="_sideNavFooterItems_1nrjv_185",La="_collapsibleSection_1nrjv_202",I={sideNavHeaderContainer:Da,sideNavHeader:_a,sideNavHeaderTitleContainer:ja,sideNavHeaderTitle:Ma,sideNavHeaderIdentifier:Fa,sideNavHeaderVersion:Pa,sideNavBody:Ra,sideNavFooterContainer:qa,sideNavFooter:Ka,sideNavFooterItems:Va,collapsibleSection:La},Wa=300,Be=h.forwardRef(({size:a="m",collapsible:n,children:e,headerConfig:t,items:i,footerItems:o,isCollapsed:l,defaultCollapsed:u=!1,onCollapsedChange:x,appearance:f="brand",contrast:S="high",activeItem:w},Y)=>{const[N,D]=h.useState(l??u),[H,V]=h.useState(!0);h.useEffect(()=>{l!==void 0&&D(l)},[l]),h.useEffect(()=>{if(N)V(!1);else{const E=setTimeout(()=>{V(!0)},Wa);return()=>clearTimeout(E)}},[N]);const U=()=>{const E=!N;l===void 0&&D(E),x==null||x(E)},$=N?"arrow-double-right":"arrow-double-left",F=Ut(f,S),L=E=>{[Ee,Ae].includes(E.key)&&(E.preventDefault(),t!=null&&t.onClick&&t.onClick())},{onKeyDown:T}=$t({onKeyDown:L},{interactiveKeyCodes:[Ee,Ae]}),W=s.jsxs("div",{className:I.sideNavHeaderTitle,children:[s.jsx("div",{className:I.sideNavHeaderIdentifier,children:t==null?void 0:t.identifier}),N?"":s.jsx("h1",{"data-hidden":!H,children:t==null?void 0:t.title})]}),_=t==null?void 0:t.ariaLabel,X=s.jsx("a",{href:(t==null?void 0:t.link)??"",className:I.sideNavHeaderTitleContainer,onClick:t==null?void 0:t.onClick,"aria-label":_,children:W}),Z=s.jsx("div",{className:I.sideNavHeaderTitleContainer,tabIndex:0,onClick:t==null?void 0:t.onClick,onKeyDown:T,role:"button","aria-label":_,children:W}),ke=t!=null&&t.link?X:t!=null&&t.onClick?Z:s.jsx("div",{className:I.sideNavHeaderTitleContainer,children:W});function ee(E){return E!=null&&E.length?s.jsx("ul",{children:E.map(p=>{var te;return((te=p.items)==null?void 0:te.length)?s.jsx(je,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:N,link:p.link,onClick:p.onClick,items:p.items||[],open:p.open,active:p.active,appearance:f,contrast:S,hasDivider:p.hasDivider},p.id):s.jsxs(h.Fragment,{children:[s.jsx("li",{children:s.jsx(Te,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:N,link:p.link,onClick:p.onClick,appearance:f,active:p.id===w&&!!w})}),p.hasDivider&&s.jsx(J,{appearance:F})]},p.id)})}):null}return s.jsx(ga,{ref:Y,size:a,isCollapsed:N,appearance:f,contrast:S,header:s.jsxs("div",{className:I.sideNavHeaderContainer,"data-compact":(t==null?void 0:t.isCompact)??!1,children:[s.jsxs("div",{className:I.sideNavHeader,"data-collapsed":N,"data-appearance":f,"data-compact":(t==null?void 0:t.isCompact)??!1,children:[ke,!(t!=null&&t.isCompact)&&s.jsx("div",{className:I.sideNavHeaderVersion,"data-hidden":!H,children:s.jsx("span",{children:t==null?void 0:t.version})})]}),s.jsx(J,{appearance:F})]}),body:s.jsx("div",{className:I.sideNavBody,children:ee(i)}),footer:((o==null?void 0:o.length)||n)&&s.jsxs("div",{className:I.sideNavFooterContainer,children:[(o==null?void 0:o.length)&&s.jsx("div",{className:I.sideNavFooterItems,children:ee(o)}),s.jsx(J,{appearance:F}),s.jsx("div",{className:I.sideNavFooter,children:n&&s.jsx("div",{className:I.collapsibleSection,children:s.jsx(Te,{id:"collapse-button",icon:$,hasLeadingIcon:!0,isCollapsed:N,onClick:U,label:N?"Ouvrir le menu":"Réduire le menu",appearance:f,role:"button"})})})]}),children:e})});Be.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function ea(a,n){return a.some(e=>{var t;return e.id===n?!0:(t=e.items)!=null&&t.length?ea(e.items,n):!1})}function Oa(a,n){if(!a.id||!n)return a.onClick;const e=()=>{n(a.id)};return a.onClick?()=>{e(),a.onClick()}:e}function ta(a,n,e){return a.map(t=>{var S;const i=(S=t.items)!=null&&S.length?ta(t.items,n,e):void 0,o=!!(i!=null&&i.length),l=!o&&t.id===n,u=o&&t.id===n,x=t,f=o&&(t.id===n||ea(t.items,n));return{...t,active:l||u,open:f?!0:x.open,items:i,onClick:Oa(t,e)}})}function aa(){return function(n,e){const[t,i]=h.useState(e.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...e.args,isCollapsed:t,onCollapsedChange:i}})})}}function Ga(a){return function(e,t){const[i,o]=h.useState(t.args.activeItem),l=a.map(u=>({...u,onClick:()=>o(u.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...t.args,items:l,activeItem:i}})})}}function na(a,n){return function(t,i){const[o,l]=h.useState(n),u=h.useMemo(()=>ta(a,o,l),[o,a]);return s.jsx(t,{args:{...i.args,items:u}})}}function sa(a){if(!a)return null;const n=Array.from(a.children);for(const o of n)if(o.tagName==="A"||o.tagName==="SPAN"&&o.hasAttribute("tabindex"))return o;const e=a.querySelector("a");return e||Array.from(a.querySelectorAll("span")).find(o=>o.hasAttribute("tabindex"))}function v(a,n,e){const t=e?a.querySelector(e):a;if(!t)return null;const i=e?q(t):q(a),o=i.queryByRole("link",{name:n});if(o)return o;const l=i.queryByText(n);if(l){const u=l.closest("li");return sa(u)}return null}function ia(a,n){const e=a.querySelector('[class*="sideNavBody"]');if(!e)return null;const i=Array.from(e.querySelectorAll("li"))[n];return sa(i)}function O(a,n){return v(a,n,'[class*="sideNavFooterItems"]')}function Q(a,n="MA"){var o;return(o=q(a).getByText(n).parentElement)==null?void 0:o.parentElement}function za(a,n){return a.querySelector(`#${n}`)}function Ya(a){return a.dataset.active==="true"}function A(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function k(a,n){const e=v(a,n);e&&r(e).not.toHaveFocus()}function C(a,n){const e=v(a,n);e&&r(e).toHaveAttribute("tabindex","-1")}function P(a,n){const e=v(a,n);e&&r(e).toHaveAttribute("tabindex","0")}async function oa(a,n,e){await ma(()=>{const t=a.getByRole("navigation"),i=za(t,n);if(!i){r(e).toBe(!1);return}r(Ya(i)).toBe(e)})}function M(a,n){return oa(a,n,!0)}function m(a,n){return oa(a,n,!1)}function B(a){const n=q(a),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function we(a=200){return new Promise(n=>setTimeout(n,a))}const En={title:"Composants/SideNav",id:"SideNav",component:Be,tags:["autodocs"],decorators:[a=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>s.jsx(Be,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,isCollapsed:a.isCollapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:Ua})},Ua=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),j={hasLeadingIcon:!0},R={size:"m",content:"number"},y=[{...j,id:"home",label:"Home",icon:"home"},{...j,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...j,id:"analytics",label:"Analytics",icon:"analytics"},{...j,id:"settings",label:"Settings",icon:"settings"},{...j,id:"profile",label:"Profile",icon:"user",link:"/profile"}],z=y,ra=[y[0],{...y[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...y[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},y[4]],$a=[y[0],{...y[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},y[4]],Ja=[y[0],{...y[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...y[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},y[4]],Ie=[y[0],{...y[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...y[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},y[4]],Qa=[{...y[0],badge:{...R,badgeType:"indicator",count:5}},{...y[1],badge:{...R,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...R,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...R,badgeType:"indicator",count:12}}]},{...y[3],items:[{label:"General"},{label:"Privacy",badge:{...R,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...R,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...R,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...y[4],badge:{...R,badgeType:"brand",count:8}}],Me=[{...j,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...j,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...j,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},Xa={...b},Za={...b,onClick:()=>{console.log("Header clicked")}},g={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:z}},ae={tags:["skip-ci"],args:{...g.args,collapsible:!0}},ne={tags:["skip-ci"],args:{...g.args,headerConfig:b}},se={tags:["skip-ci"],args:{...g.args,headerConfig:{...b,isCompact:!0}}},ie={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:Ie,collapsible:!0}},oe={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:Ie,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=B(a);await n("Navigate through navigation when all menus are closed",async()=>{C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),C(e,"General"),C(e,"Privacy"),C(e,"Advanced");const t=v(e,"Home");t==null||t.focus(),A(t),await c.tab();const i=v(e,"Dashboard");A(i),k(e,"Overview"),k(e,"Reports"),k(e,"Analytics"),await c.tab();const o=v(e,"Settings");A(o),k(e,"General"),k(e,"Privacy"),k(e,"Advanced"),await c.tab();const l=v(e,"Profile");A(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=v(e,"Dashboard");await c.click(t),P(e,"Overview"),P(e,"Reports"),P(e,"Analytics"),await c.tab();const i=v(e,"Overview");A(i),await c.tab();const o=v(e,"Reports");A(o),await c.tab();const l=v(e,"Analytics");A(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=v(e,"Dashboard");await c.click(t),C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),await c.tab();const i=v(e,"Settings");A(i),k(e,"Overview"),k(e,"Reports"),k(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=v(e,"Settings");await c.click(t),P(e,"General"),P(e,"Privacy"),P(e,"Advanced"),C(e,"Security"),C(e,"API Keys"),await c.tab();const i=v(e,"General");A(i),await c.tab();const o=v(e,"Privacy");A(o),await c.tab();const l=v(e,"Advanced");A(l),k(e,"Security"),k(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=v(e,"Advanced");await c.click(t),P(e,"Security"),P(e,"API Keys"),await c.tab();const i=v(e,"Security");A(i),await c.tab();const o=v(e,"API Keys");A(o)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=v(e,"Advanced");await c.click(t),C(e,"Security"),C(e,"API Keys"),await c.tab();const i=v(e,"Profile");A(i),k(e,"Security"),k(e,"API Keys")})}},re={args:{...g.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=B(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=Q(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},ce={args:{...g.args,headerConfig:Xa,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=B(a);await n("Verify header is a link when link prop is provided",async()=>{const t=Q(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=Q(e);t==null||t.focus(),r(t).toHaveFocus()})}},le={args:{...g.args,headerConfig:{...Za,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=B(a);await n("Verify header is clickable button when onClick is provided",async()=>{const t=Q(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=Q(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(ua),await c.keyboard(pa)})}},de={args:{...g.args,headerConfig:b,items:z,collapsible:!0,isCollapsed:!0},decorators:[aa()],play:async({canvasElement:a,step:n})=>{const{sideNav:e}=B(a);await n("Verify tooltips appear when tabbing to navigation items",async()=>{const t=ia(e,0);r(t).not.toBeNull(),t==null||t.focus(),await we();const i=q(document.body).queryByRole("tooltip",{name:"Home"});r(i).not.toBeNull(),r(i).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await we();const t=q(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await we();const t=q(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},ve={args:{...g.args,headerConfig:b,items:Ie,collapsible:!0,isCollapsed:!0},decorators:[aa()],play:async({canvasElement:a,step:n})=>{const{sideNav:e}=B(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{ya(a);const t=ia(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await we();const i=q(document.body).queryByRole("tooltip",{name:"Dashboard"});r(i).not.toBeNull(),r(i).toHaveTextContent("Dashboard")})}},ue={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:Ja,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:e}=B(a);await n("Verify Overview nested item is active",async()=>{M(e,"overview"),m(e,"reports")})}},pe={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:$a,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:e}=B(a);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{M(e,"security"),m(e,"advanced"),m(e,"settings"),m(e,"api-keys")})}},me={tags:["skip-ci"],args:{...g.args,headerConfig:b,collapsible:!0},decorators:[na(ra,"security")],play:async({canvasElement:a,step:n})=>{const{canvas:e}=B(a);await n("Verify only Security is active, not parent NavMenus",async()=>{M(e,"security"),m(e,"advanced"),m(e,"settings"),m(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const t=e.getByRole("navigation"),i=v(t,"API Keys");r(i).not.toBeNull(),await c.click(i),m(e,"security"),M(e,"api-keys"),m(e,"advanced"),m(e,"settings")})}},ye={tags:["skip-ci"],args:{...g.args,headerConfig:b,collapsible:!0},decorators:[na(ra,"overview")],play:async({canvasElement:a,step:n})=>{const{canvas:e}=B(a);await n("Verify Overview leaf is active initially",async()=>{M(e,"overview"),m(e,"reports"),m(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const t=e.getByRole("navigation"),i=v(t,"Reports");r(i).not.toBeNull(),await c.click(i),m(e,"overview"),M(e,"reports"),m(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const t=e.getByRole("navigation"),i=v(t,"Settings");r(i).not.toBeNull(),await c.click(i);const o=v(t,"Advanced");r(o).not.toBeNull(),await c.click(o),m(e,"overview"),m(e,"reports"),m(e,"security"),m(e,"api-keys"),M(e,"advanced")})}},ge={args:{...g.args,headerConfig:b,items:z,activeItem:"home",collapsible:!0},decorators:[Ga(z)],play:async({canvasElement:a,step:n})=>{const{canvas:e}=B(a);await n("Verify Home has active class initially",async()=>{M(e,"home"),m(e,"dashboard"),m(e,"analytics"),m(e,"settings"),m(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const t=e.getByRole("navigation"),i=v(t,"Dashboard");r(i).not.toBeNull(),await c.click(i),m(e,"home"),M(e,"dashboard"),m(e,"analytics"),m(e,"settings"),m(e,"profile")})}},Ne={args:{...g.args,headerConfig:b,items:z,footerItems:Me,collapsible:!0}},fe={args:{...g.args,headerConfig:b,items:z,footerItems:Me,collapsible:!1}},be={args:{...g.args,headerConfig:b,items:Ie,footerItems:Me,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=B(a);await n("Verify footer items are rendered",async()=>{const t=O(e,"Settings");r(t).not.toBeNull();const i=O(e,"Help & Support");r(i).not.toBeNull();const o=O(e,"Account");r(o).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const t=O(e,"Account");await c.click(t);const i=O(e,"Preferences");r(i).not.toBeNull();const o=O(e,"Logout");r(o).not.toBeNull()})}},he={tags:["skip-ci"],args:{...g.args,headerConfig:b,items:Qa,collapsible:!0}},en=[y[0],{...y[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...y[2],hasDivider:!0},{...j,id:"reports",label:"Reports",icon:"info"},{...y[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},y[4]],xe={args:{...g.args,headerConfig:b,items:en,collapsible:!0}};var qe,Ke,Ve;g.parameters={...g.parameters,docs:{...(qe=g.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ve=(Ke=g.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}};var Le,We,Oe;ae.parameters={...ae.parameters,docs:{...(Le=ae.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Oe=(We=ae.parameters)==null?void 0:We.docs)==null?void 0:Oe.source}}};var Ge,ze,Ye;ne.parameters={...ne.parameters,docs:{...(Ge=ne.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ye=(ze=ne.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};var Ue,$e,Je;se.parameters={...se.parameters,docs:{...(Ue=se.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(Je=($e=se.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;ie.parameters={...ie.parameters,docs:{...(Qe=ie.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Ze=(Xe=ie.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;oe.parameters={...oe.parameters,docs:{...(et=oe.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=oe.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,st,it;re.parameters={...re.parameters,docs:{...(nt=re.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(it=(st=re.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ot,rt,ct;ce.parameters={...ce.parameters,docs:{...(ot=ce.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(ct=(rt=ce.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var lt,dt,vt;le.parameters={...le.parameters,docs:{...(lt=le.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(vt=(dt=le.parameters)==null?void 0:dt.docs)==null?void 0:vt.source}}};var ut,pt,mt;de.parameters={...de.parameters,docs:{...(ut=de.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(mt=(pt=de.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,gt,Nt;ve.parameters={...ve.parameters,docs:{...(yt=ve.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(Nt=(gt=ve.parameters)==null?void 0:gt.docs)==null?void 0:Nt.source}}};var ft,bt,ht;ue.parameters={...ue.parameters,docs:{...(ft=ue.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(ht=(bt=ue.parameters)==null?void 0:bt.docs)==null?void 0:ht.source}}};var xt,wt,Et;pe.parameters={...pe.parameters,docs:{...(xt=pe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Et=(wt=pe.parameters)==null?void 0:wt.docs)==null?void 0:Et.source}}};var At,Tt,It;me.parameters={...me.parameters,docs:{...(At=me.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(It=(Tt=me.parameters)==null?void 0:Tt.docs)==null?void 0:It.source}}};var kt,Ct,St;ye.parameters={...ye.parameters,docs:{...(kt=ye.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(St=(Ct=ye.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var Bt,Ht,Dt;ge.parameters={...ge.parameters,docs:{...(Bt=ge.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Dt=(Ht=ge.parameters)==null?void 0:Ht.docs)==null?void 0:Dt.source}}};var _t,jt,Mt;Ne.parameters={...Ne.parameters,docs:{...(_t=Ne.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Mt=(jt=Ne.parameters)==null?void 0:jt.docs)==null?void 0:Mt.source}}};var Ft,Pt,Rt;fe.parameters={...fe.parameters,docs:{...(Ft=fe.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Rt=(Pt=fe.parameters)==null?void 0:Pt.docs)==null?void 0:Rt.source}}};var qt,Kt,Vt;be.parameters={...be.parameters,docs:{...(qt=be.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Vt=(Kt=be.parameters)==null?void 0:Kt.docs)==null?void 0:Vt.source}}};var Lt,Wt,Ot;he.parameters={...he.parameters,docs:{...(Lt=he.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Ot=(Wt=he.parameters)==null?void 0:Wt.docs)==null?void 0:Ot.source}}};var Gt,zt,Yt;xe.parameters={...xe.parameters,docs:{...(Gt=xe.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Yt=(zt=xe.parameters)==null?void 0:zt.docs)==null?void 0:Yt.source}}};const An=["Default","Collapsible","HeaderWithVersion","HeaderCompact","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{ge as ActiveItemState,de as CollapsedTooltip,ve as CollapsedTooltipWithNested,ae as Collapsible,g as Default,fe as FooterItemsOnly,be as FooterItemsWithNested,re as HeaderClickability,se as HeaderCompact,ce as HeaderWithLink,le as HeaderWithOnClick,ne as HeaderWithVersion,oe as KeyboardNavigation,ye as NestedItemActiveOnClick,ue as NestedItemActivePreselected,me as NestedNavMenuActiveOnClick,pe as NestedNavMenuActivePreselected,he as WithBadges,xe as WithDividers,Ne as WithFooterItems,ie as WithNestedMenus,An as __namedExportsOrder,En as default};
