import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{B as r}from"./BaseSideNav-DUsuIK_e.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const W={title:"BaseSideNav (développement en cours)",id:"BaseSideNav",component:r,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},showHeader:{control:"boolean"},showFooter:{control:"boolean"},appearance:{control:"select",options:["neutral","brand"]}}},d=o.jsx("div",{style:{padding:"0.5rem 0"},children:o.jsx("p",{style:{margin:"0.5rem 0",fontSize:"0.875rem"},children:"Content goes here"})}),s=o.jsxs("div",{style:{padding:"2rem",width:"320px",boxSizing:"border-box"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Welcome to the Design System"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),a={args:{size:"m",collapsible:!1,showHeader:!1,showFooter:!1,appearance:"brand"},render:e=>o.jsx(r,{size:e.size,collapsible:e.collapsible,showHeader:e.showHeader,showFooter:e.showFooter,body:d,appearance:e.appearance,children:s})},i={args:{size:"m",collapsible:!1,showHeader:!0,showFooter:!1},render:e=>o.jsx(r,{size:e.size,collapsible:e.collapsible,showHeader:e.showHeader,showFooter:e.showFooter,header:o.jsx("div",{style:{fontWeight:"600",fontSize:"0.875rem"},children:"Menu"}),body:d,children:s})},n={args:{size:"m",collapsible:!1,showHeader:!1,showFooter:!0},render:e=>o.jsx(r,{size:e.size,collapsible:e.collapsible,showHeader:e.showHeader,showFooter:e.showFooter,body:d,footer:o.jsx("div",{style:{fontSize:"0.75rem",color:"#666"},children:"Footer"}),children:s})},t={args:{size:"m",collapsible:!1,showHeader:!0,showFooter:!0},render:e=>o.jsx(r,{size:e.size,collapsible:e.collapsible,showHeader:e.showHeader,showFooter:e.showFooter,header:o.jsx("div",{style:{fontWeight:"600",fontSize:"0.875rem"},children:"Navigation"}),body:d,footer:o.jsx("div",{style:{fontSize:"0.75rem"},children:"© 2025"}),children:s})},l={args:{collapsible:!0,showHeader:!0,showFooter:!0},render:e=>o.jsx(r,{size:e.size,collapsible:e.collapsible,showHeader:e.showHeader,showFooter:e.showFooter,header:o.jsx("div",{style:{fontWeight:"600",color:"#000",padding:"1rem",backgroundColor:"#E8F4F8",width:"100%",boxSizing:"border-box"},children:"📍 Header Section"}),body:o.jsxs("div",{style:{padding:"1rem",backgroundColor:"#F0E8F8",width:"100%",height:"100%",boxSizing:"border-box",color:"#000"},children:["📄 Body Section",o.jsx("br",{}),o.jsx("small",{children:"Expands to fill available space"})]}),footer:o.jsx("div",{style:{padding:"1rem",backgroundColor:"#F8F0E8",width:"100%",boxSizing:"border-box",color:"#000"},children:"🔧 Footer Section"}),children:s})};var c,h,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "m",
    collapsible: false,
    showHeader: false,
    showFooter: false,
    appearance: "brand"
  },
  render: args => <BaseSideNav size={args.size} collapsible={args.collapsible} showHeader={args.showHeader} showFooter={args.showFooter} body={SimpleBody} appearance={args.appearance}>
      {PageContent}
    </BaseSideNav>
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,b,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "m",
    collapsible: false,
    showHeader: true,
    showFooter: false
  },
  render: args => <BaseSideNav size={args.size} collapsible={args.collapsible} showHeader={args.showHeader} showFooter={args.showFooter} header={<div style={{
    fontWeight: "600",
    fontSize: "0.875rem"
  }}>Menu</div>} body={SimpleBody}>
      {PageContent}
    </BaseSideNav>
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,u,F;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "m",
    collapsible: false,
    showHeader: false,
    showFooter: true
  },
  render: args => <BaseSideNav size={args.size} collapsible={args.collapsible} showHeader={args.showHeader} showFooter={args.showFooter} body={SimpleBody} footer={<div style={{
    fontSize: "0.75rem",
    color: "#666"
  }}>Footer</div>}>
      {PageContent}
    </BaseSideNav>
}`,...(F=(u=n.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};var y,S,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "m",
    collapsible: false,
    showHeader: true,
    showFooter: true
  },
  render: args => <BaseSideNav size={args.size} collapsible={args.collapsible} showHeader={args.showHeader} showFooter={args.showFooter} header={<div style={{
    fontWeight: "600",
    fontSize: "0.875rem"
  }}>Navigation</div>} body={SimpleBody} footer={<div style={{
    fontSize: "0.75rem"
  }}>© 2025</div>}>
      {PageContent}
    </BaseSideNav>
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var z,v,x;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    showHeader: true,
    showFooter: true
  },
  render: args => <BaseSideNav size={args.size} collapsible={args.collapsible} showHeader={args.showHeader} showFooter={args.showFooter} header={<div style={{
    fontWeight: "600",
    color: "#000",
    padding: "1rem",
    backgroundColor: "#E8F4F8",
    width: "100%",
    boxSizing: "border-box"
  }}>
          📍 Header Section
        </div>} body={<div style={{
    padding: "1rem",
    backgroundColor: "#F0E8F8",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    color: "#000"
  }}>
          📄 Body Section
          <br />
          <small>Expands to fill available space</small>
        </div>} footer={<div style={{
    padding: "1rem",
    backgroundColor: "#F8F0E8",
    width: "100%",
    boxSizing: "border-box",
    color: "#000"
  }}>
          🔧 Footer Section
        </div>}>
      {PageContent}
    </BaseSideNav>
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const k=["BodyOnly","HeaderWithBody","BodyWithFooter","HeaderBodyFooter","ColoredSections"];export{a as BodyOnly,n as BodyWithFooter,l as ColoredSections,t as HeaderBodyFooter,i as HeaderWithBody,k as __namedExportsOrder,W as default};
