import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as t}from"./Divider-cNGLKJiC.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";const B={title:"Composants/Divider/Divider",component:t,tags:["autodocs"],parameters:{layout:"centered"},decorators:[n=>e.jsx("div",{style:{height:"100px",width:"500px"},children:e.jsx(n,{})})],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider",defaultValue:"horizontal"},thickness:{control:"select",options:["light","medium","bold"],description:"Thickness of the divider",defaultValue:"light"},appearance:{control:"select",options:["default","inverse","brand"],description:"Color of the divider",defaultValue:"default"},endPoint:{control:"select",options:["round","square"],description:"End point style of the divider",defaultValue:"round"}}},i={args:{orientation:"horizontal",thickness:"light",appearance:"default"}},s={args:{orientation:"horizontal",thickness:"light",appearance:"brand"}},r={args:{orientation:"vertical",thickness:"light",appearance:"default"},render:n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"20px",height:"100px",width:"500px"},children:[e.jsx(t,{...n,thickness:"light"}),e.jsx(t,{...n,thickness:"medium"}),e.jsx(t,{...n,thickness:"bold"})]})},a={args:{orientation:"horizontal",thickness:"light",appearance:"default"},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(t,{...n,thickness:"light"}),e.jsx(t,{...n,thickness:"medium"}),e.jsx(t,{...n,thickness:"bold"})]})},o={args:{orientation:"horizontal",thickness:"light",appearance:"default",endPoint:"square"},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(t,{...n,thickness:"light"}),e.jsx(t,{...n,thickness:"medium"}),e.jsx(t,{...n,thickness:"bold"})]})},d={args:{orientation:"horizontal",thickness:"light",appearance:"inverse"},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#214770",width:"100%",padding:"20px"},children:e.jsx(n,{})})],render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(t,{...n,thickness:"light"}),e.jsx(t,{...n,thickness:"medium"}),e.jsx(t,{...n,thickness:"bold"})]})};var c,l,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "default"
  }
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "brand"
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,x,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,k,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var j,D,b;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(b=(D=o.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var w,z,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const H=["Default","Brand","VerticalSizes","HorizontalSizes","SquaredEnd","InverseColor"];export{s as Brand,i as Default,a as HorizontalSizes,d as InverseColor,o as SquaredEnd,r as VerticalSizes,H as __namedExportsOrder,B as default};
