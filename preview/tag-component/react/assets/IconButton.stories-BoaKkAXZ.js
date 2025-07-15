import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{E as k,S as z}from"./keyboard.constants-G_CZ5sfP.js";import{f as w,w as d,u,e as o}from"./index-DaW6VCyr.js";import{a as j,T as C}from"./Icon-DiFFcmJA.js";import{I as s}from"./IconButton-BXlREZl-.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const R=Object.keys(j),F=Object.keys(C),U={title:"IconButton",component:s,tags:["autodocs"],argTypes:{name:{control:"select",options:[...R,...F].sort((t,n)=>t.localeCompare(n)),description:"Nom de l’icône à afficher",defaultValue:"check"},variant:{control:"select",options:["primary","secondary","text","transparent","danger"]},appearance:{control:"select",options:["outlined","filled"],description:"Apparence de l’icône (pour les icônes togglables)",defaultValue:"outlined"},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean",description:"Utiliser un espacement compact"},disabled:{control:"boolean"}}},p=w(),c={args:{name:"settings",size:"m",appearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"icon button aria label",onClick:p},render:t=>a.jsx(s,{...t}),play:async({canvasElement:t})=>{const e=d(t).getByRole("button");await u.click(e),o(p).toHaveBeenCalled(),e.blur()}},i={args:{...c.args},render:t=>a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(s,{...t,size:"s","data-testId":"small-icon-button"}),a.jsx(s,{...t,"data-testId":"medium-icon-button"}),a.jsx(s,{...t,size:"l","data-testId":"large-icon-button"})]}),play:async({canvasElement:t})=>{const n=d(t),e=n.getByTestId("small-icon-button"),m=n.getByTestId("medium-icon-button"),g=n.getByTestId("large-icon-button");o(e.clientHeight).toBe(24),o(m.clientHeight).toBe(32),o(g.clientHeight).toBe(40)}},r={args:{...c.args,compactSpacing:!0},render:t=>a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(s,{...t,size:"s","data-testId":"small-icon-button"}),a.jsx(s,{...t,"data-testId":"medium-icon-button"}),a.jsx(s,{...t,size:"l","data-testId":"large-icon-button"})]}),play:async({canvasElement:t})=>{const n=d(t),e=n.getByTestId("small-icon-button"),m=n.getByTestId("medium-icon-button"),g=n.getByTestId("large-icon-button");o(e.clientHeight).toBe(16),o(m.clientHeight).toBe(20),o(g.clientHeight).toBe(24)}},l={args:{...c.args},play:async({canvasElement:t})=>{const e=d(t).getByRole("button");await u.tab(),o(e).toHaveFocus(),await u.keyboard(k),await u.keyboard(z),o(p).toHaveBeenCalledTimes(2),e.blur()}};var B,I,b;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    name: "settings",
    size: "m",
    appearance: "outlined",
    disabled: false,
    compactSpacing: false,
    ["aria-label"]: "icon button aria label",
    onClick: mockFn
  },
  render: args => <IconButton {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole("button");
    await userEvent.click(iconButton);
    expect(mockFn).toHaveBeenCalled();
    iconButton.blur();
  }
}`,...(b=(I=c.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var y,v,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButton {...args} size="s" data-testId="small-icon-button" />
        <IconButton {...args} data-testId="medium-icon-button" />
        <IconButton {...args} size="l" data-testId="large-icon-button" />
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
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,E,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compactSpacing: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButton {...args} size="s" data-testId="small-icon-button" />
        <IconButton {...args} data-testId="medium-icon-button" />
        <IconButton {...args} size="l" data-testId="large-icon-button" />
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
}`,...(h=(E=r.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var T,H,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    await userEvent.keyboard(ENTER_KEY);
    await userEvent.keyboard(SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  }
}`,...(S=(H=l.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};const q=["Default","Sizing","CompactSizing","KeyboardInteraction"];export{r as CompactSizing,c as Default,l as KeyboardInteraction,i as Sizing,q as __namedExportsOrder,U as default};
