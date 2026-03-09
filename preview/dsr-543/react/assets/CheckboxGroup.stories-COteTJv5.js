import{w as B,u as $,e as U}from"./index-4rjIhT2C.js";import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as A}from"./index-G8LIXM5I.js";import{C as F}from"./Checkbox-zFMyoSY6.js";import{c as J}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";const K="_checkboxGroupContainer_1yuuw_1",Q="_checkboxGroupHeader_1yuuw_9",X="_groupTitle_1yuuw_9",Y="_groupHelpText_1yuuw_20",Z="_errorMessage_1yuuw_32",ee="_checkboxGroup_1yuuw_1",o={checkboxGroupContainer:K,checkboxGroupHeader:Q,groupTitle:X,groupHelpText:Y,errorMessage:Z,checkboxGroup:ee},P=A.forwardRef(({items:u,direction:h="horizontal",showItemsLabel:a=!0,groupTitle:f="",showGroupTitle:R=!1,groupHelpText:m="",showHelpText:S=!1,errorMessage:g="",error:s=!1,disabled:p=!1,readOnly:x=!1,className:W="",...I},L)=>{if(!(p&&s))return r.jsxs("div",{ref:L,className:J(o.checkboxGroupContainer,W),...I,children:[r.jsxs("div",{className:o.checkboxGroupHeader,"data-error":s,"data-disabled":p,"data-read-only":x,children:[f&&R&&r.jsx("h3",{className:o.groupTitle,children:f}),m&&S&&r.jsx("p",{className:o.groupHelpText,children:m}),g&&s&&r.jsx("p",{className:o.errorMessage,children:g})]}),r.jsx("div",{className:o.checkboxGroup,"data-direction":h,children:u.map((d,b)=>r.jsx(F,{id:`${d}-${b}`,label:d,showLabel:a,disabled:p,error:s,readOnly:x},`${d}-${b}`))})]})});P.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreCheckboxGroupProps"]};const ie={title:"Composants/CheckboxGroup",component:P,tags:["autodocs","checkboxgroup"],argTypes:{items:{control:"object",description:"The items in the checkbox group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the checkbox group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the checkbox group.",defaultValue:"Checkbox Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the checkbox group.",defaultValue:"This is a help text for the checkbox group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the checkbox group is disabled. This will disable all checkboxs in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the checkbox group is read-only. This will make all checkboxs in the group read-only.",defaultValue:!1}}},e={args:{items:["Option 1","Option 2","Option 3"],direction:"horizontal",showItemsLabel:!0,groupTitle:"Checkbox Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the checkbox group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:u})=>{const a=B(u).getByRole("checkbox",{name:"Option 1"});await $.click(a),U(a).toBeChecked()}},t={args:{...e.args,disabled:!0}},l={args:{...e.args,error:!0,errorMessage:"This is an error message. Please select an option."}},c={args:{...e.args,readOnly:!0}},n={args:{...e.args,direction:"horizontal"}},i={args:{...e.args,direction:"vertical"}};var k,T,w;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
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
}`,...(w=(T=e.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var y,v,V;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(V=(v=t.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var G,_,O;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "This is an error message. Please select an option."
  }
}`,...(O=(_=l.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var C,H,q;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  }
}`,...(q=(H=c.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var j,z,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "horizontal"
  }
}`,...(M=(z=n.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var D,E,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "vertical"
  }
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const ue=["Default","Disabled","Error","ReadOnly","Horizontal","Vertical"];export{e as Default,t as Disabled,l as Error,n as Horizontal,c as ReadOnly,i as Vertical,ue as __namedExportsOrder,ie as default};
