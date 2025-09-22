import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as t}from"./Divider-B0TD5a92.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";const V={title:"Composants/Divider/Divider",component:t,tags:["autodocs"],parameters:{layout:"centered"},decorators:[n=>e.jsx("div",{style:{height:"100px",width:"500px"},children:e.jsx(n,{})})],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider",defaultValue:"horizontal"},thickness:{control:"select",options:["light","medium","bold"],description:"Thickness of the divider",defaultValue:"light"},appearance:{control:"select",options:["default","inverse"],description:"Color of the divider",defaultValue:"default"},endPoint:{control:"select",options:["round","square"],description:"End point style of the divider",defaultValue:"round"}}},i={args:{orientation:"horizontal",thickness:"light",appearance:"default"}},s={args:{orientation:"vertical",thickness:"light",appearance:"default"},render:n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"20px",height:"100px",width:"500px"},children:[e.jsx(t,{...n,thickness:"light"}),e.jsx(t,{...n,thickness:"medium"}),e.jsx(t,{...n,thickness:"bold"})]})},r={args:{orientation:"horizontal",thickness:"light",appearance:"default"},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(t,{...n,thickness:"light"}),e.jsx(t,{...n,thickness:"medium"}),e.jsx(t,{...n,thickness:"bold"})]})},a={args:{orientation:"horizontal",thickness:"light",appearance:"default",endPoint:"square"},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(t,{...n,thickness:"light"}),e.jsx(t,{...n,thickness:"medium"}),e.jsx(t,{...n,thickness:"bold"})]})},o={args:{orientation:"horizontal",thickness:"light",appearance:"inverse"},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#214770",width:"100%",padding:"20px"},children:e.jsx(n,{})})],render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(t,{...n,thickness:"light"}),e.jsx(t,{...n,thickness:"medium"}),e.jsx(t,{...n,thickness:"bold"})]})};var d,c,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "default"
  }
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,h,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    thickness: "light",
    appearance: "default"
  },
  render: args => <div style={{
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    height: "100px",
    width: "500px"
  }}>
      <Divider {...args} thickness="light" />
      <Divider {...args} thickness="medium" />
      <Divider {...args} thickness="bold" />
    </div>
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,x,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "default"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    width: "500px"
  }}>
      <Divider {...args} thickness="light" />
      <Divider {...args} thickness="medium" />
      <Divider {...args} thickness="bold" />
    </div>
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var f,v,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "default",
    endPoint: "square"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    width: "500px"
  }}>
      <Divider {...args} thickness="light" />
      <Divider {...args} thickness="medium" />
      <Divider {...args} thickness="bold" />
    </div>
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,j,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "inverse"
  },
  decorators: [Story => <div style={{
    backgroundColor: "#214770",
    width: "100%",
    padding: "20px"
  }}>
        <Story />
      </div>],
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    width: "500px"
  }}>
      <Divider {...args} thickness="light" />
      <Divider {...args} thickness="medium" />
      <Divider {...args} thickness="bold" />
    </div>
}`,...(D=(j=o.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};const q=["Default","VerticalSizes","HorizontalSizes","SquaredEnd","InverseColor"];export{i as Default,r as HorizontalSizes,o as InverseColor,a as SquaredEnd,s as VerticalSizes,q as __namedExportsOrder,V as default};
