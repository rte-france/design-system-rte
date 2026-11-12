import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as l,e,u as i,a as u,f as j}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{B as p}from"./Button-B3EnjUD7.js";import{D as we}from"./Drawer-C_Q6iqef.js";import{R as fe,T as ve}from"./Icon-DBkoQNiA.js";import{M as he}from"./Modal-DNPJUPSo.js";import{T as d,a as y}from"./ToastQueueProvider-CHnVwQvr.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-Yqqou6H5.js";import"./useFreezeNavigation-Df2rzoup.js";import"./icon.constants-CvX5SV3k.js";import"./Divider-BVZUrQ0d.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useFocusTrap-BZu4_Auv.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./log-handlers-Hz0GUguM.js";import"./id.utils-DsO5Uws7.js";const Oe=Object.keys(fe),Te=Object.keys(ve),et={title:"Composants/Toast",tags:["autodocs"],component:d,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...Oe,...Te].sort((a,o)=>a.localeCompare(o)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},g={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:a=>{const[o,t]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Toggle toast",onClick:()=>t(!o),style:{marginBottom:"16px"}}),n.jsx(y,{children:n.jsx(d,{...a,isOpen:o,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})}},h={tags:["!autodocs"],args:{message:"Notification",duration:"short",showActionButton:!1},render:g.render,play:async({canvasElement:a})=>{await i.click(l(a).getByRole("button",{name:"Toggle toast"}));const o=l(document.body),t=await o.findByText("Notification"),s=o.getByRole("button",{name:"Fermer le toast"});await new Promise(r=>setTimeout(r,3500)),e(t).toBeVisible(),await i.click(s),await u(()=>e(t).not.toBeInTheDocument()),e(o.getByRole("status")).toBeInTheDocument()}},O={tags:["!autodocs"],args:{message:"Notification",autoDismiss:!1,closable:!1,showActionButton:!1},render:g.render,play:async({canvasElement:a})=>{await i.click(l(a).getByRole("button",{name:"Toggle toast"}));const o=l(document.body),t=await o.findByText("Notification");await i.click(o.getByRole("button",{name:"Fermer le toast"})),await u(()=>e(t).not.toBeInTheDocument()),e(o.getByRole("status")).toBeInTheDocument()}},T={args:{...g.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:a=>{const[o,t]=m.useState(!1),[s,r]=m.useState(!1),[c,B]=m.useState(!1),[w,S]=m.useState(!1),[H,A]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(p,{label:"Toggle error toast",onClick:()=>t(!o),variant:"danger"}),n.jsx(p,{label:"Toggle warning toast",onClick:()=>S(!w),variant:"secondary"}),n.jsx(p,{label:"Toggle success toast",onClick:()=>r(!s),variant:"primary"}),n.jsx(p,{label:"Toggle info toast",onClick:()=>B(!c),variant:"secondary"}),n.jsx(p,{label:"Toggle neutral toast",onClick:()=>A(!H),variant:"neutral"})]}),n.jsxs(y,{children:[n.jsx(d,{...a,type:"error",isOpen:o,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{t(!1)}}),n.jsx(d,{...a,type:"warning",message:"Warning toast",isOpen:w,actionButtonLabel:"Mettre à jour",onClose:()=>{S(!1)}}),n.jsx(d,{...a,type:"success",message:"Success toast",isOpen:s,actionButtonLabel:"Mettre à jour",onClose:()=>{r(!1)}}),n.jsx(d,{...a,type:"info",message:"Info toast",isOpen:c,actionButtonLabel:"Mettre à jour",onClose:()=>{B(!1)}}),n.jsx(d,{...a,type:"neutral",message:"Neutral toast",isOpen:H,actionButtonLabel:"Mettre à jour",onClose:()=>{A(!1)},iconName:"settings"})]})]})}},b={tags:["!autodocs"],args:{...g.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0,onKeyDown:j()},render:a=>{const[o,t]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Toggle toast",onClick:()=>t(!o),style:{marginBottom:"16px"}}),n.jsx(y,{children:n.jsx(d,{...a,isOpen:o,onClose:()=>{t(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:a,args:o})=>{const s=await l(a).getByRole("button",{name:"Toggle toast"}),r=l(document.body).getByRole("status");e(r).toBeEmptyDOMElement(),await i.click(s),await u(()=>e(r).toHaveTextContent("Information : Une mise à jour est disponible")),e(l(document.body).getAllByRole("status")).toHaveLength(1);const c=l(document.body),B=c.getByRole("button",{name:"Mettre à jour"}),w=c.getByRole("button",{name:"Fermer le toast"});await i.tab(),e(B).toHaveFocus(),await i.tab(),e(w).toHaveFocus(),await i.tab({shift:!0}),e(B).toHaveFocus(),await i.keyboard("{ArrowRight}"),e(o.onKeyDown).toHaveBeenCalledWith(e.objectContaining({key:"ArrowRight"})),await i.keyboard("{Escape}"),await u(()=>e(w).not.toBeInTheDocument()),e(s).toHaveFocus(),e(o.onKeyDown).not.toHaveBeenCalledWith(e.objectContaining({key:"Escape"})),e(r).toBeInTheDocument(),await i.click(s),await u(()=>e(r).toBeEmptyDOMElement()),await u(()=>e(r).toHaveTextContent("Information : Une mise à jour est disponible"))}},x={tags:["!autodocs"],args:{...g.args},render:a=>{const[o,t]=m.useState(null),[s,r]=m.useState(!1),c=n.jsx(p,{label:"Afficher le toast",onClick:()=>r(!0)});return n.jsxs(y,{children:[n.jsx(p,{label:"Ouvrir Modal",onClick:()=>t("modal")}),n.jsx(p,{label:"Ouvrir Drawer",onClick:()=>t("drawer")}),n.jsx(he,{id:"toast-announcement-modal",title:"Modal avec toast",isOpen:o==="modal",onClose:()=>t(null),primaryButton:n.jsx(p,{label:"Fermer",onClick:()=>t(null)}),children:c}),n.jsx(we,{id:"toast-announcement-drawer",title:"Drawer avec toast",position:"modal",isOpen:o==="drawer",onClose:()=>t(null),onClickToggle:()=>t(null),primaryButtonLabel:"Fermer",onClickPrimaryButton:()=>t(null),content:c}),n.jsx(d,{...a,isOpen:s,onClose:()=>r(!1)})]})},play:async({canvasElement:a})=>{const o=l(a),t=l(document.body),s=t.getByRole("status");e(s).toBeEmptyDOMElement();for(const r of["Modal","Drawer"]){await i.click(o.getByRole("button",{name:`Ouvrir ${r}`}));const c=await t.findByRole("dialog",{name:`${r} avec toast`});await u(()=>{e(a.closest('[aria-hidden="true"]')).not.toBeNull(),e(a.closest("[inert]")).not.toBeNull()}),e(t.getByRole("status")).toBe(s),e(s.closest('[aria-hidden="true"], [inert]')).toBeNull(),await i.click(l(c).getByRole("button",{name:"Afficher le toast"})),await u(()=>e(s).toHaveTextContent("Information : Une mise à jour est disponible")),e(t.getAllByRole("status")).toHaveLength(1),e(s.closest('[aria-hidden="true"], [inert]')).toBeNull();const B=t.getByRole("button",{name:"Fermer le toast"});B.focus(),await i.keyboard("{Escape}"),await u(()=>e(B).not.toBeInTheDocument()),e(c).toBeInTheDocument(),await i.click(l(c).getByRole("button",{name:"Fermer"})),await u(()=>e(c).not.toBeInTheDocument()),await u(()=>e(a.closest('[aria-hidden="true"], [inert]')).toBeNull()),e(t.getByRole("status")).toBe(s)}}},C={...b,args:{...b.args,closable:!1},play:async({canvasElement:a})=>{const o=l(a);await i.click(o.getByRole("button",{name:"Toggle toast"}));const t=l(document.body),s=await t.findByRole("button",{name:"Mettre à jour"});await u(()=>e(t.getByRole("status")).toHaveTextContent("Information : Une mise à jour est disponible")),await i.tab(),e(s).toHaveFocus(),await i.keyboard("{Escape}"),await new Promise(c=>setTimeout(c,350)),e(s).toBeVisible(),e(s).toHaveFocus(),e(t.getByText("Une mise à jour est disponible")).toBeVisible();const r=t.getByRole("button",{name:"Fermer le toast"});e(r).toBeVisible(),await i.click(r),await u(()=>e(s).not.toBeInTheDocument()),e(o.getByRole("button",{name:"Toggle toast"})).toHaveFocus()}},v=3e3,I=j(),D=j(()=>document.activeElement),F={tags:["!autodocs","toast-focus"],args:{...g.args,onClose:I},render:a=>{const[o,t]=m.useState(!1),[s,r]=m.useState(!1),c=m.useCallback(()=>r(!1),[]);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Afficher le toast",onClick:()=>t(!0)}),n.jsxs(y,{children:[n.jsx(d,{...a,isOpen:o,actionButtonLabel:"Afficher une erreur",onActionButtonClick:()=>r(!0)}),n.jsx(d,{message:"Erreur prioritaire",type:"error",autoDismiss:!1,closable:!0,isOpen:s,onClose:c})]})]})},play:async({canvasElement:a})=>{const o=l(a).getByRole("button",{name:"Afficher le toast"}),t=l(document.body);await i.click(o);const s=await t.findByRole("button",{name:"Afficher une erreur"});I.mockClear(),await i.tab(),e(s).toHaveFocus(),await i.keyboard("{Enter}"),await u(()=>e(s).not.toBeInTheDocument()),e(o).toHaveFocus(),e(I).not.toHaveBeenCalled(),await i.click(t.getByRole("button",{name:"Fermer le toast"})),await u(()=>e(t.getByRole("button",{name:"Afficher une erreur"})).toBeVisible()),e(I).not.toHaveBeenCalled()}},E={tags:["!autodocs","toast-focus"],args:{...g.args,onClose:D},render:a=>{const[o,t]=m.useState(!1),s=m.useRef(null),{onClose:r}=a,c=m.useCallback(()=>{var B;r==null||r(),t(!1),(B=s.current)==null||B.focus()},[r]);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Afficher le toast",onClick:()=>t(!0)}),n.jsx("input",{ref:s,"aria-label":"Cible du callback"}),n.jsx(y,{children:n.jsx(d,{...a,isOpen:o,onClose:c})})]})},play:async({canvasElement:a})=>{const o=l(a),t=o.getByRole("button",{name:"Afficher le toast"}),s=o.getByRole("textbox",{name:"Cible du callback"});await i.click(t);const r=await l(document.body).findByRole("button",{name:"Fermer le toast"});D.mockClear(),r.focus(),e(r).toHaveFocus(),await i.keyboard("{Enter}"),e(D).toHaveReturnedWith(t),e(s).toHaveFocus(),await u(()=>e(r).not.toBeInTheDocument()),e(s).toHaveFocus()}},R={tags:["!autodocs","toast-focus"],args:{...g.args,autoDismiss:!0,duration:"short",showActionButton:!1},render:a=>{const[o,t]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Afficher le toast",onClick:()=>t(!0)}),n.jsx(p,{label:"Autre élément"}),n.jsx(y,{children:n.jsx(d,{...a,isOpen:o,onClose:()=>t(!1)})})]})},play:async({canvasElement:a})=>{const o=l(a),t=l(document.body),s=o.getByRole("button",{name:"Afficher le toast"}),r=o.getByRole("button",{name:"Autre élément"});await i.click(s);let c=await t.findByRole("button",{name:"Fermer le toast"});c.focus(),e(c).toHaveFocus(),await i.tab({shift:!0}),e(r).toHaveFocus(),await i.tab(),e(c).toHaveFocus(),await i.click(c),await u(()=>e(c).not.toBeInTheDocument()),e(r).toHaveFocus(),await i.click(s),c=await t.findByRole("button",{name:"Fermer le toast"}),c.focus(),e(c).toHaveFocus(),await i.tab({shift:!0}),e(r).toHaveFocus(),await i.unhover(c),await u(()=>e(c).not.toBeInTheDocument(),{timeout:v+1e3}),e(r).toHaveFocus()}},f={tags:["!autodocs"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:a=>{const[o,t]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Toggle toast",onClick:()=>t(!o),style:{marginBottom:"16px"}}),n.jsx(y,{children:n.jsx(d,{...a,isOpen:o,onClose:()=>{t(!1)}})})]})},play:async({canvasElement:a})=>{const t=await l(a).getByRole("button",{name:"Toggle toast"});await i.click(t);const s=l(document.body).getByRole("button",{name:"Fermer le toast"});await i.tab(),e(s).toHaveFocus();const r=l(document.body).getByRole("status");e(r).toBeEmptyDOMElement(),await u(()=>e(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(c=>setTimeout(c,v+500)),e(s).toBeInTheDocument(),e(s).toHaveFocus(),await i.tab({shift:!0}),e(t).toHaveFocus(),await u(()=>e(s).not.toBeInTheDocument(),{timeout:v+1e3})}},k={...f,play:async({canvasElement:a})=>{const o=l(a).getByRole("button",{name:"Toggle toast"});await i.click(o);const t=l(document.body),s=t.getByRole("button",{name:"Fermer le toast"});await i.hover(s);const r=t.getByRole("status");e(r).toBeEmptyDOMElement(),await u(()=>e(r).toHaveTextContent("Information : Une mise à jour est disponible")),await new Promise(c=>setTimeout(c,v+500)),e(s).toBeInTheDocument(),await i.unhover(s),await u(()=>e(s).not.toBeInTheDocument(),{timeout:v+1e3})}};var M,P,N;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(P=g.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var U,L,W;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,Q,K;O.parameters={...O.parameters,docs:{...(_=O.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var V,q,$;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(q=T.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var z,G,J;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
    const closeButton = body.getByRole("button", {
      name: "Fermer le toast"
    });
    expect(closeButton).toBeVisible();
    await userEvent.click(closeButton);
    await waitFor(() => expect(actionButton).not.toBeInTheDocument());
    expect(canvas.getByRole("button", {
      name: "Toggle toast"
    })).toHaveFocus();
  }
}`,...(ne=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,se,ae;F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(se=F.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,ie,ce;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,ue,me;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,de,ge;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var Be,ye,be;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(be=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const tt=["Default","ManualDismissByDefault","CloseButtonWithoutAutoDismiss","Multiple","KeyboardInteraction","AnnouncementsWithModalOverlays","EscapeDoesNotCloseNonClosableToast","FocusRestorationWhenQueued","ConsumerControlsFocusOnClose","FocusRestorationAfterLeavingToast","AutoDismissPausesOnKeyboardFocus","AutoDismissPausesOnHover"];export{x as AnnouncementsWithModalOverlays,k as AutoDismissPausesOnHover,f as AutoDismissPausesOnKeyboardFocus,O as CloseButtonWithoutAutoDismiss,E as ConsumerControlsFocusOnClose,g as Default,C as EscapeDoesNotCloseNonClosableToast,R as FocusRestorationAfterLeavingToast,F as FocusRestorationWhenQueued,b as KeyboardInteraction,h as ManualDismissByDefault,T as Multiple,tt as __namedExportsOrder,et as default};
