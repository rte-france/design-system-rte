import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as _}from"./index-G8LIXM5I.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const q="_horizontal_a66r0_3",E="_vertical_a66r0_25",u={horizontal:q,vertical:E},n=_.forwardRef(({orientation:t="horizontal",thickness:d="light",appearance:l="default",endPoint:c="round",...p},h)=>t==="horizontal"?e.jsx("hr",{ref:h,className:u.horizontal,"data-thickness":d,"data-appearance":l,"data-end-point":c,...p}):e.jsx("div",{ref:h,role:"separator",className:u.vertical,"data-thickness":d,"data-appearance":l,"data-end-point":c,...p}));n.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},thickness:{defaultValue:{value:'"light"',computed:!1},required:!1},appearance:{defaultValue:{value:'"default"',computed:!1},required:!1},endPoint:{defaultValue:{value:'"round"',computed:!1},required:!1}}};const O={title:"Divider",component:n,tags:["autodocs"],parameters:{layout:"centered"},decorators:[t=>e.jsx("div",{style:{height:"100px",width:"500px"},children:e.jsx(t,{})})],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider",defaultValue:"horizontal"},thickness:{control:"select",options:["light","medium","bold"],description:"Thickness of the divider",defaultValue:"light"},appearance:{control:"select",options:["default","inverse"],description:"Color of the divider",defaultValue:"default"},endPoint:{control:"select",options:["round","square"],description:"End point style of the divider",defaultValue:"round"}}},i={args:{orientation:"horizontal",thickness:"light",appearance:"default"}},s={args:{orientation:"vertical",thickness:"light",appearance:"default"},render:t=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"20px",height:"100px",width:"500px"},children:[e.jsx(n,{...t,thickness:"light"}),e.jsx(n,{...t,thickness:"medium"}),e.jsx(n,{...t,thickness:"bold"})]})},a={args:{orientation:"horizontal",thickness:"light",appearance:"default"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(n,{...t,thickness:"light"}),e.jsx(n,{...t,thickness:"medium"}),e.jsx(n,{...t,thickness:"bold"})]})},r={args:{orientation:"horizontal",thickness:"light",appearance:"default",endPoint:"square"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(n,{...t,thickness:"light"}),e.jsx(n,{...t,thickness:"medium"}),e.jsx(n,{...t,thickness:"bold"})]})},o={args:{orientation:"horizontal",thickness:"light",appearance:"inverse"},decorators:[t=>e.jsx("div",{style:{backgroundColor:"#214770",width:"100%",padding:"20px"},children:e.jsx(t,{})})],render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(n,{...t,thickness:"light"}),e.jsx(n,{...t,thickness:"medium"}),e.jsx(n,{...t,thickness:"bold"})]})};var g,m,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    appearance: "default"
  }
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var f,v,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,j,z;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(j=a.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var D,w,b;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(b=(w=r.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var C,S,V;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const R=["Default","VerticalSizes","HorizontalSizes","SquaredEnd","InverseColor"];export{i as Default,a as HorizontalSizes,o as InverseColor,r as SquaredEnd,s as VerticalSizes,R as __namedExportsOrder,O as default};
