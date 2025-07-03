import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as k}from"./keyboard.constants-G_CZ5sfP.js";import{w as K,u as M,e as j,a as O}from"./index-DaW6VCyr.js";import{r as W}from"./index-G8LIXM5I.js";import{c as Y}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const U=(e,n,p)=>{const l=e.parentElement;if(!l)return p;const r=l.getBoundingClientRect(),d=n.getBoundingClientRect(),c=parseInt(getComputedStyle(n).getPropertyValue("max-width")),s=parseInt(getComputedStyle(n).getPropertyValue("max-height")),y=d.top-s>=r.top,i=d.bottom+s<=r.bottom,h=d.left-c>=r.left,v=d.right+c<=r.right;return y?"top":i?"bottom":h?"left":v?"right":p},z="_tooltip_1w2w6_3",G="_tooltipLabel_1w2w6_7",b={tooltip:z,tooltipLabel:G},o=W.forwardRef(({children:e,position:n="top",alignment:p="center",label:l,arrow:r=!0,className:d="",...c},s)=>{const y=i=>{if(s&&typeof s=="function"?s(i):s&&(s.current=i),i&&n==="auto"){const h=i.querySelector("[role='tooltip']"),v=U(i,h,"top");i.setAttribute("data-position",v)}};return t.jsxs("div",{ref:y,className:Y(b.tooltip,d),"data-position":n==="auto"?void 0:n,"data-alignment":p,"data-arrow":r,tabIndex:0,...c,children:[l&&t.jsx("span",{role:"tooltip",className:b.tooltipLabel,children:l}),e]})});o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:'"top"',computed:!1},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreTooltipProps","Omit"]};const nt={title:"Tooltip",component:o,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},J=t.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),a={args:{label:"Tooltip",children:J}},u={args:a.args,render:e=>t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(o,{...e,position:"top"}),t.jsx(o,{...e,position:"bottom"}),t.jsx(o,{...e,position:"left"}),t.jsx(o,{...e,position:"right"})]})},g={args:a.args,render:e=>t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(o,{...e,alignment:"start"}),t.jsx(o,{...e,alignment:"center"}),t.jsx(o,{...e,alignment:"end"})]})},m={args:a.args,render:e=>t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(o,{...e,arrow:!0}),t.jsx(o,{...e,arrow:!1})]})},f={args:a.args,render:e=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[t.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:t.jsx(o,{...e,position:"auto"})}),t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:t.jsx(o,{...e,position:"auto"})}),t.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:t.jsx(o,{...e,position:"auto"})}),t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:t.jsx(o,{...e,position:"auto"})})]})},x={args:a.args,render:e=>t.jsx("div",{style:{display:"flex",gap:8},children:t.jsx(o,{...e})}),play:async({canvasElement:e})=>{var r;const n=K(e),p=(r=n.queryByText("Hover Me!"))==null?void 0:r.parentElement;await M.keyboard(k);const l=n.queryByRole("tooltip");j(p).toHaveFocus(),await O(()=>j(l).toBeVisible())}};var w,T,C;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(C=(T=a.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,R,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(R=u.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var S,_,E;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var q,A,D;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var L,P,V;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(P=f.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var N,F,H;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    await userEvent.keyboard(TAB_KEY);
    const tooltipLabel = canvas.queryByRole("tooltip");
    expect(tooltipComponent).toHaveFocus();
    await waitFor(() => expect(tooltipLabel).toBeVisible());
  }
}`,...(H=(F=x.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const rt=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{g as Alignment,m as Arrow,f as AutoPlacement,a as Default,x as KeyboardInteraction,u as Position,rt as __namedExportsOrder,nt as default};
