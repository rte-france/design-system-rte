import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{g as Ua,B as dn,s as Ya}from"./BaseSideNav-DneV_rnp.js";import{T as un,a as pn}from"./keyboard-test.constants-By8W48aj.js";import{w as W,e as r,a as vn,u}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{B as mn,N as gn,u as yn,R as hn,a as oe}from"./chunk-KS7C4IRE-DoFVsaq3.js";import{f as fn}from"./testing.utils-mIZIUNbM.js";import{N as Nn}from"./NavigationProvider-Bs4LKj9F.js";import{D as le}from"./Divider-BMotkXeQ.js";import{s as bn,I as Ze,B as et}from"./Badge-DkJhvK8e.js";import{u as tt}from"./NavigationContext-D2CUoNWC.js";import{I as $a}from"./Icon-DgLH6pPJ.js";import{T as xn}from"./Tooltip-CQZMCJle.js";import{S as Le,E as Oe,c as ct,b as Cn,d as wn}from"./keyboard.constants-BverKK8B.js";import{u as Ja}from"./useActiveKeyboard-DaOmFJe_.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const lt={HEADER_CONFIG_AND_CUSTOM:"SideNav: Both headerConfig and a custom header were provided. The custom header takes precedence.",FOOTER_ITEMS_AND_CUSTOM:"SideNav: Both footerItems (or collapsible default footer) and a custom footer were provided. The custom footer takes precedence."},Tn=[{condition:t=>t.hasCustomHeader&&t.hasHeaderConfig,issue:lt.HEADER_CONFIG_AND_CUSTOM},{condition:t=>t.hasCustomFooter&&(t.hasFooterItems||!!t.collapsible),issue:lt.FOOTER_ITEMS_AND_CUSTOM}];function En(t){var e;return((e=Tn.find(({condition:a})=>a(t)))==null?void 0:e.issue)??null}function An(t,n){return!t&&!!n}function In(t,n,e){return!t&&!!(n!=null&&n.length||e)}function Sn(t,n){return!!(t||n)}function Bn(t,n,e){return!!(t||n!=null&&n.length||e)}function Hn(t=!1,n=!1){return t?Ze.s:n?Ze.l:Ze.m}function Ve(t){return t?bn({showBadge:!0,badgeContent:t.content??"number",badgeCount:t.count,badgeIcon:t.icon}):!1}function kn(t){return t.badgeType??"indicator"}const Dn="_navItemContainer_l1d46_1",jn="_navItemLeft_l1d46_47",_n="_navItem_l1d46_1",Mn="_navItemRight_l1d46_64",ae={navItemContainer:Dn,navItemLeft:jn,navItem:_n,navItemRight:Mn},Fn="_navMenuContainer_ycjt5_1",Rn="_navMenu_ycjt5_1",qn="_menuContentLeft_ycjt5_31",Pn="_menuContentRight_ycjt5_36",Wn="_menuIcon_ycjt5_95",Ln="_nestedMenu_ycjt5_103",On="_icon_ycjt5_119",J={navMenuContainer:Fn,navMenu:Rn,menuContentLeft:qn,menuContentRight:Pn,menuIcon:Wn,nestedMenu:Ln,icon:On};function at({link:t,label:n,tabIndex:e,onKeyDown:a,onFocus:i,onBlur:o,onClick:l,children:d,styleType:N="item"}){const w=tt(),C=N==="menu"?J:ae,b={className:N==="menu"?C.navMenu:C.navItem,tabIndex:e,"aria-label":n,...i&&{onFocus:i},...o&&{onBlur:o},...l&&{onClick:l},...a&&{onKeyDown:a}};return t?s.jsx(w,{href:t,...b,children:d}):s.jsx("span",{...b,children:d})}at.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function nt({icon:t,hasLeadingIcon:n=!0,label:e,isCollapsed:a,isNested:i,styleType:o="item",badge:l}){const d=Hn(i,a),N=o==="menu"?J:ae;function w(){if(!n||!t)return null;const C=s.jsx($a,{name:t,className:N.icon,size:d});return a&&l&&Ve(l)?s.jsx(et,{badgeType:kn(l),size:"xs",content:"empty",children:C}):C}return s.jsxs(s.Fragment,{children:[w(),a?null:s.jsx("span",{children:e})]})}nt.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function Ke({label:t,isCollapsed:n,children:e}){return n&&t?s.jsx(xn,{label:t,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}Ke.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Qa(t){return t===!1?-1:0}function Xa({onEnterOrSpace:t,onEscape:n,includeArrowKeys:e=!1,includeEscape:a=!1}={}){const i=g.useCallback(d=>{[Le,Oe].includes(d.key)&&(d.preventDefault(),t==null||t()),d.key===ct&&a&&(d.preventDefault(),n==null||n())},[t,n,a]),o=[Le,Oe,...a?[ct]:[],...e?[Cn,wn]:[]],{onKeyDown:l}=Ja({onKeyDown:i},{interactiveKeyCodes:o});return{onKeyDown:l}}const ze=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:i,isCollapsed:o,link:l,href:d,isNested:N,parentMenuOpen:w,appearance:C="brand",active:k,badge:b,onActiveItemChange:S,...O},T)=>{const E=tt(),M=g.useRef(null),F=g.useRef(null),V=!!(d||l),{onKeyDown:Y}=Xa({onEnterOrSpace:a});function X(){var B,P;(B=M.current)==null||B.setAttribute("data-focused","true"),(P=F.current)==null||P.setAttribute("data-focused","true")}function K(){var B,P;(B=M.current)==null||B.removeAttribute("data-focused"),(P=F.current)==null||P.removeAttribute("data-focused")}const se=Qa(w),$=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:ae.navItemLeft,children:s.jsx(nt,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:N,styleType:"item",badge:b})}),s.jsx("div",{className:ae.navItemRight,children:!o&&b&&Ve(b)&&s.jsx(et,{badgeType:b.badgeType,size:b.size,content:b.content,count:b.count})})]}),R=V?s.jsx(E,{id:t,"aria-label":i,className:ae.navItemContainer,"data-collapsed":o,"data-appearance":C,"data-nested":N,"data-active":k,href:d??l,to:d??l,onClick:()=>S==null?void 0:S(t),onBlur:K,ref:F,children:$}):s.jsx("div",{id:t,className:ae.navItemContainer,"data-collapsed":o,"data-appearance":C,"data-nested":N,"data-active":k,onClick:a,ref:B=>{M.current=B,typeof T=="function"?T(B):T&&"current"in T&&(T.current=B)},...O,children:s.jsx(at,{label:i,tabIndex:se,onKeyDown:Y,onFocus:X,onBlur:K,styleType:"item",children:$})});return s.jsx(Ke,{label:i,isCollapsed:o,children:R})});ze.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const st=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:i,isCollapsed:o,link:l,items:d=[],open:N,onOpenChange:w,hasMenuIcon:C=!0,isNested:k,parentMenuOpen:b,appearance:S="brand",contrast:O="high",badge:T,hasDivider:E,active:M,onMenuOpenChange:F,getMenuOpen:V,...Y},X)=>{const K=Ua(S,O),[se,$]=g.useState(!1),R=N??se,B=N!==void 0;function P(){const c=!R,ee=t||i;if(a&&a(),ee&&F){F(ee,c);return}B?w==null||w(c):$(c)}function Ye(){if(!R)return;const c=t||i;if(c&&F){F(c,!1);return}B?w==null||w(!1):$(!1)}const{onKeyDown:Z}=Xa({onEnterOrSpace:P,onEscape:Ye,includeArrowKeys:!0,includeEscape:!0}),$e=d.length,ue=!o&&$e,pe=R,Je=Qa(b),ie=ue&&C?s.jsx($a,{name:"arrow-chevron-right",className:J.menuIcon,"data-open":R}):null,Qe=!o&&(Ve(T)||!!ie),Xe=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:J.menuContentLeft,children:s.jsx(nt,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:k,styleType:"menu",badge:T})}),Qe&&s.jsxs("div",{className:J.menuContentRight,children:[T&&Ve(T)&&s.jsx(et,{badgeType:T.badgeType,size:T.size,content:T.content,count:T.count}),ie]})]}),f=s.jsxs("li",{id:t,className:J.navMenuContainer,"data-collapsed":o,"data-appearance":S,"data-nested":k,"data-open":R,"data-active":M,ref:X,...Y,children:[s.jsx(at,{link:l,label:i,tabIndex:Je,onClick:P,onKeyDown:Z,styleType:"menu",children:Xe}),ue&&s.jsx("ul",{className:J.nestedMenu,"data-open":R,children:d.map(c=>{var rt;return(rt=c.items)!=null&&rt.length?s.jsx(st,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:o,link:c.link,onClick:c.onClick,items:c.items||[],open:V?V(c):c.open,onOpenChange:c.onOpenChange,onMenuOpenChange:F,getMenuOpen:V,active:c.active,hasMenuIcon:C,hasDivider:c.hasDivider,isNested:!0,parentMenuOpen:pe,appearance:S,contrast:O,badge:c.badge},c.id||c.label):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(ze,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:o,link:c.link,onClick:c.onClick,isNested:!0,parentMenuOpen:pe,appearance:S,active:c.active,badge:c.badge})}),c.hasDivider&&s.jsx(le,{appearance:K})]},c.id||c.label)})})]}),p=s.jsx(Ke,{label:i,isCollapsed:o,children:f});return s.jsxs(s.Fragment,{children:[p,E&&s.jsx(le,{appearance:K})]})});st.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Vn="_sideNavHeaderContainer_1p15a_1",Kn="_sideNavHeader_1p15a_1",zn="_sideNavHeaderTitleContainer_1p15a_38",Gn="_sideNavHeaderTitle_1p15a_38",Un="_sideNavHeaderIdentifier_1p15a_47",Yn="_sideNavHeaderVersion_1p15a_119",$n="_sideNavBody_1p15a_148",Jn="_sideNavFooterContainer_1p15a_172",Qn="_sideNavFooter_1p15a_172",Xn="_sideNavFooterItems_1p15a_185",Zn="_collapsibleSection_1p15a_202",_={sideNavHeaderContainer:Vn,sideNavHeader:Kn,sideNavHeaderTitleContainer:zn,sideNavHeaderTitle:Gn,sideNavHeaderIdentifier:Un,sideNavHeaderVersion:Yn,sideNavBody:$n,sideNavFooterContainer:Jn,sideNavFooter:Qn,sideNavFooterItems:Xn,collapsibleSection:Zn};function Za({footerItemsContent:t,collapsible:n,isCollapsed:e,appearance:a,dividerAppearance:i,collapseIcon:o,onCollapse:l}){return s.jsxs("div",{className:_.sideNavFooterContainer,children:[t&&s.jsx("div",{className:_.sideNavFooterItems,children:t}),s.jsx(le,{appearance:i}),s.jsx("div",{className:_.sideNavFooter,children:n&&s.jsx("div",{className:_.collapsibleSection,children:s.jsx(ze,{id:"collapse-button",icon:o,hasLeadingIcon:!0,isCollapsed:e,onClick:l,label:e?"Ouvrir le menu":"Réduire le menu",appearance:a,role:"button"})})})]})}Za.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultFooter",props:{footerItemsContent:{required:!0,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},collapseIcon:{required:!0,tsType:{name:"string"},description:""},onCollapse:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function it({isCollapsed:t,appearance:n,dividerAppearance:e,isCompact:a=!1,children:i}){return s.jsxs("div",{className:_.sideNavHeaderContainer,"data-compact":a,"data-collapsed":t,children:[s.jsx("div",{className:_.sideNavHeader,"data-collapsed":t,"data-appearance":n,"data-compact":a,children:i}),s.jsx(le,{appearance:e})]})}it.__docgenInfo={description:"",methods:[],displayName:"SideNavHeaderContainer",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function en({headerConfig:t,isCollapsed:n,shouldShowTitle:e,appearance:a,dividerAppearance:i}){const o=tt(),l=E=>{var M;[Le,Oe].includes(E.key)&&(E.preventDefault(),(M=t.onClick)==null||M.call(t))},{onKeyDown:d}=Ja({onKeyDown:l},{interactiveKeyCodes:[Le,Oe]}),N=s.jsxs("div",{className:_.sideNavHeaderTitle,children:[s.jsx("div",{className:_.sideNavHeaderIdentifier,children:t.identifier}),!n&&s.jsx("h1",{children:t.title})]}),w=t.ariaLabel,C=s.jsx(o,{href:t.link??"",className:_.sideNavHeaderTitleContainer,onClick:t.onClick,"aria-label":w,children:N}),k=s.jsx("div",{className:_.sideNavHeaderTitleContainer,tabIndex:0,onClick:t.onClick,onKeyDown:d,role:"button","aria-label":w,children:N}),b=s.jsx("div",{className:_.sideNavHeaderTitleContainer,children:N});function S(){return t.link?C:t.onClick?k:b}const O=g.useMemo(()=>t.tooltip??t.title??"",[t.tooltip,t.title]),T=s.jsx(Ke,{label:O,isCollapsed:n,children:S()});return s.jsxs(it,{isCollapsed:n,isCompact:!!t.isCompact,appearance:a,dividerAppearance:i,children:[T,!t.isCompact&&s.jsx("div",{className:_.sideNavHeaderVersion,"data-hidden":!e,children:s.jsx("span",{children:t.version})})]})}en.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultHeader",props:{headerConfig:{required:!0,tsType:{name:"SideNavHeaderConfig"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},shouldShowTitle:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""}}};const es=300,U=g.forwardRef(({size:t="m",collapsible:n,children:e,header:a,footer:i,headerConfig:o,items:l,footerItems:d,isCollapsed:N,defaultCollapsed:w=!1,onCollapsedChange:C,onActiveItemChange:k,appearance:b="brand",contrast:S="high",activeItem:O},T)=>{const[E,M]=g.useState(N??w),[F,V]=g.useState(!0),[Y,X]=g.useState({}),[K,se]=g.useState(O),$=g.useCallback((f,p)=>{X(c=>({...c,[f]:p}))},[]),R=g.useCallback(f=>f.id&&f.id in Y?Y[f.id]:f.open,[Y]),B=g.useCallback(f=>{se(f),k==null||k(f)},[k]);g.useEffect(()=>{X({})},[l]),g.useEffect(()=>{N!==void 0&&M(N)},[N]),g.useEffect(()=>{if(E)V(!1);else{const f=setTimeout(()=>{V(!0)},es);return()=>clearTimeout(f)}},[E]);const P=()=>{const f=!E;N===void 0&&M(f),C==null||C(f)},Ye=E?"arrow-double-right":"arrow-double-left",Z=Ua(b,S),$e=An(a,o),ue=In(i,d,n),pe=Sn(a,o),Je=Bn(i,d,n);g.useEffect(()=>{const f=En({hasCustomHeader:!!a,hasHeaderConfig:!!o,hasCustomFooter:!!i,hasFooterItems:!!(d!=null&&d.length),collapsible:n});f&&console.warn(f)},[a,o,i,d,n]);function ie(f){return f!=null&&f.length?s.jsx("ul",{children:f.map(p=>{var ee;return((ee=p.items)==null?void 0:ee.length)?s.jsx(st,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:E,link:p.link,onClick:p.onClick,items:p.items||[],open:R(p),onMenuOpenChange:$,getMenuOpen:R,active:p.active,appearance:b,contrast:S,hasDivider:p.hasDivider},p.id):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(ze,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:E,link:p.href??p.link,onClick:p.onClick,appearance:b,active:p.active??(p.id===K&&!!K),onActiveItemChange:B})}),p.hasDivider&&s.jsx(le,{appearance:Z})]},p.id)})}):null}function Qe(){return pe?$e&&o?s.jsx(en,{headerConfig:o,isCollapsed:E,shouldShowTitle:F,appearance:b,dividerAppearance:Z}):s.jsx(it,{isCollapsed:E,appearance:b,dividerAppearance:Z,children:a}):null}function Xe(){return Je?ue?s.jsx(Za,{footerItemsContent:ie(d),collapsible:n,isCollapsed:E,appearance:b,dividerAppearance:Z,collapseIcon:Ye,onCollapse:P}):i??null:null}return s.jsx(dn,{ref:T,size:t,isCollapsed:E,appearance:b,contrast:S,header:Qe(),body:s.jsx("div",{className:_.sideNavBody,children:ie(l)}),footer:Xe(),children:e})});U.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function tn(t,n){return t.some(e=>{var a;return e.id===n?!0:(a=e.items)!=null&&a.length?tn(e.items,n):!1})}function ts(t,n){if(!t.id||!n)return t.onClick;const e=()=>{n(t.id)};return t.onClick?()=>{e(),t.onClick()}:e}function an(t,n,e){return t.map(a=>{var C;const i=(C=a.items)!=null&&C.length?an(a.items,n,e):void 0,o=!!(i!=null&&i.length),l=!o&&a.id===n,d=o&&a.id===n,N=a,w=o&&(a.id===n||tn(a.items,n));return{...a,active:l||d,open:w?!0:N.open,items:i,onClick:ts(a,e)}})}function Ge(){return function(n,e){const[a,i]=g.useState(e.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...e.args,isCollapsed:a,onCollapsedChange:i}})})}}function as(t){return function(e,a){const[i,o]=g.useState(a.args.activeItem),l=t.map(d=>({...d,onClick:()=>o(d.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...a.args,items:l,activeItem:i}})})}}function nn(t,n){return function(a,i){const[o,l]=g.useState(n),d=g.useMemo(()=>an(t,o,l),[o,t]);return s.jsx(a,{args:{...i.args,items:d}})}}function sn(t){if(!t)return null;const n=Array.from(t.children);for(const o of n)if(o.tagName==="A"||o.tagName==="SPAN"&&o.hasAttribute("tabindex"))return o;const e=t.querySelector("a");return e||Array.from(t.querySelectorAll("span")).find(o=>o.hasAttribute("tabindex"))}function v(t,n,e){const a=e?t.querySelector(e):t;if(!a)return null;const i=e?W(a):W(t),o=i.queryByRole("link",{name:n});if(o)return o;const l=i.queryByText(n);if(l){const d=l.closest("li");return sn(d)}return null}function ce(t,n){const e=t.querySelector('[class*="sideNavBody"]');if(!e)return null;const i=Array.from(e.querySelectorAll("li"))[n];return sn(i)}function te(t,n){return v(t,n,'[class*="sideNavFooterItems"]')}function Q(t,n="MA"){var o;return(o=W(t).getByText(n).parentElement)==null?void 0:o.parentElement}function ns(t,n){return t.querySelector(`#${n}`)}function ss(t){return t.dataset.active==="true"}function H(t){r(t).not.toBeNull(),r(t).toHaveFocus()}function D(t,n){const e=v(t,n);e&&r(e).not.toHaveFocus()}function j(t,n){const e=v(t,n);e&&r(e).toHaveAttribute("tabindex","-1")}function z(t,n){const e=v(t,n);e&&r(e).toHaveAttribute("tabindex","0")}async function on(t,n,e){await vn(()=>{const a=t.getByRole("navigation"),i=ns(a,n);if(!i){r(e).toBe(!1);return}r(ss(i)).toBe(e)})}function L(t,n){return on(t,n,!0)}function y(t,n){return on(t,n,!1)}function A(t){const n=W(t),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function ne(t=200){return new Promise(n=>setTimeout(n,t))}const Fs={title:"Composants/SideNav/SideNav",id:"SideNav",component:U,tags:["autodocs"],decorators:[t=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(t,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:t=>s.jsx(U,{size:t.size,collapsible:t.collapsible,headerConfig:t.headerConfig,appearance:t.appearance,contrast:t.contrast,items:t.items,footerItems:t.footerItems,isCollapsed:t.isCollapsed,activeItem:t.activeItem,onCollapsedChange:t.onCollapsedChange,children:de})},de=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),I={hasLeadingIcon:!0},G={size:"m",content:"number"},h=[{...I,id:"home",label:"Home",icon:"home"},{...I,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...I,id:"analytics",label:"Analytics",icon:"analytics"},{...I,id:"settings",label:"Settings",icon:"settings"},{...I,id:"profile",label:"Profile",icon:"user",link:"/profile"}],is=[{...I,id:"home",label:"Home",icon:"home",href:"/"},{...I,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...I,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...I,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...I,id:"profile",label:"Profile",icon:"user",href:"/profile"}],q=h,rn=[h[0],{...h[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...h[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},h[4]],os=[h[0],{...h[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},h[4]],rs=[h[0],{...h[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...h[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},h[4]],Ue=[h[0],{...h[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...h[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},h[4]],cs=[{...h[0],badge:{...G,badgeType:"indicator",count:5}},{...h[1],badge:{...G,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...G,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...G,badgeType:"indicator",count:12}}]},{...h[3],items:[{label:"General"},{label:"Privacy",badge:{...G,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...G,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...G,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...h[4],badge:{...G,badgeType:"brand",count:8}}],ot=[{...I,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...I,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...I,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],x={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},ls="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",ds={...x},us={...x,onClick:()=>{console.log("Header clicked")}},m={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:q}},ve={tags:["skip-ci"],args:{...m.args,collapsible:!0}},me={tags:["skip-ci"],args:{...m.args,items:is},render:t=>{const n=()=>{const e=yn();return g.useEffect(()=>{e("/")},[]),s.jsx(U,{...t,activeItem:"home",onActiveItemChange:a=>console.log("Active item changed to:",a),children:s.jsx("div",{style:{padding:"2rem"},children:s.jsxs(hn,{children:[s.jsx(oe,{path:"/",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),s.jsx(oe,{path:"/dashboard",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),s.jsx(oe,{path:"/analytics",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),s.jsx(oe,{path:"/settings",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),s.jsx(oe,{path:"/profile",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return s.jsx(mn,{children:s.jsx(Nn,{linkComponent:gn,children:s.jsx(n,{})})})}},ge={tags:["skip-ci"],args:{...m.args,headerConfig:x}},ye={tags:["skip-ci"],args:{...m.args,headerConfig:{...x,isCompact:!0}}},he={tags:["skip-ci"],args:{...m.args,headerConfig:{...x,title:ls},size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(e.offsetWidth).toBe(Ya.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const a=e.querySelector("h1");r(a).not.toBeNull(),r(getComputedStyle(a).textOverflow).toBe("ellipsis"),r(a.scrollWidth).toBeGreaterThan(a.clientWidth)})}},dt="Supervision des processus et des opérations en temps réel",fe={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:x,items:[{...I,id:"supervision",label:dt,icon:"dashboard"},...q.slice(1)],size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Side nav keeps the fixed M panel width with a long item label",async()=>{r(e.offsetWidth).toBe(Ya.m)}),await n("Nav item label is truncated with an ellipsis",async()=>{const a=v(e,dt);r(a).not.toBeNull();const i=a==null?void 0:a.querySelector('[class*="navItemLeft"] span:last-child');r(i).not.toBeNull(),r(getComputedStyle(i).textOverflow).toBe("ellipsis"),r(i.scrollWidth).toBeGreaterThan(i.clientWidth)})}},Ne={tags:["skip-ci"],args:{...m.args,headerConfig:x,items:Ue,collapsible:!0}},be={tags:["skip-ci"],args:{...m.args,headerConfig:x,items:Ue,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Navigate through navigation when all menus are closed",async()=>{j(e,"Overview"),j(e,"Reports"),j(e,"Analytics"),j(e,"General"),j(e,"Privacy"),j(e,"Advanced");const a=v(e,"Home");a==null||a.focus(),H(a),await u.tab();const i=v(e,"Dashboard");H(i),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics"),await u.tab();const o=v(e,"Settings");H(o),D(e,"General"),D(e,"Privacy"),D(e,"Advanced"),await u.tab();const l=v(e,"Profile");H(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const a=v(e,"Dashboard");await u.click(a),z(e,"Overview"),z(e,"Reports"),z(e,"Analytics"),await u.tab();const i=v(e,"Overview");H(i),await u.tab();const o=v(e,"Reports");H(o),await u.tab();const l=v(e,"Analytics");H(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const a=v(e,"Dashboard");await u.click(a),j(e,"Overview"),j(e,"Reports"),j(e,"Analytics"),await u.tab();const i=v(e,"Settings");H(i),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const a=v(e,"Settings");await u.click(a),z(e,"General"),z(e,"Privacy"),z(e,"Advanced"),j(e,"Security"),j(e,"API Keys"),await u.tab();const i=v(e,"General");H(i),await u.tab();const o=v(e,"Privacy");H(o),await u.tab();const l=v(e,"Advanced");H(l),D(e,"Security"),D(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const a=v(e,"Advanced");await u.click(a),z(e,"Security"),z(e,"API Keys"),await u.tab();const i=v(e,"Security");H(i),await u.tab();const o=v(e,"API Keys");H(o)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const a=v(e,"Advanced");await u.click(a),j(e,"Security"),j(e,"API Keys"),await u.tab();const i=v(e,"Profile");H(i),D(e,"Security"),D(e,"API Keys")})}},xe={args:{...m.args,headerConfig:{...x,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const a=Q(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),r(a).not.toHaveAttribute("href"),r(a).not.toHaveAttribute("role","button"),r(a).not.toHaveAttribute("tabindex")})}},Ce={args:{...m.args,headerConfig:ds,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Verify header is a link when link prop is provided",async()=>{const a=Q(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("A"),r(a).toHaveAttribute("href","/"),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const a=Q(e);a==null||a.focus(),r(a).toHaveFocus()})}},we={args:{...m.args,headerConfig:{...us,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Verify header is clickable button when onClick is provided",async()=>{const a=Q(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),await u.click(a),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const a=Q(e);a==null||a.focus(),r(a).toHaveFocus(),await u.keyboard(un),await u.keyboard(pn)})}},Te={args:{...m.args,headerConfig:x,items:q,collapsible:!0,isCollapsed:!0},decorators:[Ge()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Verify header tooltip falls back to title when collapsed",async()=>{const a=Q(e);r(a).not.toBeNull(),a==null||a.focus(),await ne();const i=W(document.body).queryByRole("tooltip",{name:"My Application"});r(i).not.toBeNull(),r(i).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const a=ce(e,0);r(a).not.toBeNull(),a==null||a.focus(),await ne();const i=W(document.body).queryByRole("tooltip",{name:"Home"});r(i).not.toBeNull(),r(i).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await u.tab(),await ne();const a=W(document.body).queryByRole("tooltip",{name:"Dashboard"});r(a).not.toBeNull(),r(a).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await u.tab(),await u.tab(),await u.tab(),await ne();const a=W(document.body).queryByRole("tooltip",{name:"Profile"});r(a).not.toBeNull(),r(a).toHaveTextContent("Profile")})}},Ee={args:{...m.args,headerConfig:{...x,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Ge()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const a=Q(e);r(a).not.toBeNull(),a==null||a.focus(),await ne();const i=W(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(i).not.toBeNull(),r(i).toHaveTextContent("Custom header tooltip")})}},Ae={args:{...m.args,headerConfig:x,items:Ue,collapsible:!0,isCollapsed:!0},decorators:[Ge()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Verify tooltips appear when tabbing to menu items",async()=>{fn(t);const a=ce(e,1);r(a).not.toBeNull(),await u.tab(),await u.tab(),await u.tab(),await ne();const i=W(document.body).queryByRole("tooltip",{name:"Dashboard"});r(i).not.toBeNull(),r(i).toHaveTextContent("Dashboard")})}},Ie={tags:["skip-ci"],args:{...m.args,headerConfig:x,items:rs,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=A(t);await n("Verify Overview nested item is active",async()=>{L(e,"overview"),y(e,"reports")})}},Se={tags:["skip-ci"],args:{...m.args,headerConfig:x,items:os,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=A(t);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{L(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")})}},Be={tags:["skip-ci"],args:{...m.args,headerConfig:x,collapsible:!0},decorators:[nn(rn,"security")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=A(t);await n("Verify only Security is active, not parent NavMenus",async()=>{L(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const a=e.getByRole("navigation"),i=v(a,"API Keys");r(i).not.toBeNull(),await u.click(i),y(e,"security"),L(e,"api-keys"),y(e,"advanced"),y(e,"settings")})}},He={tags:["skip-ci"],args:{...m.args,headerConfig:x,collapsible:!0},decorators:[nn(rn,"overview")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=A(t);await n("Verify Overview leaf is active initially",async()=>{L(e,"overview"),y(e,"reports"),y(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const a=e.getByRole("navigation"),i=v(a,"Reports");r(i).not.toBeNull(),await u.click(i),y(e,"overview"),L(e,"reports"),y(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const a=e.getByRole("navigation"),i=v(a,"Settings");r(i).not.toBeNull(),await u.click(i);const o=v(a,"Advanced");r(o).not.toBeNull(),await u.click(o),y(e,"overview"),y(e,"reports"),y(e,"security"),y(e,"api-keys"),L(e,"advanced")})}},ke={args:{...m.args,headerConfig:x,items:q,activeItem:"home",collapsible:!0},decorators:[as(q)],play:async({canvasElement:t,step:n})=>{const{canvas:e}=A(t);await n("Verify Home has active class initially",async()=>{L(e,"home"),y(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const a=e.getByRole("navigation"),i=v(a,"Dashboard");r(i).not.toBeNull(),await u.click(i),y(e,"home"),L(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")})}},De={args:{...m.args,headerConfig:x,items:q,footerItems:ot,collapsible:!0}},je={args:{...m.args,headerConfig:x,items:q,footerItems:ot,collapsible:!1}},_e={args:{...m.args,headerConfig:x,items:Ue,footerItems:ot,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Verify footer items are rendered",async()=>{const a=te(e,"Settings");r(a).not.toBeNull();const i=te(e,"Help & Support");r(i).not.toBeNull();const o=te(e,"Account");r(o).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const a=te(e,"Account");await u.click(a);const i=te(e,"Preferences");r(i).not.toBeNull();const o=te(e,"Logout");r(o).not.toBeNull()})}},re={tags:["skip-ci"],args:{...m.args,headerConfig:x,items:cs,collapsible:!0}},Me={args:{...re.args,isCollapsed:!0},decorators:[Ge()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=A(t);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var o;const a=ce(e,0);r(a).not.toBeNull();const i=a==null?void 0:a.querySelector('[data-size="xs"]');r(i).not.toBeNull(),r(i).toHaveAttribute("data-badge-type","indicator"),r((o=i==null?void 0:i.textContent)==null?void 0:o.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const a=ce(e,0);r(a==null?void 0:a.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var o;const a=ce(e,1);r(a).not.toBeNull();const i=a==null?void 0:a.querySelector('[data-size="xs"]');r(i).not.toBeNull(),r(i).toHaveAttribute("data-badge-type","indicator"),r((o=i==null?void 0:i.textContent)==null?void 0:o.trim()).toBe("")})}},ps=[h[0],{...h[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...h[2],hasDivider:!0},{...I,id:"reports",label:"Reports",icon:"info"},{...h[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},h[4]],Fe={args:{...m.args,headerConfig:x,items:ps,collapsible:!0}},cn=s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0 1rem",color:"white",fontWeight:600},children:[s.jsx("span",{style:{fontSize:"1.25rem"},children:"⬡"}),s.jsx("span",{children:"My App"})]}),ln=s.jsx("div",{style:{padding:"1rem",color:"white",fontSize:"0.875rem"},children:"Custom footer content"}),Re={args:{items:q,appearance:"brand"},render:t=>s.jsx(U,{...t,header:cn,children:de})},qe={args:{items:q,appearance:"brand"},render:t=>s.jsx(U,{...t,footer:ln,children:de})},Pe={args:{items:q,appearance:"brand"},render:t=>s.jsx(U,{...t,header:cn,footer:ln,children:de})},We={args:{items:q,appearance:"brand",collapsible:!1},render:t=>s.jsx(U,{...t,children:de})};var ut,pt,vt;m.parameters={...m.parameters,docs:{...(ut=m.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(vt=(pt=m.parameters)==null?void 0:pt.docs)==null?void 0:vt.source}}};var mt,gt,yt;ve.parameters={...ve.parameters,docs:{...(mt=ve.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(yt=(gt=ve.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var ht,ft,Nt;me.parameters={...me.parameters,docs:{...(ht=me.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Nt=(ft=me.parameters)==null?void 0:ft.docs)==null?void 0:Nt.source}}};var bt,xt,Ct;ge.parameters={...ge.parameters,docs:{...(bt=ge.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ct=(xt=ge.parameters)==null?void 0:xt.docs)==null?void 0:Ct.source}}};var wt,Tt,Et;ye.parameters={...ye.parameters,docs:{...(wt=ye.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(Et=(Tt=ye.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var At,It,St;he.parameters={...he.parameters,docs:{...(At=he.parameters)==null?void 0:At.docs,source:{originalSource:`{
  tags: ["skip-ci"],
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
}`,...(St=(It=he.parameters)==null?void 0:It.docs)==null?void 0:St.source}}};var Bt,Ht,kt;fe.parameters={...fe.parameters,docs:{...(Bt=fe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: [{
      ...baseNavItem,
      id: "supervision",
      label: longNavItemLabel,
      icon: "dashboard"
    }, ...navigationItems.slice(1)],
    size: "m"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Side nav keeps the fixed M panel width with a long item label", async () => {
      expect(sideNav.offsetWidth).toBe(sideNavPanelSize.m);
    });
    await step("Nav item label is truncated with an ellipsis", async () => {
      const navItem = getNavElement(sideNav, longNavItemLabel);
      expect(navItem).not.toBeNull();
      const label = navItem?.querySelector('[class*="navItemLeft"] span:last-child') as HTMLElement;
      expect(label).not.toBeNull();
      expect(getComputedStyle(label).textOverflow).toBe("ellipsis");
      expect(label.scrollWidth).toBeGreaterThan(label.clientWidth);
    });
  }
}`,...(kt=(Ht=fe.parameters)==null?void 0:Ht.docs)==null?void 0:kt.source}}};var Dt,jt,_t;Ne.parameters={...Ne.parameters,docs:{...(Dt=Ne.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(_t=(jt=Ne.parameters)==null?void 0:jt.docs)==null?void 0:_t.source}}};var Mt,Ft,Rt;be.parameters={...be.parameters,docs:{...(Mt=be.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Rt=(Ft=be.parameters)==null?void 0:Ft.docs)==null?void 0:Rt.source}}};var qt,Pt,Wt;xe.parameters={...xe.parameters,docs:{...(qt=xe.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Wt=(Pt=xe.parameters)==null?void 0:Pt.docs)==null?void 0:Wt.source}}};var Lt,Ot,Vt;Ce.parameters={...Ce.parameters,docs:{...(Lt=Ce.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Vt=(Ot=Ce.parameters)==null?void 0:Ot.docs)==null?void 0:Vt.source}}};var Kt,zt,Gt;we.parameters={...we.parameters,docs:{...(Kt=we.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Gt=(zt=we.parameters)==null?void 0:zt.docs)==null?void 0:Gt.source}}};var Ut,Yt,$t;Te.parameters={...Te.parameters,docs:{...(Ut=Te.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...($t=(Yt=Te.parameters)==null?void 0:Yt.docs)==null?void 0:$t.source}}};var Jt,Qt,Xt;Ee.parameters={...Ee.parameters,docs:{...(Jt=Ee.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=Ee.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,ea,ta;Ae.parameters={...Ae.parameters,docs:{...(Zt=Ae.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ta=(ea=Ae.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,sa;Ie.parameters={...Ie.parameters,docs:{...(aa=Ie.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(sa=(na=Ie.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var ia,oa,ra;Se.parameters={...Se.parameters,docs:{...(ia=Se.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ra=(oa=Se.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var ca,la,da;Be.parameters={...Be.parameters,docs:{...(ca=Be.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(da=(la=Be.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var ua,pa,va;He.parameters={...He.parameters,docs:{...(ua=He.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(va=(pa=He.parameters)==null?void 0:pa.docs)==null?void 0:va.source}}};var ma,ga,ya;ke.parameters={...ke.parameters,docs:{...(ma=ke.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(ya=(ga=ke.parameters)==null?void 0:ga.docs)==null?void 0:ya.source}}};var ha,fa,Na;De.parameters={...De.parameters,docs:{...(ha=De.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Na=(fa=De.parameters)==null?void 0:fa.docs)==null?void 0:Na.source}}};var ba,xa,Ca;je.parameters={...je.parameters,docs:{...(ba=je.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Ca=(xa=je.parameters)==null?void 0:xa.docs)==null?void 0:Ca.source}}};var wa,Ta,Ea;_e.parameters={..._e.parameters,docs:{...(wa=_e.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(Ea=(Ta=_e.parameters)==null?void 0:Ta.docs)==null?void 0:Ea.source}}};var Aa,Ia,Sa;re.parameters={...re.parameters,docs:{...(Aa=re.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Sa=(Ia=re.parameters)==null?void 0:Ia.docs)==null?void 0:Sa.source}}};var Ba,Ha,ka;Me.parameters={...Me.parameters,docs:{...(Ba=Me.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(ka=(Ha=Me.parameters)==null?void 0:Ha.docs)==null?void 0:ka.source}}};var Da,ja,_a;Fe.parameters={...Fe.parameters,docs:{...(Da=Fe.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(_a=(ja=Fe.parameters)==null?void 0:ja.docs)==null?void 0:_a.source}}};var Ma,Fa,Ra;Re.parameters={...Re.parameters,docs:{...(Ma=Re.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent}>
      {PageContent}
    </SideNav>
}`,...(Ra=(Fa=Re.parameters)==null?void 0:Fa.docs)==null?void 0:Ra.source}}};var qa,Pa,Wa;qe.parameters={...qe.parameters,docs:{...(qa=qe.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(Wa=(Pa=qe.parameters)==null?void 0:Pa.docs)==null?void 0:Wa.source}}};var La,Oa,Va;Pe.parameters={...Pe.parameters,docs:{...(La=Pe.parameters)==null?void 0:La.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(Va=(Oa=Pe.parameters)==null?void 0:Oa.docs)==null?void 0:Va.source}}};var Ka,za,Ga;We.parameters={...We.parameters,docs:{...(Ka=We.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand",
    collapsible: false
  },
  render: args => <SideNav {...args}>{PageContent}</SideNav>
}`,...(Ga=(za=We.parameters)==null?void 0:za.docs)==null?void 0:Ga.source}}};const Rs=["Default","Collapsible","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithLongItemLabel","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers","WithCustomHeader","WithCustomFooter","WithCustomHeaderAndFooter","WithoutHeaderOrFooter"];export{ke as ActiveItemState,Ee as CollapsedHeaderTooltipCustom,Te as CollapsedTooltip,Ae as CollapsedTooltipWithNested,Me as CollapsedWithBadges,ve as Collapsible,m as Default,je as FooterItemsOnly,_e as FooterItemsWithNested,xe as HeaderClickability,ye as HeaderCompact,Ce as HeaderWithLink,he as HeaderWithLongTitle,we as HeaderWithOnClick,ge as HeaderWithVersion,be as KeyboardNavigation,He as NestedItemActiveOnClick,Ie as NestedItemActivePreselected,Be as NestedNavMenuActiveOnClick,Se as NestedNavMenuActivePreselected,re as WithBadges,qe as WithCustomFooter,Re as WithCustomHeader,Pe as WithCustomHeaderAndFooter,me as WithCustomRouter,Fe as WithDividers,De as WithFooterItems,fe as WithLongItemLabel,Ne as WithNestedMenus,We as WithoutHeaderOrFooter,Rs as __namedExportsOrder,Fs as default};
