import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./timepicker.constants-CynrC_9x.js";import{d as bn}from"./keyboard-test.constants-By8W48aj.js";import{f as Y,w as l,u,e as i,a as k}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import{a as un}from"./testing.utils-r13wRTL2.js";import{B as w}from"./Button-kS01vuC-.js";import{I as K}from"./IconButton-CqYdVntE.js";import{l as fn}from"./log-handlers-DViU2c-X.js";import{u as Cn,B as xn,b as Bn,a as kn}from"./useFreezeNavigation-DiHi6ZNe.js";import{u as On}from"./useAnimatedMount-_zPBpYOt.js";import{u as Rn}from"./useFocusTrap-BZu4_Auv.js";import{u as In}from"./useKeydownEscape-mLuzHv9M.js";import{D as Dn}from"./Divider-BVZUrQ0d.js";import{O as En}from"./Overlay-Cbl_vQ6W.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./Icon-VewZnR13.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Tn=240,Sn=4,X="Drawer requires ariaLabel when the default header is not used.",q={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},Pn=[{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:q.MISSING_HEADER_OR_TITLE},{condition:e=>!qn(e)&&!e.hasAriaLabel,issue:X},{condition:e=>!!e.showFooter&&!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:q.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:q.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:q.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function qn(e){return!!e.showHeader&&!e.hasCustomHeader&&e.hasTitle}function Nn(e){var a;return(a=Pn.find(({condition:t})=>t(e)))==null?void 0:a.issue}function Mn(e,a){return!e&&!!a}function Hn(e,a){return!e&&!!a}function jn(e){return!!e.showHeader&&!e.hasCustomHeader&&e.hasTitle}function An(e){var m;const{id:a,showHeader:t,hasCustomHeader:o,hasTitle:r}=e;if(jn({showHeader:!!t,hasCustomHeader:o,hasTitle:r}))return{ariaLabelledby:`${a}-drawer-title`};const s=(m=e.ariaLabel)==null?void 0:m.trim();return s?{ariaLabel:s}:{}}const _n=(e,a,t=0)=>e?`translateX(-${a+t}px)`:"none",Ln="_drawer_1ybli_1",g={"drawer-responsive-container":"_drawer-responsive-container_1ybli_1","drawer-children":"_drawer-children_1ybli_7",drawer:Ln,"drawer-content":"_drawer-content_1ybli_75","drawer-toggle":"_drawer-toggle_1ybli_83","drawer-footer":"_drawer-footer_1ybli_97","drawer-header-content":"_drawer-header-content_1ybli_104"},Fn=4,de=({isCollapsible:e,iconToggleCloseContainerRef:a,isOpen:t,isAnimating:o,handleOnClickToggle:r,shouldDisplayDefaultHeader:s,showHeader:m,id:h,title:f,icon:R,iconAppearance:C,onClose:I,isClosable:v,header:x,drawerLeftPosition:p})=>n.jsxs(n.Fragment,{children:[e&&n.jsx(K,{ref:a,className:g["drawer-toggle"],style:{transition:"none",transform:_n(o,p,Fn)},name:t?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:r,"aria-label":`Close drawer ${h}`}),m&&(s?n.jsx(kn,{id:h,title:f,icon:R,iconAppearance:C,onClose:I,isClosable:v,titleElementId:`${h}-drawer-title`}):n.jsx(n.Fragment,{children:x}))]}),me=({content:e,fixedHeader:a})=>n.jsx("div",{className:g["drawer-content"],"data-fixed-header":a,tabIndex:-1,children:e}),pe=({fixedHeader:e,id:a,title:t,icon:o,iconAppearance:r,isCollapsible:s,iconToggleCloseContainerRef:m,isOpen:h,isAnimating:f,handleOnClickToggle:R,shouldDisplayDefaultHeader:C,showHeader:I,onClose:v,isClosable:x,header:p,drawerLeftPosition:O,content:D})=>{const B={id:a,title:t,icon:o,iconAppearance:r,isCollapsible:s,iconToggleCloseContainerRef:m,isOpen:h,isAnimating:f,handleOnClickToggle:R,shouldDisplayDefaultHeader:!!C,showHeader:I,onClose:v,isClosable:x,header:p,drawerLeftPosition:O};return e?n.jsxs(n.Fragment,{children:[n.jsx(de,{...B}),n.jsx(me,{content:D,fixedHeader:e})]}):n.jsxs("div",{className:g["drawer-header-content"],children:[n.jsx(de,{...B}),n.jsx(me,{content:D})]})},ge=({fixedHeader:e,shouldDisplayDefaultFooter:a,primaryButtonLabel:t,secondaryButtonLabel:o,footer:r,onClickPrimaryButton:s,onClickSecondaryButton:m,showFooter:h})=>h?n.jsx("div",{className:g["drawer-footer"],"data-fixed-header":e,children:a?n.jsx(Bn,{primaryButton:n.jsx(w,{label:t,variant:"primary",onClick:s}),secondaryButton:o?n.jsx(w,{label:o,variant:"secondary",onClick:m}):void 0}):r&&n.jsx(n.Fragment,{children:r})}):null,b=({id:e,title:a,icon:t,iconAppearance:o,isOpen:r,onClose:s,onClickToggle:m,closeOnOverlayClick:h=!1,primaryButtonLabel:f,secondaryButtonLabel:R,isCollapsible:C=!1,content:I,header:v,footer:x,position:p="modal",width:O,children:D,fixedHeader:B,showHeader:J=!0,showFooter:ae=!0,closeOnEscape:mn=!1,isClosable:pn=!0,ariaLabel:E,onClickPrimaryButton:gn,onClickSecondaryButton:hn,...re})=>{var ue;const{shouldRender:oe,isAnimating:d}=On(r,Tn),T=y.useRef(null),Z=y.useRef(null),ee=y.useRef(null),se=((ue=T.current)==null?void 0:ue.clientWidth)||0;In(mn?s:()=>{}),Rn(T.current,oe&&p==="modal"),Cn(p==="modal"&&r);const yn=Mn(v,a),wn=Hn(x,f),S=Nn({hasCustomHeader:!!v,hasTitle:!!a,hasCustomFooter:!!x,hasPrimaryButtonLabel:!!f,position:p,hasMainContent:!!D,showHeader:J,showFooter:ae,hasAriaLabel:!!(E!=null&&E.trim())});if(S)return S===X?fn("Drawer",S):console.warn(S),null;const ie=(vn=0)=>d?`translateX(-${se+vn}px)`:"none",ne=()=>{r&&Z.current&&Z.current.focus(),!r&&ee.current&&ee.current.focus(),m()},P=An({id:e,showHeader:J,hasCustomHeader:!!v,hasTitle:!!a,ariaLabel:E}),le={fixedHeader:B,id:e,title:a,icon:t,iconAppearance:o,isCollapsible:C,iconToggleCloseContainerRef:ee,isOpen:r,isAnimating:d,handleOnClickToggle:ne,shouldDisplayDefaultHeader:!!yn,showHeader:J,onClose:s,isClosable:pn,header:v,drawerLeftPosition:se,content:I},ce={fixedHeader:B,shouldDisplayDefaultFooter:!!wn,primaryButtonLabel:f,secondaryButtonLabel:R,footer:x,onClickPrimaryButton:gn,onClickSecondaryButton:hn,showFooter:ae};return n.jsx(n.Fragment,{children:p==="responsive"?n.jsx(n.Fragment,{children:n.jsxs("div",{className:g["drawer-responsive-container"],children:[C&&n.jsx(K,{className:g["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:d?0:1,transform:ie(Sn)},name:"right-panel-open",size:"l",variant:"primary",onClick:ne,"aria-label":`Close drawer ${e}`}),n.jsx(Dn,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:d?"visible":"hidden",transform:ie()}}),n.jsx("div",{className:g["drawer-children"],"data-open":d,style:{marginRight:d?O:0},children:D}),n.jsxs("div",{className:g.drawer,ref:T,"data-open":d,role:"region","aria-labelledby":P.ariaLabelledby,"aria-label":P.ariaLabel,"data-position":p,"data-fixed-header":B,style:{width:O,transform:d?"none":`translateX(${O||"100%"})`,visibility:d?"visible":"hidden"},...re,children:[n.jsx(pe,{...le}),n.jsx(ge,{...ce})]})]})}):n.jsxs(n.Fragment,{children:[C&&n.jsx(K,{ref:Z,className:g["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:d?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:ne,"aria-label":`Close drawer ${e}`}),oe&&n.jsxs(En,{backdropLayer:!0,children:[n.jsx(xn,{isAnimating:d,onClick:h?s:void 0}),n.jsxs("div",{ref:T,className:g.drawer,"data-open":d,"data-fixed-header":B,"data-position":p,role:"dialog","aria-modal":"true","aria-labelledby":P.ariaLabelledby,"aria-label":P.ariaLabel,style:{width:O},...re,children:[n.jsx(pe,{...le}),n.jsx(ge,{...ce})]})]})]})})};b.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"modal"',computed:!1},required:!1},showHeader:{defaultValue:{value:"true",computed:!1},required:!1},showFooter:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const bt={title:"Composants/Drawer/Drawer",component:b,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},dn=e=>{i(e).toBeTruthy(),i(e).toHaveAttribute("aria-hidden","true")},te=e=>{i(e).toBeTruthy(),dn(e.querySelector("svg"))},Vn=e=>e.querySelector('[class*="base-header-text"] > svg'),Un=`Manual accessibility check (NVDA / VoiceOver):

1. Open the modal drawer with **Open drawer**.
2. Use browse / virtual navigation (NVDA: browse mode; VoiceOver: VO + arrow keys in the web area)—**not Tab** (focus trap is expected with Tab).
3. Move through the page with arrow keys.

**Expected:** Background markers must **not** be announced or reachable: heading « Page d'accueil — contenu masqué visuellement », paragraph « Ce paragraphe ne doit pas être lu lorsque le drawer modal est ouvert. », button « Action page — ne pas atteindre en modal », link « Lien page arrière-plan — repère a11y ».

**If they are still read:** background content is still exposed to virtual browse while the modal drawer is open.`,zn={fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},c={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:Y(),onClickSecondaryButton:Y(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Body content."})},render:e=>{const[a,t]=y.useState(e.isOpen),o=()=>{t(s=>!s)},r=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:r})]})}},N={args:{...c.args,id:"modal-background-screen-reader-check",title:"Modal drawer",position:"modal"},render:e=>{const[a,t]=y.useState(!1),o=()=>{var r;(r=e.onClickPrimaryButton)==null||r.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsxs("main",{style:zn,"aria-label":"Page principale derrière l'overlay",children:[n.jsx("h1",{style:{fontSize:"20px",margin:"0 0 12px"},children:"Page d'accueil — contenu masqué visuellement"}),n.jsx("p",{style:{margin:"0 0 12px"},children:"Ce paragraphe ne doit pas être lu lorsque le drawer modal est ouvert."}),n.jsx("button",{type:"button",style:{margin:"0 12px 12px 0"},onClick:()=>console.log("background action"),children:"Action page — ne pas atteindre en modal"}),n.jsx("a",{href:"#background-page-marker",children:"Lien page arrière-plan — repère a11y"}),n.jsx("div",{style:{marginTop:"16px"},children:n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)})})]}),n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:()=>t(r=>!r),onClickPrimaryButton:o})]})},parameters:{docs:{description:{story:Un}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"})),await k(()=>{i(l(document.body).getByRole("dialog",{name:"Modal drawer"})).toBeInTheDocument()});const t=document.getElementById("overlay-root"),o=Array.from(document.body.children).find(s=>s!==t&&s instanceof HTMLElement&&s.getAttribute("aria-hidden")==="true");i(o).toBeTruthy(),i(o).toHaveProperty("inert",!0);const r=l(document.body);i(r.queryByRole("heading",{name:/Page d'accueil/})).not.toBeInTheDocument(),i(r.queryByRole("button",{name:"Action page — ne pas atteindre en modal"})).not.toBeInTheDocument(),i(r.queryByRole("link",{name:/Lien page arrière-plan/})).not.toBeInTheDocument()}},M={tags:["!autodocs"],args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:Y(),onClickSecondaryButton:Y(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[a,t]=y.useState(e.isOpen),o=()=>{t(s=>!s)},r=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:r})]})},play:async({canvasElement:e,args:a})=>{const o=await l(e).getByRole("button",{name:"Open drawer"});await u.click(o);const r=l(document.body).getByRole("dialog");i(r).toBeInTheDocument(),await u.click(l(r).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(r).toBeInTheDocument(),await u.click(l(r).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},H={tags:["!autodocs"],args:{...c.args,isCollapsible:!0,id:"example-drawer"},render:c.render,play:async({canvasElement:e})=>{const a=l(e);await u.click(await a.getByRole("button",{name:"Open drawer"}));const t=await l(document.body).findByRole("dialog"),o=l(t);dn(Vn(t)),te(o.getByRole("button",{name:"Close modal example-drawer"})),te(o.getByRole("button",{name:"Close drawer example-drawer"}));const r=document.body.querySelector('[class*="drawer-toggle"]');te(r)}},j={args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=y.useState(e.isOpen),o=()=>{t(s=>!s)},r=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:r,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Drawer panel."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Main area next to the panel."})]})})})}},A={tags:["!autodocs"],args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=y.useState(e.isOpen),o=()=>{t(s=>!s)},r=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:r,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:a})=>{const t=l(e),o=await t.getByRole("button",{name:"Open drawer"});await u.click(o);const r=await k(()=>{const s=t.getByRole("region");return i(s).toHaveAttribute("data-position","responsive"),i(s).toHaveAttribute("data-open","true"),i(l(s).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),s});await u.click(l(r).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(r).toHaveAttribute("data-open","true"),await u.click(l(r).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{i(r).toHaveAttribute("data-open","false")})}},_={args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}}},L={tags:["autodocs"],args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=l(document.body).getByRole("dialog");i(t).toBeInTheDocument(),await u.keyboard(bn),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},F={tags:["skip-ci"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}}},V={tags:["skip-ci","!autodocs"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const o=l(document.body).getByRole("dialog").previousElementSibling;i(o).not.toBeNull(),await u.click(o),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},U={args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}}},z={tags:["!autodocs"],args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=l(document.body).getByRole("dialog");i(t).toBeInTheDocument(),i(l(t).queryByRole("button",{name:"Confirm"})).not.toBeInTheDocument(),i(l(t).queryByRole("button",{name:"Cancel"})).not.toBeInTheDocument()}},W={args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}}},Q={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}},play:async({canvasElement:e,args:a})=>{const t=l(e);await u.click(t.getByRole("button",{name:"Open drawer"}));const o=l(document.body).getByRole("dialog",{name:"Example drawer"});i(o).toBeInTheDocument(),i(l(o).queryByRole("heading")).not.toBeInTheDocument(),i(l(o).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await u.click(l(o).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(o).toBeInTheDocument(),await u.click(l(o).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},$={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header-missing-aria",title:void 0,icon:void 0,showHeader:!1},render:c.render,beforeEach:un(`[Drawer] ${X}`),play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"})),i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()}},G={args:{...c.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},beforeEach:un(`[Drawer] ${X}`),render:e=>{const[a,t]=y.useState(e.isOpen),o=()=>{t(r=>!r)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(b,{...e,isOpen:a,ariaLabel:"Custom header drawer",onClose:()=>t(!1),onClickToggle:o,header:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[n.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial"},children:"Custom Header"}),n.jsx(K,{name:"close",size:"m",onClick:()=>t(!1),"aria-label":"Close drawer"})]}),footer:n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:n.jsx(w,{label:"Custom Action",variant:"primary"})})})]})}};var he,ye,we;c.parameters={...c.parameters,docs:{...(he=c.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose() {
      console.log("Drawer closed");
    },
    id: "example-drawer",
    title: "Example Drawer",
    icon: "settings",
    iconAppearance: "outlined",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    isCollapsible: false,
    position: "modal",
    fixedHeader: true,
    showHeader: true,
    width: "400px",
    isClosable: true,
    onClickToggle() {
      console.log("Toggle drawer");
    },
    onClickPrimaryButton: fn(),
    onClickSecondaryButton: fn(),
    content: <span style={{
      fontFamily: "arial",
      fontSize: "14px",
      lineHeight: "20px"
    }}>Body content.</span>
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} onClickPrimaryButton={handleClickPrimaryButton} />
      </>;
  }
}`,...(we=(ye=c.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ve,be,fe;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "modal-background-screen-reader-check",
    title: "Modal drawer",
    position: "modal"
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <>
        <main style={pageBehindOverlayStyle} aria-label="Page principale derrière l'overlay">
          <h1 style={{
          fontSize: "20px",
          margin: "0 0 12px"
        }}>Page d&apos;accueil — contenu masqué visuellement</h1>
          <p style={{
          margin: "0 0 12px"
        }}>Ce paragraphe ne doit pas être lu lorsque le drawer modal est ouvert.</p>
          <button type="button" style={{
          margin: "0 12px 12px 0"
        }} onClick={() => console.log("background action")}>
            Action page — ne pas atteindre en modal
          </button>
          <a href="#background-page-marker">Lien page arrière-plan — repère a11y</a>
          <div style={{
          marginTop: "16px"
        }}>
            <Button label="Open drawer" onClick={() => setIsOpen(true)} />
          </div>
        </main>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={() => setIsOpen(previous => !previous)} onClickPrimaryButton={handleClickPrimaryButton} />
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: modalBackgroundScreenReaderManualCheckDescription
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    await waitFor(() => {
      expect(within(document.body).getByRole("dialog", {
        name: "Modal drawer"
      })).toBeInTheDocument();
    });
    const overlayRoot = document.getElementById("overlay-root");
    const hiddenPageShell = Array.from(document.body.children).find(element => element !== overlayRoot && element instanceof HTMLElement && element.getAttribute("aria-hidden") === "true");
    expect(hiddenPageShell).toBeTruthy();
    expect(hiddenPageShell).toHaveProperty("inert", true);
    const backgroundScope = within(document.body);
    expect(backgroundScope.queryByRole("heading", {
      name: /Page d'accueil/
    })).not.toBeInTheDocument();
    expect(backgroundScope.queryByRole("button", {
      name: "Action page — ne pas atteindre en modal"
    })).not.toBeInTheDocument();
    expect(backgroundScope.queryByRole("link", {
      name: /Lien page arrière-plan/
    })).not.toBeInTheDocument();
  }
}`,...(fe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ce,xe,Be;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    isOpen: false,
    onClose() {
      console.log("Drawer closed");
    },
    id: "example-drawer",
    title: "Example Drawer",
    icon: "settings",
    iconAppearance: "outlined",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    isCollapsible: false,
    position: "modal",
    fixedHeader: true,
    showHeader: true,
    width: "400px",
    isClosable: true,
    onClickToggle() {
      console.log("Toggle drawer");
    },
    onClickPrimaryButton: fn(),
    onClickSecondaryButton: fn(),
    content: <span style={{
      fontFamily: "arial",
      fontSize: "14px",
      lineHeight: "20px"
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non
        arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam
        tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non
        magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras
        scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus
        sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum.
        Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus
        convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra
        tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at
        porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu
        mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed
        turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit
        ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh.
        Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis
        odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim,
        pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas
        vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id
        mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat
        erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus,
        maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla.
        Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit
        amet, luctus sed ligula.
      </span>
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} onClickPrimaryButton={handleClickPrimaryButton} />
      </>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", {
      name: "Open drawer"
    });
    await userEvent.click(openButton);
    const drawer = within(document.body).getByRole("dialog");
    expect(drawer).toBeInTheDocument();
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Cancel"
    }));
    expect(args.onClickSecondaryButton).toHaveBeenCalled();
    expect(drawer).toBeInTheDocument();
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Confirm"
    }));
    expect(args.onClickPrimaryButton).toHaveBeenCalled();
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  }
}`,...(Be=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var ke,Oe,Re;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isCollapsible: true,
    id: "example-drawer"
  },
  render: Default.render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const drawer = await within(document.body).findByRole("dialog");
    const drawerBody = within(drawer);
    expectDecorativeIconSvg(getDrawerHeaderTitleIconSvg(drawer));
    expectDecorativeButtonIcon(drawerBody.getByRole("button", {
      name: "Close modal example-drawer"
    }));
    expectDecorativeButtonIcon(drawerBody.getByRole("button", {
      name: "Close drawer example-drawer"
    }));
    const floatingToggle = document.body.querySelector('[class*="drawer-toggle"]');
    expectDecorativeButtonIcon(floatingToggle);
  }
}`,...(Re=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var Ie,De,Ee;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "responsive-drawer",
    title: "Responsive Drawer",
    position: "responsive",
    icon: undefined,
    isClosable: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <div style={{
      border: "1px solid #ccc",
      width: "600px",
      height: "500px"
    }}>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} onClickPrimaryButton={handleClickPrimaryButton} content={<span style={{
        fontFamily: "arial",
        fontSize: "14px",
        lineHeight: "20px"
      }}>Drawer panel.</span>} width="400px">
          <div style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px"
        }}>
            <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
            <span style={{
            fontFamily: "arial",
            fontSize: "14px",
            lineHeight: "20px"
          }}>
              Main area next to the panel.
            </span>
          </div>
        </Drawer>
      </div>;
  }
}`,...(Ee=(De=j.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Te,Se,Pe;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    id: "responsive-drawer",
    title: "Responsive Drawer",
    position: "responsive",
    icon: undefined,
    isClosable: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <div style={{
      border: "1px solid #ccc",
      width: "600px",
      height: "500px"
    }}>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} onClickPrimaryButton={handleClickPrimaryButton} content={<span style={{
        fontFamily: "arial",
        fontSize: "14px",
        lineHeight: "20px"
      }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl
              non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi.
              Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin
              vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus
              imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta
              tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus
              congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu.
              Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit.
              Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc,
              ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc
              eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed
              vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio.
              Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor
              eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex.
              Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet
              tincidunt.
            </span>} width="400px">
          <div style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px"
        }}>
            <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
            <span style={{
            fontFamily: "arial",
            fontSize: "14px",
            lineHeight: "20px"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl
              non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi.
              Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin
              vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus
              imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta
              tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus
              congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada
              nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque
              a feugiat tellus. Proin vehicula risus non magna hendrerit mollis.
            </span>
          </div>
        </Drawer>
      </div>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", {
      name: "Open drawer"
    });
    await userEvent.click(openButton);
    const drawer = await waitFor(() => {
      const panel = canvas.getByRole("region");
      expect(panel).toHaveAttribute("data-position", "responsive");
      expect(panel).toHaveAttribute("data-open", "true");
      expect(within(panel).getByRole("heading", {
        name: "Responsive Drawer"
      })).toBeInTheDocument();
      return panel;
    });
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Cancel"
    }));
    expect(args.onClickSecondaryButton).toHaveBeenCalled();
    expect(drawer).toHaveAttribute("data-open", "true");
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Confirm"
    }));
    expect(args.onClickPrimaryButton).toHaveBeenCalled();
    await waitFor(() => {
      expect(drawer).toHaveAttribute("data-open", "false");
    });
  }
}`,...(Pe=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var qe,Ne,Me;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "drawer-close-on-escape",
    title: "Close on Escape",
    closeOnEscape: true,
    position: "modal"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."
      }
    }
  }
}`,...(Me=(Ne=_.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var He,je,Ae;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`{
  tags: ["autodocs"],
  args: {
    ...Default.args,
    id: "drawer-close-on-escape",
    title: "Close on Escape",
    closeOnEscape: true,
    position: "modal"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const dialog = within(document.body).getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  }
}`,...(Ae=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var _e,Le,Fe;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    id: "drawer-close-on-overlay-click",
    title: "Close on overlay click",
    closeOnOverlayClick: true,
    position: "modal"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is \`modal\`."
      }
    }
  }
}`,...(Fe=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var Ve,Ue,ze;V.parameters={...V.parameters,docs:{...(Ve=V.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    id: "drawer-close-on-overlay-click",
    title: "Close on overlay click",
    closeOnOverlayClick: true,
    position: "modal"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is \`modal\`."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const dialog = within(document.body).getByRole("dialog");
    const backdropElement = dialog.previousElementSibling;
    expect(backdropElement).not.toBeNull();
    await userEvent.click(backdropElement as HTMLElement);
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  }
}`,...(ze=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var We,Qe,$e;U.parameters={...U.parameters,docs:{...(We=U.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "drawer-without-footer",
    primaryButtonLabel: undefined,
    secondaryButtonLabel: undefined,
    showFooter: false
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showFooter** set to \`false\`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."
      }
    }
  }
}`,...($e=(Qe=U.parameters)==null?void 0:Qe.docs)==null?void 0:$e.source}}};var Ge,Ye,Ke;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    id: "drawer-without-footer",
    primaryButtonLabel: undefined,
    secondaryButtonLabel: undefined,
    showFooter: false
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showFooter** set to \`false\`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const drawer = within(document.body).getByRole("dialog");
    expect(drawer).toBeInTheDocument();
    expect(within(drawer).queryByRole("button", {
      name: "Confirm"
    })).not.toBeInTheDocument();
    expect(within(drawer).queryByRole("button", {
      name: "Cancel"
    })).not.toBeInTheDocument();
  }
}`,...(Ke=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var Xe,Je,Ze;W.parameters={...W.parameters,docs:{...(Xe=W.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "drawer-without-header",
    title: undefined,
    icon: undefined,
    showHeader: false,
    ariaLabel: "Example drawer"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showHeader** set to \`false\`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."
      }
    }
  }
}`,...(Ze=(Je=W.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var en,nn,tn;Q.parameters={...Q.parameters,docs:{...(en=Q.parameters)==null?void 0:en.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    id: "drawer-without-header",
    title: undefined,
    icon: undefined,
    showHeader: false,
    ariaLabel: "Example drawer"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showHeader** set to \`false\`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const drawer = within(document.body).getByRole("dialog", {
      name: "Example drawer"
    });
    expect(drawer).toBeInTheDocument();
    expect(within(drawer).queryByRole("heading")).not.toBeInTheDocument();
    expect(within(drawer).queryByTestId("modal-close-button")).not.toBeInTheDocument();
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Cancel"
    }));
    expect(args.onClickSecondaryButton).toHaveBeenCalled();
    expect(drawer).toBeInTheDocument();
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Confirm"
    }));
    expect(args.onClickPrimaryButton).toHaveBeenCalled();
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  }
}`,...(tn=(nn=Q.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var an,rn,on;$.parameters={...$.parameters,docs:{...(an=$.parameters)==null?void 0:an.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    id: "drawer-without-header-missing-aria",
    title: undefined,
    icon: undefined,
    showHeader: false
  },
  render: Default.render,
  beforeEach: acceptLogError(\`[Drawer] \${DRAWER_MISSING_ACCESSIBLE_NAME_ERROR}\`),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
  }
}`,...(on=(rn=$.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var sn,ln,cn;G.parameters={...G.parameters,docs:{...(sn=G.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closeOnEscape: true,
    id: "custom-header-footer-drawer"
  },
  beforeEach: acceptLogError(\`[Drawer] \${DRAWER_MISSING_ACCESSIBLE_NAME_ERROR}\`),
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    return <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer {...args} isOpen={isOpen} ariaLabel="Custom header drawer" onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} header={<div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        width: "100%"
      }}>
              <span style={{
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "arial"
        }}>Custom Header</span>
              <IconButton name="close" size="m" onClick={() => setIsOpen(false)} aria-label="Close drawer" />
            </div>} footer={<div style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "8px",
        boxSizing: "border-box",
        width: "100%"
      }}>
              <Button label="Custom Action" variant="primary" />
            </div>} />
      </>;
  }
}`,...(cn=(ln=G.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};const ft=["Default","ModalBackgroundScreenReaderManualCheck","ModalInteractive","ModalDecorativeIconsInteractive","Responsive","ResponsiveInteractive","CloseOnEscape","CloseOnEscapeInteractive","CloseOnOverlayClick","CloseOnOverlayClickInteractive","WithoutFooter","WithoutFooterInteractive","WithoutHeader","WithoutHeaderInteractive","WithoutHeaderMissingAccessibleName","CustomHeaderFooter"];export{_ as CloseOnEscape,L as CloseOnEscapeInteractive,F as CloseOnOverlayClick,V as CloseOnOverlayClickInteractive,G as CustomHeaderFooter,c as Default,N as ModalBackgroundScreenReaderManualCheck,H as ModalDecorativeIconsInteractive,M as ModalInteractive,j as Responsive,A as ResponsiveInteractive,U as WithoutFooter,z as WithoutFooterInteractive,W as WithoutHeader,Q as WithoutHeaderInteractive,$ as WithoutHeaderMissingAccessibleName,ft as __namedExportsOrder,bt as default};
