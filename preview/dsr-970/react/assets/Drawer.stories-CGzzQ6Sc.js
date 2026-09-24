import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./timepicker.constants-CynrC_9x.js";import{d as xn}from"./keyboard-test.constants-By8W48aj.js";import{f as X,w as l,u,e as i,a as k}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{a as mn}from"./testing.utils-r13wRTL2.js";import{B as w}from"./Button-kS01vuC-.js";import{I as J}from"./IconButton-CqYdVntE.js";import{l as Bn}from"./log-handlers-DViU2c-X.js";import{u as kn,B as On,b as Rn,a as In}from"./useFreezeNavigation-DiHi6ZNe.js";import{u as Dn}from"./useAnimatedMount-_zPBpYOt.js";import{u as En}from"./useFocusTrap-B8jmp47U.js";import{u as Tn}from"./useKeydownEscape-mLuzHv9M.js";import{D as Sn}from"./Divider-BVZUrQ0d.js";import{O as Pn}from"./Overlay-GTCQ0mq_.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./Icon-VewZnR13.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const qn=240,Nn=4,Z="Drawer requires ariaLabel when the default header is not used.",M={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},Mn=[{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:M.MISSING_HEADER_OR_TITLE},{condition:e=>!Hn(e)&&!e.hasAriaLabel,issue:Z},{condition:e=>!!e.showFooter&&!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:M.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:M.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:M.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function Hn(e){return!!e.showHeader&&!e.hasCustomHeader&&e.hasTitle}function jn(e){var a;return(a=Mn.find(({condition:t})=>t(e)))==null?void 0:a.issue}function An(e,a){return!e&&!!a}function _n(e,a){return!e&&!!a}function Fn(e){return!!e.showHeader&&!e.hasCustomHeader&&e.hasTitle}function Ln(e){var p;const{id:a,showHeader:t,hasCustomHeader:o,hasTitle:r}=e;if(Fn({showHeader:!!t,hasCustomHeader:o,hasTitle:r}))return{ariaLabelledby:`${a}-drawer-title`};const s=(p=e.ariaLabel)==null?void 0:p.trim();return s?{ariaLabel:s}:{}}const Vn=(e,a,t=0)=>e?`translateX(-${a+t}px)`:"none",Un="_drawer_1ybli_1",h={"drawer-responsive-container":"_drawer-responsive-container_1ybli_1","drawer-children":"_drawer-children_1ybli_7",drawer:Un,"drawer-content":"_drawer-content_1ybli_75","drawer-toggle":"_drawer-toggle_1ybli_83","drawer-footer":"_drawer-footer_1ybli_97","drawer-header-content":"_drawer-header-content_1ybli_104"},zn=4,pe=({isCollapsible:e,iconToggleCloseContainerRef:a,isOpen:t,isAnimating:o,handleOnClickToggle:r,shouldDisplayDefaultHeader:s,showHeader:p,id:y,title:f,icon:R,iconAppearance:C,onClose:I,isClosable:v,header:x,drawerLeftPosition:g})=>n.jsxs(n.Fragment,{children:[e&&n.jsx(J,{ref:a,className:h["drawer-toggle"],style:{transition:"none",transform:Vn(o,g,zn)},name:t?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:r,"aria-label":`Close drawer ${y}`}),p&&(s?n.jsx(In,{id:y,title:f,icon:R,iconAppearance:C,onClose:I,isClosable:v,titleElementId:`${y}-drawer-title`}):n.jsx(n.Fragment,{children:x}))]}),ge=({content:e,fixedHeader:a})=>n.jsx("div",{className:h["drawer-content"],"data-fixed-header":a,tabIndex:-1,children:e}),he=({fixedHeader:e,id:a,title:t,icon:o,iconAppearance:r,isCollapsible:s,iconToggleCloseContainerRef:p,isOpen:y,isAnimating:f,handleOnClickToggle:R,shouldDisplayDefaultHeader:C,showHeader:I,onClose:v,isClosable:x,header:g,drawerLeftPosition:O,content:D})=>{const B={id:a,title:t,icon:o,iconAppearance:r,isCollapsible:s,iconToggleCloseContainerRef:p,isOpen:y,isAnimating:f,handleOnClickToggle:R,shouldDisplayDefaultHeader:!!C,showHeader:I,onClose:v,isClosable:x,header:g,drawerLeftPosition:O};return e?n.jsxs(n.Fragment,{children:[n.jsx(pe,{...B}),n.jsx(ge,{content:D,fixedHeader:e})]}):n.jsxs("div",{className:h["drawer-header-content"],children:[n.jsx(pe,{...B}),n.jsx(ge,{content:D})]})},ye=({fixedHeader:e,shouldDisplayDefaultFooter:a,primaryButtonLabel:t,secondaryButtonLabel:o,footer:r,onClickPrimaryButton:s,onClickSecondaryButton:p,showFooter:y})=>y?n.jsx("div",{className:h["drawer-footer"],"data-fixed-header":e,children:a?n.jsx(Rn,{primaryButton:n.jsx(w,{label:t,variant:"primary",onClick:s}),secondaryButton:o?n.jsx(w,{label:o,variant:"secondary",onClick:p}):void 0}):r&&n.jsx(n.Fragment,{children:r})}):null,b=({id:e,title:a,icon:t,iconAppearance:o,isOpen:r,onClose:s,onClickToggle:p,closeOnOverlayClick:y=!1,primaryButtonLabel:f,secondaryButtonLabel:R,isCollapsible:C=!1,content:I,header:v,footer:x,position:g="modal",width:O,children:D,fixedHeader:B,showHeader:ee=!0,showFooter:oe=!0,closeOnEscape:gn=!1,isClosable:hn=!0,ariaLabel:E,onClickPrimaryButton:yn,onClickSecondaryButton:wn,...se})=>{var me;const{shouldRender:T,isAnimating:d}=Dn(r,qn),S=m.useRef(null),[vn,ie]=m.useState(!1);m.useEffect(()=>{T||ie(!1)},[T]);const bn=N=>{S.current=N,ie(N!==null)},ne=m.useRef(null),te=m.useRef(null),le=((me=S.current)==null?void 0:me.clientWidth)||0;Tn(gn?s:()=>{}),En(S.current,T&&g==="modal"),kn(g==="modal"&&r);const fn=An(v,a),Cn=_n(x,f),P=jn({hasCustomHeader:!!v,hasTitle:!!a,hasCustomFooter:!!x,hasPrimaryButtonLabel:!!f,position:g,hasMainContent:!!D,showHeader:ee,showFooter:oe,hasAriaLabel:!!(E!=null&&E.trim())});if(P)return P===Z?Bn("Drawer",P):console.warn(P),null;const ce=(N=0)=>d?`translateX(-${le+N}px)`:"none",ae=()=>{r&&ne.current&&ne.current.focus(),!r&&te.current&&te.current.focus(),p()},q=Ln({id:e,showHeader:ee,hasCustomHeader:!!v,hasTitle:!!a,ariaLabel:E}),ue={fixedHeader:B,id:e,title:a,icon:t,iconAppearance:o,isCollapsible:C,iconToggleCloseContainerRef:te,isOpen:r,isAnimating:d,handleOnClickToggle:ae,shouldDisplayDefaultHeader:!!fn,showHeader:ee,onClose:s,isClosable:hn,header:v,drawerLeftPosition:le,content:I},de={fixedHeader:B,shouldDisplayDefaultFooter:!!Cn,primaryButtonLabel:f,secondaryButtonLabel:R,footer:x,onClickPrimaryButton:yn,onClickSecondaryButton:wn,showFooter:oe};return n.jsx(n.Fragment,{children:g==="responsive"?n.jsx(n.Fragment,{children:n.jsxs("div",{className:h["drawer-responsive-container"],children:[C&&n.jsx(J,{className:h["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:d?0:1,transform:ce(Nn)},name:"right-panel-open",size:"l",variant:"primary",onClick:ae,"aria-label":`Close drawer ${e}`}),n.jsx(Sn,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:d?"visible":"hidden",transform:ce()}}),n.jsx("div",{className:h["drawer-children"],"data-open":d,style:{marginRight:d?O:0},children:D}),n.jsxs("div",{className:h.drawer,ref:S,"data-open":d,role:"region","aria-labelledby":q.ariaLabelledby,"aria-label":q.ariaLabel,"data-position":g,"data-fixed-header":B,style:{width:O,transform:d?"none":`translateX(${O||"100%"})`,visibility:d?"visible":"hidden"},...se,children:[n.jsx(he,{...ue}),n.jsx(ye,{...de})]})]})}):n.jsxs(n.Fragment,{children:[C&&n.jsx(J,{ref:ne,className:h["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:d?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:ae,"aria-label":`Close drawer ${e}`}),T&&n.jsxs(Pn,{hideBackgroundFromAssistiveTechnology:!0,backgroundHideReady:vn,children:[n.jsx(On,{isAnimating:d,onClick:y?s:void 0}),n.jsxs("div",{ref:bn,className:h.drawer,"data-open":d,"data-fixed-header":B,"data-position":g,role:"dialog","aria-modal":"true","aria-labelledby":q.ariaLabelledby,"aria-label":q.ariaLabel,style:{width:O},...se,children:[n.jsx(he,{...ue}),n.jsx(ye,{...de})]})]})]})})};b.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"modal"',computed:!1},required:!1},showHeader:{defaultValue:{value:"true",computed:!1},required:!1},showFooter:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const xt={title:"Composants/Drawer/Drawer",component:b,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},pn=e=>{i(e).toBeTruthy(),i(e).toHaveAttribute("aria-hidden","true")},re=e=>{i(e).toBeTruthy(),pn(e.querySelector("svg"))},Wn=e=>e.querySelector('[class*="base-header-text"] > svg'),Qn=`Manual accessibility check (NVDA / VoiceOver):

1. Open the modal drawer with **Open drawer**.
2. Use browse / virtual navigation (NVDA: browse mode; VoiceOver: VO + arrow keys in the web area)—**not Tab** (focus trap is expected with Tab).
3. Move through the page with arrow keys.

**Expected:** Background markers must **not** be announced or reachable: heading « Page d'accueil — contenu masqué visuellement », paragraph « Ce paragraphe ne doit pas être lu lorsque le drawer modal est ouvert. », button « Action page — ne pas atteindre en modal », link « Lien page arrière-plan — repère a11y ».

**If they are still read:** background content is still exposed to virtual browse while the modal drawer is open.`,$n={fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},c={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:X(),onClickSecondaryButton:X(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Body content."})},render:e=>{const[a,t]=m.useState(e.isOpen),o=()=>{t(s=>!s)},r=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:r})]})}},H={args:{...c.args,id:"modal-background-screen-reader-check",title:"Modal drawer",position:"modal"},render:e=>{const[a,t]=m.useState(!1),o=()=>{var r;(r=e.onClickPrimaryButton)==null||r.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsxs("main",{style:$n,"aria-label":"Page principale derrière l'overlay",children:[n.jsx("h1",{style:{fontSize:"20px",margin:"0 0 12px"},children:"Page d'accueil — contenu masqué visuellement"}),n.jsx("p",{style:{margin:"0 0 12px"},children:"Ce paragraphe ne doit pas être lu lorsque le drawer modal est ouvert."}),n.jsx("button",{type:"button",style:{margin:"0 12px 12px 0"},onClick:()=>console.log("background action"),children:"Action page — ne pas atteindre en modal"}),n.jsx("a",{href:"#background-page-marker",children:"Lien page arrière-plan — repère a11y"}),n.jsx("div",{style:{marginTop:"16px"},children:n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)})})]}),n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:()=>t(r=>!r),onClickPrimaryButton:o})]})},parameters:{docs:{description:{story:Qn}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"})),await k(()=>{i(l(document.body).getByRole("dialog",{name:"Modal drawer"})).toBeInTheDocument()});const t=document.getElementById("overlay-root"),o=Array.from(document.body.children).find(s=>s!==t&&s instanceof HTMLElement&&s.getAttribute("aria-hidden")==="true");i(o).toBeTruthy(),i(o).toHaveProperty("inert",!0);const r=l(document.body);i(r.queryByRole("heading",{name:/Page d'accueil/})).not.toBeInTheDocument(),i(r.queryByRole("button",{name:"Action page — ne pas atteindre en modal"})).not.toBeInTheDocument(),i(r.queryByRole("link",{name:/Lien page arrière-plan/})).not.toBeInTheDocument()}},j={tags:["!autodocs"],args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:X(),onClickSecondaryButton:X(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[a,t]=m.useState(e.isOpen),o=()=>{t(s=>!s)},r=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:r})]})},play:async({canvasElement:e,args:a})=>{const o=await l(e).getByRole("button",{name:"Open drawer"});await u.click(o);const r=l(document.body).getByRole("dialog");i(r).toBeInTheDocument(),await u.click(l(r).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(r).toBeInTheDocument(),await u.click(l(r).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},A={tags:["!autodocs"],args:{...c.args,isCollapsible:!0,id:"example-drawer"},render:c.render,play:async({canvasElement:e})=>{const a=l(e);await u.click(await a.getByRole("button",{name:"Open drawer"}));const t=await l(document.body).findByRole("dialog"),o=l(t);pn(Wn(t)),re(o.getByRole("button",{name:"Close modal example-drawer"})),re(o.getByRole("button",{name:"Close drawer example-drawer"}));const r=document.body.querySelector('[class*="drawer-toggle"]');re(r)}},_={args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=m.useState(e.isOpen),o=()=>{t(s=>!s)},r=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:r,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Drawer panel."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Main area next to the panel."})]})})})}},F={tags:["!autodocs"],args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=m.useState(e.isOpen),o=()=>{t(s=>!s)},r=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:r,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:a})=>{const t=l(e),o=await t.getByRole("button",{name:"Open drawer"});await u.click(o);const r=await k(()=>{const s=t.getByRole("region");return i(s).toHaveAttribute("data-position","responsive"),i(s).toHaveAttribute("data-open","true"),i(l(s).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),s});await u.click(l(r).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(r).toHaveAttribute("data-open","true"),await u.click(l(r).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{i(r).toHaveAttribute("data-open","false")})}},L={args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}}},V={tags:["autodocs"],args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=l(document.body).getByRole("dialog");i(t).toBeInTheDocument(),await u.keyboard(xn),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},U={tags:["skip-ci"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}}},z={tags:["skip-ci","!autodocs"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const o=l(document.body).getByRole("dialog").previousElementSibling;i(o).not.toBeNull(),await u.click(o),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},W={args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}}},Q={tags:["!autodocs"],args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=l(document.body).getByRole("dialog");i(t).toBeInTheDocument(),i(l(t).queryByRole("button",{name:"Confirm"})).not.toBeInTheDocument(),i(l(t).queryByRole("button",{name:"Cancel"})).not.toBeInTheDocument()}},$={args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}}},G={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}},play:async({canvasElement:e,args:a})=>{const t=l(e);await u.click(t.getByRole("button",{name:"Open drawer"}));const o=l(document.body).getByRole("dialog",{name:"Example drawer"});i(o).toBeInTheDocument(),i(l(o).queryByRole("heading")).not.toBeInTheDocument(),i(l(o).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await u.click(l(o).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(o).toBeInTheDocument(),await u.click(l(o).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},Y={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header-missing-aria",title:void 0,icon:void 0,showHeader:!1},render:c.render,beforeEach:mn(`[Drawer] ${Z}`),play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"})),i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()}},K={args:{...c.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},beforeEach:mn(`[Drawer] ${Z}`),render:e=>{const[a,t]=m.useState(e.isOpen),o=()=>{t(r=>!r)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(b,{...e,isOpen:a,ariaLabel:"Custom header drawer",onClose:()=>t(!1),onClickToggle:o,header:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[n.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial"},children:"Custom Header"}),n.jsx(J,{name:"close",size:"m",onClick:()=>t(!1),"aria-label":"Close drawer"})]}),footer:n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:n.jsx(w,{label:"Custom Action",variant:"primary"})})})]})}};var we,ve,be;c.parameters={...c.parameters,docs:{...(we=c.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(be=(ve=c.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,Ce,xe;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(Ce=H.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Be,ke,Oe;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Oe=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var Re,Ie,De;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(De=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Ee,Te,Se;_.parameters={..._.parameters,docs:{...(Ee=_.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Se=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var Pe,qe,Ne;F.parameters={...F.parameters,docs:{...(Pe=F.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ne=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Me,He,je;L.parameters={...L.parameters,docs:{...(Me=L.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(je=(He=L.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};var Ae,_e,Fe;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Fe=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var Le,Ve,Ue;U.parameters={...U.parameters,docs:{...(Le=U.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ue=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var ze,We,Qe;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Qe=(We=z.parameters)==null?void 0:We.docs)==null?void 0:Qe.source}}};var $e,Ge,Ye;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ye=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var Ke,Xe,Je;Q.parameters={...Q.parameters,docs:{...(Ke=Q.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Je=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var Ze,en,nn;$.parameters={...$.parameters,docs:{...(Ze=$.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(nn=(en=$.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,an,rn;G.parameters={...G.parameters,docs:{...(tn=G.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(rn=(an=G.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var on,sn,ln;Y.parameters={...Y.parameters,docs:{...(on=Y.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(ln=(sn=Y.parameters)==null?void 0:sn.docs)==null?void 0:ln.source}}};var cn,un,dn;K.parameters={...K.parameters,docs:{...(cn=K.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(dn=(un=K.parameters)==null?void 0:un.docs)==null?void 0:dn.source}}};const Bt=["Default","ModalBackgroundScreenReaderManualCheck","ModalInteractive","ModalDecorativeIconsInteractive","Responsive","ResponsiveInteractive","CloseOnEscape","CloseOnEscapeInteractive","CloseOnOverlayClick","CloseOnOverlayClickInteractive","WithoutFooter","WithoutFooterInteractive","WithoutHeader","WithoutHeaderInteractive","WithoutHeaderMissingAccessibleName","CustomHeaderFooter"];export{L as CloseOnEscape,V as CloseOnEscapeInteractive,U as CloseOnOverlayClick,z as CloseOnOverlayClickInteractive,K as CustomHeaderFooter,c as Default,H as ModalBackgroundScreenReaderManualCheck,A as ModalDecorativeIconsInteractive,j as ModalInteractive,_ as Responsive,F as ResponsiveInteractive,W as WithoutFooter,Q as WithoutFooterInteractive,$ as WithoutHeader,G as WithoutHeaderInteractive,Y as WithoutHeaderMissingAccessibleName,Bt as __namedExportsOrder,xt as default};
