import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as d,u as i,e as o,a as y}from"./index-4rjIhT2C.js";import{r as l}from"./index-G8LIXM5I.js";import{B as c}from"./Button-B3EnjUD7.js";import{R as H,T as N}from"./Icon-DBkoQNiA.js";import{T as r,a as B}from"./ToastQueueProvider-D0CcYw74.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./id.utils-DsO5Uws7.js";import"./useAnimatedMount-_zPBpYOt.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const U=Object.keys(H),P=Object.keys(N),re={title:"Composants/Toast",tags:["autodocs"],component:r,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...U,...P].sort((t,n)=>t.localeCompare(n)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},m={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:t=>{const[n,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Toggle toast",onClick:()=>s(!n),style:{marginBottom:"16px"}}),e.jsx(B,{children:e.jsx(r,{...t,isOpen:n,onClose:()=>{s(!1)},actionButtonLabel:"Mettre à jour"})})]})}},b={args:{...m.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:t=>{const[n,s]=l.useState(!1),[a,u]=l.useState(!1),[g,p]=l.useState(!1),[I,T]=l.useState(!1),[v,x]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(c,{label:"Toggle error toast",onClick:()=>s(!n),variant:"danger"}),e.jsx(c,{label:"Toggle warning toast",onClick:()=>T(!I),variant:"secondary"}),e.jsx(c,{label:"Toggle success toast",onClick:()=>u(!a),variant:"primary"}),e.jsx(c,{label:"Toggle info toast",onClick:()=>p(!g),variant:"secondary"}),e.jsx(c,{label:"Toggle neutral toast",onClick:()=>x(!v),variant:"neutral"})]}),e.jsxs(B,{children:[e.jsx(r,{...t,type:"error",isOpen:n,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{s(!1)}}),e.jsx(r,{...t,type:"warning",message:"Warning toast",isOpen:I,actionButtonLabel:"Mettre à jour",onClose:()=>{T(!1)}}),e.jsx(r,{...t,type:"success",message:"Success toast",isOpen:a,actionButtonLabel:"Mettre à jour",onClose:()=>{u(!1)}}),e.jsx(r,{...t,type:"info",message:"Info toast",isOpen:g,actionButtonLabel:"Mettre à jour",onClose:()=>{p(!1)}}),e.jsx(r,{...t,type:"neutral",message:"Neutral toast",isOpen:v,actionButtonLabel:"Mettre à jour",onClose:()=>{x(!1)},iconName:"settings"})]})]})}},O={tags:["!autodocs"],args:{...m.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:t=>{const[n,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Toggle toast",onClick:()=>s(!n),style:{marginBottom:"16px"}}),e.jsx(B,{children:e.jsx(r,{...t,isOpen:n,onClose:()=>{s(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:t})=>{const n=d(t),s=await n.getByRole("button",{name:"Toggle toast"}),a=n.getByRole("status");o(a).toBeEmptyDOMElement(),await i.click(s),await y(()=>o(a).toHaveTextContent("Information : Une mise à jour est disponible")),o(d(document.body).getAllByRole("status")).toHaveLength(1);const u=d(document.body),g=u.getByRole("button",{name:"Mettre à jour"}),p=u.getByRole("button",{name:"Fermer le toast"});await i.tab(),o(g).toHaveFocus(),await i.tab(),o(p).toHaveFocus(),await i.tab({shift:!0}),o(g).toHaveFocus(),await i.click(p),await y(()=>o(p).not.toBeInTheDocument()),o(a).toBeInTheDocument(),await i.click(s),o(a).toBeEmptyDOMElement(),await y(()=>o(a).toHaveTextContent("Information : Une mise à jour est disponible"))}},A=3e3,f={tags:["!autodocs","skip-ci"],args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,showActionButton:!1},render:t=>{const[n,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Toggle toast",onClick:()=>s(!n),style:{marginBottom:"16px"}}),e.jsx(B,{children:e.jsx(r,{...t,isOpen:n,onClose:()=>{s(!1)}})})]})},play:async({canvasElement:t})=>{const s=await d(t).getByRole("button",{name:"Toggle toast"});await i.click(s);const a=d(document.body).getByRole("button",{name:"Fermer le toast"});await i.tab(),o(a).toHaveFocus(),await new Promise(u=>setTimeout(u,A+500)),o(a).toBeInTheDocument()}};var j,w,S;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,h,E;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(h=b.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var k,D,M;O.parameters={...O.parameters,docs:{...(k=O.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    const announcement = canvas.getByRole("status");
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
}`,...(M=(D=O.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var F,R,L;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    const closeButton = within(document.body).getByRole("button", {
      name: "Fermer le toast"
    });
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await new Promise(resolve => setTimeout(resolve, AUTO_DISMISS_SHORT_MS + 500));
    expect(closeButton).toBeInTheDocument();
  }
}`,...(L=(R=f.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const ie=["Default","Multiple","KeyboardInteraction","AutoDismissPausesOnKeyboardFocus"];export{f as AutoDismissPausesOnKeyboardFocus,m as Default,O as KeyboardInteraction,b as Multiple,ie as __namedExportsOrder,re as default};
