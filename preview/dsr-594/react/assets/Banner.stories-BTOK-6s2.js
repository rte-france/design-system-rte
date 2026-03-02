import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as C,u as w,e as j,a as ne}from"./index-4rjIhT2C.js";import{r as o}from"./index-G8LIXM5I.js";import{f as ae}from"./testing.utils-mIZIUNbM.js";import{B as v}from"./Button-Cd2C55g4.js";import{S as re}from"./Switch-Bc5DIWaf.js";import{u as se}from"./useAnimatedMount-_zPBpYOt.js";import{I as te}from"./Icon-DjEid3Hw.js";import{I as oe}from"./IconButton-CQQHz8gd.js";import{c as le}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CQk6fGHb.js";const ie="_banner_vvnzx_1",c={banner:ie,"banner-icon":"_banner-icon_vvnzx_44","banner-close-icon":"_banner-close-icon_vvnzx_52","banner-content":"_banner-content_vvnzx_55","banner-title":"_banner-title_vvnzx_65","banner-message":"_banner-message_vvnzx_77"},l=o.forwardRef(({title:a,message:r,type:n="alert",closable:s=!1,onClose:d,position:i="push",actionCallback:y,actionLabel:x,className:U="",isOpen:f=!0,...$},G)=>{const[J,B]=o.useState(f),Q=n==="error"?"alert":"status",{shouldRender:X,isAnimating:Y}=se(J,200),Z={info:"info",error:"dangerous",success:"check-circle",warning:"warning"};if(o.useEffect(()=>{B(f)},[f]),s===!1&&i==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const ee=()=>{B(!1),d==null||d()};return X&&e.jsxs("section",{role:Q,className:le(c.banner,U),ref:G,"data-type":n,"data-position":i,"data-open":Y||void 0,...$,children:[e.jsx("div",{className:c["banner-icon"],children:e.jsx(te,{name:Z[n],size:32})}),e.jsxs("div",{className:c["banner-content"],children:[a&&e.jsx("span",{className:c["banner-title"],children:a}),r&&e.jsx("div",{className:c["banner-message"],children:e.jsx("span",{children:r})})]}),y&&x&&e.jsx(v,{label:x,onClick:y,variant:"text","aria-label":x,size:"s"}),s&&e.jsx("div",{className:c["banner-close-icon"],children:e.jsx(oe,{variant:"neutral",name:"close",onClick:ee,"aria-label":"close banner"})})]})});l.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"alert"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},position:{defaultValue:{value:'"push"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CoreBannerProps"]};const Ce={title:"Composants/Banner/Banner",component:l,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["info","error","success","warning"]},closable:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},t={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"info",actionLabel:"Voir les détails",closable:!0}},p={args:{...t.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"error"}},u={args:{...t.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{...a}),e.jsx(l,{...p.args})]})},h={args:{...t.args,closable:!0},render:a=>{const[r,n]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{...a,closable:!0,isOpen:r,onClose:()=>n(!1)}),e.jsx(v,{label:r?"Hide banner":"Show banner",onClick:()=>n(s=>!s),style:{marginTop:"16px"}})]})}},m={args:{...t.args,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}}},g={args:{...t.args,closable:!0},render:a=>{const[r,n]=o.useState(!1),[s,d]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{...a,closable:!0,onClose:()=>n(!1),isOpen:r,position:s?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(v,{label:r?"Hide banner":"Show banner",onClick:()=>n(i=>!i),style:{marginTop:"16px"}}),e.jsx(re,{label:`${s?"Overlay":"Push"} mode`,checked:s,onChange:()=>d(i=>!i)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},b={args:{...t.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:a=>{const[r,n]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{...a,closable:!0,onClose:()=>n(!1),isOpen:r}),e.jsx(v,{label:r?"Hide banner":"Show banner",onClick:()=>n(s=>!s),style:{marginTop:"16px"}})]})},play:async({canvasElement:a})=>{const r=C(a);ae(a);const n=await r.getByRole("status"),s=await C(n).getAllByRole("button")[1];await w.tab(),await w.tab(),j(s).toHaveFocus(),await w.keyboard("{Enter}"),await ne(()=>j(n).not.toBeInTheDocument())}};var k,S,O;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,A,T;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(A=u.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var V,z,q;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(z=h.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var N,H,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var L,F,W;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(F=g.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var P,K,M;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(K=b.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const je=["Default","Alert","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{p as Alert,h as Closable,t as Default,b as KeyboardInteraction,g as Overlay,m as WithAction,u as WithIcon,je as __namedExportsOrder,Ce as default};
