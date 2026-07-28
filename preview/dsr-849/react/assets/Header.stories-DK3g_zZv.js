import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as i,u as x,a as y,e as n,f as H}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import"./timepicker.constants-CgjTDnHz.js";import{A as da}from"./Avatar-DqoCCHjb.js";import{B as pa}from"./Breadcrumbs-Zb6AUtB5.js";import{B as ha}from"./Button-DVlmZND_.js";import{D as ga}from"./Divider-BMotkXeQ.js";import{I as Z}from"./IconButton-en7B25KO.js";import{S as Ze}from"./Searchbar-Cdcawh4H.js";import{u as fa}from"./useAnimatedMount-_zPBpYOt.js";import{u as wa}from"./useClickAway-DZ7FPJk_.js";import{B as ba}from"./BaseDropdown-Czs52lGx.js";import{D as ya,a as xa}from"./DropdownItem-PB6tehYN.js";import{c as ka}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./Badge-DkJhvK8e.js";import"./Link-BXut70Xg.js";import"./Tooltip-9hqxBVC1.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./keyboard.constants-BverKK8B.js";import"./BaseTextInput-SCp2zKls.js";import"./Label-BaZEr-h0.js";import"./dom.constants-Bk0jVzGk.js";import"./useScrollEvent-BvD0VCKE.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-C8hWUkyN.js";const te=1024,Sa="Navigation principale",ne="Fil d'Ariane";function Ra(a,r,l=0){const t=r-a.lastScrollY;if(Math.abs(t)<=l)return{...a,lastScrollY:r};const d=t>0?"down":"up";return{lastScrollY:r,lastDirection:d}}const Ba=""+new URL("rte-BsegNGhf.png",import.meta.url).href,s={"rte-header":"_rte-header_7whsj_1","rte-header-main":"_rte-header-main_7whsj_6","rte-header-left":"_rte-header-left_7whsj_19","rte-header-left-section":"_rte-header-left-section_7whsj_25","rte-header-home":"_rte-header-home_7whsj_31","rte-header-logo":"_rte-header-logo_7whsj_44","rte-header-app-name":"_rte-header-app-name_7whsj_50","rte-header-version":"_rte-header-version_7whsj_71","rte-header-middle":"_rte-header-middle_7whsj_87","rte-header-nav":"_rte-header-nav_7whsj_95","rte-header-nav-list":"_rte-header-nav-list_7whsj_98","rte-header-nav-item":"_rte-header-nav-item_7whsj_107","rte-header-nav-link":"_rte-header-nav-link_7whsj_114","rte-header-right":"_rte-header-right_7whsj_146","rte-header-icon-buttons":"_rte-header-icon-buttons_7whsj_154","rte-header-subheader":"_rte-header-subheader_7whsj_173"},b={"rte-header-mobile":"_rte-header-mobile_47uhc_1","rte-header-left":"_rte-header-left_47uhc_9","rte-header-home":"_rte-header-home_47uhc_15","rte-header-logo":"_rte-header-logo_47uhc_22","rte-header-middle":"_rte-header-middle_47uhc_33","rte-header-app-name":"_rte-header-app-name_47uhc_41","rte-header-search":"_rte-header-search_47uhc_67","rte-searchbar-container":"_rte-searchbar-container_47uhc_78","rte-search-icon-container":"_rte-search-icon-container_47uhc_93","rte-header-right":"_rte-header-right_47uhc_104"},ea=({homeLink:a,hasLeftSection:r,leftSectionContent:l,logoSrc:t,applicationName:d,compactSpacing:o,appearance:v,mobileSearchButtonAriaLabel:u,onSearchActiveChange:g,mobileMenuContent:A,onMobileMenuClick:h,isMobileMenuOpen:M,mobileMenuItems:D,onMobileMenuClose:S,mobileMenuIconProps:w,hasSearchbar:J})=>{const[R,C]=p.useState(!1),f=p.useRef(null),N=p.useRef(null);wa(()=>{C(B=>B&&(g==null||g(!1),!1))},f.current),p.useEffect(()=>{R&&N.current&&N.current.focus()},[R]);const{isAnimating:I}=fa(R,200),_={id:"mobile-menu-dropdown",onClose:()=>S==null?void 0:S(),isList:!1,isOpen:M,position:"bottom",alignment:"end",trigger:e.jsx(Z,{name:(w==null?void 0:w.iconName)||"menu","aria-expanded":M,"aria-label":(w==null?void 0:w.ariaLabel)||"Menu",variant:"neutral",compactSpacing:o,onClick:h})};return e.jsxs("div",{ref:f,className:ka(b["rte-header-mobile"],"rte-header-mobile"),"data-compact":o,"data-search-state":R?"open":"closed",children:[e.jsx("div",{className:b["rte-header-left"],children:r?l||e.jsx(e.Fragment,{children:t&&e.jsx("a",{href:a,"aria-label":"Home",className:b["rte-header-home"],children:e.jsx("img",{src:t,alt:"Logo",className:b["rte-header-logo"]})})}):e.jsx(e.Fragment,{})}),e.jsxs("div",{className:b["rte-header-middle"],children:[d&&e.jsx("span",{className:b["rte-header-app-name"],"data-is-searchbar-expanded":I,"aria-hidden":I,children:d}),J&&e.jsxs("div",{className:b["rte-header-search"],children:[e.jsx("div",{className:b["rte-search-icon-container"],"data-is-searchbar-expanded":I,children:e.jsx(Z,{role:"button",name:"search",variant:"text",onClick:()=>{C(B=>{const j=!B;return g==null||g(j),j})},compactSpacing:o,"aria-label":u})}),e.jsx("div",{className:b["rte-searchbar-container"],"data-is-searchbar-expanded":I,children:e.jsx(Ze,{ref:N,compactSpacing:o,appearance:v==="brand"?"primary":"secondary",width:"100%"})})]})]}),e.jsx("div",{className:b["rte-header-right"],children:A?e.jsx(ba,{..._,children:A}):D?e.jsx(ya,{..._,children:D.map((B,j)=>e.jsx(xa,{...B},j))}):e.jsx(e.Fragment,{})})]})};ea.__docgenInfo={description:"",methods:[],displayName:"HeaderMobile",props:{homeLink:{required:!1,tsType:{name:"string"},description:""},logoSrc:{required:!1,tsType:{name:"string"},description:""},applicationName:{required:!1,tsType:{name:"string"},description:""},compactSpacing:{required:!1,tsType:{name:"boolean"},description:""},hasLeftSection:{required:!1,tsType:{name:"boolean"},description:""},appearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'}]},description:""},hasMiddleSection:{required:!1,tsType:{name:"boolean"},description:""},hasRightSection:{required:!1,tsType:{name:"boolean"},description:""},leftSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},middleSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileSearchButtonAriaLabel:{required:!1,tsType:{name:"string"},description:""},onSearchActiveChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isActive: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isActive"}],return:{name:"void"}}},description:""},mobileMenuContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onMobileMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isMobileMenuOpen:{required:!1,tsType:{name:"boolean"},description:""},mobileMenuItems:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownItemProps"}],raw:"DropdownItemProps[]"},description:""},onMobileMenuClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},mobileMenuIconProps:{required:!1,tsType:{name:"HeaderIconButtonConfig",elements:[{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-compare"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:'"circuit-capacitor"'},{name:"literal",value:'"circuit-cell"'},{name:"literal",value:'"circuit-ground"'},{name:"literal",value:'"circuit-inductor"'},{name:"literal",value:"close"},{name:"literal",value:"company"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"euro"},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:'"format-align-center"'},{name:"literal",value:'"format-align-justify"'},{name:"literal",value:'"format-align-left"'},{name:"literal",value:'"format-align-right"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:"pylon"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:'"swap-horiz"'},{name:"literal",value:'"swap-vert"'},{name:"literal",value:"thermostat"},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:'"circuit-amperemetre"'},{name:"literal",value:'"circuit-bulb"'},{name:"literal",value:'"circuit-generator"'},{name:"literal",value:'"circuit-motor"'},{name:"literal",value:'"circuit-voltmetre"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"contact"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:'"energy-savings-leaf"'},{name:"literal",value:"eraser"},{name:"literal",value:"error"},{name:"literal",value:'"event-next"'},{name:"literal",value:'"event-repeat"'},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"export-xls"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"handshake"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"journal"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"linked-services"'},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-add"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:"version"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>"},description:""},hasSearchbar:{required:!1,tsType:{name:"boolean"},description:""}}};function Na(){const[a,r]=p.useState(()=>typeof window<"u"?window.innerWidth<te:!1),l=()=>r(window.innerWidth<te);return p.useEffect(()=>{if(!(typeof window>"u"))return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),{isMobile:a}}const Ia=({isSticky:a,showAtScrollUp:r})=>{const[l,t]=p.useState(!0);return p.useEffect(()=>{const o=(()=>{if(!a||!r)return()=>{};let v={lastScrollY:window.scrollY||0,lastDirection:"up"};const u=()=>{const g=window.scrollY||0;if(v=Ra(v,g,2),g<=0){t(!0);return}t(v.lastDirection==="up")};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)})();return()=>{o()}},[a,r]),{isVisible:l}},k=p.forwardRef(({logoSrc:a,applicationName:r,versionNumber:l,leftSectionContent:t,hasLeftSection:d=!0,hasRightSection:o=!0,appearance:v="brand",compactSpacing:u=!1,rightSectionContent:g,hasDivider:A=!1,subHeaderConfig:h,hasSearchbar:M=!0,searchbarProps:D,actionButton:S,iconButtons:w,navigationAriaLabel:J=Sa,navigationItems:R=[],hasAvatar:C=!0,avatarProps:f,isSticky:N=!1,showAtScrollUp:I=!1,homeLink:_="/",mobileSearchButtonAriaLabel:B="Rechercher",onSearchActiveChange:j,mobileMenuContent:aa,onMobileMenuClick:la,isMobileMenuOpen:ra=!1,mobileMenuItems:ta,onMobileMenuClose:na,mobileMenuIconProps:ia,onActionButtonClick:oa,onIconButtonClick:X},ua)=>{const{isMobile:ma}=Na(),sa=w&&w.length>0,ca=R&&R.length>0,{isVisible:va}=Ia({isSticky:N,showAtScrollUp:I});return e.jsxs("header",{ref:ua,role:"banner",className:s["rte-header"],"data-compact":u,"data-appearance":v,"data-sticky":N,"data-visible":va,children:[e.jsx("div",{className:s["rte-header-main"],"data-compact":u,children:ma?e.jsx(ea,{homeLink:_,logoSrc:a,applicationName:r,hasLeftSection:d,leftSectionContent:t,compactSpacing:u,appearance:v,mobileSearchButtonAriaLabel:B,onSearchActiveChange:j,mobileMenuContent:aa,onMobileMenuClick:la,isMobileMenuOpen:ra,mobileMenuItems:ta,onMobileMenuClose:na,mobileMenuIconProps:ia,hasSearchbar:M}):e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",alignSelf:"stretch"},children:[e.jsx("div",{className:s["rte-header-left"],children:d?t||e.jsxs("div",{className:s["rte-header-left-section"],children:[e.jsxs("a",{href:_,className:s["rte-header-home"],children:[a&&e.jsx("img",{src:a,alt:"Logo",className:s["rte-header-logo"]}),r&&e.jsx("span",{className:s["rte-header-app-name"],children:r})]}),!u&&l&&e.jsx("div",{className:s["rte-header-version"],children:e.jsx("span",{children:l})})]}):e.jsx(e.Fragment,{})}),ca&&e.jsx("div",{className:s["rte-header-middle"],children:e.jsx("div",{className:s["rte-header-nav"],"aria-label":J,children:e.jsx("ul",{className:s["rte-header-nav-list"],children:R.map((m,$)=>e.jsx("li",{className:s["rte-header-nav-item"],"data-disabled":m.disabled,children:e.jsx("a",{href:m.href,"aria-label":m.ariaLabel||m.label,className:s["rte-header-nav-link"],"aria-disabled":m.disabled,"aria-current":m.active?"page":void 0,tabIndex:m.disabled?-1:0,"data-active":m.active,"data-disabled":m.disabled,children:m.label})},$))})})}),o&&e.jsxs("div",{className:s["rte-header-right"],children:[e.jsx("div",{children:M&&e.jsx(Ze,{...D,appearance:v==="brand"?"primary":"secondary",compactSpacing:u})}),S&&e.jsx(ha,{type:"button",label:S.label,icon:S.iconName,disabled:S.disabled,size:u?"s":"m",variant:v==="brand"?"primary":"neutral",onClick:oa}),sa&&e.jsx("div",{className:s["rte-header-icon-buttons"],children:w.map((m,$)=>{var ee,ae,le,re;return e.jsx("div",{className:s["rte-header-icon-button-wrapper"],children:e.jsx(Z,{name:m.iconName,"aria-label":m.ariaLabel,disabled:m.disabled,size:u?"m":"l",variant:v==="brand"?"text":"neutral",badgeCount:(ee=m.badge)==null?void 0:ee.count,badgeContent:(ae=m.badge)==null?void 0:ae.content,badgeIcon:(le=m.badge)==null?void 0:le.icon,badgeType:(re=m.badge)==null?void 0:re.badgeType,onClick:()=>X==null?void 0:X(m.iconName)})},$)})}),C&&f&&e.jsx(da,{size:u?24:32,imgSrc:f.imgSrc,alt:f.alt,initials:f.initials,onClick:f.onClick,colorType:f.colorType,layout:f.layout,status:f.status}),g]})]})}),A&&e.jsx(ga,{}),h&&e.jsx("div",{className:s["rte-header-subheader"],"data-is-compact":u,children:e.jsx("nav",{className:s["rte-header-breadcrumbs"],"aria-label":(h==null?void 0:h.ariaLabel)||ne,children:e.jsx(pa,{items:(h==null?void 0:h.items)||[],"aria-label":(h==null?void 0:h.ariaLabel)||ne})})})]})});k.__docgenInfo={description:"",methods:[],displayName:"Header",props:{iconButtons:{required:!1,tsType:{name:"Array",elements:[{name:"HeaderIconButtonConfig",elements:[{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-compare"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:'"circuit-capacitor"'},{name:"literal",value:'"circuit-cell"'},{name:"literal",value:'"circuit-ground"'},{name:"literal",value:'"circuit-inductor"'},{name:"literal",value:"close"},{name:"literal",value:"company"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"euro"},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:'"format-align-center"'},{name:"literal",value:'"format-align-justify"'},{name:"literal",value:'"format-align-left"'},{name:"literal",value:'"format-align-right"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:"pylon"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:'"swap-horiz"'},{name:"literal",value:'"swap-vert"'},{name:"literal",value:"thermostat"},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:'"circuit-amperemetre"'},{name:"literal",value:'"circuit-bulb"'},{name:"literal",value:'"circuit-generator"'},{name:"literal",value:'"circuit-motor"'},{name:"literal",value:'"circuit-voltmetre"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"contact"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:'"energy-savings-leaf"'},{name:"literal",value:"eraser"},{name:"literal",value:"error"},{name:"literal",value:'"event-next"'},{name:"literal",value:'"event-repeat"'},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"export-xls"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"handshake"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"journal"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"linked-services"'},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-add"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:"version"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>"}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>[]"},description:""},leftSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightSectionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileMenuContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mobileMenuIconProps:{required:!1,tsType:{name:"HeaderIconButtonConfig",elements:[{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-compare"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:'"circuit-capacitor"'},{name:"literal",value:'"circuit-cell"'},{name:"literal",value:'"circuit-ground"'},{name:"literal",value:'"circuit-inductor"'},{name:"literal",value:"close"},{name:"literal",value:"company"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"euro"},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:'"format-align-center"'},{name:"literal",value:'"format-align-justify"'},{name:"literal",value:'"format-align-left"'},{name:"literal",value:'"format-align-right"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:"pylon"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:'"swap-horiz"'},{name:"literal",value:'"swap-vert"'},{name:"literal",value:"thermostat"},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:'"circuit-amperemetre"'},{name:"literal",value:'"circuit-bulb"'},{name:"literal",value:'"circuit-generator"'},{name:"literal",value:'"circuit-motor"'},{name:"literal",value:'"circuit-voltmetre"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"contact"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:'"energy-savings-leaf"'},{name:"literal",value:"eraser"},{name:"literal",value:"error"},{name:"literal",value:'"event-next"'},{name:"literal",value:'"event-repeat"'},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"export-xls"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"handshake"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"journal"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"linked-services"'},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-add"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:"version"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]}],raw:"HeaderIconButtonConfig<RegularIconIdKey | TogglableIconIdKey>"},description:""},searchbarProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Searchbar>",elements:[{name:"Searchbar"}]},description:""},hasLeftSection:{defaultValue:{value:"true",computed:!1},required:!1},hasRightSection:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},hasDivider:{defaultValue:{value:"false",computed:!1},required:!1},hasSearchbar:{defaultValue:{value:"true",computed:!1},required:!1},navigationAriaLabel:{defaultValue:{value:'"Navigation principale"',computed:!1},required:!1},navigationItems:{defaultValue:{value:"[]",computed:!1},required:!1},hasAvatar:{defaultValue:{value:"true",computed:!1},required:!1},isSticky:{defaultValue:{value:"false",computed:!1},required:!1},showAtScrollUp:{defaultValue:{value:"false",computed:!1},required:!1},homeLink:{defaultValue:{value:'"/"',computed:!1},required:!1},mobileSearchButtonAriaLabel:{defaultValue:{value:'"Rechercher"',computed:!1},required:!1},isMobileMenuOpen:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreHeaderProps","Omit"]};const ul={title:"Composants/Header/Header",component:k,tags:["autodocs"],parameters:{viewport:{defaultViewport:"desktop"}},argTypes:{versionNumber:{control:"text"}}},c={args:{logoSrc:Ba,applicationName:"Nom de l'application",compactSpacing:!1,appearance:"brand",hasDivider:!1,hasAvatar:!0,hasSearchbar:!0,actionButton:{label:"Partager",iconName:"share"},iconButtons:[{iconName:"notification",ariaLabel:"Notification",badge:{count:3,badgeType:"indicator",size:"s",content:"number"}},{iconName:"map",ariaLabel:"Map"},{iconName:"info",ariaLabel:"Help"},{iconName:"settings",ariaLabel:"Settings"}],navigationItems:[{label:"Accueil",href:"/"},{label:"Tableau de bord",href:"/dashboard",active:!0},{label:"Documentation",href:"/documentation",disabled:!0}],avatarProps:{alt:"Profil",initials:"JD",layout:"initials",colorType:"brand",status:"available"},subHeaderConfig:{items:[{label:"Accueil",link:"/"},{label:"Section",link:"/section"},{label:"Page active",link:"/active-page"}],ariaLabel:"Breadcrumbs"}}},q={args:{...c.args,appearance:"neutral"}},E={args:{...c.args,compactSpacing:!0},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(k,{...a}),e.jsx(k,{...a,appearance:"neutral"})]})},T={args:{...c.args,applicationName:"Nom de l'appli/page",versionNumber:"V1.1.3"},parameters:{docs:{description:{story:"Desktop header with **versionNumber** displayed below the application name, aligned to the bottom-right of the left section. Hidden in compact mode."}}},play:async({canvasElement:a})=>{const r=i(a);n(r.getByText("V1.1.3")).toBeInTheDocument(),n(r.getByText("Nom de l'appli/page")).toBeInTheDocument()}},V={args:{...T.args,compactSpacing:!0},parameters:{docs:{description:{story:"In compact mode, **versionNumber** is hidden."}}},play:async({canvasElement:a})=>{const r=i(a);n(r.queryByText("V1.1.3")).not.toBeInTheDocument(),n(r.getByText("Nom de l'appli/page")).toBeInTheDocument()}},L={args:{...c.args,navigationItems:void 0}},P={args:{...c.args,isSticky:!0,showAtScrollUp:!1},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(k,{...a}),e.jsxs("div",{style:{margin:"1rem 12rem"},children:[e.jsx("h2",{style:{margin:0},children:"Sticky Header"}),e.jsx("p",{children:"Scroll down to see the sticky header in action."}),e.jsx("div",{style:{borderRadius:"12px",height:"200vh",background:"rgba(0, 0, 0, 0.04)"}})]})]})},F={args:{...c.args,isSticky:!0,showAtScrollUp:!0},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(k,{...a}),e.jsxs("div",{style:{margin:"1rem 12rem"},children:[e.jsx("h2",{style:{margin:0},children:"Show at Scroll Up"}),e.jsx("p",{children:"Scroll down and then scroll up to see the header reappear."}),e.jsx("div",{style:{borderRadius:"12px",height:"200vh",background:"rgba(0, 0, 0, 0.04)"}})]})]})},O={args:{...c.args,rightSectionContent:e.jsx("div",{style:{width:"36px",height:"36px",backgroundColor:"rgba(255, 0, 0, 0.1)",borderRadius:"4px"}})}},z={args:{...c.args,leftSectionContent:e.jsx("div",{style:{width:"36px",height:"36px",backgroundColor:"rgba(255, 0, 0, 0.1)",borderRadius:"4px"}})}},K={tags:["skip-ci"],parameters:{viewport:{defaultViewport:"mobile2"}},args:{...c.args,hasSearchbar:!0},render:a=>{const[r,l]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(k,{...a,onSearchActiveChange:l}),e.jsx("div",{style:{margin:"1rem"},children:e.jsxs("p",{style:{fontFamily:"monospace"},children:["isSearchActive: ",e.jsx("strong",{children:r?"true":"false"})]})})]})},play:async({canvasElement:a})=>{const r=i(a),l=r.getByRole("banner");await y(()=>{n(i(l).getByText("Nom de l'application")).toBeVisible(),n(i(l).queryByRole("search")).toBeNull(),Q(a,"closed")});const t=i(l).getByRole("button",{name:"Rechercher"});await x.click(t),await y(()=>{n(i(l).getByRole("search")).toBeVisible(),ja(l),ie(a,!0),Q(a,"open")});const d=i(l).getByRole("textbox");await x.type(d,"abc"),await x.click(r.getByText("isSearchActive:")),await y(()=>{n(i(l).getByText("Nom de l'application")).toBeVisible(),n(i(l).queryByRole("search")).toBeNull(),ie(a,!1),Q(a,"closed")})}},W={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...c.args,applicationName:"Nom de l'application avec un nom très long"}},U={tags:["skip-ci"],parameters:{viewport:{defaultViewport:"mobile2"}},args:{...c.args,mobileMenuItems:[{label:"Profil",link:"/profile"},{label:"Paramètres",link:"/settings"},{label:"Déconnexion",link:"/logout"}]},render:a=>{var v;const[r,l]=p.useState(!1),[t,d]=p.useState(void 0),o=((v=a.mobileMenuItems)==null?void 0:v.map(u=>({...u,onClick:()=>d(u.label)})))||[];return e.jsxs(e.Fragment,{children:[e.jsx(k,{...a,mobileMenuItems:o,onMobileMenuClick:()=>l(u=>!u),isMobileMenuOpen:r,onMobileMenuClose:()=>l(!1)}),e.jsx("div",{style:{margin:"1rem"},children:e.jsxs("p",{style:{fontFamily:"monospace"},"data-testid":"intercepted-selected-item-id",children:["selectedMenuItem: ",e.jsx("strong",{children:t||"none"})]})})]})},play:async({canvasElement:a})=>{const r=i(a),l=i(a.ownerDocument.body),t=r.getByRole("banner");await x.click(i(t).getByRole("button",{name:"Menu"})),await y(()=>{n(i(t).getByRole("button",{name:"Menu"})).toHaveAttribute("aria-expanded","true")}),await y(()=>{n(l.getAllByRole("menuitem").length).toBeGreaterThan(0)});const o=l.getAllByRole("menuitem").find(v=>(v.textContent||"").includes("Paramètres"));n(o).toBeTruthy(),await x.click(o),await y(()=>{n(r.getByTestId("intercepted-selected-item-id")).toHaveTextContent("Paramètres"),n(i(t).getByRole("button",{name:"Menu"})).toHaveAttribute("aria-expanded","false")})}},Y={parameters:{viewport:{defaultViewport:"mobile2"}},args:{...c.args,mobileMenuContent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"8px"},children:[e.jsx("a",{href:"/profile",children:"Profil"}),e.jsx("a",{href:"/settings",children:"Paramètres"}),e.jsx("a",{href:"/logout",children:"Déconnexion"})]})},render:a=>{const[r,l]=p.useState(!1);return e.jsx(e.Fragment,{children:e.jsx(k,{...a,onMobileMenuClick:()=>l(t=>!t),isMobileMenuOpen:r,onMobileMenuClose:()=>l(!1)})})}};var oe;const G={args:{...c.args,searchbarProps:{label:"Rechercher",assistiveText:"Rechercher dans l'application",value:"rte",onSearch:H()},onActionButtonClick:H(),onIconButtonClick:H(),avatarProps:{...(oe=c.args)==null?void 0:oe.avatarProps,onClick:H()}},play:async({args:a,canvasElement:r})=>{const t=i(r).getByRole("banner"),d=i(t).getByRole("search");await x.click(i(d).getByRole("button",{name:"Rechercher"})),await y(()=>{var o;n((o=a.searchbarProps)==null?void 0:o.onSearch).toHaveBeenCalledWith("rte")}),await x.click(i(t).getByRole("button",{name:"Partager"})),await y(()=>{n(a.onActionButtonClick).toHaveBeenCalled()}),await x.click(i(t).getByRole("button",{name:"Notification"})),await y(()=>{n(a.onIconButtonClick).toHaveBeenCalledWith("notification")}),await x.click(i(t).getByRole("button",{name:"Avatar button"})),await y(()=>{var o;n((o=a.avatarProps)==null?void 0:o.onClick).toHaveBeenCalled()})}};function Q(a,r){const l=a.querySelector(".rte-header-mobile");n(l).not.toBeNull(),n(l).toHaveAttribute("data-search-state",r)}function ie(a,r){const l=a.querySelector('[role="banner"]');n(l).not.toBeNull();const t=i(l).getByText("Nom de l'application");r?n(t).toHaveAttribute("aria-hidden","true"):n(t).not.toHaveAttribute("aria-hidden","true")}function ja(a,r){const l=i(a).getByText("Nom de l'application");n(l).not.toBeVisible()}var ue,me,se;c.parameters={...c.parameters,docs:{...(ue=c.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(se=(me=c.parameters)==null?void 0:me.docs)==null?void 0:se.source}}};var ce,ve,de;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral"
  }
}`,...(de=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:de.source}}};var pe,he,ge;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(he=E.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,we,be;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(we=T.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var ye,xe,ke;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ke=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var Se,Re,Be;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    navigationItems: undefined
  }
}`,...(Be=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var Ne,Ie,je;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(je=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Me,_e,Te;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Te=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Te.source}}};var Ae,De,Ce;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightSectionContent: <div style={{
      width: "36px",
      height: "36px",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      borderRadius: "4px"
    }}></div>
  }
}`,...(Ce=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Ce.source}}};var He,qe,Ee;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftSectionContent: <div style={{
      width: "36px",
      height: "36px",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      borderRadius: "4px"
    }}></div>
  }
}`,...(Ee=(qe=z.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var Ve,Le,Pe;K.parameters={...K.parameters,docs:{...(Ve=K.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Pe=(Le=K.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var Fe,Oe,ze;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  },
  args: {
    ...Default.args,
    applicationName: "Nom de l'application avec un nom très long"
  }
}`,...(ze=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Ke,We,Ue;U.parameters={...U.parameters,docs:{...(Ke=U.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ue=(We=U.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var Ye,Ge,Je;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Xe,$e,Qe;G.parameters={...G.parameters,docs:{...(Xe=G.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Qe=($e=G.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};const ml=["Default","Neutral","Compact","WithVersionNumber","WithVersionNumberCompact","NoMidSection","Sticky","ShowAtScrollUp","WithRightSectionContent","WithLeftSectionContent","MobileSearchInteraction","MobileLongApplicationName","MobileMenuItems","MobileMenuContent","DesktopInteraction"];export{E as Compact,c as Default,G as DesktopInteraction,W as MobileLongApplicationName,Y as MobileMenuContent,U as MobileMenuItems,K as MobileSearchInteraction,q as Neutral,L as NoMidSection,F as ShowAtScrollUp,P as Sticky,z as WithLeftSectionContent,O as WithRightSectionContent,T as WithVersionNumber,V as WithVersionNumberCompact,ml as __namedExportsOrder,ul as default};
