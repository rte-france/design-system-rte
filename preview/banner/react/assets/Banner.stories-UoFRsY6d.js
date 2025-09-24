import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as y,u as f,e as B,a as ne}from"./index-DaW6VCyr.js";import{r as i}from"./index-G8LIXM5I.js";import{B as v}from"./Button-B-hhLjRd.js";import{S as ae}from"./Switch-CZr50hBc.js";import{u as te}from"./useAnimatedMount-_zPBpYOt.js";import{I as se}from"./Icon-DjEid3Hw.js";import{I as re}from"./IconButton-CY-isvho.js";import{c as oe}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const le="_banner_a2amh_3",l={"banner-container":"_banner-container_a2amh_3",banner:le,"banner-icon":"_banner-icon_a2amh_46","banner-close-icon":"_banner-close-icon_a2amh_54","banner-content":"_banner-content_a2amh_57","banner-title":"_banner-title_a2amh_67","banner-message":"_banner-message_a2amh_76"},c=i.forwardRef(({title:t,message:s,type:n="alert",closable:a=!1,showIcon:d=!1,onClose:o,position:C="push",actionCallback:j,actionLabel:x,className:M="",isOpen:w=!0,...G},J)=>{const[Q,k]=i.useState(w),X=n==="default"?"status":"alert",{shouldRender:Y,isAnimating:Z}=te(Q,200);if(i.useEffect(()=>{k(w)},[w]),a===!1&&C==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const ee=()=>{k(!1),o==null||o()};return Y&&e.jsx("section",{role:X,className:oe(l["banner-container"],M),ref:J,"data-type":n,"data-position":C,"data-open":Z||void 0,...G,children:e.jsxs("div",{className:l.banner,children:[d&&e.jsx("div",{className:l["banner-icon"],children:e.jsx(se,{name:n==="default"?"info":"error",size:32})}),e.jsxs("div",{className:l["banner-content"],children:[e.jsx("span",{className:l["banner-title"],children:t}),e.jsxs("div",{className:l["banner-message"],children:[e.jsx("span",{children:s}),j&&x&&e.jsx(v,{label:x,onClick:j,variant:"neutral","aria-label":x})]})]}),a&&e.jsx("div",{className:l["banner-close-icon"],children:e.jsx(re,{variant:"neutral",name:"close",onClick:ee,"aria-label":"close banner"})})]})})});c.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{required:!1,tsType:{name:"union",raw:'"default" | "alert"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"alert"'}]},description:"",defaultValue:{value:'"alert"',computed:!1}},message:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"overlay" | "push"',elements:[{name:"literal",value:'"overlay"'},{name:"literal",value:'"push"'}]},description:"",defaultValue:{value:'"push"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionLabel:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const we={title:"Banner",component:c,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["default","alert"]},closable:{control:"boolean"},showIcon:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},r={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"default"}},u={args:{...r.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"alert"}},p={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(c,{...t,showIcon:!0}),e.jsx(c,{...u.args,showIcon:!0})]})},h={args:{...r.args,closable:!0},render:t=>{const[s,n]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(c,{...t,showIcon:!0,closable:!0,isOpen:s,onClose:()=>n(!1)}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>n(a=>!a),style:{marginTop:"16px"}})]})}},m={args:{...r.args,actionLabel:"Voir les détails",showIcon:!0,actionCallback:()=>{console.log("Action button clicked")}}},g={args:{...r.args,closable:!0},render:t=>{const[s,n]=i.useState(!1),[a,d]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(c,{...t,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:s,position:a?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>n(o=>!o),style:{marginTop:"16px"}}),e.jsx(ae,{label:`${a?"Overlay":"Push"} mode`,checked:a,onChange:()=>d(o=>!o)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},b={args:{...r.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:t=>{const[s,n]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(c,{...t,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:s}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>n(a=>!a),style:{marginTop:"16px"}})]})},play:async({canvasElement:t})=>{const n=await y(t).getByRole("status"),a=await y(n).getAllByRole("button")[0],d=await y(n).getAllByRole("button")[1];await f.tab(),B(a).toHaveFocus(),await f.tab(),B(d).toHaveFocus(),await f.keyboard("{Enter}"),await ne(()=>B(n).not.toBeInTheDocument())}};var S,I,_;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "default"
  }
}`,...(_=(I=r.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var O,T,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "alert"
  }
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var q,A,E;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Banner {...args} showIcon />
        <Banner {...Alert.args} showIcon />
      </div>;
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var H,N,R;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closable: true
  },
  render: args => {
    const [showBanner, setShowBanner] = useState(false);
    return <div>
        <Banner {...args} showIcon closable isOpen={showBanner} onClose={() => setShowBanner(false)} />
        <Button label={showBanner ? "Hide banner" : "Show banner"} onClick={() => setShowBanner(prev => !prev)} style={{
        marginTop: "16px"
      }} />
      </div>;
  }
}`,...(R=(N=h.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var V,F,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    showIcon: true,
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var W,P,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closable: true
  },
  render: args => {
    const [showBanner, setShowBanner] = useState(false);
    const [isOverlay, setIsOverlay] = useState(true);
    return <>
        <Banner {...args} showIcon closable onClose={() => setShowBanner(false)} isOpen={showBanner} position={isOverlay ? "overlay" : "push"} />
        <div style={{
        gap: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "10px"
      }}>
          <Button label={showBanner ? "Hide banner" : "Show banner"} onClick={() => setShowBanner(prev => !prev)} style={{
          marginTop: "16px"
        }} />
          <Switch label={\`\${isOverlay ? "Overlay" : "Push"} mode\`} checked={isOverlay} onChange={() => setIsOverlay(prev => !prev)} />
          <div style={{
          width: "100%",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap"
        }}>
            <div style={{
            width: "200px",
            height: "300px",
            backgroundColor: "#e1e1e0"
          }}></div>
            <div style={{
            width: "400px",
            height: "300px",
            backgroundColor: "#e1e1e0"
          }}></div>
            <div style={{
            width: "200px",
            height: "300px",
            backgroundColor: "#e1e1e0"
          }}></div>
            <div style={{
            width: "400px",
            height: "300px",
            backgroundColor: "#e1e1e0"
          }}></div>
            <div style={{
            width: "200px",
            height: "300px",
            backgroundColor: "#e1e1e0"
          }}></div>
            <div style={{
            width: "200px",
            height: "300px",
            backgroundColor: "#e1e1e0"
          }}></div>
            <div style={{
            width: "200px",
            height: "300px",
            backgroundColor: "#e1e1e0"
          }}></div>
            <div style={{
            width: "200px",
            height: "300px",
            backgroundColor: "#e1e1e0"
          }}></div>
            <div style={{
            width: "400px",
            height: "300px",
            backgroundColor: "#e1e1e0"
          }}></div>
          </div>
        </div>
      </>;
  }
}`,...(z=(P=g.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var K,U,$;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closable: true,
    isOpen: true,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    }
  },
  render: args => {
    const [showBanner, setShowBanner] = useState(true);
    return <>
        <Banner {...args} showIcon closable onClose={() => setShowBanner(false)} isOpen={showBanner} />
        <Button label={showBanner ? "Hide banner" : "Show banner"} onClick={() => setShowBanner(prev => !prev)} style={{
        marginTop: "16px"
      }} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const banner = await canvas.getByRole("status");
    const actionButton = await within(banner).getAllByRole("button")[0];
    const closeButton = await within(banner).getAllByRole("button")[1];
    await userEvent.tab();
    expect(actionButton).toHaveFocus();
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(banner).not.toBeInTheDocument());
  }
}`,...($=(U=b.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const ye=["Default","Alert","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{u as Alert,h as Closable,r as Default,b as KeyboardInteraction,g as Overlay,m as WithAction,p as WithIcon,ye as __namedExportsOrder,we as default};
