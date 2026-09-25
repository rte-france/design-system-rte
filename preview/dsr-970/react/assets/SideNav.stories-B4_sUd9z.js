import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{g as rn,B as Dn,s as cn}from"./BaseSideNav-N178nlU9.js";import{T as ln,a as _n}from"./keyboard-test.constants-By8W48aj.js";import{w as F,e as i,a as dn,u as p}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{B as un,N as pn,b as jn,R as Rn,a as ce}from"./chunk-KS7C4IRE-kOmPZtMB.js";import{f as Mn}from"./testing.utils-r13wRTL2.js";import{N as vn}from"./NavigationProvider-DgrdpURC.js";import{D as ue}from"./Divider-BVZUrQ0d.js";import{u as st,a as mn,E as gn}from"./link.constants-kcvANsJQ.js";import{s as qn,I as nt,B as it}from"./Badge-BP1JXoFH.js";import{I as rt}from"./Icon-VewZnR13.js";import{T as Fn}from"./Tooltip-DufHSIr-.js";import{S as $e,E as Xe,c as gt,b as Pn,d as Ln}from"./keyboard.constants-BverKK8B.js";import{u as yn}from"./useActiveKeyboard-DaOmFJe_.js";import"./timepicker.constants-CynrC_9x.js";import{g as On}from"./id.utils-DsO5Uws7.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-Cbl_vQ6W.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const yt={HEADER_CONFIG_AND_CUSTOM:"SideNav: Both headerConfig and a custom header were provided. The custom header takes precedence.",FOOTER_ITEMS_AND_CUSTOM:"SideNav: Both footerItems (or collapsible default footer) and a custom footer were provided. The custom footer takes precedence."},Wn=[{condition:t=>t.hasCustomHeader&&t.hasHeaderConfig,issue:yt.HEADER_CONFIG_AND_CUSTOM},{condition:t=>t.hasCustomFooter&&(t.hasFooterItems||!!t.collapsible),issue:yt.FOOTER_ITEMS_AND_CUSTOM}];function Vn(t){var e;return((e=Wn.find(({condition:a})=>a(t)))==null?void 0:e.issue)??null}function Kn(t,n){return!t&&!!n}function zn(t,n,e){return!t&&!!(n!=null&&n.length||e)}function Gn(t,n){return!!(t||n)}function Un(t,n,e){return!!(t||n!=null&&n.length||e)}function fn(t=!1,n=!1){return t?nt.s:n?nt.l:nt.m}function Je(t){return t?qn({showBadge:!0,badgeContent:t.content??"number",badgeCount:t.count,badgeIcon:t.icon}):!1}function Yn(t){return t.badgeType??"indicator"}const $n="_navItemContainer_cyt4c_1",Xn="_navItemLeft_cyt4c_54",Jn="_navItem_cyt4c_1",Qn="_navItemRight_cyt4c_71",Zn="_srOnly_cyt4c_117",q={navItemContainer:$n,navItemLeft:Xn,navItem:Jn,navItemRight:Qn,srOnly:Zn},eo="_navMenuContainer_n8e33_1",to="_navMenu_n8e33_1",ao="_menuContentLeft_n8e33_43",no="_menuContentRight_n8e33_48",oo="_menuIcon_n8e33_112",so="_nestedMenu_n8e33_127",io="_icon_n8e33_150",ee={navMenuContainer:eo,navMenu:to,menuContentLeft:ao,menuContentRight:no,menuIcon:oo,nestedMenu:so,icon:io};function ct({link:t,externalLink:n,isCollapsed:e,label:a,tabIndex:s,onKeyDown:r,onFocus:u,onBlur:d,onClick:h,children:A,styleType:w="item",ariaExpanded:C,ariaControls:E,role:T}){const _=st(),j=w==="menu"?ee:q,S=w==="menu"?j.navMenu:j.navItem,y=t?e?n?mn(a):a:void 0:a,P={className:S,tabIndex:s,...y!==void 0&&{"aria-label":y},...C!==void 0&&{"aria-expanded":C},...E&&{"aria-controls":E},...T&&{role:T},...u&&{onFocus:u},...d&&{onBlur:d},...h&&{onClick:h},...r&&{onKeyDown:r}};return t?o.jsxs(_,{href:t,to:t,target:n?"_blank":void 0,rel:n?"noopener noreferrer":void 0,...P,children:[A,n&&!e&&o.jsxs("span",{className:q.srOnly,children:[", ",gn]})]}):o.jsx("span",{...P,children:A})}ct.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},externalLink:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},ariaExpanded:{required:!1,tsType:{name:"boolean"},description:""},ariaControls:{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"literal",value:'"button"'},description:""}}};function lt({icon:t,hasLeadingIcon:n=!0,label:e,isCollapsed:a,isNested:s,styleType:r="item",badge:u}){const d=fn(s,a),h=r==="menu"?ee:q;function A(){if(!n||!t)return null;const w=o.jsx(rt,{name:t,className:h.icon,size:d});return a&&u&&Je(u)?o.jsx(it,{badgeType:Yn(u),size:"xs",content:"empty",children:w}):w}return o.jsxs(o.Fragment,{children:[A(),a?null:o.jsx("span",{children:e})]})}lt.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function pe({label:t,isCollapsed:n,children:e}){return n&&t?o.jsx(Fn,{label:t,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}pe.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function hn(t){return t===!1?-1:0}function Nn({onEnterOrSpace:t,onEscape:n,includeArrowKeys:e=!1,includeEscape:a=!1}={}){const s=g.useCallback(d=>{[$e,Xe].includes(d.key)&&(d.preventDefault(),t==null||t()),d.key===gt&&a&&(d.preventDefault(),n==null||n())},[t,n,a]),r=[$e,Xe,...a?[gt]:[],...e?[Pn,Ln]:[]],{onKeyDown:u}=yn({onKeyDown:s},{interactiveKeyCodes:r});return{onKeyDown:u}}const dt=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:s,isCollapsed:r,link:u,href:d,externalLink:h,isNested:A,parentMenuOpen:w,appearance:C="brand",active:E,badge:T,onActiveItemChange:_,...j},S)=>{const y=st(),P=g.useRef(null),$=g.useRef(null),W=!!(d||u),{onKeyDown:V}=Nn({onEnterOrSpace:a});function ae(){var k,K;(k=P.current)==null||k.setAttribute("data-focused","true"),(K=$.current)==null||K.setAttribute("data-focused","true")}function X(){var k,K;(k=P.current)==null||k.removeAttribute("data-focused"),(K=$.current)==null||K.removeAttribute("data-focused")}const J=hn(w),ne=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:q.navItemLeft,children:o.jsx(lt,{icon:n,hasLeadingIcon:e,label:s,isCollapsed:r,isNested:A,styleType:"item",badge:T})}),o.jsx("div",{className:q.navItemRight,children:!r&&T&&Je(T)&&o.jsx(it,{badgeType:T.badgeType,size:T.size,content:T.content,count:T.count})})]}),Q=r&&h?mn(s):r?s:void 0,L=W?o.jsxs(y,{id:t,"aria-label":Q,className:q.navItemContainer,"data-collapsed":r,"data-appearance":C,"data-nested":A,"data-active":E,href:d??u,to:d??u,target:h?"_blank":void 0,rel:h?"noopener noreferrer":void 0,onClick:()=>_==null?void 0:_(t),onBlur:X,ref:$,children:[ne,h&&!r&&o.jsxs("span",{className:q.srOnly,children:[", ",gn]})]}):o.jsx("div",{id:t,className:q.navItemContainer,"data-collapsed":r,"data-appearance":C,"data-nested":A,"data-active":E,onClick:a,ref:k=>{P.current=k,typeof S=="function"?S(k):S&&"current"in S&&(S.current=k)},...j,children:o.jsx(ct,{label:s,tabIndex:J,onKeyDown:V,onFocus:ae,onBlur:X,styleType:"item",children:ne})});return o.jsx(pe,{label:s,isCollapsed:r,children:L})});dt.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const ut=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:s,isCollapsed:r,link:u,href:d,externalLink:h,items:A=[],open:w,onOpenChange:C,hasMenuIcon:E=!0,isNested:T,parentMenuOpen:_,appearance:j="brand",contrast:S="high",badge:y,hasDivider:P,active:$,onMenuOpenChange:W,getMenuOpen:V,...ae},X)=>{const J=rn(j,S),[ne,Q]=g.useState(!1),L=w??ne,k=w!==void 0,K=g.useRef(On()),ve=`nav-menu-content-${t??K.current}`;function me(){const c=!L,at=t||s;if(a&&a(),at&&W){W(at,c);return}k?C==null||C(c):Q(c)}function et(){if(!L)return;const c=t||s;if(c&&W){W(c,!1);return}k?C==null||C(!1):Q(!1)}const{onKeyDown:tt}=Nn({onEnterOrSpace:me,onEscape:et,includeArrowKeys:!0,includeEscape:!0}),ge=A.length,Z=!r&&ge,ye=L,b=hn(_),l=Z&&E?o.jsx(rt,{name:"arrow-chevron-right",className:ee.menuIcon,"data-open":L}):null,fe=!r&&(Je(y)||!!l),he=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:ee.menuContentLeft,children:o.jsx(lt,{icon:n,hasLeadingIcon:e,label:s,isCollapsed:r,isNested:T,styleType:"menu",badge:y})}),fe&&o.jsxs("div",{className:ee.menuContentRight,children:[y&&Je(y)&&o.jsx(it,{badgeType:y.badgeType,size:y.size,content:y.content,count:y.count}),l]})]}),Hn=o.jsxs("li",{id:t,className:ee.navMenuContainer,"data-collapsed":r,"data-appearance":j,"data-nested":T,"data-open":L,"data-active":$,ref:X,...ae,children:[o.jsx(ct,{link:d??u,externalLink:h,isCollapsed:r,label:s,tabIndex:b,onClick:me,onKeyDown:tt,styleType:"menu",ariaExpanded:Z?L:void 0,ariaControls:Z?ve:void 0,role:Z&&!u?"button":void 0,children:he}),Z&&o.jsx("ul",{id:ve,className:ee.nestedMenu,"data-open":L,children:A.map(c=>{var mt;return(mt=c.items)!=null&&mt.length?o.jsx(ut,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:r,link:c.href??c.link,href:c.href,externalLink:c.externalLink,onClick:c.onClick,items:c.items||[],open:V?V(c):c.open,onOpenChange:c.onOpenChange,onMenuOpenChange:W,getMenuOpen:V,active:c.active,hasMenuIcon:E,hasDivider:c.hasDivider,isNested:!0,parentMenuOpen:ye,appearance:j,contrast:S,badge:c.badge},c.id||c.label):o.jsxs(g.Fragment,{children:[o.jsx("li",{children:o.jsx(dt,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:r,href:c.href,link:c.href??c.link,externalLink:c.externalLink,onClick:c.onClick,isNested:!0,parentMenuOpen:ye,appearance:j,active:c.active,badge:c.badge})}),c.hasDivider&&o.jsx(ue,{appearance:J})]},c.id||c.label)})})]}),kn=o.jsx(pe,{label:s,isCollapsed:r,children:Hn});return o.jsxs(o.Fragment,{children:[kn,P&&o.jsx(ue,{appearance:J})]})});ut.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const ro="_sideNavHeaderContainer_y5fd7_1",co="_sideNavHeader_y5fd7_1",lo="_sideNavHeaderTitleContainer_y5fd7_43",uo="_sideNavHeaderTitle_y5fd7_43",po="_sideNavHeaderIdentifier_y5fd7_52",vo="_sideNavHeaderVersion_y5fd7_129",mo="_sideNavBody_y5fd7_165",go="_sideNavFooterContainer_y5fd7_189",yo="_sideNavFooter_y5fd7_189",fo="_sideNavFooterItems_y5fd7_202",ho="_collapsibleSection_y5fd7_219",No="_collapseButton_y5fd7_234",D={sideNavHeaderContainer:ro,sideNavHeader:co,sideNavHeaderTitleContainer:lo,sideNavHeaderTitle:uo,sideNavHeaderIdentifier:po,sideNavHeaderVersion:vo,sideNavBody:mo,sideNavFooterContainer:go,sideNavFooter:yo,sideNavFooterItems:fo,collapsibleSection:ho,collapseButton:No};function bn({footerItemsContent:t,collapsible:n,isCollapsed:e,appearance:a,dividerAppearance:s,collapseIcon:r,onCollapse:u}){const d=e?"Ouvrir le menu":"Réduire le menu",h=fn(!1,e);return o.jsxs("div",{className:D.sideNavFooterContainer,children:[t&&o.jsx("div",{className:D.sideNavFooterItems,children:t}),o.jsx(ue,{appearance:s}),o.jsx("div",{className:D.sideNavFooter,children:n&&o.jsx("div",{className:D.collapsibleSection,children:o.jsx(pe,{label:d,isCollapsed:e,children:o.jsx("button",{type:"button",id:"collapse-button",className:`${q.navItemContainer} ${D.collapseButton}`,"data-collapsed":e,"data-appearance":a,"aria-label":e?d:void 0,onClick:u,children:o.jsx("span",{className:q.navItem,children:o.jsxs("div",{className:q.navItemLeft,children:[o.jsx(rt,{name:r,className:q.icon,size:h}),!e&&o.jsx("span",{children:d})]})})})})})})]})}bn.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultFooter",props:{footerItemsContent:{required:!0,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},collapseIcon:{required:!0,tsType:{name:"string"},description:""},onCollapse:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function pt({isCollapsed:t,appearance:n,dividerAppearance:e,isCompact:a=!1,children:s}){return o.jsxs("div",{className:D.sideNavHeaderContainer,"data-compact":a,"data-collapsed":t,children:[o.jsx("div",{className:D.sideNavHeader,"data-collapsed":t,"data-appearance":n,"data-compact":a,children:s}),o.jsx(ue,{appearance:e})]})}pt.__docgenInfo={description:"",methods:[],displayName:"SideNavHeaderContainer",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function xn({headerConfig:t,isCollapsed:n,shouldShowTitle:e,appearance:a,dividerAppearance:s}){const r=st(),u=S=>{var y;[$e,Xe].includes(S.key)&&(S.preventDefault(),(y=t.onClick)==null||y.call(t))},{onKeyDown:d}=yn({onKeyDown:u},{interactiveKeyCodes:[$e,Xe]}),h=o.jsxs("div",{className:D.sideNavHeaderTitle,children:[o.jsx("div",{className:D.sideNavHeaderIdentifier,children:t.identifier}),!n&&o.jsx("h1",{children:t.title})]}),A=t.ariaLabel,w=o.jsx(r,{href:t.link??"",className:D.sideNavHeaderTitleContainer,onClick:t.onClick,"aria-label":A,children:h}),C=o.jsx("div",{className:D.sideNavHeaderTitleContainer,tabIndex:0,onClick:t.onClick,onKeyDown:d,role:"button","aria-label":A,children:h}),E=o.jsx("div",{className:D.sideNavHeaderTitleContainer,children:h});function T(){return t.link?w:t.onClick?C:E}const _=g.useMemo(()=>t.tooltip??t.title??"",[t.tooltip,t.title]),j=o.jsx(pe,{label:_,isCollapsed:n,children:T()});return o.jsxs(pt,{isCollapsed:n,isCompact:!!t.isCompact,appearance:a,dividerAppearance:s,children:[j,!t.isCompact&&o.jsx("div",{className:D.sideNavHeaderVersion,"data-hidden":!e,children:o.jsx("span",{children:t.version})})]})}xn.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultHeader",props:{headerConfig:{required:!0,tsType:{name:"SideNavHeaderConfig"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},shouldShowTitle:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""}}};const bo=300,G=g.forwardRef(({size:t="m",collapsible:n,children:e,header:a,footer:s,headerConfig:r,items:u,footerItems:d,isCollapsed:h,defaultCollapsed:A=!1,onCollapsedChange:w,onActiveItemChange:C,appearance:E="brand",contrast:T="high",activeItem:_,"aria-label":j},S)=>{const[y,P]=g.useState(h??A),[$,W]=g.useState(!0),[V,ae]=g.useState({}),[X,J]=g.useState(_),ne=g.useCallback((b,l)=>{ae(fe=>({...fe,[b]:l}))},[]),Q=g.useCallback(b=>{const l=b.id??b.label;return l&&l in V?V[l]:b.open},[V]),L=g.useCallback(b=>{J(b),C==null||C(b)},[C]);g.useEffect(()=>{J(_)},[_]),g.useEffect(()=>{ae({})},[u]),g.useEffect(()=>{h!==void 0&&P(h)},[h]),g.useEffect(()=>{if(y)W(!1);else{const b=setTimeout(()=>{W(!0)},bo);return()=>clearTimeout(b)}},[y]);const k=()=>{const b=!y;h===void 0&&P(b),w==null||w(b)},K=y?"arrow-double-right":"arrow-double-left",re=rn(E,T),ve=Kn(a,r),me=zn(s,d,n),et=Gn(a,r),tt=Un(s,d,n);g.useEffect(()=>{const b=Vn({hasCustomHeader:!!a,hasHeaderConfig:!!r,hasCustomFooter:!!s,hasFooterItems:!!(d!=null&&d.length),collapsible:n});b&&console.warn(b)},[a,r,s,d,n]);function ge(b){return b!=null&&b.length?o.jsx("ul",{children:b.map(l=>{var he;return((he=l.items)==null?void 0:he.length)?o.jsx(ut,{id:l.id,badge:l.badge,label:l.label,icon:l.icon,hasLeadingIcon:l.hasLeadingIcon,isCollapsed:y,link:l.href??l.link,href:l.href,externalLink:l.externalLink,onClick:l.onClick,items:l.items||[],open:Q(l),onMenuOpenChange:ne,getMenuOpen:Q,active:l.active,appearance:E,contrast:T,hasDivider:l.hasDivider},l.id):o.jsxs(g.Fragment,{children:[o.jsx("li",{children:o.jsx(dt,{id:l.id,badge:l.badge,label:l.label,icon:l.icon,hasLeadingIcon:l.hasLeadingIcon,isCollapsed:y,href:l.href,link:l.href??l.link,externalLink:l.externalLink,onClick:l.onClick,appearance:E,active:l.active??(l.id===X&&!!X),onActiveItemChange:L})}),l.hasDivider&&o.jsx(ue,{appearance:re})]},l.id)})}):null}function Z(){return et?ve&&r?o.jsx(xn,{headerConfig:r,isCollapsed:y,shouldShowTitle:$,appearance:E,dividerAppearance:re}):o.jsx(pt,{isCollapsed:y,appearance:E,dividerAppearance:re,children:a}):null}function ye(){return tt?me?o.jsx(bn,{footerItemsContent:ge(d),collapsible:n,isCollapsed:y,appearance:E,dividerAppearance:re,collapseIcon:K,onCollapse:k}):s??null:null}return o.jsx(Dn,{ref:S,size:t,isCollapsed:y,appearance:E,contrast:T,"aria-label":j,header:Z(),body:o.jsx("div",{className:D.sideNavBody,children:ge(u)}),footer:ye(),children:e})});G.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function wn(t,n){return t.some(e=>{var a;return e.id===n?!0:(a=e.items)!=null&&a.length?wn(e.items,n):!1})}function xo(t,n){if(!t.id||!n)return t.onClick;const e=()=>{n(t.id)};return t.onClick?()=>{e(),t.onClick()}:e}function Cn(t,n,e){return t.map(a=>{var w;const s=(w=a.items)!=null&&w.length?Cn(a.items,n,e):void 0,r=!!(s!=null&&s.length),u=!r&&a.id===n,d=r&&a.id===n,h=a,A=r&&(a.id===n||wn(a.items,n));return{...a,active:u||d,open:A?!0:h.open,items:s,onClick:xo(a,e)}})}function Qe(){return function(n,e){const[a,s]=g.useState(e.args.isCollapsed??!0);return o.jsx("div",{children:o.jsx(n,{args:{...e.args,isCollapsed:a,onCollapsedChange:s}})})}}function wo(t){return function(e,a){const[s,r]=g.useState(a.args.activeItem),u=t.map(d=>({...d,onClick:()=>r(d.id),link:void 0}));return o.jsx("div",{children:o.jsx(e,{args:{...a.args,items:u,activeItem:s}})})}}function Tn(t,n){return function(a,s){const[r,u]=g.useState(n),d=g.useMemo(()=>Cn(t,r,u),[r,t]);return o.jsx(a,{args:{...s.args,items:d}})}}function An(t){if(!t)return null;const n=Array.from(t.children);for(const r of n)if(r.tagName==="A"||r.tagName==="SPAN"&&r.hasAttribute("tabindex"))return r;const e=t.querySelector("a");return e||Array.from(t.querySelectorAll("span")).find(r=>r.hasAttribute("tabindex"))}function m(t,n,e){const a=e?t.querySelector(e):t;if(!a)return null;const s=e?F(a):F(t),r=s.queryByRole("link",{name:n});if(r)return r;const u=s.queryByText(n);if(u){const d=u.closest("li");return An(d)}return null}function de(t,n){const e=t.querySelector('[class*="sideNavBody"]');if(!e)return null;const s=Array.from(e.querySelectorAll("li"))[n];return An(s)}function oe(t,n){return m(t,n,'[class*="sideNavFooterItems"]')}function te(t,n="MA"){var r;return(r=F(t).getByText(n).parentElement)==null?void 0:r.parentElement}function Co(t,n){return t.querySelector(`#${n}`)}function ot(t){return t.querySelector("#collapse-button")}function To(t){return t.dataset.active==="true"}function H(t){i(t).not.toBeNull(),i(t).toHaveFocus()}function R(t,n){const e=m(t,n);e&&i(e).not.toHaveFocus()}function M(t,n){const e=m(t,n);e&&i(e).toHaveAttribute("tabindex","-1")}async function U(t,n){await dn(()=>{const e=m(t,n);i(e).not.toBeNull(),i(e).toHaveAttribute("tabindex","0")})}async function En(t,n,e){await dn(()=>{const a=t.getByRole("navigation"),s=Co(a,n);if(!s){i(e).toBe(!1);return}i(To(s)).toBe(e)})}function z(t,n){return En(t,n,!0)}function f(t,n){return En(t,n,!1)}function I(t){const n=F(t),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function se(t=200){return new Promise(n=>setTimeout(n,t))}const ss={title:"Composants/SideNav/SideNav",id:"SideNav",component:G,tags:["autodocs"],decorators:[t=>o.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:o.jsx(t,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:t=>o.jsx(G,{size:t.size,collapsible:t.collapsible,headerConfig:t.headerConfig,appearance:t.appearance,contrast:t.contrast,items:t.items,footerItems:t.footerItems,isCollapsed:t.isCollapsed,activeItem:t.activeItem,onCollapsedChange:t.onCollapsedChange,children:ie})},ie=o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),B={hasLeadingIcon:!0},Y={size:"m",content:"number"},N=[{...B,id:"home",label:"Home",icon:"home"},{...B,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...B,id:"analytics",label:"Analytics",icon:"analytics"},{...B,id:"settings",label:"Settings",icon:"settings"},{...B,id:"profile",label:"Profile",icon:"user",link:"/profile"}],Ao=[{...B,id:"home",label:"Home",icon:"home",href:"/"},{...B,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...B,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...B,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...B,id:"profile",label:"Profile",icon:"user",href:"/profile"}],Eo=[{...B,id:"home",label:"Home",icon:"home",href:"/"},{...B,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...B,id:"docs",label:"Angular docs",icon:"link",href:"https://angular.dev",externalLink:!0}],O=N,Bn=[N[0],{...N[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...N[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},N[4]],Bo=[N[0],{...N[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},N[4]],Io=[N[0],{...N[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...N[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},N[4]],Ze=[N[0],{...N[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...N[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},N[4]],So=[{...N[0],badge:{...Y,badgeType:"indicator",count:5}},{...N[1],badge:{...Y,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...Y,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...Y,badgeType:"indicator",count:12}}]},{...N[3],items:[{label:"General"},{label:"Privacy",badge:{...Y,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...Y,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...Y,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...N[4],badge:{...Y,badgeType:"brand",count:8}}],vt=[{...B,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...B,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...B,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],x={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},Ho="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",ko={...x},Do={...x,onClick:()=>{console.log("Header clicked")}},v={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:O}},Ne={args:{...v.args,collapsible:!0}},be={args:{...v.args,collapsible:!0,items:Eo},parameters:{docs:{description:{story:"Manual accessibility check (NVDA / VoiceOver): focus **Angular docs** in the side navigation. The link should announce its name followed by « ouvre dans un nouvel onglet » and open in a new tab."}}},render:t=>o.jsx(un,{children:o.jsx(vn,{linkComponent:pn,children:o.jsx(G,{...t,children:ie})})})},xe={args:{...v.args,items:Ao},render:t=>{const n=()=>{const e=jn();return g.useEffect(()=>{e("/")},[]),o.jsx(G,{...t,activeItem:"home",onActiveItemChange:a=>console.log("Active item changed to:",a),children:o.jsx("div",{style:{padding:"2rem"},children:o.jsxs(Rn,{children:[o.jsx(ce,{path:"/",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),o.jsx(ce,{path:"/dashboard",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),o.jsx(ce,{path:"/analytics",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),o.jsx(ce,{path:"/settings",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),o.jsx(ce,{path:"/profile",element:o.jsxs("div",{children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return o.jsx(un,{children:o.jsx(vn,{linkComponent:pn,children:o.jsx(n,{})})})}},we={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:x}},Ce={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:{...x,isCompact:!0}}},Te={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:{...x,title:Ho},size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{i(e.offsetWidth).toBe(cn.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const a=e.querySelector("h1");i(a).not.toBeNull(),i(getComputedStyle(a).textOverflow).toBe("ellipsis"),i(a.scrollWidth).toBeGreaterThan(a.clientWidth)})}},ft="Supervision des processus et des opérations en temps réel",Ae={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:x,items:[{...B,id:"supervision",label:ft,icon:"dashboard"},...O.slice(1)],size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Side nav keeps the fixed M panel width with a long item label",async()=>{i(e.offsetWidth).toBe(cn.m)}),await n("Nav item label is truncated with an ellipsis",async()=>{const a=m(e,ft);i(a).not.toBeNull();const s=a==null?void 0:a.querySelector('[class*="navItemLeft"] span:last-child');i(s).not.toBeNull(),i(getComputedStyle(s).textOverflow).toBe("ellipsis"),i(s.scrollWidth).toBeGreaterThan(s.clientWidth)})}},Ee={args:{...v.args,headerConfig:x,items:Ze,collapsible:!0}},Be={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:x,items:Ze,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Navigate through navigation when all menus are closed",async()=>{M(e,"Overview"),M(e,"Reports"),M(e,"Analytics"),M(e,"General"),M(e,"Privacy"),M(e,"Advanced");const a=m(e,"Home");a==null||a.focus(),H(a),await p.tab();const s=m(e,"Dashboard");H(s),i(s).toHaveAttribute("role","button"),i(s).toHaveAttribute("aria-expanded","false"),i(s==null?void 0:s.getAttribute("aria-controls")).toBeTruthy(),R(e,"Overview"),R(e,"Reports"),R(e,"Analytics"),await p.tab();const r=m(e,"Settings");H(r),i(r).toHaveAttribute("role","button"),i(r).toHaveAttribute("aria-expanded","false"),R(e,"General"),R(e,"Privacy"),R(e,"Advanced"),await p.tab();const u=m(e,"Profile");H(u)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const a=m(e,"Dashboard");await p.click(a),i(a).toHaveAttribute("aria-expanded","true"),i(document.getElementById(a.getAttribute("aria-controls"))).not.toBeNull(),U(e,"Overview"),U(e,"Reports"),U(e,"Analytics"),await p.tab();const s=m(e,"Overview");H(s),await p.tab();const r=m(e,"Reports");H(r),await p.tab();const u=m(e,"Analytics");H(u)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const a=m(e,"Dashboard");await p.click(a),i(a).toHaveAttribute("aria-expanded","false"),M(e,"Overview"),M(e,"Reports"),M(e,"Analytics"),await p.tab();const s=m(e,"Settings");H(s),R(e,"Overview"),R(e,"Reports"),R(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const a=m(e,"Settings");await p.click(a),await U(e,"General"),await U(e,"Privacy"),await U(e,"Advanced"),M(e,"Security"),M(e,"API Keys"),await p.tab();const s=m(e,"General");H(s),await p.tab();const r=m(e,"Privacy");H(r),await p.tab();const u=m(e,"Advanced");H(u),R(e,"Security"),R(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const a=m(e,"Advanced");await p.click(a),U(e,"Security"),U(e,"API Keys"),await p.tab();const s=m(e,"Security");H(s),await p.tab();const r=m(e,"API Keys");H(r)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const a=m(e,"Advanced");await p.click(a),M(e,"Security"),M(e,"API Keys"),await p.tab();const s=m(e,"Profile");H(s),R(e,"Security"),R(e,"API Keys")})}},Ie={tags:["!autodocs"],args:{...v.args,headerConfig:x,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify collapse control is a native button with a single accessible name",async()=>{const a=ot(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("BUTTON"),i(a).toHaveAttribute("type","button"),i(a).toHaveTextContent("Réduire le menu"),i(a).not.toHaveAttribute("aria-label"),i(F(e).getByRole("button",{name:"Réduire le menu"})).toBe(a)}),await n("Verify collapse button can be focused and activated with keyboard",async()=>{const a=ot(e);a==null||a.focus(),H(a),await p.keyboard(ln);const s=ot(e);i(s).toHaveAttribute("aria-label","Ouvrir le menu"),i(s).not.toHaveTextContent("Réduire le menu"),i(F(e).getByRole("button",{name:"Ouvrir le menu"})).toBe(s)})}},Se={tags:["!autodocs"],args:{...v.args,headerConfig:{...x,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const a=te(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("DIV"),i(a).not.toHaveAttribute("href"),i(a).not.toHaveAttribute("role","button"),i(a).not.toHaveAttribute("tabindex")})}},He={tags:["!autodocs"],args:{...v.args,headerConfig:ko,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is a link when link prop is provided",async()=>{const a=te(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("A"),i(a).toHaveAttribute("href","/"),i(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const a=te(e);a==null||a.focus(),i(a).toHaveFocus()})}},ke={tags:["!autodocs"],args:{...v.args,headerConfig:{...Do,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is clickable button when onClick is provided",async()=>{const a=te(e);i(a).not.toBeNull(),i(a==null?void 0:a.tagName).toBe("DIV"),await p.click(a),i(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const a=te(e);a==null||a.focus(),i(a).toHaveFocus(),await p.keyboard(ln),await p.keyboard(_n)})}},De={tags:["!autodocs"],args:{...v.args,headerConfig:x,items:O,collapsible:!0,isCollapsed:!0},decorators:[Qe()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header tooltip falls back to title when collapsed",async()=>{const a=te(e);i(a).not.toBeNull(),a==null||a.focus(),await se();const s=F(document.body).queryByRole("tooltip",{name:"My Application"});i(s).not.toBeNull(),i(s).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const a=de(e,0);i(a).not.toBeNull(),a==null||a.focus(),await se();const s=F(document.body).queryByRole("tooltip",{name:"Home"});i(s).not.toBeNull(),i(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await p.tab(),await se();const a=F(document.body).queryByRole("tooltip",{name:"Dashboard"});i(a).not.toBeNull(),i(a).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await p.tab(),await p.tab(),await p.tab(),await se();const a=F(document.body).queryByRole("tooltip",{name:"Profile"});i(a).not.toBeNull(),i(a).toHaveTextContent("Profile")})}},_e={tags:["!autodocs"],args:{...v.args,headerConfig:{...x,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Qe()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const a=te(e);i(a).not.toBeNull(),a==null||a.focus(),await se();const s=F(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});i(s).not.toBeNull(),i(s).toHaveTextContent("Custom header tooltip")})}},je={tags:["!autodocs"],args:{...v.args,headerConfig:x,items:Ze,collapsible:!0,isCollapsed:!0},decorators:[Qe()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify tooltips appear when tabbing to menu items",async()=>{Mn();const a=de(e,1);i(a).not.toBeNull(),await p.tab(),await p.tab(),await p.tab(),await se();const s=F(document.body).queryByRole("tooltip",{name:"Dashboard"});i(s).not.toBeNull(),i(s).toHaveTextContent("Dashboard")})}},Re={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:x,items:Io,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Overview nested item is active",async()=>{z(e,"overview"),f(e,"reports")})}},Me={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:x,items:Bo,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{z(e,"security"),f(e,"advanced"),f(e,"settings"),f(e,"api-keys")})}},qe={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:x,collapsible:!0},decorators:[Tn(Bn,"security")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify only Security is active, not parent NavMenus",async()=>{z(e,"security"),f(e,"advanced"),f(e,"settings"),f(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const a=e.getByRole("navigation"),s=m(a,"API Keys");i(s).not.toBeNull(),await p.click(s),f(e,"security"),z(e,"api-keys"),f(e,"advanced"),f(e,"settings")})}},Fe={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:x,collapsible:!0},decorators:[Tn(Bn,"overview")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Overview leaf is active initially",async()=>{z(e,"overview"),f(e,"reports"),f(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const a=e.getByRole("navigation"),s=m(a,"Reports");i(s).not.toBeNull(),await p.click(s),f(e,"overview"),z(e,"reports"),f(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const a=e.getByRole("navigation"),s=m(a,"Settings");i(s).not.toBeNull(),await p.click(s);const r=m(a,"Advanced");i(r).not.toBeNull(),await p.click(r),f(e,"overview"),f(e,"reports"),f(e,"security"),f(e,"api-keys"),z(e,"advanced")})}},Pe={tags:["!autodocs"],args:{...v.args,headerConfig:x,items:O,activeItem:"home",collapsible:!0},decorators:[wo(O)],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Home has active class initially",async()=>{z(e,"home"),f(e,"dashboard"),f(e,"analytics"),f(e,"settings"),f(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const a=e.getByRole("navigation"),s=m(a,"Dashboard");i(s).not.toBeNull(),await p.click(s),f(e,"home"),z(e,"dashboard"),f(e,"analytics"),f(e,"settings"),f(e,"profile")})}},Le={args:{...v.args,headerConfig:x,items:O,footerItems:vt,collapsible:!0}},Oe={tags:["!autodocs"],args:{...v.args,headerConfig:x,items:O,footerItems:vt,collapsible:!1}},We={tags:["!autodocs"],args:{...v.args,headerConfig:x,items:Ze,footerItems:vt,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify footer items are rendered",async()=>{const a=oe(e,"Settings");i(a).not.toBeNull();const s=oe(e,"Help & Support");i(s).not.toBeNull();const r=oe(e,"Account");i(r).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const a=oe(e,"Account");await p.click(a);const s=oe(e,"Preferences");i(s).not.toBeNull();const r=oe(e,"Logout");i(r).not.toBeNull()})}},le={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:x,items:So,collapsible:!0}},Ve={tags:["!autodocs"],args:{...le.args,isCollapsed:!0},decorators:[Qe()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var r;const a=de(e,0);i(a).not.toBeNull();const s=a==null?void 0:a.querySelector('[data-size="xs"]');i(s).not.toBeNull(),i(s).toHaveAttribute("data-badge-type","indicator"),i((r=s==null?void 0:s.textContent)==null?void 0:r.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const a=de(e,0);i(a==null?void 0:a.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var r;const a=de(e,1);i(a).not.toBeNull();const s=a==null?void 0:a.querySelector('[data-size="xs"]');i(s).not.toBeNull(),i(s).toHaveAttribute("data-badge-type","indicator"),i((r=s==null?void 0:s.textContent)==null?void 0:r.trim()).toBe("")})}},_o=[N[0],{...N[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...N[2],hasDivider:!0},{...B,id:"reports",label:"Reports",icon:"info"},{...N[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},N[4]],Ke={tags:["!autodocs"],args:{...v.args,headerConfig:x,items:_o,collapsible:!0}},In=o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0 1rem",color:"white",fontWeight:600},children:[o.jsx("span",{style:{fontSize:"1.25rem"},children:"⬡"}),o.jsx("span",{children:"My App"})]}),Sn=o.jsx("div",{style:{padding:"1rem",color:"white",fontSize:"0.875rem"},children:"Custom footer content"}),ze={args:{items:O,appearance:"brand"},render:t=>o.jsx(G,{...t,header:In,children:ie})},Ge={args:{items:O,appearance:"brand"},render:t=>o.jsx(G,{...t,footer:Sn,children:ie})},Ue={args:{items:O,appearance:"brand"},render:t=>o.jsx(G,{...t,header:In,footer:Sn,children:ie})},Ye={args:{items:O,appearance:"brand",collapsible:!1},render:t=>o.jsx(G,{...t,children:ie})};var ht,Nt,bt;v.parameters={...v.parameters,docs:{...(ht=v.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(bt=(Nt=v.parameters)==null?void 0:Nt.docs)==null?void 0:bt.source}}};var xt,wt,Ct;Ne.parameters={...Ne.parameters,docs:{...(xt=Ne.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Ct=(wt=Ne.parameters)==null?void 0:wt.docs)==null?void 0:Ct.source}}};var Tt,At,Et;be.parameters={...be.parameters,docs:{...(Tt=be.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Et=(At=be.parameters)==null?void 0:At.docs)==null?void 0:Et.source}}};var Bt,It,St;xe.parameters={...xe.parameters,docs:{...(Bt=xe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(St=(It=xe.parameters)==null?void 0:It.docs)==null?void 0:St.source}}};var Ht,kt,Dt;we.parameters={...we.parameters,docs:{...(Ht=we.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Dt=(kt=we.parameters)==null?void 0:kt.docs)==null?void 0:Dt.source}}};var _t,jt,Rt;Ce.parameters={...Ce.parameters,docs:{...(_t=Ce.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(Rt=(jt=Ce.parameters)==null?void 0:jt.docs)==null?void 0:Rt.source}}};var Mt,qt,Ft;Te.parameters={...Te.parameters,docs:{...(Mt=Te.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ft=(qt=Te.parameters)==null?void 0:qt.docs)==null?void 0:Ft.source}}};var Pt,Lt,Ot;Ae.parameters={...Ae.parameters,docs:{...(Pt=Ae.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Ot=(Lt=Ae.parameters)==null?void 0:Lt.docs)==null?void 0:Ot.source}}};var Wt,Vt,Kt;Ee.parameters={...Ee.parameters,docs:{...(Wt=Ee.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Kt=(Vt=Ee.parameters)==null?void 0:Vt.docs)==null?void 0:Kt.source}}};var zt,Gt,Ut;Be.parameters={...Be.parameters,docs:{...(zt=Be.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ut=(Gt=Be.parameters)==null?void 0:Gt.docs)==null?void 0:Ut.source}}};var Yt,$t,Xt;Ie.parameters={...Ie.parameters,docs:{...(Yt=Ie.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Xt=($t=Ie.parameters)==null?void 0:$t.docs)==null?void 0:Xt.source}}};var Jt,Qt,Zt;Se.parameters={...Se.parameters,docs:{...(Jt=Se.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Zt=(Qt=Se.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};var ea,ta,aa;He.parameters={...He.parameters,docs:{...(ea=He.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(aa=(ta=He.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var na,oa,sa;ke.parameters={...ke.parameters,docs:{...(na=ke.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(sa=(oa=ke.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var ia,ra,ca;De.parameters={...De.parameters,docs:{...(ia=De.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ca=(ra=De.parameters)==null?void 0:ra.docs)==null?void 0:ca.source}}};var la,da,ua;_e.parameters={..._e.parameters,docs:{...(la=_e.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ua=(da=_e.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,va,ma;je.parameters={...je.parameters,docs:{...(pa=je.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ma=(va=je.parameters)==null?void 0:va.docs)==null?void 0:ma.source}}};var ga,ya,fa;Re.parameters={...Re.parameters,docs:{...(ga=Re.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(fa=(ya=Re.parameters)==null?void 0:ya.docs)==null?void 0:fa.source}}};var ha,Na,ba;Me.parameters={...Me.parameters,docs:{...(ha=Me.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(ba=(Na=Me.parameters)==null?void 0:Na.docs)==null?void 0:ba.source}}};var xa,wa,Ca;qe.parameters={...qe.parameters,docs:{...(xa=qe.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(Ca=(wa=qe.parameters)==null?void 0:wa.docs)==null?void 0:Ca.source}}};var Ta,Aa,Ea;Fe.parameters={...Fe.parameters,docs:{...(Ta=Fe.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Ea=(Aa=Fe.parameters)==null?void 0:Aa.docs)==null?void 0:Ea.source}}};var Ba,Ia,Sa;Pe.parameters={...Pe.parameters,docs:{...(Ba=Pe.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(Sa=(Ia=Pe.parameters)==null?void 0:Ia.docs)==null?void 0:Sa.source}}};var Ha,ka,Da;Le.parameters={...Le.parameters,docs:{...(Ha=Le.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Da=(ka=Le.parameters)==null?void 0:ka.docs)==null?void 0:Da.source}}};var _a,ja,Ra;Oe.parameters={...Oe.parameters,docs:{...(_a=Oe.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Ra=(ja=Oe.parameters)==null?void 0:ja.docs)==null?void 0:Ra.source}}};var Ma,qa,Fa;We.parameters={...We.parameters,docs:{...(Ma=We.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
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
}`,...(Fa=(qa=We.parameters)==null?void 0:qa.docs)==null?void 0:Fa.source}}};var Pa,La,Oa;le.parameters={...le.parameters,docs:{...(Pa=le.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Oa=(La=le.parameters)==null?void 0:La.docs)==null?void 0:Oa.source}}};var Wa,Va,Ka;Ve.parameters={...Ve.parameters,docs:{...(Wa=Ve.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Ka=(Va=Ve.parameters)==null?void 0:Va.docs)==null?void 0:Ka.source}}};var za,Ga,Ua;Ke.parameters={...Ke.parameters,docs:{...(za=Ke.parameters)==null?void 0:za.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Ua=(Ga=Ke.parameters)==null?void 0:Ga.docs)==null?void 0:Ua.source}}};var Ya,$a,Xa;ze.parameters={...ze.parameters,docs:{...(Ya=ze.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent}>
      {PageContent}
    </SideNav>
}`,...(Xa=($a=ze.parameters)==null?void 0:$a.docs)==null?void 0:Xa.source}}};var Ja,Qa,Za;Ge.parameters={...Ge.parameters,docs:{...(Ja=Ge.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(Za=(Qa=Ge.parameters)==null?void 0:Qa.docs)==null?void 0:Za.source}}};var en,tn,an;Ue.parameters={...Ue.parameters,docs:{...(en=Ue.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(an=(tn=Ue.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var nn,on,sn;Ye.parameters={...Ye.parameters,docs:{...(nn=Ye.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand",
    collapsible: false
  },
  render: args => <SideNav {...args}>{PageContent}</SideNav>
}`,...(sn=(on=Ye.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};const is=["Default","Collapsible","ExternalLinkScreenReader","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithLongItemLabel","WithNestedMenus","KeyboardNavigation","CollapseButtonAccessibility","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers","WithCustomHeader","WithCustomFooter","WithCustomHeaderAndFooter","WithoutHeaderOrFooter"];export{Pe as ActiveItemState,Ie as CollapseButtonAccessibility,_e as CollapsedHeaderTooltipCustom,De as CollapsedTooltip,je as CollapsedTooltipWithNested,Ve as CollapsedWithBadges,Ne as Collapsible,v as Default,be as ExternalLinkScreenReader,Oe as FooterItemsOnly,We as FooterItemsWithNested,Se as HeaderClickability,Ce as HeaderCompact,He as HeaderWithLink,Te as HeaderWithLongTitle,ke as HeaderWithOnClick,we as HeaderWithVersion,Be as KeyboardNavigation,Fe as NestedItemActiveOnClick,Re as NestedItemActivePreselected,qe as NestedNavMenuActiveOnClick,Me as NestedNavMenuActivePreselected,le as WithBadges,Ge as WithCustomFooter,ze as WithCustomHeader,Ue as WithCustomHeaderAndFooter,xe as WithCustomRouter,Ke as WithDividers,Le as WithFooterItems,Ae as WithLongItemLabel,Ee as WithNestedMenus,Ye as WithoutHeaderOrFooter,is as __namedExportsOrder,ss as default};
