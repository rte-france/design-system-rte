import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as q,a as L}from"./keyboard-test.constants-By8W48aj.js";import{w as v,e as s,u as g,f as U}from"./index-4rjIhT2C.js";import{f as J}from"./testing.utils-DmLcTX3r.js";import{R as M,T as Q}from"./Icon-DBkoQNiA.js";import{I as n}from"./IconButton-DeSdYuQk.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-eNlmcvUj.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DUkuUEsZ.js";import"./index-DJ8f9STe.js";import"./IconButton.module-Ta5HYfRS.js";const x=Object.keys(M),h=Object.keys(Q),pa={title:"Composants/IconButton",component:n,tags:["autodocs"],argTypes:{name:{control:"select",options:[...x,...h].sort((a,t)=>a.localeCompare(t)),description:"Nom de l’icône à afficher",defaultValue:"check"},appearance:{control:"select",options:["brand","neutral","outlined","filled"],description:"Apparence du shell (brand/neutral) ou alias déprécié icône (outlined/filled)"},hierarchy:{control:"select",options:["primary","secondary","text","transparent"]},isCritical:{control:"boolean"},isReversed:{control:"boolean"},iconAppearance:{control:"select",options:["outlined","filled"],description:"Apparence de l’icône (togglable)"},variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","reverse"]},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean",description:"Utiliser un espacement compact"},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...x,...h].sort((a,t)=>a.localeCompare(t)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"}}},y=U(),o={args:{name:"settings",size:"m",iconAppearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"Ouvrir les paramètres",onClick:y},render:a=>e.jsx(n,{...a}),play:async({canvasElement:a})=>{const r=v(a).getByLabelText("Ouvrir les paramètres"),i=r.querySelector("svg");s(i).toHaveAttribute("aria-hidden","true"),await g.click(r),s(y).toHaveBeenCalled(),r.blur()}},c={args:{...o.args},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,variant:"primary","data-testid":"primary-icon-button"}),e.jsx(n,{...a,variant:"secondary","data-testid":"secondary-icon-button"}),e.jsx(n,{...a,variant:"text","data-testid":"text-icon-button"}),e.jsx(n,{...a,variant:"transparent","data-testid":"transparent-icon-button"}),e.jsx(n,{...a,variant:"danger","data-testid":"danger-icon-button"}),e.jsx(n,{...a,variant:"neutral","data-testid":"neutral-icon-button"}),e.jsx("div",{style:{backgroundColor:"var(--background-inverse)"},children:e.jsx(n,{...a,variant:"reverse","data-testid":"reverse-icon-button"})})]})},l={args:{...o.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(n,{...a,appearance:"brand",hierarchy:"primary","aria-label":"Brand primary"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"secondary","aria-label":"Brand secondary"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"text","aria-label":"Brand text"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent","aria-label":"Brand transparent"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"primary",isCritical:!0,"aria-label":"Critical"})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(n,{...a,appearance:"neutral",hierarchy:"primary","aria-label":"Neutral primary"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"secondary","aria-label":"Neutral secondary"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"text","aria-label":"Neutral text"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"transparent","aria-label":"Neutral transparent"})]}),e.jsx("div",{style:{background:"var(--background-inverse)",display:"inline-flex",padding:8},children:e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent",isReversed:!0,"aria-label":"Reversed"})})]})},d={args:{...o.args},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,iconAppearance:"outlined","data-testid":"outlined-icon-button"}),e.jsx(n,{...a,iconAppearance:"filled","data-testid":"filled-icon-button"})]})},p={args:{...o.args},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,size:"s","data-testid":"small-icon-button","aria-label":"Petit bouton"}),e.jsx(n,{...a,size:"m","data-testid":"medium-icon-button","aria-label":"Bouton moyen"}),e.jsx(n,{...a,size:"l","data-testid":"large-icon-button","aria-label":"Grand bouton"})]}),play:async({canvasElement:a})=>{const t=v(a),r=t.getByTestId("small-icon-button"),i=t.getByTestId("medium-icon-button"),B=t.getByTestId("large-icon-button");s(r.clientHeight).toBe(24),s(i.clientHeight).toBe(32),s(B.clientHeight).toBe(40)}},u={args:{...o.args,compactSpacing:!0},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,size:"s","data-testid":"small-icon-button","aria-label":"Petit bouton"}),e.jsx(n,{...a,size:"m","data-testid":"medium-icon-button","aria-label":"Bouton moyen"}),e.jsx(n,{...a,size:"l","data-testid":"large-icon-button","aria-label":"Grand bouton"})]}),play:async({canvasElement:a})=>{const t=v(a),r=t.getByTestId("small-icon-button"),i=t.getByTestId("medium-icon-button"),B=t.getByTestId("large-icon-button");s(r.clientHeight).toBe(16),s(i.clientHeight).toBe(20),s(B.clientHeight).toBe(24)}},m={args:{name:"settings",size:"m",iconAppearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"icon button aria label",onClick:y,badgeContent:"number",badgeCount:1,badgeType:"brand"},render:a=>e.jsx(n,{...a})},b={args:{...o.args},play:async({canvasElement:a})=>{const r=v(a).getByRole("button",{name:"Ouvrir les paramètres"});J(),await g.tab(),s(r).toHaveFocus(),await g.keyboard(q),await g.keyboard(L),s(y).toHaveBeenCalledTimes(2),r.blur()}};var I,f,j;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: "settings",
    size: "m",
    iconAppearance: "outlined",
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
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var T,S,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var C,k,z;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <div style={{
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }}>
        <IconButton {...args} appearance="brand" hierarchy="primary" aria-label="Brand primary" />
        <IconButton {...args} appearance="brand" hierarchy="secondary" aria-label="Brand secondary" />
        <IconButton {...args} appearance="brand" hierarchy="text" aria-label="Brand text" />
        <IconButton {...args} appearance="brand" hierarchy="transparent" aria-label="Brand transparent" />
        <IconButton {...args} appearance="brand" hierarchy="primary" isCritical aria-label="Critical" />
      </div>
      <div style={{
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }}>
        <IconButton {...args} appearance="neutral" hierarchy="primary" aria-label="Neutral primary" />
        <IconButton {...args} appearance="neutral" hierarchy="secondary" aria-label="Neutral secondary" />
        <IconButton {...args} appearance="neutral" hierarchy="text" aria-label="Neutral text" />
        <IconButton {...args} appearance="neutral" hierarchy="transparent" aria-label="Neutral transparent" />
      </div>
      <div style={{
      background: "var(--background-inverse)",
      display: "inline-flex",
      padding: 8
    }}>
        <IconButton {...args} appearance="brand" hierarchy="transparent" isReversed aria-label="Reversed" />
      </div>
    </div>
}`,...(z=(k=l.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var H,A,w;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div style={{
    display: "flex",
    gap: 8
  }}>
      <IconButton {...args} iconAppearance="outlined" data-testid="outlined-icon-button" />
      <IconButton {...args} iconAppearance="filled" data-testid="filled-icon-button" />
    </div>
}`,...(w=(A=d.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var N,R,D;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(R=p.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var _,O,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(O=u.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var F,K,P;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: "settings",
    size: "m",
    iconAppearance: "outlined",
    disabled: false,
    compactSpacing: false,
    ["aria-label"]: "icon button aria label",
    onClick: mockFn,
    badgeContent: "number",
    badgeCount: 1,
    badgeType: "brand"
  },
  render: args => <IconButton {...args} />
}`,...(P=(K=m.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var W,V,Y;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(V=b.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};const ua=["Default","Variants","ShellAppearance","IconAppearances","Sizing","CompactSizing","WithBadge","KeyboardInteraction"];export{u as CompactSizing,o as Default,d as IconAppearances,b as KeyboardInteraction,l as ShellAppearance,p as Sizing,c as Variants,m as WithBadge,ua as __namedExportsOrder,pa as default};
