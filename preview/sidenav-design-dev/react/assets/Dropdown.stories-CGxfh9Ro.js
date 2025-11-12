import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as E,a as I,b as j}from"./keyboard-test.constants-fmK-LbIX.js";import{u as a,e as s,a as S}from"./index-DCXJbAaW.js";import{r as k}from"./index-G8LIXM5I.js";import{D as d,a as n}from"./DropdownItem-CTbBVvM1.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-B2eUObs8.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";const P={title:"Dropdown (développement en cours)",id:"Dropdown",tags:["autodocs"],component:d,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},u=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{})]}),T=o=>{const[r,t]=k.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(d,{...o,onClose:()=>{t(!1)},trigger:e.jsx("button",{onClick:()=>t(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:r,children:[e.jsx(n,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(n,{label:"Actions",leftIcon:"settings",children:[e.jsxs(n,{label:"Edit",leftIcon:"edit",children:[e.jsx(n,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(n,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(n,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(n,{label:"Archive",leftIcon:"archive"}),e.jsx(n,{label:"Delete",leftIcon:"delete"})]}),e.jsx(n,{label:"Help",leftIcon:"help"}),e.jsx(n,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(n,{label:"First option",hasIndent:!0}),e.jsx(n,{label:"Second option",hasIndent:!0}),e.jsx(n,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(n,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},l={args:{},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(T,{...o})]})},c={args:{...l.args},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(T,{...o})]}),play:async()=>{var i;await a.tab(),await a.keyboard(E),await a.tab();const o=document.getElementById("overlay-root"),r=o==null?void 0:o.querySelector("[data-dropdown-id]"),t=(i=r==null?void 0:r.querySelector("ul"))==null?void 0:i.querySelectorAll("li");s(r).toBeInTheDocument(),s(t==null?void 0:t[0]).toHaveFocus(),await a.keyboard(I),s(t==null?void 0:t[1]).toHaveFocus(),await a.keyboard(j),s(t==null?void 0:t[0]).toHaveFocus()}},p={args:{...l.args},render:o=>{const[r,t]=k.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(d,{...o,onClose:()=>{t(!1)},trigger:e.jsx("button",{onClick:()=>t(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:r,children:[e.jsx(n,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(n,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})},play:async()=>{var i;await a.tab(),await a.keyboard(E);const o=document.getElementById("overlay-root"),r=o==null?void 0:o.querySelector("[data-dropdown-id]"),t=(i=r==null?void 0:r.querySelector("ul"))==null?void 0:i.querySelectorAll("li");await S(()=>{s(r).toBeInTheDocument(),s(t==null?void 0:t[0]).toHaveFocus()}),await a.keyboard(I),s(t==null?void 0:t[1]).toHaveFocus(),await a.keyboard(j),s(t==null?void 0:t[0]).toHaveFocus()}};var m,g,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
