import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{T}from"./keyboard-test.constants-C9whQEGR.js";import{w as A,u as i,e as h}from"./index-DCXJbAaW.js";import{r as u}from"./index-G8LIXM5I.js";import{S as he,E as ye}from"./keyboard.constants-ep-ZHn_7.js";import{R as L,A as ge}from"./RequiredIndicator-xr0Rt_vd.js";import{D as xe,a as V}from"./DropdownItem-CVwwP5uP.js";import{I as Y}from"./Icon-DjEid3Hw.js";import{I as be}from"./IconButton-DU9lNzF3.js";import{c as we}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-BPNUG_iV.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-BPBlxbj_.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";const Se=100,Ee=8,Oe=112,c={"select-container":"_select-container_ray4e_3","select-header":"_select-header_ray4e_18","select-label":"_select-label_ray4e_22","select-wrapper":"_select-wrapper_ray4e_43","trigger-icon":"_trigger-icon_ray4e_56","select-content":"_select-content_ray4e_88","select-value":"_select-value_ray4e_88","error-icon":"_error-icon_ray4e_134","select-right-icons":"_select-right-icons_ray4e_159","icon-button":"_icon-button_ray4e_164"},v=u.forwardRef(({id:t,label:e,labelPosition:a="top",required:s=!1,value:r,showLabel:l=!0,isError:O,assistiveAppearance:oe="description",showAssistiveIcon:se=!1,assistiveTextLink:le,showLabelRequirement:R=!1,assistiveTextLabel:I,onClear:_,onChange:C,options:j=[],disabled:m,readonly:y,showResetButton:re,width:k=Oe},x)=>{var H,q;const[D,ce]=u.useState(r||""),[g,N]=u.useState(!1),d=u.useRef(null),ie=o=>{d.current=o,typeof x=="function"?x(o):x&&(x.current=o)},ue=re&&!!D&&!y&&!m,pe=(H=j.find(o=>o.value===D))==null?void 0:H.label,de=O&&!m&&!y,ve=()=>{const o=d.current;if(o){const f=o.getBoundingClientRect();return window.innerHeight-f.bottom>=Se?"bottom":"top"}return"bottom"},B=()=>{if(d.current){if(m||y)return;d.current.focus(),N(!g)}},me=o=>{document.activeElement===d.current&&(o.key===he||o.key===ye)&&(o.preventDefault(),B())},fe=o=>{var f;o.stopPropagation(),F(""),_==null||_(),(f=d.current)==null||f.focus()},F=o=>{ce(o),C==null||C(o),N(!1)};return n.jsx(n.Fragment,{children:n.jsxs("div",{className:c["select-container"],"data-label-position":a,children:[l&&a==="side"&&n.jsxs("label",{htmlFor:t,id:e,className:c["select-label"],children:[e,n.jsx(L,{required:s,showLabelRequirement:R})]}),n.jsxs("div",{className:c["select-header"],children:[l&&a==="top"&&n.jsxs("label",{htmlFor:t,id:e,className:c["select-label"],children:[e,n.jsx(L,{required:s,showLabelRequirement:R})]}),n.jsxs(xe,{style:{width:(q=d.current)==null?void 0:q.offsetWidth},dropdownId:t+"-dropdown",onClose:()=>{N(!1)},offset:Ee,trigger:n.jsx("div",{ref:ie,"aria-expanded":g,"aria-labelledby":e,"data-error":O?"true":"false","data-active":g?"true":"false","data-disabled":m?"true":"false","data-read-only":y?"true":"false",id:t,className:c["select-wrapper"],role:"combobox",tabIndex:m||y?-1:0,onClick:B,onKeyDown:me,style:{width:k},children:n.jsxs("div",{className:c["select-content"],children:[de&&n.jsx(Y,{name:"error",className:c["error-icon"]}),n.jsx("div",{className:c["select-value"],children:n.jsx("span",{children:pe})}),n.jsxs("div",{className:c["select-right-icons"],children:[ue&&n.jsx(be,{name:"cancel",variant:"neutral",className:we(c["icon-button"],c["clear-icon"]),onClick:fe,disabled:m}),n.jsx(Y,{name:g?"arrow-chevron-up":"arrow-chevron-down",className:c["trigger-icon"]})]})]})}),isOpen:g,position:ve(),children:[j.length===0&&n.jsx(V,{label:"No options available",onClick:()=>{}}),j.map(({value:o,label:f},K)=>n.jsx(V,{label:f,isSelected:o===D,onClick:()=>{F(o)}},K+o))]}),I&&n.jsx(ge,{label:I,appearance:O?"error":oe,showIcon:se,href:le,width:k})]})]})})});v.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1},width:{defaultValue:{value:"112",computed:!1},required:!1}}};const ze={title:"Composants/Select",component:v,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"}}},p={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"}],disabled:!1,readonly:!1,showResetButton:!1},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(v,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},b={args:{...p.args,isError:!0},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(v,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},w={args:{...p.args,readonly:!0},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(v,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const a=A(t).getByRole("combobox");await i.tab(),h(a).not.toHaveFocus()}},S={args:{...p.args,disabled:!0},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(v,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const a=A(t).getByRole("combobox");await i.tab(),h(a).not.toHaveFocus()}},E={args:{...p.args,showResetButton:!0},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(v,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const a=A(t).getByRole("combobox");await i.tab(),h(a).toHaveFocus(),await i.keyboard(T),await i.keyboard("{ArrowDown}"),await i.keyboard(T),h(a).toHaveTextContent("Option 2");const s=a.querySelectorAll("button"),r=s[0],l=s[1];await i.click(r),h(a).toHaveTextContent(""),await i.click(l),await i.keyboard("{ArrowDown}"),await i.keyboard("{ArrowDown}"),await i.keyboard(T),h(a).toHaveTextContent("Option 3")}};var P,G,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(W=(G=p.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var M,z,J;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(J=(z=b.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=S.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,te,ae;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
    await userEvent.tab();
    expect(select).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 2");
    const buttons = select.querySelectorAll("button");
    const clearButton = buttons[0];
    const toggleButton = buttons[1];
    await userEvent.click(clearButton);
    expect(select).toHaveTextContent("");
    await userEvent.click(toggleButton);
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(select).toHaveTextContent("Option 3");
  }
}`,...(ae=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Je=["Default","Error","ReadOnly","Disabled","KeyboardInteraction"];export{p as Default,S as Disabled,b as Error,E as KeyboardInteraction,w as ReadOnly,Je as __namedExportsOrder,ze as default};
