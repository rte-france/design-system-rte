import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as he}from"./keyboard-test.constants-By8W48aj.js";import{w as u,u as m,e as d,a as S}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{B as p}from"./Button-CMRW5oAT.js";import{I as N}from"./IconButton-O5Q6mfOY.js";import{B as be,b as fe,a as we}from"./BaseHeader-ByTmVxcm.js";import{u as xe}from"./useAnimatedMount-_zPBpYOt.js";import{u as ye,a as Ce,b as Oe}from"./useKeydownEscape-CE1Mjiyw.js";import{D as Re}from"./Divider-BMotkXeQ.js";import{O as Ne}from"./Overlay-BI5SO8Nq.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-b6ITl72-.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";import"./dom.constants-41SiyeDe.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Ee=240,Q=4,x={MISSING_HEADER_OR_TITLE:"Drawer: You must provide either a title or a custom header.",MISSING_FOOTER_OR_PRIMARY:"Drawer: You must provide either a primaryButtonLabel or a custom footer.",RESPONSIVE_NEEDS_MAIN_CONTENT:"Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer.",MODAL_MUST_NOT_HAVE_MAIN_CONTENT:"Drawer: You should not provide children when using modal position."};function Ie(t){if(!t.hasCustomHeader&&!t.hasTitle)return x.MISSING_HEADER_OR_TITLE;if(!t.hasCustomFooter&&!t.hasPrimaryButtonLabel)return x.MISSING_FOOTER_OR_PRIMARY;if(t.position==="responsive"&&!t.hasMainContent)return x.RESPONSIVE_NEEDS_MAIN_CONTENT;if(t.position==="modal"&&t.hasMainContent)return x.MODAL_MUST_NOT_HAVE_MAIN_CONTENT}function je(t,a){return!t&&!!a}function qe(t,a){return!t&&!!a}const Te="_drawer_1nljj_1",o={"drawer-responsive-container":"_drawer-responsive-container_1nljj_1",drawer:Te,"drawer-content":"_drawer-content_1nljj_44","drawer-toggle":"_drawer-toggle_1nljj_52","drawer-footer":"_drawer-footer_1nljj_61","drawer-header-content":"_drawer-header-content_1nljj_68"},h=({id:t,title:a,icon:n,iconAppearance:s,isOpen:r,onClose:E,onClickToggle:oe,closeOnOverlayClick:le=!1,primaryButtonLabel:I,secondaryButtonLabel:_,isCollapsible:j=!1,content:ue,header:q,footer:b,position:f,width:w,children:M,fixedHeader:g,closeOnEscape:ce=!1,isClosable:me=!0,...P})=>{var z;const{shouldRender:U,isAnimating:i}=xe(r,Ee),v=c.useRef(null),T=c.useRef(null),D=c.useRef(null),de=((z=v.current)==null?void 0:z.clientWidth)||0;ye(le&&f==="modal"?E:()=>{},v.current),Ce(ce?E:()=>{}),Oe(v.current,U);const pe=je(q,a),ge=qe(b,I),A=Ie({hasCustomHeader:q!==void 0,hasTitle:!!a,hasCustomFooter:b!==void 0,hasPrimaryButtonLabel:!!I,position:f,hasMainContent:!!M});if(A)return console.warn(A),null;const k=(ve=0)=>i?`translateX(-${de+ve}px)`:"none",B=()=>{r&&T.current&&T.current.focus(),!r&&D.current&&D.current.focus(),oe()},F=()=>e.jsxs(e.Fragment,{children:[j&&e.jsx(N,{ref:D,className:o["drawer-toggle"],style:{transform:k(Q)},name:r?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:B,"aria-label":`Close drawer ${t}`}),pe?e.jsx(we,{id:t,title:a,icon:n,iconAppearance:s,onClose:E,isClosable:me}):e.jsx(e.Fragment,{children:q})]}),V=()=>e.jsx("div",{className:o["drawer-content"],"data-fixed-header":g,tabIndex:-1,children:ue}),H=()=>e.jsx(e.Fragment,{children:g?e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsx(V,{})]}):e.jsxs("div",{className:o["drawer-header-content"],children:[e.jsx(F,{}),e.jsx(V,{})]})}),L=()=>e.jsx("div",{className:o["drawer-footer"],"data-fixed-header":g,children:ge?e.jsx(fe,{primaryButton:e.jsx(p,{label:I,variant:"primary"}),secondaryButton:_?e.jsx(p,{label:_,variant:"secondary"}):void 0}):b&&e.jsx(e.Fragment,{children:b})});return e.jsx(e.Fragment,{children:f==="responsive"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:o["drawer-responsive-container"],children:[j&&e.jsx(N,{className:o["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:i?0:1,transform:k(Q)},name:"right-panel-open",size:"l",variant:"primary",onClick:B,"aria-label":`Close drawer ${t}`}),e.jsx(Re,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:i?"visible":"hidden",transform:k()}}),e.jsxs("div",{className:o.drawer,ref:v,"data-open":i,role:"region","aria-labelledby":`${t}-drawer-title`,"data-position":f,"data-fixed-header":g,style:{width:w,transform:i?"none":`translateX(${w||"100%"})`,visibility:i?"visible":"hidden"},...P,children:[e.jsx(H,{}),e.jsx(L,{})]}),e.jsx("div",{className:o["drawer-children"],"data-open":i,style:{height:"100%",transition:"margin-right 240ms ease-out",marginRight:i?w:0,maxHeight:i?"100vh":void 0,overflowY:i?"auto":void 0},children:M})]})}):e.jsxs(e.Fragment,{children:[j&&e.jsx(N,{ref:T,className:o["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:i?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:B,"aria-label":`Close drawer ${t}`}),U&&e.jsxs(Ne,{freezeNavigation:!0,children:[e.jsx(be,{isAnimating:i}),e.jsxs("div",{ref:v,className:o.drawer,"data-open":i,"data-fixed-header":g,role:"dialog","aria-modal":"true","aria-labelledby":`${t}-drawer-title`,style:{width:w},...P,children:[e.jsx(H,{}),e.jsx(L,{})]})]})]})})};h.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const Je={title:"Composants/Drawer",component:h,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"}}},l={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:t=>{const[a,n]=c.useState(t.isOpen),s=()=>{n(r=>!r)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"Open drawer",onClick:()=>n(!0)}),e.jsx(h,{...t,isOpen:a,onClose:()=>n(!1),onClickToggle:s})]})},play:async({canvasElement:t})=>{const n=await u(t).getByRole("button",{name:"Open drawer"});await m.click(n);const s=u(document.body).getByRole("dialog");d(s).toBeInTheDocument()}},y={args:{...l.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:t=>{const[a,n]=c.useState(t.isOpen),s=()=>{n(r=>!r)};return e.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:e.jsx(h,{...t,isOpen:a,onClose:()=>n(!1),onClickToggle:s,content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[e.jsx(p,{label:"Open drawer",onClick:()=>n(!0)}),e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:t})=>{const a=u(t),n=await a.getByRole("button",{name:"Open drawer"});await m.click(n),await S(()=>{const s=a.getByRole("region");d(s).toBeInTheDocument()})}},C={args:{...l.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:l.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:t})=>{const a=u(t);await m.click(a.getByRole("button",{name:"Open drawer"}));const n=u(document.body).getByRole("dialog");d(n).toBeInTheDocument(),await m.keyboard(he),await S(()=>{d(u(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},O={args:{...l.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:l.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:t})=>{const a=u(t);await m.click(a.getByRole("button",{name:"Open drawer"}));const s=u(document.body).getByRole("dialog").previousElementSibling;d(s).not.toBeNull(),await m.click(s),await S(()=>{d(u(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},R={args:{...l.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:t=>{const[a,n]=c.useState(t.isOpen),s=()=>{n(r=>!r)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"Open drawer",onClick:()=>n(!0)}),e.jsx(h,{...t,isOpen:a,onClose:()=>n(!1),onClickToggle:s,header:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial",color:"var(--content-primary)"},children:"Custom Header"}),e.jsx(N,{name:"close",size:"m",onClick:()=>n(!1),"aria-label":"Close drawer"})]}),footer:e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:e.jsx(p,{label:"Custom Action",variant:"primary"})})})]})}};var Y,G,$;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(G=l.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var W,K,X;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(X=(K=y.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var J,Z,ee;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,ie,re;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};const Ze=["Default","Responsive","CloseOnEscape","CloseOnOverlayClick","CustomHeaderFooter"];export{C as CloseOnEscape,O as CloseOnOverlayClick,R as CustomHeaderFooter,l as Default,y as Responsive,Ze as __namedExportsOrder,Je as default};
