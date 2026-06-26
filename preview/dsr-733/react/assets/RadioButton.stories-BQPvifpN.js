import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as C,u as j,e as E}from"./index-4rjIhT2C.js";import{R as n}from"./RadioButton-C1Gd9Nil.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const _={title:"Composants/RadioButton",component:n,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Radio Button"},groupName:{control:"text",defaultValue:"radio-group"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1}}},a={args:{label:"Radio Button",value:"radio-button",groupName:"radio-group",showLabel:!0,disabled:!1,error:!1,readOnly:!1},play:async({canvasElement:e})=>{const o=C(e).getByRole("radio",{name:/radio button/i});await j.click(o),E(o).toBeChecked()}},t={args:{...a.args,groupName:"disabled-radio-group"},render:e=>r.jsx("div",{style:{display:"flex",gap:8},children:r.jsx(n,{...e,label:"Disabled",value:"disabled-radio-button",disabled:!0})})},s={args:{...a.args,groupName:"readonly-radio-group"},render:e=>r.jsx("div",{style:{display:"flex",gap:8},children:r.jsx(n,{...e,label:"Read Only",value:"readonly-radio-button",readOnly:!0})})},l={args:{...a.args,groupName:"error-radio-group"},render:e=>r.jsx("div",{style:{display:"flex",gap:8},children:r.jsx(n,{...e,label:"Error",value:"error-radio-button",error:!0})})},d={args:{...a.args,groupName:"initial-checked-radio-group",isChecked:!0},render:e=>r.jsx("div",{style:{display:"flex",gap:8},children:r.jsx(n,{...e,label:"Initially Checked",value:"initial-checked-radio-button"})}),play:async({canvasElement:e})=>{const o=C(e).getByRole("radio",{name:"Initially Checked"});E(o).toBeChecked()}};var i,u,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Radio Button",
    value: "radio-button",
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
    const radioButton = canvas.getByRole("radio", {
      name: /radio button/i
    });
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,g,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "disabled-radio-group"
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Disabled" value="disabled-radio-button" disabled={true} />
      </div>;
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var y,b,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "readonly-radio-group"
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Read Only" value="readonly-radio-button" readOnly={true} />
      </div>;
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "error-radio-group"
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Error" value="error-radio-button" error={true} />
      </div>;
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var B,R,k;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "initial-checked-radio-group",
    isChecked: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButton {...args} label="Initially Checked" value="initial-checked-radio-button" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", {
      name: "Initially Checked"
    });
    expect(radioButton).toBeChecked();
  }
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const T=["Default","Disabled","ReadOnly","Error","InitialChecked"];export{a as Default,t as Disabled,l as Error,d as InitialChecked,s as ReadOnly,T as __namedExportsOrder,_ as default};
