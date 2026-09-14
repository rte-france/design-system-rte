import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as K,e as v,u as re}from"./index-4rjIhT2C.js";import"./timepicker.constants-CynrC_9x.js";import{g as ae}from"./id.utils-DsO5Uws7.js";import{r as V}from"./index-G8LIXM5I.js";import{C as oe}from"./Checkbox-ClER9-ap.js";import{c as te}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";const se="_checkboxGroupContainer_u7brf_1",le="_groupTitle_u7brf_12",ne="_checkboxGroupSubheader_u7brf_44",ce="_groupHelpText_u7brf_44",ie="_errorMessage_u7brf_56",ue="_checkboxGroup_u7brf_1",s={checkboxGroupContainer:se,groupTitle:le,checkboxGroupSubheader:ne,groupHelpText:ce,errorMessage:ie,checkboxGroup:ue},k=V.forwardRef(({items:a,direction:o="vertical",showItemsLabel:c=!0,groupTitle:l="",showGroupTitle:Q=!1,groupHelpText:T="",showHelpText:X=!1,errorMessage:b="",error:t=!1,disabled:n=!1,readOnly:x=!1,className:Y="",...Z},ee)=>{const w=V.useRef(ae()).current;if(!(n&&t))return r.jsxs("fieldset",{ref:ee,className:te(s.checkboxGroupContainer,Y),disabled:n,"aria-describedby":t&&b?w:void 0,...Z,children:[l&&r.jsx("legend",{className:s.groupTitle,"data-visible":Q,"data-error":t,"data-disabled":n,"data-read-only":x,children:l}),r.jsxs("div",{className:s.checkboxGroupSubheader,"data-error":t,"data-disabled":n,"data-read-only":x,children:[T&&X&&r.jsx("p",{className:s.groupHelpText,children:T}),b&&t&&r.jsx("p",{id:w,className:s.errorMessage,children:b})]}),r.jsx("div",{className:s.checkboxGroup,"data-direction":o,children:a.map((i,y)=>r.jsx(oe,{id:`${i}-${y}`,label:i,showLabel:c,disabled:n,error:t,readOnly:x,"aria-label":c?void 0:i},`${i}-${y}`))})]})});k.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{direction:{defaultValue:{value:'"vertical"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreCheckboxGroupProps"]};const Te={title:"Composants/CheckboxGroup",component:k,tags:["autodocs","checkboxgroup"],argTypes:{items:{control:"object",description:"The items in the checkbox group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the checkbox group.",defaultValue:"vertical"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the checkbox group.",defaultValue:"Checkbox Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the checkbox group.",defaultValue:"This is a help text for the checkbox group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the checkbox group is disabled. This will disable all checkboxs in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the checkbox group is read-only. This will make all checkboxs in the group read-only.",defaultValue:!1}}},e={args:{items:["Option 1","Option 2","Option 3"],showItemsLabel:!0,groupTitle:"Checkbox Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the checkbox group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:a})=>{const o=K(a),c=o.getByRole("group",{name:"Checkbox Group Title"});v(c.querySelector("[data-direction]")).toHaveAttribute("data-direction","vertical");const l=o.getByRole("checkbox",{name:"Option 1"});await re.click(l),v(l).toBeChecked()}},u={args:{...e.args,disabled:!0}},p={args:{...e.args,showItemsLabel:!1},play:async({canvasElement:a})=>{const o=K(a);v(o.getByRole("checkbox",{name:"Option 1"})).toBeInTheDocument()}},d={args:{...e.args,error:!0,errorMessage:"This is an error message. Please select an option."}},h={args:{...e.args,readOnly:!0}},g={args:{...e.args,direction:"horizontal"}},m={args:{...e.args,direction:"vertical"}},f={args:{...e.args,direction:"vertical",items:["Option 1 with a very long label that should wrap to the next line","Option 2 with a very long label that should wrap to the next line","Option 3 with a very long label that should wrap to the next line"]},render:a=>r.jsx("div",{style:{width:"300px"},children:r.jsx(k,{...a})})};var G,O,_;e.parameters={...e.parameters,docs:{...(G=e.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(_=(O=e.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var C,H,S;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(S=(H=u.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var q,D,j;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(j=(D=p.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var I,L,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    errorMessage: "This is an error message. Please select an option."
  }
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var R,B,M;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  }
}`,...(M=(B=h.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var N,W,P;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "horizontal"
  }
}`,...(P=(W=g.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var z,$,A;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "vertical"
  }
}`,...(A=($=m.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var U,F,J;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(F=f.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};const we=["Default","Disabled","WithoutVisibleItemLabels","Error","ReadOnly","Horizontal","Vertical","VerticalLongLabel"];export{e as Default,u as Disabled,d as Error,g as Horizontal,h as ReadOnly,m as Vertical,f as VerticalLongLabel,p as WithoutVisibleItemLabels,we as __namedExportsOrder,Te as default};
