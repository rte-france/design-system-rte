import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{d as nn}from"./keyboard-test.constants-By8W48aj.js";import{f as L,w as r,u as d,e as l,a as k}from"./index-4rjIhT2C.js";import{r as h}from"./index-G8LIXM5I.js";import{B as v}from"./Button-KJfdYR4G.js";import{I as z}from"./IconButton-D7Ub3mhB.js";import"./timepicker.constants-CynrC_9x.js";import{u as tn,B as an,b as on,a as sn}from"./useFreezeNavigation-CgyKt7h1.js";import{u as rn}from"./useAnimatedMount-_zPBpYOt.js";import{u as ln}from"./useFocusTrap-D2ZnoMa2.js";import{u as cn}from"./useKeydownEscape-mLuzHv9M.js";import{D as un}from"./Divider-BVZUrQ0d.js";import{O as dn}from"./Overlay-BdeF33Ax.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const mn=240,pn=4,E={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},gn=[{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:E.MISSING_HEADER_OR_TITLE},{condition:e=>!!e.showFooter&&!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:E.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:E.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:E.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function hn(e){var a;return(a=gn.find(({condition:t})=>t(e)))==null?void 0:a.issue}function vn(e,a){return!e&&!!a}function yn(e,a){return!e&&!!a}const wn=(e,a,t=0)=>e?`translateX(-${a+t}px)`:"none",fn="_drawer_gx6bm_1",m={"drawer-responsive-container":"_drawer-responsive-container_gx6bm_1",drawer:fn,"drawer-content":"_drawer-content_gx6bm_48","drawer-toggle":"_drawer-toggle_gx6bm_56","drawer-footer":"_drawer-footer_gx6bm_65","drawer-header-content":"_drawer-header-content_gx6bm_72"},bn=4,se=({isCollapsible:e,iconToggleCloseContainerRef:a,isOpen:t,isAnimating:s,handleOnClickToggle:i,shouldDisplayDefaultHeader:o,showHeader:y,id:g,title:w,icon:R,iconAppearance:f,onClose:I,isClosable:b,header:C,drawerLeftPosition:p})=>n.jsxs(n.Fragment,{children:[e&&n.jsx(z,{ref:a,className:m["drawer-toggle"],style:{transition:"none",transform:wn(s,p,bn)},name:t?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:i,"aria-label":`Close drawer ${g}`}),y&&(o?n.jsx(sn,{id:g,title:w,icon:R,iconAppearance:f,onClose:I,isClosable:b}):n.jsx(n.Fragment,{children:C}))]}),ie=({content:e,fixedHeader:a})=>n.jsx("div",{className:m["drawer-content"],"data-fixed-header":a,tabIndex:-1,children:e}),re=({fixedHeader:e,id:a,title:t,icon:s,iconAppearance:i,isCollapsible:o,iconToggleCloseContainerRef:y,isOpen:g,isAnimating:w,handleOnClickToggle:R,shouldDisplayDefaultHeader:f,showHeader:I,onClose:b,isClosable:C,header:p,drawerLeftPosition:O,content:D})=>{const x={id:a,title:t,icon:s,iconAppearance:i,isCollapsible:o,iconToggleCloseContainerRef:y,isOpen:g,isAnimating:w,handleOnClickToggle:R,shouldDisplayDefaultHeader:!!f,showHeader:I,onClose:b,isClosable:C,header:p,drawerLeftPosition:O};return e?n.jsxs(n.Fragment,{children:[n.jsx(se,{...x}),n.jsx(ie,{content:D,fixedHeader:e})]}):n.jsxs("div",{className:m["drawer-header-content"],children:[n.jsx(se,{...x}),n.jsx(ie,{content:D})]})},le=({fixedHeader:e,shouldDisplayDefaultFooter:a,primaryButtonLabel:t,secondaryButtonLabel:s,footer:i,onClickPrimaryButton:o,onClickSecondaryButton:y,showFooter:g})=>g?n.jsx("div",{className:m["drawer-footer"],"data-fixed-header":e,children:a?n.jsx(on,{primaryButton:n.jsx(v,{label:t,variant:"primary",onClick:o}),secondaryButton:s?n.jsx(v,{label:s,variant:"secondary",onClick:y}):void 0}):i&&n.jsx(n.Fragment,{children:i})}):null,B=({id:e,title:a,icon:t,iconAppearance:s,isOpen:i,onClose:o,onClickToggle:y,closeOnOverlayClick:g=!1,primaryButtonLabel:w,secondaryButtonLabel:R,isCollapsible:f=!1,content:I,header:b,footer:C,position:p="modal",width:O,children:D,fixedHeader:x,showHeader:Q=!0,showFooter:$=!0,closeOnEscape:Ye=!1,isClosable:$e=!0,onClickPrimaryButton:Ke,onClickSecondaryButton:Xe,...K})=>{var oe;const{shouldRender:X,isAnimating:u}=rn(i,mn),T=h.useRef(null),W=h.useRef(null),G=h.useRef(null),J=((oe=T.current)==null?void 0:oe.clientWidth)||0;cn(Ye?o:()=>{}),ln(T.current,X),tn(p==="modal"&&i);const Je=vn(b,a),Ze=yn(C,w),Z=hn({hasCustomHeader:b!==void 0,hasTitle:!!a,hasCustomFooter:C!==void 0,hasPrimaryButtonLabel:!!w,position:p,hasMainContent:!!D,showHeader:Q,showFooter:$});if(Z)return console.warn(Z),null;const ee=(en=0)=>u?`translateX(-${J+en}px)`:"none",Y=()=>{i&&W.current&&W.current.focus(),!i&&G.current&&G.current.focus(),y()},ne=Q?`${e}-drawer-title`:void 0,te={fixedHeader:x,id:e,title:a,icon:t,iconAppearance:s,isCollapsible:f,iconToggleCloseContainerRef:G,isOpen:i,isAnimating:u,handleOnClickToggle:Y,shouldDisplayDefaultHeader:!!Je,showHeader:Q,onClose:o,isClosable:$e,header:b,drawerLeftPosition:J,content:I},ae={fixedHeader:x,shouldDisplayDefaultFooter:!!Ze,primaryButtonLabel:w,secondaryButtonLabel:R,footer:C,onClickPrimaryButton:Ke,onClickSecondaryButton:Xe,showFooter:$};return n.jsx(n.Fragment,{children:p==="responsive"?n.jsx(n.Fragment,{children:n.jsxs("div",{className:m["drawer-responsive-container"],children:[f&&n.jsx(z,{className:m["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:u?0:1,transform:ee(pn)},name:"right-panel-open",size:"l",variant:"primary",onClick:Y,"aria-label":`Close drawer ${e}`}),n.jsx(un,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:u?"visible":"hidden",transform:ee()}}),n.jsxs("div",{className:m.drawer,ref:T,"data-open":u,role:"region","aria-labelledby":ne,"data-position":p,"data-fixed-header":x,style:{width:O,transform:u?"none":`translateX(${O||"100%"})`,visibility:u?"visible":"hidden"},...K,children:[n.jsx(re,{...te}),n.jsx(le,{...ae})]}),n.jsx("div",{className:m["drawer-children"],"data-open":u,style:{height:"100%",transition:"margin-right 240ms ease-out",marginRight:u?O:0,maxHeight:u?"100vh":void 0,overflowY:u?"auto":void 0},children:D})]})}):n.jsxs(n.Fragment,{children:[f&&n.jsx(z,{ref:W,className:m["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:u?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:Y,"aria-label":`Close drawer ${e}`}),X&&n.jsxs(dn,{children:[n.jsx(an,{isAnimating:u,onClick:g?o:void 0}),n.jsxs("div",{ref:T,className:m.drawer,"data-open":u,"data-fixed-header":x,"data-position":p,role:"dialog","aria-modal":"true","aria-labelledby":ne,style:{width:O},...K,children:[n.jsx(re,{...te}),n.jsx(le,{...ae})]})]})]})})};B.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"modal"',computed:!1},required:!1},showHeader:{defaultValue:{value:"true",computed:!1},required:!1},showFooter:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const Gn={title:"Composants/Drawer/Drawer",component:B,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},c={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:L(),onClickSecondaryButton:L(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Body content."})},render:e=>{const[a,t]=h.useState(e.isOpen),s=()=>{t(o=>!o)},i=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:s,onClickPrimaryButton:i})]})}},q={tags:["!autodocs"],args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:L(),onClickSecondaryButton:L(),content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[a,t]=h.useState(e.isOpen),s=()=>{t(o=>!o)},i=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:s,onClickPrimaryButton:i})]})},play:async({canvasElement:e,args:a})=>{const s=await r(e).getByRole("button",{name:"Open drawer"});await d.click(s);const i=r(document.body).getByRole("dialog");l(i).toBeInTheDocument(),await d.click(r(i).getByRole("button",{name:"Cancel"})),l(a.onClickSecondaryButton).toHaveBeenCalled(),l(i).toBeInTheDocument(),await d.click(r(i).getByRole("button",{name:"Confirm"})),l(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{l(r(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},P={args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=h.useState(e.isOpen),s=()=>{t(o=>!o)},i=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:s,onClickPrimaryButton:i,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Drawer panel."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Main area next to the panel."})]})})})}},S={tags:["!autodocs"],args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,t]=h.useState(e.isOpen),s=()=>{t(o=>!o)},i=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),t(!1)};return n.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:s,onClickPrimaryButton:i,content:n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:a})=>{const t=r(e),s=await t.getByRole("button",{name:"Open drawer"});await d.click(s);const i=await k(()=>{const o=t.getByRole("region");return l(o).toHaveAttribute("data-position","responsive"),l(o).toHaveAttribute("data-open","true"),l(r(o).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),o});await d.click(r(i).getByRole("button",{name:"Cancel"})),l(a.onClickSecondaryButton).toHaveBeenCalled(),l(i).toHaveAttribute("data-open","true"),await d.click(r(i).getByRole("button",{name:"Confirm"})),l(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{l(i).toHaveAttribute("data-open","false")})}},N={args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}}},j={tags:["autodocs"],args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const a=r(e);await d.click(a.getByRole("button",{name:"Open drawer"}));const t=r(document.body).getByRole("dialog");l(t).toBeInTheDocument(),await d.keyboard(nn),await k(()=>{l(r(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},H={tags:["skip-ci"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}}},M={tags:["skip-ci","!autodocs"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const a=r(e);await d.click(a.getByRole("button",{name:"Open drawer"}));const s=r(document.body).getByRole("dialog").previousElementSibling;l(s).not.toBeNull(),await d.click(s),await k(()=>{l(r(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},F={args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}}},_={tags:["!autodocs"],args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}},play:async({canvasElement:e})=>{const a=r(e);await d.click(a.getByRole("button",{name:"Open drawer"}));const t=r(document.body).getByRole("dialog");l(t).toBeInTheDocument(),l(r(t).queryByRole("button",{name:"Confirm"})).not.toBeInTheDocument(),l(r(t).queryByRole("button",{name:"Cancel"})).not.toBeInTheDocument()}},A={args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered, and neither a title nor a custom header is required."}}}},V={tags:["!autodocs"],args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered, and neither a title nor a custom header is required."}}},play:async({canvasElement:e,args:a})=>{const t=r(e);await d.click(t.getByRole("button",{name:"Open drawer"}));const s=r(document.body).getByRole("dialog");l(s).toBeInTheDocument(),l(r(s).queryByRole("heading")).not.toBeInTheDocument(),l(r(s).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await d.click(r(s).getByRole("button",{name:"Cancel"})),l(a.onClickSecondaryButton).toHaveBeenCalled(),l(s).toBeInTheDocument(),await d.click(r(s).getByRole("button",{name:"Confirm"})),l(a.onClickPrimaryButton).toHaveBeenCalled(),await k(()=>{l(r(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},U={args:{...c.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:e=>{const[a,t]=h.useState(e.isOpen),s=()=>{t(i=>!i)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{label:"Open drawer",onClick:()=>t(!0)}),n.jsx(B,{...e,isOpen:a,onClose:()=>t(!1),onClickToggle:s,header:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[n.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial"},children:"Custom Header"}),n.jsx(z,{name:"close",size:"m",onClick:()=>t(!1),"aria-label":"Close drawer"})]}),footer:n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:n.jsx(v,{label:"Custom Action",variant:"primary"})})})]})}};var ce,ue,de;c.parameters={...c.parameters,docs:{...(ce=c.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=c.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,ge;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,ve,ye;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var we,fe,be;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(be=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Ce,xe,Be;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Be=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Oe,ke,Re;j.parameters={...j.parameters,docs:{...(Oe=j.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Re=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var Ie,De,Te;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Te=(De=H.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Ee,qe,Pe;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Pe=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var Se,Ne,je;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(Ne=F.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var He,Me,Fe;_.parameters={..._.parameters,docs:{...(He=_.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Fe=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var _e,Ae,Ve;A.parameters={...A.parameters,docs:{...(_e=A.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "drawer-without-header",
    title: undefined,
    icon: undefined,
    showHeader: false
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showHeader** set to \`false\`. The header (title, icon, close control) is not rendered, and neither a title nor a custom header is required."
      }
    }
  }
}`,...(Ve=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var Ue,Le,ze;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    id: "drawer-without-header",
    title: undefined,
    icon: undefined,
    showHeader: false
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showHeader** set to \`false\`. The header (title, icon, close control) is not rendered, and neither a title nor a custom header is required."
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
    const drawer = within(document.body).getByRole("dialog");
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
}`,...(ze=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:ze.source}}};var Qe,We,Ge;U.parameters={...U.parameters,docs:{...(Qe=U.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} header={<div style={{
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
}`,...(Ge=(We=U.parameters)==null?void 0:We.docs)==null?void 0:Ge.source}}};const Yn=["Default","ModalInteractive","Responsive","ResponsiveInteractive","CloseOnEscape","CloseOnEscapeInteractive","CloseOnOverlayClick","CloseOnOverlayClickInteractive","WithoutFooter","WithoutFooterInteractive","WithoutHeader","WithoutHeaderInteractive","CustomHeaderFooter"];export{N as CloseOnEscape,j as CloseOnEscapeInteractive,H as CloseOnOverlayClick,M as CloseOnOverlayClickInteractive,U as CustomHeaderFooter,c as Default,q as ModalInteractive,P as Responsive,S as ResponsiveInteractive,F as WithoutFooter,_ as WithoutFooterInteractive,A as WithoutHeader,V as WithoutHeaderInteractive,Yn as __namedExportsOrder,Gn as default};
