import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as c,u as T,e as p}from"./index-4rjIhT2C.js";import{R as o}from"./RadioButton-Dvmfc67c.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";const G={title:"Composants/RadioButton",component:o,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Radio Button"},groupName:{control:"text",defaultValue:"radio-group"},showLabel:{control:"boolean",defaultValue:!0},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1}}},e={args:{label:"Radio Button",value:"radio-button",groupName:"radio-group",showLabel:!0,disabled:!1,error:!1,readOnly:!1},play:async({canvasElement:a})=>{const r=c(a).getByRole("radio",{name:/radio button/i});await T.click(r),p(r).toBeChecked()}},t={args:{...e.args,groupName:"disabled-radio-group"},render:a=>n.jsx("div",{style:{display:"flex",gap:8},children:n.jsx(o,{...a,label:"Disabled",value:"disabled-radio-button",disabled:!0})})},s={args:{...e.args,groupName:"readonly-radio-group"},render:a=>n.jsx("div",{style:{display:"flex",gap:8},children:n.jsx(o,{...a,label:"Read Only",value:"readonly-radio-button",readOnly:!0})})},l={args:{...e.args,groupName:"error-radio-group"},render:a=>n.jsx("div",{style:{display:"flex",gap:8},children:n.jsx(o,{...a,label:"Error",value:"error-radio-button",error:!0})})},d={args:{...e.args,groupName:"initial-checked-radio-group",isChecked:!0},render:a=>n.jsx("div",{style:{display:"flex",gap:8},children:n.jsx(o,{...a,label:"Initially Checked",value:"initial-checked-radio-button"})}),play:async({canvasElement:a})=>{const r=c(a).getByRole("radio",{name:"Initially Checked"});p(r).toBeChecked()}},i={tags:["!autodocs"],args:{...e.args,groupName:"hidden-label-radio-group",showLabel:!1},play:async({canvasElement:a})=>{const r=c(a).getByRole("radio",{name:/radio button/i});p(r).toBeInTheDocument()}},u={tags:["!autodocs"],args:{...e.args,label:"","aria-label":"Radio Button",groupName:"hidden-label-aria-only-radio-group",showLabel:!1},play:async({canvasElement:a})=>{const r=c(a).getByRole("radio",{name:/radio button/i});p(r).toBeInTheDocument()}};var m,b,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(b=e.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,h,B;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(h=t.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var f,x,R;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(R=(x=s.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var k,D,E;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var w,N,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var L,O,j;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    groupName: "hidden-label-radio-group",
    showLabel: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", {
      name: /radio button/i
    });
    expect(radioButton).toBeInTheDocument();
  }
}`,...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var I,S,V;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    label: "",
    "aria-label": "Radio Button",
    groupName: "hidden-label-aria-only-radio-group",
    showLabel: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", {
      name: /radio button/i
    });
    expect(radioButton).toBeInTheDocument();
  }
}`,...(V=(S=u.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const J=["Default","Disabled","ReadOnly","Error","InitialChecked","HiddenLabel","HiddenLabelWithAriaLabelOnly"];export{e as Default,t as Disabled,l as Error,i as HiddenLabel,u as HiddenLabelWithAriaLabelOnly,d as InitialChecked,s as ReadOnly,J as __namedExportsOrder,G as default};
