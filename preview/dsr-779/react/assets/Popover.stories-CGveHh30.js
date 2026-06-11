import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as A,d as I}from"./keyboard-test.constants-By8W48aj.js";import{u as o,w as l,a as m,e}from"./index-4rjIhT2C.js";import{f as j}from"./testing.utils-mIZIUNbM.js";import{P as V}from"./Popover-CoB8lrLI.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./auto-placement-DumCkI03.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useKeydownEscape-CruXsBMf.js";import"./useFocusTrap-NapAtiEZ.js";import"./timepicker.constants-CzaknwQ-.js";import"./dom.constants-Bk0jVzGk.js";import"./useScrollEvent-M5oxEMsT.js";import"./Button-CXM9p_L3.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C3W4NyCk.js";import"./Icon-Bc7wfgCv.js";import"./index-DSdvzt-y.js";import"./Overlay-BqagB8ke.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const nt={title:"Composants/Popover",component:V,decorators:[u=>t.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(u,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},r={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})}},a={args:{position:"bottom",alignment:"start",arrow:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Confirmation"})}},i={args:{position:"top",alignment:"center",arrow:!0,content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:t.jsx("button",{children:"Show Info"})}},s={args:{position:"right",alignment:"start",arrow:!1,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:t.jsx("button",{children:"Open Without Arrow"})}},c={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})},play:async({canvasElement:u})=>{j(u),await o.tab(),await o.keyboard(A);const n=l(document.body).getByRole("dialog");await m(()=>e(n).toBeVisible()),await o.tab();const p=l(n).getByRole("button",{name:/close/i});e(p).toHaveFocus(),await o.tab();const S=l(n).getByRole("button",{name:/cancel/i});e(S).toHaveFocus(),await o.tab(),e(p).toHaveFocus(),await o.keyboard(I),await m(()=>e(n).not.toBeVisible())}};var d,b,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,w,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var f,g,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(B=(g=i.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var E,x,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var C,L,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  },
  play: async ({
    canvasElement
  }) => {
    focusElementBeforeComponent(canvasElement);
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
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const rt=["Default","WithTwoButtons","WithoutTitle","WithoutArrow","KeyboardInteraction"];export{r as Default,c as KeyboardInteraction,a as WithTwoButtons,s as WithoutArrow,i as WithoutTitle,rt as __namedExportsOrder,nt as default};
