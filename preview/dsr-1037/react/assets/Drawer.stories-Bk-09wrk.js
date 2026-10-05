import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./timepicker.constants-CynrC_9x.js";import{f as On}from"./log-handlers-BGrW2Sgz.js";import{d as An}from"./keyboard-test.constants-By8W48aj.js";import{f as Z,w as l,u as d,e as i,a as O}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{a as jn,e as Ln}from"./testing.utils-DmLcTX3r.js";import{B as w}from"./Button-kS01vuC-.js";import{I as ee}from"./IconButton-CqYdVntE.js";import{l as Fn}from"./log-handlers-Yqqou6H5.js";import{u as Un,B as Vn,b as Wn,a as zn}from"./useFreezeNavigation-DiHi6ZNe.js";import{u as Gn}from"./useAnimatedMount-_zPBpYOt.js";import{u as Qn}from"./useFocusTrap-BZu4_Auv.js";import{u as $n}from"./useKeydownEscape-mLuzHv9M.js";import{D as Yn}from"./Divider-BVZUrQ0d.js";import{O as Kn}from"./Overlay-BbrPNczc.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./Icon-VewZnR13.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Xn=240,Jn=4,kn="ariaLabel is required when the default header is not used.",Zn="Drawer content is required.",P={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},et=[{condition:e=>e.hasDrawerContent===!1,issue:Zn},{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:P.MISSING_HEADER_OR_TITLE},{condition:e=>!nt(e)&&!e.hasAriaLabel,issue:kn},{condition:e=>!!e.showFooter&&!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:P.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:P.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:P.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function nt(e){const{showHeader:a,hasCustomHeader:t,hasTitle:r}=e;return!!a&&!t&&r}function tt(e){return e.startsWith("Drawer: ")?e.slice(8):e}function at(e){var t;const a=(t=et.find(({condition:r})=>r(e)))==null?void 0:t.issue;return a?tt(a):void 0}function rt(e,a){return!e&&!!a}function ot(e,a){return!e&&!!a}const st="ariaLabel is required when the default header is not used.",it="Drawer content is required.",M={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},lt=[{condition:e=>e.hasDrawerContent===!1,issue:it},{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:M.MISSING_HEADER_OR_TITLE},{condition:e=>!Rn(e)&&!e.hasAriaLabel,issue:st},{condition:e=>!!e.showFooter&&!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:M.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:M.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:M.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function Rn(e){const{showHeader:a,hasCustomHeader:t,hasTitle:r}=e;return!!a&&!t&&r}function ct(e){var u;const{id:a,showHeader:t,hasCustomHeader:r,hasTitle:o}=e;if(Rn({showHeader:!!t,hasCustomHeader:r,hasTitle:o}))return{ariaLabelledby:`${a}-drawer-title`};const s=(u=e.ariaLabel)==null?void 0:u.trim();return s?{ariaLabel:s}:{}}function ut(e){return e.startsWith("Drawer: ")?e.slice(8):e}function dt(e){var t;const a=(t=lt.find(({condition:r})=>r(e)))==null?void 0:t.issue;return a?ut(a):void 0}function mt(e){const a=dt(e);return a?(Fn("Drawer",a),!1):!0}const pt=(e,a,t=0)=>e?`translateX(-${a+t}px)`:"none",gt="_drawer_1ybli_1",h={"drawer-responsive-container":"_drawer-responsive-container_1ybli_1","drawer-children":"_drawer-children_1ybli_7",drawer:gt,"drawer-content":"_drawer-content_1ybli_75","drawer-toggle":"_drawer-toggle_1ybli_83","drawer-footer":"_drawer-footer_1ybli_97","drawer-header-content":"_drawer-header-content_1ybli_104"},ht=4,we=({isCollapsible:e,iconToggleCloseContainerRef:a,isOpen:t,isAnimating:r,handleOnClickToggle:o,shouldDisplayDefaultHeader:s,showHeader:u,id:g,title:b,icon:y,iconAppearance:C,onClose:D,isClosable:x,header:k,drawerLeftPosition:v})=>n.jsxs(n.Fragment,{children:[e&&n.jsx(ee,{ref:a,className:h["drawer-toggle"],style:{transition:"none",transform:pt(r,v,ht)},name:t?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:o,"aria-label":`Close drawer ${g}`}),u&&(s?n.jsx(zn,{id:g,title:b,icon:y,iconAppearance:C,onClose:D,isClosable:x,titleElementId:`${g}-drawer-title`}):n.jsx(n.Fragment,{children:k}))]}),ye=({content:e,fixedHeader:a})=>n.jsx("div",{className:h["drawer-content"],"data-fixed-header":a,tabIndex:-1,children:e}),ve=({fixedHeader:e,id:a,title:t,icon:r,iconAppearance:o,isCollapsible:s,iconToggleCloseContainerRef:u,isOpen:g,isAnimating:b,handleOnClickToggle:y,shouldDisplayDefaultHeader:C,showHeader:D,onClose:x,isClosable:k,header:v,drawerLeftPosition:R,content:I})=>{const B={id:a,title:t,icon:r,iconAppearance:o,isCollapsible:s,iconToggleCloseContainerRef:u,isOpen:g,isAnimating:b,handleOnClickToggle:y,shouldDisplayDefaultHeader:!!C,showHeader:D,onClose:x,isClosable:k,header:v,drawerLeftPosition:R};return e?n.jsxs(n.Fragment,{children:[n.jsx(we,{...B}),n.jsx(ye,{content:I,fixedHeader:e})]}):n.jsxs("div",{className:h["drawer-header-content"],children:[n.jsx(we,{...B}),n.jsx(ye,{content:I})]})},fe=({fixedHeader:e,shouldDisplayDefaultFooter:a,primaryButtonLabel:t,secondaryButtonLabel:r,footer:o,onClickPrimaryButton:s,onClickSecondaryButton:u,showFooter:g})=>g?n.jsx("div",{className:h["drawer-footer"],"data-fixed-header":e,children:a?n.jsx(Wn,{primaryButton:n.jsx(w,{label:t,variant:"primary",onClick:s}),secondaryButton:r?n.jsx(w,{label:r,variant:"secondary",onClick:u}):void 0}):o&&n.jsx(n.Fragment,{children:o})}):null,wt=({header:e,title:a,footer:t,primaryButtonLabel:r,position:o="modal",children:s,content:u,showHeader:g=!0,showFooter:b=!0,ariaLabel:y})=>({hasCustomHeader:!!e,hasTitle:!!a,hasCustomFooter:!!t,hasPrimaryButtonLabel:!!r,position:o,hasMainContent:!!s,hasDrawerContent:u!=null,showHeader:g,showFooter:b,hasAriaLabel:!!(y!=null&&y.trim())}),yt=({id:e,title:a,icon:t,iconAppearance:r,isOpen:o,onClose:s,onClickToggle:u,closeOnOverlayClick:g=!1,primaryButtonLabel:b,secondaryButtonLabel:y,isCollapsible:C=!1,content:D,header:x,footer:k,position:v="modal",width:R,children:I,fixedHeader:B,showHeader:le=!0,showFooter:In=!0,closeOnEscape:En=!1,isClosable:Tn=!0,ariaLabel:Sn,onClickPrimaryButton:Nn,onClickSecondaryButton:Pn,...ce})=>{var he;const{shouldRender:E,isAnimating:p}=Gn(o,Xn),T=m.useRef(null),[Mn,ue]=m.useState(!1);m.useEffect(()=>{E||ue(!1)},[E]);const Hn=m.useRef(N=>{T.current=N,ue(N!==null)}).current,ae=m.useRef(null),re=m.useRef(null),de=((he=T.current)==null?void 0:he.clientWidth)||0;$n(En?s:()=>{}),Qn(T.current,E&&v==="modal"),Un(v==="modal"&&o);const _n=rt(x,a),qn=ot(k,b),me=(N=0)=>p?`translateX(-${de+N}px)`:"none",oe=()=>{o&&ae.current&&ae.current.focus(),!o&&re.current&&re.current.focus(),u()},S=ct({id:e,showHeader:le,hasCustomHeader:!!x,hasTitle:!!a,ariaLabel:Sn}),pe={fixedHeader:B,id:e,title:a,icon:t,iconAppearance:r,isCollapsible:C,iconToggleCloseContainerRef:re,isOpen:o,isAnimating:p,handleOnClickToggle:oe,shouldDisplayDefaultHeader:!!_n,showHeader:le,onClose:s,isClosable:Tn,header:x,drawerLeftPosition:de,content:D},ge={fixedHeader:B,shouldDisplayDefaultFooter:!!qn,primaryButtonLabel:b,secondaryButtonLabel:y,footer:k,onClickPrimaryButton:Nn,onClickSecondaryButton:Pn,showFooter:In};return n.jsx(n.Fragment,{children:v==="responsive"?n.jsx(n.Fragment,{children:n.jsxs("div",{className:h["drawer-responsive-container"],children:[C&&n.jsx(ee,{className:h["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:p?0:1,transform:me(Jn)},name:"right-panel-open",size:"l",variant:"primary",onClick:oe,"aria-label":`Close drawer ${e}`}),n.jsx(Yn,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:p?"visible":"hidden",transform:me()}}),n.jsx("div",{className:h["drawer-children"],"data-open":p,style:{marginRight:p?R:0},children:I}),n.jsxs("div",{className:h.drawer,ref:T,"data-open":p,role:"region","aria-labelledby":S.ariaLabelledby,"aria-label":S.ariaLabel,"data-position":v,"data-fixed-header":B,style:{width:R,transform:p?"none":`translateX(${R||"100%"})`,visibility:p?"visible":"hidden"},...ce,children:[n.jsx(ve,{...pe}),n.jsx(fe,{...ge})]})]})}):n.jsxs(n.Fragment,{children:[C&&n.jsx(ee,{ref:ae,className:h["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:p?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:oe,"aria-label":`Close drawer ${e}`}),E&&n.jsxs(Kn,{hasBackdrop:Mn,children:[n.jsx(Vn,{isAnimating:p,onClick:g?s:void 0}),n.jsxs("div",{ref:Hn,className:h.drawer,"data-open":p,"data-fixed-header":B,"data-position":v,role:"dialog","aria-modal":"true","aria-labelledby":S.ariaLabelledby,"aria-label":S.ariaLabel,style:{width:R},...ce,children:[n.jsx(ve,{...pe}),n.jsx(fe,{...ge})]})]})]})})},f=e=>e.isOpen&&!mt(wt(e))?null:n.jsx(yt,{...e});f.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""}},composes:["coreDrawerProps","Omit"]};const na={title:"Composants/Drawer/Drawer",component:f,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},Dn=e=>{i(e).toBeTruthy(),i(e).toHaveAttribute("aria-hidden","true")},se=e=>{i(e).toBeTruthy(),Dn(e.querySelector("svg"))},vt=e=>e.querySelector('[class*="base-header-text"] > svg'),ft={fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},c={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:Z(),onClickSecondaryButton:Z(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Body content."})},render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(s=>!s)},o=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(f,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:o})]})}},H={tags:["!autodocs"],args:{...c.args,id:"modal-background-screen-reader-check",title:"Modal drawer",position:"modal"},render:e=>{const[a,t]=m.useState(!1),r=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsxs("main",{style:ft,"aria-label":"Page principale derrière l'overlay",children:[n.jsx("h1",{style:{fontSize:"20px",margin:"0 0 12px"},children:"Page d'accueil — contenu masqué visuellement"}),n.jsx("p",{style:{margin:"0 0 12px"},children:"Ce paragraphe ne doit pas être lu lorsque le drawer modal est ouvert."}),n.jsx("button",{type:"button",style:{margin:"0 12px 12px 0"},onClick:()=>console.log("background action"),children:"Action page — ne pas atteindre en modal"}),n.jsx("a",{href:"#background-page-marker",children:"Lien page arrière-plan — repère a11y"}),n.jsx("div",{style:{marginTop:"16px"},children:n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)})})]}),n.jsx(f,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:()=>t(o=>!o),onClickPrimaryButton:r})]})},play:async({canvasElement:e})=>{const a=l(e);await d.click(a.getByRole("button",{name:"Open drawer"}));const t=e.querySelector("main");i(t).toBeTruthy(),await O(()=>{i(l(document.body).getByRole("dialog",{name:"Modal drawer"})).toBeInTheDocument(),i(t==null?void 0:t.closest('[aria-hidden="true"]')).toBeTruthy(),i(t==null?void 0:t.closest("[inert]")).toBeTruthy();const r=l(document.body);i(r.queryByRole("heading",{name:/Page d'accueil/})).not.toBeInTheDocument(),i(r.queryByRole("button",{name:"Action page — ne pas atteindre en modal"})).not.toBeInTheDocument(),i(r.queryByRole("link",{name:/Lien page arrière-plan/})).not.toBeInTheDocument()})}},_={tags:["!autodocs"],args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:Z(),onClickSecondaryButton:Z(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(s=>!s)},o=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(f,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:o})]})},play:async({canvasElement:e,args:a})=>{const r=await l(e).getByRole("button",{name:"Open drawer"});await d.click(r);const o=l(document.body).getByRole("dialog");i(o).toBeInTheDocument(),await d.click(l(o).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(o).toBeInTheDocument(),await d.click(l(o).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await O(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},q={tags:["!autodocs"],args:{...c.args,isCollapsible:!0,id:"example-drawer"},render:c.render,play:async({canvasElement:e})=>{const a=l(e);await d.click(await a.getByRole("button",{name:"Open drawer"}));const t=await l(document.body).findByRole("dialog"),r=l(t);Dn(vt(t)),se(r.getByRole("button",{name:"Close modal example-drawer"})),se(r.getByRole("button",{name:"Close drawer example-drawer"}));const o=document.body.querySelector('[class*="drawer-toggle"]');se(o)}},A={args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(s=>!s)},o=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(f,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:o,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Drawer panel."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Main area next to the panel."})]})})})}},j={tags:["!autodocs"],args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(s=>!s)},o=()=>{var s;(s=e.onClickPrimaryButton)==null||s.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(f,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:o,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:a})=>{const t=l(e),r=await t.getByRole("button",{name:"Open drawer"});await d.click(r);const o=await O(()=>{const s=t.getByRole("region");return i(s).toHaveAttribute("data-position","responsive"),i(s).toHaveAttribute("data-open","true"),i(l(s).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),s});await d.click(l(o).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(o).toHaveAttribute("data-open","true"),await d.click(l(o).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await O(()=>{i(o).toHaveAttribute("data-open","false")})}},L={args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}}},F={tags:["autodocs"],args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const a=l(e);await d.click(a.getByRole("button",{name:"Open drawer"}));const t=l(document.body).getByRole("dialog");i(t).toBeInTheDocument(),await d.keyboard(An),await O(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},U={tags:["skip-ci"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}}},V={tags:["skip-ci","!autodocs"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const a=l(e);await d.click(a.getByRole("button",{name:"Open drawer"}));const r=l(document.body).getByRole("dialog").previousElementSibling;i(r).not.toBeNull(),await d.click(r),await O(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},W={args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}}},z={tags:["!autodocs"],args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}},play:async({canvasElement:e})=>{const a=l(e);await d.click(a.getByRole("button",{name:"Open drawer"}));const t=l(document.body).getByRole("dialog");i(t).toBeInTheDocument(),i(l(t).queryByRole("button",{name:"Confirm"})).not.toBeInTheDocument(),i(l(t).queryByRole("button",{name:"Cancel"})).not.toBeInTheDocument()}},G={args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}}},Q={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}},play:async({canvasElement:e,args:a})=>{const t=l(e);await d.click(t.getByRole("button",{name:"Open drawer"}));const r=l(document.body).getByRole("dialog",{name:"Example drawer"});i(r).toBeInTheDocument(),i(l(r).queryByRole("heading")).not.toBeInTheDocument(),i(l(r).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await d.click(l(r).getByRole("button",{name:"Cancel"})),i(a.onClickSecondaryButton).toHaveBeenCalled(),i(r).toBeInTheDocument(),await d.click(l(r).getByRole("button",{name:"Confirm"})),i(a.onClickPrimaryButton).toHaveBeenCalled(),await O(()=>{i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},ie=e=>{const a=at(e);return On("Drawer",a??"")},bt=e=>async({canvasElement:a,step:t})=>{const r=l(a);await t("Open drawer logs configuration error and does not show dialog",async()=>{await Ln(e,()=>d.click(r.getByRole("button",{name:"Open drawer"}))),i(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})},ne=e=>({beforeEach:jn(e),play:bt(e)}),Ct=(e,a)=>{const t={...e,...a};return Object.keys(a).forEach(r=>{a[r]===void 0&&delete t[r]}),t},te=e=>a=>{const[t,r]=m.useState(!1),o=Ct(a,e),s=()=>{r(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>r(!0)}),n.jsx(f,{...o,isOpen:t,onClose:s,onClickToggle:()=>r(u=>!u),onClickPrimaryButton:()=>{var u;(u=a.onClickPrimaryButton)==null||u.call(a),s()}})]})},xt=On("Drawer",kn),$={tags:["!autodocs"],args:{...c.args,isOpen:!1,id:"drawer-without-header-missing-aria",title:void 0,icon:void 0,showHeader:!1},render:te({title:void 0,icon:void 0,showHeader:!1}),...ne(xt)},Bt=ie({hasCustomHeader:!1,hasTitle:!1,hasCustomFooter:!1,hasPrimaryButtonLabel:!0,position:"modal",hasMainContent:!1,hasDrawerContent:!0,showHeader:!0,showFooter:!0,hasAriaLabel:!1}),Y={tags:["!autodocs"],args:{...c.args,isOpen:!1,id:"drawer-without-header-or-title",title:void 0,icon:void 0,showHeader:!0},render:te({title:void 0,icon:void 0,showHeader:!0}),...ne(Bt)},Ot=ie({hasCustomHeader:!1,hasTitle:!0,hasCustomFooter:!1,hasPrimaryButtonLabel:!1,position:"modal",hasMainContent:!1,hasDrawerContent:!0,showHeader:!0,showFooter:!0,hasAriaLabel:!1}),K={tags:["!autodocs"],args:{...c.args,isOpen:!1,id:"drawer-without-footer-or-primary",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!0},render:te({primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!0}),...ne(Ot)},kt=ie({hasCustomHeader:!1,hasTitle:!0,hasCustomFooter:!1,hasPrimaryButtonLabel:!0,position:"modal",hasMainContent:!1,hasDrawerContent:!1,showHeader:!0,showFooter:!0,hasAriaLabel:!1}),X={tags:["!autodocs"],args:{...c.args,isOpen:!1,id:"drawer-without-content",content:void 0},render:te({content:void 0}),...ne(kt)},J={args:{...c.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:e=>{const[a,t]=m.useState(e.isOpen),r=()=>{t(o=>!o)};return n.jsxs(n.Fragment,{children:[n.jsx(w,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(f,{...e,isOpen:a,ariaLabel:"Custom header drawer",onClose:()=>t(!1),onClickToggle:r,header:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[n.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial"},children:"Custom Header"}),n.jsx(ee,{name:"close",size:"m",onClick:()=>t(!1),"aria-label":"Close drawer"})]}),footer:n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:n.jsx(w,{label:"Custom Action",variant:"primary"})})})]})}};var be,Ce,xe;c.parameters={...c.parameters,docs:{...(be=c.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(Ce=c.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Be,Oe,ke;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ke=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:ke.source}}};var Re,De,Ie;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(De=_.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Ee,Te,Se;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Se=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var Ne,Pe,Me;A.parameters={...A.parameters,docs:{...(Ne=A.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Me=(Pe=A.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var He,_e,qe;j.parameters={...j.parameters,docs:{...(He=j.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(qe=(_e=j.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var Ae,je,Le;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Le=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Fe,Ue,Ve;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ve=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var We,ze,Ge;U.parameters={...U.parameters,docs:{...(We=U.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ge=(ze=U.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};var Qe,$e,Ye;V.parameters={...V.parameters,docs:{...(Qe=V.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ye=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Ye.source}}};var Ke,Xe,Je;W.parameters={...W.parameters,docs:{...(Ke=W.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Je=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var Ze,en,nn;z.parameters={...z.parameters,docs:{...(Ze=z.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(nn=(en=z.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,an,rn;G.parameters={...G.parameters,docs:{...(tn=G.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(rn=(an=G.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var on,sn,ln;Q.parameters={...Q.parameters,docs:{...(on=Q.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(ln=(sn=Q.parameters)==null?void 0:sn.docs)==null?void 0:ln.source}}};var cn,un,dn;$.parameters={...$.parameters,docs:{...(cn=$.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isOpen: false,
    id: "drawer-without-header-missing-aria",
    title: undefined,
    icon: undefined,
    showHeader: false
  },
  render: renderDrawerConfigurationErrorStory({
    title: undefined,
    icon: undefined,
    showHeader: false
  }),
  ...configurationErrorStoryHooks(drawerMissingAccessibleNameError)
}`,...(dn=(un=$.parameters)==null?void 0:un.docs)==null?void 0:dn.source}}};var mn,pn,gn;Y.parameters={...Y.parameters,docs:{...(mn=Y.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isOpen: false,
    id: "drawer-without-header-or-title",
    title: undefined,
    icon: undefined,
    showHeader: true
  },
  render: renderDrawerConfigurationErrorStory({
    title: undefined,
    icon: undefined,
    showHeader: true
  }),
  ...configurationErrorStoryHooks(drawerMissingHeaderOrTitleError)
}`,...(gn=(pn=Y.parameters)==null?void 0:pn.docs)==null?void 0:gn.source}}};var hn,wn,yn;K.parameters={...K.parameters,docs:{...(hn=K.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isOpen: false,
    id: "drawer-without-footer-or-primary",
    primaryButtonLabel: undefined,
    secondaryButtonLabel: undefined,
    showFooter: true
  },
  render: renderDrawerConfigurationErrorStory({
    primaryButtonLabel: undefined,
    secondaryButtonLabel: undefined,
    showFooter: true
  }),
  ...configurationErrorStoryHooks(drawerMissingFooterOrPrimaryError)
}`,...(yn=(wn=K.parameters)==null?void 0:wn.docs)==null?void 0:yn.source}}};var vn,fn,bn;X.parameters={...X.parameters,docs:{...(vn=X.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isOpen: false,
    id: "drawer-without-content",
    content: undefined
  },
  render: renderDrawerConfigurationErrorStory({
    content: undefined
  }),
  ...configurationErrorStoryHooks(drawerMissingContentError)
}`,...(bn=(fn=X.parameters)==null?void 0:fn.docs)==null?void 0:bn.source}}};var Cn,xn,Bn;J.parameters={...J.parameters,docs:{...(Cn=J.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closeOnEscape: true,
    id: "custom-header-footer-drawer"
  },
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
}`,...(Bn=(xn=J.parameters)==null?void 0:xn.docs)==null?void 0:Bn.source}}};const ta=["Default","ModalBackgroundScreenReaderManualCheck","ModalInteractive","ModalDecorativeIconsInteractive","Responsive","ResponsiveInteractive","CloseOnEscape","CloseOnEscapeInteractive","CloseOnOverlayClick","CloseOnOverlayClickInteractive","WithoutFooter","WithoutFooterInteractive","WithoutHeader","WithoutHeaderInteractive","WithoutHeaderMissingAccessibleName","WithoutHeaderOrTitle","WithoutFooterOrPrimaryButtonLabel","WithoutContent","CustomHeaderFooter"];export{L as CloseOnEscape,F as CloseOnEscapeInteractive,U as CloseOnOverlayClick,V as CloseOnOverlayClickInteractive,J as CustomHeaderFooter,c as Default,H as ModalBackgroundScreenReaderManualCheck,q as ModalDecorativeIconsInteractive,_ as ModalInteractive,A as Responsive,j as ResponsiveInteractive,X as WithoutContent,W as WithoutFooter,z as WithoutFooterInteractive,K as WithoutFooterOrPrimaryButtonLabel,G as WithoutHeader,Q as WithoutHeaderInteractive,$ as WithoutHeaderMissingAccessibleName,Y as WithoutHeaderOrTitle,ta as __namedExportsOrder,na as default};
