import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as h,u as I,e as j,a as ie}from"./index-L8OlCEhE.js";import{r as o}from"./index-G8LIXM5I.js";import{B as g}from"./Button-CREFt1b7.js";import{i as le,I as Q,R as ue,T as ce}from"./Icon-DjEid3Hw.js";import{I as L,a as pe}from"./icon.constants-uVuOfrjk.js";import{u as me}from"./useAnimatedMount-_zPBpYOt.js";import{I as de}from"./IconButton-YTq4p1Gm.js";import{O as ge}from"./Overlay-CtOPxSY4.js";import{c as fe}from"./index-DSdvzt-y.js";import{v as Oe}from"./v4-CtRu48qb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-DQgmSw14.js";import"./index-B7EolvnA.js";import"./index-BLHw34Di.js";const K=o.createContext(null),G=()=>{const t=o.useContext(K);if(!t)throw new Error("Toast component must be used within a ToastQueueProvider");return t},be=(t,n)=>{const[s,r]=o.useState(n),{isFirstInQueue:l,isInQueue:a,queue:c}=G(),i=o.useCallback(()=>{r(!1)},[]),u=()=>{r(!0)};return o.useEffect(()=>{c.length>0&&(l(t)?u():a(t)&&i())},[c.length,l,a,i,t]),{isInternalOpen:s,hideToast:i,showToast:u}},Ie=3e3,Te=5e3,ve=8e3,ye={short:Ie,medium:Te,long:ve},xe=({shouldStartTimer:t,duration:n},s)=>{const r=o.useRef(null),l=o.useCallback(()=>{r.current=setTimeout(()=>{s()},ye[n])},[n,s]),a=o.useCallback(()=>{r.current&&(clearTimeout(r.current),r.current=null)},[]);return o.useEffect(()=>(t&&a(),()=>{a()}),[l,a,t]),{initializeTimer:l,removeTimer:a}},he="_toast_15749_29",T={toast:he,"toast-message":"_toast-message_15749_81","toast-icon":"_toast-icon_15749_96","toast-content":"_toast-content_15749_99"},m=o.forwardRef(({id:t,message:n,type:s="error",closable:r=!1,placement:l="bottom-right",isOpen:a=!0,autoDismiss:c=!0,actionButtonLabel:i,onActionButtonClick:u,duration:d="medium",onClose:p,iconName:O,showLeftIcon:M=!0,showActionButton:J=!0,...E},X)=>{const v=!!i&&J,y=c&&!v,[b]=o.useState(t||Oe()),{isInternalOpen:N,hideToast:_}=be(b,a),{addToQueue:R,removeFromQueue:D}=G(),{shouldRender:Y,isAnimating:Z}=me(N,300),{initializeTimer:$,removeTimer:S}=xe({shouldStartTimer:y&&N,duration:d},()=>{x()}),[ee,te]=l.split("-"),x=o.useCallback(()=>{_(),S(),D(b),p==null||p()},[_,S,D,b,p]);o.useEffect(()=>{a?R({id:b,hasActionButton:v,type:s}):x()},[a,v,s,y,b,R,x]);const se=()=>{x()},ne=k=>{k.stopPropagation(),y&&a&&S()},oe=k=>{k.stopPropagation(),y&&$()},ae=M&&s!=="neutral",re=M&&O&&le(O);return Y&&e.jsx(ge,{children:e.jsxs("div",{role:"status",className:fe(T.toast,E.className),"data-type":s,"data-position":ee,"data-alignment":te,"data-open":Z||void 0,ref:X,onMouseOver:ne,onMouseOut:oe,...E,children:[e.jsxs("div",{className:T["toast-content"],children:[ae?e.jsx(Q,{name:pe[s],size:L.xl,className:T["toast-icon"],"aria-hidden":"true"}):re&&e.jsx(Q,{name:O,size:L.xl,className:T["toast-icon"],"aria-hidden":"true"}),e.jsx("span",{className:T["toast-message"],children:n})]}),v&&e.jsx(g,{variant:s==="neutral"?"reverse":"transparent",onClick:u,label:i}),r&&e.jsx(de,{"data-testid":"toast-close-button",name:"close",variant:s==="neutral"?"reverse":"neutral",onClick:se})]})})});m.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{showActionButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},type:{defaultValue:{value:'"error"',computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},placement:{defaultValue:{value:'"bottom-right"',computed:!1},required:!1},isOpen:{defaultValue:{value:"true",computed:!1},required:!1},autoDismiss:{defaultValue:{value:"true",computed:!1},required:!1},duration:{defaultValue:{value:'"medium"',computed:!1},required:!1},showLeftIcon:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["coreToastProps"]};const je=t=>{const{hasActionButton:n,type:s}=t;if(n)switch(s){case"error":return 1;case"warning":return 3;case"success":return 5;case"info":return 6;default:return 7}else switch(s){case"error":return 2;case"warning":return 4;case"success":return 8;case"info":return 9;default:return 10}},C=({children:t})=>{const[n,s]=o.useState([]),r=o.useCallback(i=>{const u=je(i);s(d=>[...d,{id:i.id,priority:u,isOpen:!1}].sort((p,O)=>p.priority-O.priority))},[]),l=o.useCallback(i=>{s(u=>u.filter(d=>d.id!==i))},[]),a=i=>n.length>0&&n[0].id===i,c=i=>n.findIndex(u=>u.id===i)!==-1;return e.jsx(K.Provider,{value:{addToQueue:r,removeFromQueue:l,isFirstInQueue:a,isInQueue:c,queue:n},children:t})};C.__docgenInfo={description:"",methods:[],displayName:"ToastQueueProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Be=Object.keys(ue),we=Object.keys(ce),He={title:"Composants/Toast",tags:["autodocs"],component:m,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...Be,...we].sort((t,n)=>t.localeCompare(n)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},f={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:t=>{const[n,s]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(g,{label:"Toggle toast",onClick:()=>s(!n),style:{marginBottom:"16px"}}),e.jsx(C,{children:e.jsx(m,{...t,isOpen:n,onClose:()=>{s(!1)},actionButtonLabel:"Mettre à jour"})})]})}},B={args:{...f.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:t=>{const[n,s]=o.useState(!1),[r,l]=o.useState(!1),[a,c]=o.useState(!1),[i,u]=o.useState(!1),[d,p]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(g,{label:"Toggle error toast",onClick:()=>s(!n),variant:"danger"}),e.jsx(g,{label:"Toggle warning toast",onClick:()=>u(!i),variant:"secondary"}),e.jsx(g,{label:"Toggle success toast",onClick:()=>l(!r),variant:"primary"}),e.jsx(g,{label:"Toggle info toast",onClick:()=>c(!a),variant:"secondary"}),e.jsx(g,{label:"Toggle neutral toast",onClick:()=>p(!d),variant:"neutral"})]}),e.jsxs(C,{children:[e.jsx(m,{...t,type:"error",isOpen:n,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{s(!1)}}),e.jsx(m,{...t,type:"warning",message:"Warning toast",isOpen:i,actionButtonLabel:"Mettre à jour",onClose:()=>{u(!1)}}),e.jsx(m,{...t,type:"success",message:"Success toast",isOpen:r,actionButtonLabel:"Mettre à jour",onClose:()=>{l(!1)}}),e.jsx(m,{...t,type:"info",message:"Info toast",isOpen:a,actionButtonLabel:"Mettre à jour",onClose:()=>{c(!1)}}),e.jsx(m,{...t,type:"neutral",message:"Neutral toast",isOpen:d,actionButtonLabel:"Mettre à jour",onClose:()=>{p(!1)},iconName:"settings"})]})]})}},w={args:{...f.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:t=>{const[n,s]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(g,{label:"Toggle toast",onClick:()=>s(!n),style:{marginBottom:"16px"}}),e.jsx(C,{children:e.jsx(m,{...t,isOpen:n,onClose:()=>{s(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:t})=>{const s=await h(t).getByRole("button",{name:"Toggle toast"});await I.click(s);const r=h(document.body).getByRole("status"),l=await h(r).getByRole("button",{name:"Mettre à jour"}),a=await h(r).getByTestId("toast-close-button");await I.tab(),j(l).toHaveFocus(),await I.tab(),j(a).toHaveFocus(),await I.tab({shift:!0}),j(l).toHaveFocus(),await I.click(a),await ie(()=>j(r).not.toBeInTheDocument())}};var A,F,P;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(F=f.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var q,U,W;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(U=B.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var H,V,z;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(V=w.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const Ve=["Default","Multiple","KeyboardInteraction"];export{f as Default,w as KeyboardInteraction,B as Multiple,Ve as __namedExportsOrder,He as default};
