import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as B,u as R,e as h}from"./index-DaW6VCyr.js";import{R as t}from"./RadioButton-DxQz0TiG.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const L={title:"RadioButton",component:t,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Radio Button"},groupName:{control:"text",defaultValue:"radio-group"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1}}},a={args:{label:"Radio Button",groupName:"radio-group",showLabel:!0,disabled:!1,error:!1,readOnly:!1},play:async({canvasElement:e})=>{const l=B(e).getByRole("radio");await R.click(l),h(l).toBeChecked()}},n={args:{...a.args},render:e=>r.jsx("div",{style:{display:"flex",gap:8},children:r.jsx(t,{...e,label:"Disabled",disabled:!0})})},s={args:{...a.args},render:e=>r.jsx("div",{style:{display:"flex",gap:8},children:r.jsx(t,{...e,label:"Read Only",readOnly:!0})})},o={args:{...a.args},render:e=>r.jsx("div",{style:{display:"flex",gap:8},children:r.jsx(t,{...e,label:"Error",error:!0})})};var d,i,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Radio Button",
    groupName: "radio-group",
    showLabel: true,
    disabled: false,
    error: false,
    readOnly: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio");
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Disabled" disabled={true} />
      </div>;
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,f,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Read Only" readOnly={true} />
      </div>;
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,x,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Error" error={true} />
      </div>;
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const N=["Default","Disabled","ReadOnly","Error"];export{a as Default,n as Disabled,o as Error,s as ReadOnly,N as __namedExportsOrder,L as default};
