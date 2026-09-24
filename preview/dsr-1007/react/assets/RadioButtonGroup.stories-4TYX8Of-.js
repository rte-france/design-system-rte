import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as Z,e as y,u as de}from"./index-4rjIhT2C.js";import{r as B}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as pe}from"./id.utils-DsO5Uws7.js";import{R as ce}from"./RadioButton-_Gv7rrx3.js";import{R as ge}from"./RequiredIndicator-Bmo4UcWJ.js";import{c as me}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-VewZnR13.js";const he="_radioButtonGroupContainer_1n41a_1",fe="_radioButtonGroupFieldset_1n41a_8",ve="_groupTitle_1n41a_26",be="_groupHelpText_1n41a_40",xe="_errorMessage_1n41a_52",ye="_radioButtonGroup_1n41a_1",l={radioButtonGroupContainer:he,radioButtonGroupFieldset:fe,"rte-radioButtonGroupTitleContainer":"_rte-radioButtonGroupTitleContainer_1n41a_19",groupTitle:ve,groupHelpText:be,errorMessage:xe,radioButtonGroup:ye},r=B.forwardRef(({groupName:t,items:i,direction:o="horizontal",showItemsLabel:n=!0,groupTitle:s="",groupHelpText:u="",errorMessage:w="",error:d=!1,disabled:p=!1,readOnly:V=!1,className:$="",onValueChange:T,selectedValue:ee,required:te=!1,showLabelRequirement:G=!1,...ae},re)=>{const j=B.useRef(pe()).current,[oe,ne]=B.useState(ee);if(p&&d)return console.warn("RadioButtonGroup cannot be both disabled and in an error state. Please choose one state or the other."),null;const se=c=>{p||V||(T==null||T(c.target.value),ne(c.target.value))};return e.jsx("div",{ref:re,className:me(l.radioButtonGroupContainer,$),...ae,children:e.jsxs("fieldset",{className:l.radioButtonGroupFieldset,"data-error":d,"data-disabled":p,"data-read-only":V,"aria-describedby":d&&w?j:void 0,children:[e.jsxs("div",{className:l["rte-radioButtonGroupTitleContainer"],"data-show-label-requirement":G,children:[s&&e.jsx("legend",{className:l.groupTitle,children:s}),e.jsx(ge,{required:te,showLabelRequirement:G})]}),u&&e.jsx("p",{className:l.groupHelpText,children:u}),w&&d&&e.jsx("p",{className:l.errorMessage,children:j}),e.jsx("div",{className:l.radioButtonGroup,"data-direction":o,children:i.map(({label:c,value:R,ariaLabel:le,ariaLabelledBy:ie},ue)=>e.jsx(ce,{label:n?c:void 0,value:R,groupName:t,disabled:p,error:d,readOnly:V,onChange:se,isChecked:oe===R,"aria-label":le,"aria-labelledby":ie},R+ue))})]})})});r.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreRadioButtonGroupProps"]};const Se={title:"Composants/RadioButtonGroup",component:r,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the radio button group.",defaultValue:"group1"},items:{control:"object",description:"The items in the radio button group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the radio button group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the radio button group.",defaultValue:"Radio Button Group Title"},groupHelpText:{control:"text",description:"The help text for the radio button group.",defaultValue:"This is a help text for the radio button group."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the radio button group is disabled. This will disable all radio buttons in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the radio button group is read-only. This will make all radio buttons in the group read-only.",defaultValue:!1}}},a={args:{groupName:"radio-group",items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],direction:"horizontal",showItemsLabel:!0,groupTitle:"Radio Button Group Title",groupHelpText:"This is a help text for the radio button group.",errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:t})=>{const o=Z(t).getByRole("radio",{name:"Option 1"}),n=t.querySelector("fieldset"),s=n==null?void 0:n.querySelector("legend");y(n).not.toBeNull(),y(s).toHaveTextContent("Radio Button Group Title"),await de.click(o),y(o).toBeChecked()}},g={args:{...a.args,groupName:"disabled-radio-group",disabled:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t})})},m={args:{...a.args,groupName:"error-radio-group",error:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t})})},h={args:{...a.args,groupName:"readonly-radio-group",readOnly:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t})})},f={args:{...a.args},render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{...t,direction:"horizontal",groupName:"horizontal"}),e.jsx(r,{...t,direction:"vertical",groupName:"vertical"})]})},v={args:{...a.args,selectedValue:"option2"},render:t=>{var s;const[i,o]=B.useState(t.selectedValue),n=((s=t.items.find(u=>u.value===i))==null?void 0:s.label)||"";return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...t,onValueChange:u=>o(u),selectedValue:i})}),e.jsxs("p",{children:["Selected Value: ",n," "]})]})},play:async({canvasElement:t})=>{const o=Z(t).getByRole("radio",{name:"Option 2"});y(o).toBeChecked()}},b={args:{...a.args,direction:"vertical",items:[{label:"Option 1 with a very long label that should wrap to the next line",value:"option1"},{label:"Option 2 with a very long label that should wrap to the next line",value:"option2"},{label:"Option 3 with a very long label that should wrap to the next line",value:"option3"}]},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},x={args:{...a.args,groupName:"with-required-radio-group",required:!0,showLabelRequirement:!0},render:t=>e.jsx(r,{...t})};var N,O,q;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    groupHelpText: "This is a help text for the radio button group.",
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
}`,...(q=(O=a.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var _,S,C;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(S=g.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,L,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var I,z,H;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(z=h.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var k,M,W;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(M=f.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var F,P,U;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(P=v.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var A,J,K;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "with-required-radio-group",
    required: true,
    showLabelRequirement: true
  },
  render: args => {
    return <RadioButtonGroup {...args} />;
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ce=["Default","Disabled","Error","ReadOnly","Directions","InitialValueSelected","VerticalLongLabel","WithRequired"];export{a as Default,f as Directions,g as Disabled,m as Error,v as InitialValueSelected,h as ReadOnly,b as VerticalLongLabel,x as WithRequired,Ce as __namedExportsOrder,Se as default};
