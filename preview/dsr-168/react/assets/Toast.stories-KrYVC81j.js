import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{w as I,u as x,e as O,a as te}from"./index-DCXJbAaW.js";import{r as a}from"./index-G8LIXM5I.js";import{B as d}from"./Button-BGjTm3Lt.js";import{I as se,a as ne}from"./icon.constants-B1EkCXYG.js";import{u as oe}from"./useAnimatedMount-_zPBpYOt.js";import{I as ae}from"./Icon-DjEid3Hw.js";import{I as re}from"./IconButton-DLtPB6Kc.js";import{O as ie}from"./Overlay-5j7SEEoz.js";import{c as ue}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-yqZBktoR.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function le(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}let R;const ce=new Uint8Array(16);function pe(){if(!R){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");R=crypto.getRandomValues.bind(crypto)}return R(ce)}const me=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Q={randomUUID:me};function de(e,t,o){var r;e=e||{};const n=e.random??((r=e.rng)==null?void 0:r.call(e))??pe();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,le(n)}function ge(e,t,o){return Q.randomUUID&&!e?Q.randomUUID():de(e)}const L=a.createContext(null),K=()=>{const e=a.useContext(L);if(!e)throw new Error("Toast component must be used within a ToastQueueProvider");return e},fe=(e,t)=>{const[o,n]=a.useState(t),{isFirstInQueue:r,isInQueue:c,queue:u}=K(),g=a.useCallback(()=>{n(!1)},[]),i=()=>{n(!0)};return a.useEffect(()=>{u.length>0&&(r(e)?i():c(e)&&g())},[u.length,r,c,g,e]),{isInternalOpen:o,hideToast:g,showToast:i}},ye=3e3,ve=5e3,be=8e3,xe={short:ye,medium:ve,long:be},Be=({shouldStartTimer:e,duration:t},o,n)=>{const r=a.useRef(null),c=a.useCallback(()=>{e&&(r.current=setTimeout(()=>{n()},xe[t]))},[e,t,n]),u=a.useCallback(()=>{r.current&&(clearTimeout(r.current),r.current=null)},[]);return a.useEffect(()=>(o?c():u(),()=>{u()}),[o,c,u]),{initializeTimer:c,removeTimer:u}},Ie="_toast_zuvnz_3",T={toast:Ie,"toast-message":"_toast-message_zuvnz_55","toast-icon":"_toast-icon_zuvnz_70","toast-content":"_toast-content_zuvnz_73"},f=a.forwardRef(({id:e,message:t,actionButton:o,type:n="error",closable:r=!1,placement:c="bottom-right",isOpen:u=!0,autoDismiss:g=!0,duration:i="medium",onClose:m,...p},w)=>{const y=g&&!o,[b]=a.useState(e||ge()),{isInternalOpen:M,hideToast:D}=fe(b,u),{addToQueue:_,removeFromQueue:k}=K(),{shouldRender:G,isAnimating:J}=oe(M,300),{initializeTimer:W,removeTimer:C}=Be({shouldStartTimer:y,duration:i},M,()=>{B()}),[X,Y]=c.split("-"),B=a.useCallback(()=>{D(),C(),k(b),m==null||m()},[D,C,k,b,m]);a.useEffect(()=>{u?_({id:b,hasButtonAction:!!o,type:n,isAutoDismiss:y}):B()},[u,o,n,y,b,_,B]);const Z=()=>{B()},$=E=>{E.stopPropagation(),y&&u&&C()},ee=E=>{E.stopPropagation(),W()};return G&&s.jsx(ie,{children:s.jsxs("div",{role:"status",className:ue(T.toast,p.className),"data-type":n,"data-position":X,"data-alignment":Y,"data-open":J||void 0,ref:w,onMouseOver:$,onMouseOut:ee,...p,children:[s.jsxs("div",{className:T["toast-content"],children:[n!=="neutral"&&s.jsx(ae,{name:ne[n],size:se.xl,className:T["toast-icon"],"aria-hidden":"true"}),s.jsx("span",{className:T["toast-message"],children:t})]}),o,r&&s.jsx(re,{"data-testid":"toast-close-button",name:"close",variant:n==="neutral"?"reverse":"neutral",onClick:Z})]})})});f.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{actionButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},type:{defaultValue:{value:'"error"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},placement:{defaultValue:{value:'"bottom-right"',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1},autoDismiss:{defaultValue:{value:"true",computed:!1},required:!1},duration:{defaultValue:{value:'"medium"',computed:!1},required:!1}},composes:["coreToastProps"]};const S=({children:e})=>{const[t,o]=a.useState([]),n=a.useCallback(i=>{const m=g(i);o(p=>[...p,{id:i.id,priority:m,isOpen:!1}].sort((w,y)=>w.priority-y.priority))},[]),r=a.useCallback(i=>{o(m=>m.filter(p=>p.id!==i))},[]),c=i=>t.length>0&&t[0].id===i,u=i=>t.findIndex(m=>m.id===i)!==-1,g=i=>{const{hasButtonAction:m,type:p}=i;return m?p==="error"?1:p==="success"?3:p==="info"?4:p==="neutral"?5:9:p==="error"?2:p==="success"?6:p==="info"?7:p==="neutral"?8:10};return s.jsx(L.Provider,{value:{addToQueue:n,removeFromQueue:r,isFirstInQueue:c,isInQueue:u,queue:t},children:e})};S.__docgenInfo={description:"",methods:[],displayName:"ToastQueueProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Pe={title:"Toast",tags:["autodocs"],component:f,argTypes:{message:{control:"text"},actionButton:{control:!1},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]}}},v={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:e=>{const[t,o]=a.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(d,{label:"Toggle toast",onClick:()=>o(!t),style:{marginBottom:"16px"}}),s.jsx(S,{children:s.jsx(f,{...e,isOpen:t,onClose:()=>{o(!1)},actionButton:s.jsx(d,{label:"Mettre à jour",variant:e.type==="neutral"?"reverse":"text"})})})]})}},h={args:{...v.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"top-left"},render:e=>{const[t,o]=a.useState(!1),[n,r]=a.useState(!1),[c,u]=a.useState(!1),[g,i]=a.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(d,{label:"Toggle error toast",onClick:()=>o(!t),style:{marginBottom:"16px"},variant:"danger"}),s.jsx(d,{label:"Toggle success toast",onClick:()=>r(!n),style:{marginBottom:"16px"},variant:"primary"}),s.jsx(d,{label:"Toggle info toast",onClick:()=>u(!c),style:{marginBottom:"16px"},variant:"secondary"}),s.jsx(d,{label:"Toggle success bis toast",onClick:()=>i(!g),style:{marginBottom:"16px"},variant:"secondary"}),s.jsxs(S,{children:[s.jsx(f,{...e,id:"my-toast-error-z",type:"error",isOpen:t,message:"Error toast",actionButton:s.jsx(d,{label:"Mettre à jour",variant:e.type==="neutral"?"reverse":"text"}),onClose:()=>{o(!1)}}),s.jsx(f,{...e,type:"success",isOpen:n,actionButton:s.jsx(d,{label:"Mettre à jour",variant:e.type==="neutral"?"reverse":"text"}),onClose:()=>{r(!1)}}),s.jsx(f,{...e,message:"Info toast",isOpen:c,actionButton:s.jsx(d,{label:"Mettre à jour",variant:e.type==="neutral"?"reverse":"text"}),onClose:()=>{u(!1)}}),s.jsx(f,{...e,type:"success",message:"Success bis toast",isOpen:g,actionButton:s.jsx(d,{label:"Mettre à jour",variant:e.type==="neutral"?"reverse":"text"}),onClose:()=>{i(!1)}})]})]})}},j={args:{...v.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:e=>{const[t,o]=a.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(d,{label:"Toggle toast",onClick:()=>o(!t),style:{marginBottom:"16px"}}),s.jsx(S,{children:s.jsx(f,{...e,isOpen:t,onClose:()=>{o(!1)},actionButton:s.jsx(d,{label:"Mettre à jour",variant:e.type==="neutral"?"reverse":"text"})})})]})},play:async({canvasElement:e})=>{const o=await I(e).getByRole("button",{name:"Toggle toast"});await x.click(o);const n=I(document.body).getByRole("status"),r=await I(n).getByRole("button",{name:"Mettre à jour"}),c=await I(n).getByTestId("toast-close-button");await x.tab(),O(r).toHaveFocus(),await x.tab(),O(c).toHaveFocus(),await x.tab({shift:!0}),O(r).toHaveFocus(),await x.click(c),await te(()=>O(n).not.toBeInTheDocument())}};var U,P,F;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        }} actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />} />
        </ToastQueueProvider>
      </>;
  }
}`,...(F=(P=v.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var z,A,N;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: true,
    duration: "short",
    closable: true,
    placement: "top-left"
  },
  render: args => {
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [isSuccessBis, setIsSuccessBis] = useState(false);
    return <>
        <Button label="Toggle error toast" onClick={() => setIsErrorOpen(!isErrorOpen)} style={{
        marginBottom: "16px"
      }} variant="danger" />
        <Button label="Toggle success toast" onClick={() => setIsSuccessOpen(!isSuccessOpen)} style={{
        marginBottom: "16px"
      }} variant="primary" />
        <Button label="Toggle info toast" onClick={() => setIsInfoOpen(!isInfoOpen)} style={{
        marginBottom: "16px"
      }} variant="secondary" />
        <Button label="Toggle success bis toast" onClick={() => setIsSuccessBis(!isSuccessBis)} style={{
        marginBottom: "16px"
      }} variant="secondary" />
        <ToastQueueProvider>
          <Toast {...args} id="my-toast-error-z" type={"error"} isOpen={isErrorOpen} message="Error toast" actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />} onClose={() => {
          setIsErrorOpen(false);
        }} />
          <Toast {...args} type={"success"} isOpen={isSuccessOpen} actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />} onClose={() => {
          setIsSuccessOpen(false);
        }} />
          <Toast {...args} message="Info toast" isOpen={isInfoOpen} actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />} onClose={() => {
          setIsInfoOpen(false);
        }} />
          <Toast {...args} type={"success"} message="Success bis toast" isOpen={isSuccessBis} actionButton={<Button label="Mettre à jour" variant={args.type === "neutral" ? "reverse" : "text"} />} onClose={() => {
          setIsSuccessBis(false);
        }} />
        </ToastQueueProvider>
      </>;
  }
}`,...(N=(A=h.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var q,H,V;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(H=j.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};const Fe=["Default","Multiple","KeyboardInteraction"];export{v as Default,j as KeyboardInteraction,h as Multiple,Fe as __namedExportsOrder,Pe as default};
