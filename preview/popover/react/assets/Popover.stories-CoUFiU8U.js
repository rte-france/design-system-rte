import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{u as ne,g as re,a as ae,O as se}from"./Overlay-uLC_cZ0t.js";import{r as n}from"./index-G8LIXM5I.js";import{B as L}from"./Button-B-hhLjRd.js";import{c as j}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./index-DoK7PxrN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const A=8,E=20,ie="_popoverTrigger_824yr_3",le="_popover_824yr_3",ue="_popoverInner_824yr_27",ce="_popoverContentContainer_824yr_35",pe="_popoverTitle_824yr_42",de="_popoverContent_824yr_35",fe="_popoverButtonContainer_824yr_66",i={popoverTrigger:ie,popover:le,popoverInner:ue,popoverContentContainer:ce,popoverTitle:pe,popoverContent:de,popoverButtonContainer:fe},K=n.forwardRef(({children:g,position:p="auto",alignment:z="start",content:$,arrow:d=!0,title:w,showTitle:C=!1,buttonLabel:M="Close",button2:F=!1,button2Label:H="Cancel",className:J="",triggerStyles:Q,...U},l)=>{const u=n.useRef(null),[o,X]=n.useState(null),[Y,Z]=n.useState(p),[T,ee]=n.useState({top:0,left:0}),[r,c]=n.useState(!1),{shouldRender:y,isAnimating:te}=ne(r,150),oe=n.useCallback(e=>{X(e),typeof l=="function"?l(e):l&&(l.current=e)},[l]),f=n.useCallback(()=>{if(!(r&&u.current&&o))return;const e=p==="auto"?re(u.current,o,"top",d?E:A):p,s=ae(e,u.current,o,d?E:A);Z(e),ee(s)},[r,p,d,o]);n.useEffect(()=>{if(f(),!!r)return window.addEventListener("scroll",f,!0),()=>{window.removeEventListener("scroll",f,!0)}},[r,f]),n.useEffect(()=>{if(!(y&&r&&o))return;const e=o.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e.length>0&&e[0].focus();const s=a=>{if(a.key==="Tab"){const P=e[0],_=e[e.length-1];a.shiftKey&&document.activeElement===P?(a.preventDefault(),_.focus()):!a.shiftKey&&document.activeElement===_&&(a.preventDefault(),P.focus());return}a.key==="Escape"&&c(!1)};return o.addEventListener("keydown",s),()=>o.removeEventListener("keydown",s)},[y,r,o]),n.useEffect(()=>{if(!r)return;function e(s){const a=u.current;!a||!o||!a.contains(s.target)&&!o.contains(s.target)&&c(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[r,o]);const x=e=>{!r&&(e.type==="click"&&e.button===0||e.type==="keydown"&&(e.key==="Enter"||e.key===" "))&&c(!0)};return t.jsxs("div",{ref:u,className:j(i.popoverTrigger),onClick:x,onKeyDown:x,style:Q,children:[g,y&&t.jsx(se,{children:t.jsx("div",{ref:oe,className:j(i.popover,J),role:"dialog","aria-modal":"true","aria-labelledby":C&&w?"popover-title":void 0,"aria-describedby":"popover-content","data-arrow":d,"data-position":Y,"data-alignment":z,"data-open":te||void 0,style:{top:`${T.top}px`,left:`${T.left}px`},...U,children:t.jsxs("div",{className:i.popoverInner,children:[t.jsxs("div",{className:i.popoverContentContainer,children:[C&&w&&t.jsx("div",{className:i.popoverTitle,children:w}),t.jsx("div",{className:i.popoverContent,children:$})]}),t.jsxs("div",{className:i.popoverButtonContainer,children:[F&&t.jsx(L,{className:"popoverButton",onClick:()=>c(!1),label:H,variant:"secondary",size:"m"}),t.jsx(L,{className:"popoverButton",onClick:()=>c(!1),label:M,variant:"primary",size:"m"})]})]})})})]})});K.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},position:{defaultValue:{value:'"auto"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},showTitle:{defaultValue:{value:"false",computed:!1},required:!1},buttonLabel:{defaultValue:{value:'"Close"',computed:!1},required:!1},button2:{defaultValue:{value:"false",computed:!1},required:!1},button2Label:{defaultValue:{value:'"Cancel"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CorePopoverProps","Omit"]};const xe={title:"Popover",component:K,decorators:[g=>t.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(g,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},showTitle:{control:"boolean",description:"Whether to show the title",defaultValue:!1},button2:{control:"boolean",description:"Whether to show the second button",defaultValue:!1},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},buttonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},button2Label:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},m={args:{position:"auto",alignment:"start",arrow:!0,showTitle:!0,button2:!1,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",buttonLabel:"Close",button2Label:"Cancel",children:t.jsx("button",{children:"Open Popover"})}},h={args:{position:"bottom",alignment:"center",arrow:!0,showTitle:!0,button2:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",buttonLabel:"Confirm",button2Label:"Cancel",children:t.jsx("button",{children:"Open Confirmation"})}},b={args:{position:"top",alignment:"center",arrow:!0,showTitle:!1,button2:!1,content:"This popover has no title, just content and a close button.",buttonLabel:"Got it",children:t.jsx("button",{children:"Show Info"})}},v={args:{position:"right",alignment:"start",arrow:!1,showTitle:!0,button2:!1,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",buttonLabel:"Close",children:t.jsx("button",{children:"Open Without Arrow"})}};var V,N,O;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    position: "auto",
    alignment: "start",
    arrow: true,
    showTitle: true,
    button2: false,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    buttonLabel: "Close",
    button2Label: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var S,R,k;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    position: "bottom",
    alignment: "center",
    arrow: true,
    showTitle: true,
    button2: true,
    title: "Confirm Action",
    content: "Are you sure you want to proceed with this action? This cannot be undone.",
    buttonLabel: "Confirm",
    button2Label: "Cancel",
    children: <button>Open Confirmation</button>
  }
}`,...(k=(R=h.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var q,I,W;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    showTitle: false,
    button2: false,
    content: "This popover has no title, just content and a close button.",
    buttonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(W=(I=b.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var B,D,G;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    position: "right",
    alignment: "start",
    arrow: false,
    showTitle: true,
    button2: false,
    title: "No Arrow",
    content: "This popover is displayed without an arrow pointer.",
    buttonLabel: "Close",
    children: <button>Open Without Arrow</button>
  }
}`,...(G=(D=v.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const Pe=["Default","WithTwoButtons","WithoutTitle","WithoutArrow"];export{m as Default,h as WithTwoButtons,v as WithoutArrow,b as WithoutTitle,Pe as __namedExportsOrder,xe as default};
