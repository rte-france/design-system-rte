import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{S as w,E as _}from"./keyboard.constants-BverKK8B.js";import{w as K,u as s,e as o}from"./index-4rjIhT2C.js";import{r as Y}from"./index-G8LIXM5I.js";import{f as L}from"./testing.utils-r13wRTL2.js";import{S as n}from"./Switch-CKVKinnd.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./timepicker.constants-CynrC_9x.js";import"./id.utils-DsO5Uws7.js";import"./log-handlers-DViU2c-X.js";import"./Icon-VewZnR13.js";import"./index-DJ8f9STe.js";const X={title:"Composants/Switch/Switch",component:n,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1},checked:{control:"boolean",description:"Checked state (controlled)",defaultValue:!1},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)",defaultValue:!1},onChange:{description:"Function called when the switch state changes"}}},c={args:{label:"Label",disabled:!1,readOnly:!1,appearance:"brand",showIcon:!0,checked:!1},render:e=>{const[r,a]=Y.useState(!!e.checked);return t.jsx(n,{...e,checked:r,onChange:u=>{var m;a(u.target.checked),(m=e.onChange)==null||m.call(e,u)}})},play:async({canvasElement:e})=>{const a=K(e).getByRole("switch");L(),await s.tab(),await o(a).toHaveFocus(),await s.keyboard(w),await o(a).toBeChecked(),await s.keyboard(w),await o(a).not.toBeChecked(),await s.keyboard(_),await o(a).not.toBeChecked()}},l={render:()=>t.jsxs("div",{style:{display:"flex",gap:"16px"},children:[t.jsx(n,{label:"Brand Switch",appearance:"brand"}),t.jsx(n,{label:"Neutral Switch",appearance:"neutral"})]})},i={render:()=>t.jsxs("div",{style:{display:"flex",gap:"16px"},children:[t.jsx(n,{label:"Avec label et icône",showIcon:!0}),t.jsx(n,{label:"Sans icône",showIcon:!1})]})},d={args:{label:"Uncontrolled Switch",defaultChecked:!0},render:e=>t.jsx(n,{...e,onChange:r=>{var a;(a=e.onChange)==null||a.call(e,r)}})},p={args:{label:"Disabled Switch",disabled:!0}},h={args:{label:"Read-Only Switch",readOnly:!0}};var b,f,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Label",
    disabled: false,
    readOnly: false,
    appearance: "brand",
    showIcon: true,
    checked: false
  },
  render: args => {
    const [checked, setChecked] = useState(!!args.checked);
    return <Switch {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      args.onChange?.(e);
    }} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    focusElementBeforeComponent();
    await userEvent.tab();
    await expect(switchElement).toHaveFocus();
    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).toBeChecked();
    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).not.toBeChecked();
    await userEvent.keyboard(ENTER_KEY);
    await expect(switchElement).not.toBeChecked();
  }
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,k,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Switch label="Brand Switch" appearance="brand" />
      <Switch label="Neutral Switch" appearance="neutral" />
    </div>
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var g,C,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Switch label="Avec label et icône" showIcon />
      <Switch label="Sans icône" showIcon={false} />
    </div>
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var v,B,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Uncontrolled Switch",
    defaultChecked: true
  },
  render: args => {
    return <Switch {...args} onChange={e => {
      args.onChange?.(e);
    }} />;
  }
}`,...(j=(B=d.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var O,I,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var V,A,D;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true
  }
}`,...(D=(A=h.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Z=["Default","Appearances","IconVisibility","Uncontrolled","Disabled","ReadOnly"];export{l as Appearances,c as Default,p as Disabled,i as IconVisibility,h as ReadOnly,d as Uncontrolled,Z as __namedExportsOrder,X as default};
