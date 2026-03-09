import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as W,T as $,d as L}from"./keyboard-test.constants-By8W48aj.js";import{u as c,w as O,e as m,a as J,f as Q}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as U}from"./testing.utils-mIZIUNbM.js";import{B as o}from"./Button-Cd2C55g4.js";import{R as X,T as Z}from"./Icon-DjEid3Hw.js";import{T as ee}from"./Textarea-B8LWvVc-.js";import{a as ne,B as te}from"./BaseHeader-q0GG6nAd.js";import{u as ae}from"./useAnimatedMount-_zPBpYOt.js";import{u as oe,a as se,b as re}from"./useKeydownEscape-CE1Mjiyw.js";import{O as le}from"./Overlay-BI5SO8Nq.js";import{c as ie}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CQk6fGHb.js";import"./RequiredIndicator-DqQYxNvw.js";import"./Link-Cg70Z2zF.js";import"./Divider-BMotkXeQ.js";import"./IconButton-CQQHz8gd.js";import"./dom.constants-41SiyeDe.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const f={"modal-backdrop":"_modal-backdrop_hu0a3_1","modal-container":"_modal-container_hu0a3_15","modal-content":"_modal-content_hu0a3_54","modal-content-description":"_modal-content-description_hu0a3_64"},s=p.forwardRef(({id:n,isOpen:t,title:a,icon:r,iconAppearance:l,description:i,primaryButton:u,secondaryButton:q,size:D="m",closeOnOverlayClick:H=!0,onClose:x,className:K,children:g,...G},y)=>{const{shouldRender:E,isAnimating:h}=ae(t,150),[k,Y]=p.useState(null),V=p.useCallback(B=>{Y(B),typeof y=="function"?y(B):y&&(y.current=B)},[y]);return oe(H?x:()=>{},k),se(x),re(k,E),e.jsx(e.Fragment,{children:E&&e.jsxs(le,{freezeNavigation:!0,children:[e.jsx("div",{className:f["modal-backdrop"],"data-open":h}),e.jsxs("dialog",{ref:V,className:ie(f["modal-container"],K),"aria-modal":"true","aria-labelledby":`${n}-modal-title`,"aria-describedby":i?`${n}-modal-desc`:G["aria-describedby"],"data-size":D,"data-open":h,children:[e.jsx(ne,{id:n,title:a,icon:r,iconAppearance:l,onClose:x}),(i||g)&&e.jsxs("div",{className:f["modal-content"],children:[e.jsx("p",{className:f["modal-content-description"],id:`${n}-modal-desc`,children:i}),g]}),e.jsx(te,{primaryButton:u,secondaryButton:q})]})]})})});s.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},primaryButton:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},secondaryButton:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<React.ComponentProps<typeof Button>, typeof Button>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Button>",elements:[{name:"Button"}]},{name:"Button"}]},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1}},composes:["coreModalProps","Omit"]};const ce=Object.keys(X),de=Object.keys(Z),Fe={title:"Composants/Modal",component:s,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"select",options:["",...ce,...de].sort((n,t)=>n.localeCompare(t)),description:"Nom de l’icône à afficher",defaultValue:""},iconAppearance:{control:"select",options:["outlined","filled"]},description:{control:"text"},size:{control:"select",options:["xs","s","m","l","xl"]},closeOnOverlayClick:{control:"boolean"}}},j=Q(),d={args:{id:"modal-1",onClose:()=>{},isOpen:!1,title:"Connect to Wi-Fi",icon:"wifi",iconAppearance:"outlined",description:"Please connect to wifi to synchronise your projects or go to Settings to change your preferences.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=p.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1)})]})}},C={args:{...d.args,id:"modal-1",onClose:()=>{},isOpen:!1,title:"Modal Title",icon:"settings",description:"La Modal (ou fenêtre modale) est un composant de superposition (overlay) qui interrompt le flux principal pour afficher un contenu ou solliciter une action de l’utilisateur. Elle nécessite une interaction explicite pour être fermée. Elle se superpose au contenu existant avec un fond atténué (overlay) et capte le focus tant qu’elle est ouverte.",primaryButton:e.jsx(o,{variant:"primary",label:"Continue"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel"}),size:"xs",closeOnOverlayClick:!0},render:n=>{const[t,a]=p.useState({}),r=i=>{a(u=>({...u,[i]:!0}))},l=i=>{a(u=>({...u,[i]:!1}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(o,{variant:"primary",label:"Open modal xs",onClick:()=>r("modal-1")}),e.jsx(o,{variant:"primary",label:"Open modal s",onClick:()=>r("modal-2")}),e.jsx(o,{variant:"primary",label:"Open modal m",onClick:()=>r("modal-3")}),e.jsx(o,{variant:"primary",label:"Open modal l",onClick:()=>r("modal-4")}),e.jsx(o,{variant:"primary",label:"Open modal xl",onClick:()=>r("modal-5")})]}),e.jsx(s,{...n,id:"modal-1",size:"xs",isOpen:t["modal-1"],onClose:()=>l("modal-1")}),e.jsx(s,{...n,id:"modal-2",size:"s",isOpen:t["modal-2"],onClose:()=>l("modal-2")}),e.jsx(s,{...n,id:"modal-3",size:"m",isOpen:t["modal-3"],onClose:()=>l("modal-3")}),e.jsx(s,{...n,id:"modal-4",size:"l",isOpen:t["modal-4"],onClose:()=>l("modal-4")}),e.jsx(s,{...n,id:"modal-5",size:"xl",isOpen:t["modal-5"],onClose:()=>l("modal-5")})]})}},v={args:{...d.args,id:"modal-2",onClose:()=>{},isOpen:!1,title:"Préciser le motif du refus",description:"En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande.",primaryButton:e.jsx(o,{variant:"primary",label:"Envoyer"}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Annuler"}),size:"m",closeOnOverlayClick:!0,children:e.jsx(ee,{resizeable:!0})},render:n=>{const[t,a]=p.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1)})]})}},b={args:{...d.args,id:"modal-3",onClose:()=>{},isOpen:!1,title:"Delete 3 documents",description:"The selected documents will be deleted.",size:"s",icon:"delete",closeOnOverlayClick:!0,primaryButton:e.jsx(e.Fragment,{})},render:n=>{const[t,a]=p.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",label:"Open Modal",onClick:()=>a(!0)}),e.jsx(s,{...n,isOpen:n.isOpen||t,onClose:()=>a(!1),primaryButton:e.jsx(o,{variant:"danger",label:"Continue",onClick:j}),secondaryButton:e.jsx(o,{variant:"neutral",label:"Cancel",onClick:()=>a(!1)})})]})},play:async({canvasElement:n})=>{U(n),await c.tab(),await c.keyboard(W);const t=O(document.body).getByRole("dialog");m(t).toBeInTheDocument(),await c.tab();const a=O(t).getByRole("button",{name:/cancel/i});m(a).toHaveFocus(),await c.tab();const r=O(t).getByRole("button",{name:/continue/i});m(r).toHaveFocus(),await c.keyboard($),m(j).toHaveBeenCalled(),await c.tab();const l=O(t).getByTestId("modal-close-button");m(l).toHaveFocus(),await c.keyboard(L),await J(()=>m(t).not.toBeVisible())}};var R,w,S;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,I,z;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(z=(I=C.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var _,M,N;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(M=v.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var F,P,A;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const Pe=["Default","Sizes","WithCustomContent","KeyboardInteraction"];export{d as Default,b as KeyboardInteraction,C as Sizes,v as WithCustomContent,Pe as __namedExportsOrder,Fe as default};
