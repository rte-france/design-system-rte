import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{f as O,w as u,u as o,e as r}from"./index-BfPN6pki.js";import{f as q}from"./testing.utils-CYMf4Aux.js";import{T as s}from"./Textarea-Aj_ZpAvJ.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./RequiredIndicator-DqQYxNvw.js";import"./Icon-DjEid3Hw.js";import"./Link-Cg70Z2zF.js";import"./index-DSdvzt-y.js";const N={title:"Composants/Textarea/Textarea",tags:["autodocs"],component:s,args:{disabled:!1},argTypes:{value:{control:"text"},label:{control:"text"},labelPosition:{control:"select",options:["top","side"],description:"Position of the label relative to the textarea"},disabled:{control:"boolean"},rows:{control:"number"},onChange:{action:"changed"},assistiveTextAppearance:{control:"select",options:["description","error","success","link"],description:"Appearance of the assistive text"},assistiveTextLink:{control:"text",description:"Link for the assistive text when appearance is 'link'"},required:{control:"boolean",description:"Whether the textarea is required"},showLabelRequirement:{control:"boolean",description:"Whether to show the requirement indicator in the label"},maxLength:{control:"number",description:"Maximum number of characters allowed in the textarea"},showCounter:{control:"boolean",description:"Whether to display the character count"},readOnly:{control:"boolean",description:"Whether the textarea is read-only"}}},v=O(),t={args:{id:"my-textarea",label:"Label",labelId:"LabelId",assistiveTextLabel:"Assistive text for the textarea",required:!1,showLabelRequirement:!1,onChange:v,readOnly:!1,rows:3},render:e=>a.jsx("div",{style:{width:"350px"},children:a.jsx(s,{...e})})},i={args:{...t.args,maxLength:10},render:e=>a.jsx("div",{style:{width:"350px"},children:a.jsx(s,{...e})}),play:async({canvasElement:e})=>{const n=u(e).getByRole("textbox");await o.type(n,"Hello World"),r(v).toHaveBeenCalledTimes(10),r(n).toHaveValue("Hello Worl")}},c={args:{...t.args,maxLength:100,assistiveTextLabel:"Error message",assistiveTextAppearance:"error"},render:e=>a.jsx("div",{style:{width:"350px"},children:a.jsx(s,{...e})})},d={args:{...t.args,readOnly:!0,value:"This is a read-only textarea."},render:e=>a.jsx("div",{style:{width:"350px"},children:a.jsx(s,{...e})}),play:async({canvasElement:e,args:l})=>{const m=u(e).getByRole("textbox");q(e),await o.tab(),r(m).toHaveFocus(),await o.type(m,"Hello World"),r(v).not.toHaveBeenCalled(),r(m).toHaveValue(l.value)}},x={args:{...t.args,disabled:!0},render:e=>a.jsx("div",{style:{width:"350px"},children:a.jsx(s,{...e})}),play:async({canvasElement:e})=>{const n=u(e).getByRole("textbox");await o.tab(),r(n).not.toHaveFocus()}},p={args:{...t.args},render:e=>a.jsx("div",{style:{width:"350px"},children:a.jsx(s,{...e})}),play:async({canvasElement:e})=>{const n=u(e).getByRole("textbox");q(e),await o.tab(),r(n).toHaveFocus(),n.blur()}};var g,h,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,w,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxLength: 10
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
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
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var E,T,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxLength: 100,
    assistiveTextLabel: "Error message",
    assistiveTextAppearance: "error"
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  }
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var L,C,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: "This is a read-only textarea."
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
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
}`,...(B=(C=d.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var j,R,F;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.tab();
    expect(textarea).not.toHaveFocus();
  }
}`,...(F=(R=x.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var W,D,k;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
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
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const Q=["Default","CharacterCount","Error","ReadOnly","Disabled","KeyboardInteraction"];export{i as CharacterCount,t as Default,x as Disabled,c as Error,p as KeyboardInteraction,d as ReadOnly,Q as __namedExportsOrder,N as default};
