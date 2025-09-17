import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{T as he,b as ye}from"./keyboard-test.constants-CyL2oW3R.js";import{u as v,w as x,a as N,e as y}from"./index-DaW6VCyr.js";import{u as be,g as ge,b as we,a as Ce,O as Ee}from"./Overlay-WMwOYmxe.js";import{E as Be}from"./keyboard.constants-DiPdQLXq.js";import{r}from"./index-G8LIXM5I.js";import{F as xe}from"./dom.constants-pEgPeCLJ.js";import{B as j}from"./Button-B-hhLjRd.js";import{c as I}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./index-DoK7PxrN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const O=8,k=20,Te=(e,...t)=>{r.useEffect(()=>{function o(p){if(t.length===0||t.some(i=>!i))return;t.some(i=>i.contains(p.target))||e()}return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[e,t])},_e=e=>{r.useEffect(()=>{const t=o=>{o.key==="Escape"&&(o.preventDefault(),e())};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e])},Pe=(e,t)=>{r.useEffect(()=>{if(!t||!e)return;const o=e.querySelectorAll(xe);o.length>0&&o[0].focus();const p=s=>{if(s.key==="Tab"){const i=o[0],b=o[o.length-1];s.shiftKey&&document.activeElement===i?(s.preventDefault(),b.focus()):!s.shiftKey&&document.activeElement===b&&(s.preventDefault(),i.focus())}};return e.addEventListener("keydown",p),()=>e.removeEventListener("keydown",p)},[e,t])},Le=e=>{r.useEffect(()=>(window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}),[e])},Ae="_popoverTrigger_824yr_3",Se="_popover_824yr_3",Re="_popoverInner_824yr_27",Ne="_popoverContentContainer_824yr_35",je="_popoverTitle_824yr_42",Ie="_popoverContent_824yr_35",Oe="_popoverButtonContainer_824yr_66",l={popoverTrigger:Ae,popover:Se,popoverInner:Re,popoverContentContainer:Ne,popoverTitle:je,popoverContent:Ie,popoverButtonContainer:Oe},X=r.forwardRef(({children:e,position:t="auto",alignment:o,content:p,arrow:s=!0,title:i,primaryButtonLabel:b,secondaryButtonLabel:T,className:Z="",triggerStyles:ee,onClickPrimaryButton:_,onClickSecondaryButton:P,...te},f)=>{const d=r.useRef(null),[c,oe]=r.useState(null),[ne,re]=r.useState(t),[ae,se]=r.useState(o),[L,ie]=r.useState({top:0,left:0}),[u,m]=r.useState(!1),{shouldRender:A,isAnimating:ce}=be(u,150),[ue,S]=r.useState(!1),h=r.useCallback(()=>{if(!d.current||!c)return;const a=t==="auto"?ge(d.current,c,"top",s?k:O):t,R=o||we(d.current,c,a),fe=Ce(a,d.current,c,s?k:O,R);se(R),ie(fe),re(a)},[t,s,c,o]);Pe(c,A),Te(()=>m(!1),d.current,c),_e(()=>m(!1)),Le(h);const le=r.useCallback(a=>{oe(a),typeof f=="function"?f(a):f&&(f.current=a),a&&u&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{h()})})},[f,u,h]);r.useEffect(()=>{u&&c?(h(),S(!0)):S(!1)},[u,c,h]);const pe=a=>{a.key===Be&&(a.preventDefault(),u||m(!0))},de=a=>{u||(a.preventDefault(),m(!0))},me=()=>{P&&P(),m(!1)},ve=()=>{_&&_(),m(!1)};return n.jsxs("div",{ref:d,className:I(l.popoverTrigger),onClick:de,onKeyDown:pe,style:ee,children:[e,A&&n.jsx(Ee,{children:n.jsx("div",{ref:le,className:I(l.popover,Z),role:"dialog","aria-modal":"true","data-arrow":s,"data-position":ne,"data-alignment":ae,"data-open":ue&&ce||void 0,style:{top:`${L.top}px`,left:`${L.left}px`},...te,children:n.jsxs("div",{className:l.popoverInner,children:[n.jsxs("div",{className:l.popoverContentContainer,children:[i&&n.jsx("div",{className:l.popoverTitle,children:i}),n.jsx("div",{className:l.popoverContent,children:p})]}),n.jsxs("div",{className:l.popoverButtonContainer,children:[T&&n.jsx(j,{className:"popoverButton",onClick:me,label:T,variant:"secondary",size:"m"}),n.jsx(j,{className:"popoverButton",onClick:ve,label:b,variant:"primary",size:"m"})]})]})})})]})});X.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},position:{defaultValue:{value:'"auto"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CorePopoverProps","Omit"]};const $e={title:"Popover",component:X,decorators:[e=>n.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx(e,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},g={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:n.jsx("button",{children:"Open Popover"})}},w={args:{position:"bottom",alignment:"start",arrow:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:n.jsx("button",{children:"Open Confirmation"})}},C={args:{position:"top",alignment:"center",arrow:!0,content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:n.jsx("button",{children:"Show Info"})}},E={args:{position:"right",alignment:"start",arrow:!1,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:n.jsx("button",{children:"Open Without Arrow"})}},B={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:n.jsx("button",{children:"Open Popover"})},play:async()=>{await v.tab(),await v.keyboard(he);const e=x(document.body).getByRole("dialog");await N(()=>y(e).toBeVisible()),await v.tab();const t=x(e).getByRole("button",{name:/close/i});y(t).toHaveFocus(),await v.tab();const o=x(e).getByRole("button",{name:/cancel/i});y(o).toHaveFocus(),await v.tab(),y(t).toHaveFocus(),await v.keyboard(ye),await N(()=>y(e).not.toBeVisible())}};var V,F,K;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(K=(F=g.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var q,D,W;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(D=w.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var G,H,Y;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(Y=(H=C.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var z,M,U;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(U=(M=E.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var $,Q,J;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};const Qe=["Default","WithTwoButtons","WithoutTitle","WithoutArrow","KeyboardInteraction"];export{g as Default,B as KeyboardInteraction,w as WithTwoButtons,E as WithoutArrow,C as WithoutTitle,Qe as __namedExportsOrder,$e as default};
