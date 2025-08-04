import{a as _}from"./keyboard-test.constants-DGN90FCQ.js";import{w as d,u as c,e as r}from"./index-DaW6VCyr.js";import{C as I}from"./Checkbox-BUflQs2M.js";import"./keyboard.constants-Mj_rJc9R.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";const N={title:"Checkbox",component:I,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Label"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},errorMessage:{control:"text",defaultValue:""},readOnly:{control:"boolean",defaultValue:!1}}},a={args:{id:"my-checkbox",label:"Label",description:"Description",disabled:!1,readOnly:!1,showLabel:!0,indeterminate:!1,errorMessage:""},play:async({canvasElement:n})=>{const e=d(n).getByRole("checkbox");await c.click(e),r(e).toBeChecked(),e.blur()}},s={args:{...a.args,disabled:!0},play:async({canvasElement:n})=>{const e=d(n).getByRole("checkbox");r(e).toBeDisabled(),await c.click(e),r(e).not.toBeChecked()}},o={args:{...a.args,indeterminate:!0}},t={args:{...a.args,readOnly:!0,checked:!0},play:async({canvasElement:n})=>{const e=d(n).getByRole("checkbox");await c.tab(),r(e).toHaveFocus(),await c.keyboard(_),r(e).toBeChecked()}},l={args:{...a.args,error:!0,errorMessage:"Error message"}},i={args:{...a.args},play:async({canvasElement:n})=>{const e=d(n).getByRole("checkbox");await c.tab(),r(e).toHaveFocus(),await c.keyboard(_),r(e).toBeChecked(),e.blur()}};var b,m,p;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: "my-checkbox",
    label: "Label",
    description: "Description",
    disabled: false,
    readOnly: false,
    showLabel: true,
    indeterminate: false,
    errorMessage: ""
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,k,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  }
}`,...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var x,y,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    indeterminate: true
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var E,f,w;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    checked: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.tab();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(checkbox).toBeChecked();
  }
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var B,C,D;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "Error message"
  }
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,R,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.tab();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  }
}`,...(O=(R=i.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const P=["Default","Disabled","Indeterminated","ReadOnly","Error","KeyboardInteractions"];export{a as Default,s as Disabled,l as Error,o as Indeterminated,i as KeyboardInteractions,t as ReadOnly,P as __namedExportsOrder,N as default};
