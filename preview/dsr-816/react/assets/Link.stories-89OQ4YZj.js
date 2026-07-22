import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as F,u as B,e as H}from"./index-4rjIhT2C.js";import{r as I}from"./index-G8LIXM5I.js";import{f as K}from"./testing.utils-mIZIUNbM.js";import{N as W}from"./NavigationProvider-DAqgPPPV.js";import{L as r}from"./Link-DxnKzGV5.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";const U={title:"Composants/Link/Link",component:r,tags:["autodocs"],argTypes:{subtle:{control:"boolean"},externalLink:{control:"boolean"},reverse:{control:"boolean"}}},t={args:{label:"Link",href:"#",reverse:!1}},s={args:{label:"Subtle Link",href:"#",subtle:!0},render:e=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(r,{...e,label:"Subtle Link",href:"#"}),n.jsx(r,{...e,label:"Subtle Link",href:"#",externalLink:!0})]})},l={args:{label:"External Link",href:"#"},render:e=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(r,{...e,label:"External Link",href:"#"}),n.jsx(r,{...e,label:"External Link",href:"#",externalLink:!0})]})},o={args:{label:"External Link",href:"#",reverse:!0,subtle:!0},render:e=>n.jsxs("div",{style:{display:"flex",gap:8,backgroundColor:"black",padding:16},children:[n.jsx(r,{...e,label:"External Link",href:"#"}),n.jsx(r,{...e,label:"External Link",href:"#",externalLink:!0})]})},i={args:{label:"Link",href:"#"},play:async({canvasElement:e})=>{const a=F(e).getByRole("link");K(e),await B.tab(),H(a).toHaveFocus()}},p=I.forwardRef(({href:e,children:u,onClick:a,...A},D)=>n.jsx("a",{ref:D,href:e,onClick:d=>{d.preventDefault(),a==null||a(d),console.log(`SPA navigation to ${e}`)},...A,children:u})),c={args:{label:"SPA Link",href:"/dashboard"},render:e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx(r,{...e,customLinkComponent:p}),n.jsx(W,{linkComponent:p,children:n.jsx(r,{...e,label:"SPA Link via NavigationProvider"})})]})};var m,k,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Link",
    href: "#",
    reverse: false
  }
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var f,x,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var g,v,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,E,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(E=o.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var j,R,P;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(R=i.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var C,N,w;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "SPA Link",
    href: "/dashboard"
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <Link {...args} customLinkComponent={FakeRouterLink} />

        <NavigationProvider linkComponent={FakeRouterLink}>
          <Link {...args} label="SPA Link via NavigationProvider" />
        </NavigationProvider>
      </div>;
  }
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const V=["Default","Subtle","NotSubtle","Reverse","KeyboardInteraction","WithCustomRouter"];export{t as Default,i as KeyboardInteraction,l as NotSubtle,o as Reverse,s as Subtle,c as WithCustomRouter,V as __namedExportsOrder,U as default};
