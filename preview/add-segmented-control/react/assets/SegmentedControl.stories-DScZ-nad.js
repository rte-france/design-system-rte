import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{f as L}from"./index-DaW6VCyr.js";import{r as g}from"./index-G8LIXM5I.js";import{S as T,E as P,T as K,A as N,a as k}from"./keyboard.constants-B7KgiIhi.js";import{u as M}from"./useActiveKeyboard-aaZSzhkx.js";import{I as q}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const W="_segment_fy1xe_3",d={"segmented-control":"_segmented-control_fy1xe_3","segment-slider":"_segment-slider_fy1xe_11","segment-container":"_segment-container_fy1xe_20",segment:W,"segment-content":"_segment-content_fy1xe_72","segment-label":"_segment-label_fy1xe_79","selected-icon":"_selected-icon_fy1xe_92"},G=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],Q=G.map(t=>t+":not([disabled]):not([aria-hidden])").join(","),E=g.forwardRef(({options:t,onChange:r,selectedSegment:c,...a},l)=>{const u=g.useRef(null),[h,S]=g.useState({left:0,width:0}),p=(n,m)=>m===2?n===0?"left":"right":n===0?"left":n===m-1?"right":"middle",O=n=>{n.stopPropagation();const C=n.currentTarget.getAttribute("id")||"";r(C)};return g.useEffect(()=>{function n(){if(!u.current)return;const m=t.findIndex(b=>b.id===c);if(m===-1)return;const x=u.current.querySelectorAll(`.${d.segment}`)[m];x&&S({left:x.offsetLeft,width:x.offsetWidth})}return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[c,t]),t.length<=1||t.length>3?(console.warn("SegmentedControl: 'options' should have 2 or 3 items."),null):o.jsxs("div",{ref:n=>{u.current=n,typeof l=="function"?l(n):l&&(l.current=n)},role:"radiogroup",className:d["segmented-control"],...a,children:[o.jsx("div",{className:d["segment-slider"],style:{left:h.left,width:h.width}}),t.map((n,m)=>o.jsx(V,{position:p(m,t.length),onClick:O,selected:c===n.id,parentRef:u||l,...n},`${n.id}-${m}`))]})}),V=({id:t,icon:r,iconAppearance:c,label:a,position:l,selected:u,onClick:h,parentRef:S})=>{const p=g.useRef(null);g.useEffect(()=>{const e=p&&"current"in p?p.current:null,i=y=>{if(y.target===(e==null?void 0:e.childNodes[0])&&e!=null&&e.childNodes[0]&&e.childNodes[0].getAttribute("data-selected")!=="true"){const s=Array.from(document.querySelectorAll(`.${d.segment}`)).find(_=>_.getAttribute("data-selected")==="true");s&&s.focus()}};return e&&e.addEventListener("focus",i),()=>{e&&e.removeEventListener("focus",i)}},[p,t]);const O=e=>{var i,y;if(e.key===T||e.key===P)e.stopPropagation(),b==null||b(e);else if(e.key===N||e.key===k){e.stopPropagation();const f=(i=S==null?void 0:S.current)==null?void 0:i.querySelectorAll(`.${d["segment-container"]}`);if(f){const s=(y=document.activeElement)==null?void 0:y.parentElement,_=s!=null?Array.from(f).indexOf(s):-1,I=e.key===N?_-1:_+1;if(f[I]){const j=f[I].firstChild;j==null||j.focus()}}}},n=e=>{if(e.key===K){const i=document.querySelectorAll(Q)||[],y=document.activeElement,f=Array.from(i).indexOf(y);if(e.shiftKey){let s=f-1;for(;s>0&&i[s].classList.contains(d.segment);)s--;s>0&&i[s].focus()}else{let s=f+1;for(;s<i.length&&i[s].classList.contains(d.segment);)s++;s<i.length&&i[s].focus()}e.stopPropagation()}},{onBlur:m,onKeyDown:C,onKeyUp:x}=M({onKeyUp:O,onKeyDown:n},{id:t,interactiveKeyCodes:[T,P,K,N,k]});if(!a&&!r||a&&r)return console.warn("SegmentedControl: Must use one of 'label' or 'icon', not both."),null;const b=e=>{e.stopPropagation(),h==null||h(e)};return o.jsx("div",{ref:p,role:"radio",className:d["segment-container"],"data-position":l,children:o.jsxs("div",{id:t,"aria-label":a||r,"aria-selected":u,className:d.segment,"data-selected":u,onClick:b,onKeyDown:C,onKeyUp:x,onBlur:m,tabIndex:0,ref:p,children:[u&&o.jsx(q,{name:"check-small",appearance:"filled",size:24,className:d["selected-icon"]}),o.jsxs("div",{className:d["segment-content"],children:[r&&o.jsx(q,{name:r,appearance:c??u?"filled":"outlined",size:24}),!r&&a&&o.jsx("span",{className:d["segment-label"],children:a})]})]})})};E.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"SegmentProps"},{name:"union",raw:'"position" | "selected"',elements:[{name:"literal",value:'"position"'},{name:"literal",value:'"selected"'}]}],raw:'Omit<SegmentProps, "position" | "selected">'}],raw:'Omit<SegmentProps, "position" | "selected">[]'},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},selectedSegment:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const re={title:"SegmentedControl",component:E,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:L()}},w={args:{options:[{id:"label-1",label:"Label"},{id:"label-2",label:"Label"},{id:"label-3",label:"Label"}],onChange:L()},render:t=>{const[r,c]=g.useState("label-1"),a=l=>{c(l)};return o.jsx("div",{style:{width:"360px"},children:o.jsx(E,{options:t.options,onChange:a,selectedSegment:r})})}},A={args:{options:[{id:"label-1",label:"Label"},{id:"label-2",label:"Label"}],onChange:L()},render:t=>{const[r,c]=g.useState("label-1"),a=l=>{c(l)};return o.jsx("div",{style:{width:"360px"},children:o.jsx(E,{options:t.options,onChange:a,selectedSegment:r})})}},v={args:{options:[{id:"agenda",icon:"monitoring"},{id:"column",icon:"water-alt"},{id:"grid",icon:"chart-bar"}],onChange:L()},render:t=>{const[r,c]=g.useState("agenda"),a=l=>{c(l)};return o.jsx("div",{style:{width:"360px"},children:o.jsx(E,{options:t.options,onChange:a,selectedSegment:r})})}};var F,R,B;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(R=w.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var D,U,$;A.parameters={...A.parameters,docs:{...(D=A.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(U=A.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var z,Y,H;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};const ae=["Default","TwoItems","Icons"];export{w as Default,v as Icons,A as TwoItems,ae as __namedExportsOrder,re as default};
