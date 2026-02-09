import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as k,a as h}from"./keyboard-test.constants-By8W48aj.js";import{f as T,w as m,u as l,e as o}from"./index-BfPN6pki.js";import{f as C}from"./testing.utils-CYMf4Aux.js";import{R as w,T as S}from"./Icon-DjEid3Hw.js";import{B as i}from"./Button-CoCTt7OM.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-eNlmcvUj.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-CQk6fGHb.js";import"./index-DSdvzt-y.js";const H=Object.keys(w),R=Object.keys(S),M={title:"Composants/Button",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","text","transparent","danger","neutral","reverse"]},size:{control:"select",options:["s","m","l"]},iconPosition:{control:"select",options:["left","right"]},disabled:{control:"boolean"},badgeContent:{control:"select",options:["number","icon","empty"],description:"Type de contenu du badge"},badgeIcon:{control:"select",options:[...H,...R].sort((t,e)=>t.localeCompare(e)),description:"Nom de l’icône à afficher sur le badge",defaultValue:"check"},badgeCount:{control:"number",description:"Nombre à afficher dans le badge"},badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type de badge"}},args:{onClick:T()}},u=T(),a={args:{variant:"primary",label:"Button",onClick:u},play:async({canvasElement:t})=>{const n=m(t).getByRole("button",{name:"Button"});await l.click(n),o(u).toHaveBeenCalled(),n.blur()}},r={args:{...a.args},render:t=>s.jsxs("div",{style:{display:"flex",gap:8},children:[s.jsx(i,{...t,size:"s",label:"Small","data-testid":"small-button"}),s.jsx(i,{...t,label:"Medium","data-testid":"medium-button"}),s.jsx(i,{...t,size:"l",label:"Large","data-testid":"large-button"})]}),play:async({canvasElement:t})=>{const e=m(t),n=e.getByTestId("small-button"),I=e.getByTestId("medium-button"),x=e.getByTestId("large-button");o(n.clientHeight).toBe(24),o(I.clientHeight).toBe(32),o(x.clientHeight).toBe(40)}},c={args:{...a.args},play:async({canvasElement:t})=>{const e=m(t);C(t);const n=e.getByRole("button",{name:"Button"});await l.tab(),o(n).toHaveFocus(),await l.keyboard(k),await l.keyboard(h),o(u).toHaveBeenCalledTimes(2),n.blur()}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,y,B;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,E,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(E=c.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const V=["Default","Sizing","KeyboardInteraction"];export{a as Default,c as KeyboardInteraction,r as Sizing,V as __namedExportsOrder,M as default};
