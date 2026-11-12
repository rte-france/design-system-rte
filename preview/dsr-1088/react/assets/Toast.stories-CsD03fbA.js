import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as c,e as n,u as i,a as u}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{B as m}from"./Button-B3EnjUD7.js";import{D as $}from"./Drawer-C_Q6iqef.js";import{R as q,T as z}from"./Icon-DBkoQNiA.js";import{M as G}from"./Modal-DNPJUPSo.js";import{T as g,a as b}from"./ToastQueueProvider-Cw4-JAXn.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-Yqqou6H5.js";import"./useFreezeNavigation-Df2rzoup.js";import"./icon.constants-CvX5SV3k.js";import"./Divider-BVZUrQ0d.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useFocusTrap-BZu4_Auv.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./id.utils-DsO5Uws7.js";const J=Object.keys(q),V=Object.keys(z),je={title:"Composants/Toast",tags:["autodocs"],component:g,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...J,...V].sort((s,a)=>s.localeCompare(a)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},B={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:s=>{const[a,t]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{label:"Toggle toast",onClick:()=>t(!a),style:{marginBottom:"16px"}}),e.jsx(b,{children:e.jsx(g,{...s,isOpen:a,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})}},O={args:{...B.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:s=>{const[a,t]=p.useState(!1),[o,r]=p.useState(!1),[l,d]=p.useState(!1),[x,I]=p.useState(!1),[h,j]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(m,{label:"Toggle error toast",onClick:()=>t(!a),variant:"danger"}),e.jsx(m,{label:"Toggle warning toast",onClick:()=>I(!x),variant:"secondary"}),e.jsx(m,{label:"Toggle success toast",onClick:()=>r(!o),variant:"primary"}),e.jsx(m,{label:"Toggle info toast",onClick:()=>d(!l),variant:"secondary"}),e.jsx(m,{label:"Toggle neutral toast",onClick:()=>j(!h),variant:"neutral"})]}),e.jsxs(b,{children:[e.jsx(g,{...s,type:"error",isOpen:a,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{t(!1)}}),e.jsx(g,{...s,type:"warning",message:"Warning toast",isOpen:x,actionButtonLabel:"Mettre à jour",onClose:()=>{I(!1)}}),e.jsx(g,{...s,type:"success",message:"Success toast",isOpen:o,actionButtonLabel:"Mettre à jour",onClose:()=>{r(!1)}}),e.jsx(g,{...s,type:"info",message:"Info toast",isOpen:l,actionButtonLabel:"Mettre à jour",onClose:()=>{d(!1)}}),e.jsx(g,{...s,type:"neutral",message:"Neutral toast",isOpen:h,actionButtonLabel:"Mettre à jour",onClose:()=>{j(!1)},iconName:"settings"})]})]})}},v={tags:["!autodocs"],args:{...B.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:s=>{const[a,t]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{label:"Toggle toast",onClick:()=>t(!a),style:{marginBottom:"16px"}}),e.jsx(b,{children:e.jsx(g,{...s,isOpen:a,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:s})=>{const t=await c(s).getByRole("button",{name:"Toggle toast"}),o=c(document.body).getByRole("status");n(o).toBeEmptyDOMElement(),await i.click(t),await u(()=>n(o).toHaveTextContent("Information : Une mise à jour est disponible")),n(c(document.body).getAllByRole("status")).toHaveLength(1);const r=c(document.body),l=r.getByRole("button",{name:"Mettre à jour"}),d=r.getByRole("button",{name:"Fermer le toast"});await i.tab(),n(l).toHaveFocus(),await i.tab(),n(d).toHaveFocus(),await i.tab({shift:!0}),n(l).toHaveFocus(),await i.click(d),await u(()=>n(d).not.toBeInTheDocument()),n(o).toBeInTheDocument(),await i.click(t),n(o).toBeEmptyDOMElement(),await u(()=>n(o).toHaveTextContent("Information : Une mise à jour est disponible"))}},w={tags:["!autodocs"],args:{...B.args},render:s=>{const[a,t]=p.useState(null),[o,r]=p.useState(!1),l=e.jsx(m,{label:"Afficher le toast",onClick:()=>r(!0)});return e.jsxs(b,{children:[e.jsx(m,{label:"Ouvrir Modal",onClick:()=>t("modal")}),e.jsx(m,{label:"Ouvrir Drawer",onClick:()=>t("drawer")}),e.jsx(G,{id:"toast-announcement-modal",title:"Modal avec toast",isOpen:a==="modal",onClose:()=>t(null),primaryButton:e.jsx(m,{label:"Fermer",onClick:()=>t(null)}),children:l}),e.jsx($,{id:"toast-announcement-drawer",title:"Drawer avec toast",position:"modal",isOpen:a==="drawer",onClose:()=>t(null),onClickToggle:()=>t(null),primaryButtonLabel:"Fermer",onClickPrimaryButton:()=>t(null),content:l}),e.jsx(g,{...s,isOpen:o,onClose:()=>r(!1)})]})},play:async({canvasElement:s})=>{const a=c(s),t=c(document.body),o=t.getByRole("status");n(o).toBeEmptyDOMElement();for(const r of["Modal","Drawer"]){await i.click(a.getByRole("button",{name:`Ouvrir ${r}`}));const l=await t.findByRole("dialog",{name:`${r} avec toast`});await u(()=>{n(s.closest('[aria-hidden="true"]')).not.toBeNull(),n(s.closest("[inert]")).not.toBeNull()}),n(t.getByRole("status")).toBe(o),n(o.closest('[aria-hidden="true"], [inert]')).toBeNull(),await i.click(c(l).getByRole("button",{name:"Afficher le toast"})),await u(()=>n(o).toHaveTextContent("Information : Une mise à jour est disponible")),n(t.getAllByRole("status")).toHaveLength(1),n(o.closest('[aria-hidden="true"], [inert]')).toBeNull(),await i.click(c(l).getByRole("button",{name:"Fermer"})),await u(()=>n(l).not.toBeInTheDocument()),await u(()=>n(s.closest('[aria-hidden="true"], [inert]')).toBeNull()),n(t.getByRole("status")).toBe(o);const d=t.getByRole("button",{name:"Fermer le toast"});await i.click(d),await u(()=>n(d).not.toBeInTheDocument())}}},T=3e3,y={tags:["!autodocs"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:s=>{const[a,t]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{label:"Toggle toast",onClick:()=>t(!a),style:{marginBottom:"16px"}}),e.jsx(b,{children:e.jsx(g,{...s,isOpen:a,onClose:()=>{t(!1)}})})]})},play:async({canvasElement:s})=>{const t=await c(s).getByRole("button",{name:"Toggle toast"});await i.click(t);const o=c(document.body).getByRole("button",{name:"Fermer le toast"});await i.tab(),n(o).toHaveFocus();const r=c(document.body).getByRole("status");n(r).toBeEmptyDOMElement(),await u(()=>n(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(l=>setTimeout(l,T+500)),n(o).toBeInTheDocument(),n(o).toHaveFocus(),await i.tab({shift:!0}),n(t).toHaveFocus(),await u(()=>n(o).not.toBeInTheDocument(),{timeout:T+1e3})}},f={...y,play:async({canvasElement:s})=>{const a=c(s).getByRole("button",{name:"Toggle toast"});await i.click(a);const t=c(document.body),o=t.getByRole("button",{name:"Fermer le toast"});await i.hover(o);const r=t.getByRole("status");n(r).toBeEmptyDOMElement(),await u(()=>n(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(l=>setTimeout(l,T+500)),n(o).toBeInTheDocument(),await i.unhover(o),await u(()=>n(o).not.toBeInTheDocument(),{timeout:T+1e3})}};var C,S,D;B.parameters={...B.parameters,docs:{...(C=B.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(S=B.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,M,k;O.parameters={...O.parameters,docs:{...(E=O.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(M=O.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var R,F,H;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    expect(announcement).toBeInTheDocument();
    await userEvent.click(toggleButton);
    expect(announcement).toBeEmptyDOMElement();
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
  }
}`,...(H=(F=v.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var A,N,U;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(U=(N=w.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var L,P,_;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(P=y.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var W,Q,K;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};const Ce=["Default","Multiple","KeyboardInteraction","AnnouncementsWithModalOverlays","AutoDismissPausesOnKeyboardFocus","AutoDismissPausesOnHover"];export{w as AnnouncementsWithModalOverlays,f as AutoDismissPausesOnHover,y as AutoDismissPausesOnKeyboardFocus,B as Default,v as KeyboardInteraction,O as Multiple,Ce as __namedExportsOrder,je as default};
