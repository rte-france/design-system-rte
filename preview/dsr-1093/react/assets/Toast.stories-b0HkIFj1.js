import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as c,e as t,u as i,a as u,f as de}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{B as p}from"./Button-B3EnjUD7.js";import{D as ge}from"./Drawer-C_Q6iqef.js";import{R as Be,T as ye}from"./Icon-DBkoQNiA.js";import{M as be}from"./Modal-DNPJUPSo.js";import{T as d,a as y}from"./ToastQueueProvider-D5EOE8-1.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-Yqqou6H5.js";import"./useFreezeNavigation-Df2rzoup.js";import"./icon.constants-CvX5SV3k.js";import"./Divider-BVZUrQ0d.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useFocusTrap-BZu4_Auv.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./log-handlers-Hz0GUguM.js";import"./id.utils-DsO5Uws7.js";const fe=Object.keys(Be),we=Object.keys(ye),Je={title:"Composants/Toast",tags:["autodocs"],component:d,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...fe,...we].sort((s,o)=>s.localeCompare(o)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},B={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:s=>{const[o,e]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Toggle toast",onClick:()=>e(!o),style:{marginBottom:"16px"}}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:o,onClose:()=>{e(!1)},actionButtonLabel:"Mettre à jour"})})]})}},w={tags:["!autodocs"],args:{message:"Notification",duration:"short",showActionButton:!1},render:B.render,play:async({canvasElement:s})=>{await i.click(c(s).getByRole("button",{name:"Toggle toast"}));const o=c(document.body),e=await o.findByText("Notification"),a=o.getByRole("button",{name:"Fermer le toast"});await new Promise(r=>setTimeout(r,3500)),t(e).toBeVisible(),await i.click(a),await u(()=>t(e).not.toBeInTheDocument()),t(o.getByRole("status")).toBeInTheDocument()}},v={tags:["!autodocs"],args:{message:"Notification",autoDismiss:!1,closable:!1,showActionButton:!1},render:B.render,play:async({canvasElement:s})=>{await i.click(c(s).getByRole("button",{name:"Toggle toast"}));const o=c(document.body),e=await o.findByText("Notification");await i.click(o.getByRole("button",{name:"Fermer le toast"})),await u(()=>t(e).not.toBeInTheDocument()),t(o.getByRole("status")).toBeInTheDocument()}},O={args:{...B.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:s=>{const[o,e]=m.useState(!1),[a,r]=m.useState(!1),[l,g]=m.useState(!1),[D,E]=m.useState(!1),[j,S]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(p,{label:"Toggle error toast",onClick:()=>e(!o),variant:"danger"}),n.jsx(p,{label:"Toggle warning toast",onClick:()=>E(!D),variant:"secondary"}),n.jsx(p,{label:"Toggle success toast",onClick:()=>r(!a),variant:"primary"}),n.jsx(p,{label:"Toggle info toast",onClick:()=>g(!l),variant:"secondary"}),n.jsx(p,{label:"Toggle neutral toast",onClick:()=>S(!j),variant:"neutral"})]}),n.jsxs(y,{children:[n.jsx(d,{...s,type:"error",isOpen:o,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{e(!1)}}),n.jsx(d,{...s,type:"warning",message:"Warning toast",isOpen:D,actionButtonLabel:"Mettre à jour",onClose:()=>{E(!1)}}),n.jsx(d,{...s,type:"success",message:"Success toast",isOpen:a,actionButtonLabel:"Mettre à jour",onClose:()=>{r(!1)}}),n.jsx(d,{...s,type:"info",message:"Info toast",isOpen:l,actionButtonLabel:"Mettre à jour",onClose:()=>{g(!1)}}),n.jsx(d,{...s,type:"neutral",message:"Neutral toast",isOpen:j,actionButtonLabel:"Mettre à jour",onClose:()=>{S(!1)},iconName:"settings"})]})]})}},h={tags:["!autodocs"],args:{...B.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:s=>{const[o,e]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Toggle toast",onClick:()=>e(!o),style:{marginBottom:"16px"}}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:o,onClose:()=>{e(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:s})=>{const e=await c(s).getByRole("button",{name:"Toggle toast"}),a=c(document.body).getByRole("status");t(a).toBeEmptyDOMElement(),await i.click(e),await u(()=>t(a).toHaveTextContent("Information : Une mise à jour est disponible")),t(c(document.body).getAllByRole("status")).toHaveLength(1);const r=c(document.body),l=r.getByRole("button",{name:"Mettre à jour"}),g=r.getByRole("button",{name:"Fermer le toast"});await i.tab(),t(l).toHaveFocus(),await i.tab(),t(g).toHaveFocus(),await i.tab({shift:!0}),t(l).toHaveFocus(),await i.click(g),await u(()=>t(g).not.toBeInTheDocument()),t(e).toHaveFocus(),t(a).toBeInTheDocument(),await i.click(e),t(a).toBeEmptyDOMElement(),await u(()=>t(a).toHaveTextContent("Information : Une mise à jour est disponible"))}},T={tags:["!autodocs"],args:{...B.args},render:s=>{const[o,e]=m.useState(null),[a,r]=m.useState(!1),l=n.jsx(p,{label:"Afficher le toast",onClick:()=>r(!0)});return n.jsxs(y,{children:[n.jsx(p,{label:"Ouvrir Modal",onClick:()=>e("modal")}),n.jsx(p,{label:"Ouvrir Drawer",onClick:()=>e("drawer")}),n.jsx(be,{id:"toast-announcement-modal",title:"Modal avec toast",isOpen:o==="modal",onClose:()=>e(null),primaryButton:n.jsx(p,{label:"Fermer",onClick:()=>e(null)}),children:l}),n.jsx(ge,{id:"toast-announcement-drawer",title:"Drawer avec toast",position:"modal",isOpen:o==="drawer",onClose:()=>e(null),onClickToggle:()=>e(null),primaryButtonLabel:"Fermer",onClickPrimaryButton:()=>e(null),content:l}),n.jsx(d,{...s,isOpen:a,onClose:()=>r(!1)})]})},play:async({canvasElement:s})=>{const o=c(s),e=c(document.body),a=e.getByRole("status");t(a).toBeEmptyDOMElement();for(const r of["Modal","Drawer"]){await i.click(o.getByRole("button",{name:`Ouvrir ${r}`}));const l=await e.findByRole("dialog",{name:`${r} avec toast`});await u(()=>{t(s.closest('[aria-hidden="true"]')).not.toBeNull(),t(s.closest("[inert]")).not.toBeNull()}),t(e.getByRole("status")).toBe(a),t(a.closest('[aria-hidden="true"], [inert]')).toBeNull(),await i.click(c(l).getByRole("button",{name:"Afficher le toast"})),await u(()=>t(a).toHaveTextContent("Information : Une mise à jour est disponible")),t(e.getAllByRole("status")).toHaveLength(1),t(a.closest('[aria-hidden="true"], [inert]')).toBeNull(),await i.click(c(l).getByRole("button",{name:"Fermer"})),await u(()=>t(l).not.toBeInTheDocument()),await u(()=>t(s.closest('[aria-hidden="true"], [inert]')).toBeNull()),t(e.getByRole("status")).toBe(a);const g=e.getByRole("button",{name:"Fermer le toast"});await i.click(g),await u(()=>t(g).not.toBeInTheDocument())}}},f=3e3,x=de(),k=de(()=>document.activeElement),I={tags:["!autodocs","toast-focus"],args:{...B.args,onClose:x},render:s=>{const[o,e]=m.useState(!1),[a,r]=m.useState(!1),l=m.useCallback(()=>r(!1),[]);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Afficher le toast",onClick:()=>e(!0)}),n.jsxs(y,{children:[n.jsx(d,{...s,isOpen:o,actionButtonLabel:"Afficher une erreur",onActionButtonClick:()=>r(!0)}),n.jsx(d,{message:"Erreur prioritaire",type:"error",autoDismiss:!1,closable:!0,isOpen:a,onClose:l})]})]})},play:async({canvasElement:s})=>{const o=c(s).getByRole("button",{name:"Afficher le toast"}),e=c(document.body);await i.click(o);const a=await e.findByRole("button",{name:"Afficher une erreur"});x.mockClear(),await i.tab(),t(a).toHaveFocus(),await i.keyboard("{Enter}"),await u(()=>t(a).not.toBeInTheDocument()),t(o).toHaveFocus(),t(x).not.toHaveBeenCalled(),await i.click(e.getByRole("button",{name:"Fermer le toast"})),await u(()=>t(e.getByRole("button",{name:"Afficher une erreur"})).toBeVisible()),t(x).not.toHaveBeenCalled()}},C={tags:["!autodocs","toast-focus"],args:{...B.args,onClose:k},render:s=>{const[o,e]=m.useState(!1),a=m.useRef(null),{onClose:r}=s,l=m.useCallback(()=>{var g;r==null||r(),e(!1),(g=a.current)==null||g.focus()},[r]);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Afficher le toast",onClick:()=>e(!0)}),n.jsx("input",{ref:a,"aria-label":"Cible du callback"}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:o,onClose:l})})]})},play:async({canvasElement:s})=>{const o=c(s),e=o.getByRole("button",{name:"Afficher le toast"}),a=o.getByRole("textbox",{name:"Cible du callback"});await i.click(e);const r=await c(document.body).findByRole("button",{name:"Fermer le toast"});k.mockClear(),r.focus(),t(r).toHaveFocus(),await i.keyboard("{Enter}"),t(k).toHaveReturnedWith(e),t(a).toHaveFocus(),await u(()=>t(r).not.toBeInTheDocument()),t(a).toHaveFocus()}},F={tags:["!autodocs","toast-focus"],args:{...B.args,autoDismiss:!0,duration:"short",showActionButton:!1},render:s=>{const[o,e]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Afficher le toast",onClick:()=>e(!0)}),n.jsx(p,{label:"Autre élément"}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:o,onClose:()=>e(!1)})})]})},play:async({canvasElement:s})=>{const o=c(s),e=c(document.body),a=o.getByRole("button",{name:"Afficher le toast"}),r=o.getByRole("button",{name:"Autre élément"});await i.click(a);let l=await e.findByRole("button",{name:"Fermer le toast"});l.focus(),t(l).toHaveFocus(),await i.tab({shift:!0}),t(r).toHaveFocus(),await i.tab(),t(l).toHaveFocus(),await i.click(l),await u(()=>t(l).not.toBeInTheDocument()),t(r).toHaveFocus(),await i.click(a),l=await e.findByRole("button",{name:"Fermer le toast"}),l.focus(),t(l).toHaveFocus(),await i.tab({shift:!0}),t(r).toHaveFocus(),await i.unhover(l),await u(()=>t(l).not.toBeInTheDocument(),{timeout:f+1e3}),t(r).toHaveFocus()}},b={tags:["!autodocs"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:s=>{const[o,e]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Toggle toast",onClick:()=>e(!o),style:{marginBottom:"16px"}}),n.jsx(y,{children:n.jsx(d,{...s,isOpen:o,onClose:()=>{e(!1)}})})]})},play:async({canvasElement:s})=>{const e=await c(s).getByRole("button",{name:"Toggle toast"});await i.click(e);const a=c(document.body).getByRole("button",{name:"Fermer le toast"});await i.tab(),t(a).toHaveFocus();const r=c(document.body).getByRole("status");t(r).toBeEmptyDOMElement(),await u(()=>t(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(l=>setTimeout(l,f+500)),t(a).toBeInTheDocument(),t(a).toHaveFocus(),await i.tab({shift:!0}),t(e).toHaveFocus(),await u(()=>t(a).not.toBeInTheDocument(),{timeout:f+1e3})}},R={...b,play:async({canvasElement:s})=>{const o=c(s).getByRole("button",{name:"Toggle toast"});await i.click(o);const e=c(document.body),a=e.getByRole("button",{name:"Fermer le toast"});await i.hover(a);const r=e.getByRole("status");t(r).toBeEmptyDOMElement(),await u(()=>t(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(l=>setTimeout(l,f+500)),t(a).toBeInTheDocument(),await i.unhover(a),await u(()=>t(a).not.toBeInTheDocument(),{timeout:f+1e3})}};var H,A,M;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(A=B.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var P,N,L;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(N=w.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var U,_,Q;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(_=v.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var W,q,K;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=(q=O.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var V,$,z;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=($=h.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var G,J,X;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(J=T.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ae,re;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,le,ce;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,me,pe;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(me=R.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Xe=["Default","ManualDismissByDefault","CloseButtonWithoutAutoDismiss","Multiple","KeyboardInteraction","AnnouncementsWithModalOverlays","FocusRestorationWhenQueued","ConsumerControlsFocusOnClose","FocusRestorationAfterLeavingToast","AutoDismissPausesOnKeyboardFocus","AutoDismissPausesOnHover"];export{T as AnnouncementsWithModalOverlays,R as AutoDismissPausesOnHover,b as AutoDismissPausesOnKeyboardFocus,v as CloseButtonWithoutAutoDismiss,C as ConsumerControlsFocusOnClose,B as Default,F as FocusRestorationAfterLeavingToast,I as FocusRestorationWhenQueued,h as KeyboardInteraction,w as ManualDismissByDefault,O as Multiple,Xe as __namedExportsOrder,Je as default};
