import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{w as B,u as R,e as h}from"./index-4rjIhT2C.js";import{R as t}from"./RadioButton-Cl-Y3sMz.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const S={title:"Composants/RadioButton",component:t,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Radio Button"},groupName:{control:"text",defaultValue:"radio-group"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1}}},e={args:{label:"Radio Button",groupName:"radio-group",showLabel:!0,disabled:!1,error:!1,readOnly:!1},play:async({canvasElement:r})=>{const l=B(r).getByRole("radio",{name:/radio button/i});await R.click(l),h(l).toBeChecked()}},o={args:{...e.args,groupName:"disabled-radio-group"},render:r=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(t,{...r,label:"Disabled",disabled:!0})})},n={args:{...e.args,groupName:"readonly-radio-group"},render:r=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(t,{...r,label:"Read Only",readOnly:!0})})},s={args:{...e.args,groupName:"error-radio-group"},render:r=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(t,{...r,label:"Error",error:!0})})};var d,u,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    const radioButton = canvas.getByRole("radio", {
      name: /radio button/i
    });
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  }
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,c,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,f,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const C=["Default","Disabled","ReadOnly","Error"];export{e as Default,o as Disabled,s as Error,n as ReadOnly,C as __namedExportsOrder,S as default};
