import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as R,u as Z,e as T,a as E}from"./index-DaW6VCyr.js";import{r as c}from"./index-G8LIXM5I.js";import{r as tt}from"./index-DoK7PxrN.js";import{c as et}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const B=4,I=9,ot=(t,o,s,n=0)=>{const r=t.parentElement;if(!r)return s;const a=t.getBoundingClientRect(),m=parseInt(getComputedStyle(o).getPropertyValue("max-width")),g=parseInt(getComputedStyle(o).getPropertyValue("max-height")),l=r.getBoundingClientRect(),d={top:a.top-l.top>g+n,right:l.right-a.right>m+n,bottom:l.bottom-a.bottom>=g+n,left:a.left-l.left>m+n};return d.top?"top":d.bottom?"bottom":d.left?"left":d.right?"right":s},nt=(t,o,s,n=0)=>{let r=0,a=0;return t==="bottom"?(r=o.getBoundingClientRect().bottom+window.scrollY+n,a=o.getBoundingClientRect().left+window.scrollX+o.getBoundingClientRect().width/2-s.getBoundingClientRect().width/2):t==="left"?(r=o.getBoundingClientRect().top+window.scrollY+o.getBoundingClientRect().height/2-s.getBoundingClientRect().height/2,a=o.getBoundingClientRect().left+window.scrollX-s.getBoundingClientRect().width-n):t==="right"?(r=o.getBoundingClientRect().top+window.scrollY+o.getBoundingClientRect().height/2-s.getBoundingClientRect().height/2,a=o.getBoundingClientRect().right+window.scrollX+n):(t==="top"||!t)&&(r=o.getBoundingClientRect().top+window.scrollY-s.getBoundingClientRect().height-n,a=o.getBoundingClientRect().left+window.scrollX+o.getBoundingClientRect().width/2-s.getBoundingClientRect().width/2),{top:r,left:a}},K=({children:t})=>{const[o,s]=c.useState(null);return c.useEffect(()=>{let n=document.getElementById("overlay-root"),r=!1;return n||(n=document.createElement("div"),n.setAttribute("id","overlay-root"),document.body.appendChild(n)),r=!0,s(n),()=>{r&&n&&n.parentNode&&document.body.removeChild(n)}},[]),o?e.jsx(e.Fragment,{children:tt.createPortal(t,o)}):null};K.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const rt="_tooltip_1n5g5_3",it="_tooltipLabel_1n5g5_25",b={"tooltip-trigger":"_tooltip-trigger_1n5g5_3",tooltip:rt,tooltipLabel:it},i=c.forwardRef(({children:t,position:o="top",alignment:s="center",label:n,arrow:r=!0,className:a="",...m},g)=>{const l=c.useRef(null),d=c.useRef(null),[$,U]=c.useState(o),[j,z]=c.useState({top:0,left:0}),[C,J]=c.useState(!1);c.useEffect(()=>{if(C&&l.current&&d.current){const u=o==="auto"?ot(l.current,d.current,"top",r?I:B):o,Q=nt(u,l.current,d.current,r?I:B);U(u),z(Q)}},[C,o,r]);const f=()=>{J(u=>!u)};return e.jsxs("div",{ref:l,className:b["tooltip-trigger"],onMouseEnter:f,onMouseLeave:f,onFocus:f,onBlur:f,tabIndex:0,children:[t,e.jsx(K,{children:e.jsx("div",{ref:u=>{d.current=u,typeof g=="function"?g(u):g&&(g.current=u)},className:et(b.tooltip,a),"data-position":$,"data-open":C||void 0,"data-alignment":s,"data-arrow":r,style:{top:`${j.top}px`,left:`${j.left}px`},...m,children:n&&e.jsx("span",{role:"tooltip",className:b.tooltipLabel,children:n})})})]})});i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:'"top"',computed:!1},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreTooltipProps","Omit"]};const ft={title:"Tooltip",component:i,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},st=e.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),p={args:{label:"Tooltip",children:st}},x={args:p.args,render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[e.jsx(i,{...t,position:"top"}),e.jsx(i,{...t,position:"bottom"}),e.jsx(i,{...t,position:"left"}),e.jsx(i,{...t,position:"right"})]})},h={args:p.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{...t,alignment:"start"}),e.jsx(i,{...t,alignment:"center"}),e.jsx(i,{...t,alignment:"end"})]})},y={args:p.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{...t,arrow:!0}),e.jsx(i,{...t,arrow:!1})]})},v={args:p.args,render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(i,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(i,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(i,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(i,{...t,position:"auto"})})]})},w={args:p.args,render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(i,{...t})}),play:async({canvasElement:t})=>{var r;const s=(r=R(t).queryByText("Hover Me!"))==null?void 0:r.parentElement;await Z.tab();const n=R(document.body).getByRole("tooltip");T(s).toHaveFocus(),await E(()=>T(n).toBeVisible())}};var _,P,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(D=(P=p.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var O,A,S;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(S=(A=x.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var N,q,F;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(q=h.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var V,L,H;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(L=y.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var M,X,Y;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var k,W,G;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(G=(W=w.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const xt=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{h as Alignment,y as Arrow,v as AutoPlacement,p as Default,w as KeyboardInteraction,x as Position,xt as __namedExportsOrder,ft as default};
