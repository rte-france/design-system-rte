import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as y,u as f,e as B,a as ne}from"./index-DCXJbAaW.js";import{r as l}from"./index-G8LIXM5I.js";import{B as x}from"./Button-Ciu9xNcR.js";import{S as ae}from"./Switch-D6VikM8-.js";import{u as se}from"./useAnimatedMount-_zPBpYOt.js";import{I as re}from"./Icon-DjEid3Hw.js";import{I as te}from"./IconButton-tztXzQKL.js";import{c as oe}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Cd3dEy6T.js";const le="_banner_17pzg_29",d={banner:le,"banner-icon":"_banner-icon_17pzg_72","banner-close-icon":"_banner-close-icon_17pzg_80","banner-content":"_banner-content_17pzg_83","banner-title":"_banner-title_17pzg_93","banner-message":"_banner-message_17pzg_105"},i=l.forwardRef(({title:a,message:s,type:n="alert",closable:r=!1,onClose:o,position:c="push",actionCallback:C,actionLabel:v,className:U="",isOpen:w=!0,...$},G)=>{const[J,j]=l.useState(w),Q=n==="error"?"alert":"status",{shouldRender:X,isAnimating:Y}=se(J,200),Z={info:"info",error:"dangerous",success:"check-circle",warning:"warning"};if(l.useEffect(()=>{j(w)},[w]),r===!1&&c==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const ee=()=>{j(!1),o==null||o()};return X&&e.jsxs("section",{role:Q,className:oe(d.banner,U),ref:G,"data-type":n,"data-position":c,"data-open":Y||void 0,...$,children:[e.jsx("div",{className:d["banner-icon"],children:e.jsx(re,{name:Z[n],size:32})}),e.jsxs("div",{className:d["banner-content"],children:[a&&e.jsx("span",{className:d["banner-title"],children:a}),s&&e.jsx("div",{className:d["banner-message"],children:e.jsx("span",{children:s})})]}),C&&v&&e.jsx(x,{label:v,onClick:C,variant:"text","aria-label":v,size:"s"}),r&&e.jsx("div",{className:d["banner-close-icon"],children:e.jsx(te,{variant:"neutral",name:"close",onClick:ee,"aria-label":"close banner"})})]})});i.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"alert"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CoreBannerProps"]};const fe={title:"Composants/Banner",component:i,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["info","error","success","warning"]},closable:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},t={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"info",actionLabel:"Voir les détails",closable:!0}},p={args:{...t.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"error"}},u={args:{...t.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{...a}),e.jsx(i,{...p.args})]})},g={args:{...t.args,closable:!0},render:a=>{const[s,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{...a,closable:!0,isOpen:s,onClose:()=>n(!1)}),e.jsx(x,{label:s?"Hide banner":"Show banner",onClick:()=>n(r=>!r),style:{marginTop:"16px"}})]})}},h={args:{...t.args,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}}},b={args:{...t.args,closable:!0},render:a=>{const[s,n]=l.useState(!1),[r,o]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{...a,closable:!0,onClose:()=>n(!1),isOpen:s,position:r?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(x,{label:s?"Hide banner":"Show banner",onClick:()=>n(c=>!c),style:{marginTop:"16px"}}),e.jsx(ae,{label:`${r?"Overlay":"Push"} mode`,checked:r,onChange:()=>o(c=>!c)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},m={args:{...t.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:a=>{const[s,n]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{...a,closable:!0,onClose:()=>n(!1),isOpen:s}),e.jsx(x,{label:s?"Hide banner":"Show banner",onClick:()=>n(r=>!r),style:{marginTop:"16px"}})]})},play:async({canvasElement:a})=>{const n=await y(a).getByRole("status"),r=await y(n).getAllByRole("button")[0],o=await y(n).getAllByRole("button")[1];await f.tab(),B(r).toHaveFocus(),await f.tab(),B(o).toHaveFocus(),await f.keyboard("{Enter}"),await ne(()=>B(n).not.toBeInTheDocument())}};var k,S,O;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "info",
    actionLabel: "Voir les détails",
    closable: true
  }
}`,...(O=(S=t.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var _,I,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "error"
  }
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var A,E,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(E=u.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var V,z,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(z=g.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var R,q,N;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(N=(q=h.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var F,L,W;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(L=b.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var P,K,M;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const Be=["Default","Alert","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{p as Alert,g as Closable,t as Default,m as KeyboardInteraction,b as Overlay,h as WithAction,u as WithIcon,Be as __namedExportsOrder,fe as default};
