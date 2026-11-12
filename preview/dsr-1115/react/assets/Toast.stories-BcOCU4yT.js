import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as c,e,u as i,a as u,f as R}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{B as p}from"./Button-B3EnjUD7.js";import{D as ue}from"./Drawer-C_Q6iqef.js";import{R as me,T as pe}from"./Icon-DBkoQNiA.js";import{M as de}from"./Modal-DNPJUPSo.js";import{T as d,a as y}from"./ToastQueueProvider-Bc3HqONP.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-Yqqou6H5.js";import"./useFreezeNavigation-Df2rzoup.js";import"./icon.constants-CvX5SV3k.js";import"./Divider-BVZUrQ0d.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useFocusTrap-BZu4_Auv.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./id.utils-DsO5Uws7.js";const ge=Object.keys(me),Be=Object.keys(pe),qe={title:"Composants/Toast",tags:["autodocs"],component:d,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...ge,...Be].sort((s,a)=>s.localeCompare(a)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},B={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:s=>{const[a,t]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Toggle toast",onClick:()=>t(!a),style:{marginBottom:"16px"}}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:a,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})}},O={args:{...B.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:s=>{const[a,t]=m.useState(!1),[o,r]=m.useState(!1),[l,g]=m.useState(!1),[w,k]=m.useState(!1),[D,S]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(p,{label:"Toggle error toast",onClick:()=>t(!a),variant:"danger"}),n.jsx(p,{label:"Toggle warning toast",onClick:()=>k(!w),variant:"secondary"}),n.jsx(p,{label:"Toggle success toast",onClick:()=>r(!o),variant:"primary"}),n.jsx(p,{label:"Toggle info toast",onClick:()=>g(!l),variant:"secondary"}),n.jsx(p,{label:"Toggle neutral toast",onClick:()=>S(!D),variant:"neutral"})]}),n.jsxs(y,{children:[n.jsx(d,{...s,type:"error",isOpen:a,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{t(!1)}}),n.jsx(d,{...s,type:"warning",message:"Warning toast",isOpen:w,actionButtonLabel:"Mettre à jour",onClose:()=>{k(!1)}}),n.jsx(d,{...s,type:"success",message:"Success toast",isOpen:o,actionButtonLabel:"Mettre à jour",onClose:()=>{r(!1)}}),n.jsx(d,{...s,type:"info",message:"Info toast",isOpen:l,actionButtonLabel:"Mettre à jour",onClose:()=>{g(!1)}}),n.jsx(d,{...s,type:"neutral",message:"Neutral toast",isOpen:D,actionButtonLabel:"Mettre à jour",onClose:()=>{S(!1)},iconName:"settings"})]})]})}},b={tags:["!autodocs"],args:{...B.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0,onKeyDown:R()},render:s=>{const[a,t]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Toggle toast",onClick:()=>t(!a),style:{marginBottom:"16px"}}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:a,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:s,args:a})=>{const o=await c(s).getByRole("button",{name:"Toggle toast"}),r=c(document.body).getByRole("status");e(r).toBeEmptyDOMElement(),await i.click(o),await u(()=>e(r).toHaveTextContent("Information : Une mise à jour est disponible")),e(c(document.body).getAllByRole("status")).toHaveLength(1);const l=c(document.body),g=l.getByRole("button",{name:"Mettre à jour"}),w=l.getByRole("button",{name:"Fermer le toast"});await i.tab(),e(g).toHaveFocus(),await i.tab(),e(w).toHaveFocus(),await i.tab({shift:!0}),e(g).toHaveFocus(),await i.keyboard("{ArrowRight}"),e(a.onKeyDown).toHaveBeenCalledWith(e.objectContaining({key:"ArrowRight"})),await i.keyboard("{Escape}"),await u(()=>e(w).not.toBeInTheDocument()),e(o).toHaveFocus(),e(a.onKeyDown).not.toHaveBeenCalledWith(e.objectContaining({key:"Escape"})),e(r).toBeInTheDocument(),await i.click(o),await u(()=>e(r).toBeEmptyDOMElement()),await u(()=>e(r).toHaveTextContent("Information : Une mise à jour est disponible"))}},h={tags:["!autodocs"],args:{...B.args},render:s=>{const[a,t]=m.useState(null),[o,r]=m.useState(!1),l=n.jsx(p,{label:"Afficher le toast",onClick:()=>r(!0)});return n.jsxs(y,{children:[n.jsx(p,{label:"Ouvrir Modal",onClick:()=>t("modal")}),n.jsx(p,{label:"Ouvrir Drawer",onClick:()=>t("drawer")}),n.jsx(de,{id:"toast-announcement-modal",title:"Modal avec toast",isOpen:a==="modal",onClose:()=>t(null),primaryButton:n.jsx(p,{label:"Fermer",onClick:()=>t(null)}),children:l}),n.jsx(ue,{id:"toast-announcement-drawer",title:"Drawer avec toast",position:"modal",isOpen:a==="drawer",onClose:()=>t(null),onClickToggle:()=>t(null),primaryButtonLabel:"Fermer",onClickPrimaryButton:()=>t(null),content:l}),n.jsx(d,{...s,isOpen:o,onClose:()=>r(!1)})]})},play:async({canvasElement:s})=>{const a=c(s),t=c(document.body),o=t.getByRole("status");e(o).toBeEmptyDOMElement();for(const r of["Modal","Drawer"]){await i.click(a.getByRole("button",{name:`Ouvrir ${r}`}));const l=await t.findByRole("dialog",{name:`${r} avec toast`});await u(()=>{e(s.closest('[aria-hidden="true"]')).not.toBeNull(),e(s.closest("[inert]")).not.toBeNull()}),e(t.getByRole("status")).toBe(o),e(o.closest('[aria-hidden="true"], [inert]')).toBeNull(),await i.click(c(l).getByRole("button",{name:"Afficher le toast"})),await u(()=>e(o).toHaveTextContent("Information : Une mise à jour est disponible")),e(t.getAllByRole("status")).toHaveLength(1),e(o.closest('[aria-hidden="true"], [inert]')).toBeNull();const g=t.getByRole("button",{name:"Fermer le toast"});g.focus(),await i.keyboard("{Escape}"),await u(()=>e(g).not.toBeInTheDocument()),e(l).toBeInTheDocument(),await i.click(c(l).getByRole("button",{name:"Fermer"})),await u(()=>e(l).not.toBeInTheDocument()),await u(()=>e(s.closest('[aria-hidden="true"], [inert]')).toBeNull()),e(t.getByRole("status")).toBe(o)}}},T={...b,args:{...b.args,closable:!1},play:async({canvasElement:s})=>{const a=c(s);await i.click(a.getByRole("button",{name:"Toggle toast"}));const t=c(document.body),o=await t.findByRole("button",{name:"Mettre à jour"});await u(()=>e(t.getByRole("status")).toHaveTextContent("Information : Une mise à jour est disponible")),await i.tab(),e(o).toHaveFocus(),await i.keyboard("{Escape}"),await new Promise(r=>setTimeout(r,350)),e(o).toBeVisible(),e(o).toHaveFocus(),e(t.getByText("Une mise à jour est disponible")).toBeVisible(),e(t.queryByRole("button",{name:"Fermer le toast"})).not.toBeInTheDocument()}},v=3e3,x=R(),j=R(()=>document.activeElement),C={tags:["!autodocs","toast-focus"],args:{...B.args,onClose:x},render:s=>{const[a,t]=m.useState(!1),[o,r]=m.useState(!1),l=m.useCallback(()=>r(!1),[]);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Afficher le toast",onClick:()=>t(!0)}),n.jsxs(y,{children:[n.jsx(d,{...s,isOpen:a,actionButtonLabel:"Afficher une erreur",onActionButtonClick:()=>r(!0)}),n.jsx(d,{message:"Erreur prioritaire",type:"error",autoDismiss:!1,closable:!0,isOpen:o,onClose:l})]})]})},play:async({canvasElement:s})=>{const a=c(s).getByRole("button",{name:"Afficher le toast"}),t=c(document.body);await i.click(a);const o=await t.findByRole("button",{name:"Afficher une erreur"});x.mockClear(),await i.tab(),e(o).toHaveFocus(),await i.keyboard("{Enter}"),await u(()=>e(o).not.toBeInTheDocument()),e(a).toHaveFocus(),e(x).not.toHaveBeenCalled(),await i.click(t.getByRole("button",{name:"Fermer le toast"})),await u(()=>e(t.getByRole("button",{name:"Afficher une erreur"})).toBeVisible()),e(x).not.toHaveBeenCalled()}},I={tags:["!autodocs","toast-focus"],args:{...B.args,onClose:j},render:s=>{const[a,t]=m.useState(!1),o=m.useRef(null),{onClose:r}=s,l=m.useCallback(()=>{var g;r==null||r(),t(!1),(g=o.current)==null||g.focus()},[r]);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Afficher le toast",onClick:()=>t(!0)}),n.jsx("input",{ref:o,"aria-label":"Cible du callback"}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:a,onClose:l})})]})},play:async({canvasElement:s})=>{const a=c(s),t=a.getByRole("button",{name:"Afficher le toast"}),o=a.getByRole("textbox",{name:"Cible du callback"});await i.click(t);const r=await c(document.body).findByRole("button",{name:"Fermer le toast"});j.mockClear(),r.focus(),e(r).toHaveFocus(),await i.keyboard("{Enter}"),e(j).toHaveReturnedWith(t),e(o).toHaveFocus(),await u(()=>e(r).not.toBeInTheDocument()),e(o).toHaveFocus()}},F={tags:["!autodocs","toast-focus"],args:{...B.args,autoDismiss:!0,duration:"short",showActionButton:!1},render:s=>{const[a,t]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Afficher le toast",onClick:()=>t(!0)}),n.jsx(p,{label:"Autre élément"}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:a,onClose:()=>t(!1)})})]})},play:async({canvasElement:s})=>{const a=c(s),t=c(document.body),o=a.getByRole("button",{name:"Afficher le toast"}),r=a.getByRole("button",{name:"Autre élément"});await i.click(o);let l=await t.findByRole("button",{name:"Fermer le toast"});l.focus(),e(l).toHaveFocus(),await i.tab({shift:!0}),e(r).toHaveFocus(),await i.tab(),e(l).toHaveFocus(),await i.click(l),await u(()=>e(l).not.toBeInTheDocument()),e(r).toHaveFocus(),await i.click(o),l=await t.findByRole("button",{name:"Fermer le toast"}),l.focus(),e(l).toHaveFocus(),await i.tab({shift:!0}),e(r).toHaveFocus(),await i.unhover(l),await u(()=>e(l).not.toBeInTheDocument(),{timeout:v+1e3}),e(r).toHaveFocus()}},f={tags:["!autodocs"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:s=>{const[a,t]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Toggle toast",onClick:()=>t(!a),style:{marginBottom:"16px"}}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:a,onClose:()=>{t(!1)}})})]})},play:async({canvasElement:s})=>{const t=await c(s).getByRole("button",{name:"Toggle toast"});await i.click(t);const o=c(document.body).getByRole("button",{name:"Fermer le toast"});await i.tab(),e(o).toHaveFocus();const r=c(document.body).getByRole("status");e(r).toBeEmptyDOMElement(),await u(()=>e(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(l=>setTimeout(l,v+500)),e(o).toBeInTheDocument(),e(o).toHaveFocus(),await i.tab({shift:!0}),e(t).toHaveFocus(),await u(()=>e(o).not.toBeInTheDocument(),{timeout:v+1e3})}},E={...f,play:async({canvasElement:s})=>{const a=c(s).getByRole("button",{name:"Toggle toast"});await i.click(a);const t=c(document.body),o=t.getByRole("button",{name:"Fermer le toast"});await i.hover(o);const r=t.getByRole("status");e(r).toBeEmptyDOMElement(),await u(()=>e(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(l=>setTimeout(l,v+500)),e(o).toBeInTheDocument(),await i.unhover(o),await u(()=>e(o).not.toBeInTheDocument(),{timeout:v+1e3})}};var H,A,M;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(A=B.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var P,N,U;O.parameters={...O.parameters,docs:{...(P=O.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(N=O.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var L,W,_;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    message: "Une mise à jour est disponible",
    type: "info",
    autoDismiss: false,
    closable: true,
    onKeyDown: fn()
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
    canvasElement,
    args
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
    await userEvent.keyboard("{ArrowRight}");
    expect(args.onKeyDown).toHaveBeenCalledWith(expect.objectContaining({
      key: "ArrowRight"
    }));
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(closeButton).not.toBeInTheDocument());
    expect(toggleButton).toHaveFocus();
    expect(args.onKeyDown).not.toHaveBeenCalledWith(expect.objectContaining({
      key: "Escape"
    }));
    expect(announcement).toBeInTheDocument();
    await userEvent.click(toggleButton);
    await waitFor(() => expect(announcement).toBeEmptyDOMElement());
    await waitFor(() => expect(announcement).toHaveTextContent("Information : Une mise à jour est disponible"));
  }
}`,...(_=(W=b.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var Q,K,q;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      const closeToastButton = body.getByRole("button", {
        name: "Fermer le toast"
      });
      closeToastButton.focus();
      await userEvent.keyboard("{Escape}");
      await waitFor(() => expect(closeToastButton).not.toBeInTheDocument());
      expect(dialog).toBeInTheDocument();
      await userEvent.click(within(dialog).getByRole("button", {
        name: "Fermer"
      }));
      await waitFor(() => expect(dialog).not.toBeInTheDocument());
      await waitFor(() => expect(canvasElement.closest('[aria-hidden="true"], [inert]')).toBeNull());
      expect(body.getByRole("status")).toBe(announcement);
    }
  }
}`,...(q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var V,$,z;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    const body = within(document.body);
    const actionButton = await body.findByRole("button", {
      name: "Mettre à jour"
    });
    await waitFor(() => expect(body.getByRole("status")).toHaveTextContent("Information : Une mise à jour est disponible"));
    await userEvent.tab();
    expect(actionButton).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    await new Promise(resolve => setTimeout(resolve, 350));
    expect(actionButton).toBeVisible();
    expect(actionButton).toHaveFocus();
    expect(body.getByText("Une mise à jour est disponible")).toBeVisible();
    expect(body.queryByRole("button", {
      name: "Fermer le toast"
    })).not.toBeInTheDocument();
  }
}`,...(z=($=T.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var G,J,X;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(J=C.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ae,re;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,le,ce;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Ve=["Default","Multiple","KeyboardInteraction","AnnouncementsWithModalOverlays","EscapeDoesNotCloseNonClosableToast","FocusRestorationWhenQueued","ConsumerControlsFocusOnClose","FocusRestorationAfterLeavingToast","AutoDismissPausesOnKeyboardFocus","AutoDismissPausesOnHover"];export{h as AnnouncementsWithModalOverlays,E as AutoDismissPausesOnHover,f as AutoDismissPausesOnKeyboardFocus,I as ConsumerControlsFocusOnClose,B as Default,T as EscapeDoesNotCloseNonClosableToast,F as FocusRestorationAfterLeavingToast,C as FocusRestorationWhenQueued,b as KeyboardInteraction,O as Multiple,Ve as __namedExportsOrder,qe as default};
