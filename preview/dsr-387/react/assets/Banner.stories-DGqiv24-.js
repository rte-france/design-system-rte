import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as f,u as y,e as B,a as ne}from"./index-DCXJbAaW.js";import{r as i}from"./index-G8LIXM5I.js";import{B as x}from"./Button-B-hhLjRd.js";import{S as ae}from"./Switch-BKNj42Vr.js";import{u as se}from"./useAnimatedMount-_zPBpYOt.js";import{I as te}from"./Icon-DjEid3Hw.js";import{I as re}from"./IconButton-WLsv9XMP.js";import{c as oe}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-yqZBktoR.js";const le="_banner_ezxzk_3",l={"banner-container":"_banner-container_ezxzk_3",banner:le,"banner-icon":"_banner-icon_ezxzk_46","banner-close-icon":"_banner-close-icon_ezxzk_54","banner-content":"_banner-content_ezxzk_57","banner-title":"_banner-title_ezxzk_67","banner-message":"_banner-message_ezxzk_76"},c=i.forwardRef(({title:a,message:s,type:n="alert",closable:t=!1,showIcon:d=!1,onClose:o,position:k="push",actionCallback:j,actionLabel:v,className:M="",isOpen:w=!0,...G},J)=>{const[Q,C]=i.useState(w),X=n==="default"?"status":"alert",{shouldRender:Y,isAnimating:Z}=se(Q,200);if(i.useEffect(()=>{C(w)},[w]),t===!1&&k==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const ee=()=>{C(!1),o==null||o()};return Y&&e.jsx("section",{role:X,className:oe(l["banner-container"],M),ref:J,"data-type":n,"data-position":k,"data-open":Z||void 0,...G,children:e.jsxs("div",{className:l.banner,children:[d&&e.jsx("div",{className:l["banner-icon"],children:e.jsx(te,{name:n==="default"?"info":"error",size:32})}),e.jsxs("div",{className:l["banner-content"],children:[a&&e.jsx("span",{className:l["banner-title"],children:a}),s&&e.jsxs("div",{className:l["banner-message"],children:[e.jsx("span",{children:s}),j&&v&&e.jsx(x,{label:v,onClick:j,variant:"neutral","aria-label":v,size:"s"})]})]}),t&&e.jsx("div",{className:l["banner-close-icon"],children:e.jsx(re,{variant:"neutral",name:"close",onClick:ee,"aria-label":"close banner"})})]})})});c.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"alert"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},showIcon:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CoreBannerProps"]};const fe={title:"Banner",component:c,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["default","alert"]},closable:{control:"boolean"},showIcon:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},r={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"default"}},u={args:{...r.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"alert"}},p={args:{...r.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(c,{...a,showIcon:!0}),e.jsx(c,{...u.args,showIcon:!0})]})},h={args:{...r.args,closable:!0},render:a=>{const[s,n]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(c,{...a,showIcon:!0,closable:!0,isOpen:s,onClose:()=>n(!1)}),e.jsx(x,{label:s?"Hide banner":"Show banner",onClick:()=>n(t=>!t),style:{marginTop:"16px"}})]})}},g={args:{...r.args,actionLabel:"Voir les détails",showIcon:!0,actionCallback:()=>{console.log("Action button clicked")}}},b={args:{...r.args,closable:!0},render:a=>{const[s,n]=i.useState(!1),[t,d]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(c,{...a,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:s,position:t?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(x,{label:s?"Hide banner":"Show banner",onClick:()=>n(o=>!o),style:{marginTop:"16px"}}),e.jsx(ae,{label:`${t?"Overlay":"Push"} mode`,checked:t,onChange:()=>d(o=>!o)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},m={args:{...r.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:a=>{const[s,n]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(c,{...a,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:s}),e.jsx(x,{label:s?"Hide banner":"Show banner",onClick:()=>n(t=>!t),style:{marginTop:"16px"}})]})},play:async({canvasElement:a})=>{const n=await f(a).getByRole("status"),t=await f(n).getAllByRole("button")[0],d=await f(n).getAllByRole("button")[1];await y.tab(),B(t).toHaveFocus(),await y.tab(),B(d).toHaveFocus(),await y.keyboard("{Enter}"),await ne(()=>B(n).not.toBeInTheDocument())}};var S,I,_;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "default"
  }
}`,...(_=(I=r.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var O,z,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "alert"
  }
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var A,E,T;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var q,H,N;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(H=h.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,V,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    showIcon: true,
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(F=(V=g.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var W,L,P;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(L=b.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var K,U,$;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...($=(U=m.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const ye=["Default","Alert","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{u as Alert,h as Closable,r as Default,m as KeyboardInteraction,b as Overlay,g as WithAction,p as WithIcon,ye as __namedExportsOrder,fe as default};
