import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{w as l,u as c,e as r,f as A}from"./index-4rjIhT2C.js";import{f as q}from"./testing.utils-r13wRTL2.js";import{T as n}from"./Textarea-FcV0105a.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Label-CxXwQe8R.js";import"./Icon-VewZnR13.js";import"./Link-CUYEWJ-E.js";import"./link.constants-kcvANsJQ.js";import"./index-DJ8f9STe.js";import"./RequiredIndicator-Bmo4UcWJ.js";const U={title:"Composants/Textarea/Textarea",tags:["autodocs"],component:n,args:{disabled:!1},argTypes:{value:{control:"text"},label:{control:"text"},labelPosition:{control:"select",options:["top","side"],description:"Position of the label relative to the textarea"},disabled:{control:"boolean"},rows:{control:"number"},onChange:{action:"changed"},assistiveTextAppearance:{control:"select",options:["description","error","success","link"],description:"Appearance of the assistive text"},assistiveTextLink:{control:"text",description:"Link for the assistive text when appearance is 'link'"},required:{control:"boolean",description:"Whether the textarea is required"},showLabelRequirement:{control:"boolean",description:"Whether to show the requirement indicator in the label"},maxLength:{control:"number",description:"Maximum number of characters allowed in the textarea"},showCounter:{control:"boolean",description:"Whether to display the character count"},readOnly:{control:"boolean",description:"Whether the textarea is read-only"}}},g=A(),a={args:{id:"my-textarea",label:"Label",labelId:"LabelId",assistiveTextLabel:"Assistive text for the textarea",required:!1,showLabelRequirement:!1,onChange:g,readOnly:!1,rows:3},render:e=>o.jsx(n,{...e})},i={tags:["!autodocs"],args:{...a.args,maxLength:10},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e})=>{const t=l(e).getByRole("textbox");await c.type(t,"Hello World"),r(g).toHaveBeenCalledTimes(10),r(t).toHaveValue("Hello Worl")}},d={args:{...a.args,maxLength:100,assistiveTextLabel:"Error message",assistiveTextAppearance:"error"},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e})=>{const s=l(e);r(s.getByRole("textbox")).toHaveAttribute("aria-describedby","my-textarea-assistive-text")}},x={tags:["!autodocs"],args:{...a.args,readOnly:!0,value:"This is a read-only textarea."},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e,args:s})=>{const m=l(e).getByRole("textbox");q(),await c.tab(),r(m).toHaveFocus(),await c.type(m,"Hello World"),r(g).not.toHaveBeenCalled(),r(m).toHaveValue(s.value)}},u={tags:["!autodocs"],args:{...a.args,disabled:!0},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e})=>{const t=l(e).getByRole("textbox");await c.tab(),r(t).not.toHaveFocus()}},p={tags:["!autodocs"],args:{...a.args},render:e=>o.jsx(n,{...e}),play:async({canvasElement:e})=>{const t=l(e).getByRole("textbox");q(),await c.tab(),r(t).toHaveFocus(),t.blur()}};var v,b,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  tags: ["!autodocs"],
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
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var E,T,H;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(T=d.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var L,B,C;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(C=(B=x.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var R,F,W;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(W=(F=u.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var D,j,k;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const X=["Default","CharacterCount","Error","ReadOnly","Disabled","KeyboardInteraction"];export{i as CharacterCount,a as Default,u as Disabled,d as Error,p as KeyboardInteraction,x as ReadOnly,X as __namedExportsOrder,U as default};
