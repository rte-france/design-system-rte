import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as d,u as H,e as c,a as P}from"./index-DCXJbAaW.js";import{f as k}from"./testing.utils-qrsqQ6ZN.js";import{T as n}from"./Tooltip-BvOI1vaV.js";import"./index-yBjzXJbu.js";import"./auto-placement-C6RxYMtA.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";const X={title:"Composants/Tooltip",component:n,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},M=e.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),o={args:{label:"Tooltip",children:M}},r={args:o.args,render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[e.jsx(n,{...t,position:"top"}),e.jsx(n,{...t,position:"bottom"}),e.jsx(n,{...t,position:"left"}),e.jsx(n,{...t,position:"right"})]})},s={args:o.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...t,alignment:"start"}),e.jsx(n,{...t,alignment:"center"}),e.jsx(n,{...t,alignment:"end"})]})},i={args:o.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{...t,arrow:!0}),e.jsx(n,{...t,arrow:!1})]})},a={args:o.args,render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(n,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(n,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(n,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(n,{...t,position:"auto"})})]})},l={args:o.args,render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{...t})}),play:async({canvasElement:t})=>{var p;const F=(p=d(t).queryByText("Hover Me!"))==null?void 0:p.parentElement;k(t),await H.tab();const S=d(document.body).getByRole("tooltip");c(F).toHaveFocus(),await P(()=>c(S).toBeVisible())}};var g,m,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,f,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: Default.args,
  render: args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }}>
        <Tooltip {...args} position="top" />
        <Tooltip {...args} position="bottom" />
        <Tooltip {...args} position="left" />
        <Tooltip {...args} position="right" />
      </div>;
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,v,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var T,w,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var C,D,I;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(D=a.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var B,E,A;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    const tooltipTrigger = canvas.queryByText("Hover Me!")?.parentElement;
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    const tooltip = within(document.body).getByRole("tooltip");
    expect(tooltipTrigger).toHaveFocus();
    await waitFor(() => expect(tooltip).toBeVisible());
  }
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const Y=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{s as Alignment,i as Arrow,a as AutoPlacement,o as Default,l as KeyboardInteraction,r as Position,Y as __namedExportsOrder,X as default};
