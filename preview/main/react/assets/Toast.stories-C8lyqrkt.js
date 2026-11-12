import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as c,e as n,u as i,a as u,f as ae}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{B as p}from"./Button-B3EnjUD7.js";import{D as re}from"./Drawer-C_Q6iqef.js";import{R as le,T as ie}from"./Icon-DBkoQNiA.js";import{M as ce}from"./Modal-DNPJUPSo.js";import{T as d,a as y}from"./ToastQueueProvider-jwvQRMne.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-Yqqou6H5.js";import"./useFreezeNavigation-Df2rzoup.js";import"./icon.constants-CvX5SV3k.js";import"./Divider-BVZUrQ0d.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useFocusTrap-BZu4_Auv.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./id.utils-DsO5Uws7.js";const ue=Object.keys(le),me=Object.keys(ie),_e={title:"Composants/Toast",tags:["autodocs"],component:d,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...ue,...me].sort((s,a)=>s.localeCompare(a)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},B={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:s=>{const[a,t]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"Toggle toast",onClick:()=>t(!a),style:{marginBottom:"16px"}}),e.jsx(y,{children:e.jsx(d,{...s,isOpen:a,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})}},v={args:{...B.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:s=>{const[a,t]=m.useState(!1),[o,r]=m.useState(!1),[l,g]=m.useState(!1),[j,k]=m.useState(!1),[E,R]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(p,{label:"Toggle error toast",onClick:()=>t(!a),variant:"danger"}),e.jsx(p,{label:"Toggle warning toast",onClick:()=>k(!j),variant:"secondary"}),e.jsx(p,{label:"Toggle success toast",onClick:()=>r(!o),variant:"primary"}),e.jsx(p,{label:"Toggle info toast",onClick:()=>g(!l),variant:"secondary"}),e.jsx(p,{label:"Toggle neutral toast",onClick:()=>R(!E),variant:"neutral"})]}),e.jsxs(y,{children:[e.jsx(d,{...s,type:"error",isOpen:a,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{t(!1)}}),e.jsx(d,{...s,type:"warning",message:"Warning toast",isOpen:j,actionButtonLabel:"Mettre à jour",onClose:()=>{k(!1)}}),e.jsx(d,{...s,type:"success",message:"Success toast",isOpen:o,actionButtonLabel:"Mettre à jour",onClose:()=>{r(!1)}}),e.jsx(d,{...s,type:"info",message:"Info toast",isOpen:l,actionButtonLabel:"Mettre à jour",onClose:()=>{g(!1)}}),e.jsx(d,{...s,type:"neutral",message:"Neutral toast",isOpen:E,actionButtonLabel:"Mettre à jour",onClose:()=>{R(!1)},iconName:"settings"})]})]})}},w={tags:["!autodocs"],args:{...B.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:s=>{const[a,t]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"Toggle toast",onClick:()=>t(!a),style:{marginBottom:"16px"}}),e.jsx(y,{children:e.jsx(d,{...s,isOpen:a,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:s})=>{const t=await c(s).getByRole("button",{name:"Toggle toast"}),o=c(document.body).getByRole("status");n(o).toBeEmptyDOMElement(),await i.click(t),await u(()=>n(o).toHaveTextContent("Information : Une mise à jour est disponible")),n(c(document.body).getAllByRole("status")).toHaveLength(1);const r=c(document.body),l=r.getByRole("button",{name:"Mettre à jour"}),g=r.getByRole("button",{name:"Fermer le toast"});await i.tab(),n(l).toHaveFocus(),await i.tab(),n(g).toHaveFocus(),await i.tab({shift:!0}),n(l).toHaveFocus(),await i.click(g),await u(()=>n(g).not.toBeInTheDocument()),n(t).toHaveFocus(),n(o).toBeInTheDocument(),await i.click(t),n(o).toBeEmptyDOMElement(),await u(()=>n(o).toHaveTextContent("Information : Une mise à jour est disponible"))}},O={tags:["!autodocs"],args:{...B.args},render:s=>{const[a,t]=m.useState(null),[o,r]=m.useState(!1),l=e.jsx(p,{label:"Afficher le toast",onClick:()=>r(!0)});return e.jsxs(y,{children:[e.jsx(p,{label:"Ouvrir Modal",onClick:()=>t("modal")}),e.jsx(p,{label:"Ouvrir Drawer",onClick:()=>t("drawer")}),e.jsx(ce,{id:"toast-announcement-modal",title:"Modal avec toast",isOpen:a==="modal",onClose:()=>t(null),primaryButton:e.jsx(p,{label:"Fermer",onClick:()=>t(null)}),children:l}),e.jsx(re,{id:"toast-announcement-drawer",title:"Drawer avec toast",position:"modal",isOpen:a==="drawer",onClose:()=>t(null),onClickToggle:()=>t(null),primaryButtonLabel:"Fermer",onClickPrimaryButton:()=>t(null),content:l}),e.jsx(d,{...s,isOpen:o,onClose:()=>r(!1)})]})},play:async({canvasElement:s})=>{const a=c(s),t=c(document.body),o=t.getByRole("status");n(o).toBeEmptyDOMElement();for(const r of["Modal","Drawer"]){await i.click(a.getByRole("button",{name:`Ouvrir ${r}`}));const l=await t.findByRole("dialog",{name:`${r} avec toast`});await u(()=>{n(s.closest('[aria-hidden="true"]')).not.toBeNull(),n(s.closest("[inert]")).not.toBeNull()}),n(t.getByRole("status")).toBe(o),n(o.closest('[aria-hidden="true"], [inert]')).toBeNull(),await i.click(c(l).getByRole("button",{name:"Afficher le toast"})),await u(()=>n(o).toHaveTextContent("Information : Une mise à jour est disponible")),n(t.getAllByRole("status")).toHaveLength(1),n(o.closest('[aria-hidden="true"], [inert]')).toBeNull(),await i.click(c(l).getByRole("button",{name:"Fermer"})),await u(()=>n(l).not.toBeInTheDocument()),await u(()=>n(s.closest('[aria-hidden="true"], [inert]')).toBeNull()),n(t.getByRole("status")).toBe(o);const g=t.getByRole("button",{name:"Fermer le toast"});await i.click(g),await u(()=>n(g).not.toBeInTheDocument())}}},f=3e3,h=ae(),F=ae(()=>document.activeElement),T={tags:["!autodocs","toast-focus"],args:{...B.args,onClose:h},render:s=>{const[a,t]=m.useState(!1),[o,r]=m.useState(!1),l=m.useCallback(()=>r(!1),[]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"Afficher le toast",onClick:()=>t(!0)}),e.jsxs(y,{children:[e.jsx(d,{...s,isOpen:a,actionButtonLabel:"Afficher une erreur",onActionButtonClick:()=>r(!0)}),e.jsx(d,{message:"Erreur prioritaire",type:"error",autoDismiss:!1,closable:!0,isOpen:o,onClose:l})]})]})},play:async({canvasElement:s})=>{const a=c(s).getByRole("button",{name:"Afficher le toast"}),t=c(document.body);await i.click(a);const o=await t.findByRole("button",{name:"Afficher une erreur"});h.mockClear(),await i.tab(),n(o).toHaveFocus(),await i.keyboard("{Enter}"),await u(()=>n(o).not.toBeInTheDocument()),n(a).toHaveFocus(),n(h).not.toHaveBeenCalled(),await i.click(t.getByRole("button",{name:"Fermer le toast"})),await u(()=>n(t.getByRole("button",{name:"Afficher une erreur"})).toBeVisible()),n(h).not.toHaveBeenCalled()}},x={tags:["!autodocs","toast-focus"],args:{...B.args,onClose:F},render:s=>{const[a,t]=m.useState(!1),o=m.useRef(null),{onClose:r}=s,l=m.useCallback(()=>{var g;r==null||r(),t(!1),(g=o.current)==null||g.focus()},[r]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"Afficher le toast",onClick:()=>t(!0)}),e.jsx("input",{ref:o,"aria-label":"Cible du callback"}),e.jsx(y,{children:e.jsx(d,{...s,isOpen:a,onClose:l})})]})},play:async({canvasElement:s})=>{const a=c(s),t=a.getByRole("button",{name:"Afficher le toast"}),o=a.getByRole("textbox",{name:"Cible du callback"});await i.click(t);const r=await c(document.body).findByRole("button",{name:"Fermer le toast"});F.mockClear(),r.focus(),n(r).toHaveFocus(),await i.keyboard("{Enter}"),n(F).toHaveReturnedWith(t),n(o).toHaveFocus(),await u(()=>n(r).not.toBeInTheDocument()),n(o).toHaveFocus()}},C={tags:["!autodocs","toast-focus"],args:{...B.args,autoDismiss:!0,duration:"short",showActionButton:!1},render:s=>{const[a,t]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"Afficher le toast",onClick:()=>t(!0)}),e.jsx(p,{label:"Autre élément"}),e.jsx(y,{children:e.jsx(d,{...s,isOpen:a,onClose:()=>t(!1)})})]})},play:async({canvasElement:s})=>{const a=c(s),t=c(document.body),o=a.getByRole("button",{name:"Afficher le toast"}),r=a.getByRole("button",{name:"Autre élément"});await i.click(o);let l=await t.findByRole("button",{name:"Fermer le toast"});l.focus(),n(l).toHaveFocus(),await i.tab({shift:!0}),n(r).toHaveFocus(),await i.tab(),n(l).toHaveFocus(),await i.click(l),await u(()=>n(l).not.toBeInTheDocument()),n(r).toHaveFocus(),await i.click(o),l=await t.findByRole("button",{name:"Fermer le toast"}),l.focus(),n(l).toHaveFocus(),await i.tab({shift:!0}),n(r).toHaveFocus(),await i.unhover(l),await u(()=>n(l).not.toBeInTheDocument(),{timeout:f+1e3}),n(r).toHaveFocus()}},b={tags:["!autodocs"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:s=>{const[a,t]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"Toggle toast",onClick:()=>t(!a),style:{marginBottom:"16px"}}),e.jsx(y,{children:e.jsx(d,{...s,isOpen:a,onClose:()=>{t(!1)}})})]})},play:async({canvasElement:s})=>{const t=await c(s).getByRole("button",{name:"Toggle toast"});await i.click(t);const o=c(document.body).getByRole("button",{name:"Fermer le toast"});await i.tab(),n(o).toHaveFocus();const r=c(document.body).getByRole("status");n(r).toBeEmptyDOMElement(),await u(()=>n(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(l=>setTimeout(l,f+500)),n(o).toBeInTheDocument(),n(o).toHaveFocus(),await i.tab({shift:!0}),n(t).toHaveFocus(),await u(()=>n(o).not.toBeInTheDocument(),{timeout:f+1e3})}},I={...b,play:async({canvasElement:s})=>{const a=c(s).getByRole("button",{name:"Toggle toast"});await i.click(a);const t=c(document.body),o=t.getByRole("button",{name:"Fermer le toast"});await i.hover(o);const r=t.getByRole("status");n(r).toBeEmptyDOMElement(),await u(()=>n(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(l=>setTimeout(l,f+500)),n(o).toBeInTheDocument(),await i.unhover(o),await u(()=>n(o).not.toBeInTheDocument(),{timeout:f+1e3})}};var S,D,H;B.parameters={...B.parameters,docs:{...(S=B.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(D=B.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var A,M,P;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(M=v.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var L,N,U;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    const announcement = within(document.body).getByRole("status");
    expect(announcement).toBeEmptyDOMElement();
    await userEvent.click(toggleButton);
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
    expect(within(document.body).getAllByRole("status")).toHaveLength(1);
    const body = within(document.body);
    const actionButton = body.getByRole("button", {
      name: "Mettre à jour"
    });
    const closeButton = body.getByRole("button", {
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
    await waitFor(() => expect(closeButton).not.toBeInTheDocument());
    expect(toggleButton).toHaveFocus();
    expect(announcement).toBeInTheDocument();
    await userEvent.click(toggleButton);
    expect(announcement).toBeEmptyDOMElement();
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
  }
}`,...(U=(N=w.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var _,Q,W;O.parameters={...O.parameters,docs:{...(_=O.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args
  },
  render: args => {
    const [overlay, setOverlay] = useState<"modal" | "drawer" | null>(null);
    const [isToastOpen, setIsToastOpen] = useState(false);
    const showToastButton = <Button label="Afficher le toast" onClick={() => setIsToastOpen(true)} />;
    return <ToastQueueProvider>
        <Button label="Ouvrir Modal" onClick={() => setOverlay("modal")} />
        <Button label="Ouvrir Drawer" onClick={() => setOverlay("drawer")} />
        <Modal id="toast-announcement-modal" title="Modal avec toast" isOpen={overlay === "modal"} onClose={() => setOverlay(null)} primaryButton={<Button label="Fermer" onClick={() => setOverlay(null)} />}>
          {showToastButton}
        </Modal>
        <Drawer id="toast-announcement-drawer" title="Drawer avec toast" position="modal" isOpen={overlay === "drawer"} onClose={() => setOverlay(null)} onClickToggle={() => setOverlay(null)} primaryButtonLabel="Fermer" onClickPrimaryButton={() => setOverlay(null)} content={showToastButton} />
        <Toast {...args} isOpen={isToastOpen} onClose={() => setIsToastOpen(false)} />
      </ToastQueueProvider>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const announcement = body.getByRole("status");
    expect(announcement).toBeEmptyDOMElement();
    for (const overlay of ["Modal", "Drawer"]) {
      await userEvent.click(canvas.getByRole("button", {
        name: \`Ouvrir \${overlay}\`
      }));
      const dialog = await body.findByRole("dialog", {
        name: \`\${overlay} avec toast\`
      });
      await waitFor(() => {
        expect(canvasElement.closest('[aria-hidden="true"]')).not.toBeNull();
        expect(canvasElement.closest("[inert]")).not.toBeNull();
      });
      expect(body.getByRole("status")).toBe(announcement);
      expect(announcement.closest('[aria-hidden="true"], [inert]')).toBeNull();
      await userEvent.click(within(dialog).getByRole("button", {
        name: "Afficher le toast"
      }));
      await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
      expect(body.getAllByRole("status")).toHaveLength(1);
      expect(announcement.closest('[aria-hidden="true"], [inert]')).toBeNull();
      await userEvent.click(within(dialog).getByRole("button", {
        name: "Fermer"
      }));
      await waitFor(() => expect(dialog).not.toBeInTheDocument());
      await waitFor(() => expect(canvasElement.closest('[aria-hidden="true"], [inert]')).toBeNull());
      expect(body.getByRole("status")).toBe(announcement);
      const closeToastButton = body.getByRole("button", {
        name: "Fermer le toast"
      });
      await userEvent.click(closeToastButton);
      await waitFor(() => expect(closeToastButton).not.toBeInTheDocument());
    }
  }
}`,...(W=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var q,K,$;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ["!autodocs", "toast-focus"],
  args: {
    ...Default.args,
    onClose: queuedToastOnClose
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPriorityOpen, setIsPriorityOpen] = useState(false);
    const closePriorityToast = useCallback(() => setIsPriorityOpen(false), []);
    return <>
        <Button label="Afficher le toast" onClick={() => setIsOpen(true)} />
        <ToastQueueProvider>
          <Toast {...args} isOpen={isOpen} actionButtonLabel="Afficher une erreur" onActionButtonClick={() => setIsPriorityOpen(true)} />
          <Toast message="Erreur prioritaire" type="error" autoDismiss={false} closable isOpen={isPriorityOpen} onClose={closePriorityToast} />
        </ToastQueueProvider>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const showButton = within(canvasElement).getByRole("button", {
      name: "Afficher le toast"
    });
    const body = within(document.body);
    await userEvent.click(showButton);
    const actionButton = await body.findByRole("button", {
      name: "Afficher une erreur"
    });
    queuedToastOnClose.mockClear();
    await userEvent.tab();
    expect(actionButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(actionButton).not.toBeInTheDocument());
    expect(showButton).toHaveFocus();
    expect(queuedToastOnClose).not.toHaveBeenCalled();
    await userEvent.click(body.getByRole("button", {
      name: "Fermer le toast"
    }));
    await waitFor(() => expect(body.getByRole("button", {
      name: "Afficher une erreur"
    })).toBeVisible());
    expect(queuedToastOnClose).not.toHaveBeenCalled();
  }
}`,...($=(K=T.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var V,z,G;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ["!autodocs", "toast-focus"],
  args: {
    ...Default.args,
    onClose: consumerToastOnClose
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const targetRef = useRef<HTMLInputElement>(null);
    const {
      onClose
    } = args;
    const handleClose = useCallback(() => {
      onClose?.();
      setIsOpen(false);
      targetRef.current?.focus();
    }, [onClose]);
    return <>
        <Button label="Afficher le toast" onClick={() => setIsOpen(true)} />
        <input ref={targetRef} aria-label="Cible du callback" />
        <ToastQueueProvider>
          <Toast {...args} isOpen={isOpen} onClose={handleClose} />
        </ToastQueueProvider>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const showButton = canvas.getByRole("button", {
      name: "Afficher le toast"
    });
    const target = canvas.getByRole("textbox", {
      name: "Cible du callback"
    });
    await userEvent.click(showButton);
    const closeButton = await within(document.body).findByRole("button", {
      name: "Fermer le toast"
    });
    consumerToastOnClose.mockClear();
    closeButton.focus();
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    expect(consumerToastOnClose).toHaveReturnedWith(showButton);
    expect(target).toHaveFocus();
    await waitFor(() => expect(closeButton).not.toBeInTheDocument());
    expect(target).toHaveFocus();
  }
}`,...(G=(z=x.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,X,Y;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ["!autodocs", "toast-focus"],
  args: {
    ...Default.args,
    autoDismiss: true,
    duration: "short",
    showActionButton: false
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Afficher le toast" onClick={() => setIsOpen(true)} />
        <Button label="Autre élément" />
        <ToastQueueProvider>
          <Toast {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </ToastQueueProvider>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const showButton = canvas.getByRole("button", {
      name: "Afficher le toast"
    });
    const otherButton = canvas.getByRole("button", {
      name: "Autre élément"
    });
    await userEvent.click(showButton);
    let closeButton = await body.findByRole("button", {
      name: "Fermer le toast"
    });
    closeButton.focus();
    expect(closeButton).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    expect(otherButton).toHaveFocus();
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.click(closeButton);
    await waitFor(() => expect(closeButton).not.toBeInTheDocument());
    expect(otherButton).toHaveFocus();
    await userEvent.click(showButton);
    closeButton = await body.findByRole("button", {
      name: "Fermer le toast"
    });
    closeButton.focus();
    expect(closeButton).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    expect(otherButton).toHaveFocus();
    await userEvent.unhover(closeButton);
    await waitFor(() => expect(closeButton).not.toBeInTheDocument(), {
      timeout: AUTO_DISMISS_SHORT_MS + 1000
    });
    expect(otherButton).toHaveFocus();
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
    const closeButton = within(document.body).getByRole("button", {
      name: "Fermer le toast"
    });
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    const announcement = within(document.body).getByRole("status");
    expect(announcement).toBeEmptyDOMElement();
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
    await new Promise(resolve => setTimeout(resolve, AUTO_DISMISS_SHORT_MS + 500));
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    expect(toggleButton).toHaveFocus();
    await waitFor(() => expect(closeButton).not.toBeInTheDocument(), {
      timeout: AUTO_DISMISS_SHORT_MS + 1000
    });
  }
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,se;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...AutoDismissPausesOnKeyboardFocus,
  play: async ({
    canvasElement
  }) => {
    const toggleButton = within(canvasElement).getByRole("button", {
      name: "Toggle toast"
    });
    await userEvent.click(toggleButton);
    const body = within(document.body);
    const closeButton = body.getByRole("button", {
      name: "Fermer le toast"
    });
    await userEvent.hover(closeButton);
    const announcement = body.getByRole("status");
    expect(announcement).toBeEmptyDOMElement();
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
    await new Promise(resolve => setTimeout(resolve, AUTO_DISMISS_SHORT_MS + 500));
    expect(closeButton).toBeInTheDocument();
    await userEvent.unhover(closeButton);
    await waitFor(() => expect(closeButton).not.toBeInTheDocument(), {
      timeout: AUTO_DISMISS_SHORT_MS + 1000
    });
  }
}`,...(se=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const Qe=["Default","Multiple","KeyboardInteraction","AnnouncementsWithModalOverlays","FocusRestorationWhenQueued","ConsumerControlsFocusOnClose","FocusRestorationAfterLeavingToast","AutoDismissPausesOnKeyboardFocus","AutoDismissPausesOnHover"];export{O as AnnouncementsWithModalOverlays,I as AutoDismissPausesOnHover,b as AutoDismissPausesOnKeyboardFocus,x as ConsumerControlsFocusOnClose,B as Default,C as FocusRestorationAfterLeavingToast,T as FocusRestorationWhenQueued,w as KeyboardInteraction,v as Multiple,Qe as __namedExportsOrder,_e as default};
