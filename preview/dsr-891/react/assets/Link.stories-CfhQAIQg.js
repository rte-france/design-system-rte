import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as B,u as N,e as A}from"./index-4rjIhT2C.js";import{B as D,L as c,R as H,a as d,O}from"./chunk-KS7C4IRE-DoFVsaq3.js";import{f as F}from"./testing.utils-mIZIUNbM.js";import{N as I}from"./NavigationProvider-Bs4LKj9F.js";import{L as r}from"./Link-B53ZmOEu.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./NavigationContext-D2CUoNWC.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";const X={title:"Composants/Link/Link",component:r,tags:["autodocs"],argTypes:{subtle:{control:"boolean"},externalLink:{control:"boolean"},reverse:{control:"boolean"}}},a={args:{label:"Link",href:"#",reverse:!1}},t={args:{label:"Subtle Link",href:"#",subtle:!0},render:n=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{...n,label:"Subtle Link",href:"#"}),e.jsx(r,{...n,label:"Subtle Link",href:"#",externalLink:!0})]})},s={args:{label:"External Link",href:"#"},render:n=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{...n,label:"External Link",href:"#"}),e.jsx(r,{...n,label:"External Link",href:"#",externalLink:!0})]})},o={args:{label:"External Link",href:"#",reverse:!0,subtle:!0},render:n=>e.jsxs("div",{style:{display:"flex",gap:8,backgroundColor:"black",padding:16},children:[e.jsx(r,{...n,label:"External Link",href:"#"}),e.jsx(r,{...n,label:"External Link",href:"#",externalLink:!0})]})},l={args:{label:"Link",href:"#"},play:async({canvasElement:n})=>{const w=B(n).getByRole("link");F(n),await N.tab(),A(w).toHaveFocus()}},i={args:{label:"SPA Link",href:"/dashboard"},render:n=>e.jsxs(D,{children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxs(I,{linkComponent:c,children:[e.jsx(r,{...n,customLinkComponent:c,href:"/home",label:"SPA Link via customLinkComponent"}),e.jsx(r,{...n,label:"SPA Link via NavigationProvider"})]})}),e.jsxs(H,{children:[e.jsx(d,{path:"/home",element:e.jsx("div",{children:"Home Page"})}),e.jsx(d,{path:"/dashboard",element:e.jsx("div",{children:"Dashboard Page"})})]}),e.jsx(O,{})]})};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Link",
    href: "#",
    reverse: false
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var k,b,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var L,h,f;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,v,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,S,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var R,P,C;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(P=i.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const Y=["Default","Subtle","NotSubtle","Reverse","KeyboardInteraction","WithCustomRouter"];export{a as Default,l as KeyboardInteraction,s as NotSubtle,o as Reverse,t as Subtle,i as WithCustomRouter,Y as __namedExportsOrder,X as default};
