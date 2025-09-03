import{w as $,u as U,e as A}from"./index-DaW6VCyr.js";import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as F}from"./index-G8LIXM5I.js";import{C as J}from"./Checkbox-BN7L2lXB.js";import{c as K}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";const Q="_checkboxGroupContainer_18j1a_3",X="_checkboxGroupHeader_18j1a_11",Y="_groupTitle_18j1a_11",Z="_groupHelpText_18j1a_22",ee="_errorMessage_18j1a_34",re="_checkboxGroup_18j1a_3",o={checkboxGroupContainer:Q,checkboxGroupHeader:X,groupTitle:Y,groupHelpText:Z,errorMessage:ee,checkboxGroup:re},P=F.forwardRef(({groupName:u,items:h,direction:a="horizontal",showItemsLabel:R=!0,groupTitle:f="",showGroupTitle:S=!1,groupHelpText:m="",showHelpText:W=!1,errorMessage:g="",error:s=!1,disabled:p=!1,readOnly:x=!1,className:I="",...L},B)=>{if(!(p&&s))return r.jsxs("div",{ref:B,className:K(o.checkboxGroupContainer,I),...L,children:[r.jsxs("div",{className:o.checkboxGroupHeader,"data-error":s,"data-disabled":p,"data-read-only":x,children:[f&&S&&r.jsx("h3",{className:o.groupTitle,children:f}),m&&W&&r.jsx("p",{className:o.groupHelpText,children:m}),g&&s&&r.jsx("p",{className:o.errorMessage,children:g})]}),r.jsx("div",{className:o.checkboxGroup,"data-direction":a,children:h.map((d,b)=>r.jsx(J,{id:`${d}-${b}`,label:d,groupName:u,showLabel:R,disabled:p,error:s,readOnly:x},`${d}-${b}`))})]})});P.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreCheckboxGroupProps"]};const ue={title:"CheckboxGroup",component:P,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the checkbox group.",defaultValue:"group1"},items:{control:"object",description:"The items in the checkbox group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the checkbox group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the checkbox group.",defaultValue:"Checkbox Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the checkbox group.",defaultValue:"This is a help text for the checkbox group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the checkbox group is disabled. This will disable all checkboxs in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the checkbox group is read-only. This will make all checkboxs in the group read-only.",defaultValue:!1}}},e={args:{groupName:"group1",items:["Option 1","Option 2","Option 3"],direction:"horizontal",showItemsLabel:!0,groupTitle:"Checkbox Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the checkbox group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:u})=>{const a=$(u).getByRole("checkbox",{name:"Option 1"});await U.click(a),A(a).toBeChecked()}},t={args:{...e.args,disabled:!0}},l={args:{...e.args,error:!0,errorMessage:"This is an error message. Please select an option."}},c={args:{...e.args,readOnly:!0}},n={args:{...e.args,direction:"horizontal"}},i={args:{...e.args,direction:"vertical"}};var k,T,w;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(T=e.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var v,V,G;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(G=(V=t.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var _,y,O;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "This is an error message. Please select an option."
  }
}`,...(O=(y=l.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var C,H,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  }
}`,...(j=(H=c.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var N,q,z;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "horizontal"
  }
}`,...(z=(q=n.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var M,D,E;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "vertical"
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const pe=["Default","Disabled","Error","ReadOnly","Horizontal","Vertical"];export{e as Default,t as Disabled,l as Error,n as Horizontal,c as ReadOnly,i as Vertical,pe as __namedExportsOrder,ue as default};
