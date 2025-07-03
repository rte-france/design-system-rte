import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-G8LIXM5I.js";import{I as E}from"./Icon-DiFFcmJA.js";import{L as $}from"./Link-CulzvKhf.js";import{c as ee}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const L=16,re={required:"(obligatoire)",icon:"*",optional:"(facultatif)"},ae="_container_xlpti_3",te="_label_xlpti_35",se="_textarea_xlpti_80",a={container:ae,"header-container":"_header-container_xlpti_26",label:te,"required-indicator":"_required-indicator_xlpti_50","character-counter":"_character-counter_xlpti_70","textarea-container":"_textarea-container_xlpti_80",textarea:se,"assistive-text-link":"_assistive-text-link_xlpti_132","assistive-text":"_assistive-text_xlpti_132"},n=f.forwardRef(({className:r="",id:g,name:F,required:P=!1,onChange:v,onBlur:b,label:_,labelId:y,labelPosition:x="top",assistiveTextLabel:m,assistiveTextAppearance:i="description",["aria-labelledby"]:X,assistiveTextLink:Q,requiredAppearance:T="icon",resizeable:U="true",maxLength:o,value:h,...W},l)=>{const[Z,G]=f.useState((h==null?void 0:h.length)||0),j=f.useRef(null),J=t=>{var q;b&&b(t),(q=j.current)==null||q.scrollTo({top:0})},K=t=>{v&&v(t),o&&G(t.target.value.length)},Y=re[T];return e.jsxs("div",{className:a.container,"data-label-position":x,children:[e.jsxs("div",{className:a["header-container"],"data-label-position":x,children:[_&&e.jsxs("label",{id:y,className:a.label,htmlFor:g,children:[_,P&&e.jsx("span",{className:a["required-indicator"],"data-required-appearance":T,"aria-hidden":"true",children:Y})]}),o&&e.jsxs("span",{className:a["character-counter"],children:[Z,"/",o]})]}),e.jsxs("div",{className:a["textarea-container"],"data-label-position":x,children:[e.jsx("textarea",{ref:t=>{j.current=t,typeof l=="function"?l(t):l&&(l.current=t)},id:g,name:F,className:ee(a.textarea,r),"data-resizeable":U,"data-assistive-text-appearance":i,onChange:K,"aria-labelledby":y||X,maxLength:o,onBlur:J,...W}),m&&e.jsx(e.Fragment,{children:i==="link"?e.jsx($,{label:m,href:Q,externalLink:!0,className:a["assistive-text-link"]}):e.jsxs("div",{className:a["assistive-text"],"data-assistive-text-appearance":i,children:[i==="error"?e.jsx(E,{name:"error",size:L}):i==="success"?e.jsx(E,{name:"check-circle",size:L}):null,e.jsx("span",{children:m})]})})]})]})});n.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},assistiveTextAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},requiredAppearance:{defaultValue:{value:'"icon"',computed:!1},required:!1},resizeable:{defaultValue:{value:'"true"',computed:!1},required:!1}},composes:["CoreTextareaProps","Omit"]};const pe={title:"Textarea",component:n,args:{disabled:!1},argTypes:{value:{control:"text"},label:{control:"text"},labelPosition:{control:"select",options:["top","side"],description:"Position of the label relative to the textarea"},disabled:{control:"boolean"},rows:{control:"number"},onChange:{action:"changed"},assistiveTextAppearance:{control:"select",options:["description","error","success","link"],description:"Appearance of the assistive text"},assistiveTextLink:{control:"text",description:"Link for the assistive text when appearance is 'link'"},required:{control:"boolean",description:"Whether the textarea is required"},requiredAppearance:{control:"select",options:["required","icon","optional"],description:"Appearance of the required indicator"},maxLength:{control:"number",description:"Maximum number of characters allowed in the textarea"}}},s={args:{id:"my-textarea",label:"Label",labelId:"LabelId",assistiveTextLabel:"Assistive text for the textarea",required:!1},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})},c={args:{...s.args,maxLength:100},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})},d={args:{...s.args,maxLength:100,assistiveTextLabel:"Error message",assistiveTextAppearance:"error"},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})},u={args:{...s.args,readOnly:!0,defaultValue:"This is a read-only textarea."},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})},p={args:{...s.args,disabled:!0},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})};var w,C,A;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "my-textarea",
    label: "Label",
    labelId: "LabelId",
    assistiveTextLabel: "Assistive text for the textarea",
    required: false
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  }
}`,...(A=(C=s.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var N,k,I;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxLength: 100
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  }
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var R,D,V;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var O,S,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    defaultValue: "This is a read-only textarea."
  },
  render: args => {
    return <div style={{
      width: "350px"
    }}>
        <Textarea {...args} />
      </div>;
  }
}`,...(z=(S=u.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var M,H,B;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  }
}`,...(B=(H=p.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};const xe=["Default","CharacterCount","Error","ReadOnly","Disabled"];export{c as CharacterCount,s as Default,p as Disabled,d as Error,u as ReadOnly,xe as __namedExportsOrder,pe as default};
