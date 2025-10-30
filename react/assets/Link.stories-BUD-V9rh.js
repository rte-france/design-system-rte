import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as S,u as j,e as w}from"./index-DCXJbAaW.js";import{L as n}from"./Link-BBbOz1gX.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";const _={title:"Link",component:n,tags:["autodocs"],argTypes:{subtle:{control:"boolean"},externalLink:{control:"boolean"},reverse:{control:"boolean"}}},a={args:{label:"Link",href:"#",reverse:!1}},s={args:{label:"Subtle Link",href:"#",subtle:!0},render:e=>r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx(n,{...e,label:"Subtle Link",href:"#"}),r.jsx(n,{...e,label:"Subtle Link",href:"#",externalLink:!0})]})},t={args:{label:"External Link",href:"#"},render:e=>r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx(n,{...e,label:"External Link",href:"#"}),r.jsx(n,{...e,label:"External Link",href:"#",externalLink:!0})]})},l={args:{label:"External Link",href:"#",reverse:!0,subtle:!0},render:e=>r.jsxs("div",{style:{display:"flex",gap:8,backgroundColor:"black",padding:16},children:[r.jsx(n,{...e,label:"External Link",href:"#"}),r.jsx(n,{...e,label:"External Link",href:"#",externalLink:!0})]})},o={args:{label:"Link",href:"#"},play:async({canvasElement:e})=>{const E=S(e).getByRole("link");await j.tab(),w(E).toHaveFocus()}};var i,c,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Link",
    href: "#",
    reverse: false
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,p,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Subtle Link",
    href: "#",
    subtle: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Link {...args} label="Subtle Link" href="#" />
        <Link {...args} label="Subtle Link" href="#" externalLink />
      </div>;
  }
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var k,x,L;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "External Link",
    href: "#"
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Link {...args} label="External Link" href="#" />
        <Link {...args} label="External Link" href="#" externalLink />
      </div>;
  }
}`,...(L=(x=t.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var m,f,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "External Link",
    href: "#",
    reverse: true,
    subtle: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8,
      backgroundColor: "black",
      padding: 16
    }}>
        <Link {...args} label="External Link" href="#" />
        <Link {...args} label="External Link" href="#" externalLink />
      </div>;
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,v,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Link",
    href: "#"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await userEvent.tab();
    expect(link).toHaveFocus();
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const O=["Default","Subtle","NotSubtle","Reverse","KeyboardInteraction"];export{a as Default,o as KeyboardInteraction,t as NotSubtle,l as Reverse,s as Subtle,O as __namedExportsOrder,_ as default};
