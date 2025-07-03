import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as ce,w as j,u as x,e as c}from"./index-DaW6VCyr.js";import{r as w}from"./index-G8LIXM5I.js";import{I as A}from"./Icon-DiFFcmJA.js";import{L as le}from"./Link-CilvQ5ec.js";import{c as de}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const N=16,xe={required:"(obligatoire)",icon:"*",optional:"(facultatif)"},ue="_container_mjrc0_3",pe="_label_mjrc0_35",me="_textarea_mjrc0_80",r={container:ue,"header-container":"_header-container_mjrc0_26",label:pe,"required-indicator":"_required-indicator_mjrc0_50","character-counter":"_character-counter_mjrc0_70","textarea-container":"_textarea-container_mjrc0_80",textarea:me,"assistive-text-link":"_assistive-text-link_mjrc0_132","assistive-text":"_assistive-text_mjrc0_132"},o=w.forwardRef(({className:a="",id:i,name:t,required:l=!1,onChange:H,onBlur:C,label:q,labelId:L,labelPosition:E="top",assistiveTextLabel:_,assistiveTextAppearance:d="description",["aria-labelledby"]:$,assistiveTextLink:ee,requiredAppearance:R="icon",resizeable:ae="true",maxLength:u,defaultValue:p,value:m,...te},v)=>{const[re,ne]=w.useState((m==null?void 0:m.length)||(p==null?void 0:p.length)||0),k=w.useRef(null),se=s=>{var B;C&&C(s),(B=k.current)==null||B.scrollTo({top:0})},oe=s=>{H&&H(s),u&&ne(s.target.value.length)},ie=xe[R];return e.jsxs("div",{className:r.container,"data-label-position":E,children:[e.jsxs("div",{className:r["header-container"],"data-label-position":E,children:[q&&e.jsxs("label",{id:L,className:r.label,htmlFor:i,children:[q,l&&e.jsx("span",{className:r["required-indicator"],"data-required-appearance":R,"aria-hidden":"true",children:ie})]}),u&&e.jsxs("span",{className:r["character-counter"],children:[re,"/",u]})]}),e.jsxs("div",{className:r["textarea-container"],"data-label-position":E,children:[e.jsx("textarea",{ref:s=>{k.current=s,typeof v=="function"?v(s):v&&(v.current=s)},id:i,name:t,className:de(r.textarea,a),"data-resizeable":ae,"data-assistive-text-appearance":d,onChange:oe,"aria-labelledby":L||$,maxLength:u,onBlur:se,defaultValue:p,value:m,...te}),_&&e.jsx(e.Fragment,{children:d==="link"?e.jsx(le,{label:_,href:ee,externalLink:!0,className:r["assistive-text-link"]}):e.jsxs("div",{className:r["assistive-text"],"data-assistive-text-appearance":d,children:[d==="error"?e.jsx(A,{name:"error",size:N}):d==="success"?e.jsx(A,{name:"check-circle",size:N}):null,e.jsx("span",{children:_})]})})]})]})});o.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},assistiveTextAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},requiredAppearance:{defaultValue:{value:'"icon"',computed:!1},required:!1},resizeable:{defaultValue:{value:'"true"',computed:!1},required:!1}},composes:["CoreTextareaProps","Omit"]};const _e={title:"Textarea",component:o,args:{disabled:!1},argTypes:{value:{control:"text"},label:{control:"text"},labelPosition:{control:"select",options:["top","side"],description:"Position of the label relative to the textarea"},disabled:{control:"boolean"},rows:{control:"number"},onChange:{action:"changed"},assistiveTextAppearance:{control:"select",options:["description","error","success","link"],description:"Appearance of the assistive text"},assistiveTextLink:{control:"text",description:"Link for the assistive text when appearance is 'link'"},required:{control:"boolean",description:"Whether the textarea is required"},requiredAppearance:{control:"select",options:["required","icon","optional"],description:"Appearance of the required indicator"},maxLength:{control:"number",description:"Maximum number of characters allowed in the textarea"}}},T=ce(),n={args:{id:"my-textarea",label:"Label",labelId:"LabelId",assistiveTextLabel:"Assistive text for the textarea",required:!1,onChange:T},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})})},h={args:{...n.args,maxLength:10},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})}),play:async({canvasElement:a})=>{const t=j(a).getByRole("textbox");await x.type(t,"Hello World"),c(T).toHaveBeenCalledTimes(10),c(t).toHaveValue("Hello Worl")}},g={args:{...n.args,maxLength:100,assistiveTextLabel:"Error message",assistiveTextAppearance:"error"},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})})},y={args:{...n.args,readOnly:!0,value:"This is a read-only textarea."},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})}),play:async({canvasElement:a,args:i})=>{const l=j(a).getByRole("textbox");await x.tab(),c(l).toHaveFocus(),await x.type(l,"Hello World"),c(T).not.toHaveBeenCalled(),c(l).toHaveValue(i.value)}},f={args:{...n.args,disabled:!0},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})}),play:async({canvasElement:a})=>{const t=j(a).getByRole("textbox");await x.tab(),c(t).not.toHaveFocus()}},b={args:{...n.args},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})}),play:async({canvasElement:a})=>{const t=j(a).getByRole("textbox");await x.tab(),c(t).toHaveFocus(),t.blur()}};var F,I,D;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: "my-textarea",
    label: "Label",
    labelId: "LabelId",
    assistiveTextLabel: "Assistive text for the textarea",
    required: false,
    onChange: mockFn
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  }
}`,...(D=(I=n.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var S,O,W;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxLength: 10
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.type(textarea, "Hello World");
    expect(mockFn).toHaveBeenCalledTimes(10);
    expect(textarea).toHaveValue("Hello Worl");
  }
}`,...(W=(O=h.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var V,z,M;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxLength: 100,
    assistiveTextLabel: "Error message",
    assistiveTextAppearance: "error"
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  }
}`,...(M=(z=g.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var K,P,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: "This is a read-only textarea."
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.tab();
    expect(textarea).toHaveFocus();
    await userEvent.type(textarea, "Hello World");
    expect(mockFn).not.toHaveBeenCalled();
    expect(textarea).toHaveValue(args.value);
  }
}`,...(X=(P=y.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var Q,U,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.tab();
    expect(textarea).not.toHaveFocus();
  }
}`,...(Z=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var G,J,Y;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox");
    await userEvent.tab();
    expect(textarea).toHaveFocus();
    textarea.blur();
  }
}`,...(Y=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};const we=["Default","CharacterCount","Error","ReadOnly","Disabled","KeyboardInteraction"];export{h as CharacterCount,n as Default,f as Disabled,g as Error,b as KeyboardInteraction,y as ReadOnly,we as __namedExportsOrder,_e as default};
