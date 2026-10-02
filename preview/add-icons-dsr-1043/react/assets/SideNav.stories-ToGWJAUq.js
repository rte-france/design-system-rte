import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{g as vn,B as Mn,s as mn}from"./BaseSideNav-N178nlU9.js";import{T as gn,a as Fn}from"./keyboard-test.constants-By8W48aj.js";import{w as j,e as i,a as yn,u as p}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{B as fn,N as hn,b as qn,R as Pn,a as de}from"./chunk-62JRHF6Z-Czs070yK.js";import{f as On}from"./testing.utils-r13wRTL2.js";import{N as Nn}from"./NavigationProvider-DgrdpURC.js";import{D as me}from"./Divider-BVZUrQ0d.js";import{u as rt,a as bn,E as xn}from"./link.constants-kcvANsJQ.js";import{s as Ln,I as it,B as ct}from"./Badge-DUkuUEsZ.js";import{I as lt}from"./Icon-DBkoQNiA.js";import{T as Wn}from"./Tooltip-f8PYt3ME.js";import{S as Xe,E as Je,c as ht,b as Vn,d as Kn}from"./keyboard.constants-BverKK8B.js";import{u as Cn}from"./useActiveKeyboard-DaOmFJe_.js";import"./timepicker.constants-CynrC_9x.js";import{g as zn}from"./id.utils-DsO5Uws7.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Nt={HEADER_CONFIG_AND_CUSTOM:"SideNav: Both headerConfig and a custom header were provided. The custom header takes precedence.",FOOTER_ITEMS_AND_CUSTOM:"SideNav: Both footerItems (or collapsible default footer) and a custom footer were provided. The custom footer takes precedence."},Gn=[{condition:t=>t.hasCustomHeader&&t.hasHeaderConfig,issue:Nt.HEADER_CONFIG_AND_CUSTOM},{condition:t=>t.hasCustomFooter&&(t.hasFooterItems||!!t.collapsible),issue:Nt.FOOTER_ITEMS_AND_CUSTOM}];function Un(t){var e;return((e=Gn.find(({condition:a})=>a(t)))==null?void 0:e.issue)??null}function Yn(t,n){return!t&&!!n}function $n(t,n,e){return!t&&!!(n!=null&&n.length||e)}function Xn(t,n){return!!(t||n)}function Jn(t,n,e){return!!(t||n!=null&&n.length||e)}function wn(t=!1,n=!1){return t?it.s:n?it.l:it.m}function Qe(t){return t?Ln({showBadge:!0,badgeContent:t.content??"number",badgeCount:t.count,badgeIcon:t.icon}):!1}function Qn(t){return t.badgeType??"indicator"}const Zn="_navItemContainer_cyt4c_1",eo="_navItemLeft_cyt4c_54",to="_navItem_cyt4c_1",ao="_navItemRight_cyt4c_71",no="_srOnly_cyt4c_117",P={navItemContainer:Zn,navItemLeft:eo,navItem:to,navItemRight:ao,srOnly:no},oo="_navMenuContainer_n8e33_1",so="_navMenu_n8e33_1",io="_menuContentLeft_n8e33_43",ro="_menuContentRight_n8e33_48",co="_menuIcon_n8e33_112",lo="_nestedMenu_n8e33_127",uo="_icon_n8e33_150",ae={navMenuContainer:oo,navMenu:so,menuContentLeft:io,menuContentRight:ro,menuIcon:co,nestedMenu:lo,icon:uo};function dt({link:t,externalLink:n,isCollapsed:e,label:a,tabIndex:s,onKeyDown:r,onFocus:d,onBlur:u,onClick:f,children:x,styleType:C="item",ariaExpanded:w,ariaControls:B,role:T}){const R=rt(),M=C==="menu"?ae:P,H=C==="menu"?M.navMenu:M.navItem,A=t?e?n?bn(a):a:void 0:a,W={className:H,tabIndex:s,...A!==void 0&&{"aria-label":A},...w!==void 0&&{"aria-expanded":w},...B&&{"aria-controls":B},...T&&{role:T},...d&&{onFocus:d},...u&&{onBlur:u},...f&&{onClick:f},...r&&{onKeyDown:r}};return t?o.jsxs(R,{href:t,to:t,target:n?"_blank":void 0,rel:n?"noopener noreferrer":void 0,...W,children:[x,n&&!e&&o.jsxs("span",{className:P.srOnly,children:[", ",xn]})]}):o.jsx("span",{...W,children:x})}dt.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},externalLink:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},ariaExpanded:{required:!1,tsType:{name:"boolean"},description:""},ariaControls:{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"literal",value:'"button"'},description:""}}};function ut({icon:t,hasLeadingIcon:n=!0,label:e,isCollapsed:a,isNested:s,styleType:r="item",badge:d}){const u=wn(s,a),f=r==="menu"?ae:P;function x(){if(!n||!t)return null;const C=o.jsx(lt,{name:t,className:f.icon,size:u});return a&&d&&Qe(d)?o.jsx(ct,{badgeType:Qn(d),size:"xs",content:"empty",children:C}):C}return o.jsxs(o.Fragment,{children:[x(),a?null:o.jsx("span",{children:e})]})}ut.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function ge({label:t,isCollapsed:n,children:e}){return n&&t?o.jsx(Wn,{label:t,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}ge.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Tn(t){return t===!1?-1:0}function Bn({onEnterOrSpace:t,onEscape:n,includeArrowKeys:e=!1,includeEscape:a=!1}={}){const s=g.useCallback(u=>{[Xe,Je].includes(u.key)&&(u.preventDefault(),t==null||t()),u.key===ht&&a&&(u.preventDefault(),n==null||n())},[t,n,a]),r=[Xe,Je,...a?[ht]:[],...e?[Vn,Kn]:[]],{onKeyDown:d}=Cn({onKeyDown:s},{interactiveKeyCodes:r});return{onKeyDown:d}}const pt=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:s,isCollapsed:r,link:d,href:u,externalLink:f,isNested:x,parentMenuOpen:C,appearance:w="brand",active:B,badge:T,onActiveItemChange:R,...M},H)=>{const A=rt(),W=g.useRef(null),S=g.useRef(null),V=!!(u||d),{onKeyDown:X}=Bn({onEnterOrSpace:a});function oe(){var k,K;(k=W.current)==null||k.setAttribute("data-focused","true"),(K=S.current)==null||K.setAttribute("data-focused","true")}function U(){var k,K;(k=W.current)==null||k.removeAttribute("data-focused"),(K=S.current)==null||K.removeAttribute("data-focused")}const J=Tn(C),Q=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:P.navItemLeft,children:o.jsx(ut,{icon:n,hasLeadingIcon:e,label:s,isCollapsed:r,isNested:x,styleType:"item",badge:T})}),o.jsx("div",{className:P.navItemRight,children:!r&&T&&Qe(T)&&o.jsx(ct,{badgeType:T.badgeType,size:T.size,content:T.content,count:T.count})})]}),Z=r&&f?bn(s):r?s:void 0,O=V?o.jsxs(A,{id:t,"aria-label":Z,className:P.navItemContainer,"data-collapsed":r,"data-appearance":w,"data-nested":x,"data-active":B,href:u??d,to:u??d,target:f?"_blank":void 0,rel:f?"noopener noreferrer":void 0,onClick:()=>R==null?void 0:R(t),onBlur:U,ref:S,children:[Q,f&&!r&&o.jsxs("span",{className:P.srOnly,children:[", ",xn]})]}):o.jsx("div",{id:t,className:P.navItemContainer,"data-collapsed":r,"data-appearance":w,"data-nested":x,"data-active":B,onClick:a,ref:k=>{W.current=k,typeof H=="function"?H(k):H&&"current"in H&&(H.current=k)},...M,children:o.jsx(dt,{label:s,tabIndex:J,onKeyDown:X,onFocus:oe,onBlur:U,styleType:"item",children:Q})});return o.jsx(ge,{label:s,isCollapsed:r,children:O})});pt.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const vt=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:s,isCollapsed:r,link:d,href:u,externalLink:f,items:x=[],open:C,onOpenChange:w,hasMenuIcon:B=!0,isNested:T,parentMenuOpen:R,appearance:M="brand",contrast:H="high",badge:A,hasDivider:W,active:S,onMenuOpenChange:V,getMenuOpen:X,...oe},U)=>{const J=vn(M,H),[Q,Z]=g.useState(!1),O=C??Q,k=C!==void 0,K=g.useRef(zn()),ye=`nav-menu-content-${t??K.current}`;function ee(){const c=!O,st=t||s;if(a&&a(),st&&V){V(st,c);return}k?w==null||w(c):Z(c)}function tt(){if(!O)return;const c=t||s;if(c&&V){V(c,!1);return}k?w==null||w(!1):Z(!1)}const{onKeyDown:at}=Bn({onEnterOrSpace:ee,onEscape:tt,includeArrowKeys:!0,includeEscape:!0}),nt=x.length,te=!r&&nt,le=O,ot=Tn(R),fe=te&&B?o.jsx(lt,{name:"arrow-chevron-right",className:ae.menuIcon,"data-open":O}):null,N=!r&&(Qe(A)||!!fe),l=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:ae.menuContentLeft,children:o.jsx(ut,{icon:n,hasLeadingIcon:e,label:s,isCollapsed:r,isNested:T,styleType:"menu",badge:A})}),N&&o.jsxs("div",{className:ae.menuContentRight,children:[A&&Qe(A)&&o.jsx(ct,{badgeType:A.badgeType,size:A.size,content:A.content,count:A.count}),fe]})]}),he=o.jsxs("li",{id:t,className:ae.navMenuContainer,"data-collapsed":r,"data-appearance":M,"data-nested":T,"data-open":O,"data-active":S,ref:U,...oe,children:[o.jsx(dt,{link:u??d,externalLink:f,isCollapsed:r,label:s,tabIndex:ot,onClick:ee,onKeyDown:at,styleType:"menu",ariaExpanded:te?O:void 0,ariaControls:te?ye:void 0,role:te&&!d?"button":void 0,children:l}),te&&o.jsx("ul",{id:ye,className:ae.nestedMenu,"data-open":O,children:x.map(c=>{var ft;return(ft=c.items)!=null&&ft.length?o.jsx(vt,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:r,link:c.href??c.link,href:c.href,externalLink:c.externalLink,onClick:c.onClick,items:c.items||[],open:X?X(c):c.open,onOpenChange:c.onOpenChange,onMenuOpenChange:V,getMenuOpen:X,active:c.active,hasMenuIcon:B,hasDivider:c.hasDivider,isNested:!0,parentMenuOpen:le,appearance:M,contrast:H,badge:c.badge},c.id||c.label):o.jsxs(g.Fragment,{children:[o.jsx("li",{children:o.jsx(pt,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:r,href:c.href,link:c.href??c.link,externalLink:c.externalLink,onClick:c.onClick,isNested:!0,parentMenuOpen:le,appearance:M,active:c.active,badge:c.badge})}),c.hasDivider&&o.jsx(me,{appearance:J})]},c.id||c.label)})})]}),Ne=o.jsx(ge,{label:s,isCollapsed:r,children:he});return o.jsxs(o.Fragment,{children:[Ne,W&&o.jsx(me,{appearance:J})]})});vt.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const po="_sideNavHeaderContainer_y5fd7_1",vo="_sideNavHeader_y5fd7_1",mo="_sideNavHeaderTitleContainer_y5fd7_43",go="_sideNavHeaderTitle_y5fd7_43",yo="_sideNavHeaderIdentifier_y5fd7_52",fo="_sideNavHeaderVersion_y5fd7_129",ho="_sideNavBody_y5fd7_165",No="_sideNavFooterContainer_y5fd7_189",bo="_sideNavFooter_y5fd7_189",xo="_sideNavFooterItems_y5fd7_202",Co="_collapsibleSection_y5fd7_219",wo="_collapseButton_y5fd7_234",_={sideNavHeaderContainer:po,sideNavHeader:vo,sideNavHeaderTitleContainer:mo,sideNavHeaderTitle:go,sideNavHeaderIdentifier:yo,sideNavHeaderVersion:fo,sideNavBody:ho,sideNavFooterContainer:No,sideNavFooter:bo,sideNavFooterItems:xo,collapsibleSection:Co,collapseButton:wo};function An({footerItemsContent:t,collapsible:n,isCollapsed:e,appearance:a,dividerAppearance:s,collapseIcon:r,onCollapse:d,openCollapseText:u,closeCollapseText:f}){const x=e?u:f,C=wn(!1,e);return o.jsxs("div",{className:_.sideNavFooterContainer,children:[t&&o.jsx("div",{className:_.sideNavFooterItems,children:t}),o.jsx(me,{appearance:s}),o.jsx("div",{className:_.sideNavFooter,children:n&&o.jsx("div",{className:_.collapsibleSection,children:o.jsx(ge,{label:x,isCollapsed:e,children:o.jsx("button",{type:"button",id:"collapse-button",className:`${P.navItemContainer} ${_.collapseButton}`,"data-collapsed":e,"data-appearance":a,"aria-label":e?x:void 0,onClick:d,children:o.jsx("span",{className:P.navItem,children:o.jsxs("div",{className:P.navItemLeft,children:[o.jsx(lt,{name:r,className:P.icon,size:C}),!e&&o.jsx("span",{children:x})]})})})})})})]})}An.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultFooter",props:{footerItemsContent:{required:!0,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},collapseIcon:{required:!0,tsType:{name:"string"},description:""},onCollapse:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},openCollapseText:{required:!0,tsType:{name:"string"},description:""},closeCollapseText:{required:!0,tsType:{name:"string"},description:""}}};function mt({isCollapsed:t,appearance:n,dividerAppearance:e,isCompact:a=!1,children:s}){return o.jsxs("div",{className:_.sideNavHeaderContainer,"data-compact":a,"data-collapsed":t,children:[o.jsx("div",{className:_.sideNavHeader,"data-collapsed":t,"data-appearance":n,"data-compact":a,children:s}),o.jsx(me,{appearance:e})]})}mt.__docgenInfo={description:"",methods:[],displayName:"SideNavHeaderContainer",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function En({headerConfig:t,isCollapsed:n,shouldShowTitle:e,appearance:a,dividerAppearance:s}){const r=rt(),d=H=>{var A;[Xe,Je].includes(H.key)&&(H.preventDefault(),(A=t.onClick)==null||A.call(t))},{onKeyDown:u}=Cn({onKeyDown:d},{interactiveKeyCodes:[Xe,Je]}),f=o.jsxs("div",{className:_.sideNavHeaderTitle,children:[o.jsx("div",{className:_.sideNavHeaderIdentifier,children:t.identifier}),!n&&o.jsx("h1",{children:t.title})]}),x=t.ariaLabel,C=o.jsx(r,{href:t.link??"",className:_.sideNavHeaderTitleContainer,onClick:t.onClick,"aria-label":x,children:f}),w=o.jsx("div",{className:_.sideNavHeaderTitleContainer,tabIndex:0,onClick:t.onClick,onKeyDown:u,role:"button","aria-label":x,children:f}),B=o.jsx("div",{className:_.sideNavHeaderTitleContainer,children:f});function T(){return t.link?C:t.onClick?w:B}const R=g.useMemo(()=>t.tooltip??t.title??"",[t.tooltip,t.title]),M=o.jsx(ge,{label:R,isCollapsed:n,children:T()});return o.jsxs(mt,{isCollapsed:n,isCompact:!!t.isCompact,appearance:a,dividerAppearance:s,children:[M,!t.isCompact&&o.jsx("div",{className:_.sideNavHeaderVersion,"data-hidden":!e,children:o.jsx("span",{children:t.version})})]})}En.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultHeader",props:{headerConfig:{required:!0,tsType:{name:"SideNavHeaderConfig"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},shouldShowTitle:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""}}};const To=300,G=g.forwardRef(({size:t="m",collapsible:n,children:e,header:a,footer:s,headerConfig:r,items:d,footerItems:u,isCollapsed:f,defaultCollapsed:x=!1,onCollapsedChange:C,onActiveItemChange:w,appearance:B="brand",contrast:T="high",activeItem:R,"aria-label":M,openCollapseText:H="Ouvrir le menu",closeCollapseText:A="Réduire le menu"},W)=>{const[S,V]=g.useState(f??x),[X,oe]=g.useState(!0),[U,J]=g.useState({}),[Q,Z]=g.useState(R),O=g.useCallback((N,l)=>{J(he=>({...he,[N]:l}))},[]),k=g.useCallback(N=>{const l=N.id??N.label;return l&&l in U?U[l]:N.open},[U]),K=g.useCallback(N=>{Z(N),w==null||w(N)},[w]);g.useEffect(()=>{Z(R)},[R]),g.useEffect(()=>{J({})},[d]),g.useEffect(()=>{f!==void 0&&V(f)},[f]),g.useEffect(()=>{if(S)oe(!1);else{const N=setTimeout(()=>{oe(!0)},To);return()=>clearTimeout(N)}},[S]);const yt=()=>{const N=!S;f===void 0&&V(N),C==null||C(N)},ye=S?"arrow-double-right":"arrow-double-left",ee=vn(B,T),tt=Yn(a,r),at=$n(s,u,n),nt=Xn(a,r),te=Jn(s,u,n);g.useEffect(()=>{const N=Un({hasCustomHeader:!!a,hasHeaderConfig:!!r,hasCustomFooter:!!s,hasFooterItems:!!(u!=null&&u.length),collapsible:n});N&&console.warn(N)},[a,r,s,u,n]);function le(N){return N!=null&&N.length?o.jsx("ul",{children:N.map(l=>{var Ne;return((Ne=l.items)==null?void 0:Ne.length)?o.jsx(vt,{id:l.id,badge:l.badge,label:l.label,icon:l.icon,hasLeadingIcon:l.hasLeadingIcon,isCollapsed:S,link:l.href??l.link,href:l.href,externalLink:l.externalLink,onClick:l.onClick,items:l.items||[],open:k(l),onMenuOpenChange:O,getMenuOpen:k,active:l.active,appearance:B,contrast:T,hasDivider:l.hasDivider},l.id):o.jsxs(g.Fragment,{children:[o.jsx("li",{children:o.jsx(pt,{id:l.id,badge:l.badge,label:l.label,icon:l.icon,hasLeadingIcon:l.hasLeadingIcon,isCollapsed:S,href:l.href,link:l.href??l.link,externalLink:l.externalLink,onClick:l.onClick,appearance:B,active:l.active??(l.id===Q&&!!Q),onActiveItemChange:K})}),l.hasDivider&&o.jsx(me,{appearance:ee})]},l.id)})}):null}function ot(){return nt?tt&&r?o.jsx(En,{headerConfig:r,isCollapsed:S,shouldShowTitle:X,appearance:B,dividerAppearance:ee}):o.jsx(mt,{isCollapsed:S,appearance:B,dividerAppearance:ee,children:a}):null}function fe(){return te?at?o.jsx(An,{footerItemsContent:le(u),collapsible:n,isCollapsed:S,appearance:B,dividerAppearance:ee,collapseIcon:ye,onCollapse:yt,openCollapseText:H,closeCollapseText:A}):s??null:null}return o.jsx(Mn,{ref:W,size:t,isCollapsed:S,appearance:B,contrast:T,"aria-label":M,header:ot(),body:o.jsx("div",{className:_.sideNavBody,children:le(d)}),footer:fe(),children:e})});G.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1},openCollapseText:{defaultValue:{value:'"Ouvrir le menu"',computed:!1},required:!1},closeCollapseText:{defaultValue:{value:'"Réduire le menu"',computed:!1},required:!1}},composes:["Partial","Omit"]};function In(t,n){return t.some(e=>{var a;return e.id===n?!0:(a=e.items)!=null&&a.length?In(e.items,n):!1})}function Bo(t,n){if(!t.id||!n)return t.onClick;const e=()=>{n(t.id)};return t.onClick?()=>{e(),t.onClick()}:e}function Sn(t,n,e){return t.map(a=>{var C;const s=(C=a.items)!=null&&C.length?Sn(a.items,n,e):void 0,r=!!(s!=null&&s.length),d=!r&&a.id===n,u=r&&a.id===n,f=a,x=r&&(a.id===n||In(a.items,n));return{...a,active:d||u,open:x?!0:f.open,items:s,onClick:Bo(a,e)}})}function Ze(){return function(n,e){const[a,s]=g.useState(e.args.isCollapsed??!0);return o.jsx("div",{children:o.jsx(n,{args:{...e.args,isCollapsed:a,onCollapsedChange:s}})})}}function Ao(t){return function(e,a){const[s,r]=g.useState(a.args.activeItem),d=t.map(u=>({...u,onClick:()=>r(u.id),link:void 0}));return o.jsx("div",{children:o.jsx(e,{args:{...a.args,items:d,activeItem:s}})})}}function Hn(t,n){return function(a,s){const[r,d]=g.useState(n),u=g.useMemo(()=>Sn(t,r,d),[r,t]);return o.jsx(a,{args:{...s.args,items:u}})}}function kn(t){if(!t)return null;const n=Array.from(t.children);for(const r of n)if(r.tagName==="A"||r.tagName==="SPAN"&&r.hasAttribute("tabindex"))return r;const e=t.querySelector("a");return e||Array.from(t.querySelectorAll("span")).find(r=>r.hasAttribute("tabindex"))}function m(t,n,e){const a=e?t.querySelector(e):t;if(!a)return null;const s=e?j(a):j(t),r=s.queryByRole("link",{name:n});if(r)return r;const d=s.queryByText(n);if(d){const u=d.closest("li");return kn(u)}return null}function ve(t,n){const e=t.querySelector('[class*="sideNavBody"]');if(!e)return null;const s=Array.from(e.querySelectorAll("li"))[n];return kn(s)}function se(t,n){return m(t,n,'[class*="sideNavFooterItems"]')}function ne(t,n="MA"){var r;return(r=j(t).getByText(n).parentElement)==null?void 0:r.parentElement}function Eo(t,n){return t.querySelector(`#${n}`)}function re(t){return t.querySelector("#collapse-button")}function Io(t){return t.dataset.active==="true"}function D(t){i(t).not.toBeNull(),i(t).toHaveFocus()}function F(t,n){const e=m(t,n);e&&i(e).not.toHaveFocus()}function q(t,n){const e=m(t,n);e&&i(e).toHaveAttribute("tabindex","-1")}async function Y(t,n){await yn(()=>{const e=m(t,n);i(e).not.toBeNull(),i(e).toHaveAttribute("tabindex","0")})}async function Dn(t,n,e){await yn(()=>{const a=t.getByRole("navigation"),s=Eo(a,n);if(!s){i(e).toBe(!1);return}i(Io(s)).toBe(e)})}function z(t,n){return Dn(t,n,!0)}function y(t,n){return Dn(t,n,!1)}function I(t){const n=j(t),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function ie(t=200){return new Promise(n=>setTimeout(n,t))}const ls={title:"Composants/SideNav/SideNav",id:"SideNav",component:G,tags:["autodocs"],decorators:[t=>o.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:o.jsx(t,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:t=>o.jsx(G,{size:t.size,collapsible:t.collapsible,headerConfig:t.headerConfig,appearance:t.appearance,contrast:t.contrast,items:t.items,footerItems:t.footerItems,isCollapsed:t.isCollapsed,activeItem:t.activeItem,onCollapsedChange:t.onCollapsedChange,openCollapseText:t.openCollapseText,closeCollapseText:t.closeCollapseText,children:ce})},ce=o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),E={hasLeadingIcon:!0},$={size:"m",content:"number"},h=[{...E,id:"home",label:"Home",icon:"home"},{...E,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...E,id:"analytics",label:"Analytics",icon:"analytics"},{...E,id:"settings",label:"Settings",icon:"settings"},{...E,id:"profile",label:"Profile",icon:"user",link:"/profile"}],So=[{...E,id:"home",label:"Home",icon:"home",href:"/"},{...E,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...E,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...E,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...E,id:"profile",label:"Profile",icon:"user",href:"/profile"}],Ho=[{...E,id:"home",label:"Home",icon:"home",href:"/"},{...E,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...E,id:"docs",label:"Angular docs",icon:"link",href:"https://angular.dev",externalLink:!0}],L=h,_n=[h[0],{...h[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...h[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},h[4]],ko=[h[0],{...h[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},h[4]],Do=[h[0],{...h[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...h[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},h[4]],et=[h[0],{...h[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...h[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},h[4]],_o=[{...h[0],badge:{...$,badgeType:"indicator",count:5}},{...h[1],badge:{...$,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...$,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...$,badgeType:"indicator",count:12}}]},{...h[3],items:[{label:"General"},{label:"Privacy",badge:{...$,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...$,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...$,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...h[4],badge:{...$,badgeType:"brand",count:8}}],gt=[{...E,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...E,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...E,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},jo="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",Ro={...b},Mo={...b,onClick:()=>{console.log("Header clicked")}},v={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:L}},ue={args:{...v.args,collapsible:!0}},be={args:{...ue.args,openCollapseText:"Ouvrir la navigation",closeCollapseText:"Fermer la navigation"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify the custom expanded label",async()=>{const a=re(e);i(a).toHaveTextContent("Fermer la navigation"),i(j(e).getByRole("button",{name:"Fermer la navigation"})).toBe(a)}),await n("Verify the custom collapsed label",async()=>{await p.click(re(e));const a=re(e);i(a).toHaveAttribute("aria-label","Ouvrir la navigation"),i(j(e).getByRole("button",{name:"Ouvrir la navigation"})).toBe(a)})}},xe={args:{...v.args,collapsible:!0,items:Ho},parameters:{docs:{description:{story:"Manual accessibility check (NVDA / VoiceOver): focus **Angular docs** in the side navigation. The link should announce its name followed by « ouvre dans un nouvel onglet » and open in a new tab."}}},render:t=>o.jsx(fn,{children:o.jsx(Nn,{linkComponent:hn,children:o.jsx(G,{...t,children:ce})})})},Ce={args:{...v.args,items:So},render:t=>{const n=()=>{const e=qn();return g.useEffect(()=>{e("/")},[]),o.jsx(G,{...t,activeItem:"home",onActiveItemChange:a=>console.log("Active item changed to:",a),children:o.jsx("div",{style:{padding:"2rem"},children:o.jsxs(Pn,{children:[o.jsx(de,{path:"/",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),o.jsx(de,{path:"/dashboard",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),o.jsx(de,{path:"/analytics",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),o.jsx(de,{path:"/settings",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),o.jsx(de,{path:"/profile",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return o.jsx(fn,{children:o.jsx(Nn,{linkComponent:hn,children:o.jsx(n,{})})})}},we={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:b}},Te={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:{...b,isCompact:!0}}},Be={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:{...b,title:jo},size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{i(e.offsetWidth).toBe(mn.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const a=e.querySelector("h1");i(a).not.toBeNull(),i(getComputedStyle(a).textOverflow).toBe("ellipsis"),i(a.scrollWidth).toBeGreaterThan(a.clientWidth)})}},bt="Supervision des processus et des opérations en temps réel",Ae={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:b,items:[{...E,id:"supervision",label:bt,icon:"dashboard"},...L.slice(1)],size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Side nav keeps the fixed M panel width with a long item label",async()=>{i(e.offsetWidth).toBe(mn.m)}),await n("Nav item label is truncated with an ellipsis",async()=>{const a=m(e,bt);i(a).not.toBeNull();const s=a==null?void 0:a.querySelector('[class*="navItemLeft"] span:last-child');i(s).not.toBeNull(),i(getComputedStyle(s).textOverflow).toBe("ellipsis"),i(s.scrollWidth).toBeGreaterThan(s.clientWidth)})}},Ee={args:{...v.args,headerConfig:b,items:et,collapsible:!0}},Ie={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:b,items:et,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Navigate through navigation when all menus are closed",async()=>{q(e,"Overview"),q(e,"Reports"),q(e,"Analytics"),q(e,"General"),q(e,"Privacy"),q(e,"Advanced");const a=m(e,"Home");a==null||a.focus(),D(a),await p.tab();const s=m(e,"Dashboard");D(s),i(s).toHaveAttribute("role","button"),i(s).toHaveAttribute("aria-expanded","false"),i(s==null?void 0:s.getAttribute("aria-controls")).toBeTruthy(),F(e,"Overview"),F(e,"Reports"),F(e,"Analytics"),await p.tab();const r=m(e,"Settings");D(r),i(r).toHaveAttribute("role","button"),i(r).toHaveAttribute("aria-expanded","false"),F(e,"General"),F(e,"Privacy"),F(e,"Advanced"),await p.tab();const d=m(e,"Profile");D(d)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const a=m(e,"Dashboard");await p.click(a),i(a).toHaveAttribute("aria-expanded","true"),i(document.getElementById(a.getAttribute("aria-controls"))).not.toBeNull(),Y(e,"Overview"),Y(e,"Reports"),Y(e,"Analytics"),await p.tab();const s=m(e,"Overview");D(s),await p.tab();const r=m(e,"Reports");D(r),await p.tab();const d=m(e,"Analytics");D(d)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const a=m(e,"Dashboard");await p.click(a),i(a).toHaveAttribute("aria-expanded","false"),q(e,"Overview"),q(e,"Reports"),q(e,"Analytics"),await p.tab();const s=m(e,"Settings");D(s),F(e,"Overview"),F(e,"Reports"),F(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const a=m(e,"Settings");await p.click(a),await Y(e,"General"),await Y(e,"Privacy"),await Y(e,"Advanced"),q(e,"Security"),q(e,"API Keys"),await p.tab();const s=m(e,"General");D(s),await p.tab();const r=m(e,"Privacy");D(r),await p.tab();const d=m(e,"Advanced");D(d),F(e,"Security"),F(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const a=m(e,"Advanced");await p.click(a),Y(e,"Security"),Y(e,"API Keys"),await p.tab();const s=m(e,"Security");D(s),await p.tab();const r=m(e,"API Keys");D(r)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const a=m(e,"Advanced");await p.click(a),q(e,"Security"),q(e,"API Keys"),await p.tab();const s=m(e,"Profile");D(s),F(e,"Security"),F(e,"API Keys")})}},Se={tags:["!autodocs"],args:{...v.args,headerConfig:b,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify collapse control is a native button with a single accessible name",async()=>{const a=re(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("BUTTON"),i(a).toHaveAttribute("type","button"),i(a).toHaveTextContent("Réduire le menu"),i(a).not.toHaveAttribute("aria-label"),i(j(e).getByRole("button",{name:"Réduire le menu"})).toBe(a)}),await n("Verify collapse button can be focused and activated with keyboard",async()=>{const a=re(e);a==null||a.focus(),D(a),await p.keyboard(gn);const s=re(e);i(s).toHaveAttribute("aria-label","Ouvrir le menu"),i(s).not.toHaveTextContent("Réduire le menu"),i(j(e).getByRole("button",{name:"Ouvrir le menu"})).toBe(s)})}},He={tags:["!autodocs"],args:{...v.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const a=ne(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("DIV"),i(a).not.toHaveAttribute("href"),i(a).not.toHaveAttribute("role","button"),i(a).not.toHaveAttribute("tabindex")})}},ke={tags:["!autodocs"],args:{...v.args,headerConfig:Ro,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is a link when link prop is provided",async()=>{const a=ne(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("A"),i(a).toHaveAttribute("href","/"),i(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const a=ne(e);a==null||a.focus(),i(a).toHaveFocus()})}},De={tags:["!autodocs"],args:{...v.args,headerConfig:{...Mo,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is clickable button when onClick is provided",async()=>{const a=ne(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("DIV"),await p.click(a),i(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const a=ne(e);a==null||a.focus(),i(a).toHaveFocus(),await p.keyboard(gn),await p.keyboard(Fn)})}},_e={tags:["!autodocs"],args:{...v.args,headerConfig:b,items:L,collapsible:!0,isCollapsed:!0},decorators:[Ze()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header tooltip falls back to title when collapsed",async()=>{const a=ne(e);i(a).not.toBeNull(),a==null||a.focus(),await ie();const s=j(document.body).queryByRole("tooltip",{name:"My Application"});i(s).not.toBeNull(),i(s).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const a=ve(e,0);i(a).not.toBeNull(),a==null||a.focus(),await ie();const s=j(document.body).queryByRole("tooltip",{name:"Home"});i(s).not.toBeNull(),i(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await p.tab(),await ie();const a=j(document.body).queryByRole("tooltip",{name:"Dashboard"});i(a).not.toBeNull(),i(a).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await p.tab(),await p.tab(),await p.tab(),await ie();const a=j(document.body).queryByRole("tooltip",{name:"Profile"});i(a).not.toBeNull(),i(a).toHaveTextContent("Profile")})}},je={tags:["!autodocs"],args:{...v.args,headerConfig:{...b,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Ze()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const a=ne(e);i(a).not.toBeNull(),a==null||a.focus(),await ie();const s=j(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});i(s).not.toBeNull(),i(s).toHaveTextContent("Custom header tooltip")})}},Re={tags:["!autodocs"],args:{...v.args,headerConfig:b,items:et,collapsible:!0,isCollapsed:!0},decorators:[Ze()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify tooltips appear when tabbing to menu items",async()=>{On();const a=ve(e,1);i(a).not.toBeNull(),await p.tab(),await p.tab(),await p.tab(),await ie();const s=j(document.body).queryByRole("tooltip",{name:"Dashboard"});i(s).not.toBeNull(),i(s).toHaveTextContent("Dashboard")})}},Me={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:b,items:Do,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Overview nested item is active",async()=>{z(e,"overview"),y(e,"reports")})}},Fe={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:b,items:ko,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{z(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")})}},qe={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:b,collapsible:!0},decorators:[Hn(_n,"security")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify only Security is active, not parent NavMenus",async()=>{z(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const a=e.getByRole("navigation"),s=m(a,"API Keys");i(s).not.toBeNull(),await p.click(s),y(e,"security"),z(e,"api-keys"),y(e,"advanced"),y(e,"settings")})}},Pe={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:b,collapsible:!0},decorators:[Hn(_n,"overview")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Overview leaf is active initially",async()=>{z(e,"overview"),y(e,"reports"),y(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const a=e.getByRole("navigation"),s=m(a,"Reports");i(s).not.toBeNull(),await p.click(s),y(e,"overview"),z(e,"reports"),y(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const a=e.getByRole("navigation"),s=m(a,"Settings");i(s).not.toBeNull(),await p.click(s);const r=m(a,"Advanced");i(r).not.toBeNull(),await p.click(r),y(e,"overview"),y(e,"reports"),y(e,"security"),y(e,"api-keys"),z(e,"advanced")})}},Oe={tags:["!autodocs"],args:{...v.args,headerConfig:b,items:L,activeItem:"home",collapsible:!0},decorators:[Ao(L)],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Home has active class initially",async()=>{z(e,"home"),y(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const a=e.getByRole("navigation"),s=m(a,"Dashboard");i(s).not.toBeNull(),await p.click(s),y(e,"home"),z(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")})}},Le={args:{...v.args,headerConfig:b,items:L,footerItems:gt,collapsible:!0}},We={tags:["!autodocs"],args:{...v.args,headerConfig:b,items:L,footerItems:gt,collapsible:!1}},Ve={tags:["!autodocs"],args:{...v.args,headerConfig:b,items:et,footerItems:gt,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify footer items are rendered",async()=>{const a=se(e,"Settings");i(a).not.toBeNull();const s=se(e,"Help & Support");i(s).not.toBeNull();const r=se(e,"Account");i(r).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const a=se(e,"Account");await p.click(a);const s=se(e,"Preferences");i(s).not.toBeNull();const r=se(e,"Logout");i(r).not.toBeNull()})}},pe={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:b,items:_o,collapsible:!0}},Ke={tags:["!autodocs"],args:{...pe.args,isCollapsed:!0},decorators:[Ze()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var r;const a=ve(e,0);i(a).not.toBeNull();const s=a==null?void 0:a.querySelector('[data-size="xs"]');i(s).not.toBeNull(),i(s).toHaveAttribute("data-badge-type","indicator"),i((r=s==null?void 0:s.textContent)==null?void 0:r.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const a=ve(e,0);i(a==null?void 0:a.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var r;const a=ve(e,1);i(a).not.toBeNull();const s=a==null?void 0:a.querySelector('[data-size="xs"]');i(s).not.toBeNull(),i(s).toHaveAttribute("data-badge-type","indicator"),i((r=s==null?void 0:s.textContent)==null?void 0:r.trim()).toBe("")})}},Fo=[h[0],{...h[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...h[2],hasDivider:!0},{...E,id:"reports",label:"Reports",icon:"info"},{...h[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},h[4]],ze={tags:["!autodocs"],args:{...v.args,headerConfig:b,items:Fo,collapsible:!0}},jn=o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0 1rem",color:"white",fontWeight:600},children:[o.jsx("span",{style:{fontSize:"1.25rem"},children:"⬡"}),o.jsx("span",{children:"My App"})]}),Rn=o.jsx("div",{style:{padding:"1rem",color:"white",fontSize:"0.875rem"},children:"Custom footer content"}),Ge={args:{items:L,appearance:"brand"},render:t=>o.jsx(G,{...t,header:jn,children:ce})},Ue={args:{items:L,appearance:"brand"},render:t=>o.jsx(G,{...t,footer:Rn,children:ce})},Ye={args:{items:L,appearance:"brand"},render:t=>o.jsx(G,{...t,header:jn,footer:Rn,children:ce})},$e={args:{items:L,appearance:"brand",collapsible:!1},render:t=>o.jsx(G,{...t,children:ce})};var xt,Ct,wt;v.parameters={...v.parameters,docs:{...(xt=v.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(wt=(Ct=v.parameters)==null?void 0:Ct.docs)==null?void 0:wt.source}}};var Tt,Bt,At;ue.parameters={...ue.parameters,docs:{...(Tt=ue.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(At=(Bt=ue.parameters)==null?void 0:Bt.docs)==null?void 0:At.source}}};var Et,It,St;be.parameters={...be.parameters,docs:{...(Et=be.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    ...Collapsible.args,
    openCollapseText: "Ouvrir la navigation",
    closeCollapseText: "Fermer la navigation"
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const {
      sideNav
    } = getCanvasAndSideNav(canvasElement);
    await step("Verify the custom expanded label", async () => {
      const collapseButton = getCollapseButton(sideNav);
      expect(collapseButton).toHaveTextContent("Fermer la navigation");
      expect(within(sideNav).getByRole("button", {
        name: "Fermer la navigation"
      })).toBe(collapseButton);
    });
    await step("Verify the custom collapsed label", async () => {
      await userEvent.click(getCollapseButton(sideNav)!);
      const collapseButton = getCollapseButton(sideNav);
      expect(collapseButton).toHaveAttribute("aria-label", "Ouvrir la navigation");
      expect(within(sideNav).getByRole("button", {
        name: "Ouvrir la navigation"
      })).toBe(collapseButton);
    });
  }
}`,...(St=(It=be.parameters)==null?void 0:It.docs)==null?void 0:St.source}}};var Ht,kt,Dt;xe.parameters={...xe.parameters,docs:{...(Ht=xe.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true,
    items: sideNavItemsWithExternalLink
  },
  parameters: {
    docs: {
      description: {
        story: "Manual accessibility check (NVDA / VoiceOver): focus **Angular docs** in the side navigation. The link should announce its name followed by « ouvre dans un nouvel onglet » and open in a new tab."
      }
    }
  },
  render: args => <BrowserRouter>
      <NavigationProvider linkComponent={NavLink}>
        <SideNav {...args}>{PageContent}</SideNav>
      </NavigationProvider>
    </BrowserRouter>
}`,...(Dt=(kt=xe.parameters)==null?void 0:kt.docs)==null?void 0:Dt.source}}};var _t,jt,Rt;Ce.parameters={...Ce.parameters,docs:{...(_t=Ce.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Rt=(jt=Ce.parameters)==null?void 0:jt.docs)==null?void 0:Rt.source}}};var Mt,Ft,qt;we.parameters={...we.parameters,docs:{...(Mt=we.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(qt=(Ft=we.parameters)==null?void 0:Ft.docs)==null?void 0:qt.source}}};var Pt,Ot,Lt;Te.parameters={...Te.parameters,docs:{...(Pt=Te.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(Lt=(Ot=Te.parameters)==null?void 0:Ot.docs)==null?void 0:Lt.source}}};var Wt,Vt,Kt;Be.parameters={...Be.parameters,docs:{...(Wt=Be.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Kt=(Vt=Be.parameters)==null?void 0:Vt.docs)==null?void 0:Kt.source}}};var zt,Gt,Ut;Ae.parameters={...Ae.parameters,docs:{...(zt=Ae.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ut=(Gt=Ae.parameters)==null?void 0:Gt.docs)==null?void 0:Ut.source}}};var Yt,$t,Xt;Ee.parameters={...Ee.parameters,docs:{...(Yt=Ee.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Xt=($t=Ee.parameters)==null?void 0:$t.docs)==null?void 0:Xt.source}}};var Jt,Qt,Zt;Ie.parameters={...Ie.parameters,docs:{...(Jt=Ie.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Zt=(Qt=Ie.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};var ea,ta,aa;Se.parameters={...Se.parameters,docs:{...(ea=Se.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(aa=(ta=Se.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var na,oa,sa;He.parameters={...He.parameters,docs:{...(na=He.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(sa=(oa=He.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var ia,ra,ca;ke.parameters={...ke.parameters,docs:{...(ia=ke.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ca=(ra=ke.parameters)==null?void 0:ra.docs)==null?void 0:ca.source}}};var la,da,ua;De.parameters={...De.parameters,docs:{...(la=De.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ua=(da=De.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,va,ma;_e.parameters={..._e.parameters,docs:{...(pa=_e.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ma=(va=_e.parameters)==null?void 0:va.docs)==null?void 0:ma.source}}};var ga,ya,fa;je.parameters={...je.parameters,docs:{...(ga=je.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(fa=(ya=je.parameters)==null?void 0:ya.docs)==null?void 0:fa.source}}};var ha,Na,ba;Re.parameters={...Re.parameters,docs:{...(ha=Re.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(ba=(Na=Re.parameters)==null?void 0:Na.docs)==null?void 0:ba.source}}};var xa,Ca,wa;Me.parameters={...Me.parameters,docs:{...(xa=Me.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(wa=(Ca=Me.parameters)==null?void 0:Ca.docs)==null?void 0:wa.source}}};var Ta,Ba,Aa;Fe.parameters={...Fe.parameters,docs:{...(Ta=Fe.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Aa=(Ba=Fe.parameters)==null?void 0:Ba.docs)==null?void 0:Aa.source}}};var Ea,Ia,Sa;qe.parameters={...qe.parameters,docs:{...(Ea=qe.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Sa=(Ia=qe.parameters)==null?void 0:Ia.docs)==null?void 0:Sa.source}}};var Ha,ka,Da;Pe.parameters={...Pe.parameters,docs:{...(Ha=Pe.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Da=(ka=Pe.parameters)==null?void 0:ka.docs)==null?void 0:Da.source}}};var _a,ja,Ra;Oe.parameters={...Oe.parameters,docs:{...(_a=Oe.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...(Ra=(ja=Oe.parameters)==null?void 0:ja.docs)==null?void 0:Ra.source}}};var Ma,Fa,qa;Le.parameters={...Le.parameters,docs:{...(Ma=Le.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(qa=(Fa=Le.parameters)==null?void 0:Fa.docs)==null?void 0:qa.source}}};var Pa,Oa,La;We.parameters={...We.parameters,docs:{...(Pa=We.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(La=(Oa=We.parameters)==null?void 0:Oa.docs)==null?void 0:La.source}}};var Wa,Va,Ka;Ve.parameters={...Ve.parameters,docs:{...(Wa=Ve.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Ka=(Va=Ve.parameters)==null?void 0:Va.docs)==null?void 0:Ka.source}}};var za,Ga,Ua;pe.parameters={...pe.parameters,docs:{...(za=pe.parameters)==null?void 0:za.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Ua=(Ga=pe.parameters)==null?void 0:Ga.docs)==null?void 0:Ua.source}}};var Ya,$a,Xa;Ke.parameters={...Ke.parameters,docs:{...(Ya=Ke.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
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
}`,...(Xa=($a=Ke.parameters)==null?void 0:$a.docs)==null?void 0:Xa.source}}};var Ja,Qa,Za;ze.parameters={...ze.parameters,docs:{...(Ja=ze.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Za=(Qa=ze.parameters)==null?void 0:Qa.docs)==null?void 0:Za.source}}};var en,tn,an;Ge.parameters={...Ge.parameters,docs:{...(en=Ge.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent}>
      {PageContent}
    </SideNav>
}`,...(an=(tn=Ge.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var nn,on,sn;Ue.parameters={...Ue.parameters,docs:{...(nn=Ue.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(sn=(on=Ue.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var rn,cn,ln;Ye.parameters={...Ye.parameters,docs:{...(rn=Ye.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(ln=(cn=Ye.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var dn,un,pn;$e.parameters={...$e.parameters,docs:{...(dn=$e.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand",
    collapsible: false
  },
  render: args => <SideNav {...args}>{PageContent}</SideNav>
}`,...(pn=(un=$e.parameters)==null?void 0:un.docs)==null?void 0:pn.source}}};const ds=["Default","Collapsible","CustomCollapseButtonLabels","ExternalLinkScreenReader","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithLongItemLabel","WithNestedMenus","KeyboardNavigation","CollapseButtonAccessibility","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers","WithCustomHeader","WithCustomFooter","WithCustomHeaderAndFooter","WithoutHeaderOrFooter"];export{Oe as ActiveItemState,Se as CollapseButtonAccessibility,je as CollapsedHeaderTooltipCustom,_e as CollapsedTooltip,Re as CollapsedTooltipWithNested,Ke as CollapsedWithBadges,ue as Collapsible,be as CustomCollapseButtonLabels,v as Default,xe as ExternalLinkScreenReader,We as FooterItemsOnly,Ve as FooterItemsWithNested,He as HeaderClickability,Te as HeaderCompact,ke as HeaderWithLink,Be as HeaderWithLongTitle,De as HeaderWithOnClick,we as HeaderWithVersion,Ie as KeyboardNavigation,Pe as NestedItemActiveOnClick,Me as NestedItemActivePreselected,qe as NestedNavMenuActiveOnClick,Fe as NestedNavMenuActivePreselected,pe as WithBadges,Ue as WithCustomFooter,Ge as WithCustomHeader,Ye as WithCustomHeaderAndFooter,Ce as WithCustomRouter,ze as WithDividers,Le as WithFooterItems,Ae as WithLongItemLabel,Ee as WithNestedMenus,$e as WithoutHeaderOrFooter,ds as __namedExportsOrder,ls as default};
