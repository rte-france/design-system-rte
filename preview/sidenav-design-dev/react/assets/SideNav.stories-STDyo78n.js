import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Mt,a as Rt}from"./keyboard-test.constants-C9whQEGR.js";import{w as h,u as l,e as r,a as Pt}from"./index-DCXJbAaW.js";import{r as H}from"./index-G8LIXM5I.js";import{d as we,B as Ot}from"./BaseSideNav-CMM6Hryd.js";import{S as Ne,E as fe,b as Ae,c as Kt,d as Vt}from"./keyboard.constants-ep-ZHn_7.js";import{u as Bt}from"./useActiveKeyboard-BPEscCvd.js";import{D as Y}from"./Divider-BPBlxbj_.js";import{c as z}from"./index-DSdvzt-y.js";import{B as At}from"./Badge-yqZBktoR.js";import{I as kt}from"./Icon-DjEid3Hw.js";import{T as Wt}from"./Tooltip-CUwyg_K4.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const Lt="_navItemContainer_6qeyg_3",zt="_neutral_6qeyg_24",Gt="_active_6qeyg_31",Yt="_nested_6qeyg_36",$t="_focused_6qeyg_52",Ut="_navItem_6qeyg_3",Jt="_navItemLeft_6qeyg_73",Qt="_navItemRight_6qeyg_78",Xt="_collapsed_6qeyg_87",A={navItemContainer:Lt,neutral:zt,active:Gt,nested:Yt,focused:$t,navItem:Ut,navItemLeft:Jt,navItemRight:Qt,collapsed:Xt},Zt="_navMenuContainer_2xpt7_3",en="_neutral_2xpt7_12",tn="_navMenu_2xpt7_3",nn="_focused_2xpt7_19",an="_nested_2xpt7_22",sn="_menuContentLeft_2xpt7_47",on="_menuContentRight_2xpt7_52",rn="_collapsed_2xpt7_75",cn="_menuIcon_2xpt7_93",ln="_menuIconOpen_2xpt7_98",dn="_nestedMenu_2xpt7_101",un="_nestedMenuOpen_2xpt7_111",pn="_icon_2xpt7_116",_={navMenuContainer:Zt,neutral:en,navMenu:tn,focused:nn,nested:an,menuContentLeft:sn,menuContentRight:on,collapsed:rn,menuIcon:cn,menuIconOpen:ln,nestedMenu:dn,nestedMenuOpen:un,icon:pn};function Ee({link:n,label:s,tabIndex:o,onKeyDown:e,onFocus:t,onBlur:i,onClick:c,children:d,styleType:S="item"}){const N=S==="menu"?_:A,b={className:S==="menu"?N.navMenu:N.navItem,tabIndex:o,"aria-label":s,...t&&{onFocus:t},...i&&{onBlur:i},...c&&{onClick:c},...e&&{onKeyDown:e}};return n?a.jsx("a",{href:n,...b,children:d}):a.jsx("span",{...b,children:d})}Ee.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Te({icon:n,showIcon:s=!0,label:o,collapsed:e,isNested:t,styleType:i="item"}){const c=t?16:e?24:20,d=i==="menu"?_:A;return a.jsxs(a.Fragment,{children:[s&&n&&a.jsx(kt,{name:n,className:d.icon,size:c}),e?null:a.jsx("span",{children:o})]})}Te.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ie({label:n,collapsed:s,children:o}){return s&&n?a.jsx(Wt,{label:n,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:o}):a.jsx(a.Fragment,{children:o})}Ie.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function jt(n){return n===!1?-1:0}function Dt({onEnterOrSpace:n,onEscape:s,includeArrowKeys:o=!1,includeEscape:e=!1}={}){const t=H.useCallback(d=>{[Ne,fe].includes(d.key)&&(d.preventDefault(),n==null||n()),d.key===Ae&&e&&(d.preventDefault(),s==null||s())},[n,s,e]),i=[Ne,fe,...e?[Ae]:[],...o?[Kt,Vt]:[]],{onKeyDown:c}=Bt({onKeyDown:t},{interactiveKeyCodes:i});return{onKeyDown:c}}const $=H.forwardRef(({id:n,icon:s,showIcon:o=!0,onClick:e,label:t,collapsed:i,link:c,isNested:d,parentMenuOpen:S,appearance:N="brand",active:R,badge:b,...v},k)=>{const D=H.useRef(null),{onKeyDown:P}=Dt({onEnterOrSpace:e});function O(){var f;(f=D.current)==null||f.classList.add(A.focused)}function K(){var f;(f=D.current)==null||f.classList.remove(A.focused)}const B=jt(S),V=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:A.navItemLeft,children:a.jsx(Te,{icon:s,showIcon:o,label:t,collapsed:i,isNested:d,styleType:"item"})}),a.jsx("div",{className:A.navItemRight,children:b&&a.jsx(At,{badgeType:b.badgeType,size:b.size,content:b.content,count:b.count})})]}),W=a.jsx("div",{id:n,className:z(A.navItemContainer,N&&A[N],i&&A.collapsed,d&&A.nested,R&&A.active),onClick:e,ref:f=>{D.current=f,typeof k=="function"?k(f):k&&"current"in k&&(k.current=f)},...v,children:a.jsx(Ee,{link:c,label:t,tabIndex:B,onKeyDown:c?void 0:P,onFocus:O,onBlur:K,styleType:"item",children:V})});return a.jsx(Ie,{label:t,collapsed:i,children:W})});$.displayName="NavItem";$.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Ce=H.forwardRef(({icon:n,showIcon:s=!0,onClick:o,label:e,collapsed:t,link:i,items:c=[],open:d,showMenuIcon:S=!0,isNested:N,parentMenuOpen:R,appearance:b="brand",badge:v,showDivider:k,...D},P)=>{const[O,K]=H.useState(!1),B=d!==void 0?d:O,V=d!==void 0;function W(){V||K(!O),o&&o()}function f(){B&&!V&&K(!1)}const{onKeyDown:Q}=Dt({onEnterOrSpace:W,onEscape:f,includeArrowKeys:!0,includeEscape:!0}),xe=c.length,X=!t&&xe,Z=B,ee=jt(R),x=X&&S?a.jsx(kt,{name:"arrow-chevron-right",className:z(_.menuIcon,B&&_.menuIconOpen)}):null,p=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:_.menuContentLeft,children:a.jsx(Te,{icon:n,showIcon:s,label:e,collapsed:t,isNested:N,styleType:"menu"})}),a.jsxs("div",{className:_.menuContentRight,children:[v&&a.jsx(At,{badgeType:v.badgeType,size:v.size,content:v.content,count:v.count}),x]})]}),Se=a.jsxs("li",{className:z(_.navMenuContainer,b&&_[b],t&&_.collapsed,B&&_.open,N&&_.nested),ref:P,...D,children:[a.jsx(Ee,{link:i,label:e,tabIndex:ee,onClick:W,onKeyDown:Q,styleType:"menu",children:p}),X&&a.jsx("ul",{className:z(_.nestedMenu,B&&_.nestedMenuOpen),children:c.map(g=>{var Be;return(Be=g.items)!=null&&Be.length?a.jsx(Ce,{label:g.label,icon:g.icon,showIcon:g.showIcon,collapsed:t,link:g.link,onClick:g.onClick,items:g.items||[],showMenuIcon:S,isNested:!0,parentMenuOpen:Z,appearance:b,badge:g.badge},g.id||g.label):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx($,{label:g.label,icon:g.icon,showIcon:g.showIcon,collapsed:t,link:g.link,onClick:g.onClick,isNested:!0,parentMenuOpen:Z,appearance:b,badge:g.badge})},g.id||g.label),g.showDivider&&a.jsx(Y,{appearance:we[b]})]})})})]}),te=a.jsx(Ie,{label:e,collapsed:t,children:Se});return a.jsxs(a.Fragment,{children:[te,k&&a.jsx(Y,{appearance:we[b]})]})});Ce.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},showMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const mn="_sideNavContainer_xo0pb_3",vn="_sideNavContent_xo0pb_8",gn="_sideNav_xo0pb_3",yn="_sideNavHeaderContainer_xo0pb_29",bn="_collapsed_xo0pb_41",Nn="_sideNavHeader_xo0pb_29",fn="_sideNavHeaderTitleContainer_xo0pb_66",hn="_sideNavHeaderTitle_xo0pb_66",xn="_neutral_xo0pb_77",wn="_sideNavHeaderIdentifier_xo0pb_104",En="_hidden_xo0pb_139",Tn="_sideNavHeaderVersion_xo0pb_145",In="_sideNavBody_xo0pb_174",Cn="_sideNavFooterContainer_xo0pb_197",_n="_sideNavFooter_xo0pb_197",Hn="_sideNavFooterItems_xo0pb_210",Sn="_collapsibleSection_xo0pb_227",y={sideNavContainer:mn,sideNavContent:vn,sideNav:gn,sideNavHeaderContainer:yn,collapsed:bn,sideNavHeader:Nn,sideNavHeaderTitleContainer:fn,sideNavHeaderTitle:hn,neutral:xn,sideNavHeaderIdentifier:wn,hidden:En,sideNavHeaderVersion:Tn,sideNavBody:In,sideNavFooterContainer:Cn,sideNavFooter:_n,sideNavFooterItems:Hn,collapsibleSection:Sn},Bn=300,U=H.forwardRef(({size:n="m",collapsible:s,children:o,headerConfig:e,items:t,footerItems:i,collapsed:c,defaultCollapsed:d=!1,onCollapsedChange:S,appearance:N="brand",activeItem:R},b)=>{const[v,k]=H.useState(c??d),[D,P]=H.useState(!0);H.useEffect(()=>{c!==void 0&&k(c)},[c]),H.useEffect(()=>{if(v)P(!1);else{const x=setTimeout(()=>{P(!0)},Bn);return()=>clearTimeout(x)}},[v]);const O=()=>{const x=!v;c===void 0&&k(x),S==null||S(x)},K=v?"arrow-double-right":"arrow-double-left",B=we[N],V=x=>{[Ne,fe].includes(x.key)&&(x.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:W}=Bt({onKeyDown:V},{interactiveKeyCodes:[Ne,fe]}),f=a.jsxs("div",{className:y.sideNavHeaderTitle,children:[a.jsx("div",{className:y.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),v?"":a.jsx("h1",{className:D?"":y.hidden,children:e==null?void 0:e.title})]}),Q=e==null?void 0:e.ariaLabel,xe=a.jsx("a",{href:(e==null?void 0:e.link)??"",className:y.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":Q,children:f}),X=a.jsx("div",{className:y.sideNavHeaderTitleContainer,tabIndex:0,onClick:e==null?void 0:e.onClick,onKeyDown:W,role:"button","aria-label":Q,children:f}),Z=e!=null&&e.link?xe:e!=null&&e.onClick?X:a.jsx("div",{className:y.sideNavHeaderTitleContainer,children:f});function ee(x){return x!=null&&x.length?a.jsx("ul",{children:x.map(p=>{var te;return((te=p.items)==null?void 0:te.length)?a.jsx(Ce,{badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,items:p.items||[],appearance:N,showDivider:p.showDivider},p.id):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx($,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,appearance:N,active:p.id===R&&!!R})},p.id),p.showDivider&&a.jsx(Y,{appearance:B})]})})}):null}return a.jsx(Ot,{ref:b,size:n,collapsible:s,collapsed:v,appearance:N,style:{minHeight:"100vh"},containerClassName:y.sideNavContainer,header:a.jsxs("div",{className:y.sideNavHeaderContainer,children:[a.jsxs("div",{className:z(y.sideNavHeader,y[N],v&&y.collapsed),children:[Z,a.jsx("div",{className:z(y.sideNavHeaderVersion,!D&&y.hidden),children:a.jsx("span",{children:e==null?void 0:e.version})})]}),a.jsx(Y,{appearance:B})]}),body:a.jsx("div",{className:y.sideNavBody,children:ee(t)}),footer:((i==null?void 0:i.length)||s)&&a.jsxs("div",{className:y.sideNavFooterContainer,children:[(i==null?void 0:i.length)&&a.jsx("div",{className:y.sideNavFooterItems,children:ee(i)}),a.jsx(Y,{appearance:B}),a.jsx("div",{className:y.sideNavFooter,children:s&&a.jsx("div",{className:y.collapsibleSection,children:a.jsx($,{id:"collapse-button",icon:K,showIcon:!0,collapsed:v,onClick:O,label:v?"Ouvrir le menu":"Réduire le menu",appearance:N,role:"button"})})})]}),children:o})});U.displayName="SideNav";U.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const oa={title:"SideNav",id:"SideNav",component:U,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:n=>a.jsx(U,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,onCollapsedChange:n.onCollapsedChange,children:An})},An=a.jsxs("div",{style:{padding:"2rem"},children:[a.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),j={showIcon:!0},q={size:"m",content:"number"},E=[{...j,id:"home",label:"Home",icon:"home"},{...j,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...j,id:"analytics",label:"Analytics",icon:"analytics"},{...j,id:"settings",label:"Settings",icon:"settings"},{...j,id:"profile",label:"Profile",icon:"user",link:"/profile"}],G=E,he=[E[0],{...E[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...E[3],items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys"}]}]},E[4]],kn=[{...E[0],badge:{...q,badgeType:"indicator",count:5}},{...E[1],badge:{...q,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...q,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...q,badgeType:"indicator",count:12}}]},{...E[3],items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy",badge:{...q,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...q,badgeType:"indicator",count:7},items:[{label:"Security",icon:"security",badge:{...q,badgeType:"indicator",count:99}},{label:"API Keys",icon:"api-keys"}]}]},{...E[4],badge:{...q,badgeType:"brand",count:8}}],_e=[{...j,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...j,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...j,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],T={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},jn={...T},Dn={...T,onClick:()=>{console.log("Header clicked")}};function He(n){if(!n)return null;const s=Array.from(n.children);for(const i of s)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const o=n.querySelector("a");return o||Array.from(n.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}const u=(n,s)=>{const o=h(n),e=o.queryByRole("link",{name:s});if(e)return e;const t=o.queryByText(s);if(t){const i=t.closest("li");return He(i)}return null},qt=(n,s)=>{const o=n.querySelector('[class*="sideNavBody"]');if(!o)return null;const t=Array.from(o.querySelectorAll("li"))[s];return He(t)},J=(n,s="MA")=>{var i;return(i=h(n).getByText(s).parentElement)==null?void 0:i.parentElement},w=n=>{r(n).not.toBeNull(),r(n).toHaveFocus()},I=(n,s)=>{const o=u(n,s);o&&r(o).not.toHaveFocus()},C=(n,s)=>{const o=u(n,s);o&&r(o).toHaveAttribute("tabindex","-1")},F=(n,s)=>{const o=u(n,s);o&&r(o).toHaveAttribute("tabindex","0")},m={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:G}},ne={args:{...m.args,collapsible:!0}},ae={args:{...m.args,headerConfig:T}},se={args:{...m.args,headerConfig:T,items:he,collapsible:!0}},oe={args:{...m.args,headerConfig:T,items:he,collapsible:!0},play:async({canvasElement:n,step:s})=>{const e=h(n).getByRole("navigation");await s("Navigate through navigation when all menus are closed",async()=>{C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),C(e,"General"),C(e,"Privacy"),C(e,"Advanced");const t=u(e,"Home");t==null||t.focus(),w(t),await l.tab();const i=u(e,"Dashboard");w(i),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics"),await l.tab();const c=u(e,"Settings");w(c),I(e,"General"),I(e,"Privacy"),I(e,"Advanced"),await l.tab();const d=u(e,"Profile");w(d)}),await s("Open Dashboard menu and verify nested items are accessible",async()=>{const t=u(e,"Dashboard");await l.click(t),F(e,"Overview"),F(e,"Reports"),F(e,"Analytics"),await l.tab();const i=u(e,"Overview");w(i),await l.tab();const c=u(e,"Reports");w(c),await l.tab();const d=u(e,"Analytics");w(d)}),await s("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=u(e,"Dashboard");await l.click(t),C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),await l.tab();const i=u(e,"Settings");w(i),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics")}),await s("Open Settings menu and verify nested items are accessible",async()=>{const t=u(e,"Settings");await l.click(t),F(e,"General"),F(e,"Privacy"),F(e,"Advanced"),C(e,"Security"),C(e,"API Keys"),await l.tab();const i=u(e,"General");w(i),await l.tab();const c=u(e,"Privacy");w(c),await l.tab();const d=u(e,"Advanced");w(d),I(e,"Security"),I(e,"API Keys")}),await s("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=u(e,"Advanced");await l.click(t),F(e,"Security"),F(e,"API Keys"),await l.tab();const i=u(e,"Security");w(i),await l.tab();const c=u(e,"API Keys");w(c)}),await s("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=u(e,"Advanced");await l.click(t),C(e,"Security"),C(e,"API Keys"),await l.tab();const i=u(e,"Profile");w(i),I(e,"Security"),I(e,"API Keys")})}},ie={args:{...m.args,headerConfig:{...T,link:null},collapsible:!0},play:async({canvasElement:n,step:s})=>{const e=h(n).getByRole("navigation");await s("Verify header is not clickable when no link or onClick is provided",async()=>{const t=J(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},re={args:{...m.args,headerConfig:jn,collapsible:!0},play:async({canvasElement:n,step:s})=>{const e=h(n).getByRole("navigation");await s("Verify header is a link when link prop is provided",async()=>{const t=J(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await s("Verify header is keyboard navigable",async()=>{const t=J(e);t==null||t.focus(),r(t).toHaveFocus()})}},ce={args:{...m.args,headerConfig:{...Dn,link:null},collapsible:!0},play:async({canvasElement:n,step:s})=>{const e=h(n).getByRole("navigation");await s("Verify header is clickable button when onClick is provided",async()=>{const t=J(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await l.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await s("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=J(e);t==null||t.focus(),r(t).toHaveFocus(),await l.keyboard(Mt),await l.keyboard(Rt)})}},le={args:{...m.args,headerConfig:T,items:G,collapsible:!0,collapsed:!0},decorators:[(n,s)=>{const[o,e]=H.useState(s.args.collapsed??!0);return a.jsx("div",{children:a.jsx(n,{args:{...s.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:n,step:s})=>{const e=h(n).getByRole("navigation");await s("Verify tooltips appear when tabbing to navigation items",async()=>{const t=qt(e,0);r(t).not.toBeNull(),t==null||t.focus(),await new Promise(c=>setTimeout(c,200));const i=h(document.body).queryByRole("tooltip",{name:"Home"});r(i).not.toBeNull(),r(i).toHaveTextContent("Home")}),await s("Verify tooltips appear when tabbing to next navigation item",async()=>{await l.tab(),await new Promise(i=>setTimeout(i,200));const t=h(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await s("Verify tooltips appear for items with links when tabbing",async()=>{await l.tab(),await l.tab(),await l.tab(),await new Promise(i=>setTimeout(i,200));const t=h(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},de={args:{...m.args,headerConfig:T,items:he,collapsible:!0,collapsed:!0},decorators:[(n,s)=>{const[o,e]=H.useState(s.args.collapsed??!0);return a.jsx("div",{children:a.jsx(n,{args:{...s.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:n,step:s})=>{const e=h(n).getByRole("navigation");await s("Verify tooltips appear when tabbing to menu items",async()=>{const t=qt(e,1);r(t).not.toBeNull(),await l.tab(),await l.tab(),await l.tab(),await new Promise(c=>setTimeout(c,200));const i=h(document.body).queryByRole("tooltip",{name:"Dashboard"});r(i).not.toBeNull(),r(i).toHaveTextContent("Dashboard")})}},qn=(n,s)=>n.querySelector(`#${s}`),Fn=n=>Array.from(n.classList).some(o=>o.includes("active")),Ft=async(n,s,o)=>{await Pt(()=>{const e=n.getByRole("navigation"),t=qn(e,s);r(t).not.toBeNull(),r(Fn(t)).toBe(o)})},ke=(n,s)=>Ft(n,s,!0),M=(n,s)=>Ft(n,s,!1),ue={args:{...m.args,headerConfig:T,items:G,activeItem:"home",collapsible:!0},decorators:[(n,s)=>{const[o,e]=H.useState(s.args.activeItem),t=G.map(i=>({...i,onClick:()=>e(i.id),link:void 0}));return a.jsx("div",{children:a.jsx(n,{args:{...s.args,items:t,activeItem:o}})})}],play:async({canvasElement:n,step:s})=>{const o=h(n);await s("Verify Home has active class initially",async()=>{ke(o,"home"),M(o,"dashboard"),M(o,"analytics"),M(o,"settings"),M(o,"profile")}),await s("Change active item to Dashboard and verify active class",async()=>{const e=o.getByRole("navigation"),t=u(e,"Dashboard");r(t).not.toBeNull(),await l.click(t),M(o,"home"),ke(o,"dashboard"),M(o,"analytics"),M(o,"settings"),M(o,"profile")})}},Mn=a.jsxs("div",{style:{padding:"2rem"},children:[a.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."})]}),pe={args:{...m.args,collapsible:!0},render:n=>a.jsx(U,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,children:Mn})},me={args:{...m.args,headerConfig:T,items:G,footerItems:_e,collapsible:!0}},ve={args:{...m.args,headerConfig:T,items:G,footerItems:_e,collapsible:!1}},L=(n,s)=>{const o=n.querySelector('[class*="sideNavFooterItems"]');if(!o)return null;const e=h(o),t=e.queryByRole("link",{name:s});if(t)return t;const i=e.queryByText(s);if(i){const c=i.closest("li");return He(c)}return null},ge={args:{...m.args,headerConfig:T,items:he,footerItems:_e,collapsible:!0},play:async({canvasElement:n,step:s})=>{const e=h(n).getByRole("navigation");await s("Verify footer items are rendered",async()=>{const t=L(e,"Settings");r(t).not.toBeNull();const i=L(e,"Help & Support");r(i).not.toBeNull();const c=L(e,"Account");r(c).not.toBeNull()}),await s("Open Account menu in footer and verify nested items",async()=>{const t=L(e,"Account");await l.click(t);const i=L(e,"Preferences");r(i).not.toBeNull();const c=L(e,"Logout");r(c).not.toBeNull()})}},ye={args:{...m.args,headerConfig:T,items:kn,collapsible:!0}},Rn=[E[0],{...E[1],items:[{label:"Overview"},{label:"Reports",showDivider:!0},{label:"Analytics",icon:"analytics"}]},{...E[2],showDivider:!0},{...j,id:"reports",label:"Reports",icon:"info"},{...E[3],showDivider:!0,items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy",showDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",showDivider:!0,items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys",showDivider:!0},{label:"Integrations",icon:"integrations"}]}]},E[4]],be={args:{...m.args,headerConfig:T,items:Rn,collapsible:!0}};var je,De,qe;m.parameters={...m.parameters,docs:{...(je=m.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(qe=(De=m.parameters)==null?void 0:De.docs)==null?void 0:qe.source}}};var Fe,Me,Re;ne.parameters={...ne.parameters,docs:{...(Fe=ne.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Re=(Me=ne.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};var Pe,Oe,Ke;ae.parameters={...ae.parameters,docs:{...(Pe=ae.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ke=(Oe=ae.parameters)==null?void 0:Oe.docs)==null?void 0:Ke.source}}};var Ve,We,Le;se.parameters={...se.parameters,docs:{...(Ve=se.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Le=(We=se.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var ze,Ge,Ye;oe.parameters={...oe.parameters,docs:{...(ze=oe.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
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
}`,...(Ye=(Ge=oe.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var $e,Ue,Je;ie.parameters={...ie.parameters,docs:{...($e=ie.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Verify header is not clickable when no link or onClick is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("DIV");
      expect(headerTitleContainer).not.toHaveAttribute("href");
      expect(headerTitleContainer).not.toHaveAttribute("role", "button");
      expect(headerTitleContainer).not.toHaveAttribute("tabindex");
    });
  }
}`,...(Je=(Ue=ie.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;re.parameters={...re.parameters,docs:{...(Qe=re.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: headerConfigWithLink,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
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
}`,...(Ze=(Xe=re.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ce.parameters={...ce.parameters,docs:{...(et=ce.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
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
}`,...(nt=(tt=ce.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,st,ot;le.parameters={...le.parameters,docs:{...(at=le.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    collapsible: true,
    collapsed: true
  },
  decorators: [(Story, context) => {
    const [collapsed, setCollapsed] = useState(context.args.collapsed ?? true);
    return <div>
          <Story args={{
        ...context.args,
        collapsed,
        onCollapsedChange: setCollapsed
      }} />
        </div>;
  }],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Verify tooltips appear when tabbing to navigation items", async () => {
      const homeElement = getNavElementInCollapsedState(sideNav, 0);
      expect(homeElement).not.toBeNull();
      homeElement?.focus();
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Home"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Home");
    });
    await step("Verify tooltips appear when tabbing to next navigation item", async () => {
      await userEvent.tab();
      await new Promise(resolve => setTimeout(resolve, 200));
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
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Profile"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Profile");
    });
  }
}`,...(ot=(st=le.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var it,rt,ct;de.parameters={...de.parameters,docs:{...(it=de.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
    collapsed: true
  },
  decorators: [(Story, context) => {
    const [collapsed, setCollapsed] = useState(context.args.collapsed ?? true);
    return <div>
          <Story args={{
        ...context.args,
        collapsed,
        onCollapsedChange: setCollapsed
      }} />
        </div>;
  }],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Verify tooltips appear when tabbing to menu items", async () => {
      const dashboardMenu = getNavElementInCollapsedState(sideNav, 1);
      expect(dashboardMenu).not.toBeNull();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Dashboard"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });
  }
}`,...(ct=(rt=de.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var lt,dt,ut;ue.parameters={...ue.parameters,docs:{...(lt=ue.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    activeItem: "home",
    collapsible: true
  },
  decorators: [(Story, context) => {
    const [activeItem, setActiveItem] = useState(context.args.activeItem);
    const itemsWithOnClick = navigationItems.map(item => {
      return {
        ...item,
        onClick: () => setActiveItem(item.id),
        link: undefined
      };
    });
    return <div>
          <Story args={{
        ...context.args,
        items: itemsWithOnClick as NavItemProps[],
        activeItem
      }} />
        </div>;
  }],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
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
}`,...(ut=(dt=ue.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var pt,mt,vt;pe.parameters={...pe.parameters,docs:{...(pt=pe.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items} footerItems={args.footerItems} collapsed={args.collapsed} activeItem={args.activeItem}>
      {SimplePageContent}
    </SideNav>
}`,...(vt=(mt=pe.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var gt,yt,bt;me.parameters={...me.parameters,docs:{...(gt=me.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(bt=(yt=me.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var Nt,ft,ht;ve.parameters={...ve.parameters,docs:{...(Nt=ve.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(ht=(ft=ve.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var xt,wt,Et;ge.parameters={...ge.parameters,docs:{...(xt=ge.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
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
}`,...(Et=(wt=ge.parameters)==null?void 0:wt.docs)==null?void 0:Et.source}}};var Tt,It,Ct;ye.parameters={...ye.parameters,docs:{...(Tt=ye.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Ct=(It=ye.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};var _t,Ht,St;be.parameters={...be.parameters,docs:{...(_t=be.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(St=(Ht=be.parameters)==null?void 0:Ht.docs)==null?void 0:St.source}}};const ia=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","ScrollBar","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{ue as ActiveItemState,le as CollapsedTooltip,de as CollapsedTooltipWithNested,ne as Collapsible,m as Default,ve as FooterItemsOnly,ge as FooterItemsWithNested,ie as HeaderClickability,re as HeaderWithLink,ce as HeaderWithOnClick,ae as HeaderWithVersion,oe as KeyboardNavigation,pe as ScrollBar,ye as WithBadges,be as WithDividers,me as WithFooterItems,se as WithNestedMenus,ia as __namedExportsOrder,oa as default};
