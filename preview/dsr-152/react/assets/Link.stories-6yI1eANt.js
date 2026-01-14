import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as S,u as j,e as w}from"./index-BfPN6pki.js";import{f as C}from"./testing.utils-CYMf4Aux.js";import{L as n}from"./Link-Cg70Z2zF.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";const T={title:"Composants/Link",component:n,tags:["autodocs"],argTypes:{subtle:{control:"boolean"},externalLink:{control:"boolean"},reverse:{control:"boolean"}}},a={args:{label:"Link",href:"#",reverse:!1}},s={args:{label:"Subtle Link",href:"#",subtle:!0},render:e=>r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx(n,{...e,label:"Subtle Link",href:"#"}),r.jsx(n,{...e,label:"Subtle Link",href:"#",externalLink:!0})]})},t={args:{label:"External Link",href:"#"},render:e=>r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx(n,{...e,label:"External Link",href:"#"}),r.jsx(n,{...e,label:"External Link",href:"#",externalLink:!0})]})},l={args:{label:"External Link",href:"#",reverse:!0,subtle:!0},render:e=>r.jsxs("div",{style:{display:"flex",gap:8,backgroundColor:"black",padding:16},children:[r.jsx(n,{...e,label:"External Link",href:"#"}),r.jsx(n,{...e,label:"External Link",href:"#",externalLink:!0})]})},o={args:{label:"Link",href:"#"},play:async({canvasElement:e})=>{const E=S(e).getByRole("link");C(e),await j.tab(),w(E).toHaveFocus()}};var i,c,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Link",
    href: "#",
    reverse: false
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,d,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(d=s.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var k,m,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,L,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(L=l.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var h,v,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Link",
    href: "#"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(link).toHaveFocus();
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const q=["Default","Subtle","NotSubtle","Reverse","KeyboardInteraction"];export{a as Default,o as KeyboardInteraction,t as NotSubtle,l as Reverse,s as Subtle,q as __namedExportsOrder,T as default};
