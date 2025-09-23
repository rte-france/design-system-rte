import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as X,u as w,a as Y,e as Z}from"./index-DaW6VCyr.js";import{r as d}from"./index-G8LIXM5I.js";import{B as b}from"./Button-B-hhLjRd.js";import{S as ee}from"./Switch-CZr50hBc.js";import{u as ne}from"./useAnimatedMount-_zPBpYOt.js";import{I as ae}from"./Icon-DjEid3Hw.js";import{I as re}from"./IconButton-CY-isvho.js";import{c as se}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const te="_banner_a2amh_3",l={"banner-container":"_banner-container_a2amh_3",banner:te,"banner-icon":"_banner-icon_a2amh_46","banner-close-icon":"_banner-close-icon_a2amh_54","banner-content":"_banner-content_a2amh_57","banner-title":"_banner-title_a2amh_67","banner-message":"_banner-message_a2amh_76"},i=d.forwardRef(({title:a,message:r,type:n="alert",closable:s=!1,showIcon:v=!1,onClose:o,position:y="push",actionCallback:f,actionLabel:x,className:z="",isOpen:K=!0,...U},$)=>{const M=n==="default"?"status":"alert",{shouldRender:G,isAnimating:J}=ne(K,200);if(s===!1&&y==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const Q=()=>{o==null||o()};return G&&e.jsx("section",{role:M,className:se(l["banner-container"],z),ref:$,"data-type":n,"data-position":y,"data-open":J||void 0,...U,children:e.jsxs("div",{className:l.banner,children:[v&&e.jsx("div",{className:l["banner-icon"],children:e.jsx(ae,{name:n==="default"?"info":"error",size:32})}),e.jsxs("div",{className:l["banner-content"],children:[e.jsx("span",{className:l["banner-title"],children:a}),e.jsxs("div",{className:l["banner-message"],children:[e.jsx("span",{children:r}),f&&x&&e.jsx(b,{label:x,onClick:f,variant:"neutral","aria-label":x})]})]}),s&&e.jsx("div",{className:l["banner-close-icon"],children:e.jsx(re,{variant:"neutral",name:"close",onClick:Q,"aria-label":"close banner"})})]})})});i.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{required:!1,tsType:{name:"union",raw:'"default" | "alert"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"alert"'}]},description:"",defaultValue:{value:'"alert"',computed:!1}},message:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"overlay" | "push"',elements:[{name:"literal",value:'"overlay"'},{name:"literal",value:'"push"'}]},description:"",defaultValue:{value:'"push"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionLabel:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const ve={title:"Banner",component:i,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["default","alert"]},closable:{control:"boolean"},showIcon:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},t={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"default"}},c={args:{...t.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent insponible du 29 mars au 12 avril 2026.",type:"alert"}},u={args:{...t.args},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{...a,showIcon:!0}),e.jsx(i,{...c.args,showIcon:!0})]})},p={args:{...t.args,closable:!0},render:a=>{const[r,n]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{...a,showIcon:!0,closable:!0,isOpen:r,onClose:()=>n(!1)}),e.jsx(b,{label:r?"Hide banner":"Show banner",onClick:()=>n(s=>!s),style:{marginTop:"16px"}})]})}},h={args:{...t.args,actionLabel:"Voir les détails",showIcon:!0,actionCallback:()=>{console.log("Action button clicked")}}},m={args:{...t.args,closable:!0},render:a=>{const[r,n]=d.useState(!1),[s,v]=d.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{...a,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:r,position:s?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(b,{label:r?"Hide banner":"Show banner",onClick:()=>n(o=>!o),style:{marginTop:"16px"}}),e.jsx(ee,{label:`${s?"Overlay":"Push"} mode`,checked:s,onChange:()=>v(o=>!o)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"#e1e1e0"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"#e1e1e0"}})]})]})]})}},g={args:{...t.args,closable:!0,isOpen:!0,actionLabel:"Voir les détails",actionCallback:()=>{console.log("Action button clicked")}},render:a=>{const[r,n]=d.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{...a,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:r}),e.jsx(b,{label:r?"Hide banner":"Show banner",onClick:()=>n(s=>!s),style:{marginTop:"16px"}})]})},play:async({canvasElement:a})=>{const n=await X(a).getByRole("status");w.tab(),await w.tab(),await w.keyboard("{Enter}"),await Y(()=>Z(n).not.toBeInTheDocument())}};var B,C,j;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "default"
  }
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var k,S,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent insponible du 29 mars au 12 avril 2026.",
    type: "alert"
  }
}`,...(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var _,O,T;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(O=u.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var D,q,A;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(q=p.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var E,N,V;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionLabel: "Voir les détails",
    showIcon: true,
    actionCallback: () => {
      console.log("Action button clicked");
    }
  }
}`,...(V=(N=h.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var H,R,F;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(R=m.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var L,W,P;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    // const actionButton = await within(banner).getAllByRole("button")[0];
    // const closeButton = await within(banner).getAllByRole("button")[1];
    userEvent.tab();
    // expect(actionButton).toHaveFocus();
    await userEvent.tab();
    // expect(closeButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(banner).not.toBeInTheDocument());
  }
}`,...(P=(W=g.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};const xe=["Default","Alert","WithIcon","Closable","WithAction","Overlay","KeyboardInteration"];export{c as Alert,p as Closable,t as Default,g as KeyboardInteration,m as Overlay,h as WithAction,u as WithIcon,xe as __namedExportsOrder,ve as default};
