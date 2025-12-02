import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as f,u as y,e as B,a as ne}from"./index-DCXJbAaW.js";import{r as i}from"./index-G8LIXM5I.js";import{B as v}from"./Button-cobwPeAi.js";import{S as ae}from"./Switch-BKNj42Vr.js";import{u as se}from"./useAnimatedMount-_zPBpYOt.js";import{I as te}from"./Icon-DjEid3Hw.js";import{I as re}from"./IconButton-DU9lNzF3.js";import{c as oe}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";const le="_banner_1pveu_3",l={"banner-container":"_banner-container_1pveu_3",banner:le,"banner-icon":"_banner-icon_1pveu_46","banner-close-icon":"_banner-close-icon_1pveu_54","banner-content":"_banner-content_1pveu_57","banner-title":"_banner-title_1pveu_67","banner-message":"_banner-message_1pveu_76"},c=i.forwardRef(({title:a,message:s,type:n="alert",closable:t=!1,showIcon:u=!1,onClose:o,position:j="push",actionCallback:C,actionLabel:x,className:M="",isOpen:w=!0,...G},J)=>{const[Q,k]=i.useState(w),X=n==="default"?"status":"alert",{shouldRender:Y,isAnimating:Z}=se(Q,200);if(i.useEffect(()=>{k(w)},[w]),t===!1&&j==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const ee=()=>{k(!1),o==null||o()};return Y&&e.jsx("section",{role:X,className:oe(l["banner-container"],M),ref:J,"data-type":n,"data-position":j,"data-open":Z||void 0,...G,children:e.jsxs("div",{className:l.banner,children:[u&&e.jsx("div",{className:l["banner-icon"],children:e.jsx(te,{name:n==="default"?"info":"error",size:32})}),e.jsxs("div",{className:l["banner-content"],children:[a&&e.jsx("span",{className:l["banner-title"],children:a}),s&&e.jsxs("div",{className:l["banner-message"],children:[e.jsx("span",{children:s}),C&&x&&e.jsx(v,{label:x,onClick:C,variant:"neutral","aria-label":x,size:"s"})]})]}),t&&e.jsx("div",{className:l["banner-close-icon"],children:e.jsx(re,{variant:"neutral",name:"close",onClick:ee,"aria-label":"close banner"})})]})})});c.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"alert"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},showIcon:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CoreBannerProps"]};const ye={title:"Banner",component:c,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["default","alert"]},closable:{control:"boolean"},showIcon:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},r={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"default"}},d={args:{...r.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"alert"}},p={args:{...r.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(c,{...a,showIcon:!0}),e.jsx(c,{...d.args,showIcon:!0})]})},h={args:{...r.args,closable:!0},render:a=>{const[s,n]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(c,{...a,showIcon:!0,closable:!0,isOpen:s,onClose:()=>n(!1)}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>n(t=>!t),style:{marginTop:"16px"}})]})}},g={args:{...r.args,actionLabel:"Voir les détails",showIcon:!0,actionCallback:()=>{console.log("Action button clicked")}}},b={args:{...r.args,closable:!0},render:a=>{const[s,n]=i.useState(!1),[t,u]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(c,{...a,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:s,position:t?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>n(o=>!o),style:{marginTop:"16px"}}),e.jsx(ae,{label:`${t?"Overlay":"Push"} mode`,checked:t,onChange:()=>u(o=>!o)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},m={args:{...r.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:a=>{const[s,n]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(c,{...a,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:s}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>n(t=>!t),style:{marginTop:"16px"}})]})},play:async({canvasElement:a})=>{const n=await f(a).getByRole("status"),t=await f(n).getAllByRole("button")[0],u=await f(n).getAllByRole("button")[1];await y.tab(),B(t).toHaveFocus(),await y.tab(),B(u).toHaveFocus(),await y.keyboard("{Enter}"),await ne(()=>B(n).not.toBeInTheDocument())}};var S,I,_;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "default"
  }
}`,...(_=(I=r.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var O,D,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "alert"
  }
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var E,T,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var H,N,R;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(N=h.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var V,F,W;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    showIcon: true,
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(W=(F=g.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var L,P,z;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(P=b.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var K,U,$;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...($=(U=m.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const Be=["Default","Alert","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{d as Alert,h as Closable,r as Default,m as KeyboardInteraction,b as Overlay,g as WithAction,p as WithIcon,Be as __namedExportsOrder,ye as default};
