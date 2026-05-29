import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Pt,a as Rt}from"./keyboard-test.constants-By8W48aj.js";import{w as M,e as r,a as Kt,u as c}from"./index-4rjIhT2C.js";import{f as Vt}from"./testing.utils-mIZIUNbM.js";import{g as At,B as Ot}from"./BaseSideNav-DI_4Hs5-.js";import{S as ye,E as ge,c as Be,b as Wt,d as Lt}from"./keyboard.constants-BverKK8B.js";import{r as E}from"./index-G8LIXM5I.js";import{u as Ht}from"./useActiveKeyboard-DaOmFJe_.js";import{D as $}from"./Divider-BMotkXeQ.js";import{I as Ee,B as kt}from"./Badge-C3W4NyCk.js";import{I as St}from"./Icon-Bc7wfgCv.js";import{T as Gt}from"./Tooltip-BDlBB6rF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const zt="_navItemContainer_2ks0l_1",Yt="_navItemLeft_2ks0l_42",Ut="_navItem_2ks0l_1",$t="_navItemRight_2ks0l_57",z={navItemContainer:zt,navItemLeft:Yt,navItem:Ut,navItemRight:$t},Jt="_navMenuContainer_1f6a4_1",Qt="_navMenu_1f6a4_1",Xt="_menuContentLeft_1f6a4_31",Zt="_menuContentRight_1f6a4_36",ea="_menuIcon_1f6a4_80",ta="_nestedMenu_1f6a4_88",aa="_icon_1f6a4_103",P={navMenuContainer:Jt,navMenu:Qt,menuContentLeft:Xt,menuContentRight:Zt,menuIcon:ea,nestedMenu:ta,icon:aa};function Te({link:a,label:n,tabIndex:e,onKeyDown:t,onFocus:o,onBlur:i,onClick:l,children:d,styleType:A="item"}){const g=A==="menu"?P:z,y={className:A==="menu"?g.navMenu:g.navItem,tabIndex:e,"aria-label":n,...o&&{onFocus:o},...i&&{onBlur:i},...l&&{onClick:l},...t&&{onKeyDown:t}};return a?s.jsx("a",{href:a,...y,children:d}):s.jsx("span",{...y,children:d})}Te.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function na(a=!1,n=!1){return a?Ee.s:n?Ee.l:Ee.m}function Ie({icon:a,showIcon:n=!0,label:e,collapsed:t,isNested:o,styleType:i="item"}){const l=na(o,t),d=i==="menu"?P:z;return s.jsxs(s.Fragment,{children:[n&&a&&s.jsx(St,{name:a,className:d.icon,size:l}),t?null:s.jsx("span",{children:e})]})}Ie.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ce({label:a,collapsed:n,children:e}){return n&&a?s.jsx(Gt,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}Ce.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Bt(a){return a===!1?-1:0}function _t({onEnterOrSpace:a,onEscape:n,includeArrowKeys:e=!1,includeEscape:t=!1}={}){const o=E.useCallback(d=>{[ye,ge].includes(d.key)&&(d.preventDefault(),a==null||a()),d.key===Be&&t&&(d.preventDefault(),n==null||n())},[a,n,t]),i=[ye,ge,...t?[Be]:[],...e?[Wt,Lt]:[]],{onKeyDown:l}=Ht({onKeyDown:o},{interactiveKeyCodes:i});return{onKeyDown:l}}const Ne=E.forwardRef(({id:a,icon:n,showIcon:e=!0,onClick:t,label:o,collapsed:i,link:l,isNested:d,parentMenuOpen:A,appearance:g="brand",active:B,badge:y,...R},p)=>{const _=E.useRef(null),{onKeyDown:K}=_t({onEnterOrSpace:t});function V(){var N;(N=_.current)==null||N.setAttribute("data-focused","true")}function O(){var N;(N=_.current)==null||N.removeAttribute("data-focused")}const W=Bt(A),H=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:z.navItemLeft,children:s.jsx(Ie,{icon:n,showIcon:e,label:o,collapsed:i,isNested:d,styleType:"item"})}),s.jsx("div",{className:z.navItemRight,children:!i&&y&&s.jsx(kt,{badgeType:y.badgeType,size:y.size,content:y.content,count:y.count})})]}),k=l?s.jsx("a",{id:a,"aria-label":o,className:z.navItemContainer,"data-collapsed":i,"data-appearance":g,"data-nested":d,href:l,children:H}):s.jsx("div",{id:a,className:z.navItemContainer,"data-collapsed":i,"data-appearance":g,"data-nested":d,"data-active":B,onClick:t,ref:N=>{_.current=N,typeof p=="function"?p(N):p&&"current"in p&&(p.current=N)},...R,children:s.jsx(Te,{label:o,tabIndex:W,onKeyDown:K,onFocus:V,onBlur:O,styleType:"item",children:H})});return s.jsx(Ce,{label:o,collapsed:i,children:k})});Ne.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Ae=E.forwardRef(({icon:a,showIcon:n=!0,onClick:e,label:t,collapsed:o,link:i,items:l=[],open:d,showMenuIcon:A=!0,isNested:g,parentMenuOpen:B,appearance:y="brand",contrast:R="high",badge:p,showDivider:_,...K},V)=>{const O=At(y,R),[W,H]=E.useState(!1),k=d!==void 0?d:W,N=d!==void 0;function L(){N||H(!W),e&&e()}function Q(){k&&!N&&H(!1)}const{onKeyDown:he}=_t({onEnterOrSpace:L,onEscape:Q,includeArrowKeys:!0,includeEscape:!0}),we=l.length,X=!o&&we,U=k,b=Bt(B),m=X&&A?s.jsx(St,{name:"arrow-chevron-right",className:P.menuIcon,"data-open":k}):null,ke=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:P.menuContentLeft,children:s.jsx(Ie,{icon:a,showIcon:n,label:t,collapsed:o,isNested:g,styleType:"menu"})}),s.jsxs("div",{className:P.menuContentRight,children:[!o&&p&&s.jsx(kt,{badgeType:p.badgeType,size:p.size,content:p.content,count:p.count}),m]})]}),Z=s.jsxs("li",{className:P.navMenuContainer,"data-collapsed":o,"data-appearance":y,"data-nested":g,"data-open":k,ref:V,...K,children:[s.jsx(Te,{link:i,label:t,tabIndex:b,onClick:L,onKeyDown:he,styleType:"menu",children:ke}),X&&s.jsx("ul",{className:P.nestedMenu,"data-open":k,children:l.map(v=>{var Se;return(Se=v.items)!=null&&Se.length?s.jsx(Ae,{label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:o,link:v.link,onClick:v.onClick,items:v.items||[],showMenuIcon:A,showDivider:v.showDivider,isNested:!0,parentMenuOpen:U,appearance:y,contrast:R,badge:v.badge},v.id||v.label):s.jsxs(E.Fragment,{children:[s.jsx("li",{children:s.jsx(Ne,{label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:o,link:v.link,onClick:v.onClick,isNested:!0,parentMenuOpen:U,appearance:y,badge:v.badge})}),v.showDivider&&s.jsx($,{appearance:O})]},v.id||v.label)})})]}),qt=s.jsx(Ce,{label:t,collapsed:o,children:Z});return s.jsxs(s.Fragment,{children:[qt,_&&s.jsx($,{appearance:O})]})});Ae.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},showMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const sa="_sideNavHeaderContainer_d9f8a_1",oa="_sideNavHeader_d9f8a_1",ia="_sideNavHeaderTitleContainer_d9f8a_38",ra="_sideNavHeaderTitle_d9f8a_38",ca="_sideNavHeaderIdentifier_d9f8a_72",la="_sideNavHeaderVersion_d9f8a_113",da="_sideNavBody_d9f8a_142",ua="_sideNavFooterContainer_d9f8a_165",pa="_sideNavFooter_d9f8a_165",ma="_sideNavFooterItems_d9f8a_178",va="_collapsibleSection_d9f8a_195",h={sideNavHeaderContainer:sa,sideNavHeader:oa,sideNavHeaderTitleContainer:ia,sideNavHeaderTitle:ra,sideNavHeaderIdentifier:ca,sideNavHeaderVersion:la,sideNavBody:da,sideNavFooterContainer:ua,sideNavFooter:pa,sideNavFooterItems:ma,collapsibleSection:va},fa=300,xe=E.forwardRef(({size:a="m",collapsible:n,children:e,headerConfig:t,items:o,footerItems:i,collapsed:l,defaultCollapsed:d=!1,onCollapsedChange:A,appearance:g="brand",contrast:B="high",activeItem:y},R)=>{const[p,_]=E.useState(l??d),[K,V]=E.useState(!0);E.useEffect(()=>{l!==void 0&&_(l)},[l]),E.useEffect(()=>{if(p)V(!1);else{const b=setTimeout(()=>{V(!0)},fa);return()=>clearTimeout(b)}},[p]);const O=()=>{const b=!p;l===void 0&&_(b),A==null||A(b)},W=p?"arrow-double-right":"arrow-double-left",H=At(g,B),k=b=>{[ye,ge].includes(b.key)&&(b.preventDefault(),t!=null&&t.onClick&&t.onClick())},{onKeyDown:N}=Ht({onKeyDown:k},{interactiveKeyCodes:[ye,ge]}),L=s.jsxs("div",{className:h.sideNavHeaderTitle,children:[s.jsx("div",{className:h.sideNavHeaderIdentifier,children:t==null?void 0:t.identifier}),p?"":s.jsx("h1",{"data-hidden":!K,children:t==null?void 0:t.title})]}),Q=t==null?void 0:t.ariaLabel,he=s.jsx("a",{href:(t==null?void 0:t.link)??"",className:h.sideNavHeaderTitleContainer,onClick:t==null?void 0:t.onClick,"aria-label":Q,children:L}),we=s.jsx("div",{className:h.sideNavHeaderTitleContainer,tabIndex:0,onClick:t==null?void 0:t.onClick,onKeyDown:N,role:"button","aria-label":Q,children:L}),X=t!=null&&t.link?he:t!=null&&t.onClick?we:s.jsx("div",{className:h.sideNavHeaderTitleContainer,children:L});function U(b){return b!=null&&b.length?s.jsx("ul",{children:b.map(m=>{var Z;return((Z=m.items)==null?void 0:Z.length)?s.jsx(Ae,{badge:m.badge,label:m.label,icon:m.icon,showIcon:m.showIcon,collapsed:p,link:m.link,onClick:m.onClick,items:m.items||[],appearance:g,contrast:B,showDivider:m.showDivider},m.id):s.jsxs(E.Fragment,{children:[s.jsx("li",{children:s.jsx(Ne,{id:m.id,badge:m.badge,label:m.label,icon:m.icon,showIcon:m.showIcon,collapsed:p,link:m.link,onClick:m.onClick,appearance:g,active:m.id===y&&!!y})}),m.showDivider&&s.jsx($,{appearance:H})]},m.id)})}):null}return s.jsx(Ot,{ref:R,size:a,collapsed:p,appearance:g,contrast:B,className:h.sideNavContainer,header:s.jsxs("div",{className:h.sideNavHeaderContainer,children:[s.jsxs("div",{className:h.sideNavHeader,"data-collapsed":p,"data-appearance":g,children:[X,s.jsx("div",{className:h.sideNavHeaderVersion,"data-hidden":!K,children:s.jsx("span",{children:t==null?void 0:t.version})})]}),s.jsx($,{appearance:H})]}),body:s.jsx("div",{className:h.sideNavBody,children:U(o)}),footer:((i==null?void 0:i.length)||n)&&s.jsxs("div",{className:h.sideNavFooterContainer,children:[(i==null?void 0:i.length)&&s.jsx("div",{className:h.sideNavFooterItems,children:U(i)}),s.jsx($,{appearance:H}),s.jsx("div",{className:h.sideNavFooter,children:n&&s.jsx("div",{className:h.collapsibleSection,children:s.jsx(Ne,{id:"collapse-button",icon:W,showIcon:!0,collapsed:p,onClick:O,label:p?"Ouvrir le menu":"Réduire le menu",appearance:g,role:"button"})})})]}),children:e})});xe.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function Dt(){return function(n,e){const[t,o]=E.useState(e.args.collapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...e.args,collapsed:t,onCollapsedChange:o}})})}}function ya(a){return function(e,t){const[o,i]=E.useState(t.args.activeItem),l=a.map(d=>({...d,onClick:()=>i(d.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...t.args,items:l,activeItem:o}})})}}function Ft(a){if(!a)return null;const n=Array.from(a.children);for(const i of n)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const e=a.querySelector("a");return e||Array.from(a.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function u(a,n,e){const t=e?a.querySelector(e):a;if(!t)return null;const o=e?M(t):M(a),i=o.queryByRole("link",{name:n});if(i)return i;const l=o.queryByText(n);if(l){const d=l.closest("li");return Ft(d)}return null}function jt(a,n){const e=a.querySelector('[class*="sideNavBody"]');if(!e)return null;const o=Array.from(e.querySelectorAll("li"))[n];return Ft(o)}function G(a,n){return u(a,n,'[class*="sideNavFooterItems"]')}function J(a,n="MA"){var i;return(i=M(a).getByText(n).parentElement)==null?void 0:i.parentElement}function ga(a,n){return a.querySelector(`#${n}`)}function Na(a){return a.dataset.active==="true"}function w(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function I(a,n){const e=u(a,n);e&&r(e).not.toHaveFocus()}function C(a,n){const e=u(a,n);e&&r(e).toHaveAttribute("tabindex","-1")}function D(a,n){const e=u(a,n);e&&r(e).toHaveAttribute("tabindex","0")}async function Mt(a,n,e){await Kt(()=>{const t=a.getByRole("navigation"),o=ga(t,n);r(o).not.toBeNull(),r(Na(o)).toBe(e)})}function _e(a,n){return Mt(a,n,!0)}function F(a,n){return Mt(a,n,!1)}function q(a){const n=M(a),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function fe(a=200){return new Promise(n=>setTimeout(n,a))}const Ga={title:"Composants/SideNav",id:"SideNav",component:xe,tags:["autodocs"],decorators:[a=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>s.jsx(xe,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,collapsed:a.collapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:ba})},ba=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),S={showIcon:!0},j={size:"m",content:"number"},x=[{...S,id:"home",label:"Home",icon:"home"},{...S,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...S,id:"analytics",label:"Analytics",icon:"analytics"},{...S,id:"settings",label:"Settings",icon:"settings"},{...S,id:"profile",label:"Profile",icon:"user",link:"/profile"}],Y=x,be=[x[0],{...x[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...x[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},x[4]],ha=[{...x[0],badge:{...j,badgeType:"indicator",count:5}},{...x[1],badge:{...j,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...j,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...j,badgeType:"indicator",count:12}}]},{...x[3],items:[{label:"General"},{label:"Privacy",badge:{...j,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...j,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...j,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...x[4],badge:{...j,badgeType:"brand",count:8}}],He=[{...S,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...S,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...S,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],T={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},wa={...T},Ea={...T,onClick:()=>{console.log("Header clicked")}},f={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:Y}},ee={tags:["skip-ci"],args:{...f.args,collapsible:!0}},te={tags:["skip-ci"],args:{...f.args,headerConfig:T}},ae={tags:["skip-ci"],args:{...f.args,headerConfig:T,items:be,collapsible:!0}},ne={tags:["skip-ci"],args:{...f.args,headerConfig:T,items:be,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=q(a);await n("Navigate through navigation when all menus are closed",async()=>{C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),C(e,"General"),C(e,"Privacy"),C(e,"Advanced");const t=u(e,"Home");t==null||t.focus(),w(t),await c.tab();const o=u(e,"Dashboard");w(o),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics"),await c.tab();const i=u(e,"Settings");w(i),I(e,"General"),I(e,"Privacy"),I(e,"Advanced"),await c.tab();const l=u(e,"Profile");w(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=u(e,"Dashboard");await c.click(t),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics"),await c.tab();const o=u(e,"Overview");w(o),await c.tab();const i=u(e,"Reports");w(i),await c.tab();const l=u(e,"Analytics");w(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=u(e,"Dashboard");await c.click(t),C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),await c.tab();const o=u(e,"Settings");w(o),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=u(e,"Settings");await c.click(t),D(e,"General"),D(e,"Privacy"),D(e,"Advanced"),C(e,"Security"),C(e,"API Keys"),await c.tab();const o=u(e,"General");w(o),await c.tab();const i=u(e,"Privacy");w(i),await c.tab();const l=u(e,"Advanced");w(l),I(e,"Security"),I(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=u(e,"Advanced");await c.click(t),D(e,"Security"),D(e,"API Keys"),await c.tab();const o=u(e,"Security");w(o),await c.tab();const i=u(e,"API Keys");w(i)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=u(e,"Advanced");await c.click(t),C(e,"Security"),C(e,"API Keys"),await c.tab();const o=u(e,"Profile");w(o),I(e,"Security"),I(e,"API Keys")})}},se={args:{...f.args,headerConfig:{...T,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=q(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=J(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},oe={args:{...f.args,headerConfig:wa,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=q(a);await n("Verify header is a link when link prop is provided",async()=>{const t=J(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=J(e);t==null||t.focus(),r(t).toHaveFocus()})}},ie={args:{...f.args,headerConfig:{...Ea,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=q(a);await n("Verify header is clickable button when onClick is provided",async()=>{const t=J(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=J(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(Pt),await c.keyboard(Rt)})}},re={args:{...f.args,headerConfig:T,items:Y,collapsible:!0,collapsed:!0},decorators:[Dt()],play:async({canvasElement:a,step:n})=>{const{sideNav:e}=q(a);await n("Verify tooltips appear when tabbing to navigation items",async()=>{const t=jt(e,0);r(t).not.toBeNull(),t==null||t.focus(),await fe();const o=M(document.body).queryByRole("tooltip",{name:"Home"});r(o).not.toBeNull(),r(o).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await fe();const t=M(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await fe();const t=M(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},ce={args:{...f.args,headerConfig:T,items:be,collapsible:!0,collapsed:!0},decorators:[Dt()],play:async({canvasElement:a,step:n})=>{const{sideNav:e}=q(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{Vt(a);const t=jt(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await fe();const o=M(document.body).queryByRole("tooltip",{name:"Dashboard"});r(o).not.toBeNull(),r(o).toHaveTextContent("Dashboard")})}},le={args:{...f.args,headerConfig:T,items:Y,activeItem:"home",collapsible:!0},decorators:[ya(Y)],play:async({canvasElement:a,step:n})=>{const{canvas:e}=q(a);await n("Verify Home has active class initially",async()=>{_e(e,"home"),F(e,"dashboard"),F(e,"analytics"),F(e,"settings"),F(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const t=e.getByRole("navigation"),o=u(t,"Dashboard");r(o).not.toBeNull(),await c.click(o),F(e,"home"),_e(e,"dashboard"),F(e,"analytics"),F(e,"settings"),F(e,"profile")})}},de={args:{...f.args,headerConfig:T,items:Y,footerItems:He,collapsible:!0}},ue={args:{...f.args,headerConfig:T,items:Y,footerItems:He,collapsible:!1}},pe={args:{...f.args,headerConfig:T,items:be,footerItems:He,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=q(a);await n("Verify footer items are rendered",async()=>{const t=G(e,"Settings");r(t).not.toBeNull();const o=G(e,"Help & Support");r(o).not.toBeNull();const i=G(e,"Account");r(i).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const t=G(e,"Account");await c.click(t);const o=G(e,"Preferences");r(o).not.toBeNull();const i=G(e,"Logout");r(i).not.toBeNull()})}},me={tags:["skip-ci"],args:{...f.args,headerConfig:T,items:ha,collapsible:!0}},xa=[x[0],{...x[1],items:[{label:"Overview"},{label:"Reports",showDivider:!0},{label:"Analytics",icon:"analytics"}]},{...x[2],showDivider:!0},{...S,id:"reports",label:"Reports",icon:"info"},{...x[3],showDivider:!0,items:[{label:"General"},{label:"Privacy",showDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",showDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",showDivider:!0},{label:"Integrations",icon:"integrations"}]}]},x[4]],ve={args:{...f.args,headerConfig:T,items:xa,collapsible:!0}};var De,Fe,je;f.parameters={...f.parameters,docs:{...(De=f.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(je=(Fe=f.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Me,qe,Pe;ee.parameters={...ee.parameters,docs:{...(Me=ee.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ve=(Ke=te.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}};var Oe,We,Le;ae.parameters={...ae.parameters,docs:{...(Oe=ae.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Le=(We=ae.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var Ge,ze,Ye;ne.parameters={...ne.parameters,docs:{...(Ge=ne.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ye=(ze=ne.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};var Ue,$e,Je;se.parameters={...se.parameters,docs:{...(Ue=se.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=oe.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;ie.parameters={...ie.parameters,docs:{...(et=ie.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=ie.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,st,ot;re.parameters={...re.parameters,docs:{...(nt=re.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(vt=(mt=de.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var ft,yt,gt;ue.parameters={...ue.parameters,docs:{...(ft=ue.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(gt=(yt=ue.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};var Nt,bt,ht;pe.parameters={...pe.parameters,docs:{...(Nt=pe.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
  tags: ["skip-ci"],
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
}`,...(Ct=(It=ve.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};const za=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{le as ActiveItemState,re as CollapsedTooltip,ce as CollapsedTooltipWithNested,ee as Collapsible,f as Default,ue as FooterItemsOnly,pe as FooterItemsWithNested,se as HeaderClickability,oe as HeaderWithLink,ie as HeaderWithOnClick,te as HeaderWithVersion,ne as KeyboardNavigation,me as WithBadges,ve as WithDividers,de as WithFooterItems,ae as WithNestedMenus,za as __namedExportsOrder,Ga as default};
