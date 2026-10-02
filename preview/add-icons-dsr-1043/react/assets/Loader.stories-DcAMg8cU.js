import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as r}from"./Loader-WDdpk2Jd.js";import"./index-yBjzXJbu.js";import"./timepicker.constants-CynrC_9x.js";import"./id.utils-DsO5Uws7.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";const E={title:"Composants/Loader/Loader",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{appearance:{control:"select",options:["brand","reverse"],description:"appearance of the Loader",defaultValue:"brand"},size:{control:"select",options:["small","medium","large"],description:"size of the Loader",defaultValue:"medium"},labelPosition:{control:"select",options:["right","under"],description:"position of the label",defaultValue:"right"},label:{control:"text",description:"label of the Loader",defaultValue:"Chargement"}}},s={args:{appearance:"brand",size:"medium",labelPosition:"right",label:"Chargement..."}},n={args:{label:void 0}},o={args:{...s.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(r,{...a,appearance:"brand"}),e.jsx("div",{style:{background:"#1f2937",padding:"16px"},children:e.jsx(r,{...a,appearance:"reverse"})})]})},t={args:{...s.args},render:a=>e.jsxs("div",{style:{display:"flex",gap:"48px"},children:[e.jsx(r,{...a,labelPosition:"right"}),e.jsx(r,{...a,labelPosition:"under"})]})},l={args:{...s.args},render:a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[e.jsx(r,{...a,size:"small",label:"Small"}),e.jsx(r,{...a,size:"medium",label:"Medium"}),e.jsx(r,{...a,size:"large",label:"Large"})]})};var i,d,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    appearance: "brand",
    size: "medium",
    labelPosition: "right",
    label: "Chargement..."
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,b,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <Loader {...args} appearance="brand" />
      <div style={{
      background: "#1f2937",
      padding: "16px"
    }}>
        <Loader {...args} appearance="reverse" />
      </div>
    </div>
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,L,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div style={{
    display: "flex",
    gap: "48px"
  }}>
      <Loader {...args} labelPosition="right" />
      <Loader {...args} labelPosition="under" />
    </div>
}`,...(h=(L=t.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var v,y,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "32px"
  }}>
      <Loader {...args} size="small" label="Small" />
      <Loader {...args} size="medium" label="Medium" />
      <Loader {...args} size="large" label="Large" />
    </div>
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const I=["Default","WithoutLabel","Appearance","LabelPosition","Size"];export{o as Appearance,s as Default,t as LabelPosition,l as Size,n as WithoutLabel,I as __namedExportsOrder,E as default};
