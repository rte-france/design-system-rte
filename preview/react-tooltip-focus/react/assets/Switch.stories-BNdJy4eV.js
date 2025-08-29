import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{S as b,E as N}from"./keyboard.constants-Mj_rJc9R.js";import{w as T,u as r,e as i}from"./index-DaW6VCyr.js";import{r as q}from"./index-G8LIXM5I.js";import{I as E}from"./Icon-DjEid3Hw.js";import{c as F}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const H=24,D=40,l={"switch-container":"_switch-container_1t5t3_3","switch-icon-check":"_switch-icon-check_1t5t3_9",switch:"_switch_1t5t3_3","switch-label":"_switch-label_1t5t3_112"},j=({label:e,appearance:c="brand",showLabel:a=!0,showIcon:f=!0,disabled:p=!1,readOnly:w=!1,checked:O=!1,onChange:m,...V})=>{const[s,L]=q.useState(O),R=n=>{L(n.target.checked),m==null||m(n)},B=n=>{if(w||p)n.stopPropagation();else{const o=n.currentTarget.querySelector('input[type="checkbox"]');o&&(o.checked=!s,R({target:o,currentTarget:o}))}};return t.jsxs("div",{className:l["switch-container"],"data-appearance":c,"data-disabled":p,"data-read-only":w,"data-checked":s,onClick:B,children:[t.jsx("input",{"aria-label":e,type:"checkbox",role:"switch",name:e,className:l.switch,disabled:p,checked:s,readOnly:w,style:{minHeight:H,minWidth:D},...V}),t.jsxs("div",{className:l["switch-icon-check"],"data-checked":s,children:[f&&s&&t.jsx(E,{name:"check",size:16}),f&&!s&&t.jsx(E,{name:"close",size:16})]}),a&&e&&t.jsx("label",{htmlFor:e,className:F(l["switch-label"]),children:e})]})};j.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},checked:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSwitchProps","InputHTMLAttributes"]};const Q={title:"Switch",component:j,decorators:[e=>t.jsxs("div",{style:{height:"50px",width:"200px"},children:[t.jsx(e,{}),t.jsxs("div",{children:[" ",t.jsxs("p",{children:[" ","Switch State : ",t.jsx("span",{id:"switch-state",children:" "})]})]})]})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showLabel:{control:"boolean",description:"Whether to show the label",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1},checked:{control:"boolean",description:"Initial checked state of the switch",defaultValue:!1},onChange:{action:"changed",description:"Function called when the switch state changes"}}},d={args:{label:"Label",showLabel:!0,disabled:!1,readOnly:!1,appearance:"brand",showIcon:!0,checked:!1,onChange:e=>{const c=e.target.checked?"ON":"OFF",a=document.getElementById("switch-state");a&&(a.textContent=c)}},play:async({canvasElement:e})=>{const a=T(e).getByRole("switch");await r.tab(),await i(a).toHaveFocus(),await r.keyboard(b),await i(a).toBeChecked(),await r.keyboard(b),await i(a).not.toBeChecked(),await r.keyboard(N),await i(a).not.toBeChecked()}},h={args:{label:"Disabled Switch",disabled:!0}},u={args:{label:"Read-Only Switch",readOnly:!0}};var y,g,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    await userEvent.tab();
    await expect(switchElement).toHaveFocus();
    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).toBeChecked();
    await userEvent.keyboard(SPACE_KEY);
    await expect(switchElement).not.toBeChecked();
    await userEvent.keyboard(ENTER_KEY);
    await expect(switchElement).not.toBeChecked();
  }
}`,...(k=(g=d.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var v,x,S;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(S=(x=h.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var C,_,I;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true
  }
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const U=["Default","Disabled","ReadOnly"];export{d as Default,h as Disabled,u as ReadOnly,U as __namedExportsOrder,Q as default};
