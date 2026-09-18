import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{T as P,a as V}from"./keyboard-test.constants-By8W48aj.js";import{w as v,e as s,u as g,f as Y}from"./index-4rjIhT2C.js";import{f as q}from"./testing.utils-r13wRTL2.js";import{R as L,T as W}from"./Icon-VewZnR13.js";import{I as e}from"./IconButton-CqYdVntE.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-CJxonyEE.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-BP1JXoFH.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";const y=Object.keys(L),I=Object.keys(W),it={title:"Composants/IconButton",component:e,tags:["autodocs"],argTypes:{name:{control:"select",options:[...y,...I].sort((t,a)=>t.localeCompare(a)),description:"Nom de l’icône à afficher",defaultValue:"check"},variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","inverse"]},appearance:{control:"select",options:["outlined","filled"],description:"Apparence de l’icône (pour les icônes togglables)",defaultValue:"outlined"},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean",description:"Utiliser un espacement compact"},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...y,...I].sort((t,a)=>t.localeCompare(a)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"}}},b=Y(),r={args:{name:"settings",size:"m",appearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"Ouvrir les paramètres",onClick:b},render:t=>n.jsx(e,{...t}),play:async({canvasElement:t})=>{const o=v(t).getByLabelText("Ouvrir les paramètres"),i=o.querySelector("svg");s(i).toHaveAttribute("aria-hidden","true"),await g.click(o),s(b).toHaveBeenCalled(),o.blur()}},c={args:{...r.args},render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(e,{...t,variant:"primary","data-testid":"primary-icon-button"}),n.jsx(e,{...t,variant:"secondary","data-testid":"secondary-icon-button"}),n.jsx(e,{...t,variant:"text","data-testid":"text-icon-button"}),n.jsx(e,{...t,variant:"transparent","data-testid":"transparent-icon-button"}),n.jsx(e,{...t,variant:"danger","data-testid":"danger-icon-button"}),n.jsx(e,{...t,variant:"neutral","data-testid":"neutral-icon-button"}),n.jsx("div",{style:{backgroundColor:"var(--background-inverse)"},children:n.jsx(e,{...t,variant:"reverse","data-testid":"reverse-icon-button"})})]})},l={args:{...r.args},render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(e,{...t,appearance:"outlined","data-testid":"outlined-icon-button"}),n.jsx(e,{...t,appearance:"filled","data-testid":"filled-icon-button"})]})},d={args:{...r.args},render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(e,{...t,size:"s","data-testid":"small-icon-button","aria-label":"Petit bouton"}),n.jsx(e,{...t,size:"m","data-testid":"medium-icon-button","aria-label":"Bouton moyen"}),n.jsx(e,{...t,size:"l","data-testid":"large-icon-button","aria-label":"Grand bouton"})]}),play:async({canvasElement:t})=>{const a=v(t),o=a.getByTestId("small-icon-button"),i=a.getByTestId("medium-icon-button"),B=a.getByTestId("large-icon-button");s(o.clientHeight).toBe(24),s(i.clientHeight).toBe(32),s(B.clientHeight).toBe(40)}},u={args:{...r.args,compactSpacing:!0},render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(e,{...t,size:"s","data-testid":"small-icon-button","aria-label":"Petit bouton"}),n.jsx(e,{...t,size:"m","data-testid":"medium-icon-button","aria-label":"Bouton moyen"}),n.jsx(e,{...t,size:"l","data-testid":"large-icon-button","aria-label":"Grand bouton"})]}),play:async({canvasElement:t})=>{const a=v(t),o=a.getByTestId("small-icon-button"),i=a.getByTestId("medium-icon-button"),B=a.getByTestId("large-icon-button");s(o.clientHeight).toBe(16),s(i.clientHeight).toBe(20),s(B.clientHeight).toBe(24)}},m={args:{name:"settings",size:"m",appearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"icon button aria label",onClick:b,badgeContent:"number",badgeCount:1,badgeType:"brand"},render:t=>n.jsx(e,{...t})},p={args:{...r.args},play:async({canvasElement:t})=>{const o=v(t).getByRole("button",{name:"Ouvrir les paramètres"});q(),await g.tab(),s(o).toHaveFocus(),await g.keyboard(P),await g.keyboard(V),s(b).toHaveBeenCalledTimes(2),o.blur()}};var x,f,T;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: "settings",
    size: "m",
    appearance: "outlined",
    disabled: false,
    compactSpacing: false,
    ["aria-label"]: "Ouvrir les paramètres",
    onClick: mockFn
  },
  render: args => <IconButton {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByLabelText("Ouvrir les paramètres");
    const iconSvg = iconButton.querySelector("svg");
    expect(iconSvg).toHaveAttribute("aria-hidden", "true");
    await userEvent.click(iconButton);
    expect(mockFn).toHaveBeenCalled();
    iconButton.blur();
  }
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var h,E,S;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButton {...args} variant="primary" data-testid="primary-icon-button" />
        <IconButton {...args} variant="secondary" data-testid="secondary-icon-button" />
        <IconButton {...args} variant="text" data-testid="text-icon-button" />
        <IconButton {...args} variant="transparent" data-testid="transparent-icon-button" />
        <IconButton {...args} variant="danger" data-testid="danger-icon-button" />
        <IconButton {...args} variant="neutral" data-testid="neutral-icon-button" />
        <div style={{
        backgroundColor: "var(--background-inverse)"
      }}>
          <IconButton {...args} variant="reverse" data-testid="reverse-icon-button" />
        </div>
      </div>;
  }
}`,...(S=(E=c.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var j,C,k;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButton {...args} appearance="outlined" data-testid="outlined-icon-button" />
        <IconButton {...args} appearance="filled" data-testid="filled-icon-button" />
      </div>;
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var z,H,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButton {...args} size="s" data-testid="small-icon-button" aria-label="Petit bouton" />
        <IconButton {...args} size="m" data-testid="medium-icon-button" aria-label="Bouton moyen" />
        <IconButton {...args} size="l" data-testid="large-icon-button" aria-label="Grand bouton" />
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
}`,...(w=(H=d.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var _,N,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compactSpacing: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButton {...args} size="s" data-testid="small-icon-button" aria-label="Petit bouton" />
        <IconButton {...args} size="m" data-testid="medium-icon-button" aria-label="Bouton moyen" />
        <IconButton {...args} size="l" data-testid="large-icon-button" aria-label="Grand bouton" />
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
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var G,R,A;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(A=(R=m.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,F,K;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: "Ouvrir les paramètres"
    });
    focusElementBeforeComponent();
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  }
}`,...(K=(F=p.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const ct=["Default","Variants","Appearances","Sizing","CompactSizing","WithBadge","KeyboardInteraction"];export{l as Appearances,u as CompactSizing,r as Default,p as KeyboardInteraction,d as Sizing,c as Variants,m as WithBadge,ct as __namedExportsOrder,it as default};
