import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as D,u as C,e as V,a as ce}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{f as de}from"./testing.utils-BiEcdOD7.js";import{B as v}from"./Button-KJfdYR4G.js";import{S as ue}from"./Switch-BHK9jbFU.js";import"./timepicker.constants-CynrC_9x.js";import{I as pe}from"./icon.constants-CvX5SV3k.js";import{g as me}from"./id.utils-DsO5Uws7.js";import{u as ge}from"./useAnimatedMount-_zPBpYOt.js";import{I as L}from"./Icon-DgLH6pPJ.js";import{i as be}from"./IconButton.module-DsipBz7u.js";import{c as T}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";const xe="Fermer la bannière",he={info:"Information : ",error:"Erreur : ",success:"Succès : ",warning:"Avertissement : "},fe={info:"info",error:"dangerous",success:"check-circle",warning:"warning"},l={"rte-banner":"_rte-banner_1a8ox_1","rte-banner-content":"_rte-banner-content_1a8ox_37","rte-banner-title":"_rte-banner-title_1a8ox_40","rte-banner-message":"_rte-banner-message_1a8ox_49","rte-banner-icon":"_rte-banner-icon_1a8ox_73","rte-banner-close-button":"_rte-banner-close-button_1a8ox_81","rte-sr-only":"_rte-sr-only_1a8ox_126"},s=i.forwardRef(({title:t,message:a,type:n="info",closable:r=!1,onClose:u,position:c="push",actionCallback:j,actionLabel:y,className:ae="",isOpen:w=!0,isCompact:S=!1,...te},p)=>{const[re,k]=i.useState(w),se=n==="error"?"alert":"status",{shouldRender:B,isAnimating:oe}=ge(re,200),I=i.useRef(null),_=me(),O=`banner-title-${_}`,E=`banner-message-${_}`;i.useEffect(()=>{k(w)},[w]),i.useEffect(()=>{var d;n==="error"&&B&&((d=I.current)==null||d.focus())},[B,n]);const ie=()=>{k(!1),u==null||u()},le=r||c==="overlay";return B&&e.jsxs("section",{role:se,className:T(l["rte-banner"],ae),ref:d=>{I.current=d,typeof p=="function"?p(d):p&&(p.current=d)},"aria-labelledby":t?O:void 0,"aria-describedby":a?E:void 0,"data-type":n,"data-position":c,"data-compact":S?"true":void 0,"data-open":oe||void 0,tabIndex:-1,...te,children:[e.jsx("div",{className:l["rte-banner-icon"],children:e.jsx(L,{name:fe[n],size:32,"aria-hidden":"true"})}),e.jsxs("div",{className:l["rte-banner-content"],children:[t&&e.jsx(e.Fragment,{children:e.jsxs("span",{id:O,className:l["rte-banner-title"],children:[e.jsxs("span",{className:l["rte-sr-only"],children:[he[n]," "]}),t]})}),a&&e.jsx("div",{id:E,className:l["rte-banner-message"],children:e.jsx("span",{children:a})})]}),j&&y&&e.jsx(v,{label:y,onClick:j,variant:"text","aria-label":y,size:S?"s":"m"}),le&&e.jsx("button",{type:"button",className:T(be["icon-button"],l["rte-banner-close-button"]),"data-size":"m","data-variant":"neutral","data-compact-spacing":!0,"aria-label":xe,onClick:ie,children:e.jsx(L,{name:"close",size:pe.m})})]})});s.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"info"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreBannerProps"]};const qe={title:"Composants/Banner/Banner",component:s,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["info","error","success","warning"]},isCompact:{control:"boolean"},closable:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},o={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"info",actionLabel:"Voir les détails",closable:!0}},m={args:{...o.args},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"700px"},children:[e.jsx(s,{title:"Information",message:"Votre demande a été prise en compte.",type:"info"}),e.jsx(s,{title:"Erreur",message:"L’application est indisponible.",type:"error"}),e.jsx(s,{title:"Succès",message:"Le fichier a été enregistré.",type:"success"}),e.jsx(s,{title:"Attention",message:"Une action est requise.",type:"warning"})]})},g={args:{...o.args,isCompact:!0,message:"Consultez les nouveautés.",actionLabel:"Visualiser",closable:!0},render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsx(s,{...t,isCompact:!0})})},b={args:{...o.args,closable:!0},render:t=>{const[a,n]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{...t,closable:!0,isOpen:a,onClose:()=>n(!1)}),e.jsx(v,{label:a?"Hide banner":"Show banner",onClick:()=>n(r=>!r),style:{marginTop:"16px"}})]})}},x={args:{...o.args,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}}},h={args:{...o.args,closable:!0},render:t=>{const[a,n]=i.useState(!1),[r,u]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(s,{...t,onClose:()=>n(!1),isOpen:a,position:r?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(v,{label:a?"Hide banner":"Show banner",onClick:()=>n(c=>!c),style:{marginTop:"16px"}}),e.jsx(ue,{label:`${r?"Overlay":"Push"} mode`,checked:r,onChange:()=>u(c=>!c)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},f={args:{...o.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:t=>{const[a,n]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(s,{...t,closable:!0,onClose:()=>n(!1),isOpen:a}),e.jsx(v,{label:a?"Hide banner":"Show banner",onClick:()=>n(r=>!r),style:{marginTop:"16px"}})]})},play:async({canvasElement:t})=>{const a=D(t);de();const n=await a.getByRole("status"),r=await D(n).getAllByRole("button")[1];await C.tab(),await C.tab(),V(r).toHaveFocus(),await C.keyboard("{Enter}"),await ce(()=>V(n).not.toBeInTheDocument())}};var A,q,N;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "info",
    actionLabel: "Voir les détails",
    closable: true
  }
}`,...(N=(q=o.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var R,z,F;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "700px"
    }}>
        <Banner title="Information" message="Votre demande a été prise en compte." type="info" />
        <Banner title="Erreur" message="L’application est indisponible." type="error" />
        <Banner title="Succès" message="Le fichier a été enregistré." type="success" />
        <Banner title="Attention" message="Une action est requise." type="warning" />
      </div>;
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var H,P,U;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCompact: true,
    message: "Consultez les nouveautés.",
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
      </div>;
  }
}`,...(U=(P=g.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,$,K;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=($=b.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var M,G,J;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closable: true
  },
  render: args => {
    const [showBanner, setShowBanner] = useState(false);
    const [isOverlay, setIsOverlay] = useState(true);
    return <>
        <Banner {...args} onClose={() => setShowBanner(false)} isOpen={showBanner} position={isOverlay ? "overlay" : "push"} />
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Ne=["Default","Type","Compact","Closable","WithAction","Overlay","KeyboardInteraction"];export{b as Closable,g as Compact,o as Default,f as KeyboardInteraction,h as Overlay,m as Type,x as WithAction,Ne as __namedExportsOrder,qe as default};
