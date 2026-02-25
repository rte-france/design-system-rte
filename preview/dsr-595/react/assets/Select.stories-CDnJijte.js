import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as B,b as F}from"./keyboard-test.constants-By8W48aj.js";import{w as H,u as p,e as E}from"./index-4rjIhT2C.js";import{r as f}from"./index-G8LIXM5I.js";import{f as _e}from"./testing.utils-mIZIUNbM.js";import{S as je,E as Ne}from"./keyboard.constants-BverKK8B.js";import{R as P,A as Te}from"./RequiredIndicator-DqQYxNvw.js";import{B as De}from"./Badge-b6ITl72-.js";import{C as Ce}from"./Chip-CJGs439D.js";import{D as Ie,a as q}from"./DropdownItem-Bm6A2mRH.js";import{I as W}from"./Icon-DjEid3Hw.js";import{I as Re}from"./IconButton-O5Q6mfOY.js";import{c as ke}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-Cg70Z2zF.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-COL5NWrm.js";import"./Divider-cNGLKJiC.js";import"./auto-placement-C6RxYMtA.js";import"./dom.constants-41SiyeDe.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";const Be=100,Fe=8,qe=(a,e,n)=>Array.isArray(n)?a==="first-selected"?e.find(o=>o.value===n[0]):a==="last-selected"?e.find(o=>o.value===n[n.length-1]):e.find(o=>Array.isArray(n)?n.includes(o.value):o.value===n):e.find(o=>o.value===n),u={"select-container":"_select-container_1dj4v_1","select-header":"_select-header_1dj4v_16","select-label":"_select-label_1dj4v_20","select-wrapper":"_select-wrapper_1dj4v_41","trigger-icon":"_trigger-icon_1dj4v_54","select-content":"_select-content_1dj4v_86","select-value":"_select-value_1dj4v_86","error-icon":"_error-icon_1dj4v_132","select-multiple-values":"_select-multiple-values_1dj4v_157","select-right-icons":"_select-right-icons_1dj4v_162","icon-button":"_icon-button_1dj4v_167"},y=f.forwardRef(({id:a,label:e,labelPosition:n="top",required:o=!1,value:l,showLabel:i=!0,isError:x,assistiveAppearance:pe="description",showAssistiveIcon:ue=!1,assistiveTextLink:de,showLabelRequirement:K=!1,assistiveTextLabel:Y,onClear:S,onChange:d,options:h=[],disabled:w,readonly:A,showResetButton:ve,multiple:v,withSelectAll:fe=!0,optionToDisplay:me="highest-selected",header:ge,footer:he},j)=>{var L;const[r,O]=f.useState(l||(v?[]:"")),[_,k]=f.useState(!1),b=f.useRef(null),ye=s=>{b.current=s,typeof j=="function"?j(s):j&&(j.current=s)},xe=ve&&(v?Array.isArray(r)&&r.length>0:!!r)&&!A&&!w,N=qe(me,h,r),be=x&&!w&&!A,Se=()=>{const s=b.current;if(s){const c=s.getBoundingClientRect();return window.innerHeight-c.bottom>=Be?"bottom":"top"}return"bottom"},V=()=>{if(b.current){if(w||A)return;b.current.focus(),k(!_)}},we=s=>{document.activeElement===b.current&&(s.key===je||s.key===Ne)&&(s.preventDefault(),V())},Oe=s=>{var c;s.stopPropagation(),v?(O([]),S==null||S()):(G(""),S==null||S()),(c=b.current)==null||c.focus()},Ee=(s,c)=>{s.stopPropagation(),v&&(O(m=>Array.isArray(m)?m.filter(Ae=>Ae!==c):m),d==null||d(c))},G=s=>{if(v){const c=Array.isArray(r)?[...r]:[],m=c.indexOf(s);m>-1?c.splice(m,1):c.push(s),O(c),d==null||d(s);return}O(s),d==null||d(s),k(!1)};if(Array.isArray(r)&&!v||!Array.isArray(r)&&v){console.warn("Value type does not match the 'multiple' prop. Please check the value provided to the Select component.");return}return t.jsx(t.Fragment,{children:t.jsxs("div",{className:u["select-container"],"data-label-position":n,children:[i&&n==="side"&&t.jsxs("label",{htmlFor:a,id:e,className:u["select-label"],children:[e,t.jsx(P,{required:o,showLabelRequirement:K})]}),t.jsxs("div",{className:u["select-header"],children:[i&&n==="top"&&t.jsxs("label",{htmlFor:a,id:e,className:u["select-label"],children:[e,t.jsx(P,{required:o,showLabelRequirement:K})]}),t.jsxs(Ie,{style:{width:(L=b.current)==null?void 0:L.offsetWidth},dropdownId:a+"-dropdown",onClose:()=>{k(!1)},offset:Fe,autoClose:!v,trigger:t.jsx("div",{ref:ye,"aria-expanded":_,"aria-labelledby":e,"data-error":x?"true":"false","data-active":_?"true":"false","data-disabled":w?"true":"false","data-read-only":A?"true":"false",id:a,className:u["select-wrapper"],role:"combobox",tabIndex:w||A?-1:0,onClick:V,onKeyDown:we,children:t.jsxs("div",{className:u["select-content"],children:[be&&t.jsx(W,{name:"error",className:u["error-icon"]}),t.jsx("div",{className:u["select-value"],children:N&&t.jsx(t.Fragment,{children:v?t.jsxs("div",{className:u["select-multiple-values"],children:[t.jsx(Ce,{id:a+"-chip",label:N.label,compactSpacing:!0,type:"input",onClose:s=>Ee(s,N.value)}),r.length>1&&t.jsx(De,{count:r.length-1,content:"number",badgeType:"brand",size:"m",withPlusSign:!0})]}):t.jsx("span",{children:N.label})})}),t.jsxs("div",{className:u["select-right-icons"],children:[xe&&t.jsx(Re,{name:"cancel",variant:"neutral",className:ke(u["icon-button"],u["clear-icon"]),onClick:Oe,disabled:w}),t.jsx(W,{name:_?"arrow-chevron-up":"arrow-chevron-down","data-testid":"trigger-icon",className:u["trigger-icon"]})]})]})}),header:ge,footer:he,isOpen:_,position:Se(),children:[h.length===0&&t.jsx(q,{label:"No options available"}),fe&&v&&h.length>0&&t.jsx(q,{label:"Sélectionner tout",isSelected:Array.isArray(r)&&r.length===h.length,isIndeterminate:Array.isArray(r)&&r.length>0&&r.length<h.length,onClick:()=>{if(Array.isArray(r)&&r.length===h.length)O([]);else{const s=h.map(c=>c.value);O(s)}d==null||d("select-all")},hasCheckbox:!0,hasSeparator:!0}),h.map(({value:s,label:c},m)=>t.jsx(q,{label:c,isSelected:v?r.includes(s):r===s,onClick:()=>{G(s)},hasCheckbox:v},m+s))]}),Y&&t.jsx(Te,{label:Y,appearance:x?"error":pe,showIcon:ue,href:de})]})]})})});y.__docgenInfo={description:"",methods:[],displayName:"Select",props:{labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1},withSelectAll:{defaultValue:{value:"true",computed:!1},required:!1},optionToDisplay:{defaultValue:{value:'"highest-selected"',computed:!1},required:!1}}};const ut={title:"Composants/Select/Select",component:y,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelPosition:{control:{type:"select"},options:["top","side"]},showLabel:{control:"boolean"},isError:{control:"boolean"},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"]},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text"},showLabelRequirement:{control:"boolean"},required:{control:"boolean"},options:{control:"object"},disabled:{control:"boolean"},readonly:{control:"boolean"},showResetButton:{control:"boolean"},multiple:{control:"boolean"},withSelectAll:{control:"boolean"},optionToDisplay:{control:{type:"select"},options:["first-selected","last-selected","highest-selected"]}}},g={args:{id:"select1",label:"Choisir une option",showLabel:!0,isError:!1,assistiveAppearance:"description",showAssistiveIcon:!1,assistiveTextLabel:"This is a description for the select component.",options:[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"}],disabled:!1,readonly:!1,showResetButton:!1,withSelectAll:!1,optionToDisplay:"first-selected"},render:a=>{const[e,n]=f.useState(),o=l=>{n(a.options.find(i=>i.value===l))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:o,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},T={args:{...g.args,isError:!0},render:a=>{const[e,n]=f.useState(),o=l=>{typeof l=="string"&&n(a.options.find(i=>i.value===l))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:o,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})}},D={args:{...g.args,readonly:!0},render:a=>{const[e,n]=f.useState(),o=l=>{typeof l=="string"&&n(a.options.find(i=>i.value===l))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:o,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:a})=>{const n=H(a).getByRole("combobox");await p.tab(),E(n).not.toHaveFocus()}},C={args:{...g.args,disabled:!0},render:a=>{const[e,n]=f.useState(),o=l=>{const i=Array.isArray(l)?l[0]:l;n(a.options.find(x=>x.value===i))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:o,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:a})=>{const n=H(a).getByRole("combobox");await p.tab(),E(n).not.toHaveFocus()}},I={args:{...g.args,withSelectAll:!0},render:a=>{const[e,n]=f.useState([]),o=l=>{if(l==="select-all"){e.length===a.options.length?n([]):n(a.options.map(i=>i.value));return}e&&(e.includes(l)?n(e.filter(i=>i!==l)):n([...e,l]))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:o,value:e,multiple:!0}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected values :"," ",e.length>0?e.map(l=>l).join(", "):"No value"]})]})}},R={args:{...g.args,showResetButton:!0},render:a=>{const[e,n]=f.useState(),o=l=>{const i=Array.isArray(l)?l[0]:l;n(a.options.find(x=>x.value===i))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[t.jsx(y,{...a,onChange:o,value:e==null?void 0:e.value,multiple:!1}),t.jsxs("span",{style:{fontFamily:"Arial",color:"var(--content-primary)"},children:["Selected value : ",(e==null?void 0:e.label)||"No value"]})]})},play:async({canvasElement:a})=>{const n=H(a).getByRole("combobox");_e(a),await p.tab(),E(n).toHaveFocus(),await p.keyboard(B),await p.tab(),await p.keyboard(F),await p.keyboard(B),E(n).toHaveTextContent("Option 2");const o=n.querySelector("button"),l=n.querySelector("[data-testid='trigger-icon']");await p.click(o),E(n).toHaveTextContent(""),await p.click(l),await p.tab(),await p.tab(),await p.keyboard(F),await p.keyboard(F),await p.keyboard(B),E(n).toHaveTextContent("Option 3")}};var M,z,J;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,X;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=T.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=D.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,ae;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,le,oe;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(le=I.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var re,ie,ce;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ce=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const dt=["Default","Error","ReadOnly","Disabled","Multiple","KeyboardInteraction"];export{g as Default,C as Disabled,T as Error,R as KeyboardInteraction,I as Multiple,D as ReadOnly,dt as __namedExportsOrder,ut as default};
