import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{w as C,u as c,e as o}from"./index-DaW6VCyr.js";import{r as L}from"./index-G8LIXM5I.js";import{I as w}from"./Icon-BNDpdXCt.js";import{c as O}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const B=24,R=40,r={"switch-container":"_switch-container_1t5t3_3","switch-icon-check":"_switch-icon-check_1t5t3_9",switch:"_switch_1t5t3_3","switch-label":"_switch-label_1t5t3_112"},_=({label:e,appearance:u="brand",showLabel:t=!0,showIcon:p=!0,disabled:d=!1,readOnly:h=!1,...S})=>{const[s,V]=L.useState(!1);return a.jsxs("div",{className:r["switch-container"],"data-appearance":u,"data-disabled":d,"data-read-only":h,"data-checked":s,onClick:j=>{h||d?j.stopPropagation():V(!s)},children:[a.jsx("input",{"aria-label":e,type:"checkbox",role:"switch",name:e,className:r.switch,disabled:d,checked:s,readOnly:h,style:{minHeight:B,minWidth:R},...S}),a.jsxs("div",{className:r["switch-icon-check"],"data-checked":s,children:[p&&s&&a.jsx(w,{name:"check",size:16}),p&&!s&&a.jsx(w,{name:"close",size:16})]}),t&&e&&a.jsx("label",{htmlFor:e,className:O(r["switch-label"]),children:e})]})};_.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSwitchProps","InputHTMLAttributes"]};const z={title:"Switch",component:_,decorators:[e=>a.jsx("div",{style:{height:"50px",width:"200px"},children:a.jsx(e,{})})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showLabel:{control:"boolean",description:"Whether to show the label",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1}}},n={args:{label:"Label",showLabel:!0,disabled:!1,readOnly:!1},play:async({canvasElement:e})=>{const t=C(e).getByRole("switch");await c.tab(),await o(t).toHaveFocus(),await c.keyboard(" "),await o(t).toBeChecked(),await c.keyboard(" "),await o(t).not.toBeChecked(),await c.keyboard("{Enter}"),await o(t).not.toBeChecked()}},l={args:{label:"Disabled Switch",disabled:!0}},i={args:{label:"Read-Only Switch",readOnly:!0}};var m,b,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Label",
    showLabel: true,
    disabled: false,
    readOnly: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    await userEvent.tab();
    await expect(switchElement).toHaveFocus();
    await userEvent.keyboard(" ");
    await expect(switchElement).toBeChecked();
    await userEvent.keyboard(" ");
    await expect(switchElement).not.toBeChecked();
    await userEvent.keyboard("{Enter}");
    await expect(switchElement).not.toBeChecked();
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,k,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var v,g,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true
  }
}`,...(E=(g=i.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const A=["Default","Disabled","ReadOnly"];export{n as Default,l as Disabled,i as ReadOnly,A as __namedExportsOrder,z as default};
