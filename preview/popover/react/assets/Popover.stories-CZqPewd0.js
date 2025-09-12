import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{w as y,u as T,a as he,e as x}from"./index-DaW6VCyr.js";import{u as ye,g as ge,b as be,a as we,O as Ce}from"./Overlay-COYgguPw.js";import{c as Be}from"./keyboard.constants-DdplKbQc.js";import{r}from"./index-G8LIXM5I.js";import{F as Te}from"./dom.constants-pEgPeCLJ.js";import{B as O}from"./Button-B-hhLjRd.js";import{c as N}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./index-DoK7PxrN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const I=8,k=20,xe=(e,...a)=>{r.useEffect(()=>{function n(c){if(a.length===0||a.some(i=>!i))return;a.some(i=>i.contains(c.target))||e()}return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[e,a])},Ee=(e,a)=>{r.useEffect(()=>{if(!a||!e)return;const n=e.querySelectorAll(Te);n.length>0&&n[0].focus();const c=s=>{if(s.key==="Tab"){const i=n[0],m=n[n.length-1];s.shiftKey&&document.activeElement===i?(s.preventDefault(),m.focus()):!s.shiftKey&&document.activeElement===m&&(s.preventDefault(),i.focus())}};return e.addEventListener("keydown",c),()=>e.removeEventListener("keydown",c)},[e,a])},Pe=e=>{r.useEffect(()=>(window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}),[e])},_e="_popoverTrigger_824yr_3",Le="_popover_824yr_3",Ae="_popoverInner_824yr_27",Re="_popoverContentContainer_824yr_35",Se="_popoverTitle_824yr_42",je="_popoverContent_824yr_35",Oe="_popoverButtonContainer_824yr_66",u={popoverTrigger:_e,popover:Le,popoverInner:Ae,popoverContentContainer:Re,popoverTitle:Se,popoverContent:je,popoverButtonContainer:Oe},X=r.forwardRef(({children:e,position:a="auto",alignment:n,content:c,arrow:s=!0,title:i,showTitle:m=!1,primaryButtonLabel:Z,secondaryButtonLabel:E,className:ee="",triggerStyles:te,onClickPrimaryButton:P,onClickSecondaryButton:_,...oe},v)=>{const p=r.useRef(null),[l,ne]=r.useState(null),[re,ae]=r.useState(a),[se,ie]=r.useState(n),[L,ce]=r.useState({top:0,left:0}),[d,f]=r.useState(!1),{shouldRender:A,isAnimating:le}=ye(d,150),[ue,R]=r.useState(!1),h=r.useCallback(()=>{if(!p.current||!l)return;const o=a==="auto"?ge(p.current,l,"top",s?k:I):a,j=n||be(p.current,l,o),fe=we(o,p.current,l,s?k:I,j);ie(j),ce(fe),ae(o)},[a,s,l,n]);Ee(l,A),xe(()=>f(!1),p.current,l),Pe(h);const pe=r.useCallback(o=>{ne(o),typeof v=="function"?v(o):v&&(v.current=o),o&&d&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{h()})})},[v,d,h]);r.useEffect(()=>{d&&l?(h(),R(!0)):R(!1)},[d,l,h]);const de=o=>{o.key===Be&&f(!1)},S=o=>{!d&&(o.type==="click"&&o.button===0||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&f(!0)},me=()=>{_&&_(),f(!1)},ve=()=>{P&&P(),f(!1)};return t.jsxs("div",{ref:p,className:N(u.popoverTrigger),onClick:S,onKeyDown:S,style:te,children:[e,A&&t.jsx(Ce,{children:t.jsx("div",{ref:pe,className:N(u.popover,ee),role:"dialog","aria-modal":"true","aria-labelledby":m&&i?"popover-title":void 0,"aria-describedby":"popover-content","data-arrow":s,"data-position":re,"data-alignment":se,"data-open":ue&&le||void 0,onKeyDown:de,style:{top:`${L.top}px`,left:`${L.left}px`},...oe,children:t.jsxs("div",{className:u.popoverInner,children:[t.jsxs("div",{className:u.popoverContentContainer,children:[m&&i&&t.jsx("div",{className:u.popoverTitle,children:i}),t.jsx("div",{className:u.popoverContent,children:c})]}),t.jsxs("div",{className:u.popoverButtonContainer,children:[E&&t.jsx(O,{className:"popoverButton",onClick:me,label:E,variant:"secondary",size:"m"}),t.jsx(O,{className:"popoverButton",onClick:ve,label:Z,variant:"primary",size:"m"})]})]})})})]})});X.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},position:{defaultValue:{value:'"auto"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},showTitle:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CorePopoverProps","Omit"]};const ze={title:"Popover",component:X,decorators:[e=>t.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(e,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},showTitle:{control:"boolean",description:"Whether to show the title",defaultValue:!1},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},g={args:{position:"auto",arrow:!0,showTitle:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})}},b={args:{position:"bottom",alignment:"start",arrow:!0,showTitle:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Confirmation"})}},w={args:{position:"top",alignment:"center",arrow:!0,showTitle:!1,content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:t.jsx("button",{children:"Show Info"})}},C={args:{position:"right",alignment:"start",arrow:!1,showTitle:!0,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:t.jsx("button",{children:"Open Without Arrow"})}},B={args:{position:"auto",arrow:!0,showTitle:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})},play:async({canvasElement:e})=>{const n=y(e).getByRole("button",{name:/open popover/i});await T.click(n);const c=y(document.body).getByRole("dialog");await he(()=>x(c).toBeVisible()),await T.tab();const s=y(c).getByRole("button",{name:/close/i});x(s).toHaveFocus(),await T.tab();const i=y(c).getByRole("button",{name:/cancel/i});x(i).toHaveFocus()}};var V,q,F;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    showTitle: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(F=(q=g.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var W,K,D;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    position: "bottom",
    alignment: "start",
    arrow: true,
    showTitle: true,
    title: "Confirm Action",
    content: "Are you sure you want to proceed with this action? This cannot be undone.",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Confirmation</button>
  }
}`,...(D=(K=b.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};var G,H,Y;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    showTitle: false,
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(Y=(H=w.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var z,M,U;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    showTitle: true,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(U=(M=C.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var $,Q,J;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    showTitle: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerButton = canvas.getByRole("button", {
      name: /open popover/i
    });
    // TODO: re-enable when Storybook issue with focus is resolved
    await userEvent.click(triggerButton);
    // await userEvent.tab();
    // await userEvent.keyboard(TESTING_ENTER_KEY);
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
  }
}`,...(J=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};const Me=["Default","WithTwoButtons","WithoutTitle","WithoutArrow","KeyboardInteraction"];export{g as Default,B as KeyboardInteraction,b as WithTwoButtons,C as WithoutArrow,w as WithoutTitle,Me as __namedExportsOrder,ze as default};
