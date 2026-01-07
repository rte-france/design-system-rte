import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as F,c as B}from"./keyboard-test.constants-C9whQEGR.js";import{w as O,u as p,e as r,a as _}from"./index-L8OlCEhE.js";import{r as b}from"./index-G8LIXM5I.js";import{D as x,a as t}from"./DropdownItem-DLfDYchj.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-CR2JMPaF.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-cNGLKJiC.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CtOPxSY4.js";import"./index-B7EolvnA.js";import"./index-BLHw34Di.js";const $={title:"Composants/Dropdown (développement en cours)",id:"Dropdown",tags:["autodocs"],component:x,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},y=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{})]}),W=o=>{const[l,s]=b.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(x,{...o,onClose:()=>{s(!1)},trigger:e.jsx("button",{onClick:()=>s(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:l,children:[e.jsx(t,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(t,{label:"Actions",leftIcon:"settings",children:[e.jsxs(t,{label:"Edit",leftIcon:"edit",children:[e.jsx(t,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(t,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(t,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(t,{label:"Archive",leftIcon:"archive"}),e.jsx(t,{label:"Delete",leftIcon:"delete"})]}),e.jsx(t,{label:"Help",leftIcon:"help"}),e.jsx(t,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(t,{label:"First option",hasIndent:!0}),e.jsx(t,{label:"Second option",hasIndent:!0}),e.jsx(t,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(t,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},c={args:{},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(W,{...o})]})},u={args:{},render:o=>{const[l,s]=b.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(x,{...o,onClose:()=>{s(!1)},trigger:e.jsx("button",{onClick:()=>s(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:l,children:[e.jsx(t,{label:"Messages",leftIcon:"mail",badgeCount:5,badgeContent:"icon",badgeIcon:"bolt",badgeType:"indicator",showBadge:!0}),e.jsx(t,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})}},g={args:{...c.args},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(W,{...o})]}),play:async({canvasElement:o})=>{var d;const s=await O(o).getByRole("button",{name:/click me!/i});await p.click(s);const i=document.getElementById("overlay-root"),a=i==null?void 0:i.querySelector("[data-dropdown-id]"),n=(d=a==null?void 0:a.querySelector("ul"))==null?void 0:d.querySelectorAll("li");r(a).toBeInTheDocument(),r(n==null?void 0:n[0]).toHaveFocus(),await p.keyboard(F),r(n==null?void 0:n[1]).toHaveFocus(),await p.keyboard(B),r(n==null?void 0:n[0]).toHaveFocus()}},m={args:{...c.args},render:o=>{const[l,s]=b.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(x,{...o,onClose:()=>{s(!1)},trigger:e.jsx("button",{onClick:()=>s(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:l,children:[e.jsx(t,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(t,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})},play:async({canvasElement:o})=>{var d;const s=await O(o).getByRole("button",{name:/click me!/i});await p.click(s);const i=document.getElementById("overlay-root"),a=i==null?void 0:i.querySelector("[data-dropdown-id]"),n=(d=a==null?void 0:a.querySelector("ul"))==null?void 0:d.querySelectorAll("li");await _(()=>{r(a).toBeInTheDocument(),r(n==null?void 0:n[0]).toHaveFocus()}),await p.keyboard(F),r(n==null?void 0:n[1]).toHaveFocus(),await p.keyboard(B),r(n==null?void 0:n[0]).toHaveFocus()}};var w,h,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>;
  }
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,I,j;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
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
            <DropdownItem label="Messages" leftIcon="mail" badgeCount={5} badgeContent="icon" badgeIcon="bolt" badgeType="indicator" showBadge={true} />
            <DropdownItem label="Username" leftIcon="user-circle" link="/username" />
          </Dropdown>
        </div>
      </>;
  }
}`,...(j=(I=u.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var k,C,E;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(C=g.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,D,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const ee=["Default","WithBadge","KeyboardNavigation","KeyboardNavigationWithLink"];export{c as Default,g as KeyboardNavigation,m as KeyboardNavigationWithLink,u as WithBadge,ee as __namedExportsOrder,$ as default};
