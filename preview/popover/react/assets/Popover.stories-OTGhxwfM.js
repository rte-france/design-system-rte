import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as we,b as Ce}from"./keyboard-test.constants-3xDPVb3g.js";import{u as f,w as T,a as q,e as y}from"./index-DaW6VCyr.js";import{g as Ee,b as Be,a as Te,O as xe}from"./Overlay-BSes1ir3.js";import{E as _e}from"./keyboard.constants-KvjFtZ2v.js";import{r as n}from"./index-G8LIXM5I.js";import{u as Pe}from"./useAnimatedMount-_zPBpYOt.js";import{F as Le}from"./dom.constants-pEgPeCLJ.js";import{B as I}from"./Button-B-hhLjRd.js";import{c as O}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./index-DoK7PxrN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const k=8,V=20,Ae=(e,...t)=>{n.useEffect(()=>{function o(p){if(t.length===0||t.some(i=>!i))return;t.some(i=>i.contains(p.target))||e()}return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[e,t])},Se=e=>{n.useEffect(()=>{const t=o=>{o.key==="Escape"&&(o.preventDefault(),e())};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e])},Re=(e,t)=>{n.useEffect(()=>{if(!t||!e)return;const o=e.querySelectorAll(Le);o.length>0&&o[0].focus();const p=s=>{if(s.key==="Tab"){const i=o[0],b=o[o.length-1];s.shiftKey&&document.activeElement===i?(s.preventDefault(),b.focus()):!s.shiftKey&&document.activeElement===b&&(s.preventDefault(),i.focus())}};return e.addEventListener("keydown",p),()=>e.removeEventListener("keydown",p)},[e,t])},Ne=e=>{n.useEffect(()=>(window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}),[e])},je="_popoverTrigger_5qrfs_3",qe="_popover_5qrfs_3",Ie="_popoverInner_5qrfs_26",Oe="_popoverContentContainer_5qrfs_34",ke="_popoverTitle_5qrfs_41",Ve="_popoverContent_5qrfs_34",Fe="_popoverButtonContainer_5qrfs_65",l={popoverTrigger:je,popover:qe,popoverInner:Ie,popoverContentContainer:Oe,popoverTitle:ke,popoverContent:Ve,popoverButtonContainer:Fe},ee=n.forwardRef(({children:e,position:t="auto",alignment:o,content:p,arrow:s=!0,title:i,primaryButtonLabel:b,secondaryButtonLabel:x,className:te="",triggerStyles:oe,closeOnClickOutside:_=!0,closeOnEscape:P=!0,onClickPrimaryButton:L,onClickSecondaryButton:A,...ne},v)=>{const d=n.useRef(null),[c,re]=n.useState(null),[ae,se]=n.useState(t),[ie,ce]=n.useState(o),[S,ue]=n.useState({top:0,left:0}),[u,m]=n.useState(!1),{shouldRender:R,isAnimating:le}=Pe(u,150),[pe,N]=n.useState(!1),h=n.useCallback(()=>{if(!d.current||!c)return;const a=t==="auto"?Ee(d.current,c,"top",s?V:k):t,j=o||Be(d.current,c,a),ge=Te(a,d.current,c,s?V:k,j);ce(j),ue(ge),se(a)},[t,s,c,o]),de=n.useCallback(()=>{_&&m(!1)},[_]),me=n.useCallback(()=>{P&&m(!1)},[P]);Re(c,R),Ae(de,d.current,c),Se(me),Ne(h);const fe=n.useCallback(a=>{re(a),typeof v=="function"?v(a):v&&(v.current=a),a&&u&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{h()})})},[v,u,h]);n.useEffect(()=>{u&&c?(h(),N(!0)):N(!1)},[u,c,h]);const ve=a=>{a.key===_e&&(a.preventDefault(),u||m(!0))},he=a=>{u||(a.preventDefault(),m(!0))},ye=()=>{A&&A(),m(!1)},be=()=>{L&&L(),m(!1)};return r.jsxs("div",{ref:d,className:O(l.popoverTrigger),onClick:he,onKeyDown:ve,style:oe,children:[e,R&&r.jsx(xe,{children:r.jsx("div",{ref:fe,className:O(l.popover,te),role:"dialog","aria-modal":"true","data-arrow":s,"data-position":ae,"data-alignment":ie,"data-open":pe&&le||void 0,style:{top:`${S.top}px`,left:`${S.left}px`},...ne,children:r.jsxs("div",{className:l.popoverInner,children:[r.jsxs("div",{className:l.popoverContentContainer,children:[i&&r.jsx("div",{className:l.popoverTitle,children:i}),r.jsx("div",{className:l.popoverContent,children:p})]}),r.jsxs("div",{className:l.popoverButtonContainer,children:[x&&r.jsx(I,{className:"popoverButton",onClick:ye,label:x,variant:"secondary"}),r.jsx(I,{className:"popoverButton",onClick:be,label:b,variant:"primary"})]})]})})})]})});ee.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{content:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},position:{defaultValue:{value:'"auto"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},closeOnClickOutside:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CorePopoverProps","Omit"]};const et={title:"Popover",component:ee,decorators:[e=>r.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx(e,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},g={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:r.jsx("button",{children:"Open Popover"})}},w={args:{position:"bottom",alignment:"start",arrow:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:r.jsx("button",{children:"Open Confirmation"})}},C={args:{position:"top",alignment:"center",arrow:!0,content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:r.jsx("button",{children:"Show Info"})}},E={args:{position:"right",alignment:"start",arrow:!1,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:r.jsx("button",{children:"Open Without Arrow"})}},B={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:r.jsx("button",{children:"Open Popover"})},play:async()=>{await f.tab(),await f.keyboard(we);const e=T(document.body).getByRole("dialog");await q(()=>y(e).toBeVisible()),await f.tab();const t=T(e).getByRole("button",{name:/close/i});y(t).toHaveFocus(),await f.tab();const o=T(e).getByRole("button",{name:/cancel/i});y(o).toHaveFocus(),await f.tab(),y(t).toHaveFocus(),await f.keyboard(Ce),await q(()=>y(e).not.toBeVisible())}};var F,K,D;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(D=(K=g.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};var W,G,H;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(G=w.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Y,M,U;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(U=(M=C.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var $,Q,z;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(z=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:z.source}}};var J,X,Z;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const tt=["Default","WithTwoButtons","WithoutTitle","WithoutArrow","KeyboardInteraction"];export{g as Default,B as KeyboardInteraction,w as WithTwoButtons,E as WithoutArrow,C as WithoutTitle,tt as __namedExportsOrder,et as default};
