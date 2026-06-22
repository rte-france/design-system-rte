import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{T as b,a as x}from"./keyboard-test.constants-DRUxacrk.js";import{w as S,u as r,e as u}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as V}from"./testing.utils-mIZIUNbM.js";import{S as c}from"./Select-CYHhBPl_.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./RequiredIndicator-Cmvl3eZq.js";import"./Icon-Bc7wfgCv.js";import"./Link-CAnB1cKs.js";import"./index-DSdvzt-y.js";import"./Badge-C3W4NyCk.js";import"./Chip-Dn6V0b1u.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./DropdownItem-Ycvq77da.js";import"./BaseDropdown-qZ9lxrUs.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./Checkbox-D82IU-Su.js";import"./IconButton-DcIeVO_H.js";import"./common-button.constants-eNlmcvUj.js";const be={title:"Composants/Select/Select",component:c,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]}}},i={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected"},render:n=>{const[e,t]=p.useState(),l=a=>{t(n.options.find(s=>s.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(c,{...n,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},d={args:{...i.args,isError:!0},render:n=>{const[e,t]=p.useState(),l=a=>{typeof a=="string"&&t(n.options.find(s=>s.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(c,{...n,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},v={args:{...i.args,readonly:!0},render:n=>{const[e,t]=p.useState(),l=a=>{typeof a=="string"&&t(n.options.find(s=>s.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(c,{...n,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const t=S(n).getByRole("combobox");await r.tab(),u(t).not.toHaveFocus()}},m={args:{...i.args,disabled:!0},render:n=>{const[e,t]=p.useState(),l=a=>{const s=Array.isArray(a)?a[0]:a;t(n.options.find(h=>h.value===s))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(c,{...n,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const t=S(n).getByRole("combobox");await r.tab(),u(t).not.toHaveFocus()}},g={args:{...i.args,withSelectAll:!0},render:n=>{const[e,t]=p.useState([]),l=a=>{if(a==="select-all"){e.length===n.options.length?t([]):t(n.options.map(s=>s.value));return}e&&(e.includes(a)?t(e.filter(s=>s!==a)):t([...e,a]))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(c,{...n,onChange:l,value:e,multiple:!0}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected values :"," ",e.length>0?e.map(a=>a).join(", "):"No value"]})]})}},y={args:{...i.args,body:o.jsx("div",{style:{padding:"16px",fontFamily:"Arial",color:"var(--content-primary)"},children:"This is a custom body for the select component."})},render:n=>{const[e,t]=p.useState(),l=a=>{t(n.options.find(s=>s.value===a))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(c,{...n,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},f={args:{...i.args,showResetButton:!0},render:n=>{const[e,t]=p.useState(),l=a=>{const s=Array.isArray(a)?a[0]:a;t(n.options.find(h=>h.value===s))};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(c,{...n,onChange:l,value:e==null?void 0:e.value,multiple:!1}),o.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const t=S(n).getByRole("combobox");V(n),await r.tab(),u(t).toHaveFocus(),await r.keyboard(b),await r.tab(),await r.keyboard(x),await r.keyboard(b),u(t).toHaveTextContent("Option 2");const l=t.querySelector("button"),a=t.querySelector("[data-testid='trigger-icon']");await r.click(l),u(t).toHaveTextContent(""),await r.click(a),await r.tab(),await r.tab(),await r.keyboard(x),await r.keyboard(x),await r.keyboard(b),u(t).toHaveTextContent("Option 3")}};var O,E,w;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var C,T,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var D,N,j;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(N=v.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var F,R,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var _,k,I;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(I=(k=g.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var H,K,G;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(K=y.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Y,L,q;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const xe=["Default","Error","ReadOnly","Disabled","Multiple","CustomSelectBody","KeyboardInteraction"];export{y as CustomSelectBody,i as Default,m as Disabled,d as Error,f as KeyboardInteraction,g as Multiple,v as ReadOnly,xe as __namedExportsOrder,be as default};
