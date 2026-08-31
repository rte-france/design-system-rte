import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as E,u as j,e as A,a as pe}from"./index-4rjIhT2C.js";import{r as o}from"./index-G8LIXM5I.js";import{f as me}from"./testing.utils-BiEcdOD7.js";import{B as w}from"./Button-KJfdYR4G.js";import{S as ge}from"./Switch-BHK9jbFU.js";import"./timepicker.constants-CynrC_9x.js";import{I as be}from"./icon.constants-CvX5SV3k.js";import{g as he}from"./id.utils-DsO5Uws7.js";import{u as xe}from"./useAnimatedMount-_zPBpYOt.js";import{I as V}from"./Icon-DgLH6pPJ.js";import{i as fe}from"./IconButton.module-DsipBz7u.js";import{c as T}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";const ve="Fermer la bannière",we={info:"Information : ",error:"Erreur : ",success:"Succès : ",warning:"Avertissement : "},ye={info:"info",error:"dangerous",success:"check-circle",warning:"warning"},i={"rte-banner":"_rte-banner_2fiqw_1","rte-banner-content":"_rte-banner-content_2fiqw_37","rte-banner-title":"_rte-banner-title_2fiqw_40","rte-banner-message":"_rte-banner-message_2fiqw_49","rte-banner-icon":"_rte-banner-icon_2fiqw_74","rte-banner-close-button":"_rte-banner-close-button_2fiqw_86","rte-sr-only":"_rte-sr-only_2fiqw_131"},l=o.forwardRef(({title:a,message:r,type:n="info",closable:s=!1,onClose:u,position:c="push",actionCallback:S,actionLabel:y,className:oe="",isOpen:B=!0,isCompact:k=!1,...le},m)=>{const[ie,I]=o.useState(B),ce=n==="error"?"alert":"status",{shouldRender:C,isAnimating:de}=xe(ie,200),_=o.useRef(null),O=he(),D=`banner-title-${O}`,q=`banner-message-${O}`;o.useEffect(()=>{I(B)},[B]),o.useEffect(()=>{var d;n==="error"&&C&&((d=_.current)==null||d.focus())},[C,n]);const ue=()=>{I(!1),u==null||u()};return s===!1&&c==="overlay"?(console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null):C&&e.jsxs("section",{role:ce,className:T(i["rte-banner"],oe),ref:d=>{_.current=d,typeof m=="function"?m(d):m&&(m.current=d)},"aria-labelledby":a?D:void 0,"aria-describedby":r?q:void 0,"data-type":n,"data-position":c,"data-compact":k?"true":void 0,"data-open":de||void 0,tabIndex:-1,...le,children:[e.jsx("div",{className:i["rte-banner-icon"],children:e.jsx(V,{name:ye[n],size:32,"aria-hidden":"true"})}),e.jsxs("div",{className:i["rte-banner-content"],children:[a&&e.jsx(e.Fragment,{children:e.jsxs("span",{id:D,className:i["rte-banner-title"],children:[e.jsxs("span",{className:i["rte-sr-only"],children:[we[n]," "]}),a]})}),r&&e.jsx("div",{id:q,className:i["rte-banner-message"],children:e.jsx("span",{children:r})})]}),S&&y&&e.jsx(w,{label:y,onClick:S,variant:"text","aria-label":y,size:k?"s":"m"}),s&&e.jsx("button",{type:"button",className:T(fe["icon-button"],i["rte-banner-close-button"]),"data-size":"m","data-variant":"neutral","data-compact-spacing":!0,"aria-label":ve,onClick:ue,children:e.jsx(V,{name:"close",size:be.m})})]})});l.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"info"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreBannerProps"]};const Fe={title:"Composants/Banner/Banner",component:l,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["info","error","success","warning"]},isCompact:{control:"boolean"},closable:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},t={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"info",actionLabel:"Voir les détails",closable:!0}},p={args:{...t.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"error"}},g={args:{...t.args,isCompact:!0,message:"Sample banner message.",actionLabel:"Visualiser",closable:!0},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{...a,isCompact:!0}),e.jsx(l,{...a,isCompact:!1})]})},b={args:{...t.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{...a}),e.jsx(l,{...p.args})]})},h={args:{...t.args,closable:!0},render:a=>{const[r,n]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{...a,closable:!0,isOpen:r,onClose:()=>n(!1)}),e.jsx(w,{label:r?"Hide banner":"Show banner",onClick:()=>n(s=>!s),style:{marginTop:"16px"}})]})}},x={args:{...t.args,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}}},f={args:{...t.args,closable:!0},render:a=>{const[r,n]=o.useState(!1),[s,u]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{...a,closable:!0,onClose:()=>n(!1),isOpen:r,position:s?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(w,{label:r?"Hide banner":"Show banner",onClick:()=>n(c=>!c),style:{marginTop:"16px"}}),e.jsx(ge,{label:`${s?"Overlay":"Push"} mode`,checked:s,onChange:()=>u(c=>!c)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},v={args:{...t.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:a=>{const[r,n]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{...a,closable:!0,onClose:()=>n(!1),isOpen:r}),e.jsx(w,{label:r?"Hide banner":"Show banner",onClick:()=>n(s=>!s),style:{marginTop:"16px"}})]})},play:async({canvasElement:a})=>{const r=E(a);me();const n=await r.getByRole("status"),s=await E(n).getAllByRole("button")[1];await j.tab(),await j.tab(),A(s).toHaveFocus(),await j.keyboard("{Enter}"),await pe(()=>A(n).not.toBeInTheDocument())}};var L,N,R;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "info",
    actionLabel: "Voir les détails",
    closable: true
  }
}`,...(R=(N=t.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var F,H,z;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "error"
  }
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var W,P,$;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(P=g.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var K,M,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(M=b.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var G,J,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,se,te;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
    focusElementBeforeComponent();
    const banner = await canvas.getByRole("status");
    const closeButton = await within(banner).getAllByRole("button")[1];
    await userEvent.tab();
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(banner).not.toBeInTheDocument());
  }
}`,...(te=(se=v.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};const He=["Default","Alert","Compact","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{p as Alert,h as Closable,g as Compact,t as Default,v as KeyboardInteraction,f as Overlay,x as WithAction,b as WithIcon,He as __namedExportsOrder,Fe as default};
