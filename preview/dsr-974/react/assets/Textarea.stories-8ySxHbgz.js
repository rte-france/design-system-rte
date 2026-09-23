import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{w as l,u as c,e as r,f as A}from"./index-4rjIhT2C.js";import{f as q}from"./testing.utils-r13wRTL2.js";import{T as n}from"./Textarea-CcOW5Hh8.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Label-D_5Jo14x.js";import"./Icon-VewZnR13.js";import"./Link-CUYEWJ-E.js";import"./link.constants-kcvANsJQ.js";import"./index-DJ8f9STe.js";const Q={title:"Composants/Textarea/Textarea",tags:["autodocs"],component:n,args:{disabled:!1},argTypes:{value:{control:"text"},label:{control:"text"},labelPosition:{control:"select",options:["top","side"],description:"Position of the label relative to the textarea"},disabled:{control:"boolean"},rows:{control:"number"},onChange:{action:"changed"},assistiveTextAppearance:{control:"select",options:["description","error","success","link"],description:"Appearance of the assistive text"},assistiveTextLink:{control:"text",description:"Link for the assistive text when appearance is 'link'"},required:{control:"boolean",description:"Whether the textarea is required"},showLabelRequirement:{control:"boolean",description:"Whether to show the requirement indicator in the label"},maxLength:{control:"number",description:"Maximum number of characters allowed in the textarea"},showCounter:{control:"boolean",description:"Whether to display the character count"},readOnly:{control:"boolean",description:"Whether the textarea is read-only"}}},v=A(),a={args:{id:"my-textarea",label:"Label",labelId:"LabelId",assistiveTextLabel:"Assistive text for the textarea",required:!1,showLabelRequirement:!1,onChange:v,readOnly:!1,rows:3},render:e=>o.jsx(n,{...e})},i={args:{...a.args,maxLength:10},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e})=>{const t=l(e).getByRole("textbox");await c.type(t,"Hello World"),r(v).toHaveBeenCalledTimes(10),r(t).toHaveValue("Hello Worl")}},x={args:{...a.args,maxLength:100,assistiveTextLabel:"Error message",assistiveTextAppearance:"error"},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e})=>{const s=l(e);r(s.getByRole("textbox")).toHaveAttribute("aria-describedby","my-textarea-assistive-text")}},d={args:{...a.args,readOnly:!0,value:"This is a read-only textarea."},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e,args:s})=>{const m=l(e).getByRole("textbox");q(),await c.tab(),r(m).toHaveFocus(),await c.type(m,"Hello World"),r(v).not.toHaveBeenCalled(),r(m).toHaveValue(s.value)}},p={args:{...a.args,disabled:!0},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e})=>{const t=l(e).getByRole("textbox");await c.tab(),r(t).not.toHaveFocus()}},u={args:{...a.args},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e})=>{const t=l(e).getByRole("textbox");q(),await c.tab(),r(t).toHaveFocus(),t.blur()}};var g,b,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "my-textarea",
    label: "Label",
    labelId: "LabelId",
    assistiveTextLabel: "Assistive text for the textarea",
    required: false,
    showLabelRequirement: false,
    onChange: mockFn,
    readOnly: false,
    rows: 3
  },
  render: args => {
    return <Textarea {...args} />;
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,f,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxLength: 10
  },
  render: args => {
    return <Textarea {...args} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.type(textarea, "Hello World");
    expect(mockFn).toHaveBeenCalledTimes(10);
    expect(textarea).toHaveValue("Hello Worl");
  }
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var E,T,H;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxLength: 100,
    assistiveTextLabel: "Error message",
    assistiveTextAppearance: "error"
  },
  render: args => {
    return <Textarea {...args} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("textbox")).toHaveAttribute("aria-describedby", "my-textarea-assistive-text");
  }
}`,...(H=(T=x.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var L,B,C;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: "This is a read-only textarea."
  },
  render: args => {
    return <Textarea {...args} />;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    focusElementBeforeComponent();
    await userEvent.tab();
    expect(textarea).toHaveFocus();
    await userEvent.type(textarea, "Hello World");
    expect(mockFn).not.toHaveBeenCalled();
    expect(textarea).toHaveValue(args.value);
  }
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var R,F,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  render: args => {
    return <Textarea {...args} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.tab();
    expect(textarea).not.toHaveFocus();
  }
}`,...(W=(F=p.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var D,j,k;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <Textarea {...args} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    focusElementBeforeComponent();
    await userEvent.tab();
    expect(textarea).toHaveFocus();
    textarea.blur();
  }
}`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const U=["Default","CharacterCount","Error","ReadOnly","Disabled","KeyboardInteraction"];export{i as CharacterCount,a as Default,p as Disabled,x as Error,u as KeyboardInteraction,d as ReadOnly,U as __namedExportsOrder,Q as default};
