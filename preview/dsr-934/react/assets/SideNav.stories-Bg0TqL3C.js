import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{g as an,B as xn,s as nn}from"./BaseSideNav-CY7Qgixs.js";import{T as on,a as wn}from"./keyboard-test.constants-By8W48aj.js";import{w as R,e as i,a as sn,u as d}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{B as Cn,N as Tn,b as An,R as Bn,a as ie}from"./chunk-KS7C4IRE-kOmPZtMB.js";import{f as En}from"./testing.utils-r13wRTL2.js";import{N as In}from"./NavigationProvider-Bs4LKj9F.js";import{D as le}from"./Divider-BVZUrQ0d.js";import{s as Sn,I as tt,B as nt}from"./Badge-DkJhvK8e.js";import{u as ot}from"./NavigationContext-D2CUoNWC.js";import{I as st}from"./Icon-DgLH6pPJ.js";import{T as Hn}from"./Tooltip-IwW420ZV.js";import{S as ze,E as Ge,c as mt,b as kn,d as jn}from"./keyboard.constants-BverKK8B.js";import{u as rn}from"./useActiveKeyboard-DaOmFJe_.js";import"./timepicker.constants-CynrC_9x.js";import{g as Dn}from"./id.utils-DsO5Uws7.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const gt={HEADER_CONFIG_AND_CUSTOM:"SideNav: Both headerConfig and a custom header were provided. The custom header takes precedence.",FOOTER_ITEMS_AND_CUSTOM:"SideNav: Both footerItems (or collapsible default footer) and a custom footer were provided. The custom footer takes precedence."},_n=[{condition:t=>t.hasCustomHeader&&t.hasHeaderConfig,issue:gt.HEADER_CONFIG_AND_CUSTOM},{condition:t=>t.hasCustomFooter&&(t.hasFooterItems||!!t.collapsible),issue:gt.FOOTER_ITEMS_AND_CUSTOM}];function Mn(t){var e;return((e=_n.find(({condition:a})=>a(t)))==null?void 0:e.issue)??null}function Rn(t,n){return!t&&!!n}function Fn(t,n,e){return!t&&!!(n!=null&&n.length||e)}function qn(t,n){return!!(t||n)}function Pn(t,n,e){return!!(t||n!=null&&n.length||e)}function cn(t=!1,n=!1){return t?tt.s:n?tt.l:tt.m}function Ue(t){return t?Sn({showBadge:!0,badgeContent:t.content??"number",badgeCount:t.count,badgeIcon:t.icon}):!1}function Wn(t){return t.badgeType??"indicator"}const On="_navItemContainer_l1d46_1",Ln="_navItemLeft_l1d46_47",Vn="_navItem_l1d46_1",Kn="_navItemRight_l1d46_64",W={navItemContainer:On,navItemLeft:Ln,navItem:Vn,navItemRight:Kn},zn="_navMenuContainer_ycjt5_1",Gn="_navMenu_ycjt5_1",Un="_menuContentLeft_ycjt5_31",Yn="_menuContentRight_ycjt5_36",$n="_menuIcon_ycjt5_95",Jn="_nestedMenu_ycjt5_103",Qn="_icon_ycjt5_119",Z={navMenuContainer:zn,navMenu:Gn,menuContentLeft:Un,menuContentRight:Yn,menuIcon:$n,nestedMenu:Jn,icon:Qn};function it({link:t,label:n,tabIndex:e,onKeyDown:a,onFocus:s,onBlur:r,onClick:l,children:c,styleType:f="item",ariaExpanded:C,ariaControls:T,role:I}){const x=ot(),B=f==="menu"?Z:W,w={className:f==="menu"?B.navMenu:B.navItem,tabIndex:e,"aria-label":n,...C!==void 0&&{"aria-expanded":C},...T&&{"aria-controls":T},...I&&{role:I},...s&&{onFocus:s},...r&&{onBlur:r},...l&&{onClick:l},...a&&{onKeyDown:a}};return t?o.jsx(x,{href:t,...w,children:c}):o.jsx("span",{...w,children:c})}it.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},ariaExpanded:{required:!1,tsType:{name:"boolean"},description:""},ariaControls:{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"literal",value:'"button"'},description:""}}};function rt({icon:t,hasLeadingIcon:n=!0,label:e,isCollapsed:a,isNested:s,styleType:r="item",badge:l}){const c=cn(s,a),f=r==="menu"?Z:W;function C(){if(!n||!t)return null;const T=o.jsx(st,{name:t,className:f.icon,size:c});return a&&l&&Ue(l)?o.jsx(nt,{badgeType:Wn(l),size:"xs",content:"empty",children:T}):T}return o.jsxs(o.Fragment,{children:[C(),a?null:o.jsx("span",{children:e})]})}rt.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function de({label:t,isCollapsed:n,children:e}){return n&&t?o.jsx(Hn,{label:t,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}de.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function ln(t){return t===!1?-1:0}function dn({onEnterOrSpace:t,onEscape:n,includeArrowKeys:e=!1,includeEscape:a=!1}={}){const s=g.useCallback(c=>{[ze,Ge].includes(c.key)&&(c.preventDefault(),t==null||t()),c.key===mt&&a&&(c.preventDefault(),n==null||n())},[t,n,a]),r=[ze,Ge,...a?[mt]:[],...e?[kn,jn]:[]],{onKeyDown:l}=rn({onKeyDown:s},{interactiveKeyCodes:r});return{onKeyDown:l}}const ct=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:s,isCollapsed:r,link:l,href:c,isNested:f,parentMenuOpen:C,appearance:T="brand",active:I,badge:x,onActiveItemChange:B,...F},w)=>{const V=ot(),A=g.useRef(null),M=g.useRef(null),$=!!(c||l),{onKeyDown:te}=dn({onEnterOrSpace:a});function J(){var S,O;(S=A.current)==null||S.setAttribute("data-focused","true"),(O=M.current)==null||O.setAttribute("data-focused","true")}function K(){var S,O;(S=A.current)==null||S.removeAttribute("data-focused"),(O=M.current)==null||O.removeAttribute("data-focused")}const ae=ln(C),z=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:W.navItemLeft,children:o.jsx(rt,{icon:n,hasLeadingIcon:e,label:s,isCollapsed:r,isNested:f,styleType:"item",badge:x})}),o.jsx("div",{className:W.navItemRight,children:!r&&x&&Ue(x)&&o.jsx(nt,{badgeType:x.badgeType,size:x.size,content:x.content,count:x.count})})]}),q=$?o.jsx(V,{id:t,"aria-label":s,className:W.navItemContainer,"data-collapsed":r,"data-appearance":T,"data-nested":f,"data-active":I,href:c??l,to:c??l,onClick:()=>B==null?void 0:B(t),onBlur:K,ref:M,children:z}):o.jsx("div",{id:t,className:W.navItemContainer,"data-collapsed":r,"data-appearance":T,"data-nested":f,"data-active":I,onClick:a,ref:S=>{A.current=S,typeof w=="function"?w(S):w&&"current"in w&&(w.current=S)},...F,children:o.jsx(it,{label:s,tabIndex:ae,onKeyDown:te,onFocus:J,onBlur:K,styleType:"item",children:z})});return o.jsx(de,{label:s,isCollapsed:r,children:q})});ct.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const lt=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:s,isCollapsed:r,link:l,items:c=[],open:f,onOpenChange:C,hasMenuIcon:T=!0,isNested:I,parentMenuOpen:x,appearance:B="brand",contrast:F="high",badge:w,hasDivider:V,active:A,onMenuOpenChange:M,getMenuOpen:$,...te},J)=>{const K=an(B,F),[ae,z]=g.useState(!1),q=f??ae,S=f!==void 0,O=g.useRef(Dn()),pe=`nav-menu-content-${t??O.current}`;function Q(){const u=!q,et=t||s;if(a&&a(),et&&M){M(et,u);return}S?C==null||C(u):z(u)}function Je(){if(!q)return;const u=t||s;if(u&&M){M(u,!1);return}S?C==null||C(!1):z(!1)}const{onKeyDown:Qe}=dn({onEnterOrSpace:Q,onEscape:Je,includeArrowKeys:!0,includeEscape:!0}),Xe=c.length,X=!r&&Xe,se=q,Ze=ln(x),ve=X&&T?o.jsx(st,{name:"arrow-chevron-right",className:Z.menuIcon,"data-open":q}):null,N=!r&&(Ue(w)||!!ve),p=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:Z.menuContentLeft,children:o.jsx(rt,{icon:n,hasLeadingIcon:e,label:s,isCollapsed:r,isNested:I,styleType:"menu",badge:w})}),N&&o.jsxs("div",{className:Z.menuContentRight,children:[w&&Ue(w)&&o.jsx(nt,{badgeType:w.badgeType,size:w.size,content:w.content,count:w.count}),ve]})]}),me=o.jsxs("li",{id:t,className:Z.navMenuContainer,"data-collapsed":r,"data-appearance":B,"data-nested":I,"data-open":q,"data-active":A,ref:J,...te,children:[o.jsx(it,{link:l,label:s,tabIndex:Ze,onClick:Q,onKeyDown:Qe,styleType:"menu",ariaExpanded:X?q:void 0,ariaControls:X?pe:void 0,role:X&&!l?"button":void 0,children:p}),X&&o.jsx("ul",{id:pe,className:Z.nestedMenu,"data-open":q,children:c.map(u=>{var vt;return(vt=u.items)!=null&&vt.length?o.jsx(lt,{id:u.id,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:r,link:u.link,onClick:u.onClick,items:u.items||[],open:$?$(u):u.open,onOpenChange:u.onOpenChange,onMenuOpenChange:M,getMenuOpen:$,active:u.active,hasMenuIcon:T,hasDivider:u.hasDivider,isNested:!0,parentMenuOpen:se,appearance:B,contrast:F,badge:u.badge},u.id||u.label):o.jsxs(g.Fragment,{children:[o.jsx("li",{children:o.jsx(ct,{id:u.id,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:r,link:u.link,onClick:u.onClick,isNested:!0,parentMenuOpen:se,appearance:B,active:u.active,badge:u.badge})}),u.hasDivider&&o.jsx(le,{appearance:K})]},u.id||u.label)})})]}),ge=o.jsx(de,{label:s,isCollapsed:r,children:me});return o.jsxs(o.Fragment,{children:[ge,V&&o.jsx(le,{appearance:K})]})});lt.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Xn="_sideNavHeaderContainer_11tcj_1",Zn="_sideNavHeader_11tcj_1",eo="_sideNavHeaderTitleContainer_11tcj_38",to="_sideNavHeaderTitle_11tcj_38",ao="_sideNavHeaderIdentifier_11tcj_47",no="_sideNavHeaderVersion_11tcj_119",oo="_sideNavBody_11tcj_148",so="_sideNavFooterContainer_11tcj_172",io="_sideNavFooter_11tcj_172",ro="_sideNavFooterItems_11tcj_185",co="_collapsibleSection_11tcj_202",lo="_collapseButton_11tcj_217",j={sideNavHeaderContainer:Xn,sideNavHeader:Zn,sideNavHeaderTitleContainer:eo,sideNavHeaderTitle:to,sideNavHeaderIdentifier:ao,sideNavHeaderVersion:no,sideNavBody:oo,sideNavFooterContainer:so,sideNavFooter:io,sideNavFooterItems:ro,collapsibleSection:co,collapseButton:lo};function un({footerItemsContent:t,collapsible:n,isCollapsed:e,appearance:a,dividerAppearance:s,collapseIcon:r,onCollapse:l}){const c=e?"Ouvrir le menu":"Réduire le menu",f=cn(!1,e);return o.jsxs("div",{className:j.sideNavFooterContainer,children:[t&&o.jsx("div",{className:j.sideNavFooterItems,children:t}),o.jsx(le,{appearance:s}),o.jsx("div",{className:j.sideNavFooter,children:n&&o.jsx("div",{className:j.collapsibleSection,children:o.jsx(de,{label:c,isCollapsed:e,children:o.jsx("button",{type:"button",id:"collapse-button",className:`${W.navItemContainer} ${j.collapseButton}`,"data-collapsed":e,"data-appearance":a,"aria-label":e?c:void 0,onClick:l,children:o.jsx("span",{className:W.navItem,children:o.jsxs("div",{className:W.navItemLeft,children:[o.jsx(st,{name:r,className:W.icon,size:f}),!e&&o.jsx("span",{children:c})]})})})})})})]})}un.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultFooter",props:{footerItemsContent:{required:!0,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},collapseIcon:{required:!0,tsType:{name:"string"},description:""},onCollapse:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function dt({isCollapsed:t,appearance:n,dividerAppearance:e,isCompact:a=!1,children:s}){return o.jsxs("div",{className:j.sideNavHeaderContainer,"data-compact":a,"data-collapsed":t,children:[o.jsx("div",{className:j.sideNavHeader,"data-collapsed":t,"data-appearance":n,"data-compact":a,children:s}),o.jsx(le,{appearance:e})]})}dt.__docgenInfo={description:"",methods:[],displayName:"SideNavHeaderContainer",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function pn({headerConfig:t,isCollapsed:n,shouldShowTitle:e,appearance:a,dividerAppearance:s}){const r=ot(),l=V=>{var A;[ze,Ge].includes(V.key)&&(V.preventDefault(),(A=t.onClick)==null||A.call(t))},{onKeyDown:c}=rn({onKeyDown:l},{interactiveKeyCodes:[ze,Ge]}),f=o.jsxs("div",{className:j.sideNavHeaderTitle,children:[o.jsx("div",{className:j.sideNavHeaderIdentifier,children:t.identifier}),!n&&o.jsx("h1",{children:t.title})]}),C=t.ariaLabel,T=o.jsx(r,{href:t.link??"",className:j.sideNavHeaderTitleContainer,onClick:t.onClick,"aria-label":C,children:f}),I=o.jsx("div",{className:j.sideNavHeaderTitleContainer,tabIndex:0,onClick:t.onClick,onKeyDown:c,role:"button","aria-label":C,children:f}),x=o.jsx("div",{className:j.sideNavHeaderTitleContainer,children:f});function B(){return t.link?T:t.onClick?I:x}const F=g.useMemo(()=>t.tooltip??t.title??"",[t.tooltip,t.title]),w=o.jsx(de,{label:F,isCollapsed:n,children:B()});return o.jsxs(dt,{isCollapsed:n,isCompact:!!t.isCompact,appearance:a,dividerAppearance:s,children:[w,!t.isCompact&&o.jsx("div",{className:j.sideNavHeaderVersion,"data-hidden":!e,children:o.jsx("span",{children:t.version})})]})}pn.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultHeader",props:{headerConfig:{required:!0,tsType:{name:"SideNavHeaderConfig"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},shouldShowTitle:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""}}};const uo=300,Y=g.forwardRef(({size:t="m",collapsible:n,children:e,header:a,footer:s,headerConfig:r,items:l,footerItems:c,isCollapsed:f,defaultCollapsed:C=!1,onCollapsedChange:T,onActiveItemChange:I,appearance:x="brand",contrast:B="high",activeItem:F,"aria-label":w},V)=>{const[A,M]=g.useState(f??C),[$,te]=g.useState(!0),[J,K]=g.useState({}),[ae,z]=g.useState(F),q=g.useCallback((N,p)=>{K(me=>({...me,[N]:p}))},[]),S=g.useCallback(N=>{const p=N.id??N.label;return p&&p in J?J[p]:N.open},[J]),O=g.useCallback(N=>{z(N),I==null||I(N)},[I]);g.useEffect(()=>{z(F)},[F]),g.useEffect(()=>{K({})},[l]),g.useEffect(()=>{f!==void 0&&M(f)},[f]),g.useEffect(()=>{if(A)te(!1);else{const N=setTimeout(()=>{te(!0)},uo);return()=>clearTimeout(N)}},[A]);const pt=()=>{const N=!A;f===void 0&&M(N),T==null||T(N)},pe=A?"arrow-double-right":"arrow-double-left",Q=an(x,B),Je=Rn(a,r),Qe=Fn(s,c,n),Xe=qn(a,r),X=Pn(s,c,n);g.useEffect(()=>{const N=Mn({hasCustomHeader:!!a,hasHeaderConfig:!!r,hasCustomFooter:!!s,hasFooterItems:!!(c!=null&&c.length),collapsible:n});N&&console.warn(N)},[a,r,s,c,n]);function se(N){return N!=null&&N.length?o.jsx("ul",{children:N.map(p=>{var ge;return((ge=p.items)==null?void 0:ge.length)?o.jsx(lt,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:A,link:p.link,onClick:p.onClick,items:p.items||[],open:S(p),onMenuOpenChange:q,getMenuOpen:S,active:p.active,appearance:x,contrast:B,hasDivider:p.hasDivider},p.id):o.jsxs(g.Fragment,{children:[o.jsx("li",{children:o.jsx(ct,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:A,link:p.href??p.link,onClick:p.onClick,appearance:x,active:p.active??(p.id===ae&&!!ae),onActiveItemChange:O})}),p.hasDivider&&o.jsx(le,{appearance:Q})]},p.id)})}):null}function Ze(){return Xe?Je&&r?o.jsx(pn,{headerConfig:r,isCollapsed:A,shouldShowTitle:$,appearance:x,dividerAppearance:Q}):o.jsx(dt,{isCollapsed:A,appearance:x,dividerAppearance:Q,children:a}):null}function ve(){return X?Qe?o.jsx(un,{footerItemsContent:se(c),collapsible:n,isCollapsed:A,appearance:x,dividerAppearance:Q,collapseIcon:pe,onCollapse:pt}):s??null:null}return o.jsx(xn,{ref:V,size:t,isCollapsed:A,appearance:x,contrast:B,"aria-label":w,header:Ze(),body:o.jsx("div",{className:j.sideNavBody,children:se(l)}),footer:ve(),children:e})});Y.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function vn(t,n){return t.some(e=>{var a;return e.id===n?!0:(a=e.items)!=null&&a.length?vn(e.items,n):!1})}function po(t,n){if(!t.id||!n)return t.onClick;const e=()=>{n(t.id)};return t.onClick?()=>{e(),t.onClick()}:e}function mn(t,n,e){return t.map(a=>{var T;const s=(T=a.items)!=null&&T.length?mn(a.items,n,e):void 0,r=!!(s!=null&&s.length),l=!r&&a.id===n,c=r&&a.id===n,f=a,C=r&&(a.id===n||vn(a.items,n));return{...a,active:l||c,open:C?!0:f.open,items:s,onClick:po(a,e)}})}function Ye(){return function(n,e){const[a,s]=g.useState(e.args.isCollapsed??!0);return o.jsx("div",{children:o.jsx(n,{args:{...e.args,isCollapsed:a,onCollapsedChange:s}})})}}function vo(t){return function(e,a){const[s,r]=g.useState(a.args.activeItem),l=t.map(c=>({...c,onClick:()=>r(c.id),link:void 0}));return o.jsx("div",{children:o.jsx(e,{args:{...a.args,items:l,activeItem:s}})})}}function gn(t,n){return function(a,s){const[r,l]=g.useState(n),c=g.useMemo(()=>mn(t,r,l),[r,t]);return o.jsx(a,{args:{...s.args,items:c}})}}function yn(t){if(!t)return null;const n=Array.from(t.children);for(const r of n)if(r.tagName==="A"||r.tagName==="SPAN"&&r.hasAttribute("tabindex"))return r;const e=t.querySelector("a");return e||Array.from(t.querySelectorAll("span")).find(r=>r.hasAttribute("tabindex"))}function v(t,n,e){const a=e?t.querySelector(e):t;if(!a)return null;const s=e?R(a):R(t),r=s.queryByRole("link",{name:n});if(r)return r;const l=s.queryByText(n);if(l){const c=l.closest("li");return yn(c)}return null}function ce(t,n){const e=t.querySelector('[class*="sideNavBody"]');if(!e)return null;const s=Array.from(e.querySelectorAll("li"))[n];return yn(s)}function ne(t,n){return v(t,n,'[class*="sideNavFooterItems"]')}function ee(t,n="MA"){var r;return(r=R(t).getByText(n).parentElement)==null?void 0:r.parentElement}function mo(t,n){return t.querySelector(`#${n}`)}function at(t){return t.querySelector("#collapse-button")}function go(t){return t.dataset.active==="true"}function H(t){i(t).not.toBeNull(),i(t).toHaveFocus()}function D(t,n){const e=v(t,n);e&&i(e).not.toHaveFocus()}function _(t,n){const e=v(t,n);e&&i(e).toHaveAttribute("tabindex","-1")}async function G(t,n){await sn(()=>{const e=v(t,n);i(e).not.toBeNull(),i(e).toHaveAttribute("tabindex","0")})}async function fn(t,n,e){await sn(()=>{const a=t.getByRole("navigation"),s=mo(a,n);if(!s){i(e).toBe(!1);return}i(go(s)).toBe(e)})}function L(t,n){return fn(t,n,!0)}function y(t,n){return fn(t,n,!1)}function E(t){const n=R(t),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function oe(t=200){return new Promise(n=>setTimeout(n,t))}const $o={title:"Composants/SideNav/SideNav",id:"SideNav",component:Y,tags:["autodocs"],decorators:[t=>o.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:o.jsx(t,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:t=>o.jsx(Y,{size:t.size,collapsible:t.collapsible,headerConfig:t.headerConfig,appearance:t.appearance,contrast:t.contrast,items:t.items,footerItems:t.footerItems,isCollapsed:t.isCollapsed,activeItem:t.activeItem,onCollapsedChange:t.onCollapsedChange,children:ue})},ue=o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),k={hasLeadingIcon:!0},U={size:"m",content:"number"},h=[{...k,id:"home",label:"Home",icon:"home"},{...k,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...k,id:"analytics",label:"Analytics",icon:"analytics"},{...k,id:"settings",label:"Settings",icon:"settings"},{...k,id:"profile",label:"Profile",icon:"user",link:"/profile"}],yo=[{...k,id:"home",label:"Home",icon:"home",href:"/"},{...k,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...k,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...k,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...k,id:"profile",label:"Profile",icon:"user",href:"/profile"}],P=h,hn=[h[0],{...h[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...h[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},h[4]],fo=[h[0],{...h[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},h[4]],ho=[h[0],{...h[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...h[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},h[4]],$e=[h[0],{...h[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...h[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},h[4]],No=[{...h[0],badge:{...U,badgeType:"indicator",count:5}},{...h[1],badge:{...U,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...U,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...U,badgeType:"indicator",count:12}}]},{...h[3],items:[{label:"General"},{label:"Privacy",badge:{...U,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...U,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...U,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...h[4],badge:{...U,badgeType:"brand",count:8}}],ut=[{...k,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...k,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...k,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},bo="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",xo={...b},wo={...b,onClick:()=>{console.log("Header clicked")}},m={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:P}},ye={args:{...m.args,collapsible:!0}},fe={args:{...m.args,items:yo},render:t=>{const n=()=>{const e=An();return g.useEffect(()=>{e("/")},[]),o.jsx(Y,{...t,activeItem:"home",onActiveItemChange:a=>console.log("Active item changed to:",a),children:o.jsx("div",{style:{padding:"2rem"},children:o.jsxs(Bn,{children:[o.jsx(ie,{path:"/",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),o.jsx(ie,{path:"/dashboard",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),o.jsx(ie,{path:"/analytics",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),o.jsx(ie,{path:"/settings",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),o.jsx(ie,{path:"/profile",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return o.jsx(Cn,{children:o.jsx(In,{linkComponent:Tn,children:o.jsx(n,{})})})}},he={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b}},Ne={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:{...b,isCompact:!0}}},be={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:{...b,title:bo},size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{i(e.offsetWidth).toBe(nn.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const a=e.querySelector("h1");i(a).not.toBeNull(),i(getComputedStyle(a).textOverflow).toBe("ellipsis"),i(a.scrollWidth).toBeGreaterThan(a.clientWidth)})}},yt="Supervision des processus et des opérations en temps réel",xe={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:[{...k,id:"supervision",label:yt,icon:"dashboard"},...P.slice(1)],size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Side nav keeps the fixed M panel width with a long item label",async()=>{i(e.offsetWidth).toBe(nn.m)}),await n("Nav item label is truncated with an ellipsis",async()=>{const a=v(e,yt);i(a).not.toBeNull();const s=a==null?void 0:a.querySelector('[class*="navItemLeft"] span:last-child');i(s).not.toBeNull(),i(getComputedStyle(s).textOverflow).toBe("ellipsis"),i(s.scrollWidth).toBeGreaterThan(s.clientWidth)})}},we={args:{...m.args,headerConfig:b,items:$e,collapsible:!0}},Ce={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:$e,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Navigate through navigation when all menus are closed",async()=>{_(e,"Overview"),_(e,"Reports"),_(e,"Analytics"),_(e,"General"),_(e,"Privacy"),_(e,"Advanced");const a=v(e,"Home");a==null||a.focus(),H(a),await d.tab();const s=v(e,"Dashboard");H(s),i(s).toHaveAttribute("role","button"),i(s).toHaveAttribute("aria-expanded","false"),i(s==null?void 0:s.getAttribute("aria-controls")).toBeTruthy(),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics"),await d.tab();const r=v(e,"Settings");H(r),i(r).toHaveAttribute("role","button"),i(r).toHaveAttribute("aria-expanded","false"),D(e,"General"),D(e,"Privacy"),D(e,"Advanced"),await d.tab();const l=v(e,"Profile");H(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const a=v(e,"Dashboard");await d.click(a),i(a).toHaveAttribute("aria-expanded","true"),i(document.getElementById(a.getAttribute("aria-controls"))).not.toBeNull(),G(e,"Overview"),G(e,"Reports"),G(e,"Analytics"),await d.tab();const s=v(e,"Overview");H(s),await d.tab();const r=v(e,"Reports");H(r),await d.tab();const l=v(e,"Analytics");H(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const a=v(e,"Dashboard");await d.click(a),i(a).toHaveAttribute("aria-expanded","false"),_(e,"Overview"),_(e,"Reports"),_(e,"Analytics"),await d.tab();const s=v(e,"Settings");H(s),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const a=v(e,"Settings");await d.click(a),await G(e,"General"),await G(e,"Privacy"),await G(e,"Advanced"),_(e,"Security"),_(e,"API Keys"),await d.tab();const s=v(e,"General");H(s),await d.tab();const r=v(e,"Privacy");H(r),await d.tab();const l=v(e,"Advanced");H(l),D(e,"Security"),D(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const a=v(e,"Advanced");await d.click(a),G(e,"Security"),G(e,"API Keys"),await d.tab();const s=v(e,"Security");H(s),await d.tab();const r=v(e,"API Keys");H(r)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const a=v(e,"Advanced");await d.click(a),_(e,"Security"),_(e,"API Keys"),await d.tab();const s=v(e,"Profile");H(s),D(e,"Security"),D(e,"API Keys")})}},Te={tags:["!autodocs"],args:{...m.args,headerConfig:b,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify collapse control is a native button with a single accessible name",async()=>{const a=at(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("BUTTON"),i(a).toHaveAttribute("type","button"),i(a).toHaveTextContent("Réduire le menu"),i(a).not.toHaveAttribute("aria-label"),i(R(e).getByRole("button",{name:"Réduire le menu"})).toBe(a)}),await n("Verify collapse button can be focused and activated with keyboard",async()=>{const a=at(e);a==null||a.focus(),H(a),await d.keyboard(on);const s=at(e);i(s).toHaveAttribute("aria-label","Ouvrir le menu"),i(s).not.toHaveTextContent("Réduire le menu"),i(R(e).getByRole("button",{name:"Ouvrir le menu"})).toBe(s)})}},Ae={tags:["!autodocs"],args:{...m.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const a=ee(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("DIV"),i(a).not.toHaveAttribute("href"),i(a).not.toHaveAttribute("role","button"),i(a).not.toHaveAttribute("tabindex")})}},Be={tags:["!autodocs"],args:{...m.args,headerConfig:xo,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header is a link when link prop is provided",async()=>{const a=ee(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("A"),i(a).toHaveAttribute("href","/"),i(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const a=ee(e);a==null||a.focus(),i(a).toHaveFocus()})}},Ee={tags:["!autodocs"],args:{...m.args,headerConfig:{...wo,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header is clickable button when onClick is provided",async()=>{const a=ee(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("DIV"),await d.click(a),i(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const a=ee(e);a==null||a.focus(),i(a).toHaveFocus(),await d.keyboard(on),await d.keyboard(wn)})}},Ie={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:P,collapsible:!0,isCollapsed:!0},decorators:[Ye()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header tooltip falls back to title when collapsed",async()=>{const a=ee(e);i(a).not.toBeNull(),a==null||a.focus(),await oe();const s=R(document.body).queryByRole("tooltip",{name:"My Application"});i(s).not.toBeNull(),i(s).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const a=ce(e,0);i(a).not.toBeNull(),a==null||a.focus(),await oe();const s=R(document.body).queryByRole("tooltip",{name:"Home"});i(s).not.toBeNull(),i(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await d.tab(),await oe();const a=R(document.body).queryByRole("tooltip",{name:"Dashboard"});i(a).not.toBeNull(),i(a).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await d.tab(),await d.tab(),await d.tab(),await oe();const a=R(document.body).queryByRole("tooltip",{name:"Profile"});i(a).not.toBeNull(),i(a).toHaveTextContent("Profile")})}},Se={tags:["!autodocs"],args:{...m.args,headerConfig:{...b,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Ye()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const a=ee(e);i(a).not.toBeNull(),a==null||a.focus(),await oe();const s=R(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});i(s).not.toBeNull(),i(s).toHaveTextContent("Custom header tooltip")})}},He={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:$e,collapsible:!0,isCollapsed:!0},decorators:[Ye()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify tooltips appear when tabbing to menu items",async()=>{En();const a=ce(e,1);i(a).not.toBeNull(),await d.tab(),await d.tab(),await d.tab(),await oe();const s=R(document.body).queryByRole("tooltip",{name:"Dashboard"});i(s).not.toBeNull(),i(s).toHaveTextContent("Dashboard")})}},ke={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:ho,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify Overview nested item is active",async()=>{L(e,"overview"),y(e,"reports")})}},je={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:fo,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{L(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")})}},De={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[gn(hn,"security")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify only Security is active, not parent NavMenus",async()=>{L(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const a=e.getByRole("navigation"),s=v(a,"API Keys");i(s).not.toBeNull(),await d.click(s),y(e,"security"),L(e,"api-keys"),y(e,"advanced"),y(e,"settings")})}},_e={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[gn(hn,"overview")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify Overview leaf is active initially",async()=>{L(e,"overview"),y(e,"reports"),y(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const a=e.getByRole("navigation"),s=v(a,"Reports");i(s).not.toBeNull(),await d.click(s),y(e,"overview"),L(e,"reports"),y(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const a=e.getByRole("navigation"),s=v(a,"Settings");i(s).not.toBeNull(),await d.click(s);const r=v(a,"Advanced");i(r).not.toBeNull(),await d.click(r),y(e,"overview"),y(e,"reports"),y(e,"security"),y(e,"api-keys"),L(e,"advanced")})}},Me={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:P,activeItem:"home",collapsible:!0},decorators:[vo(P)],play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify Home has active class initially",async()=>{L(e,"home"),y(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const a=e.getByRole("navigation"),s=v(a,"Dashboard");i(s).not.toBeNull(),await d.click(s),y(e,"home"),L(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")})}},Re={args:{...m.args,headerConfig:b,items:P,footerItems:ut,collapsible:!0}},Fe={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:P,footerItems:ut,collapsible:!1}},qe={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:$e,footerItems:ut,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify footer items are rendered",async()=>{const a=ne(e,"Settings");i(a).not.toBeNull();const s=ne(e,"Help & Support");i(s).not.toBeNull();const r=ne(e,"Account");i(r).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const a=ne(e,"Account");await d.click(a);const s=ne(e,"Preferences");i(s).not.toBeNull();const r=ne(e,"Logout");i(r).not.toBeNull()})}},re={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:No,collapsible:!0}},Pe={tags:["!autodocs"],args:{...re.args,isCollapsed:!0},decorators:[Ye()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var r;const a=ce(e,0);i(a).not.toBeNull();const s=a==null?void 0:a.querySelector('[data-size="xs"]');i(s).not.toBeNull(),i(s).toHaveAttribute("data-badge-type","indicator"),i((r=s==null?void 0:s.textContent)==null?void 0:r.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const a=ce(e,0);i(a==null?void 0:a.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var r;const a=ce(e,1);i(a).not.toBeNull();const s=a==null?void 0:a.querySelector('[data-size="xs"]');i(s).not.toBeNull(),i(s).toHaveAttribute("data-badge-type","indicator"),i((r=s==null?void 0:s.textContent)==null?void 0:r.trim()).toBe("")})}},Co=[h[0],{...h[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...h[2],hasDivider:!0},{...k,id:"reports",label:"Reports",icon:"info"},{...h[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},h[4]],We={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:Co,collapsible:!0}},Nn=o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0 1rem",color:"white",fontWeight:600},children:[o.jsx("span",{style:{fontSize:"1.25rem"},children:"⬡"}),o.jsx("span",{children:"My App"})]}),bn=o.jsx("div",{style:{padding:"1rem",color:"white",fontSize:"0.875rem"},children:"Custom footer content"}),Oe={args:{items:P,appearance:"brand"},render:t=>o.jsx(Y,{...t,header:Nn,children:ue})},Le={args:{items:P,appearance:"brand"},render:t=>o.jsx(Y,{...t,footer:bn,children:ue})},Ve={args:{items:P,appearance:"brand"},render:t=>o.jsx(Y,{...t,header:Nn,footer:bn,children:ue})},Ke={args:{items:P,appearance:"brand",collapsible:!1},render:t=>o.jsx(Y,{...t,children:ue})};var ft,ht,Nt;m.parameters={...m.parameters,docs:{...(ft=m.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(Nt=(ht=m.parameters)==null?void 0:ht.docs)==null?void 0:Nt.source}}};var bt,xt,wt;ye.parameters={...ye.parameters,docs:{...(bt=ye.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(wt=(xt=ye.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Ct,Tt,At;fe.parameters={...fe.parameters,docs:{...(Ct=fe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(At=(Tt=fe.parameters)==null?void 0:Tt.docs)==null?void 0:At.source}}};var Bt,Et,It;he.parameters={...he.parameters,docs:{...(Bt=he.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(It=(Et=he.parameters)==null?void 0:Et.docs)==null?void 0:It.source}}};var St,Ht,kt;Ne.parameters={...Ne.parameters,docs:{...(St=Ne.parameters)==null?void 0:St.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(kt=(Ht=Ne.parameters)==null?void 0:Ht.docs)==null?void 0:kt.source}}};var jt,Dt,_t;be.parameters={...be.parameters,docs:{...(jt=be.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
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
}`,...(_t=(Dt=be.parameters)==null?void 0:Dt.docs)==null?void 0:_t.source}}};var Mt,Rt,Ft;xe.parameters={...xe.parameters,docs:{...(Mt=xe.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ft=(Rt=xe.parameters)==null?void 0:Rt.docs)==null?void 0:Ft.source}}};var qt,Pt,Wt;we.parameters={...we.parameters,docs:{...(qt=we.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Wt=(Pt=we.parameters)==null?void 0:Pt.docs)==null?void 0:Wt.source}}};var Ot,Lt,Vt;Ce.parameters={...Ce.parameters,docs:{...(Ot=Ce.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
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
      expect(dashboardMenu).toHaveAttribute("role", "button");
      expect(dashboardMenu).toHaveAttribute("aria-expanded", "false");
      expect(dashboardMenu?.getAttribute("aria-controls")).toBeTruthy();
      expectElementNotToHaveFocus(sideNav, "Overview");
      expectElementNotToHaveFocus(sideNav, "Reports");
      expectElementNotToHaveFocus(sideNav, "Analytics");
      await userEvent.tab();
      const settingsMenu = getNavElement(sideNav, "Settings");
      expectElementToHaveFocus(settingsMenu);
      expect(settingsMenu).toHaveAttribute("role", "button");
      expect(settingsMenu).toHaveAttribute("aria-expanded", "false");
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
      expect(dashboardMenu).toHaveAttribute("aria-expanded", "true");
      expect(document.getElementById(dashboardMenu!.getAttribute("aria-controls")!)).not.toBeNull();
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
      expect(dashboardMenu).toHaveAttribute("aria-expanded", "false");
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
      await expectElementToBeAccessible(sideNav, "General");
      await expectElementToBeAccessible(sideNav, "Privacy");
      await expectElementToBeAccessible(sideNav, "Advanced");
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
}`,...(Vt=(Lt=Ce.parameters)==null?void 0:Lt.docs)==null?void 0:Vt.source}}};var Kt,zt,Gt;Te.parameters={...Te.parameters,docs:{...(Kt=Te.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify collapse control is a native button with a single accessible name", async () => {
      const collapseButton = getCollapseButton(sideNav);
      expect(collapseButton).not.toBeNull();
      expect(collapseButton?.tagName).toBe("BUTTON");
      expect(collapseButton).toHaveAttribute("type", "button");
      expect(collapseButton).toHaveTextContent("Réduire le menu");
      expect(collapseButton).not.toHaveAttribute("aria-label");
      expect(within(sideNav).getByRole("button", {
        name: "Réduire le menu"
      })).toBe(collapseButton);
    });
    await step("Verify collapse button can be focused and activated with keyboard", async () => {
      const collapseButton = getCollapseButton(sideNav);
      collapseButton?.focus();
      expectElementToHaveFocus(collapseButton);
      await userEvent.keyboard(TESTING_ENTER_KEY);
      const collapsedButton = getCollapseButton(sideNav);
      expect(collapsedButton).toHaveAttribute("aria-label", "Ouvrir le menu");
      expect(collapsedButton).not.toHaveTextContent("Réduire le menu");
      expect(within(sideNav).getByRole("button", {
        name: "Ouvrir le menu"
      })).toBe(collapsedButton);
    });
  }
}`,...(Gt=(zt=Te.parameters)==null?void 0:zt.docs)==null?void 0:Gt.source}}};var Ut,Yt,$t;Ae.parameters={...Ae.parameters,docs:{...(Ut=Ae.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...($t=(Yt=Ae.parameters)==null?void 0:Yt.docs)==null?void 0:$t.source}}};var Jt,Qt,Xt;Be.parameters={...Be.parameters,docs:{...(Jt=Be.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(Xt=(Qt=Be.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,ea,ta;Ee.parameters={...Ee.parameters,docs:{...(Zt=Ee.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(ta=(ea=Ee.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,oa;Ie.parameters={...Ie.parameters,docs:{...(aa=Ie.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(oa=(na=Ie.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var sa,ia,ra;Se.parameters={...Se.parameters,docs:{...(sa=Se.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(ra=(ia=Se.parameters)==null?void 0:ia.docs)==null?void 0:ra.source}}};var ca,la,da;He.parameters={...He.parameters,docs:{...(ca=He.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
      focusElementBeforeComponent();
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
}`,...(da=(la=He.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var ua,pa,va;ke.parameters={...ke.parameters,docs:{...(ua=ke.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
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
}`,...(va=(pa=ke.parameters)==null?void 0:pa.docs)==null?void 0:va.source}}};var ma,ga,ya;je.parameters={...je.parameters,docs:{...(ma=je.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
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
}`,...(ya=(ga=je.parameters)==null?void 0:ga.docs)==null?void 0:ya.source}}};var fa,ha,Na;De.parameters={...De.parameters,docs:{...(fa=De.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
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
}`,...(Na=(ha=De.parameters)==null?void 0:ha.docs)==null?void 0:Na.source}}};var ba,xa,wa;_e.parameters={..._e.parameters,docs:{...(ba=_e.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
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
}`,...(wa=(xa=_e.parameters)==null?void 0:xa.docs)==null?void 0:wa.source}}};var Ca,Ta,Aa;Me.parameters={...Me.parameters,docs:{...(Ca=Me.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(Aa=(Ta=Me.parameters)==null?void 0:Ta.docs)==null?void 0:Aa.source}}};var Ba,Ea,Ia;Re.parameters={...Re.parameters,docs:{...(Ba=Re.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Ia=(Ea=Re.parameters)==null?void 0:Ea.docs)==null?void 0:Ia.source}}};var Sa,Ha,ka;Fe.parameters={...Fe.parameters,docs:{...(Sa=Fe.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(ka=(Ha=Fe.parameters)==null?void 0:Ha.docs)==null?void 0:ka.source}}};var ja,Da,_a;qe.parameters={...qe.parameters,docs:{...(ja=qe.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(_a=(Da=qe.parameters)==null?void 0:Da.docs)==null?void 0:_a.source}}};var Ma,Ra,Fa;re.parameters={...re.parameters,docs:{...(Ma=re.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Fa=(Ra=re.parameters)==null?void 0:Ra.docs)==null?void 0:Fa.source}}};var qa,Pa,Wa;Pe.parameters={...Pe.parameters,docs:{...(qa=Pe.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(Wa=(Pa=Pe.parameters)==null?void 0:Pa.docs)==null?void 0:Wa.source}}};var Oa,La,Va;We.parameters={...We.parameters,docs:{...(Oa=We.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Va=(La=We.parameters)==null?void 0:La.docs)==null?void 0:Va.source}}};var Ka,za,Ga;Oe.parameters={...Oe.parameters,docs:{...(Ka=Oe.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent}>
      {PageContent}
    </SideNav>
}`,...(Ga=(za=Oe.parameters)==null?void 0:za.docs)==null?void 0:Ga.source}}};var Ua,Ya,$a;Le.parameters={...Le.parameters,docs:{...(Ua=Le.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...($a=(Ya=Le.parameters)==null?void 0:Ya.docs)==null?void 0:$a.source}}};var Ja,Qa,Xa;Ve.parameters={...Ve.parameters,docs:{...(Ja=Ve.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(Xa=(Qa=Ve.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};var Za,en,tn;Ke.parameters={...Ke.parameters,docs:{...(Za=Ke.parameters)==null?void 0:Za.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand",
    collapsible: false
  },
  render: args => <SideNav {...args}>{PageContent}</SideNav>
}`,...(tn=(en=Ke.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};const Jo=["Default","Collapsible","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithLongItemLabel","WithNestedMenus","KeyboardNavigation","CollapseButtonAccessibility","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers","WithCustomHeader","WithCustomFooter","WithCustomHeaderAndFooter","WithoutHeaderOrFooter"];export{Me as ActiveItemState,Te as CollapseButtonAccessibility,Se as CollapsedHeaderTooltipCustom,Ie as CollapsedTooltip,He as CollapsedTooltipWithNested,Pe as CollapsedWithBadges,ye as Collapsible,m as Default,Fe as FooterItemsOnly,qe as FooterItemsWithNested,Ae as HeaderClickability,Ne as HeaderCompact,Be as HeaderWithLink,be as HeaderWithLongTitle,Ee as HeaderWithOnClick,he as HeaderWithVersion,Ce as KeyboardNavigation,_e as NestedItemActiveOnClick,ke as NestedItemActivePreselected,De as NestedNavMenuActiveOnClick,je as NestedNavMenuActivePreselected,re as WithBadges,Le as WithCustomFooter,Oe as WithCustomHeader,Ve as WithCustomHeaderAndFooter,fe as WithCustomRouter,We as WithDividers,Re as WithFooterItems,xe as WithLongItemLabel,we as WithNestedMenus,Ke as WithoutHeaderOrFooter,Jo as __namedExportsOrder,$o as default};
