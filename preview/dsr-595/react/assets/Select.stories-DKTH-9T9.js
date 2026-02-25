import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as B,b as F}from"./keyboard-test.constants-By8W48aj.js";import{w as V,u as p,e as E}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{f as je}from"./testing.utils-mIZIUNbM.js";import{S as Ae,E as Ne}from"./keyboard.constants-BverKK8B.js";import{R as W,A as Te}from"./RequiredIndicator-DqQYxNvw.js";import{B as De}from"./Badge-b6ITl72-.js";import{C as Ce}from"./Chip-CJGs439D.js";import{D as Ie,a as q}from"./DropdownItem-Bm6A2mRH.js";import{I as M}from"./Icon-DjEid3Hw.js";import{I as Re}from"./IconButton-O5Q6mfOY.js";import{c as ke}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-Cg70Z2zF.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-COL5NWrm.js";import"./Divider-cNGLKJiC.js";import"./auto-placement-C6RxYMtA.js";import"./dom.constants-41SiyeDe.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";const Be=100,Fe=8,d={"select-container":"_select-container_1dj4v_1","select-header":"_select-header_1dj4v_16","select-label":"_select-label_1dj4v_20","select-wrapper":"_select-wrapper_1dj4v_41","trigger-icon":"_trigger-icon_1dj4v_54","select-content":"_select-content_1dj4v_86","select-value":"_select-value_1dj4v_86","error-icon":"_error-icon_1dj4v_132","select-multiple-values":"_select-multiple-values_1dj4v_157","select-right-icons":"_select-right-icons_1dj4v_162","icon-button":"_icon-button_1dj4v_167"},y=m.forwardRef(({id:a,label:e,labelPosition:s="top",required:r=!1,value:l,showLabel:i=!0,isError:x,assistiveAppearance:ue="description",showAssistiveIcon:de=!1,assistiveTextLink:ve,showLabelRequirement:H=!1,assistiveTextLabel:K,onClear:S,onChange:v,options:f=[],disabled:w,readonly:_,showResetButton:fe,multiple:u,withSelectAll:me=!0,optionToDisplay:Y="highest-selected",header:ge,footer:he},A)=>{var P;const[o,O]=m.useState(l||(u?[]:"")),[j,k]=m.useState(!1),b=m.useRef(null),ye=n=>{b.current=n,typeof A=="function"?A(n):A&&(A.current=n)},xe=fe&&(u?Array.isArray(o)&&o.length>0:!!o)&&!_&&!w,N=u?Y==="first-selected"?f.find(n=>n.value===o[0]):Y==="last-selected"?f.find(n=>n.value===o[o.length-1]):f.find(n=>o.includes(n.value)):f.find(n=>n.value===o),be=x&&!w&&!_,Se=()=>{const n=b.current;if(n){const c=n.getBoundingClientRect();return window.innerHeight-c.bottom>=Be?"bottom":"top"}return"bottom"},G=()=>{if(b.current){if(w||_)return;b.current.focus(),k(!j)}},we=n=>{document.activeElement===b.current&&(n.key===Ae||n.key===Ne)&&(n.preventDefault(),G())},Oe=n=>{var c;n.stopPropagation(),u?(O([]),S==null||S()):(L(""),S==null||S()),(c=b.current)==null||c.focus()},Ee=(n,c)=>{n.stopPropagation(),u&&(O(g=>Array.isArray(g)?g.filter(_e=>_e!==c):g),v==null||v(c))},L=n=>{if(u){const c=Array.isArray(o)?[...o]:[],g=c.indexOf(n);g>-1?c.splice(g,1):c.push(n),O(c),v==null||v(n);return}O(n),v==null||v(n),k(!1)};if(Array.isArray(o)&&!u||!Array.isArray(o)&&u){console.warn("Value type does not match the 'multiple' prop. Please check the value provided to the Select component.");return}return t.jsx(t.Fragment,{children:t.jsxs("div",{className:d["select-container"],"data-label-position":s,children:[i&&s==="side"&&t.jsxs("label",{htmlFor:a,id:e,className:d["select-label"],children:[e,t.jsx(W,{required:r,showLabelRequirement:H})]}),t.jsxs("div",{className:d["select-header"],children:[i&&s==="top"&&t.jsxs("label",{htmlFor:a,id:e,className:d["select-label"],children:[e,t.jsx(W,{required:r,showLabelRequirement:H})]}),t.jsxs(Ie,{style:{width:(P=b.current)==null?void 0:P.offsetWidth},dropdownId:a+"-dropdown",onClose:()=>{k(!1)},offset:Fe,autoClose:!u,trigger:t.jsx("div",{ref:ye,"aria-expanded":j,"aria-labelledby":e,"data-error":x?"true":"false","data-active":j?"true":"false","data-disabled":w?"true":"false","data-read-only":_?"true":"false",id:a,className:d["select-wrapper"],role:"combobox",tabIndex:w||_?-1:0,onClick:G,onKeyDown:we,children:t.jsxs("div",{className:d["select-content"],children:[be&&t.jsx(M,{name:"error",className:d["error-icon"]}),t.jsx("div",{className:d["select-value"],children:N&&t.jsx(t.Fragment,{children:u?t.jsxs("div",{className:d["select-multiple-values"],children:[t.jsx(Ce,{id:a+"-chip",label:N.label,compactSpacing:!0,type:"input",onClose:n=>Ee(n,N.value)}),o.length>1&&t.jsx(De,{count:o.length-1,content:"number",badgeType:"brand",size:"m",withPlusSign:!0})]}):t.jsx("span",{children:N.label})})}),t.jsxs("div",{className:d["select-right-icons"],children:[xe&&t.jsx(Re,{name:"cancel",variant:"neutral",className:ke(d["icon-button"],d["clear-icon"]),onClick:Oe,disabled:w}),t.jsx(M,{name:j?"arrow-chevron-up":"arrow-chevron-down","data-testid":"trigger-icon",className:d["trigger-icon"]})]})]})}),header:ge,footer:he,isOpen:j,position:Se(),children:[f.length===0&&t.jsx(q,{label:"No options available"}),me&&u&&f.length>0&&t.jsx(q,{label:"Sélectionner tout",isSelected:Array.isArray(o)&&o.length===f.length,isIndeterminate:Array.isArray(o)&&o.length>0&&o.length<f.length,onClick:()=>{if(Array.isArray(o)&&o.length===f.length)O([]);else{const n=f.map(c=>c.value);O(n)}v==null||v("select-all")},hasCheckbox:!0,hasSeparator:!0}),f.map(({value:n,label:c},g)=>t.jsx(q,{label:c,isSelected:u?o.includes(n):o===n,onClick:()=>{L(n)},hasCheckbox:u},g+n))]}),K&&t.jsx(Te,{label:K,appearance:x?"error":ue,showIcon:de,href:ve})]})]})})});y.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1},withSelectAll:{defaultValue:{value:"true",computed:!1},required:!1},optionToDisplay:{defaultValue:{value:'"highest-selected"',computed:!1},required:!1}}};const pt={title:"Composants/Select/Select",component:y,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]}}},h={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected"},render:a=>{const[e,s]=m.useState(),r=l=>{s(a.options.find(i=>i.value===l))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:r,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},T={args:{...h.args,isError:!0},render:a=>{const[e,s]=m.useState(),r=l=>{typeof l=="string"&&s(a.options.find(i=>i.value===l))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:r,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},D={args:{...h.args,readonly:!0},render:a=>{const[e,s]=m.useState(),r=l=>{typeof l=="string"&&s(a.options.find(i=>i.value===l))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:r,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:a})=>{const s=V(a).getByRole("combobox");await p.tab(),E(s).not.toHaveFocus()}},C={args:{...h.args,disabled:!0},render:a=>{const[e,s]=m.useState(),r=l=>{const i=Array.isArray(l)?l[0]:l;s(a.options.find(x=>x.value===i))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:r,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:a})=>{const s=V(a).getByRole("combobox");await p.tab(),E(s).not.toHaveFocus()}},I={args:{...h.args,withSelectAll:!0},render:a=>{const[e,s]=m.useState([]),r=l=>{if(l==="select-all"){e.length===a.options.length?s([]):s(a.options.map(i=>i.value));return}e&&(e.includes(l)?s(e.filter(i=>i!==l)):s([...e,l]))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:r,value:e,multiple:!0}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected values :"," ",e.length>0?e.map(l=>l).join(", "):"No value"]})]})}},R={args:{...h.args,showResetButton:!0},render:a=>{const[e,s]=m.useState(),r=l=>{const i=Array.isArray(l)?l[0]:l;s(a.options.find(x=>x.value===i))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:r,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:a})=>{const s=V(a).getByRole("combobox");je(a),await p.tab(),E(s).toHaveFocus(),await p.keyboard(B),await p.tab(),await p.keyboard(F),await p.keyboard(B),E(s).toHaveTextContent("Option 2");const r=s.querySelector("button"),l=s.querySelector("[data-testid='trigger-icon']");await p.click(r),E(s).toHaveTextContent(""),await p.click(l),await p.tab(),await p.tab(),await p.keyboard(F),await p.keyboard(F),await p.keyboard(B),E(s).toHaveTextContent("Option 3")}};var z,J,Q;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      gap: "16px",
      width: "280px"
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
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Z;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      gap: "16px",
      width: "280px"
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
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      gap: "16px",
      width: "280px"
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
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
      gap: "16px",
      width: "280px"
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
}`,...(se=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,oe,re;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
      gap: "16px",
      width: "280px"
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
}`,...(re=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,ce,pe;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
      gap: "16px",
      width: "280px"
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
}`,...(pe=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const ut=["Default","Error","ReadOnly","Disabled","Multiple","KeyboardInteraction"];export{h as Default,C as Disabled,T as Error,R as KeyboardInteraction,I as Multiple,D as ReadOnly,ut as __namedExportsOrder,pt as default};
