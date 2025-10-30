import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as b,u as v,e as m,a as z}from"./index-DCXJbAaW.js";import{r as h}from"./index-G8LIXM5I.js";import{B as w}from"./Button-B-hhLjRd.js";import{S as K}from"./Switch-BKNj42Vr.js";import{B as s}from"./Banner-B6erURIj.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./Icon-DjEid3Hw.js";import"./useAnimatedMount-_zPBpYOt.js";import"./IconButton-CMN6gjhA.js";const ne={title:"Banner",component:s,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["default","alert"]},closable:{control:"boolean"},showIcon:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},t={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"default"}},l={args:{...t.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",type:"alert"}},i={args:{...t.args},render:o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{...o,showIcon:!0}),e.jsx(s,{...l.args,showIcon:!0})]})},c={args:{...t.args,closable:!0},render:o=>{const[a,n]=h.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{...o,showIcon:!0,closable:!0,isOpen:a,onClose:()=>n(!1)}),e.jsx(w,{label:a?"Hide banner":"Show banner",onClick:()=>n(r=>!r),style:{marginTop:"16px"}})]})}},d={args:{...t.args,actionLabel:"Voir les détails",showIcon:!0,actionCallback:()=>{console.log("Action button clicked")}}},p={args:{...t.args,closable:!0},render:o=>{const[a,n]=h.useState(!1),[r,g]=h.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(s,{...o,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:a,position:r?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(w,{label:a?"Hide banner":"Show banner",onClick:()=>n(x=>!x),style:{marginTop:"16px"}}),e.jsx(K,{label:`${r?"Overlay":"Push"} mode`,checked:r,onChange:()=>g(x=>!x)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},u={args:{...t.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:o=>{const[a,n]=h.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(s,{...o,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:a}),e.jsx(w,{label:a?"Hide banner":"Show banner",onClick:()=>n(r=>!r),style:{marginTop:"16px"}})]})},play:async({canvasElement:o})=>{const n=await b(o).getByRole("status"),r=await b(n).getAllByRole("button")[0],g=await b(n).getAllByRole("button")[1];await v.tab(),m(r).toHaveFocus(),await v.tab(),m(g).toHaveFocus(),await v.keyboard("{Enter}"),await z(()=>m(n).not.toBeInTheDocument())}};var y,B,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "default"
  }
}`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var C,k,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent indisponible du 29 mars au 12 avril 2026.",
    type: "alert"
  }
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,I,O;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var D,A,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var T,H,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    showIcon: true,
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(F=(H=d.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var L,R,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var q,P,V;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const te=["Default","Alert","WithIcon","Closable","WithAction","Overlay","KeyboardInteraction"];export{l as Alert,c as Closable,t as Default,u as KeyboardInteraction,p as Overlay,d as WithAction,i as WithIcon,te as __namedExportsOrder,ne as default};
