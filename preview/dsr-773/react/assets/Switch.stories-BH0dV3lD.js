import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{S as w,E as j}from"./keyboard.constants-BverKK8B.js";import{w as R,u as n,e as s}from"./index-4rjIhT2C.js";import{r as V}from"./index-G8LIXM5I.js";import{f as D}from"./testing.utils-mIZIUNbM.js";import{S as i}from"./Switch-CkNhKSfs.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";const P={title:"Composants/Switch/Switch",component:i,decorators:[e=>t.jsxs("div",{style:{height:"50px",width:"200px"},children:[t.jsx(e,{}),t.jsxs("div",{children:[" ",t.jsxs("p",{children:[" ","Switch State : ",t.jsx("span",{id:"switch-state",children:" "})]})]})]})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showLabel:{control:"boolean",description:"Whether to show the label",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1},checked:{control:"boolean",description:"Checked state (controlled)",defaultValue:!1},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)",defaultValue:!1},onChange:{action:"changed",description:"Function called when the switch state changes"}}},o={args:{label:"Label",showLabel:!0,disabled:!1,readOnly:!1,appearance:"brand",showIcon:!0,checked:!1},render:e=>{const[h,a]=V.useState(!!e.checked);return t.jsx(i,{...e,checked:h,onChange:d=>{var p;a(d.target.checked);const B=d.target.checked?"ON":"OFF",u=document.getElementById("switch-state");u&&(u.textContent=B),(p=e.onChange)==null||p.call(e,d)}})},play:async({canvasElement:e})=>{const a=R(e).getByRole("switch");D(e),await n.tab(),await s(a).toHaveFocus(),await n.keyboard(w),await s(a).toBeChecked(),await n.keyboard(w),await s(a).not.toBeChecked(),await n.keyboard(j),await s(a).not.toBeChecked()}},c={args:{label:"Uncontrolled Switch",defaultChecked:!0},render:e=>t.jsx(i,{...e})},r={args:{label:"Disabled Switch",disabled:!0}},l={args:{label:"Read-Only Switch",readOnly:!0}};var m,b,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Label",
    showLabel: true,
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
      const switchState = e.target.checked ? "ON" : "OFF";
      const switchStateElement = document.getElementById("switch-state");
      if (switchStateElement) {
        switchStateElement.textContent = switchState;
      }
      args.onChange?.(e);
    }} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    await expect(switchElement).toHaveFocus();
    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).toBeChecked();
    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).not.toBeChecked();
    await userEvent.keyboard(ENTER_KEY);
    await expect(switchElement).not.toBeChecked();
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var E,k,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Uncontrolled Switch",
    defaultChecked: true
  },
  render: args => <Switch {...args} />
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var g,y,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var x,v,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true
  }
}`,...(O=(v=l.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const T=["Default","Uncontrolled","Disabled","ReadOnly"];export{o as Default,r as Disabled,l as ReadOnly,c as Uncontrolled,T as __namedExportsOrder,P as default};
