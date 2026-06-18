import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as R,c as _}from"./keyboard-test.constants-DRUxacrk.js";import{w as m,u as i,e as o,f as w}from"./index-4rjIhT2C.js";import{f as N}from"./testing.utils-mIZIUNbM.js";import{R as j,T as z}from"./Icon-BTuAX5pB.js";import{B as u}from"./Button-CikaYilN.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-eNlmcvUj.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-Cxf8NlT4.js";import"./index-DSdvzt-y.js";const p=Object.keys(j),g=Object.keys(z),J={title:"Composants/Button/Button",component:u,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","reverse"]},size:{control:"select",options:["s","m","l"]},iconPosition:{control:"select",options:["left","right"]},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...p,...g].sort((t,e)=>t.localeCompare(e)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"},icon:{control:"select",options:[...p,...g].sort((t,e)=>t.localeCompare(e)),description:"Nom de l’icône à afficher sur le bouton"},iconAppearance:{control:"select",options:["filled","outlined"],description:"Apparence de l’icône du bouton"}},args:{onClick:w()}},d=w(),a={args:{variant:"primary",label:"Button",onClick:d},play:async({canvasElement:t})=>{const n=m(t).getByRole("button",{name:"Button"});await i.click(n),o(d).toHaveBeenCalled(),n.blur()}},r={args:{...a.args},render:t=>s.jsxs("div",{style:{display:"flex",gap:8},children:[s.jsx(u,{...t,size:"s",label:"Small","data-testid":"small-button"}),s.jsx(u,{...t,label:"Medium","data-testid":"medium-button"}),s.jsx(u,{...t,size:"l",label:"Large","data-testid":"large-button"})]}),play:async({canvasElement:t})=>{const e=m(t),n=e.getByTestId("small-button"),S=e.getByTestId("medium-button"),H=e.getByTestId("large-button");o(n.clientHeight).toBe(24),o(S.clientHeight).toBe(32),o(H.clientHeight).toBe(40)}},c={args:{...a.args,icon:"add",label:"Button with Icon"}},l={args:{...a.args},play:async({canvasElement:t})=>{const e=m(t);N(t);const n=e.getByRole("button",{name:"Button"});await i.tab(),o(n).toHaveFocus(),await i.keyboard(R),await i.keyboard(_),o(d).toHaveBeenCalledTimes(2),n.blur()}};var b,B,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(B=a.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var v,f,E;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(f=r.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var T,I,h;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: "add",
    label: "Button with Icon"
  }
}`,...(h=(I=c.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var x,k,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent(canvasElement);
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
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const Q=["Default","Sizing","WithIcon","KeyboardInteraction"];export{a as Default,l as KeyboardInteraction,r as Sizing,c as WithIcon,Q as __namedExportsOrder,J as default};
