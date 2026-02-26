import{a as _}from"./keyboard-test.constants-By8W48aj.js";import{w as u,u as r,e as o}from"./index-4rjIhT2C.js";import{f as I}from"./testing.utils-mIZIUNbM.js";import{C as T}from"./Checkbox-zFMyoSY6.js";import"./keyboard.constants-BverKK8B.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";const Y={title:"Composants/Checkbox/Checkbox",component:T,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Label"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},errorMessage:{control:"text",defaultValue:""},readOnly:{control:"boolean",defaultValue:!1}}},n={args:{id:"my-checkbox",label:"Label",description:"Description",disabled:!1,readOnly:!1,showLabel:!0,indeterminate:!1,errorMessage:""},play:async({canvasElement:a})=>{const e=u(a).getByRole("checkbox");await r.click(e),o(e).toBeChecked(),e.blur()}},c={args:{...n.args,disabled:!0},play:async({canvasElement:a})=>{const e=u(a).getByRole("checkbox");o(e).toBeDisabled(),await r.click(e),o(e).not.toBeChecked()}},s={args:{...n.args,indeterminate:!0}},l={args:{...n.args,readOnly:!0,defaultChecked:!0},play:async({canvasElement:a})=>{const t=u(a);I(a);const e=t.getByRole("checkbox");await r.tab(),o(e).toHaveFocus(),await r.keyboard(_),o(e).toBeChecked()}},i={args:{...n.args,error:!0,errorMessage:"Error message"}},d={args:{...n.args},play:async({canvasElement:a})=>{I(a);const e=u(a).getByRole("checkbox");await r.tab(),o(e).toHaveFocus(),await r.keyboard(_),o(e).toBeChecked(),e.blur()}};var b,m,p;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,k,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(k=c.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var x,y,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    indeterminate: true
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,E,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var B,C,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "Error message"
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,R,O;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(R=d.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const j=["Default","Disabled","Indeterminated","ReadOnly","Error","KeyboardInteractions"];export{n as Default,c as Disabled,i as Error,s as Indeterminated,d as KeyboardInteractions,l as ReadOnly,j as __namedExportsOrder,Y as default};
