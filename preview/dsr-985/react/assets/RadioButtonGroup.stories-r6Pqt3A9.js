import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as K,e as b,u as re}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as ne}from"./id.utils-DsO5Uws7.js";import{R as le}from"./RadioButton-DTiGlAMU.js";import{c as se}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ie="_radioButtonGroupContainer_1aic5_1",ue="_radioButtonGroupFieldset_1aic5_8",de="_groupTitle_1aic5_19",pe="_groupHelpText_1aic5_33",ce="_errorMessage_1aic5_45",ge="_radioButtonGroup_1aic5_1",i={radioButtonGroupContainer:ie,radioButtonGroupFieldset:ue,groupTitle:de,groupHelpText:pe,errorMessage:ce,radioButtonGroup:ge},o=y.forwardRef(({groupName:t,items:s,direction:r="horizontal",showItemsLabel:n=!0,groupTitle:l="",showGroupTitle:u=!1,groupHelpText:G="",showHelpText:Q=!1,errorMessage:B="",error:d=!1,disabled:p=!1,readOnly:T=!1,className:X="",onValueChange:w,selectedValue:Y,...Z},$)=>{const R=y.useRef(ne()).current,[ee,te]=y.useState(Y);if(p&&d)return console.warn("RadioButtonGroup cannot be both disabled and in an error state. Please choose one state or the other."),null;const ae=c=>{p||T||(w==null||w(c.target.value),te(c.target.value))};return e.jsx("div",{ref:$,className:se(i.radioButtonGroupContainer,X),...Z,children:e.jsxs("fieldset",{className:i.radioButtonGroupFieldset,"data-error":d,"data-disabled":p,"data-read-only":T,"aria-describedby":d&&B?R:void 0,children:[l&&u&&e.jsx("legend",{className:i.groupTitle,children:l}),G&&Q&&e.jsx("p",{className:i.groupHelpText,children:G}),B&&d&&e.jsx("p",{id:R,className:i.errorMessage,children:B}),e.jsx("div",{className:i.radioButtonGroup,"data-direction":r,children:s.map(({label:c,value:V},oe)=>e.jsx(le,{label:c,value:V,groupName:t,showLabel:n,disabled:p,error:d,readOnly:T,onChange:ae,isChecked:ee===V},V+oe))})]})})});o.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreRadioButtonGroupProps"]};const we={title:"Composants/RadioButtonGroup",component:o,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the radio button group.",defaultValue:"group1"},items:{control:"object",description:"The items in the radio button group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the radio button group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the radio button group.",defaultValue:"Radio Button Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the radio button group.",defaultValue:"This is a help text for the radio button group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the radio button group is disabled. This will disable all radio buttons in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the radio button group is read-only. This will make all radio buttons in the group read-only.",defaultValue:!1}}},a={args:{groupName:"radio-group",items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],direction:"horizontal",showItemsLabel:!0,groupTitle:"Radio Button Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the radio button group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:t})=>{const r=K(t).getByRole("radio",{name:"Option 1"}),n=t.querySelector("fieldset"),l=n==null?void 0:n.querySelector("legend");b(n).not.toBeNull(),b(l).toHaveTextContent("Radio Button Group Title"),await re.click(r),b(r).toBeChecked()}},g={args:{...a.args,groupName:"disabled-radio-group",disabled:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t})})},h={args:{...a.args,groupName:"error-radio-group",error:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t})})},m={args:{...a.args,groupName:"readonly-radio-group",readOnly:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t})})},f={args:{...a.args},render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{...t,direction:"horizontal",groupName:"horizontal"}),e.jsx(o,{...t,direction:"vertical",groupName:"vertical"})]})},v={args:{...a.args,selectedValue:"option2"},render:t=>{var l;const[s,r]=y.useState(t.selectedValue),n=((l=t.items.find(u=>u.value===s))==null?void 0:l.label)||"";return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t,onValueChange:u=>r(u),selectedValue:s})}),e.jsxs("p",{children:["Selected Value: ",n," "]})]})},play:async({canvasElement:t})=>{const r=K(t).getByRole("radio",{name:"Option 2"});b(r).toBeChecked()}},x={args:{...a.args,direction:"vertical",items:[{label:"Option 1 with a very long label that should wrap to the next line",value:"option1"},{label:"Option 2 with a very long label that should wrap to the next line",value:"option2"},{label:"Option 3 with a very long label that should wrap to the next line",value:"option3"}]},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(o,{...t})})};var O,j,N;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(j=a.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var S,_,q;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var C,H,D;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(H=h.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var L,E,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(E=m.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var I,k,M;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(k=f.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var W,F,P;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(F=v.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var U,A,J;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(A=x.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};const Ve=["Default","Disabled","Error","ReadOnly","Directions","InitialValueSelected","VerticalLongLabel"];export{a as Default,f as Directions,g as Disabled,h as Error,v as InitialValueSelected,m as ReadOnly,x as VerticalLongLabel,Ve as __namedExportsOrder,we as default};
