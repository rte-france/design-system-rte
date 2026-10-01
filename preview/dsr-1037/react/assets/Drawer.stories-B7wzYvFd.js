import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./timepicker.constants-CynrC_9x.js";import{d as xn}from"./keyboard-test.constants-By8W48aj.js";import{f as K,w as l,u,e as i,a as k}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{a as un}from"./testing.utils-r13wRTL2.js";import{B as w}from"./Button-kS01vuC-.js";import{I as X}from"./IconButton-CqYdVntE.js";import{a as Bn}from"./log-handlers-C7e73M8l.js";import{u as kn,B as Rn,b as On,a as In}from"./useFreezeNavigation-DiHi6ZNe.js";import{u as Dn}from"./useAnimatedMount-_zPBpYOt.js";import{u as En}from"./useFocusTrap-BZu4_Auv.js";import{u as Tn}from"./useKeydownEscape-mLuzHv9M.js";import{D as Sn}from"./Divider-BVZUrQ0d.js";import{O as Pn}from"./Overlay-BbrPNczc.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./Icon-VewZnR13.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const qn=240,Nn=4,dn="Drawer requires ariaLabel when the default header is not used.";function Mn(e,a){return!e&&!!a}function jn(e,a){return!e&&!!a}const Hn="Drawer requires ariaLabel when the default header is not used.",_n="Drawer: #drawerContent template is required.",N={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},An=[{condition:e=>!e.hasDrawerContent,issue:_n},{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:N.MISSING_HEADER_OR_TITLE},{condition:e=>!mn(e)&&!e.hasAriaLabel,issue:Hn},{condition:e=>!!e.showFooter&&!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:N.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:N.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:N.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function mn(e){return!!e.showHeader&&!e.hasCustomHeader&&e.hasTitle}function Fn(e){var p;const{id:a,showHeader:t,hasCustomHeader:r,hasTitle:o}=e;if(mn({showHeader:!!t,hasCustomHeader:r,hasTitle:o}))return{ariaLabelledby:`${a}-drawer-title`};const s=(p=e.ariaLabel)==null?void 0:p.trim();return s?{ariaLabel:s}:{}}function Ln(e){var a;return(a=An.find(({condition:t})=>t(e)))==null?void 0:a.issue}function Vn(e){Bn("Drawer",Ln(e))}const Un=(e,a,t=0)=>e?`translateX(-${a+t}px)`:"none",zn="_drawer_1ybli_1",h={"drawer-responsive-container":"_drawer-responsive-container_1ybli_1","drawer-children":"_drawer-children_1ybli_7",drawer:zn,"drawer-content":"_drawer-content_1ybli_75","drawer-toggle":"_drawer-toggle_1ybli_83","drawer-footer":"_drawer-footer_1ybli_97","drawer-header-content":"_drawer-header-content_1ybli_104"},Wn=4,de=({isCollapsible:e,iconToggleCloseContainerRef:a,isOpen:t,isAnimating:r,handleOnClickToggle:o,shouldDisplayDefaultHeader:s,showHeader:p,id:y,title:f,icon:I,iconAppearance:C,onClose:R,isClosable:v,header:x,drawerLeftPosition:g})=>n.jsxs(n.Fragment,{children:[e&&n.jsx(X,{ref:a,className:h["drawer-toggle"],style:{transition:"none",transform:Un(r,g,Wn)},name:t?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:o,"aria-label":`Close drawer ${y}`}),p&&(s?n.jsx(In,{id:y,title:f,icon:I,iconAppearance:C,onClose:R,isClosable:v,titleElementId:`${y}-drawer-title`}):n.jsx(n.Fragment,{children:x}))]}),me=({content:e,fixedHeader:a})=>n.jsx("div",{className:h["drawer-content"],"data-fixed-header":a,tabIndex:-1,children:e}),pe=({fixedHeader:e,id:a,title:t,icon:r,iconAppearance:o,isCollapsible:s,iconToggleCloseContainerRef:p,isOpen:y,isAnimating:f,handleOnClickToggle:I,shouldDisplayDefaultHeader:C,showHeader:R,onClose:v,isClosable:x,header:g,drawerLeftPosition:O,content:D})=>{const B={id:a,title:t,icon:r,iconAppearance:o,isCollapsible:s,iconToggleCloseContainerRef:p,isOpen:y,isAnimating:f,handleOnClickToggle:I,shouldDisplayDefaultHeader:!!C,showHeader:R,onClose:v,isClosable:x,header:g,drawerLeftPosition:O};return e?n.jsxs(n.Fragment,{children:[n.jsx(de,{...B}),n.jsx(me,{content:D,fixedHeader:e})]}):n.jsxs("div",{className:h["drawer-header-content"],children:[n.jsx(de,{...B}),n.jsx(me,{content:D})]})},ge=({fixedHeader:e,shouldDisplayDefaultFooter:a,primaryButtonLabel:t,secondaryButtonLabel:r,footer:o,onClickPrimaryButton:s,onClickSecondaryButton:p,showFooter:y})=>y?n.jsx("div",{className:h["drawer-footer"],"data-fixed-header":e,children:a?n.jsx(On,{primaryButton:n.jsx(w,{label:t,variant:"primary",onClick:s}),secondaryButton:r?n.jsx(w,{label:r,variant:"secondary",onClick:p}):void 0}):o&&n.jsx(n.Fragment,{children:o})}):null,b=({id:e,title:a,icon:t,iconAppearance:r,isOpen:o,onClose:s,onClickToggle:p,closeOnOverlayClick:y=!1,primaryButtonLabel:f,secondaryButtonLabel:I,isCollapsible:C=!1,content:R,header:v,footer:x,position:g="modal",width:O,children:D,fixedHeader:B,showHeader:J=!0,showFooter:ae=!0,closeOnEscape:gn=!1,isClosable:hn=!0,ariaLabel:E,onClickPrimaryButton:yn,onClickSecondaryButton:wn,...re})=>{var ue;const{shouldRender:T,isAnimating:d}=Dn(o,qn),S=m.useRef(null),[vn,oe]=m.useState(!1);m.useEffect(()=>{T||oe(!1)},[T]);const bn=m.useRef(q=>{S.current=q,oe(q!==null)}).current,Z=m.useRef(null),ee=m.useRef(null),se=((ue=S.current)==null?void 0:ue.clientWidth)||0;Tn(gn?s:()=>{}),En(S.current,T&&g==="modal"),kn(g==="modal"&&o);const fn=Mn(v,a),Cn=jn(x,f);Vn({hasCustomHeader:!!v,hasTitle:!!a,hasCustomFooter:!!x,hasPrimaryButtonLabel:!!f,position:g,hasMainContent:!!D,hasDrawerContent:R!=null,showHeader:J,showFooter:ae,hasAriaLabel:!!(E!=null&&E.trim())});const ie=(q=0)=>d?`translateX(-${se+q}px)`:"none",ne=()=>{o&&Z.current&&Z.current.focus(),!o&&ee.current&&ee.current.focus(),p()},P=Fn({id:e,showHeader:J,hasCustomHeader:!!v,hasTitle:!!a,ariaLabel:E}),le={fixedHeader:B,id:e,title:a,icon:t,iconAppearance:r,isCollapsible:C,iconToggleCloseContainerRef:ee,isOpen:o,isAnimating:d,handleOnClickToggle:ne,shouldDisplayDefaultHeader:!!fn,showHeader:J,onClose:s,isClosable:hn,header:v,drawerLeftPosition:se,content:R},ce={fixedHeader:B,shouldDisplayDefaultFooter:!!Cn,primaryButtonLabel:f,secondaryButtonLabel:I,footer:x,onClickPrimaryButton:yn,onClickSecondaryButton:wn,showFooter:ae};return n.jsx(n.Fragment,{children:g==="responsive"?n.jsx(n.Fragment,{children:n.jsxs("div",{className:h["drawer-responsive-container"],children:[C&&n.jsx(X,{className:h["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:d?0:1,transform:ie(Nn)},name:"right-panel-open",size:"l",variant:"primary",onClick:ne,"aria-label":`Close drawer ${e}`}),n.jsx(Sn,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:d?"visible":"hidden",transform:ie()}}),n.jsx("div",{className:h["drawer-children"],"data-open":d,style:{marginRight:d?O:0},children:D}),n.jsxs("div",{className:h.drawer,ref:S,"data-open":d,role:"region","aria-labelledby":P.ariaLabelledby,"aria-label":P.ariaLabel,"data-position":g,"data-fixed-header":B,style:{width:O,transform:d?"none":`translateX(${O||"100%"})`,visibility:d?"visible":"hidden"},...re,children:[n.jsx(pe,{...le}),n.jsx(ge,{...ce})]})]})}):n.jsxs(n.Fragment,{children:[C&&n.jsx(X,{ref:Z,className:h["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:d?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:ne,"aria-label":`Close drawer ${e}`}),T&&n.jsxs(Pn,{hasBackdrop:vn,children:[n.jsx(Rn,{isAnimating:d,onClick:y?s:void 0}),n.jsxs("div",{ref:bn,className:h.drawer,"data-open":d,"data-fixed-header":B,"data-position":g,role:"dialog","aria-modal":"true","aria-labelledby":P.ariaLabelledby,"aria-label":P.ariaLabel,style:{width:O},...re,children:[n.jsx(pe,{...le}),n.jsx(ge,{...ce})]})]})]})})};b.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"modal"',computed:!1},required:!1},showHeader:{defaultValue:{value:"true",computed:!1},required:!1},showFooter:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const xt={title:"Composants/Drawer/Drawer",component:b,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},pn=e=>{i(e).toBeTruthy(),i(e).toHaveAttribute("aria-hidden","true")},te=e=>{i(e).toBeTruthy(),pn(e.querySelector("svg"))},Qn=e=>e.querySelector('[class*="base-header-text"] > svg'),Gn={fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},c={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:K(),onClickSecondaryButton:K(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Body content."})},render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(s=>!s)},o=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:o})]})}},M={tags:["!autodocs"],args:{...c.args,id:"modal-background-screen-reader-check",title:"Modal drawer",position:"modal"},render:e=>{const[a,t]=m.useState(!1),r=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsxs("main",{style:Gn,"aria-label":"Page principale derrière l'overlay",children:[n.jsx("h1",{style:{fontSize:"20px",margin:"0 0 12px"},children:"Page d'accueil — contenu masqué visuellement"}),n.jsx("p",{style:{margin:"0 0 12px"},children:"Ce paragraphe ne doit pas être lu lorsque le drawer modal est ouvert."}),n.jsx("button",{type:"button",style:{margin:"0 12px 12px 0"},onClick:()=>console.log("background action"),children:"Action page — ne pas atteindre en modal"}),n.jsx("a",{href:"#background-page-marker",children:"Lien page arrière-plan — repère a11y"}),n.jsx("div",{style:{marginTop:"16px"},children:n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)})})]}),n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:()=>t(o=>!o),onClickPrimaryButton:r})]})},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=e.querySelector("main");i(t).toBeTruthy(),await k(()=>{i(l(document.body).getByRole("dialog",{name:"Modal drawer"})).toBeInTheDocument(),i(t==null?void 0:t.closest('[aria-hidden="true"]')).toBeTruthy(),i(t==null?void 0:t.closest("[inert]")).toBeTruthy();const r=l(document.body);i(r.queryByRole("heading",{name:/Page d'accueil/})).not.toBeInTheDocument(),i(r.queryByRole("button",{name:"Action page — ne pas atteindre en modal"})).not.toBeInTheDocument(),i(r.queryByRole("link",{name:/Lien page arrière-plan/})).not.toBeInTheDocument()})}},j={tags:["!autodocs"],args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:K(),onClickSecondaryButton:K(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(s=>!s)},o=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:o})]})},play:async({canvasElement:e,args:a})=>{const r=await l(e).getByRole("button",{name:"Open drawer"});await u.click(r);const o=l(document.body).getByRole("dialog");i(o).toBeInTheDocument(),await u.click(l(o).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(o).toBeInTheDocument(),await u.click(l(o).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},H={tags:["!autodocs"],args:{...c.args,isCollapsible:!0,id:"example-drawer"},render:c.render,play:async({canvasElement:e})=>{const a=l(e);await u.click(await a.getByRole("button",{name:"Open drawer"}));const t=await l(document.body).findByRole("dialog"),r=l(t);pn(Qn(t)),te(r.getByRole("button",{name:"Close modal example-drawer"})),te(r.getByRole("button",{name:"Close drawer example-drawer"}));const o=document.body.querySelector('[class*="drawer-toggle"]');te(o)}},_={args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(s=>!s)},o=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:o,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Drawer panel."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Main area next to the panel."})]})})})}},A={tags:["!autodocs"],args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(s=>!s)},o=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(b,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:o,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:a})=>{const t=l(e),r=await t.getByRole("button",{name:"Open drawer"});await u.click(r);const o=await k(()=>{const s=t.getByRole("region");return i(s).toHaveAttribute("data-position","responsive"),i(s).toHaveAttribute("data-open","true"),i(l(s).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),s});await u.click(l(o).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(o).toHaveAttribute("data-open","true"),await u.click(l(o).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{i(o).toHaveAttribute("data-open","false")})}},F={args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}}},L={tags:["autodocs"],args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=l(document.body).getByRole("dialog");i(t).toBeInTheDocument(),await u.keyboard(xn),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},V={tags:["skip-ci"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}}},U={tags:["skip-ci","!autodocs"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const r=l(document.body).getByRole("dialog").previousElementSibling;i(r).not.toBeNull(),await u.click(r),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},z={args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}}},W={tags:["!autodocs"],args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}},play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=l(document.body).getByRole("dialog");i(t).toBeInTheDocument(),i(l(t).queryByRole("button",{name:"Confirm"})).not.toBeInTheDocument(),i(l(t).queryByRole("button",{name:"Cancel"})).not.toBeInTheDocument()}},Q={args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}}},G={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}},play:async({canvasElement:e,args:a})=>{const t=l(e);await u.click(t.getByRole("button",{name:"Open drawer"}));const r=l(document.body).getByRole("dialog",{name:"Example drawer"});i(r).toBeInTheDocument(),i(l(r).queryByRole("heading")).not.toBeInTheDocument(),i(l(r).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await u.click(l(r).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(r).toBeInTheDocument(),await u.click(l(r).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},$={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header-missing-aria",title:void 0,icon:void 0,showHeader:!1},render:c.render,beforeEach:un(`[Drawer] ${dn}`),play:async({canvasElement:e})=>{const a=l(e);await u.click(a.getByRole("button",{name:"Open drawer"})),i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()}},Y={args:{...c.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},beforeEach:un(`[Drawer] ${dn}`),render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(o=>!o)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(b,{...e,isOpen:a,ariaLabel:"Custom header drawer",onClose:()=>t(!1),onClickToggle:r,header:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[n.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial"},children:"Custom Header"}),n.jsx(X,{name:"close",size:"m",onClick:()=>t(!1),"aria-label":"Close drawer"})]}),footer:n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:n.jsx(w,{label:"Custom Action",variant:"primary"})})})]})}};var he,ye,we;c.parameters={...c.parameters,docs:{...(he=c.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(ye=c.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ve,be,fe;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const pageMain = canvasElement.querySelector("main");
    expect(pageMain).toBeTruthy();
    await waitFor(() => {
      expect(within(document.body).getByRole("dialog", {
        name: "Modal drawer"
      })).toBeInTheDocument();
      expect(pageMain?.closest('[aria-hidden="true"]')).toBeTruthy();
      expect(pageMain?.closest("[inert]")).toBeTruthy();
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
    });
  }
}`,...(fe=(be=M.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ce,xe,Be;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Be=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var ke,Re,Oe;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Oe=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Oe.source}}};var Ie,De,Ee;_.parameters={..._.parameters,docs:{...(Ie=_.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ee=(De=_.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Te,Se,Pe;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Pe=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var qe,Ne,Me;F.parameters={...F.parameters,docs:{...(qe=F.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Me=(Ne=F.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var je,He,_e;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(_e=(He=L.parameters)==null?void 0:He.docs)==null?void 0:_e.source}}};var Ae,Fe,Le;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Le=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var Ve,Ue,ze;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(ze=(Ue=U.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var We,Qe,Ge;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ge=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Ge.source}}};var $e,Ye,Ke;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ke=(Ye=W.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var Xe,Je,Ze;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Je=Q.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var en,nn,tn;G.parameters={...G.parameters,docs:{...(en=G.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(tn=(nn=G.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var an,rn,on;$.parameters={...$.parameters,docs:{...(an=$.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(on=(rn=$.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var sn,ln,cn;Y.parameters={...Y.parameters,docs:{...(sn=Y.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(cn=(ln=Y.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};const Bt=["Default","ModalBackgroundScreenReaderManualCheck","ModalInteractive","ModalDecorativeIconsInteractive","Responsive","ResponsiveInteractive","CloseOnEscape","CloseOnEscapeInteractive","CloseOnOverlayClick","CloseOnOverlayClickInteractive","WithoutFooter","WithoutFooterInteractive","WithoutHeader","WithoutHeaderInteractive","WithoutHeaderMissingAccessibleName","CustomHeaderFooter"];export{F as CloseOnEscape,L as CloseOnEscapeInteractive,V as CloseOnOverlayClick,U as CloseOnOverlayClickInteractive,Y as CustomHeaderFooter,c as Default,M as ModalBackgroundScreenReaderManualCheck,H as ModalDecorativeIconsInteractive,j as ModalInteractive,_ as Responsive,A as ResponsiveInteractive,z as WithoutFooter,W as WithoutFooterInteractive,Q as WithoutHeader,G as WithoutHeaderInteractive,$ as WithoutHeaderMissingAccessibleName,Bt as __namedExportsOrder,xt as default};
