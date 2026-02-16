import{a as _}from"./keyboard-test.constants-By8W48aj.js";import{w as u,u as r,e as o}from"./index-4rjIhT2C.js";import{f as I}from"./testing.utils-mIZIUNbM.js";import{C as T}from"./Checkbox-ecjbYgoF.js";import"./keyboard.constants-BverKK8B.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-oxIuDU2I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DtGx5MhP.js";const P={title:"Composants/Checkbox/Checkbox",component:T,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Label"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},errorMessage:{control:"text",defaultValue:""},readOnly:{control:"boolean",defaultValue:!1}}},n={args:{id:"my-checkbox",label:"Label",description:"Description",disabled:!1,readOnly:!1,showLabel:!0,indeterminate:!1,errorMessage:""},play:async({canvasElement:a})=>{const e=u(a).getByRole("checkbox");await r.click(e),o(e).toBeChecked(),e.blur()}},s={args:{...n.args,disabled:!0},play:async({canvasElement:a})=>{const e=u(a).getByRole("checkbox");o(e).toBeDisabled(),await r.click(e),o(e).not.toBeChecked()}},t={args:{...n.args,indeterminate:!0}},l={args:{...n.args,readOnly:!0,defaultChecked:!0},play:async({canvasElement:a})=>{const c=u(a);I(a);const e=c.getByRole("checkbox");await r.tab(),o(e).toHaveFocus(),await r.keyboard(_),o(e).toBeChecked()}},d={args:{...n.args,error:!0,errorMessage:"Error message"}},i={args:{...n.args},play:async({canvasElement:a})=>{I(a);const e=u(a).getByRole("checkbox");await r.tab(),o(e).toHaveFocus(),await r.keyboard(_),o(e).toBeChecked(),e.blur()}};var b,m,p;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,k,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var x,y,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    indeterminate: true
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,E,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    defaultChecked: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.tab();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(checkbox).toBeChecked();
  }
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var B,C,D;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "Error message"
  }
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,R,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    focusElementBeforeComponent(canvasElement);
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.tab();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  }
}`,...(O=(R=i.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const Y=["Default","Disabled","Indeterminated","ReadOnly","Error","KeyboardInteractions"];export{n as Default,s as Disabled,d as Error,t as Indeterminated,i as KeyboardInteractions,l as ReadOnly,Y as __namedExportsOrder,P as default};
