import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{w as o,u as r,e as l,a as w}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{B as u}from"./Button-B3EnjUD7.js";import{R as K,T as q}from"./Icon-DBkoQNiA.js";import{T as i,a as O}from"./ToastQueueProvider-B-uHL1x1.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-Hz0GUguM.js";import"./id.utils-DsO5Uws7.js";import"./useAnimatedMount-_zPBpYOt.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const z=Object.keys(K),G=Object.keys(q),bt={title:"Composants/Toast",tags:["autodocs"],component:i,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...z,...G].sort((n,e)=>n.localeCompare(e)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},p={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:n=>{const[e,s]=c.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(u,{label:"Toggle toast",onClick:()=>s(!e),style:{marginBottom:"16px"}}),t.jsx(O,{children:t.jsx(i,{...n,isOpen:e,onClose:()=>{s(!1)},actionButtonLabel:"Mettre à jour"})})]})}},d={tags:["!autodocs"],args:{message:"Notification",duration:"short",showActionButton:!1},render:p.render,play:async({canvasElement:n})=>{await r.click(o(n).getByRole("button",{name:"Toggle toast"}));const e=await o(document.body).findByRole("status"),s=o(e).getByRole("button",{name:"Fermer le toast"});await new Promise(a=>setTimeout(a,3500)),l(e).toBeInTheDocument(),await r.click(s),await w(()=>l(e).not.toBeInTheDocument())}},b={tags:["!autodocs"],args:{message:"Notification",autoDismiss:!1,closable:!1,showActionButton:!1},render:p.render,play:async({canvasElement:n})=>{await r.click(o(n).getByRole("button",{name:"Toggle toast"}));const e=await o(document.body).findByRole("status");await r.click(o(e).getByRole("button",{name:"Fermer le toast"})),await w(()=>l(e).not.toBeInTheDocument())}},f={args:{...p.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:n=>{const[e,s]=c.useState(!1),[a,m]=c.useState(!1),[g,T]=c.useState(!1),[I,v]=c.useState(!1),[h,j]=c.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:"12px"},children:[t.jsx(u,{label:"Toggle error toast",onClick:()=>s(!e),variant:"danger"}),t.jsx(u,{label:"Toggle warning toast",onClick:()=>v(!I),variant:"secondary"}),t.jsx(u,{label:"Toggle success toast",onClick:()=>m(!a),variant:"primary"}),t.jsx(u,{label:"Toggle info toast",onClick:()=>T(!g),variant:"secondary"}),t.jsx(u,{label:"Toggle neutral toast",onClick:()=>j(!h),variant:"neutral"})]}),t.jsxs(O,{children:[t.jsx(i,{...n,type:"error",isOpen:e,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{s(!1)}}),t.jsx(i,{...n,type:"warning",message:"Warning toast",isOpen:I,actionButtonLabel:"Mettre à jour",onClose:()=>{v(!1)}}),t.jsx(i,{...n,type:"success",message:"Success toast",isOpen:a,actionButtonLabel:"Mettre à jour",onClose:()=>{m(!1)}}),t.jsx(i,{...n,type:"info",message:"Info toast",isOpen:g,actionButtonLabel:"Mettre à jour",onClose:()=>{T(!1)}}),t.jsx(i,{...n,type:"neutral",message:"Neutral toast",isOpen:h,actionButtonLabel:"Mettre à jour",onClose:()=>{j(!1)},iconName:"settings"})]})]})}},B={tags:["!autodocs"],args:{...p.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:n=>{const[e,s]=c.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(u,{label:"Toggle toast",onClick:()=>s(!e),style:{marginBottom:"16px"}}),t.jsx(O,{children:t.jsx(i,{...n,isOpen:e,onClose:()=>{s(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:n})=>{const s=await o(n).getByRole("button",{name:"Toggle toast"});await r.click(s);const a=o(document.body).getByRole("status"),m=await o(a).getByRole("button",{name:"Mettre à jour"}),g=await o(a).getByRole("button",{name:"Fermer le toast"});await r.tab(),l(m).toHaveFocus(),await r.tab(),l(g).toHaveFocus(),await r.tab({shift:!0}),l(m).toHaveFocus(),await r.click(g),await w(()=>l(a).not.toBeInTheDocument())}},J=3e3,y={tags:["!autodocs","skip-ci"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:n=>{const[e,s]=c.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(u,{label:"Toggle toast",onClick:()=>s(!e),style:{marginBottom:"16px"}}),t.jsx(O,{children:t.jsx(i,{...n,isOpen:e,onClose:()=>{s(!1)}})})]})},play:async({canvasElement:n})=>{const s=await o(n).getByRole("button",{name:"Toggle toast"});await r.click(s);const a=o(document.body).getByRole("status"),m=await o(a).getByRole("button",{name:"Fermer le toast"});await r.tab(),l(m).toHaveFocus(),await new Promise(g=>setTimeout(g,J+500)),l(a).toBeInTheDocument()}};var x,S,C;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,k,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    message: "Notification",
    duration: "short",
    showActionButton: false
  },
  render: Default.render,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Toggle toast"
    }));
    const toast = await within(document.body).findByRole("status");
    const closeButton = within(toast).getByRole("button", {
      name: "Fermer le toast"
    });
    await new Promise(resolve => setTimeout(resolve, 3500));
    expect(toast).toBeInTheDocument();
    await userEvent.click(closeButton);
    await waitFor(() => expect(toast).not.toBeInTheDocument());
  }
}`,...(E=(k=d.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var R,F,M;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    message: "Notification",
    autoDismiss: false,
    closable: false,
    showActionButton: false
  },
  render: Default.render,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Toggle toast"
    }));
    const toast = await within(document.body).findByRole("status");
    await userEvent.click(within(toast).getByRole("button", {
      name: "Fermer le toast"
    }));
    await waitFor(() => expect(toast).not.toBeInTheDocument());
  }
}`,...(M=(F=b.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var N,L,P;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(L=f.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var A,W,H;B.parameters={...B.parameters,docs:{...(A=B.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
    const closeButton = await within(toast).getByRole("button", {
      name: "Fermer le toast"
    });
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
}`,...(H=(W=B.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var U,Q,_;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ["!autodocs", "skip-ci"],
  args: {
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: true,
    duration: "short",
    closable: true,
    showActionButton: false
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
        }} />
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
    const closeButton = await within(toast).getByRole("button", {
      name: "Fermer le toast"
    });
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await new Promise(resolve => setTimeout(resolve, AUTO_DISMISS_SHORT_MS + 500));
    expect(toast).toBeInTheDocument();
  }
}`,...(_=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};const ft=["Default","ManualDismissByDefault","CloseButtonWithoutAutoDismiss","Multiple","KeyboardInteraction","AutoDismissPausesOnKeyboardFocus"];export{y as AutoDismissPausesOnKeyboardFocus,b as CloseButtonWithoutAutoDismiss,p as Default,B as KeyboardInteraction,d as ManualDismissByDefault,f as Multiple,ft as __namedExportsOrder,bt as default};
