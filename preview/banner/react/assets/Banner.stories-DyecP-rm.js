import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-G8LIXM5I.js";import{B as m}from"./Button-B-hhLjRd.js";import{S as F}from"./Switch-CZr50hBc.js";import{u as G}from"./useAnimatedMount-_zPBpYOt.js";import{I as J}from"./Icon-DjEid3Hw.js";import{I as K}from"./IconButton-CY-isvho.js";import{c as Q}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const X="_banner_2yaj3_3",o={"banner-container":"_banner-container_2yaj3_3",banner:X,"banner-icon":"_banner-icon_2yaj3_46","banner-close-icon":"_banner-close-icon_2yaj3_54","banner-content":"_banner-content_2yaj3_57","banner-title":"_banner-title_2yaj3_67","banner-message":"_banner-message_2yaj3_76","banner-action-button":"_banner-action-button_2yaj3_89"},i=d.forwardRef(({title:s,message:r,type:n="alert",closable:a=!1,showIcon:x=!1,onClose:l,position:v="push",actionCallback:b,actionLabel:y,className:P="",isOpen:f=!0,...E},U)=>{const $=n==="default"?"status":"alert",{shouldRender:w,isAnimating:C}=G(f,200);if(a===!1&&v==="overlay")return console.warn("Banner: 'closable' and 'onClose' props must be set when 'position' has 'overlay' value."),null;const M=()=>{l==null||l()};return console.log({isOpen:f,shouldRender:w,isAnimating:C}),w&&e.jsx("section",{role:$,className:Q(o["banner-container"],P),ref:U,"data-type":n,"data-position":v,"data-open":C||void 0,...E,children:e.jsxs("div",{className:o.banner,children:[x&&e.jsx("div",{className:o["banner-icon"],children:e.jsx(J,{name:n==="default"?"info":"error",size:32})}),e.jsxs("div",{className:o["banner-content"],children:[e.jsx("span",{className:o["banner-title"],children:s}),e.jsxs("div",{className:o["banner-message"],children:[e.jsx("p",{children:r}),b&&y&&e.jsx(m,{label:y,className:o["banner-action-button"],onClick:b,variant:"text"})]})]}),a&&e.jsx("div",{className:o["banner-close-icon"],children:e.jsx(K,{variant:"transparent",name:"close",onClick:M})})]})})});i.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{required:!1,tsType:{name:"union",raw:'"default" | "alert"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"alert"'}]},description:"",defaultValue:{value:'"alert"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"overlay" | "push"',elements:[{name:"literal",value:'"overlay"'},{name:"literal",value:'"push"'}]},description:"",defaultValue:{value:'"push"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actionLabel:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const ie={title:"Banner",component:i,tags:["autodocs"],argTypes:{title:{control:"text"},message:{control:"text"},type:{control:"select",options:["default","alert"]},closable:{control:"boolean"},showIcon:{control:"boolean"},actionCallback:{action:"actionCallback"},actionLabel:{control:"text"}}},t={args:{title:"La mise à jour est disponible !",message:"Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",type:"default"}},c={args:{...t.args,title:"Indisponibilité de l’application",message:"Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent insponible du 29 mars au 12 avril 2026.",type:"alert"}},p={args:{...t.args},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{...s,showIcon:!0}),e.jsx(i,{...c.args,showIcon:!0})]})},u={args:{...t.args,closable:!0},render:s=>{const[r,n]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{...s,showIcon:!0,closable:!0,isOpen:r,onClose:()=>n(!1)}),e.jsx(m,{label:r?"Hide banner":"Show banner",onClick:()=>n(a=>!a),style:{marginTop:"16px"}})]})}},h={args:{...t.args,closable:!0,actionLabel:"Voir les détails",showIcon:!0,actionCallback:()=>{console.log("Action button clicked")}},render:s=>{const[r,n]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{...s,onClose:()=>n(!1),isOpen:r}),e.jsx(m,{label:r?"Hide banner":"Show banner",onClick:()=>n(a=>!a),style:{marginTop:"16px"}})]})}},g={args:{...t.args,closable:!0},render:s=>{const[r,n]=d.useState(!1),[a,x]=d.useState(!0);return e.jsxs("div",{style:{height:"1300px",boxSizing:"border-box",overflow:"auto",borderRadius:"8px",width:"100%"},children:[e.jsx(i,{...s,showIcon:!0,closable:!0,onClose:()=>n(!1),isOpen:r,position:a?"overlay":"push"}),e.jsxs("div",{style:{gap:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[e.jsx(m,{label:r?"Hide banner":"Show banner",onClick:()=>n(l=>!l),style:{marginTop:"16px"}}),e.jsx(F,{label:`${a?"Overlay":"Push"} mode`,checked:a,onChange:()=>x(l=>!l)}),e.jsxs("div",{style:{width:"100%",display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"grey"},children:"Content"}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"grey"},children:"Content"}),e.jsx("div",{style:{width:"200px",height:"600pxpx",backgroundColor:"grey"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"grey"},children:"Content"}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"grey"},children:"Content"}),e.jsx("div",{style:{width:"200px",height:"600pxpx",backgroundColor:"grey"}}),e.jsx("div",{style:{width:"200px",height:"300px",backgroundColor:"grey"},children:"Content"}),e.jsx("div",{style:{width:"200px",height:"600pxpx",backgroundColor:"grey"}}),e.jsx("div",{style:{width:"400px",height:"300px",backgroundColor:"grey"},children:"Content"})]})]})]})}};var j,B,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "La mise à jour est disponible !",
    message: "Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.",
    type: "default"
  }
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var k,_,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Indisponibilité de l’application",
    message: "Dans le cadre des changements de serveur à venir le 18 mai 2026, votre application évolue et sera par conséquent insponible du 29 mars au 12 avril 2026.",
    type: "alert"
  }
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,T,q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var D,N,A;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(N=u.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var V,H,R;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closable: true,
    actionLabel: "Voir les détails",
    showIcon: true,
    actionCallback: () => {
      console.log("Action button clicked");
    }
  },
  render: args => {
    const [showBanner, setShowBanner] = useState(false);
    return <div>
        <Banner {...args} onClose={() => setShowBanner(false)} isOpen={showBanner} />
        <Button label={showBanner ? "Hide banner" : "Show banner"} onClick={() => setShowBanner(prev => !prev)} style={{
        marginTop: "16px"
      }} />
      </div>;
  }
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var W,z,L;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closable: true
  },
  render: args => {
    const [showBanner, setShowBanner] = useState(false);
    const [isOverlay, setIsOverlay] = useState(true);
    return <div style={{
      height: "1300px",
      boxSizing: "border-box",
      overflow: "auto",
      borderRadius: "8px",
      width: "100%"
    }}>
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
            backgroundColor: "grey"
          }}>Content</div>
            <div style={{
            width: "400px",
            height: "300px",
            backgroundColor: "grey"
          }}>Content</div>
            <div style={{
            width: "200px",
            height: "600pxpx",
            backgroundColor: "grey"
          }}></div>
            <div style={{
            width: "400px",
            height: "300px",
            backgroundColor: "grey"
          }}>Content</div>
            <div style={{
            width: "200px",
            height: "300px",
            backgroundColor: "grey"
          }}>Content</div>
            <div style={{
            width: "200px",
            height: "600pxpx",
            backgroundColor: "grey"
          }}></div>
            <div style={{
            width: "200px",
            height: "300px",
            backgroundColor: "grey"
          }}>Content</div>
            <div style={{
            width: "200px",
            height: "600pxpx",
            backgroundColor: "grey"
          }}></div>
            <div style={{
            width: "400px",
            height: "300px",
            backgroundColor: "grey"
          }}>Content</div>
          </div>
        </div>
      </div>;
  }
}`,...(L=(z=g.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const ce=["Default","Alert","WithIcon","Closable","WithAction","Overlay"];export{c as Alert,u as Closable,t as Default,g as Overlay,h as WithAction,p as WithIcon,ce as __namedExportsOrder,ie as default};
