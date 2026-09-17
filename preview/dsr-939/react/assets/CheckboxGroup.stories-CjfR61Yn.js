import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as F,e as x,u as Z}from"./index-4rjIhT2C.js";import{r as ee}from"./index-G8LIXM5I.js";import{C as re}from"./Checkbox-ClER9-ap.js";import{c as ae}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";const oe="_checkboxGroupContainer_u7brf_1",te="_groupTitle_u7brf_12",se="_checkboxGroupSubheader_u7brf_44",le="_groupHelpText_u7brf_44",ne="_errorMessage_u7brf_56",ce="_checkboxGroup_u7brf_1",t={checkboxGroupContainer:oe,groupTitle:te,checkboxGroupSubheader:se,groupHelpText:le,errorMessage:ne,checkboxGroup:ce},v=ee.forwardRef(({items:a,direction:o="vertical",showItemsLabel:c=!0,groupTitle:s="",showGroupTitle:J=!1,groupHelpText:k="",showHelpText:K=!1,errorMessage:T="",error:l=!1,disabled:n=!1,readOnly:b=!1,className:Q="",...X},Y)=>{if(!(n&&l))return r.jsxs("fieldset",{ref:Y,className:ae(t.checkboxGroupContainer,Q),disabled:n,...X,children:[s&&r.jsx("legend",{className:t.groupTitle,"data-visible":J,"data-error":l,"data-disabled":n,"data-read-only":b,children:s}),r.jsxs("div",{className:t.checkboxGroupSubheader,"data-error":l,"data-disabled":n,"data-read-only":b,children:[k&&K&&r.jsx("p",{className:t.groupHelpText,children:k}),T&&l&&r.jsx("p",{className:t.errorMessage,children:T})]}),r.jsx("div",{className:t.checkboxGroup,"data-direction":o,children:a.map((i,w)=>r.jsx(re,{id:`${i}-${w}`,label:i,showLabel:c,disabled:n,error:l,readOnly:b,"aria-label":c?void 0:i},`${i}-${w}`))})]})});v.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{direction:{defaultValue:{value:'"vertical"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreCheckboxGroupProps"]};const be={title:"Composants/CheckboxGroup",component:v,tags:["autodocs","checkboxgroup"],argTypes:{items:{control:"object",description:"The items in the checkbox group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the checkbox group.",defaultValue:"vertical"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the checkbox group.",defaultValue:"Checkbox Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the checkbox group.",defaultValue:"This is a help text for the checkbox group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the checkbox group is disabled. This will disable all checkboxs in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the checkbox group is read-only. This will make all checkboxs in the group read-only.",defaultValue:!1}}},e={args:{items:["Option 1","Option 2","Option 3"],showItemsLabel:!0,groupTitle:"Checkbox Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the checkbox group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:a})=>{const o=F(a),c=o.getByRole("group",{name:"Checkbox Group Title"});x(c.querySelector("[data-direction]")).toHaveAttribute("data-direction","vertical");const s=o.getByRole("checkbox",{name:"Option 1"});await Z.click(s),x(s).toBeChecked()}},u={args:{...e.args,disabled:!0}},p={args:{...e.args,showItemsLabel:!1},play:async({canvasElement:a})=>{const o=F(a);x(o.getByRole("checkbox",{name:"Option 1"})).toBeInTheDocument()}},d={args:{...e.args,error:!0,errorMessage:"This is an error message. Please select an option."}},h={args:{...e.args,readOnly:!0}},g={args:{...e.args,direction:"horizontal"}},m={args:{...e.args,direction:"vertical"}},f={args:{...e.args,direction:"vertical",items:["Option 1 with a very long label that should wrap to the next line","Option 2 with a very long label that should wrap to the next line","Option 3 with a very long label that should wrap to the next line"]},render:a=>r.jsx("div",{style:{width:"300px"},children:r.jsx(v,{...a})})};var y,V,G;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: ["Option 1", "Option 2", "Option 3"],
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
    const group = canvas.getByRole("group", {
      name: "Checkbox Group Title"
    });
    expect(group.querySelector("[data-direction]")).toHaveAttribute("data-direction", "vertical");
    const checkbox = canvas.getByRole("checkbox", {
      name: "Option 1"
    });
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  }
}`,...(G=(V=e.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var O,_,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(C=(_=u.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var H,S,q;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showItemsLabel: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("checkbox", {
      name: "Option 1"
    })).toBeInTheDocument();
  }
}`,...(q=(S=p.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var D,j,L;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "This is an error message. Please select an option."
  }
}`,...(L=(j=d.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var E,B,I;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  }
}`,...(I=(B=h.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var M,R,N;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "horizontal"
  }
}`,...(N=(R=g.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var W,P,z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "vertical"
  }
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var $,A,U;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(A=f.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};const xe=["Default","Disabled","WithoutVisibleItemLabels","Error","ReadOnly","Horizontal","Vertical","VerticalLongLabel"];export{e as Default,u as Disabled,d as Error,g as Horizontal,h as ReadOnly,m as Vertical,f as VerticalLongLabel,p as WithoutVisibleItemLabels,xe as __namedExportsOrder,be as default};
