import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as k,u as ee,e as te,a as oe}from"./index-4rjIhT2C.js";import{r as w}from"./index-G8LIXM5I.js";import{B as y}from"./Button-CwOeOth1.js";import{I as N}from"./IconButton-Q4rJrqsf.js";import{B as ue,b as le,a as ce}from"./BaseHeader-DVkhLKZF.js";import{u as me}from"./useAnimatedMount-_zPBpYOt.js";import{u as de,a as pe,b as ge}from"./useKeydownEscape-CE1Mjiyw.js";import{D as ve}from"./Divider-BMotkXeQ.js";import{O as xe}from"./Overlay-BI5SO8Nq.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CyCYn5x0.js";import"./Icon-DOkBvtOM.js";import"./index-DSdvzt-y.js";import"./dom.constants-41SiyeDe.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const fe=(t,n,a=0)=>t?`translateX(-${n+a}px)`:"none",he="_drawer_1nljj_1",o={"drawer-responsive-container":"_drawer-responsive-container_1nljj_1",drawer:he,"drawer-content":"_drawer-content_1nljj_44","drawer-toggle":"_drawer-toggle_1nljj_52","drawer-footer":"_drawer-footer_1nljj_61","drawer-header-content":"_drawer-header-content_1nljj_68"},ae=4,z=({isCollapsible:t,iconToggleCloseContainerRef:n,isOpen:a,isAnimating:i,handleOnClickToggle:s,shouldDisplayDefaultHeader:u,id:g,title:x,icon:l,iconAppearance:f,onClose:c,isClosable:h,header:m,drawerLeftPosition:d})=>e.jsxs(e.Fragment,{children:[t&&e.jsx(N,{ref:n,className:o["drawer-toggle"],style:{transition:"none",transform:fe(i,d,ae)},name:a?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:s,"aria-label":`Close drawer ${g}`}),u?e.jsx(ce,{id:g,title:x,icon:l,iconAppearance:f,onClose:c,isClosable:h}):e.jsx(e.Fragment,{children:m})]}),H=({content:t,fixedHeader:n})=>e.jsx("div",{className:o["drawer-content"],"data-fixed-header":n,tabIndex:-1,children:t}),Q=({fixedHeader:t,id:n,title:a,icon:i,iconAppearance:s,isCollapsible:u,iconToggleCloseContainerRef:g,isOpen:x,isAnimating:l,handleOnClickToggle:f,shouldDisplayDefaultHeader:c,onClose:h,isClosable:m,header:d,drawerLeftPosition:p,content:v})=>e.jsx(e.Fragment,{children:t?e.jsxs(e.Fragment,{children:[e.jsx(z,{id:n,title:a,icon:i,iconAppearance:s,isCollapsible:u,iconToggleCloseContainerRef:g,isOpen:x,isAnimating:l,handleOnClickToggle:f,shouldDisplayDefaultHeader:!!c,onClose:h,isClosable:m,header:d,drawerLeftPosition:p}),e.jsx(H,{content:v,fixedHeader:t})]}):e.jsxs("div",{className:o["drawer-header-content"],children:[e.jsx(z,{id:n,title:a,icon:i,iconAppearance:s,isCollapsible:u,iconToggleCloseContainerRef:g,isOpen:x,isAnimating:l,handleOnClickToggle:f,shouldDisplayDefaultHeader:!!c,onClose:h,isClosable:m,header:d,drawerLeftPosition:p}),e.jsx(H,{content:v})]})}),A=({fixedHeader:t,shouldDisplayDefaultFooter:n,primaryButtonLabel:a,secondaryButtonLabel:i,footer:s})=>e.jsx("div",{className:o["drawer-footer"],"data-fixed-header":t,children:n?e.jsx(le,{primaryButton:e.jsx(y,{label:a,variant:"primary"}),secondaryButton:i?e.jsx(y,{label:i,variant:"secondary"}):void 0}):s&&e.jsx(e.Fragment,{children:s})}),j=({id:t,title:n,icon:a,iconAppearance:i,isOpen:s,onClose:u,onClickToggle:g,closeOnOverlayClick:x=!1,primaryButtonLabel:l,secondaryButtonLabel:f,isCollapsible:c=!1,content:h,header:m,footer:d,position:p,width:v,children:D,fixedHeader:R,closeOnEscape:ne=!1,isClosable:ie=!0,...S})=>{var _;const{shouldRender:T,isAnimating:r}=me(s,240),C=w.useRef(null),I=w.useRef(null),B=w.useRef(null),V=((_=C.current)==null?void 0:_.clientWidth)||0;de(x&&p==="modal"?u:()=>{},C.current),pe(ne?u:()=>{}),ge(C.current,T);const M=m===void 0&&n,se=d===void 0&&l;if(!M&&!m)return console.warn("Drawer: You must provide either a title or a custom header."),null;if(p==="responsive"&&!D)return console.warn("Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer."),null;if(!d&&!l)return console.warn("Drawer: You must provide either a primaryButtonLabel or a custom footer."),null;if(p==="modal"&&D)return console.warn("Drawer: You should not provide children when using modal position. "),null;const U=(re=0)=>r?`translateX(-${V+re}px)`:"none",P=()=>{s&&I.current&&I.current.focus(),!s&&B.current&&B.current.focus(),g()},F={fixedHeader:R,id:t,title:n,icon:a,iconAppearance:i,isCollapsible:c,iconToggleCloseContainerRef:B,isOpen:s,isAnimating:r,handleOnClickToggle:P,shouldDisplayDefaultHeader:!!M,onClose:u,isClosable:ie,header:m,drawerLeftPosition:V,content:h},E={fixedHeader:R,shouldDisplayDefaultFooter:!!se,primaryButtonLabel:l,secondaryButtonLabel:f,footer:d};return e.jsx(e.Fragment,{children:p==="responsive"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:o["drawer-responsive-container"],children:[c&&e.jsx(N,{className:o["drawer-toggle"],style:{position:"absolute",top:24,right:4,transition:"transform 240ms ease-out",opacity:r?0:1,transform:U(ae)},name:"right-panel-open",size:"l",variant:"primary",onClick:P,"aria-label":`Close drawer ${t}`}),e.jsx(ve,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"none",visibility:r?"visible":"hidden",transform:U()}}),e.jsxs("div",{className:o.drawer,ref:C,"data-open":r,role:"region","aria-labelledby":`${t}-drawer-title`,"data-position":p,"data-fixed-header":R,style:{width:v,transform:r?"none":`translateX(${v||"100%"})`,visibility:r?"visible":"hidden"},...S,children:[e.jsx(Q,{...F}),e.jsx(A,{...E})]}),e.jsx("div",{className:o["drawer-children"],"data-open":r,style:{height:"100%",transition:"margin-right 240ms ease-out",marginRight:r?v:0,maxHeight:r?"100vh":void 0,overflowY:r?"auto":void 0},children:D})]})}):e.jsxs(e.Fragment,{children:[c&&e.jsx(N,{ref:I,className:o["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:r?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:P,"aria-label":`Close drawer ${t}`}),T&&e.jsxs(xe,{freezeNavigation:!0,children:[e.jsx(ue,{isAnimating:r}),e.jsxs("div",{ref:C,className:o.drawer,"data-open":r,"data-fixed-header":R,role:"dialog","aria-modal":"true","aria-labelledby":`${t}-drawer-title`,style:{width:v},...S,children:[e.jsx(Q,{...F}),e.jsx(A,{...E})]})]})]})})};j.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{header:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const Fe={title:"Composants/Drawer/Drawer",component:j,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"}}},b={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:t=>{const[n,a]=w.useState(t.isOpen),i=()=>{a(s=>!s)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{label:"Open drawer",onClick:()=>a(!0)}),e.jsx(j,{...t,isOpen:n,onClose:()=>a(!1),onClickToggle:i})]})},play:async({canvasElement:t})=>{const a=await k(t).getByRole("button",{name:"Open drawer"});await ee.click(a);const i=k(document.body).getByRole("dialog");te(i).toBeInTheDocument()}},q={args:{...b.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:t=>{const[n,a]=w.useState(t.isOpen),i=()=>{a(s=>!s)};return e.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:e.jsx(j,{...t,isOpen:n,onClose:()=>a(!1),onClickToggle:i,content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[e.jsx(y,{label:"Open drawer",onClick:()=>a(!0)}),e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:t})=>{const n=k(t),a=await n.getByRole("button",{name:"Open drawer"});await ee.click(a),await oe(()=>{const i=n.getByRole("region");te(i).toBeInTheDocument()})}},O={args:{...b.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:t=>{const[n,a]=w.useState(t.isOpen),i=()=>{a(s=>!s)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{label:"Open drawer",onClick:()=>a(!0)}),e.jsx(j,{...t,isOpen:n,onClose:()=>a(!1),onClickToggle:i,header:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial",color:"var(--content-primary)"},children:"Custom Header"}),e.jsx(N,{name:"close",size:"m",onClick:()=>a(!1),"aria-label":"Close drawer"})]}),footer:e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:e.jsx(y,{label:"Custom Action",variant:"primary"})})})]})}};var L,$,W;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=($=b.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var Y,X,G;q.parameters={...q.parameters,docs:{...(Y=q.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(X=q.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var K,J,Z;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(J=O.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};const Ee=["Default","Responsive","CustomHeaderFooter"];export{O as CustomHeaderFooter,b as Default,q as Responsive,Ee as __namedExportsOrder,Fe as default};
