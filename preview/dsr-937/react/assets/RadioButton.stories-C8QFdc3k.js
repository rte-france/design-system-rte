import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as p,u as W,e as g}from"./index-4rjIhT2C.js";import{R as n}from"./RadioButton-_Gv7rrx3.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";const P={title:"Composants/RadioButton",component:n,tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Radio Button"},groupName:{control:"text",defaultValue:"radio-group"},disabled:{control:"boolean",defaultValue:!1},error:{control:"boolean",defaultValue:!1},readOnly:{control:"boolean",defaultValue:!1}}},r={args:{label:"Radio Button",value:"radio-button",groupName:"radio-group",disabled:!1,error:!1,readOnly:!1},play:async({canvasElement:a})=>{const o=p(a).getByRole("radio",{name:/radio button/i});await W.click(o),g(o).toBeChecked()}},t={args:{...r.args,groupName:"states-radio-group"},render:a=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...a,label:"Disabled",value:"disabled-radio-button",disabled:!0}),e.jsx(n,{...a,label:"Error",value:"error-radio-button",error:!0}),e.jsx(n,{...a,label:"Read Only",value:"readonly-radio-button",readOnly:!0}),e.jsx(n,{...a,label:"Initially Checked",value:"initial-checked-radio-button",isChecked:!0})]})},s={args:{...r.args,groupName:"disabled-radio-group"},render:a=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{...a,label:"Disabled",value:"disabled-radio-button",disabled:!0})})},l={args:{...r.args,groupName:"readonly-radio-group"},render:a=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{...a,label:"Read Only",value:"readonly-radio-button",readOnly:!0})})},d={args:{...r.args,groupName:"error-radio-group"},render:a=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{...a,label:"Error",value:"error-radio-button",error:!0})})},i={args:{...r.args,groupName:"initial-checked-radio-group",isChecked:!0},render:a=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{...a,label:"Initially Checked",value:"initial-checked-radio-button"})}),play:async({canvasElement:a})=>{const o=p(a).getByRole("radio",{name:"Initially Checked"});g(o).toBeChecked()}},u={tags:["!autodocs"],args:{...r.args,label:"",groupName:"hidden-label-radio-group"},play:async({canvasElement:a})=>{const o=await p(a).queryByRole("radio");g(o).not.toBeInTheDocument()}},c={tags:["!autodocs"],args:{...r.args,label:"","aria-label":"Radio Button",groupName:"hidden-label-aria-only-radio-group"},play:async({canvasElement:a})=>{const o=p(a).getByRole("radio",{name:/radio button/i});g(o).toBeInTheDocument()}};var b,y,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Radio Button",
    value: "radio-button",
    groupName: "radio-group",
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
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var B,h,f;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "states-radio-group"
  },
  render: args => <div style={{
    display: "flex",
    gap: 8
  }}>
      <RadioButton {...args} label="Disabled" value="disabled-radio-button" disabled />
      <RadioButton {...args} label="Error" value="error-radio-button" error />
      <RadioButton {...args} label="Read Only" value="readonly-radio-button" readOnly />
      <RadioButton {...args} label="Initially Checked" value="initial-checked-radio-button" isChecked />
    </div>
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,R,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(R=s.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var D,E,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(E=l.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var N,O,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(O=d.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var I,w,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var L,T,V;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    label: "",
    groupName: "hidden-label-radio-group"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioButton = await canvas.queryByRole("radio");
    expect(radioButton).not.toBeInTheDocument();
  }
}`,...(V=(T=u.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var H,q,A;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    label: "",
    "aria-label": "Radio Button",
    groupName: "hidden-label-aria-only-radio-group"
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
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Q=["Default","States","Disabled","ReadOnly","Error","InitialChecked","HiddenLabel","HiddenLabelWithAriaLabelOnly"];export{r as Default,s as Disabled,d as Error,u as HiddenLabel,c as HiddenLabelWithAriaLabelOnly,i as InitialChecked,l as ReadOnly,t as States,Q as __namedExportsOrder,P as default};
