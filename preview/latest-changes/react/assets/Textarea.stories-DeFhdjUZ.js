import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as ue,w as E,u as p,e as d}from"./index-DaW6VCyr.js";import{r as H}from"./index-G8LIXM5I.js";import{I as A}from"./Icon-BNDpdXCt.js";import{L as xe}from"./Link-UtE0GNJN.js";import{c as pe}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const O=16,q={required:"(obligatoire)",requiredIcon:"*",optional:"(facultatif)"},me="_container_1guoj_3",he="_textarea_1guoj_43",ve="_label_1guoj_136",t={container:me,"top-position-container":"_top-position-container_1guoj_8","header-container":"_header-container_1guoj_29","textarea-container":"_textarea-container_1guoj_43",textarea:he,"assistive-text-link":"_assistive-text-link_1guoj_102","assistive-text":"_assistive-text_1guoj_102","character-counter":"_character-counter_1guoj_125",label:ve,"requirement-indicator":"_requirement-indicator_1guoj_157"},c=H.forwardRef(({className:a="",id:o,name:r,required:n=!1,onChange:N,onBlur:L,label:m,labelId:T,labelPosition:i="top",assistiveTextLabel:C,assistiveTextAppearance:u="description",["aria-labelledby"]:te,assistiveTextLink:re,showLabelRequirement:x=!1,resizeable:ne="true",maxLength:h,defaultValue:v,showCounter:se,value:g,...k},y)=>{const[oe,ie]=H.useState((g==null?void 0:g.length)||(v==null?void 0:v.length)||0),I=H.useRef(null),le=se&&h,ce=l=>{var F;L&&L(l),(F=I.current)==null||F.scrollTo({top:0})},de=l=>{N&&N(l),h&&ie(l.target.value.length)},B=n?x?q.required:q.requiredIcon:q.optional;return e.jsxs("div",{className:t.container,"data-label-position":i,children:[m&&i==="side"&&e.jsxs("label",{id:T,className:t.label,htmlFor:o,"data-label-position":i,children:[m,(x||n)&&e.jsx("span",{className:t["requirement-indicator"],"data-required":n,"data-show-label-requirement":x,"aria-hidden":"true",children:B})]}),e.jsxs("div",{className:t["top-position-container"],"data-label-position":i,children:[e.jsxs("div",{className:t["header-container"],"data-label-position":i,children:[m&&i==="top"&&e.jsxs("label",{id:T,className:t.label,htmlFor:o,"data-label-position":i,children:[m,(x||n)&&e.jsx("span",{className:t["requirement-indicator"],"data-required":n,"data-show-label-requirement":x,"aria-hidden":"true",children:B})]}),le&&e.jsxs("span",{className:t["character-counter"],children:[oe,"/",h]})]}),e.jsxs("div",{className:t["textarea-container"],"data-label-position":i,children:[e.jsx("textarea",{ref:l=>{I.current=l,typeof y=="function"?y(l):y&&(y.current=l)},id:o,name:r,className:pe(t.textarea,a),"data-resizeable":ne,"data-assistive-text-appearance":u,onChange:de,"aria-labelledby":T||te,maxLength:h,onBlur:ce,defaultValue:v,value:g,...k}),C&&e.jsx(e.Fragment,{children:u==="link"?e.jsx(xe,{label:C,href:re,externalLink:!0,className:t["assistive-text-link"]}):e.jsxs("div",{className:t["assistive-text"],"data-assistive-text-appearance":u,"data-disabled":k.disabled,children:[u==="error"?e.jsx(A,{name:"error",size:O}):u==="success"?e.jsx(A,{name:"check-circle",size:O}):null,e.jsx("span",{children:C})]})})]})]})]})});c.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},assistiveTextAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},resizeable:{defaultValue:{value:'"true"',computed:!1},required:!1}},composes:["CoreTextareaProps","Omit"]};const Te={title:"Textarea",tags:["autodocs"],component:c,args:{disabled:!1},argTypes:{value:{control:"text"},label:{control:"text"},labelPosition:{control:"select",options:["top","side"],description:"Position of the label relative to the textarea"},disabled:{control:"boolean"},rows:{control:"number"},onChange:{action:"changed"},assistiveTextAppearance:{control:"select",options:["description","error","success","link"],description:"Appearance of the assistive text"},assistiveTextLink:{control:"text",description:"Link for the assistive text when appearance is 'link'"},required:{control:"boolean",description:"Whether the textarea is required"},showLabelRequirement:{control:"boolean",description:"Whether to show the requirement indicator in the label"},maxLength:{control:"number",description:"Maximum number of characters allowed in the textarea"},showCounter:{control:"boolean",description:"Whether to display the character count"},readOnly:{control:"boolean",description:"Whether the textarea is read-only"}}},R=ue(),s={args:{id:"my-textarea",label:"Label",labelId:"LabelId",assistiveTextLabel:"Assistive text for the textarea",required:!1,showLabelRequirement:!1,onChange:R,readOnly:!1,rows:3},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(c,{...a})})},f={args:{...s.args,maxLength:10},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(c,{...a})}),play:async({canvasElement:a})=>{const r=E(a).getByRole("textbox");await p.type(r,"Hello World"),d(R).toHaveBeenCalledTimes(10),d(r).toHaveValue("Hello Worl")}},b={args:{...s.args,maxLength:100,assistiveTextLabel:"Error message",assistiveTextAppearance:"error"},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(c,{...a})})},j={args:{...s.args,readOnly:!0,value:"This is a read-only textarea."},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(c,{...a})}),play:async({canvasElement:a,args:o})=>{const n=E(a).getByRole("textbox");await p.tab(),d(n).toHaveFocus(),await p.type(n,"Hello World"),d(R).not.toHaveBeenCalled(),d(n).toHaveValue(o.value)}},w={args:{...s.args,disabled:!0},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(c,{...a})}),play:async({canvasElement:a})=>{const r=E(a).getByRole("textbox");await p.tab(),d(r).not.toHaveFocus()}},_={args:{...s.args},render:a=>e.jsx("div",{style:{width:"350px"},children:e.jsx(c,{...a})}),play:async({canvasElement:a})=>{const r=E(a).getByRole("textbox");await p.tab(),d(r).toHaveFocus(),r.blur()}};var D,W,S;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: "my-textarea",
    label: "Label",
    labelId: "LabelId",
    assistiveTextLabel: "Assistive text for the textarea",
    required: false,
    showLabelRequirement: false,
    onChange: mockFn,
    readOnly: false,
    rows: 3
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  }
}`,...(S=(W=s.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var V,M,z;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(M=f.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var K,U,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Q,Z,G;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(G=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var J,Y,$;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...($=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var P,ee,ae;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(ae=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Ce=["Default","CharacterCount","Error","ReadOnly","Disabled","KeyboardInteraction"];export{f as CharacterCount,s as Default,w as Disabled,b as Error,_ as KeyboardInteraction,j as ReadOnly,Ce as __namedExportsOrder,Te as default};
