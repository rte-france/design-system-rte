import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as y,u as f,e as B,a as ne}from"./index-DCXJbAaW.js";import{r as l}from"./index-G8LIXM5I.js";import{B as x}from"./Button-cobwPeAi.js";import{S as ae}from"./Switch-BKNj42Vr.js";import{u as re}from"./useAnimatedMount-_zPBpYOt.js";import{I as se}from"./Icon-DjEid3Hw.js";import{I as te}from"./IconButton-DU9lNzF3.js";import{c as oe}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";const le="_banner_70rw0_3",d={banner:le,"banner-icon":"_banner-icon_70rw0_46","banner-close-icon":"_banner-close-icon_70rw0_54","banner-content":"_banner-content_70rw0_57","banner-title":"_banner-title_70rw0_67","banner-message":"_banner-message_70rw0_79"},i=l.forwardRef(({title:a,message:r,type:n="alert",closable:s=!1,onClose:o,position:c="push",actionCallback:C,actionLabel:v,className:U="",isOpen:w=!0,...$},G)=>{const[J,j]=l.useState(w),Q=n==="error"?"alert":"status",{shouldRender:X,isAnimating:Y}=re(J,200),Z={info:"info",error:"dangerous",success:"check-circle",warning:"warning"};if(l.useEffect(()=>{j(w)},[w]),s===!1&&c==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const ee=()=>{j(!1),o==null||o()};return X&&e.jsxs("section",{role:Q,className:oe(d.banner,U),ref:G,"data-type":n,"data-position":c,"data-open":Y||void 0,...$,children:[e.jsx("div",{className:d["banner-icon"],children:e.jsx(se,{name:Z[n],size:32})}),e.jsxs("div",{className:d["banner-content"],children:[a&&e.jsx("span",{className:d["banner-title"],children:a}),r&&e.jsx("div",{className:d["banner-message"],children:e.jsx("span",{children:r})})]}),C&&v&&e.jsx(x,{label:v,onClick:C,variant:"text","aria-label":v,size:"s"}),s&&e.jsx("div",{className:d["banner-close-icon"],children:e.jsx(te,{variant:"neutral",name:"close",onClick:ee,"aria-label":"close banner"})})]})});i.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"alert"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CoreBannerProps"]};const fe={title:"Composants/Banner",component:i,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["info","error","success","warning"]},closable:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},t={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"info",actionLabel:"Voir les détails",closable:!0}},u={args:{...t.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"error"}},p={args:{...t.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{...a}),e.jsx(i,{...u.args})]})},h={args:{...t.args,closable:!0},render:a=>{const[r,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{...a,closable:!0,isOpen:r,onClose:()=>n(!1)}),e.jsx(x,{label:r?"Hide banner":"Show banner",onClick:()=>n(s=>!s),style:{marginTop:"16px"}})]})}},g={args:{...t.args,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}}},b={args:{...t.args,closable:!0},render:a=>{const[r,n]=l.useState(!1),[s,o]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{...a,closable:!0,onClose:()=>n(!1),isOpen:r,position:s?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(x,{label:r?"Hide banner":"Show banner",onClick:()=>n(c=>!c),style:{marginTop:"16px"}}),e.jsx(ae,{label:`${s?"Overlay":"Push"} mode`,checked:s,onChange:()=>o(c=>!c)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},m={args:{...t.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:a=>{const[r,n]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{...a,closable:!0,onClose:()=>n(!1),isOpen:r}),e.jsx(x,{label:r?"Hide banner":"Show banner",onClick:()=>n(s=>!s),style:{marginTop:"16px"}})]})},play:async({canvasElement:a})=>{const n=await y(a).getByRole("status"),s=await y(n).getAllByRole("button")[0],o=await y(n).getAllByRole("button")[1];await f.tab(),B(s).toHaveFocus(),await f.tab(),B(o).toHaveFocus(),await f.keyboard("{Enter}"),await ne(()=>B(n).not.toBeInTheDocument())}};var k,S,O;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "info",
    actionLabel: "Voir les détails",
    closable: true
  }
}`,...(O=(S=t.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var _,I,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "error"
  }
}`,...(D=(I=u.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var A,E,T;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var V,H,R;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var q,N,F;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(F=(N=g.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var L,W,P;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(W=b.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var z,K,M;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const Be=["Default","Alert","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{u as Alert,h as Closable,t as Default,m as KeyboardInteraction,b as Overlay,g as WithAction,p as WithIcon,Be as __namedExportsOrder,fe as default};
