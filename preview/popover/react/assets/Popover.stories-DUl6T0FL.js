import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{u as se,g as ie,a as le,O as ce}from"./Overlay-BhKK0QId.js";import{r}from"./index-G8LIXM5I.js";import{B as N}from"./Button-B-hhLjRd.js";import{c as O}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./index-DoK7PxrN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const S=8,R=20,ue="_popoverTrigger_824yr_3",pe="_popover_824yr_3",de="_popoverInner_824yr_27",me="_popoverContentContainer_824yr_35",fe="_popoverTitle_824yr_42",he="_popoverContent_824yr_35",ve="_popoverButtonContainer_824yr_66",i={popoverTrigger:ue,popover:pe,popoverInner:de,popoverContentContainer:me,popoverTitle:fe,popoverContent:he,popoverButtonContainer:ve},H=r.forwardRef(({children:y,position:p="auto",alignment:b="start",content:J,arrow:d=!0,title:w,showTitle:T=!1,primaryButtonLabel:Q,secondaryButtonLabel:x,className:U="",triggerStyles:X,onClickPrimaryButton:P,onClickSecondaryButton:_,...Y},l)=>{const c=r.useRef(null),[o,B]=r.useState(null),[Z,ee]=r.useState(p),[L,te]=r.useState({top:0,left:0}),[n,u]=r.useState(!1),{shouldRender:C,isAnimating:oe}=se(n,150),re=r.useCallback(e=>{B(e),typeof l=="function"?l(e):l&&(l.current=e)},[l]),m=r.useCallback(()=>{if(!(n&&c.current&&o))return;const e=p==="auto"?ie(c.current,o,"top",d?R:S):p,s=le(e,c.current,o,d?R:S,b);console.log({computedPosition:e,computedCoordinates:s}),ee(e),te(s)},[n,p,d,o,b]);r.useEffect(()=>{if(m(),!!n)return window.addEventListener("scroll",m,!0),()=>{window.removeEventListener("scroll",m,!0)}},[n,m,B]),r.useEffect(()=>{if(!(C&&n&&o))return;const e=o.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e.length>0&&e[0].focus();const s=a=>{if(a.key==="Tab"){const A=e[0],E=e[e.length-1];a.shiftKey&&document.activeElement===A?(a.preventDefault(),E.focus()):!a.shiftKey&&document.activeElement===E&&(a.preventDefault(),A.focus());return}a.key==="Escape"&&u(!1)};return o.addEventListener("keydown",s),()=>o.removeEventListener("keydown",s)},[C,n,o]),r.useEffect(()=>{if(!n)return;function e(s){const a=c.current;!a||!o||!a.contains(s.target)&&!o.contains(s.target)&&u(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[n,o]);const j=e=>{!n&&(e.type==="click"&&e.button===0||e.type==="keydown"&&(e.key==="Enter"||e.key===" "))&&u(!0)},ne=()=>{_&&_(),u(!1)},ae=()=>{P&&P(),u(!1)};return t.jsxs("div",{ref:c,className:O(i.popoverTrigger),onClick:j,onKeyDown:j,style:X,children:[y,C&&t.jsx(ce,{children:t.jsx("div",{ref:re,className:O(i.popover,U),role:"dialog","aria-modal":"true","aria-labelledby":T&&w?"popover-title":void 0,"aria-describedby":"popover-content","data-arrow":d,"data-position":Z,"data-alignment":b,"data-open":oe||void 0,style:{top:`${L.top}px`,left:`${L.left}px`},...Y,children:t.jsxs("div",{className:i.popoverInner,children:[t.jsxs("div",{className:i.popoverContentContainer,children:[T&&w&&t.jsx("div",{className:i.popoverTitle,children:w}),t.jsx("div",{className:i.popoverContent,children:J})]}),t.jsxs("div",{className:i.popoverButtonContainer,children:[x&&t.jsx(N,{className:"popoverButton",onClick:()=>ne(),label:x,variant:"secondary",size:"m"}),t.jsx(N,{className:"popoverButton",onClick:()=>ae(),label:Q,variant:"primary",size:"m"})]})]})})})]})});H.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},position:{defaultValue:{value:'"auto"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},arrow:{defaultValue:{value:"true",computed:!1},required:!1},showTitle:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CorePopoverProps","Omit"]};const Be={title:"Popover",component:H,decorators:[y=>t.jsx("div",{style:{height:"400px",width:"80%",padding:"100px",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(y,{})})],tags:["autodocs"],argTypes:{position:{control:"select",options:["auto","top","bottom","left","right"],description:"Position of the popover relative to trigger",defaultValue:"auto"},alignment:{control:"select",options:["start","center","end"],description:"Alignment of the popover",defaultValue:"start"},arrow:{control:"boolean",description:"Whether to show the arrow",defaultValue:!0},showTitle:{control:"boolean",description:"Whether to show the title",defaultValue:!1},title:{control:"text",description:"Title of the popover",defaultValue:"Popover Title"},content:{control:"text",description:"Content of the popover",defaultValue:"Popover content"},primaryButtonLabel:{control:"text",description:"Label for the primary button",defaultValue:"Close"},secondaryButtonLabel:{control:"text",description:"Label for the secondary button",defaultValue:"Cancel"},children:{table:{disable:!0}},triggerStyles:{table:{disable:!0}},className:{table:{disable:!0}}}},f={args:{position:"auto",alignment:"end",arrow:!0,showTitle:!0,title:"Popover Title",content:"Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Popover"})}},h={args:{position:"bottom",alignment:"start",arrow:!0,showTitle:!0,title:"Confirm Action",content:"Are you sure you want to proceed with this action? This cannot be undone.",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",children:t.jsx("button",{children:"Open Confirmation"})}},v={args:{position:"top",alignment:"center",arrow:!0,showTitle:!1,content:"This popover has no title, just content and a close button.",primaryButtonLabel:"Got it",children:t.jsx("button",{children:"Show Info"})}},g={args:{position:"right",alignment:"start",arrow:!1,showTitle:!0,title:"No Arrow",content:"This popover is displayed without an arrow pointer.",primaryButtonLabel:"Close",children:t.jsx("button",{children:"Open Without Arrow"})}};var k,V,I;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    position: "auto",
    alignment: "end",
    arrow: true,
    showTitle: true,
    title: "Popover Title",
    content: "Le Popover est un composant de type superposition (overlay), qui apparaît au clic, au focus ou au survol d'un élément déclencheur (trigger). Il est utilisé pour afficher un contenu contextuel enrichi : aide, options, actions complémentaires…",
    primaryButtonLabel: "Close",
    secondaryButtonLabel: "Cancel",
    children: <button>Open Popover</button>
  }
}`,...(I=(V=f.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var W,q,D;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(q=h.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var G,K,z;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    position: "top",
    alignment: "center",
    arrow: true,
    showTitle: false,
    content: "This popover has no title, just content and a close button.",
    primaryButtonLabel: "Got it",
    children: <button>Show Info</button>
  }
}`,...(z=(K=v.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var $,M,F;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(F=(M=g.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};const Le=["Default","WithTwoButtons","WithoutTitle","WithoutArrow"];export{f as Default,h as WithTwoButtons,g as WithoutArrow,v as WithoutTitle,Le as __namedExportsOrder,Be as default};
