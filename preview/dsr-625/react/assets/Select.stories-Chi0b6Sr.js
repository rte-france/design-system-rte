import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{T as h,b as x}from"./keyboard-test.constants-By8W48aj.js";import{w as b,u as s,e as p}from"./index-4rjIhT2C.js";import{r as u}from"./index-G8LIXM5I.js";import{f as G}from"./testing.utils-mIZIUNbM.js";import{S as c}from"./Select-e4CCupVf.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./RequiredIndicator-Cmvl3eZq.js";import"./Icon-Bc7wfgCv.js";import"./Link-CAnB1cKs.js";import"./index-DSdvzt-y.js";import"./Badge-C3W4NyCk.js";import"./Chip-CtHjYzdt.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./DropdownItem-DwqexO3q.js";import"./BaseDropdown-Bc55FiNe.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./Checkbox-D82IU-Su.js";import"./IconButton-DcIeVO_H.js";import"./common-button.constants-eNlmcvUj.js";const ge={title:"Composants/Select/Select",component:c,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]}}},i={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected"},render:t=>{const[e,n]=u.useState(),l=a=>{n(t.options.find(r=>r.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[o.jsx(c,{...t,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},d={args:{...i.args,isError:!0},render:t=>{const[e,n]=u.useState(),l=a=>{typeof a=="string"&&n(t.options.find(r=>r.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[o.jsx(c,{...t,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},v={args:{...i.args,readonly:!0},render:t=>{const[e,n]=u.useState(),l=a=>{typeof a=="string"&&n(t.options.find(r=>r.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[o.jsx(c,{...t,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const n=b(t).getByRole("combobox");await s.tab(),p(n).not.toHaveFocus()}},g={args:{...i.args,disabled:!0},render:t=>{const[e,n]=u.useState(),l=a=>{const r=Array.isArray(a)?a[0]:a;n(t.options.find(f=>f.value===r))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[o.jsx(c,{...t,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const n=b(t).getByRole("combobox");await s.tab(),p(n).not.toHaveFocus()}},m={args:{...i.args,withSelectAll:!0},render:t=>{const[e,n]=u.useState([]),l=a=>{if(a==="select-all"){e.length===t.options.length?n([]):n(t.options.map(r=>r.value));return}e&&(e.includes(a)?n(e.filter(r=>r!==a)):n([...e,a]))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[o.jsx(c,{...t,onChange:l,value:e,multiple:!0}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected values :"," ",e.length>0?e.map(a=>a).join(", "):"No value"]})]})}},y={args:{...i.args,showResetButton:!0},render:t=>{const[e,n]=u.useState(),l=a=>{const r=Array.isArray(a)?a[0]:a;n(t.options.find(f=>f.value===r))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[o.jsx(c,{...t,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const n=b(t).getByRole("combobox");G(t),await s.tab(),p(n).toHaveFocus(),await s.keyboard(h),await s.tab(),await s.keyboard(x),await s.keyboard(h),p(n).toHaveTextContent("Option 2");const l=n.querySelector("button"),a=n.querySelector("[data-testid='trigger-icon']");await s.click(l),p(n).toHaveTextContent(""),await s.click(a),await s.tab(),await s.tab(),await s.keyboard(x),await s.keyboard(x),await s.keyboard(h),p(n).toHaveTextContent("Option 3")}};var S,O,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: "select1",
    label: "Choisir une option",
    showLabel: true,
    isError: false,
    assistiveAppearance: "description",
    showAssistiveIcon: false,
    assistiveTextLabel: "This is a description for the select component.",
    options: [{
      value: "option-1",
      label: "Option 1"
    }, {
      value: "option-2",
      label: "Option 2"
    }, {
      value: "option-3",
      label: "Option 3"
    }],
    disabled: false,
    readonly: false,
    showResetButton: false,
    withSelectAll: false,
    optionToDisplay: "first-selected"
  },
  render: args => {
    const [selectedOption, setSelectedOption] = useState<{
      label: string;
      value: string;
    }>();
    const handleOnChange = (value: string) => {
      setSelectedOption(args.options.find(option => option.value === value));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "280px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  }
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var E,C,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  },
  render: args => {
    const [selectedOption, setSelectedOption] = useState<{
      label: string;
      value: string;
    }>();
    const handleOnChange = (value: string | string[]) => {
      if (typeof value === "string") {
        setSelectedOption(args.options.find(option => option.value === value));
      }
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "280px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  }
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var A,D,N;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readonly: true
  },
  render: args => {
    const [selectedOption, setSelectedOption] = useState<{
      label: string;
      value: string;
    }>();
    const handleOnChange = (value: string) => {
      if (typeof value === "string") {
        setSelectedOption(args.options.find(option => option.value === value));
      }
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "280px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await userEvent.tab();
    expect(select).not.toHaveFocus();
  }
}`,...(N=(D=v.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var j,R,F;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  render: args => {
    const [selectedOption, setSelectedOption] = useState<{
      label: string;
      value: string;
    }>();
    const handleOnChange = (value: string | string[]) => {
      const stringValue = Array.isArray(value) ? value[0] : value;
      setSelectedOption(args.options.find(option => option.value === stringValue));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "280px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await userEvent.tab();
    expect(select).not.toHaveFocus();
  }
}`,...(F=(R=g.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var _,k,B;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withSelectAll: true
  },
  render: args => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const handleOnChange = (value: string) => {
      if (value === "select-all") {
        if (selectedOptions.length === args.options.length) {
          setSelectedOptions([]);
        } else {
          setSelectedOptions(args.options.map(option => option.value));
        }
        return;
      }
      if (selectedOptions) {
        if (selectedOptions.includes(value)) {
          setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
          setSelectedOptions([...selectedOptions, value]);
        }
      }
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "280px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOptions} multiple={true} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected values :{" "}
          {selectedOptions.length > 0 ? selectedOptions.map(option => option).join(", ") : "No value"}
        </span>
      </div>;
  }
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var I,H,K;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showResetButton: true
  },
  render: args => {
    const [selectedOption, setSelectedOption] = useState<{
      label: string;
      value: string;
    }>();
    const handleOnChange = (value: string | string[]) => {
      const stringValue = Array.isArray(value) ? value[0] : value;
      setSelectedOption(args.options.find(option => option.value === stringValue));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "280px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(select).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 2");
    const clearButton = select.querySelector("button");
    const toggleIcon = select.querySelector("[data-testid='trigger-icon']");
    await userEvent.click(clearButton!);
    expect(select).toHaveTextContent("");
    await userEvent.click(toggleIcon!);
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 3");
  }
}`,...(K=(H=y.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const me=["Default","Error","ReadOnly","Disabled","Multiple","KeyboardInteraction"];export{i as Default,g as Disabled,d as Error,y as KeyboardInteraction,m as Multiple,v as ReadOnly,me as __namedExportsOrder,ge as default};
