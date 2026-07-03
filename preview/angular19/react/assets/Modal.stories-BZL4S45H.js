import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as V,T as W,d as $}from"./keyboard-test.constants-DRUxacrk.js";import{u as d,w as O,e as u,a as J,f as Q}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{f as U}from"./testing.utils-mIZIUNbM.js";import{B as o}from"./Button-b4mHgHU2.js";import{R as X,T as Z}from"./Icon-DgLH6pPJ.js";import{P as ee}from"./Popover-RJNE6Szj.js";import{S as ne}from"./Select-Cup6Nv1F.js";import{T as te}from"./Textarea-vChyXeN9.js";import{u as oe,B as ae,a as se,b as le}from"./useFreezeNavigation-CZZB-FXP.js";import{u as re}from"./useAnimatedMount-_zPBpYOt.js";import{u as ie}from"./useFocusTrap-C_kwluQD.js";import{u as ce}from"./useKeydownEscape-mLuzHv9M.js";import{O as pe}from"./Overlay-BdeF33Ax.js";import{c as de}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-krITzoP9.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./useClickAway-DZ7FPJk_.js";import"./useScrollEvent-BvD0VCKE.js";import"./timepicker.constants-V9Xrpx_a.js";import"./icon.constants-CvX5SV3k.js";import"./Label-BZwpSmrJ.js";import"./Link-DLPtM2IA.js";import"./Chip-CrJwgfyd.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./DropdownItem-BYl0toI8.js";import"./BaseDropdown-CgvF33v4.js";import"./dom.constants-Bk0jVzGk.js";import"./Divider-BMotkXeQ.js";import"./Checkbox-C8hWUkyN.js";import"./IconButton-HZdrGdmr.js";import"./keyboard.constants-D1KJQ2-m.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const B={"modal-container":"_modal-container_9kq8s_1","modal-content":"_modal-content_9kq8s_42","modal-content-description":"_modal-content-description_9kq8s_52"},i=c.forwardRef(({id:n,isOpen:t,title:a,icon:s,iconAppearance:l,description:r,primaryButton:p,secondaryButton:A,size:q="m",closeOnOverlayClick:L=!0,onClose:f,className:D,children:g,...H},y)=>{const{shouldRender:E,isAnimating:S}=re(t,150),[K,G]=c.useState(null),Y=c.useCallback(x=>{G(x),typeof y=="function"?y(x):y&&(y.current=x)},[y]);return ce(f),ie(K,E),oe(t),e.jsx(e.Fragment,{children:E&&e.jsxs(pe,{children:[e.jsx(ae,{isAnimating:S,onClick:L?f:void 0}),e.jsxs("dialog",{ref:Y,className:de(B["modal-container"],D),"aria-modal":"true","aria-labelledby":`${n}-modal-title`,"aria-describedby":r?`${n}-modal-desc`:H["aria-describedby"],"data-size":q,"data-open":S,children:[e.jsx(se,{id:n,title:a,icon:s,iconAppearance:l,onClose:f}),(r||g)&&e.jsxs("div",{className:B["modal-content"],children:[r&&e.jsx("p",{className:B["modal-content-description"],id:`${n}-modal-desc`,children:r}),g]}),e.jsx(le,{primaryButton:p,secondaryButton:A})]})]})})});i.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},primaryButton:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},secondaryButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1}},composes:["coreModalProps","Omit"]};const me=Object.keys(X),ue=Object.keys(Z),Ze={title:"Composants/Modal",component:i,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"select",options:["",...me,...ue].sort((n,t)=>n.localeCompare(t)),description:"Nom de l’icône à afficher",defaultValue:""},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},k=Q(),m={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=c.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(i,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1)})]})}},v={args:{...m.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=c.useState({}),s=r=>{a(p=>({...p,[r]:!0}))},l=r=>{a(p=>({...p,[r]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(o,{variant:"primary",label:"Open modal xs",onClick:()=>s("modal-1")}),e.jsx(o,{variant:"primary",label:"Open modal s",onClick:()=>s("modal-2")}),e.jsx(o,{variant:"primary",label:"Open modal m",onClick:()=>s("modal-3")}),e.jsx(o,{variant:"primary",label:"Open modal l",onClick:()=>s("modal-4")}),e.jsx(o,{variant:"primary",label:"Open modal xl",onClick:()=>s("modal-5")})]}),e.jsx(i,{...n,id:"modal-1",size:"xs",isOpen:t["modal-1"],onClose:()=>l("modal-1")}),e.jsx(i,{...n,id:"modal-2",size:"s",isOpen:t["modal-2"],onClose:()=>l("modal-2")}),e.jsx(i,{...n,id:"modal-3",size:"m",isOpen:t["modal-3"],onClose:()=>l("modal-3")}),e.jsx(i,{...n,id:"modal-4",size:"l",isOpen:t["modal-4"],onClose:()=>l("modal-4")}),e.jsx(i,{...n,id:"modal-5",size:"xl",isOpen:t["modal-5"],onClose:()=>l("modal-5")})]})}},b={args:{...m.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(o,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0},render:n=>{const[t,a]=c.useState(n.isOpen),[s,l]=c.useState(),r=[{value:"label-1",label:"Label 1"},{value:"label-2",label:"Label 2"},{value:"label-3",label:"Label 3"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsxs(i,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1),children:[e.jsx(te,{resizeable:!0}),e.jsx(ne,{id:"select-1",label:"Select an option",options:r,value:s,onChange:p=>l(p)}),e.jsx(ee,{content:"Contenu du popover",title:"Titre du popover",primaryButtonLabel:"Accepter",children:e.jsx(o,{variant:"primary",label:"Custom Action"})})]})]})}},C={args:{...m.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[t,a]=c.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(i,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1),primaryButton:e.jsx(o,{variant:"danger",label:"Continue",onClick:k}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel",onClick:()=>a(!1)})})]})},play:async({canvasElement:n})=>{U(n),await d.tab(),await d.keyboard(V);const t=O(document.body).getByRole("dialog");u(t).toBeInTheDocument(),await d.tab();const a=O(t).getByRole("button",{name:/cancel/i});u(a).toHaveFocus(),await d.tab();const s=O(t).getByRole("button",{name:/continue/i});u(s).toHaveFocus(),await d.keyboard(W),u(k).toHaveBeenCalled(),await d.tab();const l=O(t).getByTestId("modal-close-button");u(l).toHaveFocus(),await d.keyboard($),await J(()=>u(t).not.toBeVisible())}};var h,j,R;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(j=m.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var w,T,I;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(T=v.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var z,M,_;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    closeOnOverlayClick: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [selectedOption, setSelectedOption] = useState<string>();
    const selectOptions = [{
      value: "label-1",
      label: "Label 1"
    }, {
      value: "label-2",
      label: "Label 2"
    }, {
      value: "label-3",
      label: "Label 3"
    }];
    return <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={args.isOpen || isOpen} onClose={() => setIsOpen(false)}>
          <Textarea resizeable={true} />
          <Select id="select-1" label="Select an option" options={selectOptions} value={selectedOption} onChange={option => setSelectedOption(option)} />
          <Popover content="Contenu du popover" title="Titre du popover" primaryButtonLabel={"Accepter"}>
            <Button variant="primary" label="Custom Action" />
          </Popover>
        </Modal>
      </>;
  }
}`,...(_=(M=b.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var F,N,P;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(N=C.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const en=["Default","Sizes","WithCustomContent","KeyboardInteraction"];export{m as Default,C as KeyboardInteraction,v as Sizes,b as WithCustomContent,en as __namedExportsOrder,Ze as default};
