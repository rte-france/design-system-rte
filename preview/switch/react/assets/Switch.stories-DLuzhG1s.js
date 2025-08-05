import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{w as C,u as n,e as l}from"./index-DaW6VCyr.js";import{r as L}from"./index-G8LIXM5I.js";import{I as f}from"./Icon-BNDpdXCt.js";import{c as B}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const D=24,O=40,i={"switch-container":"_switch-container_1t5t3_3","switch-icon-check":"_switch-icon-check_1t5t3_9",switch:"_switch_1t5t3_3","switch-label":"_switch-label_1t5t3_112"},V=({label:e,appearance:p="brand",showLabel:s=!0,showIcon:w=!0,disabled:o=!1,readOnly:r=!1,...j})=>{const[t,m]=L.useState(!1);return a.jsxs("div",{className:i["switch-container"],"data-appearance":p,"data-disabled":o,"data-read-only":r,"data-checked":t,role:"switch",onClick:c=>{r||o?c.stopPropagation():m(!t)},onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),!r&&!o&&m(!t))},children:[a.jsx("input",{"aria-label":e,type:"checkbox",role:"switch",name:e,className:i.switch,disabled:o,checked:t,readOnly:r,style:{minHeight:D,minWidth:O},...j}),a.jsxs("div",{className:i["switch-icon-check"],"data-checked":t,children:[w&&t&&a.jsx(f,{name:"check",size:16}),w&&!t&&a.jsx(f,{name:"close",size:16})]}),s&&e&&a.jsx("label",{htmlFor:e,className:B(i["switch-label"]),children:e})]})};V.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSwitchProps","InputHTMLAttributes"]};const z={title:"Switch",component:V,decorators:[e=>a.jsx("div",{style:{height:"50px",width:"200px"},children:a.jsx(e,{})})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showLabel:{control:"boolean",description:"Whether to show the label",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1}}},d={args:{label:"Label",showLabel:!0,disabled:!1,readOnly:!1},play:async({canvasElement:e})=>{const s=C(e).getByRole("switch");await n.tab(),await l(s).toHaveFocus(),await n.keyboard(" "),await l(s).toBeChecked(),await n.keyboard(" "),await l(s).not.toBeChecked(),await n.keyboard("{Enter}"),await l(s).not.toBeChecked()}},h={args:{label:"Disabled Switch",disabled:!0}},u={args:{label:"Read-Only Switch",readOnly:!0}};var b,y,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(y=d.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,x,E;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(E=(x=h.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var g,_,S;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true
  }
}`,...(S=(_=u.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const A=["Default","Disabled","ReadOnly"];export{d as Default,h as Disabled,u as ReadOnly,A as __namedExportsOrder,z as default};
