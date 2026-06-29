import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as A,u as re,e as J}from"./index-4rjIhT2C.js";import{r as w}from"./index-G8LIXM5I.js";import{R as oe}from"./RadioButton-C1Gd9Nil.js";import{c as ne}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const se="_radioButtonGroupContainer_hx6sc_1",le="_radioButtonGroupHeader_hx6sc_9",ie="_groupTitle_hx6sc_9",ue="_groupHelpText_hx6sc_20",de="_errorMessage_hx6sc_32",pe="_radioButtonGroup_hx6sc_1",s={radioButtonGroupContainer:se,radioButtonGroupHeader:le,groupTitle:ie,groupHelpText:ue,errorMessage:de,radioButtonGroup:pe},r=w.forwardRef(({groupName:t,items:n,direction:o="horizontal",showItemsLabel:x=!0,groupTitle:l="",showGroupTitle:i=!1,groupHelpText:V="",showHelpText:K=!1,errorMessage:T="",error:u=!1,disabled:d=!1,readOnly:b=!1,className:Q="",onValueChange:y,selectedValue:X,...Y},Z)=>{const[$,ee]=w.useState(X);if(d&&u)return console.warn("RadioButtonGroup cannot be both disabled and in an error state. Please choose one state or the other."),null;const te=p=>{d||b||(y==null||y(p.target.value),ee(p.target.value))};return e.jsxs("div",{ref:Z,className:ne(s.radioButtonGroupContainer,Q),...Y,children:[e.jsxs("div",{className:s.radioButtonGroupHeader,"data-error":u,"data-disabled":d,"data-read-only":b,children:[l&&i&&e.jsx("h3",{className:s.groupTitle,children:l}),V&&K&&e.jsx("p",{className:s.groupHelpText,children:V}),T&&u&&e.jsx("p",{className:s.errorMessage,children:T})]}),e.jsx("div",{className:s.radioButtonGroup,"data-direction":o,children:n.map(({label:p,value:B},ae)=>e.jsx(oe,{label:p,value:B,groupName:t,showLabel:x,disabled:d,error:u,readOnly:b,onChange:te,isChecked:$===B},B+ae))})]})});r.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreRadioButtonGroupProps"]};const be={title:"Composants/RadioButtonGroup",component:r,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the radio button group.",defaultValue:"group1"},items:{control:"object",description:"The items in the radio button group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the radio button group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the radio button group.",defaultValue:"Radio Button Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the radio button group.",defaultValue:"This is a help text for the radio button group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the radio button group is disabled. This will disable all radio buttons in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the radio button group is read-only. This will make all radio buttons in the group read-only.",defaultValue:!1}}},a={args:{groupName:"radio-group",items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],direction:"horizontal",showItemsLabel:!0,groupTitle:"Radio Button Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the radio button group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:t})=>{const o=A(t).getByRole("radio",{name:"Option 1"});await re.click(o),J(o).toBeChecked()}},c={args:{...a.args,groupName:"disabled-radio-group",disabled:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t})})},h={args:{...a.args,groupName:"error-radio-group",error:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t})})},g={args:{...a.args,groupName:"readonly-radio-group",readOnly:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t})})},m={args:{...a.args},render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{...t,direction:"horizontal",groupName:"horizontal"}),e.jsx(r,{...t,direction:"vertical",groupName:"vertical"})]})},f={args:{...a.args,selectedValue:"option2"},render:t=>{var l;const[n,o]=w.useState(t.selectedValue),x=((l=t.items.find(i=>i.value===n))==null?void 0:l.label)||"";return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t,onValueChange:i=>o(i),selectedValue:n})}),e.jsxs("p",{children:["Selected Value: ",x," "]})]})},play:async({canvasElement:t})=>{const o=A(t).getByRole("radio",{name:"Option 2"});J(o).toBeChecked()}},v={args:{...a.args,direction:"vertical",items:[{label:"Option 1 with a very long label that should wrap to the next line",value:"option1"},{label:"Option 2 with a very long label that should wrap to the next line",value:"option2"},{label:"Option 3 with a very long label that should wrap to the next line",value:"option3"}]},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})};var G,O,R;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    await userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  }
}`,...(R=(O=a.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var j,N,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var S,H,C;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(H=h.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var D,L,q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var E,z,k;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(z=m.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var I,M,W;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(M=f.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var P,U,F;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(U=v.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};const ye=["Default","Disabled","Error","ReadOnly","Directions","InitialValueSelected","VerticalLongLabel"];export{a as Default,m as Directions,c as Disabled,h as Error,f as InitialValueSelected,g as ReadOnly,v as VerticalLongLabel,ye as __namedExportsOrder,be as default};
