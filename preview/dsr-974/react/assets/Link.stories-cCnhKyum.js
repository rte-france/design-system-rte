import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as F,u as K,e as M}from"./index-4rjIhT2C.js";import{B as _,L as u,R as z,a as p,O as $}from"./chunk-KS7C4IRE-kOmPZtMB.js";import{f as q}from"./testing.utils-r13wRTL2.js";import{N as G}from"./NavigationProvider-Bs4LKj9F.js";import{L as r}from"./Link-COG-NaCW.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./NavigationContext-D2CUoNWC.js";import"./Icon-VewZnR13.js";import"./index-DJ8f9STe.js";const oe={title:"Composants/Link/Link",component:r,tags:["autodocs"],argTypes:{subtle:{control:"boolean"},externalLink:{control:"boolean"},reverse:{control:"boolean"}}},I="This is a very long link label that should remain fully readable when the container is narrow or the page is zoomed to 400%",a={args:{label:"Link",href:"#",reverse:!1}},s={args:{label:"Subtle Link",href:"#",subtle:!0},render:n=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{...n,label:"Subtle Link",href:"#"}),e.jsx(r,{...n,label:"Subtle Link",href:"#",externalLink:!0})]})},t={args:{label:"External Link",href:"#"},render:n=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{...n,label:"External Link",href:"#"}),e.jsx(r,{...n,label:"External Link",href:"#",externalLink:!0})]})},o={args:{label:"External Link",href:"#",reverse:!0,subtle:!0},render:n=>e.jsxs("div",{style:{display:"flex",gap:8,backgroundColor:"black",padding:16},children:[e.jsx(r,{...n,label:"External Link",href:"#"}),e.jsx(r,{...n,label:"External Link",href:"#",externalLink:!0})]})},l={args:{label:I,href:"#"},render:n=>e.jsx("div",{style:{maxWidth:200,padding:8,border:"1px dashed var(--border-secondary)"},children:e.jsxs("p",{style:{margin:0},children:["Before the link, ",e.jsx(r,{...n})," after the link in running text."]})})},i={args:{label:I,href:"#",style:{maxWidth:120}}},d={tags:["!autodocs"],args:{label:"Link",href:"#"},play:async({canvasElement:n})=>{const O=F(n).getByRole("link");q(),await K.tab(),M(O).toHaveFocus()}},c={args:{label:"SPA Link",href:"/dashboard"},render:n=>e.jsxs(_,{children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxs(G,{linkComponent:u,children:[e.jsx(r,{...n,customLinkComponent:u,href:"/home",label:"SPA Link via customLinkComponent"}),e.jsx(r,{...n,label:"SPA Link via NavigationProvider"})]})}),e.jsxs(z,{children:[e.jsx(p,{path:"/home",element:e.jsx("div",{children:"Home Page"})}),e.jsx(p,{path:"/dashboard",element:e.jsx("div",{children:"Dashboard Page"})})]}),e.jsx($,{})]})};var m,h,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Link",
    href: "#",
    reverse: false
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,k,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var L,f,v;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,j,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var E,R,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: longLabel,
    href: "#"
  },
  render: args => <div style={{
    maxWidth: 200,
    padding: 8,
    border: "1px dashed var(--border-secondary)"
  }}>
      <p style={{
      margin: 0
    }}>
        Before the link, <Link {...args} /> after the link in running text.
      </p>
    </div>
}`,...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var C,W,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: longLabel,
    href: "#",
    style: {
      maxWidth: 120
    }
  }
}`,...(w=(W=i.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var B,N,A;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    label: "Link",
    href: "#"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    focusElementBeforeComponent();
    await userEvent.tab();
    expect(link).toHaveFocus();
  }
}`,...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var D,T,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "SPA Link",
    href: "/dashboard"
  },
  render: args => {
    return <BrowserRouter>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 16
      }}>
          <NavigationProvider linkComponent={RouterLink}>
            <Link {...args} customLinkComponent={RouterLink} href="/home" label="SPA Link via customLinkComponent" />
            <Link {...args} label="SPA Link via NavigationProvider" />
          </NavigationProvider>
        </div>
        <Routes>
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
        </Routes>

        <Outlet />
      </BrowserRouter>;
  }
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const le=["Default","Subtle","NotSubtle","Reverse","LabelWrappingInText","LabelTruncationWithMaxWidth","KeyboardInteraction","WithCustomRouter"];export{a as Default,d as KeyboardInteraction,i as LabelTruncationWithMaxWidth,l as LabelWrappingInText,t as NotSubtle,o as Reverse,s as Subtle,c as WithCustomRouter,le as __namedExportsOrder,oe as default};
