import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{w as B,u as y,e as w,a as ce}from"./index-DCXJbAaW.js";import{r as a}from"./index-G8LIXM5I.js";import{B as f}from"./Button-BGjTm3Lt.js";import{i as pe,I as L,R as me,T as de}from"./Icon-DjEid3Hw.js";import{I as A,a as ge}from"./icon.constants-B1EkCXYG.js";import{u as fe}from"./useAnimatedMount-_zPBpYOt.js";import{I as be}from"./IconButton-DLtPB6Kc.js";import{O as Oe}from"./Overlay-5j7SEEoz.js";import{c as Ie}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-yqZBktoR.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function ye(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}let N;const Te=new Uint8Array(16);function ve(){if(!N){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");N=crypto.getRandomValues.bind(crypto)}return N(Te)}const xe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),F={randomUUID:xe};function je(e,t,n){var l;e=e||{};const o=e.random??((l=e.rng)==null?void 0:l.call(e))??ve();if(o.length<16)throw new Error("Random bytes length must be >= 16");return o[6]=o[6]&15|64,o[8]=o[8]&63|128,ye(o)}function he(e,t,n){return F.randomUUID&&!e?F.randomUUID():je(e)}const X=a.createContext(null),Y=()=>{const e=a.useContext(X);if(!e)throw new Error("Toast component must be used within a ToastQueueProvider");return e},Be=(e,t)=>{const[n,o]=a.useState(t),{isFirstInQueue:l,isInQueue:r,queue:d}=Y(),m=a.useCallback(()=>{o(!1)},[]),u=()=>{o(!0)};return a.useEffect(()=>{d.length>0&&(l(e)?u():r(e)&&m())},[d.length,l,r,m,e]),{isInternalOpen:n,hideToast:m,showToast:u}},we=3e3,Ce=5e3,Se=8e3,ke={short:we,medium:Ce,long:Se},Ee=({shouldStartTimer:e,duration:t},n)=>{const o=a.useRef(null),l=a.useCallback(()=>{o.current=setTimeout(()=>{n()},ke[t])},[t,n]),r=a.useCallback(()=>{o.current&&(clearTimeout(o.current),o.current=null)},[]);return a.useEffect(()=>(e?l():r(),()=>{r()}),[l,r,e]),{initializeTimer:l,removeTimer:r}},Me="_toast_1jesl_3",T={toast:Me,"toast-message":"_toast-message_1jesl_55","toast-icon":"_toast-icon_1jesl_70","toast-content":"_toast-content_1jesl_73"},g=a.forwardRef(({id:e,message:t,type:n="error",closable:o=!1,placement:l="bottom-right",isOpen:r=!0,autoDismiss:d=!0,actionButtonLabel:m,onActionButtonClick:u,duration:p="medium",onClose:i,iconName:O,showLeftIcon:v=!0,showActionButton:Z=!0,...R},$)=>{const x=!!m&&Z,j=d&&!x,[I]=a.useState(e||he()),{isInternalOpen:D,hideToast:_}=Be(I,r),{addToQueue:Q,removeFromQueue:U}=Y(),{shouldRender:ee,isAnimating:te}=fe(D,300),{initializeTimer:se,removeTimer:E}=Ee({shouldStartTimer:j&&D,duration:p},()=>{h()}),[ne,oe]=l.split("-"),h=a.useCallback(()=>{_(),E(),U(I),i==null||i()},[_,E,U,I,i]);a.useEffect(()=>{r?Q({id:I,hasActionButton:x,type:n,isAutoDismiss:j}):h()},[r,x,n,j,I,Q,h]);const ae=()=>{h()},re=M=>{M.stopPropagation(),j&&r&&E()},ie=M=>{M.stopPropagation(),se()},le=v&&n!=="neutral",ue=v&&O&&pe(O);return ee&&s.jsx(Oe,{children:s.jsxs("div",{role:"status",className:Ie(T.toast,R.className),"data-type":n,"data-position":ne,"data-alignment":oe,"data-open":te||void 0,ref:$,onMouseOver:re,onMouseOut:ie,...R,children:[s.jsxs("div",{className:T["toast-content"],children:[le?s.jsx(L,{name:ge[n],size:A.xl,className:T["toast-icon"],"aria-hidden":"true"}):ue&&s.jsx(L,{name:O,size:A.xl,className:T["toast-icon"],"aria-hidden":"true"}),s.jsx("span",{className:T["toast-message"],children:t})]}),x&&s.jsx(f,{variant:n==="neutral"?"reverse":"transparent",onClick:u,label:m}),o&&s.jsx(be,{"data-testid":"toast-close-button",name:"close",variant:n==="neutral"?"reverse":"neutral",onClick:ae})]})})});g.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{showActionButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},type:{defaultValue:{value:'"error"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},placement:{defaultValue:{value:'"bottom-right"',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1},autoDismiss:{defaultValue:{value:"true",computed:!1},required:!1},duration:{defaultValue:{value:'"medium"',computed:!1},required:!1},showLeftIcon:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreToastProps"]};const k=({children:e})=>{const[t,n]=a.useState([]),o=a.useCallback(u=>{const p=m(u);n(i=>[...i,{id:u.id,priority:p,isOpen:!1}].sort((O,v)=>O.priority-v.priority))},[]),l=a.useCallback(u=>{n(p=>p.filter(i=>i.id!==u))},[]),r=u=>t.length>0&&t[0].id===u,d=u=>t.findIndex(p=>p.id===u)!==-1,m=u=>{const{hasActionButton:p,type:i}=u;return p?i==="error"?1:i==="warning"?3:i==="success"?5:i==="info"?6:7:i==="error"?2:i==="warning"?4:i==="success"?8:i==="info"?9:10};return s.jsx(X.Provider,{value:{addToQueue:o,removeFromQueue:l,isFirstInQueue:r,isInQueue:d,queue:t},children:e})};k.__docgenInfo={description:"",methods:[],displayName:"ToastQueueProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ne=Object.keys(me),Re=Object.keys(de),Je={title:"Toast",tags:["autodocs"],component:g,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...Ne,...Re].sort((e,t)=>e.localeCompare(t)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},b={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,closable:!0},render:e=>{const[t,n]=a.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(f,{label:"Toggle toast",onClick:()=>n(!t),style:{marginBottom:"16px"}}),s.jsx(k,{children:s.jsx(g,{...e,isOpen:t,onClose:()=>{n(!1)},actionButtonLabel:"Mettre à jour"})})]})}},C={args:{...b.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:e=>{const[t,n]=a.useState(!1),[o,l]=a.useState(!1),[r,d]=a.useState(!1),[m,u]=a.useState(!1),[p,i]=a.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:"12px"},children:[s.jsx(f,{label:"Toggle error toast",onClick:()=>n(!t),variant:"danger"}),s.jsx(f,{label:"Toggle warning toast",onClick:()=>u(!m),variant:"secondary"}),s.jsx(f,{label:"Toggle success toast",onClick:()=>l(!o),variant:"primary"}),s.jsx(f,{label:"Toggle info toast",onClick:()=>d(!r),variant:"secondary"}),s.jsx(f,{label:"Toggle neutral toast",onClick:()=>i(!p),variant:"neutral"})]}),s.jsxs(k,{children:[s.jsx(g,{...e,type:"error",isOpen:t,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{n(!1)}}),s.jsx(g,{...e,type:"warning",message:"Warning toast",isOpen:m,actionButtonLabel:"Mettre à jour",onClose:()=>{u(!1)}}),s.jsx(g,{...e,type:"success",message:"Success toast",isOpen:o,actionButtonLabel:"Mettre à jour",onClose:()=>{l(!1)}}),s.jsx(g,{...e,type:"info",message:"Info toast",isOpen:r,actionButtonLabel:"Mettre à jour",onClose:()=>{d(!1)}}),s.jsx(g,{...e,type:"neutral",message:"Neutral toast",isOpen:p,actionButtonLabel:"Mettre à jour",onClose:()=>{i(!1)},iconName:"settings"})]})]})}},S={args:{...b.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:e=>{const[t,n]=a.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(f,{label:"Toggle toast",onClick:()=>n(!t),style:{marginBottom:"16px"}}),s.jsx(k,{children:s.jsx(g,{...e,isOpen:t,onClose:()=>{n(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:e})=>{const n=await B(e).getByRole("button",{name:"Toggle toast"});await y.click(n);const o=B(document.body).getByRole("status"),l=await B(o).getByRole("button",{name:"Mettre à jour"}),r=await B(o).getByTestId("toast-close-button");await y.tab(),w(l).toHaveFocus(),await y.tab(),w(r).toHaveFocus(),await y.tab({shift:!0}),w(l).toHaveFocus(),await y.click(r),await ce(()=>w(o).not.toBeInTheDocument())}};var P,V,q;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        }} actionButtonLabel="Mettre à jour" />
        </ToastQueueProvider>
      </>;
  }
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var H,W,z;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(W=C.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var K,G,J;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Xe=["Default","Multiple","KeyboardInteraction"];export{b as Default,S as KeyboardInteraction,C as Multiple,Xe as __namedExportsOrder,Je as default};
