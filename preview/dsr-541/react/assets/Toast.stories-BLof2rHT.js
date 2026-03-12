import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as g,u as p,e as m,a as M}from"./index-4rjIhT2C.js";import{r as a}from"./index-G8LIXM5I.js";import{B as r}from"./Button-BeoQWSSr.js";import{R as L,T as N}from"./Icon-VGVlXIFq.js";import{T as o,a as O}from"./ToastQueueProvider-KTRi3kQF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CpOhwesz.js";import"./index-DSdvzt-y.js";import"./useAnimatedMount-_zPBpYOt.js";import"./IconButton-BXYt1Qbl.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const D=Object.keys(L),F=Object.keys(N),Z={title:"Composants/Toast",tags:["autodocs"],component:o,argTypes:{message:{control:"text"},type:{control:"select",options:["info","success","warning","error","neutral"]},placement:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","bottom-center"]},closable:{control:"boolean"},isOpen:{control:"boolean"},autoDismiss:{control:"boolean"},duration:{control:"select",options:["short","medium","long"]},iconName:{control:"select",options:[...D,...F].sort((t,s)=>t.localeCompare(s)),description:"Nom de l’icône à afficher sur le badge"},showLeftIcon:{control:"boolean"},showActionButton:{control:"boolean"},actionButtonLabel:{control:"text"},onActionButtonClick:{control:!1}}},l={args:{message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:t=>{const[s,n]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Toggle toast",onClick:()=>n(!s),style:{marginBottom:"16px"}}),e.jsx(O,{children:e.jsx(o,{...t,isOpen:s,onClose:()=>{n(!1)},actionButtonLabel:"Mettre à jour"})})]})}},f={args:{...l.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!0,duration:"short",closable:!0,placement:"bottom-center"},render:t=>{const[s,n]=a.useState(!1),[i,c]=a.useState(!1),[u,d]=a.useState(!1),[B,I]=a.useState(!1),[y,j]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(r,{label:"Toggle error toast",onClick:()=>n(!s),variant:"danger"}),e.jsx(r,{label:"Toggle warning toast",onClick:()=>I(!B),variant:"secondary"}),e.jsx(r,{label:"Toggle success toast",onClick:()=>c(!i),variant:"primary"}),e.jsx(r,{label:"Toggle info toast",onClick:()=>d(!u),variant:"secondary"}),e.jsx(r,{label:"Toggle neutral toast",onClick:()=>j(!y),variant:"neutral"})]}),e.jsxs(O,{children:[e.jsx(o,{...t,type:"error",isOpen:s,message:"Error toast",actionButtonLabel:"Mettre à jour",onClose:()=>{n(!1)}}),e.jsx(o,{...t,type:"warning",message:"Warning toast",isOpen:B,actionButtonLabel:"Mettre à jour",onClose:()=>{I(!1)}}),e.jsx(o,{...t,type:"success",message:"Success toast",isOpen:i,actionButtonLabel:"Mettre à jour",onClose:()=>{c(!1)}}),e.jsx(o,{...t,type:"info",message:"Info toast",isOpen:u,actionButtonLabel:"Mettre à jour",onClose:()=>{d(!1)}}),e.jsx(o,{...t,type:"neutral",message:"Neutral toast",isOpen:y,actionButtonLabel:"Mettre à jour",onClose:()=>{j(!1)},iconName:"settings"})]})]})}},b={args:{...l.args,message:"Une mise à jour est disponible",type:"info",autoDismiss:!1,closable:!0},render:t=>{const[s,n]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Toggle toast",onClick:()=>n(!s),style:{marginBottom:"16px"}}),e.jsx(O,{children:e.jsx(o,{...t,isOpen:s,onClose:()=>{n(!1)},actionButtonLabel:"Mettre à jour"})})]})},play:async({canvasElement:t})=>{const n=await g(t).getByRole("button",{name:"Toggle toast"});await p.click(n);const i=g(document.body).getByRole("status"),c=await g(i).getByRole("button",{name:"Mettre à jour"}),u=await g(i).getByTestId("toast-close-button");await p.tab(),m(c).toHaveFocus(),await p.tab(),m(u).toHaveFocus(),await p.tab({shift:!0}),m(c).toHaveFocus(),await p.click(u),await M(()=>m(i).not.toBeInTheDocument())}};var x,T,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var w,C,S;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(C=f.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var h,k,E;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    const closeButton = await within(toast).getByTestId("toast-close-button");
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
}`,...(E=(k=b.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const $=["Default","Multiple","KeyboardInteraction"];export{l as Default,b as KeyboardInteraction,f as Multiple,$ as __namedExportsOrder,Z as default};
