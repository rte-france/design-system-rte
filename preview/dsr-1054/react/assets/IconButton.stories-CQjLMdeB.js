import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as X,T as aa}from"./keyboard-test.constants-DC52cZHj.js";import{w as x,e as s,u as y,f as ea}from"./index-4rjIhT2C.js";import{f as na}from"./testing.utils-DmLcTX3r.js";import{R as ta,T as ra}from"./Icon-DBkoQNiA.js";import{I as n}from"./IconButton-CJDki2nw.js";import{B as h,a as oa,b as sa,d as ia,e as ca}from"./button-figma-variant-grid-mfwo6oTp.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-DjIinK9B.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./IconButton.module-CR53g8c2.js";const J="settings";function I(a){return a.charAt(0).toUpperCase()+a.slice(1)}function la({row:a}){return e.jsxs("tr",{children:[e.jsx("th",{className:"button-figma-variant-grid__row-label",scope:"row",children:a.rowLabel}),e.jsx("td",{className:"button-figma-variant-grid__cell",children:e.jsx(n,{name:J,size:a.size,appearance:a.appearance,hierarchy:a.hierarchy,isCritical:a.isCritical,isReversed:!0,iconAppearance:"outlined","aria-label":a.rowLabel})})]})}function Q(){return e.jsxs("div",{className:"button-figma-variant-grid",children:[e.jsx("section",{className:"button-figma-variant-grid__size-block",children:e.jsxs("table",{className:"button-figma-variant-grid__table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col"}),h.map(a=>e.jsx("th",{className:"button-figma-variant-grid__section-title",scope:"col",children:a.title},a.key))]})}),e.jsx("tbody",{children:oa.map(a=>e.jsxs("tr",{children:[e.jsx("th",{className:"button-figma-variant-grid__row-label",scope:"row",children:I(a)}),h.map(t=>e.jsx("td",{className:"button-figma-variant-grid__cell",children:sa(t,a)?e.jsx(n,{name:J,size:ia,appearance:t.appearance,hierarchy:a,isCritical:t.isCritical,iconAppearance:"outlined","aria-label":`${t.title} ${I(a)}`}):null},`${t.key}-${a}`))]},a))})]})}),e.jsxs("section",{className:"button-figma-variant-grid__size-block button-figma-variant-grid__reversed",children:[e.jsx("h2",{className:"button-figma-variant-grid__size-title",children:"Reverse"}),e.jsx("table",{className:"button-figma-variant-grid__table",children:e.jsx("tbody",{children:ca.map(a=>e.jsx(la,{row:a},a.rowLabel))})})]})]})}Q.__docgenInfo={description:"",methods:[],displayName:"IconButtonVariantGrid"};const f=Object.keys(ta),j=Object.keys(ra),Ta={title:"Composants/IconButton",component:n,tags:["autodocs"],argTypes:{name:{control:"select",options:[...f,...j].sort((a,t)=>a.localeCompare(t)),description:"Nom de l’icône à afficher",defaultValue:"check"},appearance:{control:"select",options:["brand","neutral","outlined","filled"],description:"Apparence du bouton (brand/neutral) ou alias déprécié icône (outlined/filled)"},hierarchy:{control:"select",options:["primary","secondary","text","transparent"]},isCritical:{control:"boolean"},isReversed:{control:"boolean"},iconAppearance:{control:"select",options:["outlined","filled"],description:"Apparence de l’icône (togglable)"},variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","reverse"]},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean",description:"Utiliser un espacement compact"},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...f,...j].sort((a,t)=>a.localeCompare(t)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"}}},v=ea(),o={args:{name:"settings",size:"m",iconAppearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"Ouvrir les paramètres",onClick:v},render:a=>e.jsx(n,{...a}),play:async({canvasElement:a})=>{const r=x(a).getByLabelText("Ouvrir les paramètres"),i=r.querySelector("svg");s(i).toHaveAttribute("aria-hidden","true"),await y.click(r),s(v).toHaveBeenCalled(),r.blur()}},c={args:{...o.args},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,variant:"primary","data-testid":"primary-icon-button"}),e.jsx(n,{...a,variant:"secondary","data-testid":"secondary-icon-button"}),e.jsx(n,{...a,variant:"text","data-testid":"text-icon-button"}),e.jsx(n,{...a,variant:"transparent","data-testid":"transparent-icon-button"}),e.jsx(n,{...a,variant:"danger","data-testid":"danger-icon-button"}),e.jsx(n,{...a,variant:"neutral","data-testid":"neutral-icon-button"}),e.jsx("div",{style:{backgroundColor:"var(--background-inverse)"},children:e.jsx(n,{...a,variant:"reverse","data-testid":"reverse-icon-button"})})]})},l={args:{name:"settings"},tags:["!autodocs"],parameters:{layout:"fullscreen"},render:()=>e.jsx(Q,{})},d={args:{...o.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(n,{...a,appearance:"brand",hierarchy:"primary","aria-label":"Brand primary"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"secondary","aria-label":"Brand secondary"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"text","aria-label":"Brand text"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent","aria-label":"Brand transparent"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"primary",isCritical:!0,"aria-label":"Critical"})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(n,{...a,appearance:"neutral",hierarchy:"primary","aria-label":"Neutral primary"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"secondary","aria-label":"Neutral secondary"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"text","aria-label":"Neutral text"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"transparent","aria-label":"Neutral transparent"})]}),e.jsx("div",{style:{background:"var(--background-inverse)",display:"inline-flex",padding:8},children:e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent",isReversed:!0,"aria-label":"Reversed"})})]})},p={args:{...o.args},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,iconAppearance:"outlined","data-testid":"outlined-icon-button"}),e.jsx(n,{...a,iconAppearance:"filled","data-testid":"filled-icon-button"})]})},u={args:{...o.args},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,size:"s","data-testid":"small-icon-button","aria-label":"Petit bouton"}),e.jsx(n,{...a,size:"m","data-testid":"medium-icon-button","aria-label":"Bouton moyen"}),e.jsx(n,{...a,size:"l","data-testid":"large-icon-button","aria-label":"Grand bouton"})]}),play:async({canvasElement:a})=>{const t=x(a),r=t.getByTestId("small-icon-button"),i=t.getByTestId("medium-icon-button"),B=t.getByTestId("large-icon-button");s(r.clientHeight).toBe(24),s(i.clientHeight).toBe(32),s(B.clientHeight).toBe(40)}},m={args:{...o.args,compactSpacing:!0},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,size:"s","data-testid":"small-icon-button","aria-label":"Petit bouton"}),e.jsx(n,{...a,size:"m","data-testid":"medium-icon-button","aria-label":"Bouton moyen"}),e.jsx(n,{...a,size:"l","data-testid":"large-icon-button","aria-label":"Grand bouton"})]}),play:async({canvasElement:a})=>{const t=x(a),r=t.getByTestId("small-icon-button"),i=t.getByTestId("medium-icon-button"),B=t.getByTestId("large-icon-button");s(r.clientHeight).toBe(16),s(i.clientHeight).toBe(20),s(B.clientHeight).toBe(24)}},g={args:{name:"settings",size:"m",iconAppearance:"outlined",disabled:!1,compactSpacing:!1,"aria-label":"icon button aria label",onClick:v,badgeContent:"number",badgeCount:1,badgeType:"brand"},render:a=>e.jsx(n,{...a})},b={args:{...o.args},play:async({canvasElement:a})=>{const r=x(a).getByRole("button",{name:"Ouvrir les paramètres"});na(),await y.tab(),s(r).toHaveFocus(),await y.keyboard(X),await y.keyboard(aa),s(v).toHaveBeenCalledTimes(2),r.blur()}};var _,T,E;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,C,N;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var k,A,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: "settings"
  },
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => <IconButtonVariantGrid />
}`,...(z=(A=l.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var R,H,G;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(H=d.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var w,O,D;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(O=p.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var F,V,W;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var K,M,P;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,L,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(L=g.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var $,q,Z;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Z=(q=b.parameters)==null?void 0:q.docs)==null?void 0:Z.source}}};const Ea=["Default","Variants","FigmaVariantGrid","ButtonAppearance","IconAppearances","Sizing","CompactSizing","WithBadge","KeyboardInteraction"];export{d as ButtonAppearance,m as CompactSizing,o as Default,l as FigmaVariantGrid,p as IconAppearances,b as KeyboardInteraction,u as Sizing,c as Variants,g as WithBadge,Ea as __namedExportsOrder,Ta as default};
