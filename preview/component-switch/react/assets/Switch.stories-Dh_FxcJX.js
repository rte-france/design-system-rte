import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{S as w,E as L}from"./keyboard.constants-zpE_PHKT.js";import{w as O,u as c,e as o}from"./index-DaW6VCyr.js";import{r as R}from"./index-G8LIXM5I.js";import{I as m}from"./Icon-BNDpdXCt.js";import{c as B}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const N=24,q=40,r={"switch-container":"_switch-container_1t5t3_3","switch-icon-check":"_switch-icon-check_1t5t3_9",switch:"_switch_1t5t3_3","switch-label":"_switch-label_1t5t3_112"},S=({label:e,appearance:u="brand",showLabel:t=!0,showIcon:p=!0,disabled:d=!1,readOnly:h=!1,checked:C=!1,...V})=>{const[s,j]=R.useState(C);return a.jsxs("div",{className:r["switch-container"],"data-appearance":u,"data-disabled":d,"data-read-only":h,"data-checked":s,onClick:I=>{h||d?I.stopPropagation():j(!s)},children:[a.jsx("input",{"aria-label":e,type:"checkbox",role:"switch",name:e,className:r.switch,disabled:d,checked:s,readOnly:h,style:{minHeight:N,minWidth:q},...V}),a.jsxs("div",{className:r["switch-icon-check"],"data-checked":s,children:[p&&s&&a.jsx(m,{name:"check",size:16}),p&&!s&&a.jsx(m,{name:"close",size:16})]}),t&&e&&a.jsx("label",{htmlFor:e,className:B(r["switch-label"]),children:e})]})};S.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},checked:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSwitchProps","InputHTMLAttributes"]};const F={title:"Switch",component:S,decorators:[e=>a.jsx("div",{style:{height:"50px",width:"200px"},children:a.jsx(e,{})})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showLabel:{control:"boolean",description:"Whether to show the label",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1},checked:{control:"boolean",description:"Initial checked state of the switch",defaultValue:!1}}},n={args:{label:"Label",showLabel:!0,disabled:!1,readOnly:!1,appearance:"brand",showIcon:!0,checked:!1},play:async({canvasElement:e})=>{const t=O(e).getByRole("switch");await c.tab(),await o(t).toHaveFocus(),await c.keyboard(w),await o(t).toBeChecked(),await c.keyboard(w),await o(t).not.toBeChecked(),await c.keyboard(L),await o(t).not.toBeChecked()}},l={args:{label:"Disabled Switch",disabled:!0}},i={args:{label:"Read-Only Switch",readOnly:!0}};var f,b,E;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Label",
    showLabel: true,
    disabled: false,
    readOnly: false,
    appearance: "brand",
    showIcon: true,
    checked: false
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
}`,...(E=(b=n.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var k,y,v;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,_,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true
  }
}`,...(g=(_=i.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const z=["Default","Disabled","ReadOnly"];export{n as Default,l as Disabled,i as ReadOnly,z as __namedExportsOrder,F as default};
