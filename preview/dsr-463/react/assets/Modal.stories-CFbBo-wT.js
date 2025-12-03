import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as $,T as L,d as W}from"./keyboard-test.constants-C9whQEGR.js";import{w as f,u as m,e as y,f as J,a as Q}from"./index-DCXJbAaW.js";import{r as u}from"./index-G8LIXM5I.js";import{B as a}from"./Button-cobwPeAi.js";import{I as U,R as X,T as Z}from"./Icon-DjEid3Hw.js";import{T as ee}from"./Textarea-DroOwIDp.js";import{I as ne}from"./icon.constants-uVuOfrjk.js";import{u as te}from"./useAnimatedMount-_zPBpYOt.js";import{u as ae,a as oe,b as se}from"./useKeydownEscape-B9tjvDNB.js";import{D as le}from"./Divider-BPBlxbj_.js";import{I as re}from"./IconButton-DU9lNzF3.js";import{O as ie}from"./Overlay-5j7SEEoz.js";import{c as ce}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";import"./Link-DbCKFFRz.js";import"./dom.constants-pEgPeCLJ.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const c={"modal-backdrop":"_modal-backdrop_1fswm_3","modal-container":"_modal-container_1fswm_17","modal-header":"_modal-header_1fswm_53","modal-header-text":"_modal-header-text_1fswm_60","modal-title":"_modal-title_1fswm_66","modal-content":"_modal-content_1fswm_80","modal-content-description":"_modal-content-description_1fswm_90","modal-footer":"_modal-footer_1fswm_101"},l=u.forwardRef(({id:n,isOpen:t,title:o,icon:s,iconAppearance:r,description:i,primaryButton:d,secondaryButton:q,size:D="m",closeOnOverlayClick:K=!0,onClose:b,className:H,children:B,...G},O)=>{const{shouldRender:h,isAnimating:w}=te(t,150),[j,Y]=u.useState(null),V=u.useCallback(g=>{Y(g),typeof O=="function"?O(g):O&&(O.current=g)},[O]);return ae(K?b:()=>{},j),oe(b),se(j,h),e.jsx(e.Fragment,{children:h&&e.jsxs(ie,{freezeNavigation:!0,children:[e.jsx("div",{className:c["modal-backdrop"],"data-open":w}),e.jsxs("dialog",{ref:V,className:ce(c["modal-container"],H),"aria-modal":"true","aria-labelledby":`${n}-modal-title`,"aria-describedby":i?`${n}-modal-desc`:G["aria-describedby"],"data-size":D,"data-open":w,children:[e.jsxs("div",{className:c["modal-header"],children:[e.jsxs("div",{className:c["modal-header-text"],children:[s&&e.jsx(U,{name:s,size:ne.xl,appearance:r}),e.jsx("h2",{id:`${n}-modal-title`,className:c["modal-title"],children:o}),e.jsx(re,{"data-testid":"modal-close-button",name:"close",size:"l",className:c["close-icon"],variant:"neutral",onClick:b,"aria-label":`Close modal ${n}`})]}),e.jsx(le,{})]}),(i||B)&&e.jsxs("div",{className:c["modal-content"],children:[e.jsx("p",{className:c["modal-content-description"],id:`${n}-modal-desc`,children:i}),B]}),e.jsxs("div",{className:c["modal-footer"],children:[q,d]})]})]})})});l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},primaryButton:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},secondaryButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1}},composes:["coreModalProps","Omit"]};const de=Object.keys(X),me=Object.keys(Z),Me={title:"Composants/Modal",component:l,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"select",options:["",...de,...me].sort((n,t)=>n.localeCompare(t)),description:"Nom de l’icône à afficher",defaultValue:""},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},E=J(),p={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(a,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,o]=u.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",label:"Open Modal",onClick:()=>o(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>o(!1)})]})}},v={args:{...p.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(a,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,o]=u.useState({}),s=i=>{o(d=>({...d,[i]:!0}))},r=i=>{o(d=>({...d,[i]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(a,{variant:"primary",label:"Open modal xs",onClick:()=>s("modal-1")}),e.jsx(a,{variant:"primary",label:"Open modal s",onClick:()=>s("modal-2")}),e.jsx(a,{variant:"primary",label:"Open modal m",onClick:()=>s("modal-3")}),e.jsx(a,{variant:"primary",label:"Open modal l",onClick:()=>s("modal-4")}),e.jsx(a,{variant:"primary",label:"Open modal xl",onClick:()=>s("modal-5")})]}),e.jsx(l,{...n,id:"modal-1",size:"xs",isOpen:t["modal-1"],onClose:()=>r("modal-1")}),e.jsx(l,{...n,id:"modal-2",size:"s",isOpen:t["modal-2"],onClose:()=>r("modal-2")}),e.jsx(l,{...n,id:"modal-3",size:"m",isOpen:t["modal-3"],onClose:()=>r("modal-3")}),e.jsx(l,{...n,id:"modal-4",size:"l",isOpen:t["modal-4"],onClose:()=>r("modal-4")}),e.jsx(l,{...n,id:"modal-5",size:"xl",isOpen:t["modal-5"],onClose:()=>r("modal-5")})]})}},C={args:{...p.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(a,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0,children:e.jsx(ee,{resizeable:!0})},render:n=>{const[t,o]=u.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",label:"Open Modal",onClick:()=>o(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>o(!1)})]})}},x={args:{...p.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[t,o]=u.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",label:"Open Modal",onClick:()=>o(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>o(!1),primaryButton:e.jsx(a,{variant:"danger",label:"Continue",onClick:E}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel",onClick:()=>o(!1)})})]})},play:async({canvasElement:n})=>{f(n).getByText("Open Modal").focus(),await m.tab(),await m.keyboard($);const s=f(document.body).getByRole("dialog");y(s).toBeInTheDocument(),await m.tab();const r=f(s).getByRole("button",{name:/cancel/i});y(r).toHaveFocus(),await m.tab();const i=f(s).getByRole("button",{name:/continue/i});y(i).toHaveFocus(),await m.keyboard(L),y(E).toHaveBeenCalled(),await m.tab();const d=f(s).getByTestId("modal-close-button");y(d).toHaveFocus(),await m.keyboard(W),await Q(()=>y(s).not.toBeVisible())}};var k,R,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(R=p.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var _,T,I;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(I=(T=v.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var z,N,M;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(N=C.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var F,P,A;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(P=x.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const Fe=["Default","Sizes","withCustomContent","KeyboardInteraction"];export{p as Default,x as KeyboardInteraction,v as Sizes,Fe as __namedExportsOrder,Me as default,C as withCustomContent};
