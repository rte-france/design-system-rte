import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as k,u as w,e as S,a as oe}from"./index-4rjIhT2C.js";import{r as l}from"./index-G8LIXM5I.js";import{f as le}from"./testing.utils-mIZIUNbM.js";import{B as v}from"./Button-DVlmZND_.js";import{S as ie}from"./Switch-BHK9jbFU.js";import{u as ce}from"./useAnimatedMount-_zPBpYOt.js";import{I as de}from"./Icon-DgLH6pPJ.js";import{I as pe}from"./IconButton-en7B25KO.js";import{c as ue}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-DkJhvK8e.js";const me="_banner_175yf_1",c={banner:me,"banner-content":"_banner-content_175yf_35","banner-title":"_banner-title_175yf_38","banner-message":"_banner-message_175yf_47","banner-icon":"_banner-icon_175yf_71","banner-close-icon":"_banner-close-icon_175yf_79"},o=l.forwardRef(({title:n,message:s,type:a="alert",closable:r=!1,onClose:d,position:i="push",actionCallback:B,actionLabel:f,className:X="",isOpen:y=!0,isCompact:C=!1,...Y},Z)=>{const[ee,j]=l.useState(y),ne=a==="error"?"alert":"status",{shouldRender:ae,isAnimating:se}=ce(ee,200),re={info:"info",error:"dangerous",success:"check-circle",warning:"warning"};if(l.useEffect(()=>{j(y)},[y]),r===!1&&i==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const te=()=>{j(!1),d==null||d()};return ae&&e.jsxs("section",{role:ne,className:ue(c.banner,X),ref:Z,"data-type":a,"data-position":i,"data-compact":C?"true":void 0,"data-open":se||void 0,...Y,children:[e.jsx("div",{className:c["banner-icon"],children:e.jsx(de,{name:re[a],size:32})}),e.jsxs("div",{className:c["banner-content"],children:[n&&e.jsx("span",{className:c["banner-title"],children:n}),s&&e.jsx("div",{className:c["banner-message"],children:e.jsx("span",{children:s})})]}),B&&f&&e.jsx(v,{label:f,onClick:B,variant:"text","aria-label":f,size:C?"s":"m"}),r&&e.jsx("div",{className:c["banner-close-icon"],children:e.jsx(pe,{variant:"neutral",name:"close",onClick:te,"aria-label":"close banner",size:"s"})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"alert"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreBannerProps"]};const _e={title:"Composants/Banner/Banner",component:o,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["info","error","success","warning"]},isCompact:{control:"boolean"},closable:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},t={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"info",actionLabel:"Voir les détails",closable:!0}},p={args:{...t.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"error"}},u={args:{...t.args,isCompact:!0,message:"Sample banner message.",actionLabel:"Visualiser",closable:!0},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{...n,isCompact:!0}),e.jsx(o,{...n,isCompact:!1})]})},m={args:{...t.args},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{...n}),e.jsx(o,{...p.args})]})},g={args:{...t.args,closable:!0},render:n=>{const[s,a]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{...n,closable:!0,isOpen:s,onClose:()=>a(!1)}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>a(r=>!r),style:{marginTop:"16px"}})]})}},h={args:{...t.args,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}}},b={args:{...t.args,closable:!0},render:n=>{const[s,a]=l.useState(!1),[r,d]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...n,closable:!0,onClose:()=>a(!1),isOpen:s,position:r?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>a(i=>!i),style:{marginTop:"16px"}}),e.jsx(ie,{label:`${r?"Overlay":"Push"} mode`,checked:r,onChange:()=>d(i=>!i)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},x={args:{...t.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:n=>{const[s,a]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...n,closable:!0,onClose:()=>a(!1),isOpen:s}),e.jsx(v,{label:s?"Hide banner":"Show banner",onClick:()=>a(r=>!r),style:{marginTop:"16px"}})]})},play:async({canvasElement:n})=>{const s=k(n);le(n);const a=await s.getByRole("status"),r=await k(a).getAllByRole("button")[1];await w.tab(),await w.tab(),S(r).toHaveFocus(),await w.keyboard("{Enter}"),await oe(()=>S(a).not.toBeInTheDocument())}};var O,_,I;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "info",
    actionLabel: "Voir les détails",
    closable: true
  }
}`,...(I=(_=t.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var D,E,V;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "error"
  }
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var A,T,q;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var L,N,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(N=m.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var R,F,W;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(F=g.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var z,P,K;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(K=(P=h.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var M,U,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(U=b.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var G,J,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ie=["Default","Alert","Compact","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{p as Alert,g as Closable,u as Compact,t as Default,x as KeyboardInteraction,b as Overlay,h as WithAction,m as WithIcon,Ie as __namedExportsOrder,_e as default};
