import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{R as v,T as h}from"./Icon-DjEid3Hw.js";import{T as n}from"./Tag-mWI-odwS.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";const I=Object.keys(v),x=Object.keys(h),k={title:"Composants/Tag/Tag",component:n,tags:["autodocs"],argTypes:{tagType:{control:"select",options:["status","decorative"]},status:{control:"select",options:["success","information","warning","alert"]},color:{control:"select",options:["brand","neutral","azur","jade","lavande","ciel","nuage","givre","brume","glacier","turquoise","anis","menthe","citronnelle","sable","abricot","coral","rose","petale","quartz","cendre"]},compactSpacing:{control:"boolean"},showLeftIcon:{control:"boolean"},iconName:{control:"select",options:[...I,...x],description:"Icon to display on the tag"}}},e={args:{tagType:"status",status:"success",color:"brand",compactSpacing:!1,label:"Tag Label",showLeftIcon:!1,iconName:"check"}},o={args:{...e.args,tagType:"decorative",color:"azur",label:"Decorative Tag",showLeftIcon:!1},render:r=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(n,{...r})})},s={args:{...e.args,tagType:"decorative",color:"jade",label:"Decorative Tag with Icon",showLeftIcon:!0},render:r=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(n,{...r})})},t={args:{...e.args,tagType:"decorative",color:"brand",compactSpacing:!0,label:"Compact Tag"},render:r=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(n,{...r})})};var c,l,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tagType: "status",
    status: "success",
    color: "brand",
    compactSpacing: false,
    label: "Tag Label",
    showLeftIcon: false,
    iconName: "check"
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var g,p,d;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "azur",
    label: "Decorative Tag",
    showLeftIcon: false
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Tag {...args} />
      </div>;
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "jade",
    label: "Decorative Tag with Icon",
    showLeftIcon: true
  },
  render: args => <div style={{
    display: "flex",
    gap: 8
  }}>
      <Tag {...args} />
    </div>
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var T,y,b;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "brand",
    compactSpacing: true,
    label: "Compact Tag"
  },
  render: args => <div style={{
    display: "flex",
    gap: 8
  }}>
      <Tag {...args} />
    </div>
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const z=["Default","Decorative","WithIcon","Compact"];export{t as Compact,o as Decorative,e as Default,s as WithIcon,z as __namedExportsOrder,k as default};
