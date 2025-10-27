import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as V,T as L,d as W}from"./keyboard-test.constants-Cs1bXs78.js";import{w as f,u as m,e as y,f as J,a as Q}from"./index-DCXJbAaW.js";import{r as u}from"./index-G8LIXM5I.js";import{B as t}from"./Button-B-hhLjRd.js";import{T as U}from"./Textarea-Fl-W2GRk.js";import{u as X}from"./useAnimatedMount-_zPBpYOt.js";import{u as Z,a as ee,b as ne}from"./useKeydownEscape-B9tjvDNB.js";import{D as te}from"./Divider-B0TD5a92.js";import{I as ae}from"./Icon-DjEid3Hw.js";import{I as oe}from"./IconButton-CMN6gjhA.js";import{O as se}from"./Overlay-Cz1UKDtP.js";import{c as le}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-Cu8HPmfw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-Ef06xDiJ.js";import"./dom.constants-pEgPeCLJ.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const re={xl:32},c={"modal-backdrop":"_modal-backdrop_j9gyf_3","modal-container":"_modal-container_j9gyf_17","modal-header":"_modal-header_j9gyf_53","modal-header-text":"_modal-header-text_j9gyf_60","modal-title":"_modal-title_j9gyf_66","modal-content":"_modal-content_j9gyf_80","modal-content-description":"_modal-content-description_j9gyf_90","modal-footer":"_modal-footer_j9gyf_101"},l=u.forwardRef(({id:n,isOpen:o,title:a,icon:s,iconAppearance:r,description:i,primaryButton:d,secondaryButton:q,size:D="m",closeOnOverlayClick:K=!0,onClose:b,className:H,children:B,...G},O)=>{const{shouldRender:h,isAnimating:j}=X(o,150),[E,Y]=u.useState(null),$=u.useCallback(g=>{Y(g),typeof O=="function"?O(g):O&&(O.current=g)},[O]);return Z(K?b:()=>{},E),ee(b),ne(E,h),e.jsx(e.Fragment,{children:h&&e.jsxs(se,{freezeNavigation:!0,children:[e.jsx("div",{className:c["modal-backdrop"],"data-open":j}),e.jsxs("div",{ref:$,className:le(c["modal-container"],H),role:"dialog","aria-modal":"true","aria-labelledby":`${n}-modal-title`,"aria-describedby":i?`${n}-modal-desc`:G["aria-describedby"],"data-size":D,"data-open":j,children:[e.jsxs("div",{className:c["modal-header"],children:[e.jsxs("div",{className:c["modal-header-text"],children:[s&&e.jsx(ae,{name:s,size:re.xl,appearance:r}),e.jsx("h2",{id:`${n}-modal-title`,className:c["modal-title"],children:a}),e.jsx(oe,{"data-testid":"modal-close-button",name:"close",size:"l",className:c["close-icon"],variant:"neutral",onClick:b,"aria-label":`Close modal ${n}`})]}),e.jsx(te,{})]}),(i||B)&&e.jsxs("div",{className:c["modal-content"],children:[e.jsx("p",{className:c["modal-content-description"],id:`${n}-modal-desc`,children:i}),B]}),e.jsxs("div",{className:c["modal-footer"],children:[q,d]})]})]})})});l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},primaryButton:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},secondaryButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1}},composes:["coreModalProps","Omit"]};const Se={title:"Modal",component:l,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},k=J(),p={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(t,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[o,a]=u.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||o,onClose:()=>a(!1)})]})}},v={args:{...p.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(t,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[o,a]=u.useState({}),s=i=>{a(d=>({...d,[i]:!0}))},r=i=>{a(d=>({...d,[i]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(t,{variant:"primary",label:"Open modal xs",onClick:()=>s("modal-1")}),e.jsx(t,{variant:"primary",label:"Open modal s",onClick:()=>s("modal-2")}),e.jsx(t,{variant:"primary",label:"Open modal m",onClick:()=>s("modal-3")}),e.jsx(t,{variant:"primary",label:"Open modal l",onClick:()=>s("modal-4")}),e.jsx(t,{variant:"primary",label:"Open modal xl",onClick:()=>s("modal-5")})]}),e.jsx(l,{...n,id:"modal-1",size:"xs",isOpen:o["modal-1"],onClose:()=>r("modal-1")}),e.jsx(l,{...n,id:"modal-2",size:"s",isOpen:o["modal-2"],onClose:()=>r("modal-2")}),e.jsx(l,{...n,id:"modal-3",size:"m",isOpen:o["modal-3"],onClose:()=>r("modal-3")}),e.jsx(l,{...n,id:"modal-4",size:"l",isOpen:o["modal-4"],onClose:()=>r("modal-4")}),e.jsx(l,{...n,id:"modal-5",size:"xl",isOpen:o["modal-5"],onClose:()=>r("modal-5")})]})}},x={args:{...p.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(t,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0,children:e.jsx(U,{resizeable:!0})},render:n=>{const[o,a]=u.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||o,onClose:()=>a(!1)})]})}},C={args:{...p.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[o,a]=u.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||o,onClose:()=>a(!1),primaryButton:e.jsx(t,{variant:"danger",label:"Continue",onClick:k}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel",onClick:()=>a(!1)})})]})},play:async({canvasElement:n})=>{f(n).getByText("Open Modal").focus(),await m.tab(),await m.keyboard(V);const s=f(document.body).getByRole("dialog");y(s).toBeInTheDocument(),await m.tab();const r=f(s).getByRole("button",{name:/cancel/i});y(r).toHaveFocus(),await m.tab();const i=f(s).getByRole("button",{name:/continue/i});y(i).toHaveFocus(),await m.keyboard(L),y(k).toHaveBeenCalled(),await m.tab();const d=f(s).getByTestId("modal-close-button");y(d).toHaveFocus(),await m.keyboard(W),await Q(()=>y(s).not.toBeVisible())}};var w,S,R;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "modal-1",
    onClose: () => {},
    isOpen: false,
    title: "Connect to Wi-Fi",
    icon: "wifi",
    iconAppearance: "outlined",
    description: "Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",
    primaryButton: <Button variant="primary" label="Continue" />,
    secondaryButton: <Button variant="neutral" label="Cancel" />,
    size: "xs",
    closeOnOverlayClick: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={args.isOpen || isOpen} onClose={() => setIsOpen(false)} />
      </>;
  }
}`,...(R=(S=p.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var _,T,z;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "modal-1",
    onClose: () => {},
    isOpen: false,
    title: "Modal Title",
    icon: "settings",
    description: "La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",
    primaryButton: <Button variant="primary" label="Continue" />,
    secondaryButton: <Button variant="neutral" label="Cancel" />,
    size: "xs",
    closeOnOverlayClick: true
  },
  render: args => {
    const [openState, setOpenState] = useState<{
      [key: string]: boolean;
    }>({});
    const handleOpen = (id: string) => {
      setOpenState(prevState => ({
        ...prevState,
        [id]: true
      }));
    };
    const handleClose = (id: string) => {
      setOpenState(prevState => ({
        ...prevState,
        [id]: false
      }));
    };
    return <>
        <div style={{
        display: "flex",
        gap: "12px",
        marginBottom: "16px"
      }}>
          <Button variant="primary" label="Open modal xs" onClick={() => handleOpen("modal-1")} />
          <Button variant="primary" label="Open modal s" onClick={() => handleOpen("modal-2")} />
          <Button variant="primary" label="Open modal m" onClick={() => handleOpen("modal-3")} />
          <Button variant="primary" label="Open modal l" onClick={() => handleOpen("modal-4")} />
          <Button variant="primary" label="Open modal xl" onClick={() => handleOpen("modal-5")} />
        </div>
        <Modal {...args} id={"modal-1"} size="xs" isOpen={openState["modal-1"]} onClose={() => handleClose("modal-1")} />
        <Modal {...args} id={"modal-2"} size="s" isOpen={openState["modal-2"]} onClose={() => handleClose("modal-2")} />
        <Modal {...args} id={"modal-3"} size="m" isOpen={openState["modal-3"]} onClose={() => handleClose("modal-3")} />
        <Modal {...args} id={"modal-4"} size="l" isOpen={openState["modal-4"]} onClose={() => handleClose("modal-4")} />
        <Modal {...args} id={"modal-5"} size="xl" isOpen={openState["modal-5"]} onClose={() => handleClose("modal-5")} />
      </>;
  }
}`,...(z=(T=v.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var I,N,M;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "modal-2",
    onClose: () => {},
    isOpen: false,
    title: "Préciser le motif du refus",
    description: "En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",
    primaryButton: <Button variant="primary" label="Envoyer" />,
    secondaryButton: <Button variant="neutral" label="Annuler" />,
    size: "m",
    closeOnOverlayClick: true,
    children: <Textarea resizeable={true} />
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={args.isOpen || isOpen} onClose={() => setIsOpen(false)} />
      </>;
  }
}`,...(M=(N=x.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var F,P,A;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "modal-3",
    onClose: () => {},
    isOpen: false,
    title: "Delete 3 documents",
    description: "The selected documents will be deleted.",
    size: "s",
    icon: "delete",
    closeOnOverlayClick: true,
    primaryButton: <></>
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={args.isOpen || isOpen} onClose={() => setIsOpen(false)} primaryButton={<Button variant="danger" label="Continue" onClick={mockFn} />} secondaryButton={<Button variant="neutral" label="Cancel" onClick={() => setIsOpen(false)} />} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Open Modal");
    button.focus();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    const modal = within(document.body).getByRole("dialog");
    expect(modal).toBeInTheDocument();
    await userEvent.tab();
    const cancelButton = within(modal).getByRole("button", {
      name: /cancel/i
    });
    expect(cancelButton).toHaveFocus();
    await userEvent.tab();
    const continueButton = within(modal).getByRole("button", {
      name: /continue/i
    });
    expect(continueButton).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(mockFn).toHaveBeenCalled();
    await userEvent.tab();
    const closeButton = within(modal).getByTestId("modal-close-button");
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => expect(modal).not.toBeVisible());
  }
}`,...(A=(P=C.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const Re=["Default","Sizes","withCustomContent","KeyboardInteraction"];export{p as Default,C as KeyboardInteraction,v as Sizes,Re as __namedExportsOrder,Se as default,x as withCustomContent};
