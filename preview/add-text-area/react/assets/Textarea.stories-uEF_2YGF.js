import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-G8LIXM5I.js";import{I as L}from"./Icon-DiFFcmJA.js";import{L as ee}from"./Link-CilvQ5ec.js";import{c as re}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const w=16,ae={required:"(obligatoire)",icon:"*",optional:"(facultatif)"},te="_container_mjrc0_3",se="_label_mjrc0_35",ne="_textarea_mjrc0_80",a={container:te,"header-container":"_header-container_mjrc0_26",label:se,"required-indicator":"_required-indicator_mjrc0_50","character-counter":"_character-counter_mjrc0_70","textarea-container":"_textarea-container_mjrc0_80",textarea:ne,"assistive-text-link":"_assistive-text-link_mjrc0_132","assistive-text":"_assistive-text_mjrc0_132"},n=f.forwardRef(({className:r="",id:v,name:P,required:X=!1,onChange:b,onBlur:_,label:j,labelId:y,labelPosition:h="top",assistiveTextLabel:g,assistiveTextAppearance:i="description",["aria-labelledby"]:Q,assistiveTextLink:U,requiredAppearance:T="icon",resizeable:W="true",maxLength:o,defaultValue:c,value:l,...Z},d)=>{const[G,J]=f.useState((l==null?void 0:l.length)||(c==null?void 0:c.length)||0),q=f.useRef(null),K=t=>{var E;_&&_(t),(E=q.current)==null||E.scrollTo({top:0})},Y=t=>{b&&b(t),o&&J(t.target.value.length)},$=ae[T];return e.jsxs("div",{className:a.container,"data-label-position":h,children:[e.jsxs("div",{className:a["header-container"],"data-label-position":h,children:[j&&e.jsxs("label",{id:y,className:a.label,htmlFor:v,children:[j,X&&e.jsx("span",{className:a["required-indicator"],"data-required-appearance":T,"aria-hidden":"true",children:$})]}),o&&e.jsxs("span",{className:a["character-counter"],children:[G,"/",o]})]}),e.jsxs("div",{className:a["textarea-container"],"data-label-position":h,children:[e.jsx("textarea",{ref:t=>{q.current=t,typeof d=="function"?d(t):d&&(d.current=t)},id:v,name:P,className:re(a.textarea,r),"data-resizeable":W,"data-assistive-text-appearance":i,onChange:Y,"aria-labelledby":y||Q,maxLength:o,onBlur:K,defaultValue:c,value:l,...Z}),g&&e.jsx(e.Fragment,{children:i==="link"?e.jsx(ee,{label:g,href:U,externalLink:!0,className:a["assistive-text-link"]}):e.jsxs("div",{className:a["assistive-text"],"data-assistive-text-appearance":i,children:[i==="error"?e.jsx(L,{name:"error",size:w}):i==="success"?e.jsx(L,{name:"check-circle",size:w}):null,e.jsx("span",{children:g})]})})]})]})});n.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},assistiveTextAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},requiredAppearance:{defaultValue:{value:'"icon"',computed:!1},required:!1},resizeable:{defaultValue:{value:'"true"',computed:!1},required:!1}},composes:["CoreTextareaProps","Omit"]};const me={title:"Textarea",component:n,args:{disabled:!1},argTypes:{value:{control:"text"},label:{control:"text"},labelPosition:{control:"select",options:["top","side"],description:"Position of the label relative to the textarea"},disabled:{control:"boolean"},rows:{control:"number"},onChange:{action:"changed"},assistiveTextAppearance:{control:"select",options:["description","error","success","link"],description:"Appearance of the assistive text"},assistiveTextLink:{control:"text",description:"Link for the assistive text when appearance is 'link'"},required:{control:"boolean",description:"Whether the textarea is required"},requiredAppearance:{control:"select",options:["required","icon","optional"],description:"Appearance of the required indicator"},maxLength:{control:"number",description:"Maximum number of characters allowed in the textarea"}}},s={args:{id:"my-textarea",label:"Label",labelId:"LabelId",assistiveTextLabel:"Assistive text for the textarea",required:!1},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})},u={args:{...s.args,maxLength:100},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})},p={args:{...s.args,maxLength:100,assistiveTextLabel:"Error message",assistiveTextAppearance:"error"},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})},m={args:{...s.args,readOnly:!0,defaultValue:"This is a read-only textarea."},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})},x={args:{...s.args,disabled:!0},render:r=>e.jsx("div",{style:{width:"350px"},children:e.jsx(n,{...r})})};var C,A,N;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(N=(A=s.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var k,I,R;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var D,O,S;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var z,M,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(M=m.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var V,B,F;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(F=(B=x.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const xe=["Default","CharacterCount","Error","ReadOnly","Disabled"];export{u as CharacterCount,s as Default,x as Disabled,p as Error,m as ReadOnly,xe as __namedExportsOrder,me as default};
