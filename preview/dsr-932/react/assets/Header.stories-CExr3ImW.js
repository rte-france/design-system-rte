import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as i,u as k,a as x,e as n,f as q}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{N as ja}from"./NavigationProvider-Bs4LKj9F.js";import"./timepicker.constants-CynrC_9x.js";import{u as pa}from"./NavigationContext-D2CUoNWC.js";import{A as _a}from"./Avatar-DqoCCHjb.js";import{B as Ta}from"./Breadcrumbs-BjA7ruMW.js";import{B as Aa}from"./Button-KJfdYR4G.js";import{D as Ca}from"./Divider-BVZUrQ0d.js";import{I as re}from"./IconButton-D7Ub3mhB.js";import{S as ha}from"./Searchbar-D-DCS71V.js";import{u as Da}from"./useAnimatedMount-_zPBpYOt.js";import{u as qa}from"./useClickAway-DZ7FPJk_.js";import{D as me}from"./Dropdown-BM0K4W_t.js";import{D as La}from"./DropdownItem-DPjyLYQC.js";import{c as Ha}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./Badge-DkJhvK8e.js";import"./Link-B53ZmOEu.js";import"./Tooltip-IwW420ZV.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";import"./keyboard.constants-BverKK8B.js";import"./BaseTextInput-wSuYcq-n.js";import"./Label-Bgp-fFvQ.js";import"./dom.constants-Bk0jVzGk.js";import"./useScrollEvent-BvD0VCKE.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-ClER9-ap.js";const se=1024,Va="Navigation principale",ce="Fil d'Ariane";function Ea(a,l,r=0){const t=l-a.lastScrollY;if(Math.abs(t)<=r)return{...a,lastScrollY:l};const s=t>0?"down":"up";return{lastScrollY:l,lastDirection:s}}const Fa=""+new URL("rte-BsegNGhf.png",import.meta.url).href,d={"rte-header":"_rte-header_1q8a0_1","rte-header-main":"_rte-header-main_1q8a0_7","rte-header-left":"_rte-header-left_1q8a0_20","rte-header-home":"_rte-header-home_1q8a0_27","rte-header-logo":"_rte-header-logo_1q8a0_40","rte-header-app-name":"_rte-header-app-name_1q8a0_46","rte-header-version":"_rte-header-version_1q8a0_67","rte-header-middle":"_rte-header-middle_1q8a0_80","rte-header-nav":"_rte-header-nav_1q8a0_88","rte-header-nav-list":"_rte-header-nav-list_1q8a0_91","rte-header-nav-item":"_rte-header-nav-item_1q8a0_100","rte-header-nav-link":"_rte-header-nav-link_1q8a0_107","rte-header-right":"_rte-header-right_1q8a0_139","rte-header-icon-buttons":"_rte-header-icon-buttons_1q8a0_147","rte-header-subheader":"_rte-header-subheader_1q8a0_166"},y={"rte-header-mobile":"_rte-header-mobile_47uhc_1","rte-header-left":"_rte-header-left_47uhc_9","rte-header-home":"_rte-header-home_47uhc_15","rte-header-logo":"_rte-header-logo_47uhc_22","rte-header-middle":"_rte-header-middle_47uhc_33","rte-header-app-name":"_rte-header-app-name_47uhc_41","rte-header-search":"_rte-header-search_47uhc_67","rte-searchbar-container":"_rte-searchbar-container_47uhc_78","rte-search-icon-container":"_rte-search-icon-container_47uhc_93","rte-header-right":"_rte-header-right_47uhc_104"},ga=({homeLink:a,hasLeftSection:l,leftSectionContent:r,logoSrc:t,applicationName:s,compactSpacing:o,appearance:v,mobileSearchButtonAriaLabel:u,onSearchActiveChange:f,mobileMenuContent:T,onMobileMenuClick:g,isMobileMenuOpen:j,mobileMenuItems:A,onMobileMenuClose:S,mobileMenuIconProps:w,hasSearchbar:Q})=>{const[R,C]=p.useState(!1),h=p.useRef(null),I=p.useRef(null);qa(()=>{C(N=>N&&(f==null||f(!1),!1))},h.current),p.useEffect(()=>{R&&I.current&&I.current.focus()},[R]);const{isAnimating:B}=Da(R,200),Z=pa(),D={id:"mobile-menu-dropdown",onClose:()=>S==null?void 0:S(),isList:!1,isOpen:j,position:"bottom",alignment:"end",trigger:e.jsx(re,{name:(w==null?void 0:w.iconName)||"menu","aria-expanded":j,"aria-label":(w==null?void 0:w.ariaLabel)||"Menu",variant:"neutral",compactSpacing:o,onClick:g})};return e.jsxs("div",{ref:h,className:Ha(y["rte-header-mobile"],"rte-header-mobile"),"data-compact":o,"data-search-state":R?"open":"closed",children:[e.jsx("div",{className:y["rte-header-left"],children:l?r||e.jsx(e.Fragment,{children:t&&e.jsx(Z,{href:a,"aria-label":"Home",className:y["rte-header-home"],children:e.jsx("img",{src:t,alt:"Logo",className:y["rte-header-logo"]})})}):e.jsx(e.Fragment,{})}),e.jsxs("div",{className:y["rte-header-middle"],children:[s&&e.jsx("span",{className:y["rte-header-app-name"],"data-is-searchbar-expanded":B,"aria-hidden":B,children:s}),Q&&e.jsxs("div",{className:y["rte-header-search"],children:[e.jsx("div",{className:y["rte-search-icon-container"],"data-is-searchbar-expanded":B,children:e.jsx(re,{role:"button",name:"search",variant:"text",onClick:()=>{C(N=>{const M=!N;return f==null||f(M),M})},compactSpacing:o,"aria-label":u})}),e.jsx("div",{className:y["rte-searchbar-container"],"data-is-searchbar-expanded":B,children:e.jsx(ha,{ref:I,compactSpacing:o,appearance:v==="brand"?"primary":"secondary",width:"100%"})})]})]}),e.jsx("div",{className:y["rte-header-right"],children:T?e.jsx(me,{...D,children:T}):A?e.jsx(me,{...D,isList:!0,children:A.map((N,M)=>e.jsx(La,{...N},M))}):e.jsx(e.Fragment,{})})]})};ga.__docgenInfo={description:"",methods:[],displayName:"HeaderMobile",props:{homeLink:{required:!1,tsType:{name:"string"},description:""},logoSrc:{required:!1,tsType:{name:"string"},description:""},applicationName:{required:!1,tsType:{name:"string"},description:""},compactSpacing:{required:!1,tsType:{name:"boolean"},description:""},hasLeftSection:{required:!1,tsType:{name:"boolean"},description:""},appearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'}]},description:""},hasMiddleSection:{required:!1,tsType:{name:"boolean"},description:""},hasRightSection:{required:!1,tsType:{name:"boolean"},description:""},leftSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},middleSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileSearchButtonAriaLabel:{required:!1,tsType:{name:"string"},description:""},onSearchActiveChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isActive: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isActive"}],return:{name:"void"}}},description:""},mobileMenuContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onMobileMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isMobileMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},mobileMenuItems:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownItemProps"}],raw:"DropdownItemProps[]"},description:""},onMobileMenuClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},mobileMenuIconProps:{required:!1,tsType:{name:"HeaderIconButtonConfig",elements:[{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-compare"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:'"circuit-capacitor"'},{name:"literal",value:'"circuit-cell"'},{name:"literal",value:'"circuit-ground"'},{name:"literal",value:'"circuit-inductor"'},{name:"literal",value:"close"},{name:"literal",value:"company"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"euro"},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:'"format-align-center"'},{name:"literal",value:'"format-align-justify"'},{name:"literal",value:'"format-align-left"'},{name:"literal",value:'"format-align-right"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:"pylon"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:'"swap-horiz"'},{name:"literal",value:'"swap-vert"'},{name:"literal",value:"thermostat"},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:'"circuit-amperemetre"'},{name:"literal",value:'"circuit-bulb"'},{name:"literal",value:'"circuit-generator"'},{name:"literal",value:'"circuit-motor"'},{name:"literal",value:'"circuit-voltmetre"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"contact"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:'"energy-savings-leaf"'},{name:"literal",value:"eraser"},{name:"literal",value:"error"},{name:"literal",value:'"event-next"'},{name:"literal",value:'"event-repeat"'},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"export-xls"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"handshake"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"journal"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"linked-services"'},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-add"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:"version"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>"},description:""},hasSearchbar:{required:!1,tsType:{name:"boolean"},description:""}}};function Pa(){const[a,l]=p.useState(()=>typeof window<"u"?window.innerWidth<se:!1),r=()=>l(window.innerWidth<se);return p.useEffect(()=>{if(!(typeof window>"u"))return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),{isMobile:a}}const Oa=({isSticky:a,showAtScrollUp:l})=>{const[r,t]=p.useState(!0);return p.useEffect(()=>{const o=(()=>{if(!a||!l)return()=>{};let v={lastScrollY:window.scrollY||0,lastDirection:"up"};const u=()=>{const f=window.scrollY||0;if(v=Ea(v,f,2),f<=0){t(!0);return}t(v.lastDirection==="up")};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)})();return()=>{o()}},[a,l]),{isVisible:r}},b=p.forwardRef(({logoSrc:a,applicationName:l,versionNumber:r,leftSectionContent:t,hasLeftSection:s=!0,hasRightSection:o=!0,appearance:v="brand",compactSpacing:u=!1,rightSectionContent:f,hasDivider:T=!1,subHeaderConfig:g,hasSearchbar:j=!0,searchbarProps:A,actionButton:S,iconButtons:w,navigationAriaLabel:Q=Va,navigationItems:R=[],hasAvatar:C=!0,avatarProps:h,isSticky:I=!1,showAtScrollUp:B=!1,homeLink:Z="/",mobileSearchButtonAriaLabel:D="Rechercher",onSearchActiveChange:N,mobileMenuContent:M,onMobileMenuClick:fa,isMobileMenuOpen:ba=!1,mobileMenuItems:wa,onMobileMenuClose:ya,mobileMenuIconProps:xa,onActionButtonClick:ka,onIconButtonClick:ee},Sa)=>{const{isMobile:Ra}=Pa(),Na=w&&w.length>0,Ia=R&&R.length>0,{isVisible:Ba}=Oa({isSticky:I,showAtScrollUp:B}),Ma=!u&&r,te=pa();return e.jsxs("header",{ref:Sa,role:"banner",className:d["rte-header"],"data-compact":u,"data-appearance":v,"data-sticky":I,"data-visible":Ba,children:[e.jsx("div",{className:d["rte-header-main"],"data-compact":u,children:Ra?e.jsx(ga,{logoSrc:a,applicationName:l,hasLeftSection:s,leftSectionContent:t,compactSpacing:u,appearance:v,mobileSearchButtonAriaLabel:D,onSearchActiveChange:N,mobileMenuContent:M,onMobileMenuClick:fa,isMobileMenuOpen:ba,mobileMenuItems:wa,onMobileMenuClose:ya,mobileMenuIconProps:xa,hasSearchbar:j}):e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",alignSelf:"stretch"},children:[e.jsx("div",{className:d["rte-header-left"],children:s?t||e.jsxs(e.Fragment,{children:[e.jsxs(te,{href:Z,className:d["rte-header-home"],children:[a&&e.jsx("img",{src:a,alt:"Logo",className:d["rte-header-logo"]}),l&&e.jsx("span",{className:d["rte-header-app-name"],children:l})]}),Ma&&e.jsx("div",{className:d["rte-header-version"],children:e.jsx("span",{children:r})})]}):e.jsx(e.Fragment,{})}),Ia&&e.jsx("div",{className:d["rte-header-middle"],children:e.jsx("div",{className:d["rte-header-nav"],"aria-label":Q,children:e.jsx("ul",{className:d["rte-header-nav-list"],children:R.map((c,ae)=>e.jsx("li",{className:d["rte-header-nav-item"],"data-disabled":c.disabled,children:e.jsx(te,{href:c.href,"aria-label":c.ariaLabel||c.label,className:d["rte-header-nav-link"],"aria-disabled":c.disabled,"aria-current":c.active?"page":void 0,tabIndex:c.disabled?-1:0,"data-active":c.active,"data-disabled":c.disabled,children:c.label})},ae))})})}),o&&e.jsxs("div",{className:d["rte-header-right"],children:[e.jsx("div",{children:j&&e.jsx(ha,{...A,appearance:v==="brand"?"primary":"secondary",compactSpacing:u})}),S&&e.jsx(Aa,{type:"button",label:S.label,icon:S.iconName,disabled:S.disabled,size:u?"s":"m",variant:v==="brand"?"primary":"neutral",onClick:ka}),Na&&e.jsx("div",{className:d["rte-header-icon-buttons"],children:w.map((c,ae)=>{var ne,ie,oe,ue;return e.jsx("div",{className:d["rte-header-icon-button-wrapper"],children:e.jsx(re,{name:c.iconName,"aria-label":c.ariaLabel,disabled:c.disabled,size:u?"m":"l",variant:v==="brand"?"text":"neutral",badgeCount:(ne=c.badge)==null?void 0:ne.count,badgeContent:(ie=c.badge)==null?void 0:ie.content,badgeIcon:(oe=c.badge)==null?void 0:oe.icon,badgeType:(ue=c.badge)==null?void 0:ue.badgeType,onClick:()=>ee==null?void 0:ee(c.iconName)})},ae)})}),C&&h&&e.jsx(_a,{size:u?24:32,imgSrc:h.imgSrc,alt:h.alt,initials:h.initials,onClick:h.onClick,colorType:h.colorType,layout:h.layout,status:h.status,type:h.type??"user",decorativeColor:h.decorativeColor}),f]})]})}),T&&e.jsx(Ca,{}),g&&e.jsx("div",{className:d["rte-header-subheader"],"data-is-compact":u,children:e.jsx("nav",{className:d["rte-header-breadcrumbs"],"aria-label":(g==null?void 0:g.ariaLabel)||ce,children:e.jsx(Ta,{items:(g==null?void 0:g.items)||[],"aria-label":(g==null?void 0:g.ariaLabel)||ce})})})]})});b.__docgenInfo={description:"",methods:[],displayName:"Header",props:{iconButtons:{required:!1,tsType:{name:"Array",elements:[{name:"HeaderIconButtonConfig",elements:[{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-compare"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:'"circuit-capacitor"'},{name:"literal",value:'"circuit-cell"'},{name:"literal",value:'"circuit-ground"'},{name:"literal",value:'"circuit-inductor"'},{name:"literal",value:"close"},{name:"literal",value:"company"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"euro"},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:'"format-align-center"'},{name:"literal",value:'"format-align-justify"'},{name:"literal",value:'"format-align-left"'},{name:"literal",value:'"format-align-right"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:"pylon"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:'"swap-horiz"'},{name:"literal",value:'"swap-vert"'},{name:"literal",value:"thermostat"},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:'"circuit-amperemetre"'},{name:"literal",value:'"circuit-bulb"'},{name:"literal",value:'"circuit-generator"'},{name:"literal",value:'"circuit-motor"'},{name:"literal",value:'"circuit-voltmetre"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"contact"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:'"energy-savings-leaf"'},{name:"literal",value:"eraser"},{name:"literal",value:"error"},{name:"literal",value:'"event-next"'},{name:"literal",value:'"event-repeat"'},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"export-xls"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"handshake"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"journal"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"linked-services"'},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-add"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:"version"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>"}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>[]"},description:""},leftSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileMenuContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileMenuIconProps:{required:!1,tsType:{name:"HeaderIconButtonConfig",elements:[{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-compare"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:'"circuit-capacitor"'},{name:"literal",value:'"circuit-cell"'},{name:"literal",value:'"circuit-ground"'},{name:"literal",value:'"circuit-inductor"'},{name:"literal",value:"close"},{name:"literal",value:"company"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"euro"},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:'"format-align-center"'},{name:"literal",value:'"format-align-justify"'},{name:"literal",value:'"format-align-left"'},{name:"literal",value:'"format-align-right"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:"pylon"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:'"swap-horiz"'},{name:"literal",value:'"swap-vert"'},{name:"literal",value:"thermostat"},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:'"circuit-amperemetre"'},{name:"literal",value:'"circuit-bulb"'},{name:"literal",value:'"circuit-generator"'},{name:"literal",value:'"circuit-motor"'},{name:"literal",value:'"circuit-voltmetre"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"contact"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:'"energy-savings-leaf"'},{name:"literal",value:"eraser"},{name:"literal",value:"error"},{name:"literal",value:'"event-next"'},{name:"literal",value:'"event-repeat"'},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"export-xls"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"handshake"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"journal"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"linked-services"'},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-add"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:"version"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>"},description:""},searchbarProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Searchbar>",elements:[{name:"Searchbar"}]},description:""},hasLeftSection:{defaultValue:{value:"true",computed:!1},required:!1},hasRightSection:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},hasDivider:{defaultValue:{value:"false",computed:!1},required:!1},hasSearchbar:{defaultValue:{value:"true",computed:!1},required:!1},navigationAriaLabel:{defaultValue:{value:'"Navigation principale"',computed:!1},required:!1},navigationItems:{defaultValue:{value:"[]",computed:!1},required:!1},hasAvatar:{defaultValue:{value:"true",computed:!1},required:!1},isSticky:{defaultValue:{value:"false",computed:!1},required:!1},showAtScrollUp:{defaultValue:{value:"false",computed:!1},required:!1},homeLink:{defaultValue:{value:'"/"',computed:!1},required:!1},mobileSearchButtonAriaLabel:{defaultValue:{value:'"Rechercher"',computed:!1},required:!1},isMobileMenuOpen:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreHeaderProps","Omit"]};const Il={title:"Composants/Header/Header",component:b,tags:["autodocs"],parameters:{viewport:{defaultViewport:"desktop"}},argTypes:{versionNumber:{control:"text"}}},m={args:{logoSrc:Fa,applicationName:"Nom de l'application",compactSpacing:!1,appearance:"brand",hasDivider:!1,hasAvatar:!0,hasSearchbar:!0,actionButton:{label:"Partager",iconName:"share"},iconButtons:[{iconName:"notification",ariaLabel:"Notification",badge:{count:3,badgeType:"indicator",size:"s",content:"number"}},{iconName:"map",ariaLabel:"Map"},{iconName:"info",ariaLabel:"Help"},{iconName:"settings",ariaLabel:"Settings"}],navigationItems:[{label:"Accueil",href:"/"},{label:"Tableau de bord",href:"/dashboard",active:!0},{label:"Documentation",href:"/documentation",disabled:!0}],avatarProps:{alt:"Profil",initials:"JD",layout:"initials",colorType:"brand",status:"available"},subHeaderConfig:{items:[{label:"Accueil",link:"/"},{label:"Section",link:"/section"},{label:"Page active",link:"/active-page"}],ariaLabel:"Breadcrumbs"}}},L={args:{...m.args},render:a=>{const[l,r]=p.useState(),t=({href:s,children:o,...v})=>e.jsx("a",{href:s,onClick:u=>{u.preventDefault(),r(s),console.log(`SPA navigation to ${s}`)},...v,children:o});return e.jsxs(e.Fragment,{children:[e.jsx(ja,{linkComponent:t,children:e.jsx(b,{...a})}),l&&e.jsxs("div",{children:["Lien router vers ",l]})]})}},H={args:{...m.args,appearance:"neutral"}},V={args:{...m.args,compactSpacing:!0},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(b,{...a}),e.jsx(b,{...a,appearance:"neutral"})]})},_={args:{...m.args,applicationName:"Nom de l'appli/page",versionNumber:"V1.1.3"},parameters:{docs:{description:{story:"Desktop header with **versionNumber** displayed below the application name, aligned to the bottom-right of the left section. Hidden in compact mode."}}},play:async({canvasElement:a})=>{const l=i(a);n(l.getByText("V1.1.3")).toBeInTheDocument(),n(l.getByText("Nom de l'appli/page")).toBeInTheDocument()}},E={args:{..._.args,compactSpacing:!0},parameters:{docs:{description:{story:"In compact mode, **versionNumber** is hidden."}}},play:async({canvasElement:a})=>{const l=i(a);n(l.queryByText("V1.1.3")).not.toBeInTheDocument(),n(l.getByText("Nom de l'appli/page")).toBeInTheDocument()}},F={args:{...m.args,navigationItems:void 0}},P={args:{...m.args,isSticky:!0,showAtScrollUp:!1},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(b,{...a}),e.jsxs("div",{style:{margin:"1rem 12rem"},children:[e.jsx("h2",{style:{margin:0},children:"Sticky Header"}),e.jsx("p",{children:"Scroll down to see the sticky header in action."}),e.jsx("div",{style:{borderRadius:"12px",height:"200vh",background:"rgba(0, 0, 0, 0.04)"}})]})]})},O={args:{...m.args,isSticky:!0,showAtScrollUp:!0},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(b,{...a}),e.jsxs("div",{style:{margin:"1rem 12rem"},children:[e.jsx("h2",{style:{margin:0},children:"Show at Scroll Up"}),e.jsx("p",{children:"Scroll down and then scroll up to see the header reappear."}),e.jsx("div",{style:{borderRadius:"12px",height:"200vh",background:"rgba(0, 0, 0, 0.04)"}})]})]})},z={args:{...m.args,rightSectionContent:e.jsx("div",{style:{width:"36px",height:"36px",backgroundColor:"rgba(255, 0, 0, 0.1)",borderRadius:"4px"}})}},W={args:{...m.args,leftSectionContent:e.jsx("div",{style:{width:"36px",height:"36px",backgroundColor:"rgba(255, 0, 0, 0.1)",borderRadius:"4px"}})}},K={args:{...m.args,leftSectionContent:e.jsx("div",{children:"Contexte de navigation"}),rightSectionContent:e.jsx("div",{children:"Indicateur personnalisé"}),mobileMenuContent:e.jsx("div",{children:"Menu personnalisé"})}},U={tags:["skip-ci"],parameters:{viewport:{defaultViewport:"mobile2"}},args:{...m.args,hasSearchbar:!0},render:a=>{const[l,r]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(b,{...a,onSearchActiveChange:r}),e.jsx("div",{style:{margin:"1rem"},children:e.jsxs("p",{style:{fontFamily:"monospace"},children:["isSearchActive: ",e.jsx("strong",{children:l?"true":"false"})]})})]})}},Y={tags:["skip-ci","!autodocs"],parameters:{viewport:{defaultViewport:"mobile2"}},args:{...m.args,hasSearchbar:!0},render:a=>{const[l,r]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(b,{...a,onSearchActiveChange:r}),e.jsx("div",{style:{margin:"1rem"},children:e.jsxs("p",{style:{fontFamily:"monospace"},children:["isSearchActive: ",e.jsx("strong",{children:l?"true":"false"})]})})]})},play:async({canvasElement:a})=>{const l=i(a),r=l.getByRole("banner");await x(()=>{n(i(r).getByText("Nom de l'application")).toBeVisible(),n(i(r).queryByRole("search")).toBeNull(),le(a,"closed")});const t=i(r).getByRole("button",{name:"Rechercher"});await k.click(t),await x(()=>{n(i(r).getByRole("search")).toBeVisible(),za(r),ve(a,!0),le(a,"open")});const s=i(r).getByRole("textbox");await k.type(s,"abc"),await k.click(l.getByText("isSearchActive:")),await x(()=>{n(i(r).getByText("Nom de l'application")).toBeVisible(),n(i(r).queryByRole("search")).toBeNull(),ve(a,!1),le(a,"closed")})}},G={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...m.args,applicationName:"Nom de l'application avec un nom très long"}},$={tags:["skip-ci"],parameters:{viewport:{defaultViewport:"mobile2"}},args:{...m.args,mobileMenuItems:[{label:"Profil",link:"/profile"},{label:"Paramètres",link:"/settings"},{label:"Déconnexion",link:"/logout"}]},render:a=>{var v;const[l,r]=p.useState(!1),[t,s]=p.useState(void 0),o=((v=a.mobileMenuItems)==null?void 0:v.map(u=>({...u,onClick:()=>s(u.label)})))||[];return e.jsxs(e.Fragment,{children:[e.jsx(b,{...a,mobileMenuItems:o,onMobileMenuClick:()=>r(u=>!u),isMobileMenuOpen:l,onMobileMenuClose:()=>r(!1)}),e.jsx("div",{style:{margin:"1rem"},children:e.jsxs("p",{style:{fontFamily:"monospace"},"data-testid":"intercepted-selected-item-id",children:["selectedMenuItem: ",e.jsx("strong",{children:t||"none"})]})})]})},play:async({canvasElement:a})=>{const l=i(a),r=i(a.ownerDocument.body),t=l.getByRole("banner");await k.click(i(t).getByRole("button",{name:"Menu"})),await x(()=>{n(i(t).getByRole("button",{name:"Menu"})).toHaveAttribute("aria-expanded","true")}),await x(()=>{n(r.getAllByRole("menuitem").length).toBeGreaterThan(0)});const o=r.getAllByRole("menuitem").find(v=>(v.textContent||"").includes("Paramètres"));n(o).toBeTruthy(),await k.click(o),await x(()=>{n(l.getByTestId("intercepted-selected-item-id")).toHaveTextContent("Paramètres"),n(i(t).getByRole("button",{name:"Menu"})).toHaveAttribute("aria-expanded","false")})}},J={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...m.args,mobileMenuContent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"8px"},children:[e.jsx("a",{href:"/profile",children:"Profil"}),e.jsx("a",{href:"/settings",children:"Paramètres"}),e.jsx("a",{href:"/logout",children:"Déconnexion"})]})},render:a=>{const[l,r]=p.useState(!1);return e.jsx(e.Fragment,{children:e.jsx(b,{...a,onMobileMenuClick:()=>r(t=>!t),isMobileMenuOpen:l,onMobileMenuClose:()=>r(!1)})})}};var de;const X={args:{...m.args,searchbarProps:{label:"Rechercher",assistiveText:"Rechercher dans l'application",value:"rte",onSearch:q()},onActionButtonClick:q(),onIconButtonClick:q(),avatarProps:{...(de=m.args)==null?void 0:de.avatarProps,onClick:q()}},play:async({args:a,canvasElement:l})=>{const t=i(l).getByRole("banner"),s=i(t).getByRole("search");await k.click(i(s).getByRole("button",{name:"Rechercher"})),await x(()=>{var o;n((o=a.searchbarProps)==null?void 0:o.onSearch).toHaveBeenCalledWith("rte")}),await k.click(i(t).getByRole("button",{name:"Partager"})),await x(()=>{n(a.onActionButtonClick).toHaveBeenCalled()}),await k.click(i(t).getByRole("button",{name:"Notification"})),await x(()=>{n(a.onIconButtonClick).toHaveBeenCalledWith("notification")}),await k.click(i(t).getByRole("button",{name:"Avatar button"})),await x(()=>{var o;n((o=a.avatarProps)==null?void 0:o.onClick).toHaveBeenCalled()})}};function le(a,l){const r=a.querySelector(".rte-header-mobile");n(r).not.toBeNull(),n(r).toHaveAttribute("data-search-state",l)}function ve(a,l){const r=a.querySelector('[role="banner"]');n(r).not.toBeNull();const t=i(r).getByText("Nom de l'application");l?n(t).toHaveAttribute("aria-hidden","true"):n(t).not.toHaveAttribute("aria-hidden","true")}function za(a,l){const r=i(a).getByText("Nom de l'application");n(r).not.toBeVisible()}var pe,he,ge;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(he=m.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,be,we;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [currentLink, setCurrentLink] = useState<string>();
    const FakeRouterLink = ({
      href,
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a href={href} onClick={event => {
      event.preventDefault();
      setCurrentLink(href);
      console.log(\`SPA navigation to \${href}\`);
    }} {...props}>
        {children}
      </a>;
    return <>
        <NavigationProvider linkComponent={FakeRouterLink}>
          <Header {...args} />
        </NavigationProvider>

        {currentLink && <div>Lien router vers {currentLink}</div>}
      </>;
  }
}`,...(we=(be=L.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var ye,xe,ke;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral"
  }
}`,...(ke=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var Se,Re,Ne;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ne=(Re=V.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Ie,Be,Me;_.parameters={..._.parameters,docs:{...(Ie=_.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    applicationName: "Nom de l'appli/page",
    versionNumber: "V1.1.3"
  },
  parameters: {
    docs: {
      description: {
        story: "Desktop header with **versionNumber** displayed below the application name, aligned to the bottom-right of the left section. Hidden in compact mode."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("V1.1.3")).toBeInTheDocument();
    expect(canvas.getByText("Nom de l'appli/page")).toBeInTheDocument();
  }
}`,...(Me=(Be=_.parameters)==null?void 0:Be.docs)==null?void 0:Me.source}}};var je,_e,Te;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...WithVersionNumber.args,
    compactSpacing: true
  },
  parameters: {
    docs: {
      description: {
        story: "In compact mode, **versionNumber** is hidden."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByText("V1.1.3")).not.toBeInTheDocument();
    expect(canvas.getByText("Nom de l'appli/page")).toBeInTheDocument();
  }
}`,...(Te=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:Te.source}}};var Ae,Ce,De;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    navigationItems: undefined
  }
}`,...(De=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var qe,Le,He;P.parameters={...P.parameters,docs:{...(qe=P.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(He=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:He.source}}};var Ve,Ee,Fe;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Fe=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var Pe,Oe,ze;z.parameters={...z.parameters,docs:{...(Pe=z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightSectionContent: <div style={{
      width: "36px",
      height: "36px",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      borderRadius: "4px"
    }}></div>
  }
}`,...(ze=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var We,Ke,Ue;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftSectionContent: <div style={{
      width: "36px",
      height: "36px",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      borderRadius: "4px"
    }}></div>
  }
}`,...(Ue=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var Ye,Ge,$e;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftSectionContent: <div>Contexte de navigation</div>,
    rightSectionContent: <div>Indicateur personnalisé</div>,
    mobileMenuContent: <div>Menu personnalisé</div>
  }
}`,...($e=(Ge=K.parameters)==null?void 0:Ge.docs)==null?void 0:$e.source}}};var Je,Xe,Qe;U.parameters={...U.parameters,docs:{...(Je=U.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
  }
}`,...(Qe=(Xe=U.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};var Ze,ea,aa;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
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
}`,...(aa=(ea=Y.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var la,ra,ta;G.parameters={...G.parameters,docs:{...(la=G.parameters)==null?void 0:la.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  },
  args: {
    ...Default.args,
    applicationName: "Nom de l'application avec un nom très long"
  }
}`,...(ta=(ra=G.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}};var na,ia,oa;$.parameters={...$.parameters,docs:{...(na=$.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(oa=(ia=$.parameters)==null?void 0:ia.docs)==null?void 0:oa.source}}};var ua,ma,sa;J.parameters={...J.parameters,docs:{...(ua=J.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(sa=(ma=J.parameters)==null?void 0:ma.docs)==null?void 0:sa.source}}};var ca,va,da;X.parameters={...X.parameters,docs:{...(ca=X.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(da=(va=X.parameters)==null?void 0:va.docs)==null?void 0:da.source}}};const Bl=["Default","WithCustomRouter","Neutral","Compact","WithVersionNumber","WithVersionNumberCompact","NoMidSection","Sticky","ShowAtScrollUp","WithRightSectionContent","WithLeftSectionContent","CustomHeader","MobileSearch","MobileSearchInteraction","MobileLongApplicationName","MobileMenuItems","MobileMenuContent","DesktopInteraction"];export{V as Compact,K as CustomHeader,m as Default,X as DesktopInteraction,G as MobileLongApplicationName,J as MobileMenuContent,$ as MobileMenuItems,U as MobileSearch,Y as MobileSearchInteraction,H as Neutral,F as NoMidSection,O as ShowAtScrollUp,P as Sticky,L as WithCustomRouter,W as WithLeftSectionContent,z as WithRightSectionContent,_ as WithVersionNumber,E as WithVersionNumberCompact,Bl as __namedExportsOrder,Il as default};
