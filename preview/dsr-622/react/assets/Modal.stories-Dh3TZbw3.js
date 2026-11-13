import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as z,a as M,b as F}from"./keyboard-test.constants-CC9zMOdc.js";import{u as i,w as O,e as c,a as _,f as A}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{f as P}from"./testing.utils-DmLcTX3r.js";import{B as t}from"./Button-B3EnjUD7.js";import{R,T as L}from"./Icon-DBkoQNiA.js";import{P as D}from"./Popover-D_J11Lnq.js";import{S as N}from"./Select-0hpLZx6a.js";import{T as H}from"./Textarea-Chhx9BZS.js";import{M as s}from"./Modal-DNPJUPSo.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-Hz0GUguM.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useClickAway-DZ7FPJk_.js";import"./useFocusTrap-BZu4_Auv.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./icon.constants-CvX5SV3k.js";import"./Label-swDXsD6p.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./Chip-C4H0vBVV.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Dropdown-CyecDUeK.js";import"./Divider-BVZUrQ0d.js";import"./DropdownItem-DoVaQzxG.js";import"./Checkbox-BPXtBEeO.js";import"./IconButton-CJDki2nw.js";import"./IconButton.module-CR53g8c2.js";import"./useFreezeNavigation-Df2rzoup.js";const K=Object.keys(R),G=Object.keys(L),_e={title:"Composants/Modal",component:s,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"select",options:["",...K,...G].sort((n,o)=>n.localeCompare(o)),description:"Nom de l’icône à afficher",defaultValue:""},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},C=A(),p={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(t,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[o,a]=m.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||o,onClose:()=>a(!1)})]})}},v={args:{...p.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(t,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[o,a]=m.useState({}),l=d=>{a(u=>({...u,[d]:!0}))},r=d=>{a(u=>({...u,[d]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(t,{variant:"primary",label:"Open modal xs",onClick:()=>l("modal-1")}),e.jsx(t,{variant:"primary",label:"Open modal s",onClick:()=>l("modal-2")}),e.jsx(t,{variant:"primary",label:"Open modal m",onClick:()=>l("modal-3")}),e.jsx(t,{variant:"primary",label:"Open modal l",onClick:()=>l("modal-4")}),e.jsx(t,{variant:"primary",label:"Open modal xl",onClick:()=>l("modal-5")})]}),e.jsx(s,{...n,id:"modal-1",size:"xs",isOpen:o["modal-1"],onClose:()=>r("modal-1")}),e.jsx(s,{...n,id:"modal-2",size:"s",isOpen:o["modal-2"],onClose:()=>r("modal-2")}),e.jsx(s,{...n,id:"modal-3",size:"m",isOpen:o["modal-3"],onClose:()=>r("modal-3")}),e.jsx(s,{...n,id:"modal-4",size:"l",isOpen:o["modal-4"],onClose:()=>r("modal-4")}),e.jsx(s,{...n,id:"modal-5",size:"xl",isOpen:o["modal-5"],onClose:()=>r("modal-5")})]})}},b={args:{...p.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(t,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0},render:n=>{const[o,a]=m.useState(n.isOpen),[l,r]=m.useState(),d=[{value:"label-1",label:"Label 1"},{value:"label-2",label:"Label 2"},{value:"label-3",label:"Label 3"}];return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsxs(s,{...n,isOpen:n.isOpen||o,onClose:()=>a(!1),children:[e.jsx(H,{resizeable:!0}),e.jsx(N,{id:"select-1",label:"Select an option",options:d,value:l,onChange:u=>r(u)}),e.jsx(D,{content:"Contenu du popover",title:"Titre du popover",primaryButtonLabel:"Accepter",children:e.jsx(t,{variant:"primary",label:"Custom Action"})})]})]})}},y={tags:["!autodocs"],args:{...p.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[o,a]=m.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||o,onClose:()=>a(!1),primaryButton:e.jsx(t,{variant:"danger",label:"Continue",onClick:C}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel",onClick:()=>a(!1)})})]})},play:async()=>{P(),await i.tab(),await i.keyboard(z);const n=O(document.body).getByRole("dialog");c(n).toBeInTheDocument(),await i.tab();const o=O(n).getByRole("button",{name:/cancel/i});c(o).toHaveFocus(),await i.tab();const a=O(n).getByRole("button",{name:/continue/i});c(a).toHaveFocus(),await i.keyboard(M),c(C).toHaveBeenCalled(),await i.tab();const l=O(n).getByTestId("modal-close-button");c(l).toHaveFocus(),await i.keyboard(F),await _(()=>c(n).not.toBeVisible())}};var x,f,g;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(f=p.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var B,S,E;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(S=v.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var h,k,j;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(k=b.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var T,I,w;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
  play: async () => {
    focusElementBeforeComponent();
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
}`,...(w=(I=y.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const Ae=["Default","Sizes","WithCustomContent","KeyboardInteraction"];export{p as Default,y as KeyboardInteraction,v as Sizes,b as WithCustomContent,Ae as __namedExportsOrder,_e as default};
