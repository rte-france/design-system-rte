import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{within as F,userEvent as J,expect as K}from"./index-o3q5y4Vk.js";import{r as Q}from"./index-G8LIXM5I.js";import{C as X}from"./Checkbox-C8hWUkyN.js";import{c as Y}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./index-BH7jo-UD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";const Z="_checkboxGroupContainer_1yuuw_1",ee="_checkboxGroupHeader_1yuuw_9",re="_groupTitle_1yuuw_9",oe="_groupHelpText_1yuuw_20",ae="_errorMessage_1yuuw_32",te="_checkboxGroup_1yuuw_1",o={checkboxGroupContainer:Z,checkboxGroupHeader:ee,groupTitle:re,groupHelpText:oe,errorMessage:ae,checkboxGroup:te},g=Q.forwardRef(({items:a,direction:m="horizontal",showItemsLabel:t=!0,groupTitle:f="",showGroupTitle:I=!1,groupHelpText:x="",showHelpText:B=!1,errorMessage:b="",error:s=!1,disabled:d=!1,readOnly:w=!1,className:$="",...U},A)=>{if(!(d&&s))return r.jsxs("div",{ref:A,className:Y(o.checkboxGroupContainer,$),...U,children:[r.jsxs("div",{className:o.checkboxGroupHeader,"data-error":s,"data-disabled":d,"data-read-only":w,children:[f&&I&&r.jsx("h3",{className:o.groupTitle,children:f}),x&&B&&r.jsx("p",{className:o.groupHelpText,children:x}),b&&s&&r.jsx("p",{className:o.errorMessage,children:b})]}),r.jsx("div",{className:o.checkboxGroup,"data-direction":m,children:a.map((h,k)=>r.jsx(X,{id:`${h}-${k}`,label:h,showLabel:t,disabled:d,error:s,readOnly:w},`${h}-${k}`))})]})});g.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreCheckboxGroupProps"]};const ge={title:"Composants/CheckboxGroup",component:g,tags:["autodocs","checkboxgroup"],argTypes:{items:{control:"object",description:"The items in the checkbox group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the checkbox group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the checkbox group.",defaultValue:"Checkbox Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the checkbox group.",defaultValue:"This is a help text for the checkbox group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the checkbox group is disabled. This will disable all checkboxs in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the checkbox group is read-only. This will make all checkboxs in the group read-only.",defaultValue:!1}}},e={args:{items:["Option 1","Option 2","Option 3"],direction:"horizontal",showItemsLabel:!0,groupTitle:"Checkbox Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the checkbox group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:a})=>{const t=F(a).getByRole("checkbox",{name:"Option 1"});await J.click(t),K(t).toBeChecked()}},l={args:{...e.args,disabled:!0}},n={args:{...e.args,error:!0,errorMessage:"This is an error message. Please select an option."}},c={args:{...e.args,readOnly:!0}},i={args:{...e.args,direction:"horizontal"}},u={args:{...e.args,direction:"vertical"}},p={args:{...e.args,direction:"vertical",items:["Option 1 with a very long label that should wrap to the next line","Option 2 with a very long label that should wrap to the next line","Option 3 with a very long label that should wrap to the next line"]},render:a=>r.jsx("div",{style:{width:"300px"},children:r.jsx(g,{...a})})};var T,v,y;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(y=(v=e.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var V,O,G;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(G=(O=l.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var _,C,H;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "This is an error message. Please select an option."
  }
}`,...(H=(C=n.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var j,q,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var D,E,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "horizontal"
  }
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var L,N,S;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "vertical"
  }
}`,...(S=(N=u.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var P,R,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "vertical",
    items: ["Option 1 with a very long label that should wrap to the next line", "Option 2 with a very long label that should wrap to the next line", "Option 3 with a very long label that should wrap to the next line"]
  },
  render: args => <div style={{
    width: "300px"
  }}>
      <CheckboxGroup {...args} />
    </div>
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const me=["Default","Disabled","Error","ReadOnly","Horizontal","Vertical","VerticalLongLabel"];export{e as Default,l as Disabled,n as Error,i as Horizontal,c as ReadOnly,u as Vertical,p as VerticalLongLabel,me as __namedExportsOrder,ge as default};
