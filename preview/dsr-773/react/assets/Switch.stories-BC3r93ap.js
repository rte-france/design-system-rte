import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{S as w,E as D}from"./keyboard.constants-BverKK8B.js";import{w as j,u as c,e as s}from"./index-4rjIhT2C.js";import{r as B}from"./index-G8LIXM5I.js";import{f as R}from"./testing.utils-mIZIUNbM.js";import{S as u}from"./Switch-XseeW_Fi.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";const N={title:"Composants/Switch/Switch",component:u,decorators:[e=>n.jsxs("div",{style:{height:"50px",width:"200px"},children:[n.jsx(e,{}),n.jsxs("div",{children:[" ",n.jsxs("p",{children:[" ","Switch State : ",n.jsx("span",{id:"switch-state",children:" "})]})]})]})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showLabel:{control:"boolean",description:"Whether to show the label",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1},checked:{control:"boolean",description:"Checked state (controlled)",defaultValue:!1},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)",defaultValue:!1},onChange:{description:"Function called when the switch state changes"}}},h=e=>{const a=document.getElementById("switch-state");a&&(a.textContent=e?"ON":"OFF")},o={args:{label:"Label",showLabel:!0,disabled:!1,readOnly:!1,appearance:"brand",showIcon:!0,checked:!1},render:e=>{const[a,t]=B.useState(!!e.checked);return n.jsx(u,{...e,checked:a,onChange:i=>{var p;t(i.target.checked),h(i.target.checked),(p=e.onChange)==null||p.call(e,i)}})},play:async({canvasElement:e})=>{const t=j(e).getByRole("switch");R(e),await c.tab(),await s(t).toHaveFocus(),await c.keyboard(w),await s(t).toBeChecked(),await c.keyboard(w),await s(t).not.toBeChecked(),await c.keyboard(D),await s(t).not.toBeChecked()}},r={args:{label:"Uncontrolled Switch",defaultChecked:!0},render:e=>(B.useEffect(()=>{h(!!e.defaultChecked)},[e.defaultChecked]),n.jsx(u,{...e,onChange:a=>{var t;h(a.target.checked),(t=e.onChange)==null||t.call(e,a)}}))},l={args:{label:"Disabled Switch",disabled:!0}},d={args:{label:"Read-Only Switch",readOnly:!0}};var m,f,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      setSwitchStateDisplay(e.target.checked);
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
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var k,E,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Uncontrolled Switch",
    defaultChecked: true
  },
  render: args => {
    useEffect(() => {
      setSwitchStateDisplay(!!args.defaultChecked);
    }, [args.defaultChecked]);
    return <Switch {...args} onChange={e => {
      setSwitchStateDisplay(e.target.checked);
      args.onChange?.(e);
    }} />;
  }
}`,...(C=(E=r.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var S,g,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,v,O;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true
  }
}`,...(O=(v=d.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const P=["Default","Uncontrolled","Disabled","ReadOnly"];export{o as Default,l as Disabled,d as ReadOnly,r as Uncontrolled,P as __namedExportsOrder,N as default};
