import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{B as r}from"./BaseSideNav-Cwwm62n6.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";const E={title:"Composants/BaseSideNav",id:"BaseSideNav",component:r,tags:["autodocs"],decorators:[e=>o.jsx("div",{style:{height:"600px",width:"100%",display:"flex"},children:o.jsx(e,{})})],argTypes:{size:{control:"select",options:["s","m","l"]},showHeader:{control:"boolean"},showFooter:{control:"boolean"},appearance:{control:"select",options:["neutral","brand"]}}},l=o.jsx("div",{style:{padding:"0.5rem 0"},children:o.jsx("p",{style:{margin:"0.5rem 0",fontSize:"0.875rem"},children:"Content goes here"})}),s=o.jsxs("div",{style:{padding:"2rem",width:"320px",boxSizing:"border-box"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Welcome to the Design System"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),a={args:{size:"m",showHeader:!1,showFooter:!1,appearance:"brand"},render:e=>o.jsx(r,{size:e.size,showHeader:e.showHeader,showFooter:e.showFooter,body:l,appearance:e.appearance,children:s})},n={args:{size:"m",showHeader:!0,showFooter:!1},render:e=>o.jsx(r,{size:e.size,showHeader:e.showHeader,showFooter:e.showFooter,header:o.jsx("div",{style:{fontWeight:"600",fontSize:"0.875rem"},children:"Menu"}),body:l,children:s})},t={args:{size:"m",showHeader:!1,showFooter:!0},render:e=>o.jsx(r,{size:e.size,showHeader:e.showHeader,showFooter:e.showFooter,body:l,footer:o.jsx("div",{style:{fontSize:"0.75rem",color:"#666"},children:"Footer"}),children:s})},i={args:{size:"m",showHeader:!0,showFooter:!0},render:e=>o.jsx(r,{size:e.size,showHeader:e.showHeader,showFooter:e.showFooter,header:o.jsx("div",{style:{fontWeight:"600",fontSize:"0.875rem"},children:"Navigation"}),body:l,footer:o.jsx("div",{style:{fontSize:"0.75rem"},children:"© 2025"}),children:s})},d={args:{showHeader:!0,showFooter:!0},render:e=>o.jsx(r,{size:e.size,showHeader:e.showHeader,showFooter:e.showFooter,header:o.jsx("div",{style:{fontWeight:"600",color:"#000",padding:"1rem",backgroundColor:"#E8F4F8",width:"100%",boxSizing:"border-box"},children:"📍 Header Section"}),body:o.jsxs("div",{style:{padding:"1rem",backgroundColor:"#F0E8F8",width:"100%",height:"100%",boxSizing:"border-box",color:"#000"},children:["📄 Body Section",o.jsx("br",{}),o.jsx("small",{children:"Expands to fill available space"})]}),footer:o.jsx("div",{style:{padding:"1rem",backgroundColor:"#F8F0E8",width:"100%",boxSizing:"border-box",color:"#000"},children:"🔧 Footer Section"}),children:s})};var h,c,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "m",
    showHeader: false,
    showFooter: false,
    appearance: "brand"
  },
  render: args => <BaseSideNav size={args.size} showHeader={args.showHeader} showFooter={args.showFooter} body={SimpleBody} appearance={args.appearance}>
      {PageContent}
    </BaseSideNav>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "m",
    showHeader: true,
    showFooter: false
  },
  render: args => <BaseSideNav size={args.size} showHeader={args.showHeader} showFooter={args.showFooter} header={<div style={{
    fontWeight: "600",
    fontSize: "0.875rem"
  }}>Menu</div>} body={SimpleBody}>
      {PageContent}
    </BaseSideNav>
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var u,y,F;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "m",
    showHeader: false,
    showFooter: true
  },
  render: args => <BaseSideNav size={args.size} showHeader={args.showHeader} showFooter={args.showFooter} body={SimpleBody} footer={<div style={{
    fontSize: "0.75rem",
    color: "#666"
  }}>Footer</div>}>
      {PageContent}
    </BaseSideNav>
}`,...(F=(y=t.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var b,S,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "m",
    showHeader: true,
    showFooter: true
  },
  render: args => <BaseSideNav size={args.size} showHeader={args.showHeader} showFooter={args.showFooter} header={<div style={{
    fontWeight: "600",
    fontSize: "0.875rem"
  }}>Navigation</div>} body={SimpleBody} footer={<div style={{
    fontSize: "0.75rem"
  }}>© 2025</div>}>
      {PageContent}
    </BaseSideNav>
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,v,H;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    showHeader: true,
    showFooter: true
  },
  render: args => <BaseSideNav size={args.size} showHeader={args.showHeader} showFooter={args.showFooter} header={<div style={{
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
}`,...(H=(v=d.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};const W=["BodyOnly","HeaderWithBody","BodyWithFooter","HeaderBodyFooter","ColoredSections"];export{a as BodyOnly,t as BodyWithFooter,d as ColoredSections,i as HeaderBodyFooter,n as HeaderWithBody,W as __namedExportsOrder,E as default};
