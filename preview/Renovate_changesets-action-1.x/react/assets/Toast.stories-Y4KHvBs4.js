import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{w as j,u as y,e as B,a as ce}from"./index-DCXJbAaW.js";import{r as a}from"./index-G8LIXM5I.js";import{B as f}from"./Button-cobwPeAi.js";import{i as pe,I as L,R as me,T as de}from"./Icon-DjEid3Hw.js";import{I as A,a as ge}from"./icon.constants-uVuOfrjk.js";import{u as fe}from"./useAnimatedMount-_zPBpYOt.js";import{I as be}from"./IconButton-DU9lNzF3.js";import{O as Oe}from"./Overlay-5j7SEEoz.js";import{c as Ie}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function ye(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}let M;const Te=new Uint8Array(16);function ve(){if(!M){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");M=crypto.getRandomValues.bind(crypto)}return M(Te)}const xe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),q={randomUUID:xe};function he(e,t,n){var i;e=e||{};const o=e.random??((i=e.rng)==null?void 0:i.call(e))??ve();if(o.length<16)throw new Error("Random bytes length must be >= 16");return o[6]=o[6]&15|64,o[8]=o[8]&63|128,ye(o)}function je(e,t,n){return q.randomUUID&&!e?q.randomUUID():he(e)}const X=a.createContext(null),Y=()=>{const e=a.useContext(X);if(!e)throw new Error("Toast component must be used within a ToastQueueProvider");return e},Be=(e,t)=>{const[n,o]=a.useState(t),{isFirstInQueue:i,isInQueue:r,queue:p}=Y(),u=a.useCallback(()=>{o(!1)},[]),c=()=>{o(!0)};return a.useEffect(()=>{p.length>0&&(i(e)?c():r(e)&&u())},[p.length,i,r,u,e]),{isInternalOpen:n,hideToast:u,showToast:c}},we=3e3,Ce=5e3,Se=8e3,ke={short:we,medium:Ce,long:Se},Ee=({shouldStartTimer:e,duration:t},n)=>{const o=a.useRef(null),i=a.useCallback(()=>{o.current=setTimeout(()=>{n()},ke[t])},[t,n]),r=a.useCallback(()=>{o.current&&(clearTimeout(o.current),o.current=null)},[]);return a.useEffect(()=>(e&&r(),()=>{r()}),[i,r,e]),{initializeTimer:i,removeTimer:r}},Me="_toast_4mdqo_3",T={toast:Me,"toast-message":"_toast-message_4mdqo_55","toast-icon":"_toast-icon_4mdqo_70","toast-content":"_toast-content_4mdqo_73"},d=a.forwardRef(({id:e,message:t,type:n="error",closable:o=!1,placement:i="bottom-right",isOpen:r=!0,autoDismiss:p=!0,actionButtonLabel:u,onActionButtonClick:c,duration:g="medium",onClose:m,iconName:O,showLeftIcon:N=!0,showActionButton:Z=!0,...R},$)=>{const v=!!u&&Z,x=p&&!v,[I]=a.useState(e||je()),{isInternalOpen:D,hideToast:_}=Be(I,r),{addToQueue:Q,removeFromQueue:U}=Y(),{shouldRender:ee,isAnimating:te}=fe(D,300),{initializeTimer:se,removeTimer:k}=Ee({shouldStartTimer:x&&D,duration:g},()=>{h()}),[ne,oe]=i.split("-"),h=a.useCallback(()=>{_(),k(),U(I),m==null||m()},[_,k,U,I,m]);a.useEffect(()=>{r?Q({id:I,hasActionButton:v,type:n}):h()},[r,v,n,x,I,Q,h]);const ae=()=>{h()},re=E=>{E.stopPropagation(),x&&r&&k()},ie=E=>{E.stopPropagation(),x&&se()},ue=N&&n!=="neutral",le=N&&O&&pe(O);return ee&&s.jsx(Oe,{children:s.jsxs("div",{role:"status",className:Ie(T.toast,R.className),"data-type":n,"data-position":ne,"data-alignment":oe,"data-open":te||void 0,ref:$,onMouseOver:re,onMouseOut:ie,...R,children:[s.jsxs("div",{className:T["toast-content"],children:[ue?s.jsx(L,{name:ge[n],size:A.xl,className:T["toast-icon"],"aria-hidden":"true"}):le&&s.jsx(L,{name:O,size:A.xl,className:T["toast-icon"],"aria-hidden":"true"}),s.jsx("span",{className:T["toast-message"],children:t})]}),v&&s.jsx(f,{variant:n==="neutral"?"reverse":"transparent",onClick:c,label:u}),o&&s.jsx(be,{"data-testid":"toast-close-button",name:"close",variant:n==="neutral"?"reverse":"neutral",onClick:ae})]})})});d.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{showActionButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},type:{defaultValue:{value:'"error"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},placement:{defaultValue:{value:'"bottom-right"',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1},autoDismiss:{defaultValue:{value:"true",computed:!1},required:!1},duration:{defaultValue:{value:'"medium"',computed:!1},required:!1},showLeftIcon:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreToastProps"]};const Ne=e=>{const{hasActionButton:t,type:n}=e;if(t)switch(n){case"error":return 1;case"warning":return 3;case"success":return 5;case"info":return 6;default:return 7}else switch(n){case"error":return 2;case"warning":return 4;case"success":return 8;case"info":return 9;default:return 10}},S=({children:e})=>{const[t,n]=a.useState([]),o=a.useCallback(u=>{const c=Ne(u);n(g=>[...g,{id:u.id,priority:c,isOpen:!1}].sort((m,O)=>m.priority-O.priority))},[]),i=a.useCallback(u=>{n(c=>c.filter(g=>g.id!==u))},[]),r=u=>t.length>0&&t[0].id===u,p=u=>t.findIndex(c=>c.id===u)!==-1;return s.jsx(X.Provider,{value:{addToQueue:o,removeFromQueue:i,isFirstInQueue:r,isInQueue:p,queue:t},children:e})};S.__docgenInfo={description:"",methods:[],displayName:"ToastQueueProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Re=Object.keys(me),De=Object.keys(de),Ye={title:"Composants/Toast",tags:["autodocs"],component:d,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...Re,...De].sort((e,t)=>e.localeCompare(t)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},b={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:e=>{const[t,n]=a.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(f,{label:"Toggle toast",onClick:()=>n(!t),style:{marginBottom:"16px"}}),s.jsx(S,{children:s.jsx(d,{...e,isOpen:t,onClose:()=>{n(!1)},actionButtonLabel:"Mettre à jour"})})]})}},w={args:{...b.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:e=>{const[t,n]=a.useState(!1),[o,i]=a.useState(!1),[r,p]=a.useState(!1),[u,c]=a.useState(!1),[g,m]=a.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:"12px"},children:[s.jsx(f,{label:"Toggle error toast",onClick:()=>n(!t),variant:"danger"}),s.jsx(f,{label:"Toggle warning toast",onClick:()=>c(!u),variant:"secondary"}),s.jsx(f,{label:"Toggle success toast",onClick:()=>i(!o),variant:"primary"}),s.jsx(f,{label:"Toggle info toast",onClick:()=>p(!r),variant:"secondary"}),s.jsx(f,{label:"Toggle neutral toast",onClick:()=>m(!g),variant:"neutral"})]}),s.jsxs(S,{children:[s.jsx(d,{...e,type:"error",isOpen:t,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{n(!1)}}),s.jsx(d,{...e,type:"warning",message:"Warning toast",isOpen:u,actionButtonLabel:"Mettre à jour",onClose:()=>{c(!1)}}),s.jsx(d,{...e,type:"success",message:"Success toast",isOpen:o,actionButtonLabel:"Mettre à jour",onClose:()=>{i(!1)}}),s.jsx(d,{...e,type:"info",message:"Info toast",isOpen:r,actionButtonLabel:"Mettre à jour",onClose:()=>{p(!1)}}),s.jsx(d,{...e,type:"neutral",message:"Neutral toast",isOpen:g,actionButtonLabel:"Mettre à jour",onClose:()=>{m(!1)},iconName:"settings"})]})]})}},C={args:{...b.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:e=>{const[t,n]=a.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(f,{label:"Toggle toast",onClick:()=>n(!t),style:{marginBottom:"16px"}}),s.jsx(S,{children:s.jsx(d,{...e,isOpen:t,onClose:()=>{n(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:e})=>{const n=await j(e).getByRole("button",{name:"Toggle toast"});await y.click(n);const o=j(document.body).getByRole("status"),i=await j(o).getByRole("button",{name:"Mettre à jour"}),r=await j(o).getByTestId("toast-close-button");await y.tab(),B(i).toHaveFocus(),await y.tab(),B(r).toHaveFocus(),await y.tab({shift:!0}),B(i).toHaveFocus(),await y.click(r),await ce(()=>B(o).not.toBeInTheDocument())}};var F,P,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
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
        }} actionButtonLabel="Mettre à jour" />
        </ToastQueueProvider>
      </>;
  }
}`,...(V=(P=b.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var H,W,z;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
          <Toast {...args} type={"error"} isOpen={isErrorOpen} message="Error toast" actionButtonLabel="Mettre à jour" onClose={() => {
          setIsErrorOpen(false);
        }} />
          <Toast {...args} type={"warning"} message="Warning toast" isOpen={isWarningOpen} actionButtonLabel="Mettre à jour" onClose={() => {
          setIsWarningOpen(false);
        }} />
          <Toast {...args} type={"success"} message="Success toast" isOpen={isSuccessOpen} actionButtonLabel="Mettre à jour" onClose={() => {
          setIsSuccessOpen(false);
        }} />
          <Toast {...args} type={"info"} message="Info toast" isOpen={isInfoOpen} actionButtonLabel="Mettre à jour" onClose={() => {
          setIsInfoOpen(false);
        }} />
          <Toast {...args} type={"neutral"} message="Neutral toast" isOpen={isNeutralOpen} actionButtonLabel="Mettre à jour" onClose={() => {
          setIsNeutralOpen(false);
        }} iconName="settings" />
        </ToastQueueProvider>
      </>;
  }
}`,...(z=(W=w.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var K,G,J;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        }} actionButtonLabel="Mettre à jour" />
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
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Ze=["Default","Multiple","KeyboardInteraction"];export{b as Default,C as KeyboardInteraction,w as Multiple,Ze as __namedExportsOrder,Ye as default};
