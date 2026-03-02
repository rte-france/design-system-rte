import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as we,d as Ce}from"./keyboard-test.constants-By8W48aj.js";import{u as p,w as B,a as N,e as v}from"./index-4rjIhT2C.js";import{f as Be}from"./testing.utils-mIZIUNbM.js";import{g as Ee,b as xe,a as Te}from"./auto-placement-C6RxYMtA.js";import{E as Pe}from"./keyboard.constants-BverKK8B.js";import{r as t}from"./index-G8LIXM5I.js";import{u as _e}from"./useAnimatedMount-_zPBpYOt.js";import{b as Ae,u as je,a as Re}from"./useKeydownEscape-CE1Mjiyw.js";import{B as O}from"./Button-Cd2C55g4.js";import{O as Se}from"./Overlay-BI5SO8Nq.js";import{c as I}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-41SiyeDe.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CQk6fGHb.js";import"./Icon-DjEid3Hw.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const V=8,k=20,Le=n=>{t.useEffect(()=>(window.addEventListener("scroll",n,!0),()=>{window.removeEventListener("scroll",n,!0)}),[n])},Ne="_popoverTrigger_1oeje_1",Oe="_popover_1oeje_1",Ie="_popoverInner_1oeje_25",Ve="_popoverContentContainer_1oeje_33",ke="_popoverTitle_1oeje_40",qe="_popoverContent_1oeje_33",Fe="_popoverButtonContainer_1oeje_64",i={popoverTrigger:Ne,popover:Oe,popoverInner:Ie,popoverContentContainer:Ve,popoverTitle:ke,popoverContent:qe,popoverButtonContainer:Fe},Z=t.forwardRef(({children:n,position:r="auto",alignment:c,content:C,arrow:f=!0,title:E,primaryButtonLabel:ee,secondaryButtonLabel:x,className:te="",triggerStyles:oe,closeOnClickOutside:T=!0,closeOnEscape:P=!0,onClickPrimaryButton:_,onClickSecondaryButton:A,...ne},d)=>{const l=t.useRef(null),[a,re]=t.useState(null),[ae,se]=t.useState(r),[ie,ce]=t.useState(c),[j,le]=t.useState({top:0,left:0}),[s,u]=t.useState(!1),{shouldRender:R,isAnimating:ue}=_e(s,150),[pe,S]=t.useState(!1),m=t.useCallback(()=>{if(!l.current||!a)return;const o=r==="auto"?Ee(l.current,a,"top",f?k:V):r,L=c||xe(l.current,a,o),ge=Te(o,l.current,a,f?k:V,L);ce(L),le(ge),se(o)},[r,f,a,c]),de=t.useCallback(()=>{T&&u(!1)},[T]),me=t.useCallback(()=>{P&&u(!1)},[P]);Ae(a,R),je(de,l.current,a),Re(me),Le(m);const ve=t.useCallback(o=>{re(o),typeof d=="function"?d(o):d&&(d.current=o),o&&s&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{m()})})},[d,s,m]);t.useEffect(()=>{s&&a?(m(),S(!0)):S(!1)},[s,a,m]);const fe=o=>{o.key===Pe&&(o.preventDefault(),s||u(!0))},he=o=>{s||(o.preventDefault(),u(!0))},be=()=>{A&&A(),u(!1)},ye=()=>{_&&_(),u(!1)};return e.jsxs("div",{ref:l,className:I(i.popoverTrigger),onClick:he,onKeyDown:fe,style:oe,children:[n,R&&e.jsx(Se,{children:e.jsx("div",{ref:ve,className:I(i.popover,te),role:"dialog","aria-modal":"true","data-arrow":f,"data-position":ae,"data-alignment":ie,"data-open":pe&&ue||void 0,style:{top:`${j.top}px`,left:`${j.left}px`},...ne,children:e.jsxs("div",{className:i.popoverInner,children:[e.jsxs("div",{className:i.popoverContentContainer,children:[E&&e.jsx("div",{className:i.popoverTitle,children:E}),e.jsx("div",{className:i.popoverContent,children:C})]}),e.jsxs("div",{className:i.popoverButtonContainer,children:[x&&e.jsx(O,{className:"popoverButton",onClick:be,label:x,variant:"secondary"}),e.jsx(O,{className:"popoverButton",onClick:ye,label:ee,variant:"primary"})]})]})})})]})});Z.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{content:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},position:{defaultValue:{value:'"auto"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},closeOnClickOutside:{defaultValue:{value:"true",computed:!1},required:!1},closeOnEscape:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CorePopoverProps","Omit"]};const st={title:"Composants/Popover",component:Z,decorators:[n=>e.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(n,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},h={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:e.jsx("button",{children:"Open Popover"})}},b={args:{position:"bottom",alignment:"start",arrow:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:e.jsx("button",{children:"Open Confirmation"})}},y={args:{position:"top",alignment:"center",arrow:!0,content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:e.jsx("button",{children:"Show Info"})}},g={args:{position:"right",alignment:"start",arrow:!1,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:e.jsx("button",{children:"Open Without Arrow"})}},w={args:{position:"auto",arrow:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:e.jsx("button",{children:"Open Popover"})},play:async({canvasElement:n})=>{Be(n),await p.tab(),await p.keyboard(we);const r=B(document.body).getByRole("dialog");await N(()=>v(r).toBeVisible()),await p.tab();const c=B(r).getByRole("button",{name:/close/i});v(c).toHaveFocus(),await p.tab();const C=B(r).getByRole("button",{name:/cancel/i});v(C).toHaveFocus(),await p.tab(),v(c).toHaveFocus(),await p.keyboard(Ce),await N(()=>v(r).not.toBeVisible())}};var q,F,K;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    position: "auto",
    arrow: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(K=(F=h.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var W,G,D;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(G=b.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var H,Y,$;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var M,z,J;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    primaryButtonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const it=["Default","WithTwoButtons","WithoutTitle","WithoutArrow","KeyboardInteraction"];export{h as Default,w as KeyboardInteraction,b as WithTwoButtons,g as WithoutArrow,y as WithoutTitle,it as __namedExportsOrder,st as default};
