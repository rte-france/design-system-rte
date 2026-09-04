import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{g as $a,B as pn,s as Ja}from"./BaseSideNav-xvR76Cyi.js";import{T as vn,a as mn}from"./keyboard-test.constants-By8W48aj.js";import{w as P,e as r,a as gn,u}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{B as yn,N as fn,b as hn,R as Nn,a as ie}from"./chunk-KS7C4IRE-kOmPZtMB.js";import{f as bn}from"./testing.utils-r13wRTL2.js";import{N as xn}from"./NavigationProvider-Bs4LKj9F.js";import{D as le}from"./Divider-BVZUrQ0d.js";import{s as Cn,I as tt,B as at}from"./Badge-DkJhvK8e.js";import{u as nt}from"./NavigationContext-D2CUoNWC.js";import{I as Qa}from"./Icon-DgLH6pPJ.js";import{T as wn}from"./Tooltip-IwW420ZV.js";import{S as Ve,E as Ke,c as dt,b as Tn,d as An}from"./keyboard.constants-BverKK8B.js";import{u as Xa}from"./useActiveKeyboard-DaOmFJe_.js";import"./timepicker.constants-CynrC_9x.js";import{g as En}from"./id.utils-DsO5Uws7.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const ut={HEADER_CONFIG_AND_CUSTOM:"SideNav: Both headerConfig and a custom header were provided. The custom header takes precedence.",FOOTER_ITEMS_AND_CUSTOM:"SideNav: Both footerItems (or collapsible default footer) and a custom footer were provided. The custom footer takes precedence."},In=[{condition:t=>t.hasCustomHeader&&t.hasHeaderConfig,issue:ut.HEADER_CONFIG_AND_CUSTOM},{condition:t=>t.hasCustomFooter&&(t.hasFooterItems||!!t.collapsible),issue:ut.FOOTER_ITEMS_AND_CUSTOM}];function Sn(t){var e;return((e=In.find(({condition:a})=>a(t)))==null?void 0:e.issue)??null}function Bn(t,n){return!t&&!!n}function Hn(t,n,e){return!t&&!!(n!=null&&n.length||e)}function kn(t,n){return!!(t||n)}function Dn(t,n,e){return!!(t||n!=null&&n.length||e)}function jn(t=!1,n=!1){return t?tt.s:n?tt.l:tt.m}function ze(t){return t?Cn({showBadge:!0,badgeContent:t.content??"number",badgeCount:t.count,badgeIcon:t.icon}):!1}function Mn(t){return t.badgeType??"indicator"}const _n="_navItemContainer_l1d46_1",Fn="_navItemLeft_l1d46_47",Rn="_navItem_l1d46_1",qn="_navItemRight_l1d46_64",ae={navItemContainer:_n,navItemLeft:Fn,navItem:Rn,navItemRight:qn},Pn="_navMenuContainer_ycjt5_1",Wn="_navMenu_ycjt5_1",Ln="_menuContentLeft_ycjt5_31",On="_menuContentRight_ycjt5_36",Vn="_menuIcon_ycjt5_95",Kn="_nestedMenu_ycjt5_103",zn="_icon_ycjt5_119",X={navMenuContainer:Pn,navMenu:Wn,menuContentLeft:Ln,menuContentRight:On,menuIcon:Vn,nestedMenu:Kn,icon:zn};function st({link:t,label:n,tabIndex:e,onKeyDown:a,onFocus:o,onBlur:i,onClick:c,children:l,styleType:N="item",ariaExpanded:w,ariaControls:T,role:S}){const x=nt(),A=N==="menu"?X:ae,C={className:N==="menu"?A.navMenu:A.navItem,tabIndex:e,"aria-label":n,...w!==void 0&&{"aria-expanded":w},...T&&{"aria-controls":T},...S&&{role:S},...o&&{onFocus:o},...i&&{onBlur:i},...c&&{onClick:c},...a&&{onKeyDown:a}};return t?s.jsx(x,{href:t,...C,children:l}):s.jsx("span",{...C,children:l})}st.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},ariaExpanded:{required:!1,tsType:{name:"boolean"},description:""},ariaControls:{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"literal",value:'"button"'},description:""}}};function ot({icon:t,hasLeadingIcon:n=!0,label:e,isCollapsed:a,isNested:o,styleType:i="item",badge:c}){const l=jn(o,a),N=i==="menu"?X:ae;function w(){if(!n||!t)return null;const T=s.jsx(Qa,{name:t,className:N.icon,size:l});return a&&c&&ze(c)?s.jsx(at,{badgeType:Mn(c),size:"xs",content:"empty",children:T}):T}return s.jsxs(s.Fragment,{children:[w(),a?null:s.jsx("span",{children:e})]})}ot.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function Ge({label:t,isCollapsed:n,children:e}){return n&&t?s.jsx(wn,{label:t,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}Ge.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Za(t){return t===!1?-1:0}function en({onEnterOrSpace:t,onEscape:n,includeArrowKeys:e=!1,includeEscape:a=!1}={}){const o=g.useCallback(l=>{[Ve,Ke].includes(l.key)&&(l.preventDefault(),t==null||t()),l.key===dt&&a&&(l.preventDefault(),n==null||n())},[t,n,a]),i=[Ve,Ke,...a?[dt]:[],...e?[Tn,An]:[]],{onKeyDown:c}=Xa({onKeyDown:o},{interactiveKeyCodes:i});return{onKeyDown:c}}const Ue=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:o,isCollapsed:i,link:c,href:l,isNested:N,parentMenuOpen:w,appearance:T="brand",active:S,badge:x,onActiveItemChange:A,...W},C)=>{const E=nt(),F=g.useRef(null),R=g.useRef(null),O=!!(l||c),{onKeyDown:Y}=en({onEnterOrSpace:a});function ee(){var H,K;(H=F.current)==null||H.setAttribute("data-focused","true"),(K=R.current)==null||K.setAttribute("data-focused","true")}function V(){var H,K;(H=F.current)==null||H.removeAttribute("data-focused"),(K=R.current)==null||K.removeAttribute("data-focused")}const se=Za(w),$=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:ae.navItemLeft,children:s.jsx(ot,{icon:n,hasLeadingIcon:e,label:o,isCollapsed:i,isNested:N,styleType:"item",badge:x})}),s.jsx("div",{className:ae.navItemRight,children:!i&&x&&ze(x)&&s.jsx(at,{badgeType:x.badgeType,size:x.size,content:x.content,count:x.count})})]}),_=O?s.jsx(E,{id:t,"aria-label":o,className:ae.navItemContainer,"data-collapsed":i,"data-appearance":T,"data-nested":N,"data-active":S,href:l??c,to:l??c,onClick:()=>A==null?void 0:A(t),onBlur:V,ref:R,children:$}):s.jsx("div",{id:t,className:ae.navItemContainer,"data-collapsed":i,"data-appearance":T,"data-nested":N,"data-active":S,onClick:a,ref:H=>{F.current=H,typeof C=="function"?C(H):C&&"current"in C&&(C.current=H)},...W,children:s.jsx(st,{label:o,tabIndex:se,onKeyDown:Y,onFocus:ee,onBlur:V,styleType:"item",children:$})});return s.jsx(Ge,{label:o,isCollapsed:i,children:_})});Ue.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const it=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:o,isCollapsed:i,link:c,items:l=[],open:N,onOpenChange:w,hasMenuIcon:T=!0,isNested:S,parentMenuOpen:x,appearance:A="brand",contrast:W="high",badge:C,hasDivider:E,active:F,onMenuOpenChange:R,getMenuOpen:O,...Y},ee)=>{const V=$a(A,W),[se,$]=g.useState(!1),_=N??se,H=N!==void 0,ue=`nav-menu-content-${g.useRef(t??En()).current}`;function J(){const d=!_,et=t||o;if(a&&a(),et&&R){R(et,d);return}H?w==null||w(d):$(d)}function Je(){if(!_)return;const d=t||o;if(d&&R){R(d,!1);return}H?w==null||w(!1):$(!1)}const{onKeyDown:Qe}=en({onEnterOrSpace:J,onEscape:Je,includeArrowKeys:!0,includeEscape:!0}),Xe=l.length,Q=!i&&Xe,oe=_,Ze=Za(x),pe=Q&&T?s.jsx(Qa,{name:"arrow-chevron-right",className:X.menuIcon,"data-open":_}):null,h=!i&&(ze(C)||!!pe),p=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:X.menuContentLeft,children:s.jsx(ot,{icon:n,hasLeadingIcon:e,label:o,isCollapsed:i,isNested:S,styleType:"menu",badge:C})}),h&&s.jsxs("div",{className:X.menuContentRight,children:[C&&ze(C)&&s.jsx(at,{badgeType:C.badgeType,size:C.size,content:C.content,count:C.count}),pe]})]}),ve=s.jsxs("li",{id:t,className:X.navMenuContainer,"data-collapsed":i,"data-appearance":A,"data-nested":S,"data-open":_,"data-active":F,ref:ee,...Y,children:[s.jsx(st,{link:c,label:o,tabIndex:Ze,onClick:J,onKeyDown:Qe,styleType:"menu",ariaExpanded:Q?_:void 0,ariaControls:Q?ue:void 0,role:Q&&!c?"button":void 0,children:p}),Q&&s.jsx("ul",{id:ue,className:X.nestedMenu,"data-open":_,children:l.map(d=>{var lt;return(lt=d.items)!=null&&lt.length?s.jsx(it,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:i,link:d.link,onClick:d.onClick,items:d.items||[],open:O?O(d):d.open,onOpenChange:d.onOpenChange,onMenuOpenChange:R,getMenuOpen:O,active:d.active,hasMenuIcon:T,hasDivider:d.hasDivider,isNested:!0,parentMenuOpen:oe,appearance:A,contrast:W,badge:d.badge},d.id||d.label):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(Ue,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:i,link:d.link,onClick:d.onClick,isNested:!0,parentMenuOpen:oe,appearance:A,active:d.active,badge:d.badge})}),d.hasDivider&&s.jsx(le,{appearance:V})]},d.id||d.label)})})]}),me=s.jsx(Ge,{label:o,isCollapsed:i,children:ve});return s.jsxs(s.Fragment,{children:[me,E&&s.jsx(le,{appearance:V})]})});it.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Gn="_sideNavHeaderContainer_1p15a_1",Un="_sideNavHeader_1p15a_1",Yn="_sideNavHeaderTitleContainer_1p15a_38",$n="_sideNavHeaderTitle_1p15a_38",Jn="_sideNavHeaderIdentifier_1p15a_47",Qn="_sideNavHeaderVersion_1p15a_119",Xn="_sideNavBody_1p15a_148",Zn="_sideNavFooterContainer_1p15a_172",es="_sideNavFooter_1p15a_172",ts="_sideNavFooterItems_1p15a_185",as="_collapsibleSection_1p15a_202",M={sideNavHeaderContainer:Gn,sideNavHeader:Un,sideNavHeaderTitleContainer:Yn,sideNavHeaderTitle:$n,sideNavHeaderIdentifier:Jn,sideNavHeaderVersion:Qn,sideNavBody:Xn,sideNavFooterContainer:Zn,sideNavFooter:es,sideNavFooterItems:ts,collapsibleSection:as};function tn({footerItemsContent:t,collapsible:n,isCollapsed:e,appearance:a,dividerAppearance:o,collapseIcon:i,onCollapse:c}){return s.jsxs("div",{className:M.sideNavFooterContainer,children:[t&&s.jsx("div",{className:M.sideNavFooterItems,children:t}),s.jsx(le,{appearance:o}),s.jsx("div",{className:M.sideNavFooter,children:n&&s.jsx("div",{className:M.collapsibleSection,children:s.jsx(Ue,{id:"collapse-button",icon:i,hasLeadingIcon:!0,isCollapsed:e,onClick:c,label:e?"Ouvrir le menu":"Réduire le menu",appearance:a,role:"button"})})})]})}tn.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultFooter",props:{footerItemsContent:{required:!0,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},collapseIcon:{required:!0,tsType:{name:"string"},description:""},onCollapse:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function rt({isCollapsed:t,appearance:n,dividerAppearance:e,isCompact:a=!1,children:o}){return s.jsxs("div",{className:M.sideNavHeaderContainer,"data-compact":a,"data-collapsed":t,children:[s.jsx("div",{className:M.sideNavHeader,"data-collapsed":t,"data-appearance":n,"data-compact":a,children:o}),s.jsx(le,{appearance:e})]})}rt.__docgenInfo={description:"",methods:[],displayName:"SideNavHeaderContainer",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function an({headerConfig:t,isCollapsed:n,shouldShowTitle:e,appearance:a,dividerAppearance:o}){const i=nt(),c=E=>{var F;[Ve,Ke].includes(E.key)&&(E.preventDefault(),(F=t.onClick)==null||F.call(t))},{onKeyDown:l}=Xa({onKeyDown:c},{interactiveKeyCodes:[Ve,Ke]}),N=s.jsxs("div",{className:M.sideNavHeaderTitle,children:[s.jsx("div",{className:M.sideNavHeaderIdentifier,children:t.identifier}),!n&&s.jsx("h1",{children:t.title})]}),w=t.ariaLabel,T=s.jsx(i,{href:t.link??"",className:M.sideNavHeaderTitleContainer,onClick:t.onClick,"aria-label":w,children:N}),S=s.jsx("div",{className:M.sideNavHeaderTitleContainer,tabIndex:0,onClick:t.onClick,onKeyDown:l,role:"button","aria-label":w,children:N}),x=s.jsx("div",{className:M.sideNavHeaderTitleContainer,children:N});function A(){return t.link?T:t.onClick?S:x}const W=g.useMemo(()=>t.tooltip??t.title??"",[t.tooltip,t.title]),C=s.jsx(Ge,{label:W,isCollapsed:n,children:A()});return s.jsxs(rt,{isCollapsed:n,isCompact:!!t.isCompact,appearance:a,dividerAppearance:o,children:[C,!t.isCompact&&s.jsx("div",{className:M.sideNavHeaderVersion,"data-hidden":!e,children:s.jsx("span",{children:t.version})})]})}an.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultHeader",props:{headerConfig:{required:!0,tsType:{name:"SideNavHeaderConfig"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},shouldShowTitle:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""}}};const ns=300,U=g.forwardRef(({size:t="m",collapsible:n,children:e,header:a,footer:o,headerConfig:i,items:c,footerItems:l,isCollapsed:N,defaultCollapsed:w=!1,onCollapsedChange:T,onActiveItemChange:S,appearance:x="brand",contrast:A="high",activeItem:W},C)=>{const[E,F]=g.useState(N??w),[R,O]=g.useState(!0),[Y,ee]=g.useState({}),[V,se]=g.useState(W),$=g.useCallback((h,p)=>{ee(ve=>({...ve,[h]:p}))},[]),_=g.useCallback(h=>h.id&&h.id in Y?Y[h.id]:h.open,[Y]),H=g.useCallback(h=>{se(h),S==null||S(h)},[S]);g.useEffect(()=>{ee({})},[c]),g.useEffect(()=>{N!==void 0&&F(N)},[N]),g.useEffect(()=>{if(E)O(!1);else{const h=setTimeout(()=>{O(!0)},ns);return()=>clearTimeout(h)}},[E]);const K=()=>{const h=!E;N===void 0&&F(h),T==null||T(h)},ue=E?"arrow-double-right":"arrow-double-left",J=$a(x,A),Je=Bn(a,i),Qe=Hn(o,l,n),Xe=kn(a,i),Q=Dn(o,l,n);g.useEffect(()=>{const h=Sn({hasCustomHeader:!!a,hasHeaderConfig:!!i,hasCustomFooter:!!o,hasFooterItems:!!(l!=null&&l.length),collapsible:n});h&&console.warn(h)},[a,i,o,l,n]);function oe(h){return h!=null&&h.length?s.jsx("ul",{children:h.map(p=>{var me;return((me=p.items)==null?void 0:me.length)?s.jsx(it,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:E,link:p.link,onClick:p.onClick,items:p.items||[],open:_(p),onMenuOpenChange:$,getMenuOpen:_,active:p.active,appearance:x,contrast:A,hasDivider:p.hasDivider},p.id):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(Ue,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:E,link:p.href??p.link,onClick:p.onClick,appearance:x,active:p.active??(p.id===V&&!!V),onActiveItemChange:H})}),p.hasDivider&&s.jsx(le,{appearance:J})]},p.id)})}):null}function Ze(){return Xe?Je&&i?s.jsx(an,{headerConfig:i,isCollapsed:E,shouldShowTitle:R,appearance:x,dividerAppearance:J}):s.jsx(rt,{isCollapsed:E,appearance:x,dividerAppearance:J,children:a}):null}function pe(){return Q?Qe?s.jsx(tn,{footerItemsContent:oe(l),collapsible:n,isCollapsed:E,appearance:x,dividerAppearance:J,collapseIcon:ue,onCollapse:K}):o??null:null}return s.jsx(pn,{ref:C,size:t,isCollapsed:E,appearance:x,contrast:A,header:Ze(),body:s.jsx("div",{className:M.sideNavBody,children:oe(c)}),footer:pe(),children:e})});U.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function nn(t,n){return t.some(e=>{var a;return e.id===n?!0:(a=e.items)!=null&&a.length?nn(e.items,n):!1})}function ss(t,n){if(!t.id||!n)return t.onClick;const e=()=>{n(t.id)};return t.onClick?()=>{e(),t.onClick()}:e}function sn(t,n,e){return t.map(a=>{var T;const o=(T=a.items)!=null&&T.length?sn(a.items,n,e):void 0,i=!!(o!=null&&o.length),c=!i&&a.id===n,l=i&&a.id===n,N=a,w=i&&(a.id===n||nn(a.items,n));return{...a,active:c||l,open:w?!0:N.open,items:o,onClick:ss(a,e)}})}function Ye(){return function(n,e){const[a,o]=g.useState(e.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...e.args,isCollapsed:a,onCollapsedChange:o}})})}}function os(t){return function(e,a){const[o,i]=g.useState(a.args.activeItem),c=t.map(l=>({...l,onClick:()=>i(l.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...a.args,items:c,activeItem:o}})})}}function on(t,n){return function(a,o){const[i,c]=g.useState(n),l=g.useMemo(()=>sn(t,i,c),[i,t]);return s.jsx(a,{args:{...o.args,items:l}})}}function rn(t){if(!t)return null;const n=Array.from(t.children);for(const i of n)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const e=t.querySelector("a");return e||Array.from(t.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function v(t,n,e){const a=e?t.querySelector(e):t;if(!a)return null;const o=e?P(a):P(t),i=o.queryByRole("link",{name:n});if(i)return i;const c=o.queryByText(n);if(c){const l=c.closest("li");return rn(l)}return null}function ce(t,n){const e=t.querySelector('[class*="sideNavBody"]');if(!e)return null;const o=Array.from(e.querySelectorAll("li"))[n];return rn(o)}function te(t,n){return v(t,n,'[class*="sideNavFooterItems"]')}function Z(t,n="MA"){var i;return(i=P(t).getByText(n).parentElement)==null?void 0:i.parentElement}function is(t,n){return t.querySelector(`#${n}`)}function rs(t){return t.dataset.active==="true"}function k(t){r(t).not.toBeNull(),r(t).toHaveFocus()}function D(t,n){const e=v(t,n);e&&r(e).not.toHaveFocus()}function j(t,n){const e=v(t,n);e&&r(e).toHaveAttribute("tabindex","-1")}function z(t,n){const e=v(t,n);e&&r(e).toHaveAttribute("tabindex","0")}async function cn(t,n,e){await gn(()=>{const a=t.getByRole("navigation"),o=is(a,n);if(!o){r(e).toBe(!1);return}r(rs(o)).toBe(e)})}function L(t,n){return cn(t,n,!0)}function y(t,n){return cn(t,n,!1)}function I(t){const n=P(t),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function ne(t=200){return new Promise(n=>setTimeout(n,t))}const Ls={title:"Composants/SideNav/SideNav",id:"SideNav",component:U,tags:["autodocs"],decorators:[t=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(t,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:t=>s.jsx(U,{size:t.size,collapsible:t.collapsible,headerConfig:t.headerConfig,appearance:t.appearance,contrast:t.contrast,items:t.items,footerItems:t.footerItems,isCollapsed:t.isCollapsed,activeItem:t.activeItem,onCollapsedChange:t.onCollapsedChange,children:de})},de=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),B={hasLeadingIcon:!0},G={size:"m",content:"number"},f=[{...B,id:"home",label:"Home",icon:"home"},{...B,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...B,id:"analytics",label:"Analytics",icon:"analytics"},{...B,id:"settings",label:"Settings",icon:"settings"},{...B,id:"profile",label:"Profile",icon:"user",link:"/profile"}],cs=[{...B,id:"home",label:"Home",icon:"home",href:"/"},{...B,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...B,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...B,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...B,id:"profile",label:"Profile",icon:"user",href:"/profile"}],q=f,ln=[f[0],{...f[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...f[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},f[4]],ls=[f[0],{...f[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},f[4]],ds=[f[0],{...f[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...f[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},f[4]],$e=[f[0],{...f[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...f[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},f[4]],us=[{...f[0],badge:{...G,badgeType:"indicator",count:5}},{...f[1],badge:{...G,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...G,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...G,badgeType:"indicator",count:12}}]},{...f[3],items:[{label:"General"},{label:"Privacy",badge:{...G,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...G,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...G,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...f[4],badge:{...G,badgeType:"brand",count:8}}],ct=[{...B,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...B,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...B,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},ps="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",vs={...b},ms={...b,onClick:()=>{console.log("Header clicked")}},m={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:q}},ge={args:{...m.args,collapsible:!0}},ye={args:{...m.args,items:cs},render:t=>{const n=()=>{const e=hn();return g.useEffect(()=>{e("/")},[]),s.jsx(U,{...t,activeItem:"home",onActiveItemChange:a=>console.log("Active item changed to:",a),children:s.jsx("div",{style:{padding:"2rem"},children:s.jsxs(Nn,{children:[s.jsx(ie,{path:"/",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),s.jsx(ie,{path:"/dashboard",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),s.jsx(ie,{path:"/analytics",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),s.jsx(ie,{path:"/settings",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),s.jsx(ie,{path:"/profile",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return s.jsx(yn,{children:s.jsx(xn,{linkComponent:fn,children:s.jsx(n,{})})})}},fe={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b}},he={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:{...b,isCompact:!0}}},Ne={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:{...b,title:ps},size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(e.offsetWidth).toBe(Ja.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const a=e.querySelector("h1");r(a).not.toBeNull(),r(getComputedStyle(a).textOverflow).toBe("ellipsis"),r(a.scrollWidth).toBeGreaterThan(a.clientWidth)})}},pt="Supervision des processus et des opérations en temps réel",be={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:[{...B,id:"supervision",label:pt,icon:"dashboard"},...q.slice(1)],size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Side nav keeps the fixed M panel width with a long item label",async()=>{r(e.offsetWidth).toBe(Ja.m)}),await n("Nav item label is truncated with an ellipsis",async()=>{const a=v(e,pt);r(a).not.toBeNull();const o=a==null?void 0:a.querySelector('[class*="navItemLeft"] span:last-child');r(o).not.toBeNull(),r(getComputedStyle(o).textOverflow).toBe("ellipsis"),r(o.scrollWidth).toBeGreaterThan(o.clientWidth)})}},xe={args:{...m.args,headerConfig:b,items:$e,collapsible:!0}},Ce={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:$e,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Navigate through navigation when all menus are closed",async()=>{j(e,"Overview"),j(e,"Reports"),j(e,"Analytics"),j(e,"General"),j(e,"Privacy"),j(e,"Advanced");const a=v(e,"Home");a==null||a.focus(),k(a),await u.tab();const o=v(e,"Dashboard");k(o),r(o).toHaveAttribute("role","button"),r(o).toHaveAttribute("aria-expanded","false"),r(o==null?void 0:o.getAttribute("aria-controls")).toBeTruthy(),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics"),await u.tab();const i=v(e,"Settings");k(i),r(i).toHaveAttribute("role","button"),r(i).toHaveAttribute("aria-expanded","false"),D(e,"General"),D(e,"Privacy"),D(e,"Advanced"),await u.tab();const c=v(e,"Profile");k(c)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const a=v(e,"Dashboard");await u.click(a),r(a).toHaveAttribute("aria-expanded","true"),r(document.getElementById(a.getAttribute("aria-controls"))).not.toBeNull(),z(e,"Overview"),z(e,"Reports"),z(e,"Analytics"),await u.tab();const o=v(e,"Overview");k(o),await u.tab();const i=v(e,"Reports");k(i),await u.tab();const c=v(e,"Analytics");k(c)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const a=v(e,"Dashboard");await u.click(a),r(a).toHaveAttribute("aria-expanded","false"),j(e,"Overview"),j(e,"Reports"),j(e,"Analytics"),await u.tab();const o=v(e,"Settings");k(o),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const a=v(e,"Settings");await u.click(a),z(e,"General"),z(e,"Privacy"),z(e,"Advanced"),j(e,"Security"),j(e,"API Keys"),await u.tab();const o=v(e,"General");k(o),await u.tab();const i=v(e,"Privacy");k(i),await u.tab();const c=v(e,"Advanced");k(c),D(e,"Security"),D(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const a=v(e,"Advanced");await u.click(a),z(e,"Security"),z(e,"API Keys"),await u.tab();const o=v(e,"Security");k(o),await u.tab();const i=v(e,"API Keys");k(i)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const a=v(e,"Advanced");await u.click(a),j(e,"Security"),j(e,"API Keys"),await u.tab();const o=v(e,"Profile");k(o),D(e,"Security"),D(e,"API Keys")})}},we={tags:["!autodocs"],args:{...m.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const a=Z(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),r(a).not.toHaveAttribute("href"),r(a).not.toHaveAttribute("role","button"),r(a).not.toHaveAttribute("tabindex")})}},Te={tags:["!autodocs"],args:{...m.args,headerConfig:vs,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is a link when link prop is provided",async()=>{const a=Z(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("A"),r(a).toHaveAttribute("href","/"),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const a=Z(e);a==null||a.focus(),r(a).toHaveFocus()})}},Ae={tags:["!autodocs"],args:{...m.args,headerConfig:{...ms,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is clickable button when onClick is provided",async()=>{const a=Z(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),await u.click(a),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const a=Z(e);a==null||a.focus(),r(a).toHaveFocus(),await u.keyboard(vn),await u.keyboard(mn)})}},Ee={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:q,collapsible:!0,isCollapsed:!0},decorators:[Ye()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header tooltip falls back to title when collapsed",async()=>{const a=Z(e);r(a).not.toBeNull(),a==null||a.focus(),await ne();const o=P(document.body).queryByRole("tooltip",{name:"My Application"});r(o).not.toBeNull(),r(o).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const a=ce(e,0);r(a).not.toBeNull(),a==null||a.focus(),await ne();const o=P(document.body).queryByRole("tooltip",{name:"Home"});r(o).not.toBeNull(),r(o).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await u.tab(),await ne();const a=P(document.body).queryByRole("tooltip",{name:"Dashboard"});r(a).not.toBeNull(),r(a).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await u.tab(),await u.tab(),await u.tab(),await ne();const a=P(document.body).queryByRole("tooltip",{name:"Profile"});r(a).not.toBeNull(),r(a).toHaveTextContent("Profile")})}},Ie={tags:["!autodocs"],args:{...m.args,headerConfig:{...b,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Ye()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const a=Z(e);r(a).not.toBeNull(),a==null||a.focus(),await ne();const o=P(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(o).not.toBeNull(),r(o).toHaveTextContent("Custom header tooltip")})}},Se={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:$e,collapsible:!0,isCollapsed:!0},decorators:[Ye()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify tooltips appear when tabbing to menu items",async()=>{bn();const a=ce(e,1);r(a).not.toBeNull(),await u.tab(),await u.tab(),await u.tab(),await ne();const o=P(document.body).queryByRole("tooltip",{name:"Dashboard"});r(o).not.toBeNull(),r(o).toHaveTextContent("Dashboard")})}},Be={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:ds,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Overview nested item is active",async()=>{L(e,"overview"),y(e,"reports")})}},He={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:ls,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{L(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")})}},ke={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[on(ln,"security")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify only Security is active, not parent NavMenus",async()=>{L(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const a=e.getByRole("navigation"),o=v(a,"API Keys");r(o).not.toBeNull(),await u.click(o),y(e,"security"),L(e,"api-keys"),y(e,"advanced"),y(e,"settings")})}},De={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[on(ln,"overview")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Overview leaf is active initially",async()=>{L(e,"overview"),y(e,"reports"),y(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const a=e.getByRole("navigation"),o=v(a,"Reports");r(o).not.toBeNull(),await u.click(o),y(e,"overview"),L(e,"reports"),y(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const a=e.getByRole("navigation"),o=v(a,"Settings");r(o).not.toBeNull(),await u.click(o);const i=v(a,"Advanced");r(i).not.toBeNull(),await u.click(i),y(e,"overview"),y(e,"reports"),y(e,"security"),y(e,"api-keys"),L(e,"advanced")})}},je={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:q,activeItem:"home",collapsible:!0},decorators:[os(q)],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Home has active class initially",async()=>{L(e,"home"),y(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const a=e.getByRole("navigation"),o=v(a,"Dashboard");r(o).not.toBeNull(),await u.click(o),y(e,"home"),L(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")})}},Me={args:{...m.args,headerConfig:b,items:q,footerItems:ct,collapsible:!0}},_e={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:q,footerItems:ct,collapsible:!1}},Fe={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:$e,footerItems:ct,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify footer items are rendered",async()=>{const a=te(e,"Settings");r(a).not.toBeNull();const o=te(e,"Help & Support");r(o).not.toBeNull();const i=te(e,"Account");r(i).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const a=te(e,"Account");await u.click(a);const o=te(e,"Preferences");r(o).not.toBeNull();const i=te(e,"Logout");r(i).not.toBeNull()})}},re={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:us,collapsible:!0}},Re={tags:["!autodocs"],args:{...re.args,isCollapsed:!0},decorators:[Ye()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var i;const a=ce(e,0);r(a).not.toBeNull();const o=a==null?void 0:a.querySelector('[data-size="xs"]');r(o).not.toBeNull(),r(o).toHaveAttribute("data-badge-type","indicator"),r((i=o==null?void 0:o.textContent)==null?void 0:i.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const a=ce(e,0);r(a==null?void 0:a.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var i;const a=ce(e,1);r(a).not.toBeNull();const o=a==null?void 0:a.querySelector('[data-size="xs"]');r(o).not.toBeNull(),r(o).toHaveAttribute("data-badge-type","indicator"),r((i=o==null?void 0:o.textContent)==null?void 0:i.trim()).toBe("")})}},gs=[f[0],{...f[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...f[2],hasDivider:!0},{...B,id:"reports",label:"Reports",icon:"info"},{...f[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},f[4]],qe={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:gs,collapsible:!0}},dn=s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0 1rem",color:"white",fontWeight:600},children:[s.jsx("span",{style:{fontSize:"1.25rem"},children:"⬡"}),s.jsx("span",{children:"My App"})]}),un=s.jsx("div",{style:{padding:"1rem",color:"white",fontSize:"0.875rem"},children:"Custom footer content"}),Pe={args:{items:q,appearance:"brand"},render:t=>s.jsx(U,{...t,header:dn,children:de})},We={args:{items:q,appearance:"brand"},render:t=>s.jsx(U,{...t,footer:un,children:de})},Le={args:{items:q,appearance:"brand"},render:t=>s.jsx(U,{...t,header:dn,footer:un,children:de})},Oe={args:{items:q,appearance:"brand",collapsible:!1},render:t=>s.jsx(U,{...t,children:de})};var vt,mt,gt;m.parameters={...m.parameters,docs:{...(vt=m.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(gt=(mt=m.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};var yt,ft,ht;ge.parameters={...ge.parameters,docs:{...(yt=ge.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(ht=(ft=ge.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var Nt,bt,xt;ye.parameters={...ye.parameters,docs:{...(Nt=ye.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(xt=(bt=ye.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var Ct,wt,Tt;fe.parameters={...fe.parameters,docs:{...(Ct=fe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Tt=(wt=fe.parameters)==null?void 0:wt.docs)==null?void 0:Tt.source}}};var At,Et,It;he.parameters={...he.parameters,docs:{...(At=he.parameters)==null?void 0:At.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(It=(Et=he.parameters)==null?void 0:Et.docs)==null?void 0:It.source}}};var St,Bt,Ht;Ne.parameters={...Ne.parameters,docs:{...(St=Ne.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Ht=(Bt=Ne.parameters)==null?void 0:Bt.docs)==null?void 0:Ht.source}}};var kt,Dt,jt;be.parameters={...be.parameters,docs:{...(kt=be.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(jt=(Dt=be.parameters)==null?void 0:Dt.docs)==null?void 0:jt.source}}};var Mt,_t,Ft;xe.parameters={...xe.parameters,docs:{...(Mt=xe.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Ft=(_t=xe.parameters)==null?void 0:_t.docs)==null?void 0:Ft.source}}};var Rt,qt,Pt;Ce.parameters={...Ce.parameters,docs:{...(Rt=Ce.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Pt=(qt=Ce.parameters)==null?void 0:qt.docs)==null?void 0:Pt.source}}};var Wt,Lt,Ot;we.parameters={...we.parameters,docs:{...(Wt=we.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Ot=(Lt=we.parameters)==null?void 0:Lt.docs)==null?void 0:Ot.source}}};var Vt,Kt,zt;Te.parameters={...Te.parameters,docs:{...(Vt=Te.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(zt=(Kt=Te.parameters)==null?void 0:Kt.docs)==null?void 0:zt.source}}};var Gt,Ut,Yt;Ae.parameters={...Ae.parameters,docs:{...(Gt=Ae.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Yt=(Ut=Ae.parameters)==null?void 0:Ut.docs)==null?void 0:Yt.source}}};var $t,Jt,Qt;Ee.parameters={...Ee.parameters,docs:{...($t=Ee.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=Ee.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,ea;Ie.parameters={...Ie.parameters,docs:{...(Xt=Ie.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(ea=(Zt=Ie.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,na;Se.parameters={...Se.parameters,docs:{...(ta=Se.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(na=(aa=Se.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var sa,oa,ia;Be.parameters={...Be.parameters,docs:{...(sa=Be.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ia=(oa=Be.parameters)==null?void 0:oa.docs)==null?void 0:ia.source}}};var ra,ca,la;He.parameters={...He.parameters,docs:{...(ra=He.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(la=(ca=He.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var da,ua,pa;ke.parameters={...ke.parameters,docs:{...(da=ke.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(pa=(ua=ke.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var va,ma,ga;De.parameters={...De.parameters,docs:{...(va=De.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(ga=(ma=De.parameters)==null?void 0:ma.docs)==null?void 0:ga.source}}};var ya,fa,ha;je.parameters={...je.parameters,docs:{...(ya=je.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(ha=(fa=je.parameters)==null?void 0:fa.docs)==null?void 0:ha.source}}};var Na,ba,xa;Me.parameters={...Me.parameters,docs:{...(Na=Me.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(xa=(ba=Me.parameters)==null?void 0:ba.docs)==null?void 0:xa.source}}};var Ca,wa,Ta;_e.parameters={..._e.parameters,docs:{...(Ca=_e.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Ta=(wa=_e.parameters)==null?void 0:wa.docs)==null?void 0:Ta.source}}};var Aa,Ea,Ia;Fe.parameters={...Fe.parameters,docs:{...(Aa=Fe.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ia=(Ea=Fe.parameters)==null?void 0:Ea.docs)==null?void 0:Ia.source}}};var Sa,Ba,Ha;re.parameters={...re.parameters,docs:{...(Sa=re.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Ha=(Ba=re.parameters)==null?void 0:Ba.docs)==null?void 0:Ha.source}}};var ka,Da,ja;Re.parameters={...Re.parameters,docs:{...(ka=Re.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(ja=(Da=Re.parameters)==null?void 0:Da.docs)==null?void 0:ja.source}}};var Ma,_a,Fa;qe.parameters={...qe.parameters,docs:{...(Ma=qe.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Fa=(_a=qe.parameters)==null?void 0:_a.docs)==null?void 0:Fa.source}}};var Ra,qa,Pa;Pe.parameters={...Pe.parameters,docs:{...(Ra=Pe.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent}>
      {PageContent}
    </SideNav>
}`,...(Pa=(qa=Pe.parameters)==null?void 0:qa.docs)==null?void 0:Pa.source}}};var Wa,La,Oa;We.parameters={...We.parameters,docs:{...(Wa=We.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(Oa=(La=We.parameters)==null?void 0:La.docs)==null?void 0:Oa.source}}};var Va,Ka,za;Le.parameters={...Le.parameters,docs:{...(Va=Le.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(za=(Ka=Le.parameters)==null?void 0:Ka.docs)==null?void 0:za.source}}};var Ga,Ua,Ya;Oe.parameters={...Oe.parameters,docs:{...(Ga=Oe.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand",
    collapsible: false
  },
  render: args => <SideNav {...args}>{PageContent}</SideNav>
}`,...(Ya=(Ua=Oe.parameters)==null?void 0:Ua.docs)==null?void 0:Ya.source}}};const Os=["Default","Collapsible","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithLongItemLabel","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers","WithCustomHeader","WithCustomFooter","WithCustomHeaderAndFooter","WithoutHeaderOrFooter"];export{je as ActiveItemState,Ie as CollapsedHeaderTooltipCustom,Ee as CollapsedTooltip,Se as CollapsedTooltipWithNested,Re as CollapsedWithBadges,ge as Collapsible,m as Default,_e as FooterItemsOnly,Fe as FooterItemsWithNested,we as HeaderClickability,he as HeaderCompact,Te as HeaderWithLink,Ne as HeaderWithLongTitle,Ae as HeaderWithOnClick,fe as HeaderWithVersion,Ce as KeyboardNavigation,De as NestedItemActiveOnClick,Be as NestedItemActivePreselected,ke as NestedNavMenuActiveOnClick,He as NestedNavMenuActivePreselected,re as WithBadges,We as WithCustomFooter,Pe as WithCustomHeader,Le as WithCustomHeaderAndFooter,ye as WithCustomRouter,qe as WithDividers,Me as WithFooterItems,be as WithLongItemLabel,xe as WithNestedMenus,Oe as WithoutHeaderOrFooter,Os as __namedExportsOrder,Ls as default};
