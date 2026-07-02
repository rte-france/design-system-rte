import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as n}from"./Loader-BciKA4ZH.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const F={title:"Composants/Loader/Loader",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{appearance:{control:"select",options:["brand","reverse"],description:"appearance of the Loader",defaultValue:"brand"},size:{control:"select",options:["small","medium","large"],description:"size of the Loader",defaultValue:"medium"},showLabel:{control:"boolean",description:"show the label of the Loader",defaultValue:"true"},labelPosition:{control:"select",options:["right","under"],description:"position of the label",defaultValue:"right"},label:{control:"text",description:"label of the Loader",defaultValue:"Chargement"}}},a={args:{appearance:"brand",size:"medium",showLabel:!0,labelPosition:"right",label:"Loading..."}},r={args:{showLabel:!1}},s={args:{labelPosition:"under"},render:i=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"flex-start"},children:[e.jsx(n,{...i,size:"small",label:"Small"}),e.jsx(n,{...i,size:"medium",label:"Medium"}),e.jsx(n,{...i,size:"large",label:"Large"})]})},o={args:{size:"medium",showLabel:!0,labelPosition:"under"}},t={args:{size:"medium",showLabel:!1,label:"Chargement",labelPosition:"under"}},l={args:{size:"medium",showLabel:!0,label:"Chargement",labelPosition:"right"}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appearance: "brand",
    size: "medium",
    showLabel: true,
    labelPosition: "right",
    label: "Loading..."
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,p,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showLabel: false
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,h,L;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    labelPosition: "under"
  },
  render: args => <div style={{
    display: "flex",
    gap: 32,
    alignItems: "flex-start"
  }}>
      <Loader {...args} size="small" label="Small" />
      <Loader {...args} size="medium" label="Medium" />
      <Loader {...args} size="large" label="Large" />
    </div>
}`,...(L=(h=s.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var f,z,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "medium",
    showLabel: true,
    labelPosition: "under"
  }
}`,...(w=(z=o.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var x,P,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "medium",
    showLabel: false,
    label: "Chargement",
    labelPosition: "under"
  }
}`,...(S=(P=t.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var C,j,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "medium",
    showLabel: true,
    label: "Chargement",
    labelPosition: "right"
  }
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const I=["Default","WithoutLabel","SizesComparison","WithoutLabelDefinition","ShowLabelFalse","LabelPositionRight"];export{a as Default,l as LabelPositionRight,t as ShowLabelFalse,s as SizesComparison,r as WithoutLabel,o as WithoutLabelDefinition,I as __namedExportsOrder,F as default};
