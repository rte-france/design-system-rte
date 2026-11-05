import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as ge,T as ye}from"./keyboard-test.constants-DC52cZHj.js";import{w as R,u,e as i,f as pe}from"./index-4rjIhT2C.js";import{f as me}from"./testing.utils-DmLcTX3r.js";import{R as he,T as xe}from"./Icon-DBkoQNiA.js";import{B as n}from"./Button-B3EnjUD7.js";import{B as A,a as ve,b as fe,c as ue,d as T,e as Be}from"./button-figma-variant-grid-mfwo6oTp.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-DjIinK9B.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";function je(a){return a.charAt(0).toUpperCase()+a.slice(1)}function Ce({row:a}){return e.jsxs("tr",{children:[e.jsx("th",{className:"button-figma-variant-grid__row-label",scope:"row",children:a.rowLabel}),e.jsx("td",{className:"button-figma-variant-grid__cell",children:e.jsx(n,{size:a.size,appearance:a.appearance,hierarchy:a.hierarchy,isCritical:a.isCritical,isReversed:!0,label:ue[a.size]})})]})}function be(){const a=ue[T];return e.jsxs("div",{className:"button-figma-variant-grid",children:[e.jsx("section",{className:"button-figma-variant-grid__size-block",children:e.jsxs("table",{className:"button-figma-variant-grid__table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col"}),A.map(r=>e.jsx("th",{className:"button-figma-variant-grid__section-title",scope:"col",children:r.title},r.key))]})}),e.jsx("tbody",{children:ve.map(r=>e.jsxs("tr",{children:[e.jsx("th",{className:"button-figma-variant-grid__row-label",scope:"row",children:je(r)}),A.map(t=>e.jsx("td",{className:"button-figma-variant-grid__cell",children:fe(t,r)?e.jsx(n,{size:T,appearance:t.appearance,hierarchy:r,isCritical:t.isCritical,label:a}):null},`${t.key}-${r}`))]},r))})]})}),e.jsxs("section",{className:"button-figma-variant-grid__size-block button-figma-variant-grid__reversed",children:[e.jsx("h2",{className:"button-figma-variant-grid__size-title",children:"Reverse"}),e.jsx("table",{className:"button-figma-variant-grid__table",children:e.jsx("tbody",{children:Be.map(r=>e.jsx(Ce,{row:r},r.rowLabel))})})]})]})}be.__docgenInfo={description:"",methods:[],displayName:"ButtonVariantGrid"};const w=Object.keys(he),S=Object.keys(xe),ze={title:"Composants/Button/Button",component:n,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["brand","neutral"]},hierarchy:{control:"select",options:["primary","secondary","text","transparent"]},isCritical:{control:"boolean"},isReversed:{control:"boolean"},variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","reverse"],description:"Deprecated flat visual alias."},size:{control:"select",options:["s","m","l"]},iconPosition:{control:"select",options:["left","right"]},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...w,...S].sort((a,r)=>a.localeCompare(r)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"},icon:{control:"select",options:[...w,...S].sort((a,r)=>a.localeCompare(r)),description:"Nom de l’icône à afficher sur le bouton"},iconAppearance:{control:"select",options:["filled","outlined"],description:"Apparence de l’icône du bouton"}},args:{onClick:pe()}},o=pe(),s={args:{appearance:"brand",hierarchy:"primary",label:"Button",onClick:o},play:async({canvasElement:a})=>{const t=R(a).getByRole("button",{name:"Button"});await u.click(t),i(o).toHaveBeenCalled(),t.blur()}},b={args:{...s.args},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,size:"s",label:"Small","data-testid":"small-button"}),e.jsx(n,{...a,label:"Medium","data-testid":"medium-button"}),e.jsx(n,{...a,size:"l",label:"Large","data-testid":"large-button"})]}),play:async({canvasElement:a})=>{const r=R(a),t=r.getByTestId("small-button"),c=r.getByTestId("medium-button"),l=r.getByTestId("large-button");i(t.clientHeight).toBe(24),i(c.clientHeight).toBe(32),i(l.clientHeight).toBe(40)}},g={args:{...s.args,icon:"add-circle",label:"Button with Icon"},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,iconPosition:"left",iconAppearance:"filled"}),e.jsx(n,{...a,iconPosition:"right",icon:"add-circle",iconAppearance:"outlined"})]})},y={args:{label:"Button"},tags:["!autodocs"],parameters:{layout:"fullscreen"},render:()=>e.jsx(be,{})},m={args:{...s.args},render:a=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(n,{...a,appearance:"brand",hierarchy:"primary",label:"Primary"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"secondary",label:"Secondary"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"text",label:"Text"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent",label:"Transparent"})]})},h={args:{...s.args},render:a=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(n,{...a,appearance:"neutral",hierarchy:"primary",label:"Neutral primary"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"secondary",label:"Neutral secondary"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"text",label:"Neutral text"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"transparent",label:"Neutral transparent"})]})},x={args:{...s.args,disabled:!0,onClick:o},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(n,{...a,appearance:"brand",hierarchy:"primary",label:"Primary"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"secondary",label:"Secondary"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"text",label:"Text"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent",label:"Transparent"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"primary",isCritical:!0,label:"Critical"})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(n,{...a,appearance:"neutral",hierarchy:"primary",label:"Neutral primary"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"secondary",label:"Neutral secondary"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"text",label:"Neutral text"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"transparent",label:"Neutral transparent"})]}),e.jsxs("div",{style:{background:"var(--background-inverse)",padding:16,borderRadius:8,display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"primary",isReversed:!0,label:"Neutral reversed"})]})]}),play:async({canvasElement:a})=>{o.mockClear();const t=R(a).getAllByRole("button");for(const c of t)i(c).toBeDisabled();await u.click(t[0]),i(o).not.toHaveBeenCalled()}},v={args:{...s.args},render:a=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[e.jsx(n,{...a,appearance:"brand",hierarchy:"primary",isCritical:!0,label:"Critical"}),e.jsxs("div",{style:{background:"var(--background-inverse)",padding:16,borderRadius:8,display:"flex",gap:8,alignItems:"center"},children:[e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed S",size:"s"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed M"}),e.jsx(n,{...a,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed L",size:"l"}),e.jsx(n,{...a,appearance:"neutral",hierarchy:"primary",isReversed:!0,label:"Neutral reversed"})]})]})},f={args:{label:"Button",onClick:o},render:a=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(n,{...a,variant:"primary",label:"Primary"}),e.jsx(n,{...a,variant:"secondary",label:"Secondary"}),e.jsx(n,{...a,variant:"text",label:"Text"}),e.jsx(n,{...a,variant:"transparent",label:"Transparent"}),e.jsx(n,{...a,variant:"danger",label:"Danger"}),e.jsx(n,{...a,variant:"neutral",label:"Neutral"}),e.jsx("div",{style:{background:"var(--background-inverse)",padding:8,borderRadius:8},children:e.jsx(n,{...a,variant:"reverse",label:"Reverse"})})]})},B={args:{...s.args,badgeContent:"number",badgeCount:5,badgeType:"indicator"},render:a=>e.jsx(n,{...a,label:"Button with Badge"})},d={display:"flex",flexDirection:"column",alignItems:"flex-start",gap:8},p={color:"var(--content-secondary)",fontSize:12,margin:0},j={tags:["!autodocs"],parameters:{docs:{description:{story:"Manual check (React): row 2 — **filled** with/without badge (should match; bug = ring on the badged button). Row 3 — **outlined** with/without badge (often identical even when broken, because missing `appearance` on `Icon` already renders outlined)."}}},args:{...s.args,icon:"add-circle",iconPosition:"left",iconAppearance:"filled",label:"Filled icon",badgeContent:"number",badgeCount:3,badgeType:"indicator"},render:a=>{const{badgeContent:r,badgeCount:t,badgeType:c,...l}=a;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:8},children:[e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:d,children:[e.jsx("p",{style:p,children:"Reference — filled"}),e.jsx(n,{...l,iconAppearance:"filled",label:"Filled icon"})]}),e.jsxs("div",{style:d,children:[e.jsx("p",{style:p,children:"Reference — outlined"}),e.jsx(n,{...l,iconAppearance:"outlined",label:"Outlined icon"})]})]}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:d,children:[e.jsx("p",{style:p,children:"Filled, no badge"}),e.jsx(n,{...l,iconAppearance:"filled",label:"Filled icon"})]}),e.jsxs("div",{style:d,children:[e.jsx("p",{style:p,children:"Filled + badge (should match left)"}),e.jsx(n,{...l,iconAppearance:"filled",label:"Filled + badge",badgeContent:r,badgeCount:t,badgeType:c})]})]}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:d,children:[e.jsx("p",{style:p,children:"Outlined, no badge"}),e.jsx(n,{...l,iconAppearance:"outlined",label:"Outlined icon"})]}),e.jsxs("div",{style:d,children:[e.jsx("p",{style:p,children:"Outlined + badge"}),e.jsx(n,{...l,iconAppearance:"outlined",label:"Outlined + badge",badgeContent:r,badgeCount:t,badgeType:c})]})]})]})}},C={tags:["!autodocs"],args:{...s.args},play:async({canvasElement:a})=>{const r=R(a);me();const t=r.getByRole("button",{name:"Button"});await u.tab(),i(t).toHaveFocus(),await u.keyboard(ge),await u.keyboard(ye),i(o).toHaveBeenCalledTimes(2),t.blur()}};var N,_,k;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var I,E,W;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(E=b.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var F,D,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var z,O,G;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Button"
  },
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  render: () => <ButtonVariantGrid />
}`,...(G=(O=y.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var P,M,L;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(M=m.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var V,K,U;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(K=h.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,Z,$;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var q,J,Q;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,ee,ae;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,re,te;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    badgeContent: "number",
    badgeCount: 5,
    badgeType: "indicator"
  },
  render: args => {
    return <Button {...args} label="Button with Badge" />;
  }
}`,...(te=(re=B.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,le,ie;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        story: "Manual check (React): row 2 — **filled** with/without badge (should match; bug = ring on the badged button). Row 3 — **outlined** with/without badge (often identical even when broken, because missing \`appearance\` on \`Icon\` already renders outlined)."
      }
    }
  },
  args: {
    ...Default.args,
    icon: "add-circle",
    iconPosition: "left",
    iconAppearance: "filled",
    label: "Filled icon",
    badgeContent: "number",
    badgeCount: 3,
    badgeType: "indicator"
  },
  render: args => {
    const {
      badgeContent,
      badgeCount,
      badgeType,
      ...buttonArgs
    } = args;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: 8
    }}>
        <div style={{
        display: "flex",
        gap: 24,
        flexWrap: "wrap"
      }}>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Reference — filled</p>
            <Button {...buttonArgs} iconAppearance="filled" label="Filled icon" />
          </div>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Reference — outlined</p>
            <Button {...buttonArgs} iconAppearance="outlined" label="Outlined icon" />
          </div>
        </div>
        <div style={{
        display: "flex",
        gap: 24,
        flexWrap: "wrap"
      }}>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Filled, no badge</p>
            <Button {...buttonArgs} iconAppearance="filled" label="Filled icon" />
          </div>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Filled + badge (should match left)</p>
            <Button {...buttonArgs} iconAppearance="filled" label="Filled + badge" badgeContent={badgeContent} badgeCount={badgeCount} badgeType={badgeType} />
          </div>
        </div>
        <div style={{
        display: "flex",
        gap: 24,
        flexWrap: "wrap"
      }}>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Outlined, no badge</p>
            <Button {...buttonArgs} iconAppearance="outlined" label="Outlined icon" />
          </div>
          <div style={iconAppearanceWithBadgeColumnStyle}>
            <p style={iconAppearanceWithBadgeCaptionStyle}>Outlined + badge</p>
            <Button {...buttonArgs} iconAppearance="outlined" label="Outlined + badge" badgeContent={badgeContent} badgeCount={badgeCount} badgeType={badgeType} />
          </div>
        </div>
      </div>;
  }
}`,...(ie=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var oe,ce,de;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Oe=["Default","Sizing","WithIcon","FigmaVariantGrid","BrandHierarchies","NeutralHierarchies","Disabled","CriticalAndReversed","LegacyVariants","WithBadge","IconAppearanceWithBadge","KeyboardInteraction"];export{m as BrandHierarchies,v as CriticalAndReversed,s as Default,x as Disabled,y as FigmaVariantGrid,j as IconAppearanceWithBadge,C as KeyboardInteraction,f as LegacyVariants,h as NeutralHierarchies,b as Sizing,B as WithBadge,g as WithIcon,Oe as __namedExportsOrder,ze as default};
