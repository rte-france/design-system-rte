import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as fe}from"./keyboard-test.constants-DOZt34mX.js";import{u as h,w as E,a as he,e as g}from"./index-DaW6VCyr.js";import{u as ye,g as ge,b as be,a as we,O as Ce}from"./Overlay-WMwOYmxe.js";import{c as Be}from"./keyboard.constants-DdplKbQc.js";import{r as a}from"./index-G8LIXM5I.js";import{F as xe}from"./dom.constants-pEgPeCLJ.js";import{B as N}from"./Button-B-hhLjRd.js";import{c as I}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./index-DoK7PxrN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const O=8,k=20,Ee=(e,...n)=>{a.useEffect(()=>{function r(l){if(n.length===0||n.some(i=>!i))return;n.some(i=>i.contains(l.target))||e()}return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[e,n])},Te=(e,n)=>{a.useEffect(()=>{if(!n||!e)return;const r=e.querySelectorAll(xe);r.length>0&&r[0].focus();const l=s=>{if(s.key==="Tab"){const i=r[0],y=r[r.length-1];s.shiftKey&&document.activeElement===i?(s.preventDefault(),y.focus()):!s.shiftKey&&document.activeElement===y&&(s.preventDefault(),i.focus())}};return e.addEventListener("keydown",l),()=>e.removeEventListener("keydown",l)},[e,n])},Pe=e=>{a.useEffect(()=>(window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}),[e])},_e="_popoverTrigger_824yr_3",Le="_popover_824yr_3",Ae="_popoverInner_824yr_27",Re="_popoverContentContainer_824yr_35",Se="_popoverTitle_824yr_42",je="_popoverContent_824yr_35",Ne="_popoverButtonContainer_824yr_66",u={popoverTrigger:_e,popover:Le,popoverInner:Ae,popoverContentContainer:Re,popoverTitle:Se,popoverContent:je,popoverButtonContainer:Ne},X=a.forwardRef(({children:e,position:n="auto",alignment:r,content:l,arrow:s=!0,title:i,primaryButtonLabel:y,secondaryButtonLabel:T,className:Z="",triggerStyles:ee,onClickPrimaryButton:P,onClickSecondaryButton:_,...te},m)=>{const p=a.useRef(null),[c,oe]=a.useState(null),[ne,re]=a.useState(n),[ae,se]=a.useState(r),[L,ie]=a.useState({top:0,left:0}),[d,v]=a.useState(!1),{shouldRender:A,isAnimating:ce}=ye(d,150),[ue,R]=a.useState(!1),f=a.useCallback(()=>{if(!p.current||!c)return;const o=n==="auto"?ge(p.current,c,"top",s?k:O):n,j=r||be(p.current,c,o),ve=we(o,p.current,c,s?k:O,j);se(j),ie(ve),re(o)},[n,s,c,r]);Te(c,A),Ee(()=>v(!1),p.current,c),Pe(f);const le=a.useCallback(o=>{oe(o),typeof m=="function"?m(o):m&&(m.current=o),o&&d&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{f()})})},[m,d,f]);a.useEffect(()=>{d&&c?(f(),R(!0)):R(!1)},[d,c,f]);const pe=o=>{o.key===Be&&v(!1)},S=o=>{!d&&(o.type==="click"&&o.button===0||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&v(!0)},de=()=>{_&&_(),v(!1)},me=()=>{P&&P(),v(!1)};return t.jsxs("div",{ref:p,className:I(u.popoverTrigger),onClick:S,onKeyUp:S,style:ee,children:[e,A&&t.jsx(Ce,{children:t.jsx("div",{ref:le,className:I(u.popover,Z),role:"dialog","aria-modal":"true","data-arrow":s,"data-position":ne,"data-alignment":ae,"data-open":ue&&ce||void 0,onKeyDown:pe,style:{top:`${L.top}px`,left:`${L.left}px`},...te,children:t.jsxs("div",{className:u.popoverInner,children:[t.jsxs("div",{className:u.popoverContentContainer,children:[i&&t.jsx("div",{className:u.popoverTitle,children:i}),t.jsx("div",{className:u.popoverContent,children:l})]}),t.jsxs("div",{className:u.popoverButtonContainer,children:[T&&t.jsx(N,{className:"popoverButton",onClick:de,label:T,variant:"secondary",size:"m"}),t.jsx(N,{className:"popoverButton",onClick:me,label:y,variant:"primary",size:"m"})]})]})})})]})});X.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},position:{defaultValue:{value:'"auto"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CorePopoverProps","Omit"]};const ze={title:"Popover",component:X,decorators:[e=>t.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(e,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},b={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})}},w={args:{position:"bottom",alignment:"start",arrow:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Confirmation"})}},C={args:{position:"top",alignment:"center",arrow:!0,content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:t.jsx("button",{children:"Show Info"})}},B={args:{position:"right",alignment:"start",arrow:!1,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:t.jsx("button",{children:"Open Without Arrow"})}},x={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})},play:async()=>{await h.tab(),await h.keyboard(fe);const e=E(document.body).getByRole("dialog");await he(()=>g(e).toBeVisible()),await h.tab();const n=E(e).getByRole("button",{name:/close/i});g(n).toHaveFocus(),await h.tab();const r=E(e).getByRole("button",{name:/cancel/i});g(r).toHaveFocus(),await h.tab(),g(n).toHaveFocus()}};var V,F,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(q=(F=b.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var K,W,D;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(D=(W=w.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var G,H,Y;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(Y=(H=C.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var U,z,M;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(M=(z=B.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var $,Q,J;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  }
}`,...(J=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};const Me=["Default","WithTwoButtons","WithoutTitle","WithoutArrow","KeyboardInteraction"];export{b as Default,x as KeyboardInteraction,w as WithTwoButtons,B as WithoutArrow,C as WithoutTitle,Me as __namedExportsOrder,ze as default};
