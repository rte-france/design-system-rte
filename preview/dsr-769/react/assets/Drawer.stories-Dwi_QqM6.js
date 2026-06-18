import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as fe}from"./keyboard-test.constants-DRUxacrk.js";import{w as l,u as d,e as o,a as O,f as Y}from"./index-4rjIhT2C.js";import{r as R}from"./index-G8LIXM5I.js";import{B}from"./Button-CXM9p_L3.js";import{I as S}from"./IconButton-DcIeVO_H.js";import"./timepicker.constants-V9Xrpx_a.js";import{u as xe,B as Ce,b as Re,a as Be}from"./useFreezeNavigation-CmGNiub4.js";import{u as Oe}from"./useAnimatedMount-_zPBpYOt.js";import{u as ke}from"./useFocusTrap-C_kwluQD.js";import{u as Ee}from"./useKeydownEscape-mLuzHv9M.js";import{D as Ie}from"./Divider-BMotkXeQ.js";import{O as Ne}from"./Overlay-BdeF33Ax.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C3W4NyCk.js";import"./Icon-Bc7wfgCv.js";import"./index-DSdvzt-y.js";import"./icon.constants-CvX5SV3k.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const De=240,qe=4,N={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},Te=[{condition:t=>!t.hasCustomHeader&&!t.hasTitle,issue:N.MISSING_HEADER_OR_TITLE},{condition:t=>!t.hasCustomFooter&&!t.hasPrimaryButtonLabel,issue:N.MISSING_FOOTER_OR_PRIMARY},{condition:t=>t.position==="responsive"&&!t.hasMainContent,issue:N.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:t=>t.position==="modal"&&t.hasMainContent,issue:N.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function Pe(t){var n;return(n=Te.find(({condition:a})=>a(t)))==null?void 0:n.issue}function Se(t,n){return!t&&!!n}function je(t,n){return!t&&!!n}const _e=(t,n,a=0)=>t?`translateX(-${n+a}px)`:"none",Me="_drawer_gx6bm_1",c={"drawer-responsive-container":"_drawer-responsive-container_gx6bm_1",drawer:Me,"drawer-content":"_drawer-content_gx6bm_48","drawer-toggle":"_drawer-toggle_gx6bm_56","drawer-footer":"_drawer-footer_gx6bm_65","drawer-header-content":"_drawer-header-content_gx6bm_72"},Ae=4,$=({isCollapsible:t,iconToggleCloseContainerRef:n,isOpen:a,isAnimating:r,handleOnClickToggle:i,shouldDisplayDefaultHeader:s,id:p,title:f,icon:g,iconAppearance:x,onClose:v,isClosable:C,header:h,drawerLeftPosition:b})=>e.jsxs(e.Fragment,{children:[t&&e.jsx(S,{ref:n,className:c["drawer-toggle"],style:{transition:"none",transform:_e(r,b,Ae)},name:a?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:i,"aria-label":`Close drawer ${p}`}),s?e.jsx(Be,{id:p,title:f,icon:g,iconAppearance:x,onClose:v,isClosable:C}):e.jsx(e.Fragment,{children:h})]}),W=({content:t,fixedHeader:n})=>e.jsx("div",{className:c["drawer-content"],"data-fixed-header":n,tabIndex:-1,children:t}),K=({fixedHeader:t,id:n,title:a,icon:r,iconAppearance:i,isCollapsible:s,iconToggleCloseContainerRef:p,isOpen:f,isAnimating:g,handleOnClickToggle:x,shouldDisplayDefaultHeader:v,onClose:C,isClosable:h,header:b,drawerLeftPosition:y,content:w})=>e.jsx(e.Fragment,{children:t?e.jsxs(e.Fragment,{children:[e.jsx($,{id:n,title:a,icon:r,iconAppearance:i,isCollapsible:s,iconToggleCloseContainerRef:p,isOpen:f,isAnimating:g,handleOnClickToggle:x,shouldDisplayDefaultHeader:!!v,onClose:C,isClosable:h,header:b,drawerLeftPosition:y}),e.jsx(W,{content:w,fixedHeader:t})]}):e.jsxs("div",{className:c["drawer-header-content"],children:[e.jsx($,{id:n,title:a,icon:r,iconAppearance:i,isCollapsible:s,iconToggleCloseContainerRef:p,isOpen:f,isAnimating:g,handleOnClickToggle:x,shouldDisplayDefaultHeader:!!v,onClose:C,isClosable:h,header:b,drawerLeftPosition:y}),e.jsx(W,{content:w})]})}),X=({fixedHeader:t,shouldDisplayDefaultFooter:n,primaryButtonLabel:a,secondaryButtonLabel:r,footer:i,onClickPrimaryButton:s,onClickSecondaryButton:p})=>e.jsx("div",{className:c["drawer-footer"],"data-fixed-header":t,children:n?e.jsx(Re,{primaryButton:e.jsx(B,{label:a,variant:"primary",onClick:s}),secondaryButton:r?e.jsx(B,{label:r,variant:"secondary",onClick:p}):void 0}):i&&e.jsx(e.Fragment,{children:i})}),k=({id:t,title:n,icon:a,iconAppearance:r,isOpen:i,onClose:s,onClickToggle:p,closeOnOverlayClick:f=!1,primaryButtonLabel:g,secondaryButtonLabel:x,isCollapsible:v=!1,content:C,header:h,footer:b,position:y,width:w,children:A,fixedHeader:E,closeOnEscape:pe=!1,isClosable:ge=!0,onClickPrimaryButton:ve,onClickSecondaryButton:he,...H})=>{var G;const{shouldRender:F,isAnimating:u}=Oe(i,De),I=R.useRef(null),j=R.useRef(null),_=R.useRef(null),U=((G=I.current)==null?void 0:G.clientWidth)||0;Ee(pe?s:()=>{}),ke(I.current,F),xe(y==="modal"&&i);const be=Se(h,n),ye=je(b,g),V=Pe({hasCustomHeader:h!==void 0,hasTitle:!!n,hasCustomFooter:b!==void 0,hasPrimaryButtonLabel:!!g,position:y,hasMainContent:!!A});if(V)return console.warn(V),null;const L=(we=0)=>u?`translateX(-${U+we}px)`:"none",M=()=>{i&&j.current&&j.current.focus(),!i&&_.current&&_.current.focus(),p()},z={fixedHeader:E,id:t,title:n,icon:a,iconAppearance:r,isCollapsible:v,iconToggleCloseContainerRef:_,isOpen:i,isAnimating:u,handleOnClickToggle:M,shouldDisplayDefaultHeader:!!be,onClose:s,isClosable:ge,header:h,drawerLeftPosition:U,content:C},Q={fixedHeader:E,shouldDisplayDefaultFooter:!!ye,primaryButtonLabel:g,secondaryButtonLabel:x,footer:b,onClickPrimaryButton:ve,onClickSecondaryButton:he};return e.jsx(e.Fragment,{children:y==="responsive"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:c["drawer-responsive-container"],children:[v&&e.jsx(S,{className:c["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:u?0:1,transform:L(qe)},name:"right-panel-open",size:"l",variant:"primary",onClick:M,"aria-label":`Close drawer ${t}`}),e.jsx(Ie,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:u?"visible":"hidden",transform:L()}}),e.jsxs("div",{className:c.drawer,ref:I,"data-open":u,role:"region","aria-labelledby":`${t}-drawer-title`,"data-position":y,"data-fixed-header":E,style:{width:w,transform:u?"none":`translateX(${w||"100%"})`,visibility:u?"visible":"hidden"},...H,children:[e.jsx(K,{...z}),e.jsx(X,{...Q})]}),e.jsx("div",{className:c["drawer-children"],"data-open":u,style:{height:"100%",transition:"margin-right 240ms ease-out",marginRight:u?w:0,maxHeight:u?"100vh":void 0,overflowY:u?"auto":void 0},children:A})]})}):e.jsxs(e.Fragment,{children:[v&&e.jsx(S,{ref:j,className:c["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:u?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:M,"aria-label":`Close drawer ${t}`}),F&&e.jsxs(Ne,{children:[e.jsx(Ce,{isAnimating:u,onClick:f?s:void 0}),e.jsxs("div",{ref:I,className:c.drawer,"data-open":u,"data-fixed-header":E,"data-position":y,role:"dialog","aria-modal":"true","aria-labelledby":`${t}-drawer-title`,style:{width:w},...H,children:[e.jsx(K,{...z}),e.jsx(X,{...Q})]})]})]})})};k.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const ct={title:"Composants/Drawer/Drawer",component:k,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},m={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:Y(),onClickSecondaryButton:Y(),content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:t=>{const[n,a]=R.useState(t.isOpen),r=()=>{a(s=>!s)},i=()=>{var s;(s=t.onClickPrimaryButton)==null||s.call(t),a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{label:"Open drawer",onClick:()=>a(!0)}),e.jsx(k,{...t,isOpen:n,onClose:()=>a(!1),onClickToggle:r,onClickPrimaryButton:i})]})},play:async({canvasElement:t,args:n})=>{const r=await l(t).getByRole("button",{name:"Open drawer"});await d.click(r);const i=l(document.body).getByRole("dialog");o(i).toBeInTheDocument(),await d.click(l(i).getByRole("button",{name:"Cancel"})),o(n.onClickSecondaryButton).toHaveBeenCalled(),o(i).toBeInTheDocument(),await d.click(l(i).getByRole("button",{name:"Confirm"})),o(n.onClickPrimaryButton).toHaveBeenCalled(),await O(()=>{o(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},D={args:{...m.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:t=>{const[n,a]=R.useState(t.isOpen),r=()=>{a(s=>!s)},i=()=>{var s;(s=t.onClickPrimaryButton)==null||s.call(t),a(!1)};return e.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:e.jsx(k,{...t,isOpen:n,onClose:()=>a(!1),onClickToggle:r,onClickPrimaryButton:i,content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[e.jsx(B,{label:"Open drawer",onClick:()=>a(!0)}),e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:t,args:n})=>{const a=l(t),r=await a.getByRole("button",{name:"Open drawer"});await d.click(r);const i=await O(()=>{const s=a.getByRole("region");return o(s).toHaveAttribute("data-position","responsive"),o(s).toHaveAttribute("data-open","true"),o(l(s).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),s});await d.click(l(i).getByRole("button",{name:"Cancel"})),o(n.onClickSecondaryButton).toHaveBeenCalled(),o(i).toHaveAttribute("data-open","true"),await d.click(l(i).getByRole("button",{name:"Confirm"})),o(n.onClickPrimaryButton).toHaveBeenCalled(),await O(()=>{o(i).toHaveAttribute("data-open","false")})}},q={args:{...m.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:m.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:t})=>{const n=l(t);await d.click(n.getByRole("button",{name:"Open drawer"}));const a=l(document.body).getByRole("dialog");o(a).toBeInTheDocument(),await d.keyboard(fe),await O(()=>{o(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},T={tags:["skip-ci"],args:{...m.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:m.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:t})=>{const n=l(t);await d.click(n.getByRole("button",{name:"Open drawer"}));const r=l(document.body).getByRole("dialog").previousElementSibling;o(r).not.toBeNull(),await d.click(r),await O(()=>{o(l(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},P={args:{...m.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:t=>{const[n,a]=R.useState(t.isOpen),r=()=>{a(i=>!i)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{label:"Open drawer",onClick:()=>a(!0)}),e.jsx(k,{...t,isOpen:n,onClose:()=>a(!1),onClickToggle:r,header:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial",color:"var(--content-primary)"},children:"Custom Header"}),e.jsx(S,{name:"close",size:"m",onClick:()=>a(!1),"aria-label":"Close drawer"})]}),footer:e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:e.jsx(B,{label:"Custom Action",variant:"primary"})})})]})}};var J,Z,ee;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,se,re;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(se=q.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ue;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ce,me,de;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(me=P.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};const mt=["Default","Responsive","CloseOnEscape","CloseOnOverlayClick","CustomHeaderFooter"];export{q as CloseOnEscape,T as CloseOnOverlayClick,P as CustomHeaderFooter,m as Default,D as Responsive,mt as __namedExportsOrder,ct as default};
