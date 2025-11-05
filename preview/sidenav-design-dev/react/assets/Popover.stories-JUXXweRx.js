import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as S,d as A}from"./keyboard-test.constants-fmK-LbIX.js";import{u as e,w as u,a as p,e as n}from"./index-DCXJbAaW.js";import{P as I}from"./Popover-BD7Hqnsk.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./Overlay-xE_sH5Kz.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./useAnimatedMount-_zPBpYOt.js";import"./dom.constants-pEgPeCLJ.js";import"./Button-B-hhLjRd.js";import"./index-DSdvzt-y.js";const z={title:"Popover",component:I,decorators:[o=>t.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(o,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},r={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})}},a={args:{position:"bottom",alignment:"start",arrow:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Confirmation"})}},i={args:{position:"top",alignment:"center",arrow:!0,content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:t.jsx("button",{children:"Show Info"})}},s={args:{position:"right",alignment:"start",arrow:!1,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:t.jsx("button",{children:"Open Without Arrow"})}},c={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})},play:async()=>{await e.tab(),await e.keyboard(S);const o=u(document.body).getByRole("dialog");await p(()=>n(o).toBeVisible()),await e.tab();const l=u(o).getByRole("button",{name:/close/i});n(l).toHaveFocus(),await e.tab();const P=u(o).getByRole("button",{name:/cancel/i});n(P).toHaveFocus(),await e.tab(),n(l).toHaveFocus(),await e.keyboard(A),await p(()=>n(o).not.toBeVisible())}};var d,m,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,y,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,g,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var B,x,T;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var E,C,L;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const popover = within(document.body).getByRole("dialog");
    // expect(popover).toBeVisible();
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
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const J=["Default","WithTwoButtons","WithoutTitle","WithoutArrow","KeyboardInteraction"];export{r as Default,c as KeyboardInteraction,a as WithTwoButtons,s as WithoutArrow,i as WithoutTitle,J as __namedExportsOrder,z as default};
