import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as te,T as ae,d as oe}from"./keyboard-test.constants-By8W48aj.js";import{u as d,w as y,e as m,a as se,f as le}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{f as re}from"./testing.utils-DmLcTX3r.js";import{B as a}from"./Button-N0cqT3uQ.js";import{R as ie,T as ce}from"./Icon-DBkoQNiA.js";import{P as pe}from"./Popover-fOKGJRp-.js";import{S as de}from"./Select-Xl4zi_hw.js";import{S as E}from"./SplitButton-oVrOluru.js";import{T as ue}from"./Textarea-BQyu3oNk.js";import{u as me,B as Oe,a as ye,b as Ce}from"./useFreezeNavigation-mcghzjHq.js";import{u as ve}from"./useAnimatedMount-_zPBpYOt.js";import{u as be}from"./useFocusTrap-BZu4_Auv.js";import{u as fe}from"./useKeydownEscape-mLuzHv9M.js";import{O as Be}from"./Overlay-BbrPNczc.js";import{c as ge}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DUkuUEsZ.js";import"./timepicker.constants-CynrC_9x.js";import"./log-handlers-BGrW2Sgz.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useClickAway-DZ7FPJk_.js";import"./useScrollEvent-BvD0VCKE.js";import"./icon.constants-CvX5SV3k.js";import"./Label-swDXsD6p.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./Chip-C4H0vBVV.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Dropdown-CyecDUeK.js";import"./dom.constants-Bk0jVzGk.js";import"./Divider-BVZUrQ0d.js";import"./DropdownItem-Bpn9aS_d.js";import"./Checkbox-CMrM2eNu.js";import"./IconButton-CwXUjHKp.js";import"./IconButton.module-DsipBz7u.js";import"./keyboard.constants-D1KJQ2-m.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const S={"modal-container":"_modal-container_9kq8s_1","modal-content":"_modal-content_9kq8s_42","modal-content-description":"_modal-content-description_9kq8s_52"},s=i.forwardRef(({id:n,isOpen:o,title:t,icon:l,iconAppearance:c,description:r,primaryButton:p,secondaryButton:$,size:J="m",closeOnOverlayClick:Q=!0,onClose:g,className:U,children:k,...X},O)=>{const{shouldRender:h,isAnimating:j}=ve(o,150),[Z,ee]=i.useState(null),ne=i.useCallback(x=>{ee(x),typeof O=="function"?O(x):O&&(O.current=x)},[O]);return fe(g),be(Z,h),me(o),e.jsx(e.Fragment,{children:h&&e.jsxs(Be,{hasBackdrop:!0,children:[e.jsx(Oe,{isAnimating:j,onClick:Q?g:void 0}),e.jsxs("dialog",{ref:ne,className:ge(S["modal-container"],U),"aria-modal":"true","aria-labelledby":`${n}-modal-title`,"aria-describedby":r?`${n}-modal-desc`:X["aria-describedby"],"data-size":J,"data-open":j,children:[e.jsx(ye,{id:n,title:t,icon:l,iconAppearance:c,onClose:g}),(r||k)&&e.jsxs("div",{className:S["modal-content"],children:[r&&e.jsx("p",{className:S["modal-content-description"],id:`${n}-modal-desc`,children:r}),k]}),e.jsx(Ce,{primaryButton:p,secondaryButton:$})]})]})})});s.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},primaryButton:{required:!0,tsType:{name:"union",raw:"DSButtonElement | DSSplitButtonElement",elements:[{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof SplitButton>, typeof SplitButton>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof SplitButton>",elements:[{name:"SplitButton"}]},{name:"SplitButton"}]}]},description:""},secondaryButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1}},composes:["coreModalProps","Omit"]};const xe=Object.keys(ie),Se=Object.keys(ce),yn={title:"Composants/Modal",component:s,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"select",options:["",...xe,...Se].sort((n,o)=>n.localeCompare(o)),description:"Nom de l’icône à afficher",defaultValue:""},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},R=le(),u={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(a,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[o,t]=i.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",label:"Open Modal",onClick:()=>t(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||o,onClose:()=>t(!1)})]})}},C={args:{...u.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(a,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[o,t]=i.useState({}),l=r=>{t(p=>({...p,[r]:!0}))},c=r=>{t(p=>({...p,[r]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(a,{variant:"primary",label:"Open modal xs",onClick:()=>l("modal-1")}),e.jsx(a,{variant:"primary",label:"Open modal s",onClick:()=>l("modal-2")}),e.jsx(a,{variant:"primary",label:"Open modal m",onClick:()=>l("modal-3")}),e.jsx(a,{variant:"primary",label:"Open modal l",onClick:()=>l("modal-4")}),e.jsx(a,{variant:"primary",label:"Open modal xl",onClick:()=>l("modal-5")})]}),e.jsx(s,{...n,id:"modal-1",size:"xs",isOpen:o["modal-1"],onClose:()=>c("modal-1")}),e.jsx(s,{...n,id:"modal-2",size:"s",isOpen:o["modal-2"],onClose:()=>c("modal-2")}),e.jsx(s,{...n,id:"modal-3",size:"m",isOpen:o["modal-3"],onClose:()=>c("modal-3")}),e.jsx(s,{...n,id:"modal-4",size:"l",isOpen:o["modal-4"],onClose:()=>c("modal-4")}),e.jsx(s,{...n,id:"modal-5",size:"xl",isOpen:o["modal-5"],onClose:()=>c("modal-5")})]})}},v={args:{...u.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(a,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0},render:n=>{const[o,t]=i.useState(n.isOpen),[l,c]=i.useState(),r=[{value:"label-1",label:"Label 1"},{value:"label-2",label:"Label 2"},{value:"label-3",label:"Label 3"}];return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",label:"Open Modal",onClick:()=>t(!0)}),e.jsxs(s,{...n,isOpen:n.isOpen||o,onClose:()=>t(!1),children:[e.jsx(ue,{resizeable:!0}),e.jsx(de,{id:"select-1",label:"Select an option",options:r,value:l,onChange:p=>c(p)}),e.jsx(pe,{content:"Contenu du popover",title:"Titre du popover",primaryButtonLabel:"Accepter",children:e.jsx(a,{variant:"primary",label:"Custom Action"})})]})]})}},w=[{id:"save-draft",label:"Save as draft",onClick:()=>console.log("Save as draft")},{id:"save-template",label:"Save as template",onClick:()=>console.log("Save as template")}],b={args:{id:"modal-danger",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",iconAppearance:"filled",closeOnOverlayClick:!0,primaryButton:e.jsx(a,{variant:"danger",label:"Delete",onClick:()=>{}}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel",onClick:()=>{}})},render:n=>{const[o,t]=i.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",label:"Open Modal",onClick:()=>t(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||o,onClose:()=>t(!1),primaryButton:e.jsx(a,{variant:"danger",label:"Delete",onClick:()=>{console.log("Delete confirmed"),t(!1)}}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel",onClick:()=>t(!1)})})]})}},f={args:{id:"modal-split",onClose:()=>{},isOpen:!1,title:"Save document",description:"Choose how to save your changes.",size:"m",closeOnOverlayClick:!0,primaryButton:e.jsx(E,{label:"Save",ariaLabelRight:"More save options",options:w,onClick:()=>{}}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel",onClick:()=>{}})},render:n=>{const[o,t]=i.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",label:"Open Modal",onClick:()=>t(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||o,onClose:()=>t(!1),primaryButton:e.jsx(E,{label:"Save",ariaLabelRight:"More save options",options:w,onClick:()=>{console.log("Save"),t(!1)}}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel",onClick:()=>t(!1)})})]})}},B={tags:["!autodocs"],args:{...u.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[o,t]=i.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"primary",label:"Open Modal",onClick:()=>t(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||o,onClose:()=>t(!1),primaryButton:e.jsx(a,{variant:"danger",label:"Continue",onClick:R}),secondaryButton:e.jsx(a,{variant:"neutral",label:"Cancel",onClick:()=>t(!1)})})]})},play:async()=>{re(),await d.tab(),await d.keyboard(te);const n=y(document.body).getByRole("dialog");m(n).toBeInTheDocument(),await d.tab();const o=y(n).getByRole("button",{name:/cancel/i});m(o).toHaveFocus(),await d.tab();const t=y(n).getByRole("button",{name:/continue/i});m(t).toHaveFocus(),await d.keyboard(ae),m(R).toHaveBeenCalled(),await d.tab();const l=y(n).getByTestId("modal-close-button");m(l).toHaveFocus(),await d.keyboard(oe),await se(()=>m(n).not.toBeVisible())}};var I,T,M;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(T=u.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var z,P,_;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(P=C.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var F,N,D;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(N=v.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var A,q,L;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(q=b.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var H,K,G;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(K=f.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Y,V,W;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(W=(V=B.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const Cn=["Default","Sizes","WithCustomContent","PrimaryDanger","PrimarySplitButton","KeyboardInteraction"];export{u as Default,B as KeyboardInteraction,b as PrimaryDanger,f as PrimarySplitButton,C as Sizes,v as WithCustomContent,Cn as __namedExportsOrder,yn as default};
