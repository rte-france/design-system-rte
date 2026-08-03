import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{g as Ea,B as _a,s as Ra}from"./BaseSideNav-DneV_rnp.js";import{T as Pa,a as qa}from"./keyboard-test.constants-By8W48aj.js";import{w as P,e as r,a as Fa,u as d}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{B as Wa,N as La,u as Ka,R as Va,a as ie}from"./chunk-KS7C4IRE-DoFVsaq3.js";import{f as Oa}from"./testing.utils-mIZIUNbM.js";import{N as za}from"./NavigationProvider-Bs4LKj9F.js";import{S as Me,E as _e,c as at,b as Ga,d as Ya}from"./keyboard.constants-BverKK8B.js";import{u as Aa}from"./useActiveKeyboard-DaOmFJe_.js";import{u as $e}from"./NavigationContext-D2CUoNWC.js";import{D as re}from"./Divider-BMotkXeQ.js";import{s as Ua,I as Ue,B as Je}from"./Badge-DkJhvK8e.js";import{I as Ia}from"./Icon-DgLH6pPJ.js";import{T as $a}from"./Tooltip-9hqxBVC1.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function Ja(a=!1,n=!1){return a?Ue.s:n?Ue.l:Ue.m}function Re(a){return a?Ua({showBadge:!0,badgeContent:a.content??"number",badgeCount:a.count,badgeIcon:a.icon}):!1}function Qa(a){return a.badgeType??"indicator"}const Xa="_navItemContainer_iu7qi_1",Za="_navItemLeft_iu7qi_45",en="_navItem_iu7qi_1",tn="_navItemRight_iu7qi_60",J={navItemContainer:Xa,navItemLeft:Za,navItem:en,navItemRight:tn},an="_navMenuContainer_ycjt5_1",nn="_navMenu_ycjt5_1",sn="_menuContentLeft_ycjt5_31",on="_menuContentRight_ycjt5_36",rn="_menuIcon_ycjt5_95",cn="_nestedMenu_ycjt5_103",ln="_icon_ycjt5_119",z={navMenuContainer:an,navMenu:nn,menuContentLeft:sn,menuContentRight:on,menuIcon:rn,nestedMenu:cn,icon:ln};function Qe({link:a,label:n,tabIndex:t,onKeyDown:e,onFocus:i,onBlur:o,onClick:l,children:v,styleType:w="item"}){const b=$e(),f=w==="menu"?z:J,A={className:w==="menu"?f.navMenu:f.navItem,tabIndex:t,"aria-label":n,...i&&{onFocus:i},...o&&{onBlur:o},...l&&{onClick:l},...e&&{onKeyDown:e}};return a?s.jsx(b,{href:a,...A,children:v}):s.jsx("span",{...A,children:v})}Qe.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Xe({icon:a,hasLeadingIcon:n=!0,label:t,isCollapsed:e,isNested:i,styleType:o="item",badge:l}){const v=Ja(i,e),w=o==="menu"?z:J;function b(){if(!n||!a)return null;const f=s.jsx(Ia,{name:a,className:w.icon,size:v});return e&&l&&Re(l)?s.jsx(Je,{badgeType:Qa(l),size:"xs",content:"empty",children:f}):f}return s.jsxs(s.Fragment,{children:[b(),e?null:s.jsx("span",{children:t})]})}Xe.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function Fe({label:a,isCollapsed:n,children:t}){return n&&a?s.jsx($a,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:t}):t}Fe.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Ba(a){return a===!1?-1:0}function Ca({onEnterOrSpace:a,onEscape:n,includeArrowKeys:t=!1,includeEscape:e=!1}={}){const i=g.useCallback(v=>{[Me,_e].includes(v.key)&&(v.preventDefault(),a==null||a()),v.key===at&&e&&(v.preventDefault(),n==null||n())},[a,n,e]),o=[Me,_e,...e?[at]:[],...t?[Ga,Ya]:[]],{onKeyDown:l}=Aa({onKeyDown:i},{interactiveKeyCodes:o});return{onKeyDown:l}}const Pe=g.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:i,isCollapsed:o,link:l,href:v,isNested:w,parentMenuOpen:b,appearance:f="brand",active:D,badge:A,onActiveItemChange:M,...x},T)=>{const Z=$e(),F=g.useRef(null),S=g.useRef(null),W=!!(v||l),{onKeyDown:Y}=Ca({onEnterOrSpace:e});function ee(){var I,R;(I=F.current)==null||I.setAttribute("data-focused","true"),(R=S.current)==null||R.setAttribute("data-focused","true")}function O(){var I,R;(I=F.current)==null||I.removeAttribute("data-focused"),(R=S.current)==null||R.removeAttribute("data-focused")}const te=Ba(b),L=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:J.navItemLeft,children:s.jsx(Xe,{icon:n,hasLeadingIcon:t,label:i,isCollapsed:o,isNested:w,styleType:"item",badge:A})}),s.jsx("div",{className:J.navItemRight,children:!o&&A&&Re(A)&&s.jsx(Je,{badgeType:A.badgeType,size:A.size,content:A.content,count:A.count})})]}),_=W?s.jsx(Z,{id:a,"aria-label":i,className:J.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":w,"data-active":D,href:v??l,to:v??l,onClick:()=>M==null?void 0:M(a),onBlur:O,ref:S,children:L}):s.jsx("div",{id:a,className:J.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":w,"data-active":D,onClick:e,ref:I=>{F.current=I,typeof T=="function"?T(I):T&&"current"in T&&(T.current=I)},...x,children:s.jsx(Qe,{label:i,tabIndex:te,onKeyDown:Y,onFocus:ee,onBlur:O,styleType:"item",children:L})});return s.jsx(Fe,{label:i,isCollapsed:o,children:_})});Pe.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const Ze=g.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:i,isCollapsed:o,link:l,items:v=[],open:w,onOpenChange:b,hasMenuIcon:f=!0,isNested:D,parentMenuOpen:A,appearance:M="brand",contrast:x="high",badge:T,hasDivider:Z,active:F,onMenuOpenChange:S,getMenuOpen:W,...Y},ee)=>{const O=Ea(M,x),[te,L]=g.useState(!1),_=w??te,I=w!==void 0;function R(){const c=!_,u=a||i;if(e&&e(),u&&S){S(u,c);return}I?b==null||b(c):L(c)}function ae(){if(!_)return;const c=a||i;if(c&&S){S(c,!1);return}I?b==null||b(!1):L(!1)}const{onKeyDown:Ke}=Ca({onEnterOrSpace:R,onEscape:ae,includeArrowKeys:!0,includeEscape:!0}),Ve=v.length,U=!o&&Ve,ne=_,Oe=Ba(A),le=U&&f?s.jsx(Ia,{name:"arrow-chevron-right",className:z.menuIcon,"data-open":_}):null,ze=!o&&(Re(T)||!!le),Ge=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:z.menuContentLeft,children:s.jsx(Xe,{icon:n,hasLeadingIcon:t,label:i,isCollapsed:o,isNested:D,styleType:"menu",badge:T})}),ze&&s.jsxs("div",{className:z.menuContentRight,children:[T&&Re(T)&&s.jsx(Je,{badgeType:T.badgeType,size:T.size,content:T.content,count:T.count}),le]})]}),Ye=s.jsxs("li",{id:a,className:z.navMenuContainer,"data-collapsed":o,"data-appearance":M,"data-nested":D,"data-open":_,"data-active":F,ref:ee,...Y,children:[s.jsx(Qe,{link:l,label:i,tabIndex:Oe,onClick:R,onKeyDown:Ke,styleType:"menu",children:Ge}),U&&s.jsx("ul",{className:z.nestedMenu,"data-open":_,children:v.map(c=>{var se;return(se=c.items)!=null&&se.length?s.jsx(Ze,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:o,link:c.link,onClick:c.onClick,items:c.items||[],open:W?W(c):c.open,onOpenChange:c.onOpenChange,onMenuOpenChange:S,getMenuOpen:W,active:c.active,hasMenuIcon:f,hasDivider:c.hasDivider,isNested:!0,parentMenuOpen:ne,appearance:M,contrast:x,badge:c.badge},c.id||c.label):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(Pe,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:o,link:c.link,onClick:c.onClick,isNested:!0,parentMenuOpen:ne,appearance:M,active:c.active,badge:c.badge})}),c.hasDivider&&s.jsx(re,{appearance:O})]},c.id||c.label)})})]}),de=s.jsx(Fe,{label:i,isCollapsed:o,children:Ye});return s.jsxs(s.Fragment,{children:[de,Z&&s.jsx(re,{appearance:O})]})});Ze.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const dn="_sideNavHeaderContainer_1p15a_1",un="_sideNavHeader_1p15a_1",pn="_sideNavHeaderTitleContainer_1p15a_38",vn="_sideNavHeaderTitle_1p15a_38",mn="_sideNavHeaderIdentifier_1p15a_47",yn="_sideNavHeaderVersion_1p15a_119",gn="_sideNavBody_1p15a_148",Nn="_sideNavFooterContainer_1p15a_172",fn="_sideNavFooter_1p15a_172",hn="_sideNavFooterItems_1p15a_185",bn="_collapsibleSection_1p15a_202",k={sideNavHeaderContainer:dn,sideNavHeader:un,sideNavHeaderTitleContainer:pn,sideNavHeaderTitle:vn,sideNavHeaderIdentifier:mn,sideNavHeaderVersion:yn,sideNavBody:gn,sideNavFooterContainer:Nn,sideNavFooter:fn,sideNavFooterItems:hn,collapsibleSection:bn},xn=300,qe=g.forwardRef(({size:a="m",collapsible:n,children:t,headerConfig:e,items:i,footerItems:o,isCollapsed:l,defaultCollapsed:v=!1,onCollapsedChange:w,onActiveItemChange:b,appearance:f="brand",contrast:D="high",activeItem:A},M)=>{const[x,T]=g.useState(l??v),[Z,F]=g.useState(!0),[S,W]=g.useState({}),[Y,ee]=g.useState(A),O=$e(),te=g.useCallback((c,u)=>{W(se=>({...se,[c]:u}))},[]),L=g.useCallback(c=>c.id&&c.id in S?S[c.id]:c.open,[S]),_=g.useCallback(c=>{ee(c),b==null||b(c)},[b]);g.useEffect(()=>{W({})},[i]),g.useEffect(()=>{l!==void 0&&T(l)},[l]),g.useEffect(()=>{if(x)F(!1);else{const c=setTimeout(()=>{F(!0)},xn);return()=>clearTimeout(c)}},[x]);const I=()=>{const c=!x;l===void 0&&T(c),w==null||w(c)},R=x?"arrow-double-right":"arrow-double-left",ae=Ea(f,D),Ke=c=>{[Me,_e].includes(c.key)&&(c.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:Ve}=Aa({onKeyDown:Ke},{interactiveKeyCodes:[Me,_e]}),U=s.jsxs("div",{className:k.sideNavHeaderTitle,children:[s.jsx("div",{className:k.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),!x&&s.jsx("h1",{children:e==null?void 0:e.title})]}),ne=e==null?void 0:e.ariaLabel,Oe=s.jsx(O,{href:(e==null?void 0:e.link)??"",className:k.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":ne,children:U}),le=s.jsx("div",{className:k.sideNavHeaderTitleContainer,tabIndex:0,onClick:e==null?void 0:e.onClick,onKeyDown:Ve,role:"button","aria-label":ne,children:U}),ze=e!=null&&e.link?Oe:e!=null&&e.onClick?le:s.jsx("div",{className:k.sideNavHeaderTitleContainer,children:U}),Ge=g.useMemo(()=>(e==null?void 0:e.tooltip)??(e==null?void 0:e.title)??"",[e==null?void 0:e.tooltip,e==null?void 0:e.title]),Ye=s.jsx(Fe,{label:Ge,isCollapsed:x,children:ze});function de(c){return c!=null&&c.length?s.jsx("ul",{children:c.map(u=>{var tt;return((tt=u.items)==null?void 0:tt.length)?s.jsx(Ze,{id:u.id,badge:u.badge,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:x,link:u.link,onClick:u.onClick,items:u.items||[],open:L(u),onMenuOpenChange:te,getMenuOpen:L,active:u.active,appearance:f,contrast:D,hasDivider:u.hasDivider},u.id):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(Pe,{id:u.id,badge:u.badge,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:x,link:u.href??u.link,onClick:u.onClick,appearance:f,active:u.active??(u.id===Y&&!!Y),onActiveItemChange:_})}),u.hasDivider&&s.jsx(re,{appearance:ae})]},u.id)})}):null}return s.jsx(_a,{ref:M,size:a,isCollapsed:x,appearance:f,contrast:D,header:s.jsxs("div",{className:k.sideNavHeaderContainer,"data-compact":(e==null?void 0:e.isCompact)??!1,"data-collapsed":x,children:[s.jsxs("div",{className:k.sideNavHeader,"data-collapsed":x,"data-appearance":f,"data-compact":(e==null?void 0:e.isCompact)??!1,children:[Ye,!(e!=null&&e.isCompact)&&s.jsx("div",{className:k.sideNavHeaderVersion,"data-hidden":!Z,children:s.jsx("span",{children:e==null?void 0:e.version})})]}),s.jsx(re,{appearance:ae})]}),body:s.jsx("div",{className:k.sideNavBody,children:de(i)}),footer:((o==null?void 0:o.length)||n)&&s.jsxs("div",{className:k.sideNavFooterContainer,children:[(o==null?void 0:o.length)&&s.jsx("div",{className:k.sideNavFooterItems,children:de(o)}),s.jsx(re,{appearance:ae}),s.jsx("div",{className:k.sideNavFooter,children:n&&s.jsx("div",{className:k.collapsibleSection,children:s.jsx(Pe,{id:"collapse-button",icon:R,hasLeadingIcon:!0,isCollapsed:x,onClick:I,label:x?"Ouvrir le menu":"Réduire le menu",appearance:f,role:"button"})})})]}),children:t})});qe.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function Sa(a,n){return a.some(t=>{var e;return t.id===n?!0:(e=t.items)!=null&&e.length?Sa(t.items,n):!1})}function wn(a,n){if(!a.id||!n)return a.onClick;const t=()=>{n(a.id)};return a.onClick?()=>{t(),a.onClick()}:t}function ka(a,n,t){return a.map(e=>{var f;const i=(f=e.items)!=null&&f.length?ka(e.items,n,t):void 0,o=!!(i!=null&&i.length),l=!o&&e.id===n,v=o&&e.id===n,w=e,b=o&&(e.id===n||Sa(e.items,n));return{...e,active:l||v,open:b?!0:w.open,items:i,onClick:wn(e,t)}})}function We(){return function(n,t){const[e,i]=g.useState(t.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...t.args,isCollapsed:e,onCollapsedChange:i}})})}}function Tn(a){return function(t,e){const[i,o]=g.useState(e.args.activeItem),l=a.map(v=>({...v,onClick:()=>o(v.id),link:void 0}));return s.jsx("div",{children:s.jsx(t,{args:{...e.args,items:l,activeItem:i}})})}}function Ha(a,n){return function(e,i){const[o,l]=g.useState(n),v=g.useMemo(()=>ka(a,o,l),[o,a]);return s.jsx(e,{args:{...i.args,items:v}})}}function ja(a){if(!a)return null;const n=Array.from(a.children);for(const o of n)if(o.tagName==="A"||o.tagName==="SPAN"&&o.hasAttribute("tabindex"))return o;const t=a.querySelector("a");return t||Array.from(a.querySelectorAll("span")).find(o=>o.hasAttribute("tabindex"))}function p(a,n,t){const e=t?a.querySelector(t):a;if(!e)return null;const i=t?P(e):P(a),o=i.queryByRole("link",{name:n});if(o)return o;const l=i.queryByText(n);if(l){const v=l.closest("li");return ja(v)}return null}function ce(a,n){const t=a.querySelector('[class*="sideNavBody"]');if(!t)return null;const i=Array.from(t.querySelectorAll("li"))[n];return ja(i)}function $(a,n){return p(a,n,'[class*="sideNavFooterItems"]')}function G(a,n="MA"){var o;return(o=P(a).getByText(n).parentElement)==null?void 0:o.parentElement}function En(a,n){return a.querySelector(`#${n}`)}function An(a){return a.dataset.active==="true"}function B(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function H(a,n){const t=p(a,n);t&&r(t).not.toHaveFocus()}function j(a,n){const t=p(a,n);t&&r(t).toHaveAttribute("tabindex","-1")}function K(a,n){const t=p(a,n);t&&r(t).toHaveAttribute("tabindex","0")}async function Da(a,n,t){await Fa(()=>{const e=a.getByRole("navigation"),i=En(e,n);if(!i){r(t).toBe(!1);return}r(An(i)).toBe(t)})}function q(a,n){return Da(a,n,!0)}function y(a,n){return Da(a,n,!1)}function E(a){const n=P(a),t=n.getByRole("navigation");return{canvas:n,sideNav:t}}function Q(a=200){return new Promise(n=>setTimeout(n,a))}const ss={title:"Composants/SideNav/SideNav",id:"SideNav",component:qe,tags:["autodocs"],decorators:[a=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>s.jsx(qe,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,isCollapsed:a.isCollapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:In})},In=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),C={hasLeadingIcon:!0},V={size:"m",content:"number"},N=[{...C,id:"home",label:"Home",icon:"home"},{...C,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...C,id:"analytics",label:"Analytics",icon:"analytics"},{...C,id:"settings",label:"Settings",icon:"settings"},{...C,id:"profile",label:"Profile",icon:"user",link:"/profile"}],Bn=[{...C,id:"home",label:"Home",icon:"home",href:"/"},{...C,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...C,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...C,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...C,id:"profile",label:"Profile",icon:"user",href:"/profile"}],X=N,Ma=[N[0],{...N[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...N[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},N[4]],Cn=[N[0],{...N[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},N[4]],Sn=[N[0],{...N[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...N[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},N[4]],Le=[N[0],{...N[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...N[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},N[4]],kn=[{...N[0],badge:{...V,badgeType:"indicator",count:5}},{...N[1],badge:{...V,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...V,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...V,badgeType:"indicator",count:12}}]},{...N[3],items:[{label:"General"},{label:"Privacy",badge:{...V,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...V,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...V,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...N[4],badge:{...V,badgeType:"brand",count:8}}],et=[{...C,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...C,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...C,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],h={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},Hn="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",jn={...h},Dn={...h,onClick:()=>{console.log("Header clicked")}},m={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:X}},ue={tags:["skip-ci"],args:{...m.args,collapsible:!0}},pe={tags:["skip-ci"],args:{...m.args,items:Bn},render:a=>{const n=()=>{const t=Ka();return g.useEffect(()=>{t("/")},[]),s.jsx(qe,{...a,activeItem:"home",onActiveItemChange:e=>console.log("Active item changed to:",e),children:s.jsx("div",{style:{padding:"2rem"},children:s.jsxs(Va,{children:[s.jsx(ie,{path:"/",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),s.jsx(ie,{path:"/dashboard",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),s.jsx(ie,{path:"/analytics",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),s.jsx(ie,{path:"/settings",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),s.jsx(ie,{path:"/profile",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return s.jsx(Wa,{children:s.jsx(za,{linkComponent:La,children:s.jsx(n,{})})})}},ve={tags:["skip-ci"],args:{...m.args,headerConfig:h}},me={tags:["skip-ci"],args:{...m.args,headerConfig:{...h,isCompact:!0}}},ye={args:{...m.args,headerConfig:{...h,title:Hn},size:"m"},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(t.offsetWidth).toBe(Ra.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const e=t.querySelector("h1");r(e).not.toBeNull(),r(getComputedStyle(e).textOverflow).toBe("ellipsis"),r(e.scrollWidth).toBeGreaterThan(e.clientWidth)})}},ge={tags:["skip-ci"],args:{...m.args,headerConfig:h,items:Le,collapsible:!0}},Ne={tags:["skip-ci"],args:{...m.args,headerConfig:h,items:Le,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Navigate through navigation when all menus are closed",async()=>{j(t,"Overview"),j(t,"Reports"),j(t,"Analytics"),j(t,"General"),j(t,"Privacy"),j(t,"Advanced");const e=p(t,"Home");e==null||e.focus(),B(e),await d.tab();const i=p(t,"Dashboard");B(i),H(t,"Overview"),H(t,"Reports"),H(t,"Analytics"),await d.tab();const o=p(t,"Settings");B(o),H(t,"General"),H(t,"Privacy"),H(t,"Advanced"),await d.tab();const l=p(t,"Profile");B(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const e=p(t,"Dashboard");await d.click(e),K(t,"Overview"),K(t,"Reports"),K(t,"Analytics"),await d.tab();const i=p(t,"Overview");B(i),await d.tab();const o=p(t,"Reports");B(o),await d.tab();const l=p(t,"Analytics");B(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const e=p(t,"Dashboard");await d.click(e),j(t,"Overview"),j(t,"Reports"),j(t,"Analytics"),await d.tab();const i=p(t,"Settings");B(i),H(t,"Overview"),H(t,"Reports"),H(t,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const e=p(t,"Settings");await d.click(e),K(t,"General"),K(t,"Privacy"),K(t,"Advanced"),j(t,"Security"),j(t,"API Keys"),await d.tab();const i=p(t,"General");B(i),await d.tab();const o=p(t,"Privacy");B(o),await d.tab();const l=p(t,"Advanced");B(l),H(t,"Security"),H(t,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const e=p(t,"Advanced");await d.click(e),K(t,"Security"),K(t,"API Keys"),await d.tab();const i=p(t,"Security");B(i),await d.tab();const o=p(t,"API Keys");B(o)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const e=p(t,"Advanced");await d.click(e),j(t,"Security"),j(t,"API Keys"),await d.tab();const i=p(t,"Profile");B(i),H(t,"Security"),H(t,"API Keys")})}},fe={args:{...m.args,headerConfig:{...h,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const e=G(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),r(e).not.toHaveAttribute("href"),r(e).not.toHaveAttribute("role","button"),r(e).not.toHaveAttribute("tabindex")})}},he={args:{...m.args,headerConfig:jn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header is a link when link prop is provided",async()=>{const e=G(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("A"),r(e).toHaveAttribute("href","/"),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const e=G(t);e==null||e.focus(),r(e).toHaveFocus()})}},be={args:{...m.args,headerConfig:{...Dn,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header is clickable button when onClick is provided",async()=>{const e=G(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),await d.click(e),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const e=G(t);e==null||e.focus(),r(e).toHaveFocus(),await d.keyboard(Pa),await d.keyboard(qa)})}},xe={args:{...m.args,headerConfig:h,items:X,collapsible:!0,isCollapsed:!0},decorators:[We()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header tooltip falls back to title when collapsed",async()=>{const e=G(t);r(e).not.toBeNull(),e==null||e.focus(),await Q();const i=P(document.body).queryByRole("tooltip",{name:"My Application"});r(i).not.toBeNull(),r(i).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const e=ce(t,0);r(e).not.toBeNull(),e==null||e.focus(),await Q();const i=P(document.body).queryByRole("tooltip",{name:"Home"});r(i).not.toBeNull(),r(i).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await d.tab(),await Q();const e=P(document.body).queryByRole("tooltip",{name:"Dashboard"});r(e).not.toBeNull(),r(e).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await d.tab(),await d.tab(),await d.tab(),await Q();const e=P(document.body).queryByRole("tooltip",{name:"Profile"});r(e).not.toBeNull(),r(e).toHaveTextContent("Profile")})}},we={args:{...m.args,headerConfig:{...h,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[We()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const e=G(t);r(e).not.toBeNull(),e==null||e.focus(),await Q();const i=P(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(i).not.toBeNull(),r(i).toHaveTextContent("Custom header tooltip")})}},Te={args:{...m.args,headerConfig:h,items:Le,collapsible:!0,isCollapsed:!0},decorators:[We()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{Oa(a);const e=ce(t,1);r(e).not.toBeNull(),await d.tab(),await d.tab(),await d.tab(),await Q();const i=P(document.body).queryByRole("tooltip",{name:"Dashboard"});r(i).not.toBeNull(),r(i).toHaveTextContent("Dashboard")})}},Ee={tags:["skip-ci"],args:{...m.args,headerConfig:h,items:Sn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify Overview nested item is active",async()=>{q(t,"overview"),y(t,"reports")})}},Ae={tags:["skip-ci"],args:{...m.args,headerConfig:h,items:Cn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{q(t,"security"),y(t,"advanced"),y(t,"settings"),y(t,"api-keys")})}},Ie={tags:["skip-ci"],args:{...m.args,headerConfig:h,collapsible:!0},decorators:[Ha(Ma,"security")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify only Security is active, not parent NavMenus",async()=>{q(t,"security"),y(t,"advanced"),y(t,"settings"),y(t,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const e=t.getByRole("navigation"),i=p(e,"API Keys");r(i).not.toBeNull(),await d.click(i),y(t,"security"),q(t,"api-keys"),y(t,"advanced"),y(t,"settings")})}},Be={tags:["skip-ci"],args:{...m.args,headerConfig:h,collapsible:!0},decorators:[Ha(Ma,"overview")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify Overview leaf is active initially",async()=>{q(t,"overview"),y(t,"reports"),y(t,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const e=t.getByRole("navigation"),i=p(e,"Reports");r(i).not.toBeNull(),await d.click(i),y(t,"overview"),q(t,"reports"),y(t,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const e=t.getByRole("navigation"),i=p(e,"Settings");r(i).not.toBeNull(),await d.click(i);const o=p(e,"Advanced");r(o).not.toBeNull(),await d.click(o),y(t,"overview"),y(t,"reports"),y(t,"security"),y(t,"api-keys"),q(t,"advanced")})}},Ce={args:{...m.args,headerConfig:h,items:X,activeItem:"home",collapsible:!0},decorators:[Tn(X)],play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify Home has active class initially",async()=>{q(t,"home"),y(t,"dashboard"),y(t,"analytics"),y(t,"settings"),y(t,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=t.getByRole("navigation"),i=p(e,"Dashboard");r(i).not.toBeNull(),await d.click(i),y(t,"home"),q(t,"dashboard"),y(t,"analytics"),y(t,"settings"),y(t,"profile")})}},Se={args:{...m.args,headerConfig:h,items:X,footerItems:et,collapsible:!0}},ke={args:{...m.args,headerConfig:h,items:X,footerItems:et,collapsible:!1}},He={args:{...m.args,headerConfig:h,items:Le,footerItems:et,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify footer items are rendered",async()=>{const e=$(t,"Settings");r(e).not.toBeNull();const i=$(t,"Help & Support");r(i).not.toBeNull();const o=$(t,"Account");r(o).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const e=$(t,"Account");await d.click(e);const i=$(t,"Preferences");r(i).not.toBeNull();const o=$(t,"Logout");r(o).not.toBeNull()})}},oe={tags:["skip-ci"],args:{...m.args,headerConfig:h,items:kn,collapsible:!0}},je={args:{...oe.args,isCollapsed:!0},decorators:[We()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var o;const e=ce(t,0);r(e).not.toBeNull();const i=e==null?void 0:e.querySelector('[data-size="xs"]');r(i).not.toBeNull(),r(i).toHaveAttribute("data-badge-type","indicator"),r((o=i==null?void 0:i.textContent)==null?void 0:o.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const e=ce(t,0);r(e==null?void 0:e.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var o;const e=ce(t,1);r(e).not.toBeNull();const i=e==null?void 0:e.querySelector('[data-size="xs"]');r(i).not.toBeNull(),r(i).toHaveAttribute("data-badge-type","indicator"),r((o=i==null?void 0:i.textContent)==null?void 0:o.trim()).toBe("")})}},Mn=[N[0],{...N[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...N[2],hasDivider:!0},{...C,id:"reports",label:"Reports",icon:"info"},{...N[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},N[4]],De={args:{...m.args,headerConfig:h,items:Mn,collapsible:!0}};var nt,st,it;m.parameters={...m.parameters,docs:{...(nt=m.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(it=(st=m.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ot,rt,ct;ue.parameters={...ue.parameters,docs:{...(ot=ue.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(ct=(rt=ue.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var lt,dt,ut;pe.parameters={...pe.parameters,docs:{...(lt=pe.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    items: baseNavItemsRouting
  },
  render: args => {
    const StoryComponent = () => {
      const navigate = useNavigate();
      useEffect(() => {
        navigate("/");
      }, []);
      return <SideNav {...args} activeItem="home" onActiveItemChange={id => console.log("Active item changed to:", id)}>
          <div style={{
          padding: "2rem"
        }}>
            <Routes>
              <Route path="/" element={<div>
                    <h1 style={{
                margin: "0 0 1rem 0"
              }}>Home</h1>
                    <p style={{
                lineHeight: "1.6",
                color: "#555",
                marginBottom: "1rem"
              }}>
                      Welcome to the home. Use the navigation on the left to explore different sections.
                    </p>
                  </div>} />
              <Route path="/dashboard" element={<div>
                    <h1 style={{
                margin: "0 0 1rem 0"
              }}>Dashboard</h1>
                    <p style={{
                lineHeight: "1.6",
                color: "#555",
                marginBottom: "1rem"
              }}>
                      This is the dashboard page. Here you can find an overview of your application's performance and
                    </p>
                  </div>} />
              <Route path="/analytics" element={<div>
                    <h1 style={{
                margin: "0 0 1rem 0"
              }}>Analytics</h1>
                    <p style={{
                lineHeight: "1.6",
                color: "#555",
                marginBottom: "1rem"
              }}>
                      This is the analytics page. Here you can find detailed insights and data visualizations about your
                    </p>
                  </div>} />
              <Route path="/settings" element={<div>
                    <h1 style={{
                margin: "0 0 1rem 0"
              }}>Settings</h1>
                    <p style={{
                lineHeight: "1.6",
                color: "#555",
                marginBottom: "1rem"
              }}>
                      This is the settings page. Here you can configure your application's preferences and options.
                    </p>
                  </div>} />
              <Route path="/profile" element={<div>
                    <h1 style={{
                margin: "0 0 1rem 0"
              }}>Profile</h1>
                    <p style={{
                lineHeight: "1.6",
                color: "#555",
                marginBottom: "1rem"
              }}>
                      This is the profile page. Here you can view and edit your personal information.
                    </p>
                  </div>} />
            </Routes>
          </div>
        </SideNav>;
    };
    return <BrowserRouter>
        <NavigationProvider linkComponent={NavLink}>
          <StoryComponent />
        </NavigationProvider>
      </BrowserRouter>;
  }
}`,...(ut=(dt=pe.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var pt,vt,mt;ve.parameters={...ve.parameters,docs:{...(pt=ve.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(mt=(vt=ve.parameters)==null?void 0:vt.docs)==null?void 0:mt.source}}};var yt,gt,Nt;me.parameters={...me.parameters,docs:{...(yt=me.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(Nt=(gt=me.parameters)==null?void 0:gt.docs)==null?void 0:Nt.source}}};var ft,ht,bt;ye.parameters={...ye.parameters,docs:{...(ft=ye.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(bt=(ht=ye.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};var xt,wt,Tt;ge.parameters={...ge.parameters,docs:{...(xt=ge.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Tt=(wt=ge.parameters)==null?void 0:wt.docs)==null?void 0:Tt.source}}};var Et,At,It;Ne.parameters={...Ne.parameters,docs:{...(Et=Ne.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(It=(At=Ne.parameters)==null?void 0:At.docs)==null?void 0:It.source}}};var Bt,Ct,St;fe.parameters={...fe.parameters,docs:{...(Bt=fe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(St=(Ct=fe.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var kt,Ht,jt;he.parameters={...he.parameters,docs:{...(kt=he.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(jt=(Ht=he.parameters)==null?void 0:Ht.docs)==null?void 0:jt.source}}};var Dt,Mt,_t;be.parameters={...be.parameters,docs:{...(Dt=be.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(_t=(Mt=be.parameters)==null?void 0:Mt.docs)==null?void 0:_t.source}}};var Rt,Pt,qt;xe.parameters={...xe.parameters,docs:{...(Rt=xe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(qt=(Pt=xe.parameters)==null?void 0:Pt.docs)==null?void 0:qt.source}}};var Ft,Wt,Lt;we.parameters={...we.parameters,docs:{...(Ft=we.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Lt=(Wt=we.parameters)==null?void 0:Wt.docs)==null?void 0:Lt.source}}};var Kt,Vt,Ot;Te.parameters={...Te.parameters,docs:{...(Kt=Te.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Ot=(Vt=Te.parameters)==null?void 0:Vt.docs)==null?void 0:Ot.source}}};var zt,Gt,Yt;Ee.parameters={...Ee.parameters,docs:{...(zt=Ee.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Yt=(Gt=Ee.parameters)==null?void 0:Gt.docs)==null?void 0:Yt.source}}};var Ut,$t,Jt;Ae.parameters={...Ae.parameters,docs:{...(Ut=Ae.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Jt=($t=Ae.parameters)==null?void 0:$t.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;Ie.parameters={...Ie.parameters,docs:{...(Qt=Ie.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=Ie.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var ea,ta,aa;Be.parameters={...Be.parameters,docs:{...(ea=Be.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(aa=(ta=Be.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var na,sa,ia;Ce.parameters={...Ce.parameters,docs:{...(na=Ce.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(ia=(sa=Ce.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var oa,ra,ca;Se.parameters={...Se.parameters,docs:{...(oa=Se.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(ca=(ra=Se.parameters)==null?void 0:ra.docs)==null?void 0:ca.source}}};var la,da,ua;ke.parameters={...ke.parameters,docs:{...(la=ke.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(ua=(da=ke.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,va,ma;He.parameters={...He.parameters,docs:{...(pa=He.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ma=(va=He.parameters)==null?void 0:va.docs)==null?void 0:ma.source}}};var ya,ga,Na;oe.parameters={...oe.parameters,docs:{...(ya=oe.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Na=(ga=oe.parameters)==null?void 0:ga.docs)==null?void 0:Na.source}}};var fa,ha,ba;je.parameters={...je.parameters,docs:{...(fa=je.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(ba=(ha=je.parameters)==null?void 0:ha.docs)==null?void 0:ba.source}}};var xa,wa,Ta;De.parameters={...De.parameters,docs:{...(xa=De.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Ta=(wa=De.parameters)==null?void 0:wa.docs)==null?void 0:Ta.source}}};const is=["Default","Collapsible","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers"];export{Ce as ActiveItemState,we as CollapsedHeaderTooltipCustom,xe as CollapsedTooltip,Te as CollapsedTooltipWithNested,je as CollapsedWithBadges,ue as Collapsible,m as Default,ke as FooterItemsOnly,He as FooterItemsWithNested,fe as HeaderClickability,me as HeaderCompact,he as HeaderWithLink,ye as HeaderWithLongTitle,be as HeaderWithOnClick,ve as HeaderWithVersion,Ne as KeyboardNavigation,Be as NestedItemActiveOnClick,Ee as NestedItemActivePreselected,Ie as NestedNavMenuActiveOnClick,Ae as NestedNavMenuActivePreselected,oe as WithBadges,pe as WithCustomRouter,De as WithDividers,Se as WithFooterItems,ge as WithNestedMenus,is as __namedExportsOrder,ss as default};
