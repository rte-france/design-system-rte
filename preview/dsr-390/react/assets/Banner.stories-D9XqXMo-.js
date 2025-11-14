import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as f,u as y,e as B,a as ae}from"./index-DCXJbAaW.js";import{r as l}from"./index-G8LIXM5I.js";import{B as v}from"./Button-BGjTm3Lt.js";import{S as se}from"./Switch-BKNj42Vr.js";import{u as oe}from"./useAnimatedMount-_zPBpYOt.js";import{I as re}from"./Icon-DjEid3Hw.js";import{I as te}from"./IconButton-DLtPB6Kc.js";import{c as le}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-yqZBktoR.js";const ie="_banner_1pvbu_3",c={banner:ie,"banner-icon":"_banner-icon_1pvbu_46","banner-close-icon":"_banner-close-icon_1pvbu_54","banner-content":"_banner-content_1pvbu_57","banner-title":"_banner-title_1pvbu_67","banner-message":"_banner-message_1pvbu_79"},i=l.forwardRef(({title:a,message:s,type:n="alert",closable:o=!1,showIcon:u=!1,onClose:t,position:C="push",actionCallback:j,actionLabel:x,className:$="",isOpen:w=!0,...G},J)=>{const[Q,k]=l.useState(w),X=n==="error"?"alert":"status",{shouldRender:Y,isAnimating:Z}=oe(Q,200),ee={info:"info",error:"dangerous",success:"check-circle",warning:"warning"};if(l.useEffect(()=>{k(w)},[w]),o===!1&&C==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const ne=()=>{k(!1),t==null||t()};return Y&&e.jsxs("section",{role:X,className:le(c.banner,$),ref:J,"data-type":n,"data-position":C,"data-open":Z||void 0,...G,children:[u&&e.jsx("div",{className:c["banner-icon"],children:e.jsx(re,{name:ee[n],size:32})}),e.jsxs("div",{className:c["banner-content"],children:[a&&e.jsx("span",{className:c["banner-title"],children:a}),s&&e.jsx("div",{className:c["banner-message"],children:e.jsx("span",{children:s})})]}),j&&x&&e.jsx(v,{label:x,onClick:j,variant:"text","aria-label":x,size:"s"}),o&&e.jsx("div",{className:c["banner-close-icon"],children:e.jsx(te,{variant:"neutral",name:"close",onClick:ne,"aria-label":"close banner"})})]})});i.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"alert"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},showIcon:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CoreBannerProps"]};const ye={title:"Banner",component:i,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["info","error","success","warning"]},closable:{control:"boolean"},showIcon:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},r={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"info",showIcon:!0,actionLabel:"Voir les détails",closable:!0}},d={args:{...r.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"error"}},p={args:{...r.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{...a,showIcon:!0}),e.jsx(i,{...d.args,showIcon:!0})]})},h={args:{...r.args,closable:!0},render:a=>{const[s,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{...a,showIcon:!0,closable:!0,isOpen:s,onClose:()=>n(!1)}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>n(o=>!o),style:{marginTop:"16px"}})]})}},b={args:{...r.args,actionLabel:"Voir les détails",showIcon:!0,actionCallback:()=>{console.log("Action button clicked")}}},g={args:{...r.args,closable:!0},render:a=>{const[s,n]=l.useState(!1),[o,u]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{...a,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:s,position:o?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>n(t=>!t),style:{marginTop:"16px"}}),e.jsx(se,{label:`${o?"Overlay":"Push"} mode`,checked:o,onChange:()=>u(t=>!t)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},m={args:{...r.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:a=>{const[s,n]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{...a,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:s}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>n(o=>!o),style:{marginTop:"16px"}})]})},play:async({canvasElement:a})=>{const n=await f(a).getByRole("status"),o=await f(n).getAllByRole("button")[0],u=await f(n).getAllByRole("button")[1];await y.tab(),B(o).toHaveFocus(),await y.tab(),B(u).toHaveFocus(),await y.keyboard("{Enter}"),await ae(()=>B(n).not.toBeInTheDocument())}};var I,S,O;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "info",
    showIcon: true,
    actionLabel: "Voir les détails",
    closable: true
  }
}`,...(O=(S=r.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var _,D,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "error"
  }
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var E,T,V;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,H,R;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var N,F,L;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    showIcon: true,
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(L=(F=b.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var W,P,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(P=g.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var K,M,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(M=m.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const Be=["Default","Alert","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{d as Alert,h as Closable,r as Default,m as KeyboardInteraction,g as Overlay,b as WithAction,p as WithIcon,Be as __namedExportsOrder,ye as default};
