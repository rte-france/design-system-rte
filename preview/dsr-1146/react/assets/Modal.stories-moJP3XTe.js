import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as H,a as K,b as G}from"./keyboard-test.constants-BLfu6vvq.js";import{u as i,w as O,e as d,a as Y,f as q}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{f as W}from"./testing.utils-DmLcTX3r.js";import{B as t}from"./Button-DsgDr11R.js";import{R as V,T as J}from"./Icon-DBkoQNiA.js";import{P as Q}from"./Popover-BwlMfwL2.js";import{S as U}from"./Select-D_1EJO-E.js";import{S as f}from"./SplitButton-B6YSDvlb.js";import{T as X}from"./Textarea-B3s1zGM7.js";import{M as l}from"./Modal-B3TX5VKi.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-DMoGODOQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-DUkuUEsZ.js";import"./index-DJ8f9STe.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-Hz0GUguM.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useClickAway-DZ7FPJk_.js";import"./useFocusTrap-BZu4_Auv.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./icon.constants-CvX5SV3k.js";import"./Label-_Lstalw-.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./Chip-hEdad7aW.js";import"./useActiveKeyboard-DIdxdZMU.js";import"./Dropdown-C-WY_1Zk.js";import"./Divider-BVZUrQ0d.js";import"./DropdownItem-B2ba_zf0.js";import"./Checkbox-BPXtBEeO.js";import"./IconButton-B1jvMDIw.js";import"./IconButton.module-CR53g8c2.js";import"./useFreezeNavigation-CBCpVxGh.js";const Z=Object.keys(V),$=Object.keys(J),qe={title:"Composants/Modal",component:l,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"select",options:["",...Z,...$].sort((n,a)=>n.localeCompare(a)),description:"Nom de l’icône à afficher",defaultValue:""},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},B=q(),p={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(t,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[a,o]=c.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>o(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||a,onClose:()=>o(!1)})]})}},v={args:{...p.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(t,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[a,o]=c.useState({}),s=u=>{o(m=>({...m,[u]:!0}))},r=u=>{o(m=>({...m,[u]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(t,{variant:"primary",label:"Open modal xs",onClick:()=>s("modal-1")}),e.jsx(t,{variant:"primary",label:"Open modal s",onClick:()=>s("modal-2")}),e.jsx(t,{variant:"primary",label:"Open modal m",onClick:()=>s("modal-3")}),e.jsx(t,{variant:"primary",label:"Open modal l",onClick:()=>s("modal-4")}),e.jsx(t,{variant:"primary",label:"Open modal xl",onClick:()=>s("modal-5")})]}),e.jsx(l,{...n,id:"modal-1",size:"xs",isOpen:a["modal-1"],onClose:()=>r("modal-1")}),e.jsx(l,{...n,id:"modal-2",size:"s",isOpen:a["modal-2"],onClose:()=>r("modal-2")}),e.jsx(l,{...n,id:"modal-3",size:"m",isOpen:a["modal-3"],onClose:()=>r("modal-3")}),e.jsx(l,{...n,id:"modal-4",size:"l",isOpen:a["modal-4"],onClose:()=>r("modal-4")}),e.jsx(l,{...n,id:"modal-5",size:"xl",isOpen:a["modal-5"],onClose:()=>r("modal-5")})]})}},C={args:{...p.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(t,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0},render:n=>{const[a,o]=c.useState(n.isOpen),[s,r]=c.useState(),u=[{value:"label-1",label:"Label 1"},{value:"label-2",label:"Label 2"},{value:"label-3",label:"Label 3"}];return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>o(!0)}),e.jsxs(l,{...n,isOpen:n.isOpen||a,onClose:()=>o(!1),children:[e.jsx(X,{resizeable:!0}),e.jsx(U,{id:"select-1",label:"Select an option",options:u,value:s,onChange:m=>r(m)}),e.jsx(Q,{content:"Contenu du popover",title:"Titre du popover",primaryButtonLabel:"Accepter",children:e.jsx(t,{variant:"primary",label:"Custom Action"})})]})]})}},x=[{id:"save-draft",label:"Save as draft",onClick:()=>console.log("Save as draft")},{id:"save-template",label:"Save as template",onClick:()=>console.log("Save as template")}],y={args:{id:"modal-danger",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",iconAppearance:"filled",closeOnOverlayClick:!0,primaryButton:e.jsx(t,{variant:"danger",label:"Delete",onClick:()=>{}}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel",onClick:()=>{}})},render:n=>{const[a,o]=c.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>o(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||a,onClose:()=>o(!1),primaryButton:e.jsx(t,{variant:"danger",label:"Delete",onClick:()=>{console.log("Delete confirmed"),o(!1)}}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel",onClick:()=>o(!1)})})]})}},b={args:{id:"modal-split",onClose:()=>{},isOpen:!1,title:"Save document",description:"Choose how to save your changes.",size:"m",closeOnOverlayClick:!0,primaryButton:e.jsx(f,{label:"Save",ariaLabelRight:"More save options",options:x,onClick:()=>{}}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel",onClick:()=>{}})},render:n=>{const[a,o]=c.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>o(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||a,onClose:()=>o(!1),primaryButton:e.jsx(f,{label:"Save",ariaLabelRight:"More save options",options:x,onClick:()=>{console.log("Save"),o(!1)}}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel",onClick:()=>o(!1)})})]})}},g={tags:["!autodocs"],args:{...p.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[a,o]=c.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",label:"Open Modal",onClick:()=>o(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||a,onClose:()=>o(!1),primaryButton:e.jsx(t,{variant:"danger",label:"Continue",onClick:B}),secondaryButton:e.jsx(t,{variant:"neutral",label:"Cancel",onClick:()=>o(!1)})})]})},play:async()=>{W(),await i.tab(),await i.keyboard(H);const n=O(document.body).getByRole("dialog");d(n).toBeInTheDocument(),await i.tab();const a=O(n).getByRole("button",{name:/cancel/i});d(a).toHaveFocus(),await i.tab();const o=O(n).getByRole("button",{name:/continue/i});d(o).toHaveFocus(),await i.keyboard(K),d(B).toHaveBeenCalled(),await i.tab();const s=O(n).getByTestId("modal-close-button");d(s).toHaveFocus(),await i.keyboard(G),await Y(()=>d(n).not.toBeVisible())}};var S,k,h;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(h=(k=p.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var j,E,I;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(E=v.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var M,w,T;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(w=C.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,F,D;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "modal-danger",
    onClose: () => {},
    isOpen: false,
    title: "Delete 3 documents",
    description: "The selected documents will be deleted.",
    size: "s",
    icon: "delete",
    iconAppearance: "filled",
    closeOnOverlayClick: true,
    primaryButton: <Button variant="danger" label="Delete" onClick={() => {}} />,
    secondaryButton: <Button variant="neutral" label="Cancel" onClick={() => {}} />
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={args.isOpen || isOpen} onClose={() => setIsOpen(false)} primaryButton={<Button variant="danger" label="Delete" onClick={() => {
        console.log("Delete confirmed");
        setIsOpen(false);
      }} />} secondaryButton={<Button variant="neutral" label="Cancel" onClick={() => setIsOpen(false)} />} />
      </>;
  }
}`,...(D=(F=y.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var P,R,A;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "modal-split",
    onClose: () => {},
    isOpen: false,
    title: "Save document",
    description: "Choose how to save your changes.",
    size: "m",
    closeOnOverlayClick: true,
    primaryButton: <SplitButton label="Save" ariaLabelRight="More save options" options={splitMenuOptions} onClick={() => {}} />,
    secondaryButton: <Button variant="neutral" label="Cancel" onClick={() => {}} />
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={args.isOpen || isOpen} onClose={() => setIsOpen(false)} primaryButton={<SplitButton label="Save" ariaLabelRight="More save options" options={splitMenuOptions} onClick={() => {
        console.log("Save");
        setIsOpen(false);
      }} />} secondaryButton={<Button variant="neutral" label="Cancel" onClick={() => setIsOpen(false)} />} />
      </>;
  }
}`,...(A=(R=b.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var L,_,N;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(_=g.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const We=["Default","Sizes","WithCustomContent","PrimaryDanger","PrimarySplitButton","KeyboardInteraction"];export{p as Default,g as KeyboardInteraction,y as PrimaryDanger,b as PrimarySplitButton,v as Sizes,C as WithCustomContent,We as __namedExportsOrder,qe as default};
