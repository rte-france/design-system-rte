import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as E}from"./index-G8LIXM5I.js";import{i as u,I as V}from"./Icon-DiFFcmJA.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const R="_tag_1hidr_3",g={tag:R,"tag-label":"_tag-label_1hidr_16"},D=E.forwardRef(({tagType:l="status",status:e,color:z,compactSpacing:k,label:i,showLeftIcon:q=!1,iconName:a,...A},C)=>{if(l==="status"){const p={success:"check",information:"info",warning:"warning",alert:"dangerous"};e&&p[e]&&(a=p[e])}return a&&!u(a)?(console.warn(`Tag: Invalid icon name "${a}". Please use a valid icon key.`),null):n.jsxs("div",{ref:C,className:g.tag,"data-tag-type":l,"data-status":e,"data-color":z,"data-compact-spacing":k,...A,children:[q&&a&&u(a)&&n.jsx(V,{name:a,size:16}),i&&n.jsx("label",{className:g["tag-label"],children:i})]})});D.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{tagType:{defaultValue:{value:'"status"',computed:!1},required:!1},showLeftIcon:{defaultValue:{value:"false",computed:!1},required:!1}}};const B={title:"Tag",component:D,tags:["autodocs"],argTypes:{tagType:{control:"select",options:["status","decorative"]},status:{control:"select",options:["success","information","warning","alert"]},color:{control:"select",options:["brand","neutral","azur","jade","lavande","ciel","nuage","givre","brume","glacier","turquoise","anis","menthe","citronnelle","sable","abricot","coral","rose","petale","quartz","cendre"]},compactSpacing:{control:"boolean"},showLeftIcon:{control:"boolean"}}},t={args:{tagType:"status",status:"success",color:"brand",compactSpacing:!1,label:"Tag Label",showLeftIcon:!1,iconName:"check"}},s={args:{tagType:"decorative",color:"azur",compactSpacing:!1,label:"Decorative Tag",showLeftIcon:!1}},o={args:{tagType:"status",status:"information",color:"jade",compactSpacing:!1,label:"Tag with Icon",showLeftIcon:!0}},r={args:{tagType:"status",status:"warning",color:"citronnelle",compactSpacing:!0,label:"Compact Tag",showLeftIcon:!1}},c={args:{tagType:"status",status:"alert",compactSpacing:!1,label:"Alert Tag",showLeftIcon:!0}};var m,d,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tagType: "status",
    status: "success",
    color: "brand",
    compactSpacing: false,
    label: "Tag Label",
    showLeftIcon: false,
    iconName: "check"
  }
}`,...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var T,h,b;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tagType: "decorative",
    color: "azur",
    compactSpacing: false,
    label: "Decorative Tag",
    showLeftIcon: false
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var I,w,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    tagType: "status",
    status: "information",
    color: "jade",
    compactSpacing: false,
    label: "Tag with Icon",
    showLeftIcon: true
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var y,v,L;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tagType: "status",
    status: "warning",
    color: "citronnelle",
    compactSpacing: true,
    label: "Compact Tag",
    showLeftIcon: false
  }
}`,...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var _,j,x;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tagType: "status",
    status: "alert",
    compactSpacing: false,
    label: "Alert Tag",
    showLeftIcon: true
  }
}`,...(x=(j=c.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const F=["Default","Decorative","WithIcon","Compact","AlertStatus"];export{c as AlertStatus,r as Compact,s as Decorative,t as Default,o as WithIcon,F as __namedExportsOrder,B as default};
