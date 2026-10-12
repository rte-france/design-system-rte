import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as ee,a as ae}from"./keyboard-test.constants-By8W48aj.js";import{w as v,u as i,e as l,f as Z}from"./index-4rjIhT2C.js";import{f as re}from"./testing.utils-DmLcTX3r.js";import{R as ne,T as te}from"./Icon-DBkoQNiA.js";import{B as r}from"./Button-De-zPopW.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-CJxonyEE.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DUkuUEsZ.js";import"./index-DJ8f9STe.js";const B=Object.keys(ne),f=Object.keys(te),ve={title:"Composants/Button/Button",component:r,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["brand","neutral"]},hierarchy:{control:"select",options:["primary","secondary","text","transparent"]},isCritical:{control:"boolean"},isReversed:{control:"boolean"},variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","reverse"],description:"Deprecated flat visual alias."},size:{control:"select",options:["s","m","l"]},iconPosition:{control:"select",options:["left","right"]},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...B,...f].sort((e,t)=>e.localeCompare(t)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"},icon:{control:"select",options:[...B,...f].sort((e,t)=>e.localeCompare(t)),description:"Nom de l’icône à afficher sur le bouton"},iconAppearance:{control:"select",options:["filled","outlined"],description:"Apparence de l’icône du bouton"}},args:{onClick:Z()}},o=Z(),n={args:{appearance:"brand",hierarchy:"primary",label:"Button",onClick:o},play:async({canvasElement:e})=>{const s=v(e).getByRole("button",{name:"Button"});await i.click(s),l(o).toHaveBeenCalled(),s.blur()}},c={args:{...n.args},render:e=>a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(r,{...e,size:"s",label:"Small","data-testid":"small-button"}),a.jsx(r,{...e,label:"Medium","data-testid":"medium-button"}),a.jsx(r,{...e,size:"l",label:"Large","data-testid":"large-button"})]}),play:async({canvasElement:e})=>{const t=v(e),s=t.getByTestId("small-button"),x=t.getByTestId("medium-button"),$=t.getByTestId("large-button");l(s.clientHeight).toBe(24),l(x.clientHeight).toBe(32),l($.clientHeight).toBe(40)}},p={args:{...n.args,icon:"add-circle",label:"Button with Icon"},render:e=>a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(r,{...e,iconPosition:"left",iconAppearance:"filled"}),a.jsx(r,{...e,iconPosition:"right",icon:"add-circle",iconAppearance:"outlined"})]})},d={args:{...n.args},render:e=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(r,{...e,appearance:"brand",hierarchy:"primary",label:"Primary"}),a.jsx(r,{...e,appearance:"brand",hierarchy:"secondary",label:"Secondary"}),a.jsx(r,{...e,appearance:"brand",hierarchy:"text",label:"Text"}),a.jsx(r,{...e,appearance:"brand",hierarchy:"transparent",label:"Transparent"})]})},u={args:{...n.args},render:e=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(r,{...e,appearance:"neutral",hierarchy:"primary",label:"Neutral primary"}),a.jsx(r,{...e,appearance:"neutral",hierarchy:"secondary",label:"Neutral secondary"}),a.jsx(r,{...e,appearance:"neutral",hierarchy:"text",label:"Neutral text"}),a.jsx(r,{...e,appearance:"neutral",hierarchy:"transparent",label:"Neutral transparent"})]})},b={args:{...n.args,disabled:!0,onClick:o},render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(r,{...e,appearance:"brand",hierarchy:"primary",label:"Primary"}),a.jsx(r,{...e,appearance:"brand",hierarchy:"secondary",label:"Secondary"}),a.jsx(r,{...e,appearance:"brand",hierarchy:"text",label:"Text"}),a.jsx(r,{...e,appearance:"brand",hierarchy:"transparent",label:"Transparent"}),a.jsx(r,{...e,appearance:"brand",hierarchy:"primary",isCritical:!0,label:"Critical"})]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(r,{...e,appearance:"neutral",hierarchy:"primary",label:"Neutral primary"}),a.jsx(r,{...e,appearance:"neutral",hierarchy:"secondary",label:"Neutral secondary"}),a.jsx(r,{...e,appearance:"neutral",hierarchy:"text",label:"Neutral text"}),a.jsx(r,{...e,appearance:"neutral",hierarchy:"transparent",label:"Neutral transparent"})]}),a.jsxs("div",{style:{background:"var(--background-inverse)",padding:16,borderRadius:8,display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(r,{...e,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed"}),a.jsx(r,{...e,appearance:"neutral",hierarchy:"primary",isReversed:!0,label:"Neutral reversed"})]})]}),play:async({canvasElement:e})=>{o.mockClear();const s=v(e).getAllByRole("button");for(const x of s)l(x).toBeDisabled();await i.click(s[0]),l(o).not.toHaveBeenCalled()}},y={args:{...n.args},render:e=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[a.jsx(r,{...e,appearance:"brand",hierarchy:"primary",isCritical:!0,label:"Critical"}),a.jsxs("div",{style:{background:"var(--background-inverse)",padding:16,borderRadius:8,display:"flex",gap:8,alignItems:"center"},children:[a.jsx(r,{...e,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed S",size:"s"}),a.jsx(r,{...e,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed M"}),a.jsx(r,{...e,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed L",size:"l"}),a.jsx(r,{...e,appearance:"neutral",hierarchy:"primary",isReversed:!0,label:"Neutral reversed"})]})]})},g={args:{label:"Button",onClick:o},render:e=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(r,{...e,variant:"primary",label:"Primary"}),a.jsx(r,{...e,variant:"secondary",label:"Secondary"}),a.jsx(r,{...e,variant:"text",label:"Text"}),a.jsx(r,{...e,variant:"transparent",label:"Transparent"}),a.jsx(r,{...e,variant:"danger",label:"Danger"}),a.jsx(r,{...e,variant:"neutral",label:"Neutral"}),a.jsx("div",{style:{background:"var(--background-inverse)",padding:8,borderRadius:8},children:a.jsx(r,{...e,variant:"reverse",label:"Reverse"})})]})},m={args:{...n.args,badgeContent:"number",badgeCount:5,badgeType:"indicator"},render:e=>a.jsx(r,{...e,label:"Button with Badge"})},h={tags:["!autodocs"],args:{...n.args},play:async({canvasElement:e})=>{const t=v(e);re();const s=t.getByRole("button",{name:"Button"});await i.tab(),l(s).toHaveFocus(),await i.keyboard(ee),await i.keyboard(ae),l(o).toHaveBeenCalledTimes(2),s.blur()}};var j,R,k;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    appearance: "brand",
    hierarchy: "primary",
    label: "Button",
    onClick: mockFn
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: "Button"
    });
    await userEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
    button.blur();
  }
}`,...(k=(R=n.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var T,C,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Button {...args} size="s" label="Small" data-testid="small-button" />
        <Button {...args} label="Medium" data-testid="medium-button" />
        <Button {...args} size="l" label="Large" data-testid="large-button" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallButton = canvas.getByTestId("small-button");
    const mediumButton = canvas.getByTestId("medium-button");
    const largeButton = canvas.getByTestId("large-button");
    expect(smallButton.clientHeight).toBe(24);
    expect(mediumButton.clientHeight).toBe(32);
    expect(largeButton.clientHeight).toBe(40);
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var N,E,S;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: "add-circle",
    label: "Button with Icon"
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Button {...args} iconPosition="left" iconAppearance="filled" />
        <Button {...args} iconPosition="right" icon="add-circle" iconAppearance="outlined" />
      </div>;
  }
}`,...(S=(E=p.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var I,D,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }}>
        <Button {...args} appearance="brand" hierarchy="primary" label="Primary" />
        <Button {...args} appearance="brand" hierarchy="secondary" label="Secondary" />
        <Button {...args} appearance="brand" hierarchy="text" label="Text" />
        <Button {...args} appearance="brand" hierarchy="transparent" label="Transparent" />
      </div>;
  }
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var W,P,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }}>
        <Button {...args} appearance="neutral" hierarchy="primary" label="Neutral primary" />
        <Button {...args} appearance="neutral" hierarchy="secondary" label="Neutral secondary" />
        <Button {...args} appearance="neutral" hierarchy="text" label="Neutral text" />
        <Button {...args} appearance="neutral" hierarchy="transparent" label="Neutral transparent" />
      </div>;
  }
}`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var z,F,_;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    onClick: mockFn
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }}>
          <Button {...args} appearance="brand" hierarchy="primary" label="Primary" />
          <Button {...args} appearance="brand" hierarchy="secondary" label="Secondary" />
          <Button {...args} appearance="brand" hierarchy="text" label="Text" />
          <Button {...args} appearance="brand" hierarchy="transparent" label="Transparent" />
          <Button {...args} appearance="brand" hierarchy="primary" isCritical label="Critical" />
        </div>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }}>
          <Button {...args} appearance="neutral" hierarchy="primary" label="Neutral primary" />
          <Button {...args} appearance="neutral" hierarchy="secondary" label="Neutral secondary" />
          <Button {...args} appearance="neutral" hierarchy="text" label="Neutral text" />
          <Button {...args} appearance="neutral" hierarchy="transparent" label="Neutral transparent" />
        </div>
        <div style={{
        background: "var(--background-inverse)",
        padding: 16,
        borderRadius: 8,
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }}>
          <Button {...args} appearance="brand" hierarchy="transparent" isReversed label="Reversed" />
          <Button {...args} appearance="neutral" hierarchy="primary" isReversed label="Neutral reversed" />
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    mockFn.mockClear();
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    for (const button of buttons) {
      expect(button).toBeDisabled();
    }
    await userEvent.click(buttons[0]);
    expect(mockFn).not.toHaveBeenCalled();
  }
}`,...(_=(F=b.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var K,L,G;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      alignItems: "center"
    }}>
        <Button {...args} appearance="brand" hierarchy="primary" isCritical label="Critical" />
        <div style={{
        background: "var(--background-inverse)",
        padding: 16,
        borderRadius: 8,
        display: "flex",
        gap: 8,
        alignItems: "center"
      }}>
          <Button {...args} appearance="brand" hierarchy="transparent" isReversed label="Reversed S" size="s" />
          <Button {...args} appearance="brand" hierarchy="transparent" isReversed label="Reversed M" />
          <Button {...args} appearance="brand" hierarchy="transparent" isReversed label="Reversed L" size="l" />
          <Button {...args} appearance="neutral" hierarchy="primary" isReversed label="Neutral reversed" />
        </div>
      </div>;
  }
}`,...(G=(L=y.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var M,Y,O;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Button",
    onClick: mockFn
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }}>
        <Button {...args} variant="primary" label="Primary" />
        <Button {...args} variant="secondary" label="Secondary" />
        <Button {...args} variant="text" label="Text" />
        <Button {...args} variant="transparent" label="Transparent" />
        <Button {...args} variant="danger" label="Danger" />
        <Button {...args} variant="neutral" label="Neutral" />
        <div style={{
        background: "var(--background-inverse)",
        padding: 8,
        borderRadius: 8
      }}>
          <Button {...args} variant="reverse" label="Reverse" />
        </div>
      </div>;
  }
}`,...(O=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var V,q,J;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    badgeContent: "number",
    badgeCount: 5,
    badgeType: "indicator"
  },
  render: args => {
    return <Button {...args} label="Button with Badge" />;
  }
}`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent();
    const button = canvas.getByRole("button", {
      name: "Button"
    });
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const xe=["Default","Sizing","WithIcon","BrandHierarchies","NeutralHierarchies","Disabled","CriticalAndReversed","LegacyVariants","WithBadge","KeyboardInteraction"];export{d as BrandHierarchies,y as CriticalAndReversed,n as Default,b as Disabled,h as KeyboardInteraction,g as LegacyVariants,u as NeutralHierarchies,c as Sizing,m as WithBadge,p as WithIcon,xe as __namedExportsOrder,ve as default};
