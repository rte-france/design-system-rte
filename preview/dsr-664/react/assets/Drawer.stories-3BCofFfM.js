import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as be}from"./keyboard-test.constants-By8W48aj.js";import{w as u,u as O,e as C,a as P}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import{B as R}from"./Button-CXM9p_L3.js";import{I as S}from"./IconButton-DcIeVO_H.js";import"./timepicker.constants-CzaknwQ-.js";import{B as fe,b as we,a as xe}from"./BaseHeader-CnFNCdkS.js";import{u as ye}from"./useAnimatedMount-_zPBpYOt.js";import{u as Oe,a as Ce}from"./useKeydownEscape-BZOC7nI2.js";import{u as Re}from"./useFocusTrap-C1fWr7pY.js";import{D as Ne}from"./Divider-BMotkXeQ.js";import{O as Ee}from"./Overlay-BI5SO8Nq.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C3W4NyCk.js";import"./Icon-Bc7wfgCv.js";import"./index-DSdvzt-y.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Ie=240,je=4,j={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."},De=[{condition:t=>!t.hasCustomHeader&&!t.hasTitle,issue:j.MISSING_HEADER_OR_TITLE},{condition:t=>!t.hasCustomFooter&&!t.hasPrimaryButtonLabel,issue:j.MISSING_FOOTER_OR_PRIMARY},{condition:t=>t.position==="responsive"&&!t.hasMainContent,issue:j.RESPONSIVE_NEEDS_MAIN_CONTENT},{condition:t=>t.position==="modal"&&t.hasMainContent,issue:j.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}];function qe(t){var a;return(a=De.find(({condition:n})=>n(t)))==null?void 0:a.issue}function Te(t,a){return!t&&!!a}function ke(t,a){return!t&&!!a}const Se=(t,a,n=0)=>t?`translateX(-${a+n}px)`:"none",Be="_drawer_1nljj_1",o={"drawer-responsive-container":"_drawer-responsive-container_1nljj_1",drawer:Be,"drawer-content":"_drawer-content_1nljj_44","drawer-toggle":"_drawer-toggle_1nljj_52","drawer-footer":"_drawer-footer_1nljj_61","drawer-header-content":"_drawer-header-content_1nljj_68"},_e=4,Y=({isCollapsible:t,iconToggleCloseContainerRef:a,isOpen:n,isAnimating:s,handleOnClickToggle:i,shouldDisplayDefaultHeader:c,id:v,title:f,icon:m,iconAppearance:w,onClose:d,isClosable:x,header:p,drawerLeftPosition:g})=>e.jsxs(e.Fragment,{children:[t&&e.jsx(S,{ref:a,className:o["drawer-toggle"],style:{transition:"none",transform:Se(s,g,_e)},name:n?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:i,"aria-label":`Close drawer ${v}`}),c?e.jsx(xe,{id:v,title:f,icon:m,iconAppearance:w,onClose:d,isClosable:x}):e.jsx(e.Fragment,{children:p})]}),$=({content:t,fixedHeader:a})=>e.jsx("div",{className:o["drawer-content"],"data-fixed-header":a,tabIndex:-1,children:t}),W=({fixedHeader:t,id:a,title:n,icon:s,iconAppearance:i,isCollapsible:c,iconToggleCloseContainerRef:v,isOpen:f,isAnimating:m,handleOnClickToggle:w,shouldDisplayDefaultHeader:d,onClose:x,isClosable:p,header:g,drawerLeftPosition:h,content:b})=>e.jsx(e.Fragment,{children:t?e.jsxs(e.Fragment,{children:[e.jsx(Y,{id:a,title:n,icon:s,iconAppearance:i,isCollapsible:c,iconToggleCloseContainerRef:v,isOpen:f,isAnimating:m,handleOnClickToggle:w,shouldDisplayDefaultHeader:!!d,onClose:x,isClosable:p,header:g,drawerLeftPosition:h}),e.jsx($,{content:b,fixedHeader:t})]}):e.jsxs("div",{className:o["drawer-header-content"],children:[e.jsx(Y,{id:a,title:n,icon:s,iconAppearance:i,isCollapsible:c,iconToggleCloseContainerRef:v,isOpen:f,isAnimating:m,handleOnClickToggle:w,shouldDisplayDefaultHeader:!!d,onClose:x,isClosable:p,header:g,drawerLeftPosition:h}),e.jsx($,{content:b})]})}),K=({fixedHeader:t,shouldDisplayDefaultFooter:a,primaryButtonLabel:n,secondaryButtonLabel:s,footer:i})=>e.jsx("div",{className:o["drawer-footer"],"data-fixed-header":t,children:a?e.jsx(we,{primaryButton:e.jsx(R,{label:n,variant:"primary"}),secondaryButton:s?e.jsx(R,{label:s,variant:"secondary"}):void 0}):i&&e.jsx(e.Fragment,{children:i})}),E=({id:t,title:a,icon:n,iconAppearance:s,isOpen:i,onClose:c,onClickToggle:v,closeOnOverlayClick:f=!1,primaryButtonLabel:m,secondaryButtonLabel:w,isCollapsible:d=!1,content:x,header:p,footer:g,position:h,width:b,children:U,fixedHeader:I,closeOnEscape:de=!1,isClosable:pe=!0,...A})=>{var G;const{shouldRender:F,isAnimating:r}=ye(i,Ie),N=y.useRef(null),B=y.useRef(null),_=y.useRef(null),V=((G=N.current)==null?void 0:G.clientWidth)||0;Oe(f&&h==="modal"?c:()=>{},N.current),Ce(de?c:()=>{}),Re(N.current,F);const ge=Te(p,a),ve=ke(g,m),H=qe({hasCustomHeader:p!==void 0,hasTitle:!!a,hasCustomFooter:g!==void 0,hasPrimaryButtonLabel:!!m,position:h,hasMainContent:!!U});if(H)return console.warn(H),null;const L=(he=0)=>r?`translateX(-${V+he}px)`:"none",M=()=>{i&&B.current&&B.current.focus(),!i&&_.current&&_.current.focus(),v()},z={fixedHeader:I,id:t,title:a,icon:n,iconAppearance:s,isCollapsible:d,iconToggleCloseContainerRef:_,isOpen:i,isAnimating:r,handleOnClickToggle:M,shouldDisplayDefaultHeader:!!ge,onClose:c,isClosable:pe,header:p,drawerLeftPosition:V,content:x},Q={fixedHeader:I,shouldDisplayDefaultFooter:!!ve,primaryButtonLabel:m,secondaryButtonLabel:w,footer:g};return e.jsx(e.Fragment,{children:h==="responsive"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:o["drawer-responsive-container"],children:[d&&e.jsx(S,{className:o["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:r?0:1,transform:L(je)},name:"right-panel-open",size:"l",variant:"primary",onClick:M,"aria-label":`Close drawer ${t}`}),e.jsx(Ne,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:r?"visible":"hidden",transform:L()}}),e.jsxs("div",{className:o.drawer,ref:N,"data-open":r,role:"region","aria-labelledby":`${t}-drawer-title`,"data-position":h,"data-fixed-header":I,style:{width:b,transform:r?"none":`translateX(${b||"100%"})`,visibility:r?"visible":"hidden"},...A,children:[e.jsx(W,{...z}),e.jsx(K,{...Q})]}),e.jsx("div",{className:o["drawer-children"],"data-open":r,style:{height:"100%",transition:"margin-right 240ms ease-out",marginRight:r?b:0,maxHeight:r?"100vh":void 0,overflowY:r?"auto":void 0},children:U})]})}):e.jsxs(e.Fragment,{children:[d&&e.jsx(S,{ref:B,className:o["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:r?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:M,"aria-label":`Close drawer ${t}`}),F&&e.jsxs(Ee,{freezeNavigation:!0,children:[e.jsx(fe,{isAnimating:r}),e.jsxs("div",{ref:N,className:o.drawer,"data-open":r,"data-fixed-header":I,role:"dialog","aria-modal":"true","aria-labelledby":`${t}-drawer-title`,style:{width:b},...A,children:[e.jsx(W,{...z}),e.jsx(K,{...Q})]})]})]})})};E.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const it={title:"Composants/Drawer/Drawer",component:E,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"}}},l={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:t=>{const[a,n]=y.useState(t.isOpen),s=()=>{n(i=>!i)};return e.jsxs(e.Fragment,{children:[e.jsx(R,{label:"Open drawer",onClick:()=>n(!0)}),e.jsx(E,{...t,isOpen:a,onClose:()=>n(!1),onClickToggle:s})]})},play:async({canvasElement:t})=>{const n=await u(t).getByRole("button",{name:"Open drawer"});await O.click(n);const s=u(document.body).getByRole("dialog");C(s).toBeInTheDocument()}},D={args:{...l.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:t=>{const[a,n]=y.useState(t.isOpen),s=()=>{n(i=>!i)};return e.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:e.jsx(E,{...t,isOpen:a,onClose:()=>n(!1),onClickToggle:s,content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[e.jsx(R,{label:"Open drawer",onClick:()=>n(!0)}),e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:t})=>{const a=u(t),n=await a.getByRole("button",{name:"Open drawer"});await O.click(n),await P(()=>{const s=a.getByRole("region");C(s).toBeInTheDocument()})}},q={args:{...l.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:l.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:t})=>{const a=u(t);await O.click(a.getByRole("button",{name:"Open drawer"}));const n=u(document.body).getByRole("dialog");C(n).toBeInTheDocument(),await O.keyboard(be),await P(()=>{C(u(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},T={tags:["skip-ci"],args:{...l.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:l.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:t})=>{const a=u(t);await O.click(a.getByRole("button",{name:"Open drawer"}));const s=u(document.body).getByRole("dialog").previousElementSibling;C(s).not.toBeNull(),await O.click(s),await P(()=>{C(u(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},k={args:{...l.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:t=>{const[a,n]=y.useState(t.isOpen),s=()=>{n(i=>!i)};return e.jsxs(e.Fragment,{children:[e.jsx(R,{label:"Open drawer",onClick:()=>n(!0)}),e.jsx(E,{...t,isOpen:a,onClose:()=>n(!1),onClickToggle:s,header:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial",color:"var(--content-primary)"},children:"Custom Header"}),e.jsx(S,{name:"close",size:"m",onClick:()=>n(!1),"aria-label":"Close drawer"})]}),footer:e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:e.jsx(R,{label:"Custom Action",variant:"primary"})})})]})}};var X,J,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    return <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", {
      name: "Open drawer"
    });
    await userEvent.click(openButton);
    const drawer = within(document.body).getByRole("dialog");
    expect(drawer).toBeInTheDocument();
  }
}`,...(Z=(J=l.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var ee,te,ae;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
    return <div style={{
      border: "1px solid #ccc",
      width: "600px",
      height: "500px"
    }}>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} content={<span style={{
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
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", {
      name: "Open drawer"
    });
    await userEvent.click(openButton);
    await waitFor(() => {
      const drawer = canvas.getByRole("region");
      expect(drawer).toBeInTheDocument();
    });
  }
}`,...(ae=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,ie;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(se=q.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,oe,le;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ue,ce,me;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const rt=["Default","Responsive","CloseOnEscape","CloseOnOverlayClick","CustomHeaderFooter"];export{q as CloseOnEscape,T as CloseOnOverlayClick,k as CustomHeaderFooter,l as Default,D as Responsive,rt as __namedExportsOrder,it as default};
