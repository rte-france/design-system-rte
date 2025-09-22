import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as I,u as L,e as S}from"./index-DaW6VCyr.js";import{r as P}from"./index-G8LIXM5I.js";import{R as U}from"./RadioButton-DjAJ63-u.js";import{c as A}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const F="_radioButtonGroupContainer_eqdd3_3",J="_radioButtonGroupHeader_eqdd3_11",K="_groupTitle_eqdd3_11",Q="_groupHelpText_eqdd3_22",X="_errorMessage_eqdd3_34",Y="_radioButtonGroup_eqdd3_3",t={radioButtonGroupContainer:F,radioButtonGroupHeader:J,groupTitle:K,groupHelpText:Q,errorMessage:X,radioButtonGroup:Y},a=P.forwardRef(({groupName:r,items:c,direction:s="horizontal",showItemsLabel:H=!0,groupTitle:g="",showGroupTitle:z=!1,groupHelpText:f="",showHelpText:D=!1,errorMessage:h="",error:n=!1,disabled:p=!1,readOnly:m=!1,className:E="",...C},M)=>{if(!(p&&n))return e.jsxs("div",{ref:M,className:A(t.radioButtonGroupContainer,E),...C,children:[e.jsxs("div",{className:t.radioButtonGroupHeader,"data-error":n,"data-disabled":p,"data-read-only":m,children:[g&&z&&e.jsx("h3",{className:t.groupTitle,children:g}),f&&D&&e.jsx("p",{className:t.groupHelpText,children:f}),h&&n&&e.jsx("p",{className:t.errorMessage,children:h})]}),e.jsx("div",{className:t.radioButtonGroup,"data-direction":s,children:c.map((W,k)=>e.jsx(U,{label:W,groupName:r,showLabel:H,disabled:p,error:n,readOnly:m},k))})]})});a.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showItemsLabel:{defaultValue:{value:"true",computed:!1},required:!1},groupTitle:{defaultValue:{value:'""',computed:!1},required:!1},showGroupTitle:{defaultValue:{value:"false",computed:!1},required:!1},groupHelpText:{defaultValue:{value:'""',computed:!1},required:!1},showHelpText:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreRadioButtonGroupProps"]};const se={title:"RadioButtonGroup",component:a,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"The name of the radio button group.",defaultValue:"group1"},items:{control:"object",description:"The items in the radio button group.",defaultValue:["Option 1","Option 2","Option 3"]},direction:{control:"select",options:["horizontal","vertical"],description:"The direction of the radio button group.",defaultValue:"horizontal"},showItemsLabel:{control:"boolean",description:"Whether to show the label for each item.",defaultValue:!0},groupTitle:{control:"text",description:"The title of the radio button group.",defaultValue:"Radio Button Group Title"},showGroupTitle:{control:"boolean",description:"Whether to show the group title.",defaultValue:!0},groupHelpText:{control:"text",description:"The help text for the radio button group.",defaultValue:"This is a help text for the radio button group."},showHelpText:{control:"boolean",description:"Whether to show the help text.",defaultValue:!0},errorMessage:{control:"text",description:"The error message to display when there is an error. Use `error` prop to trigger this message.",defaultValue:"This is an error message. Please select an option."},error:{control:"boolean",description:"Whether to show the error message. Use `errorMessage` prop to set the message.",defaultValue:!1},disabled:{control:"boolean",description:"Whether the radio button group is disabled. This will disable all radio buttons in the group.",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the radio button group is read-only. This will make all radio buttons in the group read-only.",defaultValue:!1}}},o={args:{groupName:"radio-group",items:["Option 1","Option 2","Option 3"],direction:"horizontal",showItemsLabel:!0,groupTitle:"Radio Button Group Title",showGroupTitle:!0,groupHelpText:"This is a help text for the radio button group.",showHelpText:!0,errorMessage:"This is an error message. Please select an option.",error:!1,disabled:!1,readOnly:!1},play:async({canvasElement:r})=>{const s=I(r).getByRole("radio",{name:"Option 1"});await L.click(s),S(s).toBeChecked()}},l={args:{...o.args,groupName:"disabled-radio-group",disabled:!0},render:r=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(a,{...r})})},i={args:{...o.args,groupName:"error-radio-group",error:!0},render:r=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(a,{...r})})},u={args:{...o.args,groupName:"readonly-radio-group",readOnly:!0},render:r=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(a,{...r})})},d={args:{...o.args},render:r=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{...r,direction:"horizontal",groupName:"horizontal"}),e.jsx(a,{...r,direction:"vertical",groupName:"vertical"})]})};var x,T,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    groupName: "radio-group",
    items: ["Option 1", "Option 2", "Option 3"],
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
}`,...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var y,b,B;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(b=l.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var G,w,V;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(V=(w=i.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var N,_,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var j,O,q;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const ne=["Default","Disabled","Error","ReadOnly","Directions"];export{o as Default,d as Directions,l as Disabled,i as Error,u as ReadOnly,ne as __namedExportsOrder,se as default};
