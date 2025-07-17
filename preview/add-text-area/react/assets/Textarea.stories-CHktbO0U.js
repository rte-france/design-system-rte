import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as ce,w,u as x,e as c}from"./index-DaW6VCyr.js";import{r as j}from"./index-G8LIXM5I.js";import{I as A}from"./Icon-DiFFcmJA.js";import{L as de}from"./Link-CilvQ5ec.js";import{c as xe}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const F=16,k={required:"(obligatoire)",requiredIcon:"*",optional:"(facultatif)"},ue="_container_v7xbk_3",pe="_label_v7xbk_34",me="_textarea_v7xbk_78",r={container:ue,"header-container":"_header-container_v7xbk_25",label:pe,"requirement-indicator":"_requirement-indicator_v7xbk_49","character-counter":"_character-counter_v7xbk_68","textarea-container":"_textarea-container_v7xbk_78",textarea:me,"assistive-text-link":"_assistive-text-link_v7xbk_130","assistive-text":"_assistive-text_v7xbk_130"},o=j.forwardRef(({className:a="",id:i,name:t,required:l=!1,onChange:C,onBlur:H,label:R,labelId:L,labelPosition:E="top",assistiveTextLabel:_,assistiveTextAppearance:d="description",["aria-labelledby"]:ae,assistiveTextLink:te,showLabelRequirement:T=!1,resizeable:re="true",maxLength:u,defaultValue:p,value:m,...I},v)=>{const[ne,se]=j.useState((m==null?void 0:m.length)||(p==null?void 0:p.length)||0),N=j.useRef(null),oe=s=>{var B;H&&H(s),(B=N.current)==null||B.scrollTo({top:0})},ie=s=>{C&&C(s),u&&se(s.target.value.length)},le=l?T?k.required:k.requiredIcon:k.optional;return e.jsxs("div",{className:r.container,"data-label-position":E,children:[e.jsxs("div",{className:r["header-container"],"data-label-position":E,children:[R&&e.jsxs("label",{id:L,className:r.label,htmlFor:i,children:[R,(T||l)&&e.jsx("span",{className:r["requirement-indicator"],"data-required":l,"data-show-label-requirement":T,"aria-hidden":"true",children:le})]}),u&&e.jsxs("span",{className:r["character-counter"],children:[ne,"/",u]})]}),e.jsxs("div",{className:r["textarea-container"],"data-label-position":E,children:[e.jsx("textarea",{ref:s=>{N.current=s,typeof v=="function"?v(s):v&&(v.current=s)},id:i,name:t,className:xe(r.textarea,a),"data-resizeable":re,"data-assistive-text-appearance":d,onChange:ie,"aria-labelledby":L||ae,maxLength:u,onBlur:oe,defaultValue:p,value:m,...I}),_&&e.jsx(e.Fragment,{children:d==="link"?e.jsx(de,{label:_,href:te,externalLink:!0,className:r["assistive-text-link"]}):e.jsxs("div",{className:r["assistive-text"],"data-assistive-text-appearance":d,"data-disabled":I.disabled,children:[d==="error"?e.jsx(A,{name:"error",size:F}):d==="success"?e.jsx(A,{name:"check-circle",size:F}):null,e.jsx("span",{children:_})]})})]})]})});o.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},assistiveTextAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},resizeable:{defaultValue:{value:'"true"',computed:!1},required:!1}},composes:["CoreTextareaProps","Omit"]};const _e={title:"Textarea",tags:["autodocs"],component:o,args:{disabled:!1},argTypes:{value:{control:"text"},label:{control:"text"},labelPosition:{control:"select",options:["top","side"],description:"Position of the label relative to the textarea"},disabled:{control:"boolean"},rows:{control:"number"},onChange:{action:"changed"},assistiveTextAppearance:{control:"select",options:["description","error","success","link"],description:"Appearance of the assistive text"},assistiveTextLink:{control:"text",description:"Link for the assistive text when appearance is 'link'"},required:{control:"boolean",description:"Whether the textarea is required"},showLabelRequirement:{control:"boolean",description:"Whether to show the requirement indicator in the label"},maxLength:{control:"number",description:"Maximum number of characters allowed in the textarea"},readOnly:{control:"boolean",description:"Whether the textarea is read-only"}}},q=ce(),n={args:{id:"my-textarea",label:"Label",labelId:"LabelId",assistiveTextLabel:"Assistive text for the textarea",required:!1,showLabelRequirement:!1,onChange:q,readOnly:!1},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})})},h={args:{...n.args,maxLength:10},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})}),play:async({canvasElement:a})=>{const t=w(a).getByRole("textbox");await x.type(t,"Hello World"),c(q).toHaveBeenCalledTimes(10),c(t).toHaveValue("Hello Worl")}},g={args:{...n.args,maxLength:100,assistiveTextLabel:"Error message",assistiveTextAppearance:"error"},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})})},b={args:{...n.args,readOnly:!0,value:"This is a read-only textarea."},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})}),play:async({canvasElement:a,args:i})=>{const l=w(a).getByRole("textbox");await x.tab(),c(l).toHaveFocus(),await x.type(l,"Hello World"),c(q).not.toHaveBeenCalled(),c(l).toHaveValue(i.value)}},y={args:{...n.args,disabled:!0},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})}),play:async({canvasElement:a})=>{const t=w(a).getByRole("textbox");await x.tab(),c(t).not.toHaveFocus()}},f={args:{...n.args},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(o,{...a})}),play:async({canvasElement:a})=>{const t=w(a).getByRole("textbox");await x.tab(),c(t).toHaveFocus(),t.blur()}};var O,D,W;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: "my-textarea",
    label: "Label",
    labelId: "LabelId",
    assistiveTextLabel: "Assistive text for the textarea",
    required: false,
    showLabelRequirement: false,
    onChange: mockFn,
    readOnly: false
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  }
}`,...(W=(D=n.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var S,V,M;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(V=h.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var z,K,P;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(P=(K=g.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var U,X,Q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Z,G,J;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Y,$,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Te=["Default","CharacterCount","Error","ReadOnly","Disabled","KeyboardInteraction"];export{h as CharacterCount,n as Default,y as Disabled,g as Error,f as KeyboardInteraction,b as ReadOnly,Te as __namedExportsOrder,_e as default};
