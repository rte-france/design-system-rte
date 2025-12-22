import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as E,c as S}from"./keyboard-test.constants-C9whQEGR.js";import{w as D,u as c,e as s,a as C}from"./index-DCXJbAaW.js";import{r as F}from"./index-G8LIXM5I.js";import{D as g,a as n}from"./DropdownItem-CYjehUVm.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-GNmPbxh0.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";const X={title:"Composants/Dropdown (développement en cours)",id:"Dropdown",tags:["autodocs"],component:g,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},x=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{})]}),T=o=>{const[p,a]=F.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(g,{...o,onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:p,children:[e.jsx(n,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(n,{label:"Actions",leftIcon:"settings",children:[e.jsxs(n,{label:"Edit",leftIcon:"edit",children:[e.jsx(n,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(n,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(n,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(n,{label:"Archive",leftIcon:"archive"}),e.jsx(n,{label:"Delete",leftIcon:"delete"})]}),e.jsx(n,{label:"Help",leftIcon:"help"}),e.jsx(n,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(n,{label:"First option",hasIndent:!0}),e.jsx(n,{label:"Second option",hasIndent:!0}),e.jsx(n,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(n,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},i={args:{},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx(T,{...o})]})},u={args:{...i.args},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx(T,{...o})]}),play:async({canvasElement:o})=>{var d;const a=await D(o).getByRole("button",{name:/click me!/i});await c.click(a);const l=document.getElementById("overlay-root"),r=l==null?void 0:l.querySelector("[data-dropdown-id]"),t=(d=r==null?void 0:r.querySelector("ul"))==null?void 0:d.querySelectorAll("li");s(r).toBeInTheDocument(),s(t==null?void 0:t[0]).toHaveFocus(),await c.keyboard(E),s(t==null?void 0:t[1]).toHaveFocus(),await c.keyboard(S),s(t==null?void 0:t[0]).toHaveFocus()}},m={args:{...i.args},render:o=>{const[p,a]=F.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(g,{...o,onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:p,children:[e.jsx(n,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(n,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})},play:async({canvasElement:o})=>{var d;const a=await D(o).getByRole("button",{name:/click me!/i});await c.click(a);const l=document.getElementById("overlay-root"),r=l==null?void 0:l.querySelector("[data-dropdown-id]"),t=(d=r==null?void 0:r.querySelector("ul"))==null?void 0:d.querySelectorAll("li");await C(()=>{s(r).toBeInTheDocument(),s(t==null?void 0:t[0]).toHaveFocus()}),await c.keyboard(E),s(t==null?void 0:t[1]).toHaveFocus(),await c.keyboard(S),s(t==null?void 0:t[0]).toHaveFocus()}};var y,b,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>;
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,h,f;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", {
      name: /click me!/i
    });
    await userEvent.click(triggerButton);
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
}`,...(f=(h=u.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,j,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerButton = await canvas.getByRole("button", {
      name: /click me!/i
    });
    await userEvent.click(triggerButton);
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
}`,...(I=(j=m.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const z=["Default","KeyboardNavigation","KeyboardNavigationWithLink"];export{i as Default,u as KeyboardNavigation,m as KeyboardNavigationWithLink,z as __namedExportsOrder,X as default};
