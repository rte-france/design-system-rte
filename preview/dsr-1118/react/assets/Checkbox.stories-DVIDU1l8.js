import{T as K}from"./keyboard-test.constants-BLfu6vvq.js";import{w as s,e as n,u as t}from"./index-4rjIhT2C.js";import{f as L}from"./testing.utils-DmLcTX3r.js";import{C as M}from"./Checkbox-D-pDN4T-.js";import"./keyboard.constants-DMoGODOQ.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";const J={title:"Composants/Checkbox/Checkbox",component:M,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Label"},isError:{control:"boolean",defaultValue:!1},disabled:{control:"boolean",defaultValue:!1},errorMessage:{control:"text",defaultValue:""},readOnly:{control:"boolean",defaultValue:!1}}},a={args:{id:"my-checkbox",label:"Label",description:"Description",disabled:!1,readOnly:!1,indeterminate:!1,errorMessage:""},play:async({canvasElement:c})=>{const e=s(c).getByRole("checkbox"),m=e.getBoundingClientRect();n(m.width).toBeGreaterThanOrEqual(24),n(m.height).toBeGreaterThanOrEqual(24),await t.click(e),n(e).toBeChecked(),e.blur()}},r={args:{...a.args,label:"","aria-label":"Accessible checkbox label"},play:async({canvasElement:c})=>{const o=s(c);n(o.getByRole("checkbox",{name:"Accessible checkbox label"})).toBeInTheDocument()}},l={args:{...a.args,disabled:!0},play:async({canvasElement:c})=>{const e=s(c).getByRole("checkbox");n(e).toBeDisabled(),await t.click(e),n(e).not.toBeChecked()}},i={args:{...a.args,indeterminate:!0}},d={args:{...a.args,readOnly:!0,defaultChecked:!0},play:async({canvasElement:c})=>{const o=s(c);L();const e=o.getByRole("checkbox");await t.tab(),n(e).toHaveFocus(),await t.keyboard(K),n(e).toBeChecked()}},b={args:{...a.args,isError:!0,errorMessage:"Error message"}},u={tags:["!autodocs"],args:{...a.args},play:async({canvasElement:c})=>{L();const e=s(c).getByRole("checkbox");await t.tab(),n(e).toHaveFocus(),await t.keyboard(K),n(e).toBeChecked(),e.blur()}};var h,p,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "my-checkbox",
    label: "Label",
    description: "Description",
    disabled: false,
    readOnly: false,
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
    label: "",
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
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var E,v,f;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var B,C,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    indeterminate: true
  }
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var D,R,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var S,O,A;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    errorMessage: "Error message"
  }
}`,...(A=(O=b.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var I,_,G;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const Q=["Default","WithAriaLabel","Disabled","Indeterminated","ReadOnly","Error","KeyboardInteractions"];export{a as Default,l as Disabled,b as Error,i as Indeterminated,u as KeyboardInteractions,d as ReadOnly,r as WithAriaLabel,Q as __namedExportsOrder,J as default};
