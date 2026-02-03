import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as D,b as I}from"./keyboard-test.constants-By8W48aj.js";import{w as R,u as l,e as g}from"./index-BfPN6pki.js";import{r as u}from"./index-G8LIXM5I.js";import{f as he}from"./testing.utils-CYMf4Aux.js";import{S as xe,E as be}from"./keyboard.constants-BverKK8B.js";import{R as Y,A as ye}from"./RequiredIndicator-DqQYxNvw.js";import{D as we,a as V}from"./DropdownItem-tp_XGkkM.js";import{I as G}from"./Icon-DjEid3Hw.js";import{I as Se}from"./IconButton-Cd1eiha_.js";import{c as Ee}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-Cg70Z2zF.js";import"./Badge-CQk6fGHb.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Divider-cNGLKJiC.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CQ0GhNxd.js";import"./index-CFcDIoS3.js";import"./index-BO2TEXkE.js";import"./common-button.constants-eNlmcvUj.js";const Oe=100,_e=8,je=112,i={"select-container":"_select-container_16j69_1","select-header":"_select-header_16j69_16","select-label":"_select-label_16j69_20","select-wrapper":"_select-wrapper_16j69_41","trigger-icon":"_trigger-icon_16j69_54","select-content":"_select-content_16j69_86","select-value":"_select-value_16j69_86","error-icon":"_error-icon_16j69_132","select-right-icons":"_select-right-icons_16j69_157","icon-button":"_icon-button_16j69_162"},v=u.forwardRef(({id:n,label:e,labelPosition:a="top",required:s=!1,value:r,showLabel:c=!0,isError:O,assistiveAppearance:se="description",showAssistiveIcon:le=!1,assistiveTextLink:re,showLabelRequirement:k=!1,assistiveTextLabel:A,onClear:_,onChange:j,options:N=[],disabled:m,readonly:h,showResetButton:ce,width:B=je},b)=>{var q,K;const[C,ie]=u.useState(r||""),[x,T]=u.useState(!1),d=u.useRef(null),ue=o=>{d.current=o,typeof b=="function"?b(o):b&&(b.current=o)},pe=ce&&!!C&&!h&&!m,de=(q=N.find(o=>o.value===C))==null?void 0:q.label,ve=O&&!m&&!h,me=()=>{const o=d.current;if(o){const f=o.getBoundingClientRect();return window.innerHeight-f.bottom>=Oe?"bottom":"top"}return"bottom"},F=()=>{if(d.current){if(m||h)return;d.current.focus(),T(!x)}},fe=o=>{document.activeElement===d.current&&(o.key===xe||o.key===be)&&(o.preventDefault(),F())},ge=o=>{var f;o.stopPropagation(),H(""),_==null||_(),(f=d.current)==null||f.focus()},H=o=>{ie(o),j==null||j(o),T(!1)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:i["select-container"],"data-label-position":a,children:[c&&a==="side"&&t.jsxs("label",{htmlFor:n,id:e,className:i["select-label"],children:[e,t.jsx(Y,{required:s,showLabelRequirement:k})]}),t.jsxs("div",{className:i["select-header"],children:[c&&a==="top"&&t.jsxs("label",{htmlFor:n,id:e,className:i["select-label"],children:[e,t.jsx(Y,{required:s,showLabelRequirement:k})]}),t.jsxs(we,{style:{width:(K=d.current)==null?void 0:K.offsetWidth},dropdownId:n+"-dropdown",onClose:()=>{T(!1)},offset:_e,trigger:t.jsx("div",{ref:ue,"aria-expanded":x,"aria-labelledby":e,"data-error":O?"true":"false","data-active":x?"true":"false","data-disabled":m?"true":"false","data-read-only":h?"true":"false",id:n,className:i["select-wrapper"],role:"combobox",tabIndex:m||h?-1:0,onClick:F,onKeyDown:fe,style:{width:B},children:t.jsxs("div",{className:i["select-content"],children:[ve&&t.jsx(G,{name:"error",className:i["error-icon"]}),t.jsx("div",{className:i["select-value"],children:t.jsx("span",{children:de})}),t.jsxs("div",{className:i["select-right-icons"],children:[pe&&t.jsx(Se,{name:"cancel",variant:"neutral",className:Ee(i["icon-button"],i["clear-icon"]),onClick:ge,disabled:m}),t.jsx(G,{name:x?"arrow-chevron-up":"arrow-chevron-down","data-testid":"trigger-icon",className:i["trigger-icon"]})]})]})}),isOpen:x,position:me(),children:[N.length===0&&t.jsx(V,{label:"No options available",onClick:()=>{}}),N.map(({value:o,label:f},L)=>t.jsx(V,{label:f,isSelected:o===C,onClick:()=>{H(o)}},L+o))]}),A&&t.jsx(ye,{label:A,appearance:O?"error":se,showIcon:le,href:re,width:B})]})]})})});v.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1},width:{defaultValue:{value:"112",computed:!1},required:!1}}};const Ue={title:"Composants/Select/Select",component:v,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"}}},p={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"}],disabled:!1,readonly:!1,showResetButton:!1},render:n=>{const[e,a]=u.useState(),s=r=>{a(n.options.find(c=>c.value===r))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(v,{...n,onChange:s,value:e==null?void 0:e.value}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},y={args:{...p.args,isError:!0},render:n=>{const[e,a]=u.useState(),s=r=>{a(n.options.find(c=>c.value===r))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(v,{...n,onChange:s,value:e==null?void 0:e.value}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},w={args:{...p.args,readonly:!0},render:n=>{const[e,a]=u.useState(),s=r=>{a(n.options.find(c=>c.value===r))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(v,{...n,onChange:s,value:e==null?void 0:e.value}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const a=R(n).getByRole("combobox");await l.tab(),g(a).not.toHaveFocus()}},S={args:{...p.args,disabled:!0},render:n=>{const[e,a]=u.useState(),s=r=>{a(n.options.find(c=>c.value===r))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(v,{...n,onChange:s,value:e==null?void 0:e.value}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const a=R(n).getByRole("combobox");await l.tab(),g(a).not.toHaveFocus()}},E={args:{...p.args,showResetButton:!0},render:n=>{const[e,a]=u.useState(),s=r=>{a(n.options.find(c=>c.value===r))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(v,{...n,onChange:s,value:e==null?void 0:e.value}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:n})=>{const a=R(n).getByRole("combobox");he(n),await l.tab(),g(a).toHaveFocus(),await l.keyboard(D),await l.tab(),await l.keyboard(I),await l.keyboard(D),g(a).toHaveTextContent("Option 2");const s=a.querySelector("button"),r=a.querySelector("[data-testid='trigger-icon']");await l.click(s),g(a).toHaveTextContent(""),await l.click(r),await l.tab(),await l.tab(),await l.keyboard(I),await l.keyboard(I),await l.keyboard(D),g(a).toHaveTextContent("Option 3")}};var W,P,M;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    showResetButton: false
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  }
}`,...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var z,J,Q;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} />
        <span style={{
        fontFamily: "Arial",
        color: "var(--content-primary)"
      }}>
          Selected value : {selectedOption?.label || "No value"}
        </span>
      </div>;
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Z;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      setSelectedOption(args.options.find(option => option.value === value));
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "280px"
    }}>
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} />
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
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} />
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
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showResetButton: true
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
        <Select {...args} onChange={handleOnChange} value={selectedOption?.value} />
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
}`,...(oe=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Xe=["Default","Error","ReadOnly","Disabled","KeyboardInteraction"];export{p as Default,S as Disabled,y as Error,E as KeyboardInteraction,w as ReadOnly,Xe as __namedExportsOrder,Ue as default};
