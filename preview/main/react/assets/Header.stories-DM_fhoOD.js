import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as i,u as y,a as b,e as o,f as D}from"./index-C4S39nCK.js";import{r as p}from"./index-G8LIXM5I.js";import"./timepicker.constants-V9Xrpx_a.js";import{A as ta}from"./Avatar-DqoCCHjb.js";import{B as na}from"./Breadcrumbs-BMTp0pNF.js";import{B as ia}from"./Button-b4mHgHU2.js";import{D as oa}from"./Divider-BMotkXeQ.js";import{I as $}from"./IconButton-HZdrGdmr.js";import{S as Ue}from"./Searchbar-Bz3cxfHG.js";import{u as ua}from"./useAnimatedMount-_zPBpYOt.js";import{u as ma}from"./useClickAway-DZ7FPJk_.js";import{B as sa}from"./BaseDropdown-B_KNdBqD.js";import{D as va,a as ca}from"./DropdownItem-zq4XErAk.js";import{c as da}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./Badge-krITzoP9.js";import"./Link-DLPtM2IA.js";import"./Tooltip-CfBhtBRO.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./Overlay-DBpi9Esw.js";import"./index-BaBTCQBq.js";import"./index-B6ujFmsw.js";import"./common-button.constants-eNlmcvUj.js";import"./keyboard.constants-BverKK8B.js";import"./BaseTextInput-BOArbopk.js";import"./Label-BZwpSmrJ.js";import"./dom.constants-Bk0jVzGk.js";import"./useScrollEvent-BvD0VCKE.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-C8hWUkyN.js";const le=1024,pa="Navigation principale",re="Fil d'Ariane";function ha(a,r,l=0){const t=r-a.lastScrollY;if(Math.abs(t)<=l)return{...a,lastScrollY:r};const c=t>0?"down":"up";return{lastScrollY:r,lastDirection:c}}const fa=""+new URL("rte-BsegNGhf.png",import.meta.url).href,v={"rte-header":"_rte-header_qh4zt_1","rte-header-main":"_rte-header-main_qh4zt_6","rte-header-left":"_rte-header-left_qh4zt_19","rte-header-home":"_rte-header-home_qh4zt_24","rte-header-logo":"_rte-header-logo_qh4zt_37","rte-header-app-name":"_rte-header-app-name_qh4zt_43","rte-header-middle":"_rte-header-middle_qh4zt_64","rte-header-nav":"_rte-header-nav_qh4zt_72","rte-header-nav-list":"_rte-header-nav-list_qh4zt_75","rte-header-nav-item":"_rte-header-nav-item_qh4zt_84","rte-header-nav-link":"_rte-header-nav-link_qh4zt_91","rte-header-right":"_rte-header-right_qh4zt_123","rte-header-icon-buttons":"_rte-header-icon-buttons_qh4zt_131","rte-header-subheader":"_rte-header-subheader_qh4zt_150"},w={"rte-header-mobile":"_rte-header-mobile_47uhc_1","rte-header-left":"_rte-header-left_47uhc_9","rte-header-home":"_rte-header-home_47uhc_15","rte-header-logo":"_rte-header-logo_47uhc_22","rte-header-middle":"_rte-header-middle_47uhc_33","rte-header-app-name":"_rte-header-app-name_47uhc_41","rte-header-search":"_rte-header-search_47uhc_67","rte-searchbar-container":"_rte-searchbar-container_47uhc_78","rte-search-icon-container":"_rte-search-icon-container_47uhc_93","rte-header-right":"_rte-header-right_47uhc_104"},We=({homeLink:a,hasLeftSection:r,leftSectionContent:l,logoSrc:t,applicationName:c,compactSpacing:n,appearance:u,mobileSearchButtonAriaLabel:h,onSearchActiveChange:f,mobileMenuContent:d,onMobileMenuClick:T,isMobileMenuOpen:q,mobileMenuItems:R,onMobileMenuClose:I,mobileMenuIconProps:k,hasSearchbar:_})=>{const[M,g]=p.useState(!1),j=p.useRef(null),A=p.useRef(null);ma(()=>{g(S=>S&&(f==null||f(!1),!1))},j.current),p.useEffect(()=>{M&&A.current&&A.current.focus()},[M]);const{isAnimating:B}=ua(M,200),C={id:"mobile-menu-dropdown",onClose:()=>I==null?void 0:I(),isList:!1,isOpen:q,position:"bottom",alignment:"end",trigger:e.jsx($,{name:(k==null?void 0:k.iconName)||"menu","aria-expanded":q,"aria-label":(k==null?void 0:k.ariaLabel)||"Menu",variant:"neutral",compactSpacing:n,onClick:T})};return e.jsxs("div",{ref:j,className:da(w["rte-header-mobile"],"rte-header-mobile"),"data-compact":n,"data-search-state":M?"open":"closed",children:[e.jsx("div",{className:w["rte-header-left"],children:r?l||e.jsx(e.Fragment,{children:t&&e.jsx("a",{href:a,"aria-label":"Home",className:w["rte-header-home"],children:e.jsx("img",{src:t,alt:"Logo",className:w["rte-header-logo"]})})}):e.jsx(e.Fragment,{})}),e.jsxs("div",{className:w["rte-header-middle"],children:[c&&e.jsx("span",{className:w["rte-header-app-name"],"data-is-searchbar-expanded":B,"aria-hidden":B,children:c}),_&&e.jsxs("div",{className:w["rte-header-search"],children:[e.jsx("div",{className:w["rte-search-icon-container"],"data-is-searchbar-expanded":B,children:e.jsx($,{role:"button",name:"search",variant:"text",onClick:()=>{g(S=>{const N=!S;return f==null||f(N),N})},compactSpacing:n,"aria-label":h})}),e.jsx("div",{className:w["rte-searchbar-container"],"data-is-searchbar-expanded":B,children:e.jsx(Ue,{ref:A,compactSpacing:n,appearance:u==="brand"?"primary":"secondary",width:"100%"})})]})]}),e.jsx("div",{className:w["rte-header-right"],children:d?e.jsx(sa,{...C,children:d}):R?e.jsx(va,{...C,children:R.map((S,N)=>e.jsx(ca,{...S},N))}):e.jsx(e.Fragment,{})})]})};We.__docgenInfo={description:"",methods:[],displayName:"HeaderMobile",props:{homeLink:{required:!1,tsType:{name:"string"},description:""},logoSrc:{required:!1,tsType:{name:"string"},description:""},applicationName:{required:!1,tsType:{name:"string"},description:""},compactSpacing:{required:!1,tsType:{name:"boolean"},description:""},hasLeftSection:{required:!1,tsType:{name:"boolean"},description:""},appearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'}]},description:""},hasMiddleSection:{required:!1,tsType:{name:"boolean"},description:""},hasRightSection:{required:!1,tsType:{name:"boolean"},description:""},leftSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},middleSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileSearchButtonAriaLabel:{required:!1,tsType:{name:"string"},description:""},onSearchActiveChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isActive: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isActive"}],return:{name:"void"}}},description:""},mobileMenuContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onMobileMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isMobileMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},mobileMenuItems:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownItemProps"}],raw:"DropdownItemProps[]"},description:""},onMobileMenuClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},mobileMenuIconProps:{required:!1,tsType:{name:"HeaderIconButtonConfig",elements:[{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-compare"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:'"circuit-capacitor"'},{name:"literal",value:'"circuit-cell"'},{name:"literal",value:'"circuit-ground"'},{name:"literal",value:'"circuit-inductor"'},{name:"literal",value:"close"},{name:"literal",value:"company"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"euro"},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:'"format-align-center"'},{name:"literal",value:'"format-align-justify"'},{name:"literal",value:'"format-align-left"'},{name:"literal",value:'"format-align-right"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:"pylon"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:'"swap-horiz"'},{name:"literal",value:'"swap-vert"'},{name:"literal",value:"thermostat"},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:'"circuit-amperemetre"'},{name:"literal",value:'"circuit-bulb"'},{name:"literal",value:'"circuit-generator"'},{name:"literal",value:'"circuit-motor"'},{name:"literal",value:'"circuit-voltmetre"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"contact"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:'"energy-savings-leaf"'},{name:"literal",value:"eraser"},{name:"literal",value:"error"},{name:"literal",value:'"event-next"'},{name:"literal",value:'"event-repeat"'},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"export-xls"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"handshake"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"journal"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"linked-services"'},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-add"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:"version"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>"},description:""},hasSearchbar:{required:!1,tsType:{name:"boolean"},description:""}}};function ga(){const[a,r]=p.useState(()=>typeof window<"u"?window.innerWidth<le:!1),l=()=>r(window.innerWidth<le);return p.useEffect(()=>{if(!(typeof window>"u"))return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),{isMobile:a}}const wa=({isSticky:a,showAtScrollUp:r})=>{const[l,t]=p.useState(!0);return p.useEffect(()=>{const n=(()=>{if(!a||!r)return()=>{};let u={lastScrollY:window.scrollY||0,lastDirection:"up"};const h=()=>{const f=window.scrollY||0;if(u=ha(u,f,2),f<=0){t(!0);return}t(u.lastDirection==="up")};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)})();return()=>{n()}},[a,r]),{isVisible:l}},x=p.forwardRef(({logoSrc:a,applicationName:r,leftSectionContent:l,hasLeftSection:t=!0,hasRightSection:c=!0,appearance:n="brand",compactSpacing:u=!1,rightSectionContent:h,hasDivider:f=!1,subHeaderConfig:d,hasSearchbar:T=!0,searchbarProps:q,actionButton:R,iconButtons:I,navigationAriaLabel:k=pa,navigationItems:_=[],hasAvatar:M=!0,avatarProps:g,isSticky:j=!1,showAtScrollUp:A=!1,homeLink:B="/",mobileSearchButtonAriaLabel:C="Rechercher",onSearchActiveChange:S,mobileMenuContent:N,onMobileMenuClick:Ye,isMobileMenuOpen:Ge=!1,mobileMenuItems:Je,onMobileMenuClose:Xe,mobileMenuIconProps:$e,onActionButtonClick:Qe,onIconButtonClick:G},Ze)=>{const{isMobile:ea}=ga(),aa=I&&I.length>0,la=_&&_.length>0,{isVisible:ra}=wa({isSticky:j,showAtScrollUp:A});return e.jsxs("header",{ref:Ze,role:"banner",className:v["rte-header"],"data-compact":u,"data-appearance":n,"data-sticky":j,"data-visible":ra,children:[e.jsx("div",{className:v["rte-header-main"],"data-compact":u,children:ea?e.jsx(We,{homeLink:B,logoSrc:a,applicationName:r,hasLeftSection:t,leftSectionContent:l,compactSpacing:u,appearance:n,mobileSearchButtonAriaLabel:C,onSearchActiveChange:S,mobileMenuContent:N,onMobileMenuClick:Ye,isMobileMenuOpen:Ge,mobileMenuItems:Je,onMobileMenuClose:Xe,mobileMenuIconProps:$e,hasSearchbar:T}):e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsx("div",{className:v["rte-header-left"],children:t?l||e.jsxs("a",{href:B,className:v["rte-header-home"],children:[a&&e.jsx("img",{src:a,alt:"Logo",className:v["rte-header-logo"]}),r&&e.jsx("span",{className:v["rte-header-app-name"],children:r})]}):e.jsx(e.Fragment,{})}),la&&e.jsx("div",{className:v["rte-header-middle"],children:e.jsx("div",{className:v["rte-header-nav"],"aria-label":k,children:e.jsx("ul",{className:v["rte-header-nav-list"],children:_.map((m,J)=>e.jsx("li",{className:v["rte-header-nav-item"],"data-disabled":m.disabled,children:e.jsx("a",{href:m.href,"aria-label":m.ariaLabel||m.label,className:v["rte-header-nav-link"],"aria-disabled":m.disabled,"aria-current":m.active?"page":void 0,tabIndex:m.disabled?-1:0,"data-active":m.active,"data-disabled":m.disabled,children:m.label})},J))})})}),c&&e.jsxs("div",{className:v["rte-header-right"],children:[e.jsx("div",{children:T&&e.jsx(Ue,{...q,appearance:n==="brand"?"primary":"secondary",compactSpacing:u})}),R&&e.jsx(ia,{type:"button",label:R.label,icon:R.iconName,disabled:R.disabled,size:u?"s":"m",variant:n==="brand"?"primary":"neutral",onClick:Qe}),aa&&e.jsx("div",{className:v["rte-header-icon-buttons"],children:I.map((m,J)=>{var Q,Z,ee,ae;return e.jsx("div",{className:v["rte-header-icon-button-wrapper"],children:e.jsx($,{name:m.iconName,"aria-label":m.ariaLabel,disabled:m.disabled,size:u?"m":"l",variant:n==="brand"?"text":"neutral",badgeCount:(Q=m.badge)==null?void 0:Q.count,badgeContent:(Z=m.badge)==null?void 0:Z.content,badgeIcon:(ee=m.badge)==null?void 0:ee.icon,badgeType:(ae=m.badge)==null?void 0:ae.badgeType,onClick:()=>G==null?void 0:G(m.iconName)})},J)})}),M&&g&&e.jsx(ta,{size:u?24:32,imgSrc:g.imgSrc,alt:g.alt,initials:g.initials,onClick:g.onClick,colorType:g.colorType,layout:g.layout,status:g.status}),h]})]})}),f&&e.jsx(oa,{}),d&&e.jsx("div",{className:v["rte-header-subheader"],"data-is-compact":u,children:e.jsx("nav",{className:v["rte-header-breadcrumbs"],"aria-label":(d==null?void 0:d.ariaLabel)||re,children:e.jsx(na,{items:(d==null?void 0:d.items)||[],"aria-label":(d==null?void 0:d.ariaLabel)||re})})})]})});x.__docgenInfo={description:"",methods:[],displayName:"Header",props:{iconButtons:{required:!1,tsType:{name:"Array",elements:[{name:"HeaderIconButtonConfig",elements:[{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-compare"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:'"circuit-capacitor"'},{name:"literal",value:'"circuit-cell"'},{name:"literal",value:'"circuit-ground"'},{name:"literal",value:'"circuit-inductor"'},{name:"literal",value:"close"},{name:"literal",value:"company"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"euro"},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:'"format-align-center"'},{name:"literal",value:'"format-align-justify"'},{name:"literal",value:'"format-align-left"'},{name:"literal",value:'"format-align-right"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:"pylon"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:'"swap-horiz"'},{name:"literal",value:'"swap-vert"'},{name:"literal",value:"thermostat"},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:'"circuit-amperemetre"'},{name:"literal",value:'"circuit-bulb"'},{name:"literal",value:'"circuit-generator"'},{name:"literal",value:'"circuit-motor"'},{name:"literal",value:'"circuit-voltmetre"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"contact"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:'"energy-savings-leaf"'},{name:"literal",value:"eraser"},{name:"literal",value:"error"},{name:"literal",value:'"event-next"'},{name:"literal",value:'"event-repeat"'},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"export-xls"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"handshake"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"journal"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"linked-services"'},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-add"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:"version"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>"}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>[]"},description:""},leftSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileMenuContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileMenuIconProps:{required:!1,tsType:{name:"HeaderIconButtonConfig",elements:[{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-compare"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:'"circuit-capacitor"'},{name:"literal",value:'"circuit-cell"'},{name:"literal",value:'"circuit-ground"'},{name:"literal",value:'"circuit-inductor"'},{name:"literal",value:"close"},{name:"literal",value:"company"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"euro"},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:'"format-align-center"'},{name:"literal",value:'"format-align-justify"'},{name:"literal",value:'"format-align-left"'},{name:"literal",value:'"format-align-right"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:"pylon"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:'"swap-horiz"'},{name:"literal",value:'"swap-vert"'},{name:"literal",value:"thermostat"},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:'"circuit-amperemetre"'},{name:"literal",value:'"circuit-bulb"'},{name:"literal",value:'"circuit-generator"'},{name:"literal",value:'"circuit-motor"'},{name:"literal",value:'"circuit-voltmetre"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"contact"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:'"energy-savings-leaf"'},{name:"literal",value:"eraser"},{name:"literal",value:"error"},{name:"literal",value:'"event-next"'},{name:"literal",value:'"event-repeat"'},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"export-xls"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"handshake"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"journal"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"linked-services"'},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-add"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:"version"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>"},description:""},searchbarProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Searchbar>",elements:[{name:"Searchbar"}]},description:""},hasLeftSection:{defaultValue:{value:"true",computed:!1},required:!1},hasRightSection:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},hasDivider:{defaultValue:{value:"false",computed:!1},required:!1},hasSearchbar:{defaultValue:{value:"true",computed:!1},required:!1},navigationAriaLabel:{defaultValue:{value:'"Navigation principale"',computed:!1},required:!1},navigationItems:{defaultValue:{value:"[]",computed:!1},required:!1},hasAvatar:{defaultValue:{value:"true",computed:!1},required:!1},isSticky:{defaultValue:{value:"false",computed:!1},required:!1},showAtScrollUp:{defaultValue:{value:"false",computed:!1},required:!1},homeLink:{defaultValue:{value:'"/"',computed:!1},required:!1},mobileSearchButtonAriaLabel:{defaultValue:{value:'"Rechercher"',computed:!1},required:!1},isMobileMenuOpen:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreHeaderProps","Omit"]};const Za={title:"Composants/Header/Header",component:x,tags:["autodocs"],parameters:{viewport:{defaultViewport:"desktop"}}},s={args:{logoSrc:fa,applicationName:"Nom de l'application",compactSpacing:!1,appearance:"brand",hasDivider:!1,hasAvatar:!0,hasSearchbar:!0,actionButton:{label:"Partager",iconName:"share"},iconButtons:[{iconName:"notification",ariaLabel:"Notification",badge:{count:3,badgeType:"indicator",size:"s",content:"number"}},{iconName:"map",ariaLabel:"Map"},{iconName:"info",ariaLabel:"Help"},{iconName:"settings",ariaLabel:"Settings"}],navigationItems:[{label:"Accueil",href:"/"},{label:"Tableau de bord",href:"/dashboard",active:!0},{label:"Documentation",href:"/documentation",disabled:!0}],avatarProps:{alt:"Profil",initials:"JD",layout:"initials",colorType:"brand",status:"available"},subHeaderConfig:{items:[{label:"Accueil",link:"/"},{label:"Section",link:"/section"},{label:"Page active",link:"/active-page"}],ariaLabel:"Breadcrumbs"}}},H={args:{...s.args,appearance:"neutral"}},E={args:{...s.args,compactSpacing:!0},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(x,{...a}),e.jsx(x,{...a,appearance:"neutral"})]})},L={args:{...s.args,navigationItems:void 0}},V={args:{...s.args,isSticky:!0,showAtScrollUp:!1},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...a}),e.jsxs("div",{style:{margin:"1rem 12rem"},children:[e.jsx("h2",{style:{margin:0},children:"Sticky Header"}),e.jsx("p",{children:"Scroll down to see the sticky header in action."}),e.jsx("div",{style:{borderRadius:"12px",height:"200vh",background:"rgba(0, 0, 0, 0.04)"}})]})]})},z={args:{...s.args,isSticky:!0,showAtScrollUp:!0},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...a}),e.jsxs("div",{style:{margin:"1rem 12rem"},children:[e.jsx("h2",{style:{margin:0},children:"Show at Scroll Up"}),e.jsx("p",{children:"Scroll down and then scroll up to see the header reappear."}),e.jsx("div",{style:{borderRadius:"12px",height:"200vh",background:"rgba(0, 0, 0, 0.04)"}})]})]})},P={args:{...s.args,rightSectionContent:e.jsx("div",{style:{width:"36px",height:"36px",backgroundColor:"rgba(255, 0, 0, 0.1)",borderRadius:"4px"}})}},F={args:{...s.args,leftSectionContent:e.jsx("div",{style:{width:"36px",height:"36px",backgroundColor:"rgba(255, 0, 0, 0.1)",borderRadius:"4px"}})}},O={tags:["skip-ci"],parameters:{viewport:{defaultViewport:"mobile2"}},args:{...s.args,hasSearchbar:!0},render:a=>{const[r,l]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{...a,onSearchActiveChange:l}),e.jsx("div",{style:{margin:"1rem"},children:e.jsxs("p",{style:{fontFamily:"monospace"},children:["isSearchActive: ",e.jsx("strong",{children:r?"true":"false"})]})})]})},play:async({canvasElement:a})=>{const r=i(a),l=r.getByRole("banner");await b(()=>{o(i(l).getByText("Nom de l'application")).toBeVisible(),o(i(l).queryByRole("search")).toBeNull(),X(a,"closed")});const t=i(l).getByRole("button",{name:"Rechercher"});await y.click(t),await b(()=>{o(i(l).getByRole("search")).toBeVisible(),ba(l),te(a,!0),X(a,"open")});const c=i(l).getByRole("textbox");await y.type(c,"abc"),await y.click(r.getByText("isSearchActive:")),await b(()=>{o(i(l).getByText("Nom de l'application")).toBeVisible(),o(i(l).queryByRole("search")).toBeNull(),te(a,!1),X(a,"closed")})}},K={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...s.args,applicationName:"Nom de l'application avec un nom très long"}},U={tags:["skip-ci"],parameters:{viewport:{defaultViewport:"mobile2"}},args:{...s.args,mobileMenuItems:[{label:"Profil",link:"/profile"},{label:"Paramètres",link:"/settings"},{label:"Déconnexion",link:"/logout"}]},render:a=>{var u;const[r,l]=p.useState(!1),[t,c]=p.useState(void 0),n=((u=a.mobileMenuItems)==null?void 0:u.map(h=>({...h,onClick:()=>c(h.label)})))||[];return e.jsxs(e.Fragment,{children:[e.jsx(x,{...a,mobileMenuItems:n,onMobileMenuClick:()=>l(h=>!h),isMobileMenuOpen:r,onMobileMenuClose:()=>l(!1)}),e.jsx("div",{style:{margin:"1rem"},children:e.jsxs("p",{style:{fontFamily:"monospace"},"data-testid":"intercepted-selected-item-id",children:["selectedMenuItem: ",e.jsx("strong",{children:t||"none"})]})})]})},play:async({canvasElement:a})=>{const r=i(a),l=i(a.ownerDocument.body),t=r.getByRole("banner");await y.click(i(t).getByRole("button",{name:"Menu"})),await b(()=>{o(i(t).getByRole("button",{name:"Menu"})).toHaveAttribute("aria-expanded","true")}),await b(()=>{o(l.getAllByRole("menuitem").length).toBeGreaterThan(0)});const n=l.getAllByRole("menuitem").find(u=>(u.textContent||"").includes("Paramètres"));o(n).toBeTruthy(),await y.click(n),await b(()=>{o(r.getByTestId("intercepted-selected-item-id")).toHaveTextContent("Paramètres"),o(i(t).getByRole("button",{name:"Menu"})).toHaveAttribute("aria-expanded","false")})}},W={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...s.args,mobileMenuContent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"8px"},children:[e.jsx("a",{href:"/profile",children:"Profil"}),e.jsx("a",{href:"/settings",children:"Paramètres"}),e.jsx("a",{href:"/logout",children:"Déconnexion"})]})},render:a=>{const[r,l]=p.useState(!1);return e.jsx(e.Fragment,{children:e.jsx(x,{...a,onMobileMenuClick:()=>l(t=>!t),isMobileMenuOpen:r,onMobileMenuClose:()=>l(!1)})})}};var ne;const Y={args:{...s.args,searchbarProps:{label:"Rechercher",assistiveText:"Rechercher dans l'application",value:"rte",onSearch:D()},onActionButtonClick:D(),onIconButtonClick:D(),avatarProps:{...(ne=s.args)==null?void 0:ne.avatarProps,onClick:D()}},play:async({args:a,canvasElement:r})=>{const t=i(r).getByRole("banner"),c=i(t).getByRole("search");await y.click(i(c).getByRole("button",{name:"Rechercher"})),await b(()=>{var n;o((n=a.searchbarProps)==null?void 0:n.onSearch).toHaveBeenCalledWith("rte")}),await y.click(i(t).getByRole("button",{name:"Partager"})),await b(()=>{o(a.onActionButtonClick).toHaveBeenCalled()}),await y.click(i(t).getByRole("button",{name:"Notification"})),await b(()=>{o(a.onIconButtonClick).toHaveBeenCalledWith("notification")}),await y.click(i(t).getByRole("button",{name:"Avatar button"})),await b(()=>{var n;o((n=a.avatarProps)==null?void 0:n.onClick).toHaveBeenCalled()})}};function X(a,r){const l=a.querySelector(".rte-header-mobile");o(l).not.toBeNull(),o(l).toHaveAttribute("data-search-state",r)}function te(a,r){const l=a.querySelector('[role="banner"]');o(l).not.toBeNull();const t=i(l).getByText("Nom de l'application");r?o(t).toHaveAttribute("aria-hidden","true"):o(t).not.toHaveAttribute("aria-hidden","true")}function ba(a,r){const l=i(a).getByText("Nom de l'application");o(l).not.toBeVisible()}var ie,oe,ue;s.parameters={...s.parameters,docs:{...(ie=s.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(oe=s.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var me,se,ve;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral"
  }
}`,...(ve=(se=H.parameters)==null?void 0:se.docs)==null?void 0:ve.source}}};var ce,de,pe;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(de=E.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,fe,ge;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    navigationItems: undefined
  }
}`,...(ge=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var we,be,ye;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ye=(be=V.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var xe,ke,Se;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Re,Ie,Be;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightSectionContent: <div style={{
      width: "36px",
      height: "36px",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      borderRadius: "4px"
    }}></div>
  }
}`,...(Be=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:Be.source}}};var Me,Ne,_e;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftSectionContent: <div style={{
      width: "36px",
      height: "36px",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      borderRadius: "4px"
    }}></div>
  }
}`,...(_e=(Ne=F.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};var je,Ae,Te;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  tags: ["skip-ci"],
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
}`,...(Te=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var qe,Ce,De;K.parameters={...K.parameters,docs:{...(qe=K.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  },
  args: {
    ...Default.args,
    applicationName: "Nom de l'application avec un nom très long"
  }
}`,...(De=(Ce=K.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var He,Ee,Le;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`{
  tags: ["skip-ci"],
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
}`,...(Le=(Ee=U.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Ve,ze,Pe;W.parameters={...W.parameters,docs:{...(Ve=W.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Pe=(ze=W.parameters)==null?void 0:ze.docs)==null?void 0:Pe.source}}};var Fe,Oe,Ke;Y.parameters={...Y.parameters,docs:{...(Fe=Y.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ke=(Oe=Y.parameters)==null?void 0:Oe.docs)==null?void 0:Ke.source}}};const el=["Default","Neutral","Compact","NoMidSection","Sticky","ShowAtScrollUp","WithRightSectionContent","WithLeftSectionContent","MobileSearchInteraction","MobileLongApplicationName","MobileMenuItems","MobileMenuContent","DesktopInteraction"];export{E as Compact,s as Default,Y as DesktopInteraction,K as MobileLongApplicationName,W as MobileMenuContent,U as MobileMenuItems,O as MobileSearchInteraction,H as Neutral,L as NoMidSection,z as ShowAtScrollUp,V as Sticky,F as WithLeftSectionContent,P as WithRightSectionContent,el as __namedExportsOrder,Za as default};
