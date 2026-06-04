import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as W,T as $,d as L}from"./keyboard-test.constants-DRUxacrk.js";import{u as d,w as O,e as p,a as J,f as Q}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{f as U}from"./testing.utils-mIZIUNbM.js";import{B as o}from"./Button-CXM9p_L3.js";import{R as X,T as Z}from"./Icon-Bc7wfgCv.js";import{T as ee}from"./Textarea-BTtURz6y.js";import{B as ne,a as te,b as ae}from"./BaseHeader-DJ5Zt1Nv.js";import{u as oe}from"./useAnimatedMount-_zPBpYOt.js";import{u as se}from"./useClickAway-DZ7FPJk_.js";import{u as re}from"./useFocusTrap-B-H8eInJ.js";import{u as le}from"./useKeydownEscape-mLuzHv9M.js";import{O as ie}from"./Overlay-BpCpHr8J.js";import{c as ce}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C3W4NyCk.js";import"./RequiredIndicator-Cmvl3eZq.js";import"./Link-CAnB1cKs.js";import"./timepicker.constants-CoOLuyq6.js";import"./Divider-BMotkXeQ.js";import"./IconButton-DcIeVO_H.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const de=n=>{i.useEffect(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[n])},B={"modal-container":"_modal-container_1qje1_1","modal-content":"_modal-content_1qje1_41","modal-content-description":"_modal-content-description_1qje1_51"},s=i.forwardRef(({id:n,isOpen:t,title:a,icon:r,iconAppearance:l,description:c,primaryButton:u,secondaryButton:A,size:D="m",closeOnOverlayClick:H=!0,onClose:x,className:K,children:g,...G},y)=>{const{shouldRender:E,isAnimating:j}=oe(t,150),[h,Y]=i.useState(null),V=i.useCallback(b=>{Y(b),typeof y=="function"?y(b):y&&(y.current=b)},[y]);return se(H?x:()=>{},h),le(x),re(h,E),de(t),e.jsx(e.Fragment,{children:E&&e.jsxs(ie,{children:[e.jsx(ne,{isAnimating:j}),e.jsxs("dialog",{ref:V,className:ce(B["modal-container"],K),"aria-modal":"true","aria-labelledby":`${n}-modal-title`,"aria-describedby":c?`${n}-modal-desc`:G["aria-describedby"],"data-size":D,"data-open":j,children:[e.jsx(te,{id:n,title:a,icon:r,iconAppearance:l,onClose:x}),(c||g)&&e.jsxs("div",{className:B["modal-content"],children:[e.jsx("p",{className:B["modal-content-description"],id:`${n}-modal-desc`,children:c}),g]}),e.jsx(ae,{primaryButton:u,secondaryButton:A})]})]})})});s.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},primaryButton:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},secondaryButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1}},composes:["coreModalProps","Omit"]};const me=Object.keys(X),pe=Object.keys(Z),Ke={title:"Composants/Modal",component:s,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"select",options:["",...me,...pe].sort((n,t)=>n.localeCompare(t)),description:"Nom de l’icône à afficher",defaultValue:""},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},k=Q(),m={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=i.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1)})]})}},f={args:{...m.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=i.useState({}),r=c=>{a(u=>({...u,[c]:!0}))},l=c=>{a(u=>({...u,[c]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(o,{variant:"primary",label:"Open modal xs",onClick:()=>r("modal-1")}),e.jsx(o,{variant:"primary",label:"Open modal s",onClick:()=>r("modal-2")}),e.jsx(o,{variant:"primary",label:"Open modal m",onClick:()=>r("modal-3")}),e.jsx(o,{variant:"primary",label:"Open modal l",onClick:()=>r("modal-4")}),e.jsx(o,{variant:"primary",label:"Open modal xl",onClick:()=>r("modal-5")})]}),e.jsx(s,{...n,id:"modal-1",size:"xs",isOpen:t["modal-1"],onClose:()=>l("modal-1")}),e.jsx(s,{...n,id:"modal-2",size:"s",isOpen:t["modal-2"],onClose:()=>l("modal-2")}),e.jsx(s,{...n,id:"modal-3",size:"m",isOpen:t["modal-3"],onClose:()=>l("modal-3")}),e.jsx(s,{...n,id:"modal-4",size:"l",isOpen:t["modal-4"],onClose:()=>l("modal-4")}),e.jsx(s,{...n,id:"modal-5",size:"xl",isOpen:t["modal-5"],onClose:()=>l("modal-5")})]})}},C={args:{...m.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(o,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0,children:e.jsx(ee,{resizeable:!0})},render:n=>{const[t,a]=i.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1)})]})}},v={args:{...m.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[t,a]=i.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1),primaryButton:e.jsx(o,{variant:"danger",label:"Continue",onClick:k}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel",onClick:()=>a(!1)})})]})},play:async({canvasElement:n})=>{U(n),await d.tab(),await d.keyboard(W);const t=O(document.body).getByRole("dialog");p(t).toBeInTheDocument(),await d.tab();const a=O(t).getByRole("button",{name:/cancel/i});p(a).toHaveFocus(),await d.tab();const r=O(t).getByRole("button",{name:/continue/i});p(r).toHaveFocus(),await d.keyboard($),p(k).toHaveBeenCalled(),await d.tab();const l=O(t).getByTestId("modal-close-button");p(l).toHaveFocus(),await d.keyboard(L),await J(()=>p(t).not.toBeVisible())}};var w,R,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(R=m.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var T,I,z;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(z=(I=f.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var _,M,F;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(M=C.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var N,P,q;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(P=v.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const Ge=["Default","Sizes","WithCustomContent","KeyboardInteraction"];export{m as Default,v as KeyboardInteraction,f as Sizes,C as WithCustomContent,Ge as __namedExportsOrder,Ke as default};
