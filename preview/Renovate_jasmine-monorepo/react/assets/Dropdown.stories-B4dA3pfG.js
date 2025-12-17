import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as E,b as I,c as j}from"./keyboard-test.constants-C9whQEGR.js";import{u as a,e as s,a as S}from"./index-DCXJbAaW.js";import{r as k}from"./index-G8LIXM5I.js";import{D as d,a as o}from"./DropdownItem-BB7elJw4.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-BPBlxbj_.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";const P={title:"Composants/Dropdown (développement en cours)",id:"Dropdown",tags:["autodocs"],component:d,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},u=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{})]}),T=n=>{const[r,t]=k.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(d,{...n,onClose:()=>{t(!1)},trigger:e.jsx("button",{onClick:()=>t(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:r,children:[e.jsx(o,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(o,{label:"Actions",leftIcon:"settings",children:[e.jsxs(o,{label:"Edit",leftIcon:"edit",children:[e.jsx(o,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(o,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(o,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(o,{label:"Archive",leftIcon:"archive"}),e.jsx(o,{label:"Delete",leftIcon:"delete"})]}),e.jsx(o,{label:"Help",leftIcon:"help"}),e.jsx(o,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(o,{label:"First option",hasIndent:!0}),e.jsx(o,{label:"Second option",hasIndent:!0}),e.jsx(o,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(o,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},l={args:{},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(T,{...n})]})},c={args:{...l.args},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(T,{...n})]}),play:async()=>{var i;await a.tab(),await a.keyboard(E),await a.tab();const n=document.getElementById("overlay-root"),r=n==null?void 0:n.querySelector("[data-dropdown-id]"),t=(i=r==null?void 0:r.querySelector("ul"))==null?void 0:i.querySelectorAll("li");s(r).toBeInTheDocument(),s(t==null?void 0:t[0]).toHaveFocus(),await a.keyboard(I),s(t==null?void 0:t[1]).toHaveFocus(),await a.keyboard(j),s(t==null?void 0:t[0]).toHaveFocus()}},p={args:{...l.args},render:n=>{const[r,t]=k.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(d,{...n,onClose:()=>{t(!1)},trigger:e.jsx("button",{onClick:()=>t(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:r,children:[e.jsx(o,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(o,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})},play:async()=>{var i;await a.tab(),await a.keyboard(E);const n=document.getElementById("overlay-root"),r=n==null?void 0:n.querySelector("[data-dropdown-id]"),t=(i=r==null?void 0:r.querySelector("ul"))==null?void 0:i.querySelectorAll("li");await S(()=>{s(r).toBeInTheDocument(),s(t==null?void 0:t[0]).toHaveFocus()}),await a.keyboard(I),s(t==null?void 0:t[1]).toHaveFocus(),await a.keyboard(j),s(t==null?void 0:t[0]).toHaveFocus()}};var m,g,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>;
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,b,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>;
  },
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.tab();
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    expect(dropdown).toBeInTheDocument();
    expect(menuItems?.[0]).toHaveFocus();
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  }
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,f,h;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <WipWarning />
        <div style={{
        position: "relative",
        width: "800px",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        gap: "500px"
      }}>
          <Dropdown {...args} onClose={() => {
          setIsOpen(false);
        }} trigger={<button onClick={() => setIsOpen(true)} style={{
          color: "black"
        }}>
                Click Me!
              </button>} style={{
          width: "250px"
        }} isOpen={isOpen}>
            <DropdownItem label="Messages" leftIcon="mail" link="/messages" onClick={() => console.log("click")} />
            <DropdownItem label="Username" leftIcon="user-circle" link="/username" />
          </Dropdown>
        </div>
      </>;
  },
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    await waitFor(() => {
      expect(dropdown).toBeInTheDocument();
      expect(menuItems?.[0]).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_UP_KEY);
    expect(menuItems?.[0]).toHaveFocus();
  }
}`,...(h=(f=p.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const L=["Default","KeyboardNavigation","KeyboardNavigationWithLink"];export{l as Default,c as KeyboardNavigation,p as KeyboardNavigationWithLink,L as __namedExportsOrder,P as default};
