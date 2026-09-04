import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{g as $a,B as vn,s as Ja}from"./BaseSideNav-xvR76Cyi.js";import{T as mn,a as gn}from"./keyboard-test.constants-By8W48aj.js";import{w as P,e as r,a as yn,u}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{B as fn,N as hn,b as Nn,R as bn,a as oe}from"./chunk-KS7C4IRE-kOmPZtMB.js";import{f as xn}from"./testing.utils-r13wRTL2.js";import{N as Cn}from"./NavigationProvider-Bs4LKj9F.js";import{D as ce}from"./Divider-BVZUrQ0d.js";import{s as wn,I as et,B as tt}from"./Badge-DkJhvK8e.js";import{u as at}from"./NavigationContext-D2CUoNWC.js";import{I as Qa}from"./Icon-DgLH6pPJ.js";import{T as Tn}from"./Tooltip-IwW420ZV.js";import{S as Oe,E as Ve,c as dt,b as An,d as En}from"./keyboard.constants-BverKK8B.js";import{u as Xa}from"./useActiveKeyboard-DaOmFJe_.js";import"./timepicker.constants-CynrC_9x.js";import{g as In}from"./id.utils-DsO5Uws7.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const ut={HEADER_CONFIG_AND_CUSTOM:"SideNav: Both headerConfig and a custom header were provided. The custom header takes precedence.",FOOTER_ITEMS_AND_CUSTOM:"SideNav: Both footerItems (or collapsible default footer) and a custom footer were provided. The custom footer takes precedence."},Sn=[{condition:t=>t.hasCustomHeader&&t.hasHeaderConfig,issue:ut.HEADER_CONFIG_AND_CUSTOM},{condition:t=>t.hasCustomFooter&&(t.hasFooterItems||!!t.collapsible),issue:ut.FOOTER_ITEMS_AND_CUSTOM}];function Bn(t){var e;return((e=Sn.find(({condition:a})=>a(t)))==null?void 0:e.issue)??null}function Hn(t,n){return!t&&!!n}function kn(t,n,e){return!t&&!!(n!=null&&n.length||e)}function Dn(t,n){return!!(t||n)}function jn(t,n,e){return!!(t||n!=null&&n.length||e)}function Mn(t=!1,n=!1){return t?et.s:n?et.l:et.m}function Ke(t){return t?wn({showBadge:!0,badgeContent:t.content??"number",badgeCount:t.count,badgeIcon:t.icon}):!1}function _n(t){return t.badgeType??"indicator"}const Fn="_navItemContainer_l1d46_1",qn="_navItemLeft_l1d46_47",Rn="_navItem_l1d46_1",Pn="_navItemRight_l1d46_64",ae={navItemContainer:Fn,navItemLeft:qn,navItem:Rn,navItemRight:Pn},Wn="_navMenuContainer_ycjt5_1",Ln="_navMenu_ycjt5_1",On="_menuContentLeft_ycjt5_31",Vn="_menuContentRight_ycjt5_36",Kn="_menuIcon_ycjt5_95",zn="_nestedMenu_ycjt5_103",Gn="_icon_ycjt5_119",X={navMenuContainer:Wn,navMenu:Ln,menuContentLeft:On,menuContentRight:Vn,menuIcon:Kn,nestedMenu:zn,icon:Gn};function nt({link:t,label:n,tabIndex:e,onKeyDown:a,onFocus:o,onBlur:i,onClick:c,children:l,styleType:N="item",ariaExpanded:w,ariaControls:T,role:S}){const x=at(),A=N==="menu"?X:ae,C={className:N==="menu"?A.navMenu:A.navItem,tabIndex:e,"aria-label":n,...w!==void 0&&{"aria-expanded":w},...T&&{"aria-controls":T},...S&&{role:S},...o&&{onFocus:o},...i&&{onBlur:i},...c&&{onClick:c},...a&&{onKeyDown:a}};return t?s.jsx(x,{href:t,...C,children:l}):s.jsx("span",{...C,children:l})}nt.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},ariaExpanded:{required:!1,tsType:{name:"boolean"},description:""},ariaControls:{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"literal",value:'"button"'},description:""}}};function st({icon:t,hasLeadingIcon:n=!0,label:e,isCollapsed:a,isNested:o,styleType:i="item",badge:c}){const l=Mn(o,a),N=i==="menu"?X:ae;function w(){if(!n||!t)return null;const T=s.jsx(Qa,{name:t,className:N.icon,size:l});return a&&c&&Ke(c)?s.jsx(tt,{badgeType:_n(c),size:"xs",content:"empty",children:T}):T}return s.jsxs(s.Fragment,{children:[w(),a?null:s.jsx("span",{children:e})]})}st.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function ze({label:t,isCollapsed:n,children:e}){return n&&t?s.jsx(Tn,{label:t,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}ze.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Za(t){return t===!1?-1:0}function en({onEnterOrSpace:t,onEscape:n,includeArrowKeys:e=!1,includeEscape:a=!1}={}){const o=g.useCallback(l=>{[Oe,Ve].includes(l.key)&&(l.preventDefault(),t==null||t()),l.key===dt&&a&&(l.preventDefault(),n==null||n())},[t,n,a]),i=[Oe,Ve,...a?[dt]:[],...e?[An,En]:[]],{onKeyDown:c}=Xa({onKeyDown:o},{interactiveKeyCodes:i});return{onKeyDown:c}}const Ge=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:o,isCollapsed:i,link:c,href:l,isNested:N,parentMenuOpen:w,appearance:T="brand",active:S,badge:x,onActiveItemChange:A,...W},C)=>{const E=at(),F=g.useRef(null),q=g.useRef(null),V=!!(l||c),{onKeyDown:$}=en({onEnterOrSpace:a});function ee(){var H,L;(H=F.current)==null||H.setAttribute("data-focused","true"),(L=q.current)==null||L.setAttribute("data-focused","true")}function K(){var H,L;(H=F.current)==null||H.removeAttribute("data-focused"),(L=q.current)==null||L.removeAttribute("data-focused")}const se=Za(w),J=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:ae.navItemLeft,children:s.jsx(st,{icon:n,hasLeadingIcon:e,label:o,isCollapsed:i,isNested:N,styleType:"item",badge:x})}),s.jsx("div",{className:ae.navItemRight,children:!i&&x&&Ke(x)&&s.jsx(tt,{badgeType:x.badgeType,size:x.size,content:x.content,count:x.count})})]}),_=V?s.jsx(E,{id:t,"aria-label":o,className:ae.navItemContainer,"data-collapsed":i,"data-appearance":T,"data-nested":N,"data-active":S,href:l??c,to:l??c,onClick:()=>A==null?void 0:A(t),onBlur:K,ref:q,children:J}):s.jsx("div",{id:t,className:ae.navItemContainer,"data-collapsed":i,"data-appearance":T,"data-nested":N,"data-active":S,onClick:a,ref:H=>{F.current=H,typeof C=="function"?C(H):C&&"current"in C&&(C.current=H)},...W,children:s.jsx(nt,{label:o,tabIndex:se,onKeyDown:$,onFocus:ee,onBlur:K,styleType:"item",children:J})});return s.jsx(ze,{label:o,isCollapsed:i,children:_})});Ge.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const ot=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:o,isCollapsed:i,link:c,items:l=[],open:N,onOpenChange:w,hasMenuIcon:T=!0,isNested:S,parentMenuOpen:x,appearance:A="brand",contrast:W="high",badge:C,hasDivider:E,active:F,onMenuOpenChange:q,getMenuOpen:V,...$},ee)=>{const K=$a(A,W),[se,J]=g.useState(!1),_=N??se,H=N!==void 0,L=g.useRef(In()),Q=`nav-menu-content-${t??L.current}`;function de(){const d=!_,Ze=t||o;if(a&&a(),Ze&&q){q(Ze,d);return}H?w==null||w(d):J(d)}function $e(){if(!_)return;const d=t||o;if(d&&q){q(d,!1);return}H?w==null||w(!1):J(!1)}const{onKeyDown:Je}=en({onEnterOrSpace:de,onEscape:$e,includeArrowKeys:!0,includeEscape:!0}),Qe=l.length,z=!i&&Qe,ue=_,Xe=Za(x),f=z&&T?s.jsx(Qa,{name:"arrow-chevron-right",className:X.menuIcon,"data-open":_}):null,p=!i&&(Ke(C)||!!f),pe=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:X.menuContentLeft,children:s.jsx(st,{icon:n,hasLeadingIcon:e,label:o,isCollapsed:i,isNested:S,styleType:"menu",badge:C})}),p&&s.jsxs("div",{className:X.menuContentRight,children:[C&&Ke(C)&&s.jsx(tt,{badgeType:C.badgeType,size:C.size,content:C.content,count:C.count}),f]})]}),ve=s.jsxs("li",{id:t,className:X.navMenuContainer,"data-collapsed":i,"data-appearance":A,"data-nested":S,"data-open":_,"data-active":F,ref:ee,...$,children:[s.jsx(nt,{link:c,label:o,tabIndex:Xe,onClick:de,onKeyDown:Je,styleType:"menu",ariaExpanded:z?_:void 0,ariaControls:z?Q:void 0,role:z&&!c?"button":void 0,children:pe}),z&&s.jsx("ul",{id:Q,className:X.nestedMenu,"data-open":_,children:l.map(d=>{var lt;return(lt=d.items)!=null&&lt.length?s.jsx(ot,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:i,link:d.link,onClick:d.onClick,items:d.items||[],open:V?V(d):d.open,onOpenChange:d.onOpenChange,onMenuOpenChange:q,getMenuOpen:V,active:d.active,hasMenuIcon:T,hasDivider:d.hasDivider,isNested:!0,parentMenuOpen:ue,appearance:A,contrast:W,badge:d.badge},d.id||d.label):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(Ge,{id:d.id,label:d.label,icon:d.icon,hasLeadingIcon:d.hasLeadingIcon,isCollapsed:i,link:d.link,onClick:d.onClick,isNested:!0,parentMenuOpen:ue,appearance:A,active:d.active,badge:d.badge})}),d.hasDivider&&s.jsx(ce,{appearance:K})]},d.id||d.label)})})]}),pn=s.jsx(ze,{label:o,isCollapsed:i,children:ve});return s.jsxs(s.Fragment,{children:[pn,E&&s.jsx(ce,{appearance:K})]})});ot.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Un="_sideNavHeaderContainer_1p15a_1",Yn="_sideNavHeader_1p15a_1",$n="_sideNavHeaderTitleContainer_1p15a_38",Jn="_sideNavHeaderTitle_1p15a_38",Qn="_sideNavHeaderIdentifier_1p15a_47",Xn="_sideNavHeaderVersion_1p15a_119",Zn="_sideNavBody_1p15a_148",es="_sideNavFooterContainer_1p15a_172",ts="_sideNavFooter_1p15a_172",as="_sideNavFooterItems_1p15a_185",ns="_collapsibleSection_1p15a_202",M={sideNavHeaderContainer:Un,sideNavHeader:Yn,sideNavHeaderTitleContainer:$n,sideNavHeaderTitle:Jn,sideNavHeaderIdentifier:Qn,sideNavHeaderVersion:Xn,sideNavBody:Zn,sideNavFooterContainer:es,sideNavFooter:ts,sideNavFooterItems:as,collapsibleSection:ns};function tn({footerItemsContent:t,collapsible:n,isCollapsed:e,appearance:a,dividerAppearance:o,collapseIcon:i,onCollapse:c}){return s.jsxs("div",{className:M.sideNavFooterContainer,children:[t&&s.jsx("div",{className:M.sideNavFooterItems,children:t}),s.jsx(ce,{appearance:o}),s.jsx("div",{className:M.sideNavFooter,children:n&&s.jsx("div",{className:M.collapsibleSection,children:s.jsx(Ge,{id:"collapse-button",icon:i,hasLeadingIcon:!0,isCollapsed:e,onClick:c,label:e?"Ouvrir le menu":"Réduire le menu",appearance:a,role:"button"})})})]})}tn.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultFooter",props:{footerItemsContent:{required:!0,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},collapseIcon:{required:!0,tsType:{name:"string"},description:""},onCollapse:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function it({isCollapsed:t,appearance:n,dividerAppearance:e,isCompact:a=!1,children:o}){return s.jsxs("div",{className:M.sideNavHeaderContainer,"data-compact":a,"data-collapsed":t,children:[s.jsx("div",{className:M.sideNavHeader,"data-collapsed":t,"data-appearance":n,"data-compact":a,children:o}),s.jsx(ce,{appearance:e})]})}it.__docgenInfo={description:"",methods:[],displayName:"SideNavHeaderContainer",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function an({headerConfig:t,isCollapsed:n,shouldShowTitle:e,appearance:a,dividerAppearance:o}){const i=at(),c=E=>{var F;[Oe,Ve].includes(E.key)&&(E.preventDefault(),(F=t.onClick)==null||F.call(t))},{onKeyDown:l}=Xa({onKeyDown:c},{interactiveKeyCodes:[Oe,Ve]}),N=s.jsxs("div",{className:M.sideNavHeaderTitle,children:[s.jsx("div",{className:M.sideNavHeaderIdentifier,children:t.identifier}),!n&&s.jsx("h1",{children:t.title})]}),w=t.ariaLabel,T=s.jsx(i,{href:t.link??"",className:M.sideNavHeaderTitleContainer,onClick:t.onClick,"aria-label":w,children:N}),S=s.jsx("div",{className:M.sideNavHeaderTitleContainer,tabIndex:0,onClick:t.onClick,onKeyDown:l,role:"button","aria-label":w,children:N}),x=s.jsx("div",{className:M.sideNavHeaderTitleContainer,children:N});function A(){return t.link?T:t.onClick?S:x}const W=g.useMemo(()=>t.tooltip??t.title??"",[t.tooltip,t.title]),C=s.jsx(ze,{label:W,isCollapsed:n,children:A()});return s.jsxs(it,{isCollapsed:n,isCompact:!!t.isCompact,appearance:a,dividerAppearance:o,children:[C,!t.isCompact&&s.jsx("div",{className:M.sideNavHeaderVersion,"data-hidden":!e,children:s.jsx("span",{children:t.version})})]})}an.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultHeader",props:{headerConfig:{required:!0,tsType:{name:"SideNavHeaderConfig"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},shouldShowTitle:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""}}};const ss=300,Y=g.forwardRef(({size:t="m",collapsible:n,children:e,header:a,footer:o,headerConfig:i,items:c,footerItems:l,isCollapsed:N,defaultCollapsed:w=!1,onCollapsedChange:T,onActiveItemChange:S,appearance:x="brand",contrast:A="high",activeItem:W},C)=>{const[E,F]=g.useState(N??w),[q,V]=g.useState(!0),[$,ee]=g.useState({}),[K,se]=g.useState(W),J=g.useCallback((f,p)=>{ee(pe=>({...pe,[f]:p}))},[]),_=g.useCallback(f=>f.id&&f.id in $?$[f.id]:f.open,[$]),H=g.useCallback(f=>{se(f),S==null||S(f)},[S]);g.useEffect(()=>{ee({})},[c]),g.useEffect(()=>{N!==void 0&&F(N)},[N]),g.useEffect(()=>{if(E)V(!1);else{const f=setTimeout(()=>{V(!0)},ss);return()=>clearTimeout(f)}},[E]);const L=()=>{const f=!E;N===void 0&&F(f),T==null||T(f)},ct=E?"arrow-double-right":"arrow-double-left",Q=$a(x,A),de=Hn(a,i),$e=kn(o,l,n),Je=Dn(a,i),Qe=jn(o,l,n);g.useEffect(()=>{const f=Bn({hasCustomHeader:!!a,hasHeaderConfig:!!i,hasCustomFooter:!!o,hasFooterItems:!!(l!=null&&l.length),collapsible:n});f&&console.warn(f)},[a,i,o,l,n]);function z(f){return f!=null&&f.length?s.jsx("ul",{children:f.map(p=>{var ve;return((ve=p.items)==null?void 0:ve.length)?s.jsx(ot,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:E,link:p.link,onClick:p.onClick,items:p.items||[],open:_(p),onMenuOpenChange:J,getMenuOpen:_,active:p.active,appearance:x,contrast:A,hasDivider:p.hasDivider},p.id):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(Ge,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,hasLeadingIcon:p.hasLeadingIcon,isCollapsed:E,link:p.href??p.link,onClick:p.onClick,appearance:x,active:p.active??(p.id===K&&!!K),onActiveItemChange:H})}),p.hasDivider&&s.jsx(ce,{appearance:Q})]},p.id)})}):null}function ue(){return Je?de&&i?s.jsx(an,{headerConfig:i,isCollapsed:E,shouldShowTitle:q,appearance:x,dividerAppearance:Q}):s.jsx(it,{isCollapsed:E,appearance:x,dividerAppearance:Q,children:a}):null}function Xe(){return Qe?$e?s.jsx(tn,{footerItemsContent:z(l),collapsible:n,isCollapsed:E,appearance:x,dividerAppearance:Q,collapseIcon:ct,onCollapse:L}):o??null:null}return s.jsx(vn,{ref:C,size:t,isCollapsed:E,appearance:x,contrast:A,header:ue(),body:s.jsx("div",{className:M.sideNavBody,children:z(c)}),footer:Xe(),children:e})});Y.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function nn(t,n){return t.some(e=>{var a;return e.id===n?!0:(a=e.items)!=null&&a.length?nn(e.items,n):!1})}function os(t,n){if(!t.id||!n)return t.onClick;const e=()=>{n(t.id)};return t.onClick?()=>{e(),t.onClick()}:e}function sn(t,n,e){return t.map(a=>{var T;const o=(T=a.items)!=null&&T.length?sn(a.items,n,e):void 0,i=!!(o!=null&&o.length),c=!i&&a.id===n,l=i&&a.id===n,N=a,w=i&&(a.id===n||nn(a.items,n));return{...a,active:c||l,open:w?!0:N.open,items:o,onClick:os(a,e)}})}function Ue(){return function(n,e){const[a,o]=g.useState(e.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...e.args,isCollapsed:a,onCollapsedChange:o}})})}}function is(t){return function(e,a){const[o,i]=g.useState(a.args.activeItem),c=t.map(l=>({...l,onClick:()=>i(l.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...a.args,items:c,activeItem:o}})})}}function on(t,n){return function(a,o){const[i,c]=g.useState(n),l=g.useMemo(()=>sn(t,i,c),[i,t]);return s.jsx(a,{args:{...o.args,items:l}})}}function rn(t){if(!t)return null;const n=Array.from(t.children);for(const i of n)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const e=t.querySelector("a");return e||Array.from(t.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function v(t,n,e){const a=e?t.querySelector(e):t;if(!a)return null;const o=e?P(a):P(t),i=o.queryByRole("link",{name:n});if(i)return i;const c=o.queryByText(n);if(c){const l=c.closest("li");return rn(l)}return null}function re(t,n){const e=t.querySelector('[class*="sideNavBody"]');if(!e)return null;const o=Array.from(e.querySelectorAll("li"))[n];return rn(o)}function te(t,n){return v(t,n,'[class*="sideNavFooterItems"]')}function Z(t,n="MA"){var i;return(i=P(t).getByText(n).parentElement)==null?void 0:i.parentElement}function rs(t,n){return t.querySelector(`#${n}`)}function cs(t){return t.dataset.active==="true"}function k(t){r(t).not.toBeNull(),r(t).toHaveFocus()}function D(t,n){const e=v(t,n);e&&r(e).not.toHaveFocus()}function j(t,n){const e=v(t,n);e&&r(e).toHaveAttribute("tabindex","-1")}function G(t,n){const e=v(t,n);e&&r(e).toHaveAttribute("tabindex","0")}async function cn(t,n,e){await yn(()=>{const a=t.getByRole("navigation"),o=rs(a,n);if(!o){r(e).toBe(!1);return}r(cs(o)).toBe(e)})}function O(t,n){return cn(t,n,!0)}function y(t,n){return cn(t,n,!1)}function I(t){const n=P(t),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function ne(t=200){return new Promise(n=>setTimeout(n,t))}const Os={title:"Composants/SideNav/SideNav",id:"SideNav",component:Y,tags:["autodocs"],decorators:[t=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(t,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:t=>s.jsx(Y,{size:t.size,collapsible:t.collapsible,headerConfig:t.headerConfig,appearance:t.appearance,contrast:t.contrast,items:t.items,footerItems:t.footerItems,isCollapsed:t.isCollapsed,activeItem:t.activeItem,onCollapsedChange:t.onCollapsedChange,children:le})},le=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),B={hasLeadingIcon:!0},U={size:"m",content:"number"},h=[{...B,id:"home",label:"Home",icon:"home"},{...B,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...B,id:"analytics",label:"Analytics",icon:"analytics"},{...B,id:"settings",label:"Settings",icon:"settings"},{...B,id:"profile",label:"Profile",icon:"user",link:"/profile"}],ls=[{...B,id:"home",label:"Home",icon:"home",href:"/"},{...B,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...B,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...B,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...B,id:"profile",label:"Profile",icon:"user",href:"/profile"}],R=h,ln=[h[0],{...h[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...h[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},h[4]],ds=[h[0],{...h[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},h[4]],us=[h[0],{...h[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...h[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},h[4]],Ye=[h[0],{...h[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...h[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},h[4]],ps=[{...h[0],badge:{...U,badgeType:"indicator",count:5}},{...h[1],badge:{...U,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...U,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...U,badgeType:"indicator",count:12}}]},{...h[3],items:[{label:"General"},{label:"Privacy",badge:{...U,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...U,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...U,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...h[4],badge:{...U,badgeType:"brand",count:8}}],rt=[{...B,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...B,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...B,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},vs="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",ms={...b},gs={...b,onClick:()=>{console.log("Header clicked")}},m={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:R}},me={args:{...m.args,collapsible:!0}},ge={args:{...m.args,items:ls},render:t=>{const n=()=>{const e=Nn();return g.useEffect(()=>{e("/")},[]),s.jsx(Y,{...t,activeItem:"home",onActiveItemChange:a=>console.log("Active item changed to:",a),children:s.jsx("div",{style:{padding:"2rem"},children:s.jsxs(bn,{children:[s.jsx(oe,{path:"/",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),s.jsx(oe,{path:"/dashboard",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),s.jsx(oe,{path:"/analytics",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),s.jsx(oe,{path:"/settings",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),s.jsx(oe,{path:"/profile",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return s.jsx(fn,{children:s.jsx(Cn,{linkComponent:hn,children:s.jsx(n,{})})})}},ye={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b}},fe={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:{...b,isCompact:!0}}},he={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:{...b,title:vs},size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(e.offsetWidth).toBe(Ja.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const a=e.querySelector("h1");r(a).not.toBeNull(),r(getComputedStyle(a).textOverflow).toBe("ellipsis"),r(a.scrollWidth).toBeGreaterThan(a.clientWidth)})}},pt="Supervision des processus et des opérations en temps réel",Ne={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:[{...B,id:"supervision",label:pt,icon:"dashboard"},...R.slice(1)],size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Side nav keeps the fixed M panel width with a long item label",async()=>{r(e.offsetWidth).toBe(Ja.m)}),await n("Nav item label is truncated with an ellipsis",async()=>{const a=v(e,pt);r(a).not.toBeNull();const o=a==null?void 0:a.querySelector('[class*="navItemLeft"] span:last-child');r(o).not.toBeNull(),r(getComputedStyle(o).textOverflow).toBe("ellipsis"),r(o.scrollWidth).toBeGreaterThan(o.clientWidth)})}},be={args:{...m.args,headerConfig:b,items:Ye,collapsible:!0}},xe={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:Ye,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Navigate through navigation when all menus are closed",async()=>{j(e,"Overview"),j(e,"Reports"),j(e,"Analytics"),j(e,"General"),j(e,"Privacy"),j(e,"Advanced");const a=v(e,"Home");a==null||a.focus(),k(a),await u.tab();const o=v(e,"Dashboard");k(o),r(o).toHaveAttribute("role","button"),r(o).toHaveAttribute("aria-expanded","false"),r(o==null?void 0:o.getAttribute("aria-controls")).toBeTruthy(),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics"),await u.tab();const i=v(e,"Settings");k(i),r(i).toHaveAttribute("role","button"),r(i).toHaveAttribute("aria-expanded","false"),D(e,"General"),D(e,"Privacy"),D(e,"Advanced"),await u.tab();const c=v(e,"Profile");k(c)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const a=v(e,"Dashboard");await u.click(a),r(a).toHaveAttribute("aria-expanded","true"),r(document.getElementById(a.getAttribute("aria-controls"))).not.toBeNull(),G(e,"Overview"),G(e,"Reports"),G(e,"Analytics"),await u.tab();const o=v(e,"Overview");k(o),await u.tab();const i=v(e,"Reports");k(i),await u.tab();const c=v(e,"Analytics");k(c)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const a=v(e,"Dashboard");await u.click(a),r(a).toHaveAttribute("aria-expanded","false"),j(e,"Overview"),j(e,"Reports"),j(e,"Analytics"),await u.tab();const o=v(e,"Settings");k(o),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const a=v(e,"Settings");await u.click(a),G(e,"General"),G(e,"Privacy"),G(e,"Advanced"),j(e,"Security"),j(e,"API Keys"),await u.tab();const o=v(e,"General");k(o),await u.tab();const i=v(e,"Privacy");k(i),await u.tab();const c=v(e,"Advanced");k(c),D(e,"Security"),D(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const a=v(e,"Advanced");await u.click(a),G(e,"Security"),G(e,"API Keys"),await u.tab();const o=v(e,"Security");k(o),await u.tab();const i=v(e,"API Keys");k(i)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const a=v(e,"Advanced");await u.click(a),j(e,"Security"),j(e,"API Keys"),await u.tab();const o=v(e,"Profile");k(o),D(e,"Security"),D(e,"API Keys")})}},Ce={tags:["!autodocs"],args:{...m.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const a=Z(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),r(a).not.toHaveAttribute("href"),r(a).not.toHaveAttribute("role","button"),r(a).not.toHaveAttribute("tabindex")})}},we={tags:["!autodocs"],args:{...m.args,headerConfig:ms,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is a link when link prop is provided",async()=>{const a=Z(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("A"),r(a).toHaveAttribute("href","/"),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const a=Z(e);a==null||a.focus(),r(a).toHaveFocus()})}},Te={tags:["!autodocs"],args:{...m.args,headerConfig:{...gs,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header is clickable button when onClick is provided",async()=>{const a=Z(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),await u.click(a),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const a=Z(e);a==null||a.focus(),r(a).toHaveFocus(),await u.keyboard(mn),await u.keyboard(gn)})}},Ae={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:R,collapsible:!0,isCollapsed:!0},decorators:[Ue()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header tooltip falls back to title when collapsed",async()=>{const a=Z(e);r(a).not.toBeNull(),a==null||a.focus(),await ne();const o=P(document.body).queryByRole("tooltip",{name:"My Application"});r(o).not.toBeNull(),r(o).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const a=re(e,0);r(a).not.toBeNull(),a==null||a.focus(),await ne();const o=P(document.body).queryByRole("tooltip",{name:"Home"});r(o).not.toBeNull(),r(o).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await u.tab(),await ne();const a=P(document.body).queryByRole("tooltip",{name:"Dashboard"});r(a).not.toBeNull(),r(a).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await u.tab(),await u.tab(),await u.tab(),await ne();const a=P(document.body).queryByRole("tooltip",{name:"Profile"});r(a).not.toBeNull(),r(a).toHaveTextContent("Profile")})}},Ee={tags:["!autodocs"],args:{...m.args,headerConfig:{...b,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Ue()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const a=Z(e);r(a).not.toBeNull(),a==null||a.focus(),await ne();const o=P(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(o).not.toBeNull(),r(o).toHaveTextContent("Custom header tooltip")})}},Ie={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:Ye,collapsible:!0,isCollapsed:!0},decorators:[Ue()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify tooltips appear when tabbing to menu items",async()=>{xn();const a=re(e,1);r(a).not.toBeNull(),await u.tab(),await u.tab(),await u.tab(),await ne();const o=P(document.body).queryByRole("tooltip",{name:"Dashboard"});r(o).not.toBeNull(),r(o).toHaveTextContent("Dashboard")})}},Se={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:us,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Overview nested item is active",async()=>{O(e,"overview"),y(e,"reports")})}},Be={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:ds,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{O(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")})}},He={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[on(ln,"security")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify only Security is active, not parent NavMenus",async()=>{O(e,"security"),y(e,"advanced"),y(e,"settings"),y(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const a=e.getByRole("navigation"),o=v(a,"API Keys");r(o).not.toBeNull(),await u.click(o),y(e,"security"),O(e,"api-keys"),y(e,"advanced"),y(e,"settings")})}},ke={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,collapsible:!0},decorators:[on(ln,"overview")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Overview leaf is active initially",async()=>{O(e,"overview"),y(e,"reports"),y(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const a=e.getByRole("navigation"),o=v(a,"Reports");r(o).not.toBeNull(),await u.click(o),y(e,"overview"),O(e,"reports"),y(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const a=e.getByRole("navigation"),o=v(a,"Settings");r(o).not.toBeNull(),await u.click(o);const i=v(a,"Advanced");r(i).not.toBeNull(),await u.click(i),y(e,"overview"),y(e,"reports"),y(e,"security"),y(e,"api-keys"),O(e,"advanced")})}},De={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:R,activeItem:"home",collapsible:!0},decorators:[is(R)],play:async({canvasElement:t,step:n})=>{const{canvas:e}=I(t);await n("Verify Home has active class initially",async()=>{O(e,"home"),y(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const a=e.getByRole("navigation"),o=v(a,"Dashboard");r(o).not.toBeNull(),await u.click(o),y(e,"home"),O(e,"dashboard"),y(e,"analytics"),y(e,"settings"),y(e,"profile")})}},je={args:{...m.args,headerConfig:b,items:R,footerItems:rt,collapsible:!0}},Me={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:R,footerItems:rt,collapsible:!1}},_e={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:Ye,footerItems:rt,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Verify footer items are rendered",async()=>{const a=te(e,"Settings");r(a).not.toBeNull();const o=te(e,"Help & Support");r(o).not.toBeNull();const i=te(e,"Account");r(i).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const a=te(e,"Account");await u.click(a);const o=te(e,"Preferences");r(o).not.toBeNull();const i=te(e,"Logout");r(i).not.toBeNull()})}},ie={tags:["skip-ci","!autodocs"],args:{...m.args,headerConfig:b,items:ps,collapsible:!0}},Fe={tags:["!autodocs"],args:{...ie.args,isCollapsed:!0},decorators:[Ue()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=I(t);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var i;const a=re(e,0);r(a).not.toBeNull();const o=a==null?void 0:a.querySelector('[data-size="xs"]');r(o).not.toBeNull(),r(o).toHaveAttribute("data-badge-type","indicator"),r((i=o==null?void 0:o.textContent)==null?void 0:i.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const a=re(e,0);r(a==null?void 0:a.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var i;const a=re(e,1);r(a).not.toBeNull();const o=a==null?void 0:a.querySelector('[data-size="xs"]');r(o).not.toBeNull(),r(o).toHaveAttribute("data-badge-type","indicator"),r((i=o==null?void 0:o.textContent)==null?void 0:i.trim()).toBe("")})}},ys=[h[0],{...h[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...h[2],hasDivider:!0},{...B,id:"reports",label:"Reports",icon:"info"},{...h[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},h[4]],qe={tags:["!autodocs"],args:{...m.args,headerConfig:b,items:ys,collapsible:!0}},dn=s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0 1rem",color:"white",fontWeight:600},children:[s.jsx("span",{style:{fontSize:"1.25rem"},children:"⬡"}),s.jsx("span",{children:"My App"})]}),un=s.jsx("div",{style:{padding:"1rem",color:"white",fontSize:"0.875rem"},children:"Custom footer content"}),Re={args:{items:R,appearance:"brand"},render:t=>s.jsx(Y,{...t,header:dn,children:le})},Pe={args:{items:R,appearance:"brand"},render:t=>s.jsx(Y,{...t,footer:un,children:le})},We={args:{items:R,appearance:"brand"},render:t=>s.jsx(Y,{...t,header:dn,footer:un,children:le})},Le={args:{items:R,appearance:"brand",collapsible:!1},render:t=>s.jsx(Y,{...t,children:le})};var vt,mt,gt;m.parameters={...m.parameters,docs:{...(vt=m.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(gt=(mt=m.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};var yt,ft,ht;me.parameters={...me.parameters,docs:{...(yt=me.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(ht=(ft=me.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var Nt,bt,xt;ge.parameters={...ge.parameters,docs:{...(Nt=ge.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(xt=(bt=ge.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var Ct,wt,Tt;ye.parameters={...ye.parameters,docs:{...(Ct=ye.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Tt=(wt=ye.parameters)==null?void 0:wt.docs)==null?void 0:Tt.source}}};var At,Et,It;fe.parameters={...fe.parameters,docs:{...(At=fe.parameters)==null?void 0:At.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(It=(Et=fe.parameters)==null?void 0:Et.docs)==null?void 0:It.source}}};var St,Bt,Ht;he.parameters={...he.parameters,docs:{...(St=he.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Ht=(Bt=he.parameters)==null?void 0:Bt.docs)==null?void 0:Ht.source}}};var kt,Dt,jt;Ne.parameters={...Ne.parameters,docs:{...(kt=Ne.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(jt=(Dt=Ne.parameters)==null?void 0:Dt.docs)==null?void 0:jt.source}}};var Mt,_t,Ft;be.parameters={...be.parameters,docs:{...(Mt=be.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Ft=(_t=be.parameters)==null?void 0:_t.docs)==null?void 0:Ft.source}}};var qt,Rt,Pt;xe.parameters={...xe.parameters,docs:{...(qt=xe.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Pt=(Rt=xe.parameters)==null?void 0:Rt.docs)==null?void 0:Pt.source}}};var Wt,Lt,Ot;Ce.parameters={...Ce.parameters,docs:{...(Wt=Ce.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Ot=(Lt=Ce.parameters)==null?void 0:Lt.docs)==null?void 0:Ot.source}}};var Vt,Kt,zt;we.parameters={...we.parameters,docs:{...(Vt=we.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(zt=(Kt=we.parameters)==null?void 0:Kt.docs)==null?void 0:zt.source}}};var Gt,Ut,Yt;Te.parameters={...Te.parameters,docs:{...(Gt=Te.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Yt=(Ut=Te.parameters)==null?void 0:Ut.docs)==null?void 0:Yt.source}}};var $t,Jt,Qt;Ae.parameters={...Ae.parameters,docs:{...($t=Ae.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=Ae.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,ea;Ee.parameters={...Ee.parameters,docs:{...(Xt=Ee.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(ea=(Zt=Ee.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,na;Ie.parameters={...Ie.parameters,docs:{...(ta=Ie.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(na=(aa=Ie.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var sa,oa,ia;Se.parameters={...Se.parameters,docs:{...(sa=Se.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ia=(oa=Se.parameters)==null?void 0:oa.docs)==null?void 0:ia.source}}};var ra,ca,la;Be.parameters={...Be.parameters,docs:{...(ra=Be.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(la=(ca=Be.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var da,ua,pa;He.parameters={...He.parameters,docs:{...(da=He.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(pa=(ua=He.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var va,ma,ga;ke.parameters={...ke.parameters,docs:{...(va=ke.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(ga=(ma=ke.parameters)==null?void 0:ma.docs)==null?void 0:ga.source}}};var ya,fa,ha;De.parameters={...De.parameters,docs:{...(ya=De.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(ha=(fa=De.parameters)==null?void 0:fa.docs)==null?void 0:ha.source}}};var Na,ba,xa;je.parameters={...je.parameters,docs:{...(Na=je.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(xa=(ba=je.parameters)==null?void 0:ba.docs)==null?void 0:xa.source}}};var Ca,wa,Ta;Me.parameters={...Me.parameters,docs:{...(Ca=Me.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Ta=(wa=Me.parameters)==null?void 0:wa.docs)==null?void 0:Ta.source}}};var Aa,Ea,Ia;_e.parameters={..._e.parameters,docs:{...(Aa=_e.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ia=(Ea=_e.parameters)==null?void 0:Ea.docs)==null?void 0:Ia.source}}};var Sa,Ba,Ha;ie.parameters={...ie.parameters,docs:{...(Sa=ie.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Ha=(Ba=ie.parameters)==null?void 0:Ba.docs)==null?void 0:Ha.source}}};var ka,Da,ja;Fe.parameters={...Fe.parameters,docs:{...(ka=Fe.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(ja=(Da=Fe.parameters)==null?void 0:Da.docs)==null?void 0:ja.source}}};var Ma,_a,Fa;qe.parameters={...qe.parameters,docs:{...(Ma=qe.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Fa=(_a=qe.parameters)==null?void 0:_a.docs)==null?void 0:Fa.source}}};var qa,Ra,Pa;Re.parameters={...Re.parameters,docs:{...(qa=Re.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent}>
      {PageContent}
    </SideNav>
}`,...(Pa=(Ra=Re.parameters)==null?void 0:Ra.docs)==null?void 0:Pa.source}}};var Wa,La,Oa;Pe.parameters={...Pe.parameters,docs:{...(Wa=Pe.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(Oa=(La=Pe.parameters)==null?void 0:La.docs)==null?void 0:Oa.source}}};var Va,Ka,za;We.parameters={...We.parameters,docs:{...(Va=We.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(za=(Ka=We.parameters)==null?void 0:Ka.docs)==null?void 0:za.source}}};var Ga,Ua,Ya;Le.parameters={...Le.parameters,docs:{...(Ga=Le.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand",
    collapsible: false
  },
  render: args => <SideNav {...args}>{PageContent}</SideNav>
}`,...(Ya=(Ua=Le.parameters)==null?void 0:Ua.docs)==null?void 0:Ya.source}}};const Vs=["Default","Collapsible","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithLongItemLabel","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers","WithCustomHeader","WithCustomFooter","WithCustomHeaderAndFooter","WithoutHeaderOrFooter"];export{De as ActiveItemState,Ee as CollapsedHeaderTooltipCustom,Ae as CollapsedTooltip,Ie as CollapsedTooltipWithNested,Fe as CollapsedWithBadges,me as Collapsible,m as Default,Me as FooterItemsOnly,_e as FooterItemsWithNested,Ce as HeaderClickability,fe as HeaderCompact,we as HeaderWithLink,he as HeaderWithLongTitle,Te as HeaderWithOnClick,ye as HeaderWithVersion,xe as KeyboardNavigation,ke as NestedItemActiveOnClick,Se as NestedItemActivePreselected,He as NestedNavMenuActiveOnClick,Be as NestedNavMenuActivePreselected,ie as WithBadges,Pe as WithCustomFooter,Re as WithCustomHeader,We as WithCustomHeaderAndFooter,ge as WithCustomRouter,qe as WithDividers,je as WithFooterItems,Ne as WithLongItemLabel,be as WithNestedMenus,Le as WithoutHeaderOrFooter,Vs as __namedExportsOrder,Os as default};
