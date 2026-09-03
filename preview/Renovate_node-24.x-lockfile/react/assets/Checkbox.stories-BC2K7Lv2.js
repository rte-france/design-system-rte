import{a as G}from"./keyboard-test.constants-By8W48aj.js";import{w as s,e as n,u as t}from"./index-4rjIhT2C.js";import{f as V}from"./testing.utils-BiEcdOD7.js";import{C as K}from"./Checkbox-ClER9-ap.js";import"./keyboard.constants-BverKK8B.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";const J={title:"Composants/Checkbox/Checkbox",component:K,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Label"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},errorMessage:{control:"text",defaultValue:""},readOnly:{control:"boolean",defaultValue:!1}}},a={args:{id:"my-checkbox",label:"Label",description:"Description",disabled:!1,readOnly:!1,showLabel:!0,indeterminate:!1,errorMessage:""},play:async({canvasElement:c})=>{const e=s(c).getByRole("checkbox"),h=e.getBoundingClientRect();n(h.width).toBeGreaterThanOrEqual(24),n(h.height).toBeGreaterThanOrEqual(24),await t.click(e),n(e).toBeChecked(),e.blur()}},r={args:{...a.args,showLabel:!1,"aria-label":"Accessible checkbox label"},play:async({canvasElement:c})=>{const o=s(c);n(o.getByRole("checkbox",{name:"Accessible checkbox label"})).toBeInTheDocument()}},l={args:{...a.args,disabled:!0},play:async({canvasElement:c})=>{const e=s(c).getByRole("checkbox");n(e).toBeDisabled(),await t.click(e),n(e).not.toBeChecked()}},i={args:{...a.args,indeterminate:!0}},b={args:{...a.args,readOnly:!0,defaultChecked:!0},play:async({canvasElement:c})=>{const o=s(c);V();const e=o.getByRole("checkbox");await t.tab(),n(e).toHaveFocus(),await t.keyboard(G),n(e).toBeChecked()}},d={args:{...a.args,error:!0,errorMessage:"Error message"}},u={tags:["!autodocs"],args:{...a.args},play:async({canvasElement:c})=>{V();const e=s(c).getByRole("checkbox");await t.tab(),n(e).toHaveFocus(),await t.keyboard(G),n(e).toBeChecked(),e.blur()}};var m,p,k;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    const checkboxBounds = checkbox.getBoundingClientRect();
    expect(checkboxBounds.width).toBeGreaterThanOrEqual(24);
    expect(checkboxBounds.height).toBeGreaterThanOrEqual(24);
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  }
}`,...(k=(p=a.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var g,x,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLabel: false,
    "aria-label": "Accessible checkbox label"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("checkbox", {
      name: "Accessible checkbox label"
    })).toBeInTheDocument();
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,v,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var B,w,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    indeterminate: true
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,R,S;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    defaultChecked: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent();
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.tab();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(checkbox).toBeChecked();
  }
}`,...(S=(R=b.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var T,O,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "Error message"
  }
}`,...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var A,I,_;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    focusElementBeforeComponent();
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.tab();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(checkbox).toBeChecked();
    checkbox.blur();
  }
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const Q=["Default","WithAriaLabel","Disabled","Indeterminated","ReadOnly","Error","KeyboardInteractions"];export{a as Default,l as Disabled,d as Error,i as Indeterminated,u as KeyboardInteractions,b as ReadOnly,r as WithAriaLabel,Q as __namedExportsOrder,J as default};
