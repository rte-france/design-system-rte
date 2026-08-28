import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as S,u as w,e as k,a as ie}from"./index-4rjIhT2C.js";import{r as l}from"./index-G8LIXM5I.js";import{f as ce}from"./testing.utils-mIZIUNbM.js";import{B as v}from"./Button-KJfdYR4G.js";import{S as de}from"./Switch-BHK9jbFU.js";import{I as pe}from"./Badge-DkJhvK8e.js";import"./timepicker.constants-CynrC_9x.js";import{u as ue}from"./useAnimatedMount-_zPBpYOt.js";import{I as O}from"./Icon-DgLH6pPJ.js";import{i as me}from"./IconButton.module-DsipBz7u.js";import{c as _}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";const ge="Fermer la bannière",be="_banner_1nvq7_1",c={banner:be,"banner-content":"_banner-content_1nvq7_34","banner-title":"_banner-title_1nvq7_37","banner-message":"_banner-message_1nvq7_46","banner-icon":"_banner-icon_1nvq7_70","banner-close-button":"_banner-close-button_1nvq7_78"},o=l.forwardRef(({title:n,message:s,type:a="alert",closable:r=!1,onClose:d,position:i="push",actionCallback:B,actionLabel:f,className:Z="",isOpen:y=!0,isCompact:C=!1,...ee},ne)=>{const[ae,j]=l.useState(y),se=a==="error"?"alert":"status",{shouldRender:re,isAnimating:te}=ue(ae,200),oe={info:"info",error:"dangerous",success:"check-circle",warning:"warning"};if(l.useEffect(()=>{j(y)},[y]),r===!1&&i==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const le=()=>{j(!1),d==null||d()};return re&&e.jsxs("section",{role:se,className:_(c.banner,Z),ref:ne,"data-type":a,"data-position":i,"data-compact":C?"true":void 0,"data-open":te||void 0,...ee,children:[e.jsx("div",{className:c["banner-icon"],children:e.jsx(O,{name:oe[a],size:32})}),e.jsxs("div",{className:c["banner-content"],children:[n&&e.jsx("span",{className:c["banner-title"],children:n}),s&&e.jsx("div",{className:c["banner-message"],children:e.jsx("span",{children:s})})]}),B&&f&&e.jsx(v,{label:f,onClick:B,variant:"text","aria-label":f,size:C?"s":"m"}),r&&e.jsx("button",{type:"button",className:_(me["icon-button"],c["banner-close-button"]),"data-size":"m","data-variant":"neutral","data-compact-spacing":!0,"aria-label":ge,onClick:le,children:e.jsx(O,{name:"close",size:pe.m})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"alert"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreBannerProps"]};const qe={title:"Composants/Banner/Banner",component:o,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["info","error","success","warning"]},isCompact:{control:"boolean"},closable:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},t={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"info",actionLabel:"Voir les détails",closable:!0}},p={args:{...t.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"error"}},u={args:{...t.args,isCompact:!0,message:"Sample banner message.",actionLabel:"Visualiser",closable:!0},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{...n,isCompact:!0}),e.jsx(o,{...n,isCompact:!1})]})},m={args:{...t.args},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{...n}),e.jsx(o,{...p.args})]})},g={args:{...t.args,closable:!0},render:n=>{const[s,a]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{...n,closable:!0,isOpen:s,onClose:()=>a(!1)}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>a(r=>!r),style:{marginTop:"16px"}})]})}},b={args:{...t.args,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}}},h={args:{...t.args,closable:!0},render:n=>{const[s,a]=l.useState(!1),[r,d]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...n,closable:!0,onClose:()=>a(!1),isOpen:s,position:r?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>a(i=>!i),style:{marginTop:"16px"}}),e.jsx(de,{label:`${r?"Overlay":"Push"} mode`,checked:r,onChange:()=>d(i=>!i)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},x={args:{...t.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:n=>{const[s,a]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...n,closable:!0,onClose:()=>a(!1),isOpen:s}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>a(r=>!r),style:{marginTop:"16px"}})]})},play:async({canvasElement:n})=>{const s=S(n);ce(n);const a=await s.getByRole("status"),r=await S(a).getAllByRole("button")[1];await w.tab(),await w.tab(),k(r).toHaveFocus(),await w.keyboard("{Enter}"),await ie(()=>k(a).not.toBeInTheDocument())}};var I,D,q;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "info",
    actionLabel: "Voir les détails",
    closable: true
  }
}`,...(q=(D=t.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var A,E,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "error"
  }
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var T,L,N;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCompact: true,
    message: "Sample banner message.",
    actionLabel: "Visualiser",
    closable: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Banner {...args} isCompact />
        <Banner {...args} isCompact={false} />
      </div>;
  }
}`,...(N=(L=u.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var H,R,z;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Banner {...args} />
        <Banner {...Alert.args} />
      </div>;
  }
}`,...(z=(R=m.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var F,W,P;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closable: true
  },
  render: args => {
    const [showBanner, setShowBanner] = useState(false);
    return <div>
        <Banner {...args} closable isOpen={showBanner} onClose={() => setShowBanner(false)} />
        <Button label={showBanner ? "Hide banner" : "Show banner"} onClick={() => setShowBanner(prev => !prev)} style={{
        marginTop: "16px"
      }} />
      </div>;
  }
}`,...(P=(W=g.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var K,M,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(U=(M=b.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var $,G,J;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closable: true
  },
  render: args => {
    const [showBanner, setShowBanner] = useState(false);
    const [isOverlay, setIsOverlay] = useState(true);
    return <>
        <Banner {...args} closable onClose={() => setShowBanner(false)} isOpen={showBanner} position={isOverlay ? "overlay" : "push"} />
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
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        <Banner {...args} closable onClose={() => setShowBanner(false)} isOpen={showBanner} />
        <Button label={showBanner ? "Hide banner" : "Show banner"} onClick={() => setShowBanner(prev => !prev)} style={{
        marginTop: "16px"
      }} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent(canvasElement);
    const banner = await canvas.getByRole("status");
    const closeButton = await within(banner).getAllByRole("button")[1];
    await userEvent.tab();
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(banner).not.toBeInTheDocument());
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ae=["Default","Alert","Compact","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{p as Alert,g as Closable,u as Compact,t as Default,x as KeyboardInteraction,h as Overlay,b as WithAction,m as WithIcon,Ae as __namedExportsOrder,qe as default};
