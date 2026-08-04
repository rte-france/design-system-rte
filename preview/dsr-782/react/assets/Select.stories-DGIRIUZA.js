import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as O,b as C}from"./keyboard-test.constants-By8W48aj.js";import{w as E,u as r,e as d}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as ne}from"./testing.utils-mIZIUNbM.js";import{S as c}from"./Select-BgiNifKq.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./timepicker.constants-CynrC_9x.js";import"./icon.constants-CvX5SV3k.js";import"./Label-Bgp-fFvQ.js";import"./Icon-DgLH6pPJ.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./Badge-DkJhvK8e.js";import"./Chip-B_jXPpNa.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Dropdown-CLxmEVAE.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./DropdownItem-Qa61bxPc.js";import"./Checkbox-C8hWUkyN.js";import"./IconButton-D7Ub3mhB.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";const Be={title:"Composants/Select/Select",component:c,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]},compactSpacing:{control:"boolean"},placeholder:{control:"text"},variant:{control:{type:"select"},options:["default","visibly-selected"]},maxHeight:{control:{type:"number"}}}},i={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"},{value:"option-5",label:"Option 5"},{value:"option-6",label:"Option 6"},{value:"option-7",label:"Option 7"},{value:"option-8",label:"Option 8"},{value:"option-9",label:"Option 9"},{value:"option-10",label:"Option 10"},{value:"option-11",label:"Option 11"},{value:"option-12",label:"Option 12"},{value:"option-13",label:"Option 13"},{value:"option-14",label:"Option 14"},{value:"option-15",label:"Option 15"},{value:"option-16",label:"Option 16"},{value:"option-17",label:"Option 17"},{value:"option-18",label:"Option 18"},{value:"option-19",label:"Option 19"},{value:"option-20",label:"Option 20"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected",compactSpacing:!1,placeholder:"Select an option",required:!1},render:n=>{const[e,o]=p.useState({label:"Option 2",value:"option-2"}),l=t=>{o(n.options.find(s=>s.value===t))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},v={args:{...i.args,isError:!0},render:n=>{const[e,o]=p.useState(),l=t=>{typeof t=="string"&&o(n.options.find(s=>s.value===t))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},g={args:{...i.args,readonly:!0},render:n=>{const[e,o]=p.useState(),l=t=>{typeof t=="string"&&o(n.options.find(s=>s.value===t))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const o=E(n).getByRole("combobox");await r.tab(),d(o).not.toHaveFocus()}},m={args:{...i.args,disabled:!0},render:n=>{const[e,o]=p.useState(),l=t=>{const s=Array.isArray(t)?t[0]:t;o(n.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const o=E(n).getByRole("combobox");await r.tab(),d(o).not.toHaveFocus()}},y={args:{...i.args,compactSpacing:!0},render:n=>{const[e,o]=p.useState(),l=t=>{const s=Array.isArray(t)?t[0]:t;o(n.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},f={args:{...i.args,variant:"visibly-selected"},render:n=>{const[e,o]=p.useState(),l=t=>{const s=Array.isArray(t)?t[0]:t;o(n.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},b={args:{...i.args,withSelectAll:!0},render:n=>{const[e,o]=p.useState(["option-2","option-1"]),l=t=>{o(t)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:e,multiple:!0}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected values :"," ",e.length>0?e.map(t=>t).join(", "):"No value"]})]})}},h={args:{...i.args,body:a.jsx("div",{style:{padding:"16px",fontFamily:"Arial",color:"var(--content-primary)"},children:"This is a custom body for the select component."})},render:n=>{const[e,o]=p.useState(),l=t=>{o(n.options.find(s=>s.value===t))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:e==null?void 0:e.value,multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},x={args:{...i.args,showResetButton:!0},render:n=>{const[e,o]=p.useState(),l=t=>{const s=Array.isArray(t)?t[0]:t;o(n.options.find(u=>u.value===s))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...n,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n,args:e})=>{const l=E(n).getByRole("combobox");ne(n),await r.tab(),d(l).toHaveFocus(),await r.keyboard(O),await r.tab(),await r.keyboard(C),await r.keyboard(O),d(l).toHaveTextContent("Option 2");const t=l.querySelector("button"),s=l.querySelector("[data-testid='trigger-icon']");await r.click(t),d(l).toHaveTextContent(e.placeholder),await r.click(s),await r.tab(),await r.tab(),await r.keyboard(C),await r.keyboard(C),await r.keyboard(O),d(l).toHaveTextContent("Option 3")}},S={args:{...i.args},render:n=>{const[e,o]=p.useState(null),{value:l,...t}=n;return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(c,{...t,defaultValue:"option-3",onChange:s=>o(s),multiple:!1}),a.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Last emitted value : ",e||"None yet"]})]})}};var w,A,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var T,j,N;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(j=v.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var F,V,_;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(_=(V=g.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var R,B,k;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(k=(B=m.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var I,H,L;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(H=y.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var K,q,G;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(q=f.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Y,W,M;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(M=(W=b.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var U,P,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    body: <div style={{
      padding: "16px",
      fontFamily: "Arial",
      color: "var(--content-primary)"
    }}>
        This is a custom body for the select component.
      </div>
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
}`,...(z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var J,Q,X;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=S.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ke=["Default","Error","ReadOnly","Disabled","CompactSpacing","VisiblySelected","Multiple","CustomSelectBody","KeyboardInteraction","UncontrolledDefaultValue"];export{y as CompactSpacing,h as CustomSelectBody,i as Default,m as Disabled,v as Error,x as KeyboardInteraction,b as Multiple,g as ReadOnly,S as UncontrolledDefaultValue,f as VisiblySelected,ke as __namedExportsOrder,Be as default};
