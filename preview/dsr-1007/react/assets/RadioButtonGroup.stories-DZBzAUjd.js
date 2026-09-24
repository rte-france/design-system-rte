import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as Z,e as y,u as ce}from"./index-4rjIhT2C.js";import{r as B}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as ge}from"./id.utils-DsO5Uws7.js";import{R as he}from"./RadioButton-_Gv7rrx3.js";import{R as me}from"./RequiredIndicator-Bmo4UcWJ.js";import{c as fe}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-VewZnR13.js";const ve="_radioButtonGroupContainer_1n41a_1",xe="_radioButtonGroupFieldset_1n41a_8",be="_groupTitle_1n41a_26",ye="_groupHelpText_1n41a_40",Be="_errorMessage_1n41a_52",we="_radioButtonGroup_1n41a_1",s={radioButtonGroupContainer:ve,radioButtonGroupFieldset:xe,"rte-radioButtonGroupTitleContainer":"_rte-radioButtonGroupTitleContainer_1n41a_19",groupTitle:be,groupHelpText:ye,errorMessage:Be,radioButtonGroup:we},a=B.forwardRef(({groupName:t,items:i,direction:o="horizontal",showItemsLabel:n=!0,groupTitle:l="",showGroupTitle:u=!1,groupHelpText:R="",showHelpText:$=!1,errorMessage:w="",error:d=!1,disabled:p=!1,readOnly:T=!1,className:ee="",onValueChange:V,selectedValue:te,required:re=!1,showLabelRequirement:j=!1,...ae},oe)=>{const ne=B.useRef(ge()).current,[le,se]=B.useState(te);if(p&&d)return console.warn("RadioButtonGroup cannot be both disabled and in an error state. Please choose one state or the other."),null;const ie=c=>{p||T||(V==null||V(c.target.value),se(c.target.value))};return e.jsx("div",{ref:oe,className:fe(s.radioButtonGroupContainer,ee),...ae,children:e.jsxs("fieldset",{className:s.radioButtonGroupFieldset,"data-error":d,"data-disabled":p,"data-read-only":T,"aria-describedby":d&&w?ne:void 0,children:[e.jsxs("div",{className:s["rte-radioButtonGroupTitleContainer"],"data-show-label-requirement":j,children:[l&&u&&e.jsx("legend",{className:s.groupTitle,children:l}),e.jsx(me,{required:re,showLabelRequirement:j})]}),R&&$&&e.jsx("p",{className:s.groupHelpText,children:R}),w&&d&&e.jsx("p",{className:s.errorMessage,children:w}),e.jsx("div",{className:s.radioButtonGroup,"data-direction":o,children:i.map(({label:c,value:G,ariaLabel:ue,ariaLabelledBy:de},pe)=>e.jsx(he,{label:n?c:void 0,value:G,groupName:t,disabled:p,error:d,readOnly:T,onChange:ie,isChecked:le===G,"aria-label":ue,"aria-labelledby":de},G+pe))})]})})});a.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreRadioButtonGroupProps"]};const De={title:"Composants/RadioButtonGroup",component:a,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the radio button group.",defaultValue:"group1"},items:{control:"object",description:"The items in the radio button group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the radio button group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the radio button group.",defaultValue:"Radio Button Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the radio button group.",defaultValue:"This is a help text for the radio button group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the radio button group is disabled. This will disable all radio buttons in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the radio button group is read-only. This will make all radio buttons in the group read-only.",defaultValue:!1}}},r={args:{groupName:"radio-group",items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],direction:"horizontal",showItemsLabel:!0,groupTitle:"Radio Button Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the radio button group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:t})=>{const o=Z(t).getByRole("radio",{name:"Option 1"}),n=t.querySelector("fieldset"),l=n==null?void 0:n.querySelector("legend");y(n).not.toBeNull(),y(l).toHaveTextContent("Radio Button Group Title"),await ce.click(o),y(o).toBeChecked()}},g={args:{...r.args,groupName:"disabled-radio-group",disabled:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(a,{...t})})},h={args:{...r.args,groupName:"error-radio-group",error:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(a,{...t})})},m={args:{...r.args,groupName:"readonly-radio-group",readOnly:!0},render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(a,{...t})})},f={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{...t,direction:"horizontal",groupName:"horizontal"}),e.jsx(a,{...t,direction:"vertical",groupName:"vertical"})]})},v={args:{...r.args,selectedValue:"option2"},render:t=>{var l;const[i,o]=B.useState(t.selectedValue),n=((l=t.items.find(u=>u.value===i))==null?void 0:l.label)||"";return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(a,{...t,onValueChange:u=>o(u),selectedValue:i})}),e.jsxs("p",{children:["Selected Value: ",n," "]})]})},play:async({canvasElement:t})=>{const o=Z(t).getByRole("radio",{name:"Option 2"});y(o).toBeChecked()}},x={args:{...r.args,direction:"vertical",items:[{label:"Option 1 with a very long label that should wrap to the next line",value:"option1"},{label:"Option 2 with a very long label that should wrap to the next line",value:"option2"},{label:"Option 3 with a very long label that should wrap to the next line",value:"option3"}]},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{...t})})},b={args:{...r.args,groupName:"with-required-radio-group",required:!0,showLabelRequirement:!0},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{...t})})};var q,N,O;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(N=r.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,S,C;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(S=g.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,H,L;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(H=h.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var E,I,z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(I=m.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var k,M,W;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(U=(P=v.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var A,J,K;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupName: "with-required-radio-group",
    required: true,
    showLabelRequirement: true
  },
  render: args => {
    return <div style={{
      width: "300px"
    }}>
        <RadioButtonGroup {...args} />
      </div>;
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const He=["Default","Disabled","Error","ReadOnly","Directions","InitialValueSelected","VerticalLongLabel","WithRequired"];export{r as Default,f as Directions,g as Disabled,h as Error,v as InitialValueSelected,m as ReadOnly,x as VerticalLongLabel,b as WithRequired,He as __namedExportsOrder,De as default};
