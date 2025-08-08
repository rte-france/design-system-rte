import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{b as k,a as $,c as Q,T as J}from"./keyboard-test.constants-DGN90FCQ.js";import{f as _,w as X,e as E,u}from"./index-DaW6VCyr.js";import{r as m}from"./index-G8LIXM5I.js";import{S as H,E as K,T as N,a as A,A as O}from"./keyboard.constants-Mj_rJc9R.js";import{u as Z}from"./useActiveKeyboard-DyE734RX.js";import{I as L}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ee=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",te=(e,t,s)=>{var o;let n=e<t.length-2?e+1:0;for(;(o=t[n])!=null&&o.classList.contains(s);)n<t.length-1?n++:n=0;t[n].focus()},ne=(e,t,s)=>{var o;let n=e>0?e-1:t.length-1;for(;(o=t[n])!=null&&o.classList.contains(s);)n>0?n--:n=t.length-1;t[n].focus()},se=(e,t)=>{const s=e<t.length-1?e+1:0;t[s].focus()},oe=(e,t)=>{const s=e>0?e-1:t.length-1;t[s].focus()},ae="_segment_21860_3",l={"segmented-control":"_segmented-control_21860_3","segment-selected-indicator":"_segment-selected-indicator_21860_14","segment-container":"_segment-container_21860_23",segment:ae,"segment-content":"_segment-content_21860_75","segment-label":"_segment-label_21860_82","selected-icon":"_selected-icon_21860_95"},re=(e,t,s)=>{const[n,o]=m.useState({left:0,width:0});return m.useEffect(()=>{function c(){if(!e.current)return;const d=t.findIndex(p=>p.id===s);if(d===-1)return;const a=e.current.querySelectorAll(`.${l.segment}`)[d];a&&o({left:a.offsetLeft,width:a.offsetWidth})}return c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[s,t,e]),n},ie=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],ce=ie.map(e=>e+":not([disabled]):not([aria-hidden])").join(","),de=()=>{const[e,t]=m.useState([]);return m.useEffect(()=>{const s=()=>{t(Array.from(document.querySelectorAll(ce)))};s();const n=new MutationObserver(s);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},le=e=>{m.useEffect(()=>{var c;const t=e.current;if(!t)return;let s="";const n=d=>{s=d.key};window.addEventListener("keydown",n);const o=()=>{var d,g;if(s==="Tab"){const a=(d=t.parentElement)==null?void 0:d.parentElement;(g=Array.from((a==null?void 0:a.querySelectorAll("."+l.segment))??[])[0])==null||g.focus()}};return(c=e.current)==null||c.addEventListener("focus",o),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",o)}},[e])},q=({id:e,icon:t,label:s,position:n,isSelected:o,onClick:c,...d})=>{const g=m.useRef(null),a=de();le(g);const p=i=>{var v,f;if(i.stopPropagation(),i.key===H||i.key===K)S==null||S(i);else if(i.key===A||i.key===O){const x=(f=(v=g.current)==null?void 0:v.parentElement)==null?void 0:f.parentElement,R=Array.from((x==null?void 0:x.querySelectorAll("."+l.segment))??[]),C=R.findIndex(z=>z===document.activeElement);i.key===O?se(C,R):i.key===A&&oe(C,R)}},T=i=>{if(i.key===N){const v=document.activeElement,f=Array.from(a).indexOf(v);i.shiftKey?ne(f,a,l.segment):te(f,a,l.segment)}},{onBlur:V,onKeyDown:B,onKeyUp:U}=Z({onKeyUp:p,onKeyDown:T},{id:e,interactiveKeyCodes:[H,K,N,A,O]}),S=i=>{i.stopPropagation(),c==null||c(i)};return r.jsx("div",{className:l["segment-container"],"data-position":n,...d,children:r.jsxs("div",{id:e,role:"radio","aria-checked":o,"aria-label":s,className:l.segment,"data-segment-type":t?"icon":"label","data-selected":o,onKeyDown:B,onKeyUp:U,onBlur:V,onClick:S,tabIndex:0,ref:g,children:[o&&r.jsx(L,{name:"check-small",appearance:"filled",size:24,className:l["selected-icon"]}),r.jsx("div",{className:l["segment-content"],children:t?r.jsx(L,{name:t,appearance:o?"filled":"outlined",size:24}):r.jsx("span",{className:l["segment-label"],children:s})})]})})};q.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},parentRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLDivElement | null>"},description:""}},composes:["CoreSegmentProps","Omit"]};const h=m.forwardRef(({options:e,onChange:t,selectedSegment:s,...n},o)=>{const c=m.useRef(null),d=re(c,e,s),g=a=>{a.stopPropagation();const T=a.currentTarget.getAttribute("id")||"";t(T)};return e.length<=1||e.length>3?(console.warn("SegmentedControl: 'options' should have 2 or 3 items."),null):r.jsxs("div",{ref:a=>{c.current=a,typeof o=="function"?o(a):o&&(o.current=a)},role:"radiogroup",className:l["segmented-control"],...n,children:[r.jsx("span",{className:l["segment-selected-indicator"],style:{left:d.left,width:d.width}}),e.map((a,p)=>r.jsx(q,{position:ee(p,e.length),onClick:g,isSelected:s===a.id,...a},`${a.id}-${p}`))]})});h.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const ye={title:"SegmentedControl",component:h,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:_()}},y={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:_()},render:e=>{const[t,s]=m.useState("option1"),n=o=>{s(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(h,{options:e.options,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[s,n,o]=X(t).getAllByRole("radio");E(s).toHaveAttribute("aria-checked","true"),await u.click(n),E(n).toHaveAttribute("aria-checked","true"),await u.click(o),E(o).toHaveAttribute("aria-checked","true"),await u.click(s),await u.tab(),await u.keyboard(k),E(n).toHaveFocus(),await u.keyboard($),E(n).toHaveAttribute("aria-checked","true"),await u.keyboard(Q),await u.keyboard(J),E(s).toHaveAttribute("aria-checked","true"),await u.keyboard(k),await u.keyboard(k),E(o).toHaveFocus()}},b={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:_()},render:e=>{const[t,s]=m.useState("option1"),n=o=>{s(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(h,{options:e.options,onChange:n,selectedSegment:t})})}},w={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:_()},render:e=>{const[t,s]=m.useState("agenda"),n=o=>{s(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(h,{options:e.options,onChange:n,selectedSegment:t})})}};var I,j,M;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      id: "option1"
    }, {
      label: "Option 2",
      id: "option2"
    }, {
      label: "Option 3",
      id: "option3"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "360px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const [firstSegment, secondSegment, thirdSegment] = within(canvas).getAllByRole("radio");
    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(secondSegment);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(thirdSegment);
    expect(thirdSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(firstSegment);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(secondSegment).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(thirdSegment).toHaveFocus();
  }
}`,...(M=(j=y.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var D,Y,G;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      id: "option1"
    }, {
      label: "Option 2",
      id: "option2"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "360px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(G=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var P,W,F;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "agenda",
      icon: "view-agenda",
      label: "Vue agenda"
    }, {
      id: "column",
      icon: "view-column",
      label: "Vue colonne"
    }, {
      id: "grid",
      icon: "view-grid",
      label: "Vue grille"
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
}`,...(F=(W=w.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const be=["Default","TwoOptions","Icons"];export{y as Default,w as Icons,b as TwoOptions,be as __namedExportsOrder,ye as default};
