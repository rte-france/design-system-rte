import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{T as A,a as V}from"./keyboard-test.constants-By8W48aj.js";import{w as b,u as p,e as r,f as Y}from"./index-4rjIhT2C.js";import{f as L}from"./testing.utils-r13wRTL2.js";import{R as W,T as U}from"./Icon-DgLH6pPJ.js";import{I as e}from"./IconButton-D7Ub3mhB.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-CJxonyEE.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DkJhvK8e.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";const y=Object.keys(W),I=Object.keys(U),it={title:"Composants/IconButton",component:e,tags:["autodocs"],argTypes:{name:{control:"select",options:[...y,...I].sort((t,a)=>t.localeCompare(a)),description:"Nom de l’icône à afficher",defaultValue:"check"},variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","inverse"]},appearance:{control:"select",options:["outlined","filled"],description:"Apparence de l’icône (pour les icônes togglables)",defaultValue:"outlined"},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean",description:"Utiliser un espacement compact"},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...y,...I].sort((t,a)=>t.localeCompare(a)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"}}},g=Y(),s={args:{name:"settings",size:"m",appearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"Ouvrir les paramètres",onClick:g},render:t=>n.jsx(e,{...t}),play:async({canvasElement:t})=>{const o=b(t).getByLabelText("Ouvrir les paramètres");await p.click(o),r(g).toHaveBeenCalled(),o.blur()}},i={args:{...s.args},render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(e,{...t,variant:"primary","data-testid":"primary-icon-button"}),n.jsx(e,{...t,variant:"secondary","data-testid":"secondary-icon-button"}),n.jsx(e,{...t,variant:"text","data-testid":"text-icon-button"}),n.jsx(e,{...t,variant:"transparent","data-testid":"transparent-icon-button"}),n.jsx(e,{...t,variant:"danger","data-testid":"danger-icon-button"}),n.jsx(e,{...t,variant:"neutral","data-testid":"neutral-icon-button"}),n.jsx("div",{style:{backgroundColor:"var(--background-inverse)"},children:n.jsx(e,{...t,variant:"reverse","data-testid":"reverse-icon-button"})})]})},c={args:{...s.args},render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(e,{...t,appearance:"outlined","data-testid":"outlined-icon-button"}),n.jsx(e,{...t,appearance:"filled","data-testid":"filled-icon-button"})]})},l={args:{...s.args},render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(e,{...t,size:"s","data-testid":"small-icon-button","aria-label":"Petit bouton"}),n.jsx(e,{...t,size:"m","data-testid":"medium-icon-button","aria-label":"Bouton moyen"}),n.jsx(e,{...t,size:"l","data-testid":"large-icon-button","aria-label":"Grand bouton"})]}),play:async({canvasElement:t})=>{const a=b(t),o=a.getByTestId("small-icon-button"),v=a.getByTestId("medium-icon-button"),B=a.getByTestId("large-icon-button");r(o.clientHeight).toBe(24),r(v.clientHeight).toBe(32),r(B.clientHeight).toBe(40)}},d={args:{...s.args,compactSpacing:!0},render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(e,{...t,size:"s","data-testid":"small-icon-button","aria-label":"Petit bouton"}),n.jsx(e,{...t,size:"m","data-testid":"medium-icon-button","aria-label":"Bouton moyen"}),n.jsx(e,{...t,size:"l","data-testid":"large-icon-button","aria-label":"Grand bouton"})]}),play:async({canvasElement:t})=>{const a=b(t),o=a.getByTestId("small-icon-button"),v=a.getByTestId("medium-icon-button"),B=a.getByTestId("large-icon-button");r(o.clientHeight).toBe(16),r(v.clientHeight).toBe(20),r(B.clientHeight).toBe(24)}},u={args:{name:"settings",size:"m",appearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"icon button aria label",onClick:g,badgeContent:"number",badgeCount:1,badgeType:"brand"},render:t=>n.jsx(e,{...t})},m={args:{...s.args},play:async({canvasElement:t})=>{const o=b(t).getByRole("button",{name:"Ouvrir les paramètres"});L(),await p.tab(),r(o).toHaveFocus(),await p.keyboard(A),await p.keyboard(V),r(g).toHaveBeenCalledTimes(2),o.blur()}};var f,x,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    await userEvent.click(iconButton);
    expect(mockFn).toHaveBeenCalled();
    iconButton.blur();
  }
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var E,h,j;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var C,S,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var z,H,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(H=l.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var _,N,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var G,R,D;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var F,K,P;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(K=m.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const ct=["Default","Variants","Appearances","Sizing","CompactSizing","WithBadge","KeyboardInteraction"];export{c as Appearances,d as CompactSizing,s as Default,m as KeyboardInteraction,l as Sizing,i as Variants,u as WithBadge,ct as __namedExportsOrder,it as default};
