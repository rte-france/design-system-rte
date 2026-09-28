import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./timepicker.constants-CynrC_9x.js";import{d as hn}from"./keyboard-test.constants-By8W48aj.js";import{f as G,w as i,u,e as l,a as R}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import{a as on}from"./testing.utils-r13wRTL2.js";import{B as v}from"./Button-kS01vuC-.js";import{I as Y}from"./IconButton-CqYdVntE.js";import{l as wn}from"./log-handlers-B0rIMGQ5.js";import{u as yn,B as vn,b as bn,a as fn}from"./useFreezeNavigation-DiHi6ZNe.js";import{u as Cn}from"./useAnimatedMount-_zPBpYOt.js";import{u as xn}from"./useFocusTrap-DZUQw50T.js";import{u as Bn}from"./useKeydownEscape-mLuzHv9M.js";import{D as On}from"./Divider-BVZUrQ0d.js";import{O as Rn}from"./Overlay-BdeF33Ax.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./Icon-VewZnR13.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const kn=240,In=4,K="Drawer requires ariaLabel when the default header is not used.",q={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},Dn=[{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:q.MISSING_HEADER_OR_TITLE},{condition:e=>!En(e)&&!e.hasAriaLabel,issue:K},{condition:e=>!!e.showFooter&&!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:q.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:q.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:q.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function En(e){return!!e.showHeader&&!e.hasCustomHeader&&e.hasTitle}function Tn(e){var a;return(a=Dn.find(({condition:t})=>t(e)))==null?void 0:a.issue}function Sn(e,a){return!e&&!!a}function Nn(e,a){return!e&&!!a}function qn(e){return!!e.showHeader&&!e.hasCustomHeader&&e.hasTitle}function Pn(e){var m;const{id:a,showHeader:t,hasCustomHeader:r,hasTitle:s}=e;if(qn({showHeader:!!t,hasCustomHeader:r,hasTitle:s}))return{ariaLabelledby:`${a}-drawer-title`};const o=(m=e.ariaLabel)==null?void 0:m.trim();return o?{ariaLabel:o}:{}}const Hn=(e,a,t=0)=>e?`translateX(-${a+t}px)`:"none",Mn="_drawer_1ybli_1",g={"drawer-responsive-container":"_drawer-responsive-container_1ybli_1","drawer-children":"_drawer-children_1ybli_7",drawer:Mn,"drawer-content":"_drawer-content_1ybli_75","drawer-toggle":"_drawer-toggle_1ybli_83","drawer-footer":"_drawer-footer_1ybli_97","drawer-header-content":"_drawer-header-content_1ybli_104"},jn=4,ue=({isCollapsible:e,iconToggleCloseContainerRef:a,isOpen:t,isAnimating:r,handleOnClickToggle:s,shouldDisplayDefaultHeader:o,showHeader:m,id:h,title:b,icon:k,iconAppearance:f,onClose:I,isClosable:w,header:C,drawerLeftPosition:p})=>n.jsxs(n.Fragment,{children:[e&&n.jsx(Y,{ref:a,className:g["drawer-toggle"],style:{transition:"none",transform:Hn(r,p,jn)},name:t?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:s,"aria-label":`Close drawer ${h}`}),m&&(o?n.jsx(fn,{id:h,title:b,icon:k,iconAppearance:f,onClose:I,isClosable:w,titleElementId:`${h}-drawer-title`}):n.jsx(n.Fragment,{children:C}))]}),de=({content:e,fixedHeader:a})=>n.jsx("div",{className:g["drawer-content"],"data-fixed-header":a,tabIndex:-1,children:e}),me=({fixedHeader:e,id:a,title:t,icon:r,iconAppearance:s,isCollapsible:o,iconToggleCloseContainerRef:m,isOpen:h,isAnimating:b,handleOnClickToggle:k,shouldDisplayDefaultHeader:f,showHeader:I,onClose:w,isClosable:C,header:p,drawerLeftPosition:O,content:D})=>{const x={id:a,title:t,icon:r,iconAppearance:s,isCollapsible:o,iconToggleCloseContainerRef:m,isOpen:h,isAnimating:b,handleOnClickToggle:k,shouldDisplayDefaultHeader:!!f,showHeader:I,onClose:w,isClosable:C,header:p,drawerLeftPosition:O};return e?n.jsxs(n.Fragment,{children:[n.jsx(ue,{...x}),n.jsx(de,{content:D,fixedHeader:e})]}):n.jsxs("div",{className:g["drawer-header-content"],children:[n.jsx(ue,{...x}),n.jsx(de,{content:D})]})},pe=({fixedHeader:e,shouldDisplayDefaultFooter:a,primaryButtonLabel:t,secondaryButtonLabel:r,footer:s,onClickPrimaryButton:o,onClickSecondaryButton:m,showFooter:h})=>h?n.jsx("div",{className:g["drawer-footer"],"data-fixed-header":e,children:a?n.jsx(bn,{primaryButton:n.jsx(v,{label:t,variant:"primary",onClick:o}),secondaryButton:r?n.jsx(v,{label:r,variant:"secondary",onClick:m}):void 0}):s&&n.jsx(n.Fragment,{children:s})}):null,B=({id:e,title:a,icon:t,iconAppearance:r,isOpen:s,onClose:o,onClickToggle:m,closeOnOverlayClick:h=!1,primaryButtonLabel:b,secondaryButtonLabel:k,isCollapsible:f=!1,content:I,header:w,footer:C,position:p="modal",width:O,children:D,fixedHeader:x,showHeader:X=!0,showFooter:te=!0,closeOnEscape:ln=!1,isClosable:cn=!0,ariaLabel:E,onClickPrimaryButton:un,onClickSecondaryButton:dn,...ae})=>{var ce;const{shouldRender:re,isAnimating:d}=Cn(s,kn),T=y.useRef(null),J=y.useRef(null),Z=y.useRef(null),oe=((ce=T.current)==null?void 0:ce.clientWidth)||0;Bn(ln?o:()=>{}),xn(T.current,re&&p==="modal"),yn(p==="modal"&&s);const mn=Sn(w,a),pn=Nn(C,b),S=Tn({hasCustomHeader:!!w,hasTitle:!!a,hasCustomFooter:!!C,hasPrimaryButtonLabel:!!b,position:p,hasMainContent:!!D,showHeader:X,showFooter:te,hasAriaLabel:!!(E!=null&&E.trim())});if(S)return S===K?wn("Drawer",S):console.warn(S),null;const se=(gn=0)=>d?`translateX(-${oe+gn}px)`:"none",ee=()=>{s&&J.current&&J.current.focus(),!s&&Z.current&&Z.current.focus(),m()},N=Pn({id:e,showHeader:X,hasCustomHeader:!!w,hasTitle:!!a,ariaLabel:E}),ie={fixedHeader:x,id:e,title:a,icon:t,iconAppearance:r,isCollapsible:f,iconToggleCloseContainerRef:Z,isOpen:s,isAnimating:d,handleOnClickToggle:ee,shouldDisplayDefaultHeader:!!mn,showHeader:X,onClose:o,isClosable:cn,header:w,drawerLeftPosition:oe,content:I},le={fixedHeader:x,shouldDisplayDefaultFooter:!!pn,primaryButtonLabel:b,secondaryButtonLabel:k,footer:C,onClickPrimaryButton:un,onClickSecondaryButton:dn,showFooter:te};return n.jsx(n.Fragment,{children:p==="responsive"?n.jsx(n.Fragment,{children:n.jsxs("div",{className:g["drawer-responsive-container"],children:[f&&n.jsx(Y,{className:g["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:d?0:1,transform:se(In)},name:"right-panel-open",size:"l",variant:"primary",onClick:ee,"aria-label":`Close drawer ${e}`}),n.jsx(On,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:d?"visible":"hidden",transform:se()}}),n.jsx("div",{className:g["drawer-children"],"data-open":d,style:{marginRight:d?O:0},children:D}),n.jsxs("div",{className:g.drawer,ref:T,"data-open":d,role:"region","aria-labelledby":N.ariaLabelledby,"aria-label":N.ariaLabel,"data-position":p,"data-fixed-header":x,style:{width:O,transform:d?"none":`translateX(${O||"100%"})`,visibility:d?"visible":"hidden"},...ae,children:[n.jsx(me,{...ie}),n.jsx(pe,{...le})]})]})}):n.jsxs(n.Fragment,{children:[f&&n.jsx(Y,{ref:J,className:g["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:d?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:ee,"aria-label":`Close drawer ${e}`}),re&&n.jsxs(Rn,{children:[n.jsx(vn,{isAnimating:d,onClick:h?o:void 0}),n.jsxs("div",{ref:T,className:g.drawer,"data-open":d,"data-fixed-header":x,"data-position":p,role:"dialog","aria-modal":"true","aria-labelledby":N.ariaLabelledby,"aria-label":N.ariaLabel,style:{width:O},...ae,children:[n.jsx(me,{...ie}),n.jsx(pe,{...le})]})]})]})})};B.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"modal"',computed:!1},required:!1},showHeader:{defaultValue:{value:"true",computed:!1},required:!1},showFooter:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const pt={title:"Composants/Drawer/Drawer",component:B,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},sn=e=>{l(e).toBeTruthy(),l(e).toHaveAttribute("aria-hidden","true")},ne=e=>{l(e).toBeTruthy(),sn(e.querySelector("svg"))},_n=e=>e.querySelector('[class*="base-header-text"] > svg'),c={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:G(),onClickSecondaryButton:G(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Body content."})},render:e=>{const[a,t]=y.useState(e.isOpen),r=()=>{t(o=>!o)},s=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:s})]})}},P={tags:["!autodocs"],args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:G(),onClickSecondaryButton:G(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[a,t]=y.useState(e.isOpen),r=()=>{t(o=>!o)},s=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:s})]})},play:async({canvasElement:e,args:a})=>{const r=await i(e).getByRole("button",{name:"Open drawer"});await u.click(r);const s=i(document.body).getByRole("dialog");l(s).toBeInTheDocument(),await u.click(i(s).getByRole("button",{name:"Cancel"})),l(a.onClickSecondaryButton).toHaveBeenCalled(),l(s).toBeInTheDocument(),await u.click(i(s).getByRole("button",{name:"Confirm"})),l(a.onClickPrimaryButton).toHaveBeenCalled(),await R(()=>{l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},H={tags:["!autodocs"],args:{...c.args,isCollapsible:!0,id:"example-drawer"},render:c.render,play:async({canvasElement:e})=>{const a=i(e);await u.click(await a.getByRole("button",{name:"Open drawer"}));const t=await i(document.body).findByRole("dialog"),r=i(t);sn(_n(t)),ne(r.getByRole("button",{name:"Close modal example-drawer"})),ne(r.getByRole("button",{name:"Close drawer example-drawer"}));const s=document.body.querySelector('[class*="drawer-toggle"]');ne(s)}},M={args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=y.useState(e.isOpen),r=()=>{t(o=>!o)},s=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:s,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Drawer panel."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Main area next to the panel."})]})})})}},j={tags:["!autodocs"],args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=y.useState(e.isOpen),r=()=>{t(o=>!o)},s=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:r,onClickPrimaryButton:s,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:a})=>{const t=i(e),r=await t.getByRole("button",{name:"Open drawer"});await u.click(r);const s=await R(()=>{const o=t.getByRole("region");return l(o).toHaveAttribute("data-position","responsive"),l(o).toHaveAttribute("data-open","true"),l(i(o).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),o});await u.click(i(s).getByRole("button",{name:"Cancel"})),l(a.onClickSecondaryButton).toHaveBeenCalled(),l(s).toHaveAttribute("data-open","true"),await u.click(i(s).getByRole("button",{name:"Confirm"})),l(a.onClickPrimaryButton).toHaveBeenCalled(),await R(()=>{l(s).toHaveAttribute("data-open","false")})}},_={args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}}},A={tags:["autodocs"],args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=i(document.body).getByRole("dialog");l(t).toBeInTheDocument(),await u.keyboard(hn),await R(()=>{l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},F={tags:["skip-ci"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}}},L={tags:["skip-ci","!autodocs"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const r=i(document.body).getByRole("dialog").previousElementSibling;l(r).not.toBeNull(),await u.click(r),await R(()=>{l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},V={args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}}},U={tags:["!autodocs"],args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=i(document.body).getByRole("dialog");l(t).toBeInTheDocument(),l(i(t).queryByRole("button",{name:"Confirm"})).not.toBeInTheDocument(),l(i(t).queryByRole("button",{name:"Cancel"})).not.toBeInTheDocument()}},z={args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}}},W={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}},play:async({canvasElement:e,args:a})=>{const t=i(e);await u.click(t.getByRole("button",{name:"Open drawer"}));const r=i(document.body).getByRole("dialog",{name:"Example drawer"});l(r).toBeInTheDocument(),l(i(r).queryByRole("heading")).not.toBeInTheDocument(),l(i(r).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await u.click(i(r).getByRole("button",{name:"Cancel"})),l(a.onClickSecondaryButton).toHaveBeenCalled(),l(r).toBeInTheDocument(),await u.click(i(r).getByRole("button",{name:"Confirm"})),l(a.onClickPrimaryButton).toHaveBeenCalled(),await R(()=>{l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},Q={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header-missing-aria",title:void 0,icon:void 0,showHeader:!1},render:c.render,beforeEach:on(`[Drawer] ${K}`),play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"})),l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()}},$={args:{...c.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},beforeEach:on(`[Drawer] ${K}`),render:e=>{const[a,t]=y.useState(e.isOpen),r=()=>{t(s=>!s)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(B,{...e,isOpen:a,ariaLabel:"Custom header drawer",onClose:()=>t(!1),onClickToggle:r,header:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[n.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial"},children:"Custom Header"}),n.jsx(Y,{name:"close",size:"m",onClick:()=>t(!1),"aria-label":"Close drawer"})]}),footer:n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:n.jsx(v,{label:"Custom Action",variant:"primary"})})})]})}};var ge,he,we;c.parameters={...c.parameters,docs:{...(ge=c.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(he=c.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var ye,ve,be;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,Ce,xe;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(Ce=H.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Be,Oe,Re;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Re=(Oe=M.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var ke,Ie,De;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Ee,Te,Se;_.parameters={..._.parameters,docs:{...(Ee=_.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Se=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var Ne,qe,Pe;A.parameters={...A.parameters,docs:{...(Ne=A.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Pe=(qe=A.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var He,Me,je;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(je=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var _e,Ae,Fe;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Fe=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source}}};var Le,Ve,Ue;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ue=(Ve=V.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var ze,We,Qe;U.parameters={...U.parameters,docs:{...(ze=U.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Qe=(We=U.parameters)==null?void 0:We.docs)==null?void 0:Qe.source}}};var $e,Ge,Ye;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ye=(Ge=z.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var Ke,Xe,Je;W.parameters={...W.parameters,docs:{...(Ke=W.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Je=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var Ze,en,nn;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(nn=(en=Q.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,an,rn;$.parameters={...$.parameters,docs:{...(tn=$.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(rn=(an=$.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};const gt=["Default","ModalInteractive","ModalDecorativeIconsInteractive","Responsive","ResponsiveInteractive","CloseOnEscape","CloseOnEscapeInteractive","CloseOnOverlayClick","CloseOnOverlayClickInteractive","WithoutFooter","WithoutFooterInteractive","WithoutHeader","WithoutHeaderInteractive","WithoutHeaderMissingAccessibleName","CustomHeaderFooter"];export{_ as CloseOnEscape,A as CloseOnEscapeInteractive,F as CloseOnOverlayClick,L as CloseOnOverlayClickInteractive,$ as CustomHeaderFooter,c as Default,H as ModalDecorativeIconsInteractive,P as ModalInteractive,M as Responsive,j as ResponsiveInteractive,V as WithoutFooter,U as WithoutFooterInteractive,z as WithoutHeader,W as WithoutHeaderInteractive,Q as WithoutHeaderMissingAccessibleName,gt as __namedExportsOrder,pt as default};
