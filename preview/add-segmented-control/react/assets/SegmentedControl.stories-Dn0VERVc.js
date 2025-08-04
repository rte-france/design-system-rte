import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{f as v}from"./index-DaW6VCyr.js";import{r as g}from"./index-G8LIXM5I.js";import{S as P,E as K,T as k,A as I,a as F}from"./keyboard.constants-B7KgiIhi.js";import{u as W}from"./useActiveKeyboard-aaZSzhkx.js";import{I as R}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const G=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],Q=G.map(t=>t+":not([disabled]):not([aria-hidden])").join(","),V="_segment_fy1xe_3",d={"segmented-control":"_segmented-control_fy1xe_3","segment-slider":"_segment-slider_fy1xe_11","segment-container":"_segment-container_fy1xe_20",segment:V,"segment-content":"_segment-content_fy1xe_72","segment-label":"_segment-label_fy1xe_79","selected-icon":"_selected-icon_fy1xe_92"},x=g.forwardRef(({options:t,onChange:r,selectedSegment:c,...a},l)=>{const u=g.useRef(null),[h,y]=g.useState({left:0,width:0}),j=(n,m)=>m===2?n===0?"left":"right":n===0?"left":n===m-1?"right":"middle",f=n=>{n.stopPropagation();const C=n.currentTarget.getAttribute("id")||"";r(C)};return g.useEffect(()=>{function n(){if(!u.current)return;const m=t.findIndex(O=>O.id===c);if(m===-1)return;const S=u.current.querySelectorAll(`.${d.segment}`)[m];S&&y({left:S.offsetLeft,width:S.offsetWidth})}return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[c,t]),t.length<=1||t.length>3?(console.warn("SegmentedControl: 'options' should have 2 or 3 items."),null):o.jsxs("div",{ref:n=>{u.current=n,typeof l=="function"?l(n):l&&(l.current=n)},role:"radiogroup",className:d["segmented-control"],...a,children:[o.jsx("div",{className:d["segment-slider"],style:{left:h.left,width:h.width}}),t.map((n,m)=>o.jsx(J,{position:j(m,t.length),onClick:f,selected:c===n.id,parentRef:u||l,...n},`${n.id}-${m}`))]})}),J=({id:t,icon:r,iconAppearance:c,label:a,position:l,selected:u,onClick:h,parentRef:y,...j})=>{const f=g.useRef(null);g.useEffect(()=>{const e=f&&"current"in f?f.current:null,i=b=>{if(b.target===(e==null?void 0:e.childNodes[0])&&e!=null&&e.childNodes[0]&&e.childNodes[0].getAttribute("data-selected")!=="true"){const s=Array.from(document.querySelectorAll(`.${d.segment}`)).find(_=>_.getAttribute("data-selected")==="true");s&&s.focus()}};return e&&e.addEventListener("focus",i),()=>{e&&e.removeEventListener("focus",i)}},[f,t]);const n=e=>{var i,b;if(e.key===P||e.key===K)e.stopPropagation(),E==null||E(e);else if(e.key===I||e.key===F){e.stopPropagation();const p=(i=y==null?void 0:y.current)==null?void 0:i.querySelectorAll(`.${d["segment-container"]}`);if(p){const s=(b=document.activeElement)==null?void 0:b.parentElement,_=s!=null?Array.from(p).indexOf(s):-1,T=e.key===I?_-1:_+1;if(p[T]){const N=p[T].firstChild;N==null||N.focus()}}}},m=e=>{if(e.key===k){e.stopPropagation();const i=document.querySelectorAll(Q)||[],b=document.activeElement,p=Array.from(i).indexOf(b);if(e.shiftKey){let s=p-1;for(;s>0&&i[s].classList.contains(d.segment);)s--;s>0&&i[s].focus()}else{let s=p+1;for(;s<i.length&&i[s].classList.contains(d.segment);)s++;s<i.length&&i[s].focus()}}},{onBlur:C,onKeyDown:S,onKeyUp:O}=W({onKeyUp:n,onKeyDown:m},{id:t,interactiveKeyCodes:[P,K,k,I,F]}),E=e=>{e.stopPropagation(),h==null||h(e)};return!a&&!r||a&&r?(console.warn("SegmentedControl: Must use one of 'label' or 'icon', not both."),null):o.jsx("div",{ref:f,role:"radio",className:d["segment-container"],"data-position":l,...j,children:o.jsxs("div",{id:t,"aria-label":a||r,"aria-selected":u,className:d.segment,"data-selected":u,onClick:E,onKeyDown:S,onKeyUp:O,onBlur:C,tabIndex:0,ref:f,children:[u&&o.jsx(R,{name:"check-small",appearance:"filled",size:24,className:d["selected-icon"]}),o.jsxs("div",{className:d["segment-content"],children:[r&&o.jsx(R,{name:r,appearance:c??u?"filled":"outlined",size:24}),!r&&a&&o.jsx("span",{className:d["segment-label"],children:a})]})]})})};x.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const ae={title:"SegmentedControl",component:x,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:v()}},w={args:{options:[{id:"label-1",label:"Label"},{id:"label-2",label:"Label"},{id:"label-3",label:"Label"}],onChange:v()},render:t=>{const[r,c]=g.useState("label-1"),a=l=>{c(l)};return o.jsx("div",{style:{width:"360px"},children:o.jsx(x,{options:t.options,onChange:a,selectedSegment:r})})}},A={args:{options:[{id:"label-1",label:"Label"},{id:"label-2",label:"Label"}],onChange:v()},render:t=>{const[r,c]=g.useState("label-1"),a=l=>{c(l)};return o.jsx("div",{style:{width:"360px"},children:o.jsx(x,{options:t.options,onChange:a,selectedSegment:r})})}},L={args:{options:[{id:"agenda",icon:"monitoring"},{id:"column",icon:"water-alt"},{id:"grid",icon:"chart-bar"}],onChange:v()},render:t=>{const[r,c]=g.useState("agenda"),a=l=>{c(l)};return o.jsx("div",{style:{width:"360px"},children:o.jsx(x,{options:t.options,onChange:a,selectedSegment:r})})}};var q,B,D;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "label-1",
      label: "Label"
    }, {
      id: "label-2",
      label: "Label"
    }, {
      id: "label-3",
      label: "Label"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("label-1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "360px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(D=(B=w.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var U,$,z;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "label-1",
      label: "Label"
    }, {
      id: "label-2",
      label: "Label"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("label-1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "360px"
    }}>
        {/* <button>Autre bouton</button> */}
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />

        {/* <button>Bouton a focus</button> */}
      </div>;
  }
}`,...(z=($=A.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var Y,H,M;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "agenda",
      icon: "monitoring"
    }, {
      id: "column",
      icon: "water-alt"
    }, {
      id: "grid",
      icon: "chart-bar"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("agenda");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "360px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(M=(H=L.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const le=["Default","TwoItems","Icons"];export{w as Default,L as Icons,A as TwoItems,le as __namedExportsOrder,ae as default};
