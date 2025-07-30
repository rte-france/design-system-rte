import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{T as k,a as w}from"./keyboard-test.constants-BNc7pJRD.js";import{f as x,w as m,u as c,e as a}from"./index-DaW6VCyr.js";import{B as i}from"./Button-DaoBNyTm.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-zpE_PHKT.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const K={title:"Button",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","text","transparent","danger"]},size:{control:"select",options:["s","m","l"]},iconPosition:{control:"select",options:["left","right"]},disabled:{control:"boolean"}},args:{onClick:x()}},u=x(),e={args:{variant:"primary",label:"Button",onClick:u},play:async({canvasElement:t})=>{const n=m(t).getByRole("button");await c.click(n),a(u).toHaveBeenCalled(),n.blur()}},r={args:{...e.args},render:t=>o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx(i,{...t,size:"s",label:"Small","data-testId":"small-button"}),o.jsx(i,{...t,label:"Medium","data-testId":"medium-button"}),o.jsx(i,{...t,size:"l",label:"Large","data-testId":"large-button"})]}),play:async({canvasElement:t})=>{const s=m(t),n=s.getByTestId("small-button"),I=s.getByTestId("medium-button"),f=s.getByTestId("large-button");a(n.clientHeight).toBe(24),a(I.clientHeight).toBe(32),a(f.clientHeight).toBe(40)}},l={args:{...e.args},play:async({canvasElement:t})=>{const n=m(t).getByRole("button");await c.tab(),a(n).toHaveFocus(),await c.keyboard(k),await c.keyboard(w),a(u).toHaveBeenCalledTimes(2),n.blur()}};var d,p,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Button",
    onClick: mockFn
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
    button.blur();
  }
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,y,B;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Button {...args} size="s" label="Small" data-testId="small-button" />
        <Button {...args} label="Medium" data-testId="medium-button" />
        <Button {...args} size="l" label="Large" data-testId="large-button" />
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
}`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,E,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  }
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const N=["Default","Sizing","KeyboardInteraction"];export{e as Default,l as KeyboardInteraction,r as Sizing,N as __namedExportsOrder,K as default};
