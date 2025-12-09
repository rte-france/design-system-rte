import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{T as A}from"./keyboard-test.constants-C9whQEGR.js";import{w as R,u as c,e as h}from"./index-DCXJbAaW.js";import{r as u}from"./index-G8LIXM5I.js";import{S as he,E as ge}from"./keyboard.constants-ep-ZHn_7.js";import{R as K,A as xe}from"./RequiredIndicator-mBhPxlm2.js";import{D as be,a as V}from"./DropdownItem-DaPebclt.js";import{I as ye}from"./Icon-DjEid3Hw.js";import{I as L}from"./IconButton-DU9lNzF3.js";import{c as Y}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-DbCKFFRz.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-BPBlxbj_.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";const i={"select-container":"_select-container_hlq94_3","select-header":"_select-header_hlq94_18","select-label":"_select-label_hlq94_22","select-wrapper":"_select-wrapper_hlq94_32","trigger-icon":"_trigger-icon_hlq94_75","select-content":"_select-content_hlq94_91","error-icon":"_error-icon_hlq94_98","select-value":"_select-value_hlq94_102","select-right-icons":"_select-right-icons_hlq94_108","icon-button":"_icon-button_hlq94_113"},m=u.forwardRef(({id:t,label:e,labelPosition:a="top",required:s=!1,value:r,showLabel:l=!0,isError:O,assistiveAppearance:oe="description",showAssistiveIcon:se=!1,assistiveTextLink:le,showLabelRequirement:T=!1,assistiveTextLabel:k,onClear:_,onChange:C,options:j=[],disabled:d,readonly:g,showResetButton:re},x)=>{var B,F;const[D,ie]=u.useState(r||""),[b,N]=u.useState(!1),v=u.useRef(null),ce=o=>{v.current=o,typeof x=="function"?x(o):x&&(x.current=o)},ue=re&&!!D&&!g&&!d,pe=(B=j.find(o=>o.value===D))==null?void 0:B.label,de=O&&!d&&!g,ve=()=>{const o=v.current;if(o){const f=o.getBoundingClientRect();return window.innerHeight-f.bottom>=100?"bottom":"top"}return"bottom"},I=()=>{if(v.current){if(d||g)return;v.current.focus(),N(!b)}},me=o=>{document.activeElement===v.current&&(o.key===he||o.key===ge)&&(o.preventDefault(),I())},fe=o=>{var f;o.stopPropagation(),q(""),_==null||_(),(f=v.current)==null||f.focus()},q=o=>{ie(o),C==null||C(o),N(!1)};return n.jsx(n.Fragment,{children:n.jsxs("div",{className:i["select-container"],"data-label-position":a,children:[l&&a==="side"&&n.jsxs("label",{htmlFor:t,id:e,className:i["select-label"],children:[e,n.jsx(K,{required:s,showLabelRequirement:T})]}),n.jsxs("div",{className:i["select-header"],children:[l&&a==="top"&&n.jsxs("label",{htmlFor:t,id:e,className:i["select-label"],children:[e,n.jsx(K,{required:s,showLabelRequirement:T})]}),n.jsxs(be,{style:{width:(F=v.current)==null?void 0:F.offsetWidth},dropdownId:t+"-dropdown",onClose:()=>{N(!1)},offset:10,trigger:n.jsx("div",{ref:ce,"aria-expanded":b,"aria-labelledby":e,"data-error":O?"true":"false","data-active":b?"true":"false","data-disabled":d?"true":"false","data-read-only":g?"true":"false",id:t,className:i["select-wrapper"],role:"combobox",tabIndex:d||g?-1:0,onClick:I,onKeyDown:me,children:n.jsxs("div",{className:i["select-content"],children:[de&&n.jsx(ye,{name:"error",className:i["error-icon"]}),n.jsx("div",{className:i["select-value"],children:n.jsx("span",{children:pe})}),n.jsxs("div",{className:i["select-right-icons"],children:[ue&&n.jsx(L,{name:"cancel",variant:"neutral",className:Y(i["icon-button"],i["clear-icon"]),onClick:fe,disabled:d}),n.jsx(L,{name:"arrow-chevron-down",variant:"neutral",className:Y(i["icon-button"],i["trigger-icon"]),disabled:d})]})]})}),isOpen:b,position:ve(),children:[j.length===0&&n.jsx(V,{label:"No options available",onClick:()=>{}}),j.map(({value:o,label:f},H)=>n.jsx(V,{label:f,isSelected:o===D,onClick:()=>{q(o)}},H+o))]}),k&&n.jsx(xe,{label:k,appearance:O?"error":oe,showIcon:se,href:le})]})]})})});m.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Ge={title:"Select",component:m,argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"}}},p={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"}],disabled:!1,readonly:!1,showResetButton:!1},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(m,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},y={args:{...p.args,isError:!0},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(m,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},w={args:{...p.args,readonly:!0},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(m,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const a=R(t).getByRole("combobox");await c.tab(),h(a).not.toHaveFocus()}},S={args:{...p.args,disabled:!0},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(m,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const a=R(t).getByRole("combobox");await c.tab(),h(a).not.toHaveFocus()}},E={args:{...p.args,showResetButton:!0},render:t=>{const[e,a]=u.useState(),s=r=>{a(t.options.find(l=>l.value===r))};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[n.jsx(m,{...t,onChange:s,value:e==null?void 0:e.value}),n.jsxs("span",{style:{fontFamily:"Arial"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:t})=>{const a=R(t).getByRole("combobox");await c.tab(),h(a).toHaveFocus(),await c.keyboard(A),await c.keyboard("{ArrowDown}"),await c.keyboard(A),h(a).toHaveTextContent("Option 2");const s=a.querySelectorAll("button"),r=s[0],l=s[1];await c.click(r),h(a).toHaveTextContent(""),await c.click(l),await c.keyboard("{ArrowDown}"),await c.keyboard("{ArrowDown}"),await c.keyboard(A),h(a).toHaveTextContent("Option 3")}};var G,P,W;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  }
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var z,J,M;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
      </div>;
  }
}`,...(M=(J=y.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var Q,U,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
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
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
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
        fontFamily: "Arial"
      }}>Selected value : {selectedOption?.label || "No value"}</span>
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
}`,...(ae=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Pe=["Default","Error","ReadOnly","Disabled","KeyboardInteraction"];export{p as Default,S as Disabled,y as Error,E as KeyboardInteraction,w as ReadOnly,Pe as __namedExportsOrder,Ge as default};
