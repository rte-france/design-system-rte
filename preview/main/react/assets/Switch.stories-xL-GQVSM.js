import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{S as l,E as y}from"./keyboard.constants-BverKK8B.js";import{w as S,u as n,e as s}from"./index-BfPN6pki.js";import{f as g}from"./testing.utils-CYMf4Aux.js";import{S as x}from"./Switch-Bc5DIWaf.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";const _={title:"Composants/Switch/Switch",component:x,decorators:[t=>a.jsxs("div",{style:{height:"50px",width:"200px"},children:[a.jsx(t,{}),a.jsxs("div",{children:[" ",a.jsxs("p",{children:[" ","Switch State : ",a.jsx("span",{id:"switch-state",children:" "})]})]})]})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showLabel:{control:"boolean",description:"Whether to show the label",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1},checked:{control:"boolean",description:"Initial checked state of the switch",defaultValue:!1},onChange:{action:"changed",description:"Function called when the switch state changes"}}},o={args:{label:"Label",showLabel:!0,disabled:!1,readOnly:!1,appearance:"brand",showIcon:!0,checked:!1,onChange:t=>{const i=t.target.checked?"ON":"OFF",e=document.getElementById("switch-state");e&&(e.textContent=i)}},play:async({canvasElement:t})=>{const e=S(t).getByRole("switch");g(t),await n.tab(),await s(e).toHaveFocus(),await n.keyboard(l),await s(e).toBeChecked(),await n.keyboard(l),await s(e).not.toBeChecked(),await n.keyboard(y),await s(e).not.toBeChecked()}},c={args:{label:"Disabled Switch",disabled:!0}},r={args:{label:"Read-Only Switch",readOnly:!0}};var d,h,w;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Label",
    showLabel: true,
    disabled: false,
    readOnly: false,
    appearance: "brand",
    showIcon: true,
    checked: false,
    onChange: e => {
      const switchState = e.target.checked ? "ON" : "OFF";
      const switchStateElement = document.getElementById("switch-state");
      if (switchStateElement) {
        switchStateElement.textContent = switchState;
      }
    }
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
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var p,m,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(u=(m=c.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,E,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true
  }
}`,...(f=(E=r.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const D=["Default","Disabled","ReadOnly"];export{o as Default,c as Disabled,r as ReadOnly,D as __namedExportsOrder,_ as default};
