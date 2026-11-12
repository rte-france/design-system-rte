import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as l,e as t,u as r,a as u}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{B as m}from"./Button-B3EnjUD7.js";import{D as Z}from"./Drawer-C_Q6iqef.js";import{R as ee,T as te}from"./Icon-DBkoQNiA.js";import{M as ne}from"./Modal-DNPJUPSo.js";import{T as g,a as b}from"./ToastQueueProvider-LX6g9hbE.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-Yqqou6H5.js";import"./useFreezeNavigation-Df2rzoup.js";import"./icon.constants-CvX5SV3k.js";import"./Divider-BVZUrQ0d.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useFocusTrap-BZu4_Auv.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./log-handlers-Hz0GUguM.js";import"./id.utils-DsO5Uws7.js";const oe=Object.keys(ee),se=Object.keys(te),He={title:"Composants/Toast",tags:["autodocs"],component:g,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...oe,...se].sort((o,s)=>o.localeCompare(s)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},y={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:o=>{const[s,e]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(m,{label:"Toggle toast",onClick:()=>e(!s),style:{marginBottom:"16px"}}),n.jsx(b,{children:n.jsx(g,{...o,isOpen:s,onClose:()=>{e(!1)},actionButtonLabel:"Mettre à jour"})})]})}},w={tags:["!autodocs"],args:{message:"Notification",duration:"short",showActionButton:!1},render:y.render,play:async({canvasElement:o})=>{await r.click(l(o).getByRole("button",{name:"Toggle toast"}));const s=l(document.body),e=await s.findByText("Notification"),a=s.getByRole("button",{name:"Fermer le toast"});await new Promise(i=>setTimeout(i,3500)),t(e).toBeVisible(),await r.click(a),await u(()=>t(e).not.toBeInTheDocument()),t(s.getByRole("status")).toBeInTheDocument()}},f={tags:["!autodocs"],args:{message:"Notification",autoDismiss:!1,closable:!1,showActionButton:!1},render:y.render,play:async({canvasElement:o})=>{await r.click(l(o).getByRole("button",{name:"Toggle toast"}));const s=l(document.body),e=await s.findByText("Notification");await r.click(s.getByRole("button",{name:"Fermer le toast"})),await u(()=>t(e).not.toBeInTheDocument()),t(s.getByRole("status")).toBeInTheDocument()}},v={args:{...y.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:o=>{const[s,e]=p.useState(!1),[a,i]=p.useState(!1),[c,d]=p.useState(!1),[I,D]=p.useState(!1),[j,E]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(m,{label:"Toggle error toast",onClick:()=>e(!s),variant:"danger"}),n.jsx(m,{label:"Toggle warning toast",onClick:()=>D(!I),variant:"secondary"}),n.jsx(m,{label:"Toggle success toast",onClick:()=>i(!a),variant:"primary"}),n.jsx(m,{label:"Toggle info toast",onClick:()=>d(!c),variant:"secondary"}),n.jsx(m,{label:"Toggle neutral toast",onClick:()=>E(!j),variant:"neutral"})]}),n.jsxs(b,{children:[n.jsx(g,{...o,type:"error",isOpen:s,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{e(!1)}}),n.jsx(g,{...o,type:"warning",message:"Warning toast",isOpen:I,actionButtonLabel:"Mettre à jour",onClose:()=>{D(!1)}}),n.jsx(g,{...o,type:"success",message:"Success toast",isOpen:a,actionButtonLabel:"Mettre à jour",onClose:()=>{i(!1)}}),n.jsx(g,{...o,type:"info",message:"Info toast",isOpen:c,actionButtonLabel:"Mettre à jour",onClose:()=>{d(!1)}}),n.jsx(g,{...o,type:"neutral",message:"Neutral toast",isOpen:j,actionButtonLabel:"Mettre à jour",onClose:()=>{E(!1)},iconName:"settings"})]})]})}},O={tags:["!autodocs"],args:{...y.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:o=>{const[s,e]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(m,{label:"Toggle toast",onClick:()=>e(!s),style:{marginBottom:"16px"}}),n.jsx(b,{children:n.jsx(g,{...o,isOpen:s,onClose:()=>{e(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:o})=>{const e=await l(o).getByRole("button",{name:"Toggle toast"}),a=l(document.body).getByRole("status");t(a).toBeEmptyDOMElement(),await r.click(e),await u(()=>t(a).toHaveTextContent("Information : Une mise à jour est disponible")),t(l(document.body).getAllByRole("status")).toHaveLength(1);const i=l(document.body),c=i.getByRole("button",{name:"Mettre à jour"}),d=i.getByRole("button",{name:"Fermer le toast"});await r.tab(),t(c).toHaveFocus(),await r.tab(),t(d).toHaveFocus(),await r.tab({shift:!0}),t(c).toHaveFocus(),await r.click(d),await u(()=>t(d).not.toBeInTheDocument()),t(a).toBeInTheDocument(),await r.click(e),t(a).toBeEmptyDOMElement(),await u(()=>t(a).toHaveTextContent("Information : Une mise à jour est disponible"))}},T={tags:["!autodocs"],args:{...y.args},render:o=>{const[s,e]=p.useState(null),[a,i]=p.useState(!1),c=n.jsx(m,{label:"Afficher le toast",onClick:()=>i(!0)});return n.jsxs(b,{children:[n.jsx(m,{label:"Ouvrir Modal",onClick:()=>e("modal")}),n.jsx(m,{label:"Ouvrir Drawer",onClick:()=>e("drawer")}),n.jsx(ne,{id:"toast-announcement-modal",title:"Modal avec toast",isOpen:s==="modal",onClose:()=>e(null),primaryButton:n.jsx(m,{label:"Fermer",onClick:()=>e(null)}),children:c}),n.jsx(Z,{id:"toast-announcement-drawer",title:"Drawer avec toast",position:"modal",isOpen:s==="drawer",onClose:()=>e(null),onClickToggle:()=>e(null),primaryButtonLabel:"Fermer",onClickPrimaryButton:()=>e(null),content:c}),n.jsx(g,{...o,isOpen:a,onClose:()=>i(!1)})]})},play:async({canvasElement:o})=>{const s=l(o),e=l(document.body),a=e.getByRole("status");t(a).toBeEmptyDOMElement();for(const i of["Modal","Drawer"]){await r.click(s.getByRole("button",{name:`Ouvrir ${i}`}));const c=await e.findByRole("dialog",{name:`${i} avec toast`});await u(()=>{t(o.closest('[aria-hidden="true"]')).not.toBeNull(),t(o.closest("[inert]")).not.toBeNull()}),t(e.getByRole("status")).toBe(a),t(a.closest('[aria-hidden="true"], [inert]')).toBeNull(),await r.click(l(c).getByRole("button",{name:"Afficher le toast"})),await u(()=>t(a).toHaveTextContent("Information : Une mise à jour est disponible")),t(e.getAllByRole("status")).toHaveLength(1),t(a.closest('[aria-hidden="true"], [inert]')).toBeNull(),await r.click(l(c).getByRole("button",{name:"Fermer"})),await u(()=>t(c).not.toBeInTheDocument()),await u(()=>t(o.closest('[aria-hidden="true"], [inert]')).toBeNull()),t(e.getByRole("status")).toBe(a);const d=e.getByRole("button",{name:"Fermer le toast"});await r.click(d),await u(()=>t(d).not.toBeInTheDocument())}}},x=3e3,B={tags:["!autodocs"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:o=>{const[s,e]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(m,{label:"Toggle toast",onClick:()=>e(!s),style:{marginBottom:"16px"}}),n.jsx(b,{children:n.jsx(g,{...o,isOpen:s,onClose:()=>{e(!1)}})})]})},play:async({canvasElement:o})=>{const e=await l(o).getByRole("button",{name:"Toggle toast"});await r.click(e);const a=l(document.body).getByRole("button",{name:"Fermer le toast"});await r.tab(),t(a).toHaveFocus();const i=l(document.body).getByRole("status");t(i).toBeEmptyDOMElement(),await u(()=>t(i).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(c=>setTimeout(c,x+500)),t(a).toBeInTheDocument(),t(a).toHaveFocus(),await r.tab({shift:!0}),t(e).toHaveFocus(),await u(()=>t(a).not.toBeInTheDocument(),{timeout:x+1e3})}},h={...B,play:async({canvasElement:o})=>{const s=l(o).getByRole("button",{name:"Toggle toast"});await r.click(s);const e=l(document.body),a=e.getByRole("button",{name:"Fermer le toast"});await r.hover(a);const i=e.getByRole("status");t(i).toBeEmptyDOMElement(),await u(()=>t(i).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(c=>setTimeout(c,x+500)),t(a).toBeInTheDocument(),await r.unhover(a),await u(()=>t(a).not.toBeInTheDocument(),{timeout:x+1e3})}};var C,S,R;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(S=y.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var k,F,M;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    const body = within(document.body);
    const message = await body.findByText("Notification");
    const closeButton = body.getByRole("button", {
      name: "Fermer le toast"
    });
    await new Promise(resolve => setTimeout(resolve, 3500));
    expect(message).toBeVisible();
    await userEvent.click(closeButton);
    await waitFor(() => expect(message).not.toBeInTheDocument());
    expect(body.getByRole("status")).toBeInTheDocument();
  }
}`,...(M=(F=w.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var H,N,A;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    const body = within(document.body);
    const message = await body.findByText("Notification");
    await userEvent.click(body.getByRole("button", {
      name: "Fermer le toast"
    }));
    await waitFor(() => expect(message).not.toBeInTheDocument());
    expect(body.getByRole("status")).toBeInTheDocument();
  }
}`,...(A=(N=f.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var P,U,L;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(U=v.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var _,W,Q;O.parameters={...O.parameters,docs:{...(_=O.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Q=(W=O.parameters)==null?void 0:W.docs)==null?void 0:Q.source}}};var K,$,V;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=($=T.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var q,z,G;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(z=B.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,X,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ne=["Default","ManualDismissByDefault","CloseButtonWithoutAutoDismiss","Multiple","KeyboardInteraction","AnnouncementsWithModalOverlays","AutoDismissPausesOnKeyboardFocus","AutoDismissPausesOnHover"];export{T as AnnouncementsWithModalOverlays,h as AutoDismissPausesOnHover,B as AutoDismissPausesOnKeyboardFocus,f as CloseButtonWithoutAutoDismiss,y as Default,O as KeyboardInteraction,w as ManualDismissByDefault,v as Multiple,Ne as __namedExportsOrder,He as default};
