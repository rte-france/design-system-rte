import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as R,u as Q,e as T,a as Z}from"./index-DaW6VCyr.js";import{r as p}from"./index-G8LIXM5I.js";import{r as E}from"./index-DoK7PxrN.js";import{c as tt}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const B=4,et=(t,o,s,n=0)=>{const r=t.getBoundingClientRect(),a=t.parentElement,m=parseInt(getComputedStyle(o).getPropertyValue("max-width")),g=parseInt(getComputedStyle(o).getPropertyValue("max-height"));if(!a)return s;const l=a.getBoundingClientRect(),d={top:r.top-l.top>g+n,right:l.right-r.right>m+n,bottom:l.bottom-r.bottom>=g+n,left:r.left-l.left>m+n};return d.top?"top":d.bottom?"bottom":d.left?"left":d.right?"right":s},ot=(t,o,s,n=0)=>{let r=0,a=0;return t==="bottom"?(r=o.getBoundingClientRect().bottom+window.scrollY+n,a=o.getBoundingClientRect().left+window.scrollX+o.getBoundingClientRect().width/2-s.getBoundingClientRect().width/2):t==="left"?(r=o.getBoundingClientRect().top+window.scrollY+o.getBoundingClientRect().height/2-s.getBoundingClientRect().height/2,a=o.getBoundingClientRect().left+window.scrollX-s.getBoundingClientRect().width-n):t==="right"?(r=o.getBoundingClientRect().top+window.scrollY+o.getBoundingClientRect().height/2-s.getBoundingClientRect().height/2,a=o.getBoundingClientRect().right+window.scrollX+n):(t==="top"||!t)&&(r=o.getBoundingClientRect().top+window.scrollY-s.getBoundingClientRect().height-n,a=o.getBoundingClientRect().left+window.scrollX+o.getBoundingClientRect().width/2-s.getBoundingClientRect().width/2),{top:r,left:a}},W=({children:t})=>{const[o,s]=p.useState(null);return p.useEffect(()=>{let n=document.getElementById("overlay-root"),r=!1;return n||(n=document.createElement("div"),n.setAttribute("id","overlay-root"),document.body.appendChild(n)),r=!0,s(n),()=>{r&&n&&n.parentNode&&document.body.removeChild(n)}},[]),o?e.jsx(e.Fragment,{children:E.createPortal(t,o)}):null};W.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const nt="_tooltip_12oq2_3",rt="_tooltipLabel_12oq2_25",b={"tooltip-trigger":"_tooltip-trigger_12oq2_3",tooltip:nt,tooltipLabel:rt},i=p.forwardRef(({children:t,position:o="top",alignment:s="center",label:n,arrow:r=!0,className:a="",...m},g)=>{const l=p.useRef(null),d=p.useRef(null),[$,G]=p.useState(o),[j,U]=p.useState({top:0,left:0}),[C,z]=p.useState(!1);p.useEffect(()=>{if(C&&l.current&&d.current){const u=o==="auto"?et(l.current,d.current,"top",B):o,J=ot(u,l.current,d.current,B);G(u),U(J)}},[C,o]);const f=()=>{z(u=>!u)};return e.jsxs("div",{ref:l,className:b["tooltip-trigger"],onMouseEnter:f,onMouseLeave:f,onFocus:f,onBlur:f,tabIndex:0,children:[t,e.jsx(W,{children:e.jsx("div",{ref:u=>{d.current=u,typeof g=="function"?g(u):g&&(g.current=u)},className:tt(b.tooltip,a),"data-position":$,"data-open":C||void 0,"data-alignment":s,"data-arrow":r,style:{top:`${j.top}px`,left:`${j.left}px`},...m,children:n&&e.jsx("span",{role:"tooltip",className:b.tooltipLabel,children:n})})})]})});i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:'"top"',computed:!1},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreTooltipProps","Omit"]};const mt={title:"Tooltip",component:i,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},it=e.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),c={args:{label:"Tooltip",children:it}},x={args:c.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{...t,position:"top"}),e.jsx(i,{...t,position:"bottom"}),e.jsx(i,{...t,position:"left"}),e.jsx(i,{...t,position:"right"})]})},h={args:c.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{...t,alignment:"start"}),e.jsx(i,{...t,alignment:"center"}),e.jsx(i,{...t,alignment:"end"})]})},y={args:c.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{...t,arrow:!0}),e.jsx(i,{...t,arrow:!1})]})},v={args:c.args,render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(i,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(i,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(i,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(i,{...t,position:"auto"})})]})},w={args:c.args,render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(i,{...t})}),play:async({canvasElement:t})=>{var r;const s=(r=R(t).queryByText("Hover Me!"))==null?void 0:r.parentElement;await Q.tab();const n=R(document.body).getByRole("tooltip");T(s).toHaveFocus(),await Z(()=>T(n).toBeVisible())}};var I,_,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var S,q,D;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(q=x.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var N,A,O;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(A=h.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var F,V,H;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(K=(k=w.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};const ft=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{h as Alignment,y as Arrow,v as AutoPlacement,c as Default,w as KeyboardInteraction,x as Position,ft as __namedExportsOrder,mt as default};
