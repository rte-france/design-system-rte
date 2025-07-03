import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as h,u as y,e as v}from"./index-DaW6VCyr.js";import{L as r}from"./Link-CcecjTWT.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DiFFcmJA.js";import"./index-DSdvzt-y.js";const I={title:"Link",component:r,tags:["autodocs"],argTypes:{subtle:{control:"boolean"},externalLink:{control:"boolean"}}},a={args:{label:"Link",href:"#"}},t={args:{label:"Subtle Link",href:"#",subtle:!0},render:e=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(r,{...e,label:"Subtle Link",href:"#"}),n.jsx(r,{...e,label:"Subtle Link",href:"#",externalLink:!0})]})},s={args:{label:"External Link",href:"#"},render:e=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(r,{...e,label:"External Link",href:"#"}),n.jsx(r,{...e,label:"External Link",href:"#",externalLink:!0})]})},l={args:{label:"Link",href:"#"},play:async({canvasElement:e})=>{const g=h(e).getByRole("link");await y.tab(),v(g).toHaveFocus()}};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Link",
    href: "#"
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,p,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var d,m,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(k=(m=s.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var L,x,f;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const K=["Default","Subtle","NotSubtle","KeyboardInteraction"];export{a as Default,l as KeyboardInteraction,s as NotSubtle,t as Subtle,K as __namedExportsOrder,I as default};
