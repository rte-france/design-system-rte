import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as D,c as F}from"./keyboard-test.constants-By8W48aj.js";import{w as O,u as d,e as l,a as _}from"./index-BfPN6pki.js";import{r as x}from"./index-G8LIXM5I.js";import{R as H,T as N}from"./Icon-DjEid3Hw.js";import{D as m,a as o}from"./DropdownItem-DeBB_4mq.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-CQk6fGHb.js";import"./index-DSdvzt-y.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Divider-cNGLKJiC.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CQ0GhNxd.js";import"./index-CFcDIoS3.js";import"./index-BO2TEXkE.js";const q=Object.keys(H),M=Object.keys(N),oe={title:"Composants/Dropdown (développement en cours)",id:"Dropdown",tags:["autodocs"],component:m,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},y=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{})]}),W=n=>{const[s,a]=x.useState(!1);return e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(m,{...n,onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:s,children:[e.jsx(o,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(o,{label:"Actions",leftIcon:"settings",children:[e.jsxs(o,{label:"Edit",leftIcon:"edit",children:[e.jsx(o,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(o,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(o,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(o,{label:"Archive",leftIcon:"archive"}),e.jsx(o,{label:"Delete",leftIcon:"delete"})]}),e.jsx(o,{label:"Help",leftIcon:"help"}),e.jsx(o,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(o,{label:"First option",hasIndent:!0}),e.jsx(o,{label:"Second option",hasIndent:!0}),e.jsx(o,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(o,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})},i={args:{dropdownId:"storybook-dropdown"},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(W,{...n})]})},g={args:{badgeContent:"number",badgeType:"indicator",badgeIcon:"settings",showBadge:!0,badgeCount:5},argTypes:{badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...q,...M].sort((n,s)=>n.localeCompare(s))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}},render:n=>{const[s,a]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(m,{dropdownId:"storybook-dropdown-with-badge",onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:s,children:[e.jsx(o,{label:"Messages",leftIcon:"mail",badgeCount:n.badgeCount,badgeContent:n.badgeContent,badgeType:n.badgeType,showBadge:n.showBadge,badgeIcon:n.badgeIcon,badgeSize:n.badgeSize}),e.jsx(o,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})}},u={args:{...i.args},render:n=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(W,{...n})]}),play:async({canvasElement:n})=>{var p;const a=await O(n).getByRole("button",{name:/click me!/i});await d.click(a);const c=document.getElementById("overlay-root"),r=c==null?void 0:c.querySelector("[data-dropdown-id]"),t=(p=r==null?void 0:r.querySelector("ul"))==null?void 0:p.querySelectorAll("li");l(r).toBeInTheDocument(),l(t==null?void 0:t[0]).toHaveFocus(),await d.keyboard(D),l(t==null?void 0:t[1]).toHaveFocus(),await d.keyboard(F),l(t==null?void 0:t[0]).toHaveFocus()}},b={args:{...i.args},render:n=>{const[s,a]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(m,{...n,onClose:()=>{a(!1)},trigger:e.jsx("button",{onClick:()=>a(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:s,children:[e.jsx(o,{label:"Messages",leftIcon:"mail",link:"/messages",onClick:()=>console.log("click")}),e.jsx(o,{label:"Username",leftIcon:"user-circle",link:"/username"})]})})]})},play:async({canvasElement:n})=>{var p;const a=await O(n).getByRole("button",{name:/click me!/i});await d.click(a);const c=document.getElementById("overlay-root"),r=c==null?void 0:c.querySelector("[data-dropdown-id]"),t=(p=r==null?void 0:r.querySelector("ul"))==null?void 0:p.querySelectorAll("li");await _(()=>{l(r).toBeInTheDocument(),l(t==null?void 0:t[0]).toHaveFocus()}),await d.keyboard(D),l(t==null?void 0:t[1]).toHaveFocus(),await d.keyboard(F),l(t==null?void 0:t[0]).toHaveFocus()}};var w,h,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    dropdownId: "storybook-dropdown"
  },
  render: args => {
    return <>
        <WipWarning />
        <DropdownTemplate {...args} />
      </>;
  }
}`,...(I=(h=i.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var v,f,k;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    badgeContent: "number",
    badgeType: "indicator",
    badgeIcon: "settings",
    showBadge: true,
    badgeCount: 5
  },
  argTypes: {
    badgeContent: {
      control: "select",
      options: ["number", "icon", "empty"]
    },
    badgeType: {
      control: "select",
      options: ["brand", "neutral", "indicator"]
    },
    badgeIcon: {
      control: "select",
      options: ["", ...RegularIconIds, ...TogglableIconIds].sort((a, b) => a.localeCompare(b))
    },
    showBadge: {
      control: "boolean"
    },
    badgeCount: {
      control: "number"
    },
    badgeSize: {
      control: "select",
      options: ["xs", "s", "m", "l"]
    }
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
          <Dropdown dropdownId="storybook-dropdown-with-badge" onClose={() => {
          setIsOpen(false);
        }} trigger={<button onClick={() => setIsOpen(true)} style={{
          color: "black"
        }}>
                Click Me!
              </button>} style={{
          width: "250px"
        }} isOpen={isOpen}>
            <DropdownItem label="Messages" leftIcon="mail" badgeCount={args.badgeCount} badgeContent={args.badgeContent} badgeType={args.badgeType} showBadge={args.showBadge} badgeIcon={args.badgeIcon} badgeSize={args.badgeSize} />
            <DropdownItem label="Username" leftIcon="user-circle" link="/username" />
          </Dropdown>
        </div>
      </>;
  }
}`,...(k=(f=g.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var j,C,T;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(C=u.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,E,B;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(E=b.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const ae=["Default","WithBadge","KeyboardNavigation","KeyboardNavigationWithLink"];export{i as Default,u as KeyboardNavigation,b as KeyboardNavigationWithLink,g as WithBadge,ae as __namedExportsOrder,oe as default};
