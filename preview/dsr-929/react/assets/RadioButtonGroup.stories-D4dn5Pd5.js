import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as J,e as b,u as oe}from"./index-4rjIhT2C.js";import{r as w}from"./index-G8LIXM5I.js";import{R as re}from"./RadioButton-CB1dNG2S.js";import{c as ne}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const le="_radioButtonGroupContainer_1aic5_1",se="_radioButtonGroupFieldset_1aic5_8",ie="_groupTitle_1aic5_19",ue="_groupHelpText_1aic5_33",de="_errorMessage_1aic5_45",pe="_radioButtonGroup_1aic5_1",i={radioButtonGroupContainer:le,radioButtonGroupFieldset:se,groupTitle:ie,groupHelpText:ue,errorMessage:de,radioButtonGroup:pe},o=w.forwardRef(({groupName:t,items:s,direction:r="horizontal",showItemsLabel:n=!0,groupTitle:l="",showGroupTitle:u=!1,groupHelpText:V="",showHelpText:K=!1,errorMessage:G="",error:d=!1,disabled:p=!1,readOnly:y=!1,className:Q="",onValueChange:B,selectedValue:X,...Y},Z)=>{const[$,ee]=w.useState(X);if(p&&d)return console.warn("RadioButtonGroup cannot be both disabled and in an error state. Please choose one state or the other."),null;const te=c=>{p||y||(B==null||B(c.target.value),ee(c.target.value))};return e.jsx("div",{ref:Z,className:ne(i.radioButtonGroupContainer,Q),...Y,children:e.jsxs("fieldset",{className:i.radioButtonGroupFieldset,"data-error":d,"data-disabled":p,"data-read-only":y,children:[l&&u&&e.jsx("legend",{className:i.groupTitle,children:l}),V&&K&&e.jsx("p",{className:i.groupHelpText,children:V}),G&&d&&e.jsx("p",{className:i.errorMessage,children:G}),e.jsx("div",{className:i.radioButtonGroup,"data-direction":r,children:s.map(({label:c,value:T},ae)=>e.jsx(re,{label:c,value:T,groupName:t,showLabel:n,disabled:p,error:d,readOnly:y,onChange:te,isChecked:$===T},T+ae))})]})})});o.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreRadioButtonGroupProps"]};const be={title:"Composants/RadioButtonGroup",component:o,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the radio button group.",defaultValue:"group1"},items:{control:"object",description:"The items in the radio button group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the radio button group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the radio button group.",defaultValue:"Radio Button Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the radio button group.",defaultValue:"This is a help text for the radio button group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the radio button group is disabled. This will disable all radio buttons in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the radio button group is read-only. This will make all radio buttons in the group read-only.",defaultValue:!1}}},a={args:{groupName:"radio-group",items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],direction:"horizontal",showItemsLabel:!0,groupTitle:"Radio Button Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the radio button group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:t})=>{const r=J(t).getByRole("radio",{name:"Option 1"}),n=t.querySelector("fieldset"),l=n==null?void 0:n.querySelector("legend");b(n).not.toBeNull(),b(l).toHaveTextContent("Radio Button Group Title"),await oe.click(r),b(r).toBeChecked()}},g={args:{...a.args,groupName:"disabled-radio-group",disabled:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t})})},h={args:{...a.args,groupName:"error-radio-group",error:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t})})},m={args:{...a.args,groupName:"readonly-radio-group",readOnly:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t})})},f={args:{...a.args},render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{...t,direction:"horizontal",groupName:"horizontal"}),e.jsx(o,{...t,direction:"vertical",groupName:"vertical"})]})},v={args:{...a.args,selectedValue:"option2"},render:t=>{var l;const[s,r]=w.useState(t.selectedValue),n=((l=t.items.find(u=>u.value===s))==null?void 0:l.label)||"";return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t,onValueChange:u=>r(u),selectedValue:s})}),e.jsxs("p",{children:["Selected Value: ",n," "]})]})},play:async({canvasElement:t})=>{const r=J(t).getByRole("radio",{name:"Option 2"});b(r).toBeChecked()}},x={args:{...a.args,direction:"vertical",items:[{label:"Option 1 with a very long label that should wrap to the next line",value:"option1"},{label:"Option 2 with a very long label that should wrap to the next line",value:"option2"},{label:"Option 3 with a very long label that should wrap to the next line",value:"option3"}]},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(o,{...t})})};var R,O,j;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    groupName: "radio-group",
    items: [{
      label: "Option 1",
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }, {
      label: "Option 3",
      value: "option3"
    }],
    direction: "horizontal",
    showItemsLabel: true,
    groupTitle: "Radio Button Group Title",
    showGroupTitle: true,
    groupHelpText: "This is a help text for the radio button group.",
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
    const radioButton = canvas.getByRole("radio", {
      name: "Option 1"
    });
    const fieldset = canvasElement.querySelector("fieldset");
    const legend = fieldset?.querySelector("legend");
    expect(fieldset).not.toBeNull();
    expect(legend).toHaveTextContent("Radio Button Group Title");
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  }
}`,...(j=(O=a.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var N,S,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "disabled-radio-group",
    disabled: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButtonGroup {...args} />
      </div>;
  }
}`,...(_=(S=g.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var q,C,H;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "error-radio-group",
    error: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButtonGroup {...args} />
      </div>;
  }
}`,...(H=(C=h.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var D,L,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "readonly-radio-group",
    readOnly: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButtonGroup {...args} />
      </div>;
  }
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var z,k,I;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButtonGroup {...args} direction="horizontal" groupName="horizontal" />
        <RadioButtonGroup {...args} direction="vertical" groupName="vertical" />
      </div>;
  }
}`,...(I=(k=f.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var M,W,F;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectedValue: "option2"
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState(args.selectedValue);
    const selectedLabel = args.items.find(item => item.value === selectedValue)?.label || "";
    return <>
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <RadioButtonGroup {...args} onValueChange={value => setSelectedValue(value)} selectedValue={selectedValue} />
        </div>
        <p>Selected Value: {selectedLabel} </p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole("radio", {
      name: "Option 2"
    });
    expect(radioButton).toBeChecked();
  }
}`,...(F=(W=v.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var P,U,A;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    direction: "vertical",
    items: [{
      label: "Option 1 with a very long label that should wrap to the next line",
      value: "option1"
    }, {
      label: "Option 2 with a very long label that should wrap to the next line",
      value: "option2"
    }, {
      label: "Option 3 with a very long label that should wrap to the next line",
      value: "option3"
    }]
  },
  render: args => <div style={{
    width: "300px"
  }}>
      <RadioButtonGroup {...args} />
    </div>
}`,...(A=(U=x.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};const ye=["Default","Disabled","Error","ReadOnly","Directions","InitialValueSelected","VerticalLongLabel"];export{a as Default,f as Directions,g as Disabled,h as Error,v as InitialValueSelected,m as ReadOnly,x as VerticalLongLabel,ye as __namedExportsOrder,be as default};
