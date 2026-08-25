import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{g as Ha,B as Ka,s as ka}from"./BaseSideNav-DneV_rnp.js";import{T as za,a as Ga}from"./keyboard-test.constants-By8W48aj.js";import{w as F,e as r,a as Ua,u}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{B as Ya,N as $a,u as Ja,R as Qa,a as ie}from"./chunk-KS7C4IRE-DoFVsaq3.js";import{f as Xa}from"./testing.utils-mIZIUNbM.js";import{N as Za}from"./NavigationProvider-Bs4LKj9F.js";import{D as ce}from"./Divider-BMotkXeQ.js";import{s as en,I as $e,B as Je}from"./Badge-DkJhvK8e.js";import{u as Qe}from"./NavigationContext-D2CUoNWC.js";import{I as Da}from"./Icon-DgLH6pPJ.js";import{T as tn}from"./Tooltip-CQZMCJle.js";import{S as Re,E as qe,c as nt,b as an,d as nn}from"./keyboard.constants-BverKK8B.js";import{u as _a}from"./useActiveKeyboard-DaOmFJe_.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const st={HEADER_CONFIG_AND_CUSTOM:"SideNav: Both headerConfig and a custom header were provided. The custom header takes precedence.",FOOTER_ITEMS_AND_CUSTOM:"SideNav: Both footerItems (or collapsible default footer) and a custom footer were provided. The custom footer takes precedence."},sn=[{condition:t=>t.hasCustomHeader&&t.hasHeaderConfig,issue:st.HEADER_CONFIG_AND_CUSTOM},{condition:t=>t.hasCustomFooter&&(t.hasFooterItems||!!t.collapsible),issue:st.FOOTER_ITEMS_AND_CUSTOM}];function on(t){var e;return((e=sn.find(({condition:a})=>a(t)))==null?void 0:e.issue)??null}function rn(t,n){return!t&&!!n}function cn(t,n,e){return!t&&!!(n!=null&&n.length||e)}function ln(t,n){return!!(t||n)}function dn(t,n,e){return!!(t||n!=null&&n.length||e)}function un(t=!1,n=!1){return t?$e.s:n?$e.l:$e.m}function Fe(t){return t?en({showBadge:!0,badgeContent:t.content??"number",badgeCount:t.count,badgeIcon:t.icon}):!1}function pn(t){return t.badgeType??"indicator"}const vn="_navItemContainer_l1d46_1",mn="_navItemLeft_l1d46_47",gn="_navItem_l1d46_1",yn="_navItemRight_l1d46_64",ee={navItemContainer:vn,navItemLeft:mn,navItem:gn,navItemRight:yn},fn="_navMenuContainer_ycjt5_1",hn="_navMenu_ycjt5_1",Nn="_menuContentLeft_ycjt5_31",bn="_menuContentRight_ycjt5_36",xn="_menuIcon_ycjt5_95",wn="_nestedMenu_ycjt5_103",Tn="_icon_ycjt5_119",U={navMenuContainer:fn,navMenu:hn,menuContentLeft:Nn,menuContentRight:bn,menuIcon:xn,nestedMenu:wn,icon:Tn};function Xe({link:t,label:n,tabIndex:e,onKeyDown:a,onFocus:i,onBlur:o,onClick:l,children:d,styleType:f="item"}){const w=Qe(),x=f==="menu"?U:ee,h={className:f==="menu"?x.navMenu:x.navItem,tabIndex:e,"aria-label":n,...i&&{onFocus:i},...o&&{onBlur:o},...l&&{onClick:l},...a&&{onKeyDown:a}};return t?s.jsx(w,{href:t,...h,children:d}):s.jsx("span",{...h,children:d})}Xe.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ze({icon:t,hasLeadingIcon:n=!0,label:e,isCollapsed:a,isNested:i,styleType:o="item",badge:l}){const d=un(i,a),f=o==="menu"?U:ee;function w(){if(!n||!t)return null;const x=s.jsx(Da,{name:t,className:f.icon,size:d});return a&&l&&Fe(l)?s.jsx(Je,{badgeType:pn(l),size:"xs",content:"empty",children:x}):x}return s.jsxs(s.Fragment,{children:[w(),a?null:s.jsx("span",{children:e})]})}Ze.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function We({label:t,isCollapsed:n,children:e}){return n&&t?s.jsx(tn,{label:t,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}We.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function ja(t){return t===!1?-1:0}function Ma({onEnterOrSpace:t,onEscape:n,includeArrowKeys:e=!1,includeEscape:a=!1}={}){const i=g.useCallback(d=>{[Re,qe].includes(d.key)&&(d.preventDefault(),t==null||t()),d.key===nt&&a&&(d.preventDefault(),n==null||n())},[t,n,a]),o=[Re,qe,...a?[nt]:[],...e?[an,nn]:[]],{onKeyDown:l}=_a({onKeyDown:i},{interactiveKeyCodes:o});return{onKeyDown:l}}const Le=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:i,isCollapsed:o,link:l,href:d,isNested:f,parentMenuOpen:w,appearance:x="brand",active:H,badge:h,onActiveItemChange:I,...W},T)=>{const C=Qe(),j=g.useRef(null),M=g.useRef(null),L=!!(d||l),{onKeyDown:z}=Ma({onEnterOrSpace:a});function J(){var S,q;(S=j.current)==null||S.setAttribute("data-focused","true"),(q=M.current)==null||q.setAttribute("data-focused","true")}function O(){var S,q;(S=j.current)==null||S.removeAttribute("data-focused"),(q=M.current)==null||q.removeAttribute("data-focused")}const ae=ja(w),G=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:ee.navItemLeft,children:s.jsx(Ze,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:f,styleType:"item",badge:h})}),s.jsx("div",{className:ee.navItemRight,children:!o&&h&&Fe(h)&&s.jsx(Je,{badgeType:h.badgeType,size:h.size,content:h.content,count:h.count})})]}),R=L?s.jsx(C,{id:t,"aria-label":i,className:ee.navItemContainer,"data-collapsed":o,"data-appearance":x,"data-nested":f,"data-active":H,href:d??l,to:d??l,onClick:()=>I==null?void 0:I(t),onBlur:O,ref:M,children:G}):s.jsx("div",{id:t,className:ee.navItemContainer,"data-collapsed":o,"data-appearance":x,"data-nested":f,"data-active":H,onClick:a,ref:S=>{j.current=S,typeof T=="function"?T(S):T&&"current"in T&&(T.current=S)},...W,children:s.jsx(Xe,{label:i,tabIndex:ae,onKeyDown:z,onFocus:J,onBlur:O,styleType:"item",children:G})});return s.jsx(We,{label:i,isCollapsed:o,children:R})});Le.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const et=g.forwardRef(({id:t,icon:n,hasLeadingIcon:e=!0,onClick:a,label:i,isCollapsed:o,link:l,items:d=[],open:f,onOpenChange:w,hasMenuIcon:x=!0,isNested:H,parentMenuOpen:h,appearance:I="brand",contrast:W="high",badge:T,hasDivider:C,active:j,onMenuOpenChange:M,getMenuOpen:L,...z},J)=>{const O=Ha(I,W),[ae,G]=g.useState(!1),R=f??ae,S=f!==void 0;function q(){const c=!R,X=t||i;if(a&&a(),X&&M){M(X,c);return}S?w==null||w(c):G(c)}function Ke(){if(!R)return;const c=t||i;if(c&&M){M(c,!1);return}S?w==null||w(!1):G(!1)}const{onKeyDown:Q}=Ma({onEnterOrSpace:q,onEscape:Ke,includeArrowKeys:!0,includeEscape:!0}),ze=d.length,le=!o&&ze,de=R,Ge=ja(h),ne=le&&x?s.jsx(Da,{name:"arrow-chevron-right",className:U.menuIcon,"data-open":R}):null,ue=!o&&(Fe(T)||!!ne),Ue=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:U.menuContentLeft,children:s.jsx(Ze,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:H,styleType:"menu",badge:T})}),ue&&s.jsxs("div",{className:U.menuContentRight,children:[T&&Fe(T)&&s.jsx(Je,{badgeType:T.badgeType,size:T.size,content:T.content,count:T.count}),ne]})]}),Ye=s.jsxs("li",{id:t,className:U.navMenuContainer,"data-collapsed":o,"data-appearance":I,"data-nested":H,"data-open":R,"data-active":j,ref:J,...z,children:[s.jsx(Xe,{link:l,label:i,tabIndex:Ge,onClick:q,onKeyDown:Q,styleType:"menu",children:Ue}),le&&s.jsx("ul",{className:U.nestedMenu,"data-open":R,children:d.map(c=>{var se;return(se=c.items)!=null&&se.length?s.jsx(et,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:o,link:c.link,onClick:c.onClick,items:c.items||[],open:L?L(c):c.open,onOpenChange:c.onOpenChange,onMenuOpenChange:M,getMenuOpen:L,active:c.active,hasMenuIcon:x,hasDivider:c.hasDivider,isNested:!0,parentMenuOpen:de,appearance:I,contrast:W,badge:c.badge},c.id||c.label):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(Le,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:o,link:c.link,onClick:c.onClick,isNested:!0,parentMenuOpen:de,appearance:I,active:c.active,badge:c.badge})}),c.hasDivider&&s.jsx(ce,{appearance:O})]},c.id||c.label)})})]}),b=s.jsx(We,{label:i,isCollapsed:o,children:Ye});return s.jsxs(s.Fragment,{children:[b,C&&s.jsx(ce,{appearance:O})]})});et.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Cn="_sideNavHeaderContainer_1p15a_1",En="_sideNavHeader_1p15a_1",An="_sideNavHeaderTitleContainer_1p15a_38",In="_sideNavHeaderTitle_1p15a_38",Sn="_sideNavHeaderIdentifier_1p15a_47",Bn="_sideNavHeaderVersion_1p15a_119",Hn="_sideNavBody_1p15a_148",kn="_sideNavFooterContainer_1p15a_172",Dn="_sideNavFooter_1p15a_172",_n="_sideNavFooterItems_1p15a_185",jn="_collapsibleSection_1p15a_202",_={sideNavHeaderContainer:Cn,sideNavHeader:En,sideNavHeaderTitleContainer:An,sideNavHeaderTitle:In,sideNavHeaderIdentifier:Sn,sideNavHeaderVersion:Bn,sideNavBody:Hn,sideNavFooterContainer:kn,sideNavFooter:Dn,sideNavFooterItems:_n,collapsibleSection:jn};function Ra({footerItemsContent:t,collapsible:n,isCollapsed:e,appearance:a,dividerAppearance:i,collapseIcon:o,onCollapse:l}){return s.jsxs("div",{className:_.sideNavFooterContainer,children:[t&&s.jsx("div",{className:_.sideNavFooterItems,children:t}),s.jsx(ce,{appearance:i}),s.jsx("div",{className:_.sideNavFooter,children:n&&s.jsx("div",{className:_.collapsibleSection,children:s.jsx(Le,{id:"collapse-button",icon:o,hasLeadingIcon:!0,isCollapsed:e,onClick:l,label:e?"Ouvrir le menu":"Réduire le menu",appearance:a,role:"button"})})})]})}Ra.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultFooter",props:{footerItemsContent:{required:!0,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},collapseIcon:{required:!0,tsType:{name:"string"},description:""},onCollapse:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function tt({isCollapsed:t,appearance:n,dividerAppearance:e,isCompact:a=!1,children:i}){return s.jsxs("div",{className:_.sideNavHeaderContainer,"data-compact":a,"data-collapsed":t,children:[s.jsx("div",{className:_.sideNavHeader,"data-collapsed":t,"data-appearance":n,"data-compact":a,children:i}),s.jsx(ce,{appearance:e})]})}tt.__docgenInfo={description:"",methods:[],displayName:"SideNavHeaderContainer",props:{isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function qa({headerConfig:t,isCollapsed:n,shouldShowTitle:e,appearance:a,dividerAppearance:i}){const o=Qe(),l=C=>{var j;[Re,qe].includes(C.key)&&(C.preventDefault(),(j=t.onClick)==null||j.call(t))},{onKeyDown:d}=_a({onKeyDown:l},{interactiveKeyCodes:[Re,qe]}),f=s.jsxs("div",{className:_.sideNavHeaderTitle,children:[s.jsx("div",{className:_.sideNavHeaderIdentifier,children:t.identifier}),!n&&s.jsx("h1",{children:t.title})]}),w=t.ariaLabel,x=s.jsx(o,{href:t.link??"",className:_.sideNavHeaderTitleContainer,onClick:t.onClick,"aria-label":w,children:f}),H=s.jsx("div",{className:_.sideNavHeaderTitleContainer,tabIndex:0,onClick:t.onClick,onKeyDown:d,role:"button","aria-label":w,children:f}),h=s.jsx("div",{className:_.sideNavHeaderTitleContainer,children:f});function I(){return t.link?x:t.onClick?H:h}const W=g.useMemo(()=>t.tooltip??t.title??"",[t.tooltip,t.title]),T=s.jsx(We,{label:W,isCollapsed:n,children:I()});return s.jsxs(tt,{isCollapsed:n,isCompact:!!t.isCompact,appearance:a,dividerAppearance:i,children:[T,!t.isCompact&&s.jsx("div",{className:_.sideNavHeaderVersion,"data-hidden":!e,children:s.jsx("span",{children:t.version})})]})}qa.__docgenInfo={description:"",methods:[],displayName:"SideNavDefaultHeader",props:{headerConfig:{required:!0,tsType:{name:"SideNavHeaderConfig"},description:""},isCollapsed:{required:!0,tsType:{name:"boolean"},description:""},shouldShowTitle:{required:!0,tsType:{name:"boolean"},description:""},appearance:{required:!0,tsType:{name:"SideNavAppearance"},description:""},dividerAppearance:{required:!0,tsType:{name:"DividerAppearance"},description:""}}};const Mn=300,Pe=g.forwardRef(({size:t="m",collapsible:n,children:e,header:a,footer:i,headerConfig:o,items:l,footerItems:d,isCollapsed:f,defaultCollapsed:w=!1,onCollapsedChange:x,onActiveItemChange:H,appearance:h="brand",contrast:I="high",activeItem:W},T)=>{const[C,j]=g.useState(f??w),[M,L]=g.useState(!0),[z,J]=g.useState({}),[O,ae]=g.useState(W),G=g.useCallback((b,c)=>{J(X=>({...X,[b]:c}))},[]),R=g.useCallback(b=>b.id&&b.id in z?z[b.id]:b.open,[z]),S=g.useCallback(b=>{ae(b),H==null||H(b)},[H]);g.useEffect(()=>{J({})},[l]),g.useEffect(()=>{f!==void 0&&j(f)},[f]),g.useEffect(()=>{if(C)L(!1);else{const b=setTimeout(()=>{L(!0)},Mn);return()=>clearTimeout(b)}},[C]);const q=()=>{const b=!C;f===void 0&&j(b),x==null||x(b)},Ke=C?"arrow-double-right":"arrow-double-left",Q=Ha(h,I),ze=rn(a,o),le=cn(i,d,n),de=ln(a,o),Ge=dn(i,d,n),ne=on({hasCustomHeader:!!a,hasHeaderConfig:!!o,hasCustomFooter:!!i,hasFooterItems:!!(d!=null&&d.length),collapsible:n});ne&&console.warn(ne);function ue(b){return b!=null&&b.length?s.jsx("ul",{children:b.map(c=>{var se;return((se=c.items)==null?void 0:se.length)?s.jsx(et,{id:c.id,badge:c.badge,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:C,link:c.link,onClick:c.onClick,items:c.items||[],open:R(c),onMenuOpenChange:G,getMenuOpen:R,active:c.active,appearance:h,contrast:I,hasDivider:c.hasDivider},c.id):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(Le,{id:c.id,badge:c.badge,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:C,link:c.href??c.link,onClick:c.onClick,appearance:h,active:c.active??(c.id===O&&!!O),onActiveItemChange:S})}),c.hasDivider&&s.jsx(ce,{appearance:Q})]},c.id)})}):null}function Ue(){return de?ze&&o?s.jsx(qa,{headerConfig:o,isCollapsed:C,shouldShowTitle:M,appearance:h,dividerAppearance:Q}):s.jsx(tt,{isCollapsed:C,appearance:h,dividerAppearance:Q,children:a}):null}function Ye(){return Ge?le?s.jsx(Ra,{footerItemsContent:ue(d),collapsible:n,isCollapsed:C,appearance:h,dividerAppearance:Q,collapseIcon:Ke,onCollapse:q}):i??null:null}return s.jsx(Ka,{ref:T,size:t,isCollapsed:C,appearance:h,contrast:I,header:Ue(),body:s.jsx("div",{className:_.sideNavBody,children:ue(l)}),footer:Ye(),children:e})});Pe.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function Fa(t,n){return t.some(e=>{var a;return e.id===n?!0:(a=e.items)!=null&&a.length?Fa(e.items,n):!1})}function Rn(t,n){if(!t.id||!n)return t.onClick;const e=()=>{n(t.id)};return t.onClick?()=>{e(),t.onClick()}:e}function Pa(t,n,e){return t.map(a=>{var x;const i=(x=a.items)!=null&&x.length?Pa(a.items,n,e):void 0,o=!!(i!=null&&i.length),l=!o&&a.id===n,d=o&&a.id===n,f=a,w=o&&(a.id===n||Fa(a.items,n));return{...a,active:l||d,open:w?!0:f.open,items:i,onClick:Rn(a,e)}})}function Oe(){return function(n,e){const[a,i]=g.useState(e.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...e.args,isCollapsed:a,onCollapsedChange:i}})})}}function qn(t){return function(e,a){const[i,o]=g.useState(a.args.activeItem),l=t.map(d=>({...d,onClick:()=>o(d.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...a.args,items:l,activeItem:i}})})}}function Wa(t,n){return function(a,i){const[o,l]=g.useState(n),d=g.useMemo(()=>Pa(t,o,l),[o,t]);return s.jsx(a,{args:{...i.args,items:d}})}}function La(t){if(!t)return null;const n=Array.from(t.children);for(const o of n)if(o.tagName==="A"||o.tagName==="SPAN"&&o.hasAttribute("tabindex"))return o;const e=t.querySelector("a");return e||Array.from(t.querySelectorAll("span")).find(o=>o.hasAttribute("tabindex"))}function p(t,n,e){const a=e?t.querySelector(e):t;if(!a)return null;const i=e?F(a):F(t),o=i.queryByRole("link",{name:n});if(o)return o;const l=i.queryByText(n);if(l){const d=l.closest("li");return La(d)}return null}function re(t,n){const e=t.querySelector('[class*="sideNavBody"]');if(!e)return null;const i=Array.from(e.querySelectorAll("li"))[n];return La(i)}function Z(t,n){return p(t,n,'[class*="sideNavFooterItems"]')}function Y(t,n="MA"){var o;return(o=F(t).getByText(n).parentElement)==null?void 0:o.parentElement}function Fn(t,n){return t.querySelector(`#${n}`)}function Pn(t){return t.dataset.active==="true"}function B(t){r(t).not.toBeNull(),r(t).toHaveFocus()}function k(t,n){const e=p(t,n);e&&r(e).not.toHaveFocus()}function D(t,n){const e=p(t,n);e&&r(e).toHaveAttribute("tabindex","-1")}function V(t,n){const e=p(t,n);e&&r(e).toHaveAttribute("tabindex","0")}async function Oa(t,n,e){await Ua(()=>{const a=t.getByRole("navigation"),i=Fn(a,n);if(!i){r(e).toBe(!1);return}r(Pn(i)).toBe(e)})}function P(t,n){return Oa(t,n,!0)}function m(t,n){return Oa(t,n,!1)}function E(t){const n=F(t),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function te(t=200){return new Promise(n=>setTimeout(n,t))}const hs={title:"Composants/SideNav/SideNav",id:"SideNav",component:Pe,tags:["autodocs"],decorators:[t=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(t,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:t=>s.jsx(Pe,{size:t.size,collapsible:t.collapsible,headerConfig:t.headerConfig,appearance:t.appearance,contrast:t.contrast,items:t.items,footerItems:t.footerItems,isCollapsed:t.isCollapsed,activeItem:t.activeItem,onCollapsedChange:t.onCollapsedChange,children:Wn})},Wn=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),A={hasLeadingIcon:!0},K={size:"m",content:"number"},y=[{...A,id:"home",label:"Home",icon:"home"},{...A,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...A,id:"analytics",label:"Analytics",icon:"analytics"},{...A,id:"settings",label:"Settings",icon:"settings"},{...A,id:"profile",label:"Profile",icon:"user",link:"/profile"}],Ln=[{...A,id:"home",label:"Home",icon:"home",href:"/"},{...A,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...A,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...A,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...A,id:"profile",label:"Profile",icon:"user",href:"/profile"}],$=y,Va=[y[0],{...y[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...y[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},y[4]],On=[y[0],{...y[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},y[4]],Vn=[y[0],{...y[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...y[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},y[4]],Ve=[y[0],{...y[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...y[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},y[4]],Kn=[{...y[0],badge:{...K,badgeType:"indicator",count:5}},{...y[1],badge:{...K,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...K,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...K,badgeType:"indicator",count:12}}]},{...y[3],items:[{label:"General"},{label:"Privacy",badge:{...K,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...K,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...K,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...y[4],badge:{...K,badgeType:"brand",count:8}}],at=[{...A,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...A,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...A,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],N={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},zn="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",Gn={...N},Un={...N,onClick:()=>{console.log("Header clicked")}},v={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:$}},pe={tags:["skip-ci"],args:{...v.args,collapsible:!0}},ve={tags:["skip-ci"],args:{...v.args,items:Ln},render:t=>{const n=()=>{const e=Ja();return g.useEffect(()=>{e("/")},[]),s.jsx(Pe,{...t,activeItem:"home",onActiveItemChange:a=>console.log("Active item changed to:",a),children:s.jsx("div",{style:{padding:"2rem"},children:s.jsxs(Qa,{children:[s.jsx(ie,{path:"/",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),s.jsx(ie,{path:"/dashboard",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),s.jsx(ie,{path:"/analytics",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),s.jsx(ie,{path:"/settings",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),s.jsx(ie,{path:"/profile",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return s.jsx(Ya,{children:s.jsx(Za,{linkComponent:$a,children:s.jsx(n,{})})})}},me={tags:["skip-ci"],args:{...v.args,headerConfig:N}},ge={tags:["skip-ci"],args:{...v.args,headerConfig:{...N,isCompact:!0}}},ye={tags:["skip-ci"],args:{...v.args,headerConfig:{...N,title:zn},size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(e.offsetWidth).toBe(ka.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const a=e.querySelector("h1");r(a).not.toBeNull(),r(getComputedStyle(a).textOverflow).toBe("ellipsis"),r(a.scrollWidth).toBeGreaterThan(a.clientWidth)})}},it="Supervision des processus et des opérations en temps réel",fe={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:N,items:[{...A,id:"supervision",label:it,icon:"dashboard"},...$.slice(1)],size:"m"},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Side nav keeps the fixed M panel width with a long item label",async()=>{r(e.offsetWidth).toBe(ka.m)}),await n("Nav item label is truncated with an ellipsis",async()=>{const a=p(e,it);r(a).not.toBeNull();const i=a==null?void 0:a.querySelector('[class*="navItemLeft"] span:last-child');r(i).not.toBeNull(),r(getComputedStyle(i).textOverflow).toBe("ellipsis"),r(i.scrollWidth).toBeGreaterThan(i.clientWidth)})}},he={tags:["skip-ci"],args:{...v.args,headerConfig:N,items:Ve,collapsible:!0}},Ne={tags:["skip-ci"],args:{...v.args,headerConfig:N,items:Ve,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Navigate through navigation when all menus are closed",async()=>{D(e,"Overview"),D(e,"Reports"),D(e,"Analytics"),D(e,"General"),D(e,"Privacy"),D(e,"Advanced");const a=p(e,"Home");a==null||a.focus(),B(a),await u.tab();const i=p(e,"Dashboard");B(i),k(e,"Overview"),k(e,"Reports"),k(e,"Analytics"),await u.tab();const o=p(e,"Settings");B(o),k(e,"General"),k(e,"Privacy"),k(e,"Advanced"),await u.tab();const l=p(e,"Profile");B(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const a=p(e,"Dashboard");await u.click(a),V(e,"Overview"),V(e,"Reports"),V(e,"Analytics"),await u.tab();const i=p(e,"Overview");B(i),await u.tab();const o=p(e,"Reports");B(o),await u.tab();const l=p(e,"Analytics");B(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const a=p(e,"Dashboard");await u.click(a),D(e,"Overview"),D(e,"Reports"),D(e,"Analytics"),await u.tab();const i=p(e,"Settings");B(i),k(e,"Overview"),k(e,"Reports"),k(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const a=p(e,"Settings");await u.click(a),V(e,"General"),V(e,"Privacy"),V(e,"Advanced"),D(e,"Security"),D(e,"API Keys"),await u.tab();const i=p(e,"General");B(i),await u.tab();const o=p(e,"Privacy");B(o),await u.tab();const l=p(e,"Advanced");B(l),k(e,"Security"),k(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const a=p(e,"Advanced");await u.click(a),V(e,"Security"),V(e,"API Keys"),await u.tab();const i=p(e,"Security");B(i),await u.tab();const o=p(e,"API Keys");B(o)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const a=p(e,"Advanced");await u.click(a),D(e,"Security"),D(e,"API Keys"),await u.tab();const i=p(e,"Profile");B(i),k(e,"Security"),k(e,"API Keys")})}},be={args:{...v.args,headerConfig:{...N,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const a=Y(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),r(a).not.toHaveAttribute("href"),r(a).not.toHaveAttribute("role","button"),r(a).not.toHaveAttribute("tabindex")})}},xe={args:{...v.args,headerConfig:Gn,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header is a link when link prop is provided",async()=>{const a=Y(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("A"),r(a).toHaveAttribute("href","/"),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const a=Y(e);a==null||a.focus(),r(a).toHaveFocus()})}},we={args:{...v.args,headerConfig:{...Un,link:null},collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header is clickable button when onClick is provided",async()=>{const a=Y(e);r(a).not.toBeNull(),r(a==null?void 0:a.tagName).toBe("DIV"),await u.click(a),r(a).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const a=Y(e);a==null||a.focus(),r(a).toHaveFocus(),await u.keyboard(za),await u.keyboard(Ga)})}},Te={args:{...v.args,headerConfig:N,items:$,collapsible:!0,isCollapsed:!0},decorators:[Oe()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header tooltip falls back to title when collapsed",async()=>{const a=Y(e);r(a).not.toBeNull(),a==null||a.focus(),await te();const i=F(document.body).queryByRole("tooltip",{name:"My Application"});r(i).not.toBeNull(),r(i).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const a=re(e,0);r(a).not.toBeNull(),a==null||a.focus(),await te();const i=F(document.body).queryByRole("tooltip",{name:"Home"});r(i).not.toBeNull(),r(i).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await u.tab(),await te();const a=F(document.body).queryByRole("tooltip",{name:"Dashboard"});r(a).not.toBeNull(),r(a).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await u.tab(),await u.tab(),await u.tab(),await te();const a=F(document.body).queryByRole("tooltip",{name:"Profile"});r(a).not.toBeNull(),r(a).toHaveTextContent("Profile")})}},Ce={args:{...v.args,headerConfig:{...N,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Oe()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const a=Y(e);r(a).not.toBeNull(),a==null||a.focus(),await te();const i=F(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(i).not.toBeNull(),r(i).toHaveTextContent("Custom header tooltip")})}},Ee={args:{...v.args,headerConfig:N,items:Ve,collapsible:!0,isCollapsed:!0},decorators:[Oe()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify tooltips appear when tabbing to menu items",async()=>{Xa(t);const a=re(e,1);r(a).not.toBeNull(),await u.tab(),await u.tab(),await u.tab(),await te();const i=F(document.body).queryByRole("tooltip",{name:"Dashboard"});r(i).not.toBeNull(),r(i).toHaveTextContent("Dashboard")})}},Ae={tags:["skip-ci"],args:{...v.args,headerConfig:N,items:Vn,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify Overview nested item is active",async()=>{P(e,"overview"),m(e,"reports")})}},Ie={tags:["skip-ci"],args:{...v.args,headerConfig:N,items:On,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{P(e,"security"),m(e,"advanced"),m(e,"settings"),m(e,"api-keys")})}},Se={tags:["skip-ci"],args:{...v.args,headerConfig:N,collapsible:!0},decorators:[Wa(Va,"security")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify only Security is active, not parent NavMenus",async()=>{P(e,"security"),m(e,"advanced"),m(e,"settings"),m(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const a=e.getByRole("navigation"),i=p(a,"API Keys");r(i).not.toBeNull(),await u.click(i),m(e,"security"),P(e,"api-keys"),m(e,"advanced"),m(e,"settings")})}},Be={tags:["skip-ci"],args:{...v.args,headerConfig:N,collapsible:!0},decorators:[Wa(Va,"overview")],play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify Overview leaf is active initially",async()=>{P(e,"overview"),m(e,"reports"),m(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const a=e.getByRole("navigation"),i=p(a,"Reports");r(i).not.toBeNull(),await u.click(i),m(e,"overview"),P(e,"reports"),m(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const a=e.getByRole("navigation"),i=p(a,"Settings");r(i).not.toBeNull(),await u.click(i);const o=p(a,"Advanced");r(o).not.toBeNull(),await u.click(o),m(e,"overview"),m(e,"reports"),m(e,"security"),m(e,"api-keys"),P(e,"advanced")})}},He={args:{...v.args,headerConfig:N,items:$,activeItem:"home",collapsible:!0},decorators:[qn($)],play:async({canvasElement:t,step:n})=>{const{canvas:e}=E(t);await n("Verify Home has active class initially",async()=>{P(e,"home"),m(e,"dashboard"),m(e,"analytics"),m(e,"settings"),m(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const a=e.getByRole("navigation"),i=p(a,"Dashboard");r(i).not.toBeNull(),await u.click(i),m(e,"home"),P(e,"dashboard"),m(e,"analytics"),m(e,"settings"),m(e,"profile")})}},ke={args:{...v.args,headerConfig:N,items:$,footerItems:at,collapsible:!0}},De={args:{...v.args,headerConfig:N,items:$,footerItems:at,collapsible:!1}},_e={args:{...v.args,headerConfig:N,items:Ve,footerItems:at,collapsible:!0},play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Verify footer items are rendered",async()=>{const a=Z(e,"Settings");r(a).not.toBeNull();const i=Z(e,"Help & Support");r(i).not.toBeNull();const o=Z(e,"Account");r(o).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const a=Z(e,"Account");await u.click(a);const i=Z(e,"Preferences");r(i).not.toBeNull();const o=Z(e,"Logout");r(o).not.toBeNull()})}},oe={tags:["skip-ci"],args:{...v.args,headerConfig:N,items:Kn,collapsible:!0}},je={args:{...oe.args,isCollapsed:!0},decorators:[Oe()],play:async({canvasElement:t,step:n})=>{const{sideNav:e}=E(t);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var o;const a=re(e,0);r(a).not.toBeNull();const i=a==null?void 0:a.querySelector('[data-size="xs"]');r(i).not.toBeNull(),r(i).toHaveAttribute("data-badge-type","indicator"),r((o=i==null?void 0:i.textContent)==null?void 0:o.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const a=re(e,0);r(a==null?void 0:a.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var o;const a=re(e,1);r(a).not.toBeNull();const i=a==null?void 0:a.querySelector('[data-size="xs"]');r(i).not.toBeNull(),r(i).toHaveAttribute("data-badge-type","indicator"),r((o=i==null?void 0:i.textContent)==null?void 0:o.trim()).toBe("")})}},Yn=[y[0],{...y[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...y[2],hasDivider:!0},{...A,id:"reports",label:"Reports",icon:"info"},{...y[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},y[4]],Me={args:{...v.args,headerConfig:N,items:Yn,collapsible:!0}};var ot,rt,ct;v.parameters={...v.parameters,docs:{...(ot=v.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(ct=(rt=v.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var lt,dt,ut;pe.parameters={...pe.parameters,docs:{...(lt=pe.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(ut=(dt=pe.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var pt,vt,mt;ve.parameters={...ve.parameters,docs:{...(pt=ve.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(mt=(vt=ve.parameters)==null?void 0:vt.docs)==null?void 0:mt.source}}};var gt,yt,ft;me.parameters={...me.parameters,docs:{...(gt=me.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(ft=(yt=me.parameters)==null?void 0:yt.docs)==null?void 0:ft.source}}};var ht,Nt,bt;ge.parameters={...ge.parameters,docs:{...(ht=ge.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(bt=(Nt=ge.parameters)==null?void 0:Nt.docs)==null?void 0:bt.source}}};var xt,wt,Tt;ye.parameters={...ye.parameters,docs:{...(xt=ye.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Tt=(wt=ye.parameters)==null?void 0:wt.docs)==null?void 0:Tt.source}}};var Ct,Et,At;fe.parameters={...fe.parameters,docs:{...(Ct=fe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(At=(Et=fe.parameters)==null?void 0:Et.docs)==null?void 0:At.source}}};var It,St,Bt;he.parameters={...he.parameters,docs:{...(It=he.parameters)==null?void 0:It.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Bt=(St=he.parameters)==null?void 0:St.docs)==null?void 0:Bt.source}}};var Ht,kt,Dt;Ne.parameters={...Ne.parameters,docs:{...(Ht=Ne.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Dt=(kt=Ne.parameters)==null?void 0:kt.docs)==null?void 0:Dt.source}}};var _t,jt,Mt;be.parameters={...be.parameters,docs:{...(_t=be.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Mt=(jt=be.parameters)==null?void 0:jt.docs)==null?void 0:Mt.source}}};var Rt,qt,Ft;xe.parameters={...xe.parameters,docs:{...(Rt=xe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Ft=(qt=xe.parameters)==null?void 0:qt.docs)==null?void 0:Ft.source}}};var Pt,Wt,Lt;we.parameters={...we.parameters,docs:{...(Pt=we.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Lt=(Wt=we.parameters)==null?void 0:Wt.docs)==null?void 0:Lt.source}}};var Ot,Vt,Kt;Te.parameters={...Te.parameters,docs:{...(Ot=Te.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Kt=(Vt=Te.parameters)==null?void 0:Vt.docs)==null?void 0:Kt.source}}};var zt,Gt,Ut;Ce.parameters={...Ce.parameters,docs:{...(zt=Ce.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ut=(Gt=Ce.parameters)==null?void 0:Gt.docs)==null?void 0:Ut.source}}};var Yt,$t,Jt;Ee.parameters={...Ee.parameters,docs:{...(Yt=Ee.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Jt=($t=Ee.parameters)==null?void 0:$t.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;Ae.parameters={...Ae.parameters,docs:{...(Qt=Ae.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=Ae.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var ea,ta,aa;Ie.parameters={...Ie.parameters,docs:{...(ea=Ie.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(aa=(ta=Ie.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var na,sa,ia;Se.parameters={...Se.parameters,docs:{...(na=Se.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(ia=(sa=Se.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var oa,ra,ca;Be.parameters={...Be.parameters,docs:{...(oa=Be.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ca=(ra=Be.parameters)==null?void 0:ra.docs)==null?void 0:ca.source}}};var la,da,ua;He.parameters={...He.parameters,docs:{...(la=He.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ua=(da=He.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,va,ma;ke.parameters={...ke.parameters,docs:{...(pa=ke.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(ma=(va=ke.parameters)==null?void 0:va.docs)==null?void 0:ma.source}}};var ga,ya,fa;De.parameters={...De.parameters,docs:{...(ga=De.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(fa=(ya=De.parameters)==null?void 0:ya.docs)==null?void 0:fa.source}}};var ha,Na,ba;_e.parameters={..._e.parameters,docs:{...(ha=_e.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(ba=(Na=_e.parameters)==null?void 0:Na.docs)==null?void 0:ba.source}}};var xa,wa,Ta;oe.parameters={...oe.parameters,docs:{...(xa=oe.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(Ta=(wa=oe.parameters)==null?void 0:wa.docs)==null?void 0:Ta.source}}};var Ca,Ea,Aa;je.parameters={...je.parameters,docs:{...(Ca=je.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Aa=(Ea=je.parameters)==null?void 0:Ea.docs)==null?void 0:Aa.source}}};var Ia,Sa,Ba;Me.parameters={...Me.parameters,docs:{...(Ia=Me.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Ba=(Sa=Me.parameters)==null?void 0:Sa.docs)==null?void 0:Ba.source}}};const Ns=["Default","Collapsible","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithLongItemLabel","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers"];export{He as ActiveItemState,Ce as CollapsedHeaderTooltipCustom,Te as CollapsedTooltip,Ee as CollapsedTooltipWithNested,je as CollapsedWithBadges,pe as Collapsible,v as Default,De as FooterItemsOnly,_e as FooterItemsWithNested,be as HeaderClickability,ge as HeaderCompact,xe as HeaderWithLink,ye as HeaderWithLongTitle,we as HeaderWithOnClick,me as HeaderWithVersion,Ne as KeyboardNavigation,Be as NestedItemActiveOnClick,Ae as NestedItemActivePreselected,Se as NestedNavMenuActiveOnClick,Ie as NestedNavMenuActivePreselected,oe as WithBadges,ve as WithCustomRouter,Me as WithDividers,ke as WithFooterItems,fe as WithLongItemLabel,he as WithNestedMenus,Ns as __namedExportsOrder,hs as default};
