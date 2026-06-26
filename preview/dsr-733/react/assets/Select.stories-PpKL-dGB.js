import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as x,a as b}from"./keyboard-test.constants-DRUxacrk.js";import{w as O,u as r,e as d}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as z}from"./testing.utils-mIZIUNbM.js";import{S as c}from"./Select-BN0gTw50.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./timepicker.constants-V9Xrpx_a.js";import"./icon.constants-CvX5SV3k.js";import"./RequiredIndicator-DgxXASK_.js";import"./Icon-CU2dhKsu.js";import"./Link-DbhMk7ak.js";import"./index-DSdvzt-y.js";import"./Badge-C50GdgLn.js";import"./Chip-n3Lx_o6b.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./DropdownItem-B9Eel5aY.js";import"./BaseDropdown-B1GdRc4u.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./Checkbox-BioZnoB7.js";import"./IconButton-B3cia4P8.js";import"./common-button.constants-eNlmcvUj.js";const we={title:"Composants/Select/Select",component:c,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]},compactSpacing:{control:"boolean"},placeholder:{control:"text"},variant:{control:{type:"select"},options:["default","visibly-selected"]}}},i={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected",compactSpacing:!1,placeholder:"Select an option"},render:t=>{const[e,l]=p.useState(),o=n=>{l(t.options.find(s=>s.value===n))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},v={args:{...i.args,isError:!0},render:t=>{const[e,l]=p.useState(),o=n=>{typeof n=="string"&&l(t.options.find(s=>s.value===n))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},g={args:{...i.args,readonly:!0},render:t=>{const[e,l]=p.useState(),o=n=>{typeof n=="string"&&l(t.options.find(s=>s.value===n))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const l=O(t).getByRole("combobox");await r.tab(),d(l).not.toHaveFocus()}},m={args:{...i.args,disabled:!0},render:t=>{const[e,l]=p.useState(),o=n=>{const s=Array.isArray(n)?n[0]:n;l(t.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const l=O(t).getByRole("combobox");await r.tab(),d(l).not.toHaveFocus()}},y={args:{...i.args,compactSpacing:!0},render:t=>{const[e,l]=p.useState(),o=n=>{const s=Array.isArray(n)?n[0]:n;l(t.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},f={args:{...i.args,variant:"visibly-selected"},render:t=>{const[e,l]=p.useState(),o=n=>{const s=Array.isArray(n)?n[0]:n;l(t.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},h={args:{...i.args,withSelectAll:!0},render:t=>{const[e,l]=p.useState([]),o=n=>{if(n==="select-all"){e.length===t.options.length?l([]):l(t.options.map(s=>s.value));return}e&&(e.includes(n)?l(e.filter(s=>s!==n)):l([...e,n]))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e,multiple:!0}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected values :"," ",e.length>0?e.map(n=>n).join(", "):"No value"]})]})}},S={args:{...i.args,showResetButton:!0},render:t=>{const[e,l]=p.useState(),o=n=>{const s=Array.isArray(n)?n[0]:n;l(t.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,onChange:o,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t,args:e})=>{const o=O(t).getByRole("combobox");z(t),await r.tab(),d(o).toHaveFocus(),await r.keyboard(x),await r.tab(),await r.keyboard(b),await r.keyboard(x),d(o).toHaveTextContent("Option 2");const n=o.querySelector("button"),s=o.querySelector("[data-testid='trigger-icon']");await r.click(n),d(o).toHaveTextContent(e.placeholder),await r.click(s),await r.tab(),await r.tab(),await r.keyboard(b),await r.keyboard(b),await r.keyboard(x),d(o).toHaveTextContent("Option 3")}};var E,C,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    optionToDisplay: "first-selected",
    compactSpacing: false,
    placeholder: "Select an option"
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
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var A,T,D;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=(I=y.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var H,K,G;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(K=f.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Y,L,q;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var W,M,P;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(M=S.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Ae=["Default","Error","ReadOnly","Disabled","CompactSpacing","VisiblySelected","Multiple","KeyboardInteraction"];export{y as CompactSpacing,i as Default,m as Disabled,v as Error,S as KeyboardInteraction,h as Multiple,g as ReadOnly,f as VisiblySelected,Ae as __namedExportsOrder,we as default};
