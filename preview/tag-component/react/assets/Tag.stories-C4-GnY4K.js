import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as k}from"./index-G8LIXM5I.js";import{i as g,I as q}from"./Icon-DiFFcmJA.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const C="_tag_1hidr_3",p={tag:C,"tag-label":"_tag-label_1hidr_16"},t=k.forwardRef(({tagType:e="status",status:o,color:D,compactSpacing:L,label:i,showLeftIcon:_=!1,iconName:r,...S},z)=>{if(e==="status"){const d={success:"check",information:"info",warning:"warning",alert:"dangerous"};o&&d[o]&&(r=d[o])}return r&&!g(r)?(console.warn(`Tag: Invalid icon name "${r}". Please use a valid icon key.`),null):a.jsxs("div",{ref:z,className:p.tag,"data-tag-type":e,"data-status":o,"data-color":D,"data-compact-spacing":L,...S,children:[_&&r&&g(r)&&a.jsx(q,{name:r,size:16}),i&&a.jsx("label",{className:p["tag-label"],children:i})]})});t.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{tagType:{defaultValue:{value:'"status"',computed:!1},required:!1},showLeftIcon:{defaultValue:{value:"false",computed:!1},required:!1}}};const O={title:"Tag",component:t,tags:["autodocs"],argTypes:{tagType:{control:"select",options:["status","decorative"]},status:{control:"select",options:["success","information","warning","alert"]},color:{control:"select",options:["brand","neutral","azur","jade","lavande","ciel","nuage","givre","brume","glacier","turquoise","anis","menthe","citronnelle","sable","abricot","coral","rose","petale","quartz","cendre"]},compactSpacing:{control:"boolean"},showLeftIcon:{control:"boolean"}}},s={args:{tagType:"status",status:"success",color:"brand",compactSpacing:!1,label:"Tag Label",showLeftIcon:!1,iconName:"check"}},n={args:{...s.args,tagType:"decorative",color:"azur",label:"Decorative Tag",showLeftIcon:!1},render:e=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(t,{...e})})},c={args:{...s.args,tagType:"decorative",color:"jade",label:"Decorative Tag with Icon",showLeftIcon:!0},render:e=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(t,{...e})})},l={args:{...s.args,tagType:"decorative",color:"citronnelle",compactSpacing:!0,label:"Compact Decorative Tag"},render:e=>a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(t,{...e})})};var u,m,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tagType: "status",
    status: "success",
    color: "brand",
    compactSpacing: false,
    label: "Tag Label",
    showLeftIcon: false,
    iconName: "check"
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var v,y,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var h,b,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var I,w,j;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "citronnelle",
    compactSpacing: true,
    label: "Compact Decorative Tag"
  },
  render: args => <div style={{
    display: "flex",
    gap: 8
  }}>
      <Tag {...args} />
    </div>
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const P=["Default","Decorative","WithIcon","Compact"];export{l as Compact,n as Decorative,s as Default,c as WithIcon,P as __namedExportsOrder,O as default};
