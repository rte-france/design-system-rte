import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as C,a as w}from"./keyboard-test.constants-By8W48aj.js";import{w as m,u as l,e as o,f as x}from"./index-4rjIhT2C.js";import{f as S}from"./testing.utils-mIZIUNbM.js";import{R as H,T as R}from"./Icon-DjEid3Hw.js";import{B as i}from"./Button-CgOVOKzj.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-eNlmcvUj.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-b6ITl72-.js";import"./index-DSdvzt-y.js";const d=Object.keys(H),p=Object.keys(R),M={title:"Composants/Button/Button",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","reverse"]},size:{control:"select",options:["s","m","l"]},iconPosition:{control:"select",options:["left","right"]},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...d,...p].sort((t,e)=>t.localeCompare(e)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"},icon:{control:"select",options:[...d,...p].sort((t,e)=>t.localeCompare(e)),description:"Nom de l’icône à afficher sur le bouton"},iconAppearance:{control:"select",options:["filled","outlined"],description:"Apparence de l’icône du bouton"}},args:{onClick:x()}},u=x(),a={args:{variant:"primary",label:"Button",onClick:u},play:async({canvasElement:t})=>{const n=m(t).getByRole("button",{name:"Button"});await l.click(n),o(u).toHaveBeenCalled(),n.blur()}},r={args:{...a.args},render:t=>s.jsxs("div",{style:{display:"flex",gap:8},children:[s.jsx(i,{...t,size:"s",label:"Small","data-testid":"small-button"}),s.jsx(i,{...t,label:"Medium","data-testid":"medium-button"}),s.jsx(i,{...t,size:"l",label:"Large","data-testid":"large-button"})]}),play:async({canvasElement:t})=>{const e=m(t),n=e.getByTestId("small-button"),h=e.getByTestId("medium-button"),k=e.getByTestId("large-button");o(n.clientHeight).toBe(24),o(h.clientHeight).toBe(32),o(k.clientHeight).toBe(40)}},c={args:{...a.args},play:async({canvasElement:t})=>{const e=m(t);S(t);const n=e.getByRole("button",{name:"Button"});await l.tab(),o(n).toHaveFocus(),await l.keyboard(C),await l.keyboard(w),o(u).toHaveBeenCalledTimes(2),n.blur()}};var b,g,B;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(g=a.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var y,v,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var E,T,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const V=["Default","Sizing","KeyboardInteraction"];export{a as Default,c as KeyboardInteraction,r as Sizing,V as __namedExportsOrder,M as default};
