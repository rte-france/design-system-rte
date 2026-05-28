import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as U,T as X,d as Z}from"./keyboard-test.constants-By8W48aj.js";import{u,w as v,e as m,a as ee,f as ne}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{f as te}from"./testing.utils-mIZIUNbM.js";import{B as o}from"./Button-CXM9p_L3.js";import{R as ae,T as oe}from"./Icon-Bc7wfgCv.js";import{S as se}from"./Select-e4CCupVf.js";import{T as re}from"./Textarea-BTtURz6y.js";import{B as le,a as ie,b as ce}from"./BaseHeader-jBI4EUO9.js";import{u as pe}from"./useAnimatedMount-_zPBpYOt.js";import{u as de}from"./useFocusTrap-DG09Z6i4.js";import{u as ue}from"./useKeydownEscape-mLuzHv9M.js";import{O as me}from"./Overlay-BI5SO8Nq.js";import{c as Oe}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C3W4NyCk.js";import"./RequiredIndicator-Cmvl3eZq.js";import"./Link-CAnB1cKs.js";import"./Chip-CtHjYzdt.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./DropdownItem-DwqexO3q.js";import"./BaseDropdown-Bc55FiNe.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-Bk0jVzGk.js";import"./Divider-BMotkXeQ.js";import"./Checkbox-D82IU-Su.js";import"./IconButton-DcIeVO_H.js";import"./timepicker.constants-Dc9ut5mB.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const S={"modal-container":"_modal-container_s0o5p_1","modal-content":"_modal-content_s0o5p_40","modal-content-description":"_modal-content-description_s0o5p_50"},l=c.forwardRef(({id:n,isOpen:t,title:a,icon:s,iconAppearance:r,description:i,primaryButton:p,secondaryButton:y,size:x="m",closeOnOverlayClick:W=!0,onClose:B,className:Y,children:E,...V},O)=>{const{shouldRender:k,isAnimating:j}=pe(t,150),[$,L]=c.useState(null),J=c.useCallback(h=>{L(h),typeof O=="function"?O(h):O&&(O.current=h)},[O]);ue(B),de($,k);const Q=()=>{W&&B()};return e.jsx(e.Fragment,{children:k&&e.jsxs(me,{freezeNavigation:!0,children:[e.jsx(le,{isAnimating:j,onClick:Q}),e.jsxs("dialog",{ref:J,className:Oe(S["modal-container"],Y),"aria-modal":"true","aria-labelledby":`${n}-modal-title`,"aria-describedby":i?`${n}-modal-desc`:V["aria-describedby"],"data-size":x,"data-open":j,children:[e.jsx(ie,{id:n,title:a,icon:s,iconAppearance:r,onClose:B}),(i||E)&&e.jsxs("div",{className:S["modal-content"],children:[e.jsx("p",{className:S["modal-content-description"],id:`${n}-modal-desc`,children:i}),E]}),e.jsx(ce,{primaryButton:p,secondaryButton:y})]})]})})});l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},primaryButton:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},secondaryButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1}},composes:["coreModalProps","Omit"]};const ye=Object.keys(ae),ve=Object.keys(oe),Ue={title:"Composants/Modal",component:l,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"select",options:["",...ye,...ve].sort((n,t)=>n.localeCompare(t)),description:"Nom de l’icône à afficher",defaultValue:""},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},R=ne(),d={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=c.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1)})]})}},f={args:{...d.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=c.useState({}),s=i=>{a(p=>({...p,[i]:!0}))},r=i=>{a(p=>({...p,[i]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(o,{variant:"primary",label:"Open modal xs",onClick:()=>s("modal-1")}),e.jsx(o,{variant:"primary",label:"Open modal s",onClick:()=>s("modal-2")}),e.jsx(o,{variant:"primary",label:"Open modal m",onClick:()=>s("modal-3")}),e.jsx(o,{variant:"primary",label:"Open modal l",onClick:()=>s("modal-4")}),e.jsx(o,{variant:"primary",label:"Open modal xl",onClick:()=>s("modal-5")})]}),e.jsx(l,{...n,id:"modal-1",size:"xs",isOpen:t["modal-1"],onClose:()=>r("modal-1")}),e.jsx(l,{...n,id:"modal-2",size:"s",isOpen:t["modal-2"],onClose:()=>r("modal-2")}),e.jsx(l,{...n,id:"modal-3",size:"m",isOpen:t["modal-3"],onClose:()=>r("modal-3")}),e.jsx(l,{...n,id:"modal-4",size:"l",isOpen:t["modal-4"],onClose:()=>r("modal-4")}),e.jsx(l,{...n,id:"modal-5",size:"xl",isOpen:t["modal-5"],onClose:()=>r("modal-5")})]})}},C={args:{...d.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(o,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0,children:e.jsx(re,{resizeable:!0})},render:n=>{const[t,a]=c.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1)})]})}},b={args:{...d.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(o,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0},render:n=>{const[t,a]=c.useState(n.isOpen),[s,r]=c.useState(),i=y=>{console.log("Selected value:",y),r(p.find(x=>x.value===y))},p=[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1),children:e.jsx(se,{id:"my-select",label:"Select an option",options:p,onChange:i,value:s==null?void 0:s.value,multiple:!1})})]})}},g={args:{...d.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[t,a]=c.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1),primaryButton:e.jsx(o,{variant:"danger",label:"Continue",onClick:R}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel",onClick:()=>a(!1)})})]})},play:async({canvasElement:n})=>{te(n),await u.tab(),await u.keyboard(U);const t=v(document.body).getByRole("dialog");m(t).toBeInTheDocument(),await u.tab();const a=v(t).getByRole("button",{name:/cancel/i});m(a).toHaveFocus(),await u.tab();const s=v(t).getByRole("button",{name:/continue/i});m(s).toHaveFocus(),await u.keyboard(X),m(R).toHaveBeenCalled(),await u.tab();const r=v(t).getByTestId("modal-close-button");m(r).toHaveFocus(),await u.keyboard(Z),await ee(()=>m(t).not.toBeVisible())}};var w,T,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var z,M,_;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(M=f.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var F,N,P;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(N=C.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var A,q,D;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    const [selectedOption, setSelectedOption] = useState<{
      label: string;
      value: string;
    }>();
    const handleOnChange = (value: string) => {
      console.log("Selected value:", value);
      setSelectedOption(options.find(option => option.value === value));
    };
    const options = [{
      value: "option-1",
      label: "Option 1"
    }, {
      value: "option-2",
      label: "Option 2"
    }, {
      value: "option-3",
      label: "Option 3"
    }];
    return <>
        <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal {...args} isOpen={args.isOpen || isOpen} onClose={() => setIsOpen(false)}>
          <Select id="my-select" label="Select an option" options={options} onChange={handleOnChange} value={selectedOption?.value} multiple={false} />
        </Modal>
      </>;
  }
}`,...(D=(q=b.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var H,K,G;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(K=g.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};const Xe=["Default","Sizes","WithCustomContent","WithOverlayComponent","KeyboardInteraction"];export{d as Default,g as KeyboardInteraction,f as Sizes,C as WithCustomContent,b as WithOverlayComponent,Xe as __namedExportsOrder,Ue as default};
