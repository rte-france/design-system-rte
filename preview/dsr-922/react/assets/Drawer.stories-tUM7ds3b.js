import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as qe}from"./keyboard-test.constants-By8W48aj.js";import{w as s,u as d,e as r,a as B,f as J}from"./index-4rjIhT2C.js";import{r as C}from"./index-G8LIXM5I.js";import{B as R}from"./Button-KJfdYR4G.js";import{I as M}from"./IconButton-D7Ub3mhB.js";import"./timepicker.constants-CynrC_9x.js";import{u as Ne,B as Pe,b as Se,a as je}from"./useFreezeNavigation-DSqLRZFh.js";import{u as _e}from"./useAnimatedMount-_zPBpYOt.js";import{u as Me}from"./useFocusTrap-D2ZnoMa2.js";import{u as He}from"./useKeydownEscape-mLuzHv9M.js";import{D as Fe}from"./Divider-BMotkXeQ.js";import{O as Ae}from"./Overlay-BdeF33Ax.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Ve=240,Ue=4,T={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},Le=[{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:T.MISSING_HEADER_OR_TITLE},{condition:e=>!!e.showFooter&&!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:T.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:T.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:T.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function ze(e){var n;return(n=Le.find(({condition:a})=>a(e)))==null?void 0:n.issue}function Qe(e,n){return!e&&!!n}function We(e,n){return!e&&!!n}const Ge=(e,n,a=0)=>e?`translateX(-${n+a}px)`:"none",Ye="_drawer_gx6bm_1",m={"drawer-responsive-container":"_drawer-responsive-container_gx6bm_1",drawer:Ye,"drawer-content":"_drawer-content_gx6bm_48","drawer-toggle":"_drawer-toggle_gx6bm_56","drawer-footer":"_drawer-footer_gx6bm_65","drawer-header-content":"_drawer-header-content_gx6bm_72"},$e=4,Z=({isCollapsible:e,iconToggleCloseContainerRef:n,isOpen:a,isAnimating:i,handleOnClickToggle:o,shouldDisplayDefaultHeader:l,showHeader:v,id:g,title:h,icon:O,iconAppearance:y,onClose:k,isClosable:w,header:b,drawerLeftPosition:p})=>t.jsxs(t.Fragment,{children:[e&&t.jsx(M,{ref:n,className:m["drawer-toggle"],style:{transition:"none",transform:Ge(i,p,$e)},name:a?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:o,"aria-label":`Close drawer ${g}`}),v&&(l?t.jsx(je,{id:g,title:h,icon:O,iconAppearance:y,onClose:k,isClosable:w}):t.jsx(t.Fragment,{children:b}))]}),ee=({content:e,fixedHeader:n})=>t.jsx("div",{className:m["drawer-content"],"data-fixed-header":n,tabIndex:-1,children:e}),te=({fixedHeader:e,id:n,title:a,icon:i,iconAppearance:o,isCollapsible:l,iconToggleCloseContainerRef:v,isOpen:g,isAnimating:h,handleOnClickToggle:O,shouldDisplayDefaultHeader:y,showHeader:k,onClose:w,isClosable:b,header:p,drawerLeftPosition:x,content:I})=>{const f={id:n,title:a,icon:i,iconAppearance:o,isCollapsible:l,iconToggleCloseContainerRef:v,isOpen:g,isAnimating:h,handleOnClickToggle:O,shouldDisplayDefaultHeader:!!y,showHeader:k,onClose:w,isClosable:b,header:p,drawerLeftPosition:x};return e?t.jsxs(t.Fragment,{children:[t.jsx(Z,{...f}),t.jsx(ee,{content:I,fixedHeader:e})]}):t.jsxs("div",{className:m["drawer-header-content"],children:[t.jsx(Z,{...f}),t.jsx(ee,{content:I})]})},ne=({fixedHeader:e,shouldDisplayDefaultFooter:n,primaryButtonLabel:a,secondaryButtonLabel:i,footer:o,onClickPrimaryButton:l,onClickSecondaryButton:v,showFooter:g})=>g?t.jsx("div",{className:m["drawer-footer"],"data-fixed-header":e,children:n?t.jsx(Se,{primaryButton:t.jsx(R,{label:a,variant:"primary",onClick:l}),secondaryButton:i?t.jsx(R,{label:i,variant:"secondary",onClick:v}):void 0}):o&&t.jsx(t.Fragment,{children:o})}):null,D=({id:e,title:n,icon:a,iconAppearance:i,isOpen:o,onClose:l,onClickToggle:v,closeOnOverlayClick:g=!1,primaryButtonLabel:h,secondaryButtonLabel:O,isCollapsible:y=!1,content:k,header:w,footer:b,position:p,width:x,children:I,fixedHeader:f,showHeader:H=!0,showFooter:U=!0,closeOnEscape:Re=!1,isClosable:Oe=!0,onClickPrimaryButton:ke,onClickSecondaryButton:Ie,...L})=>{var X;const{shouldRender:z,isAnimating:u}=_e(o,Ve),E=C.useRef(null),F=C.useRef(null),A=C.useRef(null),Q=((X=E.current)==null?void 0:X.clientWidth)||0;He(Re?l:()=>{}),Me(E.current,z),Ne(p==="modal"&&o);const De=Qe(w,n),Ee=We(b,h),W=ze({hasCustomHeader:w!==void 0,hasTitle:!!n,hasCustomFooter:b!==void 0,hasPrimaryButtonLabel:!!h,position:p,hasMainContent:!!I,showHeader:H,showFooter:U});if(W)return console.warn(W),null;const G=(Te=0)=>u?`translateX(-${Q+Te}px)`:"none",V=()=>{o&&F.current&&F.current.focus(),!o&&A.current&&A.current.focus(),v()},Y=H?`${e}-drawer-title`:void 0,$={fixedHeader:f,id:e,title:n,icon:a,iconAppearance:i,isCollapsible:y,iconToggleCloseContainerRef:A,isOpen:o,isAnimating:u,handleOnClickToggle:V,shouldDisplayDefaultHeader:!!De,showHeader:H,onClose:l,isClosable:Oe,header:w,drawerLeftPosition:Q,content:k},K={fixedHeader:f,shouldDisplayDefaultFooter:!!Ee,primaryButtonLabel:h,secondaryButtonLabel:O,footer:b,onClickPrimaryButton:ke,onClickSecondaryButton:Ie,showFooter:U};return t.jsx(t.Fragment,{children:p==="responsive"?t.jsx(t.Fragment,{children:t.jsxs("div",{className:m["drawer-responsive-container"],children:[y&&t.jsx(M,{className:m["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:u?0:1,transform:G(Ue)},name:"right-panel-open",size:"l",variant:"primary",onClick:V,"aria-label":`Close drawer ${e}`}),t.jsx(Fe,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:u?"visible":"hidden",transform:G()}}),t.jsxs("div",{className:m.drawer,ref:E,"data-open":u,role:"region","aria-labelledby":Y,"data-position":p,"data-fixed-header":f,style:{width:x,transform:u?"none":`translateX(${x||"100%"})`,visibility:u?"visible":"hidden"},...L,children:[t.jsx(te,{...$}),t.jsx(ne,{...K})]}),t.jsx("div",{className:m["drawer-children"],"data-open":u,style:{height:"100%",transition:"margin-right 240ms ease-out",marginRight:u?x:0,maxHeight:u?"100vh":void 0,overflowY:u?"auto":void 0},children:I})]})}):t.jsxs(t.Fragment,{children:[y&&t.jsx(M,{ref:F,className:m["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:u?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:V,"aria-label":`Close drawer ${e}`}),z&&t.jsxs(Ae,{children:[t.jsx(Pe,{isAnimating:u,onClick:g?l:void 0}),t.jsxs("div",{ref:E,className:m.drawer,"data-open":u,"data-fixed-header":f,"data-position":p,role:"dialog","aria-modal":"true","aria-labelledby":Y,style:{width:x},...L,children:[t.jsx(te,{...$}),t.jsx(ne,{...K})]})]})]})})};D.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},showHeader:{defaultValue:{value:"true",computed:!1},required:!1},showFooter:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const Ct={title:"Composants/Drawer/Drawer",component:D,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},c={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:J(),onClickSecondaryButton:J(),content:t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[n,a]=C.useState(e.isOpen),i=()=>{a(l=>!l)},o=()=>{var l;(l=e.onClickPrimaryButton)==null||l.call(e),a(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(R,{label:"Open drawer",onClick:()=>a(!0)}),t.jsx(D,{...e,isOpen:n,onClose:()=>a(!1),onClickToggle:i,onClickPrimaryButton:o})]})},play:async({canvasElement:e,args:n})=>{const i=await s(e).getByRole("button",{name:"Open drawer"});await d.click(i);const o=s(document.body).getByRole("dialog");r(o).toBeInTheDocument(),await d.click(s(o).getByRole("button",{name:"Cancel"})),r(n.onClickSecondaryButton).toHaveBeenCalled(),r(o).toBeInTheDocument(),await d.click(s(o).getByRole("button",{name:"Confirm"})),r(n.onClickPrimaryButton).toHaveBeenCalled(),await B(()=>{r(s(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},q={args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[n,a]=C.useState(e.isOpen),i=()=>{a(l=>!l)},o=()=>{var l;(l=e.onClickPrimaryButton)==null||l.call(e),a(!1)};return t.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:t.jsx(D,{...e,isOpen:n,onClose:()=>a(!1),onClickToggle:i,onClickPrimaryButton:o,content:t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:t.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[t.jsx(R,{label:"Open drawer",onClick:()=>a(!0)}),t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:n})=>{const a=s(e),i=await a.getByRole("button",{name:"Open drawer"});await d.click(i);const o=await B(()=>{const l=a.getByRole("region");return r(l).toHaveAttribute("data-position","responsive"),r(l).toHaveAttribute("data-open","true"),r(s(l).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),l});await d.click(s(o).getByRole("button",{name:"Cancel"})),r(n.onClickSecondaryButton).toHaveBeenCalled(),r(o).toHaveAttribute("data-open","true"),await d.click(s(o).getByRole("button",{name:"Confirm"})),r(n.onClickPrimaryButton).toHaveBeenCalled(),await B(()=>{r(o).toHaveAttribute("data-open","false")})}},N={args:{...c.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const n=s(e);await d.click(n.getByRole("button",{name:"Open drawer"}));const a=s(document.body).getByRole("dialog");r(a).toBeInTheDocument(),await d.keyboard(qe),await B(()=>{r(s(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},P={tags:["skip-ci"],args:{...c.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const n=s(e);await d.click(n.getByRole("button",{name:"Open drawer"}));const i=s(document.body).getByRole("dialog").previousElementSibling;r(i).not.toBeNull(),await d.click(i),await B(()=>{r(s(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},S={args:{...c.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}},play:async({canvasElement:e})=>{const n=s(e);await d.click(n.getByRole("button",{name:"Open drawer"}));const a=s(document.body).getByRole("dialog");r(a).toBeInTheDocument(),r(s(a).queryByRole("button",{name:"Confirm"})).not.toBeInTheDocument(),r(s(a).queryByRole("button",{name:"Cancel"})).not.toBeInTheDocument()}},j={args:{...c.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1},render:c.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered, and neither a title nor a custom header is required."}}},play:async({canvasElement:e,args:n})=>{const a=s(e);await d.click(a.getByRole("button",{name:"Open drawer"}));const i=s(document.body).getByRole("dialog");r(i).toBeInTheDocument(),r(s(i).queryByRole("heading")).not.toBeInTheDocument(),r(s(i).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await d.click(s(i).getByRole("button",{name:"Cancel"})),r(n.onClickSecondaryButton).toHaveBeenCalled(),r(i).toBeInTheDocument(),await d.click(s(i).getByRole("button",{name:"Confirm"})),r(n.onClickPrimaryButton).toHaveBeenCalled(),await B(()=>{r(s(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},_={args:{...c.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:e=>{const[n,a]=C.useState(e.isOpen),i=()=>{a(o=>!o)};return t.jsxs(t.Fragment,{children:[t.jsx(R,{label:"Open drawer",onClick:()=>a(!0)}),t.jsx(D,{...e,isOpen:n,onClose:()=>a(!1),onClickToggle:i,header:t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[t.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial",color:"var(--content-primary)"},children:"Custom Header"}),t.jsx(M,{name:"close",size:"m",onClick:()=>a(!1),"aria-label":"Close drawer"})]}),footer:t.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:t.jsx(R,{label:"Custom Action",variant:"primary"})})})]})}};var ae,ie,oe;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
      lineHeight: "20px",
      color: "var(--content-primary)"
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
}`,...(oe=(ie=c.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,re,le;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
        lineHeight: "20px",
        color: "var(--content-primary)"
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
            lineHeight: "20px",
            color: "var(--content-primary)"
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
}`,...(le=(re=q.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ue,ce,de;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ge;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ve,he,ye;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var we,be,fe;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(fe=(be=j.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,Ce,Be;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
          fontFamily: "arial",
          color: "var(--content-primary)"
        }}>
                Custom Header
              </span>
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
}`,...(Be=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};const Bt=["Default","Responsive","CloseOnEscape","CloseOnOverlayClick","WithoutFooter","WithoutHeader","CustomHeaderFooter"];export{N as CloseOnEscape,P as CloseOnOverlayClick,_ as CustomHeaderFooter,c as Default,q as Responsive,S as WithoutFooter,j as WithoutHeader,Bt as __namedExportsOrder,Ct as default};
