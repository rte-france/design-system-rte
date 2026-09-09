import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as H,d as K}from"./keyboard-test.constants-By8W48aj.js";import{u as n,w as h,a as g,e as r}from"./index-4rjIhT2C.js";import{r as M}from"./index-G8LIXM5I.js";import{f as Y}from"./testing.utils-r13wRTL2.js";import{P as e}from"./Popover-ePhnJGxX.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./timepicker.constants-CynrC_9x.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useClickAway-DZ7FPJk_.js";import"./useFocusTrap-D2ZnoMa2.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./useScrollEvent-BvD0VCKE.js";import"./Button-KJfdYR4G.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const vt={title:"Composants/Popover",component:e,tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}},parameters:{layout:"centered"}},s={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Informations complémentaires.",primaryButtonLabel:"Fermer",children:t.jsx("button",{children:"Afficher les informations"})}},c={args:{position:"bottom",alignment:"start",arrow:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Confirmation"})}},l={render:o=>t.jsxs("div",{style:{display:"flex",gap:"16px"},children:[t.jsx(e,{...o,position:"top",children:t.jsx("button",{children:"Top"})}),t.jsx(e,{...o,position:"bottom",children:t.jsx("button",{children:"Bottom"})}),t.jsx(e,{...o,position:"right",children:t.jsx("button",{children:"Right"})}),t.jsx(e,{...o,position:"left",children:t.jsx("button",{children:"Left"})})]}),args:{arrow:!0,alignment:"center",title:"Popover position",content:"This popover demonstrates a position.",primaryButtonLabel:"Close",children:t.jsx("button",{children:"Position"})}},p={render:o=>t.jsxs("div",{style:{display:"flex",gap:"16px"},children:[t.jsx(e,{...o,alignment:"start",children:t.jsx("button",{children:"Start"})}),t.jsx(e,{...o,alignment:"center",children:t.jsx("button",{children:"Center"})}),t.jsx(e,{...o,alignment:"end",children:t.jsx("button",{children:"End"})})]}),args:{position:"bottom",arrow:!0,title:"Popover alignment",content:"This popover demonstrates an alignment.",primaryButtonLabel:"Close",children:t.jsx("button",{children:"Alignment"})}},u={render:o=>{const[a,i]=M.useState("Aucune action sélectionnée.");return t.jsxs("div",{children:[t.jsx(e,{...o,onClickPrimaryButton:()=>i("Action confirmée."),onClickSecondaryButton:()=>i("Action annulée.")}),t.jsx("p",{children:a})]})},args:{position:"bottom",alignment:"start",arrow:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Confirmation"})}},m={args:{position:"top",alignment:"center",arrow:!0,"aria-label":"Informations complémentaires",content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:t.jsx("button",{children:"Show Info"})}},d={args:{position:"right",alignment:"start",arrow:!1,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:t.jsx("button",{children:"Open Without Arrow"})}},b={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})},play:async()=>{Y(),await n.tab(),await n.keyboard(H);const o=h(document.body).getByRole("dialog");await g(()=>r(o).toBeVisible()),await n.tab();const a=h(o).getByRole("button",{name:/close/i});r(a).toHaveFocus(),await n.tab();const i=h(o).getByRole("button",{name:/cancel/i});r(i).toHaveFocus(),await n.tab(),r(a).toHaveFocus(),await n.keyboard(K),await g(()=>r(o).not.toBeVisible())}};var v,y,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Informations complémentaires.",
    primaryButtonLabel: "Fermer",
    children: <button>Afficher les informations</button>
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,x,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    position: "bottom",
    alignment: "start",
    arrow: true,
    title: "Confirm Action",
    content: "Are you sure you want to proceed with this action? This cannot be undone.",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Confirmation</button>
  }
}`,...(B=(x=c.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var P,C,T;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Popover {...args} position="top">
        <button>Top</button>
      </Popover>
      <Popover {...args} position="bottom">
        <button>Bottom</button>
      </Popover>
      <Popover {...args} position="right">
        <button>Right</button>
      </Popover>
      <Popover {...args} position="left">
        <button>Left</button>
      </Popover>
    </div>,
  args: {
    arrow: true,
    alignment: "center",
    title: "Popover position",
    content: "This popover demonstrates a position.",
    primaryButtonLabel: "Close",
    children: <button>Position</button>
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var j,A,E;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      <Popover {...args} alignment="start">
        <button>Start</button>
      </Popover>
      <Popover {...args} alignment="center">
        <button>Center</button>
      </Popover>
      <Popover {...args} alignment="end">
        <button>End</button>
      </Popover>
    </div>,
  args: {
    position: "bottom",
    arrow: true,
    title: "Popover alignment",
    content: "This popover demonstrates an alignment.",
    primaryButtonLabel: "Close",
    children: <button>Alignment</button>
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,S,I;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [message, setMessage] = useState("Aucune action sélectionnée.");
    return <div>
        <Popover {...args} onClickPrimaryButton={() => setMessage("Action confirmée.")} onClickSecondaryButton={() => setMessage("Action annulée.")} />
        <p>{message}</p>
      </div>;
  },
  args: {
    position: "bottom",
    alignment: "start",
    arrow: true,
    title: "Confirm Action",
    content: "Are you sure you want to proceed with this action? This cannot be undone.",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Confirmation</button>
  }
}`,...(I=(S=u.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var F,R,V;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    "aria-label": "Informations complémentaires",
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,N,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var W,k,G;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  },
  play: async () => {
    focusElementBeforeComponent();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const popover = within(document.body).getByRole("dialog");
    await waitFor(() => expect(popover).toBeVisible());
    await userEvent.tab();
    const closeButton = within(popover).getByRole("button", {
      name: /close/i
    });
    expect(closeButton).toHaveFocus();
    await userEvent.tab();
    const cancelButton = within(popover).getByRole("button", {
      name: /cancel/i
    });
    expect(cancelButton).toHaveFocus();
    await userEvent.tab();
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => expect(popover).not.toBeVisible());
  }
}`,...(G=(k=b.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};const yt=["Default","WithTwoButtons","Positions","Alignments","Actions","WithoutTitle","WithoutArrow","KeyboardInteraction"];export{u as Actions,p as Alignments,s as Default,b as KeyboardInteraction,l as Positions,c as WithTwoButtons,d as WithoutArrow,m as WithoutTitle,yt as __namedExportsOrder,vt as default};
