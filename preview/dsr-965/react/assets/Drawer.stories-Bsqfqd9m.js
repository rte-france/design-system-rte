import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./timepicker.constants-CynrC_9x.js";import{d as ln}from"./keyboard-test.constants-By8W48aj.js";import{f as G,w as i,u,e as l,a as k}from"./index-4rjIhT2C.js";import{r as v}from"./index-G8LIXM5I.js";import{a as cn}from"./testing.utils-r13wRTL2.js";import{B as y}from"./Button-KJfdYR4G.js";import{I as $}from"./IconButton-D7Ub3mhB.js";import{l as un}from"./log-handlers-DViU2c-X.js";import{u as dn,B as mn,b as pn,a as gn}from"./useFreezeNavigation-CZ4s9aMD.js";import{u as hn}from"./useAnimatedMount-_zPBpYOt.js";import{u as wn}from"./useFocusTrap-D2ZnoMa2.js";import{u as vn}from"./useKeydownEscape-mLuzHv9M.js";import{D as yn}from"./Divider-BVZUrQ0d.js";import{O as bn}from"./Overlay-BdeF33Ax.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const fn=240,Cn=4,Z="Drawer requires ariaLabel when the default header is not used.",P={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},xn=[{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:P.MISSING_HEADER_OR_TITLE},{condition:e=>!Bn(e)&&!e.hasAriaLabel,issue:Z},{condition:e=>!!e.showFooter&&!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:P.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:P.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:P.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function Bn(e){return!!e.showHeader&&!e.hasCustomHeader&&e.hasTitle}function On(e){var a;return(a=xn.find(({condition:t})=>t(e)))==null?void 0:a.issue}function kn(e,a){return!e&&!!a}function Rn(e,a){return!e&&!!a}function In(e){return!!e.showHeader&&!e.hasCustomHeader&&e.hasTitle}function Dn(e){var m;const{id:a,showHeader:t,hasCustomHeader:o,hasTitle:s}=e;if(In({showHeader:!!t,hasCustomHeader:o,hasTitle:s}))return{ariaLabelledby:`${a}-drawer-title`};const r=(m=e.ariaLabel)==null?void 0:m.trim();return r?{ariaLabel:r}:{}}const En=(e,a,t=0)=>e?`translateX(-${a+t}px)`:"none",Tn="_drawer_1hmx0_1",g={"drawer-responsive-container":"_drawer-responsive-container_1hmx0_1","drawer-children":"_drawer-children_1hmx0_7",drawer:Tn,"drawer-content":"_drawer-content_1hmx0_63","drawer-toggle":"_drawer-toggle_1hmx0_71","drawer-footer":"_drawer-footer_1hmx0_80","drawer-header-content":"_drawer-header-content_1hmx0_87"},Sn=4,le=({isCollapsible:e,iconToggleCloseContainerRef:a,isOpen:t,isAnimating:o,handleOnClickToggle:s,shouldDisplayDefaultHeader:r,showHeader:m,id:h,title:b,icon:R,iconAppearance:f,onClose:I,isClosable:w,header:C,drawerLeftPosition:p})=>n.jsxs(n.Fragment,{children:[e&&n.jsx($,{ref:a,className:g["drawer-toggle"],style:{transition:"none",transform:En(o,p,Sn)},name:t?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:s,"aria-label":`Close drawer ${h}`}),m&&(r?n.jsx(gn,{id:h,title:b,icon:R,iconAppearance:f,onClose:I,isClosable:w,titleElementId:`${h}-drawer-title`}):n.jsx(n.Fragment,{children:C}))]}),ce=({content:e,fixedHeader:a})=>n.jsx("div",{className:g["drawer-content"],"data-fixed-header":a,tabIndex:-1,children:e}),ue=({fixedHeader:e,id:a,title:t,icon:o,iconAppearance:s,isCollapsible:r,iconToggleCloseContainerRef:m,isOpen:h,isAnimating:b,handleOnClickToggle:R,shouldDisplayDefaultHeader:f,showHeader:I,onClose:w,isClosable:C,header:p,drawerLeftPosition:O,content:D})=>{const x={id:a,title:t,icon:o,iconAppearance:s,isCollapsible:r,iconToggleCloseContainerRef:m,isOpen:h,isAnimating:b,handleOnClickToggle:R,shouldDisplayDefaultHeader:!!f,showHeader:I,onClose:w,isClosable:C,header:p,drawerLeftPosition:O};return e?n.jsxs(n.Fragment,{children:[n.jsx(le,{...x}),n.jsx(ce,{content:D,fixedHeader:e})]}):n.jsxs("div",{className:g["drawer-header-content"],children:[n.jsx(le,{...x}),n.jsx(ce,{content:D})]})},de=({fixedHeader:e,shouldDisplayDefaultFooter:a,primaryButtonLabel:t,secondaryButtonLabel:o,footer:s,onClickPrimaryButton:r,onClickSecondaryButton:m,showFooter:h})=>h?n.jsx("div",{className:g["drawer-footer"],"data-fixed-header":e,children:a?n.jsx(pn,{primaryButton:n.jsx(y,{label:t,variant:"primary",onClick:r}),secondaryButton:o?n.jsx(y,{label:o,variant:"secondary",onClick:m}):void 0}):s&&n.jsx(n.Fragment,{children:s})}):null,B=({id:e,title:a,icon:t,iconAppearance:o,isOpen:s,onClose:r,onClickToggle:m,closeOnOverlayClick:h=!1,primaryButtonLabel:b,secondaryButtonLabel:R,isCollapsible:f=!1,content:I,header:w,footer:C,position:p="modal",width:O,children:D,fixedHeader:x,showHeader:Y=!0,showFooter:ee=!0,closeOnEscape:en=!1,isClosable:nn=!0,ariaLabel:E,onClickPrimaryButton:tn,onClickSecondaryButton:an,...ne})=>{var ie;const{shouldRender:te,isAnimating:d}=hn(s,fn),T=v.useRef(null),K=v.useRef(null),X=v.useRef(null),ae=((ie=T.current)==null?void 0:ie.clientWidth)||0;vn(en?r:()=>{}),wn(T.current,te&&p==="modal"),dn(p==="modal"&&s);const rn=kn(w,a),on=Rn(C,b),S=On({hasCustomHeader:!!w,hasTitle:!!a,hasCustomFooter:!!C,hasPrimaryButtonLabel:!!b,position:p,hasMainContent:!!D,showHeader:Y,showFooter:ee,hasAriaLabel:!!(E!=null&&E.trim())});if(S)return S===Z?un("Drawer",S):console.warn(S),null;const re=(sn=0)=>d?`translateX(-${ae+sn}px)`:"none",J=()=>{s&&K.current&&K.current.focus(),!s&&X.current&&X.current.focus(),m()},N=Dn({id:e,showHeader:Y,hasCustomHeader:!!w,hasTitle:!!a,ariaLabel:E}),oe={fixedHeader:x,id:e,title:a,icon:t,iconAppearance:o,isCollapsible:f,iconToggleCloseContainerRef:X,isOpen:s,isAnimating:d,handleOnClickToggle:J,shouldDisplayDefaultHeader:!!rn,showHeader:Y,onClose:r,isClosable:nn,header:w,drawerLeftPosition:ae,content:I},se={fixedHeader:x,shouldDisplayDefaultFooter:!!on,primaryButtonLabel:b,secondaryButtonLabel:R,footer:C,onClickPrimaryButton:tn,onClickSecondaryButton:an,showFooter:ee};return n.jsx(n.Fragment,{children:p==="responsive"?n.jsx(n.Fragment,{children:n.jsxs("div",{className:g["drawer-responsive-container"],children:[f&&n.jsx($,{className:g["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:d?0:1,transform:re(Cn)},name:"right-panel-open",size:"l",variant:"primary",onClick:J,"aria-label":`Close drawer ${e}`}),n.jsx(yn,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:d?"visible":"hidden",transform:re()}}),n.jsx("div",{className:g["drawer-children"],"data-open":d,style:{marginRight:d?O:0},children:D}),n.jsxs("div",{className:g.drawer,ref:T,"data-open":d,role:"region","aria-labelledby":N.ariaLabelledby,"aria-label":N.ariaLabel,"data-position":p,"data-fixed-header":x,style:{width:O,transform:d?"none":`translateX(${O||"100%"})`,visibility:d?"visible":"hidden"},...ne,children:[n.jsx(ue,{...oe}),n.jsx(de,{...se})]})]})}):n.jsxs(n.Fragment,{children:[f&&n.jsx($,{ref:K,className:g["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:d?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:J,"aria-label":`Close drawer ${e}`}),te&&n.jsxs(bn,{children:[n.jsx(mn,{isAnimating:d,onClick:h?r:void 0}),n.jsxs("div",{ref:T,className:g.drawer,"data-open":d,"data-fixed-header":x,"data-position":p,role:"dialog","aria-modal":"true","aria-labelledby":N.ariaLabelledby,"aria-label":N.ariaLabel,style:{width:O},...ne,children:[n.jsx(ue,{...oe}),n.jsx(de,{...se})]})]})]})})};B.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"modal"',computed:!1},required:!1},showHeader:{defaultValue:{value:"true",computed:!1},required:!1},showFooter:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const st={title:"Composants/Drawer/Drawer",component:B,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},c={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:G(),onClickSecondaryButton:G(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Body content."})},render:e=>{const[a,t]=v.useState(e.isOpen),o=()=>{t(r=>!r)},s=()=>{var r;(r=e.onClickPrimaryButton)==null||r.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(y,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:s})]})}},q={tags:["!autodocs"],args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:G(),onClickSecondaryButton:G(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[a,t]=v.useState(e.isOpen),o=()=>{t(r=>!r)},s=()=>{var r;(r=e.onClickPrimaryButton)==null||r.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(y,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:s})]})},play:async({canvasElement:e,args:a})=>{const o=await i(e).getByRole("button",{name:"Open drawer"});await u.click(o);const s=i(document.body).getByRole("dialog");l(s).toBeInTheDocument(),await u.click(i(s).getByRole("button",{name:"Cancel"})),l(a.onClickSecondaryButton).toHaveBeenCalled(),l(s).toBeInTheDocument(),await u.click(i(s).getByRole("button",{name:"Confirm"})),l(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},H={args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=v.useState(e.isOpen),o=()=>{t(r=>!r)},s=()=>{var r;(r=e.onClickPrimaryButton)==null||r.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:s,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Drawer panel."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(y,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Main area next to the panel."})]})})})}},j={tags:["!autodocs"],args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=v.useState(e.isOpen),o=()=>{t(r=>!r)},s=()=>{var r;(r=e.onClickPrimaryButton)==null||r.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:o,onClickPrimaryButton:s,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(y,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:a})=>{const t=i(e),o=await t.getByRole("button",{name:"Open drawer"});await u.click(o);const s=await k(()=>{const r=t.getByRole("region");return l(r).toHaveAttribute("data-position","responsive"),l(r).toHaveAttribute("data-open","true"),l(i(r).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),r});await u.click(i(s).getByRole("button",{name:"Cancel"})),l(a.onClickSecondaryButton).toHaveBeenCalled(),l(s).toHaveAttribute("data-open","true"),await u.click(i(s).getByRole("button",{name:"Confirm"})),l(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{l(s).toHaveAttribute("data-open","false")})}},M={args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}}},_={tags:["autodocs"],args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=i(document.body).getByRole("dialog");l(t).toBeInTheDocument(),await u.keyboard(ln),await k(()=>{l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},A={tags:["skip-ci"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}}},F={tags:["skip-ci","!autodocs"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const o=i(document.body).getByRole("dialog").previousElementSibling;l(o).not.toBeNull(),await u.click(o),await k(()=>{l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},L={args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}}},V={tags:["!autodocs"],args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const t=i(document.body).getByRole("dialog");l(t).toBeInTheDocument(),l(i(t).queryByRole("button",{name:"Confirm"})).not.toBeInTheDocument(),l(i(t).queryByRole("button",{name:"Cancel"})).not.toBeInTheDocument()}},U={args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}}},z={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}},play:async({canvasElement:e,args:a})=>{const t=i(e);await u.click(t.getByRole("button",{name:"Open drawer"}));const o=i(document.body).getByRole("dialog",{name:"Example drawer"});l(o).toBeInTheDocument(),l(i(o).queryByRole("heading")).not.toBeInTheDocument(),l(i(o).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await u.click(i(o).getByRole("button",{name:"Cancel"})),l(a.onClickSecondaryButton).toHaveBeenCalled(),l(o).toBeInTheDocument(),await u.click(i(o).getByRole("button",{name:"Confirm"})),l(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},W={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header-missing-aria",title:void 0,icon:void 0,showHeader:!1},render:c.render,beforeEach:cn(`[Drawer] ${Z}`),play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"})),l(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()}},Q={args:{...c.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:e=>{const[a,t]=v.useState(e.isOpen),o=()=>{t(s=>!s)};return n.jsxs(n.Fragment,{children:[n.jsx(y,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(B,{...e,isOpen:a,ariaLabel:"Custom header drawer",onClose:()=>t(!1),onClickToggle:o,header:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[n.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial"},children:"Custom Header"}),n.jsx($,{name:"close",size:"m",onClick:()=>t(!1),"aria-label":"Close drawer"})]}),footer:n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:n.jsx(y,{label:"Custom Action",variant:"primary"})})})]})}};var me,pe,ge;c.parameters={...c.parameters,docs:{...(me=c.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(pe=c.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,we,ve;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(we=q.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var ye,be,fe;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(fe=(be=H.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ce,xe,Be;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Be=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Oe,ke,Re;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Re=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var Ie,De,Ee;_.parameters={..._.parameters,docs:{...(Ie=_.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ee=(De=_.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Te,Se,Ne;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ne=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Pe,qe,He;F.parameters={...F.parameters,docs:{...(Pe=F.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(He=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var je,Me,_e;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(_e=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Ae,Fe,Le;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Le=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var Ve,Ue,ze;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(ze=(Ue=U.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var We,Qe,Ge;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ge=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Ge.source}}};var $e,Ye,Ke;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ke=(Ye=W.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var Xe,Je,Ze;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Je=Q.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};const it=["Default","ModalInteractive","Responsive","ResponsiveInteractive","CloseOnEscape","CloseOnEscapeInteractive","CloseOnOverlayClick","CloseOnOverlayClickInteractive","WithoutFooter","WithoutFooterInteractive","WithoutHeader","WithoutHeaderInteractive","WithoutHeaderMissingAccessibleName","CustomHeaderFooter"];export{M as CloseOnEscape,_ as CloseOnEscapeInteractive,A as CloseOnOverlayClick,F as CloseOnOverlayClickInteractive,Q as CustomHeaderFooter,c as Default,q as ModalInteractive,H as Responsive,j as ResponsiveInteractive,L as WithoutFooter,V as WithoutFooterInteractive,U as WithoutHeader,z as WithoutHeaderInteractive,W as WithoutHeaderMissingAccessibleName,it as __namedExportsOrder,st as default};
