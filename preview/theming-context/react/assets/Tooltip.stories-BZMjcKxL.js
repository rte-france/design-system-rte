import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as _,u as it,e as A,a as st}from"./index-DaW6VCyr.js";import{r as l}from"./index-G8LIXM5I.js";import{r as at}from"./index-DoK7PxrN.js";import{c as lt}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const P=4,S=9,dt=(t,o,r,e=0)=>{const i=t.parentElement;if(!i)return r;const a=t.getBoundingClientRect(),g=parseInt(getComputedStyle(o).getPropertyValue("max-width")),p=parseInt(getComputedStyle(o).getPropertyValue("max-height")),d=i.getBoundingClientRect(),m={top:a.top-d.top>p+e,right:d.right-a.right>g+e,bottom:d.bottom-a.bottom>=p+e,left:a.left-d.left>g+e};return m.top?"top":m.bottom?"bottom":m.left?"left":m.right?"right":r},ct=(t,o,r,e=0)=>{let i=0,a=0;return t==="bottom"?(i=o.getBoundingClientRect().bottom+e,a=o.getBoundingClientRect().left+o.getBoundingClientRect().width/2-r.getBoundingClientRect().width/2):t==="left"?(i=o.getBoundingClientRect().top+o.getBoundingClientRect().height/2-r.getBoundingClientRect().height/2,a=o.getBoundingClientRect().left-r.getBoundingClientRect().width-e):t==="right"?(i=o.getBoundingClientRect().top+o.getBoundingClientRect().height/2-r.getBoundingClientRect().height/2,a=o.getBoundingClientRect().right+e):(t==="top"||!t)&&(i=o.getBoundingClientRect().top-r.getBoundingClientRect().height-e,a=o.getBoundingClientRect().left+o.getBoundingClientRect().width/2-r.getBoundingClientRect().width/2),{top:i,left:a}},pt=(t,o=300)=>{const[r,e]=l.useState(t),[i,a]=l.useState(!1);return l.useEffect(()=>{if(t&&!r)e(!0),requestAnimationFrame(()=>{a(!0)});else if(!t&&r){a(!1);const g=setTimeout(()=>{e(!1)},o);return()=>clearTimeout(g)}},[t,r,o]),{shouldRender:r,isAnimating:i}},Q=({children:t})=>{const[o,r]=l.useState(null);return l.useEffect(()=>{let e=document.getElementById("overlay-root");return e||(e=document.createElement("div"),e.setAttribute("id","overlay-root"),e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.pointerEvents="none",e.style.zIndex="1000",document.body.appendChild(e)),r(e),()=>{e&&e.parentNode&&e.children.length===0&&document.body.removeChild(e)}},[]),o?n.jsx(n.Fragment,{children:at.createPortal(t,o)}):null};Q.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ut="_tooltip_1n5g5_3",gt="_tooltipLabel_1n5g5_25",T={"tooltip-trigger":"_tooltip-trigger_1n5g5_3",tooltip:ut,tooltipLabel:gt},s=l.forwardRef(({children:t,position:o="top",alignment:r="center",label:e,arrow:i=!0,className:a="",...g},p)=>{const d=l.useRef(null),m=l.useRef(null),[f,X]=l.useState(null),[Y,Z]=l.useState(o),[j,tt]=l.useState({top:0,left:0}),[b,w]=l.useState(!1),{shouldRender:et,isAnimating:nt}=pt(b,150),ot=l.useCallback(u=>{m.current=u,X(u),typeof p=="function"?p(u):p&&(p.current=u)},[p]),x=l.useCallback(()=>{if(b&&d.current&&f){const u=o==="auto"?dt(d.current,f,"top",i?S:P):o,rt=ct(u,d.current,f,i?S:P);Z(u),tt(rt)}},[b,o,i,f]);l.useEffect(()=>(x(),window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x)}),[x]);const B=()=>{w(!0)},I=()=>{w(!1)};return n.jsxs("div",{ref:d,className:T["tooltip-trigger"],onMouseEnter:B,onMouseLeave:I,onFocus:B,onBlur:I,tabIndex:0,children:[t,et&&n.jsx(Q,{children:n.jsx("div",{ref:ot,className:lt(T.tooltip,a),"data-position":Y,"data-open":nt||void 0,"data-alignment":r,"data-arrow":i,style:{top:`${j.top}px`,left:`${j.left}px`},...g,children:e&&n.jsx("span",{role:"tooltip",className:T.tooltipLabel,children:e})})})]})});s.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:'"top"',computed:!1},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreTooltipProps","Omit"]};const Tt={title:"Tooltip",component:s,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},mt=n.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),c={args:{label:"Tooltip",children:mt}},h={args:c.args,render:t=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[n.jsx(s,{...t,position:"top"}),n.jsx(s,{...t,position:"bottom"}),n.jsx(s,{...t,position:"left"}),n.jsx(s,{...t,position:"right"})]})},y={args:c.args,render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(s,{...t,alignment:"start"}),n.jsx(s,{...t,alignment:"center"}),n.jsx(s,{...t,alignment:"end"})]})},v={args:c.args,render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(s,{...t,arrow:!0}),n.jsx(s,{...t,arrow:!1})]})},C={args:c.args,render:t=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[n.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:n.jsx(s,{...t,position:"auto"})}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:n.jsx(s,{...t,position:"auto"})}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:n.jsx(s,{...t,position:"auto"})}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:n.jsx(s,{...t,position:"auto"})})]})},R={args:c.args,render:t=>n.jsx("div",{style:{display:"flex",gap:8},children:n.jsx(s,{...t})}),play:async({canvasElement:t})=>{var i;const r=(i=_(t).queryByText("Hover Me!"))==null?void 0:i.parentElement;await it.tab();const e=_(document.body).getByRole("tooltip");A(r).toHaveFocus(),await st(()=>A(e).toBeVisible())}};var O,D,N;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var q,F,L;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var V,k,H;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(k=y.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var M,E,W;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(E=v.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var G,K,$;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...($=(K=C.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var z,U,J;R.parameters={...R.parameters,docs:{...(z=R.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(U=R.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const jt=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{y as Alignment,v as Arrow,C as AutoPlacement,c as Default,R as KeyboardInteraction,h as Position,jt as __namedExportsOrder,Tt as default};
