import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as i,u as w,a as y,e as o,f as q}from"./index-4rjIhT2C.js";import{r as h}from"./index-G8LIXM5I.js";import"./timepicker.constants-CoOLuyq6.js";import{A as na}from"./Avatar-wFW5UtTD.js";import{B as sa}from"./Breadcrumbs-Bi7KbFwe.js";import{B as ia}from"./Button-CXM9p_L3.js";import{D as oa}from"./Divider-BMotkXeQ.js";import{I as $}from"./IconButton-DcIeVO_H.js";import{S as We}from"./Searchbar-DyrcWhn_.js";import{u as la}from"./useAnimatedMount-_zPBpYOt.js";import{u as ca}from"./useClickAway-DZ7FPJk_.js";import{B as da}from"./BaseDropdown-B4w0HCkF.js";import{D as ua,a as pa}from"./DropdownItem-CWLQ8RbD.js";import{c as ma}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Bc7wfgCv.js";import"./Badge-C3W4NyCk.js";import"./Link-CAnB1cKs.js";import"./Tooltip-BNzaOk9j.js";import"./auto-placement-hBju0MTR.js";import"./Overlay-BpCpHr8J.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./keyboard.constants-BverKK8B.js";import"./BaseTextInput-DraQon52.js";import"./RequiredIndicator-Cmvl3eZq.js";import"./dom.constants-Bk0jVzGk.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-D82IU-Su.js";const te=1024,ha="Navigation principale",re="Fil d'Ariane";function ba(a,r,t=0){const n=r-a.lastScrollY;if(Math.abs(n)<=t)return{...a,lastScrollY:r};const p=n>0?"down":"up";return{lastScrollY:r,lastDirection:p}}const ga=""+new URL("rte-BsegNGhf.png",import.meta.url).href,u={"rte-header":"_rte-header_1j9w5_1","rte-header-main":"_rte-header-main_1j9w5_6","rte-header-left":"_rte-header-left_1j9w5_19","rte-header-home":"_rte-header-home_1j9w5_24","rte-header-logo":"_rte-header-logo_1j9w5_37","rte-header-app-name":"_rte-header-app-name_1j9w5_43","rte-header-middle":"_rte-header-middle_1j9w5_64","rte-header-nav":"_rte-header-nav_1j9w5_72","rte-header-nav-list":"_rte-header-nav-list_1j9w5_75","rte-header-nav-item":"_rte-header-nav-item_1j9w5_84","rte-header-nav-link":"_rte-header-nav-link_1j9w5_90","rte-header-right":"_rte-header-right_1j9w5_122","rte-header-icon-buttons":"_rte-header-icon-buttons_1j9w5_130","rte-header-subheader":"_rte-header-subheader_1j9w5_149"},v={"rte-header-mobile":"_rte-header-mobile_15bza_1","rte-header-left":"_rte-header-left_15bza_8","rte-header-home":"_rte-header-home_15bza_14","rte-header-logo":"_rte-header-logo_15bza_21","rte-header-middle":"_rte-header-middle_15bza_32","rte-header-app-name":"_rte-header-app-name_15bza_40","rte-header-search":"_rte-header-search_15bza_65","rte-searchbar-container":"_rte-searchbar-container_15bza_76","rte-search-icon-container":"_rte-search-icon-container_15bza_91","rte-header-right":"_rte-header-right_15bza_102"},Ye=({homeLink:a,hasLeftSection:r,leftSectionContent:t,logoSrc:n,applicationName:p,compactSpacing:s,appearance:l,mobileSearchButtonAriaLabel:b,onSearchActiveChange:g,mobileMenuContent:m,onMobileMenuClick:T,isMobileMenuOpen:D,mobileMenuItems:M,onMobileMenuClose:N,mobileMenuIconProps:S,hasSearchbar:k})=>{const[j,f]=h.useState(!1),A=h.useRef(null),I=h.useRef(null);ca(()=>{f(R=>R&&(g==null||g(!1),!1))},A.current),h.useEffect(()=>{j&&I.current&&I.current.focus()},[j]);const{isAnimating:B}=la(j,200),C={id:"mobile-menu-dropdown",onClose:()=>N==null?void 0:N(),isList:!1,isOpen:D,position:"bottom",alignment:"end",trigger:e.jsx($,{name:(S==null?void 0:S.iconName)||"menu","aria-expanded":D,"aria-label":(S==null?void 0:S.ariaLabel)||"Menu",variant:"neutral",compactSpacing:s,onClick:T})};return e.jsxs("div",{ref:A,className:ma(v["rte-header-mobile"],"rte-header-mobile"),"data-compact":s,"data-search-state":j?"open":"closed",children:[e.jsx("div",{className:v["rte-header-left"],children:r?t||e.jsx(e.Fragment,{children:n&&e.jsx("a",{href:a,"aria-label":"Home",className:v["rte-header-home"],children:e.jsx("img",{src:n,alt:"Logo",className:v["rte-header-logo"]})})}):e.jsx(e.Fragment,{})}),e.jsxs("div",{className:v["rte-header-middle"],children:[p&&e.jsx("span",{className:v["rte-header-app-name"],"data-is-searchbar-expanded":B,"aria-hidden":B,children:p}),k&&e.jsxs("div",{className:v["rte-header-search"],children:[e.jsx("div",{className:v["rte-search-icon-container"],"data-is-searchbar-expanded":B,children:e.jsx($,{role:"button",name:"search",variant:"text",onClick:()=>{f(R=>{const _=!R;return g==null||g(_),_})},compactSpacing:s,"aria-label":b})}),e.jsx("div",{className:v["rte-searchbar-container"],"data-is-searchbar-expanded":B,children:e.jsx(We,{ref:I,compactSpacing:s,appearance:l==="brand"?"primary":"secondary",width:"100%"})})]})]}),e.jsx("div",{className:v["rte-header-right"],children:m?e.jsx(da,{...C,children:m}):M?e.jsx(ua,{...C,children:M.map((R,_)=>e.jsx(pa,{...R},_))}):e.jsx(e.Fragment,{})})]})};Ye.__docgenInfo={description:"",methods:[],displayName:"HeaderMobile",props:{homeLink:{required:!1,tsType:{name:"string"},description:""},logoSrc:{required:!1,tsType:{name:"string"},description:""},applicationName:{required:!1,tsType:{name:"string"},description:""},compactSpacing:{required:!1,tsType:{name:"boolean"},description:""},hasLeftSection:{required:!1,tsType:{name:"boolean"},description:""},appearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'}]},description:""},hasMiddleSection:{required:!1,tsType:{name:"boolean"},description:""},hasRightSection:{required:!1,tsType:{name:"boolean"},description:""},leftSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},middleSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileSearchButtonAriaLabel:{required:!1,tsType:{name:"string"},description:""},onSearchActiveChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isActive: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isActive"}],return:{name:"void"}}},description:""},mobileMenuContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onMobileMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isMobileMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},mobileMenuItems:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownItemProps"}],raw:"DropdownItemProps[]"},description:""},onMobileMenuClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},mobileMenuIconProps:{required:!1,tsType:{name:"HeaderIconButtonConfig"},description:""},hasSearchbar:{required:!1,tsType:{name:"boolean"},description:""}}};function fa(){const[a,r]=h.useState(()=>typeof window<"u"?window.innerWidth<te:!1),t=()=>r(window.innerWidth<te);return h.useEffect(()=>{if(!(typeof window>"u"))return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),{isMobile:a}}const va=({isSticky:a,showAtScrollUp:r})=>{const[t,n]=h.useState(!0);return h.useEffect(()=>{const s=(()=>{if(!a||!r)return()=>{};let l={lastScrollY:window.scrollY||0,lastDirection:"up"};const b=()=>{const g=window.scrollY||0;if(l=ba(l,g,2),g<=0){n(!0);return}n(l.lastDirection==="up")};return window.addEventListener("scroll",b,{passive:!0}),()=>window.removeEventListener("scroll",b)})();return()=>{s()}},[a,r]),{isVisible:t}},x=h.forwardRef(({logoSrc:a,applicationName:r,leftSectionContent:t,hasLeftSection:n=!0,hasRightSection:p=!0,appearance:s="brand",compactSpacing:l=!1,rightSectionContent:b,hasDivider:g=!1,subHeaderConfig:m,hasSearchbar:T=!0,searchbarProps:D,actionButton:M,iconButtons:N,navigationAriaLabel:S=ha,navigationItems:k=[],hasAvatar:j=!0,avatarProps:f,isSticky:A=!1,showAtScrollUp:I=!1,homeLink:B="/",mobileSearchButtonAriaLabel:C="Rechercher",onSearchActiveChange:R,mobileMenuContent:_,onMobileMenuClick:Ge,isMobileMenuOpen:Je=!1,mobileMenuItems:Ke,onMobileMenuClose:Xe,mobileMenuIconProps:$e,onActionButtonClick:Qe,onIconButtonClick:J},Ze)=>{const{isMobile:ea}=fa(),aa=N&&N.length>0,ta=k&&k.length>0,{isVisible:ra}=va({isSticky:A,showAtScrollUp:I});return e.jsxs("header",{ref:Ze,role:"banner",className:u["rte-header"],"data-compact":l,"data-appearance":s,"data-sticky":A,"data-visible":ra,children:[e.jsx("div",{className:u["rte-header-main"],"data-compact":l,children:ea?e.jsx(Ye,{homeLink:B,logoSrc:a,applicationName:r,hasLeftSection:n,leftSectionContent:t,compactSpacing:l,appearance:s,mobileSearchButtonAriaLabel:C,onSearchActiveChange:R,mobileMenuContent:_,onMobileMenuClick:Ge,isMobileMenuOpen:Je,mobileMenuItems:Ke,onMobileMenuClose:Xe,mobileMenuIconProps:$e,hasSearchbar:T}):e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsx("div",{className:u["rte-header-left"],children:n?t||e.jsxs("a",{href:B,className:u["rte-header-home"],children:[a&&e.jsx("img",{src:a,alt:"Logo",className:u["rte-header-logo"]}),r&&e.jsx("span",{className:u["rte-header-app-name"],children:r})]}):e.jsx(e.Fragment,{})}),ta&&e.jsx("div",{className:u["rte-header-middle"],children:e.jsx("div",{className:u["rte-header-nav"],"aria-label":S,children:e.jsx("ul",{className:u["rte-header-nav-list"],children:k.map((c,K)=>e.jsx("li",{className:u["rte-header-nav-item"],"data-disabled":c.disabled,children:e.jsx("a",{href:c.href,"aria-label":c.ariaLabel||c.label,className:u["rte-header-nav-link"],"aria-disabled":c.disabled,"aria-current":c.active?"page":void 0,tabIndex:c.disabled?-1:0,"data-active":c.active,"data-disabled":c.disabled,children:c.label})},K))})})}),p&&e.jsxs("div",{className:u["rte-header-right"],children:[e.jsx("div",{children:T&&e.jsx(We,{...D,appearance:s==="brand"?"primary":"secondary",compactSpacing:l})}),M&&e.jsx(ia,{type:"button",label:M.label,icon:M.iconName,disabled:M.disabled,size:l?"s":"m",variant:s==="brand"?"primary":"neutral",onClick:Qe}),aa&&e.jsx("div",{className:u["rte-header-icon-buttons"],children:N.map((c,K)=>{var Q,Z,ee,ae;return e.jsx("div",{className:u["rte-header-icon-button-wrapper"],children:e.jsx($,{name:c.iconName,"aria-label":c.ariaLabel,disabled:c.disabled,size:l?"m":"l",variant:s==="brand"?"text":"neutral",badgeCount:(Q=c.badge)==null?void 0:Q.count,badgeContent:(Z=c.badge)==null?void 0:Z.content,badgeIcon:(ee=c.badge)==null?void 0:ee.icon,badgeType:(ae=c.badge)==null?void 0:ae.badgeType,onClick:()=>J==null?void 0:J(c.iconName)})},K)})}),j&&f&&e.jsx(na,{size:l?24:32,imgSrc:f.imgSrc,alt:f.alt,initials:f.initials,onClick:f.onClick,colorType:f.colorType,layout:f.layout,status:f.status}),b]})]})}),g&&e.jsx(oa,{}),m&&e.jsx("div",{className:u["rte-header-subheader"],"data-is-compact":l,children:e.jsx("nav",{className:u["rte-header-breadcrumbs"],"aria-label":(m==null?void 0:m.ariaLabel)||re,children:e.jsx(sa,{items:(m==null?void 0:m.items)||[],"aria-label":(m==null?void 0:m.ariaLabel)||re})})})]})});x.__docgenInfo={description:"",methods:[],displayName:"Header",props:{leftSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileMenuContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileMenuIconProps:{required:!1,tsType:{name:"HeaderIconButtonConfig"},description:""},searchbarProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Searchbar>",elements:[{name:"Searchbar"}]},description:""},hasLeftSection:{defaultValue:{value:"true",computed:!1},required:!1},hasRightSection:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},hasDivider:{defaultValue:{value:"false",computed:!1},required:!1},hasSearchbar:{defaultValue:{value:"true",computed:!1},required:!1},navigationAriaLabel:{defaultValue:{value:'"Navigation principale"',computed:!1},required:!1},navigationItems:{defaultValue:{value:"[]",computed:!1},required:!1},hasAvatar:{defaultValue:{value:"true",computed:!1},required:!1},isSticky:{defaultValue:{value:"false",computed:!1},required:!1},showAtScrollUp:{defaultValue:{value:"false",computed:!1},required:!1},homeLink:{defaultValue:{value:'"/"',computed:!1},required:!1},mobileSearchButtonAriaLabel:{defaultValue:{value:'"Rechercher"',computed:!1},required:!1},isMobileMenuOpen:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreHeaderProps","Omit"]};const Qa={title:"Composants/Header/Header",component:x,tags:["autodocs"],parameters:{viewport:{defaultViewport:"desktop"}}},d={args:{logoSrc:ga,applicationName:"Nom de l'application",compactSpacing:!1,appearance:"brand",hasDivider:!1,hasAvatar:!0,hasSearchbar:!0,actionButton:{label:"Partager",iconName:"share"},iconButtons:[{iconName:"notification",ariaLabel:"Notification",badge:{count:3,badgeType:"indicator",size:"s",content:"number"}},{iconName:"map",ariaLabel:"Map"},{iconName:"info",ariaLabel:"Help"},{iconName:"settings",ariaLabel:"Settings"}],navigationItems:[{label:"Accueil",href:"/"},{label:"Tableau de bord",href:"/dashboard",active:!0},{label:"Documentation",href:"/documentation",disabled:!0}],avatarProps:{alt:"Profil",initials:"JD",layout:"initials",colorType:"brand",status:"available"},subHeaderConfig:{items:[{label:"Accueil",link:"/"},{label:"Section",link:"/section"},{label:"Page active",link:"/active-page"}],ariaLabel:"Breadcrumbs"}}},H={args:{...d.args,appearance:"neutral"}},E={args:{...d.args,compactSpacing:!0},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(x,{...a}),e.jsx(x,{...a,appearance:"neutral"})]})},L={args:{...d.args,navigationItems:void 0}},V={args:{...d.args,isSticky:!0,showAtScrollUp:!1},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...a}),e.jsxs("div",{style:{margin:"1rem 12rem"},children:[e.jsx("h2",{style:{margin:0},children:"Sticky Header"}),e.jsx("p",{children:"Scroll down to see the sticky header in action."}),e.jsx("div",{style:{borderRadius:"12px",height:"200vh",background:"rgba(0, 0, 0, 0.04)"}})]})]})},P={args:{...d.args,isSticky:!0,showAtScrollUp:!0},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...a}),e.jsxs("div",{style:{margin:"1rem 12rem"},children:[e.jsx("h2",{style:{margin:0},children:"Show at Scroll Up"}),e.jsx("p",{children:"Scroll down and then scroll up to see the header reappear."}),e.jsx("div",{style:{borderRadius:"12px",height:"200vh",background:"rgba(0, 0, 0, 0.04)"}})]})]})},F={args:{...d.args,rightSectionContent:e.jsx("div",{style:{width:"36px",height:"36px",backgroundColor:"rgba(255, 0, 0, 0.1)",borderRadius:"4px"}})}},O={args:{...d.args,leftSectionContent:e.jsx("div",{style:{width:"36px",height:"36px",backgroundColor:"rgba(255, 0, 0, 0.1)",borderRadius:"4px"}})}},z={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...d.args,hasSearchbar:!0},render:a=>{const[r,t]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{...a,onSearchActiveChange:t}),e.jsx("div",{style:{margin:"1rem"},children:e.jsxs("p",{style:{fontFamily:"monospace"},children:["isSearchActive: ",e.jsx("strong",{children:r?"true":"false"})]})})]})},play:async({canvasElement:a})=>{const r=i(a),t=r.getByRole("banner");await y(()=>{o(i(t).getByText("Nom de l'application")).toBeVisible(),o(i(t).queryByRole("search")).toBeNull(),X(a,"closed")});const n=i(t).getByRole("button",{name:"Rechercher"});await w.click(n),await y(()=>{o(i(t).getByRole("search")).toBeVisible(),ya(t),ne(a,!0),X(a,"open")});const p=i(t).getByRole("textbox");await w.type(p,"abc"),await w.click(r.getByText("isSearchActive:")),await y(()=>{o(i(t).getByText("Nom de l'application")).toBeVisible(),o(i(t).queryByRole("search")).toBeNull(),ne(a,!1),X(a,"closed")})}},U={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...d.args,applicationName:"Nom de l'application avec un nom très long"}},W={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...d.args,mobileMenuItems:[{label:"Profil",link:"/profile"},{label:"Paramètres",link:"/settings"},{label:"Déconnexion",link:"/logout"}]},render:a=>{var l;const[r,t]=h.useState(!1),[n,p]=h.useState(void 0),s=((l=a.mobileMenuItems)==null?void 0:l.map(b=>({...b,onClick:()=>p(b.label)})))||[];return e.jsxs(e.Fragment,{children:[e.jsx(x,{...a,mobileMenuItems:s,onMobileMenuClick:()=>t(b=>!b),isMobileMenuOpen:r,onMobileMenuClose:()=>t(!1)}),e.jsx("div",{style:{margin:"1rem"},children:e.jsxs("p",{style:{fontFamily:"monospace"},"data-testid":"intercepted-selected-item-id",children:["selectedMenuItem: ",e.jsx("strong",{children:n||"none"})]})})]})},play:async({canvasElement:a})=>{const r=i(a),t=i(a.ownerDocument.body),n=r.getByRole("banner");await w.click(i(n).getByRole("button",{name:"Menu"})),await y(()=>{o(i(n).getByRole("button",{name:"Menu"})).toHaveAttribute("aria-expanded","true")}),await y(()=>{o(t.getAllByRole("menuitem").length).toBeGreaterThan(0)});const s=t.getAllByRole("menuitem").find(l=>(l.textContent||"").includes("Paramètres"));o(s).toBeTruthy(),await w.click(s),await y(()=>{o(r.getByTestId("intercepted-selected-item-id")).toHaveTextContent("Paramètres"),o(i(n).getByRole("button",{name:"Menu"})).toHaveAttribute("aria-expanded","false")})}},Y={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...d.args,mobileMenuContent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"8px"},children:[e.jsx("a",{href:"/profile",children:"Profil"}),e.jsx("a",{href:"/settings",children:"Paramètres"}),e.jsx("a",{href:"/logout",children:"Déconnexion"})]})},render:a=>{const[r,t]=h.useState(!1);return e.jsx(e.Fragment,{children:e.jsx(x,{...a,onMobileMenuClick:()=>t(n=>!n),isMobileMenuOpen:r,onMobileMenuClose:()=>t(!1)})})}};var se;const G={args:{...d.args,searchbarProps:{label:"Rechercher",assistiveText:"Rechercher dans l'application",value:"rte",onSearch:q()},onActionButtonClick:q(),onIconButtonClick:q(),avatarProps:{...(se=d.args)==null?void 0:se.avatarProps,onClick:q()}},play:async({args:a,canvasElement:r})=>{const n=i(r).getByRole("banner"),p=i(n).getByRole("search");await w.click(i(p).getByRole("button",{name:"Rechercher"})),await y(()=>{var s;o((s=a.searchbarProps)==null?void 0:s.onSearch).toHaveBeenCalledWith("rte")}),await w.click(i(n).getByRole("button",{name:"Partager"})),await y(()=>{o(a.onActionButtonClick).toHaveBeenCalled()}),await w.click(i(n).getByRole("button",{name:"Notification"})),await y(()=>{o(a.onIconButtonClick).toHaveBeenCalledWith("notification")}),await w.click(i(n).getByRole("button",{name:"Avatar button"})),await y(()=>{var s;o((s=a.avatarProps)==null?void 0:s.onClick).toHaveBeenCalled()})}};function X(a,r){const t=a.querySelector(".rte-header-mobile");o(t).not.toBeNull(),o(t).toHaveAttribute("data-search-state",r)}function ne(a,r){const t=a.querySelector('[role="banner"]');o(t).not.toBeNull();const n=i(t).getByText("Nom de l'application");r?o(n).toHaveAttribute("aria-hidden","true"):o(n).not.toHaveAttribute("aria-hidden","true")}function ya(a,r){const t=i(a).getByText("Nom de l'application");o(t).not.toBeVisible()}var ie,oe,le;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    logoSrc: headerStoryRteLogoUrl,
    applicationName: "Nom de l'application",
    compactSpacing: false,
    appearance: "brand",
    hasDivider: false,
    hasAvatar: true,
    hasSearchbar: true,
    actionButton: {
      label: "Partager",
      iconName: "share"
    },
    iconButtons: [{
      iconName: "notification",
      ariaLabel: "Notification",
      badge: {
        count: 3,
        badgeType: "indicator",
        size: "s",
        content: "number"
      }
    }, {
      iconName: "map",
      ariaLabel: "Map"
    }, {
      iconName: "info",
      ariaLabel: "Help"
    }, {
      iconName: "settings",
      ariaLabel: "Settings"
    }],
    navigationItems: [{
      label: "Accueil",
      href: "/"
    }, {
      label: "Tableau de bord",
      href: "/dashboard",
      active: true
    }, {
      label: "Documentation",
      href: "/documentation",
      disabled: true
    }],
    avatarProps: {
      alt: "Profil",
      initials: "JD",
      layout: "initials",
      colorType: "brand",
      status: "available"
    },
    subHeaderConfig: {
      items: [{
        label: "Accueil",
        link: "/"
      }, {
        label: "Section",
        link: "/section"
      }, {
        label: "Page active",
        link: "/active-page"
      }],
      ariaLabel: "Breadcrumbs"
    }
  }
}`,...(le=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,ue;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral"
  }
}`,...(ue=(de=H.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,he;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compactSpacing: true
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  }}>
      <Header {...args} />
      <Header {...args} appearance="neutral" />
    </div>
}`,...(he=(me=E.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var be,ge,fe;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    navigationItems: undefined
  }
}`,...(fe=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ve,ye,we;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSticky: true,
    showAtScrollUp: false
  },
  render: args => <>
      <Header {...args} />
      <div style={{
      margin: "1rem 12rem"
    }}>
        <h2 style={{
        margin: 0
      }}>Sticky Header</h2>
        <p>Scroll down to see the sticky header in action.</p>
        <div style={{
        borderRadius: "12px",
        height: "200vh",
        background: "rgba(0, 0, 0, 0.04)"
      }}></div>
      </div>
    </>
}`,...(we=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var xe,Se,Re;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSticky: true,
    showAtScrollUp: true
  },
  render: args => <>
      <Header {...args} />
      <div style={{
      margin: "1rem 12rem"
    }}>
        <h2 style={{
        margin: 0
      }}>Show at Scroll Up</h2>
        <p>Scroll down and then scroll up to see the header reappear.</p>
        <div style={{
        borderRadius: "12px",
        height: "200vh",
        background: "rgba(0, 0, 0, 0.04)"
      }}></div>
      </div>
    </>
}`,...(Re=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:Re.source}}};var Me,Ne,Be;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightSectionContent: <div style={{
      width: "36px",
      height: "36px",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      borderRadius: "4px"
    }}></div>
  }
}`,...(Be=(Ne=F.parameters)==null?void 0:Ne.docs)==null?void 0:Be.source}}};var je,_e,ke;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftSectionContent: <div style={{
      width: "36px",
      height: "36px",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      borderRadius: "4px"
    }}></div>
  }
}`,...(ke=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var Ae,Ie,Te;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  },
  args: {
    ...Default.args,
    hasSearchbar: true
  },
  render: args => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    return <>
        <Header {...args} onSearchActiveChange={setIsSearchActive} />
        <div style={{
        margin: "1rem"
      }}>
          <p style={{
          fontFamily: "monospace"
        }}>
            isSearchActive: <strong>{isSearchActive ? "true" : "false"}</strong>
          </p>
        </div>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("banner");
    await waitFor(() => {
      expect(within(header).getByText("Nom de l'application")).toBeVisible();
      expect(within(header).queryByRole("search")).toBeNull();
      assertHeaderMobileSearchShellState(canvasElement, "closed");
    });
    const openSearchButton = within(header).getByRole("button", {
      name: "Rechercher"
    });
    await userEvent.click(openSearchButton);
    await waitFor(() => {
      expect(within(header).getByRole("search")).toBeVisible();
      assertHeaderApplicationNameVisuallyHidden(header, true);
      assertHeaderApplicationNameScreenReaderHidden(canvasElement, true);
      assertHeaderMobileSearchShellState(canvasElement, "open");
    });
    const searchInput = within(header).getByRole("textbox");
    await userEvent.type(searchInput, "abc");
    await userEvent.click(canvas.getByText("isSearchActive:"));
    await waitFor(() => {
      expect(within(header).getByText("Nom de l'application")).toBeVisible();
      expect(within(header).queryByRole("search")).toBeNull();
      assertHeaderApplicationNameScreenReaderHidden(canvasElement, false);
      assertHeaderMobileSearchShellState(canvasElement, "closed");
    });
  }
}`,...(Te=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};var De,Ce,qe;U.parameters={...U.parameters,docs:{...(De=U.parameters)==null?void 0:De.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  },
  args: {
    ...Default.args,
    applicationName: "Nom de l'application avec un nom très long"
  }
}`,...(qe=(Ce=U.parameters)==null?void 0:Ce.docs)==null?void 0:qe.source}}};var He,Ee,Le;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  },
  args: {
    ...Default.args,
    mobileMenuItems: [{
      label: "Profil",
      link: "/profile"
    }, {
      label: "Paramètres",
      link: "/settings"
    }, {
      label: "Déconnexion",
      link: "/logout"
    }]
  },
  render: args => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState<string | undefined>(undefined);
    const updatedMenuItems = args.mobileMenuItems?.map(item => ({
      ...item,
      onClick: () => setSelectedMenuItem(item.label)
    })) || [];
    return <>
        <Header {...args} mobileMenuItems={updatedMenuItems} onMobileMenuClick={() => setIsMobileMenuOpen(open => !open)} isMobileMenuOpen={isMobileMenuOpen} onMobileMenuClose={() => setIsMobileMenuOpen(false)} />
        <div style={{
        margin: "1rem"
      }}>
          <p style={{
          fontFamily: "monospace"
        }} data-testid="intercepted-selected-item-id">
            selectedMenuItem: <strong>{selectedMenuItem || "none"}</strong>
          </p>
        </div>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const header = canvas.getByRole("banner");
    await userEvent.click(within(header).getByRole("button", {
      name: "Menu"
    }));
    await waitFor(() => {
      expect(within(header).getByRole("button", {
        name: "Menu"
      })).toHaveAttribute("aria-expanded", "true");
    });
    await waitFor(() => {
      expect(body.getAllByRole("menuitem").length).toBeGreaterThan(0);
    });
    const menuItems = body.getAllByRole("menuitem");
    const shortcutsItem = menuItems.find(menuItem => (menuItem.textContent || "").includes("Paramètres"));
    expect(shortcutsItem).toBeTruthy();
    await userEvent.click(shortcutsItem as HTMLElement);
    await waitFor(() => {
      expect(canvas.getByTestId("intercepted-selected-item-id")).toHaveTextContent("Paramètres");
      expect(within(header).getByRole("button", {
        name: "Menu"
      })).toHaveAttribute("aria-expanded", "false");
    });
  }
}`,...(Le=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Ve,Pe,Fe;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  },
  args: {
    ...Default.args,
    mobileMenuContent: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      padding: "8px"
    }}>
        <a href="/profile">Profil</a>
        <a href="/settings">Paramètres</a>
        <a href="/logout">Déconnexion</a>
      </div>
  },
  render: args => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return <>
        <Header {...args} onMobileMenuClick={() => setIsMobileMenuOpen(open => !open)} isMobileMenuOpen={isMobileMenuOpen} onMobileMenuClose={() => setIsMobileMenuOpen(false)} />
      </>;
  }
}`,...(Fe=(Pe=Y.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var Oe,ze,Ue;G.parameters={...G.parameters,docs:{...(Oe=G.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    searchbarProps: {
      label: "Rechercher",
      assistiveText: "Rechercher dans l'application",
      value: "rte",
      onSearch: fn()
    },
    onActionButtonClick: fn(),
    onIconButtonClick: fn(),
    avatarProps: {
      ...Default.args?.avatarProps,
      onClick: fn()
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole("banner");
    const searchRegion = within(header).getByRole("search");
    await userEvent.click(within(searchRegion).getByRole("button", {
      name: "Rechercher"
    }));
    await waitFor(() => {
      expect(args.searchbarProps?.onSearch).toHaveBeenCalledWith("rte");
    });
    await userEvent.click(within(header).getByRole("button", {
      name: "Partager"
    }));
    await waitFor(() => {
      expect(args.onActionButtonClick).toHaveBeenCalled();
    });
    await userEvent.click(within(header).getByRole("button", {
      name: "Notification"
    }));
    await waitFor(() => {
      expect(args.onIconButtonClick).toHaveBeenCalledWith("notification");
    });
    await userEvent.click(within(header).getByRole("button", {
      name: "Avatar button"
    }));
    await waitFor(() => {
      expect(args.avatarProps?.onClick).toHaveBeenCalled();
    });
  }
}`,...(Ue=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:Ue.source}}};const Za=["Default","Neutral","Compact","NoMidSection","Sticky","ShowAtScrollUp","WithRightSectionContent","WithLeftSectionContent","MobileSearchInteraction","MobileLongApplicationName","MobileMenuItems","MobileMenuContent","DesktopInteraction"];export{E as Compact,d as Default,G as DesktopInteraction,U as MobileLongApplicationName,Y as MobileMenuContent,W as MobileMenuItems,z as MobileSearchInteraction,H as Neutral,L as NoMidSection,P as ShowAtScrollUp,V as Sticky,O as WithLeftSectionContent,F as WithRightSectionContent,Za as __namedExportsOrder,Qa as default};
