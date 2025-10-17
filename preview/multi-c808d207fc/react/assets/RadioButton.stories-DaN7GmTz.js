import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{w as B,u as R,e as h}from"./index-DaW6VCyr.js";import{R as t}from"./RadioButton-BZk2oc5v.js";import"./index-Dz3UJJSw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const k={title:"RadioButton",component:t,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Radio Button"},groupName:{control:"text",defaultValue:"radio-group"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1}}},r={args:{label:"Radio Button",groupName:"radio-group",showLabel:!0,disabled:!1,error:!1,readOnly:!1},play:async({canvasElement:e})=>{const l=B(e).getByRole("radio");await R.click(l),h(l).toBeChecked()}},o={args:{...r.args,groupName:"disabled-radio-group"},render:e=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(t,{...e,label:"Disabled",disabled:!0})})},n={args:{...r.args,groupName:"readonly-radio-group"},render:e=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(t,{...e,label:"Read Only",readOnly:!0})})},s={args:{...r.args,groupName:"error-radio-group"},render:e=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(t,{...e,label:"Error",error:!0})})};var d,u,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,p,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "disabled-radio-group"
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Disabled" disabled={true} />
      </div>;
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,f,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "readonly-radio-group"
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Read Only" readOnly={true} />
      </div>;
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,x,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "error-radio-group"
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Error" error={true} />
      </div>;
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const S=["Default","Disabled","ReadOnly","Error"];export{r as Default,o as Disabled,s as Error,n as ReadOnly,S as __namedExportsOrder,k as default};
