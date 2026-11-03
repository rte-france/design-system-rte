import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{S as u,E as K}from"./keyboard.constants-BverKK8B.js";import{w as H,u as c,e as t,f as Y}from"./index-4rjIhT2C.js";import{r as F}from"./index-G8LIXM5I.js";import{f as _}from"./testing.utils-DmLcTX3r.js";import{S as s}from"./Switch-h9GN7Fdc.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-BGrW2Sgz.js";import"./id.utils-DsO5Uws7.js";import"./Icon-DBkoQNiA.js";import"./index-DJ8f9STe.js";const Z={title:"Composants/Switch/Switch",component:s,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1},checked:{control:"boolean",description:"Checked state (controlled)",defaultValue:!1},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)",defaultValue:!1},onChange:{description:"Function called when the switch state changes"}}},l={args:{label:"Label",disabled:!1,readOnly:!1,appearance:"brand",showIcon:!0,checked:!1},render:e=>{const[r,a]=F.useState(!!e.checked);return o.jsx(s,{...e,checked:r,onChange:n=>{var m;a(n.target.checked),(m=e.onChange)==null||m.call(e,n)}})},play:async({canvasElement:e})=>{const a=H(e).getByRole("switch");_(),await c.tab(),await t(a).toHaveFocus(),await c.keyboard(u),await t(a).toBeChecked(),await c.keyboard(u),await t(a).not.toBeChecked(),await c.keyboard(K),await t(a).not.toBeChecked()}},i={render:()=>o.jsxs("div",{style:{display:"flex",gap:"16px"},children:[o.jsx(s,{label:"Brand Switch",appearance:"brand"}),o.jsx(s,{label:"Neutral Switch",appearance:"neutral"})]})},d={render:()=>o.jsxs("div",{style:{display:"flex",gap:"16px"},children:[o.jsx(s,{label:"Avec label et icône",showIcon:!0}),o.jsx(s,{label:"Sans icône",showIcon:!1})]})},h={args:{label:"Uncontrolled Switch",defaultChecked:!0},render:e=>o.jsx(s,{...e,onChange:r=>{var a;(a=e.onChange)==null||a.call(e,r)}})},p={args:{label:"Disabled Switch",disabled:!0}},w={args:{label:"Read-Only Switch",readOnly:!0,onChange:Y()},play:async({canvasElement:e,args:r})=>{const n=H(e).getByRole("switch");await t(n).toHaveAttribute("aria-readonly","true"),await t(n).not.toBeDisabled(),_(),await c.tab(),await t(n).toHaveFocus(),await c.keyboard(u),await t(n).not.toBeChecked(),await c.click(n),await t(n).not.toBeChecked(),await t(r.onChange).not.toHaveBeenCalled()}};var b,f,E;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(f=l.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var y,C,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Switch label="Brand Switch" appearance="brand" />
      <Switch label="Neutral Switch" appearance="neutral" />
    </div>
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var g,v,S;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Switch label="Avec label et icône" showIcon />
      <Switch label="Sans icône" showIcon={false} />
    </div>
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,B,A;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Uncontrolled Switch",
    defaultChecked: true
  },
  render: args => {
    return <Switch {...args} onChange={e => {
      args.onChange?.(e);
    }} />;
  }
}`,...(A=(B=h.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var R,j,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(O=(j=p.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var D,I,V;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true,
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    await expect(switchElement).toHaveAttribute("aria-readonly", "true");
    await expect(switchElement).not.toBeDisabled();
    focusElementBeforeComponent();
    await userEvent.tab();
    await expect(switchElement).toHaveFocus();
    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).not.toBeChecked();
    await userEvent.click(switchElement);
    await expect(switchElement).not.toBeChecked();
    await expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...(V=(I=w.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const $=["Default","Appearances","IconVisibility","Uncontrolled","Disabled","ReadOnly"];export{i as Appearances,l as Default,p as Disabled,d as IconVisibility,w as ReadOnly,h as Uncontrolled,$ as __namedExportsOrder,Z as default};
