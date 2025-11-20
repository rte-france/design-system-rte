import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as B,u as v,e as h,a as le}from"./index-DCXJbAaW.js";import{r as a}from"./index-G8LIXM5I.js";import{B as m}from"./Button-BGjTm3Lt.js";import{i as ue,I as U,R as ce,T as pe}from"./Icon-DjEid3Hw.js";import{I as P,a as me}from"./icon.constants-B1EkCXYG.js";import{u as de}from"./useAnimatedMount-_zPBpYOt.js";import{I as ge}from"./IconButton-DLtPB6Kc.js";import{O as fe}from"./Overlay-5j7SEEoz.js";import{c as be}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-yqZBktoR.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function Oe(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}let M;const ve=new Uint8Array(16);function ye(){if(!M){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");M=crypto.getRandomValues.bind(crypto)}return M(ve)}const xe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),F={randomUUID:xe};function Ie(e,t,o){var r;e=e||{};const s=e.random??((r=e.rng)==null?void 0:r.call(e))??ye();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,Oe(s)}function Te(e,t,o){return F.randomUUID&&!e?F.randomUUID():Ie(e)}const J=a.createContext(null),X=()=>{const e=a.useContext(J);if(!e)throw new Error("Toast component must be used within a ToastQueueProvider");return e},je=(e,t)=>{const[o,s]=a.useState(t),{isFirstInQueue:r,isInQueue:u,queue:d}=X(),g=a.useCallback(()=>{s(!1)},[]),l=()=>{s(!0)};return a.useEffect(()=>{d.length>0&&(r(e)?l():u(e)&&g())},[d.length,r,u,g,e]),{isInternalOpen:o,hideToast:g,showToast:l}},Be=3e3,he=5e3,we=8e3,Ce={short:Be,medium:he,long:we},Se=({shouldStartTimer:e,duration:t},o)=>{const s=a.useRef(null),r=a.useCallback(()=>{s.current=setTimeout(()=>{o()},Ce[t])},[t,o]),u=a.useCallback(()=>{s.current&&(clearTimeout(s.current),s.current=null)},[]);return a.useEffect(()=>(e?r():u(),()=>{u()}),[r,u]),{initializeTimer:r,removeTimer:u}},Re="_toast_1jesl_3",y={toast:Re,"toast-message":"_toast-message_1jesl_55","toast-icon":"_toast-icon_1jesl_70","toast-content":"_toast-content_1jesl_73"},f=a.forwardRef(({id:e,message:t,actionButton:o,type:s="error",closable:r=!1,placement:u="bottom-right",isOpen:d=!0,autoDismiss:g=!0,duration:l="medium",onClose:p,iconName:i,showLeftIcon:x=!0,showActionButton:I=!0,...k},Y)=>{const T=g&&(!o||!I),[O]=a.useState(e||Te()),{isInternalOpen:N,hideToast:D}=je(O,d),{addToQueue:_,removeFromQueue:Q}=X(),{shouldRender:Z,isAnimating:$}=de(N,300),{initializeTimer:ee,removeTimer:R}=Se({shouldStartTimer:T&&N,duration:l},()=>{j()}),[te,ne]=u.split("-"),j=a.useCallback(()=>{D(),R(),Q(O),p==null||p()},[D,R,Q,O,p]);a.useEffect(()=>{d?_({id:O,hasButtonAction:!!o,type:s,isAutoDismiss:T}):j()},[d,o,s,T,O,_,j]);const se=()=>{j()},oe=E=>{E.stopPropagation(),T&&d&&R()},ae=E=>{E.stopPropagation(),ee()},re=x&&s!=="neutral",ie=x&&i&&ue(i);return Z&&n.jsx(fe,{children:n.jsxs("div",{role:"status",className:be(y.toast,k.className),"data-type":s,"data-position":te,"data-alignment":ne,"data-open":$||void 0,ref:Y,onMouseOver:oe,onMouseOut:ae,...k,children:[n.jsxs("div",{className:y["toast-content"],children:[re?n.jsx(U,{name:me[s],size:P.xl,className:y["toast-icon"],"aria-hidden":"true"}):ie&&n.jsx(U,{name:i,size:P.xl,className:y["toast-icon"],"aria-hidden":"true"}),n.jsx("span",{className:y["toast-message"],children:t})]}),I&&n.jsx(n.Fragment,{children:o}),r&&n.jsx(ge,{"data-testid":"toast-close-button",name:"close",variant:s==="neutral"?"reverse":"neutral",onClick:se})]})})});f.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{actionButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},showActionButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},type:{defaultValue:{value:'"error"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},placement:{defaultValue:{value:'"bottom-right"',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1},autoDismiss:{defaultValue:{value:"true",computed:!1},required:!1},duration:{defaultValue:{value:'"medium"',computed:!1},required:!1},showLeftIcon:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreToastProps"]};const S=({children:e})=>{const[t,o]=a.useState([]),s=a.useCallback(l=>{const p=g(l);o(i=>[...i,{id:l.id,priority:p,isOpen:!1}].sort((x,I)=>x.priority-I.priority))},[]),r=a.useCallback(l=>{o(p=>p.filter(i=>i.id!==l))},[]),u=l=>t.length>0&&t[0].id===l,d=l=>t.findIndex(p=>p.id===l)!==-1,g=l=>{const{hasButtonAction:p,type:i}=l;return p?i==="error"?1:i==="warning"?3:i==="success"?5:i==="info"?6:7:i==="error"?2:i==="warning"?4:i==="success"?8:i==="info"?9:10};return n.jsx(J.Provider,{value:{addToQueue:s,removeFromQueue:r,isFirstInQueue:u,isInQueue:d,queue:t},children:e})};S.__docgenInfo={description:"",methods:[],displayName:"ToastQueueProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ee=Object.keys(ce),Me=Object.keys(pe),Ke={title:"Toast",tags:["autodocs"],component:f,argTypes:{message:{control:"text"},actionButton:{control:!1},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...Ee,...Me].sort((e,t)=>e.localeCompare(t)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"}}},b={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,closable:!0},render:e=>{const[t,o]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(m,{label:"Toggle toast",onClick:()=>o(!t),style:{marginBottom:"16px"}}),n.jsx(S,{children:n.jsx(f,{...e,isOpen:t,onClose:()=>{o(!1)},actionButton:n.jsx(m,{label:"Mettre à jour",variant:e.type==="neutral"?"reverse":"text"})})})]})}},w={args:{...b.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:e=>{const[t,o]=a.useState(!1),[s,r]=a.useState(!1),[u,d]=a.useState(!1),[g,l]=a.useState(!1),[p,i]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(m,{label:"Toggle error toast",onClick:()=>o(!t),variant:"danger"}),n.jsx(m,{label:"Toggle warning toast",onClick:()=>l(!g),variant:"secondary"}),n.jsx(m,{label:"Toggle success toast",onClick:()=>r(!s),variant:"primary"}),n.jsx(m,{label:"Toggle info toast",onClick:()=>d(!u),variant:"secondary"}),n.jsx(m,{label:"Toggle neutral toast",onClick:()=>i(!p),variant:"neutral"})]}),n.jsxs(S,{children:[n.jsx(f,{...e,type:"error",isOpen:t,message:"Error toast",actionButton:n.jsx(m,{label:"Mettre à jour",variant:"text"}),onClose:()=>{o(!1)}}),n.jsx(f,{...e,type:"warning",message:"Warning toast",isOpen:g,actionButton:n.jsx(m,{label:"Mettre à jour",variant:"text"}),onClose:()=>{l(!1)}}),n.jsx(f,{...e,type:"success",message:"Success toast",isOpen:s,actionButton:n.jsx(m,{label:"Mettre à jour",variant:"text"}),onClose:()=>{r(!1)}}),n.jsx(f,{...e,type:"info",message:"Info toast",isOpen:u,actionButton:n.jsx(m,{label:"Mettre à jour",variant:"text"}),onClose:()=>{d(!1)}}),n.jsx(f,{...e,type:"neutral",message:"Neutral toast",isOpen:p,actionButton:n.jsx(m,{label:"Mettre à jour",variant:"reverse"}),onClose:()=>{i(!1)},iconName:"settings"})]})]})}},C={args:{...b.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:e=>{const[t,o]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(m,{label:"Toggle toast",onClick:()=>o(!t),style:{marginBottom:"16px"}}),n.jsx(S,{children:n.jsx(f,{...e,isOpen:t,onClose:()=>{o(!1)},actionButton:n.jsx(m,{label:"Mettre à jour",variant:e.type==="neutral"?"reverse":"text"})})})]})},play:async({canvasElement:e})=>{const o=await B(e).getByRole("button",{name:"Toggle toast"});await v.click(o);const s=B(document.body).getByRole("status"),r=await B(s).getByRole("button",{name:"Mettre à jour"}),u=await B(s).getByTestId("toast-close-button");await v.tab(),h(r).toHaveFocus(),await v.tab(),h(u).toHaveFocus(),await v.tab({shift:!0}),h(r).toHaveFocus(),await v.click(u),await le(()=>h(s).not.toBeInTheDocument())}};var A,V,q;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: true,
    closable: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Toggle toast" onClick={() => setIsOpen(!isOpen)} style={{
        marginBottom: "16px"
      }} />
        <ToastQueueProvider>
          <Toast {...args} isOpen={isOpen} onClose={() => {
          setIsOpen(false);
        }} actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />} />
        </ToastQueueProvider>
      </>;
  }
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var H,W,z;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: true,
    duration: "short",
    closable: true,
    placement: "bottom-center"
  },
  render: args => {
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [isWarningOpen, setIsWarningOpen] = useState(false);
    const [isNeutralOpen, setIsNeutralOpen] = useState(false);
    return <>
        <div style={{
        display: "flex",
        gap: "12px"
      }}>
          <Button label="Toggle error toast" onClick={() => setIsErrorOpen(!isErrorOpen)} variant="danger" />
          <Button label="Toggle warning toast" onClick={() => setIsWarningOpen(!isWarningOpen)} variant="secondary" />
          <Button label="Toggle success toast" onClick={() => setIsSuccessOpen(!isSuccessOpen)} variant="primary" />
          <Button label="Toggle info toast" onClick={() => setIsInfoOpen(!isInfoOpen)} variant="secondary" />
          <Button label="Toggle neutral toast" onClick={() => setIsNeutralOpen(!isNeutralOpen)} variant="neutral" />
        </div>
        <ToastQueueProvider>
          <Toast {...args} type={"error"} isOpen={isErrorOpen} message="Error toast" actionButton={<Button label="Mettre à jour" variant="text" />} onClose={() => {
          setIsErrorOpen(false);
        }} />
          <Toast {...args} type={"warning"} message="Warning toast" isOpen={isWarningOpen} actionButton={<Button label="Mettre à jour" variant="text" />} onClose={() => {
          setIsWarningOpen(false);
        }} />
          <Toast {...args} type={"success"} message="Success toast" isOpen={isSuccessOpen} actionButton={<Button label="Mettre à jour" variant="text" />} onClose={() => {
          setIsSuccessOpen(false);
        }} />
          <Toast {...args} type={"info"} message="Info toast" isOpen={isInfoOpen} actionButton={<Button label="Mettre à jour" variant="text" />} onClose={() => {
          setIsInfoOpen(false);
        }} />
          <Toast {...args} type={"neutral"} message="Neutral toast" isOpen={isNeutralOpen} actionButton={<Button label="Mettre à jour" variant="reverse" />} onClose={() => {
          setIsNeutralOpen(false);
        }} iconName="settings" />
        </ToastQueueProvider>
      </>;
  }
}`,...(z=(W=w.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var L,K,G;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
    closable: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Toggle toast" onClick={() => setIsOpen(!isOpen)} style={{
        marginBottom: "16px"
      }} />
        <ToastQueueProvider>
          <Toast {...args} isOpen={isOpen} onClose={() => {
          setIsOpen(false);
        }} actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />} />
        </ToastQueueProvider>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByRole("button", {
      name: "Toggle toast"
    });
    await userEvent.click(toggleButton);
    const toast = within(document.body).getByRole("status");
    const actionButton = await within(toast).getByRole("button", {
      name: "Mettre à jour"
    });
    const closeButton = await within(toast).getByTestId("toast-close-button");
    await userEvent.tab();
    expect(actionButton).toHaveFocus();
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    expect(actionButton).toHaveFocus();
    await userEvent.click(closeButton);
    await waitFor(() => expect(toast).not.toBeInTheDocument());
  }
}`,...(G=(K=C.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};const Ge=["Default","Multiple","KeyboardInteraction"];export{b as Default,C as KeyboardInteraction,w as Multiple,Ge as __namedExportsOrder,Ke as default};
