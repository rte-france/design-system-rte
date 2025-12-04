import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as we,d as Ce}from"./keyboard-test.constants-C9whQEGR.js";import{u,w as C,a as N,e as v}from"./index-DCXJbAaW.js";import{g as Be,b as xe,a as Ee}from"./auto-placement-C6RxYMtA.js";import{E as Te}from"./keyboard.constants-ep-ZHn_7.js";import{r as t}from"./index-G8LIXM5I.js";import{u as Pe}from"./useAnimatedMount-_zPBpYOt.js";import{b as _e,u as Ae,a as Re}from"./useKeydownEscape-B9tjvDNB.js";import{B as j}from"./Button-cobwPeAi.js";import{O as Se}from"./Overlay-5j7SEEoz.js";import{c as k}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-pEgPeCLJ.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";import"./Icon-DjEid3Hw.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const O=8,I=20,Le=n=>{t.useEffect(()=>(window.addEventListener("scroll",n,!0),()=>{window.removeEventListener("scroll",n,!0)}),[n])},Ne="_popoverTrigger_50c8k_3",je="_popover_50c8k_3",ke="_popoverInner_50c8k_26",Oe="_popoverContentContainer_50c8k_34",Ie="_popoverTitle_50c8k_41",Ve="_popoverContent_50c8k_34",qe="_popoverButtonContainer_50c8k_65",i={popoverTrigger:Ne,popover:je,popoverInner:ke,popoverContentContainer:Oe,popoverTitle:Ie,popoverContent:Ve,popoverButtonContainer:qe},X=t.forwardRef(({children:n,position:a="auto",alignment:p,content:Z,arrow:f=!0,title:B,primaryButtonLabel:ee,secondaryButtonLabel:x,className:te="",triggerStyles:oe,closeOnClickOutside:E=!0,closeOnEscape:T=!0,onClickPrimaryButton:P,onClickSecondaryButton:_,...ne},d)=>{const c=t.useRef(null),[r,re]=t.useState(null),[ae,se]=t.useState(a),[ie,ce]=t.useState(p),[A,le]=t.useState({top:0,left:0}),[s,l]=t.useState(!1),{shouldRender:R,isAnimating:ue}=Pe(s,150),[pe,S]=t.useState(!1),m=t.useCallback(()=>{if(!c.current||!r)return;const o=a==="auto"?Be(c.current,r,"top",f?I:O):a,L=p||xe(c.current,r,o),ge=Ee(o,c.current,r,f?I:O,L);ce(L),le(ge),se(o)},[a,f,r,p]),de=t.useCallback(()=>{E&&l(!1)},[E]),me=t.useCallback(()=>{T&&l(!1)},[T]);_e(r,R),Ae(de,c.current,r),Re(me),Le(m);const ve=t.useCallback(o=>{re(o),typeof d=="function"?d(o):d&&(d.current=o),o&&s&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{m()})})},[d,s,m]);t.useEffect(()=>{s&&r?(m(),S(!0)):S(!1)},[s,r,m]);const fe=o=>{o.key===Te&&(o.preventDefault(),s||l(!0))},he=o=>{s||(o.preventDefault(),l(!0))},be=()=>{_&&_(),l(!1)},ye=()=>{P&&P(),l(!1)};return e.jsxs("div",{ref:c,className:k(i.popoverTrigger),onClick:he,onKeyDown:fe,style:oe,children:[n,R&&e.jsx(Se,{children:e.jsx("div",{ref:ve,className:k(i.popover,te),role:"dialog","aria-modal":"true","data-arrow":f,"data-position":ae,"data-alignment":ie,"data-open":pe&&ue||void 0,style:{top:`${A.top}px`,left:`${A.left}px`},...ne,children:e.jsxs("div",{className:i.popoverInner,children:[e.jsxs("div",{className:i.popoverContentContainer,children:[B&&e.jsx("div",{className:i.popoverTitle,children:B}),e.jsx("div",{className:i.popoverContent,children:Z})]}),e.jsxs("div",{className:i.popoverButtonContainer,children:[x&&e.jsx(j,{className:"popoverButton",onClick:be,label:x,variant:"secondary"}),e.jsx(j,{className:"popoverButton",onClick:ye,label:ee,variant:"primary"})]})]})})})]})});X.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{content:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},position:{defaultValue:{value:'"auto"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},closeOnClickOutside:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CorePopoverProps","Omit"]};const rt={title:"Composants/Popover",component:X,decorators:[n=>e.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(n,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},h={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:e.jsx("button",{children:"Open Popover"})}},b={args:{position:"bottom",alignment:"start",arrow:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:e.jsx("button",{children:"Open Confirmation"})}},y={args:{position:"top",alignment:"center",arrow:!0,content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:e.jsx("button",{children:"Show Info"})}},g={args:{position:"right",alignment:"start",arrow:!1,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:e.jsx("button",{children:"Open Without Arrow"})}},w={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:e.jsx("button",{children:"Open Popover"})},play:async()=>{await u.tab(),await u.keyboard(we);const n=C(document.body).getByRole("dialog");await N(()=>v(n).toBeVisible()),await u.tab();const a=C(n).getByRole("button",{name:/close/i});v(a).toHaveFocus(),await u.tab();const p=C(n).getByRole("button",{name:/cancel/i});v(p).toHaveFocus(),await u.tab(),v(a).toHaveFocus(),await u.keyboard(Ce),await N(()=>v(n).not.toBeVisible())}};var V,q,F;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(F=(q=h.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var K,W,G;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(W=b.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var D,H,Y;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(Y=(H=y.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var $,M,z;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(z=(M=g.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var J,Q,U;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const at=["Default","WithTwoButtons","WithoutTitle","WithoutArrow","KeyboardInteraction"];export{h as Default,w as KeyboardInteraction,b as WithTwoButtons,g as WithoutArrow,y as WithoutTitle,at as __namedExportsOrder,rt as default};
