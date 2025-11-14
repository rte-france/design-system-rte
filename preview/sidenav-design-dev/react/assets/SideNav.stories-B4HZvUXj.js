import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Ot,a as Kt}from"./keyboard-test.constants-C9whQEGR.js";import{w as M,e as r,a as Vt,u as c}from"./index-DCXJbAaW.js";import{d as Te,B as Lt}from"./BaseSideNav-CMM6Hryd.js";import{S as Ne,E as he,b as Be,c as Wt,d as zt}from"./keyboard.constants-ep-ZHn_7.js";import{r as _}from"./index-G8LIXM5I.js";import{u as kt}from"./useActiveKeyboard-BPEscCvd.js";import{D as $}from"./Divider-BPBlxbj_.js";import{c as G}from"./index-DSdvzt-y.js";import{B as Bt}from"./Badge-yqZBktoR.js";import{I as Dt}from"./Icon-DjEid3Hw.js";import{T as Gt}from"./Tooltip-CUwyg_K4.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const Yt="_navItemContainer_6qeyg_3",$t="_neutral_6qeyg_24",Ut="_active_6qeyg_31",Jt="_nested_6qeyg_36",Qt="_focused_6qeyg_52",Xt="_navItem_6qeyg_3",Zt="_navItemLeft_6qeyg_73",en="_navItemRight_6qeyg_78",tn="_collapsed_6qeyg_87",S={navItemContainer:Yt,neutral:$t,active:Ut,nested:Jt,focused:Qt,navItem:Xt,navItemLeft:Zt,navItemRight:en,collapsed:tn},nn="_navMenuContainer_2xpt7_3",an="_neutral_2xpt7_12",on="_navMenu_2xpt7_3",sn="_focused_2xpt7_19",rn="_nested_2xpt7_22",cn="_menuContentLeft_2xpt7_47",ln="_menuContentRight_2xpt7_52",dn="_collapsed_2xpt7_75",un="_menuIcon_2xpt7_93",pn="_menuIconOpen_2xpt7_98",mn="_nestedMenu_2xpt7_101",vn="_nestedMenuOpen_2xpt7_111",yn="_icon_2xpt7_116",C={navMenuContainer:nn,neutral:an,navMenu:on,focused:sn,nested:rn,menuContentLeft:cn,menuContentRight:ln,collapsed:dn,menuIcon:un,menuIconOpen:pn,nestedMenu:mn,nestedMenuOpen:vn,icon:yn};function Ie({link:n,label:o,tabIndex:e,onKeyDown:t,onFocus:s,onBlur:i,onClick:l,children:u,styleType:H="item"}){const f=H==="menu"?C:S,b={className:H==="menu"?f.navMenu:f.navItem,tabIndex:e,"aria-label":o,...s&&{onFocus:s},...i&&{onBlur:i},...l&&{onClick:l},...t&&{onKeyDown:t}};return n?a.jsx("a",{href:n,...b,children:u}):a.jsx("span",{...b,children:u})}Ie.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ce({icon:n,showIcon:o=!0,label:e,collapsed:t,isNested:s,styleType:i="item"}){const l=s?16:t?24:20,u=i==="menu"?C:S;return a.jsxs(a.Fragment,{children:[o&&n&&a.jsx(Dt,{name:n,className:u.icon,size:l}),t?null:a.jsx("span",{children:e})]})}Ce.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function _e({label:n,collapsed:o,children:e}){return o&&n?a.jsx(Gt,{label:n,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}_e.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function jt(n){return n===!1?-1:0}function Ft({onEnterOrSpace:n,onEscape:o,includeArrowKeys:e=!1,includeEscape:t=!1}={}){const s=_.useCallback(u=>{[Ne,he].includes(u.key)&&(u.preventDefault(),n==null||n()),u.key===Be&&t&&(u.preventDefault(),o==null||o())},[n,o,t]),i=[Ne,he,...t?[Be]:[],...e?[Wt,zt]:[]],{onKeyDown:l}=kt({onKeyDown:s},{interactiveKeyCodes:i});return{onKeyDown:l}}const xe=_.forwardRef(({id:n,icon:o,showIcon:e=!0,onClick:t,label:s,collapsed:i,link:l,isNested:u,parentMenuOpen:H,appearance:f="brand",active:R,badge:b,...v},k)=>{const D=_.useRef(null),{onKeyDown:O}=Ft({onEnterOrSpace:t});function K(){var N;(N=D.current)==null||N.classList.add(S.focused)}function V(){var N;(N=D.current)==null||N.classList.remove(S.focused)}const A=jt(H),L=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:S.navItemLeft,children:a.jsx(Ce,{icon:o,showIcon:e,label:s,collapsed:i,isNested:u,styleType:"item"})}),a.jsx("div",{className:S.navItemRight,children:b&&a.jsx(Bt,{badgeType:b.badgeType,size:b.size,content:b.content,count:b.count})})]}),W=a.jsx("div",{id:n,className:G(S.navItemContainer,f&&S[f],i&&S.collapsed,u&&S.nested,R&&S.active),onClick:t,ref:N=>{D.current=N,typeof k=="function"?k(N):k&&"current"in k&&(k.current=N)},...v,children:a.jsx(Ie,{link:l,label:s,tabIndex:A,onKeyDown:l?void 0:O,onFocus:K,onBlur:V,styleType:"item",children:L})});return a.jsx(_e,{label:s,collapsed:i,children:W})});xe.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const He=_.forwardRef(({icon:n,showIcon:o=!0,onClick:e,label:t,collapsed:s,link:i,items:l=[],open:u,showMenuIcon:H=!0,isNested:f,parentMenuOpen:R,appearance:b="brand",badge:v,showDivider:k,...D},O)=>{const[K,V]=_.useState(!1),A=u!==void 0?u:K,L=u!==void 0;function W(){L||V(!K),e&&e()}function N(){A&&!L&&V(!1)}const{onKeyDown:Q}=Ft({onEnterOrSpace:W,onEscape:N,includeArrowKeys:!0,includeEscape:!0}),Ee=l.length,X=!s&&Ee,Z=A,ee=jt(R),h=X&&H?a.jsx(Dt,{name:"arrow-chevron-right",className:G(C.menuIcon,A&&C.menuIconOpen)}):null,p=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:C.menuContentLeft,children:a.jsx(Ce,{icon:n,showIcon:o,label:t,collapsed:s,isNested:f,styleType:"menu"})}),a.jsxs("div",{className:C.menuContentRight,children:[v&&a.jsx(Bt,{badgeType:v.badgeType,size:v.size,content:v.content,count:v.count}),h]})]}),Se=a.jsxs("li",{className:G(C.navMenuContainer,b&&C[b],s&&C.collapsed,A&&C.open,f&&C.nested),ref:O,...D,children:[a.jsx(Ie,{link:i,label:t,tabIndex:ee,onClick:W,onKeyDown:Q,styleType:"menu",children:p}),X&&a.jsx("ul",{className:G(C.nestedMenu,A&&C.nestedMenuOpen),children:l.map(y=>{var ke;return(ke=y.items)!=null&&ke.length?a.jsx(He,{label:y.label,icon:y.icon,showIcon:y.showIcon,collapsed:s,link:y.link,onClick:y.onClick,items:y.items||[],showMenuIcon:H,isNested:!0,parentMenuOpen:Z,appearance:b,badge:y.badge},y.id||y.label):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx(xe,{label:y.label,icon:y.icon,showIcon:y.showIcon,collapsed:s,link:y.link,onClick:y.onClick,isNested:!0,parentMenuOpen:Z,appearance:b,badge:y.badge})},y.id||y.label),y.showDivider&&a.jsx($,{appearance:Te[b]})]})})})]}),te=a.jsx(_e,{label:t,collapsed:s,children:Se});return a.jsxs(a.Fragment,{children:[te,k&&a.jsx($,{appearance:Te[b]})]})});He.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},showMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const gn="_sideNavContainer_xo0pb_3",bn="_sideNavContent_xo0pb_8",fn="_sideNav_xo0pb_3",Nn="_sideNavHeaderContainer_xo0pb_29",hn="_collapsed_xo0pb_41",xn="_sideNavHeader_xo0pb_29",wn="_sideNavHeaderTitleContainer_xo0pb_66",En="_sideNavHeaderTitle_xo0pb_66",Tn="_neutral_xo0pb_77",In="_sideNavHeaderIdentifier_xo0pb_104",Cn="_hidden_xo0pb_139",_n="_sideNavHeaderVersion_xo0pb_145",Hn="_sideNavBody_xo0pb_174",An="_sideNavFooterContainer_xo0pb_197",Sn="_sideNavFooter_xo0pb_197",kn="_sideNavFooterItems_xo0pb_210",Bn="_collapsibleSection_xo0pb_227",g={sideNavContainer:gn,sideNavContent:bn,sideNav:fn,sideNavHeaderContainer:Nn,collapsed:hn,sideNavHeader:xn,sideNavHeaderTitleContainer:wn,sideNavHeaderTitle:En,neutral:Tn,sideNavHeaderIdentifier:In,hidden:Cn,sideNavHeaderVersion:_n,sideNavBody:Hn,sideNavFooterContainer:An,sideNavFooter:Sn,sideNavFooterItems:kn,collapsibleSection:Bn},Dn=300,U=_.forwardRef(({size:n="m",collapsible:o,children:e,headerConfig:t,items:s,footerItems:i,collapsed:l,defaultCollapsed:u=!1,onCollapsedChange:H,appearance:f="brand",activeItem:R},b)=>{const[v,k]=_.useState(l??u),[D,O]=_.useState(!0);_.useEffect(()=>{l!==void 0&&k(l)},[l]),_.useEffect(()=>{if(v)O(!1);else{const h=setTimeout(()=>{O(!0)},Dn);return()=>clearTimeout(h)}},[v]);const K=()=>{const h=!v;l===void 0&&k(h),H==null||H(h)},V=v?"arrow-double-right":"arrow-double-left",A=Te[f],L=h=>{[Ne,he].includes(h.key)&&(h.preventDefault(),t!=null&&t.onClick&&t.onClick())},{onKeyDown:W}=kt({onKeyDown:L},{interactiveKeyCodes:[Ne,he]}),N=a.jsxs("div",{className:g.sideNavHeaderTitle,children:[a.jsx("div",{className:g.sideNavHeaderIdentifier,children:t==null?void 0:t.identifier}),v?"":a.jsx("h1",{className:D?"":g.hidden,children:t==null?void 0:t.title})]}),Q=t==null?void 0:t.ariaLabel,Ee=a.jsx("a",{href:(t==null?void 0:t.link)??"",className:g.sideNavHeaderTitleContainer,onClick:t==null?void 0:t.onClick,"aria-label":Q,children:N}),X=a.jsx("div",{className:g.sideNavHeaderTitleContainer,tabIndex:0,onClick:t==null?void 0:t.onClick,onKeyDown:W,role:"button","aria-label":Q,children:N}),Z=t!=null&&t.link?Ee:t!=null&&t.onClick?X:a.jsx("div",{className:g.sideNavHeaderTitleContainer,children:N});function ee(h){return h!=null&&h.length?a.jsx("ul",{children:h.map(p=>{var te;return((te=p.items)==null?void 0:te.length)?a.jsx(He,{badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,items:p.items||[],appearance:f,showDivider:p.showDivider},p.id):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:a.jsx(xe,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:v,link:p.link,onClick:p.onClick,appearance:f,active:p.id===R&&!!R})},p.id),p.showDivider&&a.jsx($,{appearance:A})]})})}):null}return a.jsx(Lt,{ref:b,size:n,collapsible:o,collapsed:v,appearance:f,style:{minHeight:"100vh"},containerClassName:g.sideNavContainer,header:a.jsxs("div",{className:g.sideNavHeaderContainer,children:[a.jsxs("div",{className:G(g.sideNavHeader,g[f],v&&g.collapsed),children:[Z,a.jsx("div",{className:G(g.sideNavHeaderVersion,!D&&g.hidden),children:a.jsx("span",{children:t==null?void 0:t.version})})]}),a.jsx($,{appearance:A})]}),body:a.jsx("div",{className:g.sideNavBody,children:ee(s)}),footer:((i==null?void 0:i.length)||o)&&a.jsxs("div",{className:g.sideNavFooterContainer,children:[(i==null?void 0:i.length)&&a.jsx("div",{className:g.sideNavFooterItems,children:ee(i)}),a.jsx($,{appearance:A}),a.jsx("div",{className:g.sideNavFooter,children:o&&a.jsx("div",{className:g.collapsibleSection,children:a.jsx(xe,{id:"collapse-button",icon:V,showIcon:!0,collapsed:v,onClick:K,label:v?"Ouvrir le menu":"Réduire le menu",appearance:f,role:"button"})})})]}),children:e})});U.displayName="SideNav";U.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};function qt(){return function(o,e){const[t,s]=_.useState(e.args.collapsed??!0);return a.jsx("div",{children:a.jsx(o,{args:{...e.args,collapsed:t,onCollapsedChange:s}})})}}function jn(n){return function(e,t){const[s,i]=_.useState(t.args.activeItem),l=n.map(u=>({...u,onClick:()=>i(u.id),link:void 0}));return a.jsx("div",{children:a.jsx(e,{args:{...t.args,items:l,activeItem:s}})})}}function Mt(n){if(!n)return null;const o=Array.from(n.children);for(const i of o)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const e=n.querySelector("a");return e||Array.from(n.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function d(n,o,e){const t=e?n.querySelector(e):n;if(!t)return null;const s=e?M(t):M(n),i=s.queryByRole("link",{name:o});if(i)return i;const l=s.queryByText(o);if(l){const u=l.closest("li");return Mt(u)}return null}function Pt(n,o){const e=n.querySelector('[class*="sideNavBody"]');if(!e)return null;const s=Array.from(e.querySelectorAll("li"))[o];return Mt(s)}function z(n,o){return d(n,o,'[class*="sideNavFooterItems"]')}function J(n,o="MA"){var i;return(i=M(n).getByText(o).parentElement)==null?void 0:i.parentElement}function Fn(n,o){return n.querySelector(`#${o}`)}function qn(n){return Array.from(n.classList).some(e=>e.includes("active"))}function x(n){r(n).not.toBeNull(),r(n).toHaveFocus()}function T(n,o){const e=d(n,o);e&&r(e).not.toHaveFocus()}function I(n,o){const e=d(n,o);e&&r(e).toHaveAttribute("tabindex","-1")}function j(n,o){const e=d(n,o);e&&r(e).toHaveAttribute("tabindex","0")}async function Rt(n,o,e){await Vt(()=>{const t=n.getByRole("navigation"),s=Fn(t,o);r(s).not.toBeNull(),r(qn(s)).toBe(e)})}function De(n,o){return Rt(n,o,!0)}function F(n,o){return Rt(n,o,!1)}function P(n){const o=M(n),e=o.getByRole("navigation");return{canvas:o,sideNav:e}}function fe(n=200){return new Promise(o=>setTimeout(o,n))}const la={title:"SideNav",id:"SideNav",component:U,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:n=>a.jsx(U,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,onCollapsedChange:n.onCollapsedChange,children:Mn})},Mn=a.jsxs("div",{style:{padding:"2rem"},children:[a.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),B={showIcon:!0},q={size:"m",content:"number"},w=[{...B,id:"home",label:"Home",icon:"home"},{...B,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...B,id:"analytics",label:"Analytics",icon:"analytics"},{...B,id:"settings",label:"Settings",icon:"settings"},{...B,id:"profile",label:"Profile",icon:"user",link:"/profile"}],Y=w,we=[w[0],{...w[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...w[3],items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys"}]}]},w[4]],Pn=[{...w[0],badge:{...q,badgeType:"indicator",count:5}},{...w[1],badge:{...q,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...q,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...q,badgeType:"indicator",count:12}}]},{...w[3],items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy",badge:{...q,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...q,badgeType:"indicator",count:7},items:[{label:"Security",icon:"security",badge:{...q,badgeType:"indicator",count:99}},{label:"API Keys",icon:"api-keys"}]}]},{...w[4],badge:{...q,badgeType:"brand",count:8}}],Ae=[{...B,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...B,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...B,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],E={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},Rn={...E},On={...E,onClick:()=>{console.log("Header clicked")}},m={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:Y}},ne={args:{...m.args,collapsible:!0}},ae={args:{...m.args,headerConfig:E}},oe={args:{...m.args,headerConfig:E,items:we,collapsible:!0}},se={args:{...m.args,headerConfig:E,items:we,collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=P(n);await o("Navigate through navigation when all menus are closed",async()=>{I(e,"Overview"),I(e,"Reports"),I(e,"Analytics"),I(e,"General"),I(e,"Privacy"),I(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),x(t),await c.tab();const s=d(e,"Dashboard");x(s),T(e,"Overview"),T(e,"Reports"),T(e,"Analytics"),await c.tab();const i=d(e,"Settings");x(i),T(e,"General"),T(e,"Privacy"),T(e,"Advanced"),await c.tab();const l=d(e,"Profile");x(l)}),await o("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await c.click(t),j(e,"Overview"),j(e,"Reports"),j(e,"Analytics"),await c.tab();const s=d(e,"Overview");x(s),await c.tab();const i=d(e,"Reports");x(i),await c.tab();const l=d(e,"Analytics");x(l)}),await o("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await c.click(t),I(e,"Overview"),I(e,"Reports"),I(e,"Analytics"),await c.tab();const s=d(e,"Settings");x(s),T(e,"Overview"),T(e,"Reports"),T(e,"Analytics")}),await o("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await c.click(t),j(e,"General"),j(e,"Privacy"),j(e,"Advanced"),I(e,"Security"),I(e,"API Keys"),await c.tab();const s=d(e,"General");x(s),await c.tab();const i=d(e,"Privacy");x(i),await c.tab();const l=d(e,"Advanced");x(l),T(e,"Security"),T(e,"API Keys")}),await o("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await c.click(t),j(e,"Security"),j(e,"API Keys"),await c.tab();const s=d(e,"Security");x(s),await c.tab();const i=d(e,"API Keys");x(i)}),await o("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await c.click(t),I(e,"Security"),I(e,"API Keys"),await c.tab();const s=d(e,"Profile");x(s),T(e,"Security"),T(e,"API Keys")})}},ie={args:{...m.args,headerConfig:{...E,link:null},collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=P(n);await o("Verify header is not clickable when no link or onClick is provided",async()=>{const t=J(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},re={args:{...m.args,headerConfig:Rn,collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=P(n);await o("Verify header is a link when link prop is provided",async()=>{const t=J(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await o("Verify header is keyboard navigable",async()=>{const t=J(e);t==null||t.focus(),r(t).toHaveFocus()})}},ce={args:{...m.args,headerConfig:{...On,link:null},collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=P(n);await o("Verify header is clickable button when onClick is provided",async()=>{const t=J(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await o("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=J(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(Ot),await c.keyboard(Kt)})}},le={args:{...m.args,headerConfig:E,items:Y,collapsible:!0,collapsed:!0},decorators:[qt()],play:async({canvasElement:n,step:o})=>{const{sideNav:e}=P(n);await o("Verify tooltips appear when tabbing to navigation items",async()=>{const t=Pt(e,0);r(t).not.toBeNull(),t==null||t.focus(),await fe();const s=M(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await o("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await fe();const t=M(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await o("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await fe();const t=M(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},de={args:{...m.args,headerConfig:E,items:we,collapsible:!0,collapsed:!0},decorators:[qt()],play:async({canvasElement:n,step:o})=>{const{sideNav:e}=P(n);await o("Verify tooltips appear when tabbing to menu items",async()=>{const t=Pt(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await fe();const s=M(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},ue={args:{...m.args,headerConfig:E,items:Y,activeItem:"home",collapsible:!0},decorators:[jn(Y)],play:async({canvasElement:n,step:o})=>{const{canvas:e}=P(n);await o("Verify Home has active class initially",async()=>{De(e,"home"),F(e,"dashboard"),F(e,"analytics"),F(e,"settings"),F(e,"profile")}),await o("Change active item to Dashboard and verify active class",async()=>{const t=e.getByRole("navigation"),s=d(t,"Dashboard");r(s).not.toBeNull(),await c.click(s),F(e,"home"),De(e,"dashboard"),F(e,"analytics"),F(e,"settings"),F(e,"profile")})}},Kn=a.jsxs("div",{style:{padding:"2rem"},children:[a.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),a.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."})]}),pe={args:{...m.args,collapsible:!0},render:n=>a.jsx(U,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,children:Kn})},me={args:{...m.args,headerConfig:E,items:Y,footerItems:Ae,collapsible:!0}},ve={args:{...m.args,headerConfig:E,items:Y,footerItems:Ae,collapsible:!1}},ye={args:{...m.args,headerConfig:E,items:we,footerItems:Ae,collapsible:!0},play:async({canvasElement:n,step:o})=>{const{sideNav:e}=P(n);await o("Verify footer items are rendered",async()=>{const t=z(e,"Settings");r(t).not.toBeNull();const s=z(e,"Help & Support");r(s).not.toBeNull();const i=z(e,"Account");r(i).not.toBeNull()}),await o("Open Account menu in footer and verify nested items",async()=>{const t=z(e,"Account");await c.click(t);const s=z(e,"Preferences");r(s).not.toBeNull();const i=z(e,"Logout");r(i).not.toBeNull()})}},ge={args:{...m.args,headerConfig:E,items:Pn,collapsible:!0}},Vn=[w[0],{...w[1],items:[{label:"Overview"},{label:"Reports",showDivider:!0},{label:"Analytics",icon:"analytics"}]},{...w[2],showDivider:!0},{...B,id:"reports",label:"Reports",icon:"info"},{...w[3],showDivider:!0,items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy",showDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",showDivider:!0,items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys",showDivider:!0},{label:"Integrations",icon:"integrations"}]}]},w[4]],be={args:{...m.args,headerConfig:E,items:Vn,collapsible:!0}};var je,Fe,qe;m.parameters={...m.parameters,docs:{...(je=m.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(qe=(Fe=m.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Me,Pe,Re;ne.parameters={...ne.parameters,docs:{...(Me=ne.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Re=(Pe=ne.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Oe,Ke,Ve;ae.parameters={...ae.parameters,docs:{...(Oe=ae.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ve=(Ke=ae.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}};var Le,We,ze;oe.parameters={...oe.parameters,docs:{...(Le=oe.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(ze=(We=oe.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Ge,Ye,$e;se.parameters={...se.parameters,docs:{...(Ge=se.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...($e=(Ye=se.parameters)==null?void 0:Ye.docs)==null?void 0:$e.source}}};var Ue,Je,Qe;ie.parameters={...ie.parameters,docs:{...(Ue=ie.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=ie.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;re.parameters={...re.parameters,docs:{...(Xe=re.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=re.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;ce.parameters={...ce.parameters,docs:{...(tt=ce.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=ce.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,st,it;le.parameters={...le.parameters,docs:{...(ot=le.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(it=(st=le.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var rt,ct,lt;de.parameters={...de.parameters,docs:{...(rt=de.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(ct=de.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var dt,ut,pt;ue.parameters={...ue.parameters,docs:{...(dt=ue.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(pt=(ut=ue.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var mt,vt,yt;pe.parameters={...pe.parameters,docs:{...(mt=pe.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items} footerItems={args.footerItems} collapsed={args.collapsed} activeItem={args.activeItem}>
      {SimplePageContent}
    </SideNav>
}`,...(yt=(vt=pe.parameters)==null?void 0:vt.docs)==null?void 0:yt.source}}};var gt,bt,ft;me.parameters={...me.parameters,docs:{...(gt=me.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(ft=(bt=me.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var Nt,ht,xt;ve.parameters={...ve.parameters,docs:{...(Nt=ve.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(xt=(ht=ve.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var wt,Et,Tt;ye.parameters={...ye.parameters,docs:{...(wt=ye.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Tt=(Et=ye.parameters)==null?void 0:Et.docs)==null?void 0:Tt.source}}};var It,Ct,_t;ge.parameters={...ge.parameters,docs:{...(It=ge.parameters)==null?void 0:It.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(_t=(Ct=ge.parameters)==null?void 0:Ct.docs)==null?void 0:_t.source}}};var Ht,At,St;be.parameters={...be.parameters,docs:{...(Ht=be.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(St=(At=be.parameters)==null?void 0:At.docs)==null?void 0:St.source}}};const da=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","ScrollBar","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{ue as ActiveItemState,le as CollapsedTooltip,de as CollapsedTooltipWithNested,ne as Collapsible,m as Default,ve as FooterItemsOnly,ye as FooterItemsWithNested,ie as HeaderClickability,re as HeaderWithLink,ce as HeaderWithOnClick,ae as HeaderWithVersion,se as KeyboardNavigation,pe as ScrollBar,ge as WithBadges,be as WithDividers,me as WithFooterItems,oe as WithNestedMenus,da as __namedExportsOrder,la as default};
