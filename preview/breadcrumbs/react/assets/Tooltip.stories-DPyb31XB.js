import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as H,u as q,e as c,a as P}from"./index-DaW6VCyr.js";import{T as n}from"./Tooltip-BLyEf0nf.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const U={title:"Tooltip",component:n,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},k=e.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),r={args:{label:"Tooltip",children:k}},o={args:r.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...t,position:"top"}),e.jsx(n,{...t,position:"bottom"}),e.jsx(n,{...t,position:"left"}),e.jsx(n,{...t,position:"right"})]})},s={args:r.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...t,alignment:"start"}),e.jsx(n,{...t,alignment:"center"}),e.jsx(n,{...t,alignment:"end"})]})},a={args:r.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...t,arrow:!0}),e.jsx(n,{...t,arrow:!1})]})},i={args:r.args,render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(n,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(n,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(n,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(n,{...t,position:"auto"})})]})},l={args:r.args,render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{...t})}),play:async({canvasElement:t})=>{var d;const p=H(t),F=(d=p.queryByText("Hover Me!"))==null?void 0:d.parentElement;await q.tab();const S=p.queryByRole("tooltip");c(F).toHaveFocus(),await P(()=>c(S).toBeVisible())}};var g,x,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var u,y,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: Default.args,
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Tooltip {...args} position="top" />
        <Tooltip {...args} position="bottom" />
        <Tooltip {...args} position="left" />
        <Tooltip {...args} position="right" />
      </div>;
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,v,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: Default.args,
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Tooltip {...args} alignment="start" />
        <Tooltip {...args} alignment="center" />
        <Tooltip {...args} alignment="end" />
      </div>;
  }
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var T,b,w;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: Default.args,
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Tooltip {...args} arrow={true} />
        <Tooltip {...args} arrow={false} />
      </div>;
  }
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var C,D,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: Default.args,
  render: args => {
    return <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }}>
        <div style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 8,
        border: "1px solid red",
        width: 75,
        height: 250
      }}>
          <Tooltip {...args} position="auto" />
        </div>

        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,
        border: "1px solid red",
        width: 250,
        height: 50
      }}>
          <Tooltip {...args} position="auto" />
        </div>

        <div style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        gap: 8,
        border: "1px solid red",
        width: 75,
        height: 250
      }}>
          <Tooltip {...args} position="auto" />
        </div>

        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 8,
        border: "1px solid red",
        width: 250,
        height: 50
      }}>
          <Tooltip {...args} position="auto" />
        </div>
      </div>;
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var B,E,A;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: Default.args,
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Tooltip {...args} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tooltipComponent = canvas.queryByText("Hover Me!")?.parentElement;
    await userEvent.tab();
    const tooltipLabel = canvas.queryByRole("tooltip");
    expect(tooltipComponent).toHaveFocus();
    await waitFor(() => expect(tooltipLabel).toBeVisible());
  }
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const W=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{s as Alignment,a as Arrow,i as AutoPlacement,r as Default,l as KeyboardInteraction,o as Position,W as __namedExportsOrder,U as default};
