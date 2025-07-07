import{T as O,S as _}from"./keyboard.constants-G_CZ5sfP.js";import{w as i,u as c,e as n}from"./index-DaW6VCyr.js";import{C as A}from"./Checkbox-ajMbMw3I.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DiFFcmJA.js";const P={title:"Checkbox",component:A,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Label"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},errorMessage:{control:"text",defaultValue:""},readOnly:{control:"boolean",defaultValue:!1}}},a={args:{id:"my-checkbox",label:"Label",description:"Description",disabled:!1,readOnly:!1,showLabel:!0,indeterminate:!1,errorMessage:""},play:async({canvasElement:r})=>{const e=i(r).getByRole("checkbox");await c.click(e),n(e).toBeChecked(),e.blur()}},s={args:{...a.args,disabled:!0},play:async({canvasElement:r})=>{const e=i(r).getByRole("checkbox");n(e).toBeDisabled(),await c.click(e),n(e).not.toBeChecked()}},o={args:{...a.args,indeterminate:!0}},t={args:{...a.args,readOnly:!0,checked:!0},play:async({canvasElement:r})=>{const e=i(r).getByRole("checkbox");await c.keyboard(O),n(e).toHaveFocus(),await c.keyboard(_),n(e).toBeChecked()}},l={args:{...a.args,error:!0,errorMessage:"Error message"}},d={args:{...a.args},play:async({canvasElement:r})=>{const e=i(r).getByRole("checkbox");await c.keyboard(O),n(e).toHaveFocus(),await c.keyboard(_),n(e).toBeChecked(),e.blur()}};var b,m,p;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var k,h,g;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,x,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    indeterminate: true
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var E,f,w;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    await userEvent.keyboard(TAB_KEY);
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(SPACE_KEY);
    expect(checkbox).toBeChecked();
  }
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var B,C,D;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "Error message"
  }
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var R,S,K;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.keyboard(TAB_KEY);
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(SPACE_KEY);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  }
}`,...(K=(S=d.parameters)==null?void 0:S.docs)==null?void 0:K.source}}};const j=["Default","Disabled","Indeterminated","ReadOnly","Error","KeyboardInteractions"];export{a as Default,s as Disabled,l as Error,o as Indeterminated,d as KeyboardInteractions,t as ReadOnly,j as __namedExportsOrder,P as default};
