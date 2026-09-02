import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{T as C,b as E}from"./keyboard-test.constants-By8W48aj.js";import{w as A,u as r,e as v}from"./index-4rjIhT2C.js";import{r as u}from"./index-G8LIXM5I.js";import{f as te}from"./testing.utils-BiEcdOD7.js";import{S as p}from"./Select-DrxSNG20.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./timepicker.constants-CynrC_9x.js";import"./icon.constants-CvX5SV3k.js";import"./Label-Bgp-fFvQ.js";import"./Icon-DgLH6pPJ.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./Badge-DkJhvK8e.js";import"./Chip-B_jXPpNa.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Dropdown-CQIC5Z84.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./DropdownItem-Cbt0nETo.js";import"./Checkbox-ClER9-ap.js";import"./IconButton-D7Ub3mhB.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";const Re={title:"Composants/Select/Select",component:p,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]},compactSpacing:{control:"boolean"},placeholder:{control:"text"},variant:{control:{type:"select"},options:["default","visibly-selected"]},maxHeight:{control:{type:"number"}}}},c={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"},{value:"option-5",label:"Option 5"},{value:"option-6",label:"Option 6"},{value:"option-7",label:"Option 7"},{value:"option-8",label:"Option 8"},{value:"option-9",label:"Option 9"},{value:"option-10",label:"Option 10"},{value:"option-11",label:"Option 11"},{value:"option-12",label:"Option 12"},{value:"option-13",label:"Option 13"},{value:"option-14",label:"Option 14"},{value:"option-15",label:"Option 15"},{value:"option-16",label:"Option 16"},{value:"option-17",label:"Option 17"},{value:"option-18",label:"Option 18"},{value:"option-19",label:"Option 19"},{value:"option-20",label:"Option 20"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected",compactSpacing:!1,placeholder:"Select an option",required:!1},render:a=>{const[e,o]=u.useState({label:"Option 2",value:"option-2"}),l=t=>{var s;o((s=a.options)==null?void 0:s.find(i=>i.value===t))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...a,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},g={args:{...c.args,isError:!0},render:a=>{const[e,o]=u.useState(),l=t=>{var s;typeof t=="string"&&o((s=a.options)==null?void 0:s.find(i=>i.value===t))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...a,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},m={args:{...c.args,readonly:!0},render:a=>{const[e,o]=u.useState(),l=t=>{var s;typeof t=="string"&&o((s=a.options)==null?void 0:s.find(i=>i.value===t))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...a,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:a})=>{const o=A(a).getAllByRole("combobox")[1];await r.tab(),v(o).not.toHaveFocus()}},y={args:{...c.args,disabled:!0},render:a=>{const[e,o]=u.useState(),l=t=>{var i;const s=Array.isArray(t)?t[0]:t;o((i=a.options)==null?void 0:i.find(d=>d.value===s))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...a,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:a})=>{const o=A(a).getAllByRole("combobox")[1];await r.tab(),v(o).not.toHaveFocus()}},b={args:{...c.args,compactSpacing:!0},render:a=>{const[e,o]=u.useState(),l=t=>{var i;const s=Array.isArray(t)?t[0]:t;o((i=a.options)==null?void 0:i.find(d=>d.value===s))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...a,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},f={args:{...c.args,variant:"visibly-selected"},render:a=>{const[e,o]=u.useState(),l=t=>{var i;const s=Array.isArray(t)?t[0]:t;o((i=a.options)==null?void 0:i.find(d=>d.value===s))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...a,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},h={args:{...c.args,withSelectAll:!0},render:a=>{const[e,o]=u.useState(["option-2","option-1"]),l=t=>{o(t)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...a,onChange:l,value:e,multiple:!0}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected values :"," ",e.length>0?e.map(t=>t).join(", "):"No value"]})]})}},O={args:{...c.args},render:a=>{const[e,o]=u.useState(),l=[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4"}],t=i=>{o(l.find(d=>d.value===i))},s=()=>n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{padding:"16px",fontFamily:"Arial"},children:"This is a custom body for the select component."}),n.jsx("button",{onClick:()=>t(l[0].value),children:"Select Option 1"}),n.jsx("button",{onClick:()=>t(l[1].value),children:"Select Option 2"}),n.jsx("button",{onClick:()=>t(l[2].value),children:"Select Option 3"}),n.jsx("button",{onClick:()=>t(l[3].value),children:"Select Option 4"})]});return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...a,body:n.jsx(s,{})}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},x={args:{...c.args,showResetButton:!0},render:a=>{const[e,o]=u.useState(),l=t=>{var i;const s=Array.isArray(t)?t[0]:t;o((i=a.options)==null?void 0:i.find(d=>d.value===s))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...a,onChange:l,value:(e==null?void 0:e.value)??"",multiple:!1}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:a,args:e})=>{const l=A(a).getAllByRole("combobox")[1];te(),await r.tab(),v(l).toHaveFocus(),await r.keyboard(C),await r.tab(),await r.keyboard(E),await r.keyboard(C),v(l).toHaveTextContent("Option 2");const t=l.querySelector("button"),s=l.querySelector("[data-testid='trigger-icon']");await r.click(t),v(l).toHaveTextContent(e.placeholder),await r.click(s),await r.tab(),await r.tab(),await r.keyboard(E),await r.keyboard(E),await r.keyboard(C),v(l).toHaveTextContent("Option 3")}},S={args:{...c.args},render:a=>{const[e,o]=u.useState(null),{value:l,...t}=a;return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(p,{...t,defaultValue:"option-3",onChange:s=>o(s),multiple:!1}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Last emitted value : ",e||"None yet"]})]})}};var w,j,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      setSelectedOption(args.options?.find(option => option.value === value));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var T,N,F;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        setSelectedOption(args.options?.find(option => option.value === value));
      }
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  }
}`,...(F=(N=g.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var k,V,B;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        setSelectedOption(args.options?.find(option => option.value === value));
      }
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getAllByRole("combobox")[1];
    await userEvent.tab();
    expect(select).not.toHaveFocus();
  }
}`,...(B=(V=m.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var _,R,I;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      setSelectedOption(args.options?.find(option => option.value === stringValue));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getAllByRole("combobox")[1];
    await userEvent.tab();
    expect(select).not.toHaveFocus();
  }
}`,...(I=(R=y.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var H,L,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      setSelectedOption(args.options?.find(option => option.value === stringValue));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  }
}`,...(K=(L=b.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var q,G,Y;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
      setSelectedOption(args.options?.find(option => option.value === stringValue));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  }
}`,...(Y=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var W,M,U;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        fontFamily: "Arial"
      }}>
          Selected values :{" "}
          {selectedOptions.length > 0 ? selectedOptions.map(option => option).join(", ") : "No value"}
        </span>
      </div>;
  }
}`,...(U=(M=h.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var P,z,J;O.parameters={...O.parameters,docs:{...(P=O.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [selectedOption, setSelectedOption] = useState<{
      label: string;
      value: string;
    }>();
    const options = [{
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
    }];
    const handleOnChange = (value: string) => {
      setSelectedOption(options.find(option => option.value === value));
    };
    const CustomBody = () => {
      return <>
          <div style={{
          padding: "16px",
          fontFamily: "Arial"
        }}>This is a custom body for the select component.</div>
          <button onClick={() => handleOnChange(options[0].value)}>Select Option 1</button>
          <button onClick={() => handleOnChange(options[1].value)}>Select Option 2</button>
          <button onClick={() => handleOnChange(options[2].value)}>Select Option 3</button>
          <button onClick={() => handleOnChange(options[3].value)}>Select Option 4</button>
        </>;
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...args} body={<CustomBody />} />
        <span style={{
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  }
}`,...(J=(z=O.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,X,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      setSelectedOption(args.options?.find(option => option.value === stringValue));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value ?? ""} multiple={false} />
        <span style={{
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getAllByRole("combobox")[1];
    focusElementBeforeComponent();
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
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ne;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        fontFamily: "Arial"
      }}>Last emitted value : {lastValue || "None yet"}</span>
      </div>;
  }
}`,...(ne=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Ie=["Default","Error","ReadOnly","Disabled","CompactSpacing","VisiblySelected","Multiple","CustomSelectBody","KeyboardInteraction","UncontrolledDefaultValue"];export{b as CompactSpacing,O as CustomSelectBody,c as Default,y as Disabled,g as Error,x as KeyboardInteraction,h as Multiple,m as ReadOnly,S as UncontrolledDefaultValue,f as VisiblySelected,Ie as __namedExportsOrder,Re as default};
