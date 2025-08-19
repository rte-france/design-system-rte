import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as R,u as G,e as T,a as J}from"./index-DaW6VCyr.js";import{r as c}from"./index-G8LIXM5I.js";import{r as Q}from"./index-DoK7PxrN.js";import{c as Z}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const tt=(t,o,s,n=0)=>{const r=t.getBoundingClientRect(),a=o.getBoundingClientRect(),g=t.parentElement;if(!g)return s;const l=g.getBoundingClientRect(),d={top:r.top-l.top>a.height+n,right:l.right-r.right>a.width+n,bottom:l.bottom-r.bottom>=a.height+n,left:r.left-l.left>a.width+n};return d.top?"top":d.bottom?"bottom":d.left?"left":d.right?"right":s},et=(t,o,s,n=0)=>{let r=0,a=0;return t==="bottom"?(console.log("ici"),r=o.getBoundingClientRect().bottom+window.scrollY+n,a=o.getBoundingClientRect().left+window.scrollX+o.getBoundingClientRect().width/2-s.getBoundingClientRect().width/2):t==="left"?(r=o.getBoundingClientRect().top+window.scrollY+o.getBoundingClientRect().height/2-s.getBoundingClientRect().height/2,a=o.getBoundingClientRect().left+window.scrollX-s.getBoundingClientRect().width-n):t==="right"?(r=o.getBoundingClientRect().top+window.scrollY+o.getBoundingClientRect().height/2-s.getBoundingClientRect().height/2,a=o.getBoundingClientRect().right+window.scrollX+n):(t==="top"||!t)&&(r=o.getBoundingClientRect().top+window.scrollY-s.getBoundingClientRect().height-n,a=o.getBoundingClientRect().left+window.scrollX+o.getBoundingClientRect().width/2-s.getBoundingClientRect().width/2),{top:r,left:a}},ot=({children:t})=>{const[o,s]=c.useState(null);return c.useEffect(()=>{let n=document.getElementById("overlay-root"),r=!1;return n||(n=document.createElement("div"),n.setAttribute("id","overlay-root"),document.body.appendChild(n)),r=!0,s(n),()=>{r&&n&&n.parentNode&&document.body.removeChild(n)}},[]),o?Q.createPortal(t,o):null},nt="_tooltip_1rpy8_3",rt="_tooltipLabel_1rpy8_25",b={"tooltip-trigger":"_tooltip-trigger_1rpy8_3",tooltip:nt,tooltipLabel:rt},B=10,i=c.forwardRef(({children:t,position:o="top",alignment:s="center",label:n,arrow:r=!0,className:a="",...g},l)=>{const d=c.useRef(null),f=c.useRef(null),[$,U]=c.useState(o),[j,W]=c.useState({top:0,left:0}),[C,z]=c.useState(!1);c.useEffect(()=>{if(C&&d.current&&f.current){const u=o==="auto"?tt(d.current,f.current,"top",B):o,E=et(u,d.current,f.current,B);U(u),W(E)}},[C,o]);const m=()=>{z(u=>!u)};return e.jsxs("div",{ref:d,className:b["tooltip-trigger"],onMouseEnter:m,onMouseLeave:m,onFocus:m,onBlur:m,tabIndex:0,children:[t,e.jsx(ot,{children:e.jsx("div",{ref:u=>{f.current=u,typeof l=="function"?l(u):l&&(l.current=u)},className:Z(b.tooltip,a),"data-position":$,"data-open":C||void 0,"data-alignment":s,"data-arrow":r,style:{top:`${j.top}px`,left:`${j.left}px`},...g,children:n&&e.jsx("span",{role:"tooltip",className:b.tooltipLabel,children:n})})})]})});i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:'"top"',computed:!1},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreTooltipProps","Omit"]};const ft={title:"Tooltip",component:i,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},it=e.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),p={args:{label:"Tooltip",children:it}},x={args:p.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{...t,position:"top"}),e.jsx(i,{...t,position:"bottom"}),e.jsx(i,{...t,position:"left"}),e.jsx(i,{...t,position:"right"})]})},h={args:p.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{...t,alignment:"start"}),e.jsx(i,{...t,alignment:"center"}),e.jsx(i,{...t,alignment:"end"})]})},y={args:p.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{...t,arrow:!0}),e.jsx(i,{...t,arrow:!1})]})},v={args:p.args,render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(i,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(i,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(i,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(i,{...t,position:"auto"})})]})},w={args:p.args,render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(i,{...t})}),play:async({canvasElement:t})=>{var r;const s=(r=R(t).queryByText("Hover Me!"))==null?void 0:r.parentElement;await G.tab();const n=R(document.body).getByRole("tooltip");T(s).toHaveFocus(),await J(()=>T(n).toBeVisible())}};var I,_,D;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var P,S,A;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(S=x.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var N,q,F;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(q=h.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var O,V,H;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(V=y.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var L,M,X;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(X=(M=v.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var Y,k,K;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    await userEvent.tab();
    const tooltip = within(document.body).getByRole("tooltip");
    expect(tooltipTrigger).toHaveFocus();
    await waitFor(() => expect(tooltip).toBeVisible());
  }
}`,...(K=(k=w.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};const mt=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{h as Alignment,y as Arrow,v as AutoPlacement,p as Default,w as KeyboardInteraction,x as Position,mt as __namedExportsOrder,ft as default};
