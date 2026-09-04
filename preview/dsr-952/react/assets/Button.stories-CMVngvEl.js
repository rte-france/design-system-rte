import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as F,a as K}from"./keyboard-test.constants-By8W48aj.js";import{w as g,u as p,e as s,f as P}from"./index-4rjIhT2C.js";import{f as G}from"./testing.utils-r13wRTL2.js";import{R as Y,T as O}from"./Icon-DgLH6pPJ.js";import{B as n}from"./Button-KJfdYR4G.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-CJxonyEE.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DkJhvK8e.js";import"./index-DJ8f9STe.js";const b=Object.keys(Y),B=Object.keys(O),ne={title:"Composants/Button/Button",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","reverse"]},size:{control:"select",options:["s","m","l"]},iconPosition:{control:"select",options:["left","right"]},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...b,...B].sort((e,a)=>e.localeCompare(a)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"},icon:{control:"select",options:[...b,...B].sort((e,a)=>e.localeCompare(a)),description:"Nom de l’icône à afficher sur le bouton"},iconAppearance:{control:"select",options:["filled","outlined"],description:"Apparence de l’icône du bouton"}},args:{onClick:P()}},m=P(),o={args:{variant:"primary",label:"Button",onClick:m},play:async({canvasElement:e})=>{const r=g(e).getByRole("button",{name:"Button"});await p.click(r),s(m).toHaveBeenCalled(),r.blur()}},l={args:{...o.args},render:e=>t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(n,{...e,size:"s",label:"Small","data-testid":"small-button"}),t.jsx(n,{...e,label:"Medium","data-testid":"medium-button"}),t.jsx(n,{...e,size:"l",label:"Large","data-testid":"large-button"})]}),play:async({canvasElement:e})=>{const a=g(e),r=a.getByTestId("small-button"),A=a.getByTestId("medium-button"),z=a.getByTestId("large-button");s(r.clientHeight).toBe(24),s(A.clientHeight).toBe(32),s(z.clientHeight).toBe(40)}},i={args:{...o.args,icon:"add-circle",label:"Button with Icon"},render:e=>t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(n,{...e,iconPosition:"left",iconAppearance:"filled"}),t.jsx(n,{...e,iconPosition:"right",icon:"add-circle",iconAppearance:"outlined"})]})},c={args:{...o.args},render:e=>t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(n,{...e,variant:"primary",label:"Primary"}),t.jsx(n,{...e,variant:"secondary",label:"Secondary"}),t.jsx(n,{...e,variant:"text",label:"Text"}),t.jsx(n,{...e,variant:"transparent",label:"Transparent"}),t.jsx(n,{...e,variant:"danger",label:"Danger"}),t.jsx(n,{...e,variant:"neutral",label:"Neutral"}),t.jsx(n,{...e,variant:"reverse",label:"Reverse"})]})},d={args:{...o.args,badgeContent:"number",badgeCount:5,badgeType:"indicator"},render:e=>t.jsx(n,{...e,label:"Button with Badge"})},u={tags:["!autodocs"],args:{...o.args},play:async({canvasElement:e})=>{const a=g(e);G();const r=a.getByRole("button",{name:"Button"});await p.tab(),s(r).toHaveFocus(),await p.keyboard(F),await p.keyboard(K),s(m).toHaveBeenCalledTimes(2),r.blur()}};var y,v,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "primary",
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
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,T,E;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(T=l.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var h,I,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var C,w,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Button {...args} variant="primary" label="Primary" />
        <Button {...args} variant="secondary" label="Secondary" />
        <Button {...args} variant="text" label="Text" />
        <Button {...args} variant="transparent" label="Transparent" />
        <Button {...args} variant="danger" label="Danger" />
        <Button {...args} variant="neutral" label="Neutral" />
        <Button {...args} variant="reverse" label="Reverse" />
      </div>;
  }
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,H,R;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    badgeContent: "number",
    badgeCount: 5,
    badgeType: "indicator"
  },
  render: args => {
    return <Button {...args} label="Button with Badge" />;
  }
}`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var N,_,D;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const ae=["Default","Sizing","WithIcon","Variants","withBadge","KeyboardInteraction"];export{o as Default,u as KeyboardInteraction,l as Sizing,c as Variants,i as WithIcon,ae as __namedExportsOrder,ne as default,d as withBadge};
