import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as Y,e as y,u as de}from"./index-4rjIhT2C.js";import{r as B}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as pe}from"./id.utils-DsO5Uws7.js";import{R as ce}from"./RadioButton-_Gv7rrx3.js";import{R as ge}from"./RequiredIndicator-Bmo4UcWJ.js";import{c as me}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-VewZnR13.js";const he="_radioButtonGroupContainer_1n41a_1",fe="_radioButtonGroupFieldset_1n41a_8",ve="_groupTitle_1n41a_26",xe="_groupHelpText_1n41a_40",be="_errorMessage_1n41a_52",ye="_radioButtonGroup_1n41a_1",l={radioButtonGroupContainer:he,radioButtonGroupFieldset:fe,"rte-radioButtonGroupTitleContainer":"_rte-radioButtonGroupTitleContainer_1n41a_19",groupTitle:ve,groupHelpText:xe,errorMessage:be,radioButtonGroup:ye},r=B.forwardRef(({groupName:t,items:i,direction:o="horizontal",showItemsLabel:n=!0,groupTitleText:s="",groupHelpText:u="",errorText:T="",isError:d=!1,disabled:p=!1,isReadOnly:R=!1,className:Z="",onValueChange:V,selectedValue:$,required:ee=!1,showLabelRequirement:G=!1,...te},ae)=>{const re=B.useRef(pe()).current,[oe,ne]=B.useState($);if(p&&d)return console.warn("RadioButtonGroup cannot be both disabled and in an error state. Please choose one state or the other."),null;const se=c=>{p||R||(V==null||V(c.target.value),ne(c.target.value))};return e.jsx("div",{ref:ae,className:me(l.radioButtonGroupContainer,Z),...te,children:e.jsxs("fieldset",{className:l.radioButtonGroupFieldset,"data-error":d,"data-disabled":p,"data-read-only":R,"aria-describedby":d&&T?re:void 0,children:[e.jsxs("div",{className:l["rte-radioButtonGroupTitleContainer"],"data-show-label-requirement":G,children:[s&&e.jsx("legend",{className:l.groupTitle,children:s}),e.jsx(ge,{required:ee,showLabelRequirement:G})]}),u&&e.jsx("p",{className:l.groupHelpText,children:u}),T&&d&&e.jsx("p",{className:l.errorMessage,children:T}),e.jsx("div",{className:l.radioButtonGroup,"data-direction":o,children:i.map(({label:c,value:w,ariaLabel:le,ariaLabelledBy:ie},ue)=>e.jsx(ce,{label:n?c:void 0,value:w,groupName:t,disabled:p,error:d,readOnly:R,onChange:se,isChecked:oe===w,"aria-label":le,"aria-labelledby":ie},w+ue))})]})})});r.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitleText:{defaultValue:{value:'""',computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},errorText:{defaultValue:{value:'""',computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},isReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreRadioButtonGroupProps"]};const Se={title:"Composants/RadioButtonGroup",component:r,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the radio button group.",defaultValue:"group1"},items:{control:"object",description:"The items in the radio button group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the radio button group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitleText:{control:"text",description:"The title of the radio button group.",defaultValue:"Radio Button Group Title"},groupHelpText:{control:"text",description:"The help text for the radio button group.",defaultValue:"This is a help text for the radio button group."},isError:{control:"boolean",description:"Whether to show the error message. Use `errorText` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the radio button group is disabled. This will disable all radio buttons in the group.",defaultValue:!1},isReadOnly:{control:"boolean",description:"Whether the radio button group is read-only. This will make all radio buttons in the group read-only.",defaultValue:!1}}},a={args:{groupName:"radio-group",items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],direction:"horizontal",showItemsLabel:!0,groupTitleText:"Radio Button Group Title",groupHelpText:"This is a help text for the radio button group.",errorText:"This is an error message. Please select an option.",isError:!1,disabled:!1,isReadOnly:!1},play:async({canvasElement:t})=>{const o=Y(t).getByRole("radio",{name:"Option 1"}),n=t.querySelector("fieldset"),s=n==null?void 0:n.querySelector("legend");y(n).not.toBeNull(),y(s).toHaveTextContent("Radio Button Group Title"),await de.click(o),y(o).toBeChecked()}},g={args:{...a.args,groupName:"disabled-radio-group",disabled:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t})})},m={args:{...a.args,groupName:"error-radio-group",isError:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t})})},h={args:{...a.args,groupName:"readonly-radio-group",isReadOnly:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t})})},f={args:{...a.args},render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{...t,direction:"horizontal",groupName:"horizontal"}),e.jsx(r,{...t,direction:"vertical",groupName:"vertical"})]})},v={args:{...a.args,selectedValue:"option2"},render:t=>{var s;const[i,o]=B.useState(t.selectedValue),n=((s=t.items.find(u=>u.value===i))==null?void 0:s.label)||"";return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t,onValueChange:u=>o(u),selectedValue:i})}),e.jsxs("p",{children:["Selected Value: ",n," "]})]})},play:async({canvasElement:t})=>{const o=Y(t).getByRole("radio",{name:"Option 2"});y(o).toBeChecked()}},x={args:{...a.args,direction:"vertical",items:[{label:"Option 1 with a very long label that should wrap to the next line",value:"option1"},{label:"Option 2 with a very long label that should wrap to the next line",value:"option2"},{label:"Option 3 with a very long label that should wrap to the next line",value:"option3"}]},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},b={args:{...a.args,groupName:"with-required-radio-group",required:!0,showLabelRequirement:!0},render:t=>e.jsx(r,{...t})};var j,O,N;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    groupTitleText: "Radio Button Group Title",
    groupHelpText: "This is a help text for the radio button group.",
    errorText: "This is an error message. Please select an option.",
    isError: false,
    disabled: false,
    isReadOnly: false
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
}`,...(N=(O=a.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var q,_,S;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(S=(_=g.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var C,D,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "error-radio-group",
    isError: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButtonGroup {...args} />
      </div>;
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,I,z;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "readonly-radio-group",
    isReadOnly: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <RadioButtonGroup {...args} />
      </div>;
  }
}`,...(z=(I=h.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var H,k,W;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(k=f.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var F,M,P;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(M=v.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,A,J;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(A=x.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "with-required-radio-group",
    required: true,
    showLabelRequirement: true
  },
  render: args => {
    return <RadioButtonGroup {...args} />;
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ce=["Default","Disabled","Error","ReadOnly","Directions","InitialValueSelected","VerticalLongLabel","WithRequired"];export{a as Default,f as Directions,g as Disabled,m as Error,v as InitialValueSelected,h as ReadOnly,x as VerticalLongLabel,b as WithRequired,Ce as __namedExportsOrder,Se as default};
