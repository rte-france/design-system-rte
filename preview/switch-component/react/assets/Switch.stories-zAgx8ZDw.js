import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{w as L,u as n,e as r}from"./index-DaW6VCyr.js";import{r as O}from"./index-G8LIXM5I.js";import{I as b}from"./Icon-BNDpdXCt.js";import{c as B}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const R=24,q=40,o={"switch-container":"_switch-container_1966r_3","switch-icon-check":"_switch-icon-check_1966r_10",switch:"_switch_1966r_3","switch-label":"_switch-label_1966r_113"},u=({label:e,appearance:p="brand",showLabel:s=!0,showIcon:w=!0,disabled:c=!1,readOnly:h=!1,checked:j=!1,...C})=>{const[t,I]=O.useState(j),m=()=>{!h&&!c&&I(!t)},D=f=>{f.key===" "&&(f.preventDefault(),m())};return a.jsxs("button",{type:"button",className:o["switch-container"],"data-appearance":p,"data-disabled":c,"data-read-only":h,"data-checked":t,onClick:m,onKeyDown:D,disabled:c,"aria-pressed":t,"aria-label":e,tabIndex:-1,children:[a.jsx("input",{"aria-label":e,type:"checkbox",role:"switch",name:e,className:o.switch,disabled:c,checked:t,readOnly:h,style:{minHeight:R,minWidth:q},...C}),a.jsxs("div",{className:o["switch-icon-check"],"data-checked":t,children:[w&&t&&a.jsx(b,{name:"check",size:16}),w&&!t&&a.jsx(b,{name:"close",size:16})]}),s&&e&&a.jsx("label",{htmlFor:e,className:B(o["switch-label"]),children:e})]})};u.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},checked:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSwitchProps","InputHTMLAttributes"]};const K={title:"Switch",component:u,decorators:[e=>a.jsx("div",{style:{height:"50px",width:"200px"},children:a.jsx(e,{})})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the switch",defaultValue:"Label"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the switch",defaultValue:"brand"},showLabel:{control:"boolean",description:"Whether to show the label",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the icon",defaultValue:!0},disabled:{control:"boolean",description:"Whether the switch is disabled",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the switch is read-only",defaultValue:!1},checked:{control:"boolean",description:"Initial checked state of the switch",defaultValue:!1}}},l={args:{label:"Label",showLabel:!0,disabled:!1,readOnly:!1,appearance:"brand",showIcon:!0,checked:!1},play:async({canvasElement:e})=>{const s=L(e).getByRole("switch");await n.tab(),await r(s).toHaveFocus(),await n.keyboard(" "),await r(s).toBeChecked(),await n.keyboard(" "),await r(s).not.toBeChecked(),await n.keyboard("{Enter}"),await r(s).not.toBeChecked()}},i={args:{label:"Disabled Switch",disabled:!0}},d={args:{label:"Read-Only Switch",readOnly:!0},render:e=>a.jsx(u,{...e})};var y,k,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    await userEvent.keyboard(" ");
    await expect(switchElement).toBeChecked();
    await userEvent.keyboard(" ");
    await expect(switchElement).not.toBeChecked();
    await userEvent.keyboard("{Enter}");
    await expect(switchElement).not.toBeChecked();
  }
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var v,g,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(E=(g=i.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,S,V;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Read-Only Switch",
    readOnly: true
  },
  render: args => <Switch {...args} />
}`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const M=["Default","Disabled","ReadOnly"];export{l as Default,i as Disabled,d as ReadOnly,M as __namedExportsOrder,K as default};
