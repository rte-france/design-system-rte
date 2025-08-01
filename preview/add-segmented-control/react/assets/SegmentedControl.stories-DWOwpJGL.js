import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{f as q}from"./index-DaW6VCyr.js";import{r as g}from"./index-G8LIXM5I.js";import{S as C,E as R,T as j,A as w,a as k}from"./keyboard.constants-B7KgiIhi.js";import{u as F}from"./useActiveKeyboard-aaZSzhkx.js";import{I as D}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const B="_segment_fy1xe_3",c={"segmented-control":"_segmented-control_fy1xe_3","segment-slider":"_segment-slider_fy1xe_11","segment-container":"_segment-container_fy1xe_20",segment:B,"segment-content":"_segment-content_fy1xe_72","segment-label":"_segment-label_fy1xe_79","selected-icon":"_selected-icon_fy1xe_92"},U=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],$=U.map(n=>n+":not([disabled]):not([aria-hidden])").join(","),_=g.forwardRef(({options:n,onClick:i,selected:o,...p},r)=>{const d=g.useRef(null),[b,m]=g.useState({left:0,width:0}),L=(s,u)=>u===2?s===0?"left":"right":s===0?"left":s===u-1?"right":"middle";return g.useEffect(()=>{if(!d.current)return;const s=n.findIndex(T=>T.id===o);if(s===-1)return;const E=d.current.querySelectorAll(`.${c.segment}`)[s];E&&m({left:E.offsetLeft,width:E.offsetWidth})},[o,n]),n.length<=1||n.length>3?(console.warn("SegmentedControl: 'options' should have 2 or 3 items."),null):a.jsxs("div",{ref:s=>{d.current=s,typeof r=="function"?r(s):r&&(r.current=s)},role:"radiogroup",className:c["segmented-control"],...p,children:[a.jsx("div",{className:c["segment-slider"],style:{left:b.left,width:b.width}}),n.map((s,u)=>a.jsx(Y,{position:L(u,n.length),onClick:i,selected:o===s.id,parentRef:d||r,...s},`${s.id}-${u}`))]})}),Y=({id:n,icon:i,label:o,position:p,selected:r,onClick:d,parentRef:b})=>{const m=g.useRef(null);g.useEffect(()=>{const e=m&&"current"in m?m.current:null,l=y=>{if(y.target===(e==null?void 0:e.childNodes[0])&&e!=null&&e.childNodes[0]&&e.childNodes[0].getAttribute("data-selected")!=="true"){const t=Array.from(document.querySelectorAll(`.${c.segment}`)).find(h=>h.getAttribute("data-selected")==="true");t&&t.focus()}};return e&&e.addEventListener("focus",l),()=>{e&&e.removeEventListener("focus",l)}},[m,n]);const L=e=>{var l,y;if(e.key===C||e.key===R)e.stopPropagation(),v==null||v(e);else if(e.key===w||e.key===k){e.stopPropagation();const f=(l=b==null?void 0:b.current)==null?void 0:l.querySelectorAll(`.${c["segment-container"]}`);if(f){const t=(y=document.activeElement)==null?void 0:y.parentElement,h=t!=null?Array.from(f).indexOf(t):-1,M=e.key===w?h-1:h+1;if(f[M]){const A=f[M].firstChild;A==null||A.focus()}}}},s=e=>{if(e.key===j){const l=document.querySelectorAll($)||[],y=document.activeElement,f=Array.from(l).indexOf(y);if(e.shiftKey){let t=f-1;for(;t>0&&l[t].classList.contains(c.segment);)t--;t>0&&l[t].focus()}else{let t=f+1;for(;t<l.length&&l[t].classList.contains(c.segment);)t++;t<l.length&&l[t].focus()}e.stopPropagation()}},{onBlur:u,onKeyDown:E,onKeyUp:T}=F({onKeyUp:L,onKeyDown:s},{id:n,interactiveKeyCodes:[C,R,j,w,k]});if(!o&&!i||o&&i)return console.warn("SegmentedControl: Must use one of 'label' or 'icon', not both."),null;const v=e=>{e.stopPropagation(),d==null||d(e)};return a.jsx("div",{ref:m,role:"radio",className:c["segment-container"],"data-position":p,children:a.jsxs("div",{id:n,"aria-label":o||i,"aria-selected":r,className:c.segment,"data-selected":r,onClick:v,onKeyDown:E,onKeyUp:T,onBlur:u,tabIndex:0,ref:m,children:[r&&a.jsx(D,{name:"check-small",appearance:"filled",size:24,className:c["selected-icon"]}),a.jsxs("div",{className:c["segment-content"],children:[i&&a.jsx(D,{name:i,appearance:"filled",size:24}),!i&&o&&a.jsx("span",{className:c["segment-label"],children:o})]})]})})};_.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"SegmentProps"},{name:"union",raw:'"position" | "selected"',elements:[{name:"literal",value:'"position"'},{name:"literal",value:'"selected"'}]}],raw:'Omit<SegmentProps, "position" | "selected">'}],raw:'Omit<SegmentProps, "position" | "selected">[]'},description:""},selected:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}}};const ee={title:"SegmentedControl",component:_,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:q()}},x={args:{options:[{id:"label-1",label:"Label"},{id:"label-2",label:"Label"},{id:"label-3",label:"Label"}]},render:n=>{const[i,o]=g.useState("label-1"),p=r=>{o(r.currentTarget.getAttribute("id")||"")};return a.jsx("div",{style:{width:"360px"},children:a.jsx(_,{options:n.options,onClick:p,selected:i})})}},S={args:{options:[{id:"label-1",label:"Label"},{id:"label-2",label:"Label"}]},render:n=>{const[i,o]=g.useState("label-1"),p=r=>{o(r.currentTarget.getAttribute("id")||"")};return a.jsx("div",{style:{width:"360px"},children:a.jsx(_,{options:n.options,onClick:p,selected:i})})}};var K,N,H;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    }]
  },
  render: args => {
    const [selected, setSelected] = useState("label-1");
    const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      setSelected(event.currentTarget.getAttribute("id") || "");
    };
    return <div style={{
      width: "360px"
    }}>
        <SegmentedControl options={args.options} onClick={handleClick} selected={selected} />
      </div>;
  }
}`,...(H=(N=x.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var I,P,O;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "label-1",
      label: "Label"
    }, {
      id: "label-2",
      label: "Label"
    }]
  },
  render: args => {
    const [selected, setSelected] = useState("label-1");
    const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      setSelected(event.currentTarget.getAttribute("id") || "");
    };
    return <div style={{
      width: "360px"
    }}>
        {/* <button>Autre bouton</button> */}
        <SegmentedControl options={args.options} onClick={handleClick} selected={selected} />

        {/* <button>Bouton a focus</button> */}
      </div>;
  }
}`,...(O=(P=S.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const te=["Default","TwoItems"];export{x as Default,S as TwoItems,te as __namedExportsOrder,ee as default};
