import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as w}from"./index-G8LIXM5I.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const b="_horizontal_1xt8t_3",C="_vertical_1xt8t_23",h={horizontal:b,vertical:C},i=w.forwardRef(({orientation:t="horizontal",thickness:a="light",color:l="default",...d},c)=>t==="horizontal"?e.jsx("hr",{ref:c,className:h.horizontal,"data-thickness":a,"data-color":l,...d}):e.jsx("div",{ref:c,role:"separator",className:h.vertical,"data-thickness":a,"data-color":l,...d}));i.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},thickness:{defaultValue:{value:'"light"',computed:!1},required:!1},color:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const E={title:"Divider",component:i,tags:["autodocs"],parameters:{layout:"centered"},decorators:[t=>e.jsx("div",{style:{height:"100px",width:"500px"},children:e.jsx(t,{})})],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider",defaultValue:"horizontal"},thickness:{control:"select",options:["light","medium","bold"],description:"Thickness of the divider",defaultValue:"light"},color:{control:"select",options:["default","inverse"],description:"Color of the divider",defaultValue:"default"}}},s={args:{orientation:"horizontal",thickness:"light",color:"default"}},n={args:{orientation:"vertical",thickness:"light",color:"default"},render:t=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"20px",height:"100px",width:"500px"},children:[e.jsx(i,{...t,thickness:"light"}),e.jsx(i,{...t,thickness:"medium"}),e.jsx(i,{...t,thickness:"bold"})]})},r={args:{orientation:"horizontal",thickness:"light",color:"default"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(i,{...t,thickness:"light"}),e.jsx(i,{...t,thickness:"medium"}),e.jsx(i,{...t,thickness:"bold"})]})},o={args:{orientation:"horizontal",thickness:"light",color:"inverse"},decorators:[t=>e.jsx("div",{style:{backgroundColor:"#214770",width:"100%",padding:"20px"},children:e.jsx(t,{})})],render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"space-between",width:"500px"},children:[e.jsx(i,{...t,thickness:"light"}),e.jsx(i,{...t,thickness:"medium"}),e.jsx(i,{...t,thickness:"bold"})]})};var p,u,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    color: "default"
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,m,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    thickness: "light",
    color: "default"
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
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var v,k,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    color: "default"
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
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var j,z,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: "light",
    color: "inverse"
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
}`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const I=["Default","VerticalSizes","HorizontalSizes","InverseColor"];export{s as Default,r as HorizontalSizes,o as InverseColor,n as VerticalSizes,I as __namedExportsOrder,E as default};
