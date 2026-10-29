import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as p,u,e as g,a as L}from"./index-4rjIhT2C.js";import{r}from"./index-G8LIXM5I.js";import{B as i}from"./Button-B3EnjUD7.js";import{R as N,T as P}from"./Icon-DBkoQNiA.js";import{T as a,a as f}from"./ToastQueueProvider-BZGoHKKG.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./id.utils-DsO5Uws7.js";import"./useAnimatedMount-_zPBpYOt.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const H=Object.keys(N),U=Object.keys(P),re={title:"Composants/Toast",tags:["autodocs"],component:a,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...H,...U].sort((t,s)=>t.localeCompare(s)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},m={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:t=>{const[s,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Toggle toast",onClick:()=>n(!s),style:{marginBottom:"16px"}}),e.jsx(f,{children:e.jsx(a,{...t,isOpen:s,onClose:()=>{n(!1)},actionButtonLabel:"Mettre à jour"})})]})}},b={args:{...m.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:t=>{const[s,n]=r.useState(!1),[o,l]=r.useState(!1),[c,B]=r.useState(!1),[y,I]=r.useState(!1),[T,j]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(i,{label:"Toggle error toast",onClick:()=>n(!s),variant:"danger"}),e.jsx(i,{label:"Toggle warning toast",onClick:()=>I(!y),variant:"secondary"}),e.jsx(i,{label:"Toggle success toast",onClick:()=>l(!o),variant:"primary"}),e.jsx(i,{label:"Toggle info toast",onClick:()=>B(!c),variant:"secondary"}),e.jsx(i,{label:"Toggle neutral toast",onClick:()=>j(!T),variant:"neutral"})]}),e.jsxs(f,{children:[e.jsx(a,{...t,type:"error",isOpen:s,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{n(!1)}}),e.jsx(a,{...t,type:"warning",message:"Warning toast",isOpen:y,actionButtonLabel:"Mettre à jour",onClose:()=>{I(!1)}}),e.jsx(a,{...t,type:"success",message:"Success toast",isOpen:o,actionButtonLabel:"Mettre à jour",onClose:()=>{l(!1)}}),e.jsx(a,{...t,type:"info",message:"Info toast",isOpen:c,actionButtonLabel:"Mettre à jour",onClose:()=>{B(!1)}}),e.jsx(a,{...t,type:"neutral",message:"Neutral toast",isOpen:T,actionButtonLabel:"Mettre à jour",onClose:()=>{j(!1)},iconName:"settings"})]})]})}},d={tags:["!autodocs"],args:{...m.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:t=>{const[s,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Toggle toast",onClick:()=>n(!s),style:{marginBottom:"16px"}}),e.jsx(f,{children:e.jsx(a,{...t,isOpen:s,onClose:()=>{n(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:t})=>{const n=await p(t).getByRole("button",{name:"Toggle toast"});await u.click(n);const o=p(document.body).getByRole("status"),l=await p(o).getByRole("button",{name:"Mettre à jour"}),c=await p(o).getByRole("button",{name:"Fermer le toast"});await u.tab(),g(l).toHaveFocus(),await u.tab(),g(c).toHaveFocus(),await u.tab({shift:!0}),g(l).toHaveFocus(),await u.click(c),await L(()=>g(o).not.toBeInTheDocument())}},W=3e3,O={tags:["!autodocs","skip-ci"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:t=>{const[s,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Toggle toast",onClick:()=>n(!s),style:{marginBottom:"16px"}}),e.jsx(f,{children:e.jsx(a,{...t,isOpen:s,onClose:()=>{n(!1)}})})]})},play:async({canvasElement:t})=>{const n=await p(t).getByRole("button",{name:"Toggle toast"});await u.click(n);const o=p(document.body).getByRole("status"),l=await p(o).getByRole("button",{name:"Fermer le toast"});await u.tab(),g(l).toHaveFocus(),await new Promise(c=>setTimeout(c,W+500)),g(o).toBeInTheDocument()}};var v,w,x;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var S,h,C;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(h=b.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,E,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var D,F,R;O.parameters={...O.parameters,docs:{...(D=O.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(F=O.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const ie=["Default","Multiple","KeyboardInteraction","AutoDismissPausesOnKeyboardFocus"];export{O as AutoDismissPausesOnKeyboardFocus,m as Default,d as KeyboardInteraction,b as Multiple,ie as __namedExportsOrder,re as default};
