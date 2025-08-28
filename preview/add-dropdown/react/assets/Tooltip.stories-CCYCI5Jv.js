import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as I,u as se,e as R,a as re}from"./index-DaW6VCyr.js";import{u as ae,g as ie,a as le,O as pe}from"./Overlay-BF4gWZr2.js";import{r as n}from"./index-G8LIXM5I.js";import{c as de}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./index-DoK7PxrN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const _=4,E=9,ce="_tooltip_1n5g5_3",ue="_tooltipLabel_1n5g5_25",T={"tooltip-trigger":"_tooltip-trigger_1n5g5_3",tooltip:ce,tooltipLabel:ue},o=n.forwardRef(({children:t,position:i="top",alignment:h="center",label:p,arrow:r=!0,className:U="",...z},l)=>{const d=n.useRef(null),J=n.useRef(null),[c,Q]=n.useState(null),[X,Y]=n.useState(i),[j,Z]=n.useState({top:0,left:0}),[v,b]=n.useState(!1),{shouldRender:ee,isAnimating:te}=ae(v,150),oe=n.useCallback(a=>{J.current=a,Q(a),typeof l=="function"?l(a):l&&(l.current=a)},[l]),u=n.useCallback(()=>{if(v&&d.current&&c){const a=i==="auto"?ie(d.current,c,"top",r?E:_):i,ne=le(a,d.current,c,r?E:_);Y(a),Z(ne)}},[v,i,r,c]);n.useEffect(()=>(u(),window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}),[u]);const w=()=>{b(!0)},C=()=>{b(!1)};return e.jsxs("div",{ref:d,className:T["tooltip-trigger"],onMouseEnter:w,onMouseLeave:C,onFocus:w,onBlur:C,tabIndex:0,children:[t,ee&&e.jsx(pe,{children:e.jsx("div",{ref:oe,className:de(T.tooltip,U),"data-position":X,"data-open":te||void 0,"data-alignment":h,"data-arrow":r,style:{top:`${j.top}px`,left:`${j.left}px`},...z,children:p&&e.jsx("span",{role:"tooltip",className:T.tooltipLabel,children:p})})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:'"top"',computed:!1},required:!1},alignment:{defaultValue:{value:'"center"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreTooltipProps","Omit"]};const we={title:"Tooltip",component:o,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"]},alignment:{control:"select",options:["start","center","end"]},label:{control:"text"},arrow:{control:"boolean"}},args:{label:"Tooltip Text",position:"top",alignment:"center",arrow:!0},parameters:{layout:"centered"}},ge=e.jsx("span",{style:{textDecoration:"underline",textDecorationColor:"#BF4C00",textDecorationThickness:"2px",textUnderlineOffset:"4px",color:"#BF4C00",fontWeight:"bold"},children:"Hover Me!"}),s={args:{label:"Tooltip",children:ge}},g={args:s.args,render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[e.jsx(o,{...t,position:"top"}),e.jsx(o,{...t,position:"bottom"}),e.jsx(o,{...t,position:"left"}),e.jsx(o,{...t,position:"right"})]})},m={args:s.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{...t,alignment:"start"}),e.jsx(o,{...t,alignment:"center"}),e.jsx(o,{...t,alignment:"end"})]})},f={args:s.args,render:t=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{...t,arrow:!0}),e.jsx(o,{...t,arrow:!1})]})},x={args:s.args,render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(o,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(o,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:75,height:250},children:e.jsx(o,{...t,position:"auto"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:250,height:50},children:e.jsx(o,{...t,position:"auto"})})]})},y={args:s.args,render:t=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{...t})}),play:async({canvasElement:t})=>{var r;const h=(r=I(t).queryByText("Hover Me!"))==null?void 0:r.parentElement;await se.tab();const p=I(document.body).getByRole("tooltip");R(h).toHaveFocus(),await re(()=>R(p).toBeVisible())}};var P,A,D;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Tooltip",
    children: mockChildren
  }
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var O,S,B;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(S=g.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var L,N,q;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var F,k,M;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(k=f.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var V,H,G;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(H=x.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var K,W,$;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...($=(W=y.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const Ce=["Default","Position","Alignment","Arrow","AutoPlacement","KeyboardInteraction"];export{m as Alignment,f as Arrow,x as AutoPlacement,s as Default,y as KeyboardInteraction,g as Position,Ce as __namedExportsOrder,we as default};
