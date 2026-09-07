import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{g as Za,B as hn,s as en}from"./BaseSideNav-CY7Qgixs.js";import{T as tn,a as Nn}from"./keyboard-test.constants-By8W48aj.js";import{w as R,e as r,a as an,u}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{B as bn,N as xn,b as wn,R as Cn,a as oe}from"./chunk-KS7C4IRE-kOmPZtMB.js";import{f as Tn}from"./testing.utils-r13wRTL2.js";import{N as En}from"./NavigationProvider-Bs4LKj9F.js";import{D as ce}from"./Divider-BVZUrQ0d.js";import{s as An,I as et,B as at}from"./Badge-DkJhvK8e.js";import{u as nt}from"./NavigationContext-D2CUoNWC.js";import{I as st}from"./Icon-DgLH6pPJ.js";import{T as Bn}from"./Tooltip-IwW420ZV.js";import{S as Ke,E as ze,c as ut,b as In,d as Sn}from"./keyboard.constants-BverKK8B.js";import{u as nn}from"./useActiveKeyboard-DaOmFJe_.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const pt={HEADER_CONFIG_AND_CUSTOM:"SideNav: Both headerConfig and a custom header were provided. The custom header takes precedence.",FOOTER_ITEMS_AND_CUSTOM:"SideNav: Both footerItems (or collapsible default footer) and a custom footer were provided. The custom footer takes precedence."},Hn=[{condition:t=>t.hasCustomHeader&&t.hasHeaderConfig,issue:pt.HEADER_CONFIG_AND_CUSTOM},{condition:t=>t.hasCustomFooter&&(t.hasFooterItems||!!t.collapsible),issue:pt.FOOTER_ITEMS_AND_CUSTOM}];function kn(t){var e;return((e=Hn.find(({condition:a})=>a(t)))==null?void 0:e.issue)??null}function jn(t,n){return!t&&!!n}function Dn(t,n,e){return!t&&!!(n!=null&&n.length||e)}function _n(t,n){return!!(t||n)}function Rn(t,n,e){return!!(t||n!=null&&n.length||e)}function sn(t=!1,n=!1){return t?et.s:n?et.l:et.m}function Ge(t){return t?An({showBadge:!0,badgeContent:t.content??"number",badgeCount:t.count,badgeIcon:t.icon}):!1}function Mn(t){return t.badgeType??"indicator"}const Fn="_navItemContainer_l1d46_1",qn="_navItemLeft_l1d46_47",Pn="_navItem_l1d46_1",Wn="_navItemRight_l1d46_64",W={navItemContainer:Fn,navItemLeft:qn,navItem:Pn,navItemRight:Wn},On="_navMenuContainer_ycjt5_1",Ln="_navMenu_ycjt5_1",Vn="_menuContentLeft_ycjt5_31",Kn="_menuContentRight_ycjt5_36",zn="_menuIcon_ycjt5_95",Gn="_nestedMenu_ycjt5_103",Un="_icon_ycjt5_119",J={navMenuContainer:On,navMenu:Ln,menuContentLeft:Vn,menuContentRight:Kn,menuIcon:zn,nestedMenu:Gn,icon:Un};function ot({link:t,label:n,tabIndex:e,onKeyDown:a,onFocus:o,onBlur:i,onClick:d,children:l,styleType:y="item"}){const w=nt(),x=y==="menu"?J:W,b={className:y==="menu"?x.navMenu:x.navItem,tabIndex:e,"aria-label":n,...o&&{onFocus:o},...i&&{onBlur:i},...d&&{onClick:d},...a&&{onKeyDown:a}};return t?s.jsx(w,{href:t,...b,children:l}):s.jsx("span",{...b,children:l})}ot.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function it({icon:t,hasLeadingIcon:n=!0,label:e,isCollapsed:a,isNested:o,styleType:i="item",badge:d}){const l=sn(o,a),y=i==="menu"?J:W;function w(){if(!n||!t)return null;const x=s.jsx(st,{name:t,className:y.icon,size:l});return a&&d&&Ge(d)?s.jsx(at,{badgeType:Mn(d),size:"xs",content:"empty",children:x}):x}return s.jsxs(s.Fragment,{children:[w(),a?null:s.jsx("span",{children:e})]})}it.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function le({label:t,isCollapsed:n,children:e}){return n&&t?s.jsx(Bn,{label:t,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}le.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function on(t){return t===!1?-1:0}function rn({onEnterOrSpace:t,onEscape:n,includeArrowKeys:e=!1,includeEscape:a=!1}={}){const o=m.useCallback(l=>{[Ke,ze].includes(l.key)&&(l.preventDefault(),t==null||t()),l.key===ut&&a&&(l.preventDefault(),n==null||n())},[t,n,a]),i=[Ke,ze,...a?[ut]:[],...e?[In,Sn]:[]],{onKeyDown:d}=nn({onKeyDown:o},{interactiveKeyCodes:i});return{onKeyDown:d}}const rt=m.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:o,isCollapsed:i,link:d,href:l,isNested:y,parentMenuOpen:w,appearance:x="brand",active:k,badge:b,onActiveItemChange:S,...F},T)=>{const L=nt(),C=m.useRef(null),_=m.useRef(null),Y=!!(l||d),{onKeyDown:X}=rn({onEnterOrSpace:a});function $(){var A,P;(A=C.current)==null||A.setAttribute("data-focused","true"),(P=_.current)==null||P.setAttribute("data-focused","true")}function V(){var A,P;(A=C.current)==null||A.removeAttribute("data-focused"),(P=_.current)==null||P.removeAttribute("data-focused")}const Z=on(w),K=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:W.navItemLeft,children:s.jsx(it,{icon:n,hasLeadingIcon:e,label:o,isCollapsed:i,isNested:y,styleType:"item",badge:b})}),s.jsx("div",{className:W.navItemRight,children:!i&&b&&Ge(b)&&s.jsx(at,{badgeType:b.badgeType,size:b.size,content:b.content,count:b.count})})]}),q=Y?s.jsx(L,{id:t,"aria-label":o,className:W.navItemContainer,"data-collapsed":i,"data-appearance":x,"data-nested":y,"data-active":k,href:l??d,to:l??d,onClick:()=>S==null?void 0:S(t),onBlur:V,ref:_,children:K}):s.jsx("div",{id:t,className:W.navItemContainer,"data-collapsed":i,"data-appearance":x,"data-nested":y,"data-active":k,onClick:a,ref:A=>{C.current=A,typeof T=="function"?T(A):T&&"current"in T&&(T.current=A)},...F,children:s.jsx(ot,{label:o,tabIndex:Z,onKeyDown:X,onFocus:$,onBlur:V,styleType:"item",children:K})});return s.jsx(le,{label:o,isCollapsed:i,children:q})});rt.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const ct=m.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:o,isCollapsed:i,link:d,items:l=[],open:y,onOpenChange:w,hasMenuIcon:x=!0,isNested:k,parentMenuOpen:b,appearance:S="brand",contrast:F="high",badge:T,hasDivider:L,active:C,onMenuOpenChange:_,getMenuOpen:Y,...X},$)=>{const V=Za(S,F),[Z,K]=m.useState(!1),q=y??Z,A=y!==void 0;function P(){const c=!q,te=t||o;if(a&&a(),te&&_){_(te,c);return}A?w==null||w(c):K(c)}function $e(){if(!q)return;const c=t||o;if(c&&_){_(c,!1);return}A?w==null||w(!1):K(!1)}const{onKeyDown:Je}=rn({onEnterOrSpace:P,onEscape:$e,includeArrowKeys:!0,includeEscape:!0}),ee=l.length,ue=!i&&ee,pe=q,Qe=on(b),ve=ue&&x?s.jsx(st,{name:"arrow-chevron-right",className:J.menuIcon,"data-open":q}):null,me=!i&&(Ge(T)||!!ve),Xe=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:J.menuContentLeft,children:s.jsx(it,{icon:n,hasLeadingIcon:e,label:o,isCollapsed:i,isNested:k,styleType:"menu",badge:T})}),me&&s.jsxs("div",{className:J.menuContentRight,children:[T&&Ge(T)&&s.jsx(at,{badgeType:T.badgeType,size:T.size,content:T.content,count:T.count}),ve]})]}),Ze=s.jsxs("li",{id:t,className:J.navMenuContainer,"data-collapsed":i,"data-appearance":S,"data-nested":k,"data-open":q,"data-active":C,ref:$,...X,children:[s.jsx(ot,{link:d,label:o,tabIndex:Qe,onClick:P,onKeyDown:Je,styleType:"menu",children:Xe}),ue&&s.jsx("ul",{className:J.nestedMenu,"data-open":q,children:l.map(c=>{var se;return(se=c.items)!=null&&se.length?s.jsx(ct,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:i,link:c.link,onClick:c.onClick,items:c.items||[],open:Y?Y(c):c.open,onOpenChange:c.onOpenChange,onMenuOpenChange:_,getMenuOpen:Y,active:c.active,hasMenuIcon:x,hasDivider:c.hasDivider,isNested:!0,parentMenuOpen:pe,appearance:S,contrast:F,badge:c.badge},c.id||c.label):s.jsxs(m.Fragment,{children:[s.jsx("li",{children:s.jsx(rt,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:i,link:c.link,onClick:c.onClick,isNested:!0,parentMenuOpen:pe,appearance:S,active:c.active,badge:c.badge})}),c.hasDivider&&s.jsx(ce,{appearance:V})]},c.id||c.label)})})]}),h=s.jsx(le,{label:o,isCollapsed:i,children:Ze});return s.jsxs(s.Fragment,{children:[h,L&&s.jsx(ce,{appearance:V})]})});ct.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Yn="_sideNavHeaderContainer_11tcj_1",$n="_sideNavHeader_11tcj_1",Jn="_sideNavHeaderTitleContainer_11tcj_38",Qn="_sideNavHeaderTitle_11tcj_38",Xn="_sideNavHeaderIdentifier_11tcj_47",Zn="_sideNavHeaderVersion_11tcj_119",es="_sideNavBody_11tcj_148",ts="_sideNavFooterContainer_11tcj_172",as="_sideNavFooter_11tcj_172",ns="_sideNavFooterItems_11tcj_185",ss="_collapsibleSection_11tcj_202",os="_collapseButton_11tcj_217",H={sideNavHeaderContainer:Yn,sideNavHeader:$n,sideNavHeaderTitleContainer:Jn,sideNavHeaderTitle:Qn,sideNavHeaderIdentifier:Xn,sideNavHeaderVersion:Zn,sideNavBody:es,sideNavFooterContainer:ts,sideNavFooter:as,sideNavFooterItems:ns,collapsibleSection:ss,collapseButton:os};function cn({footerItemsContent:t,collapsible:n,isCollapsed:e,appearance:a,dividerAppearance:o,collapseIcon:i,onCollapse:d}){const l=e?"Ouvrir le menu":"Réduire le menu",y=sn(!1,e);return s.jsxs("div",{className:H.sideNavFooterContainer,children:[t&&s.jsx("div",{className:H.sideNavFooterItems,children:t}),s.jsx(ce,{appearance:o}),s.jsx("div",{className:H.sideNavFooter,children:n&&s.jsx("div",{className:H.collapsibleSection,children:s.jsx(le,{label:l,isCollapsed:e,children:s.jsx("button",{type:"button",id:"collapse-button",className:`${W.navItemContainer} ${H.collapseButton}`,"data-collapsed":e,"data-appearance":a,"aria-label":e?l:void 0,onClick:d,children:s.jsx("span",{className:W.navItem,children:s.jsxs("div",{className:W.navItemLeft,children:[s.jsx(st,{name:i,className:W.icon,size:y}),!e&&s.jsx("span",{children:l})]})})})})})})]})}cn.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultFooter",props:{footerItemsContent:{required:!0,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},collapseIcon:{required:!0,tsType:{name:"string"},description:""},onCollapse:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function lt({isCollapsed:t,appearance:n,dividerAppearance:e,isCompact:a=!1,children:o}){return s.jsxs("div",{className:H.sideNavHeaderContainer,"data-compact":a,"data-collapsed":t,children:[s.jsx("div",{className:H.sideNavHeader,"data-collapsed":t,"data-appearance":n,"data-compact":a,children:o}),s.jsx(ce,{appearance:e})]})}lt.__docgenInfo={description:"",methods:[],displayName:"SideNavHeaderContainer",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function ln({headerConfig:t,isCollapsed:n,shouldShowTitle:e,appearance:a,dividerAppearance:o}){const i=nt(),d=L=>{var C;[Ke,ze].includes(L.key)&&(L.preventDefault(),(C=t.onClick)==null||C.call(t))},{onKeyDown:l}=nn({onKeyDown:d},{interactiveKeyCodes:[Ke,ze]}),y=s.jsxs("div",{className:H.sideNavHeaderTitle,children:[s.jsx("div",{className:H.sideNavHeaderIdentifier,children:t.identifier}),!n&&s.jsx("h1",{children:t.title})]}),w=t.ariaLabel,x=s.jsx(i,{href:t.link??"",className:H.sideNavHeaderTitleContainer,onClick:t.onClick,"aria-label":w,children:y}),k=s.jsx("div",{className:H.sideNavHeaderTitleContainer,tabIndex:0,onClick:t.onClick,onKeyDown:l,role:"button","aria-label":w,children:y}),b=s.jsx("div",{className:H.sideNavHeaderTitleContainer,children:y});function S(){return t.link?x:t.onClick?k:b}const F=m.useMemo(()=>t.tooltip??t.title??"",[t.tooltip,t.title]),T=s.jsx(le,{label:F,isCollapsed:n,children:S()});return s.jsxs(lt,{isCollapsed:n,isCompact:!!t.isCompact,appearance:a,dividerAppearance:o,children:[T,!t.isCompact&&s.jsx("div",{className:H.sideNavHeaderVersion,"data-hidden":!e,children:s.jsx("span",{children:t.version})})]})}ln.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultHeader",props:{headerConfig:{required:!0,tsType:{name:"SideNavHeaderConfig"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},shouldShowTitle:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""}}};const is=300,U=m.forwardRef(({size:t="m",collapsible:n,children:e,header:a,footer:o,headerConfig:i,items:d,footerItems:l,isCollapsed:y,defaultCollapsed:w=!1,onCollapsedChange:x,onActiveItemChange:k,appearance:b="brand",contrast:S="high",activeItem:F,"aria-label":T},L)=>{const[C,_]=m.useState(y??w),[Y,X]=m.useState(!0),[$,V]=m.useState({}),[Z,K]=m.useState(F),q=m.useCallback((h,c)=>{V(te=>({...te,[h]:c}))},[]),A=m.useCallback(h=>{const c=h.id??h.label;return c&&c in $?$[c]:h.open},[$]),P=m.useCallback(h=>{K(h),k==null||k(h)},[k]);m.useEffect(()=>{K(F)},[F]),m.useEffect(()=>{V({})},[d]),m.useEffect(()=>{y!==void 0&&_(y)},[y]),m.useEffect(()=>{if(C)X(!1);else{const h=setTimeout(()=>{X(!0)},is);return()=>clearTimeout(h)}},[C]);const $e=()=>{const h=!C;y===void 0&&_(h),x==null||x(h)},Je=C?"arrow-double-right":"arrow-double-left",ee=Za(b,S),ue=jn(a,i),pe=Dn(o,l,n),Qe=_n(a,i),ve=Rn(o,l,n);m.useEffect(()=>{const h=kn({hasCustomHeader:!!a,hasHeaderConfig:!!i,hasCustomFooter:!!o,hasFooterItems:!!(l!=null&&l.length),collapsible:n});h&&console.warn(h)},[a,i,o,l,n]);function me(h){return h!=null&&h.length?s.jsx("ul",{children:h.map(c=>{var se;return((se=c.items)==null?void 0:se.length)?s.jsx(ct,{id:c.id,badge:c.badge,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:C,link:c.link,onClick:c.onClick,items:c.items||[],open:A(c),onMenuOpenChange:q,getMenuOpen:A,active:c.active,appearance:b,contrast:S,hasDivider:c.hasDivider},c.id):s.jsxs(m.Fragment,{children:[s.jsx("li",{children:s.jsx(rt,{id:c.id,badge:c.badge,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:C,link:c.href??c.link,onClick:c.onClick,appearance:b,active:c.active??(c.id===Z&&!!Z),onActiveItemChange:P})}),c.hasDivider&&s.jsx(ce,{appearance:ee})]},c.id)})}):null}function Xe(){return Qe?ue&&i?s.jsx(ln,{headerConfig:i,isCollapsed:C,shouldShowTitle:Y,appearance:b,dividerAppearance:ee}):s.jsx(lt,{isCollapsed:C,appearance:b,dividerAppearance:ee,children:a}):null}function Ze(){return ve?pe?s.jsx(cn,{footerItemsContent:me(l),collapsible:n,isCollapsed:C,appearance:b,dividerAppearance:ee,collapseIcon:Je,onCollapse:$e}):o??null:null}return s.jsx(hn,{ref:L,size:t,isCollapsed:C,appearance:b,contrast:S,"aria-label":T,header:Xe(),body:s.jsx("div",{className:H.sideNavBody,children:me(d)}),footer:Ze(),children:e})});U.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function dn(t,n){return t.some(e=>{var a;return e.id===n?!0:(a=e.items)!=null&&a.length?dn(e.items,n):!1})}function rs(t,n){if(!t.id||!n)return t.onClick;const e=()=>{n(t.id)};return t.onClick?()=>{e(),t.onClick()}:e}function un(t,n,e){return t.map(a=>{var x;const o=(x=a.items)!=null&&x.length?un(a.items,n,e):void 0,i=!!(o!=null&&o.length),d=!i&&a.id===n,l=i&&a.id===n,y=a,w=i&&(a.id===n||dn(a.items,n));return{...a,active:d||l,open:w?!0:y.open,items:o,onClick:rs(a,e)}})}function Ue(){return function(n,e){const[a,o]=m.useState(e.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...e.args,isCollapsed:a,onCollapsedChange:o}})})}}function cs(t){return function(e,a){const[o,i]=m.useState(a.args.activeItem),d=t.map(l=>({...l,onClick:()=>i(l.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...a.args,items:d,activeItem:o}})})}}function pn(t,n){return function(a,o){const[i,d]=m.useState(n),l=m.useMemo(()=>un(t,i,d),[i,t]);return s.jsx(a,{args:{...o.args,items:l}})}}function vn(t){if(!t)return null;const n=Array.from(t.children);for(const i of n)if(i.tagName==="A"||i.tagName==="SPAN"&&i.hasAttribute("tabindex"))return i;const e=t.querySelector("a");return e||Array.from(t.querySelectorAll("span")).find(i=>i.hasAttribute("tabindex"))}function p(t,n,e){const a=e?t.querySelector(e):t;if(!a)return null;const o=e?R(a):R(t),i=o.queryByRole("link",{name:n});if(i)return i;const d=o.queryByText(n);if(d){const l=d.closest("li");return vn(l)}return null}function re(t,n){const e=t.querySelector('[class*="sideNavBody"]');if(!e)return null;const o=Array.from(e.querySelectorAll("li"))[n];return vn(o)}function ae(t,n){return p(t,n,'[class*="sideNavFooterItems"]')}function Q(t,n="MA"){var i;return(i=R(t).getByText(n).parentElement)==null?void 0:i.parentElement}function ls(t,n){return t.querySelector(`#${n}`)}function tt(t){return t.querySelector("#collapse-button")}function ds(t){return t.dataset.active==="true"}function B(t){r(t).not.toBeNull(),r(t).toHaveFocus()}function j(t,n){const e=p(t,n);e&&r(e).not.toHaveFocus()}function D(t,n){const e=p(t,n);e&&r(e).toHaveAttribute("tabindex","-1")}async function z(t,n){await an(()=>{const e=p(t,n);r(e).not.toBeNull(),r(e).toHaveAttribute("tabindex","0")})}async function mn(t,n,e){await an(()=>{const a=t.getByRole("navigation"),o=ls(a,n);if(!o){r(e).toBe(!1);return}r(ds(o)).toBe(e)})}function O(t,n){return mn(t,n,!0)}function g(t,n){return mn(t,n,!1)}function E(t){const n=R(t),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function ne(t=200){return new Promise(n=>setTimeout(n,t))}const Ls={title:"Composants/SideNav/SideNav",id:"SideNav",component:U,tags:["autodocs"],decorators:[t=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(t,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:t=>s.jsx(U,{size:t.size,collapsible:t.collapsible,headerConfig:t.headerConfig,appearance:t.appearance,contrast:t.contrast,items:t.items,footerItems:t.footerItems,isCollapsed:t.isCollapsed,activeItem:t.activeItem,onCollapsedChange:t.onCollapsedChange,children:de})},de=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),I={hasLeadingIcon:!0},G={size:"m",content:"number"},f=[{...I,id:"home",label:"Home",icon:"home"},{...I,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...I,id:"analytics",label:"Analytics",icon:"analytics"},{...I,id:"settings",label:"Settings",icon:"settings"},{...I,id:"profile",label:"Profile",icon:"user",link:"/profile"}],us=[{...I,id:"home",label:"Home",icon:"home",href:"/"},{...I,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...I,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...I,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...I,id:"profile",label:"Profile",icon:"user",href:"/profile"}],M=f,gn=[f[0],{...f[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...f[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},f[4]],ps=[f[0],{...f[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},f[4]],vs=[f[0],{...f[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...f[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},f[4]],Ye=[f[0],{...f[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...f[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},f[4]],ms=[{...f[0],badge:{...G,badgeType:"indicator",count:5}},{...f[1],badge:{...G,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...G,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...G,badgeType:"indicator",count:12}}]},{...f[3],items:[{label:"General"},{label:"Privacy",badge:{...G,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...G,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...G,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...f[4],badge:{...G,badgeType:"brand",count:8}}],dt=[{...I,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...I,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...I,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],N={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},gs="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",ys={...N},fs={...N,onClick:()=>{console.log("Header clicked")}},v={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:M}},ge={args:{...v.args,collapsible:!0}},ye={args:{...v.args,items:us},render:t=>{const n=()=>{const e=wn();return m.useEffect(()=>{e("/")},[]),s.jsx(U,{...t,activeItem:"home",onActiveItemChange:a=>console.log("Active item changed to:",a),children:s.jsx("div",{style:{padding:"2rem"},children:s.jsxs(Cn,{children:[s.jsx(oe,{path:"/",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),s.jsx(oe,{path:"/dashboard",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),s.jsx(oe,{path:"/analytics",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),s.jsx(oe,{path:"/settings",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),s.jsx(oe,{path:"/profile",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return s.jsx(bn,{children:s.jsx(En,{linkComponent:xn,children:s.jsx(n,{})})})}},fe={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:N}},he={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:{...N,isCompact:!0}}},Ne={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:{...N,title:gs},size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(e.offsetWidth).toBe(en.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const a=e.querySelector("h1");r(a).not.toBeNull(),r(getComputedStyle(a).textOverflow).toBe("ellipsis"),r(a.scrollWidth).toBeGreaterThan(a.clientWidth)})}},vt="Supervision des processus et des opérations en temps réel",be={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:N,items:[{...I,id:"supervision",label:vt,icon:"dashboard"},...M.slice(1)],size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Side nav keeps the fixed M panel width with a long item label",async()=>{r(e.offsetWidth).toBe(en.m)}),await n("Nav item label is truncated with an ellipsis",async()=>{const a=p(e,vt);r(a).not.toBeNull();const o=a==null?void 0:a.querySelector('[class*="navItemLeft"] span:last-child');r(o).not.toBeNull(),r(getComputedStyle(o).textOverflow).toBe("ellipsis"),r(o.scrollWidth).toBeGreaterThan(o.clientWidth)})}},xe={args:{...v.args,headerConfig:N,items:Ye,collapsible:!0}},we={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:N,items:Ye,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Navigate through navigation when all menus are closed",async()=>{D(e,"Overview"),D(e,"Reports"),D(e,"Analytics"),D(e,"General"),D(e,"Privacy"),D(e,"Advanced");const a=p(e,"Home");a==null||a.focus(),B(a),await u.tab();const o=p(e,"Dashboard");B(o),j(e,"Overview"),j(e,"Reports"),j(e,"Analytics"),await u.tab();const i=p(e,"Settings");B(i),j(e,"General"),j(e,"Privacy"),j(e,"Advanced"),await u.tab();const d=p(e,"Profile");B(d)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const a=p(e,"Dashboard");await u.click(a),z(e,"Overview"),z(e,"Reports"),z(e,"Analytics"),await u.tab();const o=p(e,"Overview");B(o),await u.tab();const i=p(e,"Reports");B(i),await u.tab();const d=p(e,"Analytics");B(d)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const a=p(e,"Dashboard");await u.click(a),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics"),await u.tab();const o=p(e,"Settings");B(o),j(e,"Overview"),j(e,"Reports"),j(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const a=p(e,"Settings");await u.click(a),await z(e,"General"),await z(e,"Privacy"),await z(e,"Advanced"),D(e,"Security"),D(e,"API Keys"),await u.tab();const o=p(e,"General");B(o),await u.tab();const i=p(e,"Privacy");B(i),await u.tab();const d=p(e,"Advanced");B(d),j(e,"Security"),j(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const a=p(e,"Advanced");await u.click(a),z(e,"Security"),z(e,"API Keys"),await u.tab();const o=p(e,"Security");B(o),await u.tab();const i=p(e,"API Keys");B(i)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const a=p(e,"Advanced");await u.click(a),D(e,"Security"),D(e,"API Keys"),await u.tab();const o=p(e,"Profile");B(o),j(e,"Security"),j(e,"API Keys")})}},Ce={tags:["!autodocs"],args:{...v.args,headerConfig:N,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify collapse control is a native button with a single accessible name",async()=>{const a=tt(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("BUTTON"),r(a).toHaveAttribute("type","button"),r(a).toHaveTextContent("Réduire le menu"),r(a).not.toHaveAttribute("aria-label"),r(R(e).getByRole("button",{name:"Réduire le menu"})).toBe(a)}),await n("Verify collapse button can be focused and activated with keyboard",async()=>{const a=tt(e);a==null||a.focus(),B(a),await u.keyboard(tn);const o=tt(e);r(o).toHaveAttribute("aria-label","Ouvrir le menu"),r(o).not.toHaveTextContent("Réduire le menu"),r(R(e).getByRole("button",{name:"Ouvrir le menu"})).toBe(o)})}},Te={tags:["!autodocs"],args:{...v.args,headerConfig:{...N,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const a=Q(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),r(a).not.toHaveAttribute("href"),r(a).not.toHaveAttribute("role","button"),r(a).not.toHaveAttribute("tabindex")})}},Ee={tags:["!autodocs"],args:{...v.args,headerConfig:ys,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header is a link when link prop is provided",async()=>{const a=Q(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("A"),r(a).toHaveAttribute("href","/"),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const a=Q(e);a==null||a.focus(),r(a).toHaveFocus()})}},Ae={tags:["!autodocs"],args:{...v.args,headerConfig:{...fs,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header is clickable button when onClick is provided",async()=>{const a=Q(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),await u.click(a),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const a=Q(e);a==null||a.focus(),r(a).toHaveFocus(),await u.keyboard(tn),await u.keyboard(Nn)})}},Be={tags:["!autodocs"],args:{...v.args,headerConfig:N,items:M,collapsible:!0,isCollapsed:!0},decorators:[Ue()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header tooltip falls back to title when collapsed",async()=>{const a=Q(e);r(a).not.toBeNull(),a==null||a.focus(),await ne();const o=R(document.body).queryByRole("tooltip",{name:"My Application"});r(o).not.toBeNull(),r(o).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const a=re(e,0);r(a).not.toBeNull(),a==null||a.focus(),await ne();const o=R(document.body).queryByRole("tooltip",{name:"Home"});r(o).not.toBeNull(),r(o).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await u.tab(),await ne();const a=R(document.body).queryByRole("tooltip",{name:"Dashboard"});r(a).not.toBeNull(),r(a).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await u.tab(),await u.tab(),await u.tab(),await ne();const a=R(document.body).queryByRole("tooltip",{name:"Profile"});r(a).not.toBeNull(),r(a).toHaveTextContent("Profile")})}},Ie={tags:["!autodocs"],args:{...v.args,headerConfig:{...N,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Ue()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const a=Q(e);r(a).not.toBeNull(),a==null||a.focus(),await ne();const o=R(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(o).not.toBeNull(),r(o).toHaveTextContent("Custom header tooltip")})}},Se={tags:["!autodocs"],args:{...v.args,headerConfig:N,items:Ye,collapsible:!0,isCollapsed:!0},decorators:[Ue()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify tooltips appear when tabbing to menu items",async()=>{Tn();const a=re(e,1);r(a).not.toBeNull(),await u.tab(),await u.tab(),await u.tab(),await ne();const o=R(document.body).queryByRole("tooltip",{name:"Dashboard"});r(o).not.toBeNull(),r(o).toHaveTextContent("Dashboard")})}},He={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:N,items:vs,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify Overview nested item is active",async()=>{O(e,"overview"),g(e,"reports")})}},ke={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:N,items:ps,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{O(e,"security"),g(e,"advanced"),g(e,"settings"),g(e,"api-keys")})}},je={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:N,collapsible:!0},decorators:[pn(gn,"security")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify only Security is active, not parent NavMenus",async()=>{O(e,"security"),g(e,"advanced"),g(e,"settings"),g(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const a=e.getByRole("navigation"),o=p(a,"API Keys");r(o).not.toBeNull(),await u.click(o),g(e,"security"),O(e,"api-keys"),g(e,"advanced"),g(e,"settings")})}},De={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:N,collapsible:!0},decorators:[pn(gn,"overview")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify Overview leaf is active initially",async()=>{O(e,"overview"),g(e,"reports"),g(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const a=e.getByRole("navigation"),o=p(a,"Reports");r(o).not.toBeNull(),await u.click(o),g(e,"overview"),O(e,"reports"),g(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const a=e.getByRole("navigation"),o=p(a,"Settings");r(o).not.toBeNull(),await u.click(o);const i=p(a,"Advanced");r(i).not.toBeNull(),await u.click(i),g(e,"overview"),g(e,"reports"),g(e,"security"),g(e,"api-keys"),O(e,"advanced")})}},_e={tags:["!autodocs"],args:{...v.args,headerConfig:N,items:M,activeItem:"home",collapsible:!0},decorators:[cs(M)],play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify Home has active class initially",async()=>{O(e,"home"),g(e,"dashboard"),g(e,"analytics"),g(e,"settings"),g(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const a=e.getByRole("navigation"),o=p(a,"Dashboard");r(o).not.toBeNull(),await u.click(o),g(e,"home"),O(e,"dashboard"),g(e,"analytics"),g(e,"settings"),g(e,"profile")})}},Re={args:{...v.args,headerConfig:N,items:M,footerItems:dt,collapsible:!0}},Me={tags:["!autodocs"],args:{...v.args,headerConfig:N,items:M,footerItems:dt,collapsible:!1}},Fe={tags:["!autodocs"],args:{...v.args,headerConfig:N,items:Ye,footerItems:dt,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify footer items are rendered",async()=>{const a=ae(e,"Settings");r(a).not.toBeNull();const o=ae(e,"Help & Support");r(o).not.toBeNull();const i=ae(e,"Account");r(i).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const a=ae(e,"Account");await u.click(a);const o=ae(e,"Preferences");r(o).not.toBeNull();const i=ae(e,"Logout");r(i).not.toBeNull()})}},ie={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:N,items:ms,collapsible:!0}},qe={tags:["!autodocs"],args:{...ie.args,isCollapsed:!0},decorators:[Ue()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var i;const a=re(e,0);r(a).not.toBeNull();const o=a==null?void 0:a.querySelector('[data-size="xs"]');r(o).not.toBeNull(),r(o).toHaveAttribute("data-badge-type","indicator"),r((i=o==null?void 0:o.textContent)==null?void 0:i.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const a=re(e,0);r(a==null?void 0:a.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var i;const a=re(e,1);r(a).not.toBeNull();const o=a==null?void 0:a.querySelector('[data-size="xs"]');r(o).not.toBeNull(),r(o).toHaveAttribute("data-badge-type","indicator"),r((i=o==null?void 0:o.textContent)==null?void 0:i.trim()).toBe("")})}},hs=[f[0],{...f[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...f[2],hasDivider:!0},{...I,id:"reports",label:"Reports",icon:"info"},{...f[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},f[4]],Pe={tags:["!autodocs"],args:{...v.args,headerConfig:N,items:hs,collapsible:!0}},yn=s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0 1rem",color:"white",fontWeight:600},children:[s.jsx("span",{style:{fontSize:"1.25rem"},children:"⬡"}),s.jsx("span",{children:"My App"})]}),fn=s.jsx("div",{style:{padding:"1rem",color:"white",fontSize:"0.875rem"},children:"Custom footer content"}),We={args:{items:M,appearance:"brand"},render:t=>s.jsx(U,{...t,header:yn,children:de})},Oe={args:{items:M,appearance:"brand"},render:t=>s.jsx(U,{...t,footer:fn,children:de})},Le={args:{items:M,appearance:"brand"},render:t=>s.jsx(U,{...t,header:yn,footer:fn,children:de})},Ve={args:{items:M,appearance:"brand",collapsible:!1},render:t=>s.jsx(U,{...t,children:de})};var mt,gt,yt;v.parameters={...v.parameters,docs:{...(mt=v.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(yt=(gt=v.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var ft,ht,Nt;ge.parameters={...ge.parameters,docs:{...(ft=ge.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Nt=(ht=ge.parameters)==null?void 0:ht.docs)==null?void 0:Nt.source}}};var bt,xt,wt;ye.parameters={...ye.parameters,docs:{...(bt=ye.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(wt=(xt=ye.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Ct,Tt,Et;fe.parameters={...fe.parameters,docs:{...(Ct=fe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Et=(Tt=fe.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var At,Bt,It;he.parameters={...he.parameters,docs:{...(At=he.parameters)==null?void 0:At.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(It=(Bt=he.parameters)==null?void 0:Bt.docs)==null?void 0:It.source}}};var St,Ht,kt;Ne.parameters={...Ne.parameters,docs:{...(St=Ne.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(kt=(Ht=Ne.parameters)==null?void 0:Ht.docs)==null?void 0:kt.source}}};var jt,Dt,_t;be.parameters={...be.parameters,docs:{...(jt=be.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(_t=(Dt=be.parameters)==null?void 0:Dt.docs)==null?void 0:_t.source}}};var Rt,Mt,Ft;xe.parameters={...xe.parameters,docs:{...(Rt=xe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Ft=(Mt=xe.parameters)==null?void 0:Mt.docs)==null?void 0:Ft.source}}};var qt,Pt,Wt;we.parameters={...we.parameters,docs:{...(qt=we.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Wt=(Pt=we.parameters)==null?void 0:Pt.docs)==null?void 0:Wt.source}}};var Ot,Lt,Vt;Ce.parameters={...Ce.parameters,docs:{...(Ot=Ce.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Vt=(Lt=Ce.parameters)==null?void 0:Lt.docs)==null?void 0:Vt.source}}};var Kt,zt,Gt;Te.parameters={...Te.parameters,docs:{...(Kt=Te.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Gt=(zt=Te.parameters)==null?void 0:zt.docs)==null?void 0:Gt.source}}};var Ut,Yt,$t;Ee.parameters={...Ee.parameters,docs:{...(Ut=Ee.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...($t=(Yt=Ee.parameters)==null?void 0:Yt.docs)==null?void 0:$t.source}}};var Jt,Qt,Xt;Ae.parameters={...Ae.parameters,docs:{...(Jt=Ae.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=Ae.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,ea,ta;Be.parameters={...Be.parameters,docs:{...(Zt=Be.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ta=(ea=Be.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,sa;Ie.parameters={...Ie.parameters,docs:{...(aa=Ie.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(sa=(na=Ie.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var oa,ia,ra;Se.parameters={...Se.parameters,docs:{...(oa=Se.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ra=(ia=Se.parameters)==null?void 0:ia.docs)==null?void 0:ra.source}}};var ca,la,da;He.parameters={...He.parameters,docs:{...(ca=He.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(da=(la=He.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var ua,pa,va;ke.parameters={...ke.parameters,docs:{...(ua=ke.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(va=(pa=ke.parameters)==null?void 0:pa.docs)==null?void 0:va.source}}};var ma,ga,ya;je.parameters={...je.parameters,docs:{...(ma=je.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(ya=(ga=je.parameters)==null?void 0:ga.docs)==null?void 0:ya.source}}};var fa,ha,Na;De.parameters={...De.parameters,docs:{...(fa=De.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(Na=(ha=De.parameters)==null?void 0:ha.docs)==null?void 0:Na.source}}};var ba,xa,wa;_e.parameters={..._e.parameters,docs:{...(ba=_e.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(wa=(xa=_e.parameters)==null?void 0:xa.docs)==null?void 0:wa.source}}};var Ca,Ta,Ea;Re.parameters={...Re.parameters,docs:{...(Ca=Re.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Ea=(Ta=Re.parameters)==null?void 0:Ta.docs)==null?void 0:Ea.source}}};var Aa,Ba,Ia;Me.parameters={...Me.parameters,docs:{...(Aa=Me.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Ia=(Ba=Me.parameters)==null?void 0:Ba.docs)==null?void 0:Ia.source}}};var Sa,Ha,ka;Fe.parameters={...Fe.parameters,docs:{...(Sa=Fe.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(ka=(Ha=Fe.parameters)==null?void 0:Ha.docs)==null?void 0:ka.source}}};var ja,Da,_a;ie.parameters={...ie.parameters,docs:{...(ja=ie.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(_a=(Da=ie.parameters)==null?void 0:Da.docs)==null?void 0:_a.source}}};var Ra,Ma,Fa;qe.parameters={...qe.parameters,docs:{...(Ra=qe.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Fa=(Ma=qe.parameters)==null?void 0:Ma.docs)==null?void 0:Fa.source}}};var qa,Pa,Wa;Pe.parameters={...Pe.parameters,docs:{...(qa=Pe.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Wa=(Pa=Pe.parameters)==null?void 0:Pa.docs)==null?void 0:Wa.source}}};var Oa,La,Va;We.parameters={...We.parameters,docs:{...(Oa=We.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent}>
      {PageContent}
    </SideNav>
}`,...(Va=(La=We.parameters)==null?void 0:La.docs)==null?void 0:Va.source}}};var Ka,za,Ga;Oe.parameters={...Oe.parameters,docs:{...(Ka=Oe.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...(Ga=(za=Oe.parameters)==null?void 0:za.docs)==null?void 0:Ga.source}}};var Ua,Ya,$a;Le.parameters={...Le.parameters,docs:{...(Ua=Le.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand"
  },
  render: args => <SideNav {...args} header={customHeaderContent} footer={customFooterContent}>
      {PageContent}
    </SideNav>
}`,...($a=(Ya=Le.parameters)==null?void 0:Ya.docs)==null?void 0:$a.source}}};var Ja,Qa,Xa;Ve.parameters={...Ve.parameters,docs:{...(Ja=Ve.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  args: {
    items: navigationItems,
    appearance: "brand",
    collapsible: false
  },
  render: args => <SideNav {...args}>{PageContent}</SideNav>
}`,...(Xa=(Qa=Ve.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};const Vs=["Default","Collapsible","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithLongItemLabel","WithNestedMenus","KeyboardNavigation","CollapseButtonAccessibility","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers","WithCustomHeader","WithCustomFooter","WithCustomHeaderAndFooter","WithoutHeaderOrFooter"];export{_e as ActiveItemState,Ce as CollapseButtonAccessibility,Ie as CollapsedHeaderTooltipCustom,Be as CollapsedTooltip,Se as CollapsedTooltipWithNested,qe as CollapsedWithBadges,ge as Collapsible,v as Default,Me as FooterItemsOnly,Fe as FooterItemsWithNested,Te as HeaderClickability,he as HeaderCompact,Ee as HeaderWithLink,Ne as HeaderWithLongTitle,Ae as HeaderWithOnClick,fe as HeaderWithVersion,we as KeyboardNavigation,De as NestedItemActiveOnClick,He as NestedItemActivePreselected,je as NestedNavMenuActiveOnClick,ke as NestedNavMenuActivePreselected,ie as WithBadges,Oe as WithCustomFooter,We as WithCustomHeader,Le as WithCustomHeaderAndFooter,ye as WithCustomRouter,Pe as WithDividers,Re as WithFooterItems,be as WithLongItemLabel,xe as WithNestedMenus,Ve as WithoutHeaderOrFooter,Vs as __namedExportsOrder,Ls as default};
