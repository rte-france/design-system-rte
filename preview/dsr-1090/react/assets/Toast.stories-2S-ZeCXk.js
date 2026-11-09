import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as a,u as o,e as r,a as j}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{B as u}from"./Button-B3EnjUD7.js";import{R as W,T as Q}from"./Icon-DBkoQNiA.js";import{T as l,a as O}from"./ToastQueueProvider-DD8B6YAg.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./keyboard.constants-D1KJQ2-m.js";import"./timepicker.constants-CynrC_9x.js";import"./id.utils-DsO5Uws7.js";import"./useAnimatedMount-_zPBpYOt.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const A=Object.keys(W),_=Object.keys(Q),pe={title:"Composants/Toast",tags:["autodocs"],component:l,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...A,..._].sort((n,s)=>n.localeCompare(s)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},g={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:n=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Toggle toast",onClick:()=>t(!s),style:{marginBottom:"16px"}}),e.jsx(O,{children:e.jsx(l,{...n,isOpen:s,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})}},y={args:{...g.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:n=>{const[s,t]=c.useState(!1),[i,p]=c.useState(!1),[m,d]=c.useState(!1),[w,T]=c.useState(!1),[I,v]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(u,{label:"Toggle error toast",onClick:()=>t(!s),variant:"danger"}),e.jsx(u,{label:"Toggle warning toast",onClick:()=>T(!w),variant:"secondary"}),e.jsx(u,{label:"Toggle success toast",onClick:()=>p(!i),variant:"primary"}),e.jsx(u,{label:"Toggle info toast",onClick:()=>d(!m),variant:"secondary"}),e.jsx(u,{label:"Toggle neutral toast",onClick:()=>v(!I),variant:"neutral"})]}),e.jsxs(O,{children:[e.jsx(l,{...n,type:"error",isOpen:s,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{t(!1)}}),e.jsx(l,{...n,type:"warning",message:"Warning toast",isOpen:w,actionButtonLabel:"Mettre à jour",onClose:()=>{T(!1)}}),e.jsx(l,{...n,type:"success",message:"Success toast",isOpen:i,actionButtonLabel:"Mettre à jour",onClose:()=>{p(!1)}}),e.jsx(l,{...n,type:"info",message:"Info toast",isOpen:m,actionButtonLabel:"Mettre à jour",onClose:()=>{d(!1)}}),e.jsx(l,{...n,type:"neutral",message:"Neutral toast",isOpen:I,actionButtonLabel:"Mettre à jour",onClose:()=>{v(!1)},iconName:"settings"})]})]})}},b={tags:["!autodocs"],args:{...g.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:n=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Toggle toast",onClick:()=>t(!s),style:{marginBottom:"16px"}}),e.jsx(O,{children:e.jsx(l,{...n,isOpen:s,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:n})=>{const t=await a(n).getByRole("button",{name:"Toggle toast"});await o.click(t);const i=a(document.body).getByRole("status"),p=await a(i).getByRole("button",{name:"Mettre à jour"}),m=await a(i).getByRole("button",{name:"Fermer le toast"});await o.keyboard("{Escape}"),r(i).toBeInTheDocument(),await o.tab(),r(p).toHaveFocus(),await o.tab(),r(m).toHaveFocus(),await o.tab({shift:!0}),r(p).toHaveFocus(),await o.keyboard("{Escape}"),await j(()=>r(i).not.toBeInTheDocument()),await o.click(t);const d=await a(document.body).findByRole("status");await o.click(a(d).getByRole("button",{name:"Fermer le toast"})),await j(()=>r(d).not.toBeInTheDocument())}},B={...b,args:{...b.args,closable:!1},play:async({canvasElement:n})=>{const s=a(n);await o.click(s.getByRole("button",{name:"Toggle toast"}));const t=await a(document.body).findByRole("status");await o.tab(),r(a(t).getByRole("button",{name:"Mettre à jour"})).toHaveFocus(),await o.keyboard("{Escape}"),r(t).toBeInTheDocument(),r(a(t).queryByRole("button",{name:"Fermer le toast"})).not.toBeInTheDocument()}},K=3e3,f={tags:["!autodocs","skip-ci"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:n=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Toggle toast",onClick:()=>t(!s),style:{marginBottom:"16px"}}),e.jsx(O,{children:e.jsx(l,{...n,isOpen:s,onClose:()=>{t(!1)}})})]})},play:async({canvasElement:n})=>{const t=await a(n).getByRole("button",{name:"Toggle toast"});await o.click(t);const i=a(document.body).getByRole("status"),p=await a(i).getByRole("button",{name:"Fermer le toast"});await o.tab(),r(p).toHaveFocus(),await new Promise(m=>setTimeout(m,K+500)),r(i).toBeInTheDocument()}};var x,h,E;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(h=g.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var S,C,k;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(C=y.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var R,D,F;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    await userEvent.keyboard("{Escape}");
    expect(toast).toBeInTheDocument();
    await userEvent.tab();
    expect(actionButton).toHaveFocus();
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    expect(actionButton).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(toast).not.toBeInTheDocument());
    await userEvent.click(toggleButton);
    const reopenedToast = await within(document.body).findByRole("status");
    await userEvent.click(within(reopenedToast).getByRole("button", {
      name: "Fermer le toast"
    }));
    await waitFor(() => expect(reopenedToast).not.toBeInTheDocument());
  }
}`,...(F=(D=b.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var M,N,L;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...KeyboardInteraction,
  args: {
    ...KeyboardInteraction.args,
    closable: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Toggle toast"
    }));
    const toast = await within(document.body).findByRole("status");
    await userEvent.tab();
    expect(within(toast).getByRole("button", {
      name: "Mettre à jour"
    })).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    expect(toast).toBeInTheDocument();
    expect(within(toast).queryByRole("button", {
      name: "Fermer le toast"
    })).not.toBeInTheDocument();
  }
}`,...(L=(N=B.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var P,H,U;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(H=f.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const me=["Default","Multiple","KeyboardInteraction","EscapeDoesNotCloseNonClosableToast","AutoDismissPausesOnKeyboardFocus"];export{f as AutoDismissPausesOnKeyboardFocus,g as Default,B as EscapeDoesNotCloseNonClosableToast,b as KeyboardInteraction,y as Multiple,me as __namedExportsOrder,pe as default};
