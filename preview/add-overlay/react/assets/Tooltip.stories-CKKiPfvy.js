import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as I,u as rt,e as _,a as it}from"./index-DaW6VCyr.js";import{r as a}from"./index-G8LIXM5I.js";import{r as st}from"./index-DoK7PxrN.js";import{c as lt}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const A=4,P=9,at=(t,o,r,e=0)=>{const i=t.parentElement;if(!i)return r;const l=t.getBoundingClientRect(),g=parseInt(getComputedStyle(o).getPropertyValue("max-width")),p=parseInt(getComputedStyle(o).getPropertyValue("max-height")),d=i.getBoundingClientRect(),m={top:l.top-d.top>p+e,right:d.right-l.right>g+e,bottom:d.bottom-l.bottom>=p+e,left:l.left-d.left>g+e};return m.top?"top":m.bottom?"bottom":m.left?"left":m.right?"right":r},dt=(t,o,r,e=0)=>{let i=0,l=0;return t==="bottom"?(i=o.getBoundingClientRect().bottom+window.scrollY+e,l=o.getBoundingClientRect().left+window.scrollX+o.getBoundingClientRect().width/2-r.getBoundingClientRect().width/2):t==="left"?(i=o.getBoundingClientRect().top+window.scrollY+o.getBoundingClientRect().height/2-r.getBoundingClientRect().height/2,l=o.getBoundingClientRect().left+window.scrollX-r.getBoundingClientRect().width-e):t==="right"?(i=o.getBoundingClientRect().top+window.scrollY+o.getBoundingClientRect().height/2-r.getBoundingClientRect().height/2,l=o.getBoundingClientRect().right+window.scrollX+e):(t==="top"||!t)&&(i=o.getBoundingClientRect().top+window.scrollY-r.getBoundingClientRect().height-e,l=o.getBoundingClientRect().left+window.scrollX+o.getBoundingClientRect().width/2-r.getBoundingClientRect().width/2),{top:i,left:l}},ct=(t,o=300)=>{const[r,e]=a.useState(t),[i,l]=a.useState(!1);return a.useEffect(()=>{if(t&&!r)e(!0),requestAnimationFrame(()=>{l(!0)});else if(!t&&r){l(!1);const g=setTimeout(()=>{e(!1)},o);return()=>clearTimeout(g)}},[t,r,o]),{shouldRender:r,isAnimating:i}},z=({children:t})=>{const[o,r]=a.useState(null);return a.useEffect(()=>{let e=document.getElementById("overlay-root");return e||(e=document.createElement("div"),e.setAttribute("id","overlay-root"),e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.pointerEvents="none",e.style.zIndex="1000",document.body.appendChild(e)),r(e),()=>{e&&e.parentNode&&e.children.length===0&&document.body.removeChild(e)}},[]),o?n.jsx(n.Fragment,{children:st.createPortal(t,o)}):null};z.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const pt="_tooltip_1n5g5_3",ut="_tooltipLabel_1n5g5_25",R={"tooltip-trigger":"_tooltip-trigger_1n5g5_3",tooltip:pt,tooltipLabel:ut},s=a.forwardRef(({children:t,position:o="top",alignment:r="center",label:e,arrow:i=!0,className:l="",...g},p)=>{const d=a.useRef(null),m=a.useRef(null),[f,U]=a.useState(null),[J,Q]=a.useState(o),[T,Z]=a.useState({top:0,left:0}),[C,b]=a.useState(!1),{shouldRender:tt,isAnimating:et}=ct(C,150),nt=a.useCallback(u=>{m.current=u,U(u),typeof p=="function"?p(u):p&&(p.current=u)},[p]);a.useEffect(()=>{if(C&&d.current&&f){const u=o==="auto"?at(d.current,f,"top",i?P:A):o,ot=dt(u,d.current,f,i?P:A);Q(u),Z(ot)}},[C,o,i,f]);const j=()=>{b(!0)},B=()=>{b(!1)};return n.jsxs("div",{ref:d,className:R["tooltip-trigger"],onMouseEnter:j,onMouseLeave:B,onFocus:j,onBlur:B,tabIndex:0,children:[t,tt&&n.jsx(z,{children:n.jsx("div",{ref:nt,className:lt(R.tooltip,l),"data-position":J,"data-open":et||void 0,"data-alignment":r,"data-arrow":i,style:{top:`${T.top}px`,left:`${T.left}px`},...g,children:e&&n.jsx("span",{role:"tooltip",className:R.tooltipLabel,children:e})})})]})});s.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:'"top"',computed:!1},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreTooltipProps","Omit"]};const Rt={title:"Tooltip",component:s,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},gt=n.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),c={args:{label:"Tooltip",children:gt}},x={args:c.args,render:t=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[n.jsx(s,{...t,position:"top"}),n.jsx(s,{...t,position:"bottom"}),n.jsx(s,{...t,position:"left"}),n.jsx(s,{...t,position:"right"})]})},h={args:c.args,render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(s,{...t,alignment:"start"}),n.jsx(s,{...t,alignment:"center"}),n.jsx(s,{...t,alignment:"end"})]})},y={args:c.args,render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(s,{...t,arrow:!0}),n.jsx(s,{...t,arrow:!1})]})},v={args:c.args,render:t=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[n.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:n.jsx(s,{...t,position:"auto"})}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:n.jsx(s,{...t,position:"auto"})}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:n.jsx(s,{...t,position:"auto"})}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:n.jsx(s,{...t,position:"auto"})})]})},w={args:c.args,render:t=>n.jsx("div",{style:{display:"flex",gap:8},children:n.jsx(s,{...t})}),play:async({canvasElement:t})=>{var i;const r=(i=I(t).queryByText("Hover Me!"))==null?void 0:i.parentElement;await rt.tab();const e=I(document.body).getByRole("tooltip");_(r).toHaveFocus(),await it(()=>_(e).toBeVisible())}};var S,O,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var N,q,F;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(q=x.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var V,L,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(L=h.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var M,k,X;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(X=(k=y.parameters)==null?void 0:k.docs)==null?void 0:X.source}}};var Y,W,E;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(E=(W=v.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var G,K,$;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...($=(K=w.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};const Tt=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{h as Alignment,y as Arrow,v as AutoPlacement,c as Default,w as KeyboardInteraction,x as Position,Tt as __namedExportsOrder,Rt as default};
