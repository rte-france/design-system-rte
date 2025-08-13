import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{b as A,a as $,c as Q,T as J}from"./keyboard-test.constants-DGN90FCQ.js";import{f as T,w as X,e as h,u as p}from"./index-DaW6VCyr.js";import{r as g}from"./index-G8LIXM5I.js";import{S as K,E as L,T as N,a as C,A as O}from"./keyboard.constants-Mj_rJc9R.js";import{u as Z}from"./useActiveKeyboard-DyE734RX.js";import{I}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ee=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",te=(e,t,s)=>{var o;let n=e<t.length-2?e+1:0;for(;(o=t[n])!=null&&o.classList.contains(s);)n<t.length-1?n++:n=0;t[n].focus()},ne=(e,t,s)=>{var o;let n=e>0?e-1:t.length-1;for(;(o=t[n])!=null&&o.classList.contains(s);)n>0?n--:n=t.length-1;t[n].focus()},se=(e,t)=>{const s=e<t.length-1?e+1:0;t[s].focus()},oe=(e,t)=>{const s=e>0?e-1:t.length-1;t[s].focus()},ae="_segment_21860_3",m={"segmented-control":"_segmented-control_21860_3","segment-selected-indicator":"_segment-selected-indicator_21860_14","segment-container":"_segment-container_21860_23",segment:ae,"segment-content":"_segment-content_21860_75","segment-label":"_segment-label_21860_82","selected-icon":"_selected-icon_21860_95"},re=(e,t,s)=>{const[n,o]=g.useState({left:0,width:0}),c=g.useCallback(()=>{if(!e.current)return;const d=t.findIndex(r=>r.id===s);if(d<0)return;const u=e.current.querySelectorAll(`.${m.segment}`)[d];u&&o({left:u.offsetLeft,width:u.offsetWidth})},[s,t,e]);return g.useEffect(()=>(c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[s,t,e,c]),n},ie=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],ce=ie.map(e=>e+":not([disabled]):not([aria-hidden])").join(","),le=()=>{const[e,t]=g.useState([]);return g.useEffect(()=>{const s=()=>{t(Array.from(document.querySelectorAll(ce)))};s();const n=new MutationObserver(s);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},de=e=>{g.useEffect(()=>{var c;const t=e.current;if(!t)return;let s="";const n=d=>{s=d.key};window.addEventListener("keydown",n);const o=()=>{var d,u;if(s==="Tab"){const r=(d=t.parentElement)==null?void 0:d.parentElement,a=r==null?void 0:r.querySelector("[data-selected='true']");a?a.focus():(u=Array.from((r==null?void 0:r.querySelectorAll("."+m.segment))??[])[0])==null||u.focus()}};return(c=e.current)==null||c.addEventListener("focus",o),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",o)}},[e])},B=({id:e,icon:t,label:s,position:n,isSelected:o,onClick:c,...d})=>{const u=g.useRef(null),r=le();de(u);const a=l=>{var y,f;if(l.key===K||l.key===L)S==null||S(l);else if(l.key===C||l.key===O){const k=(f=(y=u.current)==null?void 0:y.parentElement)==null?void 0:f.parentElement,R=Array.from((k==null?void 0:k.querySelectorAll("."+m.segment))??[]),H=R.findIndex(z=>z===document.activeElement);l.key===O?se(H,R):l.key===C&&oe(H,R)}},E=l=>{if(l.key===N){const y=document.activeElement,f=Array.from(r).indexOf(y);l.shiftKey?ne(f,r,m.segment):te(f,r,m.segment)}},{onBlur:x,onKeyDown:F,onKeyUp:U}=Z({onKeyUp:a,onKeyDown:E},{id:e,interactiveKeyCodes:[K,L,N,C,O]}),S=l=>{l.preventDefault(),l.stopPropagation(),c==null||c(l)};return i.jsx("div",{className:m["segment-container"],"data-position":n,...d,children:i.jsxs("div",{id:e,role:"radio","aria-checked":o,"aria-label":s,className:m.segment,"data-segment-type":t?"icon":"label","data-selected":o,onKeyDown:F,onKeyUp:U,onBlur:x,onClick:S,tabIndex:0,ref:u,children:[o&&i.jsx(I,{name:"check-small",appearance:"filled",size:24,className:m["selected-icon"]}),i.jsx("div",{className:m["segment-content"],children:t?i.jsx(I,{name:t,appearance:o?"filled":"outlined",size:24}):i.jsx("span",{className:m["segment-label"],children:s})})]})})};B.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},parentRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLDivElement | null>"},description:""}},composes:["CoreSegmentProps","Omit"]};const v=g.forwardRef(({options:e,onChange:t,selectedSegment:s,...n},o)=>{const c=g.useRef(null),d=re(c,e,s),u=a=>{const x=a.currentTarget.getAttribute("id")||"";t(x)};if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),null;const r=e.filter(a=>a.icon).length;return r>0&&r<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),null):e.every(a=>!a.label||!a.id)?(console.warn("SegmentedControl: Each option must have a 'label' and 'id'."),null):i.jsxs("div",{ref:a=>{c.current=a,typeof o=="function"?o(a):o&&(o.current=a)},role:"radiogroup",className:m["segmented-control"],...n,children:[i.jsx("span",{className:m["segment-selected-indicator"],style:{left:d.left,width:d.width}}),e.map((a,E)=>i.jsx(B,{position:ee(E,e.length),onClick:u,isSelected:s===a.id,...a},`${a.id}-${E}`))]})});v.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const ye={title:"SegmentedControl",component:v,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:T()}},b={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:T()},render:e=>{const[t,s]=g.useState("option1"),n=o=>{s(o)};return i.jsx("div",{style:{width:"420px"},children:i.jsx(v,{options:e.options,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[s,n,o]=X(t).getAllByRole("radio");h(s).toHaveAttribute("aria-checked","true"),await p.click(n),h(n).toHaveAttribute("aria-checked","true"),await p.click(o),h(o).toHaveAttribute("aria-checked","true"),await p.click(s),await p.tab(),await p.keyboard(A),h(n).toHaveFocus(),await p.keyboard($),h(n).toHaveAttribute("aria-checked","true"),await p.keyboard(Q),await p.keyboard(J),h(s).toHaveAttribute("aria-checked","true"),await p.keyboard(A),await p.keyboard(A),h(o).toHaveFocus()}},w={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:T()},render:e=>{const[t,s]=g.useState("option1"),n=o=>{s(o)};return i.jsx("div",{style:{width:"420px"},children:i.jsx(v,{options:e.options,onChange:n,selectedSegment:t})})}},_={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:T()},render:e=>{const[t,s]=g.useState("agenda"),n=o=>{s(o)};return i.jsx("div",{style:{width:"420px"},children:i.jsx(v,{options:e.options,onChange:n,selectedSegment:t})})}};var j,M,D;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      width: "420px"
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
}`,...(D=(M=b.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var Y,G,P;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
      width: "420px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(P=(G=w.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var W,q,V;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      width: "420px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(V=(q=_.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const be=["Default","TwoOptions","Icons"];export{b as Default,_ as Icons,w as TwoOptions,be as __namedExportsOrder,ye as default};
