import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as k,u as M,e as x,a as O}from"./index-DaW6VCyr.js";import{g as z}from"./auto-placement-BWaa5Fnn.js";import{r as K}from"./index-G8LIXM5I.js";import{c as U}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const W="_tooltip_1s1zm_3",G="_tooltipLabel_1s1zm_7",f={tooltip:W,tooltipLabel:G},o=K.forwardRef(({children:t,position:r="top",alignment:m="center",label:i,arrow:l=!0,className:P="",...S},a)=>{const F=s=>{if(a&&typeof a=="function"?a(s):a&&(a.current=s),s&&r==="auto"){const V=s.querySelector("[role='tooltip']"),H=z(s,V,"top");s.setAttribute("data-position",H)}};return e.jsxs("div",{ref:F,className:U(f.tooltip,P),"data-position":r==="auto"?void 0:r,"data-alignment":m,"data-arrow":l,tabIndex:0,...S,children:[i&&e.jsx("span",{role:"tooltip",className:f.tooltipLabel,children:i}),t]})});o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:'"top"',computed:!1},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreTooltipProps","Omit"]};const oe={title:"Tooltip",component:o,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},J=e.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),n={args:{label:"Tooltip",children:J}},p={args:n.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{...t,position:"top"}),e.jsx(o,{...t,position:"bottom"}),e.jsx(o,{...t,position:"left"}),e.jsx(o,{...t,position:"right"})]})},d={args:n.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{...t,alignment:"start"}),e.jsx(o,{...t,alignment:"center"}),e.jsx(o,{...t,alignment:"end"})]})},c={args:n.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{...t,arrow:!0}),e.jsx(o,{...t,arrow:!1})]})},u={args:n.args,render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(o,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(o,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(o,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(o,{...t,position:"auto"})})]})},g={args:n.args,render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t})}),play:async({canvasElement:t})=>{var l;const r=k(t),m=(l=r.queryByText("Hover Me!"))==null?void 0:l.parentElement;await M.tab();const i=r.queryByRole("tooltip");x(m).toHaveFocus(),await O(()=>x(i).toBeVisible())}};var y,h,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,b,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(b=p.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var T,C,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var q,D,_;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(D=c.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var E,R,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(R=u.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var B,L,N;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(L=g.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const ne=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{d as Alignment,c as Arrow,u as AutoPlacement,n as Default,g as KeyboardInteraction,p as Position,ne as __namedExportsOrder,oe as default};
