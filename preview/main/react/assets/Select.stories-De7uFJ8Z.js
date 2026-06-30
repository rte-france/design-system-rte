import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as O,a as S}from"./keyboard-test.constants-DRUxacrk.js";import{w as x,u as i,e as d}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as z}from"./testing.utils-mIZIUNbM.js";import{S as c}from"./Select-Cup6Nv1F.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./timepicker.constants-V9Xrpx_a.js";import"./icon.constants-CvX5SV3k.js";import"./Label-BZwpSmrJ.js";import"./Icon-DgLH6pPJ.js";import"./Link-DLPtM2IA.js";import"./index-DSdvzt-y.js";import"./Badge-krITzoP9.js";import"./Chip-CrJwgfyd.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./DropdownItem-BYl0toI8.js";import"./BaseDropdown-CgvF33v4.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./Checkbox-C8hWUkyN.js";import"./IconButton-HZdrGdmr.js";import"./common-button.constants-eNlmcvUj.js";const we={title:"Composants/Select/Select",component:c,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]},compactSpacing:{control:"boolean"},placeholder:{control:"text"},variant:{control:{type:"select"},options:["default","visibly-selected"]},maxHeight:{control:{type:"number"}}}},r={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"},{value:"option-5",label:"Option 5"},{value:"option-6",label:"Option 6"},{value:"option-7",label:"Option 7"},{value:"option-8",label:"Option 8"},{value:"option-9",label:"Option 9"},{value:"option-10",label:"Option 10"},{value:"option-11",label:"Option 11"},{value:"option-12",label:"Option 12"},{value:"option-13",label:"Option 13"},{value:"option-14",label:"Option 14"},{value:"option-15",label:"Option 15"},{value:"option-16",label:"Option 16"},{value:"option-17",label:"Option 17"},{value:"option-18",label:"Option 18"},{value:"option-19",label:"Option 19"},{value:"option-20",label:"Option 20"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected",compactSpacing:!1,placeholder:"Select an option",required:!1},render:t=>{const[e,l]=p.useState(),o=n=>{l(t.options.find(s=>s.value===n))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},v={args:{...r.args,isError:!0},render:t=>{const[e,l]=p.useState(),o=n=>{typeof n=="string"&&l(t.options.find(s=>s.value===n))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},g={args:{...r.args,readonly:!0},render:t=>{const[e,l]=p.useState(),o=n=>{typeof n=="string"&&l(t.options.find(s=>s.value===n))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const l=x(t).getByRole("combobox");await i.tab(),d(l).not.toHaveFocus()}},m={args:{...r.args,disabled:!0},render:t=>{const[e,l]=p.useState(),o=n=>{const s=Array.isArray(n)?n[0]:n;l(t.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const l=x(t).getByRole("combobox");await i.tab(),d(l).not.toHaveFocus()}},y={args:{...r.args,compactSpacing:!0},render:t=>{const[e,l]=p.useState(),o=n=>{const s=Array.isArray(n)?n[0]:n;l(t.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},b={args:{...r.args,variant:"visibly-selected"},render:t=>{const[e,l]=p.useState(),o=n=>{const s=Array.isArray(n)?n[0]:n;l(t.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},f={args:{...r.args,withSelectAll:!0},render:t=>{const[e,l]=p.useState([]),o=n=>{if(n==="select-all"){e.length===t.options.length?l([]):l(t.options.map(s=>s.value));return}e&&(e.includes(n)?l(e.filter(s=>s!==n)):l([...e,n]))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e,multiple:!0}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected values :"," ",e.length>0?e.map(n=>n).join(", "):"No value"]})]})}},h={args:{...r.args,showResetButton:!0},render:t=>{const[e,l]=p.useState(),o=n=>{const s=Array.isArray(n)?n[0]:n;l(t.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t,args:e})=>{const o=x(t).getByRole("combobox");z(t),await i.tab(),d(o).toHaveFocus(),await i.keyboard(O),await i.tab(),await i.keyboard(S),await i.keyboard(O),d(o).toHaveTextContent("Option 2");const n=o.querySelector("button"),s=o.querySelector("[data-testid='trigger-icon']");await i.click(n),d(o).toHaveTextContent(e.placeholder),await i.click(s),await i.tab(),await i.tab(),await i.keyboard(S),await i.keyboard(S),await i.keyboard(O),d(o).toHaveTextContent("Option 3")}};var E,C,w;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    compactSpacing: false,
    placeholder: "Select an option",
    required: false
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
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var A,T,D;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(T=v.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,j,F;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(j=g.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var R,_,k;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(k=(_=m.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var B,I,V;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compactSpacing: true
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
  }
}`,...(V=(I=y.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var H,K,q;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "visibly-selected"
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
  }
}`,...(q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var G,Y,L;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var W,M,P;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    canvasElement,
    args
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
    expect(select).toHaveTextContent(args.placeholder!);
    await userEvent.click(toggleIcon!);
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 3");
  }
}`,...(P=(M=h.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Ae=["Default","Error","ReadOnly","Disabled","CompactSpacing","VisiblySelected","Multiple","KeyboardInteraction"];export{y as CompactSpacing,r as Default,m as Disabled,v as Error,h as KeyboardInteraction,f as Multiple,g as ReadOnly,b as VisiblySelected,Ae as __namedExportsOrder,we as default};
