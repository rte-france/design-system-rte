import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as r}from"./Divider-BVZUrQ0d.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";const B={title:"Composants/Divider/Divider",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider",defaultValue:"horizontal"},thickness:{control:"select",options:["light","medium","bold"],description:"Thickness of the divider",defaultValue:"light"},appearance:{control:"select",options:["neutral","inverse","brand"],description:"Color of the divider",defaultValue:"neutral"},endPoint:{control:"select",options:["round","square"],description:"End point style of the divider",defaultValue:"round"}}},t={args:{orientation:"horizontal",thickness:"light",appearance:"neutral"},render:n=>e.jsx("div",{style:{height:"100px",width:"500px"},children:e.jsx(r,{...n})})},i={args:{orientation:"horizontal",thickness:"light",appearance:"brand"},render:n=>e.jsx("div",{style:{height:"100px",width:"500px"},children:e.jsx(r,{...n})})},s={args:{orientation:"vertical",thickness:"light",appearance:"neutral"},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"250px"},children:[e.jsx(r,{orientation:"horizontal"}),e.jsx("div",{style:{height:"100px",margin:"0 auto"},children:e.jsx(r,{...n})})]})},a={args:{orientation:"horizontal",thickness:"light",appearance:"neutral"},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(r,{...n,thickness:"light"}),e.jsx(r,{...n,thickness:"medium"}),e.jsx(r,{...n,thickness:"bold"})]})},o={args:{orientation:"horizontal",thickness:"light",appearance:"neutral",endPoint:"square"},render:n=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:e.jsx(r,{...n,thickness:"bold"})})},d={args:{orientation:"horizontal",thickness:"light",appearance:"inverse"},decorators:[n=>e.jsx("div",{style:{backgroundColor:"var(--background-brand-pressed)",width:"500px",padding:"20px"},children:e.jsx(n,{})})],render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"100%"},children:[e.jsx(r,{...n,thickness:"light"}),e.jsx(r,{...n,thickness:"medium"}),e.jsx(r,{...n,thickness:"bold"})]})};var c,l,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "neutral"
  },
  render: args => <div style={{
    height: "100px",
    width: "500px"
  }}>
      <Divider {...args} />
    </div>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,u,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "brand"
  },
  render: args => <div style={{
    height: "100px",
    width: "500px"
  }}>
      <Divider {...args} />
    </div>
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,m,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    thickness: "light",
    appearance: "neutral"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    width: "250px"
  }}>
      <Divider orientation="horizontal" />
      <div style={{
      height: "100px",
      margin: "0 auto"
    }}>
        <Divider {...args} />
      </div>
    </div>
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var f,y,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "neutral"
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
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var j,D,b;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "neutral",
    endPoint: "square"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    width: "500px"
  }}>
      <Divider {...args} thickness="bold" />
    </div>
}`,...(b=(D=o.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var w,z,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "inverse"
  },
  decorators: [Story => <div style={{
    backgroundColor: "var(--background-brand-pressed)",
    width: "500px",
    padding: "20px"
  }}>
        <Story />
      </div>],
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    width: "100%"
  }}>
      <Divider {...args} thickness="light" />
      <Divider {...args} thickness="medium" />
      <Divider {...args} thickness="bold" />
    </div>
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const I=["Default","Brand","Vertical","Sizes","SquaredEnd","InverseColor"];export{i as Brand,t as Default,d as InverseColor,a as Sizes,o as SquaredEnd,s as Vertical,I as __namedExportsOrder,B as default};
