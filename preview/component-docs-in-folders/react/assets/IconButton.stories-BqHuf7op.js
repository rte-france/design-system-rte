import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as _,a as N}from"./keyboard-test.constants-C9whQEGR.js";import{f as F,w as p,u,e as o}from"./index-DCXJbAaW.js";import{R as K,T as D}from"./Icon-DjEid3Hw.js";import{I as s}from"./IconButton-DU9lNzF3.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./common-button.constants-eNlmcvUj.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-Dn6YlCGY.js";import"./index-DSdvzt-y.js";const B=Object.keys(K),y=Object.keys(D),Q={title:"Composants/IconButton",component:s,tags:["autodocs"],argTypes:{name:{control:"select",options:[...B,...y].sort((n,t)=>n.localeCompare(t)),description:"Nom de l’icône à afficher",defaultValue:"check"},variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","inverse"]},appearance:{control:"select",options:["outlined","filled"],description:"Apparence de l’icône (pour les icônes togglables)",defaultValue:"outlined"},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean",description:"Utiliser un espacement compact"},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...B,...y].sort((n,t)=>n.localeCompare(t)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"}}},m=F(),c={args:{name:"settings",size:"m",appearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"icon button aria label",onClick:m},render:n=>e.jsx(s,{...n}),play:async({canvasElement:n})=>{const a=p(n).getByRole("button");await u.click(a),o(m).toHaveBeenCalled(),a.blur()}},i={args:{...c.args},render:n=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{...n,size:"s","data-testid":"small-icon-button"}),e.jsx(s,{...n,"data-testid":"medium-icon-button"}),e.jsx(s,{...n,size:"l","data-testid":"large-icon-button"})]}),play:async({canvasElement:n})=>{const t=p(n),a=t.getByTestId("small-icon-button"),g=t.getByTestId("medium-icon-button"),b=t.getByTestId("large-icon-button");o(a.clientHeight).toBe(24),o(g.clientHeight).toBe(32),o(b.clientHeight).toBe(40)}},r={args:{...c.args,compactSpacing:!0},render:n=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{...n,size:"s","data-testid":"small-icon-button"}),e.jsx(s,{...n,"data-testid":"medium-icon-button"}),e.jsx(s,{...n,size:"l","data-testid":"large-icon-button"})]}),play:async({canvasElement:n})=>{const t=p(n),a=t.getByTestId("small-icon-button"),g=t.getByTestId("medium-icon-button"),b=t.getByTestId("large-icon-button");o(a.clientHeight).toBe(16),o(g.clientHeight).toBe(20),o(b.clientHeight).toBe(24)}},l={args:{name:"settings",size:"m",appearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"icon button aria label",onClick:m,badgeContent:"number",badgeCount:1,badgeType:"brand"},render:n=>e.jsx(s,{...n})},d={args:{...c.args},play:async({canvasElement:n})=>{const a=p(n).getByRole("button");await u.tab(),o(a).toHaveFocus(),await u.keyboard(_),await u.keyboard(N),o(m).toHaveBeenCalledTimes(2),a.blur()}};var I,v,f;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var T,x,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButton {...args} size="s" data-testid="small-icon-button" />
        <IconButton {...args} data-testid="medium-icon-button" />
        <IconButton {...args} size="l" data-testid="large-icon-button" />
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
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var h,S,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compactSpacing: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButton {...args} size="s" data-testid="small-icon-button" />
        <IconButton {...args} data-testid="medium-icon-button" />
        <IconButton {...args} size="l" data-testid="large-icon-button" />
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
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var k,H,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: "settings",
    size: "m",
    appearance: "outlined",
    disabled: false,
    compactSpacing: false,
    ["aria-label"]: "icon button aria label",
    onClick: mockFn,
    badgeContent: "number",
    badgeCount: 1,
    badgeType: "brand"
  },
  render: args => <IconButton {...args} />
}`,...(z=(H=l.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var j,w,R;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const X=["Default","Sizing","CompactSizing","WithBadge","KeyboardInteraction"];export{r as CompactSizing,c as Default,d as KeyboardInteraction,i as Sizing,l as WithBadge,X as __namedExportsOrder,Q as default};
