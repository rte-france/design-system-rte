import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as W,u as $,e as P}from"./index-4rjIhT2C.js";import{r as B}from"./index-G8LIXM5I.js";import{R as ee}from"./RadioButton-CPQJomRd.js";import{c as re}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ae="_radioButtonGroupContainer_hx6sc_1",te="_radioButtonGroupHeader_hx6sc_9",oe="_groupTitle_hx6sc_9",se="_groupHelpText_hx6sc_20",ne="_errorMessage_hx6sc_32",le="_radioButtonGroup_hx6sc_1",n={radioButtonGroupContainer:ae,radioButtonGroupHeader:te,groupTitle:oe,groupHelpText:se,errorMessage:ne,radioButtonGroup:le},o=B.forwardRef(({groupName:r,items:s,direction:t="horizontal",showItemsLabel:x=!0,groupTitle:l="",showGroupTitle:i=!1,groupHelpText:T="",showHelpText:U=!1,errorMessage:V="",error:u=!1,disabled:d=!1,readOnly:v=!1,className:F="",onValueChange:b,selectedValue:A,...J},K)=>{const[Q,X]=B.useState(A);if(d&&u)return console.warn("RadioButtonGroup cannot be both disabled and in an error state. Please choose one state or the other."),null;const Y=p=>{d||v||(b==null||b(p.target.value),X(p.target.value))};return e.jsxs("div",{ref:K,className:re(n.radioButtonGroupContainer,F),...J,children:[e.jsxs("div",{className:n.radioButtonGroupHeader,"data-error":u,"data-disabled":d,"data-read-only":v,children:[l&&i&&e.jsx("h3",{className:n.groupTitle,children:l}),T&&U&&e.jsx("p",{className:n.groupHelpText,children:T}),V&&u&&e.jsx("p",{className:n.errorMessage,children:V})]}),e.jsx("div",{className:n.radioButtonGroup,"data-direction":t,children:s.map(({label:p,value:y},Z)=>e.jsx(ee,{label:p,value:y,groupName:r,showLabel:x,disabled:d,error:u,readOnly:v,onChange:Y,isChecked:Q===y},y+Z))})]})});o.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreRadioButtonGroupProps"]};const me={title:"Composants/RadioButtonGroup",component:o,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the radio button group.",defaultValue:"group1"},items:{control:"object",description:"The items in the radio button group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the radio button group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the radio button group.",defaultValue:"Radio Button Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the radio button group.",defaultValue:"This is a help text for the radio button group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the radio button group is disabled. This will disable all radio buttons in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the radio button group is read-only. This will make all radio buttons in the group read-only.",defaultValue:!1}}},a={args:{groupName:"radio-group",items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],direction:"horizontal",showItemsLabel:!0,groupTitle:"Radio Button Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the radio button group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:r})=>{const t=W(r).getByRole("radio",{name:"Option 1"});await $.click(t),P(t).toBeChecked()}},c={args:{...a.args,groupName:"disabled-radio-group",disabled:!0},render:r=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...r})})},g={args:{...a.args,groupName:"error-radio-group",error:!0},render:r=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...r})})},h={args:{...a.args,groupName:"readonly-radio-group",readOnly:!0},render:r=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...r})})},m={args:{...a.args},render:r=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{...r,direction:"horizontal",groupName:"horizontal"}),e.jsx(o,{...r,direction:"vertical",groupName:"vertical"})]})},f={args:{...a.args,selectedValue:"option2"},render:r=>{var l;const[s,t]=B.useState(r.selectedValue),x=((l=r.items.find(i=>i.value===s))==null?void 0:l.label)||"";return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...r,onValueChange:i=>t(i),selectedValue:s})}),e.jsxs("p",{children:["Selected Value: ",x," "]})]})},play:async({canvasElement:r})=>{const t=W(r).getByRole("radio",{name:"Option 2"});P(t).toBeChecked()}};var G,w,R;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=(w=a.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var j,N,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var O,S,H;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(S=g.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var C,q,D;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(q=h.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,z,k;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(z=m.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var I,L,M;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const fe=["Default","Disabled","Error","ReadOnly","Directions","InitialValueSelected"];export{a as Default,m as Directions,c as Disabled,g as Error,f as InitialValueSelected,h as ReadOnly,fe as __namedExportsOrder,me as default};
