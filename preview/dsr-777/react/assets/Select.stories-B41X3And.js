import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{T as f,a as O}from"./keyboard-test.constants-DRUxacrk.js";import{w as h,u as l,e as c}from"./index-4rjIhT2C.js";import{r as u}from"./index-G8LIXM5I.js";import{f as G}from"./testing.utils-mIZIUNbM.js";import{S as p}from"./Select-j1SUEJEO.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./RequiredIndicator-Cmvl3eZq.js";import"./Icon-Bc7wfgCv.js";import"./Link-CAnB1cKs.js";import"./index-DSdvzt-y.js";import"./Badge-C3W4NyCk.js";import"./Chip-Dn6V0b1u.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./DropdownItem-BPi4uddO.js";import"./BaseDropdown-CgvF33v4.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./Checkbox-D82IU-Su.js";import"./IconButton-DcIeVO_H.js";import"./common-button.constants-eNlmcvUj.js";const me={title:"Composants/Select/Select",component:p,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]}}},r={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"},{value:"option-5",label:"Option 5"},{value:"option-6",label:"Option 6"},{value:"option-7",label:"Option 7"},{value:"option-8",label:"Option 8"},{value:"option-9",label:"Option 9"},{value:"option-10",label:"Option 10"},{value:"option-11",label:"Option 11"},{value:"option-12",label:"Option 12"},{value:"option-13",label:"Option 13"},{value:"option-14",label:"Option 14"},{value:"option-15",label:"Option 15"},{value:"option-16",label:"Option 16"},{value:"option-17",label:"Option 17"},{value:"option-18",label:"Option 18"},{value:"option-19",label:"Option 19"},{value:"option-20",label:"Option 20"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected",maxHeight:200},render:n=>{const[e,t]=u.useState(),s=a=>{t(n.options.find(i=>i.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(p,{...n,onChange:s,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},d={args:{...r.args,isError:!0},render:n=>{const[e,t]=u.useState(),s=a=>{typeof a=="string"&&t(n.options.find(i=>i.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(p,{...n,onChange:s,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},v={args:{...r.args,readonly:!0},render:n=>{const[e,t]=u.useState(),s=a=>{typeof a=="string"&&t(n.options.find(i=>i.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(p,{...n,onChange:s,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const t=h(n).getByRole("combobox");await l.tab(),c(t).not.toHaveFocus()}},g={args:{...r.args,disabled:!0},render:n=>{const[e,t]=u.useState(),s=a=>{const i=Array.isArray(a)?a[0]:a;t(n.options.find(y=>y.value===i))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(p,{...n,onChange:s,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const t=h(n).getByRole("combobox");await l.tab(),c(t).not.toHaveFocus()}},m={args:{...r.args,withSelectAll:!0},render:n=>{const[e,t]=u.useState([]),s=a=>{if(a==="select-all"){e.length===n.options.length?t([]):t(n.options.map(i=>i.value));return}e&&(e.includes(a)?t(e.filter(i=>i!==a)):t([...e,a]))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(p,{...n,onChange:s,value:e,multiple:!0}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected values :"," ",e.length>0?e.map(a=>a).join(", "):"No value"]})]})}},b={args:{...r.args,showResetButton:!0},render:n=>{const[e,t]=u.useState(),s=a=>{const i=Array.isArray(a)?a[0]:a;t(n.options.find(y=>y.value===i))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(p,{...n,onChange:s,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const t=h(n).getByRole("combobox");G(n),await l.tab(),c(t).toHaveFocus(),await l.keyboard(f),await l.tab(),await l.keyboard(O),await l.keyboard(f),c(t).toHaveTextContent("Option 2");const s=t.querySelector("button"),a=t.querySelector("[data-testid='trigger-icon']");await l.click(s),c(t).toHaveTextContent(""),await l.click(a),await l.tab(),await l.tab(),await l.keyboard(O),await l.keyboard(O),await l.keyboard(f),c(t).toHaveTextContent("Option 3")}};var x,S,E;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    }, {
      value: "option-4",
      label: "Option 4"
    }, {
      value: "option-5",
      label: "Option 5"
    }, {
      value: "option-6",
      label: "Option 6"
    }, {
      value: "option-7",
      label: "Option 7"
    }, {
      value: "option-8",
      label: "Option 8"
    }, {
      value: "option-9",
      label: "Option 9"
    }, {
      value: "option-10",
      label: "Option 10"
    }, {
      value: "option-11",
      label: "Option 11"
    }, {
      value: "option-12",
      label: "Option 12"
    }, {
      value: "option-13",
      label: "Option 13"
    }, {
      value: "option-14",
      label: "Option 14"
    }, {
      value: "option-15",
      label: "Option 15"
    }, {
      value: "option-16",
      label: "Option 16"
    }, {
      value: "option-17",
      label: "Option 17"
    }, {
      value: "option-18",
      label: "Option 18"
    }, {
      value: "option-19",
      label: "Option 19"
    }, {
      value: "option-20",
      label: "Option 20"
    }],
    disabled: false,
    readonly: false,
    showResetButton: false,
    withSelectAll: false,
    optionToDisplay: "first-selected",
    maxHeight: 200
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
      gap: "16px"
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
}`,...(E=(S=r.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var w,C,T;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      gap: "16px"
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
      gap: "16px"
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
      gap: "16px"
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
      gap: "16px"
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
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var I,H,K;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      gap: "16px"
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
}`,...(K=(H=b.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const be=["Default","Error","ReadOnly","Disabled","Multiple","KeyboardInteraction"];export{r as Default,g as Disabled,d as Error,b as KeyboardInteraction,m as Multiple,v as ReadOnly,be as __namedExportsOrder,me as default};
