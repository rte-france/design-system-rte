import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as $,T as L,d as W}from"./keyboard-test.constants-C9whQEGR.js";import{u as d,w as f,e as u,f as J,a as Q}from"./index-DCXJbAaW.js";import{r as p}from"./index-G8LIXM5I.js";import{f as U}from"./testing.utils-qrsqQ6ZN.js";import{B as o}from"./Button-Ciu9xNcR.js";import{I as X,R as Z,T as ee}from"./Icon-DjEid3Hw.js";import{T as ne}from"./Textarea-CZ0WbHzs.js";import{I as te}from"./icon.constants-uVuOfrjk.js";import{u as ae}from"./useAnimatedMount-_zPBpYOt.js";import{u as oe,a as se,b as le}from"./useKeydownEscape-B9tjvDNB.js";import{D as re}from"./Divider-GNmPbxh0.js";import{I as ie}from"./IconButton-tztXzQKL.js";import{O as ce}from"./Overlay-5j7SEEoz.js";import{c as de}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Cd3dEy6T.js";import"./Link-BDst2CUj.js";import"./dom.constants-pEgPeCLJ.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const i={"modal-backdrop":"_modal-backdrop_ik3ci_29","modal-container":"_modal-container_ik3ci_43","modal-header":"_modal-header_ik3ci_79","modal-header-text":"_modal-header-text_ik3ci_86","modal-title":"_modal-title_ik3ci_92","modal-content":"_modal-content_ik3ci_106","modal-content-description":"_modal-content-description_ik3ci_116","modal-footer":"_modal-footer_ik3ci_127"},l=p.forwardRef(({id:n,isOpen:t,title:a,icon:s,iconAppearance:r,description:c,primaryButton:y,secondaryButton:q,size:D="m",closeOnOverlayClick:K=!0,onClose:b,className:H,children:B,...G},O)=>{const{shouldRender:h,isAnimating:k}=ae(t,150),[E,Y]=p.useState(null),V=p.useCallback(g=>{Y(g),typeof O=="function"?O(g):O&&(O.current=g)},[O]);return oe(K?b:()=>{},E),se(b),le(E,h),e.jsx(e.Fragment,{children:h&&e.jsxs(ce,{freezeNavigation:!0,children:[e.jsx("div",{className:i["modal-backdrop"],"data-open":k}),e.jsxs("dialog",{ref:V,className:de(i["modal-container"],H),"aria-modal":"true","aria-labelledby":`${n}-modal-title`,"aria-describedby":c?`${n}-modal-desc`:G["aria-describedby"],"data-size":D,"data-open":k,children:[e.jsxs("div",{className:i["modal-header"],children:[e.jsxs("div",{className:i["modal-header-text"],children:[s&&e.jsx(X,{name:s,size:te.xl,appearance:r}),e.jsx("h2",{id:`${n}-modal-title`,className:i["modal-title"],children:a}),e.jsx(ie,{"data-testid":"modal-close-button",name:"close",size:"l",className:i["close-icon"],variant:"neutral",onClick:b,"aria-label":`Close modal ${n}`})]}),e.jsx(re,{})]}),(c||B)&&e.jsxs("div",{className:i["modal-content"],children:[e.jsx("p",{className:i["modal-content-description"],id:`${n}-modal-desc`,children:c}),B]}),e.jsxs("div",{className:i["modal-footer"],children:[q,y]})]})]})})});l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},primaryButton:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},secondaryButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1}},composes:["coreModalProps","Omit"]};const me=Object.keys(Z),pe=Object.keys(ee),Pe={title:"Composants/Modal",component:l,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"select",options:["",...me,...pe].sort((n,t)=>n.localeCompare(t)),description:"Nom de l’icône à afficher",defaultValue:""},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},j=J(),m={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=p.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1)})]})}},C={args:{...m.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=p.useState({}),s=c=>{a(y=>({...y,[c]:!0}))},r=c=>{a(y=>({...y,[c]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(o,{variant:"primary",label:"Open modal xs",onClick:()=>s("modal-1")}),e.jsx(o,{variant:"primary",label:"Open modal s",onClick:()=>s("modal-2")}),e.jsx(o,{variant:"primary",label:"Open modal m",onClick:()=>s("modal-3")}),e.jsx(o,{variant:"primary",label:"Open modal l",onClick:()=>s("modal-4")}),e.jsx(o,{variant:"primary",label:"Open modal xl",onClick:()=>s("modal-5")})]}),e.jsx(l,{...n,id:"modal-1",size:"xs",isOpen:t["modal-1"],onClose:()=>r("modal-1")}),e.jsx(l,{...n,id:"modal-2",size:"s",isOpen:t["modal-2"],onClose:()=>r("modal-2")}),e.jsx(l,{...n,id:"modal-3",size:"m",isOpen:t["modal-3"],onClose:()=>r("modal-3")}),e.jsx(l,{...n,id:"modal-4",size:"l",isOpen:t["modal-4"],onClose:()=>r("modal-4")}),e.jsx(l,{...n,id:"modal-5",size:"xl",isOpen:t["modal-5"],onClose:()=>r("modal-5")})]})}},v={args:{...m.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(o,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0,children:e.jsx(ne,{resizeable:!0})},render:n=>{const[t,a]=p.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1)})]})}},x={args:{...m.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[t,a]=p.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1),primaryButton:e.jsx(o,{variant:"danger",label:"Continue",onClick:j}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel",onClick:()=>a(!1)})})]})},play:async({canvasElement:n})=>{U(n),await d.tab(),await d.keyboard($);const t=f(document.body).getByRole("dialog");u(t).toBeInTheDocument(),await d.tab();const a=f(t).getByRole("button",{name:/cancel/i});u(a).toHaveFocus(),await d.tab();const s=f(t).getByRole("button",{name:/continue/i});u(s).toHaveFocus(),await d.keyboard(L),u(j).toHaveBeenCalled(),await d.tab();const r=f(t).getByTestId("modal-close-button");u(r).toHaveFocus(),await d.keyboard(W),await Q(()=>u(t).not.toBeVisible())}};var w,R,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(R=m.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var _,I,T;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(I=C.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var z,N,M;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(N=v.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var F,P,A;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    focusElementBeforeComponent(canvasElement);
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
}`,...(A=(P=x.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const Ae=["Default","Sizes","withCustomContent","KeyboardInteraction"];export{m as Default,x as KeyboardInteraction,C as Sizes,Ae as __namedExportsOrder,Pe as default,v as withCustomContent};
