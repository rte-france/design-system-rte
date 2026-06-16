import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{w as p,u as o,e as r,f as O}from"./index-4rjIhT2C.js";import{f as q}from"./testing.utils-mIZIUNbM.js";import{T as n}from"./Textarea-Q61DuxR8.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./RequiredIndicator-BgI9luus.js";import"./Icon-Bc7wfgCv.js";import"./Link-CAnB1cKs.js";import"./index-DSdvzt-y.js";const N={title:"Composants/Textarea/Textarea",tags:["autodocs"],component:n,args:{disabled:!1},argTypes:{value:{control:"text"},label:{control:"text"},labelPosition:{control:"select",options:["top","side"],description:"Position of the label relative to the textarea"},disabled:{control:"boolean"},rows:{control:"number"},onChange:{action:"changed"},assistiveTextAppearance:{control:"select",options:["description","error","success","link"],description:"Appearance of the assistive text"},assistiveTextLink:{control:"text",description:"Link for the assistive text when appearance is 'link'"},required:{control:"boolean",description:"Whether the textarea is required"},showLabelRequirement:{control:"boolean",description:"Whether to show the requirement indicator in the label"},maxLength:{control:"number",description:"Maximum number of characters allowed in the textarea"},showCounter:{control:"boolean",description:"Whether to display the character count"},readOnly:{control:"boolean",description:"Whether the textarea is read-only"}}},g=O(),a={args:{id:"my-textarea",label:"Label",labelId:"LabelId",assistiveTextLabel:"Assistive text for the textarea",required:!1,showLabelRequirement:!1,onChange:g,readOnly:!1,rows:3},render:e=>s.jsx(n,{...e})},l={args:{...a.args,maxLength:10},render:e=>s.jsx(n,{...e}),play:async({canvasElement:e})=>{const t=p(e).getByRole("textbox");await o.type(t,"Hello World"),r(g).toHaveBeenCalledTimes(10),r(t).toHaveValue("Hello Worl")}},i={args:{...a.args,maxLength:100,assistiveTextLabel:"Error message",assistiveTextAppearance:"error"},render:e=>s.jsx(n,{...e})},x={args:{...a.args,readOnly:!0,value:"This is a read-only textarea."},render:e=>s.jsx(n,{...e}),play:async({canvasElement:e,args:c})=>{const m=p(e).getByRole("textbox");q(e),await o.tab(),r(m).toHaveFocus(),await o.type(m,"Hello World"),r(g).not.toHaveBeenCalled(),r(m).toHaveValue(c.value)}},d={args:{...a.args,disabled:!0},render:e=>s.jsx(n,{...e}),play:async({canvasElement:e})=>{const t=p(e).getByRole("textbox");await o.tab(),r(t).not.toHaveFocus()}},u={args:{...a.args},render:e=>s.jsx(n,{...e}),play:async({canvasElement:e})=>{const t=p(e).getByRole("textbox");q(e),await o.tab(),r(t).toHaveFocus(),t.blur()}};var v,b,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,f,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var E,T,H;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxLength: 100,
    assistiveTextLabel: "Error message",
    assistiveTextAppearance: "error"
  },
  render: args => {
    return <Textarea {...args} />;
  }
}`,...(H=(T=i.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var L,C,B;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(textarea).toHaveFocus();
    await userEvent.type(textarea, "Hello World");
    expect(mockFn).not.toHaveBeenCalled();
    expect(textarea).toHaveValue(args.value);
  }
}`,...(B=(C=x.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var R,F,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var D,j,k;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(textarea).toHaveFocus();
    textarea.blur();
  }
}`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const Q=["Default","CharacterCount","Error","ReadOnly","Disabled","KeyboardInteraction"];export{l as CharacterCount,a as Default,d as Disabled,i as Error,u as KeyboardInteraction,x as ReadOnly,Q as __namedExportsOrder,N as default};
