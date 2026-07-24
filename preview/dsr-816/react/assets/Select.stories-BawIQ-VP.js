import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as S,b as O}from"./keyboard-test.constants-By8W48aj.js";import{w as E,u as r,e as d}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as X}from"./testing.utils-mIZIUNbM.js";import{S as c}from"./Select-DnaQv3HR.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./timepicker.constants-CgjTDnHz.js";import"./icon.constants-CvX5SV3k.js";import"./Label-Bgp-fFvQ.js";import"./Icon-DgLH6pPJ.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./Badge-DkJhvK8e.js";import"./Chip-CuGpA2jf.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./DropdownItem-k4Q2rd-2.js";import"./BaseDropdown-Czs52lGx.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./Checkbox-C8hWUkyN.js";import"./IconButton-en7B25KO.js";import"./common-button.constants-eNlmcvUj.js";const je={title:"Composants/Select/Select",component:c,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]},compactSpacing:{control:"boolean"},placeholder:{control:"text"},variant:{control:{type:"select"},options:["default","visibly-selected"]},maxHeight:{control:{type:"number"}}}},i={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"},{value:"option-5",label:"Option 5"},{value:"option-6",label:"Option 6"},{value:"option-7",label:"Option 7"},{value:"option-8",label:"Option 8"},{value:"option-9",label:"Option 9"},{value:"option-10",label:"Option 10"},{value:"option-11",label:"Option 11"},{value:"option-12",label:"Option 12"},{value:"option-13",label:"Option 13"},{value:"option-14",label:"Option 14"},{value:"option-15",label:"Option 15"},{value:"option-16",label:"Option 16"},{value:"option-17",label:"Option 17"},{value:"option-18",label:"Option 18"},{value:"option-19",label:"Option 19"},{value:"option-20",label:"Option 20"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected",compactSpacing:!1,placeholder:"Select an option",required:!1},render:n=>{const[e,o]=p.useState({label:"Option 2",value:"option-2"}),l=t=>{o(n.options.find(s=>s.value===t))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},v={args:{...i.args,isError:!0},render:n=>{const[e,o]=p.useState(),l=t=>{typeof t=="string"&&o(n.options.find(s=>s.value===t))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},g={args:{...i.args,readonly:!0},render:n=>{const[e,o]=p.useState(),l=t=>{typeof t=="string"&&o(n.options.find(s=>s.value===t))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const o=E(n).getByRole("combobox");await r.tab(),d(o).not.toHaveFocus()}},m={args:{...i.args,disabled:!0},render:n=>{const[e,o]=p.useState(),l=t=>{const s=Array.isArray(t)?t[0]:t;o(n.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const o=E(n).getByRole("combobox");await r.tab(),d(o).not.toHaveFocus()}},y={args:{...i.args,compactSpacing:!0},render:n=>{const[e,o]=p.useState(),l=t=>{const s=Array.isArray(t)?t[0]:t;o(n.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},f={args:{...i.args,variant:"visibly-selected"},render:n=>{const[e,o]=p.useState(),l=t=>{const s=Array.isArray(t)?t[0]:t;o(n.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},b={args:{...i.args,withSelectAll:!0},render:n=>{const[e,o]=p.useState(["option-2","option-1"]),l=t=>{o(t)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:e,multiple:!0}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected values :"," ",e.length>0?e.map(t=>t).join(", "):"No value"]})]})}},h={args:{...i.args,showResetButton:!0},render:n=>{const[e,o]=p.useState(),l=t=>{const s=Array.isArray(t)?t[0]:t;o(n.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n,args:e})=>{const l=E(n).getByRole("combobox");X(n),await r.tab(),d(l).toHaveFocus(),await r.keyboard(S),await r.tab(),await r.keyboard(O),await r.keyboard(S),d(l).toHaveTextContent("Option 2");const t=l.querySelector("button"),s=l.querySelector("[data-testid='trigger-icon']");await r.click(t),d(l).toHaveTextContent(e.placeholder),await r.click(s),await r.tab(),await r.tab(),await r.keyboard(O),await r.keyboard(O),await r.keyboard(S),d(l).toHaveTextContent("Option 3")}},x={args:{...i.args},render:n=>{const[e,o]=p.useState(null),{value:l,...t}=n;return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,defaultValue:"option-3",onChange:s=>o(s),multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Last emitted value : ",e||"None yet"]})]})}};var C,w,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    } | undefined>({
      label: "Option 2",
      value: "option-2"
    });
    const handleOnChange = (value: string) => {
      setSelectedOption(args.options.find(option => option.value === value));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  }
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var D,T,N;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  }
}`,...(N=(T=v.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var j,F,V;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
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
}`,...(V=(F=g.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var _,R,k;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
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
}`,...(k=(R=m.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var B,I,H;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  }
}`,...(H=(I=y.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var L,K,q;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  }
}`,...(q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var G,Y,W;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withSelectAll: true
  },
  render: args => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>(["option-2", "option-1"]);
    const handleOnChange = (value: string[]) => {
      setSelectedOptions(value);
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
}`,...(W=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var M,U,P;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
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
}`,...(P=(U=h.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var z,J,Q;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [lastValue, setLastValue] = useState<string | null>(null);
    const {
      value: _value,
      ...rest
    } = args;
    void _value;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...rest} defaultValue={"option-3"} onChange={v => setLastValue(v)} multiple={false} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Last emitted value : {lastValue || "None yet"}
        </span>
      </div>;
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Fe=["Default","Error","ReadOnly","Disabled","CompactSpacing","VisiblySelected","Multiple","KeyboardInteraction","UncontrolledDefaultValue"];export{y as CompactSpacing,i as Default,m as Disabled,v as Error,h as KeyboardInteraction,b as Multiple,g as ReadOnly,x as UncontrolledDefaultValue,f as VisiblySelected,Fe as __namedExportsOrder,je as default};
