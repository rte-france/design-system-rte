import{w as D,u as z,e as C}from"./index-DaW6VCyr.js";import{C as G}from"./CheckboxGroup-D851mxlR.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Checkbox-BUflQs2M.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";const N={title:"CheckboxGroup",component:G,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the checkbox group.",defaultValue:"group1"},items:{control:"object",description:"The items in the checkbox group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the checkbox group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the checkbox group.",defaultValue:"Checkbox Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the checkbox group.",defaultValue:"This is a help text for the checkbox group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the checkbox group is disabled. This will disable all checkboxs in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the checkbox group is read-only. This will make all checkboxs in the group read-only.",defaultValue:!1}}},e={args:{groupName:"group1",items:["Option 1","Option 2","Option 3"],direction:"horizontal",showItemsLabel:!0,groupTitle:"Checkbox Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the checkbox group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:v})=>{const n=D(v).getByRole("checkbox",{name:"Option 1"});await z.click(n),C(n).toBeChecked()}},r={args:{...e.args,disabled:!0}},o={args:{...e.args,error:!0,errorMessage:"This is an error message. Please select an option."}},t={args:{...e.args,readOnly:!0}},a={args:{...e.args,direction:"horizontal"}},s={args:{...e.args,direction:"vertical"}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    groupName: "group1",
    items: ["Option 1", "Option 2", "Option 3"],
    direction: "horizontal",
    showItemsLabel: true,
    groupTitle: "Checkbox Group Title",
    showGroupTitle: true,
    groupHelpText: "This is a help text for the checkbox group.",
    showHelpText: true,
    errorMessage: "This is an error message. Please select an option.",
    error: false,
    disabled: false,
    readOnly: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: "Option 1"
    });
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var d,g,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "This is an error message. Please select an option."
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,x,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var T,k,w;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "horizontal"
  }
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var O,y,V;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "vertical"
  }
}`,...(V=(y=s.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};const U=["Default","Disabled","Error","ReadOnly","Horizontal","Vertical"];export{e as Default,r as Disabled,o as Error,a as Horizontal,t as ReadOnly,s as Vertical,U as __namedExportsOrder,N as default};
