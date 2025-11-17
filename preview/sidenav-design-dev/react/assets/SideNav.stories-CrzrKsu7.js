import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Rt,a as Kt}from"./keyboard-test.constants-C9whQEGR.js";import{w as F,e as r,a as Vt,u as c}from"./index-DCXJbAaW.js";import{d as Ee,B as Ot}from"./BaseSideNav-BscAXuIq.js";import{S as fe,E as be,b as Be,c as Wt,d as Lt}from"./keyboard.constants-ep-ZHn_7.js";import{r as w}from"./index-G8LIXM5I.js";import{u as kt}from"./useActiveKeyboard-BPEscCvd.js";import{D as G}from"./Divider-BPBlxbj_.js";import{B as Bt}from"./Badge-yqZBktoR.js";import{I as _t}from"./Icon-DjEid3Hw.js";import{T as zt}from"./Tooltip-CUwyg_K4.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const Gt="_navItemContainer_1g6vq_3",Yt="_navItem_1g6vq_3",Ut="_navItemLeft_1g6vq_73",$t="_navItemRight_1g6vq_78",Y={navItemContainer:Gt,navItem:Yt,navItemLeft:Ut,navItemRight:$t},Jt="_navMenuContainer_6s13r_3",Qt="_navMenu_6s13r_3",Xt="_menuContentLeft_6s13r_47",Zt="_menuContentRight_6s13r_52",en="_menuIcon_6s13r_93",tn="_nestedMenu_6s13r_101",nn="_icon_6s13r_116",P={navMenuContainer:Jt,navMenu:Qt,menuContentLeft:Xt,menuContentRight:Zt,menuIcon:en,nestedMenu:tn,icon:nn};function Te({link:n,label:o,tabIndex:e,onKeyDown:t,onFocus:s,onBlur:i,onClick:l,children:u,styleType:A="item"}){const b=A==="menu"?P:Y,g={className:A==="menu"?b.navMenu:b.navItem,tabIndex:e,"aria-label":o,...s&&{onFocus:s},...i&&{onBlur:i},...l&&{onClick:l},...t&&{onKeyDown:t}};return n?a.jsx("a",{href:n,...g,children:u}):a.jsx("span",{...g,children:u})}Te.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ie({icon:n,showIcon:o=!0,label:e,collapsed:t,isNested:s,styleType:i="item"}){const l=s?16:t?24:20,u=i==="menu"?P:Y;return a.jsxs(a.Fragment,{children:[o&&n&&a.jsx(_t,{name:n,className:u.icon,size:l}),t?null:a.jsx("span",{children:e})]})}Ie.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ce({label:n,collapsed:o,children:e}){return o&&n?a.jsx(zt,{label:n,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}Ce.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Dt(n){return n===!1?-1:0}function jt({onEnterOrSpace:n,onEscape:o,includeArrowKeys:e=!1,includeEscape:t=!1}={}){const s=w.useCallback(u=>{[fe,be].includes(u.key)&&(u.preventDefault(),n==null||n()),u.key===Be&&t&&(u.preventDefault(),o==null||o())},[n,o,t]),i=[fe,be,...t?[Be]:[],...e?[Wt,Lt]:[]],{onKeyDown:l}=kt({onKeyDown:s},{interactiveKeyCodes:i});return{onKeyDown:l}}const Ne=w.forwardRef(({id:n,icon:o,showIcon:e=!0,onClick:t,label:s,collapsed:i,link:l,isNested:u,parentMenuOpen:A,appearance:b="brand",active:M,badge:g,...v},S)=>{const B=w.useRef(null),{onKeyDown:R}=jt({onEnterOrSpace:t});function K(){var f;(f=B.current)==null||f.setAttribute("data-focused","true")}function V(){var f;(f=B.current)==null||f.removeAttribute("data-focused")}const H=Dt(A),O=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:Y.navItemLeft,children:a.jsx(Ie,{icon:o,showIcon:e,label:s,collapsed:i,isNested:u,styleType:"item"})}),a.jsx("div",{className:Y.navItemRight,children:g&&a.jsx(Bt,{badgeType:g.badgeType,size:g.size,content:g.content,count:g.count})})]}),W=a.jsx("div",{id:n,className:Y.navItemContainer,"data-collapsed":i,"data-appearance":b,"data-nested":u,"data-active":M,onClick:t,ref:f=>{B.current=f,typeof S=="function"?S(f):S&&"current"in S&&(S.current=f)},...v,children:a.jsx(Te,{link:l,label:s,tabIndex:H,onKeyDown:l?void 0:R,onFocus:K,onBlur:V,styleType:"item",children:O})});return a.jsx(Ce,{label:s,collapsed:i,children:W})});Ne.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Ae=w.forwardRef(({icon:n,showIcon:o=!0,onClick:e,label:t,collapsed:s,link:i,items:l=[],open:u,showMenuIcon:A=!0,isNested:b,parentMenuOpen:M,appearance:g="brand",badge:v,showDivider:S,...B},R)=>{const[K,V]=w.useState(!1),H=u!==void 0?u:K,O=u!==void 0;function W(){O||V(!K),e&&e()}function f(){H&&!O&&V(!1)}const{onKeyDown:$}=jt({onEnterOrSpace:W,onEscape:f,includeArrowKeys:!0,includeEscape:!0}),xe=l.length,J=!s&&xe,Q=H,X=Dt(M),N=J&&A?a.jsx(_t,{name:"arrow-chevron-right",className:P.menuIcon,"data-open":H}):null,p=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:P.menuContentLeft,children:a.jsx(Ie,{icon:n,showIcon:o,label:t,collapsed:s,isNested:b,styleType:"menu"})}),a.jsxs("div",{className:P.menuContentRight,children:[v&&a.jsx(Bt,{badgeType:v.badgeType,size:v.size,content:v.content,count:v.count}),N]})]}),Se=a.jsxs("li",{className:P.navMenuContainer,"data-collapsed":s,"data-appearance":g,"data-nested":b,"data-open":H,ref:R,...B,children:[a.jsx(Te,{link:i,label:t,tabIndex:X,onClick:W,onKeyDown:$,styleType:"menu",children:p}),J&&a.jsx("ul",{className:P.nestedMenu,"data-open":H,children:l.map(y=>{var ke;return(ke=y.items)!=null&&ke.length?a.jsx(Ae,{label:y.label,icon:y.icon,showIcon:y.showIcon,collapsed:s,link:y.link,onClick:y.onClick,items:y.items||[],showMenuIcon:A,isNested:!0,parentMenuOpen:Q,appearance:g,badge:y.badge},y.id||y.label):a.jsxs(w.Fragment,{children:[a.jsx("li",{children:a.jsx(Ne,{label:y.label,icon:y.icon,showIcon:y.showIcon,collapsed:s,link:y.link,onClick:y.onClick,isNested:!0,parentMenuOpen:Q,appearance:g,badge:y.badge})}),y.showDivider&&a.jsx(G,{appearance:Ee[g]})]},y.id||y.label)})})]}),Z=a.jsx(Ce,{label:t,collapsed:s,children:Se});return a.jsxs(a.Fragment,{children:[Z,S&&a.jsx(G,{appearance:Ee[g]})]})});Ae.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},showMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const an="_sideNavHeaderContainer_1nucm_29",on="_sideNavHeader_1nucm_29",sn="_sideNavHeaderTitleContainer_1nucm_66",rn="_sideNavHeaderTitle_1nucm_66",cn="_sideNavHeaderIdentifier_1nucm_104",ln="_sideNavHeaderVersion_1nucm_145",dn="_sideNavBody_1nucm_174",un="_sideNavFooterContainer_1nucm_197",pn="_sideNavFooter_1nucm_197",mn="_sideNavFooterItems_1nucm_210",vn="_collapsibleSection_1nucm_227",T={sideNavHeaderContainer:an,sideNavHeader:on,sideNavHeaderTitleContainer:sn,sideNavHeaderTitle:rn,sideNavHeaderIdentifier:cn,sideNavHeaderVersion:ln,sideNavBody:dn,sideNavFooterContainer:un,sideNavFooter:pn,sideNavFooterItems:mn,collapsibleSection:vn},yn=300,he=w.forwardRef(({size:n="m",collapsible:o,children:e,headerConfig:t,items:s,footerItems:i,collapsed:l,defaultCollapsed:u=!1,onCollapsedChange:A,appearance:b="brand",activeItem:M},g)=>{const[v,S]=w.useState(l??u),[B,R]=w.useState(!0);w.useEffect(()=>{l!==void 0&&S(l)},[l]),w.useEffect(()=>{if(v)R(!1);else{const N=setTimeout(()=>{R(!0)},yn);return()=>clearTimeout(N)}},[v]);const K=()=>{const N=!v;l===void 0&&S(N),A==null||A(N)},V=v?"arrow-double-right":"arrow-double-left",H=Ee[b],O=N=>{[fe,be].includes(N.key)&&(N.preventDefault(),t!=null&&t.onClick&&t.onClick())},{onKeyDown:W}=kt({onKeyDown:O},{interactiveKeyCodes:[fe,be]}),f=a.jsxs("div",{className:T.sideNavHeaderTitle,children:[a.jsx("div",{className:T.sideNavHeaderIdentifier,children:t==null?void 0:t.identifier}),v?"":a.jsx("h1",{"data-hidden":!B,children:t==null?void 0:t.title})]}),$=t==null?void 0:t.ariaLabel,xe=a.jsx("a",{href:(t==null?void 0:t.link)??"",className:T.sideNavHeaderTitleContainer,onClick:t==null?void 0:t.onClick,"aria-label":$,children:f}),J=a.jsx("div",{className:T.sideNavHeaderTitleContainer,tabIndex:0,onClick:t==null?void 0:t.onClick,onKeyDown:W,role:"button","aria-label":$,children:f}),Q=t!=null&&t.link?xe:t!=null&&t.onClick?J:a.jsx("div",{className:T.sideNavHeaderTitleContainer,children:f});function X(N){return N!=null&&N.length?a.jsx("ul",{children:N.map(p=>{var Z;return((Z=p.items)==null?void 0:Z.length)?a.jsx(Ae,{badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,items:p.items||[],appearance:b,showDivider:p.showDivider},p.id):a.jsxs(w.Fragment,{children:[a.jsx("li",{children:a.jsx(Ne,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,appearance:b,active:p.id===M&&!!M})}),p.showDivider&&a.jsx(G,{appearance:H})]},p.id)})}):null}return a.jsx(Ot,{ref:g,size:n,collapsible:o,collapsed:v,appearance:b,style:{minHeight:"100vh"},header:a.jsxs("div",{className:T.sideNavHeaderContainer,children:[a.jsxs("div",{className:T.sideNavHeader,"data-collapsed":v,"data-appearance":b,children:[Q,a.jsx("div",{className:T.sideNavHeaderVersion,"data-hidden":!B,children:a.jsx("span",{children:t==null?void 0:t.version})})]}),a.jsx(G,{appearance:H})]}),body:a.jsx("div",{className:T.sideNavBody,children:X(s)}),footer:((i==null?void 0:i.length)||o)&&a.jsxs("div",{className:T.sideNavFooterContainer,children:[(i==null?void 0:i.length)&&a.jsx("div",{className:T.sideNavFooterItems,children:X(i)}),a.jsx(G,{appearance:H}),a.jsx("div",{className:T.sideNavFooter,children:o&&a.jsx("div",{className:T.collapsibleSection,children:a.jsx(Ne,{id:"collapse-button",icon:V,showIcon:!0,collapsed:v,onClick:K,label:v?"Ouvrir le menu":"Réduire le menu",appearance:b,role:"button"})})})]}),children:e})});he.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};function Ft(){return function(o,e){const[t,s]=w.useState(e.args.collapsed??!0);return a.jsx("div",{children:a.jsx(o,{args:{...e.args,collapsed:t,onCollapsedChange:s}})})}}function gn(n){return function(e,t){const[s,i]=w.useState(t.args.activeItem),l=n.map(u=>({...u,onClick:()=>i(u.id),link:void 0}));return a.jsx("div",{children:a.jsx(e,{args:{...t.args,items:l,activeItem:s}})})}}function qt(n){if(!n)return null;const o=Array.from(n.children);for(const i of o)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const e=n.querySelector("a");return e||Array.from(n.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function d(n,o,e){const t=e?n.querySelector(e):n;if(!t)return null;const s=e?F(t):F(n),i=s.queryByRole("link",{name:o});if(i)return i;const l=s.queryByText(o);if(l){const u=l.closest("li");return qt(u)}return null}function Mt(n,o){const e=n.querySelector('[class*="sideNavBody"]');if(!e)return null;const s=Array.from(e.querySelectorAll("li"))[o];return qt(s)}function L(n,o){return d(n,o,'[class*="sideNavFooterItems"]')}function U(n,o="MA"){var i;return(i=F(n).getByText(o).parentElement)==null?void 0:i.parentElement}function fn(n,o){return n.querySelector(`#${o}`)}function bn(n){return n.getAttribute("data-active")==="true"}function h(n){r(n).not.toBeNull(),r(n).toHaveFocus()}function I(n,o){const e=d(n,o);e&&r(e).not.toHaveFocus()}function C(n,o){const e=d(n,o);e&&r(e).toHaveAttribute("tabindex","-1")}function _(n,o){const e=d(n,o);e&&r(e).toHaveAttribute("tabindex","0")}async function Pt(n,o,e){await Vt(()=>{const t=n.getByRole("navigation"),s=fn(t,o);r(s).not.toBeNull(),r(bn(s)).toBe(e)})}function _e(n,o){return Pt(n,o,!0)}function D(n,o){return Pt(n,o,!1)}function q(n){const o=F(n),e=o.getByRole("navigation");return{canvas:o,sideNav:e}}function ge(n=200){return new Promise(o=>setTimeout(o,n))}const zn={title:"SideNav",id:"SideNav",component:he,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:n=>a.jsx(he,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,onCollapsedChange:n.onCollapsedChange,children:Nn})},Nn=a.jsxs("div",{style:{padding:"2rem"},children:[a.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),k={showIcon:!0},j={size:"m",content:"number"},x=[{...k,id:"home",label:"Home",icon:"home"},{...k,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...k,id:"analytics",label:"Analytics",icon:"analytics"},{...k,id:"settings",label:"Settings",icon:"settings"},{...k,id:"profile",label:"Profile",icon:"user",link:"/profile"}],z=x,we=[x[0],{...x[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...x[3],items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys"}]}]},x[4]],hn=[{...x[0],badge:{...j,badgeType:"indicator",count:5}},{...x[1],badge:{...j,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...j,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...j,badgeType:"indicator",count:12}}]},{...x[3],items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy",badge:{...j,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...j,badgeType:"indicator",count:7},items:[{label:"Security",icon:"security",badge:{...j,badgeType:"indicator",count:99}},{label:"API Keys",icon:"api-keys"}]}]},{...x[4],badge:{...j,badgeType:"brand",count:8}}],He=[{...k,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...k,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...k,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],E={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},wn={...E},xn={...E,onClick:()=>{console.log("Header clicked")}},m={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:z}},ee={args:{...m.args,collapsible:!0}},te={args:{...m.args,headerConfig:E}},ne={args:{...m.args,headerConfig:E,items:we,collapsible:!0}},ae={args:{...m.args,headerConfig:E,items:we,collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=q(n);await o("Navigate through navigation when all menus are closed",async()=>{C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),C(e,"General"),C(e,"Privacy"),C(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),h(t),await c.tab();const s=d(e,"Dashboard");h(s),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics"),await c.tab();const i=d(e,"Settings");h(i),I(e,"General"),I(e,"Privacy"),I(e,"Advanced"),await c.tab();const l=d(e,"Profile");h(l)}),await o("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await c.click(t),_(e,"Overview"),_(e,"Reports"),_(e,"Analytics"),await c.tab();const s=d(e,"Overview");h(s),await c.tab();const i=d(e,"Reports");h(i),await c.tab();const l=d(e,"Analytics");h(l)}),await o("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await c.click(t),C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),await c.tab();const s=d(e,"Settings");h(s),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics")}),await o("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await c.click(t),_(e,"General"),_(e,"Privacy"),_(e,"Advanced"),C(e,"Security"),C(e,"API Keys"),await c.tab();const s=d(e,"General");h(s),await c.tab();const i=d(e,"Privacy");h(i),await c.tab();const l=d(e,"Advanced");h(l),I(e,"Security"),I(e,"API Keys")}),await o("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await c.click(t),_(e,"Security"),_(e,"API Keys"),await c.tab();const s=d(e,"Security");h(s),await c.tab();const i=d(e,"API Keys");h(i)}),await o("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await c.click(t),C(e,"Security"),C(e,"API Keys"),await c.tab();const s=d(e,"Profile");h(s),I(e,"Security"),I(e,"API Keys")})}},oe={args:{...m.args,headerConfig:{...E,link:null},collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=q(n);await o("Verify header is not clickable when no link or onClick is provided",async()=>{const t=U(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},se={args:{...m.args,headerConfig:wn,collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=q(n);await o("Verify header is a link when link prop is provided",async()=>{const t=U(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await o("Verify header is keyboard navigable",async()=>{const t=U(e);t==null||t.focus(),r(t).toHaveFocus()})}},ie={args:{...m.args,headerConfig:{...xn,link:null},collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=q(n);await o("Verify header is clickable button when onClick is provided",async()=>{const t=U(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await o("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=U(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(Rt),await c.keyboard(Kt)})}},re={args:{...m.args,headerConfig:E,items:z,collapsible:!0,collapsed:!0},decorators:[Ft()],play:async({canvasElement:n,step:o})=>{const{sideNav:e}=q(n);await o("Verify tooltips appear when tabbing to navigation items",async()=>{const t=Mt(e,0);r(t).not.toBeNull(),t==null||t.focus(),await ge();const s=F(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await o("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await ge();const t=F(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await o("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await ge();const t=F(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},ce={args:{...m.args,headerConfig:E,items:we,collapsible:!0,collapsed:!0},decorators:[Ft()],play:async({canvasElement:n,step:o})=>{const{sideNav:e}=q(n);await o("Verify tooltips appear when tabbing to menu items",async()=>{const t=Mt(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await ge();const s=F(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},le={args:{...m.args,headerConfig:E,items:z,activeItem:"home",collapsible:!0},decorators:[gn(z)],play:async({canvasElement:n,step:o})=>{const{canvas:e}=q(n);await o("Verify Home has active class initially",async()=>{_e(e,"home"),D(e,"dashboard"),D(e,"analytics"),D(e,"settings"),D(e,"profile")}),await o("Change active item to Dashboard and verify active class",async()=>{const t=e.getByRole("navigation"),s=d(t,"Dashboard");r(s).not.toBeNull(),await c.click(s),D(e,"home"),_e(e,"dashboard"),D(e,"analytics"),D(e,"settings"),D(e,"profile")})}},En=a.jsxs("div",{style:{padding:"2rem"},children:[a.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."})]}),de={args:{...m.args,collapsible:!0},render:n=>a.jsx(he,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,children:En})},ue={args:{...m.args,headerConfig:E,items:z,footerItems:He,collapsible:!0}},pe={args:{...m.args,headerConfig:E,items:z,footerItems:He,collapsible:!1}},me={args:{...m.args,headerConfig:E,items:we,footerItems:He,collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=q(n);await o("Verify footer items are rendered",async()=>{const t=L(e,"Settings");r(t).not.toBeNull();const s=L(e,"Help & Support");r(s).not.toBeNull();const i=L(e,"Account");r(i).not.toBeNull()}),await o("Open Account menu in footer and verify nested items",async()=>{const t=L(e,"Account");await c.click(t);const s=L(e,"Preferences");r(s).not.toBeNull();const i=L(e,"Logout");r(i).not.toBeNull()})}},ve={args:{...m.args,headerConfig:E,items:hn,collapsible:!0}},Tn=[x[0],{...x[1],items:[{label:"Overview"},{label:"Reports",showDivider:!0},{label:"Analytics",icon:"analytics"}]},{...x[2],showDivider:!0},{...k,id:"reports",label:"Reports",icon:"info"},{...x[3],showDivider:!0,items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy",showDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",showDivider:!0,items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys",showDivider:!0},{label:"Integrations",icon:"integrations"}]}]},x[4]],ye={args:{...m.args,headerConfig:E,items:Tn,collapsible:!0}};var De,je,Fe;m.parameters={...m.parameters,docs:{...(De=m.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(Fe=(je=m.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var qe,Me,Pe;ee.parameters={...ee.parameters,docs:{...(qe=ee.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Le=(We=ne.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var ze,Ge,Ye;ae.parameters={...ae.parameters,docs:{...(ze=ae.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ye=(Ge=ae.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var Ue,$e,Je;oe.parameters={...oe.parameters,docs:{...(Ue=oe.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items} footerItems={args.footerItems} collapsed={args.collapsed} activeItem={args.activeItem}>
      {SimplePageContent}
    </SideNav>
}`,...(vt=(mt=de.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var yt,gt,ft;ue.parameters={...ue.parameters,docs:{...(yt=ue.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(ft=(gt=ue.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};var bt,Nt,ht;pe.parameters={...pe.parameters,docs:{...(bt=pe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(ht=(Nt=pe.parameters)==null?void 0:Nt.docs)==null?void 0:ht.source}}};var wt,xt,Et;me.parameters={...me.parameters,docs:{...(wt=me.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Et=(xt=me.parameters)==null?void 0:xt.docs)==null?void 0:Et.source}}};var Tt,It,Ct;ve.parameters={...ve.parameters,docs:{...(Tt=ve.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Ct=(It=ve.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};var At,Ht,St;ye.parameters={...ye.parameters,docs:{...(At=ye.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(St=(Ht=ye.parameters)==null?void 0:Ht.docs)==null?void 0:St.source}}};const Gn=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","ScrollBar","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{le as ActiveItemState,re as CollapsedTooltip,ce as CollapsedTooltipWithNested,ee as Collapsible,m as Default,pe as FooterItemsOnly,me as FooterItemsWithNested,oe as HeaderClickability,se as HeaderWithLink,ie as HeaderWithOnClick,te as HeaderWithVersion,ae as KeyboardNavigation,de as ScrollBar,ve as WithBadges,ye as WithDividers,ue as WithFooterItems,ne as WithNestedMenus,Gn as __namedExportsOrder,zn as default};
