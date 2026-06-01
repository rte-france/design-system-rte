import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as oa,a as ra}from"./keyboard-test.constants-By8W48aj.js";import{w as q,e as r,a as ca,u as c}from"./index-4rjIhT2C.js";import{f as la}from"./testing.utils-mIZIUNbM.js";import{g as Lt,B as da}from"./BaseSideNav-Cwwm62n6.js";import{S as we,E as xe,c as Fe,b as va,d as ua}from"./keyboard.constants-BverKK8B.js";import{r as h}from"./index-G8LIXM5I.js";import{u as Wt}from"./useActiveKeyboard-DaOmFJe_.js";import{D as J}from"./Divider-BMotkXeQ.js";import{I as Ce,B as Gt}from"./Badge-C3W4NyCk.js";import{I as zt}from"./Icon-Bc7wfgCv.js";import{T as pa}from"./Tooltip-BDlBB6rF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const ma="_navItemContainer_1uoce_1",ga="_navItemLeft_1uoce_41",ya="_navItem_1uoce_1",Na="_navItemRight_1uoce_56",G={navItemContainer:ma,navItemLeft:ga,navItem:ya,navItemRight:Na},fa="_navMenuContainer_3jggw_1",ba="_navMenu_3jggw_1",ha="_menuContentLeft_3jggw_30",wa="_menuContentRight_3jggw_35",xa="_menuIcon_3jggw_87",Ea="_nestedMenu_3jggw_95",Aa="_icon_3jggw_110",K={navMenuContainer:fa,navMenu:ba,menuContentLeft:ha,menuContentRight:wa,menuIcon:xa,nestedMenu:Ea,icon:Aa};function Se({link:a,label:n,tabIndex:e,onKeyDown:t,onFocus:i,onBlur:o,onClick:l,children:v,styleType:x="item"}){const b=x==="menu"?K:G,I={className:x==="menu"?b.navMenu:b.navItem,tabIndex:e,"aria-label":n,...i&&{onFocus:i},...o&&{onBlur:o},...l&&{onClick:l},...t&&{onKeyDown:t}};return a?s.jsx("a",{href:a,...I,children:v}):s.jsx("span",{...I,children:v})}Se.__docgenInfo={description:"",methods:[],displayName:"NavContentWrapper",props:{link:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tabIndex:{required:!0,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLElement"}],raw:"KeyboardEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function Ta(a=!1,n=!1){return a?Ce.s:n?Ce.l:Ce.m}function Be({icon:a,hasLeadingIcon:n=!0,label:e,isCollapsed:t,isNested:i,styleType:o="item"}){const l=Ta(i,t),v=o==="menu"?K:G;return s.jsxs(s.Fragment,{children:[n&&a&&s.jsx(zt,{name:a,className:v.icon,size:l}),t?null:s.jsx("span",{children:e})]})}Be.__docgenInfo={description:"",methods:[],displayName:"NavLabel",props:{icon:{required:!1,tsType:{name:"string"},description:""},hasLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},styleType:{required:!1,tsType:{name:"union",raw:'"item" | "menu"',elements:[{name:"literal",value:'"item"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"item"',computed:!1}}}};function He({label:a,isCollapsed:n,children:e}){return n&&a?s.jsx(pa,{label:a,position:"right",alignment:"center",arrow:!1,shouldFocusTrigger:!1,triggerStyles:{outline:"none"},gap:12,children:e}):e}He.__docgenInfo={description:"",methods:[],displayName:"NavTooltipWrapper",props:{label:{required:!0,tsType:{name:"string"},description:""},isCollapsed:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Yt(a){return a===!1?-1:0}function Ut({onEnterOrSpace:a,onEscape:n,includeArrowKeys:e=!1,includeEscape:t=!1}={}){const i=h.useCallback(v=>{[we,xe].includes(v.key)&&(v.preventDefault(),a==null||a()),v.key===Fe&&t&&(v.preventDefault(),n==null||n())},[a,n,t]),o=[we,xe,...t?[Fe]:[],...e?[va,ua]:[]],{onKeyDown:l}=Wt({onKeyDown:i},{interactiveKeyCodes:o});return{onKeyDown:l}}const Ee=h.forwardRef(({id:a,icon:n,hasLeadingIcon:e=!0,onClick:t,label:i,isCollapsed:o,link:l,isNested:v,parentMenuOpen:x,appearance:b="brand",active:S,badge:I,...F},N)=>{const B=h.useRef(null),{onKeyDown:V}=Ut({onEnterOrSpace:t});function O(){var E;(E=B.current)==null||E.setAttribute("data-focused","true")}function Y(){var E;(E=B.current)==null||E.removeAttribute("data-focused")}const U=Yt(x),D=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:G.navItemLeft,children:s.jsx(Be,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:v,styleType:"item"})}),s.jsx("div",{className:G.navItemRight,children:!o&&I&&s.jsx(Gt,{badgeType:I.badgeType,size:I.size,content:I.content,count:I.count})})]}),L=l?s.jsx("a",{id:a,"aria-label":i,className:G.navItemContainer,"data-collapsed":o,"data-appearance":b,"data-nested":v,href:l,children:D}):s.jsx("div",{id:a,className:G.navItemContainer,"data-collapsed":o,"data-appearance":b,"data-nested":v,"data-active":S,onClick:t,ref:E=>{B.current=E,typeof N=="function"?N(E):N&&"current"in N&&(N.current=E)},...F,children:s.jsx(Se,{label:i,tabIndex:U,onKeyDown:V,onFocus:O,onBlur:Y,styleType:"item",children:D})});return s.jsx(He,{label:i,isCollapsed:o,children:L})});Ee.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["CoreNavItemProps","Omit"]};const De=h.forwardRef(({id:a,icon:n,hasLeadingIcon:e=!0,onClick:t,label:i,isCollapsed:o,link:l,items:v=[],open:x,hasMenuIcon:b=!0,isNested:S,parentMenuOpen:I,appearance:F="brand",contrast:N="high",badge:B,hasDivider:V,active:O,...Y},U)=>{const D=Lt(F,N),[L,E]=h.useState(!1),_=x!==void 0?x:L,$=x!==void 0;function X(){t&&t(),$||E(!L)}function Te(){_&&!$&&E(!1)}const{onKeyDown:Ie}=Ut({onEnterOrSpace:X,onEscape:Te,includeArrowKeys:!0,includeEscape:!0}),Z=v.length,w=!o&&Z,u=_,Me=Yt(I),ee=w&&b?s.jsx(zt,{name:"arrow-chevron-right",className:K.menuIcon,"data-open":_}):null,na=s.jsxs(s.Fragment,{children:[s.jsx("div",{className:K.menuContentLeft,children:s.jsx(Be,{icon:n,hasLeadingIcon:e,label:i,isCollapsed:o,isNested:S,styleType:"menu"})}),s.jsxs("div",{className:K.menuContentRight,children:[!o&&B&&s.jsx(Gt,{badgeType:B.badgeType,size:B.size,content:B.content,count:B.count}),ee]})]}),sa=s.jsxs("li",{id:a,className:K.navMenuContainer,"data-collapsed":o,"data-appearance":F,"data-nested":S,"data-open":_,"data-active":O,ref:U,...Y,children:[s.jsx(Se,{link:l,label:i,tabIndex:Me,onClick:X,onKeyDown:Ie,styleType:"menu",children:na}),w&&s.jsx("ul",{className:K.nestedMenu,"data-open":_,children:v.map(m=>{var je;return(je=m.items)!=null&&je.length?s.jsx(De,{id:m.id,label:m.label,icon:m.icon,hasLeadingIcon:m.hasLeadingIcon,isCollapsed:o,link:m.link,onClick:m.onClick,items:m.items||[],open:m.open,active:m.active,hasMenuIcon:b,hasDivider:m.hasDivider,isNested:!0,parentMenuOpen:u,appearance:F,contrast:N,badge:m.badge},m.id||m.label):s.jsxs(h.Fragment,{children:[s.jsx("li",{children:s.jsx(Ee,{id:m.id,label:m.label,icon:m.icon,hasLeadingIcon:m.hasLeadingIcon,isCollapsed:o,link:m.link,onClick:m.onClick,isNested:!0,parentMenuOpen:u,appearance:F,active:m.active,badge:m.badge})}),m.hasDivider&&s.jsx(J,{appearance:D})]},m.id||m.label)})})]}),ia=s.jsx(He,{label:i,isCollapsed:o,children:sa});return s.jsxs(s.Fragment,{children:[ia,V&&s.jsx(J,{appearance:D})]})});De.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isNested:{required:!1,tsType:{name:"boolean"},description:""},parentMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},hasLeadingIcon:{defaultValue:{value:"true",computed:!1},required:!1},items:{defaultValue:{value:"[]",computed:!1},required:!1},hasMenuIcon:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["CoreNavMenuProps","Omit"]};const Ia="_sideNavHeaderContainer_1g02f_1",Ca="_sideNavHeader_1g02f_1",ka="_sideNavHeaderTitleContainer_1g02f_38",Sa="_sideNavHeaderTitle_1g02f_38",Ba="_sideNavHeaderIdentifier_1g02f_72",Ha="_sideNavHeaderVersion_1g02f_112",Da="_sideNavBody_1g02f_141",_a="_sideNavFooterContainer_1g02f_164",Ma="_sideNavFooter_1g02f_164",ja="_sideNavFooterItems_1g02f_177",Fa="_collapsibleSection_1g02f_194",A={sideNavHeaderContainer:Ia,sideNavHeader:Ca,sideNavHeaderTitleContainer:ka,sideNavHeaderTitle:Sa,sideNavHeaderIdentifier:Ba,sideNavHeaderVersion:Ha,sideNavBody:Da,sideNavFooterContainer:_a,sideNavFooter:Ma,sideNavFooterItems:ja,collapsibleSection:Fa},Pa=300,ke=h.forwardRef(({size:a="m",collapsible:n,children:e,headerConfig:t,items:i,footerItems:o,isCollapsed:l,defaultCollapsed:v=!1,onCollapsedChange:x,appearance:b="brand",contrast:S="high",activeItem:I},F)=>{const[N,B]=h.useState(l??v),[V,O]=h.useState(!0);h.useEffect(()=>{l!==void 0&&B(l)},[l]),h.useEffect(()=>{if(N)O(!1);else{const w=setTimeout(()=>{O(!0)},Pa);return()=>clearTimeout(w)}},[N]);const Y=()=>{const w=!N;l===void 0&&B(w),x==null||x(w)},U=N?"arrow-double-right":"arrow-double-left",D=Lt(b,S),L=w=>{[we,xe].includes(w.key)&&(w.preventDefault(),t!=null&&t.onClick&&t.onClick())},{onKeyDown:E}=Wt({onKeyDown:L},{interactiveKeyCodes:[we,xe]}),_=s.jsxs("div",{className:A.sideNavHeaderTitle,children:[s.jsx("div",{className:A.sideNavHeaderIdentifier,children:t==null?void 0:t.identifier}),N?"":s.jsx("h1",{"data-hidden":!V,children:t==null?void 0:t.title})]}),$=t==null?void 0:t.ariaLabel,X=s.jsx("a",{href:(t==null?void 0:t.link)??"",className:A.sideNavHeaderTitleContainer,onClick:t==null?void 0:t.onClick,"aria-label":$,children:_}),Te=s.jsx("div",{className:A.sideNavHeaderTitleContainer,tabIndex:0,onClick:t==null?void 0:t.onClick,onKeyDown:E,role:"button","aria-label":$,children:_}),Ie=t!=null&&t.link?X:t!=null&&t.onClick?Te:s.jsx("div",{className:A.sideNavHeaderTitleContainer,children:_});function Z(w){return w!=null&&w.length?s.jsx("ul",{children:w.map(u=>{var ee;return((ee=u.items)==null?void 0:ee.length)?s.jsx(De,{id:u.id,badge:u.badge,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:N,link:u.link,onClick:u.onClick,items:u.items||[],open:u.open,active:u.active,appearance:b,contrast:S,hasDivider:u.hasDivider},u.id):s.jsxs(h.Fragment,{children:[s.jsx("li",{children:s.jsx(Ee,{id:u.id,badge:u.badge,label:u.label,icon:u.icon,hasLeadingIcon:u.hasLeadingIcon,isCollapsed:N,link:u.link,onClick:u.onClick,appearance:b,active:u.id===I&&!!I})}),u.hasDivider&&s.jsx(J,{appearance:D})]},u.id)})}):null}return s.jsx(da,{ref:F,size:a,isCollapsed:N,appearance:b,contrast:S,className:A.sideNavContainer,header:s.jsxs("div",{className:A.sideNavHeaderContainer,children:[s.jsxs("div",{className:A.sideNavHeader,"data-collapsed":N,"data-appearance":b,children:[Ie,s.jsx("div",{className:A.sideNavHeaderVersion,"data-hidden":!V,children:s.jsx("span",{children:t==null?void 0:t.version})})]}),s.jsx(J,{appearance:D})]}),body:s.jsx("div",{className:A.sideNavBody,children:Z(i)}),footer:((o==null?void 0:o.length)||n)&&s.jsxs("div",{className:A.sideNavFooterContainer,children:[(o==null?void 0:o.length)&&s.jsx("div",{className:A.sideNavFooterItems,children:Z(o)}),s.jsx(J,{appearance:D}),s.jsx("div",{className:A.sideNavFooter,children:n&&s.jsx("div",{className:A.collapsibleSection,children:s.jsx(Ee,{id:"collapse-button",icon:U,hasLeadingIcon:!0,isCollapsed:N,onClick:Y,label:N?"Ouvrir le menu":"Réduire le menu",appearance:b,role:"button"})})})]}),children:e})});ke.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},contrast:{defaultValue:{value:'"high"',computed:!1},required:!1}},composes:["Partial","Omit"]};function $t(a,n){return a.some(e=>{var t;return e.id===n?!0:(t=e.items)!=null&&t.length?$t(e.items,n):!1})}function Ra(a,n){if(!a.id||!n)return a.onClick;const e=()=>{n(a.id)};return a.onClick?()=>{e(),a.onClick()}:e}function Jt(a,n,e){return a.map(t=>{var S;const i=(S=t.items)!=null&&S.length?Jt(t.items,n,e):void 0,o=!!(i!=null&&i.length),l=!o&&t.id===n,v=o&&t.id===n,x=t,b=o&&(t.id===n||$t(t.items,n));return{...t,active:l||v,open:b?!0:x.open,items:i,onClick:Ra(t,e)}})}function Qt(){return function(n,e){const[t,i]=h.useState(e.args.isCollapsed??!0);return s.jsx("div",{children:s.jsx(n,{args:{...e.args,isCollapsed:t,onCollapsedChange:i}})})}}function qa(a){return function(e,t){const[i,o]=h.useState(t.args.activeItem),l=a.map(v=>({...v,onClick:()=>o(v.id),link:void 0}));return s.jsx("div",{children:s.jsx(e,{args:{...t.args,items:l,activeItem:i}})})}}function Xt(a,n){return function(t,i){const[o,l]=h.useState(n),v=h.useMemo(()=>Jt(a,o,l),[o,a]);return s.jsx(t,{args:{...i.args,items:v}})}}function Zt(a){if(!a)return null;const n=Array.from(a.children);for(const o of n)if(o.tagName==="A"||o.tagName==="SPAN"&&o.hasAttribute("tabindex"))return o;const e=a.querySelector("a");return e||Array.from(a.querySelectorAll("span")).find(o=>o.hasAttribute("tabindex"))}function d(a,n,e){const t=e?a.querySelector(e):a;if(!t)return null;const i=e?q(t):q(a),o=i.queryByRole("link",{name:n});if(o)return o;const l=i.queryByText(n);if(l){const v=l.closest("li");return Zt(v)}return null}function ea(a,n){const e=a.querySelector('[class*="sideNavBody"]');if(!e)return null;const i=Array.from(e.querySelectorAll("li"))[n];return Zt(i)}function W(a,n){return d(a,n,'[class*="sideNavFooterItems"]')}function Q(a,n="MA"){var o;return(o=q(a).getByText(n).parentElement)==null?void 0:o.parentElement}function Ka(a,n){return a.querySelector(`#${n}`)}function Va(a){return a.dataset.active==="true"}function T(a){r(a).not.toBeNull(),r(a).toHaveFocus()}function C(a,n){const e=d(a,n);e&&r(e).not.toHaveFocus()}function k(a,n){const e=d(a,n);e&&r(e).toHaveAttribute("tabindex","-1")}function P(a,n){const e=d(a,n);e&&r(e).toHaveAttribute("tabindex","0")}async function ta(a,n,e){await ca(()=>{const t=a.getByRole("navigation"),i=Ka(t,n);if(!i){r(e).toBe(!1);return}r(Va(i)).toBe(e)})}function j(a,n){return ta(a,n,!0)}function p(a,n){return ta(a,n,!1)}function H(a){const n=q(a),e=n.getByRole("navigation");return{canvas:n,sideNav:e}}function he(a=200){return new Promise(n=>setTimeout(n,a))}const Nn={title:"Composants/SideNav",id:"SideNav",component:ke,tags:["autodocs"],decorators:[a=>s.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:s.jsx(a,{})})],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},contrast:{control:"select",options:["low","high"]},isCollapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>s.jsx(ke,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,contrast:a.contrast,items:a.items,footerItems:a.footerItems,isCollapsed:a.isCollapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:Oa})},Oa=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),M={hasLeadingIcon:!0},R={size:"m",content:"number"},g=[{...M,id:"home",label:"Home",icon:"home"},{...M,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...M,id:"analytics",label:"Analytics",icon:"analytics"},{...M,id:"settings",label:"Settings",icon:"settings"},{...M,id:"profile",label:"Profile",icon:"user",link:"/profile"}],z=g,aa=[g[0],{...g[1],items:[{id:"overview",label:"Overview"},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...g[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},g[4]],La=[g[0],{...g[3],open:!0,items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",open:!0,items:[{id:"security",label:"Security",active:!0},{id:"api-keys",label:"API Keys"}]}]},g[4]],Wa=[g[0],{...g[1],open:!0,items:[{id:"overview",label:"Overview",active:!0},{id:"reports",label:"Reports"},{id:"analytics-nested",label:"Analytics",icon:"analytics"}]},{...g[3],items:[{id:"general",label:"General"},{id:"privacy",label:"Privacy"},{id:"advanced",label:"Advanced",icon:"settings",items:[{id:"security",label:"Security"},{id:"api-keys",label:"API Keys"}]}]},g[4]],Ae=[g[0],{...g[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...g[3],items:[{label:"General"},{label:"Privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security"},{label:"API Keys"}]}]},g[4]],Ga=[{...g[0],badge:{...R,badgeType:"indicator",count:5}},{...g[1],badge:{...R,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...R,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...R,badgeType:"indicator",count:12}}]},{...g[3],items:[{label:"General"},{label:"Privacy",badge:{...R,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...R,badgeType:"indicator",count:7},items:[{label:"Security",badge:{...R,badgeType:"indicator",count:99}},{label:"API Keys"}]}]},{...g[4],badge:{...R,badgeType:"brand",count:8}}],_e=[{...M,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...M,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...M,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],f={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},za={...f},Ya={...f,onClick:()=>{console.log("Header clicked")}},y={tags:["skip-ci"],args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:z}},te={tags:["skip-ci"],args:{...y.args,collapsible:!0}},ae={tags:["skip-ci"],args:{...y.args,headerConfig:f}},ne={tags:["skip-ci"],args:{...y.args,headerConfig:f,items:Ae,collapsible:!0}},se={tags:["skip-ci"],args:{...y.args,headerConfig:f,items:Ae,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=H(a);await n("Navigate through navigation when all menus are closed",async()=>{k(e,"Overview"),k(e,"Reports"),k(e,"Analytics"),k(e,"General"),k(e,"Privacy"),k(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),T(t),await c.tab();const i=d(e,"Dashboard");T(i),C(e,"Overview"),C(e,"Reports"),C(e,"Analytics"),await c.tab();const o=d(e,"Settings");T(o),C(e,"General"),C(e,"Privacy"),C(e,"Advanced"),await c.tab();const l=d(e,"Profile");T(l)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await c.click(t),P(e,"Overview"),P(e,"Reports"),P(e,"Analytics"),await c.tab();const i=d(e,"Overview");T(i),await c.tab();const o=d(e,"Reports");T(o),await c.tab();const l=d(e,"Analytics");T(l)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await c.click(t),k(e,"Overview"),k(e,"Reports"),k(e,"Analytics"),await c.tab();const i=d(e,"Settings");T(i),C(e,"Overview"),C(e,"Reports"),C(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await c.click(t),P(e,"General"),P(e,"Privacy"),P(e,"Advanced"),k(e,"Security"),k(e,"API Keys"),await c.tab();const i=d(e,"General");T(i),await c.tab();const o=d(e,"Privacy");T(o),await c.tab();const l=d(e,"Advanced");T(l),C(e,"Security"),C(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await c.click(t),P(e,"Security"),P(e,"API Keys"),await c.tab();const i=d(e,"Security");T(i),await c.tab();const o=d(e,"API Keys");T(o)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await c.click(t),k(e,"Security"),k(e,"API Keys"),await c.tab();const i=d(e,"Profile");T(i),C(e,"Security"),C(e,"API Keys")})}},ie={args:{...y.args,headerConfig:{...f,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=H(a);await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=Q(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},oe={args:{...y.args,headerConfig:za,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=H(a);await n("Verify header is a link when link prop is provided",async()=>{const t=Q(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=Q(e);t==null||t.focus(),r(t).toHaveFocus()})}},re={args:{...y.args,headerConfig:{...Ya,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=H(a);await n("Verify header is clickable button when onClick is provided",async()=>{const t=Q(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=Q(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(oa),await c.keyboard(ra)})}},ce={args:{...y.args,headerConfig:f,items:z,collapsible:!0,isCollapsed:!0},decorators:[Qt()],play:async({canvasElement:a,step:n})=>{const{sideNav:e}=H(a);await n("Verify tooltips appear when tabbing to navigation items",async()=>{const t=ea(e,0);r(t).not.toBeNull(),t==null||t.focus(),await he();const i=q(document.body).queryByRole("tooltip",{name:"Home"});r(i).not.toBeNull(),r(i).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await he();const t=q(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await he();const t=q(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},le={args:{...y.args,headerConfig:f,items:Ae,collapsible:!0,isCollapsed:!0},decorators:[Qt()],play:async({canvasElement:a,step:n})=>{const{sideNav:e}=H(a);await n("Verify tooltips appear when tabbing to menu items",async()=>{la(a);const t=ea(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await he();const i=q(document.body).queryByRole("tooltip",{name:"Dashboard"});r(i).not.toBeNull(),r(i).toHaveTextContent("Dashboard")})}},de={tags:["skip-ci"],args:{...y.args,headerConfig:f,items:Wa,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:e}=H(a);await n("Verify Overview nested item is active",async()=>{j(e,"overview"),p(e,"reports")})}},ve={tags:["skip-ci"],args:{...y.args,headerConfig:f,items:La,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{canvas:e}=H(a);await n("Verify only the nested leaf is active, not parent NavMenus",async()=>{j(e,"security"),p(e,"advanced"),p(e,"settings"),p(e,"api-keys")})}},ue={tags:["skip-ci"],args:{...y.args,headerConfig:f,collapsible:!0},decorators:[Xt(aa,"security")],play:async({canvasElement:a,step:n})=>{const{canvas:e}=H(a);await n("Verify only Security is active, not parent NavMenus",async()=>{j(e,"security"),p(e,"advanced"),p(e,"settings"),p(e,"api-keys")}),await n("Click API Keys and verify only API Keys is active",async()=>{const t=e.getByRole("navigation"),i=d(t,"API Keys");r(i).not.toBeNull(),await c.click(i),p(e,"security"),j(e,"api-keys"),p(e,"advanced"),p(e,"settings")})}},pe={tags:["skip-ci"],args:{...y.args,headerConfig:f,collapsible:!0},decorators:[Xt(aa,"overview")],play:async({canvasElement:a,step:n})=>{const{canvas:e}=H(a);await n("Verify Overview leaf is active initially",async()=>{j(e,"overview"),p(e,"reports"),p(e,"advanced")}),await n("Click Reports and verify only Reports is active",async()=>{const t=e.getByRole("navigation"),i=d(t,"Reports");r(i).not.toBeNull(),await c.click(i),p(e,"overview"),j(e,"reports"),p(e,"advanced")}),await n("Click Advanced NavMenu and verify only Advanced is active",async()=>{const t=e.getByRole("navigation"),i=d(t,"Settings");r(i).not.toBeNull(),await c.click(i);const o=d(t,"Advanced");r(o).not.toBeNull(),await c.click(o),p(e,"overview"),p(e,"reports"),p(e,"security"),p(e,"api-keys"),j(e,"advanced")})}},me={args:{...y.args,headerConfig:f,items:z,activeItem:"home",collapsible:!0},decorators:[qa(z)],play:async({canvasElement:a,step:n})=>{const{canvas:e}=H(a);await n("Verify Home has active class initially",async()=>{j(e,"home"),p(e,"dashboard"),p(e,"analytics"),p(e,"settings"),p(e,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const t=e.getByRole("navigation"),i=d(t,"Dashboard");r(i).not.toBeNull(),await c.click(i),p(e,"home"),j(e,"dashboard"),p(e,"analytics"),p(e,"settings"),p(e,"profile")})}},ge={args:{...y.args,headerConfig:f,items:z,footerItems:_e,collapsible:!0}},ye={args:{...y.args,headerConfig:f,items:z,footerItems:_e,collapsible:!1}},Ne={args:{...y.args,headerConfig:f,items:Ae,footerItems:_e,collapsible:!0},play:async({canvasElement:a,step:n})=>{const{sideNav:e}=H(a);await n("Verify footer items are rendered",async()=>{const t=W(e,"Settings");r(t).not.toBeNull();const i=W(e,"Help & Support");r(i).not.toBeNull();const o=W(e,"Account");r(o).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const t=W(e,"Account");await c.click(t);const i=W(e,"Preferences");r(i).not.toBeNull();const o=W(e,"Logout");r(o).not.toBeNull()})}},fe={tags:["skip-ci"],args:{...y.args,headerConfig:f,items:Ga,collapsible:!0}},Ua=[g[0],{...g[1],items:[{label:"Overview"},{label:"Reports",hasDivider:!0},{label:"Analytics",icon:"analytics"}]},{...g[2],hasDivider:!0},{...M,id:"reports",label:"Reports",icon:"info"},{...g[3],hasDivider:!0,items:[{label:"General"},{label:"Privacy",hasDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",hasDivider:!0,items:[{label:"Security"},{label:"API Keys",icon:"api-keys",hasDivider:!0},{label:"Integrations",icon:"integrations"}]}]},g[4]],be={args:{...y.args,headerConfig:f,items:Ua,collapsible:!0}};var Pe,Re,qe;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(qe=(Re=y.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var Ke,Ve,Oe;te.parameters={...te.parameters,docs:{...(Ke=te.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Oe=(Ve=te.parameters)==null?void 0:Ve.docs)==null?void 0:Oe.source}}};var Le,We,Ge;ae.parameters={...ae.parameters,docs:{...(Le=ae.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ge=(We=ae.parameters)==null?void 0:We.docs)==null?void 0:Ge.source}}};var ze,Ye,Ue;ne.parameters={...ne.parameters,docs:{...(ze=ne.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(Ue=(Ye=ne.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var $e,Je,Qe;se.parameters={...se.parameters,docs:{...($e=se.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=se.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;ie.parameters={...ie.parameters,docs:{...(Xe=ie.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=ie.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;oe.parameters={...oe.parameters,docs:{...(tt=oe.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=oe.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,it,ot;re.parameters={...re.parameters,docs:{...(st=re.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ot=(it=re.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var rt,ct,lt;ce.parameters={...ce.parameters,docs:{...(rt=ce.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(ct=ce.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var dt,vt,ut;le.parameters={...le.parameters,docs:{...(dt=le.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ut=(vt=le.parameters)==null?void 0:vt.docs)==null?void 0:ut.source}}};var pt,mt,gt;de.parameters={...de.parameters,docs:{...(pt=de.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(gt=(mt=de.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};var yt,Nt,ft;ve.parameters={...ve.parameters,docs:{...(yt=ve.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(ft=(Nt=ve.parameters)==null?void 0:Nt.docs)==null?void 0:ft.source}}};var bt,ht,wt;ue.parameters={...ue.parameters,docs:{...(bt=ue.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(wt=(ht=ue.parameters)==null?void 0:ht.docs)==null?void 0:wt.source}}};var xt,Et,At;pe.parameters={...pe.parameters,docs:{...(xt=pe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(At=(Et=pe.parameters)==null?void 0:Et.docs)==null?void 0:At.source}}};var Tt,It,Ct;me.parameters={...me.parameters,docs:{...(Tt=me.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Ct=(It=me.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};var kt,St,Bt;ge.parameters={...ge.parameters,docs:{...(kt=ge.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Bt=(St=ge.parameters)==null?void 0:St.docs)==null?void 0:Bt.source}}};var Ht,Dt,_t;ye.parameters={...ye.parameters,docs:{...(Ht=ye.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(_t=(Dt=ye.parameters)==null?void 0:Dt.docs)==null?void 0:_t.source}}};var Mt,jt,Ft;Ne.parameters={...Ne.parameters,docs:{...(Mt=Ne.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ft=(jt=Ne.parameters)==null?void 0:jt.docs)==null?void 0:Ft.source}}};var Pt,Rt,qt;fe.parameters={...fe.parameters,docs:{...(Pt=fe.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(qt=(Rt=fe.parameters)==null?void 0:Rt.docs)==null?void 0:qt.source}}};var Kt,Vt,Ot;be.parameters={...be.parameters,docs:{...(Kt=be.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(Ot=(Vt=be.parameters)==null?void 0:Vt.docs)==null?void 0:Ot.source}}};const fn=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","NestedItemActivePreselected","NestedNavMenuActivePreselected","NestedNavMenuActiveOnClick","NestedItemActiveOnClick","ActiveItemState","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{me as ActiveItemState,ce as CollapsedTooltip,le as CollapsedTooltipWithNested,te as Collapsible,y as Default,ye as FooterItemsOnly,Ne as FooterItemsWithNested,ie as HeaderClickability,oe as HeaderWithLink,re as HeaderWithOnClick,ae as HeaderWithVersion,se as KeyboardNavigation,pe as NestedItemActiveOnClick,de as NestedItemActivePreselected,ue as NestedNavMenuActiveOnClick,ve as NestedNavMenuActivePreselected,fe as WithBadges,be as WithDividers,ge as WithFooterItems,ne as WithNestedMenus,fn as __namedExportsOrder,Nn as default};
