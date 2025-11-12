import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{T as z,c as k}from"./keyboard-test.constants-fmK-LbIX.js";import{f as w,w as d,u,e as a}from"./index-DCXJbAaW.js";import{T as j}from"./Icon-DjEid3Hw.js";import{I as s}from"./IconButtonToggle-Cpn0A9xl.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconButton-DLtPB6Kc.js";import"./Badge-yqZBktoR.js";import"./index-DSdvzt-y.js";const C=Object.keys(j).sort((t,n)=>t.localeCompare(n)),U={title:"IconButtonToggle",id:"IconButtonToggle",component:s,tags:["autodocs"],argTypes:{name:{control:"select",options:C,description:"Nom de l’icône à afficher",defaultValue:"check"},selected:{control:"boolean",description:"Indique si le bouton est sélectionné en mode contrôlé"},defaultSelected:{control:"boolean",description:"Indique si le bouton est sélectionné par défaut en mode non contrôlé"},variant:{control:"select",options:["primary","secondary","text","transparent","danger"]},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean",description:"Utiliser un espacement compact"},disabled:{control:"boolean"}}},p=w(),c={args:{name:"settings",size:"m",disabled:!1,compactSpacing:!1,onClick:p,defaultSelected:!1,"aria-label":"icon button toggle aria label"},render:t=>o.jsx(s,{...t}),play:async({canvasElement:t})=>{const e=d(t).getByRole("button");await u.click(e),a(p).toHaveBeenCalled(),e.blur()}},i={args:{...c.args},render:t=>o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx(s,{...t,size:"s","data-testid":"small-icon-button"}),o.jsx(s,{...t,"data-testid":"medium-icon-button"}),o.jsx(s,{...t,size:"l","data-testid":"large-icon-button"})]}),play:async({canvasElement:t})=>{const n=d(t),e=n.getByTestId("small-icon-button"),m=n.getByTestId("medium-icon-button"),g=n.getByTestId("large-icon-button");a(e.clientHeight).toBe(24),a(m.clientHeight).toBe(32),a(g.clientHeight).toBe(40)}},l={args:{...c.args,compactSpacing:!0},render:t=>o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx(s,{...t,size:"s","data-testid":"small-icon-button"}),o.jsx(s,{...t,"data-testid":"medium-icon-button"}),o.jsx(s,{...t,size:"l","data-testid":"large-icon-button"})]}),play:async({canvasElement:t})=>{const n=d(t),e=n.getByTestId("small-icon-button"),m=n.getByTestId("medium-icon-button"),g=n.getByTestId("large-icon-button");a(e.clientHeight).toBe(16),a(m.clientHeight).toBe(20),a(g.clientHeight).toBe(24)}},r={args:{...c.args},play:async({canvasElement:t})=>{const e=d(t).getByRole("button");await u.tab(),a(e).toHaveFocus(),await u.keyboard(z),await u.keyboard(k),a(p).toHaveBeenCalledTimes(2),e.blur()}};var B,b,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    name: "settings",
    size: "m",
    disabled: false,
    compactSpacing: false,
    onClick: mockFn,
    defaultSelected: false,
    ["aria-label"]: "icon button toggle aria label"
  },
  render: args => <IconButtonToggle {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole("button");
    await userEvent.click(iconButton);
    expect(mockFn).toHaveBeenCalled();
    iconButton.blur();
  }
}`,...(I=(b=c.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var y,v,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButtonToggle {...args} size="s" data-testid="small-icon-button" />
        <IconButtonToggle {...args} data-testid="medium-icon-button" />
        <IconButtonToggle {...args} size="l" data-testid="large-icon-button" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallIconButton = canvas.getByTestId("small-icon-button");
    const mediumIconButton = canvas.getByTestId("medium-icon-button");
    const largeIconButton = canvas.getByTestId("large-icon-button");
    expect(smallIconButton.clientHeight).toBe(24);
    expect(mediumIconButton.clientHeight).toBe(32);
    expect(largeIconButton.clientHeight).toBe(40);
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,E,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compactSpacing: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButtonToggle {...args} size="s" data-testid="small-icon-button" />
        <IconButtonToggle {...args} data-testid="medium-icon-button" />
        <IconButtonToggle {...args} size="l" data-testid="large-icon-button" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallIconButton = canvas.getByTestId("small-icon-button");
    const mediumIconButton = canvas.getByTestId("medium-icon-button");
    const largeIconButton = canvas.getByTestId("large-icon-button");
    expect(smallIconButton.clientHeight).toBe(16);
    expect(mediumIconButton.clientHeight).toBe(20);
    expect(largeIconButton.clientHeight).toBe(24);
  }
}`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var S,h,H;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  }
}`,...(H=(h=r.parameters)==null?void 0:h.docs)==null?void 0:H.source}}};const V=["Default","Sizing","CompactSizing","KeyboardInteraction"];export{l as CompactSizing,c as Default,r as KeyboardInteraction,i as Sizing,V as __namedExportsOrder,U as default};
