import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as U,a as X}from"./keyboard-test.constants-By8W48aj.js";import{w as v,u as m,e as o,f as q}from"./index-4rjIhT2C.js";import{f as Z}from"./testing.utils-DmLcTX3r.js";import{R as $,T as ee}from"./Icon-DBkoQNiA.js";import{B as n}from"./Button-B-7jHV5X.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-CJxonyEE.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DUkuUEsZ.js";import"./index-DJ8f9STe.js";const h=Object.keys($),x=Object.keys(ee),be={title:"Composants/Button/Button",component:n,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["brand","neutral"]},hierarchy:{control:"select",options:["primary","secondary","text","transparent","outlined"]},isCritical:{control:"boolean"},isReversed:{control:"boolean"},variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","reverse"],description:"Deprecated flat visual alias."},size:{control:"select",options:["s","m","l"]},iconPosition:{control:"select",options:["left","right"]},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...h,...x].sort((e,t)=>e.localeCompare(t)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"},icon:{control:"select",options:[...h,...x].sort((e,t)=>e.localeCompare(t)),description:"Nom de l’icône à afficher sur le bouton"},iconAppearance:{control:"select",options:["filled","outlined"],description:"Apparence de l’icône du bouton"}},args:{onClick:q()}},y=q(),r={args:{appearance:"brand",hierarchy:"primary",label:"Button",onClick:y},play:async({canvasElement:e})=>{const s=v(e).getByRole("button",{name:"Button"});await m.click(s),o(y).toHaveBeenCalled(),s.blur()}},l={args:{...r.args},render:e=>a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(n,{...e,size:"s",label:"Small","data-testid":"small-button"}),a.jsx(n,{...e,label:"Medium","data-testid":"medium-button"}),a.jsx(n,{...e,size:"l",label:"Large","data-testid":"large-button"})]}),play:async({canvasElement:e})=>{const t=v(e),s=t.getByTestId("small-button"),J=t.getByTestId("medium-button"),Q=t.getByTestId("large-button");o(s.clientHeight).toBe(24),o(J.clientHeight).toBe(32),o(Q.clientHeight).toBe(40)}},i={args:{...r.args,icon:"add-circle",label:"Button with Icon"},render:e=>a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(n,{...e,iconPosition:"left",iconAppearance:"filled"}),a.jsx(n,{...e,iconPosition:"right",icon:"add-circle",iconAppearance:"outlined"})]})},c={args:{...r.args},render:e=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(n,{...e,appearance:"brand",hierarchy:"primary",label:"Primary"}),a.jsx(n,{...e,appearance:"brand",hierarchy:"secondary",label:"Secondary"}),a.jsx(n,{...e,appearance:"brand",hierarchy:"text",label:"Text"}),a.jsx(n,{...e,appearance:"brand",hierarchy:"transparent",label:"Transparent"})]})},d={args:{...r.args},render:e=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(n,{...e,appearance:"neutral",hierarchy:"primary",label:"Neutral primary"}),a.jsx(n,{...e,appearance:"neutral",hierarchy:"secondary",label:"Neutral secondary"}),a.jsx(n,{...e,appearance:"neutral",hierarchy:"outlined",label:"Neutral outlined"}),a.jsx(n,{...e,appearance:"neutral",hierarchy:"text",label:"Neutral text"})]})},p={args:{...r.args},render:e=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[a.jsx(n,{...e,appearance:"brand",hierarchy:"primary",isCritical:!0,label:"Critical"}),a.jsxs("div",{style:{background:"var(--background-inverse)",padding:16,borderRadius:8,display:"flex",gap:8,alignItems:"center"},children:[a.jsx(n,{...e,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed S",size:"s"}),a.jsx(n,{...e,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed M"}),a.jsx(n,{...e,appearance:"brand",hierarchy:"transparent",isReversed:!0,label:"Reversed L",size:"l"})]})]})},u={args:{label:"Button",onClick:y},render:e=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[a.jsx(n,{...e,variant:"primary",label:"Primary"}),a.jsx(n,{...e,variant:"secondary",label:"Secondary"}),a.jsx(n,{...e,variant:"text",label:"Text"}),a.jsx(n,{...e,variant:"transparent",label:"Transparent"}),a.jsx(n,{...e,variant:"danger",label:"Danger"}),a.jsx(n,{...e,variant:"neutral",label:"Neutral"}),a.jsx("div",{style:{background:"var(--background-inverse)",padding:8,borderRadius:8},children:a.jsx(n,{...e,variant:"reverse",label:"Reverse"})})]})},g={args:{...r.args,badgeContent:"number",badgeCount:5,badgeType:"indicator"},render:e=>a.jsx(n,{...e,label:"Button with Badge"})},b={tags:["!autodocs"],args:{...r.args},play:async({canvasElement:e})=>{const t=v(e);Z();const s=t.getByRole("button",{name:"Button"});await m.tab(),o(s).toHaveFocus(),await m.keyboard(U),await m.keyboard(X),o(y).toHaveBeenCalledTimes(2),s.blur()}};var B,f,j;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var T,R,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(R=l.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var E,k,I;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var w,S,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(S=c.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var H,D,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        <Button {...args} appearance="neutral" hierarchy="outlined" label="Neutral outlined" />
        <Button {...args} appearance="neutral" hierarchy="text" label="Neutral text" />
      </div>;
  }
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var z,P,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
        </div>
      </div>;
  }
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var _,F,K;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(F=u.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var L,G,M;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    badgeContent: "number",
    badgeCount: 5,
    badgeType: "indicator"
  },
  render: args => {
    return <Button {...args} label="Button with Badge" />;
  }
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var Y,O,V;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(V=(O=b.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const me=["Default","Sizing","WithIcon","BrandHierarchies","NeutralHierarchies","CriticalAndReversed","LegacyVariants","WithBadge","KeyboardInteraction"];export{c as BrandHierarchies,p as CriticalAndReversed,r as Default,b as KeyboardInteraction,u as LegacyVariants,d as NeutralHierarchies,l as Sizing,g as WithBadge,i as WithIcon,me as __namedExportsOrder,be as default};
