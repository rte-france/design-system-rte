import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as T}from"./keyboard.constants-Ci2qhLdf.js";import{f as D,w as O,u as l,e as d,a as A}from"./index-DaW6VCyr.js";import{R as W,T as H}from"./Icon-DjEid3Hw.js";import{S as n}from"./SplitButton-CBTtL9zA.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const K=Object.keys(W),L=Object.keys(H),U={title:"SplitButton (développement en cours)",id:"SplitButton",component:n,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean"},selected:{control:"boolean"},position:{control:"select",options:["bottom-start","bottom-end","top-start","top-end"]},disabled:{control:"boolean"},icon:{control:"select",options:["",...K,...L].sort((t,s)=>t.localeCompare(s)),description:"Nom de l’icône à afficher",defaultValue:""}},args:{onClick:D()}},M=D(),_=e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,minWidth:120},children:[e.jsx("button",{style:{padding:"8px 16px",border:"none",borderRadius:4,background:"#2563eb",color:"#fff",fontWeight:500,fontSize:15,cursor:"pointer"},children:"Action 1"}),e.jsx("button",{style:{padding:"8px 16px",border:"none",borderRadius:4,background:"#64748b",color:"#fff",fontWeight:500,fontSize:15,cursor:"pointer"},children:"Action 2"})]}),a={args:{appearance:"primary",label:"Button Label",compactSpacing:!1,position:"bottom-start",disabled:!1,ariaLabelRight:"Open menu",onClick:M(),children:_},render:t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{}),e.jsx(n,{...t})]})},o={render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(n,{...t,appearance:"primary"}),e.jsx(n,{...t,appearance:"secondary"})]}),args:{...a.args}},r={render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(n,{...t,size:"s"}),e.jsx(n,{...t,size:"m"}),e.jsx(n,{...t,size:"l"})]}),args:{...a.args}},i={render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(n,{...t,size:"s",compactSpacing:!0}),e.jsx(n,{...t,size:"m",compactSpacing:!0}),e.jsx(n,{...t,size:"l",compactSpacing:!0})]}),args:{...a.args}},c={render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:600},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 2fr",gap:24},children:[e.jsx(n,{...t,position:"top-end"}),e.jsx(n,{...t,position:"top-start"}),e.jsx(n,{...t,position:"bottom-end"}),e.jsx(n,{...t,position:"bottom-start"})]})}),args:{...a.args}},p={args:{...a.args},play:async({canvasElement:t})=>{const s=O(t),E=s.getByTestId("Menu button"),R=s.getByTestId("Menu container");await l.tab(),await l.tab(),d(E).toHaveFocus(),await l.keyboard(`{${T}}`),await A(()=>d(R).toBeVisible())}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    appearance: "primary",
    label: "Button Label",
    compactSpacing: false,
    position: "bottom-start",
    disabled: false,
    ariaLabelRight: "Open menu",
    onClick: mockFn(),
    children: mockChildren
  },
  render: args => <>
      <div>
        <span style={{
        fontFamily: "sans-serif",
        marginBottom: 16,
        border: "1px solid #F4922B",
        padding: 8,
        borderRadius: 5,
        backgroundColor: "#FAFFC1",
        margin: 0
      }}>
          Ce composant est en cours de développement et n'est pas encore disponible
        </span>
      </div>
      <br />
      <SplitButton {...args} />
    </>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,y,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: 16
  }}>
      <SplitButton {...args} appearance="primary" />
      <SplitButton {...args} appearance="secondary" />
    </div>,
  args: {
    ...Default.args
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,S,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: 16
  }}>
      <SplitButton {...args} size="s" />
      <SplitButton {...args} size="m" />
      <SplitButton {...args} size="l" />
    </div>,
  args: {
    ...Default.args
  }
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,B,h;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: 16
  }}>
      <SplitButton {...args} size="s" compactSpacing={true} />
      <SplitButton {...args} size="m" compactSpacing={true} />
      <SplitButton {...args} size="l" compactSpacing={true} />
    </div>,
  args: {
    ...Default.args
  }
}`,...(h=(B=i.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var C,z,F;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 600
  }}>
      <div style={{
      display: "grid",
      gridTemplateColumns: "2fr 2fr",
      gap: 24
    }}>
        <SplitButton {...args} position="top-end" />
        <SplitButton {...args} position="top-start" />
        <SplitButton {...args} position="bottom-end" />
        <SplitButton {...args} position="bottom-start" />
      </div>
    </div>,
  args: {
    ...Default.args
  }
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var k,I,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("Menu button");
    const menuContainer = canvas.getByTestId("Menu container");
    await userEvent.tab();
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(\`{\${DOWN_KEY}}\`);
    await waitFor(() => expect(menuContainer).toBeVisible());
  }
}`,...(w=(I=p.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const X=["Default","Appearance","Size","CompactSpacing","Position","KeyboardInteraction"];export{o as Appearance,i as CompactSpacing,a as Default,p as KeyboardInteraction,c as Position,r as Size,X as __namedExportsOrder,U as default};
