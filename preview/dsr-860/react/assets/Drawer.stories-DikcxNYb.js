import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as ke}from"./keyboard-test.constants-By8W48aj.js";import{w as l,u as c,e as r,a as B,f as K}from"./index-4rjIhT2C.js";import{r as C}from"./index-G8LIXM5I.js";import{B as R}from"./Button-KJfdYR4G.js";import{I as _}from"./IconButton-D7Ub3mhB.js";import"./timepicker.constants-CynrC_9x.js";import{u as Ie,B as Ee,b as De,a as Te}from"./useFreezeNavigation-DSqLRZFh.js";import{u as Ne}from"./useAnimatedMount-_zPBpYOt.js";import{u as qe}from"./useFocusTrap-D2ZnoMa2.js";import{u as Pe}from"./useKeydownEscape-mLuzHv9M.js";import{D as Se}from"./Divider-BMotkXeQ.js";import{O as je}from"./Overlay-BdeF33Ax.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const _e=240,He=4,T={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},Me=[{condition:e=>!!e.showHeader&&!e.hasCustomHeader&&!e.hasTitle,issue:T.MISSING_HEADER_OR_TITLE},{condition:e=>!e.hasCustomFooter&&!e.hasPrimaryButtonLabel,issue:T.MISSING_FOOTER_OR_PRIMARY},{condition:e=>e.position==="responsive"&&!e.hasMainContent,issue:T.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:e=>e.position==="modal"&&e.hasMainContent,issue:T.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function Ae(e){var n;return(n=Me.find(({condition:a})=>a(e)))==null?void 0:n.issue}function Fe(e,n){return!e&&!!n}function Ue(e,n){return!e&&!!n}const Ve=(e,n,a=0)=>e?`translateX(-${n+a}px)`:"none",Le="_drawer_gx6bm_1",m={"drawer-responsive-container":"_drawer-responsive-container_gx6bm_1",drawer:Le,"drawer-content":"_drawer-content_gx6bm_48","drawer-toggle":"_drawer-toggle_gx6bm_56","drawer-footer":"_drawer-footer_gx6bm_65","drawer-header-content":"_drawer-header-content_gx6bm_72"},ze=4,X=({isCollapsible:e,iconToggleCloseContainerRef:n,isOpen:a,isAnimating:i,handleOnClickToggle:s,shouldDisplayDefaultHeader:o,showHeader:g,id:f,title:v,icon:O,iconAppearance:h,onClose:k,isClosable:w,header:y,drawerLeftPosition:p})=>t.jsxs(t.Fragment,{children:[e&&t.jsx(_,{ref:n,className:m["drawer-toggle"],style:{transition:"none",transform:Ve(i,p,ze)},name:a?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:s,"aria-label":`Close drawer ${f}`}),g&&(o?t.jsx(Te,{id:f,title:v,icon:O,iconAppearance:h,onClose:k,isClosable:w}):t.jsx(t.Fragment,{children:y}))]}),J=({content:e,fixedHeader:n})=>t.jsx("div",{className:m["drawer-content"],"data-fixed-header":n,tabIndex:-1,children:e}),Z=({fixedHeader:e,id:n,title:a,icon:i,iconAppearance:s,isCollapsible:o,iconToggleCloseContainerRef:g,isOpen:f,isAnimating:v,handleOnClickToggle:O,shouldDisplayDefaultHeader:h,showHeader:k,onClose:w,isClosable:y,header:p,drawerLeftPosition:x,content:I})=>{const b={id:n,title:a,icon:i,iconAppearance:s,isCollapsible:o,iconToggleCloseContainerRef:g,isOpen:f,isAnimating:v,handleOnClickToggle:O,shouldDisplayDefaultHeader:!!h,showHeader:k,onClose:w,isClosable:y,header:p,drawerLeftPosition:x};return e?t.jsxs(t.Fragment,{children:[t.jsx(X,{...b}),t.jsx(J,{content:I,fixedHeader:e})]}):t.jsxs("div",{className:m["drawer-header-content"],children:[t.jsx(X,{...b}),t.jsx(J,{content:I})]})},ee=({fixedHeader:e,shouldDisplayDefaultFooter:n,primaryButtonLabel:a,secondaryButtonLabel:i,footer:s,onClickPrimaryButton:o,onClickSecondaryButton:g})=>t.jsx("div",{className:m["drawer-footer"],"data-fixed-header":e,children:n?t.jsx(De,{primaryButton:t.jsx(R,{label:a,variant:"primary",onClick:o}),secondaryButton:i?t.jsx(R,{label:i,variant:"secondary",onClick:g}):void 0}):s&&t.jsx(t.Fragment,{children:s})}),E=({id:e,title:n,icon:a,iconAppearance:i,isOpen:s,onClose:o,onClickToggle:g,closeOnOverlayClick:f=!1,primaryButtonLabel:v,secondaryButtonLabel:O,isCollapsible:h=!1,content:k,header:w,footer:y,position:p,width:x,children:I,fixedHeader:b,showHeader:H=!0,closeOnEscape:be=!1,isClosable:fe=!0,onClickPrimaryButton:xe,onClickSecondaryButton:Ce,...U})=>{var $;const{shouldRender:V,isAnimating:u}=Ne(s,_e),D=C.useRef(null),M=C.useRef(null),A=C.useRef(null),L=(($=D.current)==null?void 0:$.clientWidth)||0;Pe(be?o:()=>{}),qe(D.current,V),Ie(p==="modal"&&s);const Be=Fe(w,n),Re=Ue(y,v),z=Ae({hasCustomHeader:w!==void 0,hasTitle:!!n,hasCustomFooter:y!==void 0,hasPrimaryButtonLabel:!!v,position:p,hasMainContent:!!I,showHeader:H});if(z)return console.warn(z),null;const Q=(Oe=0)=>u?`translateX(-${L+Oe}px)`:"none",F=()=>{s&&M.current&&M.current.focus(),!s&&A.current&&A.current.focus(),g()},G=H?`${e}-drawer-title`:void 0,W={fixedHeader:b,id:e,title:n,icon:a,iconAppearance:i,isCollapsible:h,iconToggleCloseContainerRef:A,isOpen:s,isAnimating:u,handleOnClickToggle:F,shouldDisplayDefaultHeader:!!Be,showHeader:H,onClose:o,isClosable:fe,header:w,drawerLeftPosition:L,content:k},Y={fixedHeader:b,shouldDisplayDefaultFooter:!!Re,primaryButtonLabel:v,secondaryButtonLabel:O,footer:y,onClickPrimaryButton:xe,onClickSecondaryButton:Ce};return t.jsx(t.Fragment,{children:p==="responsive"?t.jsx(t.Fragment,{children:t.jsxs("div",{className:m["drawer-responsive-container"],children:[h&&t.jsx(_,{className:m["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:u?0:1,transform:Q(He)},name:"right-panel-open",size:"l",variant:"primary",onClick:F,"aria-label":`Close drawer ${e}`}),t.jsx(Se,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:u?"visible":"hidden",transform:Q()}}),t.jsxs("div",{className:m.drawer,ref:D,"data-open":u,role:"region","aria-labelledby":G,"data-position":p,"data-fixed-header":b,style:{width:x,transform:u?"none":`translateX(${x||"100%"})`,visibility:u?"visible":"hidden"},...U,children:[t.jsx(Z,{...W}),t.jsx(ee,{...Y})]}),t.jsx("div",{className:m["drawer-children"],"data-open":u,style:{height:"100%",transition:"margin-right 240ms ease-out",marginRight:u?x:0,maxHeight:u?"100vh":void 0,overflowY:u?"auto":void 0},children:I})]})}):t.jsxs(t.Fragment,{children:[h&&t.jsx(_,{ref:M,className:m["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:u?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:F,"aria-label":`Close drawer ${e}`}),V&&t.jsxs(je,{children:[t.jsx(Ee,{isAnimating:u,onClick:f?o:void 0}),t.jsxs("div",{ref:D,className:m.drawer,"data-open":u,"data-fixed-header":b,"data-position":p,role:"dialog","aria-modal":"true","aria-labelledby":G,style:{width:x},...U,children:[t.jsx(Z,{...W}),t.jsx(ee,{...Y})]})]})]})})};E.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},showHeader:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const wt={title:"Composants/Drawer/Drawer",component:E,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},d={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:K(),onClickSecondaryButton:K(),content:t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[n,a]=C.useState(e.isOpen),i=()=>{a(o=>!o)},s=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),a(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(R,{label:"Open drawer",onClick:()=>a(!0)}),t.jsx(E,{...e,isOpen:n,onClose:()=>a(!1),onClickToggle:i,onClickPrimaryButton:s})]})},play:async({canvasElement:e,args:n})=>{const i=await l(e).getByRole("button",{name:"Open drawer"});await c.click(i);const s=l(document.body).getByRole("dialog");r(s).toBeInTheDocument(),await c.click(l(s).getByRole("button",{name:"Cancel"})),r(n.onClickSecondaryButton).toHaveBeenCalled(),r(s).toBeInTheDocument(),await c.click(l(s).getByRole("button",{name:"Confirm"})),r(n.onClickPrimaryButton).toHaveBeenCalled(),await B(()=>{r(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},N={args:{...d.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[n,a]=C.useState(e.isOpen),i=()=>{a(o=>!o)},s=()=>{var o;(o=e.onClickPrimaryButton)==null||o.call(e),a(!1)};return t.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:t.jsx(E,{...e,isOpen:n,onClose:()=>a(!1),onClickToggle:i,onClickPrimaryButton:s,content:t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:t.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[t.jsx(R,{label:"Open drawer",onClick:()=>a(!0)}),t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:n})=>{const a=l(e),i=await a.getByRole("button",{name:"Open drawer"});await c.click(i);const s=await B(()=>{const o=a.getByRole("region");return r(o).toHaveAttribute("data-position","responsive"),r(o).toHaveAttribute("data-open","true"),r(l(o).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),o});await c.click(l(s).getByRole("button",{name:"Cancel"})),r(n.onClickSecondaryButton).toHaveBeenCalled(),r(s).toHaveAttribute("data-open","true"),await c.click(l(s).getByRole("button",{name:"Confirm"})),r(n.onClickPrimaryButton).toHaveBeenCalled(),await B(()=>{r(s).toHaveAttribute("data-open","false")})}},q={args:{...d.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:d.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const n=l(e);await c.click(n.getByRole("button",{name:"Open drawer"}));const a=l(document.body).getByRole("dialog");r(a).toBeInTheDocument(),await c.keyboard(ke),await B(()=>{r(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},P={tags:["skip-ci"],args:{...d.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:d.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const n=l(e);await c.click(n.getByRole("button",{name:"Open drawer"}));const i=l(document.body).getByRole("dialog").previousElementSibling;r(i).not.toBeNull(),await c.click(i),await B(()=>{r(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},S={args:{...d.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1},render:d.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered, and neither a title nor a custom header is required."}}},play:async({canvasElement:e,args:n})=>{const a=l(e);await c.click(a.getByRole("button",{name:"Open drawer"}));const i=l(document.body).getByRole("dialog");r(i).toBeInTheDocument(),r(l(i).queryByRole("heading")).not.toBeInTheDocument(),r(l(i).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await c.click(l(i).getByRole("button",{name:"Cancel"})),r(n.onClickSecondaryButton).toHaveBeenCalled(),r(i).toBeInTheDocument(),await c.click(l(i).getByRole("button",{name:"Confirm"})),r(n.onClickPrimaryButton).toHaveBeenCalled(),await B(()=>{r(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},j={args:{...d.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:e=>{const[n,a]=C.useState(e.isOpen),i=()=>{a(s=>!s)};return t.jsxs(t.Fragment,{children:[t.jsx(R,{label:"Open drawer",onClick:()=>a(!0)}),t.jsx(E,{...e,isOpen:n,onClose:()=>a(!1),onClickToggle:i,header:t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[t.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial"},children:"Custom Header"}),t.jsx(_,{name:"close",size:"m",onClick:()=>a(!1),"aria-label":"Close drawer"})]}),footer:t.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:t.jsx(R,{label:"Custom Action",variant:"primary"})})})]})}};var te,ne,ae;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,se,oe;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(se=N.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,le,ue;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ue=(le=q.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ce,de,me;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ge,ve;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ve=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var he,we,ye;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(we=j.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};const yt=["Default","Responsive","CloseOnEscape","CloseOnOverlayClick","WithoutHeader","CustomHeaderFooter"];export{q as CloseOnEscape,P as CloseOnOverlayClick,j as CustomHeaderFooter,d as Default,N as Responsive,S as WithoutHeader,yt as __namedExportsOrder,wt as default};
