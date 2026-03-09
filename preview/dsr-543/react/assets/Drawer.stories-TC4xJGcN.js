import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as v,u as H,e as L}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{B as b}from"./Button-Cd2C55g4.js";import{B as K,a as G}from"./BaseHeader-q0GG6nAd.js";import{u as J}from"./useAnimatedMount-_zPBpYOt.js";import{u as Z,a as ee,b as te}from"./useKeydownEscape-CE1Mjiyw.js";import{D as ie}from"./Divider-BMotkXeQ.js";import{I as N}from"./IconButton-CQQHz8gd.js";import{O as ae}from"./Overlay-BI5SO8Nq.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CQk6fGHb.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";import"./dom.constants-41SiyeDe.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const se="_backdrop_18iry_1",ne="_drawer_18iry_15",r={backdrop:se,"drawer-responsive-container":"_drawer-responsive-container_18iry_15",drawer:ne,"drawer-content":"_drawer-content_18iry_56","drawer-toggle":"_drawer-toggle_18iry_63"},h=({id:t,title:o,icon:a,iconAppearance:n,isOpen:u,onClose:x,onClickToggle:z,closeOnOverlayClick:A=!1,primaryButtonLabel:f,secondaryButtonLabel:D,isCollapsible:w=!1,content:$,header:y,footer:d,position:l,width:p,children:q,fixedHeader:I,closeOnEscape:Y=!1,isClosable:W=!0,...P})=>{const{shouldRender:C,isAnimating:i}=J(u,240),s=m.useRef(null),R=m.useRef(null),j=m.useRef(null);Z(A&&l==="modal"?x:()=>{},s.current),ee(Y?x:()=>{}),te(s.current,C);const B=y===void 0&&o,X=d===void 0&&f;if(!B&&!y)return console.warn("Drawer: You must provide either a title or a custom header."),null;if(l==="responsive"&&!q)return console.warn("Drawer: You should provide your content as children when using responsive position to avoid empty space next to the drawer."),null;if(!d&&!f)return console.warn("Drawer: You must provide either a primaryButtonLabel or a custom footer."),null;l==="modal"&&q&&console.warn("Drawer: You should not provide children when using modal position. ");const O=()=>{u&&R.current&&R.current.focus(),!u&&j.current&&j.current.focus(),z()},k=()=>e.jsxs(e.Fragment,{children:[w&&e.jsx(N,{ref:j,className:r["drawer-toggle"],style:{transform:i&&s.current?`translateX(-${s.current.clientWidth+4}px)`:void 0},name:u?"right-panel-close":"right-panel-open",size:"l",variant:"primary",onClick:O,"aria-label":`Close drawer ${t}`}),B?e.jsx(G,{id:t,title:o,icon:a,iconAppearance:n,onClose:x,isClosable:W}):e.jsx(e.Fragment,{children:y})]}),V=()=>e.jsx("div",{className:r["drawer-content"],"data-fixed-header":I,tabIndex:-1,children:$}),M=()=>e.jsx(e.Fragment,{children:I?e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx(V,{})]}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:"24px",overflowY:"auto"},children:[e.jsx(k,{}),e.jsx(V,{})]})}),S=()=>e.jsx(e.Fragment,{children:X?e.jsx(K,{primaryButton:e.jsx(b,{label:f,variant:"primary"}),secondaryButton:D?e.jsx(b,{label:D,variant:"secondary"}):void 0}):d&&e.jsx(e.Fragment,{children:d})});return e.jsx(e.Fragment,{children:l==="responsive"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:r["drawer-responsive-container"],children:[w&&e.jsx(N,{className:r["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:i?0:1,transform:i&&s.current?`translateX(-${s.current.clientWidth+4}px)`:void 0},name:"right-panel-open",size:"l",variant:"primary",onClick:O,"aria-label":`Close drawer ${t}`}),e.jsx(ie,{orientation:"vertical",style:{position:"absolute",right:"0px",transition:"transform 240ms ease-out",visibility:i?"visible":"hidden",transform:i&&s.current?`translateX(-${s.current.clientWidth}px)`:void 0}}),e.jsxs("div",{className:r.drawer,ref:s,"data-open":i,role:"region","aria-labelledby":`${t}-drawer-title`,"data-position":l,style:{width:p,transform:i?"none":`translateX(${p||"100%"})`,visibility:C?"visible":"hidden"},...P,children:[e.jsx(M,{}),e.jsx(S,{})]}),e.jsx("div",{className:r["drawer-children"],"data-open":i,style:{height:"100%",transition:"margin-right 240ms ease-out",marginRight:i?p:0,maxHeight:i?"100vh":void 0,overflowY:i?"auto":void 0},children:q})]})}):e.jsxs(e.Fragment,{children:[w&&e.jsx(N,{ref:R,className:r["drawer-toggle"],style:{position:"absolute",top:24,right:4,opacity:i?0:1},name:"right-panel-open",size:"l",variant:"primary",onClick:O,"aria-label":`Close drawer ${t}`}),C&&e.jsxs(ae,{freezeNavigation:!0,children:[e.jsx("div",{className:r.backdrop,"data-open":i}),e.jsxs("div",{ref:s,className:r.drawer,"data-open":i,role:"dialog","aria-modal":"true","aria-labelledby":`${t}-drawer-title`,style:{width:p},...P,children:[e.jsx(M,{}),e.jsx(S,{})]})]})]})})};h.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},closeOnOverlayClick:{defaultValue:{value:"false",computed:!1},required:!1},isCollapsible:{defaultValue:{value:"false",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"false",computed:!1},required:!1},isClosable:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreDrawerProps","Omit"]};const je={title:"Drawer",component:h,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"}}},c={args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:t=>{const[o,a]=m.useState(t.isOpen),n=()=>{a(u=>!u)};return e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"Open drawer",onClick:()=>a(!0)}),e.jsx(h,{...t,isOpen:o,onClose:()=>a(!1),onClickToggle:n,children:e.jsx("span",{children:"Shiba"})})]})},play:async({canvasElement:t})=>{const a=await v(t).getByRole("button",{name:"Open drawer"});await H.click(a);const n=v(document.body).getByRole("dialog");L(n).toBeInTheDocument()}},g={args:{...c.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:t=>{const[o,a]=m.useState(t.isOpen),n=()=>{a(u=>!u)};return e.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:e.jsx(h,{...t,isOpen:o,onClose:()=>a(!1),onClickToggle:n,content:e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:e.jsxs("div",{style:{height:"100%",overflowY:"auto",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(b,{label:"Open drawer",onClick:()=>a(!0)}),e.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:t})=>{const a=await v(t).getByRole("button",{name:"Open drawer"});await H.click(a);const n=v(document.body).getByRole("region");L(n).toBeInTheDocument()}};var T,U,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    return <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle}>
          <span>Shiba</span>
        </Drawer>
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
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var F,_,Q;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
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
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", {
      name: "Open drawer"
    });
    await userEvent.click(openButton);
    const drawer = within(document.body).getByRole("region");
    expect(drawer).toBeInTheDocument();
  }
}`,...(Q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};const Oe=["Default","Responsive"];export{c as Default,g as Responsive,Oe as __namedExportsOrder,je as default};
