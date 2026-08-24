import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{g as Sa,B as La,s as ka}from"./BaseSideNav-DneV_rnp.js";import{T as Ka,a as Va}from"./keyboard-test.constants-By8W48aj.js";import{w as P,e as r,a as Oa,u as d}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{B as za,N as Ga,u as Ya,R as Ua,a as ie}from"./chunk-KS7C4IRE-DoFVsaq3.js";import{f as $a}from"./testing.utils-mIZIUNbM.js";import{N as Ja}from"./NavigationProvider-Bs4LKj9F.js";import{S as _e,E as Re,c as nt,b as Qa,d as Xa}from"./keyboard.constants-BverKK8B.js";import{u as Ha}from"./useActiveKeyboard-DaOmFJe_.js";import{u as Je}from"./NavigationContext-D2CUoNWC.js";import{D as re}from"./Divider-BMotkXeQ.js";import{s as Za,I as $e,B as Qe}from"./Badge-DkJhvK8e.js";import{I as ja}from"./Icon-DgLH6pPJ.js";import{T as en}from"./Tooltip-CQZMCJle.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function tn(a=!1,n=!1){return a?$e.s:n?$e.l:$e.m}function Pe(a){return a?Za({showBadge:!0,badgeContent:a.content??"number",badgeCount:a.count,badgeIcon:a.icon}):!1}function an(a){return a.badgeType??"indicator"}const nn="_navItemContainer_l1d46_1",sn="_navItemLeft_l1d46_47",on="_navItem_l1d46_1",rn="_navItemRight_l1d46_64",Q={navItemContainer:nn,navItemLeft:sn,navItem:on,navItemRight:rn},cn="_navMenuContainer_ycjt5_1",ln="_navMenu_ycjt5_1",dn="_menuContentLeft_ycjt5_31",un="_menuContentRight_ycjt5_36",pn="_menuIcon_ycjt5_95",vn="_nestedMenu_ycjt5_103",mn="_icon_ycjt5_119",z={navMenuContainer:cn,navMenu:ln,menuContentLeft:dn,menuContentRight:un,menuIcon:pn,nestedMenu:vn,icon:mn};function Xe({link:a,label:n,tabIndex:t,onKeyDown:e,onFocus:i,onBlur:o,onClick:l,children:m,styleType:w="item"}){const b=Je(),f=w==="menu"?z:Q,A={className:w==="menu"?f.navMenu:f.navItem,tabIndex:t,"aria-label":n,...i&&{onFocus:i},...o&&{onBlur:o},...l&&{onClick:l},...e&&{onKeyDown:e}};return a?s.jsx(b,{href:a,...A,children:m}):s.jsx("span",{...A,children:m})}Xe.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ze({icon:a,hasLeadingIcon:n=!0,label:t,isCollapsed:e,isNested:i,styleType:o="item",badge:l}){const m=tn(i,e),w=o==="menu"?z:Q;function b(){if(!n||!a)return null;const f=s.jsx(ja,{name:a,className:w.icon,size:m});return e&&l&&Pe(l)?s.jsx(Qe,{badgeType:an(l),size:"xs",content:"empty",children:f}):f}return s.jsxs(s.Fragment,{children:[b(),e?null:s.jsx("span",{children:t})]})}Ze.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}},badge:{required:!1,tsType:{name:"BadgeProps"},description:""}}};function We({label:a,isCollapsed:n,children:t}){return n&&a?s.jsx(en,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:t}):t}We.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Da(a){return a===!1?-1:0}function Ma({onEnterOrSpace:a,onEscape:n,includeArrowKeys:t=!1,includeEscape:e=!1}={}){const i=g.useCallback(m=>{[_e,Re].includes(m.key)&&(m.preventDefault(),a==null||a()),m.key===nt&&e&&(m.preventDefault(),n==null||n())},[a,n,e]),o=[_e,Re,...e?[nt]:[],...t?[Qa,Xa]:[]],{onKeyDown:l}=Ha({onKeyDown:i},{interactiveKeyCodes:o});return{onKeyDown:l}}const qe=g.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:i,isCollapsed:o,link:l,href:m,isNested:w,parentMenuOpen:b,appearance:f="brand",active:D,badge:A,onActiveItemChange:M,...x},T)=>{const Z=Je(),F=g.useRef(null),S=g.useRef(null),W=!!(m||l),{onKeyDown:U}=Ma({onEnterOrSpace:e});function ee(){var B,R;(B=F.current)==null||B.setAttribute("data-focused","true"),(R=S.current)==null||R.setAttribute("data-focused","true")}function O(){var B,R;(B=F.current)==null||B.removeAttribute("data-focused"),(R=S.current)==null||R.removeAttribute("data-focused")}const te=Da(b),L=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:Q.navItemLeft,children:s.jsx(Ze,{icon:n,hasLeadingIcon:t,label:i,isCollapsed:o,isNested:w,styleType:"item",badge:A})}),s.jsx("div",{className:Q.navItemRight,children:!o&&A&&Pe(A)&&s.jsx(Qe,{badgeType:A.badgeType,size:A.size,content:A.content,count:A.count})})]}),_=W?s.jsx(Z,{id:a,"aria-label":i,className:Q.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":w,"data-active":D,href:m??l,to:m??l,onClick:()=>M==null?void 0:M(a),onBlur:O,ref:S,children:L}):s.jsx("div",{id:a,className:Q.navItemContainer,"data-collapsed":o,"data-appearance":f,"data-nested":w,"data-active":D,onClick:e,ref:B=>{F.current=B,typeof T=="function"?T(B):T&&"current"in T&&(T.current=B)},...x,children:s.jsx(Xe,{label:i,tabIndex:te,onKeyDown:U,onFocus:ee,onBlur:O,styleType:"item",children:L})});return s.jsx(We,{label:i,isCollapsed:o,children:_})});qe.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const et=g.forwardRef(({id:a,icon:n,hasLeadingIcon:t=!0,onClick:e,label:i,isCollapsed:o,link:l,items:m=[],open:w,onOpenChange:b,hasMenuIcon:f=!0,isNested:D,parentMenuOpen:A,appearance:M="brand",contrast:x="high",badge:T,hasDivider:Z,active:F,onMenuOpenChange:S,getMenuOpen:W,...U},ee)=>{const O=Sa(M,x),[te,L]=g.useState(!1),_=w??te,B=w!==void 0;function R(){const c=!_,u=a||i;if(e&&e(),u&&S){S(u,c);return}B?b==null||b(c):L(c)}function ae(){if(!_)return;const c=a||i;if(c&&S){S(c,!1);return}B?b==null||b(!1):L(!1)}const{onKeyDown:Ve}=Ma({onEnterOrSpace:R,onEscape:ae,includeArrowKeys:!0,includeEscape:!0}),Oe=m.length,$=!o&&Oe,ne=_,ze=Da(A),le=$&&f?s.jsx(ja,{name:"arrow-chevron-right",className:z.menuIcon,"data-open":_}):null,Ge=!o&&(Pe(T)||!!le),Ye=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:z.menuContentLeft,children:s.jsx(Ze,{icon:n,hasLeadingIcon:t,label:i,isCollapsed:o,isNested:D,styleType:"menu",badge:T})}),Ge&&s.jsxs("div",{className:z.menuContentRight,children:[T&&Pe(T)&&s.jsx(Qe,{badgeType:T.badgeType,size:T.size,content:T.content,count:T.count}),le]})]}),Ue=s.jsxs("li",{id:a,className:z.navMenuContainer,"data-collapsed":o,"data-appearance":M,"data-nested":D,"data-open":_,"data-active":F,ref:ee,...U,children:[s.jsx(Xe,{link:l,label:i,tabIndex:ze,onClick:R,onKeyDown:Ve,styleType:"menu",children:Ye}),$&&s.jsx("ul",{className:z.nestedMenu,"data-open":_,children:m.map(c=>{var se;return(se=c.items)!=null&&se.length?s.jsx(et,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:o,link:c.link,onClick:c.onClick,items:c.items||[],open:W?W(c):c.open,onOpenChange:c.onOpenChange,onMenuOpenChange:S,getMenuOpen:W,active:c.active,hasMenuIcon:f,hasDivider:c.hasDivider,isNested:!0,parentMenuOpen:ne,appearance:M,contrast:x,badge:c.badge},c.id||c.label):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(qe,{id:c.id,label:c.label,icon:c.icon,hasLeadingIcon:c.hasLeadingIcon,isCollapsed:o,link:c.link,onClick:c.onClick,isNested:!0,parentMenuOpen:ne,appearance:M,active:c.active,badge:c.badge})}),c.hasDivider&&s.jsx(re,{appearance:O})]},c.id||c.label)})})]}),de=s.jsx(We,{label:i,isCollapsed:o,children:Ue});return s.jsxs(s.Fragment,{children:[de,Z&&s.jsx(re,{appearance:O})]})});et.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuId: string, open: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"menuId"},{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},getMenuOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItemProps) => boolean | undefined",signature:{arguments:[{type:{name:"NavItemProps"},name:"item"}],return:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]}}},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const yn="_sideNavHeaderContainer_1p15a_1",gn="_sideNavHeader_1p15a_1",Nn="_sideNavHeaderTitleContainer_1p15a_38",hn="_sideNavHeaderTitle_1p15a_38",fn="_sideNavHeaderIdentifier_1p15a_47",bn="_sideNavHeaderVersion_1p15a_119",xn="_sideNavBody_1p15a_148",wn="_sideNavFooterContainer_1p15a_172",Tn="_sideNavFooter_1p15a_172",En="_sideNavFooterItems_1p15a_185",In="_collapsibleSection_1p15a_202",k={sideNavHeaderContainer:yn,sideNavHeader:gn,sideNavHeaderTitleContainer:Nn,sideNavHeaderTitle:hn,sideNavHeaderIdentifier:fn,sideNavHeaderVersion:bn,sideNavBody:xn,sideNavFooterContainer:wn,sideNavFooter:Tn,sideNavFooterItems:En,collapsibleSection:In},An=300,Fe=g.forwardRef(({size:a="m",collapsible:n,children:t,headerConfig:e,items:i,footerItems:o,isCollapsed:l,defaultCollapsed:m=!1,onCollapsedChange:w,onActiveItemChange:b,appearance:f="brand",contrast:D="high",activeItem:A},M)=>{const[x,T]=g.useState(l??m),[Z,F]=g.useState(!0),[S,W]=g.useState({}),[U,ee]=g.useState(A),O=Je(),te=g.useCallback((c,u)=>{W(se=>({...se,[c]:u}))},[]),L=g.useCallback(c=>c.id&&c.id in S?S[c.id]:c.open,[S]),_=g.useCallback(c=>{ee(c),b==null||b(c)},[b]);g.useEffect(()=>{W({})},[i]),g.useEffect(()=>{l!==void 0&&T(l)},[l]),g.useEffect(()=>{if(x)F(!1);else{const c=setTimeout(()=>{F(!0)},An);return()=>clearTimeout(c)}},[x]);const B=()=>{const c=!x;l===void 0&&T(c),w==null||w(c)},R=x?"arrow-double-right":"arrow-double-left",ae=Sa(f,D),Ve=c=>{[_e,Re].includes(c.key)&&(c.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:Oe}=Ha({onKeyDown:Ve},{interactiveKeyCodes:[_e,Re]}),$=s.jsxs("div",{className:k.sideNavHeaderTitle,children:[s.jsx("div",{className:k.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),!x&&s.jsx("h1",{children:e==null?void 0:e.title})]}),ne=e==null?void 0:e.ariaLabel,ze=s.jsx(O,{href:(e==null?void 0:e.link)??"",className:k.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":ne,children:$}),le=s.jsx("div",{className:k.sideNavHeaderTitleContainer,tabIndex:0,onClick:e==null?void 0:e.onClick,onKeyDown:Oe,role:"button","aria-label":ne,children:$}),Ge=e!=null&&e.link?ze:e!=null&&e.onClick?le:s.jsx("div",{className:k.sideNavHeaderTitleContainer,children:$}),Ye=g.useMemo(()=>(e==null?void 0:e.tooltip)??(e==null?void 0:e.title)??"",[e==null?void 0:e.tooltip,e==null?void 0:e.title]),Ue=s.jsx(We,{label:Ye,isCollapsed:x,children:Ge});function de(c){return c!=null&&c.length?s.jsx("ul",{children:c.map(u=>{var at;return((at=u.items)==null?void 0:at.length)?s.jsx(et,{id:u.id,badge:u.badge,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:x,link:u.link,onClick:u.onClick,items:u.items||[],open:L(u),onMenuOpenChange:te,getMenuOpen:L,active:u.active,appearance:f,contrast:D,hasDivider:u.hasDivider},u.id):s.jsxs(g.Fragment,{children:[s.jsx("li",{children:s.jsx(qe,{id:u.id,badge:u.badge,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:x,link:u.href??u.link,onClick:u.onClick,appearance:f,active:u.active??(u.id===U&&!!U),onActiveItemChange:_})}),u.hasDivider&&s.jsx(re,{appearance:ae})]},u.id)})}):null}return s.jsx(La,{ref:M,size:a,isCollapsed:x,appearance:f,contrast:D,header:s.jsxs("div",{className:k.sideNavHeaderContainer,"data-compact":(e==null?void 0:e.isCompact)??!1,"data-collapsed":x,children:[s.jsxs("div",{className:k.sideNavHeader,"data-collapsed":x,"data-appearance":f,"data-compact":(e==null?void 0:e.isCompact)??!1,children:[Ue,!(e!=null&&e.isCompact)&&s.jsx("div",{className:k.sideNavHeaderVersion,"data-hidden":!Z,children:s.jsx("span",{children:e==null?void 0:e.version})})]}),s.jsx(re,{appearance:ae})]}),body:s.jsx("div",{className:k.sideNavBody,children:de(i)}),footer:((o==null?void 0:o.length)||n)&&s.jsxs("div",{className:k.sideNavFooterContainer,children:[(o==null?void 0:o.length)&&s.jsx("div",{className:k.sideNavFooterItems,children:de(o)}),s.jsx(re,{appearance:ae}),s.jsx("div",{className:k.sideNavFooter,children:n&&s.jsx("div",{className:k.collapsibleSection,children:s.jsx(qe,{id:"collapse-button",icon:R,hasLeadingIcon:!0,isCollapsed:x,onClick:B,label:x?"Ouvrir le menu":"Réduire le menu",appearance:f,role:"button"})})})]}),children:t})});Fe.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},onActiveItemChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function _a(a,n){return a.some(t=>{var e;return t.id===n?!0:(e=t.items)!=null&&e.length?_a(t.items,n):!1})}function Bn(a,n){if(!a.id||!n)return a.onClick;const t=()=>{n(a.id)};return a.onClick?()=>{t(),a.onClick()}:t}function Ra(a,n,t){return a.map(e=>{var f;const i=(f=e.items)!=null&&f.length?Ra(e.items,n,t):void 0,o=!!(i!=null&&i.length),l=!o&&e.id===n,m=o&&e.id===n,w=e,b=o&&(e.id===n||_a(e.items,n));return{...e,active:l||m,open:b?!0:w.open,items:i,onClick:Bn(e,t)}})}function Le(){return function(n,t){const[e,i]=g.useState(t.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...t.args,isCollapsed:e,onCollapsedChange:i}})})}}function Cn(a){return function(t,e){const[i,o]=g.useState(e.args.activeItem),l=a.map(m=>({...m,onClick:()=>o(m.id),link:void 0}));return s.jsx("div",{children:s.jsx(t,{args:{...e.args,items:l,activeItem:i}})})}}function Pa(a,n){return function(e,i){const[o,l]=g.useState(n),m=g.useMemo(()=>Ra(a,o,l),[o,a]);return s.jsx(e,{args:{...i.args,items:m}})}}function qa(a){if(!a)return null;const n=Array.from(a.children);for(const o of n)if(o.tagName==="A"||o.tagName==="SPAN"&&o.hasAttribute("tabindex"))return o;const t=a.querySelector("a");return t||Array.from(a.querySelectorAll("span")).find(o=>o.hasAttribute("tabindex"))}function p(a,n,t){const e=t?a.querySelector(t):a;if(!e)return null;const i=t?P(e):P(a),o=i.queryByRole("link",{name:n});if(o)return o;const l=i.queryByText(n);if(l){const m=l.closest("li");return qa(m)}return null}function ce(a,n){const t=a.querySelector('[class*="sideNavBody"]');if(!t)return null;const i=Array.from(t.querySelectorAll("li"))[n];return qa(i)}function J(a,n){return p(a,n,'[class*="sideNavFooterItems"]')}function G(a,n="MA"){var o;return(o=P(a).getByText(n).parentElement)==null?void 0:o.parentElement}function Sn(a,n){return a.querySelector(`#${n}`)}function kn(a){return a.dataset.active==="true"}function C(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function H(a,n){const t=p(a,n);t&&r(t).not.toHaveFocus()}function j(a,n){const t=p(a,n);t&&r(t).toHaveAttribute("tabindex","-1")}function K(a,n){const t=p(a,n);t&&r(t).toHaveAttribute("tabindex","0")}async function Fa(a,n,t){await Oa(()=>{const e=a.getByRole("navigation"),i=Sn(e,n);if(!i){r(t).toBe(!1);return}r(kn(i)).toBe(t)})}function q(a,n){return Fa(a,n,!0)}function y(a,n){return Fa(a,n,!1)}function E(a){const n=P(a),t=n.getByRole("navigation");return{canvas:n,sideNav:t}}function X(a=200){return new Promise(n=>setTimeout(n,a))}const ls={title:"Composants/SideNav/SideNav",id:"SideNav",component:Fe,tags:["autodocs"],decorators:[a=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>s.jsx(Fe,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,isCollapsed:a.isCollapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:Hn})},Hn=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),I={hasLeadingIcon:!0},V={size:"m",content:"number"},N=[{...I,id:"home",label:"Home",icon:"home"},{...I,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...I,id:"analytics",label:"Analytics",icon:"analytics"},{...I,id:"settings",label:"Settings",icon:"settings"},{...I,id:"profile",label:"Profile",icon:"user",link:"/profile"}],jn=[{...I,id:"home",label:"Home",icon:"home",href:"/"},{...I,id:"dashboard",label:"Dashboard",icon:"dashboard",href:"/dashboard"},{...I,id:"analytics",label:"Analytics",icon:"analytics",href:"/analytics"},{...I,id:"settings",label:"Settings",icon:"settings",href:"/settings"},{...I,id:"profile",label:"Profile",icon:"user",href:"/profile"}],Y=N,Wa=[N[0],{...N[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...N[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},N[4]],Dn=[N[0],{...N[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},N[4]],Mn=[N[0],{...N[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...N[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},N[4]],Ke=[N[0],{...N[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...N[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},N[4]],_n=[{...N[0],badge:{...V,badgeType:"indicator",count:5}},{...N[1],badge:{...V,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...V,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...V,badgeType:"indicator",count:12}}]},{...N[3],items:[{label:"General"},{label:"Privacy",badge:{...V,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...V,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...V,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...N[4],badge:{...V,badgeType:"brand",count:8}}],tt=[{...I,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...I,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...I,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],h={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},Rn="My Application With An Extremely Long Name That Should Not Expand The Side Navigation Panel",Pn={...h},qn={...h,onClick:()=>{console.log("Header clicked")}},v={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:Y}},ue={tags:["skip-ci"],args:{...v.args,collapsible:!0}},pe={tags:["skip-ci"],args:{...v.args,items:jn},render:a=>{const n=()=>{const t=Ya();return g.useEffect(()=>{t("/")},[]),s.jsx(Fe,{...a,activeItem:"home",onActiveItemChange:e=>console.log("Active item changed to:",e),children:s.jsx("div",{style:{padding:"2rem"},children:s.jsxs(Ua,{children:[s.jsx(ie,{path:"/",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Home"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the home. Use the navigation on the left to explore different sections."})]})}),s.jsx(ie,{path:"/dashboard",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the dashboard page. Here you can find an overview of your application's performance and"})]})}),s.jsx(ie,{path:"/analytics",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Analytics"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the analytics page. Here you can find detailed insights and data visualizations about your"})]})}),s.jsx(ie,{path:"/settings",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Settings"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the settings page. Here you can configure your application's preferences and options."})]})}),s.jsx(ie,{path:"/profile",element:s.jsxs("div",{children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Profile"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"This is the profile page. Here you can view and edit your personal information."})]})})]})})})};return s.jsx(za,{children:s.jsx(Ja,{linkComponent:Ga,children:s.jsx(n,{})})})}},ve={tags:["skip-ci"],args:{...v.args,headerConfig:h}},me={tags:["skip-ci"],args:{...v.args,headerConfig:{...h,isCompact:!0}}},ye={tags:["skip-ci"],args:{...v.args,headerConfig:{...h,title:Rn},size:"m"},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Side nav keeps the fixed M panel width with a long application title",async()=>{r(t.offsetWidth).toBe(ka.m)}),await n("Title is truncated with an ellipsis within the header area",async()=>{const e=t.querySelector("h1");r(e).not.toBeNull(),r(getComputedStyle(e).textOverflow).toBe("ellipsis"),r(e.scrollWidth).toBeGreaterThan(e.clientWidth)})}},st="Supervision des processus et des opérations en temps réel",ge={tags:["skip-ci","!autodocs"],args:{...v.args,headerConfig:h,items:[{...I,id:"supervision",label:st,icon:"dashboard"},...Y.slice(1)],size:"m"},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Side nav keeps the fixed M panel width with a long item label",async()=>{r(t.offsetWidth).toBe(ka.m)}),await n("Nav item label is truncated with an ellipsis",async()=>{const e=p(t,st);r(e).not.toBeNull();const i=e==null?void 0:e.querySelector('[class*="navItemLeft"] span:last-child');r(i).not.toBeNull(),r(getComputedStyle(i).textOverflow).toBe("ellipsis"),r(i.scrollWidth).toBeGreaterThan(i.clientWidth)})}},Ne={tags:["skip-ci"],args:{...v.args,headerConfig:h,items:Ke,collapsible:!0}},he={tags:["skip-ci"],args:{...v.args,headerConfig:h,items:Ke,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Navigate through navigation when all menus are closed",async()=>{j(t,"Overview"),j(t,"Reports"),j(t,"Analytics"),j(t,"General"),j(t,"Privacy"),j(t,"Advanced");const e=p(t,"Home");e==null||e.focus(),C(e),await d.tab();const i=p(t,"Dashboard");C(i),H(t,"Overview"),H(t,"Reports"),H(t,"Analytics"),await d.tab();const o=p(t,"Settings");C(o),H(t,"General"),H(t,"Privacy"),H(t,"Advanced"),await d.tab();const l=p(t,"Profile");C(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const e=p(t,"Dashboard");await d.click(e),K(t,"Overview"),K(t,"Reports"),K(t,"Analytics"),await d.tab();const i=p(t,"Overview");C(i),await d.tab();const o=p(t,"Reports");C(o),await d.tab();const l=p(t,"Analytics");C(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const e=p(t,"Dashboard");await d.click(e),j(t,"Overview"),j(t,"Reports"),j(t,"Analytics"),await d.tab();const i=p(t,"Settings");C(i),H(t,"Overview"),H(t,"Reports"),H(t,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const e=p(t,"Settings");await d.click(e),K(t,"General"),K(t,"Privacy"),K(t,"Advanced"),j(t,"Security"),j(t,"API Keys"),await d.tab();const i=p(t,"General");C(i),await d.tab();const o=p(t,"Privacy");C(o),await d.tab();const l=p(t,"Advanced");C(l),H(t,"Security"),H(t,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const e=p(t,"Advanced");await d.click(e),K(t,"Security"),K(t,"API Keys"),await d.tab();const i=p(t,"Security");C(i),await d.tab();const o=p(t,"API Keys");C(o)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const e=p(t,"Advanced");await d.click(e),j(t,"Security"),j(t,"API Keys"),await d.tab();const i=p(t,"Profile");C(i),H(t,"Security"),H(t,"API Keys")})}},fe={args:{...v.args,headerConfig:{...h,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const e=G(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),r(e).not.toHaveAttribute("href"),r(e).not.toHaveAttribute("role","button"),r(e).not.toHaveAttribute("tabindex")})}},be={args:{...v.args,headerConfig:Pn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header is a link when link prop is provided",async()=>{const e=G(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("A"),r(e).toHaveAttribute("href","/"),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const e=G(t);e==null||e.focus(),r(e).toHaveFocus()})}},xe={args:{...v.args,headerConfig:{...qn,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header is clickable button when onClick is provided",async()=>{const e=G(t);r(e).not.toBeNull(),r(e==null?void 0:e.tagName).toBe("DIV"),await d.click(e),r(e).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const e=G(t);e==null||e.focus(),r(e).toHaveFocus(),await d.keyboard(Ka),await d.keyboard(Va)})}},we={args:{...v.args,headerConfig:h,items:Y,collapsible:!0,isCollapsed:!0},decorators:[Le()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header tooltip falls back to title when collapsed",async()=>{const e=G(t);r(e).not.toBeNull(),e==null||e.focus(),await X();const i=P(document.body).queryByRole("tooltip",{name:"My Application"});r(i).not.toBeNull(),r(i).toHaveTextContent("My Application")}),await n("Verify tooltips appear when tabbing to navigation items",async()=>{const e=ce(t,0);r(e).not.toBeNull(),e==null||e.focus(),await X();const i=P(document.body).queryByRole("tooltip",{name:"Home"});r(i).not.toBeNull(),r(i).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await d.tab(),await X();const e=P(document.body).queryByRole("tooltip",{name:"Dashboard"});r(e).not.toBeNull(),r(e).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await d.tab(),await d.tab(),await d.tab(),await X();const e=P(document.body).queryByRole("tooltip",{name:"Profile"});r(e).not.toBeNull(),r(e).toHaveTextContent("Profile")})}},Te={args:{...v.args,headerConfig:{...h,tooltip:"Custom header tooltip"},collapsible:!0,isCollapsed:!0},decorators:[Le()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify header tooltip uses custom tooltip value when collapsed",async()=>{const e=G(t);r(e).not.toBeNull(),e==null||e.focus(),await X();const i=P(document.body).queryByRole("tooltip",{name:"Custom header tooltip"});r(i).not.toBeNull(),r(i).toHaveTextContent("Custom header tooltip")})}},Ee={args:{...v.args,headerConfig:h,items:Ke,collapsible:!0,isCollapsed:!0},decorators:[Le()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{$a(a);const e=ce(t,1);r(e).not.toBeNull(),await d.tab(),await d.tab(),await d.tab(),await X();const i=P(document.body).queryByRole("tooltip",{name:"Dashboard"});r(i).not.toBeNull(),r(i).toHaveTextContent("Dashboard")})}},Ie={tags:["skip-ci"],args:{...v.args,headerConfig:h,items:Mn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify Overview nested item is active",async()=>{q(t,"overview"),y(t,"reports")})}},Ae={tags:["skip-ci"],args:{...v.args,headerConfig:h,items:Dn,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{q(t,"security"),y(t,"advanced"),y(t,"settings"),y(t,"api-keys")})}},Be={tags:["skip-ci"],args:{...v.args,headerConfig:h,collapsible:!0},decorators:[Pa(Wa,"security")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify only Security is active, not parent NavMenus",async()=>{q(t,"security"),y(t,"advanced"),y(t,"settings"),y(t,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const e=t.getByRole("navigation"),i=p(e,"API Keys");r(i).not.toBeNull(),await d.click(i),y(t,"security"),q(t,"api-keys"),y(t,"advanced"),y(t,"settings")})}},Ce={tags:["skip-ci"],args:{...v.args,headerConfig:h,collapsible:!0},decorators:[Pa(Wa,"overview")],play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify Overview leaf is active initially",async()=>{q(t,"overview"),y(t,"reports"),y(t,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const e=t.getByRole("navigation"),i=p(e,"Reports");r(i).not.toBeNull(),await d.click(i),y(t,"overview"),q(t,"reports"),y(t,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const e=t.getByRole("navigation"),i=p(e,"Settings");r(i).not.toBeNull(),await d.click(i);const o=p(e,"Advanced");r(o).not.toBeNull(),await d.click(o),y(t,"overview"),y(t,"reports"),y(t,"security"),y(t,"api-keys"),q(t,"advanced")})}},Se={args:{...v.args,headerConfig:h,items:Y,activeItem:"home",collapsible:!0},decorators:[Cn(Y)],play:async({canvasElement:a,step:n})=>{const{canvas:t}=E(a);await n("Verify Home has active class initially",async()=>{q(t,"home"),y(t,"dashboard"),y(t,"analytics"),y(t,"settings"),y(t,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=t.getByRole("navigation"),i=p(e,"Dashboard");r(i).not.toBeNull(),await d.click(i),y(t,"home"),q(t,"dashboard"),y(t,"analytics"),y(t,"settings"),y(t,"profile")})}},ke={args:{...v.args,headerConfig:h,items:Y,footerItems:tt,collapsible:!0}},He={args:{...v.args,headerConfig:h,items:Y,footerItems:tt,collapsible:!1}},je={args:{...v.args,headerConfig:h,items:Ke,footerItems:tt,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Verify footer items are rendered",async()=>{const e=J(t,"Settings");r(e).not.toBeNull();const i=J(t,"Help & Support");r(i).not.toBeNull();const o=J(t,"Account");r(o).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const e=J(t,"Account");await d.click(e);const i=J(t,"Preferences");r(i).not.toBeNull();const o=J(t,"Logout");r(o).not.toBeNull()})}},oe={tags:["skip-ci"],args:{...v.args,headerConfig:h,items:_n,collapsible:!0}},De={args:{...oe.args,isCollapsed:!0},decorators:[Le()],play:async({canvasElement:a,step:n})=>{const{sideNav:t}=E(a);await n("Collapsed nav items show xs indicator dot on icon",async()=>{var o;const e=ce(t,0);r(e).not.toBeNull();const i=e==null?void 0:e.querySelector('[data-size="xs"]');r(i).not.toBeNull(),r(i).toHaveAttribute("data-badge-type","indicator"),r((o=i==null?void 0:i.textContent)==null?void 0:o.trim()).toBe("")}),await n("Collapsed nav items do not show numeric badge in right column",async()=>{const e=ce(t,0);r(e==null?void 0:e.querySelector('[data-simple-badge="true"]')).toBeNull()}),await n("Collapsed menu items show xs indicator dot on icon",async()=>{var o;const e=ce(t,1);r(e).not.toBeNull();const i=e==null?void 0:e.querySelector('[data-size="xs"]');r(i).not.toBeNull(),r(i).toHaveAttribute("data-badge-type","indicator"),r((o=i==null?void 0:i.textContent)==null?void 0:o.trim()).toBe("")})}},Fn=[N[0],{...N[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...N[2],hasDivider:!0},{...I,id:"reports",label:"Reports",icon:"info"},{...N[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},N[4]],Me={args:{...v.args,headerConfig:h,items:Fn,collapsible:!0}};var it,ot,rt;v.parameters={...v.parameters,docs:{...(it=v.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(rt=(ot=v.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var ct,lt,dt;ue.parameters={...ue.parameters,docs:{...(ct=ue.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(dt=(lt=ue.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,pt,vt;pe.parameters={...pe.parameters,docs:{...(ut=pe.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(vt=(pt=pe.parameters)==null?void 0:pt.docs)==null?void 0:vt.source}}};var mt,yt,gt;ve.parameters={...ve.parameters,docs:{...(mt=ve.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(gt=(yt=ve.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};var Nt,ht,ft;me.parameters={...me.parameters,docs:{...(Nt=me.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      isCompact: true
    }
  }
}`,...(ft=(ht=me.parameters)==null?void 0:ht.docs)==null?void 0:ft.source}}};var bt,xt,wt;ye.parameters={...ye.parameters,docs:{...(bt=ye.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(wt=(xt=ye.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Tt,Et,It;ge.parameters={...ge.parameters,docs:{...(Tt=ge.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(It=(Et=ge.parameters)==null?void 0:Et.docs)==null?void 0:It.source}}};var At,Bt,Ct;Ne.parameters={...Ne.parameters,docs:{...(At=Ne.parameters)==null?void 0:At.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Ct=(Bt=Ne.parameters)==null?void 0:Bt.docs)==null?void 0:Ct.source}}};var St,kt,Ht;he.parameters={...he.parameters,docs:{...(St=he.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Ht=(kt=he.parameters)==null?void 0:kt.docs)==null?void 0:Ht.source}}};var jt,Dt,Mt;fe.parameters={...fe.parameters,docs:{...(jt=fe.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Mt=(Dt=fe.parameters)==null?void 0:Dt.docs)==null?void 0:Mt.source}}};var _t,Rt,Pt;be.parameters={...be.parameters,docs:{...(_t=be.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Pt=(Rt=be.parameters)==null?void 0:Rt.docs)==null?void 0:Pt.source}}};var qt,Ft,Wt;xe.parameters={...xe.parameters,docs:{...(qt=xe.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Wt=(Ft=xe.parameters)==null?void 0:Ft.docs)==null?void 0:Wt.source}}};var Lt,Kt,Vt;we.parameters={...we.parameters,docs:{...(Lt=we.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Vt=(Kt=we.parameters)==null?void 0:Kt.docs)==null?void 0:Vt.source}}};var Ot,zt,Gt;Te.parameters={...Te.parameters,docs:{...(Ot=Te.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Gt=(zt=Te.parameters)==null?void 0:zt.docs)==null?void 0:Gt.source}}};var Yt,Ut,$t;Ee.parameters={...Ee.parameters,docs:{...(Yt=Ee.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...($t=(Ut=Ee.parameters)==null?void 0:Ut.docs)==null?void 0:$t.source}}};var Jt,Qt,Xt;Ie.parameters={...Ie.parameters,docs:{...(Jt=Ie.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=Ie.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,ea,ta;Ae.parameters={...Ae.parameters,docs:{...(Zt=Ae.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ta=(ea=Ae.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,sa;Be.parameters={...Be.parameters,docs:{...(aa=Be.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(sa=(na=Be.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var ia,oa,ra;Ce.parameters={...Ce.parameters,docs:{...(ia=Ce.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ra=(oa=Ce.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var ca,la,da;Se.parameters={...Se.parameters,docs:{...(ca=Se.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(da=(la=Se.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var ua,pa,va;ke.parameters={...ke.parameters,docs:{...(ua=ke.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(va=(pa=ke.parameters)==null?void 0:pa.docs)==null?void 0:va.source}}};var ma,ya,ga;He.parameters={...He.parameters,docs:{...(ma=He.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(ga=(ya=He.parameters)==null?void 0:ya.docs)==null?void 0:ga.source}}};var Na,ha,fa;je.parameters={...je.parameters,docs:{...(Na=je.parameters)==null?void 0:Na.docs,source:{originalSource:`{
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
}`,...(fa=(ha=je.parameters)==null?void 0:ha.docs)==null?void 0:fa.source}}};var ba,xa,wa;oe.parameters={...oe.parameters,docs:{...(ba=oe.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(wa=(xa=oe.parameters)==null?void 0:xa.docs)==null?void 0:wa.source}}};var Ta,Ea,Ia;De.parameters={...De.parameters,docs:{...(Ta=De.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Ia=(Ea=De.parameters)==null?void 0:Ea.docs)==null?void 0:Ia.source}}};var Aa,Ba,Ca;Me.parameters={...Me.parameters,docs:{...(Aa=Me.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Ca=(Ba=Me.parameters)==null?void 0:Ba.docs)==null?void 0:Ca.source}}};const ds=["Default","Collapsible","WithCustomRouter","HeaderWithVersion","HeaderCompact","HeaderWithLongTitle","WithLongItemLabel","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedHeaderTooltipCustom","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","CollapsedWithBadges","WithDividers"];export{Se as ActiveItemState,Te as CollapsedHeaderTooltipCustom,we as CollapsedTooltip,Ee as CollapsedTooltipWithNested,De as CollapsedWithBadges,ue as Collapsible,v as Default,He as FooterItemsOnly,je as FooterItemsWithNested,fe as HeaderClickability,me as HeaderCompact,be as HeaderWithLink,ye as HeaderWithLongTitle,xe as HeaderWithOnClick,ve as HeaderWithVersion,he as KeyboardNavigation,Ce as NestedItemActiveOnClick,Ie as NestedItemActivePreselected,Be as NestedNavMenuActiveOnClick,Ae as NestedNavMenuActivePreselected,oe as WithBadges,pe as WithCustomRouter,Me as WithDividers,ke as WithFooterItems,ge as WithLongItemLabel,Ne as WithNestedMenus,ds as __namedExportsOrder,ls as default};
